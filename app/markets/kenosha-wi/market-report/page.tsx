/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { kenoshWILocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/kenosha-wi/market-report`;

export const metadata: Metadata = {
  title: 'Kenosha WI Housing Market Report 2026',
  description:
    'Kenosha WI real estate market data: median prices, days on market, transfer taxes, and neighborhood breakdowns for sellers. Updated 2026.',
  alternates: { canonical: pageUrl },
};

export default function KenoshaMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        kenoshWILocalBusinessSchema,
        articleSchema('Kenosha WI Housing Market Report 2026', pageUrl, '2026-04-16', '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/kenosha-wi" className="hover:underline">Kenosha WI</Link> › Market Report
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Kenosha WI Housing Market Report — 2026
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm font-medium text-blue-800 mb-1">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            According to Zillow and Redfin data for Kenosha County (2026), the Kenosha median home value is $225,000, with a median sale price of $235,000 and approximately 35 days on market. Transfer tax: $3.00 per $1,000 (realty transfer fee, seller pays). Foreclosure process: Judicial. For a cash offer based on current Kenosha market conditions, call USA Home Buyers at 888-274-5006.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Metrics — Kenosha Kenosha County</h2>
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
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$225,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$235,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per sq ft</td><td className="p-3">$155</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">35 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Typical cash offer range</td><td className="p-3">68-80% of FMV</td><td className="p-3 text-gray-500">Local investor norms</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax</td><td className="p-3">$3.00 per $1,000 (realty transfer fee, seller pays)</td><td className="p-3 text-gray-500">State revenue authority</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure process</td><td className="p-3">Judicial (Kenosha County Circuit Court, 10-14 months, Ch. 846 Wis. Stats.)</td><td className="p-3 text-gray-500">State statutes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Breakdown — Kenosha Kenosha County</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Neighborhood</th>
                  <th className="text-left p-3">Median Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Downtown Kenosha</td><td className="p-3">$185,000-$240,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Uptown</td><td className="p-3">$180,000-$225,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Allendale</td><td className="p-3">$215,000-$265,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Lincoln Park</td><td className="p-3">$190,000-$235,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Pleasant Prairie (North)</td><td className="p-3">$250,000-$320,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Silver Lake</td><td className="p-3">$225,000-$290,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Bristol</td><td className="p-3">$260,000-$350,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Somers</td><td className="p-3">$265,000-$340,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Context — Kenosha WI</h2>
          <p className="text-gray-700 mb-4">Kenosha is strategically located between Chicago and Milwaukee on Lake Michigan, making it increasingly attractive to remote workers priced out of both metro areas. The former AMC Motors plant is now home to mixed-use development.</p>
          <p className="text-gray-700 mb-4">
            According to U.S. Census Bureau data, Kenosha County has a diverse housing stock mix of owner-occupied and renter-occupied units. The median age of housing units reflects the area's industrial history, with significant inventory in the pre-1960 range.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means for Kenosha Sellers</h2>
          <p className="text-gray-700 mb-4">
            With 35 median days on market, a traditional sale in Kenosha still takes time — and that's before accounting for inspection contingencies, financing contingencies, and repair negotiations. Properties that need work often sit longer or require significant price reductions.
          </p>
          <p className="text-gray-700 mb-4">
            A direct cash sale to USA Home Buyers closes in 7–14 days with no repairs required. We cover all closing costs including $3.00 per $1,000 (realty transfer fee, seller pays). The trade-off: cash offers typically run 68-80% of fair market value.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer Based on Current Kenosha Market Data" subheadline="Written offer in 24 hours based on current Kenosha County comps. We cover all closing costs." sourcePage="/markets/kenosha-wi/market-report" />

        <div className="mt-8 text-sm text-gray-500">
          <p>Data sources: Zillow Home Value Index (ZHVI), Redfin market statistics, U.S. Census Bureau American Community Survey. Market data reflects conditions as of March–April 2026. Individual property values vary. Contact us for a property-specific assessment.</p>
        </div>
      </div>
    </>
  );
}
