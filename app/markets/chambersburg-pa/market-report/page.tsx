/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { chambersburgLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/chambersburg-pa/market-report`;

export const metadata: Metadata = {
  title: 'Chambersburg PA Housing Market Report 2026 — Prices & Trends',
  description: 'Chambersburg PA real estate market data for 2026. Median prices, Franklin County market trends, and what it means for sellers in the Cumberland Valley.',
  alternates: { canonical: pageUrl },
};

export default function ChambersburgMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, articleSchema('Chambersburg PA Housing Market Report 2026', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › Market Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Chambersburg PA Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">According to Redfin (March 2026), Chambersburg has a Compete Score of 79 with hot homes going under contract in 5 days — one of the most competitive markets in our Pennsylvania coverage area. USA Home Buyers purchases Chambersburg homes for cash in any condition. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Chambersburg PA Market Overview</h2>
          <p className="text-gray-700 mb-4">Chambersburg is the county seat of Franklin County, Pennsylvania — the commercial center of the Cumberland Valley at the crossroads of I-81 and US-30. The market's strong Compete Score of 79 reflects real demand: proximity to the Maryland border drives migration, Hartford CT is the #1 inbound migration source per Redfin (Oct–Dec 2025), and volume nearly doubled year-over-year (13 to 24 homes/month in March 2026). For move-in-ready homes, this market moves fast. For older stock or properties with condition issues, a cash offer resolves the equation.</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Value</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$228,975</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Days to pending (hot homes)</td><td className="p-3">5 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">79 / 100 (very competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">99.1%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">~24 homes (nearly doubled YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">PA transfer tax</td><td className="p-3">2% total (1% state + 1% Borough)</td><td className="p-3 text-gray-500">PA Revenue / Borough confirmed</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Franklin County recording fee</td><td className="p-3">$92.75</td><td className="p-3 text-gray-500">franklincountypa.gov</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Common Level Ratio</td><td className="p-3">13.02 (valid 7/1/2025–6/30/2026)</td><td className="p-3 text-gray-500">Franklin County Assessment</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (Franklin County Court of Common Pleas)</td><td className="p-3 text-gray-500">Pennsylvania law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Franklin County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Franklin County Closing Essentials</h2>
          <p className="text-gray-700 mb-4">The <strong>Franklin County Register & Recorder</strong> is at 157 Lincoln Way East, Chambersburg PA 17201, phone (717) 261-3872. Deeds, mortgages, and other recorded instruments go through this office. Note: the Prothonotary (civil court filings) is a separate office at (717) 261-3861 — do not confuse these two offices.</p>
          <p className="text-gray-700 mb-4"><strong>Orphans' Court</strong> (probate) for Franklin County is through the Court of Common Pleas. Contact the Franklin County courthouse at (717) 261-3805 — verify current contact information at franklincountypa.gov before relying on any specific number. Pennsylvania Orphans' Court handles estate administration, and the personal representative receives Letters Testamentary before conveying real property.</p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006</a>
        </section>

        <Link href="/markets/chambersburg-pa" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Chambersburg PA Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Chambersburg PA Cash Offer" sourcePage="/markets/chambersburg-pa/market-report" />
      </div>
    </>
  );
}
