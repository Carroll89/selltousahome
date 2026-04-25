#!/usr/bin/env python3
"""
Springfield IL — Remaining 5 Talking-Head Videos
(tenant-occupied audio already exists; code-violations, fire-damage,
 market-report, faq, neighborhoods need full audio+video)
Phone: 888-274-5006 | Voice: Eric (cjVigY5qzO86Huf0OWal)
"""

import json
import os
import subprocess
import sys
import urllib.request

VOICE_ID = "cjVigY5qzO86Huf0OWal"
MODEL_ID = "eleven_turbo_v2_5"
AVATAR = "/Users/agents/.openclaw/workspace/assets/video-avatar.png"
WORKSPACE_AUDIO = "/Users/agents/.openclaw/workspace/public/videos/springfield-il"
OUTPUT_DIR = "/Users/agents/selltousahome/public/videos/springfield-il"
PHONE = "888-274-5006"

VIDEOS = [
    {
        "slug": "tenant-occupied",
        "audio_exists": f"{WORKSPACE_AUDIO}/tenant-occupied-audio.mp3",
        "script": None,
    },
    {
        "slug": "code-violations",
        "audio_exists": None,
        "script": f"""Does your Springfield property have code violations? Don't let that stop you from selling.
City of Springfield code enforcement can feel like a never-ending list of expensive repairs.
But at USA Home Buyers, we buy properties with open violations — as-is, for cash.
We don't need you to fix a thing. We'll assess the property in its current state and make you a fair offer.
Whether it's structural issues, electrical problems, or a condemned notice — we've seen it all.
Stop stressing about the violations and start moving forward.
Call us at {PHONE} for a free, no-obligation cash offer on your Springfield property.""",
    },
    {
        "slug": "fire-damage",
        "audio_exists": None,
        "script": f"""Did your Springfield home suffer fire damage? We're here to help.
Dealing with a fire-damaged property is emotionally and financially exhausting.
Insurance claims, contractor bids, city inspections — it adds up fast.
USA Home Buyers purchases fire-damaged homes throughout Springfield and Sangamon County, exactly as they are.
We make a cash offer based on current condition — no repairs, no cleanup required.
You can sell quickly and use the proceeds to start fresh.
If you have a fire-damaged property in Springfield and want a fast, fair exit — call us at {PHONE}.
We'll give you an honest offer and close on your schedule.""",
    },
    {
        "slug": "market-report",
        "audio_exists": None,
        "script": f"""Here's what's happening in the Springfield, Illinois real estate market right now.
As of early 2026, Springfield is one of the hottest small markets in the country — ranked number ten nationally by Realtor dot com.
The median sale price hit $187,000 in March 2026, up 23 percent year-over-year.
Homes are selling in just 27 days on average — and the market is rated Very Competitive.
If you're thinking about selling in Springfield or anywhere in Sangamon County, this is a strong time to act.
USA Home Buyers offers cash for homes in any condition — you capture the value without the hassle of listing.
Call {PHONE} to get your free cash offer today.""",
    },
    {
        "slug": "faq",
        "audio_exists": None,
        "script": f"""Have questions about selling your house fast in Springfield, Illinois? We've got answers.
Springfield sellers often ask: how does transfer tax work? Illinois state transfer tax is 75 cents per 500 dollars, paid by the seller — and the City of Springfield charges zero municipal transfer tax.
Can I sell with code violations? Yes. We buy as-is.
What if my house is in probate? We work with executors and estate attorneys throughout Sangamon County.
How fast can you close? In some cases, seven days.
Do I need to make repairs? Not one.
At USA Home Buyers, we've helped hundreds of homeowners in Springfield sell quickly and without stress.
Call {PHONE} today — your question answered, your offer in 24 hours.""",
    },
    {
        "slug": "neighborhoods",
        "audio_exists": None,
        "script": f"""Whether you're in Enos Park, Harvard Park, the West Side, Aristocracy Hill, or anywhere in Sangamon County — USA Home Buyers will make you a cash offer.
Springfield is a city of distinct neighborhoods, each with its own character and price range.
Enos Park's 1900s Victorians. Harvard Park bungalows. Chatham and Rochester suburbs. Old Aristocracy Hill mansions.
We buy in all of them — any condition, any situation.
You don't need to renovate, repaint, or even clean out.
We've bought homes on North 5th Street, Walnut Street, MacArthur Boulevard, and everywhere in between.
Ready for a cash offer on your Springfield property? Call {PHONE}.
We're local, we're fast, and we'll close on your timeline.""",
    },
]


