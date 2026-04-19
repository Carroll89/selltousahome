# Forge Phase 6+7 Audit — Bloomington IL

**Market:** Bloomington IL (`bloomington-il`) — McLean County  
**Audit Timestamp:** 2026-04-19 00:45 EDT  
**Commit SHA Audited:** `c12682f3`  
**Auditor:** Forge 🔨 (independent post-deploy verifier — not Atlas self-audit)  
**Site:** https://www.selltousahome.com

---

## Phase 6: Technical SEO + Content QA

### 6.0 Sitemap & Robots

| Check | Result | Evidence |
|-------|--------|----------|
| sitemap.xml includes all market URLs | ✅ PASS | `curl https://www.selltousahome.com/sitemap.xml` — 13 `bloomington-il` entries found |
| sitemap uses `https://www.selltousahome.com/` base | ✅ PASS | All `<loc>` tags use `https://www.selltousahome.com/` |
| robots.txt no accidental Disallow | ✅ PASS | `User-Agent: * / Allow: / / Disallow: /api/ / Disallow: /admin/` — market pages unrestricted |
| robots.txt sitemap URL correct | ✅ PASS | `Sitemap: https://www.selltousahome.com/sitemap.xml` |

### 6.1 Live URL Verification (HTTP 200)

| URL | HTTP Status |
|-----|-------------|
| `/markets/bloomington-il` | ✅ 200 |
| `/markets/bloomington-il/market-report` | ✅ 200 |
| `/markets/bloomington-il/inherited-property` | ✅ 200 |
| `/markets/bloomington-il/foreclosure` | ✅ 200 |
| `/markets/bloomington-il/divorce-sale` | ✅ 200 |
| `/markets/bloomington-il/probate` | ✅ 200 |
| `/markets/bloomington-il/tenant-occupied` | ✅ 200 |
| `/markets/bloomington-il/code-violations` | ✅ 200 |
| `/markets/bloomington-il/fire-damage` | ✅ 200 |
| `/markets/bloomington-il/faq` | ✅ 200 |
| `/markets/bloomington-il/neighborhoods` | ✅ 200 |
| `/guides/sell-house-fast-bloomington-il-2026` | ✅ 200 |
| `/.well-known/brand-facts.json` | ✅ 200 |

**All 13 URLs return HTTP 200. PASS.**

### 6.2 Technical SEO

| Check | Result | Evidence |
|-------|--------|----------|
| Title tag present + unique | ✅ PASS | `Sell My House Fast Bloomington IL \| USA Home Buyers` |
| Title ≤60 chars | ✅ PASS | 51 chars |
| Meta description present | ✅ PASS | `We buy houses in Bloomington IL for cash, as-is. Written offer in 24 hours, close in 7 days. No repa…` |
| Single H1 per page | ✅ PASS | `Sell My House Fast Bloomington IL — Cash Offer in 24 Hours` (1 H1 found) |
| Canonical URL correct (www) | ✅ PASS | `rel="canonical" href="https://www.selltousahome.com/markets/bloomington-il"` |
| Open Graph title present | ✅ PASS | `Sell My House Fast Bloomington IL \| USA Home Buyers` |
| Mobile viewport meta present | ✅ PASS | viewport meta found in HTML |
| `robots=index,follow` | ✅ PASS | `name="robots" content="index, follow"` |
| No `/_next/image?url=` dynamic images | ✅ PASS | Zero instances in live HTML |
| OG image URL returns 200 | ❌ HARD FAIL | `/images/bloomington-il-hero.jpg` returns **404** — file exists only as `/images/optimized/bloomington-il-hero-{breakpoint}.jpg`; root non-optimized file was not created. Affects social sharing and LLM crawlers. |

### 6.3 Schema Verification

