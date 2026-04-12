#!/bin/bash
set -e

SCRIPT_DIR="/Users/agents/.openclaw/workspace/skills/talking-head/scripts"
AVATAR="/Users/agents/.openclaw/workspace/assets/video-avatar.png"
VOICE="Ib97zM6uFBc71OWgj75I"
OUT="/Users/agents/selltousahome/public/videos"

echo "=== inherited (video from existing audio) ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" \
  --audio "$OUT/state-college-inherited-audio.mp3" \
  --output "$OUT/state-college-inherited.mp4"
ffmpeg -y -i "$OUT/state-college-inherited.mp4" -vframes 1 -q:v 2 "$OUT/state-college-inherited-poster.jpg"
echo "DONE inherited"

echo "=== foreclosure ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" --voice-id "$VOICE" \
  --script "If you're facing foreclosure in Centre County, time matters. We can make a cash offer and close before your sheriff sale date. No banks, no delays. You walk away with equity instead of losing the house. Call 888-440-5250 — we move fast when deadlines are tight." \
  --output "$OUT/state-college-foreclosure.mp4"
ffmpeg -y -i "$OUT/state-college-foreclosure.mp4" -vframes 1 -q:v 2 "$OUT/state-college-foreclosure-poster.jpg"
echo "DONE foreclosure"

echo "=== divorce ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" --voice-id "$VOICE" \
  --script "Going through a divorce and need to sell the house in State College? We make one offer, both parties sign, and we close in 7 to 14 days. No agents, no open houses, no dragging it out. Proceeds get split at closing per your agreement." \
  --output "$OUT/state-college-divorce.mp4"
ffmpeg -y -i "$OUT/state-college-divorce.mp4" -vframes 1 -q:v 2 "$OUT/state-college-divorce-poster.jpg"
echo "DONE divorce"

echo "=== probate ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" --voice-id "$VOICE" \
  --script "Handling a probate sale in Centre County? We work directly with executors and the Register of Wills office. We buy as-is, no repairs needed, and we close around probate timelines. Cash offer in 24 hours." \
  --output "$OUT/state-college-probate.mp4"
ffmpeg -y -i "$OUT/state-college-probate.mp4" -vframes 1 -q:v 2 "$OUT/state-college-probate-poster.jpg"
echo "DONE probate"

echo "=== tenant ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" --voice-id "$VOICE" \
  --script "Done with student rentals in State College? We buy tenant-occupied properties. No need to evict, no need to wait for leases to end. We take it off your hands as-is. Cash offer in 24 hours." \
  --output "$OUT/state-college-tenant.mp4"
ffmpeg -y -i "$OUT/state-college-tenant.mp4" -vframes 1 -q:v 2 "$OUT/state-college-tenant-poster.jpg"
echo "DONE tenant"

echo "=== fire-damage ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" --voice-id "$VOICE" \
  --script "Fire damage doesn't mean you're stuck. We buy fire-damaged houses in State College and Centre County as-is. No restoration required, no insurance runaround. Fair cash offer in 24 hours." \
  --output "$OUT/state-college-fire-damage.mp4"
ffmpeg -y -i "$OUT/state-college-fire-damage.mp4" -vframes 1 -q:v 2 "$OUT/state-college-fire-damage-poster.jpg"
echo "DONE fire-damage"

echo "=== code-violations ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" --voice-id "$VOICE" \
  --script "Got code violations on your State College property? We buy houses with open violations, failed inspections, and unpermitted work. No need to fix anything. We handle it all after closing." \
  --output "$OUT/state-college-code-violations.mp4"
ffmpeg -y -i "$OUT/state-college-code-violations.mp4" -vframes 1 -q:v 2 "$OUT/state-college-code-violations-poster.jpg"
echo "DONE code-violations"

echo "=== ALL VIDEOS COMPLETE ==="
ls -lh "$OUT"/state-college-*.mp4
