# Forge Phase 6+7 Audit — Champaign-Urbana IL

**Market:** Champaign-Urbana IL (`champaign-urbana-il`) — Champaign County  
**Audit Timestamp:** 2026-04-19 00:49 EDT  
**Commit SHA Audited:** `c12682f3`  
**Auditor:** Forge 🔨 (independent post-deploy verifier — not Atlas self-audit)  
**Site:** https://www.selltousahome.com

---

## Phase 6: Technical SEO + Content QA

### 6.0 Sitemap & Robots

| Check | Result | Evidence |
|-------|--------|----------|
| sitemap.xml includes all market URLs | ✅ PASS | `curl https://www.selltousahome.com/sitemap.xml` — 10 `champaign-urbana-il` entries confirmed (landing + 7 situation + faq + neighborhoods + guide) |
| sitemap uses correct base URL | ✅ PASS | `https://www.selltousahome.com/markets/champaign-urbana-il/…` |
| robots.txt no accidental Disallow | ✅ PASS | `User-Agent: * / Allow: /` |
| robots.txt sitemap URL correct | ✅ PASS | `Sitemap: https://www.selltousahome.com/sitemap.xml` |

### 6.1 Live URL Verification (HTTP 200)

| URL | HTTP Status |
|-----|-------------|
| `/markets/champaign-urbana-il` | ✅ 200 |
| `/markets/champaign-urbana-il/market-report` | ✅ 200 |
| `/markets/champaign-urbana-il/inherited-property` | ✅ 200 |
| `/markets/champaign-urbana-il/foreclosure` | ✅ 200 |
| `/markets/champaign-urbana-il/divorce-sale` | ✅ 200 |
| `/markets/champaign-urbana-il/probate` | ✅ 200 |
| `/markets/champaign-urbana-il/tenant-occupied` | ✅ 200 |
| `/markets/champaign-urbana-il/code-violations` | ✅ 200 |
| `/markets/champaign-urbana-il/fire-damage` | ✅ 200 |
| `/markets/champaign-urbana-il/faq` | ✅ 200 |
| `/markets/champaign-urbana-il/neighborhoods` | ✅ 200 |
| `/guides/sell-house-fast-champaign-urbana-il-2026` | ✅ 200 |
| `/.well-known/brand-facts.json` | ✅ 200 |

**All 13 URLs return HTTP 200. PASS.**

### 6.2 Technical SEO

| Check | Result | Evidence |
|-------|--------|----------|
| Title tag present + unique | ✅ PASS | `Sell My House Fast Champaign-Urbana IL \| USA Home Buyers` |
| Title ≤60 chars | ✅ PASS | 56 chars |
| Meta description present | ✅ PASS | `We buy houses in Champaign-Urbana IL for cash, as-is. Written offer in 24 hours, close in 7 days. No…` |
| Single H1 per page | ✅ PASS | `Sell My House Fast Champaign-Urbana IL — Cash Offer in 24 Hours` (1 H1 found) |
| Canonical URL correct (www) | ✅ PASS | `https://www.selltousahome.com/markets/champaign-urbana-il` |
| Open Graph title present | ✅ PASS | Confirmed |
| Mobile viewport meta present | ✅ PASS | Confirmed |
| `robots=index,follow` | ✅ PASS | Confirmed |
| No `/_next/image?url=` | ✅ PASS | Zero instances in live HTML |
| OG image URL returns 200 | ❌ HARD FAIL | `/images/champaign-urbana-il-hero.jpg` returns **404** — file only exists as `/images/optimized/champaign-urbana-il-hero-{640,828,1080,1200}.jpg`. Root-level hero image not created. Same issue as Bloomington and Peoria. |

### 6.3 Schema Verification

