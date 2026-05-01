/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { waterburyLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/waterbury-ct/market-report`;

export const metadata: Metadata = {
  title: 'Waterbury CT Housing Market Report 2026 — Prices & Trends',
  description: 'Waterbury CT real estate market data for 2026. Median home values, New Haven County market trends, and what sellers need to know in this Connecticut Targeted Investment Community.',
  alternates: { canonical: pageUrl },
};

export default function WaterburyMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, articleSchema('Waterbury CT Housing Market Report 2026', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Waterbury CT Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">According to Zillow (March 2026), Waterbury's median home value is $276,344 — up 2.8% YoY. Redfin shows $299,000 median sale price with 6 average offers per listing and 78 average days on market. USA Home Buyers purchases Waterbury homes for cash in any condition. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Waterbury CT Market Overview</h2>
          <p className="text-gray-700 mb-4">Waterbury is Connecticut's fifth-largest city — the former "Brass Capital of the World" with a housing market that reflects its working-class immigrant community heritage. The market shows two distinct segments: move-in-ready homes that generate 6 offers and go quickly, and as-is properties with deferred maintenance that sit for 78+ days. Waterbury is a Connecticut Targeted Investment Community (TIC) under CGS §12-494, which affects the conveyance tax structure — verify the current rate with a Connecticut-licensed real estate attorney before any transaction.</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow median home value (ZHVI)</td><td className="p-3">$276,344 (+2.8% YoY)</td><td className="p-3 text-gray-500">Zillow Research (Mar 2026) — direct confirmed</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin median sale price</td><td className="p-3">$299,000 (+6.8% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Average offers per listing</td><td className="p-3">6</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Average days on market</td><td className="p-3">78 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">~90</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">99.8%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">TIC designation</td><td className="p-3">Yes (CT General Statute §12-494)</td><td className="p-3 text-gray-500">Connecticut DRS</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Conveyance tax</td><td className="p-3">TIC structure — verify with CT attorney</td><td className="p-3 text-gray-500">CT-licensed attorney required before publishing %</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Strict foreclosure (Law Day — no auction)</td><td className="p-3 text-gray-500">Connecticut law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">Yes — Connecticut attorney-closing state</td><td className="p-3 text-gray-500">Connecticut law</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">New Haven County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Waterbury Neighborhoods — Character Notes</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Neighborhood</th><th className="text-left p-3">Character</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Town Plot</td><td className="p-3">Central working-class residential. Dense, compact lots. Italian and Portuguese community heritage.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">North End</td><td className="p-3">Multi-unit residential, compact urban form. Significant Cape Verdean and immigrant community character.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Bunker Hill</td><td className="p-3">West side, modest single-family. Slightly more suburban character than dense core.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">East End</td><td className="p-3">Eastern Waterbury, working-class frame homes and two-family stock.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Brooklyn / Willow</td><td className="p-3">South-central, mixed residential, two-family properties common.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Waterville</td><td className="p-3">Northern Waterbury, older established residential, modest Colonial and Cape stock.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Connecticut Closing Essentials</h2>
          <p className="text-gray-700 mb-4">The <strong>Waterbury Probate Court</strong> is at 49 Leavenworth Street, Waterbury CT 06702, phone (203) 755-1127 — confirmed via <a href="https://ctprobate.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">ctprobate.gov</a>. This is the correct address for Waterbury probate matters — not City Hall at 235 Grand Street. The <strong>Waterbury Town Clerk</strong> is at 235 Grand Street, Waterbury CT 06702, phone (203) 574-6806 — handles deed recording and land records. Verify current contact information before relying on any specific number.</p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006</a>
        </section>

        <Link href="/markets/waterbury-ct" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Waterbury CT Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Waterbury CT Cash Offer" sourcePage="/markets/waterbury-ct/market-report" />
      </div>
    </>
  );
}
