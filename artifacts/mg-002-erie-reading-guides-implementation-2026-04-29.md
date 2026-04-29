# MG-002 Erie + Reading City Guide Implementation — 2026-04-29

## Summary
Built the two missing city seller guide routes so active market guide coverage can move from 26/28 to 28/28 once reviewed/published:

- `/guides/sell-house-fast-erie-pa-2026`
- `/guides/sell-house-fast-reading-pa-2026`

Also added both guide slugs to `app/sitemap.ts` `cityGuideSlugs`.

## Diff Scope
Allowed-file scope only:

| File | Change |
|---|---:|
| `app/guides/sell-house-fast-erie-pa-2026/page.tsx` | new file, 237 lines |
| `app/guides/sell-house-fast-reading-pa-2026/page.tsx` | new file, 262 lines |
| `app/sitemap.ts` | +2 / -0 |
| `artifacts/mg-002-erie-reading-guides-implementation-2026-04-29.md` | new artifact |

No commit, push, deploy, or unrelated file edits were performed.

## Sources Used

### Erie PA
Primary input: `/Users/agents/.openclaw/workspace/knowledge/erie-pa-market-data.md`

Page claims were sourced/labeled from:
- Redfin Erie city housing market — `https://www.redfin.com/city/6172/PA/Erie/housing-market`
  - Median sale price `$153,500`, Mar 2026
  - YoY `+13.3%`, Mar 2026
  - Price per square foot `$112`, Mar 2026
  - Median days on market `28`, Mar 2026
  - Sale-to-list ratio `97.7%`, Mar 2026
  - Compete Score `78/100`, Mar 2026
- Zillow Erie ZHVI — `https://www.zillow.com/home-values/11335/erie-pa/`
  - Typical home value `$167,377`, `+6.5%` YoY, source package/provider geography
- Pennsylvania Department of Revenue transfer tax overview — `https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax`
  - 1% PA state realty transfer tax
- Erie County government context — `https://eriecountypa.gov`
  - Courthouse/probate office context as provided in market-data package
- NeighborhoodScout / DataUSA / City-Data excerpts from the Erie market-data package
  - Older housing stock / demographic context; cited as package-derived context, not fresh scraped values

### Reading PA
Primary input: `/Users/agents/.openclaw/workspace/knowledge/reading-pa-market-data.md`

Page claims were sourced/labeled from:
- Redfin Reading city housing market — `https://www.redfin.com/city/16305/PA/Reading/housing-market`
  - Median sale price `$185,000`, Mar 2026
  - YoY `+2.8%`, Mar 2026
  - Price per square foot `$120`, Mar 2026
  - Median days on market `40`, Mar 2026
  - Homes sold `65`, Mar 2026
  - Compete Score `84/100`, Mar 2026
- Zillow Reading ZHVI — `https://www.zillow.com/home-values/6696/reading-pa/`
  - Typical home value `$227,041`, `+7.8%` YoY, source package/provider geography
- Berks County Recorder fee schedule — `https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule`
  - Reading transfer tax `5%`; other Berks municipalities `2%`
- Pennsylvania Department of Revenue transfer tax overview — `https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax`
  - 1% PA state realty transfer tax
- Berks County Register of Wills / Assessment details from `berkspa.gov` + WeAreAtticus excerpts in the market-data package
- NeighborhoodScout / PA Demographics excerpts from the Reading market-data package
  - Row-home share, pre-1939 stock, renter occupancy, and Hispanic/Latino population context

## Caveats / Representation Notes
- Zillow and Redfin values are intentionally both included and labeled separately because they measure different things: Zillow ZHVI estimates typical home value; Redfin reports closed-sale market activity.
- Geography is labeled as city/provider geography where city-level values were available. No county/metro value was presented as city data.
- Reading transfer-tax math is presented as city-specific and high-rate; Erie transfer-tax math is presented as typical PA/local structure per the Erie market-data package.
- Erie recording-fee details in the source package were flagged as requiring direct verification, so the page avoids asserting exact Erie recording fees.
- No `dateModified` or fake freshness claims were added.

## Evidence
- Routes built in production output:
  - `/guides/sell-house-fast-erie-pa-2026` appeared in `npm run build` route list.
  - `/guides/sell-house-fast-reading-pa-2026` appeared in `npm run build` route list.
- Sitemap additions:
  - `sell-house-fast-erie-pa-2026` appears once in `app/sitemap.ts`.
  - `sell-house-fast-reading-pa-2026` appears once in `app/sitemap.ts`.
- Canonicals:
  - Both pages use `pageUrl = ${SITE_URL}/guides/<slug>` and `alternates: { canonical: pageUrl }`.
- Schema:
  - Erie page includes `erieLocalBusinessSchema`, `articleSchema`, and `faqSchema`.
  - Reading page includes `readingLocalBusinessSchema`, `articleSchema`, and `faqSchema`.
- Phone policy:
  - Both pages use `PHONE` from `@/lib/utils` for call links and visible phone references.
  - Scan found no `888-440-5250`, `+18884405250`, or `717-576-8192` in the edited allowed files.

## Gates Run
- `git diff --check` — PASS
- `npm run lint` — PASS (`✔ No ESLint warnings or errors`)
- `npm run build` — PASS (`✓ Compiled successfully`; `✓ Generating static pages (411/411)`)

## Blockers
None for implementation. Review/publish/live re-audit remains outside this worker scope.
