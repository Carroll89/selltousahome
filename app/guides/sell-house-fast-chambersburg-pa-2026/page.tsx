/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { chambersburgLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-chambersburg-pa-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Chambersburg PA (2026 Guide)',
  description: 'Complete guide to selling your Chambersburg PA house fast in 2026. Cash buyers vs. traditional listing, PA transfer tax, probate, foreclosure, and Franklin County selling essentials.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the fastest way to sell a house in Chambersburg PA?', answer: "A cash sale to USA Home Buyers. Written offer in 24 hours, close in 7–14 days. No showings, no repairs, no financing contingencies. Call 888-274-5006." },
  { question: 'What does it cost to sell a house in Chambersburg PA?', answer: "With a traditional agent: 5–6% commission (~$11,449–$13,738 on the $228,975 median), plus PA transfer tax (seller typically pays 1% = $2,290), Franklin County recording fee ($92.75), repair costs, and carrying costs. With USA Home Buyers: no commissions, no fees, we cover all closing costs." },
  { question: 'What is Pennsylvania\'s real estate transfer tax?', answer: "Pennsylvania charges 1% state + 1% local (Borough of Chambersburg) = 2% total. Traditionally split evenly: seller pays 1%, buyer pays 1%. On a $228,975 home, seller's typical share is $2,290. Source: Pennsylvania Revenue (revenue.pa.gov); Borough of Chambersburg confirmed 1% local rate." },
  { question: 'Is Chambersburg a good market to sell in 2026?', answer: "According to Redfin (March 2026), Chambersburg has a Compete Score of 79 — very competitive — with hot homes going under contract in 5 days. Volume nearly doubled YoY. Move-in-ready homes sell quickly. Properties with condition issues or complex situations benefit from a cash sale." },
  { question: 'What options do Chambersburg sellers have?', answer: "1. Cash sale (fastest, most certain) — 7–14 days, as-is, no fees. 2. Traditional listing (highest potential) — 24+ average days, repairs often required, 5–6% commission. 3. FSBO (saves commission, more work). 4. iBuyer (convenience but lower net than retail for move-in-ready homes)." },
];

export default function ChambersburgGuide2026Page() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, articleSchema('How to Sell a House Fast in Chambersburg PA (2026)', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell a House Fast in Chambersburg PA — 2026 Guide</h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Chambersburg PA and Franklin County for cash, as-is, in any condition. Written offer in 24 hours, close in 7–14 days. According to Redfin (March 2026), Chambersburg has a Compete Score of 79 with hot homes going under contract in 5 days. Pennsylvania's transfer tax is 2% total (1% state + 1% Borough of Chambersburg). Cash sale eliminates agent commissions, repair costs, and carrying time. Call 888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Options for Selling a House in Chambersburg PA</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Option</th><th className="text-left p-3">Timeline</th><th className="text-left p-3">Net Proceeds</th><th className="text-left p-3">Repairs Required?</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Cash buyer (USA Home Buyers)</td><td className="p-3">7–14 days</td><td className="p-3">70–80% of FMV</td><td className="p-3">No</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Traditional listing</td><td className="p-3">24+ days (hot homes: 5 days)</td><td className="p-3">83–90% after costs</td><td className="p-3">Usually</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FSBO</td><td className="p-3">Variable</td><td className="p-3">80–88% (no agent)</td><td className="p-3">Usually</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Pennsylvania Transfer Tax and Closing Costs in Chambersburg</h2>
          <p className="text-gray-700 mb-4">
            According to <a href="https://www.revenue.pa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Revenue</a>, sellers pay 1% state real estate transfer tax. The Borough of Chambersburg adds 1% local transfer tax, confirmed via the Franklin County Assessment Office. Total: 2% — typically split 1%/1% between buyer and seller. The <a href="https://www.franklincountypa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Franklin County Register & Recorder</a> at 157 Lincoln Way East charges $92.75 for standard deed recording. USA Home Buyers covers all closing costs when we purchase.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Sale Makes More Sense Than Listing</h2>
          <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
            <li>Property needs significant updates to compete on the retail market</li>
            <li>Pennsylvania judicial foreclosure is proceeding through Franklin County Court of Common Pleas</li>
            <li>Estate is in Orphans' Court and you need a buyer who'll wait for Letters Testamentary</li>
            <li>Tenants are in place and managing showings is complicated</li>
            <li>You're handling the sale from Maryland or out-of-state as an heir</li>
            <li>Historic district designation creates repair complexity for retail buyers</li>
          </ul>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling in Chambersburg PA" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Chambersburg PA Resources</h2>
          <div className="grid grid-cols-2 gap-3">
            {[{ href: '/markets/chambersburg-pa', label: 'Chambersburg PA Market Page' }, { href: '/markets/chambersburg-pa/market-report', label: 'Market Report' }, { href: '/markets/chambersburg-pa/foreclosure', label: 'Foreclosure Guide' }, { href: '/markets/chambersburg-pa/inherited-property', label: 'Inherited Property' }, { href: '/markets/chambersburg-pa/probate', label: 'Probate Guide' }, { href: '/sell-house-fast-pennsylvania', label: 'Pennsylvania Seller Guide' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Chambersburg PA Home?" subheadline="Written offer in 24 hours. No fees, no repairs, no obligation." sourcePage="/guides/sell-house-fast-chambersburg-pa-2026" />
      </div>
    </>
  );
}
