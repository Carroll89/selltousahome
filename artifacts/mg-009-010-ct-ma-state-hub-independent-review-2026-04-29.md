# MG-009/010 CT/MA State Hub Independent Review

**Date:** 2026-04-29
**Reviewer:** Max independent review
**Repo:** `/Users/agents/.openclaw/workspace-seo-commander/site`

## Scope
- app/sell-house-fast-connecticut/page.tsx
- app/sell-house-fast-massachusetts/page.tsx

## Diff stat
 app/sell-house-fast-connecticut/page.tsx   | 14 ++++++++------
 app/sell-house-fast-massachusetts/page.tsx | 12 ++++++++----
 2 files changed, 16 insertions(+), 10 deletions(-)

## Required stale-string checks
### Pattern: March–April|March-April
PASS: no match
### Pattern: with expansion ongoing
PASS: no match
### Pattern: both markets
PASS: no match
### Pattern: Our Connecticut Markets: Bridgeport \+ New Haven
PASS: no match

## Required positive checks
14:    'We buy houses for cash throughout Connecticut — Bridgeport, New Haven, Hartford, and surrounding markets. Written offer in 24 hours, close in 7 days.',
40:            USA Home Buyers purchases houses for cash throughout Connecticut — currently serving Bridgeport, New Haven, Hartford, and nearby communities. Written offer in 24 hours, close in 7–14 days, any condition, no repairs, no fees. We cover all closing costs. Call 888-274-5006.
91:            <li><strong>Hartford (Hartford County):</strong> Strict foreclosure or foreclosure by sale · Hartford Judicial District / Superior Court context · Law Day risk and owner-occupied mediation window apply before title can transfer</li>
102:            <li>Hartford Probate Court / Hartford probate jurisdiction for Hartford County-area estate property questions</li>
125:          <p className="mt-3 text-xs text-gray-500">Data: Zillow ZHVI, Redfin market statistics, and source-backed market packages, March 2026 source data.</p>
129:          <p className="text-sm text-blue-900"><strong>Hablamos español.</strong> Bridgeport has a 41% Hispanic community; New Haven is 31% Hispanic. We serve Connecticut sellers in English and Spanish across Bridgeport, New Haven, Hartford, and nearby communities. Llámenos al 888-274-5006.</p>
14:    'We buy houses for cash throughout Massachusetts — Springfield, Worcester, Boston / Suffolk County, and surrounding markets. Written offer in 24 hours. Hablamos español.',
40:            USA Home Buyers purchases houses for cash throughout Massachusetts — currently serving Springfield (Hampden County), Worcester (Worcester County), Boston (Suffolk County), and nearby communities. Written offer in 24 hours, close in 7–14 days, any condition, no repairs, no fees. Massachusetts deed excise stamps ($4.56 per $1,000) covered by us. Non-judicial foreclosure state — call before auction notices accelerate. Hablamos español. Call 888-274-5006.
87:            The examples below use representative sale-price figures for our active Massachusetts markets; they are not an exclusive service-area list, and Boston / Suffolk County follows the same statewide deed-excise formula.
101:                <tr className="bg-white"><td className="p-3">$829,000 (Boston metro)</td><td className="p-3">$4.56 × 829 = $3,780</td><td className="p-3">$3,780</td></tr>
147:            <strong>Probate courts for our MA markets:</strong> Hampden County Probate and Family Court (50 State Street, Springfield, (413) 748-7776); Worcester County Probate and Family Court (225 Main Street, Worcester, (508) 770-0825); and Suffolk County Probate and Family Court for Boston / Suffolk County estate property questions.
175:          <p className="text-sm text-blue-900"><strong>Hablamos español.</strong> Springfield has a 48% Hispanic community, primarily Puerto Rican. We serve Massachusetts sellers in English and Spanish across Springfield, Worcester, Boston, and nearby communities. Llámenos al 888-274-5006.</p>

## Gates
### git diff --check
PASS
### npm run lint

> site@0.1.0 lint
> next lint

✔ No ESLint warnings or errors
### npm run build

> site@0.1.0 build
> next build

  ▲ Next.js 14.2.35
  - Experiments (use with caution):
    · cpus

   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/411) ...
   Generating static pages (102/411) 
   Generating static pages (205/411) 
   Generating static pages (308/411) 
 ✓ Generating static pages (411/411)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                                Size     First Load JS
