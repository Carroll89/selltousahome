# MG-009 Attribution Batch C KOP + Lancaster live re-audit

Generated: 2026-04-29 17:00:19 EDT
Site repo: `/Users/agents/.openclaw/workspace-seo-commander/site`
Publish commit: `66a50d3` — `fix: improve kop lancaster attribution framing`

## Verdict

`PASS`

MG-009 Attribution Batch C is live for the 11 scoped King of Prussia + Lancaster situation pages.

## Scope

- 7 King of Prussia situation pages:
  - /markets/king-of-prussia-pa/code-violations
  - /markets/king-of-prussia-pa/divorce-sale
  - /markets/king-of-prussia-pa/fire-damage
  - /markets/king-of-prussia-pa/foreclosure
  - /markets/king-of-prussia-pa/inherited-property
  - /markets/king-of-prussia-pa/probate
  - /markets/king-of-prussia-pa/tenant-occupied
- 4 Lancaster situation pages:
  - /markets/lancaster-pa/code-violations
  - /markets/lancaster-pa/fire-damage
  - /markets/lancaster-pa/probate
  - /markets/lancaster-pa/tenant-occupied

## Gates before publish

- Exact changed-file scope: PASS — exactly 11 scoped files, no extras/missing.
- No market-data/dateModified/schema/sitemap/global/package/root/report/FAQ/neighborhood/blog/guide/state-hub files changed.
- Independent review: `PASS_WITH_FIXES`.
- `git diff --check`: PASS.
- Old phone grep over scoped files: PASS.
- `npm run lint`: PASS.
- `npm run build`: PASS, 411/411 static pages.

## Live verification

Command checked all 11 live URLs for:

- HTTP 200
- representative new source-framing/softening marker present
- old phone variants absent: `888-440-5250`, `+18884405250`, `717-576-8192`, compact variants
- canonical authority phone present: `888-274-5006`

Result:

```text
PASS attempt 1
200 https://www.selltousahome.com/markets/king-of-prussia-pa/code-violations markers_ok old_absent canon_ok bytes=86581
200 https://www.selltousahome.com/markets/king-of-prussia-pa/divorce-sale markers_ok old_absent canon_ok bytes=81846
200 https://www.selltousahome.com/markets/king-of-prussia-pa/fire-damage markers_ok old_absent canon_ok bytes=82526
200 https://www.selltousahome.com/markets/king-of-prussia-pa/foreclosure markers_ok old_absent canon_ok bytes=87054
200 https://www.selltousahome.com/markets/king-of-prussia-pa/inherited-property markers_ok old_absent canon_ok bytes=88580
200 https://www.selltousahome.com/markets/king-of-prussia-pa/probate markers_ok old_absent canon_ok bytes=82557
200 https://www.selltousahome.com/markets/king-of-prussia-pa/tenant-occupied markers_ok old_absent canon_ok bytes=86957
200 https://www.selltousahome.com/markets/lancaster-pa/code-violations markers_ok old_absent canon_ok bytes=74246
200 https://www.selltousahome.com/markets/lancaster-pa/fire-damage markers_ok old_absent canon_ok bytes=71689
200 https://www.selltousahome.com/markets/lancaster-pa/probate markers_ok old_absent canon_ok bytes=73252
200 https://www.selltousahome.com/markets/lancaster-pa/tenant-occupied markers_ok old_absent canon_ok bytes=70454
```

## Notes

- Initial live checks briefly missed markers because the deploy/cache had not caught up. A later live audit passed once live HTML reflected commit `66a50d3`.
- Lancaster Zillow/ZHVI/data freshness was not touched.
- MG-013/data freshness remains MarketDataSteward-owned and out of scope.
