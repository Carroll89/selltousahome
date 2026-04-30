# MDS-030 Implementation Artifact — Final Cleanup: Rochester, Worcester, Lancaster

**Date:** 2026-04-30
**Role:** MarketDataSteward recovery (partial worker completed edits; parent verified and closed loop)
**Repo:** `/Users/agents/selltousahome`
**Branch:** `main` at base `3346122`
**Lock:** `MDS-030 draft-only` at time of edits

## Summary

The MDS-030 Sonnet draft worker completed edits to all 3 markets and exited without writing this artifact. Parent (MarketDataSteward) verified all 23 changed files, ran gates, and is committing after artifact creation.

**Markets updated:** `rochester-ny`, `worcester-ma`, `lancaster-pa` (partial safe slice only)

---

## Rochester NY — 10 files changed

**Source vintage:** March 2026 (Zillow Research City ZHVI CSV 2026-03-31; Redfin city page)

| Metric | Old value | New value | Source |
|---|---|---|---|
| Zillow City ZHVI | $155,000 / $212,810 | $235,784 (+3.0% YoY) | Zillow Research City ZHVI CSV Mar 2026 |
| Redfin city median sale | $162,000 | $160,000 (+6.0% YoY) | Redfin city Mar 2026 |
| Redfin ppsf | $108 | $104 | Redfin city Mar 2026 |
| Median DOM | 33 days | 14 days | Redfin city Mar 2026 |
| Source footer | "Mar–Apr 2026" | "March 2026" | Fixed |

**Files:**
- `app/markets/rochester-ny/page.tsx` — TL;DR, stats table, FAQ, comparison section
- `app/markets/rochester-ny/market-report/page.tsx` — header, stats table, body, footer
- `app/markets/rochester-ny/faq/page.tsx` — cash offer FAQ
- `app/markets/rochester-ny/code-violations/page.tsx` — market data block
- `app/markets/rochester-ny/divorce-sale/page.tsx` — market data block
- `app/markets/rochester-ny/fire-damage/page.tsx` — market data block
- `app/markets/rochester-ny/foreclosure/page.tsx` — market data block
- `app/markets/rochester-ny/inherited-property/page.tsx` — market data block
- `app/markets/rochester-ny/probate/page.tsx` — market data block
- `app/markets/rochester-ny/tenant-occupied/page.tsx` — market data block

**NOT changed (correct sub-market context):**
- `neighborhoods/page.tsx` — neighborhood price ranges ($110k-$155k, $155k-$210k) are sub-market context, not city ZHVI

---

## Worcester MA — 10 files changed

**Source vintage:** March 2026 (Zillow Research City ZHVI CSV 2026-03-31; Redfin city page)

| Metric | Old value | New value | Source |
|---|---|---|---|
| Zillow City ZHVI | $310,000 | $430,112 (+1.0% YoY) | Zillow Research City ZHVI CSV Mar 2026 |
| Redfin city median sale | $315,000 | $499,250 (+12.2% YoY) | Redfin city Mar 2026 |
| Redfin ppsf | (stale) | $265 | Redfin city Mar 2026 |
| Median DOM | 24 days | 26 days | Redfin city Mar 2026 |
| Sale-to-list | (stale) | 100.0% | Redfin city Mar 2026 |

**Files:**
- `app/markets/worcester-ma/page.tsx` — TL;DR, stats table, FAQ, comparison section
- `app/markets/worcester-ma/market-report/page.tsx` — header, stats table, body, footer
- `app/markets/worcester-ma/faq/page.tsx` — cash offer FAQ
- `app/markets/worcester-ma/code-violations/page.tsx` — market data block
- `app/markets/worcester-ma/divorce-sale/page.tsx` — market data block
- `app/markets/worcester-ma/fire-damage/page.tsx` — market data block
- `app/markets/worcester-ma/foreclosure/page.tsx` — market data block
- `app/markets/worcester-ma/inherited-property/page.tsx` — market data block
- `app/markets/worcester-ma/probate/page.tsx` — market data block
- `app/markets/worcester-ma/tenant-occupied/page.tsx` — market data block

**NOT changed (correct sub-market context):**
- `neighborhoods/page.tsx` — Belmont Hill ($315k-$420k) and Tatnuck ($310k-$405k) are neighborhood-level ranges, below the updated city median but remain valid sub-market context

---

## Lancaster PA — 3 files changed (partial safe slice)

**Source vintage:** March 2026 (Redfin city/county pages; Lancaster County Zillow context only)
**City Zillow ZHVI: HOLD** — No verified Lancaster PA city row in Zillow Research City CSV.

| Metric | Old value | New value | Source |
|---|---|---|---|
| City Redfin sale price | $332,965 (city Zillow hold) | $255,000 (−0.2% YoY) | Redfin Lancaster city Mar 2026 |
| County Redfin sale price | (stale) | $349,775 (+5.8% YoY) | Redfin Lancaster county Mar 2026 |
| County Zillow ZHVI | $332,414 (stale) | $381,587 (+4.49%) — county context only | Zillow Research county CSV Mar 2026 |
| City Zillow ZHVI | $332,965 (hold/wrong) | REMOVED / held | No valid city CSV row |

**Files:**
- `app/markets/lancaster-pa/page.tsx` — FAQ, TL;DR, stats table (removed city Zillow ZHVI, added city Redfin)
- `app/markets/lancaster-pa/market-report/page.tsx` — TL;DR, table, body (correct Redfin city/county + county Zillow context)
- `app/markets/lancaster-pa/faq/page.tsx` — cash offer FAQ (removed $332,965, added $255,000 Redfin)

---

## Gate Results

| Gate | Result |
|---|---|
| `git diff --check` | PASS |
| Scope (only 3 markets) | PASS |
| Conflict markers | PASS |
| April freshness in diff | PASS |
| Stale Rochester values in diff | PASS |
| Stale Worcester values in diff | PASS |
| Lancaster city Zillow ZHVI removed | PASS |
| `npm run lint` | PASS |
| `npm run build` (412 static pages) | PASS |

## Commit status
No commit/push/deploy/IndexNow occurred prior to this artifact being written.
Next: commit, push, wait for Render deploy, live-verify, IndexNow.
