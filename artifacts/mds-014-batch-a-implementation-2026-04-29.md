# MDS-014 Batch A Implementation Evidence — 2026-04-29

## Scope
Local implementation draft only for Batch A market directories:
- new-haven-ct
- wilmington-de
- oshkosh-wi
- peoria-il
- springfield-il
- champaign-urbana-il
- youngstown-oh
- rockford-il
- bloomington-il

No commit, push, deploy, IndexNow/GSC, or external mutation performed.

## Summary of changes
Updated visible market-data references to the verified March 2026 / Zillow 2026-03-31 / FRED-Realtor 2026-03-01 source vintage. Removed/rewrote unsupported Zillow April freshness claims. Preserved city/county/metro/CBSA distinctions and separated Redfin closed-sale metrics from FRED/Realtor active-listing metrics.

Key market updates applied:
- New Haven: city ZHVI $326,440 +5.7%; county context $397,334 +4.6%; Redfin score 56/100; hot-home timeline ~24 days.
- Wilmington: Redfin city median $251,200 +12.1%, DOM 61, homes sold 64, sale-to-list 98.3%, score 57/100; Zillow city ZHVI $325,758 +2.5%.
- Oshkosh: Zillow city ZHVI standardized to $253,810 +5.4% and March/Zillow Research source language; Redfin score 61/100.
- Peoria: Zillow city ZHVI $128,838 +7.4%; Redfin city median $145,900; FRED/Realtor CBSA listing price $177,450 and active-listing DOM 43.00; retired stale ~5-day pending proxy in core content.
- Springfield: Redfin score softened to 64/100 Somewhat Competitive; median sale $186,000; sold DOM 28; homes sold 114.
- Champaign-Urbana: separated Champaign city, Urbana city, Champaign County, and metro values; updated Zillow, Redfin, and FRED/Realtor CBSA values; removed stale Urbana-crash framing.
- Youngstown: Redfin city median $90,000; Zillow city ZHVI $70,004; county $170,915; metro $168,082; score 68/100.
- Rockford: Zillow city ZHVI $177,225; compete score 90/100; sale-to-list 100.3% where surfaced.
- Bloomington: Zillow city ZHVI $261,269 +2.7%; Redfin median $300,000 +32.6%; score 65/100; avoided April source implication for unrelated hotness context.

## Files changed
```text
app/markets/bloomington-il/code-violations/page.tsx
app/markets/bloomington-il/faq/page.tsx
app/markets/bloomington-il/market-report/page.tsx
app/markets/bloomington-il/neighborhoods/page.tsx
app/markets/bloomington-il/page.tsx
app/markets/champaign-urbana-il/market-report/page.tsx
app/markets/champaign-urbana-il/page.tsx
app/markets/new-haven-ct/faq/page.tsx
app/markets/new-haven-ct/inherited-property/page.tsx
app/markets/new-haven-ct/market-report/page.tsx
app/markets/new-haven-ct/page.tsx
app/markets/oshkosh-wi/faq/page.tsx
app/markets/oshkosh-wi/market-report/page.tsx
app/markets/oshkosh-wi/page.tsx
app/markets/peoria-il/code-violations/page.tsx
app/markets/peoria-il/divorce-sale/page.tsx
app/markets/peoria-il/faq/page.tsx
app/markets/peoria-il/fire-damage/page.tsx
app/markets/peoria-il/foreclosure/page.tsx
app/markets/peoria-il/inherited-property/page.tsx
app/markets/peoria-il/market-report/page.tsx
app/markets/peoria-il/neighborhoods/page.tsx
app/markets/peoria-il/page.tsx
app/markets/peoria-il/probate/page.tsx
app/markets/peoria-il/tenant-occupied/page.tsx
app/markets/rockford-il/code-violations/page.tsx
app/markets/rockford-il/market-report/page.tsx
app/markets/rockford-il/page.tsx
app/markets/springfield-il/market-report/page.tsx
app/markets/springfield-il/page.tsx
app/markets/wilmington-de/divorce-sale/page.tsx
app/markets/wilmington-de/faq/page.tsx
app/markets/wilmington-de/foreclosure/page.tsx
app/markets/wilmington-de/inherited-property/page.tsx
app/markets/wilmington-de/market-report/page.tsx
app/markets/wilmington-de/neighborhoods/page.tsx
app/markets/wilmington-de/page.tsx
app/markets/wilmington-de/probate/page.tsx
app/markets/youngstown-oh/faq/page.tsx
app/markets/youngstown-oh/market-report/page.tsx
app/markets/youngstown-oh/page.tsx
```

## Validation gates
- `git diff --check` — PASS (no whitespace errors).
- Conflict-marker grep: `grep -RInE '<<<<<<<|=======|>>>>>>>' app/markets/{...}` — PASS (no matches).
- Stale/unsupported-value grep for targeted values and unsupported April source labels — PASS for targeted stale market-data values. Remaining `$210,000`/`$4,200` matches are unrelated examples/rent/ranges outside stale Wilmington market-data use.
- Static presence validation script across Batch A market dirs — PASS; required replacement values found for all nine markets.
- `npm run lint` — PASS (`next lint`: no warnings/errors).

## Deliberately left unchanged / notes
- Non-market examples such as New Haven probate/neighborhood offer ranges, Oshkosh inherited tax basis examples, and Bloomington cash-offer range examples were left unchanged because they are not stale market-source claims.
- April references that are not Zillow/Redfin market-source freshness claims were left only where they describe retrieval/lease/tax/hotness context, or were rephrased to avoid implying April Zillow/Redfin source freshness.
- `rg` is not installed in this environment, so grep/Python were used for all static checks.

## External actions
No commit, push, deploy, IndexNow/GSC, or external service mutation was performed.