| Check | Result | Evidence |
|-------|--------|----------|
| LocalBusiness schema present | ✅ PASS | `["LocalBusiness","RealEstateAgent"]` in JSON-LD |
| Correct city coordinates (not Harrisburg 40.2732/-76.8867) | ✅ PASS | `latitude: 40.4798, longitude: -88.9939` — matches source data file line 32: "Latitude: 40.4798°N" |
| Coordinates note | ⚠️ NOTE | Task brief cited 40.4842/-88.9937; data file (`bloomington-il-market-data.md:32`) records 40.4798°N. Schema matches data file. No Harrisburg coords detected. |
| Bloomington postal code correct | ✅ PASS | `postalCode: 61701` |
| Telephone correct | ✅ PASS | `telephone: +18884405250` |
| FAQPage schema present | ✅ PASS | FAQPage with 8 questions |
| HowTo schema present | ✅ PASS | HowTo block found |
| Article schema on market-report | ✅ PASS | `Article` type in market-report JSON-LD |
| Article + FAQPage on guide | ✅ PASS | Guide has Organization + Article + FAQPage |
| Organization schema sitewide | ✅ PASS | Organization block present in all checked pages |

### 6.4 Content QA

| Check | Result | Evidence |
|-------|--------|----------|
| Hero image city-specific | ✅ PASS | `bloomington-il-hero-{640,828,1080,1200}.jpg` — distinct from prior markets |
| Hero images ≤300KB per breakpoint | ✅ PASS | 640=70.7KB, 828=112.9KB, 1080=176.6KB, 1200=211.7KB — all clear |
| Static `<picture>` srcSet (no `/_next/image?url=`) | ✅ PASS | `<picture>` block with static `/images/optimized/` paths; no dynamic Next.js image URLs |
| Landmark hero file exists | ✅ PASS | `/images/optimized/bloomington-il-landmark-davis-mansion.jpg` exists and returns 200 |
| Market data table present + values correct | ✅ PASS | ZHVI $228,634 (Zillow Feb 2026) ✅; Median sale $300,000 (Redfin Mar 2026) ✅; Income $77,384 (ACS 2024) ✅; Property tax 2.62% ✅ — spot-check 4/4 match source file |
| Transfer tax correct | ✅ PASS | `$300 on $200K sale (0.15%) — no municipal RETT` — page.tsx:228; per source data and checklist rule |
| No wrong-city refs | ✅ PASS | 0 instances of "Peoria" or "Champaign" in bloomington-il/page.tsx |
| Phone 888-440-5250 present | ✅ PASS | Confirmed in live HTML |
| Old Harrisburg phone (717-576-8192) absent | ✅ PASS | 0 instances |
| TL;DR word count | ⚠️ SOFT | TL;DR body = **92 words** (target 60-90). Over by 2 words. |
| "Last Updated" date visible | ⚠️ SOFT | Not found in market landing or market-report pages; content uses dated citations (Feb/Mar 2026) but no explicit "Last Updated" label |
| VideoEmbed blocks present | ⚠️ CARRY-FWD | 0 VideoEmbed blocks — **expected**; Lens is re-wiring IL video blocks. Do NOT fail on this. |

### 6.5 Form & CTA QA

| Check | Result | Evidence |
|-------|--------|----------|
| Form action → Rex webhook | ✅ PASS | `GHL_WEBHOOK_URL = 'https://rex-ghl-backend.onrender.com/webhooks/website-lead'` (lib/utils.ts:30) |
| `sourcePage` = `/markets/bloomington-il` | ✅ PASS | page.tsx:185, 266, 312, 316 — all 4 form instances |
| Thank-you page (`/thank-you`) HTTP 200 | ✅ PASS | HTTP 200 confirmed |
| Form text color dark (`text-gray-900`) | ✅ PASS | CashOfferForm.tsx:231 — `text-gray-900` on inputs |
| Exit-intent popup mounted | ✅ PASS | `ExitIntentPopup` in layout.tsx:2,9 |
| Sticky mobile CTA bar present | ✅ PASS | `MobileCallBar` in layout.tsx:8; uses `PHONE` = `888-440-5250` |
| `tel:+18884405250` in sticky bar | ✅ PASS | MobileCallBar.tsx:12 — `href={\`tel:${tel}\`}` |
| UTM fields captured | ✅ PASS | MultiStepForm.tsx:116-125 — `source_market`, `source_page_type`, `source_channel`, `first_touch_url` |
| Multi-step survey form below fold | ✅ PASS | `<MultiStepForm sourcePage="/markets/bloomington-il" />` page.tsx:312 |

### 6.6 Attribution Rule (NEW — HARD FAIL threshold)

**Requirement:** ≥2 inline attributions per situation page; ≥3 for market-report.  
Pattern: `According to`, `Per [Source]`, `Source:`.

