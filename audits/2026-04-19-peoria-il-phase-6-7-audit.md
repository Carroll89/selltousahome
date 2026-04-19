# Forge Phase 6+7 Audit — Peoria IL

**Market:** Peoria IL (`peoria-il`) — Peoria County  
**Audit Timestamp:** 2026-04-19 00:47 EDT  
**Commit SHA Audited:** `c12682f3`  
**Auditor:** Forge 🔨 (independent post-deploy verifier — not Atlas self-audit)  
**Site:** https://www.selltousahome.com

---

## Phase 6: Technical SEO + Content QA

### 6.0 Sitemap & Robots

| Check | Result | Evidence |
|-------|--------|----------|
| sitemap.xml includes all market URLs | ✅ PASS | `curl https://www.selltousahome.com/sitemap.xml` — 13 `peoria-il` entries confirmed |
| sitemap uses `https://www.selltousahome.com/` base | ✅ PASS | All `<loc>` entries correctly prefixed |
| robots.txt no accidental Disallow | ✅ PASS | `User-Agent: * / Allow: / / Disallow: /api/ / Disallow: /admin/` |
| robots.txt sitemap URL correct | ✅ PASS | `Sitemap: https://www.selltousahome.com/sitemap.xml` |

### 6.1 Live URL Verification (HTTP 200)

| URL | HTTP Status |
|-----|-------------|
| `/markets/peoria-il` | ✅ 200 |
| `/markets/peoria-il/market-report` | ✅ 200 |
| `/markets/peoria-il/inherited-property` | ✅ 200 |
| `/markets/peoria-il/foreclosure` | ✅ 200 |
| `/markets/peoria-il/divorce-sale` | ✅ 200 |
| `/markets/peoria-il/probate` | ✅ 200 |
| `/markets/peoria-il/tenant-occupied` | ✅ 200 |
| `/markets/peoria-il/code-violations` | ✅ 200 |
| `/markets/peoria-il/fire-damage` | ✅ 200 |
| `/markets/peoria-il/faq` | ✅ 200 |
| `/markets/peoria-il/neighborhoods` | ✅ 200 |
| `/guides/sell-house-fast-peoria-il-2026` | ✅ 200 |
| `/.well-known/brand-facts.json` | ✅ 200 |

**All 13 URLs return HTTP 200. PASS.**

### 6.2 Technical SEO

| Check | Result | Evidence |
|-------|--------|----------|
| Title tag present + unique | ✅ PASS | `Sell My House Fast Peoria IL — Cash Offer in 24 Hours \| USA Home Buyers` |
| Title ≤60 chars | ⚠️ SOFT | **71 chars** — over 60-char recommended limit. Not a hard fail, but Google may truncate in SERPs. |
| Meta description present | ✅ PASS | `We buy houses in Peoria IL for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs…` |
| Single H1 per page | ✅ PASS | `Sell My House Fast Peoria IL — Cash Offer in 24 Hours` (1 H1 found) |
| Canonical URL correct (www) | ✅ PASS | `rel="canonical" href="https://www.selltousahome.com/markets/peoria-il"` |
| Open Graph title present | ✅ PASS | `Sell My House Fast Peoria IL — Cash Offer in 24 Hours \| USA Home Buyers` |
| Mobile viewport meta present | ✅ PASS | viewport meta found |
| `robots=index,follow` | ✅ PASS | Confirmed |
| No `/_next/image?url=` dynamic images | ✅ PASS | Zero instances |
| OG image URL returns 200 | ❌ HARD FAIL | `/images/peoria-il-hero.jpg` returns **404** — file only exists as `/images/optimized/peoria-il-hero-{640,828,1080,1200}.jpg`. Root non-optimized file not created/deployed. Affects social sharing and LocalBusiness schema `image` field. |

### 6.3 Schema Verification

