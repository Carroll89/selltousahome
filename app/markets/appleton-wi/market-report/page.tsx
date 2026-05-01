/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { appletonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/appleton-wi/market-report`;

export const metadata: Metadata = {
  title: 'Appleton WI Housing Market Report 2026 — Prices & Trends',
  description: 'Appleton WI real estate market data for 2026. Median prices, Outagamie County trends, neighborhood character, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function AppletonMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[appletonLocalBusinessSchema, articleSchema('Appleton WI Housing Market Report 2026', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/appleton-wi" className="hover:text-white">Appleton WI</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Appleton WI Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">According to Redfin (March 2026), Appleton's median sale price is $285,000 — up 5.6% year-over-year — with 45 days on market and a Compete Score of 77/100. USA Home Buyers purchases Appleton homes for cash in any condition, any situation. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Appleton WI Market Overview</h2>
          <p className="text-gray-700 mb-4">
            Appleton is the county seat of Outagamie County and the largest city in the Fox Cities region. The combination of manufacturing, healthcare (Thedacare, Ascension), and educational institutions (Lawrence University) creates a stable housing market that has appreciated through economic cycles. Appleton spans three counties — Outagamie (primary/county seat), Calumet, and Winnebago — which affects which Register of Deeds, courts, and sheriff sales apply for specific properties.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$285,000 (+5.6% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$166/sq ft (-7.8% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">45 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">100.6%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">77 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">68 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">$3/$1,000 (0.3%), Outagamie County ROD</td><td className="p-3 text-gray-500">WI DOR / Wis. Stat. §77.22</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat statewide</td><td className="p-3 text-gray-500">WRDA / Outagamie ROD</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Outagamie County Circuit Court (6–18 months)</td><td className="p-3 text-gray-500">WI Law Help / Wis. Stat. Ch. 846</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sheriff sale schedule</td><td className="p-3">Thursdays 9:00 a.m. — Justice Center lobby, 320 S. Walnut St., Appleton</td><td className="p-3 text-gray-500">Outagamie County Sheriff</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Outagamie (primary); also Calumet and Winnebago Counties</td><td className="p-3 text-gray-500">City of Appleton</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Appleton Neighborhoods — Character Notes</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Neighborhood</th><th className="text-left p-3">Character</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Erb Park</td><td className="p-3">Older north/central housing; strong as-is angle for roofs, mechanicals, estate cleanouts. Median $275,000 (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Old Third Ward</td><td className="p-3">Historic/older homes; strong angle for inherited houses, deferred maintenance. Median $260,000 (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Northwood Park</td><td className="p-3">North-side competitive subdivision-style stock; good for move-up/downsize. Median ~$310–367K (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Downtown Appleton</td><td className="p-3">Walkable core near College Ave; older homes, small multifamily, code/repair stories. Median ~$205–220K (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">River Drive</td><td className="p-3">River-adjacent/established stock; estate/flood/maintenance angle. Median ~$281–306K (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Alicia Park</td><td className="p-3">Higher-value central-west neighborhood; cosmetic/light-repair homes. Median $415,000 (Feb 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">City Park / Historic District</td><td className="p-3">142 contributing properties; historic housing stock; repair/preservation considerations</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Note: Neighborhood samples can be small (1–3 sales/month). Use as directional guidance only; verify current values with a licensed real estate professional. Sources: Redfin neighborhood pages, Mar 2026.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Appleton's Market Means for As-Is Sellers</h2>
          <p className="text-gray-700 mb-4">
            With a 100.6% sale-to-list ratio and 77/100 Compete Score, move-in-ready Appleton homes sell quickly at or near asking. But Appleton's older housing stock — bungalows and Craftsman homes in Erb Park and Old Third Ward, historic properties in City Park — often requires $15,000–$40,000+ in updates to compete on the retail market. For sellers dealing with probate timelines, foreclosure pressure, divorce, or properties with deferred maintenance, the conventional listing path is slow and expensive.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin judicial foreclosure runs through Outagamie County Circuit Court (320 S. Walnut St., Appleton WI 54911). Probate is handled by the same Clerk of Courts (phone 920-832-5131). A direct cash sale from USA Home Buyers can close well before a probate or foreclosure timeline forces your hand.
          </p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006</a>
        </section>

        <Link href="/markets/appleton-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Appleton WI Market Page</Link>

        <CashOfferForm variant="footer" headline="Get an Appleton WI Cash Offer" sourcePage="/markets/appleton-wi/market-report" />
      </div>
    </>
  );
}