| Page | Count | Result |
|------|-------|--------|
| inherited-property | 3 | ✅ PASS |
| foreclosure | 4 | ✅ PASS |
| divorce-sale | 3 | ✅ PASS |
| probate | 2 | ✅ PASS |
| tenant-occupied | 4 | ✅ PASS |
| code-violations | 3 | ✅ PASS |
| fire-damage | 10 | ✅ PASS |
| market-report | 4 | ✅ PASS (≥3) |

**All attribution checks PASS. No hard fail triggered.**

### 6.7 AEO/GEO QA

| Check | Result | Evidence |
|-------|--------|----------|
| brand-facts.json includes Bloomington | ✅ PASS | Live `.well-known/brand-facts.json`: `{"city":"Bloomington","state":"IL","url":"…/bloomington-il"}` present; 25 markets total, lastUpdated=2026-04-19 |
| ≥2 .gov/.edu citations per situation page | ⚠️ SOFT FAIL | inherited-property=1, foreclosure=0, divorce-sale=1 — below threshold on 3 of 7 pages. probate=2✅, tenant-occupied=2✅, code-violations=3✅, fire-damage=22✅ |
| "According to [Source]" attributions | ✅ PASS | Extensive inline attributions throughout |
| No "approximately" in market content | ✅ PASS | 0 instances in page.tsx |
| ZHVI vs median sale price distinguished | ✅ PASS | ZHVI (Zillow) and median sale price (Redfin) explicitly distinguished throughout |
| ≥5 external URL citations on FAQ/guide | ⚠️ SOFT | FAQ and guide pages have 0 embedded hyperlinks; citations are text-only ("According to Zillow (Feb 2026)"). No linked hrefs to external sources. |

### 6.8 Content Uniqueness

| Check | Result | Evidence |
|-------|--------|----------|
| Landing ≥800 words | ✅ PASS | ~8,231 words in page HTML |
| No wrong-city contamination | ✅ PASS | 0 Peoria/Champaign refs in landing |
| State Farm narrative present | ✅ PASS | "State Farm world headquarters," Founders' Grove, ISU — market-specific narrative throughout |

### 6.9 Multi-State / IL-State Checks

| Check | Result | Evidence |
|-------|--------|----------|
| IL state hub (`/sell-house-fast-illinois`) lists Bloomington | ✅ PASS | page.tsx:15,23,43 — "Bloomington (McLean County)" explicitly listed |
| All 5 IL markets listed in state hub | ✅ PASS | Springfield, Rockford, Peoria, Bloomington, Champaign-Urbana — all confirmed |
| Breadcrumbs: Home → IL hub → Market | ✅ PASS | `Home › Illinois › Bloomington IL` pattern in breadcrumbs |

### 6.10 Blog + Internal Linking

| Check | Result | Evidence |
|-------|--------|----------|
| Blog post exists | ✅ PASS | `/blog/bloomington-il-sell-house-fast-2026` returns 200 |
| Internal links per situation page | ⚠️ SOFT FLAG | All 7 situation pages have **1 internal link** (breadcrumb only). No related-links block. Peoria situation pages have 6 links each. Atlas needs to add related-links section to Bloomington situation pages (same pattern as peoria-il). |

---

## Phase 7: AI Discoverability Audit

### 7.1 AI Bot Access

| Check | Result | Evidence |
|-------|--------|----------|
| AI bots NOT blocked | ✅ PASS | `User-Agent: * / Allow: /` — GPTBot, ClaudeBot, PerplexityBot, Google-Extended all allowed via global wildcard |
| Explicit AI bot allowlist entries | ⚠️ SOFT | robots.txt has no named AI bot entries (GPTBot, Google-Extended, ClaudeBot, PerplexityBot). Functional access is granted via `User-Agent: *` but no positive signal to AI crawlers. |
| llms.txt at root | ⚠️ SOFT | `https://www.selltousahome.com/llms.txt` returns **404** — file not found in `public/` directory |
| brand-facts.json machine-readable | ✅ PASS | `/.well-known/brand-facts.json` returns 200; includes Bloomington IL entry |

### 7.2 TL;DR / Summary Blocks