| Check | Result | Evidence |
|-------|--------|----------|
| LocalBusiness schema present | ✅ PASS | `["LocalBusiness","RealEstateAgent"]` in JSON-LD |
| Correct city coordinates (not Harrisburg 40.2732/-76.8867) | ✅ PASS | `latitude: 40.6936, longitude: -89.589` — matches expected 40.6936/-89.5890 (trailing zero omitted in JSON, equivalent) |
| Peoria postal code correct | ✅ PASS | `postalCode: 61602` |
| Telephone correct | ✅ PASS | `telephone: +18884405250` |
| FAQPage schema present | ✅ PASS | FAQPage with 8 questions |
| HowTo schema present | ✅ PASS | HowTo block found |
| Article schema on market-report | ✅ PASS | Article type confirmed |
| Article + FAQPage on guide | ✅ PASS | Guide has Organization + Article + FAQPage |
| Organization schema sitewide | ✅ PASS | Present in all checked pages |

### 6.4 Content QA

| Check | Result | Evidence |
|-------|--------|----------|
| Hero image city-specific | ✅ PASS | `peoria-il-hero-{640,828,1080,1200}.jpg` — Peoria-specific imagery |
| Hero images ≤300KB per breakpoint | ✅ PASS | 640=59.6KB, 828=91.8KB, 1080=137.5KB, 1200=162.3KB — all well under limit |
| Static `<picture>` srcSet (no `/_next/image?url=`) | ✅ PASS | page.tsx:147 — static srcSet with all 4 breakpoints |
| Landmark hero file exists | ✅ PASS | `/images/optimized/peoria-il-landmark-grand-view-drive.jpg` returns 200 |
| Market data table present + values correct | ✅ PASS | ZHVI $115,649 (Zillow Feb 2026) ✅; Median sale $139,000 (Redfin Jan 2026) ✅ — spot-check 2/2 match |
| Transfer tax correct | ✅ PASS | `$800 on $200K sale: IL state $200 + Peoria County $100 + Peoria City RETT $500` (page.tsx:86,97-98). $500 city RETT differentiator confirmed. Three-layer stack explained correctly. |
| Peoria-specific $500 city RETT differentiator | ✅ PASS | page.tsx:98 explicitly: "Peoria City municipal ($2.50/$1,000, effective March 4, 2025) = $500" |
| No wrong-city refs | ✅ PASS | 0 instances of "Bloomington" or "Champaign" in peoria-il/page.tsx |
| Phone 888-440-5250 present | ✅ PASS | Confirmed in live HTML |
| Old Harrisburg phone (717-576-8192) absent | ✅ PASS | 0 instances |
| TL;DR word count (target 60-90) | ✅ PASS | 75 words — within range |
| "Last Updated" date visible | ⚠️ SOFT | No explicit "Last Updated" label on landing or market-report; dated citations used throughout |
| VideoEmbed blocks present | ⚠️ CARRY-FWD | 0 VideoEmbed blocks — expected; Lens is re-wiring. Do NOT fail. |

### 6.5 Form & CTA QA

| Check | Result | Evidence |
|-------|--------|----------|
| Form action → Rex webhook | ✅ PASS | `GHL_WEBHOOK_URL = 'https://rex-ghl-backend.onrender.com/webhooks/website-lead'` (lib/utils.ts:30) |
| `sourcePage` = `/markets/peoria-il` | ✅ PASS | page.tsx:187, 280, 324, 328 — all 4 form instances |
| Thank-you page (`/thank-you`) HTTP 200 | ✅ PASS | HTTP 200 confirmed |
| Form text color dark (`text-gray-900`) | ✅ PASS | CashOfferForm.tsx:231 |
| Exit-intent popup mounted | ✅ PASS | `ExitIntentPopup` in peoria-il/layout.tsx:2,9 |
| Sticky mobile CTA bar present | ✅ PASS | `MobileCallBar` in layout.tsx; `tel:+18884405250` confirmed |
| UTM fields captured | ✅ PASS | MultiStepForm.tsx:116-125 — all 4 UTM fields |
| Multi-step survey form | ✅ PASS | `<MultiStepForm sourcePage="/markets/peoria-il" />` page.tsx:324 |

