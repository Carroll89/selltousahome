#!/usr/bin/env python3
"""Generate talking-head videos for all Erie PA audio files."""
import os
import sys
import subprocess
import time

GENERATE_SCRIPT = "/Users/agents/.openclaw/workspace/skills/talking-head/scripts/generate.py"
AVATAR = "/Users/agents/.openclaw/workspace/assets/video-avatar.png"
VIDEO_DIR = "/Users/agents/selltousahome/public/videos"
FAL_KEY = open(os.path.expanduser("~/.config/fal/api_key")).read().strip()

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

env = os.environ.copy()
env["FAL_KEY"] = FAL_KEY

for name in VIDEOS:
    mp4 = os.path.join(VIDEO_DIR, f"{name}.mp4")
    audio = os.path.join(VIDEO_DIR, f"{name}-audio.mp3")
    poster = os.path.join(VIDEO_DIR, f"{name}-poster.jpg")

    if os.path.exists(mp4):
        print(f"SKIP {name} (video exists)")
        continue

    if not os.path.exists(audio):
        print(f"ERROR {name}: audio not found at {audio}")
        continue

    print(f"\n{'='*60}")
    print(f"GENERATING VIDEO: {name}")
    print(f"{'='*60}")
    start = time.time()

    result = subprocess.run(
        ["python3", GENERATE_SCRIPT, "--image", AVATAR, "--audio", audio, "--output", mp4],
        env=env, capture_output=True, text=True, timeout=600
    )
    
    if result.returncode != 0:
        print(f"FAILED {name}: {result.stderr}")
        continue

    print(result.stdout)
    elapsed = time.time() - start
    size_mb = os.path.getsize(mp4) / (1024 * 1024)
    print(f"✓ Video done in {elapsed:.0f}s ({size_mb:.1f} MB)")

    # Extract poster
    subprocess.run(
        ["ffmpeg", "-i", mp4, "-ss", "00:00:02", "-frames:v", "1", "-y", poster],
        capture_output=True
    )
    if os.path.exists(poster):
        poster_kb = os.path.getsize(poster) / 1024
        print(f"✓ Poster ({poster_kb:.0f} KB)")
        # Compress poster if > 150KB
        if poster_kb > 150:
            subprocess.run(
                ["ffmpeg", "-i", poster, "-q:v", "8", "-y", poster + ".tmp.jpg"],
                capture_output=True
            )
            if os.path.exists(poster + ".tmp.jpg"):
                os.replace(poster + ".tmp.jpg", poster)
                poster_kb = os.path.getsize(poster) / 1024
                print(f"  Compressed poster to {poster_kb:.0f} KB")

print("\n\nALL DONE!")
print("="*60)
for name in VIDEOS:
    mp4 = os.path.join(VIDEO_DIR, f"{name}.mp4")
    if os.path.exists(mp4):
        size_mb = os.path.getsize(mp4) / (1024*1024)
        print(f"✓ {name}.mp4 ({size_mb:.1f} MB)")
    else:
        print(f"✗ {name}.mp4 MISSING")
