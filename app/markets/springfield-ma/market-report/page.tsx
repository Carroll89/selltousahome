/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { springfieldLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/springfield-ma/market-report`;

export const metadata: Metadata = {
  title: 'Springfield MA Housing Market Report 2026',
  description:
    'Springfield MA real estate market data: median prices, days on market, transfer taxes, and neighborhood breakdowns for sellers. Updated 2026.',
  alternates: { canonical: pageUrl },
};

export default function SpringfieldMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        springfieldLocalBusinessSchema,
        articleSchema('Springfield MA Housing Market Report 2026', pageUrl, '2026-04-16', '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/springfield-ma" className="hover:underline">Springfield MA</Link> › Market Report
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Springfield MA Housing Market Report — 2026
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm font-medium text-blue-800 mb-1">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            According to Zillow and Redfin data for Hampden County (2026), the Springfield median home value is $178,000, with a median sale price of $185,000 and approximately 32 days on market. Transfer tax: $4.56 per $1,000 (deed excise, seller pays). Foreclosure process: Non-judicial. For a cash offer based on current Springfield market conditions, call USA Home Buyers at 888-440-5250.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Metrics — Springfield Hampden County</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$178,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$185,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per sq ft</td><td className="p-3">$122</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">32 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Typical cash offer range</td><td className="p-3">65-78% of FMV</td><td className="p-3 text-gray-500">Local investor norms</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax</td><td className="p-3">$4.56 per $1,000 (deed excise, seller pays)</td><td className="p-3 text-gray-500">State revenue authority</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure process</td><td className="p-3">Non-judicial (power of sale, ~75-120 days, MGL Ch. 183)</td><td className="p-3 text-gray-500">State statutes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Breakdown — Springfield Hampden County</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Neighborhood</th>
                  <th className="text-left p-3">Median Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Forest Park</td><td className="p-3">$195,000-$230,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Pine Point</td><td className="p-3">$160,000-$210,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Six Corners</td><td className="p-3">$145,000-$185,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hungry Hill</td><td className="p-3">$140,000-$180,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">McKnight</td><td className="p-3">$175,000-$220,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">East Springfield</td><td className="p-3">$130,000-$165,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Indian Orchard</td><td className="p-3">$140,000-$175,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">North End</td><td className="p-3">$120,000-$160,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Context — Springfield MA</h2>
          <p className="text-gray-700 mb-4">Springfield is the birthplace of basketball (1891, YMCA on State Street) and home to the Basketball Hall of Fame. The Pioneer Valley's housing market is shaped by academic demand from area colleges and an evolving tech sector.</p>
          <p className="text-gray-700 mb-4">
            According to U.S. Census Bureau data, Hampden County has a diverse housing stock mix of owner-occupied and renter-occupied units. The median age of housing units reflects the area's industrial history, with significant inventory in the pre-1960 range.
          </p>
          <p className="text-gray-700 mb-4"><strong>Hablamos español.</strong> We serve the Spanish-speaking community in Springfield MA — call us in English or Spanish.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means for Springfield Sellers</h2>
          <p className="text-gray-700 mb-4">
            With 32 median days on market, a traditional sale in Springfield still takes time — and that's before accounting for inspection contingencies, financing contingencies, and repair negotiations. Properties that need work often sit longer or require significant price reductions.
          </p>
          <p className="text-gray-700 mb-4">
            A direct cash sale to USA Home Buyers closes in 7–14 days with no repairs required. We cover all closing costs including $4.56 per $1,000 (deed excise, seller pays). The trade-off: cash offers typically run 65-78% of fair market value.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer Based on Current Springfield Market Data" subheadline="Written offer in 24 hours based on current Hampden County comps. We cover all closing costs." sourcePage="/markets/springfield-ma/market-report" />

        <div className="mt-8 text-sm text-gray-500">
          <p>Data sources: Zillow Home Value Index (ZHVI), Redfin market statistics, U.S. Census Bureau American Community Survey. Market data reflects conditions as of March–April 2026. Individual property values vary. Contact us for a property-specific assessment.</p>
        </div>
      </div>
    </>
  );
}
