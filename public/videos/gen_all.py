#!/usr/bin/env python3
"""Generate all remaining Erie PA talking-head videos. Robust timeouts."""
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

VIDEOS = [
    "erie-pa-inherited-property",
    "erie-pa-foreclosure",
    "erie-pa-divorce-sale",
    "erie-pa-probate",
    "erie-pa-tenant-occupied",
    "erie-pa-code-violations",
    "erie-pa-fire-damage",
    "erie-pa-faq",
]

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

for name in VIDEOS:
    mp4 = os.path.join(VIDEO_DIR, f"{name}.mp4")
    audio = os.path.join(VIDEO_DIR, f"{name}-audio.mp3")
    poster = os.path.join(VIDEO_DIR, f"{name}-poster.jpg")

    if os.path.exists(mp4) and os.path.getsize(mp4) > 1000000:
        size_mb = os.path.getsize(mp4) / (1024*1024)
        print(f"SKIP {name} ({size_mb:.1f} MB exists)", flush=True)
        continue

    print(f"\n[{time.strftime('%H:%M:%S')}] GENERATING: {name}", flush=True)
    start = time.time()
    try:
        generate_video(AVATAR, audio, mp4)
        elapsed = time.time() - start
        size_mb = os.path.getsize(mp4) / (1024*1024)
        print(f"  ✓ Video done in {elapsed:.0f}s ({size_mb:.1f} MB)", flush=True)
        extract_poster(mp4, poster)
    except Exception as e:
        print(f"  ✗ FAILED: {e}", flush=True)

print(f"\n\n{'='*60}", flush=True)
print("FINAL STATUS:", flush=True)
for name in ["erie-pa-market-report"] + VIDEOS:
    mp4 = os.path.join(VIDEO_DIR, f"{name}.mp4")
    poster = os.path.join(VIDEO_DIR, f"{name}-poster.jpg")
    if os.path.exists(mp4):
        size_mb = os.path.getsize(mp4) / (1024*1024)
        has_poster = "✓" if os.path.exists(poster) else "✗"
        print(f"  ✓ {name}.mp4 ({size_mb:.1f} MB) poster:{has_poster}", flush=True)
    else:
        print(f"  ✗ {name}.mp4 MISSING", flush=True)
print("DONE", flush=True)