| Check | Result | Evidence |
|-------|--------|----------|
| TL;DR present on landing | ✅ PASS | TL;DR block present (page.tsx — 1 instance) |
| TL;DR word count (target 60-90) | ⚠️ SOFT | 92 words — 2 words over target |
| TL;DR present on situation pages | ✅ PASS | inherited-property confirmed with TL;DR block |
| TL;DR present on market-report | ✅ PASS | 1 TL;DR instance in market-report |

### 7.3 Schema Coverage for AI

| Check | Result | Evidence |
|-------|--------|----------|
| FAQPage on landing | ✅ PASS | 8 questions |
| FAQPage on guide | ✅ PASS | Article + FAQPage on guide page |
| Article schema on market-report | ✅ PASS | |
| Organization sitewide | ✅ PASS | |
| LocalBusiness with geo | ✅ PASS | `lat=40.4798, lon=-88.9939` |

### 7.4 Conceptual Density Spot-Check (fire-damage page)

- **State Farm narrative:** Present — "State Farm retiree estates" ✅
- **Founders' Grove:** Named landmark present ✅
- **Transfer tax specificity:** "$300 on a $200K sale (IL state + McLean County; no Bloomington municipal RETT)" ✅
- **Citation density:** fire-damage has 10 attribution markers — excellent ✅
- Market-specific facts: ISU, Country Financial, Founders' Grove, McLean County Circuit Court address ✅

---

## Hard Fails

| # | Check | Fail Detail | Remediation Owner |
|---|-------|-------------|-------------------|
| 1 | OG image URL 404 | `/images/bloomington-il-hero.jpg` returns 404 live. Page references this in OpenGraph metadata (`page.tsx:24`) and LocalBusiness schema (`page.tsx:54`). Only optimized breakpoints exist (`/images/optimized/bloomington-il-hero-*.jpg`). Root-level canonical image was never created/deployed. Affects social sharing and schema image references. | **Atlas** — copy optimized 1200px version to root as `public/images/bloomington-il-hero.jpg`, or update metadata to point to `/images/optimized/bloomington-il-hero-1200.jpg` |

---

## Soft Flags (Non-Blocking)

| # | Flag | Detail |
|---|------|--------|
| S1 | TL;DR 2 words over | 92 words vs 60-90 target — trivial overage, cosmetic |
| S2 | Internal links sparse | All 7 situation pages have only 1 internal link (breadcrumb). Peoria has 6 per page. Add related-links block to Bloomington situation pages. (Owner: Atlas) |
| S3 | .gov/.edu citations below threshold on 3 situation pages | inherited-property=1, foreclosure=0, divorce-sale=1 (need ≥2 each). (Owner: Scribe) |
| S4 | No "Last Updated" label | Market landing and market-report lack explicit "Last Updated" label (content uses dated citations). (Owner: Atlas/Scribe) |
| S5 | llms.txt absent | `/llms.txt` returns 404; standard AI discoverability file missing from `public/`. (Owner: Atlas) |
| S6 | AI bot explicit entries absent in robots.txt | Functional access granted via wildcard; no named GPTBot/ClaudeBot entries as positive signal. (Owner: Atlas) |
| S7 | No hyperlinked external citations in FAQ/guide | Text-based citations only; no `<a href="https://...">` external source links. (Owner: Scribe) |
| S8 | Landmark image non-standard naming | File is `bloomington-il-landmark-davis-mansion.jpg` vs expected `bloomington-il-landmark-hero.jpg` pattern. Works, non-standard. |
| S9 | Bloomington coord minor discrepancy | Task brief: 40.4842/-88.9937; source data + schema: 40.4798/-88.9939. Source data is authoritative; noting for reference. |

---

## Carry-Forward (Expected / Not Fail)

- **VideoEmbed blocks absent from landing:** Lens is running to re-add 10 videos per IL market. Do not fail. Monitor after Lens completes.

---

## Final Verdict

**🟡 YELLOW**

- **Checks PASS:** 38
- **Checks FAIL (hard):** 1 (OG image 404)
- **Soft flags:** 9

**Single hard fail:** OG image URL returns 404 for all 3 IL markets — root-level hero images not created. Social share cards will show broken image. Fix is a 1-line metadata change or 3 file copies. Recommend hotfix before heavy social promotion.

**Content quality:** EXCELLENT. Attribution rule fully satisfied. Transfer tax narrative correct. State Farm/Founders' Grove differentiators present. Data cross-referenced against source file — all 4 spot-checked values match.
