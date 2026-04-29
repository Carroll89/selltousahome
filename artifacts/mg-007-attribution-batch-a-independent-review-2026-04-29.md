# MG-007 Attribution Batch A — Independent Review

Generated: 2026-04-29 16:xx EDT
Reviewer: Sentinel-style independent reviewer
Site repo: `/Users/agents/.openclaw/workspace-seo-commander/site`

## Verdict

`PASS_WITH_FIXES`

The MG-007 Batch A attribution implementation is within scope and safe to proceed to Foreman publish flow after this review. I made four tiny obvious copy/source-framing fixes during review, documented below.

## Changed-file scope reviewed

`git diff --name-only` showed exactly the 14 MG-007 Batch A files:

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

No market-data files, `dateModified`, schema helpers, sitemap, globals, package files, market roots, reports, FAQs, neighborhoods, blogs, guides, or state hubs were changed.

## Fixes applied during review

1. `app/markets/erie-pa/tenant-occupied/page.tsx`
   - Fixed obvious grammar introduced/left in copy: `a a large share of older homes housing stock` → `older housing stock`.

2. `app/markets/harrisburg-pa/code-violations/page.tsx`
   - Softened unsupported exact buyer-pool claim: `cuts out 80 to 90 percent of your buyer pool` → `narrows the buyer pool`.

3. `app/markets/harrisburg-pa/tenant-occupied/page.tsx`
   - Softened categorical tenant-notice claim: `Pennsylvania requires written notice to tenants before the property is sold` → notice depends on lease/access needs/PA landlord-tenant rules.

4. `app/markets/harrisburg-pa/tenant-occupied/page.tsx`
   - Softened exact month-to-month/showing notice claims: removed `15-30 days` and `at least 24 hours`; reframed to lease and Pennsylvania landlord-tenant rules.

These were narrow copy fixes only. No commit/push/deploy.

## Representative claim/source-framing findings

- Erie divorce/fire/foreclosure/inherited/probate/property-liens/tenant pages now include or retain official/source-near-claim framing for PA equitable distribution, PA realty transfer tax, Seller Disclosure Law, Act 91/HEMAP, Erie Register of Wills, Erie Recorder of Deeds, and PA Landlord and Tenant Act.
- Harrisburg code/fire/foreclosure/inherited/probate/property-liens/tenant pages now include or retain official/source-near-claim framing for Harrisburg Bureau of Codes, Dauphin Tax Claim Bureau, Seller Disclosure Law, Act 91/HEMAP, Dauphin Register of Wills, PA letters authority, and PA Landlord and Tenant Act.
- Unsupported exact timeline/stat/value claims from the MG-006 Batch A risk set were either source-framed or softened. Remaining `24 hours` language is conversion/offer language, not a legal/process/stat citation issue.
- Canonical authority phone remains source-driven by `lib/utils.ts` (`PHONE` default `888-274-5006`) and explicit Harrisburg CTAs retain `888-274-5006`. Old `888-440-5250` variants are absent from the changed files.

## Gate results

- Repo base: `HEAD=1fbca9a`, `origin/main=1fbca9a` at review start.
- Scope check: PASS — exactly 14 scoped TSX files changed; no out-of-scope changed files.
- Old phone grep: PASS — no `888-440-5250`, `18884405250`, or `tel:+18884405250` variants in changed files.
- Risk phrase grep: PASS after fixes — no matches for reviewed exact-risk patterns including `7-14`, `7 to 14`, `7 days`, `14 days`, `60-75`, `24-hour`, `15-day`, `No right of redemption`, `23%`, `77%`, `~50%`, `2% transfer`, `120-day`, `IRS has`, `12-18 months`, `9-18 months`, `3-8 months`, `80 to 90`, `15-30 days`, `at least 24 hours`, `a a`, or `fasts`.
- `git diff --check`: PASS.
- `npm run lint`: PASS (`No ESLint warnings or errors`).
- `npm run build`: PASS (Next build compiled successfully; static pages generated `411/411`).

## Required fixes remaining

None found in MG-007 Batch A scope.

## Evidence stub

Review evidence file:
`/Users/agents/.openclaw/workspace-market-governance-foreman/evidence/mg-007-attribution-batch-a-independent-review-2026-04-29.md`

Verdict: `PASS_WITH_FIXES`
