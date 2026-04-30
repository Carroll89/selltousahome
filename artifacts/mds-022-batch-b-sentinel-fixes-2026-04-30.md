# MDS-022 Batch B Sentinel Fixes Evidence

**Generated:** 2026-04-30 08:52 EDT
**Repo:** `/Users/agents/selltousahome`
**Mode:** Local fixes only. No commit, push, deploy, IndexNow, GSC, sitemap submission, or external service mutation.

## Required fixes applied

### Allentown
- `app/markets/allentown-pa/market-report/page.tsx`
  - Replaced stale cash-offer range with `$178,500–$204,000` framing against the `$255,000` Redfin city median sale price.
  - Relabeled Zillow value as `Median Home Value (Zillow Research city ZHVI, 2026-03-31)` with `Allentown city` note.
  - Replaced days-to-pending public wording with `Median Days on Market` / `Redfin city DOM, Mar 2026`; renamed the report data key from `daysToPending` to `medianDaysOnMarket` for this file.
- `app/markets/allentown-pa/page.tsx`
  - Updated FAQ and market table cash-offer range to `$178,500–$204,000`.

### Harrisburg
- `app/markets/harrisburg-pa/page.tsx`
  - Replaced quick-answer stale `$145,000` and 5-days-to-pending copy with Redfin city March 2026 `$152,500` median sale price and `24 median days on market`.
  - Replaced post-table five-days copy with 24-DOM + 45–60-day financing/closing comparison.
  - Updated cash-offer range to `$100,000–$210,700` consistently with report constants.
- `app/markets/harrisburg-pa/market-report/page.tsx`
  - Updated FAQ cash-offer range to `$100,000–$210,700` and removed stale `$234,000` anchor.
  - Separated Zillow city ZHVI YoY (`3.9%`, `2026-03-31`) from Redfin city median sale price YoY (`5.2%`, March 2026).
  - Removed city-ZHVI “pulled up by suburbs” claim and described it as Zillow Research city value for Harrisburg.
  - Cleaned remaining days-to-pending phrasing in this same report file to Redfin city median DOM wording.

### Reading
- `app/markets/reading-pa/page.tsx`
  - Updated sale-to-list row from `96.6%` to `99.6%` and labeled it `Redfin city, Mar 2026`.

### York
- `app/markets/york-pa/market-report/page.tsx`
  - Updated YoY row from `-1.1%` to `-2.5%` with `Redfin city, Mar 2026` label.
- `app/markets/york-pa/faq/page.tsx`
  - Replaced stale February/31-day timing with Redfin city March 2026 / 27 median days on market.
- `app/markets/york-pa/page.tsx`
  - Updated sale-to-list row from `96.9%` February to `98.9%` Redfin city March 2026.
  - Updated carrying-cost copy from `31 days` to `27 days`.

## Files changed by MDS-022

- `/Users/agents/selltousahome/app/markets/allentown-pa/market-report/page.tsx` — MDS-022 patch portion included Allentown offer range + Zillow label + DOM wording fixes.
- `/Users/agents/selltousahome/app/markets/allentown-pa/page.tsx` — MDS-022 patch portion included Allentown offer range fixes.
- `/Users/agents/selltousahome/app/markets/harrisburg-pa/page.tsx` — MDS-022 patch portion included quick-answer, post-table, and offer range fixes.
- `/Users/agents/selltousahome/app/markets/harrisburg-pa/market-report/page.tsx` — MDS-022 patch portion included FAQ offer range, price-trend/source/geography, and DOM wording fixes.
- `/Users/agents/selltousahome/app/markets/reading-pa/page.tsx` — MDS-022 patch portion included sale-to-list source/value fix.
- `/Users/agents/selltousahome/app/markets/york-pa/market-report/page.tsx` — MDS-022 patch portion included YoY row fix.
- `/Users/agents/selltousahome/app/markets/york-pa/faq/page.tsx` — MDS-022 patch portion included March/27-DOM timing fix.
- `/Users/agents/selltousahome/app/markets/york-pa/page.tsx` — MDS-022 patch portion included sale-to-list and carrying-cost fixes.
- `/Users/agents/selltousahome/artifacts/mds-022-batch-b-sentinel-fixes-2026-04-30.md` — this evidence artifact.

Note: the working tree already contained the broader uncommitted MDS-020 Batch B draft before this task. MDS-022 local edits were limited to the MDS-021 named Allentown/Harrisburg/Reading/York files plus this evidence artifact.

## Gates

### `git diff --check`

PASS — command produced no output.

### Scoped bad-string grep

Command:

```bash
grep -RInE "daysToPending|Days to pending|Days to Pending|172,000|196,000|100,000.190,000|100,000.187,000|145,000|goes pending in 5 days|five days to pending|96\.6%|96\.9%|31 days of carrying|\(February 2026\).*31 days|-1\.1%|pulled up by|Harrisburg area home values|median to pending" \
  app/markets/allentown-pa/market-report/page.tsx \
  app/markets/allentown-pa/page.tsx \
  app/markets/harrisburg-pa/page.tsx \
  app/markets/harrisburg-pa/market-report/page.tsx \
  app/markets/reading-pa/page.tsx \
  app/markets/york-pa/market-report/page.tsx \
  app/markets/york-pa/faq/page.tsx \
  app/markets/york-pa/page.tsx
```

PASS — no output.

### Conflict-marker grep

Command:

```bash
grep -RInE "^(<<<<<<<|=======|>>>>>>>)" \
  app/markets/allentown-pa/market-report/page.tsx \
  app/markets/allentown-pa/page.tsx \
  app/markets/harrisburg-pa/page.tsx \
  app/markets/harrisburg-pa/market-report/page.tsx \
  app/markets/reading-pa/page.tsx \
  app/markets/york-pa/market-report/page.tsx \
  app/markets/york-pa/faq/page.tsx \
  app/markets/york-pa/page.tsx
```

PASS — no output.

### `npm run lint`

PASS:

```text
> site@0.1.0 lint
> next lint

✔ No ESLint warnings or errors
```

## Scoped diff stats for MDS-021 named files

```text
app/markets/allentown-pa/market-report/page.tsx  | 60 ++++++++++-----------
app/markets/allentown-pa/page.tsx                | 20 +++----
app/markets/harrisburg-pa/market-report/page.tsx | 66 ++++++++++++------------
app/markets/harrisburg-pa/page.tsx               | 18 +++----
app/markets/reading-pa/page.tsx                  | 20 +++----
app/markets/york-pa/faq/page.tsx                 |  4 +-
app/markets/york-pa/market-report/page.tsx       | 28 +++++-----
app/markets/york-pa/page.tsx                     | 38 +++++++-------
8 files changed, 126 insertions(+), 128 deletions(-)
```

## Explicit non-actions

No commit, push, deploy, IndexNow ping, GSC submission, sitemap submission, or external service mutation was performed.
