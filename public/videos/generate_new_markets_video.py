#!/usr/bin/env python3
"""Generate talking-head videos for 5 new markets + Erie FAQ retry."""
import json
import os
import sys
import time
import urllib.request

sys.path.insert(0, "/Users/agents/.openclaw/workspace/skills/talking-head/scripts")
os.environ["FAL_KEY"] = open(os.path.expanduser("~/.config/fal/api_key")).read().strip()
import fal_client

AVATAR = "/Users/agents/.openclaw/workspace/assets/video-avatar.png"
VIDEO_DIR = "/Users/agents/selltousahome/public/videos"

def generate_video(image_path, audio_path, output_path):
    image_url = fal_client.upload_file(image_path)
    audio_url = fal_client.upload_file(audio_path)
    print(f"  Uploaded files, submitting to Fal...", flush=True)
    result = fal_client.subscribe("veed/fabric-1.0", arguments={
        "image_url": image_url,
        "audio_url": audio_url,
        "resolution": "720p"
    }, with_logs=True)
    video_url = result["video"]["url"]
    urllib.request.urlretrieve(video_url, output_path)
    return output_path

def extract_poster(mp4, poster):
    import subprocess
    subprocess.run(["ffmpeg", "-i", mp4, "-ss", "00:00:02", "-frames:v", "1", "-y", poster],
                   capture_output=True)
    if os.path.exists(poster):
        kb = os.path.getsize(poster) / 1024
        if kb > 150:
            subprocess.run(["ffmpeg", "-i", poster, "-q:v", "8", "-y", poster + ".tmp"],
                           capture_output=True)
            if os.path.exists(poster + ".tmp"):
                os.replace(poster + ".tmp", poster)
                kb = os.path.getsize(poster) / 1024
        print(f"  ✓ Poster ({kb:.0f} KB)", flush=True)

# Load script names (defines order)
scripts = json.load(open(os.path.join(VIDEO_DIR, "new-market-scripts.json")))

# Also add Erie FAQ retry at the top
PRIORITY_FIRST = [("erie-pa-faq", os.path.join(VIDEO_DIR, "erie-pa-faq-audio.mp3"))]

# Full list: Erie FAQ first, then new markets in priority order
markets_priority = ["bethlehem-pa", "lancaster-pa", "york-pa", "wilmington-de", "youngstown-oh"]
ordered_names = [k for market in markets_priority for k in scripts.keys() if k.startswith(market)]

done = 0
failed = 0
skipped = 0

# Erie FAQ retry first
name = "erie-pa-faq"
mp4 = os.path.join(VIDEO_DIR, f"{name}.mp4")
audio = os.path.join(VIDEO_DIR, f"{name}-audio.mp3")
poster = os.path.join(VIDEO_DIR, f"{name}-poster.jpg")

if os.path.exists(mp4) and os.path.getsize(mp4) > 1000000:
    print(f"SKIP {name} ({os.path.getsize(mp4)//(1024*1024)} MB exists)", flush=True)
    skipped += 1
else:
    print(f"\n[{time.strftime('%H:%M:%S')}] GENERATING (RETRY): {name}", flush=True)
    if not os.path.exists(audio):
        print(f"  ✗ Audio missing: {audio}", flush=True)
        failed += 1
    else:
        start = time.time()
        try:
            generate_video(AVATAR, audio, mp4)
            elapsed = time.time() - start
            size_mb = os.path.getsize(mp4) / (1024*1024)
            print(f"  ✓ Video done in {elapsed:.0f}s ({size_mb:.1f} MB)", flush=True)
            extract_poster(mp4, poster)
            done += 1
        except Exception as e:
            print(f"  ✗ FAILED: {e}", flush=True)
            failed += 1

# New markets
for name in ordered_names:
    mp4 = os.path.join(VIDEO_DIR, f"{name}.mp4")
    audio = os.path.join(VIDEO_DIR, f"{name}-audio.mp3")
    poster = os.path.join(VIDEO_DIR, f"{name}-poster.jpg")

    if os.path.exists(mp4) and os.path.getsize(mp4) > 1000000:
        size_mb = os.path.getsize(mp4) / (1024*1024)
        print(f"SKIP {name} ({size_mb:.1f} MB exists)", flush=True)
        skipped += 1
        continue

    if not os.path.exists(audio) or os.path.getsize(audio) < 10000:
        print(f"SKIP {name} — audio not ready ({audio})", flush=True)
        skipped += 1
        continue

    print(f"\n[{time.strftime('%H:%M:%S')}] GENERATING: {name}", flush=True)
    start = time.time()
    try:
        generate_video(AVATAR, audio, mp4)
        elapsed = time.time() - start
        size_mb = os.path.getsize(mp4) / (1024*1024)
        print(f"  ✓ Video done in {elapsed:.0f}s ({size_mb:.1f} MB)", flush=True)
        extract_poster(mp4, poster)
        done += 1
    except Exception as e:
        print(f"  ✗ FAILED: {e}", flush=True)
        failed += 1
        time.sleep(5)

print(f"\n{'='*60}", flush=True)
print(f"VIDEO GENERATION COMPLETE: {done} done, {skipped} skipped, {failed} failed", flush=True)
