/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { janesvilleLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-janesville-wi-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Janesville WI (2026 Guide)',
  description: 'Complete guide to selling your Janesville WI house fast in 2026. Cash buyers vs. traditional listing, Wisconsin transfer fee, probate, foreclosure, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the fastest way to sell a house in Janesville WI?', answer: "A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7–14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006." },
  { question: 'What does it cost to sell a house in Janesville WI?', answer: "With a traditional agent: 5–6% commission (~$14,250–$17,100 on a $275,000 median) plus Wisconsin's $3/$1,000 transfer fee ($855), repair costs, and carrying costs during 45 average days on market. With USA Home Buyers: no commissions, no fees, we cover closing costs including the transfer fee." },
  { question: 'How does Wisconsin\'s real estate transfer fee work in Janesville?', answer: "Wisconsin charges $3.00 per $1,000 (0.3%) of the sale price. The fee is collected by the Rock County Register of Deeds  when the deed is recorded. On a $275,000 Janesville home, the total fee is $855. USA Home Buyers covers this fee when we purchase. Source: WI DOR / Wis. Stat. §77.22." },
  { question: 'Is Janesville a good market to sell in 2026?', answer: "According to Redfin (March 2026), Janesville's median sale price is $275,000 with a Compete Score of 72/100 and 101.2% sale-to-list ratio. Average homes sell for about 1% above list and go pending in about 47 days. Hot homes sell for about 4% above list and go pending in about 36 days. However, older bungalows and historic-district homes that need updates often sit longer — that's exactly where a cash sale makes sense." },
  { question: 'What options do Janesville sellers have?', answer: "1. Cash sale (fastest, most certain) — 7–14 days, as-is, no fees. 2. Traditional listing (highest potential price) — 45+ average days, repairs often required, 5–6% commission. 3. FSBO (save commission but less reach, more work). 4. iBuyer/investor (convenience but often lower net than retail listing)." },
];

export default function JanesvilleGuide2026Page() {
  return (
    <>
      <SchemaMarkup schema={[janesvilleLocalBusinessSchema, articleSchema('How to Sell a House Fast in Janesville WI (2026)', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/janesville-wi" className="hover:text-white">Janesville WI</Link> › Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell a House Fast in Janesville WI — 2026 Guide</h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Janesville WI and Rock County for cash, as-is, in any condition. Written offer in 24 hours, close in 7–14 days. According to Redfin (March 2026), Janesville's median sale price is $275,000 — Very Competitive at 72/100. Wisconsin's transfer fee is $3/$1,000 collected by Rock County Register of Deeds. Cash sale eliminates agent commissions, repair costs, and the 45-day average time on market. Call 888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Options for Selling a House in Janesville WI</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Option</th><th className="text-left p-3">Timeline</th><th className="text-left p-3">Net Proceeds</th><th className="text-left p-3">Repairs Required?</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Cash buyer (USA Home Buyers)</td><td className="p-3">7–14 days</td><td className="p-3">65–81% of FMV</td><td className="p-3">No</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Traditional listing</td><td className="p-3">45+ days average</td><td className="p-3">84–90% after costs</td><td className="p-3">Usually</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FSBO</td><td className="p-3">Variable</td><td className="p-3">80–88% (no agent)</td><td className="p-3">Usually</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">iBuyer / investor</td><td className="p-3">14–30 days</td><td className="p-3">75–85%</td><td className="p-3">No</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Transfer Fee and Closing Costs in Janesville</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin charges sellers $3.00 per $1,000 of sale price in real estate transfer fees. The fee is collected by the Rock County Register of Deeds (verify current county office location before relying on it) when the deed is recorded. The Wisconsin recording fee is a flat $30 per the WRDA statewide schedule. On a $275,000 Janesville home: transfer fee = $855, recording fee = $30. USA Home Buyers covers both when we purchase. Source: Wisconsin DOR / Wis. Stat. §77.22; WRDA recording fee schedule. Verify local office details before relying on them.
          </p>
          <p className="text-gray-700 mb-4">
            Note: Janesville is the county seat of Rock County. Recording routes through the Rock County Register of Deeds for Janesville parcels; verify parcel jurisdiction before closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Sale Makes More Sense Than Listing</h2>
          <p className="text-gray-700 mb-4">Janesville's 72/100 Compete Score and 101.2% sale-to-list ratio means move-in-ready homes sell well through traditional channels. But the city's older character housing stock — bungalows and Craftsman homes in Courthouse Hill and Old Fourth Ward, older homes near Courthouse Hill and Old Fourth Ward — often has deferred maintenance that creates a mismatch with retail buyer expectations.</p>
          <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
            <li>Your property needs $15,000–$40,000 in updates to compete on the retail market</li>
            <li>You're managing the sale from out of state as an heir or executor</li>
            <li>Wisconsin judicial foreclosure is running — you need to sell before the Rock County Circuit Court's timeline forces the decision</li>
            <li>A tenant is in place and managing showings is complicated</li>
            <li>Probate is open and you need a buyer who'll wait for Letters Testamentary</li>
          </ul>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling in Janesville WI" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Janesville WI Resources</h2>
          <div className="grid grid-cols-2 gap-3">
            {[{ href: '/markets/janesville-wi', label: 'Janesville WI Market Page' }, { href: '/markets/janesville-wi/market-report', label: 'Market Report' }, { href: '/markets/janesville-wi/foreclosure', label: 'Foreclosure Guide' }, { href: '/markets/janesville-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/janesville-wi/probate', label: 'Probate Guide' }, { href: '/sell-house-fast-wisconsin', label: 'Wisconsin Seller Guide' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Janesville WI Home?" subheadline="Written offer in 24 hours. No fees, no repairs, no obligation." sourcePage="/guides/sell-house-fast-janesville-wi-2026" />
      </div>
    </>
  );
}
