# MDS-017 Batch A Sentinel Fixes Evidence

**Generated:** 2026-04-29 21:41-22:xx EDT  
**Repo:** `/Users/agents/selltousahome`  
**Scope:** Narrow local fixes required by Sentinel artifact `/Users/agents/.openclaw/workspace-market-data-steward/artifacts/mds-016-sentinel-post-draft-batch-a-2026-04-29.md`.

## Files changed by this fix pass

- `app/markets/wilmington-de/divorce-sale/page.tsx`
- `app/markets/oshkosh-wi/page.tsx`
- `app/markets/oshkosh-wi/market-report/page.tsx`
- `app/markets/springfield-il/page.tsx`
- `app/markets/springfield-il/market-report/page.tsx`
- `app/markets/springfield-il/foreclosure/page.tsx`
- `app/markets/springfield-il/faq/page.tsx`
- `app/markets/springfield-il/inherited-property/page.tsx`
- `app/markets/springfield-il/divorce-sale/page.tsx`
- `app/markets/springfield-il/tenant-occupied/page.tsx`
- `app/markets/champaign-urbana-il/page.tsx`
- `app/markets/champaign-urbana-il/market-report/page.tsx`

No non-Batch-A markets were intentionally touched.

## Fix summary

1. **Wilmington divorce stale DOM**
   - Replaced `72 days` / `Redfin, Feb 2026` with March 2026 Wilmington city Redfin DOM `61 days`.

2. **Oshkosh compete score inconsistency**
   - Normalized remaining `60/100` Redfin compete score references to `61/100`.

3. **Oshkosh transfer-fee math**
   - Recalculated `$253,810 × $3/$1,000 = $761.43` and updated both WI fee and total cells.

4. **Springfield repeated exact values**
   - Normalized visible/current Redfin March 2026 repeated values to:
     - Median sale price: `$186,000`
     - YoY: `+22.4%`
     - Sold DOM: `28 days`
     - Homes sold: `114`
   - Updated dependent math:
     - 5-6% commission: `$9,300-$11,160`
     - IL/Sangamon transfer tax on `$186,000`: `$279.00`
     - 50/50 split before mortgage payoff: `$93,000` each
   - No intentionally softened Springfield values; exact values were normalized.

5. **Champaign-Urbana FRED row label**
   - Relabeled row to `FRED/Realtor CBSA Listing Price (Mar 2026)`.

6. **Champaign-Urbana county YoY mismatch**
   - Changed Champaign County comparison from `$228,000 (+4.3%)` to `$228,000 (-3.8%)`.

## Gates / results

### `git diff --check`

```text
PASS — command exited 0 with no whitespace errors.
```

### Scoped stale-string / positive-value / conflict-marker check

Command checked the 12 scoped files for Sentinel-flagged stale strings and conflict markers, then verified expected replacement values are present.

```text
PASS wilmington stale DOM/source: no scoped hits
PASS oshkosh stale score/math: no scoped hits
PASS springfield stale exact current values: no scoped hits
PASS champaign stale label/yoy: no scoped hits
PASS conflict markers: no scoped hits
PASS: positive 61 days on market (Redfin Wilmington city, Mar 2026)
PASS: positive 61/100 — Somewhat Competitive
PASS: positive $761.43
PASS: positive $186,000 (+22.4% YoY)
PASS: positive 28 days
PASS: positive 114 homes sold
PASS: positive $279.00
PASS: positive FRED/Realtor CBSA Listing Price (Mar 2026)
PASS: positive $228,000 (-3.8%)
```

### `npm run lint`

```text
> site@0.1.0 lint
> next lint

✔ No ESLint warnings or errors
```

## Diff stub

```text
.../champaign-urbana-il/market-report/page.tsx     | 42 +++++++++++-----------
 app/markets/champaign-urbana-il/page.tsx           | 20 +++++------
 app/markets/oshkosh-wi/market-report/page.tsx      | 10 +++---
 app/markets/oshkosh-wi/page.tsx                    | 14 ++++----
 app/markets/springfield-il/divorce-sale/page.tsx   |  6 ++--
 app/markets/springfield-il/faq/page.tsx            |  4 +--
 app/markets/springfield-il/foreclosure/page.tsx    |  4 +--
 .../springfield-il/inherited-property/page.tsx     |  2 +-
 app/markets/springfield-il/market-report/page.tsx  | 22 ++++++------
 app/markets/springfield-il/page.tsx                | 20 +++++------
 .../springfield-il/tenant-occupied/page.tsx        |  2 +-
 app/markets/wilmington-de/divorce-sale/page.tsx    |  6 ++--
 12 files changed, 76 insertions(+), 76 deletions(-)
```

Note: diff stat is relative to repo `HEAD`, so it includes pre-existing MDS-014 draft edits in the same scoped files plus this narrow Sentinel fix pass.

## External mutation confirmation

No commit, push, deploy, IndexNow, GSC, or external service mutation was run.


## MDS/Max verification addendum — 2026-04-29 21:48 EDT

After worker return, MDS/Max re-ran the stale-string check across the full Springfield Batch A directory, not just the worker's 12-file scoped list. That broader check found three remaining `$187,000` references in Springfield supporting pages:

- `app/markets/springfield-il/neighborhoods/page.tsx`
- `app/markets/springfield-il/code-violations/page.tsx`
- `app/markets/springfield-il/fire-damage/page.tsx`

MDS/Max applied the smallest follow-up normalization:

- Neighborhoods: `Redfin median $187,000` → `Redfin median $186,000`.
- Code violations: `Redfin median sale price of $187,000` → `$186,000`.
- Fire damage: `median sale price $187,000, up 23% year-over-year` → `$186,000, up 22.4% year-over-year`.

Re-run gates after follow-up:

```text
git diff --check — PASS
Full targeted stale-string check across Batch A flagged terms — PASS
npm run lint — PASS (No ESLint warnings or errors)
```

External mutation confirmation still holds: no commit, push, deploy, IndexNow, GSC, or external service mutation was run.