| Check | Result | Evidence |
|-------|--------|----------|
| LocalBusiness schema present | ✅ PASS | `["LocalBusiness","RealEstateAgent"]` |
| Correct city coordinates (not Harrisburg) | ✅ PASS | `latitude: 40.1164, longitude: -88.2434` — matches expected exactly |
| Champaign postal code correct | ✅ PASS | `postalCode: 61820` |
| City name in schema | ✅ PASS | `addressLocality: Champaign` |
| Telephone correct | ✅ PASS | `telephone: +18884405250` |
| FAQPage schema present | ✅ PASS | FAQPage with 6 questions (fewest of 3 markets — note below) |
| HowTo schema present | ✅ PASS | HowTo block found |
| Article schema on market-report | ✅ PASS | Article type confirmed |
| Article + FAQPage on guide | ✅ PASS | Guide has Organization + Article + FAQPage |
| Organization schema sitewide | ✅ PASS | Present in all checked pages |

**Note:** 6 FAQ questions vs 8 for Bloomington/Peoria. All valid Champaign-specific content (UIUC, Champaign County, transfer tax clarification). Soft observation only.

### 6.4 Content QA

| Check | Result | Evidence |
|-------|--------|----------|
| Hero image city-specific | ✅ PASS | `champaign-urbana-il-hero-{640,828,1080,1200}.jpg` — distinct Champaign-specific imagery |
| Hero images ≤300KB per breakpoint | ✅ PASS | 640=84.3KB, 828=141.1KB, 1080=236.5KB, 1200=291.9KB — all under 300KB (1200px at 291.9KB, just under limit) |
| Static `<picture>` srcSet | ✅ PASS | page.tsx:136-147 — static breakpoint sources, no dynamic URLs |
| Landmark hero file exists | ✅ PASS | `/images/optimized/champaign-urbana-il-landmark-alma-mater.jpg` returns 200 |
| Market data table + values correct | ✅ PASS | Metro ZHVI $226,978 (Zillow Feb 2026) ✅; Champaign city ZHVI $199,076 ✅; Urbana ZHVI $168,903 ✅; County median sale $230,000 (Redfin Feb 2026) ✅ |
| Transfer tax correct | ✅ PASS | `$300 on $200K (0.15% combined — state $200 + Champaign County $100, no municipal RETT)` — page.tsx:85,97-101 |
| .gov-typo clarification present | ✅ PASS | page.tsx:101 — "Important note: the Champaign County Clerk website states '1.5%' — that is a decimal-point typo on the official site. The correct rate is 0.15%, confirmed by the Clerk's own '2/3 state, 1/3 county' math." Differentiator present and authoritative. |
| No wrong-city refs | ✅ PASS | 0 instances of "Bloomington" or "Peoria" in champaign-urbana-il/page.tsx |
| Phone 888-440-5250 present | ✅ PASS | Confirmed in live HTML |
| Old Harrisburg phone absent | ✅ PASS | 0 instances |
| TL;DR word count (target 60-90) | ✅ PASS | 85 words — within range |
| "Last Updated" date visible | ⚠️ SOFT | No explicit label; dated citations only |
| VideoEmbed blocks present | ⚠️ CARRY-FWD | 0 VideoEmbed blocks — expected; Lens re-wiring in progress |

### 6.5 Form & CTA QA

| Check | Result | Evidence |
|-------|--------|----------|
| Form action → Rex webhook | ✅ PASS | `GHL_WEBHOOK_URL = 'https://rex-ghl-backend.onrender.com/webhooks/website-lead'` |
| `sourcePage` = `/markets/champaign-urbana-il` | ✅ PASS | page.tsx:176, 250, 299, 303 — all 4 form instances correct |
| Thank-you page HTTP 200 | ✅ PASS | Confirmed |
| Form text color dark (`text-gray-900`) | ✅ PASS | CashOfferForm.tsx:231 |
| Exit-intent popup mounted | ✅ PASS | `ExitIntentPopup` in champaign-urbana-il/layout.tsx:2,9 |
| Sticky mobile CTA bar | ✅ PASS | `MobileCallBar` in layout.tsx; `tel:+18884405250` |
| UTM fields captured | ✅ PASS | `source_market`, `source_page_type`, `source_channel`, `first_touch_url` |
| Multi-step survey form | ✅ PASS | `<MultiStepForm sourcePage="/markets/champaign-urbana-il" />` |

### 6.6 Attribution Rule (NEW — HARD FAIL threshold)

**Requirement:** ≥2 inline attributions per situation page; ≥3 for market-report.

