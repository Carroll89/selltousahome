/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { madisonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/madison-wi/market-report`;

export const metadata: Metadata = {
  title: 'Madison WI Housing Market Report 2026 — Prices & Trends',
  description: 'Madison WI real estate market data for 2026. Median prices, Dane County market trends, neighborhood character, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function MadisonMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, articleSchema('Madison WI Housing Market Report 2026', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/madison-wi" className="hover:text-white">Madison WI</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Madison WI Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">According to Redfin (March 2026), Madison's median sale price is $453,500 — up 5.8% year-over-year — with 41 days on market. USA Home Buyers purchases Madison homes for cash in any condition, any situation. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Madison WI Market Overview</h2>
          <p className="text-gray-700 mb-4">
            Madison is Wisconsin's state capital and home to the University of Wisconsin. The combination of stable state government employment, a major research university, and a growing technology sector creates a housing market that has consistently appreciated through economic cycles. The near-east and near-west neighborhoods feature large inventories of Craftsman bungalows and American Foursquares — well-located, often well-maintained, but frequently in need of updates after decades of single-family ownership.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$453,500 (+5.8% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">41 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">100.9%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">74 / 100</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">~216</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">$3/$1,000 (0.3%), no local add-on</td><td className="p-3 text-gray-500">WI DOR / Wis. Stat. §77.256</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat (Wis. Stat. §59.43)</td><td className="p-3 text-gray-500">Wisconsin Statutes</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Dane County Circuit Court (~12 months)</td><td className="p-3 text-gray-500">WI Statutes Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Dane County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Madison Neighborhoods — Character Notes</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Neighborhood</th><th className="text-left p-3">Character</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Capitol / Isthmus</td><td className="p-3">Dense urban, condos and older frame homes, highest walkability</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Marquette</td><td className="p-3">Near-east Craftsman bungalows, arts community, established character</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Tenney-Lapham</td><td className="p-3">Victorian-era and early 20th century stock, near Capitol, high demand</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Vilas</td><td className="p-3">Near-west, Foursquares and bungalows, Vilas Park proximity</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Nakoma</td><td className="p-3">Established west-side, 1930s–1950s period revival homes, higher price tier</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Dudgeon-Monroe</td><td className="p-3">Monroe Street corridor, Tudor Revival and Colonial forms, highest price tier</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">South Madison</td><td className="p-3">More affordable, mid-century ranch and Cape Cod, working-class character</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Note: Neighborhood price ranges fluctuate. Verify current values with a licensed real estate professional.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Madison's Market Means for As-Is Sellers</h2>
          <p className="text-gray-700 mb-4">
            In a competitive market with a 100.9% sale-to-list ratio, move-in-ready homes sell quickly at or above asking. But the older character housing stock — Craftsman bungalows, Foursquares, and pre-war duplexes — often requires $20,000–$60,000+ in updates to compete on the retail market. For sellers dealing with probate timelines, foreclosure pressure, divorce, or properties with deferred maintenance, the conventional listing path is slow and expensive.
          </p>
          <p className="text-gray-700 mb-4">
            According to the <a href="https://courts.danecounty.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Dane County Circuit Court</a>, probate is handled through the Probate Division at 215 S. Hamilton Street, Room 1005, Madison WI 53703. Wisconsin judicial foreclosure runs through the same court system (Ch. 846). A direct cash sale from USA Home Buyers can close well before a probate or foreclosure timeline forces your hand.
          </p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006</a>
        </section>

        <Link href="/markets/madison-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Madison WI Market Page</Link>

        <CashOfferForm variant="footer" headline="Get a Madison WI Cash Offer" sourcePage="/markets/madison-wi/market-report" />
      </div>
    </>
  );
}
