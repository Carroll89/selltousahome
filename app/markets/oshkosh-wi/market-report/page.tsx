/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/market-report`;

export const metadata: Metadata = {
  title: 'Oshkosh WI Housing Market Report 2026',
  description:
    'Oshkosh WI housing market data: $211K Redfin median, 61-day DOM, RDC hotness rank #13. Winnebago County WI investor analysis 2026. Cash buyers: 888-440-5250.',
  alternates: { canonical: pageUrl },
};

export default function OshkoshWIMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Oshkosh WI Housing Market Report 2026 — Winnebago County Data', pageUrl, '2026-04-18'),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Oshkosh WI Housing Market Report 2026
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              Oshkosh WI Zillow ZHVI: $250,967 (+5.2% YoY). Redfin median sale: $211,000. Compete score 60/100. Median sold DOM: 61 days. RDC rank #13. WI transfer fee $3.00/$1,000 — no Winnebago County WI or City of Oshkosh add-on (Wis. Stat. § 77.22). WI foreclosure 12-15 months (Ch. 846). Cash offers 70-80% FMV. USA Home Buyers: 888-440-5250.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh WI Key Market Metrics (March 2026)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">YoY Change</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow ZHVI (typical home value)</td><td className="p-3">$250,967</td><td className="p-3 text-green-700">+5.2%</td><td className="p-3 text-gray-500">Zillow (Apr 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price</td><td className="p-3">$211,000</td><td className="p-3 text-red-600">-1.1%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per Square Foot (city)</td><td className="p-3">$137</td><td className="p-3 text-red-600">-2.8%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Price/Sqft Winnebago County WI</td><td className="p-3">$167</td><td className="p-3 text-green-700">+14.4%</td><td className="p-3 text-gray-500">Redfin County (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median DOM (sold homes)</td><td className="p-3">61 days</td><td className="p-3">No change</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hot Homes Pending</td><td className="p-3">~42 days</td><td className="p-3">—</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">RDC Active Listing DOM</td><td className="p-3">36.0 days</td><td className="p-3">—</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">RDC Hotness Score</td><td className="p-3">92.809 — Rank #13 nationally</td><td className="p-3">—</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">60/100 — Somewhat Competitive</td><td className="p-3">—</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-List Ratio</td><td className="p-3">99.5%</td><td className="p-3 text-green-700">+0.2 pt</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Homes Sold (Mar 2026)</td><td className="p-3">53</td><td className="p-3 text-green-700">+1 YoY</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI State Median Home Price</td><td className="p-3">~$307,000</td><td className="p-3">—</td><td className="p-3 text-gray-500">Statewide (2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Oshkosh discount to WI median</td><td className="p-3">~$96K (31% below state median)</td><td className="p-3">—</td><td className="p-3 text-gray-500">Derived</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">Note: According to Zillow (April 2026), the Oshkosh typical home value (ZHVI) is $250,967. Per Redfin (March 2026), the median closed sale price is $211,000. The gap between these figures reflects Zillow's index incorporating the full housing stock including premium Lake Shore Victorians and Sawyer Creek newer builds, while Redfin's transaction figure is skewed toward entry-level and investor-grade sales. For cash buyer offer-range calculations, the $211,000 Redfin figure is more relevant.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Fee — Winnebago County WI & Wisconsin State</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin charges a state-level Real Estate Transfer Fee under Wis. Stat. § 77.22 at $3.00 per $1,000 of sale price — seller pays by custom. Winnebago County WI does NOT add a county surcharge. The City of Oshkosh imposes no municipal real estate transfer tax. This is the simplest transfer tax structure in the markets USA Home Buyers serves.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Sale Price</th>
                  <th className="text-left p-3">WI State Fee ($3/$1,000)</th>
                  <th className="text-left p-3">Winnebago Co. WI</th>
                  <th className="text-left p-3">City of Oshkosh</th>
                  <th className="text-left p-3">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">$148,000 (cash offer floor, median)</td><td className="p-3">$444.00</td><td className="p-3">$0</td><td className="p-3">$0</td><td className="p-3 font-medium">$444.00</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$211,000 (Redfin median)</td><td className="p-3">$633.00</td><td className="p-3">$0</td><td className="p-3">$0</td><td className="p-3 font-medium">$633.00</td></tr>
                <tr className="bg-white"><td className="p-3">$250,967 (Zillow ZHVI)</td><td className="p-3">$752.90</td><td className="p-3">$0</td><td className="p-3">$0</td><td className="p-3 font-medium">$752.90</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">A Wisconsin Real Estate Transfer Return (RETR form) must accompany any deed at recording — including exempt transactions (foreclosure sales, estate transfers). Winnebago County Register of Deeds recording fee: $30 flat per document (Wisconsin Act 314). When you sell to USA Home Buyers, we cover all closing costs including transfer fees and recording fees. Source: Wis. Stat. § 77.22; winnebagocountywi.gov/492/Fee-Schedule.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Foreclosure Data — Winnebago County WI</h2>
          <p className="text-gray-700 mb-4">
            According to Wis. Stat. Ch. 846 (Wisconsin Legislature), Wisconsin is a judicial foreclosure state. All Winnebago County WI foreclosures are filed at Winnebago County Circuit Court, 415 Jackson Street, Oshkosh WI 54901. The redemption period under Wis. Stat. § 846.101 is 6 months from judgment for owner-occupied 1-4 family homes where the lender waives deficiency. Total first-missed-payment-to-sale timeline: 12–15 months.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Phase</th>
                  <th className="text-left p-3">Timeline</th>
                  <th className="text-left p-3">Statute</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Default / missed payments</td><td className="p-3">Months 1-3</td><td className="p-3">Per mortgage contract</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Complaint filed (Winnebago Co. Circuit Court)</td><td className="p-3">Day 0 of lawsuit</td><td className="p-3">Wis. Stat. § 846.03</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Service / answer period</td><td className="p-3">20-45 days</td><td className="p-3">Wis. Stat. § 801.11 / § 802.06</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Judgment of foreclosure</td><td className="p-3">Months 3-6 after filing</td><td className="p-3">Wis. Stat. § 846.10</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redemption period (owner-occ, deficiency waived)</td><td className="p-3">6 months from judgment</td><td className="p-3">Wis. Stat. § 846.101</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sheriff's sale</td><td className="p-3">After redemption expires</td><td className="p-3">Wis. Stat. § 846.16</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Confirmation of sale</td><td className="p-3">15-30 days after sale</td><td className="p-3">Wis. Stat. § 846.17</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Total (first missed payment to sale)</td><td className="p-3 font-medium">12-15 months</td><td className="p-3">Wis. Stat. Ch. 846</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash Offer Range — Oshkosh WI Investor Context</h2>
          <p className="text-gray-700 mb-4">
            Standard cash offers in Oshkosh run 70-80% of FMV for move-in-ready homes. At $211,000 typical Redfin median, that's $148K-$169K for average condition. Distressed properties in Center City, Fox River corridor, and near-campus Merritt areas run 60-70% (~$127K-$148K). Oshkosh's consistent supply of pre-war bungalows and mid-century homes needing renovation provides investor margins above the WI state average. Lake Shore Victorians command top-of-market Oshkosh pricing; off-lakefront stock is where the cash buyer opportunity concentrates.
          </p>
          <p className="text-gray-700 mb-4">
            iBuyer status: Opendoor and Offerpad do NOT appear to serve the Oshkosh-Neenah CBSA (metro population ~170,000 — below iBuyer thresholds; no active Oshkosh landing pages found as of April 2026).
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Probate Data — Winnebago County WI</h2>
          <p className="text-gray-700 mb-4">
            Probate for Oshkosh-area estates is handled by the Winnebago County Circuit Court, Register in Probate, 415 Jackson Street Room 242, Oshkosh WI 54901, (920) 236-4808.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Informal probate (Wis. Stat. Ch. 856):</strong> Uncontested estates with a will or clear intestate heirs. Handled by Register in Probate. Typically 4-8 months.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Formal probate (Wis. Stat. Ch. 857-879):</strong> Contested estates, creditor disputes, or court supervision required. Typically 9-18 months.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Small estate affidavit:</strong> Available for estates under $50,000 with NO real property — real estate always requires the probate process.</div></li>
          </ul>
        </section>

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Oshkosh WI Landing' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/oshkosh-wi/probate', label: 'Probate Sale' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/faq', label: 'Oshkosh WI FAQ' },
              { href: '/sell-house-fast-wisconsin', label: 'WI Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>


      <VideoEmbed
        src="/videos/oshkosh-wi/market-report.mp4"
        title="Oshkosh WI Real Estate Market Report 2026"
        poster="/videos/oshkosh-wi/market-report-poster.jpg"
        subtitle="Fox Valley affordability, Lake Winnebago waterfront, steady appreciation"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          The Oshkosh WI market in 2026 — steady appreciation, Lake Winnebago waterfront appeal, Fox Valley affordability. Strong manufacturing employment base. If you're thinking about selling, USA Home Buyers gives you a cash offer in 24 hours. Call 888-440-5250.
        </div>
      </details>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Oshkosh WI Home?" sourcePage="/markets/oshkosh-wi/market-report" />
      </div>
    </>
  );
}
