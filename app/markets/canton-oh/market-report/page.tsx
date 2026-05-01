/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { cantonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/canton-oh/market-report`;

export const metadata: Metadata = {
  title: 'Canton OH Housing Market Report 2026 — Prices & Trends',
  description: 'Canton OH real estate market data for 2026. Median prices, Stark County trends, neighborhood character, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function CantonMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[cantonLocalBusinessSchema, articleSchema('Canton OH Housing Market Report 2026', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/canton-oh" className="hover:text-white">Canton OH</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Canton OH Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">According to Redfin (March 2026), Canton's median sale price is $127,000 — up 5.8% year-over-year — with 45 days on market and a Compete Score of 75/100. USA Home Buyers purchases Canton homes for cash in any condition, any situation. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Canton OH Market Overview</h2>
          <p className="text-gray-700 mb-4">
            Canton is the county seat of Stark County, Ohio, and one of the most affordable housing markets in Northeast Ohio. The Pro Football Hall of Fame, Timken Steel, and a mix of healthcare and manufacturing employers anchor the local economy. Canton's housing stock is dominated by older construction — 41.5% built in 1939 or earlier per 2024 ACS — including brick colonials, craftsman bungalows, and early-20th-century two-stories. With a 51.3% renter-occupied housing share, Canton has a large investor-owned market.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$127,000 (+5.8% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$100/sq ft</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">45 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">98.6%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">75 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">53 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">OH conveyance fee</td><td className="p-3">$4.00/$1,000 + $0.50/parcel (Stark County Auditor)</td><td className="p-3 text-gray-500">Stark County Auditor</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Stark County recording fee</td><td className="p-3">$34 first 2 pages + $8/additional page (Stark County Recorder)</td><td className="p-3 text-gray-500">Stark County Recorder fee schedule</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Stark County Common Pleas; online Realauction sheriff sales, Mondays 10:00 a.m. ET</td><td className="p-3 text-gray-500">Stark County Sheriff</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Stark County Probate Court, 110 Central Plaza South, Suite 501, Canton OH 44702, phone 330-451-7755</td><td className="p-3 text-gray-500">Stark County Probate Court</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Stark County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Canton Neighborhoods — Character Notes</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Neighborhood</th><th className="text-left p-3">Character</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Central Canton</td><td className="p-3">Older central-city housing. Median ~$85,000 (Mar 2026). High for as-is, probate, vacant, and rehab. Compete Score 47.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Southwest Canton</td><td className="p-3">Working-class southwest. Median ~$111,000 (Mar 2026). Fast DOM (25 days). Strong resale/rental demand. Compete Score 79.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">North Central Canton</td><td className="p-3">Stronger owner-occupant demand. Median ~$162,000 (Mar 2026). Stable north-side stock. Compete Score 69.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Colonial Heights</td><td className="p-3">Older north/east-side residential. 12-month median ~$156,000. Retail-resale potential. Moderate investor interest.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Historic Ridgewood</td><td className="p-3">Historic district with Tudor/Colonial Revival brick streets. Character-only angle; strong for as-is historic homes with expensive repairs.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Northeast Canton</td><td className="p-3">Broader northeast area; mixed older residential and retail corridors. Median ~$128,250 (Feb 2026). Inherited/rental fit.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Note: Neighborhood samples can be small. Use as directional guidance; verify with current MLS comps. Sources: Redfin neighborhood pages, Homes.com, Mar 2026.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Canton's Market Means for As-Is Sellers</h2>
          <p className="text-gray-700 mb-4">
            With 75/100 Compete Score, Canton's move-in-ready homes attract buyer competition. But the city's 41.5% pre-1940 housing stock means inherited, distressed, or deferred-maintenance properties often can't compete on the retail market without $20,000–$50,000+ in updates. Average Canton homes sell for about 3% below list price and go pending in around 40 days; financing requirements for FHA and conventional loans exclude many older properties with functional issues.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio judicial foreclosure runs through Stark County Common Pleas Court, with online sheriff sales through Realauction every Monday. Stark County Probate Court (Suite 501, 110 Central Plaza South) handles estate authorizations. A direct cash sale from USA Home Buyers can close well before a probate or foreclosure timeline forces your hand.
          </p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006</a>
        </section>

        <Link href="/markets/canton-oh" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Canton OH Market Page</Link>

        <CashOfferForm variant="footer" headline="Get a Canton OH Cash Offer" sourcePage="/markets/canton-oh/market-report" />
      </div>
    </>
  );
}
