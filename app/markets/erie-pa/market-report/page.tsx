import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Erie PA Housing Market Report 2026',
  description:
    'Erie PA housing market data for 2026 — median prices by ZIP, days on market, transfer tax, housing stock age, demographics, and cash buyer insights from USA Home Buyers.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/market-report` },
};

const pageUrl = `${SITE_URL}/markets/erie-pa/market-report`;

export default function ErieMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Erie PA Housing Market Report 2026', pageUrl),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer: Erie PA Housing Market 2026</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Erie's city-limit home values average approximately $115,000–$120,000 based on Zillow ZHVI data and zip-code-level Redfin analysis (February 2026); suburban Erie (zip codes 16505/16509) commands $250,000–$300,000. Despite low price points, Erie's market is competitive — Redfin rates it 'Very Competitive' across most zip codes. Erie County charges the standard Pennsylvania transfer tax of 2% (split 1%/1% buyer/seller). Cash buyers offer 70–80% of FMV, closing in 7–14 days as-is.</p>
        </div>

        <div className="mb-4 text-sm text-gray-500">
          <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Erie PA</Link> › Market Report
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Erie PA Housing Market Report — 2026
        </h1>
        <p className="text-gray-600 mb-2">Data compiled April 2026. Sources: DataUSA, Redfin, NeighborhoodScout, PA Department of Revenue.</p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-brand-dark mb-1">Erie&apos;s Housing Reality</p>
          <p className="text-sm text-gray-700">
            77% of Erie&apos;s housing stock was built before 1970. Combined with 104+ inches of annual snowfall,
            a 23% poverty rate, and near-50% renter occupancy, Erie has a structural, ongoing pipeline of
            cash buyer demand unlike most Pennsylvania markets. The urban core trades at $80K-$120K. The Millcreek
            suburban corridor has moved to $250K-$350K+.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Metrics</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">Source / Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median Home Value (DataUSA ACS 2024)', '$115,200', 'DataUSA.io — 5-year ACS estimate'],
                  ['Median Home Value (City-Data ACS 2024)', '$135,200', 'City-Data.com — 1-year ACS estimate'],
                  ['Median Home Value (NeighborhoodScout)', '$118,479', 'NeighborhoodScout — repeat-sales methodology'],
                  ['Median Sale Price — ZIP 16503 (inner city)', '$81,000', 'Redfin, Feb 2026'],
                  ['Median Sale Price — ZIP 16505 (west/Millcreek)', '$300,000', 'Redfin, Feb 2026'],
                  ['Median Sale Price — ZIP 16509 (Millcreek south)', '$245,000', 'Redfin, Feb 2026'],
                  ['YoY Price Change (16503)', '+70.5%', 'Redfin Feb 2026 (small base effect)'],
                  ['YoY Price Change (16505)', '+15.8%', 'Redfin Feb 2026'],
                  ['YoY Price Change (16509)', '+27.1%', 'Redfin Feb 2026'],
                  ['Median Days on Market (16503)', '42 days', 'Redfin Feb 2026'],
                  ['Median Days on Market (16505)', '20 days', 'Redfin Feb 2026 — hottest segment'],
                  ['Median Days on Market (16509)', '31 days', 'Redfin Feb 2026'],
                  ['Compete Score (16503)', '71/100 — Very Competitive', 'Redfin'],
                  ['Compete Score (16505)', '81/100 — Very Competitive', 'Redfin'],
                  ['Compete Score (16509)', '73/100 — Very Competitive', 'Redfin'],
                  ['Sale-to-List Ratio (16503)', '95.6%', 'Redfin Feb 2026'],
                  ['Sale-to-List Ratio (16505)', '97.8%', 'Redfin Feb 2026'],
                  ['Sale-to-List Ratio (16509)', '98.1%', 'Redfin Feb 2026'],
                  ['NeighborhoodScout 12-mo appreciation', '-0.86%', 'NeighborhoodScout Q2-Q3 2025'],
                  ['NeighborhoodScout latest quarter (annualized)', '+14.91%', 'NeighborhoodScout Q3 2025'],
                  ['Cash offer range (urban Erie, ~$115K)', '$70,000–$90,000', 'USA Home Buyers estimate — 60-75% of ARV'],
                  ['Cash offer range (Millcreek, ~$275K)', '$175,000–$225,000', 'USA Home Buyers estimate — 65-80% of FMV'],
                  ['Erie transfer tax', '2.0% total (1% state + 1% local)', 'PA Dept. of Revenue — standard PA rate'],
                  ['Typical realtor commission', '5–6%', 'Industry standard'],
                  ['Housing stock — pre-1939', '38.6%', 'NeighborhoodScout 2025'],
                  ['Housing stock — 1940-1969', '38.7%', 'NeighborhoodScout 2025'],
                  ['Annual snowfall', '104+ inches', 'Third snowiest US city — structural housing impact'],
                ].map(([metric, value, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary">{value}</td>
                    <td className="py-3 px-4 text-gray-500 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-400">Market data last updated: April 2026</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Erie Market Bifurcation</h2>
          <p className="text-gray-700 mb-4">
            Erie&apos;s market is essentially two markets operating simultaneously. Understanding which one applies
            to your property is critical to pricing expectations:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left">Segment</th>
                  <th className="py-3 px-4 text-left">ZIP Codes</th>
                  <th className="py-3 px-4 text-left">Median Price</th>
                  <th className="py-3 px-4 text-left">$/sqft</th>
                  <th className="py-3 px-4 text-left">DOM</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Urban core / inner city', '16501, 16502, 16503, 16504', '$50K–$120K', '$32–$45', '30-50 days'],
                  ['West Erie / Millcreek corridor', '16505, 16506', '$250K–$400K+', '$129', '15-25 days'],
                  ['Millcreek South / suburban', '16509', '$200K–$280K', '$124', '25-35 days'],
                ].map(([seg, zips, price, sqft, dom], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{seg}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{zips}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary">{price}</td>
                    <td className="py-3 px-4">{sqft}</td>
                    <td className="py-3 px-4">{dom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Source: Redfin ZIP code market pages (16503, 16505, 16509), Feb 2026. Price per sqft data from Redfin Feb 2026.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax — Erie PA</h2>
          <p className="text-gray-700 mb-4">
            Erie PA has Pennsylvania&apos;s standard 2% total transfer tax — significantly lower than some other
            PA markets like Reading (5%). The split is 1% PA state plus 1% local tax (split between city and
            school district). By convention, buyer and seller each pay 1%.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left">Location</th>
                  <th className="py-3 px-4 text-left">Local Tax</th>
                  <th className="py-3 px-4 text-left">PA State</th>
                  <th className="py-3 px-4 text-left">Total</th>
                  <th className="py-3 px-4 text-left">On $115K Sale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['City of Erie', '1.0%', '1.0%', '2.0%', '$2,300', true],
                  ['Millcreek Township', '1.0%', '1.0%', '2.0%', '$2,300', false],
                  ['Reading (for comparison)', '4.0%', '1.0%', '5.0%', '$5,750 on $115K', false],
                  ['Harrisburg (for comparison)', '0.5%', '1.0%', '1.5%', '$1,725 on $115K', false],
                ].map(([location, local, state, total, amount, highlight], i) => (
                  <tr key={i} className={highlight ? 'bg-blue-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                    <td className="py-3 px-4 text-brand-dark">{location}</td>
                    <td className="py-3 px-4">{local}</td>
                    <td className="py-3 px-4">{state}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary">{total}</td>
                    <td className="py-3 px-4">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Source:{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer" className="underline">PA Department of Revenue — Realty Transfer Tax</a>
            {' · '}When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Housing Stock Characteristics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3">Housing Age</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Before 1939', '38.6%'],
                    ['1940–1969', '38.7%'],
                    ['1970–1999', '19.4%'],
                    ['2000+', '3.3%'],
                  ].map(([era, pct], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-3 text-brand-dark">{era}</td>
                      <td className="py-2 px-3 font-bold text-brand-primary">{pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3">Key Housing Facts</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Pre-1970 total', '77.3%'],
                    ['Annual snowfall', '104+ inches'],
                    ['Owner-occupied', '~50%'],
                    ['Renter-occupied', '~50%'],
                  ].map(([fact, value], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-3 text-brand-dark">{fact}</td>
                      <td className="py-2 px-3 font-bold text-brand-primary">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            77.3% of Erie&apos;s housing is pre-1970. These homes frequently have knob-and-tube or early circuit-breaker
            electrical, cast iron or galvanized plumbing, aging roofs, and deferred maintenance from Erie&apos;s punishing
            winters. That is exactly the housing stock cash buyers purchase. Source:{' '}
            <a href="https://www.neighborhoodscout.com/pa/erie/real-estate" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">NeighborhoodScout</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Demographics</h2>
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <tbody>
              {[
                ['Population (2024)', '92,940–93,850'],
                ['Metro Population (2020)', '270,876'],
                ['Median Age', '34.8 years'],
                ['Median Household Income', '$46,113–$47,733'],
                ['Poverty Rate', '22.7–23.3%'],
                ['Owner-Occupied', '~50%'],
                ['Renter-Occupied', '~50%'],
                ['Vacancy Rate', '9.1%'],
                ['White (non-Hispanic)', '63.84%'],
                ['Black or African American', '17.31%'],
                ['Hispanic or Latino', '8.55%'],
                ['Asian', '3.74%'],
              ].map(([metric, value], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-4 font-medium text-brand-dark">{metric}</td>
                  <td className="py-3 px-4 font-bold text-brand-primary">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-gray-400">Sources: DataUSA.io, City-Data.com, NeighborhoodScout, Wikipedia (2020 Census)</p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Thinking About Selling? Get an Erie PA Cash Offer"
          subheadline="Written offer in 24 hours. We cover all closing costs. Any condition, any situation."
          sourcePage="/markets/erie-pa/market-report"
        />

        <div className="mt-8 text-sm text-gray-500">
          <p>
            Related:{' '}
            <Link href="/markets/erie-pa/neighborhoods" className="text-brand-primary hover:underline">Erie PA Neighborhoods</Link>{' '}
            ·{' '}
            <Link href="/markets/erie-pa/faq" className="text-brand-primary hover:underline">Erie PA FAQ</Link>{' '}
            ·{' '}
            <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
          </p>
        </div>
      </div>
    </>
  );
}
