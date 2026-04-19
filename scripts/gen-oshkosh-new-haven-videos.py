#!/usr/bin/env python3
"""
Generate 20 talking-head situation videos for Oshkosh WI + New Haven CT.
Voice: Adam - Confident (Ib97zM6uFBc71OWgj75I) | Model: eleven_turbo_v2_5
Video: VEED Fabric 1.0 via Fal at 720p
Avatar: /Users/agents/.openclaw/workspace/assets/video-avatar.png
"""

import json
import os
import subprocess
import sys
import time
import urllib.request

sys.path.insert(0, "/Users/agents/.openclaw/workspace/skills/talking-head/scripts")
os.environ["FAL_KEY"] = open(os.path.expanduser("~/.config/fal/api_key")).read().strip()
import fal_client

VOICE_ID = "Ib97zM6uFBc71OWgj75I"  # Adam - Confident, Clear and Direct
MODEL_ID = "eleven_turbo_v2_5"
VOICE_SETTINGS = {"stability": 0.5, "similarity_boost": 0.75, "style": 0.3}
AVATAR = "/Users/agents/.openclaw/workspace/assets/video-avatar.png"
VIDEO_ROOT = "/Users/agents/selltousahome/public/videos"
PHONE = "888-440-5250"

VIDEOS = {
    # ── OSHKOSH WI ──────────────────────────────────────────────────────────
    "oshkosh-wi/code-violations": {
        "title": "Sell a House With Code Violations in Oshkosh WI",
        "subtitle": "Open violations, failed inspections — we buy as-is in Winnebago County",
        "script": f"""Got code violations on your Oshkosh property? Don't let the City of Oshkosh violation notices stop you from selling.
At USA Home Buyers, we purchase properties with open violations exactly as they are — no repairs, no permits pulled by you.
Whether it's structural issues, electrical problems, or a condemnation notice — we've handled it all.
We make a fair cash offer and close on your schedule.
Call us at {PHONE} for a free, no-obligation offer today.""",
        "transcript": f"Got code violations on your Oshkosh property? Don't let the violation notices stop you. At USA Home Buyers, we purchase properties with open violations exactly as they are — no repairs, no permits. We handle it all after closing. Cash offer in 24 hours. Call {PHONE}.",
    },
    "oshkosh-wi/divorce-sale": {
        "title": "Selling a House During Divorce in Oshkosh WI",
        "subtitle": "One offer, one closing, clean split of proceeds in Winnebago County",
        "script": f"""Going through a divorce in Oshkosh or Winnebago County and need to sell the house?
We make it clean and fast. One cash offer, both parties sign, we close in 7 to 14 days.
No agents, no open houses, no months of back-and-forth.
The proceeds are split at closing exactly as your agreement says.
Ready to move forward? Call USA Home Buyers at {PHONE}.""",
        "transcript": f"Going through a divorce in Oshkosh and need to sell the house? One cash offer, both parties sign, we close in 7 to 14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call {PHONE}.",
    },
    "oshkosh-wi/faq": {
        "title": "Oshkosh WI Home Selling FAQ",
        "subtitle": "Foreclosure timelines, probate, code violations, closing speed — answered",
        "script": f"""Have questions about selling your house fast in Oshkosh, Wisconsin? We've got answers.
Wisconsin is a judicial foreclosure state — you have a statutory redemption period under Chapter 846.
Inherited property requires Winnebago County probate — no shortcuts for real estate.
Can I sell with code violations? Yes, we buy as-is.
Tenant-occupied? We buy those too.
How fast can you close? Seven days in many cases.
Call {PHONE} — your question answered, your offer in 24 hours.""",
        "transcript": f"Questions about selling in Oshkosh WI? Wisconsin judicial foreclosure gives you a redemption period. Inherited property requires Winnebago County probate. We buy with code violations, tenant-occupied, any condition. Close in as little as 7 days. Call {PHONE}.",
    },
    "oshkosh-wi/fire-damage": {
        "title": "Sell a Fire-Damaged House in Oshkosh WI",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in Winnebago County",
        "script": f"""Did your Oshkosh property suffer fire damage? You don't have to restore it.
At USA Home Buyers, we purchase fire-damaged homes throughout Oshkosh and Winnebago County exactly as they stand.
No insurance runaround, no contractor bids, no city inspection delays.
We assess the property in its current condition and make a fair cash offer.
Want a fast exit on your fire-damaged Oshkosh home? Call {PHONE} today.""",
        "transcript": f"Fire damage on your Oshkosh property? You don't have to restore it. USA Home Buyers purchases fire-damaged homes in Winnebago County as-is. No contractor bids, no delays. Fair cash offer based on current condition. Call {PHONE}.",
    },
    "oshkosh-wi/foreclosure": {
        "title": "Facing Foreclosure in Oshkosh WI?",
        "subtitle": "Sell before the sheriff's sale — protect your equity and credit in Winnebago County",
        "script": f"""Facing foreclosure in Oshkosh or Winnebago County? Time is critical.
Wisconsin is a judicial foreclosure state under Chapter 846 — but once a judgment is entered, the redemption clock starts.
USA Home Buyers can close in as few as 7 days.
A fast cash sale stops the foreclosure process, satisfies the mortgage, and protects your credit.
Don't wait until the sheriff's sale. Call {PHONE} right now for a free, confidential consultation.""",
        "transcript": f"Facing foreclosure in Oshkosh? Wisconsin gives you a redemption period under Chapter 846, but don't wait. USA Home Buyers closes in 7 days, stops the process, and protects your credit. Call {PHONE} right now.",
    },
    "oshkosh-wi/inherited-property": {
        "title": "Sell Inherited House in Oshkosh WI",
        "subtitle": "We work with Winnebago County probate timelines — as-is, any condition",
        "script": f"""Did you inherit a property in Oshkosh or Winnebago County, Wisconsin?
At USA Home Buyers, we specialize in estate sales and work directly around Wisconsin probate timelines.
We buy as-is — brick bungalows, Lake Winnebago Victorians, mid-century ranches — no repairs, no cleanout required.
Written cash offer in 24 hours. We close after the court grants authority.
Call {PHONE} today.""",
        "transcript": f"Inherit a property in Oshkosh or Winnebago County? USA Home Buyers specializes in estate sales — we work with Wisconsin probate timelines. Buy as-is, any condition. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "oshkosh-wi/market-report": {
        "title": "Oshkosh WI Real Estate Market Report 2026",
        "subtitle": "Fox Valley affordability, Lake Winnebago waterfront, steady appreciation",
        "script": f"""Here's a quick look at the Oshkosh, Wisconsin real estate market in 2026.
Oshkosh sits on Lake Winnebago — Wisconsin's largest inland lake — giving it a distinct waterfront real estate edge.
Home values have appreciated steadily as Fox Valley buyers discover Oshkosh's affordability compared to the Milwaukee metro.
The Oshkosh Corporation headquarters and growing manufacturing sector drive consistent housing demand.
If you're thinking about selling in Oshkosh or Winnebago County, call USA Home Buyers at {PHONE} for a cash offer in 24 hours.""",
        "transcript": f"The Oshkosh WI market in 2026 — steady appreciation, Lake Winnebago waterfront appeal, Fox Valley affordability. Strong manufacturing employment base. If you're thinking about selling, USA Home Buyers gives you a cash offer in 24 hours. Call {PHONE}.",
    },
    "oshkosh-wi/neighborhoods": {
        "title": "Oshkosh WI Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Lake Shore to Merritt to Algoma — any neighborhood, any condition",
        "script": f"""Whether you're in the Lake Shore district, Merritt, Algoma, Fair Acres, Westbrook, or anywhere in Oshkosh and Winnebago County — USA Home Buyers will buy your house for cash.
We purchase in every neighborhood: brick bungalows near the Oshkosh Corporation campus, Victorian lakefront homes on Lake Winnebago, ranch homes in Westbrook.
Any condition, any situation. No repairs, no cleanout.
Ready for a cash offer? Call {PHONE}.""",
        "transcript": f"Lake Shore, Merritt, Algoma, Fair Acres — USA Home Buyers buys in every Oshkosh neighborhood. Brick bungalows, lakefront Victorians, ranch homes — any condition, any situation. Cash offer in 24 hours. Call {PHONE}.",
    },
    "oshkosh-wi/probate": {
        "title": "Selling Probate Property in Oshkosh WI",
        "subtitle": "Working with personal representatives and Winnebago County Circuit Court",
        "script": f"""Is a property in Oshkosh tied up in Wisconsin probate?
We work directly with personal representatives and estate attorneys throughout Winnebago County.
Whether your estate is in informal probate under Chapter 856 or formal proceedings, we can move fast once the court grants authority.
We buy as-is — no repairs, no cleanout.
Written cash offer in 24 hours. Ready when you are.
Call USA Home Buyers at {PHONE}.""",
        "transcript": f"Oshkosh property in Wisconsin probate? USA Home Buyers works with personal representatives and estate attorneys in Winnebago County. We buy as-is once the court grants authority. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "oshkosh-wi/tenant-occupied": {
        "title": "Sell a Rental Property in Oshkosh WI",
        "subtitle": "Done with landlording? We buy tenant-occupied homes as-is in Winnebago County",
        "script": f"""Done being a landlord in Oshkosh? Tired of managing rental properties in Winnebago County?
USA Home Buyers purchases tenant-occupied homes exactly as they are.
You don't need to evict anyone or wait for a lease to expire.
We handle everything after closing.
Ready to exit your Oshkosh rental portfolio? Call {PHONE} for a fast, fair cash offer.""",
        "transcript": f"Done being a landlord in Oshkosh? USA Home Buyers buys tenant-occupied properties — no eviction needed, no waiting for leases. We handle everything after closing. Call {PHONE} for a fast cash offer.",
    },

    # ── NEW HAVEN CT ─────────────────────────────────────────────────────────
    "new-haven-ct/code-violations": {
        "title": "Sell a House With Code Violations in New Haven CT",
        "subtitle": "Open violations, condemnation notices — we buy as-is in New Haven County",
        "script": f"""Got code violations on your New Haven property? New Haven code enforcement orders can feel impossible to resolve.
At USA Home Buyers, we purchase properties with open violations, failed inspections, and condemnation notices — exactly as they are.
No repairs, no permits, no delays on your end.
We assess the property as-is, make a fair cash offer, and close on your schedule.
Call {PHONE} today for a free, no-obligation offer.""",
        "transcript": f"Code violations on your New Haven property? USA Home Buyers purchases properties with open violations and condemnation notices as-is. No repairs, no permits. Fair cash offer and fast close. Call {PHONE}.",
    },
    "new-haven-ct/divorce-sale": {
        "title": "Selling a House During Divorce in New Haven CT",
        "subtitle": "One offer, one closing, clean split of proceeds in New Haven County",
        "script": f"""Going through a divorce in New Haven or New Haven County and need to sell the house fast?
We make it simple. One cash offer, both parties sign, we close in 7 to 14 days.
No open houses, no agents, no months of complicated negotiations.
The proceeds are split at closing exactly per your agreement.
Call USA Home Buyers at {PHONE} to get started today.""",
        "transcript": f"Divorce in New Haven and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call {PHONE}.",
    },
    "new-haven-ct/faq": {
        "title": "New Haven CT Home Selling FAQ",
        "subtitle": "Transfer tax, probate, code violations, closing speed — answered",
        "script": f"""Have questions about selling your house fast in New Haven, Connecticut?
Connecticut's real estate transfer tax is among the highest in the country — 0.75 percent on most residential sales.
Inherited property requires New Haven Probate Court approval at 200 Orange Street.
Can I sell with code violations? Yes, we buy as-is.
Do you buy in Fair Haven and The Hill? Absolutely.
How fast can you close? Seven days in many cases.
Call {PHONE} — your question answered, your cash offer in 24 hours.""",
        "transcript": f"Questions about selling in New Haven CT? Connecticut transfer tax is 0.75% on most sales. Inherited property needs Probate Court approval. We buy with code violations, any neighborhood including Fair Haven and The Hill. Close in 7 days. Call {PHONE}.",
    },
    "new-haven-ct/fire-damage": {
        "title": "Sell a Fire-Damaged House in New Haven CT",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in New Haven County",
        "script": f"""Did your New Haven property suffer fire damage? You don't have to restore it.
USA Home Buyers purchases fire-damaged homes throughout New Haven and New Haven County exactly as they are.
No contractor estimates, no insurance runaround, no waiting on city inspectors.
We assess the property in its current condition and make a fair cash offer.
Ready for a fast, clean exit? Call {PHONE}.""",
        "transcript": f"Fire damage on your New Haven property? USA Home Buyers buys fire-damaged homes in New Haven County as-is. No contractor estimates, no insurance delays. Fair cash offer on current condition. Call {PHONE}.",
    },
    "new-haven-ct/foreclosure": {
        "title": "Facing Foreclosure in New Haven CT?",
        "subtitle": "Sell before the auction — protect your equity and credit in New Haven County",
        "script": f"""Facing foreclosure in New Haven? Connecticut is a judicial foreclosure state — you may have more time than you think, but the clock is ticking.
At USA Home Buyers, we can close in as few as 7 days.
A fast cash sale stops the foreclosure process, satisfies the mortgage, and helps protect your credit.
Don't wait until the auction date.
Call {PHONE} right now for a free, confidential consultation.""",
        "transcript": f"Foreclosure in New Haven? Connecticut is a judicial foreclosure state — you may have time, but don't wait. USA Home Buyers closes in 7 days, stops the process, and protects your credit. Call {PHONE} right now.",
    },
    "new-haven-ct/inherited-property": {
        "title": "Sell Inherited House in New Haven CT",
        "subtitle": "We work with New Haven Probate Court — as-is, any condition",
        "script": f"""Did you inherit a property in New Haven or New Haven County?
At USA Home Buyers, we work directly with executors and estate attorneys through New Haven Probate Court at 200 Orange Street.
We buy as-is: triple-deckers in Fair Haven, Victorian three-families in East Rock, Cape Cods in Westville.
No repairs, no cleanout required. Written cash offer in 24 hours.
Call {PHONE} today.""",
        "transcript": f"Inherit a property in New Haven? USA Home Buyers works with executors through New Haven Probate Court. We buy triple-deckers, Victorians, Cape Cods — as-is, any condition. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "new-haven-ct/market-report": {
        "title": "New Haven CT Real Estate Market Report 2026",
        "subtitle": "Yale University anchor, healthcare growth, steady appreciation in New Haven County",
        "script": f"""Here's a quick look at the New Haven, Connecticut real estate market in 2026.
New Haven's economy is anchored by Yale University and Yale New Haven Health — two of the state's largest employers.
That consistent employment base drives steady housing demand even when broader Connecticut markets soften.
Home values have appreciated as buyers priced out of Fairfield County discover New Haven's affordability.
If you're thinking about selling in New Haven or New Haven County, call USA Home Buyers at {PHONE} for a cash offer in 24 hours.""",
        "transcript": f"New Haven CT market 2026: Yale University and Yale New Haven Health anchor steady demand. Buyers priced out of Fairfield County discover New Haven affordability. Consistent appreciation. USA Home Buyers gives you a cash offer in 24 hours. Call {PHONE}.",
    },
    "new-haven-ct/neighborhoods": {
        "title": "New Haven CT Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Fair Haven to East Rock to Westville — any neighborhood, any condition",
        "script": f"""Whether you're in Fair Haven, The Hill, Westville, Beaver Hills, East Rock, Wooster Square, or anywhere in New Haven — USA Home Buyers will buy your house for cash.
We purchase in every New Haven neighborhood: triple-deckers in Fair Haven, Victorians in East Rock, Colonials in Westville, two-families on Whalley Avenue.
Any condition, any situation.
Ready for a cash offer? Call {PHONE}.""",
        "transcript": f"Fair Haven, The Hill, East Rock, Westville — USA Home Buyers buys in every New Haven neighborhood. Triple-deckers, Victorians, Colonials, two-families — any condition, any situation. Cash offer in 24 hours. Call {PHONE}.",
    },
    "new-haven-ct/probate": {
        "title": "Selling Probate Property in New Haven CT",
        "subtitle": "Working with executors and New Haven Probate Court — as-is, fast close",
        "script": f"""Is a property in New Haven tied up in Connecticut probate?
We work with executors and estate attorneys through New Haven Probate Court at 200 Orange Street — Connecticut's unique probate court system.
Connecticut requires court authorization before real property can be sold — we close once the court approves.
We buy as-is, any condition. No repairs, no cleanout.
Written cash offer in 24 hours. Call USA Home Buyers at {PHONE}.""",
        "transcript": f"New Haven property in Connecticut probate? USA Home Buyers works with executors through New Haven Probate Court at 200 Orange Street. We close once the court approves. As-is, any condition. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "new-haven-ct/tenant-occupied": {
        "title": "Sell a Rental Property in New Haven CT",
        "subtitle": "Done with being a landlord? We buy tenant-occupied homes as-is in New Haven",
        "script": f"""Done being a landlord in New Haven? Whether it's a triple-decker in Fair Haven, a duplex on Whalley Avenue, or a single-family rental in Westville — USA Home Buyers will buy your tenant-occupied property as-is.
No eviction required, no lease complications, no waiting.
We handle everything after closing.
Ready to exit your New Haven rental? Call {PHONE} for a fast, fair cash offer.""",
        "transcript": f"Done being a landlord in New Haven? USA Home Buyers buys triple-deckers, duplexes, and single-families with tenants in place — no eviction, no waiting. We handle everything after closing. Call {PHONE}.",
    },
}