┌ ○ /                                                      386 B           101 kB
├ ○ /_not-found                                            159 B          87.6 kB
├ ○ /about                                                 199 B           106 kB
├ ○ /blog                                                  191 B           101 kB
├ ● /blog/[slug]                                           921 B           107 kB
├   ├ /blog/probate-timeline-pennsylvania
├   ├ /blog/closing-costs-selling-house-pennsylvania
├   ├ /blog/sell-house-foreclosure-pennsylvania
├   └ [+7 more paths]
├ ○ /blog/allentown-pa-sell-house-fast-2026                386 B           101 kB
├ ○ /blog/bloomington-il-sell-house-fast-2026              386 B           101 kB
├ ○ /blog/cash-buyer-vs-realtor-pennsylvania               922 B           107 kB
├ ○ /blog/champaign-urbana-il-sell-house-fast-2026         1.36 kB         102 kB
├ ○ /blog/connecticut-foreclosure-strict-vs-sale           386 B           101 kB
├ ○ /blog/harrisburg-pa-sell-house-fast-2026               383 B           101 kB
├ ○ /blog/kenosha-vs-racine-housing-market-2026            383 B           101 kB
├ ○ /blog/new-haven-ct-sell-house-fast-2026                386 B           101 kB
├ ○ /blog/oshkosh-wi-sell-house-fast-2026                  386 B           101 kB
├ ○ /blog/peoria-il-sell-house-fast-2026                   384 B           101 kB
├ ○ /blog/rochester-ny-sell-house-fast-2026                385 B           101 kB
├ ○ /blog/rockford-il-sell-house-fast-2026                 386 B           101 kB
├ ○ /blog/sell-house-with-code-violations-pa               921 B           107 kB
├ ○ /blog/sell-inherited-house-illinois                    384 B           101 kB
├ ○ /blog/sell-inherited-house-pennsylvania                922 B           107 kB
├ ○ /blog/selling-house-during-divorce-pennsylvania        386 B           101 kB
├ ○ /blog/springfield-il-sell-house-fast-2026              1.36 kB         102 kB
├ ○ /blog/what-happens-after-accepting-cash-offer          384 B           101 kB
├ ○ /blog/youngstown-oh-housing-market-april-2026          384 B           101 kB
├ ○ /bloomington                                           144 B           104 kB
├ ○ /brand-facts                                           192 B           101 kB
├ ○ /champaign-urbana                                      145 B           104 kB
├ ○ /compare/usa-home-buyers-vs-homevestors                920 B           107 kB
├ ○ /compare/usa-home-buyers-vs-listing-with-agent         921 B           107 kB
├ ○ /compare/usa-home-buyers-vs-opendoor                   921 B           107 kB
├ ○ /contact                                               312 B          97.3 kB
├ ○ /guides                                                383 B           101 kB
├ ○ /guides/back-taxes                                     921 B           107 kB
├ ○ /guides/behind-on-payments                             921 B           107 kB
├ ○ /guides/divorce-sale                                   921 B           107 kB
├ ○ /guides/foreclosure                                    921 B           107 kB
├ ○ /guides/hoarding-property                              920 B           107 kB
├ ○ /guides/inherited-property                             921 B           107 kB
├ ○ /guides/probate                                        921 B           107 kB
├ ○ /guides/relocation                                     920 B           107 kB
├ ○ /guides/sell-as-is                                     921 B           107 kB
├ ○ /guides/sell-house-fast-allentown-pa-2026              921 B           107 kB
├ ○ /guides/sell-house-fast-bethlehem-pa-2026              1.36 kB         102 kB
├ ○ /guides/sell-house-fast-bloomington-il-2026            1.36 kB         102 kB
├ ○ /guides/sell-house-fast-boston-ma-2026                 1.36 kB         102 kB
├ ○ /guides/sell-house-fast-bridgeport-ct-2026             1.36 kB         102 kB
├ ○ /guides/sell-house-fast-champaign-urbana-il-2026       1.36 kB         102 kB
├ ○ /guides/sell-house-fast-erie-pa-2026                   1.36 kB         102 kB
├ ○ /guides/sell-house-fast-harrisburg-pa-2026             921 B           107 kB
├ ○ /guides/sell-house-fast-hartford-ct-2026               1.36 kB         102 kB
├ ○ /guides/sell-house-fast-kenosha-wi-2026                1.36 kB         102 kB
├ ○ /guides/sell-house-fast-king-of-prussia-pa-2026        922 B           107 kB
├ ○ /guides/sell-house-fast-lancaster-pa-2026              1.36 kB         102 kB
├ ○ /guides/sell-house-fast-manchester-nh-2026             1.36 kB         102 kB
├ ○ /guides/sell-house-fast-new-haven-ct-2026              1.36 kB         102 kB
├ ○ /guides/sell-house-fast-oshkosh-wi-2026                1.36 kB         102 kB
├ ○ /guides/sell-house-fast-peoria-il-2026                 1.36 kB         102 kB
├ ○ /guides/sell-house-fast-racine-mount-pleasant-wi-2026  1.36 kB         102 kB
├ ○ /guides/sell-house-fast-reading-pa-2026                1.36 kB         102 kB
├ ○ /guides/sell-house-fast-rochester-ny-2026              1.36 kB         102 kB
├ ○ /guides/sell-house-fast-rockford-il-2026               1.36 kB         102 kB
├ ○ /guides/sell-house-fast-springfield-il-2026            1.36 kB         102 kB
├ ○ /guides/sell-house-fast-springfield-ma-2026            1.36 kB         102 kB
├ ○ /guides/sell-house-fast-state-college-pa-2026          922 B           107 kB
├ ○ /guides/sell-house-fast-wausau-wi-2026                 1.36 kB         102 kB
├ ○ /guides/sell-house-fast-wilmington-de-2026             1.36 kB         102 kB
├ ○ /guides/sell-house-fast-worcester-ma-2026              1.36 kB         102 kB
├ ○ /guides/sell-house-fast-york-pa-2026                   385 B           101 kB
├ ○ /guides/sell-house-fast-youngstown-oh-2026             1.36 kB         102 kB
├ ○ /guides/selling-parents-house-nursing-home             921 B           107 kB
├ ○ /guides/tenant-occupied                                921 B           107 kB
├ ○ /guides/vacant-property                                921 B           107 kB
├ ○ /image-sitemap.xml                                     0 B                0 B
├ ○ /markets/allentown-pa                                  145 B           104 kB
├ ○ /markets/allentown-pa/code-violations                  920 B           107 kB
├ ○ /markets/allentown-pa/divorce-sale                     921 B           107 kB
├ ○ /markets/allentown-pa/foreclosure                      921 B           107 kB
├ ○ /markets/allentown-pa/inherited-property               920 B           107 kB
├ ○ /markets/allentown-pa/market-report                    920 B           107 kB
├ ○ /markets/allentown-pa/probate                          921 B           107 kB
├ ○ /markets/allentown-pa/tenant-occupied                  921 B           107 kB
├ ○ /markets/bethlehem-pa                                  145 B           104 kB
├ ○ /markets/bethlehem-pa/code-violations                  1.36 kB         102 kB
├ ○ /markets/bethlehem-pa/divorce-sale                     1.36 kB         102 kB
├ ○ /markets/bethlehem-pa/faq                              1.36 kB         102 kB
├ ○ /markets/bethlehem-pa/fire-damage                      1.36 kB         102 kB
├ ○ /markets/bethlehem-pa/foreclosure                      1.36 kB         102 kB
├ ○ /markets/bethlehem-pa/inherited-property               1.36 kB         102 kB
├ ○ /markets/bethlehem-pa/market-report                    1.36 kB         102 kB
├ ○ /markets/bethlehem-pa/neighborhoods                    386 B           101 kB
├ ○ /markets/bethlehem-pa/probate                          1.36 kB         102 kB
├ ○ /markets/bethlehem-pa/tenant-occupied                  1.36 kB         102 kB
├ ○ /markets/bloomington-il                                145 B           104 kB
├ ○ /markets/bloomington-il/code-violations                1.36 kB         102 kB
├ ○ /markets/bloomington-il/divorce-sale                   1.36 kB         102 kB
├ ○ /markets/bloomington-il/faq                            1.36 kB         102 kB
├ ○ /markets/bloomington-il/fire-damage                    1.36 kB         102 kB
├ ○ /markets/bloomington-il/foreclosure                    1.36 kB         102 kB
├ ○ /markets/bloomington-il/inherited-property             1.36 kB         102 kB
├ ○ /markets/bloomington-il/market-report                  384 B           101 kB
├ ○ /markets/bloomington-il/neighborhoods                  386 B           101 kB
├ ○ /markets/bloomington-il/probate                        1.36 kB         102 kB
├ ○ /markets/bloomington-il/tenant-occupied                1.36 kB         102 kB
├ ○ /markets/boston-ma                                     145 B           104 kB
├ ○ /markets/boston-ma/code-violations                     1.36 kB         102 kB
├ ○ /markets/boston-ma/divorce-sale                        1.36 kB         102 kB
├ ○ /markets/boston-ma/faq                                 1.36 kB         102 kB
├ ○ /markets/boston-ma/fire-damage                         1.36 kB         102 kB
├ ○ /markets/boston-ma/foreclosure                         1.36 kB         102 kB
├ ○ /markets/boston-ma/inherited-property                  1.36 kB         102 kB
├ ○ /markets/boston-ma/market-report                       386 B           101 kB
├ ○ /markets/boston-ma/neighborhoods                       384 B           101 kB
├ ○ /markets/boston-ma/probate                             1.36 kB         102 kB
├ ○ /markets/boston-ma/tenant-occupied                     1.36 kB         102 kB
├ ○ /markets/bridgeport-ct                                 145 B           104 kB
├ ○ /markets/bridgeport-ct/code-violations                 1.36 kB         102 kB
├ ○ /markets/bridgeport-ct/divorce-sale                    1.36 kB         102 kB
├ ○ /markets/bridgeport-ct/faq                             1.36 kB         102 kB
├ ○ /markets/bridgeport-ct/fire-damage                     1.36 kB         102 kB
├ ○ /markets/bridgeport-ct/foreclosure                     1.36 kB         102 kB
├ ○ /markets/bridgeport-ct/inherited-property              1.36 kB         102 kB
├ ○ /markets/bridgeport-ct/market-report                   386 B           101 kB
├ ○ /markets/bridgeport-ct/neighborhoods                   384 B           101 kB
├ ○ /markets/bridgeport-ct/probate                         1.36 kB         102 kB
├ ○ /markets/bridgeport-ct/tenant-occupied                 1.36 kB         102 kB
├ ○ /markets/champaign-urbana-il                           145 B           104 kB
├ ○ /markets/champaign-urbana-il/code-violations           1.36 kB         102 kB
├ ○ /markets/champaign-urbana-il/divorce-sale              1.36 kB         102 kB
├ ○ /markets/champaign-urbana-il/faq                       1.36 kB         102 kB
├ ○ /markets/champaign-urbana-il/fire-damage               1.36 kB         102 kB
├ ○ /markets/champaign-urbana-il/foreclosure               1.36 kB         102 kB
├ ○ /markets/champaign-urbana-il/inherited-property        1.36 kB         102 kB
├ ○ /markets/champaign-urbana-il/market-report             384 B           101 kB
├ ○ /markets/champaign-urbana-il/neighborhoods             384 B           101 kB
├ ○ /markets/champaign-urbana-il/probate                   1.36 kB         102 kB
├ ○ /markets/champaign-urbana-il/tenant-occupied           1.36 kB         102 kB
├ ○ /markets/erie-pa                                       145 B           104 kB
├ ○ /markets/erie-pa/code-violations                       1.36 kB         102 kB
├ ○ /markets/erie-pa/divorce-sale                          1.36 kB         102 kB
├ ○ /markets/erie-pa/faq                                   1.36 kB         102 kB
├ ○ /markets/erie-pa/fire-damage                           1.36 kB         102 kB
├ ○ /markets/erie-pa/foreclosure                           1.36 kB         102 kB
├ ○ /markets/erie-pa/inherited-property                    1.36 kB         102 kB
├ ○ /markets/erie-pa/market-report                         386 B           101 kB
├ ○ /markets/erie-pa/neighborhoods                         386 B           101 kB
├ ○ /markets/erie-pa/probate                               1.36 kB         102 kB
├ ○ /markets/erie-pa/property-liens                        1.36 kB         102 kB
├ ○ /markets/erie-pa/tenant-occupied                       1.36 kB         102 kB
├ ○ /markets/harrisburg-pa                                 145 B           104 kB
├ ○ /markets/harrisburg-pa/code-violations                 1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/divorce-sale                    1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/faq                             1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/fire-damage                     1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/foreclosure                     1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/inherited-property              1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/market-report                   1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/neighborhoods                   1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/probate                         1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/property-liens                  1.36 kB         102 kB
├ ○ /markets/harrisburg-pa/tenant-occupied                 1.36 kB         102 kB
├ ○ /markets/hartford-ct                                   145 B           104 kB
├ ○ /markets/hartford-ct/code-violations                   1.36 kB         102 kB
├ ○ /markets/hartford-ct/divorce-sale                      1.36 kB         102 kB
├ ○ /markets/hartford-ct/faq                               1.36 kB         102 kB
├ ○ /markets/hartford-ct/fire-damage                       1.36 kB         102 kB
├ ○ /markets/hartford-ct/foreclosure                       1.36 kB         102 kB
├ ○ /markets/hartford-ct/inherited-property                1.36 kB         102 kB
├ ○ /markets/hartford-ct/market-report                     386 B           101 kB
├ ○ /markets/hartford-ct/neighborhoods                     386 B           101 kB
├ ○ /markets/hartford-ct/probate                           1.36 kB         102 kB
├ ○ /markets/hartford-ct/tenant-occupied                   1.36 kB         102 kB
├ ○ /markets/kenosha-wi                                    145 B           104 kB
├ ○ /markets/kenosha-wi/code-violations                    1.36 kB         102 kB
├ ○ /markets/kenosha-wi/divorce-sale                       1.36 kB         102 kB
├ ○ /markets/kenosha-wi/faq                                1.36 kB         102 kB
├ ○ /markets/kenosha-wi/fire-damage                        1.36 kB         102 kB
├ ○ /markets/kenosha-wi/foreclosure                        1.36 kB         102 kB
├ ○ /markets/kenosha-wi/inherited-property                 1.36 kB         102 kB
├ ○ /markets/kenosha-wi/market-report                      386 B           101 kB
├ ○ /markets/kenosha-wi/neighborhoods                      386 B           101 kB
├ ○ /markets/kenosha-wi/probate                            1.36 kB         102 kB
├ ○ /markets/kenosha-wi/tenant-occupied                    1.36 kB         102 kB
├ ○ /markets/king-of-prussia-pa                            145 B           104 kB
├ ○ /markets/king-of-prussia-pa/code-violations            921 B           107 kB
├ ○ /markets/king-of-prussia-pa/divorce-sale               921 B           107 kB
├ ○ /markets/king-of-prussia-pa/fire-damage                921 B           107 kB
├ ○ /markets/king-of-prussia-pa/foreclosure                920 B           107 kB
├ ○ /markets/king-of-prussia-pa/inherited-property         921 B           107 kB
├ ○ /markets/king-of-prussia-pa/market-report              920 B           107 kB
├ ○ /markets/king-of-prussia-pa/probate                    921 B           107 kB
├ ○ /markets/king-of-prussia-pa/tenant-occupied            921 B           107 kB
├ ○ /markets/lancaster-pa                                  145 B           104 kB
├ ○ /markets/lancaster-pa/code-violations                  1.36 kB         102 kB
├ ○ /markets/lancaster-pa/divorce-sale                     1.36 kB         102 kB
├ ○ /markets/lancaster-pa/faq                              1.36 kB         102 kB
├ ○ /markets/lancaster-pa/fire-damage                      1.36 kB         102 kB
├ ○ /markets/lancaster-pa/foreclosure                      1.36 kB         102 kB
├ ○ /markets/lancaster-pa/inherited-property               1.36 kB         102 kB
├ ○ /markets/lancaster-pa/market-report                    386 B           101 kB
├ ○ /markets/lancaster-pa/neighborhoods                    386 B           101 kB
├ ○ /markets/lancaster-pa/probate                          1.36 kB         102 kB
├ ○ /markets/lancaster-pa/tenant-occupied                  1.36 kB         102 kB
├ ○ /markets/manchester-nh                                 145 B           104 kB
├ ○ /markets/manchester-nh/code-violations                 1.36 kB         102 kB
├ ○ /markets/manchester-nh/divorce-sale                    1.36 kB         102 kB
├ ○ /markets/manchester-nh/faq                             1.36 kB         102 kB
├ ○ /markets/manchester-nh/fire-damage                     1.36 kB         102 kB
├ ○ /markets/manchester-nh/foreclosure                     1.36 kB         102 kB
├ ○ /markets/manchester-nh/inherited-property              1.36 kB         102 kB
├ ○ /markets/manchester-nh/market-report                   386 B           101 kB
├ ○ /markets/manchester-nh/neighborhoods                   386 B           101 kB
├ ○ /markets/manchester-nh/probate                         1.36 kB         102 kB
├ ○ /markets/manchester-nh/tenant-occupied                 1.36 kB         102 kB
├ ○ /markets/new-haven-ct                                  145 B           104 kB
├ ○ /markets/new-haven-ct/code-violations                  1.36 kB         102 kB
├ ○ /markets/new-haven-ct/divorce-sale                     1.36 kB         102 kB
├ ○ /markets/new-haven-ct/faq                              1.36 kB         102 kB
├ ○ /markets/new-haven-ct/fire-damage                      1.36 kB         102 kB
├ ○ /markets/new-haven-ct/foreclosure                      1.36 kB         102 kB
├ ○ /markets/new-haven-ct/inherited-property               1.36 kB         102 kB
├ ○ /markets/new-haven-ct/market-report                    387 B           101 kB
├ ○ /markets/new-haven-ct/neighborhoods                    386 B           101 kB
├ ○ /markets/new-haven-ct/probate                          1.36 kB         102 kB
├ ○ /markets/new-haven-ct/tenant-occupied                  1.36 kB         102 kB
├ ○ /markets/oshkosh-wi                                    145 B           104 kB
├ ○ /markets/oshkosh-wi/code-violations                    1.36 kB         102 kB
├ ○ /markets/oshkosh-wi/divorce-sale                       1.36 kB         102 kB
├ ○ /markets/oshkosh-wi/faq                                1.36 kB         102 kB
├ ○ /markets/oshkosh-wi/fire-damage                        1.36 kB         102 kB
├ ○ /markets/oshkosh-wi/foreclosure                        1.36 kB         102 kB
├ ○ /markets/oshkosh-wi/inherited-property                 1.36 kB         102 kB
├ ○ /markets/oshkosh-wi/market-report                      387 B           101 kB
├ ○ /markets/oshkosh-wi/neighborhoods                      387 B           101 kB
├ ○ /markets/oshkosh-wi/probate                            1.36 kB         102 kB
├ ○ /markets/oshkosh-wi/tenant-occupied                    1.36 kB         102 kB
├ ○ /markets/peoria-il                                     144 B           104 kB
├ ○ /markets/peoria-il/code-violations                     1.36 kB         102 kB
├ ○ /markets/peoria-il/divorce-sale                        1.36 kB         102 kB
├ ○ /markets/peoria-il/faq                                 1.36 kB         102 kB
├ ○ /markets/peoria-il/fire-damage                         1.36 kB         102 kB
├ ○ /markets/peoria-il/foreclosure                         1.36 kB         102 kB
├ ○ /markets/peoria-il/inherited-property                  1.36 kB         102 kB
├ ○ /markets/peoria-il/market-report                       384 B           101 kB
├ ○ /markets/peoria-il/neighborhoods                       387 B           101 kB
├ ○ /markets/peoria-il/probate                             1.36 kB         102 kB
├ ○ /markets/peoria-il/tenant-occupied                     1.36 kB         102 kB
├ ○ /markets/racine-mount-pleasant-wi                      145 B           104 kB
├ ○ /markets/racine-mount-pleasant-wi/code-violations      1.36 kB         102 kB
├ ○ /markets/racine-mount-pleasant-wi/divorce-sale         1.36 kB         102 kB
├ ○ /markets/racine-mount-pleasant-wi/faq                  1.36 kB         102 kB
├ ○ /markets/racine-mount-pleasant-wi/fire-damage          1.36 kB         102 kB
├ ○ /markets/racine-mount-pleasant-wi/foreclosure          1.36 kB         102 kB
├ ○ /markets/racine-mount-pleasant-wi/inherited-property   1.36 kB         102 kB
├ ○ /markets/racine-mount-pleasant-wi/market-report        386 B           101 kB
├ ○ /markets/racine-mount-pleasant-wi/neighborhoods        387 B           101 kB
├ ○ /markets/racine-mount-pleasant-wi/probate              1.36 kB         102 kB
├ ○ /markets/racine-mount-pleasant-wi/tenant-occupied      1.36 kB         102 kB
├ ○ /markets/reading-pa                                    145 B           104 kB
├ ○ /markets/reading-pa/code-violations                    921 B           107 kB
├ ○ /markets/reading-pa/divorce-sale                       921 B           107 kB
├ ○ /markets/reading-pa/faq                                1.36 kB         102 kB
├ ○ /markets/reading-pa/fire-damage                        921 B           107 kB
├ ○ /markets/reading-pa/foreclosure                        921 B           107 kB
├ ○ /markets/reading-pa/inherited-property                 921 B           107 kB
├ ○ /markets/reading-pa/market-report                      386 B           101 kB
├ ○ /markets/reading-pa/neighborhoods                      386 B           101 kB
├ ○ /markets/reading-pa/probate                            921 B           107 kB
├ ○ /markets/reading-pa/property-liens                     921 B           107 kB
├ ○ /markets/reading-pa/tenant-occupied                    921 B           107 kB
├ ○ /markets/rochester-ny                                  145 B           104 kB
├ ○ /markets/rochester-ny/code-violations                  1.36 kB         102 kB
├ ○ /markets/rochester-ny/divorce-sale                     1.36 kB         102 kB
├ ○ /markets/rochester-ny/faq                              1.36 kB         102 kB
├ ○ /markets/rochester-ny/fire-damage                      1.36 kB         102 kB
├ ○ /markets/rochester-ny/foreclosure                      1.36 kB         102 kB
├ ○ /markets/rochester-ny/inherited-property               1.36 kB         102 kB
├ ○ /markets/rochester-ny/market-report                    386 B           101 kB
├ ○ /markets/rochester-ny/neighborhoods                    384 B           101 kB
├ ○ /markets/rochester-ny/probate                          1.36 kB         102 kB
├ ○ /markets/rochester-ny/tenant-occupied                  1.36 kB         102 kB
├ ○ /markets/rockford-il                                   145 B           104 kB
├ ○ /markets/rockford-il/code-violations                   1.36 kB         102 kB
├ ○ /markets/rockford-il/divorce-sale                      1.36 kB         102 kB
├ ○ /markets/rockford-il/faq                               1.36 kB         102 kB
├ ○ /markets/rockford-il/fire-damage                       1.36 kB         102 kB
├ ○ /markets/rockford-il/foreclosure                       1.36 kB         102 kB
├ ○ /markets/rockford-il/inherited-property                1.36 kB         102 kB
├ ○ /markets/rockford-il/market-report                     386 B           101 kB
├ ○ /markets/rockford-il/neighborhoods                     386 B           101 kB
├ ○ /markets/rockford-il/probate                           1.36 kB         102 kB
├ ○ /markets/rockford-il/tenant-occupied                   1.36 kB         102 kB
├ ○ /markets/springfield-il                                145 B           104 kB
├ ○ /markets/springfield-il/code-violations                1.36 kB         102 kB
├ ○ /markets/springfield-il/divorce-sale                   1.36 kB         102 kB
├ ○ /markets/springfield-il/faq                            1.36 kB         102 kB
├ ○ /markets/springfield-il/fire-damage                    1.36 kB         102 kB
├ ○ /markets/springfield-il/foreclosure                    1.36 kB         102 kB
├ ○ /markets/springfield-il/inherited-property             1.36 kB         102 kB
├ ○ /markets/springfield-il/market-report                  385 B           101 kB
├ ○ /markets/springfield-il/neighborhoods                  386 B           101 kB
├ ○ /markets/springfield-il/probate                        1.36 kB         102 kB
├ ○ /markets/springfield-il/tenant-occupied                1.36 kB         102 kB
├ ○ /markets/springfield-ma                                145 B           104 kB
├ ○ /markets/springfield-ma/code-violations                1.36 kB         102 kB
├ ○ /markets/springfield-ma/divorce-sale                   1.36 kB         102 kB
├ ○ /markets/springfield-ma/faq                            1.36 kB         102 kB
├ ○ /markets/springfield-ma/fire-damage                    1.36 kB         102 kB
├ ○ /markets/springfield-ma/foreclosure                    1.36 kB         102 kB
├ ○ /markets/springfield-ma/inherited-property             1.36 kB         102 kB
├ ○ /markets/springfield-ma/market-report                  387 B           101 kB
├ ○ /markets/springfield-ma/neighborhoods                  386 B           101 kB
├ ○ /markets/springfield-ma/probate                        1.36 kB         102 kB
├ ○ /markets/springfield-ma/tenant-occupied                1.36 kB         102 kB
├ ○ /markets/state-college-pa                              145 B           104 kB
├ ○ /markets/state-college-pa/code-violations              921 B           107 kB
├ ○ /markets/state-college-pa/divorce-sale                 921 B           107 kB
├ ○ /markets/state-college-pa/fire-damage                  921 B           107 kB
├ ○ /markets/state-college-pa/foreclosure                  921 B           107 kB
├ ○ /markets/state-college-pa/inherited-property           920 B           107 kB
├ ○ /markets/state-college-pa/market-report                920 B           107 kB
├ ○ /markets/state-college-pa/probate                      921 B           107 kB
├ ○ /markets/state-college-pa/tenant-occupied              921 B           107 kB
├ ○ /markets/wausau-wi                                     145 B           104 kB
├ ○ /markets/wausau-wi/code-violations                     1.36 kB         102 kB
├ ○ /markets/wausau-wi/divorce-sale                        1.36 kB         102 kB
├ ○ /markets/wausau-wi/faq                                 1.36 kB         102 kB
├ ○ /markets/wausau-wi/fire-damage                         1.36 kB         102 kB
├ ○ /markets/wausau-wi/foreclosure                         1.36 kB         102 kB
├ ○ /markets/wausau-wi/inherited-property                  1.36 kB         102 kB
├ ○ /markets/wausau-wi/market-report                       386 B           101 kB
├ ○ /markets/wausau-wi/neighborhoods                       387 B           101 kB
├ ○ /markets/wausau-wi/probate                             1.36 kB         102 kB
├ ○ /markets/wausau-wi/tenant-occupied                     1.36 kB         102 kB
├ ○ /markets/wilmington-de                                 145 B           104 kB
├ ○ /markets/wilmington-de/code-violations                 1.36 kB         102 kB
├ ○ /markets/wilmington-de/divorce-sale                    1.36 kB         102 kB
├ ○ /markets/wilmington-de/faq                             385 B           101 kB
├ ○ /markets/wilmington-de/fire-damage                     1.36 kB         102 kB
├ ○ /markets/wilmington-de/foreclosure                     1.36 kB         102 kB
├ ○ /markets/wilmington-de/inherited-property              1.36 kB         102 kB
├ ○ /markets/wilmington-de/market-report                   386 B           101 kB
├ ○ /markets/wilmington-de/neighborhoods                   386 B           101 kB
├ ○ /markets/wilmington-de/probate                         1.36 kB         102 kB
├ ○ /markets/wilmington-de/tenant-occupied                 1.36 kB         102 kB
├ ○ /markets/worcester-ma                                  145 B           104 kB
├ ○ /markets/worcester-ma/code-violations                  1.36 kB         102 kB
├ ○ /markets/worcester-ma/divorce-sale                     1.36 kB         102 kB
├ ○ /markets/worcester-ma/faq                              1.36 kB         102 kB
├ ○ /markets/worcester-ma/fire-damage                      1.36 kB         102 kB
├ ○ /markets/worcester-ma/foreclosure                      1.36 kB         102 kB
├ ○ /markets/worcester-ma/inherited-property               1.36 kB         102 kB
├ ○ /markets/worcester-ma/market-report                    386 B           101 kB
├ ○ /markets/worcester-ma/neighborhoods                    386 B           101 kB
├ ○ /markets/worcester-ma/probate                          1.36 kB         102 kB
├ ○ /markets/worcester-ma/tenant-occupied                  1.36 kB         102 kB
├ ○ /markets/york-pa                                       145 B           104 kB
├ ○ /markets/york-pa/code-violations                       1.36 kB         102 kB
├ ○ /markets/york-pa/divorce-sale                          1.36 kB         102 kB
├ ○ /markets/york-pa/faq                                   386 B           101 kB
├ ○ /markets/york-pa/fire-damage                           1.36 kB         102 kB
├ ○ /markets/york-pa/foreclosure                           1.36 kB         102 kB
├ ○ /markets/york-pa/inherited-property                    1.36 kB         102 kB
├ ○ /markets/york-pa/market-report                         386 B           101 kB
├ ○ /markets/york-pa/neighborhoods                         385 B           101 kB
├ ○ /markets/york-pa/probate                               1.36 kB         102 kB
├ ○ /markets/york-pa/tenant-occupied                       1.36 kB         102 kB
├ ○ /markets/youngstown-oh                                 145 B           104 kB
├ ○ /markets/youngstown-oh/code-violations                 1.36 kB         102 kB
├ ○ /markets/youngstown-oh/divorce-sale                    1.36 kB         102 kB
├ ○ /markets/youngstown-oh/faq                             1.36 kB         102 kB
├ ○ /markets/youngstown-oh/fire-damage                     1.36 kB         102 kB
├ ○ /markets/youngstown-oh/foreclosure                     1.36 kB         102 kB
├ ○ /markets/youngstown-oh/inherited-property              1.36 kB         102 kB
├ ○ /markets/youngstown-oh/market-report                   1.36 kB         102 kB
├ ○ /markets/youngstown-oh/neighborhoods                   387 B           101 kB
├ ○ /markets/youngstown-oh/probate                         1.36 kB         102 kB
├ ○ /markets/youngstown-oh/tenant-occupied                 1.36 kB         102 kB
├ ○ /press                                                 386 B           101 kB
├ ○ /privacy-policy                                        185 B          96.3 kB
├ ○ /resources/are-cash-home-buyers-legit                  921 B           107 kB
├ ○ /resources/cash-offer-vs-listing                       921 B           107 kB
├ ○ /resources/how-fast-can-i-sell-for-cash                921 B           107 kB
├ ○ /resources/how-much-do-cash-buyers-pay                 919 B           107 kB
├ ○ /resources/how-the-process-works                       921 B           107 kB
├ ○ /resources/sell-house-without-repairs                  921 B           107 kB
├ ○ /reviews                                               312 B          97.3 kB
├ ○ /robots.txt                                            0 B                0 B
├ ○ /sell-house-fast-connecticut                           386 B           101 kB
├ ○ /sell-house-fast-delaware                              386 B           101 kB
├ ○ /sell-house-fast-illinois                              1.36 kB         102 kB
├ ○ /sell-house-fast-massachusetts                         386 B           101 kB
├ ○ /sell-house-fast-new-hampshire                         386 B           101 kB
├ ○ /sell-house-fast-new-york                              1.36 kB         102 kB
├ ○ /sell-house-fast-ohio                                  1.36 kB         102 kB
├ ○ /sell-house-fast-pennsylvania                          1.36 kB         102 kB
├ ○ /sell-house-fast-wisconsin                             386 B           101 kB
├ ○ /sitemap.xml                                           0 B                0 B
├ ○ /terms-of-service                                      185 B          96.3 kB
└ ○ /thank-you                                             2.51 kB        98.6 kB
+ First Load JS shared by all                              87.4 kB
  ├ chunks/2117-65cb6bddebb17a0f.js                        31.8 kB
  ├ chunks/fd9d1056-f94d9e7da100abe1.js                    53.7 kB
  └ other shared chunks (total)                            1.94 kB


○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses getStaticProps)