| Page | Count | Result |
|------|-------|--------|
| inherited-property | 2 | ✅ PASS (at minimum) |
| foreclosure | 2 | ✅ PASS (at minimum) |
| divorce-sale | 2 | ✅ PASS (at minimum) |
| probate | 2 | ✅ PASS (at minimum) |
| tenant-occupied | 3 | ✅ PASS |
| code-violations | 2 | ✅ PASS |
| fire-damage | 3 | ✅ PASS |
| market-report | 8 | ✅ PASS (≥3) |

**All attribution checks PASS. No hard fail triggered.**  
**Note:** Several situation pages are at the minimum (2). Champaign-Urbana has the thinnest attribution coverage of the 3 markets. Recommend Scribe densify to 3-4 per page in next pass.

### 6.7 AEO/GEO QA

| Check | Result | Evidence |
|-------|--------|----------|
| brand-facts.json includes Champaign-Urbana | ✅ PASS | `{"city":"Champaign-Urbana","state":"IL","url":"…/champaign-urbana-il"}` in live JSON |
| ≥2 .gov/.edu citations per situation page | ⚠️ SOFT FAIL | inherited-property=1, foreclosure=0, probate=1 — 3 of 7 below threshold. divorce-sale=2✅, tenant-occupied=3✅, code-violations=2✅, fire-damage=20✅ |
| "According to [Source]" attributions | ✅ PASS | Present throughout all pages |
| No "approximately" in market content | ✅ PASS | 0 instances |
| ZHVI vs median distinguished | ✅ PASS | Three distinct ZHVI values (metro, Champaign, Urbana) + county median all separately cited |
| ≥5 external URL citations on FAQ/guide | ⚠️ SOFT | 0 embedded hyperlinks; text-based citations only |

### 6.8 Content Uniqueness

| Check | Result | Evidence |
|-------|--------|----------|
| Landing ≥800 words | ✅ PASS | ~6,824 words (lowest of 3 IL markets but well above 800 minimum) |
| No wrong-city contamination | ✅ PASS | 0 refs to other IL markets |
| Champaign-Urbana-specific narrative | ✅ PASS | UIUC faculty relocations, student-rental landlord exits, Alma Mater statue, 1.5%→0.15% .gov-typo clarification — highly unique differentiator |

### 6.9 Multi-State / IL-State Checks

| Check | Result | Evidence |
|-------|--------|----------|
| IL state hub lists Champaign-Urbana | ✅ PASS | `sell-house-fast-illinois/page.tsx:15,23,43,75` — "Champaign-Urbana (Champaign County)" listed |
| All 5 IL markets in state hub | ✅ PASS | All 5 confirmed |
| Breadcrumbs | ✅ PASS | `Home › Champaign-Urbana IL ›` in situation page breadcrumbs |

### 6.10 Blog + Internal Linking

| Check | Result | Evidence |
|-------|--------|----------|
| Blog post exists | ✅ PASS | `/blog/champaign-urbana-il-sell-house-fast-2026` returns 200 |
| Internal links per situation page | ⚠️ SOFT FLAG | **Mixed:** inherited-property (4 links) and divorce-sale (4 links) have related-links sections. Other 5 situation pages (foreclosure, probate, tenant-occupied, code-violations, fire-damage) have **1 link only** (breadcrumb). Inconsistent internal link depth — 5 pages below Peoria's standard. (Owner: Atlas) |

---

## Phase 7: AI Discoverability Audit

### 7.1 AI Bot Access

| Check | Result | Evidence |
|-------|--------|----------|
| AI bots NOT blocked | ✅ PASS | `User-Agent: * / Allow: /` |
| Explicit AI bot allowlist entries | ⚠️ SOFT | No named AI bot entries — sitewide gap |
| llms.txt at root | ⚠️ SOFT | `/llms.txt` returns 404 |
| brand-facts.json machine-readable | ✅ PASS | Champaign-Urbana entry present; 25 markets; lastUpdated=2026-04-19 |

### 7.2 TL;DR / Summary Blocks

