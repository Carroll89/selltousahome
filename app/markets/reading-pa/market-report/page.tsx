import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, readingLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Reading PA Housing Market Report 2026 | Home Prices & Data',
  description:
    'Reading PA housing market data for 2026 — median prices, days on market, transfer taxes, neighborhood prices, and cash buyer insights from USA Home Buyers.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/market-report` },
};

const pageUrl = `${SITE_URL}/markets/reading-pa/market-report`;

export default function ReadingMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Reading PA Housing Market Report 2026', pageUrl, '2026-04-12', '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer: Reading PA Housing Market 2026</h2>
          <p className="text-gray-700 text-sm leading-relaxed">According to Redfin (February 2026), Reading's median home sale price is $185,000 (-1.1% year-over-year); the Zillow Home Value Index puts the typical home value at $227,041 (+7.8%). Homes average 24 days on market. Critical note: Reading has a 5% total transfer tax (4% City of Reading + 1% PA State) — one of the highest in Pennsylvania. Cash buyers cover all closing costs including the full transfer tax, and close in 7–14 days as-is.</p>
        </div>

        <div className="mb-4 text-sm text-gray-500">
          <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Reading PA</Link> › Market Report
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Reading PA Housing Market Report — 2026
        </h1>
        <p className="text-gray-600 mb-2">Data compiled April 2026. Sources: Zillow, Redfin, NeighborhoodScout, Berks County Recorder of Deeds.</p>

        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-10">
          <p className="font-bold text-brand-dark mb-1">⚠️ Reading&apos;s 5% Transfer Tax — Critical Context</p>
          <p className="text-sm text-gray-700">
            Reading, PA imposes a 4% local transfer tax on top of PA&apos;s 1% state tax — 5% total.
            The rest of Berks County pays 2% total. On a $185,000 sale, Reading sellers owe $7,400 in city
            transfer tax alone. This is the single biggest cost differentiator between Reading and neighboring markets.
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
                  ['Typical Home Value (Zillow ZHVI)', '$227,041', 'Zillow, early 2026 — all homes'],
                  ['Median Sale Price', '$185,000', 'Redfin, Feb 2026 — closed transactions'],
                  ['YoY Price Change', '-1.1%', 'Redfin Feb 2026'],
                  ['Median Price Per Sq Ft', '$120', 'Redfin Feb 2026'],
                  ['Median Days on Market', '24 days', 'Redfin Feb 2026 — up from 12 days YoY'],
                  ['Sale-to-List Ratio', '96.6%', 'Redfin Feb 2026 — down 4.7pts YoY'],
                  ['Homes Sold (month)', '47', 'Redfin Feb 2026'],
                  ['Average Offers Per Home', '6', 'Redfin'],
                  ['Compete Score', '80/100 — Very Competitive', 'Redfin'],
                  ['10-Year Appreciation', '135.05% (+8.92%/yr)', 'NeighborhoodScout'],
                  ['5-Year Appreciation', '87.90% (+13.45%/yr)', 'NeighborhoodScout'],
                  ['Latest Quarter (annualized)', '+15.30%', 'NeighborhoodScout'],
                  ['Cash Offer Range (avg home)', '$130,000–$182,000', 'USA Home Buyers estimate — 70-80% of FMV'],
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
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left">Location</th>
                  <th className="py-3 px-4 text-left">Local Tax</th>
                  <th className="py-3 px-4 text-left">PA State</th>
                  <th className="py-3 px-4 text-left">Total</th>
                  <th className="py-3 px-4 text-left">On $185K Sale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['City of Reading', '4.0%', '1.0%', '5.0%', '$9,250', true],
                  ['Berks County municipalities', '1.0%', '1.0%', '2.0%', '$3,700', false],
                  ['Harrisburg', '0.5%', '1.0%', '1.5%', '$2,775', false],
                  ['Allentown', '1.0%', '1.0%', '2.0%', '$3,700', false],
                ].map(([location, local, state, total, amount, highlight], i) => (
                  <tr key={i} className={highlight ? 'bg-yellow-50 font-semibold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
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
            Sources:{' '}
            <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer" className="underline">Berks County Recorder of Deeds</a>
            {' · '}
            <a href="https://alttitle.com/pa-realty-transfer-tax-deviations/" target="_blank" rel="noopener noreferrer" className="underline">Alt Title PA Transfer Tax</a>
            {' · '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer" className="underline">PA Dept of Revenue</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Housing Stock Characteristics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3">Housing Type</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Row homes / attached', '52.17%'],
                    ['Duplexes / small apt buildings', '18.54%'],
                    ['Large apartment complexes', '16.62%'],
                    ['Single-family detached', '12.33%'],
                  ].map(([type, pct], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-3 text-brand-dark">{type}</td>
                      <td className="py-2 px-3 font-bold text-brand-primary">{pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3">Housing Age</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Before 1939', '56.68%'],
                    ['1940–1969', '23.49%'],
                    ['1970–1999', '16.53%'],
                    ['2000+', '3.30%'],
                  ].map(([era, pct], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-3 text-brand-dark">{era}</td>
                      <td className="py-2 px-3 font-bold text-brand-primary">{pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Over 80% of Reading&apos;s housing stock is 50+ years old. Lead paint, aging systems, and deferred
            maintenance are the norm — not the exception. Source: <a href="https://www.neighborhoodscout.com/pa/reading/real-estate" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">NeighborhoodScout</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Demographics</h2>
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <tbody>
              {[
                ['Population (2024)', '95,242'],
                ['Projected Population (2026)', '98,269'],
                ['Hispanic / Latino', '70.8%'],
                ['Median Household Income', '$44,091'],
                ['Poverty Rate', '25.5%'],
                ['Median Age', '31.9 years'],
                ['Owner-Occupied', '38.45%'],
                ['Renter-Occupied', '61.55%'],
                ['Average Market Rent', '$1,748/month'],
              ].map(([metric, value], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-4 font-medium text-brand-dark">{metric}</td>
                  <td className="py-3 px-4 font-bold text-brand-primary">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-gray-400">Sources: PA Demographics, NeighborhoodScout, City-Data.com</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Long-Term Appreciation</h2>
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-brand-primary text-white">
                <th className="py-3 px-4 text-left">Period</th>
                <th className="py-3 px-4 text-left">Total</th>
                <th className="py-3 px-4 text-left">Annualized</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Last 10 years', '135.05%', '8.92%/yr'],
                ['Last 5 years', '87.90%', '13.45%/yr'],
                ['Last 2 years', '4.81%', '2.38%/yr'],
                ['Last 12 months', '-0.16%', '-0.16%'],
                ['Latest quarter', '3.62%', '15.30% annualized'],
              ].map(([period, total, ann], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-4 font-medium text-brand-dark">{period}</td>
                  <td className="py-3 px-4 text-brand-primary font-bold">{total}</td>
                  <td className="py-3 px-4 text-gray-600">{ann}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-gray-400">Source: NeighborhoodScout. Reading is in the top 10% nationally for 10-year appreciation.</p>
          <p className="mt-1 text-xs text-gray-400">Market data last updated: April 2026</p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Thinking About Selling? Get a Reading PA Cash Offer"
          subheadline="Written offer in 24 hours. We cover all closing costs including the 5% transfer tax. Hablamos español."
          sourcePage="/markets/reading-pa/market-report"
        />

        <div className="mt-8 text-sm text-gray-500">
          <p>
            Related:{' '}
            <Link href="/markets/reading-pa/neighborhoods" className="text-brand-primary hover:underline">Reading PA Neighborhoods</Link>{' '}
            ·{' '}
            <Link href="/markets/reading-pa/faq" className="text-brand-primary hover:underline">Reading PA FAQ</Link>{' '}
            ·{' '}
            <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
          </p>
        </div>
      </div>
    </>
  );
}
