/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { milwaukeeLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/milwaukee-wi/market-report`;

export const metadata: Metadata = {
  title: 'Milwaukee WI Housing Market Report 2026 — Prices & Trends',
  description: 'Milwaukee WI real estate market data for 2026. Median prices, Milwaukee County trends, neighborhood character, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function MilwaukeeMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[milwaukeeLocalBusinessSchema, articleSchema('Milwaukee WI Housing Market Report 2026', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/milwaukee-wi" className="hover:text-white">Milwaukee WI</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Milwaukee WI Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">According to Redfin (March 2026), Milwaukee's median sale price is $235,000 — up 14.6% year-over-year — with 44 days on market and a Compete Score of 72/100. Milwaukee County median is $280,000. USA Home Buyers purchases Milwaukee homes for cash in any condition, any situation. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Milwaukee WI Market Overview</h2>
          <p className="text-gray-700 mb-4">
            Milwaukee is Wisconsin's largest city and the economic hub of southeastern Wisconsin. The combination of manufacturing heritage, healthcare (Froedtert, Aurora, Children's), financial services (Northwestern Mutual), and a large university presence (UWM, Marquette) creates a stable housing market. Milwaukee's architectural identity — German duplexes, Cream City brick buildings, Queen Anne and Arts & Crafts single-family homes, Polish flats — reflects layers of 19th and early-20th-century growth. About 44.8% of city housing units were built before 1950 (2024 ACS Census data).
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price (city)</td><td className="p-3">$235,000 (+14.6% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price (county)</td><td className="p-3">$280,000 (+12.0% YoY)</td><td className="p-3 text-gray-500">Redfin county (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$161/sq ft (+15.0% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">44 days (city); 39 days (county)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">99.7% city; 100.6% county</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">72 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">445 city; 4 avg. offers</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">$3/$1,000 (0.3%), Milwaukee County ROD</td><td className="p-3 text-gray-500">Wis. Stat. §77.22</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat statewide (WRDA)</td><td className="p-3 text-gray-500">WRDA</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Milwaukee County Circuit Court; sheriff auctions every Monday morning</td><td className="p-3 text-gray-500">WI Law Help / Wis. Stat. Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Milwaukee County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Milwaukee Neighborhoods — Character Notes</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Neighborhood</th><th className="text-left p-3">Character</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Bay View</td><td className="p-3">Lake-adjacent older homes/bungalows. High demand, tight margins. Median $355,000 (Mar 2026). Compete Score 83.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Riverwest</td><td className="p-3">Duplex/rental and near-downtown demand. Small-sample volatility. Median ~$366,000 (Mar 2026). Compete Score 67.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Washington Heights</td><td className="p-3">Historic west-side housing. Owner-occupant + rehab appeal. Median $320,000 (Mar 2026). Compete Score 78.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sherman Park</td><td className="p-3">Strongest rehab/cash-buyer affordability. Older stock and repair risk. Median $115,000 (Mar 2026). Compete Score 62.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Walker's Point</td><td className="p-3">Mixed industrial/residential, redevelopment. Median ~$158,000 (Mar 2026). Compete Score 78. Small sample.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Lower East Side</td><td className="p-3">Condo/rental-heavy. Longer DOM (123 avg/108 typical). HOA complexity. Median ~$329,000 (Mar 2026). Compete Score 38.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Downtown Milwaukee</td><td className="p-3">Condo/urban inventory. Higher price, slower timelines. Median $397,000 (Mar 2026). Compete Score 40.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Note: Neighborhood samples can be small (1–5 sales/month). Use as directional guidance; verify with current Redfin/MLS data. Sources: Redfin neighborhood pages, Mar 2026.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Milwaukee's Market Means for As-Is Sellers</h2>
          <p className="text-gray-700 mb-4">
            With a 99.7% sale-to-list ratio and 72/100 Compete Score, move-in-ready Milwaukee homes sell well. But the city's 44.8% pre-1950 housing share means inherited, distressed, or deferred-maintenance properties — especially the large duplex and multifamily stock — often can't compete on the retail market without $25,000–$60,000+ in updates. A direct cash sale from USA Home Buyers can close well before a probate or foreclosure timeline forces your hand.
          </p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006</a>
        </section>

        <Link href="/markets/milwaukee-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Milwaukee WI Market Page</Link>

        <CashOfferForm variant="footer" headline="Get a Milwaukee WI Cash Offer" sourcePage="/markets/milwaukee-wi/market-report" />
      </div>
    </>
  );
}
