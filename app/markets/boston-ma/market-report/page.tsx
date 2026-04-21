/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { bostonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/market-report`;

export const metadata: Metadata = {
  title: 'Boston MA Housing Market Report 2026 — Prices, Trends, Data',
  description: 'Boston MA real estate market data for 2026. Median prices by neighborhood, days on market, transfer taxes, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function BostonMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, articleSchema('Boston MA Housing Market Report 2026', pageUrl, '2026-04-20')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Boston MA Housing Market Report — 2026</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Boston Metro Market Overview</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median listing price (metro)</td><td className="p-3">$829,000</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hotness rank</td><td className="p-3">#15 of 300+ metros</td><td className="p-3 text-gray-500">Realtor.com Hotness Index</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Hotness score</td><td className="p-3">91.0 / 100</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Deed excise stamps</td><td className="p-3">$4.56 per $1,000 (seller pays)</td><td className="p-3 text-gray-500">MA DOR (mass.gov/dor)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial (power of sale, MGL Ch. 244)</td><td className="p-3 text-gray-500">MA Trial Court</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Primary county</td><td className="p-3">Suffolk County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Price Ranges</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Neighborhood</th><th className="text-left p-3">Typical Range</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Back Bay / Beacon Hill</td><td className="p-3">$900,000-$2,000,000+</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">South Boston</td><td className="p-3">$600,000-$900,000+</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Charlestown</td><td className="p-3">$700,000-$1,000,000+</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Jamaica Plain</td><td className="p-3">$550,000-$800,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Brighton</td><td className="p-3">$550,000-$750,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">East Boston</td><td className="p-3">$500,000-$700,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Dorchester</td><td className="p-3">$500,000-$650,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Roxbury</td><td className="p-3">$400,000-$600,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Mattapan</td><td className="p-3">$400,000-$550,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hyde Park</td><td className="p-3">$450,000-$600,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Cambridge (metro)</td><td className="p-3">$700,000-$1,200,000+</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Quincy (metro)</td><td className="p-3">$400,000-$600,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm">Ranges approximate based on recent listing data. Actual values depend on condition, lot size, and specific location.</p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means for Sellers</h2>
          <p className="text-gray-700 mb-4">Boston's #15 hotness ranking means demand is strong across the metro. But for properties that need significant work — lead paint, old systems, structural issues — the buyer pool narrows dramatically. Conventional lenders won't finance homes failing inspection, which means only cash buyers and renovation loan holders can purchase.</p>
          <p className="text-gray-700">At Boston's price points, the cost of carrying a property while it sits on the market is substantial. A 5-6% commission on an $829K home runs $41K-$50K. Add deed excise stamps ($3,780), attorney fees, and repairs — a direct cash sale often nets more for distressed properties after accounting for all traditional sale costs.</p>
        </section>
        <Link href="/markets/boston-ma" className="text-brand-primary hover:underline font-medium">← Back to Boston MA</Link>
        <div className="mt-8"><CashOfferForm variant="footer" headline="Get Your Boston Cash Offer" sourcePage="/markets/boston-ma/market-report" /></div>
      </div>
    </>
  );
}
