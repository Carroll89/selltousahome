/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';

import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/springfield-il/neighborhoods`;

export const metadata: Metadata = {
  title: 'Springfield IL Neighborhoods — Cash Home Buyers',
  description:
    'Springfield IL neighborhood guide for sellers. Enos Park, Harvard Park, West Side, Aristocracy Hill — we buy in every Springfield neighborhood. 888-274-5006.',
  alternates: { canonical: pageUrl },
};

export default function SpringfieldNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Springfield IL Neighborhoods — Cash Home Buyer Price Reference Guide', pageUrl, '2026-04-18'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm font-medium mb-2">
          <Link href="/markets/springfield-il" className="hover:underline">Springfield IL</Link> › Neighborhoods
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Springfield IL Neighborhoods — We Buy Houses Throughout Sangamon County
        </h1>

        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            USA Home Buyers purchases homes in every Springfield neighborhood and throughout Sangamon County — from Enos Park Victorians ($118,495 median) to Harvard Park bungalows ($92,550 median) to West Side brick ranches to suburban Chatham and Rochester. Zillow ZHVI $163,198, Redfin median $187,000 (March 2026). We buy any condition, any neighborhood. Call 888-274-5006.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Springfield IL Neighborhoods — Price Reference and Investor Notes</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-brand-dark">Enos Park</h3>
                <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">Median: $118,495</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">Enos Park is Springfield's most historically significant residential neighborhood — a National Register-listed area with a housing stock dating primarily from the 1880s through the 1920s. Victorian-era frame cottages, brick bungalows, and Italianate homes line streets from North 5th Street to North Grand Avenue. The Enos Park Neighborhood Improvement Association is active in historic preservation, but that doesn't make renovation cheaper. NeighborhoodScout (2026) puts the median at $118,495 — below Springfield's ZHVI average, reflecting renovation costs and the limitations these homes present to conventional lenders.</p>
              <p className="text-gray-700 text-sm"><strong>Cash buyer notes:</strong> High investor interest due to historic character and renovation potential. Most properties have original or near-original electrical (knob-and-tube) and galvanized plumbing. FHA/conventional financing routinely declined. Below 89.8% of Illinois neighborhoods in price — entry point is accessible.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-brand-dark">Harvard Park</h3>
                <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">Median: $92,550</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">Harvard Park is one of Springfield's most active investor neighborhoods — homes.com reports homes here sell in about 16 days on average, faster than the national average of 52 days. The housing stock is predominantly 1940s-1960s Craftsman bungalows and Cape Cod homes on the city's south side. Mid-century construction with aluminum or vinyl siding updates, detached garages, and modest lots. Affordable entry point for investors and first-time buyers alike.</p>
              <p className="text-gray-700 text-sm"><strong>Cash buyer notes:</strong> Highest investor activity in Springfield. Galvanized plumbing, aging electrical panels, and deferred exterior maintenance are common. Quick close demand from estate sales and out-of-state owners is strong in this neighborhood.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-brand-dark">Aristocracy Hill / Old Governor's Mansion Corridor</h3>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Above-Market for Springfield</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">Aristocracy Hill — the Victorian mansion corridor along South 6th Street and adjacent blocks near the Capitol complex — is Springfield's most historically prestigious neighborhood. 2-3 story Victorian mansions, Italianate and Queen Anne homes built for 19th-century legislators, attorneys, and merchants. Some have been converted to apartments; others remain single-family. Above-market for Springfield, though the large square footage and aging systems mean renovation costs are substantial.</p>
              <p className="text-gray-700 text-sm"><strong>Cash buyer notes:</strong> Estate sales and probate properties common. Large structures with complex renovation requirements. Specific neighborhood median not publicly available at sub-ZIP level — price individual properties against comparable sales.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-brand-dark">West Side</h3>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">Below ZHVI Avg</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">The West Side is Springfield's "bread-and-butter" investor market — post-war brick ranches from the 1950s-1970s on streets west of downtown. 3-bed/1-bath brick ranches on flat lots with detached garages. Working-class owner-occupant history. Mix of current owner-occupants and investor-owned rentals. Below Springfield's overall average in price, with steady transaction volume.</p>
              <p className="text-gray-700 text-sm"><strong>Cash buyer notes:</strong> Solid demand from investors and first-time buyers. Aging electrical panels and plumbing common. Exterior maintenance violations more prevalent than in newer suburbs. Specific neighborhood median not available from primary sources.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-brand-dark">South Side / South Grand Area</h3>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">Below ZHVI Avg</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">The South Side — south of Washington Street and south Grand Avenue — has Springfield's highest concentration of distressed inventory and absentee ownership. Older aging stock, higher vacancy rates, and more pronounced code enforcement activity than other neighborhoods. The Harvard Park sub-neighborhood on the south side is an exception — it moves quickly because of investor demand and accessible price points.</p>
              <p className="text-gray-700 text-sm"><strong>Cash buyer notes:</strong> Highest concentration of distressed properties in Springfield. Renovation math works at current entry prices. We buy in this neighborhood regularly.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-brand-dark">Capitol Neighborhood / Downtown (ZIP 62701)</h3>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Historic Premium</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">The Capitol neighborhood includes the blocks immediately surrounding the Illinois State Capitol dome and the Lincoln Home National Historic Site. Properties here trade at a premium for Springfield — the Lincoln Heritage district attracts above-market values for well-maintained historic properties. Not a typical cash buyer neighborhood, but estate sales and probate properties do occur here.</p>
              <p className="text-gray-700 text-sm"><strong>Cash buyer notes:</strong> We buy Capitol neighborhood properties but price them differently — the historic premium is real for well-maintained structures. Distressed historic properties still have value as renovation opportunities.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Suburban Sangamon County Communities We Serve</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Chatham', desc: 'Growing incorporated village 8 miles south. Mix of newer subdivision homes and older stock. Commuter suburb with strong family-home demand.' },
              { name: 'Rochester IL', desc: 'Incorporated village 8 miles east. Commuter suburb with good schools. Above-Springfield-average prices for suburban newer construction.' },
              { name: 'Sherman', desc: 'Growing village along I-55, 8 miles north. Post-1980s subdivision homes. Fast-growing with active buyer demand.' },
              { name: 'Riverton', desc: 'Village on the Sangamon River, 7 miles north. Older housing stock with river-adjacent properties. Mix of ranches and bungalows.' },
              { name: 'Leland Grove', desc: 'Incorporated city within Springfield metro. Higher-end residential; less distressed inventory. We buy here when the situation calls for it.' },
              { name: 'Jerome', desc: 'Village on the southwest side of Springfield. Post-war ranch-style homes. Working-class; solid bread-and-butter investor market.' },
              { name: 'Auburn', desc: 'Small city 18 miles south; farming community anchor. Older stock, agricultural economy context.' },
              { name: 'Pawnee', desc: 'Village 18 miles south of Springfield. Small-town Sangamon County stock.' },
            ].map(({ name, desc }) => (
              <div key={name} className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-brand-dark mb-1">{name}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CashOfferForm variant="inline" headline="Get Your Springfield IL Cash Offer" subheadline="We buy in every Springfield neighborhood and throughout Sangamon County." sourcePage="/markets/springfield-il/neighborhoods" />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/markets/springfield-il" className="text-brand-primary hover:underline font-medium">← Back to Springfield IL</Link>
          <Link href="/markets/springfield-il/market-report" className="text-brand-primary hover:underline font-medium">Market Report →</Link>
          <Link href="/markets/springfield-il/inherited-property" className="text-brand-primary hover:underline font-medium">Inherited Property →</Link>
        </div>
      </div>
    </>
  );
}