| Check | Result | Evidence |
|-------|--------|----------|
| TL;DR present on landing | ✅ PASS | 1 TL;DR block confirmed |
| TL;DR word count (target 60-90) | ✅ PASS | 85 words |
| TL;DR on situation pages | ✅ PASS | inherited-property confirmed |
| TL;DR on market-report | ✅ PASS | 1 instance |

### 7.3 Schema Coverage for AI

| Check | Result | Evidence |
|-------|--------|----------|
| FAQPage on landing | ✅ PASS | 6 questions |
| Article schema on market-report | ✅ PASS | |
| LocalBusiness with exact coordinates | ✅ PASS | lat=40.1164, lon=-88.2434 — highest coordinate precision match of 3 IL markets |

### 7.4 Conceptual Density Spot-Check (market-report)

- **UIUC + student rental narrative:** Present — "UIUC faculty relocations, tired student-rental landlords" ✅
- **.gov-typo differentiator:** Explicitly named in FAQ, data table, and CTA copy — unique content ✅
- **Three ZHVI values:** Metro ($226,978), Champaign ($199,076), Urbana ($168,903) — granular ✅
- **Champaign County Clerk citation:** Referenced authoritatively ✅
- **Attribution in market-report:** 8 markers — excellent ✅

---

## Hard Fails

| # | Check | Fail Detail | Remediation Owner |
|---|-------|-------------|-------------------|
| 1 | OG image URL 404 | `/images/champaign-urbana-il-hero.jpg` returns 404. Referenced in `page.tsx:24` (OG metadata) and `page.tsx:53` (LocalBusiness schema image). Only `/images/optimized/champaign-urbana-il-hero-*.jpg` exists. Same root-image gap as all 3 IL markets — systematic Atlas build gap. | **Atlas** — copy `public/images/optimized/champaign-urbana-il-hero-1200.jpg` to `public/images/champaign-urbana-il-hero.jpg`, or update metadata references in `page.tsx:24,53` |

---

## Soft Flags (Non-Blocking)

| # | Flag | Detail |
|---|------|--------|
| S1 | Internal links inconsistent | 2 of 7 situation pages have 4 links (inherited-property, divorce-sale); other 5 have only 1 (breadcrumb). Needs full related-links block on all 5. (Owner: Atlas) |
| S2 | Attribution density thin | 4 pages at minimum (2 attributions each). Target 3-4 per page. (Owner: Scribe) |
| S3 | .gov/.edu citations below threshold on 3 pages | inherited-property=1, foreclosure=0, probate=1. (Owner: Scribe) |
| S4 | FAQ question count (6 vs 8 for others) | Lowest FAQ count of the 3 IL markets. Consider adding 2 UIUC-specific FAQs. (Owner: Scribe) |
| S5 | No "Last Updated" label | Sitewide gap. (Owner: Atlas/Scribe) |
| S6 | llms.txt absent | Sitewide gap. (Owner: Atlas) |
| S7 | AI bot explicit entries absent | Functional access OK. (Owner: Atlas) |
| S8 | No hyperlinked external citations | Text-based only. (Owner: Scribe) |
| S9 | Landmark non-standard naming | `champaign-urbana-il-landmark-alma-mater.jpg` vs expected `champaign-urbana-il-landmark-hero.jpg`. Works, non-standard. |
| S10 | 1200px hero near 300KB limit | 291.9KB — passes but leave <10KB headroom. Flag for next image optimization pass. |

---

## Carry-Forward (Expected / Not Fail)

- **VideoEmbed blocks absent from landing:** Lens is re-wiring. Monitor after Lens completes.

---

## Final Verdict

**🟡 YELLOW**

- **Checks PASS:** 37
- **Checks FAIL (hard):** 1 (OG image 404)
- **Soft flags:** 10

**Top 3 findings:**
1. ✅ BEST: .gov-typo differentiator (1.5% → 0.15%) is the sharpest content differentiator of all 3 IL markets — unique, verifiable, defensible claim that AI crawlers will pick up
2. ✅ PASS: Attribution rule fully satisfied (all pages ≥2, market-report ≥3)
3. ❌ OG image 404 — same systematic Atlas gap across all 3 markets; quick fix
