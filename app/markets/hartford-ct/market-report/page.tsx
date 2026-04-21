/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { hartfordLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/market-report`;

export const metadata: Metadata = {
  title: 'Hartford CT Housing Market Report 2026 — Prices, Trends, Data',
  description:
    'Hartford CT real estate market data for 2026. Median prices, days on market, neighborhood trends, and what it means for sellers considering a cash offer.',
  alternates: { canonical: pageUrl },
};

export default function HartfordMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        hartfordLocalBusinessSchema,
        articleSchema('Hartford CT Housing Market Report 2026', pageUrl, '2026-04-20'),
      ]} />

      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hartford CT Housing Market Report — 2026
          </h1>
          <p className="text-blue-100 text-lg">Current market data, neighborhood pricing, and what it means for Hartford sellers.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Hartford Metro Market Overview</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median listing price (metro)</td><td className="p-3">$455,000</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hotness rank</td><td className="p-3">#13 of 300+ metros</td><td className="p-3 text-gray-500">Realtor.com Hotness Index</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Hotness score</td><td className="p-3">92.8 / 100</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Conveyance tax</td><td className="p-3">0.75% state (first $800K) + municipal</td><td className="p-3 text-gray-500">CT DRS (ct.gov/drs)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Strict foreclosure (Law Day, no auction)</td><td className="p-3 text-gray-500">CT Judicial Branch</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Primary county</td><td className="p-3">Hartford County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Price Ranges</h2>
          <p className="text-gray-700 mb-4">
            Hartford's market is split between the city proper (lower values, older stock) and the suburbs (higher values, more traditional). Here's a rough breakdown:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Area</th>
                  <th className="text-left p-3">Typical Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">West End</td><td className="p-3">$250,000-$400,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Asylum Hill</td><td className="p-3">$180,000-$300,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Barry Square</td><td className="p-3">$150,000-$250,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Frog Hollow</td><td className="p-3">$140,000-$230,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Blue Hills</td><td className="p-3">$180,000-$300,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">South End</td><td className="p-3">$160,000-$270,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Parkville</td><td className="p-3">$140,000-$220,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Behind the Rocks</td><td className="p-3">$150,000-$240,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">West Hartford (suburb)</td><td className="p-3">$350,000-$550,000+</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Glastonbury (suburb)</td><td className="p-3">$400,000-$600,000+</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">East Hartford</td><td className="p-3">$200,000-$320,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">New Britain</td><td className="p-3">$180,000-$280,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Manchester</td><td className="p-3">$250,000-$380,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm">Ranges are approximate based on recent listing data. Actual values depend on condition, lot size, and specific location.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means for Hartford Sellers</h2>
          <p className="text-gray-700 mb-4">
            Hartford's #13 hotness ranking means demand is strong — but that demand is concentrated in the suburbs. City properties, especially multi-families with deferred maintenance, lead paint issues, or tenant problems, often sit longer or attract only investor buyers. If your Hartford property needs significant work, a direct cash sale may net you more than a 6-month listing with price reductions.
          </p>
          <p className="text-gray-700">
            Connecticut's conveyance tax (0.75% state portion on the first $800K, seller-paid) adds to closing costs on traditional sales. When you sell to USA Home Buyers, we cover all closing costs including this tax.
          </p>
        </section>

        <section className="my-8">
          <Link href="/markets/hartford-ct" className="text-brand-primary hover:underline font-medium">← Back to Hartford CT</Link>
        </section>

        <CashOfferForm variant="footer" headline="Get Your Hartford CT Cash Offer" sourcePage="/markets/hartford-ct/market-report" />
      </div>
    </>
  );
}