def get_elevenlabs_key():
    return open(os.path.expanduser("~/.config/elevenlabs/api_key")).read().strip()

def generate_audio(script, audio_path):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    data = json.dumps({
        "text": script,
        "model_id": MODEL_ID,
        "voice_settings": VOICE_SETTINGS
    }).encode()
    req = urllib.request.Request(url, data=data, headers={
        "xi-api-key": get_elevenlabs_key(),
        "Content-Type": "application/json",
        "Accept": "audio/mpeg"
    })
    with urllib.request.urlopen(req) as resp:
        with open(audio_path, 'wb') as f:
            f.write(resp.read())
    kb = os.path.getsize(audio_path) / 1024
    print(f"    ✓ Audio: {kb:.0f} KB", flush=True)

def generate_video(audio_path, video_path):
    image_url = fal_client.upload_file(AVATAR)
    audio_url = fal_client.upload_file(audio_path)
    print(f"    Uploaded to Fal, submitting...", flush=True)
    result = fal_client.subscribe("veed/fabric-1.0", arguments={
        "image_url": image_url,
        "audio_url": audio_url,
        "resolution": "720p"
    }, with_logs=True)
    video_url = result["video"]["url"]
    urllib.request.urlretrieve(video_url, video_path)
    kb = os.path.getsize(video_path) / 1024
    print(f"    ✓ Video: {kb:.0f} KB ({kb/1024:.1f} MB)", flush=True)

