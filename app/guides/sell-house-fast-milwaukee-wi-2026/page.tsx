/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { milwaukeeLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-milwaukee-wi-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Milwaukee WI (2026 Guide)',
  description: 'Complete guide to selling your Milwaukee WI house fast in 2026. Cash buyers vs. traditional listing, Wisconsin transfer fee, probate, foreclosure, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the fastest way to sell a house in Milwaukee WI?', answer: "A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7–14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006." },
  { question: 'What does it cost to sell a house in Milwaukee WI?', answer: "With a traditional agent: 5–6% commission (~$11,750–$14,100 on $235,000 median) plus Wisconsin's $3/$1,000 transfer fee ($705), repair costs, and carrying costs during 44 average days on market. With USA Home Buyers: no commissions, no fees, we cover all closing costs." },
  { question: 'How does Wisconsin\'s real estate transfer fee work in Milwaukee?', answer: "Wisconsin charges $3.00 per $1,000 (0.3%) of sale price. The fee is collected by the Milwaukee County Register of Deeds (901 N. 9th Street, Room 103, Milwaukee WI 53233) when the deed is recorded. The recording fee is $30 flat (statewide WRDA rate). On a $235,000 Milwaukee home, transfer fee = $705. USA Home Buyers covers both when we purchase. Source: WI Stat. §77.22." },
  { question: 'Is Milwaukee a good market to sell in 2026?', answer: "According to Redfin (March 2026), Milwaukee's median sale price is $235,000 — up 14.6% year-over-year — with a Compete Score of 72/100. Milwaukee County median is $280,000 (+12.0% YoY). Move-in-ready homes sell well at 99.7% sale-to-list. However, the city's 44.8% pre-1950 housing stock often needs $25,000–$60,000+ in updates — that's where a cash sale makes sense." },
  { question: 'What options do Milwaukee sellers have?', answer: "1. Cash sale (fastest, most certain) — 7–14 days, as-is, no fees. 2. Traditional listing (highest potential price) — 44+ average days, repairs often required, 5–6% commission. 3. FSBO (save commission but less reach, more work). 4. iBuyer/investor (convenience but often lower net than retail listing)." },
];

export default function MilwaukeeGuide2026Page() {
  return (
    <>
      <SchemaMarkup schema={[milwaukeeLocalBusinessSchema, articleSchema('How to Sell a House Fast in Milwaukee WI (2026)', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/milwaukee-wi" className="hover:text-white">Milwaukee WI</Link> › Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell a House Fast in Milwaukee WI — 2026 Guide</h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Milwaukee WI and Milwaukee County for cash, as-is, in any condition. Written offer in 24 hours, close in 7–14 days. According to Redfin (March 2026), Milwaukee's median sale price is $235,000 (+14.6% YoY). Wisconsin's transfer fee is $3/$1,000 collected by Milwaukee County Register of Deeds. Cash sale eliminates agent commissions, repair costs, and the 44-day average time on market. Call 888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Options for Selling a House in Milwaukee WI</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Option</th><th className="text-left p-3">Timeline</th><th className="text-left p-3">Net Proceeds</th><th className="text-left p-3">Repairs Required?</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Cash buyer (USA Home Buyers)</td><td className="p-3">7–14 days</td><td className="p-3">70–80% of FMV</td><td className="p-3">No</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Traditional listing</td><td className="p-3">44+ days average</td><td className="p-3">84–90% after costs</td><td className="p-3">Usually</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FSBO</td><td className="p-3">Variable</td><td className="p-3">80–88% (no agent)</td><td className="p-3">Usually</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">iBuyer / investor</td><td className="p-3">14–30 days</td><td className="p-3">75–85%</td><td className="p-3">No</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Transfer Fee and Closing Costs in Milwaukee</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin charges sellers $3.00 per $1,000 of sale price in real estate transfer fees. The fee is collected by the Milwaukee County Register of Deeds (901 N. 9th Street, Room 103, Milwaukee WI 53233, Register Israel Ramón) when the deed is recorded. Wisconsin recording fee is $30 flat (statewide WRDA rate). On a $235,000 Milwaukee home: transfer fee = $705, recording fee = $30. USA Home Buyers covers both when we purchase. Source: Wisconsin Stat. §77.22; WRDA.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin is a non-attorney state for residential closings — title companies handle the process. The customary split under Fidelity National Title's Wisconsin laws and customs reference shows owner's policy premium paid by seller, loan policy by buyer, and transfer fee by seller. Cash buyers may negotiate to cover closing costs — we cover all closing costs in our transactions.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Sale Makes More Sense Than Listing</h2>
          <p className="text-gray-700 mb-4">Milwaukee's 72/100 Compete Score means move-in-ready homes attract buyers. But the city's 44.8% pre-1950 housing stock — German duplexes, Cream City brick buildings, Polish flats, Queen Anne homes — often needs $25,000–$60,000+ in updates to satisfy conventional financing and retail buyer expectations.</p>
          <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
            <li>Your property needs significant updates to compete on the retail market</li>
            <li>You're managing the sale from out of state as an heir or executor</li>
            <li>Wisconsin judicial foreclosure is running — you need to sell before the Milwaukee County Monday sheriff auction</li>
            <li>Tenants are in place in a duplex or multifamily (58.2% renter-occupied city market)</li>
            <li>Probate is open and you need a buyer who'll wait for Letters Testamentary</li>
          </ul>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling in Milwaukee WI" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Milwaukee WI Resources</h2>
          <div className="grid grid-cols-2 gap-3">
            {[{ href: '/markets/milwaukee-wi', label: 'Milwaukee WI Market Page' }, { href: '/markets/milwaukee-wi/market-report', label: 'Market Report' }, { href: '/markets/milwaukee-wi/foreclosure', label: 'Foreclosure Guide' }, { href: '/markets/milwaukee-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/milwaukee-wi/probate', label: 'Probate Guide' }, { href: '/sell-house-fast-wisconsin', label: 'Wisconsin Seller Guide' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Milwaukee WI Home?" subheadline="Written offer in 24 hours. No fees, no repairs, no obligation." sourcePage="/guides/sell-house-fast-milwaukee-wi-2026" />
      </div>
    </>
  );
}
