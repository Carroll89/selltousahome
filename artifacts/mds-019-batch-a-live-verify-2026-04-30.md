# MDS-019 Batch A Publish + Live Verification
**Generated:** 2026-04-30 08:20 ET  
**Owner:** MarketDataSteward  
**Scope:** Batch A market-data refresh only: 49 URLs across 9 markets.  
**Commits:** `02f25bf` Batch A publish; `ce84f13` Wilmington schema alignment follow-up.  
**Render deploys:** `dep-d7pk8768bjmc73fm5ko0` live for `02f25bf`; `dep-d7pkctu0dtcc73ek2d8g` live for `ce84f13`.  

## Verdict

**PASS — Batch A is live verified.**

- GitHub `origin/main` is `ce84f13`.
- Local repo is clean at `ce84f13`.
- Render deploy for `ce84f13` went live at `2026-04-30T12:16:15Z`.
- 49/49 Batch A URLs returned HTTP 200 with Last-Modified around `2026-04-30 12:16 UTC`.
- Negative live checks found no scoped unsupported April Zillow/Redfin source freshness, no stale Wilmington DOM/source in scoped pages, no Oshkosh `60/100` / `$752.90`, no Champaign stale FRED label / county YoY, and no Springfield stale `$187,000` / `+23%` / `27 days` in Springfield scope.
- Positive checks confirmed Wilmington `61 days` / March 2026 source, Oshkosh `61/100` and `$761.43`, Springfield `$186,000` / `+22.4%` / `28 days` / `114 homes sold`, Champaign-Urbana March FRED/Realtor label, and Champaign County `$228,000 (-3.8%)`.
- IndexNow ping succeeded for 49 provided URLs with HTTP 200.

## Follow-up fix

Live audit initially caught stale Wilmington schema text inside shared `lib/schema.ts` on `/markets/wilmington-de`: `72 days`, `$210,000 (February 2026)`, and `$8,400` transfer-tax math. MDS patched the schema only and published `ce84f13`, then re-ran live verification.

## URL checks

| URL | HTTP | Last-Modified | Result |
|---|---:|---|---|
| https://www.selltousahome.com/markets/bloomington-il | 200 | Thu, 30 Apr 2026 12:16:03 UTC | PASS |
| https://www.selltousahome.com/markets/bloomington-il/code-violations | 200 | Thu, 30 Apr 2026 12:16:03 UTC | PASS |
| https://www.selltousahome.com/markets/bloomington-il/faq | 200 | Thu, 30 Apr 2026 12:16:03 UTC | PASS |
| https://www.selltousahome.com/markets/bloomington-il/market-report | 200 | Thu, 30 Apr 2026 12:16:03 UTC | PASS |
| https://www.selltousahome.com/markets/bloomington-il/neighborhoods | 200 | Thu, 30 Apr 2026 12:16:03 UTC | PASS |
| https://www.selltousahome.com/markets/champaign-urbana-il | 200 | Thu, 30 Apr 2026 12:16:04 UTC | PASS |
| https://www.selltousahome.com/markets/champaign-urbana-il/market-report | 200 | Thu, 30 Apr 2026 12:16:04 UTC | PASS |
| https://www.selltousahome.com/markets/new-haven-ct | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/new-haven-ct/faq | 200 | Thu, 30 Apr 2026 12:16:04 UTC | PASS |
| https://www.selltousahome.com/markets/new-haven-ct/inherited-property | 200 | Thu, 30 Apr 2026 12:16:04 UTC | PASS |
| https://www.selltousahome.com/markets/new-haven-ct/market-report | 200 | Thu, 30 Apr 2026 12:16:04 UTC | PASS |
| https://www.selltousahome.com/markets/oshkosh-wi | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/oshkosh-wi/faq | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/oshkosh-wi/market-report | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/code-violations | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/divorce-sale | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/faq | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/fire-damage | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/foreclosure | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/inherited-property | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/market-report | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/neighborhoods | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/probate | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/peoria-il/tenant-occupied | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/rockford-il | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/rockford-il/code-violations | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/rockford-il/market-report | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il/code-violations | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il/divorce-sale | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il/faq | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il/fire-damage | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il/foreclosure | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il/inherited-property | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il/market-report | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il/neighborhoods | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/springfield-il/tenant-occupied | 200 | Thu, 30 Apr 2026 12:16:05 UTC | PASS |
| https://www.selltousahome.com/markets/wilmington-de | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/wilmington-de/divorce-sale | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/wilmington-de/faq | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/wilmington-de/foreclosure | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/wilmington-de/inherited-property | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/wilmington-de/market-report | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/wilmington-de/neighborhoods | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/wilmington-de/probate | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/youngstown-oh | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/youngstown-oh/faq | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |
| https://www.selltousahome.com/markets/youngstown-oh/market-report | 200 | Thu, 30 Apr 2026 12:16:06 UTC | PASS |

## Positive sample checks

| Check | URL | Result |
|---|---|---|
| wilmington_dom | https://www.selltousahome.com/markets/wilmington-de/divorce-sale | PASS |
| wilmington_schema_page | https://www.selltousahome.com/markets/wilmington-de | PASS |
| oshkosh_score_main | https://www.selltousahome.com/markets/oshkosh-wi | PASS |
| oshkosh_score_report | https://www.selltousahome.com/markets/oshkosh-wi/market-report | PASS |
| springfield_report | https://www.selltousahome.com/markets/springfield-il/market-report | PASS |
| champaign_main | https://www.selltousahome.com/markets/champaign-urbana-il | PASS |
| champaign_report | https://www.selltousahome.com/markets/champaign-urbana-il/market-report | PASS |

## Raw verification JSON

Saved at `/Users/agents/selltousahome/artifacts/mds-019-batch-a-live-verify-2026-04-30.json`.

## Final docs deploy spot-check — 2026-04-30 08:24 ET

After evidence commit `55960f7` deployed (`dep-d7pkgv68bjmc73fmab60`, live at `2026-04-30T12:23:22Z`), MDS spot-checked representative Batch A live URLs again:

- `/markets/wilmington-de` — HTTP 200, Last-Modified `Thu, 30 Apr 2026 12:23:12 UTC`, no `72 days` / `Redfin, Feb 2026` residue.
- `/markets/wilmington-de/divorce-sale` — HTTP 200, no stale Wilmington DOM/source residue.
- `/markets/oshkosh-wi` — HTTP 200, no unsupported `Zillow (Apr 2026)`, no `60/100`, no `$752.90`.
- `/markets/springfield-il/market-report` — HTTP 200, no stale Springfield `$187,000` / `+23%` / `27 days` residue.
- `/markets/champaign-urbana-il` — HTTP 200, no stale `FRED Listing Price (Sep 2025)` residue.

IndexNow was re-pinged for `/markets/wilmington-de` after the schema-follow-up/docs deploy; HTTP 200.
