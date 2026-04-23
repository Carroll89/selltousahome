/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { bridgeportLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bridgeport-ct/market-report`;

export const metadata: Metadata = {
  title: 'Bridgeport CT Housing Market Report 2026',
  description:
    'Bridgeport CT real estate market data: median prices, days on market, transfer taxes, and neighborhood breakdowns for sellers. Updated 2026.',
  alternates: { canonical: pageUrl },
};

export default function BridgeportMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        bridgeportLocalBusinessSchema,
        articleSchema('Bridgeport CT Housing Market Report 2026', pageUrl, '2026-04-16', '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/bridgeport-ct" className="hover:underline">Bridgeport CT</Link> › Market Report
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Bridgeport CT Housing Market Report — 2026
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm font-medium text-blue-800 mb-1">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            According to Zillow and Redfin data for Fairfield County (2026), the Bridgeport median home value is $240,000, with a median sale price of $252,000 and 38 days on market. Transfer tax: 1.0% (0.75% state + 0.25% municipal, seller pays). Foreclosure process: Strict foreclosure. For a cash offer based on current Bridgeport market conditions, call USA Home Buyers at 888-274-5006.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Metrics — Bridgeport Fairfield County</h2>
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
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$240,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$252,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per sq ft</td><td className="p-3">$162</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">38 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Typical cash offer range</td><td className="p-3">65-78% of FMV</td><td className="p-3 text-gray-500">Local investor norms</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax</td><td className="p-3">1.0% (0.75% state + 0.25% municipal, seller pays)</td><td className="p-3 text-gray-500">State revenue authority</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure process</td><td className="p-3">Strict foreclosure (Superior Court, Law Day, no auction — unique to CT)</td><td className="p-3 text-gray-500">State statutes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Breakdown — Bridgeport Fairfield County</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Neighborhood</th>
                  <th className="text-left p-3">Median Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">East Side</td><td className="p-3">$195,000-$250,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Black Rock</td><td className="p-3">$260,000-$345,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">North End</td><td className="p-3">$190,000-$240,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">South End</td><td className="p-3">$185,000-$235,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Upper East Side</td><td className="p-3">$225,000-$290,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">East End</td><td className="p-3">$175,000-$220,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Hollow</td><td className="p-3">$170,000-$215,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">West Side</td><td className="p-3">$200,000-$255,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Context — Bridgeport CT</h2>
          <p className="text-gray-700 mb-4">Bridgeport is Connecticut's largest city and home to a large Puerto Rican and Hispanic community. The city is experiencing ongoing revitalization investment from Steelpointe Harbor to the downtown core, creating seller opportunities at varying price points.</p>
          <p className="text-gray-700 mb-4">
            According to U.S. Census Bureau data, Fairfield County has a diverse housing stock mix of owner-occupied and renter-occupied units. The median age of housing units reflects the area's industrial history, with significant inventory in the pre-1960 range.
          </p>
          <p className="text-gray-700 mb-4"><strong>Hablamos español.</strong> We serve the Spanish-speaking community in Bridgeport CT — call us in English or Spanish.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means for Bridgeport Sellers</h2>
          <p className="text-gray-700 mb-4">
            With 38 median days on market, a traditional sale in Bridgeport still takes time — and that's before accounting for inspection contingencies, financing contingencies, and repair negotiations. Properties that need work often sit longer or require significant price reductions.
          </p>
          <p className="text-gray-700 mb-4">
            A direct cash sale to USA Home Buyers closes in 7–14 days with no repairs required. We cover all closing costs including 1.0% (0.75% state + 0.25% municipal, seller pays). The trade-off: cash offers typically run 65-78% of fair market value.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer Based on Current Bridgeport Market Data" subheadline="Written offer in 24 hours based on current Fairfield County comps. We cover all closing costs." sourcePage="/markets/bridgeport-ct/market-report" />

        <div className="mt-8 text-sm text-gray-500">
          <p>Data sources: Zillow Home Value Index (ZHVI), Redfin market statistics, U.S. Census Bureau American Community Survey. Market data reflects conditions as of March–April 2026. Individual property values vary. Contact us for a property-specific assessment.</p>
        </div>
      </div>
    </>
  );
}