def extract_poster(mp4, poster):
    """Extract frame at 2s, compress if >100KB."""
    subprocess.run(
        ["ffmpeg", "-y", "-i", mp4, "-ss", "00:00:02", "-frames:v", "1", "-q:v", "5", poster],
        capture_output=True
    )
    if not os.path.exists(poster):
        return
    kb = os.path.getsize(poster) / 1024
    if kb > 100:
        subprocess.run(
            ["ffmpeg", "-y", "-i", poster, "-q:v", "8", poster + ".tmp.jpg"],
            capture_output=True
        )
        if os.path.exists(poster + ".tmp.jpg"):
            os.replace(poster + ".tmp.jpg", poster)
            kb = os.path.getsize(poster) / 1024
    print(f"    ✓ Poster: {kb:.0f} KB", flush=True)

# Support --only=oshkosh-wi or --only=new-haven-ct to run one market
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--only", default=None, help="Filter to a single market prefix")
parser.add_argument("--dry-run", action="store_true", help="Print what would run, skip generation")
args = parser.parse_args()

completed = []
skipped = []
failed = []

for key, info in VIDEOS.items():
    if args.only and not key.startswith(args.only):
        continue

    # Derive paths
    parts = key.split("/")  # e.g. ["oshkosh-wi", "code-violations"]
    market = parts[0]
    slug = parts[1]
    out_dir = os.path.join(VIDEO_ROOT, market)
    os.makedirs(out_dir, exist_ok=True)

    audio_path = os.path.join(out_dir, f"{slug}-audio.mp3")
    mp4_path   = os.path.join(out_dir, f"{slug}.mp4")
    poster_path = os.path.join(out_dir, f"{slug}-poster.jpg")

    # Skip if mp4 already exists and is non-trivial
    if os.path.exists(mp4_path) and os.path.getsize(mp4_path) > 500_000:
        size_mb = os.path.getsize(mp4_path) / (1024*1024)
        print(f"SKIP {key} ({size_mb:.1f} MB exists)", flush=True)
        skipped.append(key)
        continue

    if args.dry_run:
        print(f"DRY-RUN would generate: {key}", flush=True)
        continue

    print(f"\n[{time.strftime('%H:%M:%S')}] GENERATING: {key}", flush=True)
    start = time.time()

    try:
        # Step 1: Audio
        if not os.path.exists(audio_path) or os.path.getsize(audio_path) < 5000:
            print(f"    Generating TTS audio...", flush=True)
            generate_audio(info["script"], audio_path)
            time.sleep(0.5)
        else:
            print(f"    Audio exists ({os.path.getsize(audio_path)//1024}KB), skipping TTS", flush=True)

        # Step 2: Video
        print(f"    Generating Fabric 1.0 video...", flush=True)
        generate_video(audio_path, mp4_path)

        # Step 3: Poster
        print(f"    Extracting poster...", flush=True)
        extract_poster(mp4_path, poster_path)

        elapsed = time.time() - start
        print(f"    ✓ {key} done in {elapsed:.0f}s", flush=True)
        completed.append(key)

    except Exception as e:
        elapsed = time.time() - start
        print(f"    ✗ {key} FAILED after {elapsed:.0f}s: {e}", flush=True)
        failed.append((key, str(e)))
        time.sleep(5)

print(f"\n{'='*60}", flush=True)
print(f"SUMMARY: {len(completed)} done | {len(skipped)} skipped | {len(failed)} failed", flush=True)
if completed:
    print(f"\nCompleted:", flush=True)
    for k in completed:
        print(f"  ✓ {k}", flush=True)
if failed:
    print(f"\nFailed:", flush=True)
    for k, err in failed:
        print(f"  ✗ {k}: {err}", flush=True)
