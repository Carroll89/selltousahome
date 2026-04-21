/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { wausauLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/wausau-wi/market-report`;

export const metadata: Metadata = {
  title: 'Wausau WI Housing Market Report 2026 — Prices, Trends, Data',
  description: 'Wausau WI real estate market data for 2026. Median prices, hotness ranking, neighborhood trends, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function WausauMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[wausauLocalBusinessSchema, articleSchema('Wausau WI Housing Market Report 2026', pageUrl, '2026-04-20')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/wausau-wi" className="hover:text-white">Wausau WI</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Wausau WI Housing Market Report — 2026</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wausau Metro Market Overview</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median listing price (metro)</td><td className="p-3">$366,000</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hotness rank</td><td className="p-3">#18 of 300+ metros</td><td className="p-3 text-gray-500">Realtor.com Hotness Index</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Hotness score</td><td className="p-3">89.3 / 100</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer fee</td><td className="p-3">0.3% ($3/$1,000, seller pays)</td><td className="p-3 text-gray-500">WI DOR (revenue.wi.gov)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (~12 months, sheriff sale)</td><td className="p-3 text-gray-500">WI Statutes Ch. 846</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Primary county</td><td className="p-3">Marathon County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Area Price Ranges</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Area</th><th className="text-left p-3">Typical Range</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Downtown Wausau</td><td className="p-3">$150,000-$250,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">East Side</td><td className="p-3">$130,000-$200,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">West Side</td><td className="p-3">$160,000-$280,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Weston</td><td className="p-3">$200,000-$350,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Schofield</td><td className="p-3">$120,000-$200,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Rothschild</td><td className="p-3">$150,000-$250,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Rib Mountain</td><td className="p-3">$200,000-$400,000+</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Mosinee</td><td className="p-3">$120,000-$200,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm">Ranges approximate. Actual values depend on condition, lot size, and specific location.</p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means for Sellers</h2>
          <p className="text-gray-700 mb-4">Wausau's #18 hotness ranking means demand is strong and homes are moving. But for properties with deferred maintenance — aging furnaces, ice dam damage, basement moisture, old insulation — conventional buyers demand repairs before closing. Central Wisconsin winters accelerate deterioration, and repair costs can exceed what makes sense for many sellers.</p>
          <p className="text-gray-700">A direct cash sale to USA Home Buyers eliminates repair costs, commission ($18K-$22K on a $366K home), and the WI transfer fee ($1,098). We close in 7-14 days.</p>
        </section>
        <Link href="/markets/wausau-wi" className="text-brand-primary hover:underline font-medium">← Back to Wausau WI</Link>
        <div className="mt-8"><CashOfferForm variant="footer" headline="Get Your Wausau Cash Offer" sourcePage="/markets/wausau-wi/market-report" /></div>
      </div>
    </>
  );
}
