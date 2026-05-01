/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { concordLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/market-report`;

export const metadata: Metadata = {
  title: 'Concord NH Housing Market Report 2026 — Prices & Trends',
  description: 'Concord NH real estate market data for 2026. Median prices, Merrimack County trends, neighborhood character, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function ConcordMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[concordLocalBusinessSchema, articleSchema('Concord NH Housing Market Report 2026', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Concord NH Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">According to Redfin (March 2026), Concord's median sale price is $419,500 — up 1.1% year-over-year — with 34 days on market and a Compete Score of 86/100. USA Home Buyers purchases Concord homes for cash in any condition, any situation. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Concord NH Market Overview</h2>
          <p className="text-gray-700 mb-4">
            Concord is New Hampshire's state capital and the county seat of Merrimack County. Major employers include state government, Concord Hospital, and educational institutions. Concord's housing stock reflects its role as a New England capital city — 33% of housing units were built in 1939 or earlier, and 66% before 1980 (2024 ACS Census data). New England Colonial and Federal-style homes, late-19th-century two-stories, Cape Cods, ranches, and older multifamily properties throughout Abbott-Downing, South End, Penacook, and the North and West End form the character of the market.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$419,500 (+1.1% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$245/sq ft (-2.4% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">34 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">99.0%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">86 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">26 homes (down from 33 prior year)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">NH RETT</td><td className="p-3">$0.75/$100 from seller + $0.75/$100 from buyer (1.5% total), Merrimack County Registry</td><td className="p-3 text-gray-500">NH DRA RETT FAQ; Merrimack County Registry</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial / power-of-sale; 45-day advance notice; 3-week newspaper publication; 60 days to record deed post-sale</td><td className="p-3 text-gray-500">603 Legal Aid; NH RSA 479:25</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Probate court</td><td className="p-3">NH Circuit Court 6th Circuit – Probate Division – Concord, 2 Charles Doe Drive, Suite 1, Concord NH 03301, phone 1-855-212-1234</td><td className="p-3 text-gray-500">courts.nh.gov</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Registry of Deeds</td><td className="p-3">Merrimack County Registry of Deeds, 163 North Main St., Suite 103, Concord NH 03301, phone 603-228-0101, Mon–Fri 8:30–3:30</td><td className="p-3 text-gray-500">Merrimack County Registry</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Merrimack County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Concord Neighborhoods — Character Notes</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Neighborhood</th><th className="text-left p-3">Character</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Concord Heights</td><td className="p-3">East-side commercial/residential. More attainable entry price. Median ~$352,000 (Mar 2026). Strong investor interest.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">West Concord</td><td className="p-3">Older village/residential. Attainable price, as-is rehab potential. Median ~$363,500 (+44.0% YoY, Mar 2026).</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Penacook</td><td className="p-3">Northern village, former mill area. Multifamily, tenant-occupied, older stock opportunities. Median ~$397,500 (Mar 2026).</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Abbott-Downing</td><td className="p-3">Central/south-central residential. Older homes, fast DOM (25 days). Median ~$395,000 (Mar 2026).</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Downtown Concord</td><td className="p-3">Walkable Main Street/state-government core. Thin inventory; 1 home sold (Mar 2026). Median ~$465,000.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">South End</td><td className="p-3">Established neighborhood near schools/parks. Many older single-family and multifamily. Median ~$494,000 (Mar 2026).</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">East Concord</td><td className="p-3">More suburban/rural-residential edge. Larger lots, higher-ticket homes. Median ~$560,000 (Mar 2026). Selectively attractive for estate/large-lot situations.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Note: Neighborhood samples can be thin (1–5 sales/month). Use as directional guidance; verify with current Redfin/MLS data. Sources: Redfin neighborhood pages, Mar 2026.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Concord's Market Means for As-Is Sellers</h2>
          <p className="text-gray-700 mb-4">
            With a 86/100 Compete Score and 99.0% sale-to-list ratio, Concord's move-in-ready homes sell well. But the city's 66% pre-1980 housing share means inherited, distressed, or deferred-maintenance properties — especially the older Colonial and Federal-style homes and Penacook multifamily stock — often can't compete on the retail market without $20,000–$50,000+ in updates. New Hampshire's fast non-judicial foreclosure timeline adds urgency for sellers behind on payments.
          </p>
          <p className="text-gray-700 mb-4">
            NH probate is handled by the NH Circuit Court 6th Circuit Probate Division (2 Charles Doe Drive, Concord). Recording routes through the Merrimack County Registry of Deeds (163 North Main St., Suite 103). A direct cash sale from USA Home Buyers can close well before a probate or foreclosure timeline forces your hand.
          </p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006</a>
        </section>

        <Link href="/markets/concord-nh" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Concord NH Market Page</Link>

        <CashOfferForm variant="footer" headline="Get a Concord NH Cash Offer" sourcePage="/markets/concord-nh/market-report" />
      </div>
    </>
  );
}
