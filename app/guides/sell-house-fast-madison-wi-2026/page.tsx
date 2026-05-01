/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { madisonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-madison-wi-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Madison WI (2026 Guide)',
  description: 'Complete guide to selling your Madison WI house fast in 2026. Cash buyers vs. traditional listing, Wisconsin transfer fee, probate, foreclosure, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the fastest way to sell a house in Madison WI?', answer: "A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7–14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006." },
  { question: 'What does it cost to sell a house in Madison WI?', answer: "With a traditional agent: 5–6% commission (~$22,000–$27,000 on $453,500 median) plus Wisconsin's $3/$1,000 transfer fee ($1,360), repair costs, and carrying costs during 41 average days on market. With USA Home Buyers: no commissions, no fees, we cover closing costs including the transfer fee." },
  { question: 'How does Wisconsin\'s real estate transfer fee work?', answer: "According to the Wisconsin Department of Revenue, Wisconsin charges $3.00 per $1,000 (0.3%) of the sale price. Under Wis. Stat. §77.256, no county or municipality can add a local surcharge. On a $453,500 Madison home, the total fee is $1,360 — paid by the seller. USA Home Buyers covers this fee when we purchase." },
  { question: 'Is Madison a good market to sell in 2026?', answer: "According to Redfin (March 2026), Madison's median sale price is $453,500 with a Compete Score of 74 and 100.9% sale-to-list ratio. Hot homes go under contract quickly. However, older character homes in Marquette, Tenney-Lapham, and Vilas that need updates often sit longer — that's exactly where a cash sale makes sense." },
  { question: 'What options do Madison sellers have?', answer: "1. Cash sale (fastest, most certain) — 7–14 days, as-is, no fees. 2. Traditional listing (highest potential price) — 41+ average days, repairs often required, 5–6% commission. 3. FSBO (save commission but less reach, more work). 4. iBuyer/investor (convenience but often lower net than retail listing)." },
];

export default function MadisonGuide2026Page() {
  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, articleSchema('How to Sell a House Fast in Madison WI (2026)', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/madison-wi" className="hover:text-white">Madison WI</Link> › Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell a House Fast in Madison WI — 2026 Guide</h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Madison WI and Dane County for cash, as-is, in any condition. Written offer in 24 hours, close in 7–14 days. According to Redfin (March 2026), Madison's median sale price is $453,500 — one of the strongest markets in Wisconsin. Wisconsin's transfer fee is $3/$1,000 with no local add-on (Wis. Stat. §77.256). Cash sale eliminates agent commissions, repair costs, and the 41-day average time on market. Call 888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Options for Selling a House in Madison WI</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Option</th><th className="text-left p-3">Timeline</th><th className="text-left p-3">Net Proceeds</th><th className="text-left p-3">Repairs Required?</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Cash buyer (USA Home Buyers)</td><td className="p-3">7–14 days</td><td className="p-3">70–80% of FMV</td><td className="p-3">No</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Traditional listing</td><td className="p-3">41+ days average</td><td className="p-3">84–90% after costs</td><td className="p-3">Usually</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FSBO</td><td className="p-3">Variable</td><td className="p-3">80–88% (no agent)</td><td className="p-3">Usually</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">iBuyer / investor</td><td className="p-3">14–30 days</td><td className="p-3">75–85%</td><td className="p-3">No</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Transfer Fee and Closing Costs in Madison</h2>
          <p className="text-gray-700 mb-4">
            According to the <a href="https://revenue.wi.gov/Pages/FAQS/ise-reTransfer.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Department of Revenue</a>, sellers pay $3.00 per $1,000 of sale price in real estate transfer fees. Under <a href="https://docs.legis.wisconsin.gov/statutes/statutes/77/III/256" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Statute §77.256</a>, no county or municipality may add a surcharge — so the total is simply 0.3% statewide with no Madison-specific add-on. The Wisconsin recording fee is a flat $30 under Wis. Stat. §59.43. On a $453,500 Madison home: transfer fee = $1,360, recording fee = $30. USA Home Buyers covers both when we purchase.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Sale Makes More Sense Than Listing</h2>
          <p className="text-gray-700 mb-4">Madison's Compete Score of 74 and 100.9% sale-to-list ratio means move-in-ready homes sell well through traditional channels. But the city's older character housing stock — Craftsman bungalows in Marquette and Tenney-Lapham, American Foursquares in Vilas, older duplexes near campus — often has deferred maintenance that creates a mismatch with retail buyer expectations.</p>
          <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
            <li>Your property needs $20,000–$60,000 in updates to compete on the retail market</li>
            <li>You're managing the sale from out of state as an heir or executor</li>
            <li>Wisconsin judicial foreclosure is running — you need to sell before the court's timeline forces the decision</li>
            <li>A tenant is in place and managing showings is complicated</li>
            <li>Probate is open and you need a buyer who'll wait for Letters Testamentary</li>
          </ul>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling in Madison WI" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Madison WI Resources</h2>
          <div className="grid grid-cols-2 gap-3">
            {[{ href: '/markets/madison-wi', label: 'Madison WI Market Page' }, { href: '/markets/madison-wi/market-report', label: 'Market Report' }, { href: '/markets/madison-wi/foreclosure', label: 'Foreclosure Guide' }, { href: '/markets/madison-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/madison-wi/probate', label: 'Probate Guide' }, { href: '/sell-house-fast-wisconsin', label: 'Wisconsin Seller Guide' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Madison WI Home?" subheadline="Written offer in 24 hours. No fees, no repairs, no obligation." sourcePage="/guides/sell-house-fast-madison-wi-2026" />
      </div>
    </>
  );
}
