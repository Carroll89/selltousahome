/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { rochesterLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rochester-ny/market-report`;

export const metadata: Metadata = {
  title: 'Rochester NY Housing Market Report 2026',
  description:
    'Rochester NY real estate market data: median prices, days on market, transfer taxes, and neighborhood breakdowns for sellers. Updated 2026.',
  alternates: { canonical: pageUrl },
};

export default function RochesterMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        rochesterLocalBusinessSchema,
        articleSchema('Rochester NY Housing Market Report 2026', pageUrl, '2026-04-16', '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/rochester-ny" className="hover:underline">Rochester NY</Link> › Market Report
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Rochester NY Housing Market Report — 2026
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm font-medium text-blue-800 mb-1">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            According to Zillow and Redfin data for Monroe County (2026), the Rochester median home value is $155,000, with a median sale price of $162,000 and approximately 33 days on market. Transfer tax: $4.00 per $1,000 NYS (0.4%, seller pays). Foreclosure process: Judicial. For a cash offer based on current Rochester market conditions, call USA Home Buyers at 888-440-5250.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Metrics — Rochester Monroe County</h2>
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
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$155,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$162,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per sq ft</td><td className="p-3">$108</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">33 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Typical cash offer range</td><td className="p-3">65-78% of FMV</td><td className="p-3 text-gray-500">Local investor norms</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax</td><td className="p-3">$4.00 per $1,000 NYS (0.4%, seller pays)</td><td className="p-3 text-gray-500">State revenue authority</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure process</td><td className="p-3">Judicial (Monroe County Supreme Court, 12-24 months, RPAPL §1301)</td><td className="p-3 text-gray-500">State statutes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Breakdown — Rochester Monroe County</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Neighborhood</th>
                  <th className="text-left p-3">Median Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">19th Ward</td><td className="p-3">$110,000-$155,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">South Wedge</td><td className="p-3">$145,000-$215,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Park Avenue</td><td className="p-3">$195,000-$290,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Corn Hill</td><td className="p-3">$170,000-$245,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Maplewood</td><td className="p-3">$120,000-$165,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Charlotte</td><td className="p-3">$115,000-$160,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Dutchtown</td><td className="p-3">$130,000-$175,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Brooks Landing</td><td className="p-3">$155,000-$210,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Context — Rochester NY</h2>
          <p className="text-gray-700 mb-4">Rochester has some of the most affordable home prices of any major Northeastern city, with strong investor activity in the 19th Ward and South Wedge. The Kodak-to-University transition is ongoing, with U of R, RIT, and Monroe Community College anchoring the knowledge economy.</p>
          <p className="text-gray-700 mb-4">
            According to U.S. Census Bureau data, Monroe County has a diverse housing stock mix of owner-occupied and renter-occupied units. The median age of housing units reflects the area's industrial history, with significant inventory in the pre-1960 range.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means for Rochester Sellers</h2>
          <p className="text-gray-700 mb-4">
            With 33 median days on market, a traditional sale in Rochester still takes time — and that's before accounting for inspection contingencies, financing contingencies, and repair negotiations. Properties that need work often sit longer or require significant price reductions.
          </p>
          <p className="text-gray-700 mb-4">
            A direct cash sale to USA Home Buyers closes in 7–14 days with no repairs required. We cover all closing costs including $4.00 per $1,000 NYS (0.4%, seller pays). The trade-off: cash offers typically run 65-78% of fair market value.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer Based on Current Rochester Market Data" subheadline="Written offer in 24 hours based on current Monroe County comps. We cover all closing costs." sourcePage="/markets/rochester-ny/market-report" />

        <div className="mt-8 text-sm text-gray-500">
          <p>Data sources: Zillow Home Value Index (ZHVI), Redfin market statistics, U.S. Census Bureau American Community Survey. Market data reflects conditions as of March–April 2026. Individual property values vary. Contact us for a property-specific assessment.</p>
        </div>
      </div>
    </>
  );
}