### 6.6 Attribution Rule (NEW — HARD FAIL threshold)

**Requirement:** ≥2 inline attributions per situation page; ≥3 for market-report.  
Pattern: `According to`, `Per [Source]`, `Source:`.

| Page | Count | Result |
|------|-------|--------|
| inherited-property | 5 | ✅ PASS |
| foreclosure | 5 | ✅ PASS |
| divorce-sale | 4 | ✅ PASS |
| probate | 5 | ✅ PASS |
| tenant-occupied | 4 | ✅ PASS |
| code-violations | 5 | ✅ PASS |
| fire-damage | 4 | ✅ PASS |
| market-report | 6 | ✅ PASS (≥3) |

**All attribution checks PASS. No hard fail triggered. Peoria has the strongest attribution density of the 3 IL markets.**

### 6.7 AEO/GEO QA

| Check | Result | Evidence |
|-------|--------|----------|
| brand-facts.json includes Peoria | ✅ PASS | `{"city":"Peoria","state":"IL","url":"…/peoria-il"}` in live `.well-known/brand-facts.json` |
| ≥2 .gov/.edu citations per situation page | ⚠️ SOFT FAIL | inherited-property=0, divorce-sale=0, probate=1, tenant-occupied=0, code-violations=0 — FAILS on 5 of 7 pages. Only foreclosure (3) and fire-damage (8) pass. |
| "According to [Source]" attributions | ✅ PASS | Excellent coverage — 4-6 per page |
| No "approximately" in market content | ⚠️ SOFT | **2 instances** of "approximately" found in page.tsx:94,204. Per 6.7 rule this should be avoided. |
| ZHVI vs median sale price distinguished | ✅ PASS | Zillow ZHVI ($115,649) and Redfin median ($139,000) explicitly distinguished; notation that ZHVI ≠ median sale price |
| ≥5 external URL citations on FAQ/guide | ⚠️ SOFT | FAQ and guide pages: 0 embedded hyperlinks to external sources. Citations are text-only. |

### 6.8 Content Uniqueness

| Check | Result | Evidence |
|-------|--------|----------|
| Landing ≥800 words | ✅ PASS | ~7,933 words in page HTML |
| No wrong-city contamination | ✅ PASS | 0 Bloomington/Champaign refs |
| Peoria-specific narrative | ✅ PASS | South Side bungalows, East Bluff ranches, Grand View Drive, Caterpillar-era retiree homes, $500 city RETT differentiator — highly specific |

### 6.9 Multi-State / IL-State Checks

| Check | Result | Evidence |
|-------|--------|----------|
| IL state hub lists Peoria | ✅ PASS | `sell-house-fast-illinois/page.tsx:15,23,43,75` — "Peoria (Peoria County)" explicitly listed |
| All 5 IL markets in state hub | ✅ PASS | Springfield, Rockford, Peoria, Bloomington, Champaign-Urbana confirmed |
| Breadcrumbs | ✅ PASS | `Home › Peoria IL ›` confirmed in inherited-property page |

### 6.10 Blog + Internal Linking

| Check | Result | Evidence |
|-------|--------|----------|
| Blog post exists | ✅ PASS | `/blog/peoria-il-sell-house-fast-2026` returns 200 |
| Internal links per situation page | ✅ PASS | inherited-property/page.tsx:232-238 — 6-item related links block (Back to Peoria, Probate, Foreclosure, Divorce Sale, Code Violations, IL Legal Guide). Best of 3 IL markets. |

---

## Phase 7: AI Discoverability Audit

### 7.1 AI Bot Access

| Check | Result | Evidence |
|-------|--------|----------|
| AI bots NOT blocked | ✅ PASS | `User-Agent: * / Allow: /` |
| Explicit AI bot allowlist entries | ⚠️ SOFT | No named AI bot entries in robots.txt — same sitewide gap |
| llms.txt at root | ⚠️ SOFT | `/llms.txt` returns 404 |
| brand-facts.json machine-readable | ✅ PASS | `/.well-known/brand-facts.json` returns 200; Peoria entry present |

