/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { manchesterLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/manchester-nh/market-report`;

export const metadata: Metadata = {
  title: 'Manchester NH Housing Market Report 2026',
  description:
    'Manchester NH real estate market data: median prices, days on market, transfer taxes, and neighborhood breakdowns for sellers. Updated 2026.',
  alternates: { canonical: pageUrl },
};

export default function ManchesterMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        manchesterLocalBusinessSchema,
        articleSchema('Manchester NH Housing Market Report 2026', pageUrl, '2026-04-16', '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/manchester-nh" className="hover:underline">Manchester NH</Link> › Market Report
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Manchester NH Housing Market Report — 2026
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm font-medium text-blue-800 mb-1">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            According to Zillow and Redfin data for Hillsborough County (2026), the Manchester median home value is $310,000, with a median sale price of $315,000 and approximately 25 days on market. Transfer tax: $1.50 per $100 total (buyer $0.75 + seller $0.75 per $100). Foreclosure process: Non-judicial. For a cash offer based on current Manchester market conditions, call USA Home Buyers at 888-440-5250.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Metrics — Manchester Hillsborough County</h2>
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
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$310,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$315,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per sq ft</td><td className="p-3">$210</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">25 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Typical cash offer range</td><td className="p-3">68-80% of FMV</td><td className="p-3 text-gray-500">Local investor norms</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax</td><td className="p-3">$1.50 per $100 total (buyer $0.75 + seller $0.75 per $100)</td><td className="p-3 text-gray-500">State revenue authority</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure process</td><td className="p-3">Non-judicial (power of sale, ~60-90 days, NH RSA 479:25)</td><td className="p-3 text-gray-500">State statutes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Breakdown — Manchester Hillsborough County</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Neighborhood</th>
                  <th className="text-left p-3">Median Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Amoskeag</td><td className="p-3">$275,000-$350,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">North End</td><td className="p-3">$285,000-$365,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Beech Hill</td><td className="p-3">$295,000-$385,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Elmwood</td><td className="p-3">$270,000-$340,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Pinecrest</td><td className="p-3">$310,000-$405,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Glen Lake</td><td className="p-3">$320,000-$420,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">South Beech Street</td><td className="p-3">$265,000-$335,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Upper Amoskeag</td><td className="p-3">$280,000-$360,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Context — Manchester NH</h2>
          <p className="text-gray-700 mb-4">Manchester is the largest city in New Hampshire and serves as the state's commercial hub. Low state taxes (no income or sales tax), proximity to Boston (55 miles south), and a booming healthcare and tech sector drive housing demand.</p>
          <p className="text-gray-700 mb-4">
            According to U.S. Census Bureau data, Hillsborough County has a diverse housing stock mix of owner-occupied and renter-occupied units. The median age of housing units reflects the area's industrial history, with significant inventory in the pre-1960 range.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means for Manchester Sellers</h2>
          <p className="text-gray-700 mb-4">
            With 25 median days on market, a traditional sale in Manchester still takes time — and that's before accounting for inspection contingencies, financing contingencies, and repair negotiations. Properties that need work often sit longer or require significant price reductions.
          </p>
          <p className="text-gray-700 mb-4">
            A direct cash sale to USA Home Buyers closes in 7–14 days with no repairs required. We cover all closing costs including $1.50 per $100 total (buyer $0.75 + seller $0.75 per $100). The trade-off: cash offers typically run 68-80% of fair market value.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer Based on Current Manchester Market Data" subheadline="Written offer in 24 hours based on current Hillsborough County comps. We cover all closing costs." sourcePage="/markets/manchester-nh/market-report" />

        <div className="mt-8 text-sm text-gray-500">
          <p>Data sources: Zillow Home Value Index (ZHVI), Redfin market statistics, U.S. Census Bureau American Community Survey. Market data reflects conditions as of March–April 2026. Individual property values vary. Contact us for a property-specific assessment.</p>
        </div>
      </div>
    </>
  );
}
