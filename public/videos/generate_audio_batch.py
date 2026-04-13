#!/usr/bin/env python3
"""Generate TTS audio for all Erie PA video scripts."""
import json
import os
import urllib.request
import time

VOICE_ID = "Ib97zM6uFBc71OWgj75I"
MODEL_ID = "eleven_turbo_v2_5"
SETTINGS = {"stability": 0.5, "similarity_boost": 0.75, "style": 0.3}
OUTPUT_DIR = "/Users/agents/selltousahome/public/videos"

def get_key():
    return open(os.path.expanduser("~/.config/elevenlabs/api_key")).read().strip()

def generate_audio(script, output_path):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    data = json.dumps({
        "text": script,
        "model_id": MODEL_ID,
        "voice_settings": SETTINGS
    }).encode()
    req = urllib.request.Request(url, data=data, headers={
        "xi-api-key": get_key(),
        "Content-Type": "application/json",
        "Accept": "audio/mpeg"
    })
    with urllib.request.urlopen(req) as resp:
        with open(output_path, 'wb') as f:
            f.write(resp.read())
    size_kb = os.path.getsize(output_path) / 1024
    print(f"  ✓ {os.path.basename(output_path)} ({size_kb:.0f} KB)")

scripts = json.load(open(os.path.join(OUTPUT_DIR, "erie-scripts.json")))

for name, script in scripts.items():
    audio_path = os.path.join(OUTPUT_DIR, f"{name}-audio.mp3")
    if os.path.exists(audio_path):
        print(f"SKIP {name} (audio exists)")
        continue
    print(f"Generating audio: {name}")
    generate_audio(script, audio_path)
    time.sleep(1)  # rate limit courtesy

print("\nAll audio files generated!")
