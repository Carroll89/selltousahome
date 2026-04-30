# MDS-027 Batch C+D Post-Draft Sentinel — 2026-04-30

**Role:** independent post-draft data quality Sentinel
**Repo:** `/Users/agents/selltousahome`
**Branch observed:** `wave-3-low-risk-aio-seo-geo-2026-04-28`
**HEAD observed:** `1dce21b`
**Mode:** read-only audit except this evidence artifact. No commits, pushes, deploys, IndexNow, lock edits, or external mutations.

## Final verdict

**SENTINEL_FAIL**

The Batch C+D draft is directionally aligned in several markets, but it contains confirmed data/source/arithmetic errors that should be fixed before any commit or publish. The highest-risk issues are cross-market value leakage (`$480,500` appearing in Bethlehem/Boston neighborhood copy), Kenosha DOM/source-label errors, KOP cash-offer/time math inconsistencies, Racine/Mount Pleasant metric/geography label confusion, and State College transfer-tax arithmetic inconsistencies.

## Evidence inputs inspected

- Required Data QA artifacts:
  - `/Users/agents/.openclaw/workspace-market-data-steward/artifacts/mds-007-forge-dataqa-coordinated-batch5-2026-04-29.md`
  - `/Users/agents/.openclaw/workspace-market-data-steward/artifacts/mds-008-forge-dataqa-batch2-safe-minor-2026-04-29.md`
- Repo diff inspected with `git diff HEAD -- app/markets/<market>/` for each changed market.
- Scope inspected with `git status --short`, `git diff --name-only HEAD`, branch, and HEAD checks.
- Schema inspected with required grep against `lib/schema.ts`.

## Scope check

**Result: PASS**

Changed tracked files are confined to the 9 Batch C+D market directories:

- `app/markets/bethlehem-pa/` — 9 files
- `app/markets/boston-ma/` — 2 files
- `app/markets/erie-pa/` — 12 files
- `app/markets/hartford-ct/` — 2 files
- `app/markets/kenosha-wi/` — 11 files
- `app/markets/king-of-prussia-pa/` — 2 files
- `app/markets/racine-mount-pleasant-wi/` — 10 files
- `app/markets/state-college-pa/` — 2 files
- `app/markets/wausau-wi/` — 2 files

Untracked artifact present before this Sentinel write: `artifacts/mds-026-batch-cd-implementation-2026-04-30.md`. This is within allowed `artifacts/` scope.

`lib/schema.ts` is **not changed**.

## Source freshness check

**Result: FAIL_WITH_FIXES_REQUIRED**

Confirmed OK:

- No remaining unsupported `April 2026` / `Apr 2026` market-data freshness claim found in the changed market files inspected.
- Most Zillow Research CSV source labels use `2026-03-31` or March 2026.
- Most Redfin/FRED/Realtor labels use March 2026 / Mar 2026.

Warnings/errors:

- **Bethlehem ERROR:** `app/markets/bethlehem-pa/foreclosure/page.tsx` and `app/markets/bethlehem-pa/inherited-property/page.tsx` label Redfin median sale price `$311,000` as `2026-03-31`. That exact date is the Zillow Research CSV vintage, not the Redfin city-market vintage. Redfin should be labeled `March 2026` / `Mar 2026`.
- **Kenosha WARNING:** `app/markets/kenosha-wi/market-report/page.tsx` footer says `March–March 2026`, a mechanical typo from replacing `March–April 2026`.
- **Racine WARNING:** `app/markets/racine-mount-pleasant-wi/market-report/page.tsx` footer says `March–March 2026`, and still lists `Realtor.com Market Hotness Index` as a source although the table row was changed away from Realtor/RDC.
- **Erie WARNING:** ZIP-level Redfin values remain labeled as `Feb 2026` context in some places and `Mar 2026` in others. The MDS-007 artifact confirms city Redfin March values and notes ZIP context, but does not independently confirm the relabeled ZIP values as March 2026 rows.

## Per-market findings

### Bethlehem PA — ERROR

Changed files inspected:

- `divorce-sale/page.tsx`
- `faq/page.tsx`
- `fire-damage/page.tsx`
- `foreclosure/page.tsx`
- `inherited-property/page.tsx`
- `market-report/page.tsx`
- `neighborhoods/page.tsx`
- `page.tsx`
- `probate/page.tsx`

OK:

- Redfin median sale price `$311,000`, `+13.1% YoY`, ppsf `$177`, DOM `20 days`, sale-to-list `99.8%`, and Zillow ZHVI `$351,353` / `+3.1%` match MDS-007.
- Cash-offer math on `$311,000` using 70–80% is approximately `$218K–$249K`; draft ranges are correct.
- Old unsupported April freshness was changed to March 2026.

Errors/warnings:

- **ERROR — unsupported/cross-market value:** `app/markets/bethlehem-pa/neighborhoods/page.tsx` changes Historic District range to `$380,000–$480,500+` and says variation runs to `$480,500+`. `$480,500` is the State College Redfin median from MDS-007, not a Bethlehem neighborhood value in the QA artifact.
- **ERROR — wrong source date style:** Redfin `$311,000` is stated as `as of 2026-03-31` in foreclosure/inherited copy. MDS-007 says Redfin city data is March 2026; `2026-03-31` applies to Zillow Research CSV.
- **WARNING:** Testimonial metadata still contains `February 2026`, but this appears testimonial/date metadata, not market-data freshness.

### Boston MA — ERROR

Changed files inspected:

- `market-report/page.tsx`
- `page.tsx`

OK:

- Metro listing price `$829,000` remains aligned with MDS-008 (`$828,750` rounded).

Errors/warnings:

- **ERROR — unsupported/cross-market value:** `app/markets/boston-ma/market-report/page.tsx` and `app/markets/boston-ma/page.tsx` change neighborhood copy to `$480,500-$600,000` for Hyde Park / Mattapan / Dorchester style ranges. `$480,500` is not in MDS-008 for Boston; it is the State College Redfin median sale price. MDS-008 Boston values are Redfin city `$865,000`, Zillow city `$798,217`, metro listing `$828,750` rounded `$829,000`, and ppsf `$686`.
- **WARNING:** Testimonial metadata contains `February 2026`, but this does not appear to be market-data freshness.

### Erie PA — WARNING

Changed files inspected:

- `code-violations/page.tsx`
- `divorce-sale/page.tsx`
- `faq/page.tsx`
- `fire-damage/page.tsx`
- `foreclosure/page.tsx`
- `inherited-property/page.tsx`
- `market-report/page.tsx`
- `neighborhoods/page.tsx`
- `page.tsx`
- `probate/page.tsx`
- `property-liens/page.tsx`
- `tenant-occupied/page.tsx`

OK:

- Market-report and root now include March/source-backed city values: Zillow city ZHVI `$198,492` / `+5.2%`, RegionID `11335`, `2026-03-31`; Redfin city sale price `$153,500`, `+13.3%`, ppsf `$112`, DOM `28 days` per MDS-007.
- April freshness labels were generally reduced to March 2026.

Warnings:

- **WARNING — known risk item remains:** Root/FAQ still use `$115,000-$120,000 (DataUSA 2024)` for the urban core. Per dispatch, this is a WARNING because March 2026 Redfin/Zillow values are also present; it would have been FAIL if no March 2026 values were present.
- **WARNING — unsupported ZIP freshness relabel:** Several ZIP-level values (`$81,000`, `$300,000`, `$245,000`, associated YoY/DOM/sale-to-list rows) were relabeled from Feb to Mar in `market-report/page.tsx`, while footer text still says ZIP-level context is Feb 2026. These ZIP values are not confirmed in the MDS-007 market-level evidence table, so Sentinel cannot verify the March relabel from the required artifacts.

### Hartford CT — PASS

Changed files inspected:

- `market-report/page.tsx`
- `page.tsx`

OK:

- City Redfin values match MDS-008: `$324,000`, `+17.2% YoY`; ppsf `$140`, `+1.8%`; DOM `46 days`.
- Zillow city ZHVI matches MDS-008: `$198,965`, `+5.3%`, Zillow Research City ZHVI CSV, `2026-03-31`.
- Metro listing price `$455,000` remains correctly labeled as Realtor.com/FRED metro March 2026 context.
- Last Updated changed from April to March 2026.

No confirmed market-data errors found.

### Kenosha WI — ERROR

Changed files inspected:

- `code-violations/page.tsx`
- `divorce-sale/page.tsx`
- `faq/page.tsx`
- `fire-damage/page.tsx`
- `foreclosure/page.tsx`
- `inherited-property/page.tsx`
- `market-report/page.tsx`
- `neighborhoods/page.tsx`
- `page.tsx`
- `probate/page.tsx`
- `tenant-occupied/page.tsx`

OK:

- Zillow city ZHVI `$273,053`, `+5.8%`, source as Zillow Research City ZHVI CSV / `2026-03-31`, matches MDS-007.
- Redfin sale price `$279,500`, ppsf `$183`, sale-to-list context where used, and transfer fee math on `$279,500` (`$839`) are consistent with MDS-007 / Wisconsin $3 per $1,000.
- Cash-offer upper bound `$218K` on `$273,053` at 80% is correct.

Errors/warnings:

- **ERROR — DOM mismatch:** `app/markets/kenosha-wi/market-report/page.tsx` table changed median DOM to `37 days`; MDS-007 confirms Kenosha city DOM is `35 days`. Root page still uses `35 days`, creating internal inconsistency.
- **ERROR — source/geography/metric label confusion:** Multiple pages say `According to Zillow and Redfin data for Kenosha County, the median home value in Kenosha is approximately $279,500`. `$279,500` is Redfin Kenosha city median sale price, not a Zillow home value and not a Kenosha County value. MDS-007 explicitly warns not to present Kenosha County `$323,633` as city ZHVI; draft does not do that exact substitution, but the county/source phrasing is still wrong for `$279,500`.
- **ERROR — cash-offer arithmetic/basis:** `app/markets/kenosha-wi/page.tsx` says 68–80% of Zillow ZHVI `$273,053` is `$191,000-$218,000`. 68% is about `$186K`; `$191K` is approximately 70%. Either the percentage or lower bound needs alignment.
- **ERROR — unsupported/cross-market value:** `app/markets/kenosha-wi/neighborhoods/page.tsx` changes a neighborhood range to `$250,000-$311,000`. `$311,000` is Bethlehem Redfin median in MDS-007, not a Kenosha neighborhood value in the QA artifact.
- **WARNING — copy typo:** `market-report/page.tsx` says `March–March 2026`.

### King of Prussia PA — ERROR

Changed files inspected:

- `market-report/page.tsx`
- `page.tsx`

OK:

- Zillow ZHVI `$498,174`, `+3.1%`, source date `2026-03-31`, matches MDS-007.
- Redfin median sale price `$540,620`, `+11.5%`, ppsf `$267`, DOM `25 days`, sale-to-list `101.4%`, Compete Score `80/100` match MDS-007.
- `70–80%` of `$498,174` is approximately `$349K-$399K`, matching the known-risk expected range.

Errors/warnings:

- **ERROR — cash-offer label mismatch:** Draft text repeatedly says `70–75%` but uses `$349K-$399K`, which is the 70–80% range on `$498,174`. If the policy is 70–75%, upper bound should be about `$374K`; if the intended range is `$349K-$399K`, the label should be 70–80%.
- **ERROR — stale duration language:** `25 days` is described as `nearly two months`; that causal explanation is stale from the old `56/79` day copy.
- **ERROR — total time inconsistency:** `25 days` to pending plus `45–60 days` to close is roughly `70–85 days`, but the draft still says `100–115 days` in market-report FAQ copy and `over four months` in root FAQ copy.

### Racine / Mount Pleasant WI — ERROR

Changed files inspected:

- `code-violations/page.tsx`
- `divorce-sale/page.tsx`
- `faq/page.tsx`
- `foreclosure/page.tsx`
- `inherited-property/page.tsx`
- `market-report/page.tsx`
- `neighborhoods/page.tsx`
- `page.tsx`
- `probate/page.tsx`
- `tenant-occupied/page.tsx`

OK:

- Racine city ZHVI `$208,908`, `+4.9%`, source as Zillow Research City ZHVI CSV / `2026-03-31`, matches MDS-007.
- Mount Pleasant ZHVI `$336,759`, source as separate Zillow Research city row / `2026-03-31`, matches MDS-007.
- Racine Redfin sale price `$219,000`, DOM `37 days`, Compete Score `84/100`, and transfer fee `$657` on `$219,000` match MDS-007 / Wisconsin fee math.
- The draft mostly keeps Racine city and Mount Pleasant value rows separate.

Errors/warnings:

- **ERROR — metric/geography label confusion:** `app/markets/racine-mount-pleasant-wi/market-report/page.tsx` labels `$336,759` as `Metro hotness median (RDC)` while sourcing it to Zillow Research City ZHVI CSV. `$336,759` is Mount Pleasant village ZHVI, not Realtor.com/RDC metro hotness median.
- **ERROR — unsupported/misused metric:** Several lines replace `average offers per home` with `84/100 Redfin Compete Score`, including phrases like `homes receiving 84/100 Redfin Compete Score on average` and `84/100 Redfin Compete Score per home`. A Compete Score is not an offers-per-home metric. MDS-007 confirms `84/100` as Redfin Compete Score only.
- **ERROR — Mount Pleasant cash-offer arithmetic/basis:** Root FAQ says Mount Pleasant uses separate ZHVI `$336,759` with cash offers `$231K-$264K` under a 68–80% range. 68–80% of `$336,759` is about `$229K-$269K`; `$231K-$264K` matches the Data QA note for 70–80% of Mount Pleasant Redfin sale price `$330,500`, not the stated ZHVI basis.
- **WARNING — unsupported YoY attached to Mount Pleasant ppsf:** Draft labels Mount Pleasant ppsf `$207 (+6.7% YoY)`. MDS-007 confirms ppsf `$207` but does not confirm `+6.7%`.
- **WARNING — Mount Pleasant DOM:** The required check asks for Mount Pleasant DOM `44 days` to remain separate. I found Racine DOM `37 days` present and no crossed use of `44`, but I did not find a separate Mount Pleasant DOM `44 days` row in the changed snippets.
- **WARNING — source footer:** `market-report/page.tsx` still lists Realtor.com Market Hotness Index while the data row no longer uses the Realtor/FRED `$347,720` context; footer also says `March–March 2026`.

### State College PA — ERROR

Changed files inspected:

- `market-report/page.tsx`
- `page.tsx`

OK:

- Zillow ZHVI `$408,500`, `+0.9%`, source as Zillow Research City ZHVI CSV / `2026-03-31`, matches MDS-007.
- Redfin median sale price `$480,500`, `+11.1%`, ppsf `$256`, DOM `5 days`, sale-to-list `100.8%`, Compete Score `91/100`, match MDS-007.
- Cash-offer math is correct where stated: 70–80% of `$408,500` = `$286K-$327K`; 70–80% of `$480,500` = `$336K-$384K`.
- Zillow and Redfin values are mostly kept distinct rather than merged.

Errors/warnings:

- **ERROR — transfer-tax arithmetic:** Market-report FAQ says State College Borough 3.00% total is `$13,500 on a $480,500 sale`; root page repeats `$13,500`. 3.00% of `$480,500` is `$14,415`. The comparison table correctly says `$14,415`, so this is an internal inconsistency.
- **ERROR — transfer-tax rule inconsistency:** Market-report intro says `Centre County charges the standard Pennsylvania 2% transfer tax` while the same draft adds State College Borough 3.00% total. This needs nuance: State College Borough is 3.00%; most other Centre County municipalities are 2.00%.

### Wausau WI — PASS

Changed files inspected:

- `market-report/page.tsx`
- `page.tsx`

OK:

- Redfin city sale price `$225,000`, `+33.9%`, ppsf `$140`, `+22.3%`, DOM `40 days`, and Zillow city ZHVI `$240,743`, `+8.6%` match MDS-008.
- Realtor.com/FRED metro listing price `$366,000` remains correctly labeled as metro listing context.
- City vs metro labels are explicit in the table rows.
- Last Updated changed from April to March 2026.

No confirmed market-data errors found.

## schema.ts stale-value report

Required command run:

```bash
grep -n "wausau\|hartford\|boston\|king.of.prussia\|state.college\|kenosha\|racine\|bethlehem\|erie" lib/schema.ts | head -30
```

Findings:

- **PASS:** `lib/schema.ts` is not modified in the draft.
- **PASS:** Matching sections are LocalBusiness schema keys/descriptions/areaServed, not market-data value rows. No stale ZHVI, Redfin, Realtor/FRED, DOM, or cash-offer values found in the inspected schema excerpts.
- **No parent-review stale-value warnings from schema.ts.**

## Arithmetic spot-checks

- Bethlehem: 70–80% of `$311,000` = `$217,700-$248,800`; draft `$218K-$249K` OK.
- Kenosha: 68–80% of `$273,053` = `$185,676-$218,442`; draft `$191K-$218K` is wrong if claiming 68–80%.
- KOP: 70–80% of `$498,174` = `$348,722-$398,539`; draft `$349K-$399K` OK only for 70–80%, not 70–75%.
- Racine city: 68–80% of `$208,908` = `$142,057-$167,126`; draft `$142K-$167K` OK.
- Mount Pleasant: 68–80% of `$336,759` = `$228,996-$269,407`; draft `$231K-$264K` does not match the stated ZHVI basis.
- State College ZHVI: 70–80% of `$408,500` = `$285,950-$326,800`; draft `$286K-$327K` OK.
- State College Redfin: 70–80% of `$480,500` = `$336,350-$384,400`; draft `$336K-$384K` OK.
- State College Borough transfer tax: 3.00% of `$480,500` = `$14,415`; draft sometimes says `$13,500`, ERROR.

## Required known-risk checks

- **Erie:** DataUSA `$115,000-$120,000 (2024)` still present in root/FAQ; **WARNING**. Market-report/root do include March 2026 Redfin/ZHVI, so not a FAIL under dispatch rule.
- **KOP:** Zillow ZHVI `$498,174` present. `$349K-$399K` math is correct for 70–80%, but draft labels it 70–75% in key places; **ERROR**.
- **State College:** `$408,500` Zillow and `$480,500` Redfin both present and generally distinct; transfer tax errors remain; **ERROR**.
- **Kenosha:** ZHVI `$273,053` present and sourced as Zillow Research City ZHVI CSV / `2026-03-31`; **OK**. DOM/source-label issues remain; **ERROR**.
- **Wausau:** Realtor/FRED metro `$366,000` present and supported; **OK**.
- **Hartford:** Realtor/FRED metro `$455,000` present and supported; **OK**.
- **Racine DOM:** Racine `37 days` present; **OK**. Mount Pleasant DOM `44 days` not found as a separate surfaced row; **WARNING**. No crossed use of `44 days` found.

## Fix-before-publish summary

Minimum fixes required before this draft can pass Sentinel:

1. Remove or justify cross-market `$480,500` values in Bethlehem and Boston neighborhood copy.
2. Correct Kenosha DOM to `35 days`, fix Kenosha city/county/source wording, and align Kenosha cash-offer math.
3. Correct KOP `70–75%` vs `70–80%` offer language and stale time-to-close explanations.
4. Correct Racine/Mount Pleasant labels: `$336,759` is Mount Pleasant village ZHVI, not RDC metro hotness median; `84/100` is Compete Score, not average offers per home.
5. Correct State College 3.00% transfer-tax math and borough-vs-Centre-County tax wording.
6. Normalize Redfin date labels that incorrectly use `2026-03-31`; reserve exact `2026-03-31` for Zillow Research CSV values.
7. Clean mechanical `March–March 2026` footer typos and stale source-list mentions.