def get_elevenlabs_key():
    path = os.path.expanduser("~/.config/elevenlabs/api_key")
    return open(path).read().strip()


def generate_audio(script, audio_path):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    data = json.dumps({
        "text": script,
        "model_id": MODEL_ID,
        "voice_settings": {"stability": 0.5, "similarity_boost": 0.75, "style": 0.3}
    }).encode()
    req = urllib.request.Request(url, data=data, headers={
        "xi-api-key": get_elevenlabs_key(),
        "Content-Type": "application/json",
        "Accept": "audio/mpeg"
    })
    with urllib.request.urlopen(req) as resp:
        with open(audio_path, 'wb') as f:
            f.write(resp.read())
    print(f"    Audio: {os.path.getsize(audio_path) // 1024} KB")


def generate_video(audio_path, video_path):
    import fal_client
    image_url = fal_client.upload_file(AVATAR)
    audio_url = fal_client.upload_file(audio_path)
    result = fal_client.run("veed/fabric-1.0", arguments={
        "image_url": image_url,
        "audio_url": audio_url,
        "resolution": "720p"
    })
    video_url = result["video"]["url"]
    urllib.request.urlretrieve(video_url, video_path)
    print(f"    Video: {os.path.getsize(video_path) // 1024} KB")


def extract_poster(video_path, poster_path):
    subprocess.run([
        "ffmpeg", "-y", "-i", video_path,
        "-vframes", "1", "-q:v", "5", poster_path
    ], capture_output=True)
    if os.path.exists(poster_path):
        size = os.path.getsize(poster_path)
        if size > 307200:
            subprocess.run([
                "ffmpeg", "-y", "-i", poster_path,
                "-q:v", "8", poster_path + ".tmp.jpg"
            ], capture_output=True)
            os.rename(poster_path + ".tmp.jpg", poster_path)
        print(f"    Poster: {os.path.getsize(poster_path) // 1024} KB")


# Support --batch flag: --batch 1  = first N videos, --batch 2 = skip first N
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--batch", type=int, default=0, help="Batch number (0=all, 1=first 2, 2=next 2, 3=last 2)")
args = parser.parse_args()

if args.batch == 1:
    batch = VIDEOS[0:2]
elif args.batch == 2:
    batch = VIDEOS[2:4]
elif args.batch == 3:
    batch = VIDEOS[4:6]
else:
    batch = VIDEOS

completed = []
failed = []

for i, v in enumerate(batch):
    slug = v["slug"]
    print(f"\n[{slug}] Starting...")

    audio_path = v["audio_exists"] or os.path.join(OUTPUT_DIR, f"{slug}-audio.mp3")
    video_path = os.path.join(OUTPUT_DIR, f"{slug}.mp4")
    poster_path = os.path.join(OUTPUT_DIR, f"{slug}-poster.jpg")

    try:
        if not v["audio_exists"]:
            print(f"    Generating TTS audio...")
            generate_audio(v["script"], audio_path)
        else:
            print(f"    Using existing audio: {audio_path}")

        print(f"    Generating video (Fal VEED Fabric 1.0)...")
        generate_video(audio_path, video_path)

        print(f"    Extracting poster frame...")
        extract_poster(video_path, poster_path)

        size = os.path.getsize(video_path)
        print(f"    ✓ {slug} done ({size // (1024*1024)} MB)")
        completed.append(slug)

    except Exception as e:
        print(f"    ✗ {slug} FAILED: {e}")
        failed.append((slug, str(e)))

print(f"\n\n=== BATCH SUMMARY ===")
print(f"Completed ({len(completed)}): {', '.join(completed)}")
if failed:
    print(f"Failed ({len(failed)}):")
    for s, err in failed:
        print(f"  {s}: {err}")
