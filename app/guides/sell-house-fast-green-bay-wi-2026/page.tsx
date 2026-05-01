/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { greenBayLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-green-bay-wi-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Green Bay WI (2026 Guide)',
  description: 'Complete guide to selling your Green Bay WI house fast in 2026. Cash buyers vs. traditional listing, Wisconsin transfer fee, probate, foreclosure, and Brown County selling essentials.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "What is the fastest way to sell a house in Green Bay WI?", answer: "A cash sale to USA Home Buyers. Written offer in 24 hours, close in 7–14 days. No showings, no repairs, no financing contingencies. Call 888-274-5006." },
  { question: "What does it cost to sell a house in Green Bay WI?", answer: "With a traditional agent: 5–6% commission (~$13,000–$15,600 on $260K), Wisconsin's $3/$1,000 transfer fee ($780), carrying costs during 51 average days on market, and repairs. With USA Home Buyers: no commissions, no fees, we cover all closing costs including the transfer fee." },
  { question: "What is Wisconsin's real estate transfer fee?", answer: "According to the Wisconsin Department of Revenue, Wisconsin charges $3.00 per $1,000 (0.3%) of the sale price. Under Wis. Stat. §77.256, no county or municipality can add a local surcharge. On a $260,000 Green Bay home, the total is $780 — paid by the seller. USA Home Buyers covers this fee when we purchase." },
  { question: "Is Green Bay a good market to sell in 2026?", answer: "According to Redfin (March 2026), Green Bay has a Compete Score of 70 with a $260,000 median sale price — about 42% below the national average. Move-in-ready homes sell competitively at or near list. Properties with condition issues or deferred maintenance benefit from a cash sale — they sit at the longer end of the 51-day average DOM." },
  { question: "What options do Green Bay sellers have?", answer: "1. Cash sale (fastest, most certain) — 7–14 days, as-is, no fees. 2. Traditional listing (highest potential) — 51+ average days, repairs often required, 5–6% commission. 3. FSBO (saves commission, more work). 4. iBuyer (limited coverage in Green Bay market)." },
];

export default function GreenBayGuide2026Page() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('How to Sell a House Fast in Green Bay WI (2026)', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell a House Fast in Green Bay WI — 2026 Guide</h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Green Bay WI and Brown County for cash, as-is, in any condition. Written offer in 24 hours, close in 7–14 days. According to Redfin (March 2026), Green Bay's median sale price is $260,000 — about 42% below the national average. Wisconsin's transfer fee is $3/$1,000 with no local add-on (Wis. Stat. §77.256). Cash sale eliminates agent commissions, repair costs, and the 51-day average DOM. Brown County ROD: 305 E. Walnut St., Room 260, (920) 448-4470. Call 888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Options for Selling a House in Green Bay WI</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Option</th><th className="text-left p-3">Timeline</th><th className="text-left p-3">Net Proceeds</th><th className="text-left p-3">Repairs?</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Cash buyer (USA Home Buyers)</td><td className="p-3">7–14 days</td><td className="p-3">70–80% of FMV</td><td className="p-3">No</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Traditional listing</td><td className="p-3">51 days average</td><td className="p-3">83–90% after costs</td><td className="p-3">Usually</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FSBO</td><td className="p-3">Variable</td><td className="p-3">80–88% (no agent)</td><td className="p-3">Usually</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Transfer Fee and Closing Costs in Green Bay</h2>
          <p className="text-gray-700 mb-4">
            According to the <a href="https://revenue.wi.gov/Pages/FAQS/ise-reTransfer.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Department of Revenue</a>, sellers pay $3.00 per $1,000 in real estate transfer fees. Under <a href="https://docs.legis.wisconsin.gov/statutes/statutes/77/III/256" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Statute §77.256</a>, no county or municipality may add a surcharge — the total is simply 0.3% statewide with no Green Bay or Brown County add-on. The Wisconsin recording fee is a flat $30 under Wis. Stat. §59.43. On a $260,000 Green Bay home: transfer fee = $780, recording fee = $30. USA Home Buyers covers both when we purchase.
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>Brown County Register of Deeds</strong> at 305 E. Walnut Street, Room 260, Green Bay WI, phone (920) 448-4470 (confirmed via browncountywi.gov), handles deed recording.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Sale Makes More Sense Than Listing in Green Bay</h2>
          <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
            <li>Property needs $10,000–$30,000+ in updates to compete on the retail market</li>
            <li>Wisconsin judicial foreclosure is in progress through Brown County Circuit Court</li>
            <li>Estate in Brown County Circuit Court probate and you need a buyer who'll wait for Letters Testamentary</li>
            <li>Tenants in place and managing showings is complicated</li>
            <li>Manufacturing-era Ranch or Cape Cod with deferred maintenance that blocks financing</li>
            <li>Green Bay's 51-day average DOM is too long for your timeline</li>
          </ul>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling in Green Bay WI" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Green Bay WI Resources</h2>
          <div className="grid grid-cols-2 gap-3">
            {[{ href: '/markets/green-bay-wi', label: 'Green Bay WI Market Page' }, { href: '/markets/green-bay-wi/market-report', label: 'Market Report' }, { href: '/markets/green-bay-wi/foreclosure', label: 'Foreclosure Guide' }, { href: '/markets/green-bay-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/green-bay-wi/probate', label: 'Probate Guide' }, { href: '/sell-house-fast-wisconsin', label: 'Wisconsin Seller Guide' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Green Bay WI Home?" subheadline="Written offer in 24 hours. No fees, no repairs, no obligation." sourcePage="/guides/sell-house-fast-green-bay-wi-2026" />
      </div>
    </>
  );
}
