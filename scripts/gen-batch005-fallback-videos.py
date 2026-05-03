#!/usr/bin/env python3
"""Generate Batch005 fallback MP4s using verified Adam TTS audio + approved avatar + ffmpeg.
This avoids Fal/Fabric when Fabric queues/hangs. It creates simple branded talking-head fallback videos
consistent with the accepted prior-market caveat: verified Adam audio plus approved avatar ffmpeg assembly.
"""
import importlib.util
import os
import subprocess
import sys
from pathlib import Path

SOURCE = Path('/Users/agents/selltousahome/scripts/gen-batch005-landing-v2.py')
spec = importlib.util.spec_from_file_location('batch005_v2', SOURCE)
mod = importlib.util.module_from_spec(spec)
# Prevent argparse in imported script from seeing our args? The source parses at import time, so this direct import is unsafe.
# Instead exec only the top dictionary/function definitions up to parser.
text = SOURCE.read_text()
cut = text.index('parser = argparse.ArgumentParser()')
ns = {'__file__': str(SOURCE)}
exec(text[:cut], ns)

VIDEOS = ns['VIDEOS']
generate_audio = ns['generate_audio']
verify_mp4_has_audio = ns['verify_mp4_has_audio']
VOICE_ID = ns['VOICE_ID']
AVATAR = Path('/Users/agents/.openclaw/workspace/assets/video-avatar.png')
VIDEO_ROOT = Path('/Users/agents/selltousahome/public/videos')

# Tiny VTT fallback: one full-duration cue. Prior accepted pattern uses estimated captions pending human timing review.
def write_vtt(path: Path, duration: float, transcript: str):
    words = transcript.strip().replace('\n', ' ')
    # Keep cue concise enough for validators/humans; page transcript carries full text.
    cue = words[:900]
    end_h = int(duration // 3600)
    end_m = int((duration % 3600) // 60)
    end_s = duration % 60
    path.write_text(f"WEBVTT\n\n00:00:00.000 --> {end_h:02d}:{end_m:02d}:{end_s:06.3f}\n{cue}\n")


def duration_seconds(audio: Path) -> float:
    r = subprocess.run([
        'ffprobe','-v','error','-show_entries','format=duration','-of','default=noprint_wrappers=1:nokey=1',str(audio)
    ], capture_output=True, text=True, check=True)
    return float(r.stdout.strip())


def make_video(market: str, info: dict):
    out_dir = VIDEO_ROOT / market
    out_dir.mkdir(parents=True, exist_ok=True)
    audio = out_dir / 'landing-audio.mp3'
    mp4 = out_dir / 'landing.mp4'
    poster = out_dir / 'landing-poster.jpg'
    vtt = out_dir / 'landing-captions.vtt'

    if not audio.exists() or audio.stat().st_size < 5000:
        print(f'[{market}] generating Adam TTS audio ({VOICE_ID})', flush=True)
        generate_audio(info['script'], str(audio))
    else:
        print(f'[{market}] audio exists {audio.stat().st_size} bytes', flush=True)

    dur = duration_seconds(audio)
    print(f'[{market}] audio duration {dur:.2f}s', flush=True)

    # Build 720p MP4 with static approved avatar and Adam audio.
    subprocess.run([
        'ffmpeg','-y',
        '-loop','1','-framerate','30','-i',str(AVATAR),
        '-i',str(audio),
        '-vf','scale=720:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:color=#0f172a,format=yuv420p',
        '-c:v','libx264','-preset','veryfast','-tune','stillimage',
        '-c:a','aac','-b:a','128k','-shortest','-movflags','+faststart',
        str(mp4)
    ], check=True)

    subprocess.run([
        'ffmpeg','-y','-i',str(mp4),'-ss','00:00:02','-frames:v','1','-q:v','5',str(poster)
    ], check=True, capture_output=True)

    write_vtt(vtt, dur, info['transcript'])
    has_audio = verify_mp4_has_audio(str(mp4))
    return {
        'market': market,
        'audio': audio.stat().st_size,
        'duration': dur,
        'mp4': mp4.stat().st_size,
        'poster': poster.stat().st_size,
        'vtt': vtt.stat().st_size,
        'has_audio': has_audio,
    }

if __name__ == '__main__':
    results = []
    for key, info in VIDEOS.items():
        market, slug = key.split('/')
        assert slug == 'landing'
        results.append(make_video(market, info))
    print('\nSUMMARY')
    for r in results:
        print(r)
    if not all(r['has_audio'] and r['mp4'] > 500000 and r['poster'] > 1000 and r['vtt'] > 20 for r in results):
        sys.exit(1)
