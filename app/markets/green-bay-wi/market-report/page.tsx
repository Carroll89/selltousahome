/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { greenBayLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/market-report`;

export const metadata: Metadata = {
  title: 'Green Bay WI Housing Market Report 2026 — Prices & Trends',
  description: 'Green Bay WI real estate market data for 2026. Median prices, Brown County market trends, neighborhood character, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function GreenBayMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('Green Bay WI Housing Market Report 2026', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Green Bay WI Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">According to Redfin (March 2026), Green Bay's median sale price is $260,000 — up 4.0% year-over-year — about 42% below the national average. USA Home Buyers purchases Green Bay homes for cash in any condition. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Green Bay WI Market Overview</h2>
          <p className="text-gray-700 mb-4">Green Bay is Wisconsin's fourth-largest city and the county seat of Brown County. The city's manufacturing and paper-mill heritage created working-class neighborhoods of Ranch homes, Cape Cods, and split-levels from the 1940s–1970s. These properties — practical, well-located, and often owner-occupied for decades — are the core of the as-is seller market. When longtime owners need to sell quickly due to estate, foreclosure, divorce, or deferred maintenance, they face a retail market that expects move-in-ready condition.</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$260,000 (+4.0% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Price per sq ft</td><td className="p-3">$179 (+7.5% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">51 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">100.3%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">70 / 100 (very competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">~74</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price vs. national avg</td><td className="p-3">~42% below national average</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">$3/$1,000 (0.3%), no local add-on</td><td className="p-3 text-gray-500">WI DOR / Wis. Stat. §77.256</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat (Wis. Stat. §59.43)</td><td className="p-3 text-gray-500">Wisconsin Statutes</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (~12 months, Brown County Circuit Court)</td><td className="p-3 text-gray-500">WI Statutes Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Brown County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Green Bay Neighborhood Character</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Area</th><th className="text-left p-3">Character</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Astor Park</td><td className="p-3">Near-downtown older stock: Craftsman bungalows and early-20th-century frames. Tree-lined, established.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Fort Howard</td><td className="p-3">Historic manufacturing district. Older frame homes, estate situations common.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Downtown Green Bay</td><td className="p-3">Mixed residential and commercial. Older rental stock, working-class character.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Outer neighborhoods (Howard, Bellevue)</td><td className="p-3">Post-WWII Ranch and Cape Cod on moderate lots. Suburban character, good owner-occupied inventory.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Note: De Pere, Allouez, Ashwaubenon are separate municipalities. Verify municipality before applying city-specific legal content.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Brown County Closing Essentials</h2>
          <p className="text-gray-700 mb-4">The <strong>Brown County Register of Deeds</strong> is at 305 E. Walnut Street, Room 260, Green Bay WI 54301, phone (920) 448-4470 — confirmed via browncountywi.gov. Deeds and mortgages are recorded here. The <strong>Brown County Circuit Court Probate Division</strong> is at 100 S. Jefferson Street, Green Bay WI 54301, phone (920) 448-4275 — confirmed via browncountywi.gov. Verify current contact information before relying on any specific number.</p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006</a>
        </section>

        <Link href="/markets/green-bay-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Green Bay WI Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Green Bay WI Cash Offer" sourcePage="/markets/green-bay-wi/market-report" />
      </div>
    </>
  );
}
