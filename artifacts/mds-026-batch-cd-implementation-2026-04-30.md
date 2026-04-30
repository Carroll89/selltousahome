# MDS-026 Batch C+D Implementation Draft — Evidence

**Date:** 2026-04-30 10:15 EDT
**Worker:** MDS-026 implementation subagent
**Repo:** `/Users/agents/selltousahome` → `/Users/agents/.openclaw/workspace-seo-commander/site`
**Branch:** `wave-3-low-risk-aio-seo-geo-2026-04-28`
**Base at start:** `1dce21b`
**Mode:** LOCAL DRAFT ONLY — no commit, no push, no deploy, no IndexNow, no GSC, no external mutation.

## Scope

Updated local draft market-data copy/tables for these 9 markets only:

- `wausau-wi`
- `hartford-ct`
- `boston-ma`
- `king-of-prussia-pa`
- `state-college-pa`
- `kenosha-wi`
- `racine-mount-pleasant-wi`
- `bethlehem-pa`
- `erie-pa`

Changed files are limited to those market directories plus this artifact.

## Data QA sources used

- MDS-008 Batch C/Data QA: `/Users/agents/.openclaw/workspace-market-data-steward/artifacts/mds-008-forge-dataqa-batch2-safe-minor-2026-04-29.md`
- MDS-007 Batch D/Data QA: `/Users/agents/.openclaw/workspace-market-data-steward/artifacts/mds-007-forge-dataqa-coordinated-batch5-2026-04-29.md`

Source vintage preserved as March 2026 / Zillow Research CSV `2026-03-31`. No April Zillow/Redfin/FRED freshness was claimed.

## Market change summary

### Batch C

- `wausau-wi`
  - Added city-level Redfin March 2026 metrics alongside existing Wausau metro listing context.
  - Added Zillow Research City ZHVI CSV value `$240,743` / `+8.6% YoY` with `2026-03-31` label.
  - Preserved Realtor.com/FRED metro listing price as metro/listing context, not city sale price.

- `hartford-ct`
  - Added city-level Redfin March 2026 metrics: `$324,000` median sale, `$140`/sqft, `46` DOM.
  - Added Zillow Research City ZHVI CSV `$198,965` / `+5.3% YoY` with `2026-03-31` label.
  - Preserved Hartford metro listing price as metro/listing context.

- `boston-ma`
  - Corrected Redfin city price/sqft from stale `$683` / `−2.1%` to `$686` / `−1.6%`.
  - Preserved Boston Redfin/Zillow city values already aligned with March 2026 source vintage.

### Batch D

- `bethlehem-pa`
  - Reconciled visible Redfin city values to March 2026: `$311,000`, `+13.1%`, `$177`/sqft, `20` DOM, `99.8%` sale-to-list, `90/100` compete score.
  - Reconciled Zillow city ZHVI to `$351,353` / `+3.1%` and removed unsupported April labeling.
  - Updated related commission/transfer-tax/cash-offer examples to align with the refreshed baseline.

- `erie-pa`
  - Added city-level Zillow Research CSV value `$198,492` / `+5.2% YoY` to market data table.
  - Preserved Redfin city March 2026 values: `$153,500`, `+13.3%`, `$112`/sqft, `28` DOM, `97.7%` sale-to-list.
  - Kept older ZIP-level Redfin rows explicitly labeled as ZIP-level context rather than city refresh data.

- `kenosha-wi`
  - Reconciled Zillow Research city ZHVI to `$273,053` / `+5.8% YoY`.
  - Reconciled Redfin city metrics to `$279,500`, `$183`/sqft, `35` DOM, `100.1%` sale-to-list, `83/100` compete score where surfaced.
  - Updated cash-offer, commission, and transfer-fee examples from stale `$225K/$235K` baselines.

- `king-of-prussia-pa`
  - Reconciled Zillow Research city ZHVI to `$498,174` / `+3.1% YoY`.
  - Reconciled Redfin city metrics to `$540,620`, `+11.5%`, `$267`/sqft, `25` DOM, `101.4%` sale-to-list, `80/100` compete score.
  - Recomputed/qualified cash-offer range on a single stated baseline: Zillow city ZHVI / approximate `$349K-$399K` 70-80% range.

- `racine-mount-pleasant-wi`
  - Kept Racine and Mount Pleasant separate.
  - Reconciled Racine city ZHVI to `$208,908` / `+4.9%` and Mount Pleasant village ZHVI to `$336,759` / `+4.9%`, each labeled as Zillow Research City ZHVI CSV `2026-03-31`.
  - Reconciled Racine Redfin values to `$219,000`, `$159`/sqft, `37` DOM, `99.5%`, `84/100`; Mount Pleasant references kept as separate higher-value village context.
  - Updated cash-offer/commission/transfer-fee examples so Racine and Mount Pleasant are not averaged or merged.

- `state-college-pa`
  - Reconciled Zillow Research city ZHVI to `$408,500` / `+0.9%` and removed stale ZIP/page value basis.
  - Reconciled Redfin city labels to March 2026: `$480,500`, `+11.1%`, `$256`/sqft, `5` DOM, `100.8%`, `91/100` compete score.
  - Cash-offer range remains on a single Zillow ZHVI basis: `$286K-$327K`; Redfin-sale-price range references were separately qualified where present.

## Schema.ts flags

- No `lib/schema.ts` files were found under the scoped market directories.
- Per dispatch, no shared `lib/schema.ts` or shared components were edited.
- Existing article/date schema values such as `datePublished`, `dateModified`, and upload dates were not intentionally refreshed as part of this draft.

## Gate results

- `git diff --check` — PASS
- Scope check (`git diff --name-only` limited to 9 market dirs + `artifacts/`) — PASS
- Conflict marker check on scoped market dirs (`grep -RInE '^(<<<<<<<|=======|>>>>>>>)' ...`) — PASS / no markers
- Unsupported April freshness check (`April 2026`, `Apr 2026`, non-ISO `2026-04` in scoped market files) — PASS / no unsupported source-freshness hits
- Stale February data check — PASS for updated source fields; remaining February hits are testimonial dates and Erie ZIP-level context labels only
- `npm run lint` — PASS (`next lint`: no warnings or errors)

## Mutation statement

No commit, push, deploy, IndexNow, GSC, sitemap, package, shared schema/component, or external-service mutation was performed.