### 7.2 TL;DR / Summary Blocks

| Check | Result | Evidence |
|-------|--------|----------|
| TL;DR present on landing | ✅ PASS | TL;DR block confirmed |
| TL;DR word count (target 60-90) | ✅ PASS | 75 words — within range |
| TL;DR on situation pages | ✅ PASS | inherited-property has TL;DR |
| TL;DR on market-report | ✅ PASS | 1 TL;DR instance |

### 7.3 Schema Coverage for AI

| Check | Result | Evidence |
|-------|--------|----------|
| FAQPage on landing | ✅ PASS | 8 questions |
| Article schema on market-report | ✅ PASS | |
| LocalBusiness with geo + postal + phone | ✅ PASS | lat=40.6936, lon=-89.589, postalCode=61602, tel=+18884405250 |

### 7.4 Conceptual Density Spot-Check (market-report page)

- **$500 city RETT differentiator:** Explicit in FAQ, data table, and CTA ✅
- **South Side / East Bluff neighborhoods:** Named ✅
- **Grand View Drive:** Referenced ✅
- **Caterpillar narrative:** Present ✅
- **Citation quality:** 6 attribution markers in market-report ✅

---

## Hard Fails

| # | Check | Fail Detail | Remediation Owner |
|---|-------|-------------|-------------------|
| 1 | OG image URL 404 | `/images/peoria-il-hero.jpg` returns 404. Referenced in `page.tsx:24` (OG metadata) and `page.tsx:54` (LocalBusiness schema image). Only `/images/optimized/peoria-il-hero-*.jpg` exists. | **Atlas** — copy `/images/optimized/peoria-il-hero-1200.jpg` to `public/images/peoria-il-hero.jpg` OR update page.tsx:24,54 to reference `/images/optimized/peoria-il-hero-1200.jpg` |

---

## Soft Flags (Non-Blocking)

| # | Flag | Detail |
|---|------|--------|
| S1 | Title 71 chars (>60 recommended) | "Sell My House Fast Peoria IL — Cash Offer in 24 Hours \| USA Home Buyers" — Google may truncate. Consider shortening to `Sell My House Fast Peoria IL \| USA Home Buyers` (51 chars). (Owner: Atlas/Scribe) |
| S2 | "approximately" × 2 | page.tsx:94 ("approximately 5 days"), page.tsx:204 ("approximately 1.2%") — violates 6.7 precision rule. Replace with exact figures. (Owner: Scribe) |
| S3 | .gov/.edu citations low on 5 situation pages | inherited-property=0, divorce-sale=0, probate=1, tenant-occupied=0, code-violations=0. (Owner: Scribe) |
| S4 | No "Last Updated" label | Same gap as other 2 IL markets. (Owner: Atlas/Scribe) |
| S5 | llms.txt absent | Sitewide gap. (Owner: Atlas) |
| S6 | AI bot explicit entries absent in robots.txt | Functional access OK via wildcard. (Owner: Atlas) |
| S7 | No hyperlinked external citations | Text-based only. (Owner: Scribe) |
| S8 | Landmark non-standard naming | `peoria-il-landmark-grand-view-drive.jpg` vs expected `peoria-il-landmark-hero.jpg`. Works, non-standard. |

---

## Carry-Forward (Expected / Not Fail)

- **VideoEmbed blocks absent from landing:** Lens is re-wiring. Monitor after Lens completes.

---

## Final Verdict

**🟡 YELLOW**

- **Checks PASS:** 39
- **Checks FAIL (hard):** 1 (OG image 404)
- **Soft flags:** 8

**Top 3 findings:**
1. ✅ BEST: Strongest attribution density (4-6 per page) + best internal linking (6 links per situation page) of the 3 IL markets
2. ✅ BEST: $500 city RETT differentiator correctly implemented and prominently featured
3. ❌ OG image 404 — same root-image gap as Bloomington and Champaign. Quick Atlas fix needed.

**Peoria has the cleanest internal-link structure and strongest content differentiation of the 3 IL builds.**
