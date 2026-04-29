# MG-007 Attribution Batch A Implementation Evidence — 2026-04-29

## Scope
Mutated only the 14 Batch A situation pages in `/Users/agents/.openclaw/workspace-seo-commander/site`:
- `app/markets/erie-pa/divorce-sale/page.tsx`
- `app/markets/erie-pa/fire-damage/page.tsx`
- `app/markets/erie-pa/foreclosure/page.tsx`
- `app/markets/erie-pa/inherited-property/page.tsx`
- `app/markets/erie-pa/probate/page.tsx`
- `app/markets/erie-pa/property-liens/page.tsx`
- `app/markets/erie-pa/tenant-occupied/page.tsx`
- `app/markets/harrisburg-pa/code-violations/page.tsx`
- `app/markets/harrisburg-pa/fire-damage/page.tsx`
- `app/markets/harrisburg-pa/foreclosure/page.tsx`
- `app/markets/harrisburg-pa/inherited-property/page.tsx`
- `app/markets/harrisburg-pa/probate/page.tsx`
- `app/markets/harrisburg-pa/property-liens/page.tsx`
- `app/markets/harrisburg-pa/tenant-occupied/page.tsx`

No commits, pushes, deploys, schema, sitemap, package, market-data, state hub, market root, FAQ directory, neighborhood, guide, blog, or report files were touched.

## Consulted source URLs
Successful/useful:
- Pennsylvania Seller Disclosure Law, Title 68 Ch. 73: https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/68/00.073..HTM
- Pennsylvania equitable distribution / divorce property sale authority, 23 Pa.C.S. § 3502: https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/23/00.035.002.000..HTM
- Pennsylvania Department of Revenue realty transfer tax: https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax
- Erie County Register of Wills: https://courts.eriecountypa.gov/index.php/departments/clerk-of-records/register-of-wills/
- Erie County Recorder of Deeds: https://courts.eriecountypa.gov/index.php/departments/clerk-of-records/recorder-of-deeds/
- Dauphin County Register of Wills / Clerk of Orphans' Court: https://www.dauphincounty.gov/government/publicly-elected-officials/register-of-wills-clerk-of-orphans-court
- Dauphin County Tax Claim Bureau: https://www.dauphincounty.gov/government/support-services/property-taxes/tax-claim
- Pennsylvania Landlord and Tenant Act of 1951: https://www.legis.state.pa.us/WU01/LI/LI/US/HTM/1951/0/0020..HTM
- Pennsylvania Title 20 § 3155 letters testamentary / administration: https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/20/00.031.055.000..HTM
- Pennsylvania Bulletin PHFA / Act 91 / HEMAP notice: https://www.pacodeandbulletin.gov/Display/pabull?file=/secure/pabulletin/data/vol42/42-33/1613.html
- Erie Fire Inspections page: https://www.erie.pa.us/business/office_of_development_services/code_enforcement/fire_inspection.php
- PA Courts foreclosure article (broad context only): https://www.pacourts.us/news-and-statistics/news/news-detail/900/state-of-mortgage-foreclosures-in-pennsylvania
- Census API spot checks for Erie/Harrisburg housing tenure / age variables were successful, but unsupported exact local stat copy was softened/removed rather than retained.

Attempted/limited:
- PHFA old HEMAP URL `https://www.phfa.org/homeowners/hemap.aspx` returned 404; used PA Bulletin Act 91/HEMAP notice instead.
- PA Courts self-help foreclosure URL `https://www.pacourts.us/learn/representing-yourself/foreclosure` returned 404; used PA Bulletin and softened local timeline claims.
- Harrisburg Bureau of Codes page was Cloudflare-blocked by fetch, but search snippets confirmed broad office context; copy was softened and not used for exact legal claims.
- Census QuickFacts fetch was Cloudflare-blocked; Census API worked, but exact percentage copy was removed/softened where not necessary.

## Implementation notes by page
- Erie divorce-sale: replaced exact 7–14 day and 2% transfer-tax claims; added inline PA equitable distribution and PA DOR transfer-tax framing; softened proceeds distribution to deed/closing instructions/agreement/court order.
- Erie fire-damage: added inline Seller Disclosure Law support; softened close timing and transfer-tax wording.
- Erie foreclosure: softened local foreclosure timeline, Act 91 deadline, redemption/upset-bid claims, poverty stats, and exact close timing; added PA Bulletin Act 91/HEMAP framing.
- Erie inherited-property: added Erie Register of Wills / PA letters framing; removed exact 2% transfer-tax example and exact older-housing percentage; softened probate/timing language.
- Erie probate: added Erie Register of Wills / PA letters framing; softened probate timing and transfer-tax language.
- Erie property-liens: added Erie Recorder of Deeds attribution; softened poverty-stat language.
- Erie tenant-occupied: added Landlord and Tenant Act framing; softened exact notice, entry, renter-rate, poverty, older-housing, and ARV discount claims.
- Harrisburg code-violations: added Harrisburg Codes / Dauphin Tax Claim attribution; fixed unsupported exact fast-close phrasing and softened title/lien timing.
- Harrisburg fire-damage: added Seller Disclosure Law and Bureau of Codes framing; softened exact restoration cost/time and close-timing claims.
- Harrisburg foreclosure: softened 12–18 month, conciliation, Act 91, Act 6/right-to-cure, and exact close claims; added PA Bulletin Act 91/HEMAP framing.
- Harrisburg inherited-property: added Dauphin Register of Wills / PA letters framing; softened probate authority/timing language.
- Harrisburg probate: added Dauphin Register of Wills / PA letters framing; softened probate timeline and exact close timing.
- Harrisburg property-liens: added Dauphin Tax Claim Bureau attribution; softened IRS redemption claim.
- Harrisburg tenant-occupied: added Landlord and Tenant Act framing; softened security-deposit handling and exact close timing.

## Checklist
- [x] 14 scoped TSX files reviewed and patched.
- [x] Inline official/source-near-claim framing added near legal/process/tax/probate/tenant/foreclosure/lien claims.
- [x] Unsupported exact numbers/timelines/stat claims softened or removed.
- [x] Conversion language preserved where safe.
- [x] No prohibited files intentionally edited.
- [x] `git diff --check` run from site repo.

## Validation
- Scope check: `git diff --name-only` showed only the 14 scoped TSX files before this evidence file was written outside the site repo.
- Risk grep: searched scoped files for unsupported exact patterns including `7-14`, `7 days`, `60-75`, `24-hour`, `15-day`, `No right of redemption`, `23%`, `77%`, `~50%`, `2% transfer`, `one hour before`, `IRS has a 120-day`, restoration cost ranges, and stale typo `fasts`; no matches remained after cleanup.
- `git diff --check` result: clean (no whitespace errors).

## Blockers
- None blocking implementation.
- Remaining caveat: some existing non-edited style issues such as `className="px4"` in Harrisburg transcript blocks pre-existed and were left untouched because they are outside MG-007 attribution scope.
- `npm run lint` result: clean (Next lint: no warnings or errors).
- Final unsupported-pattern grep result: no matches for the listed exact timeline/stat/risk phrases.
