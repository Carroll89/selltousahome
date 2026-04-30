# MDS-029 Batch C+D Post-Fix Sentinel Recheck — 2026-04-30

**Role:** independent post-fix Sentinel for MDS-028/029
**Repo:** `/Users/agents/selltousahome`
**Branch observed:** `wave-3-low-risk-aio-seo-geo-2026-04-28`
**HEAD observed:** `1dce21b`
**Mode:** read-only audit except this evidence artifact. No commits, pushes, deploys, IndexNow, lock edits, or external mutations.

## Final verdict

**SENTINEL_FAIL**

14 of 15 requested MDS-027 issues are fixed. One Kenosha cash-offer percentage issue is still present in two Kenosha files: the root-page math was corrected to `70-80%`, but `68-80%` remains in FAQ/market-report copy, including one FAQ answer that still pairs `68-80%` with Zillow median value `$273,053`. Because the requested correction says this should be `70-80%`, this remains a data/accuracy cleanup item before publish.

## Evidence inputs inspected

- Full prior Sentinel artifact read first: `/Users/agents/selltousahome/artifacts/mds-027-batch-cd-sentinel-2026-04-30.md`
- Targeted files checked directly under:
  - `app/markets/bethlehem-pa/`
  - `app/markets/boston-ma/`
  - `app/markets/kenosha-wi/`
  - `app/markets/king-of-prussia-pa/`
  - `app/markets/racine-mount-pleasant-wi/`
  - `app/markets/state-college-pa/`
- `rg` was unavailable in this shell (`command not found`), so targeted Python string scans were used.

## Scope / state note

`git status --short` shows the expected Batch C+D tracked market-file modifications plus untracked evidence artifacts:

- `artifacts/mds-026-batch-cd-implementation-2026-04-30.md`
- `artifacts/mds-027-batch-cd-sentinel-2026-04-30.md`
- `artifacts/mds-028-batch-cd-sentinel-fixes-2026-04-30.md`
- this MDS-029 artifact after write

No commit/push/deploy/indexing was performed.

## Recheck results

| # | Issue from MDS-027 | Status | Evidence |
|---|---|---|---|
| 1 | `$480,500` in `bethlehem-pa/neighborhoods/page.tsx` should be gone | **FIXED** | Targeted scan found no `480,500` in `app/markets/bethlehem-pa/neighborhoods/page.tsx`. File now references Bethlehem citywide Redfin median `$311,000` and neighborhood variation without the State College value. |
| 2 | `$480,500` in `boston-ma/market-report/page.tsx` and `boston-ma/page.tsx` should be gone | **FIXED** | Targeted scan found no `480,500` in either Boston file. |
| 3 | Kenosha DOM in `kenosha-wi/market-report/page.tsx` should be 35 days, not 37 | **FIXED** | `app/markets/kenosha-wi/market-report/page.tsx` line evidence shows `approximately 35 days on market` and table row `Median days on market` = `35 days`; no `37 days` in that file. |
| 4 | Kenosha `Kenosha County` source/geography phrasing for `$273,053` and `$279,500` should be city-level | **FIXED** | The bad source phrasing is gone. Market-data sections now say `Redfin (March 2026), the median sale price in Kenosha is approximately $279,500` and `Zillow Home Value Index for Kenosha city is $273,053`. Remaining `Kenosha County` mentions are court/service-area/transfer-tax context, not source/geography labels for those metrics. |
| 5 | Kenosha cash-offer math: `68-80%` vs actual lower bound on `$273,053`; should be `70-80%` | **STILL_PRESENT** | Root page was corrected: `app/markets/kenosha-wi/page.tsx` says `Cash offers for Kenosha homes typically range from 70-80%` and `$191,000-$218,000` on `$273,053`. However, `app/markets/kenosha-wi/faq/page.tsx` still says `Cash offers typically range from 68-80% ... Zillow ... $273,053`, and `app/markets/kenosha-wi/market-report/page.tsx` still has `Typical cash offer range` = `68-80% of FMV` plus narrative `cash offers typically run 68-80%`. Requested fix was `70-80%`; residual `68-80%` remains. |
| 6 | KOP `70-75%` label in root and market-report should be `70-80%` | **FIXED** | No `70–75` / `70-75` found in `app/markets/king-of-prussia-pa/page.tsx` or `market-report/page.tsx`. Both use `70–80%` with `$349,000–$399,000`. |
| 7 | KOP stale time language: `nearly two months`, `100-115 days`, `over four months` should be gone | **FIXED** | Targeted scan found none of those strings. Root copy now says approximately two to three months from listing to cash in hand after `25 days` pending + `45–60 days` closing. |
| 8 | Racine `$336,759` labeled as `RDC metro hotness`; should say `Mount Pleasant village ZHVI` | **FIXED** | `app/markets/racine-mount-pleasant-wi/market-report/page.tsx` table row now says `Mount Pleasant village ZHVI` = `$336,759`, source `Zillow Research City ZHVI CSV, 2026-03-31`. No `$336,759` row labeled RDC/hotness. |
| 9 | Racine `84/100` described as `per home` or `average offers`; should be Compete Score framing only | **FIXED** | Targeted scan found no `84/100` lines with `per home` or `average offers`. Uses are framed as `Redfin rates Racine 84/100 on its Compete Score` / `Redfin Compete Score`. |
| 10 | State College `$13,500` transfer tax should be `$14,415` | **FIXED** | No `$13,500` found in scoped State College files. Root and market-report use `$14,415` on `$480,500`. |
| 11 | State College `Centre County charges the standard Pennsylvania 2% transfer tax` should reflect borough 3% vs county 2% distinction | **FIXED** | Bad phrase not found. Market-report says `State College Borough charges 3.00% total... Most other Centre County municipalities charge 2.00% total`; root has matching borough vs most-townships distinction. |
| 12 | Bethlehem foreclosure/inherited Redfin date as `2026-03-31` should be March 2026 | **FIXED** | `bethlehem-pa/foreclosure/page.tsx` says Redfin `$311,000` is `as of March 2026`; `inherited-property/page.tsx` says `as of March 2026`. No `2026-03-31` found in those Redfin references. |
| 13 | Kenosha neighborhoods `$311,000` should be gone | **FIXED** | Targeted scan found no `311,000` in `app/markets/kenosha-wi/neighborhoods/page.tsx`; neighborhood range now uses `$190,000-$279,500`. |
| 14 | `March-March 2026` / `March–March 2026` footer typos should be gone | **FIXED** | Targeted scan across the Batch C+D market dirs found no `March-March 2026` or `March–March 2026`. |
| 15 | Kenosha heading `Kenosha Kenosha County` should be gone | **FIXED** | Targeted scan across `app/markets/kenosha-wi` found no `Kenosha Kenosha County`. |

## Remaining required fix

Update Kenosha residual cash-offer percentage copy from `68-80%` to `70-80%` where it is tied to the current Kenosha value framing:

- `app/markets/kenosha-wi/faq/page.tsx`
  - Current: `Cash offers typically range from 68-80% of fair market value. According to Zillow, the Kenosha median home value is $273,053...`
- `app/markets/kenosha-wi/market-report/page.tsx`
  - Current table row: `Typical cash offer range` = `68-80% of FMV`
  - Current narrative: `cash offers typically run 68-80% of fair market value`

After those edits, this recheck should be rerun. If only this item changes and all other strings remain clear, expected verdict is **SENTINEL_PASS**.
