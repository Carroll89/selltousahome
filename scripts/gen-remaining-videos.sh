#!/bin/bash
set -e

SCRIPT_DIR="/Users/agents/.openclaw/workspace/skills/talking-head/scripts"
AVATAR="/Users/agents/.openclaw/workspace/assets/video-avatar.png"
VOICE="Ib97zM6uFBc71OWgj75I"
OUT="/Users/agents/selltousahome/public/videos"

echo "=== tenant ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" --voice-id "$VOICE" \
  --script "Done with student rentals in State College? We buy tenant-occupied properties. No need to evict, no need to wait for leases to end. We take it off your hands as-is. Cash offer in 24 hours." \
  --output "$OUT/state-college-tenant.mp4"
ffmpeg -y -i "$OUT/state-college-tenant.mp4" -vframes 1 -update 1 -q:v 2 "$OUT/state-college-tenant-poster.jpg"
echo "DONE tenant"

echo "=== fire-damage ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" --voice-id "$VOICE" \
  --script "Fire damage doesn't mean you're stuck. We buy fire-damaged houses in State College and Centre County as-is. No restoration required, no insurance runaround. Fair cash offer in 24 hours." \
  --output "$OUT/state-college-fire-damage.mp4"
ffmpeg -y -i "$OUT/state-college-fire-damage.mp4" -vframes 1 -update 1 -q:v 2 "$OUT/state-college-fire-damage-poster.jpg"
echo "DONE fire-damage"

echo "=== code-violations ==="
python3 "$SCRIPT_DIR/generate.py" \
  --image "$AVATAR" --voice-id "$VOICE" \
  --script "Got code violations on your State College property? We buy houses with open violations, failed inspections, and unpermitted work. No need to fix anything. We handle it all after closing." \
  --output "$OUT/state-college-code-violations.mp4"
ffmpeg -y -i "$OUT/state-college-code-violations.mp4" -vframes 1 -update 1 -q:v 2 "$OUT/state-college-code-violations-poster.jpg"
echo "DONE code-violations"

echo "=== ALL REMAINING VIDEOS COMPLETE ==="
ls -lhS "$OUT"/state-college-*.mp4
