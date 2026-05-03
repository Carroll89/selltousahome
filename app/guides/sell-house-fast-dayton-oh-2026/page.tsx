/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { daytonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-dayton-oh-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Dayton OH (2026 Guide)',
  description:
    'Complete guide to selling your Dayton OH house fast in 2026. Cash buyers vs. traditional listing, Montgomery County conveyance fee, probate, foreclosure, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Dayton OH?',
    answer: 'A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7-14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006.',
  },
  {
    question: 'What does it cost to sell a house in Dayton OH?',
    answer: "With a traditional agent: 5-6% commission plus Montgomery County's $4.00/$1,000 conveyance fee, repair costs, and carrying costs during 63 average days on market. With USA Home Buyers: no commissions, no fees, we cover all closing costs.",
  },
  {
    question: "How does Ohio's conveyance fee work in Montgomery County?",
    answer: "Montgomery County charges $4.00 per $1,000 of sale price plus $0.50 per parcel, paid to the Montgomery County Auditor. DTE Form 100 is required before deed recording. On a $130,000 Dayton home, that's approximately $520. USA Home Buyers covers this when we purchase.",
  },
  {
    question: 'Is Dayton a good market to sell in 2026?',
    answer: "According to Redfin (March 2026), Dayton's median sale price is $130,000 with 63 days on market and a Compete Score of 62/100. Average homes sell for about 4% below list price. Dayton's older housing stock often needs significant updates to attract retail buyers -- that's where a cash sale makes sense.",
  },
  {
    question: 'What options do Dayton sellers have?',
    answer: '1. Cash sale (fastest, most certain) -- 7-14 days, as-is, no fees. 2. Traditional listing (highest potential price) -- 63+ average days, repairs often required, 5-6% commission. 3. FSBO (save commission but less reach, more work). 4. iBuyer/investor (convenience but often lower net than retail listing).',
  },
];

export default function DaytonGuide2026Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          daytonLocalBusinessSchema,
          articleSchema('How to Sell a House Fast in Dayton OH (2026)', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/dayton-oh" className="hover:text-white">Dayton OH</Link> &rsaquo; Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Sell a House Fast in Dayton OH -- 2026 Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Dayton OH and Montgomery County for cash, as-is, in any condition. Written offer in 24 hours, close in 7-14 days. According to Redfin (March 2026), Dayton's median sale price is $130,000 with 63 days on market and a Compete Score of 62/100. Montgomery County conveyance fee is $4.00/$1,000 plus $0.50/parcel. Cash sale eliminates agent commissions, repair costs, and the 63-day average time on market. Call 888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Dayton OH Market Overview (2026)</h2>
          <p className="text-gray-700 mb-4">
            Dayton is the county seat of Montgomery County, Ohio, and home to Wright-Patterson Air Force Base -- the largest single-site employer in Ohio. The city offers some of the most affordable housing in the Midwest, with a median sale price of $130,000 (Redfin, March 2026) and a 63-day median days on market. About 60% of Dayton's housing units are renter-occupied, creating a large pool of landlord sellers looking to exit aging portfolios.
          </p>
          <p className="text-gray-700 mb-4">
            Dayton's housing stock is predominantly pre-1950s -- bungalows, Craftsman frames, and American Foursquares throughout West Dayton, Wright-Dunbar, Grafton Hill, and University Row. These properties carry character and often carry significant repair needs that make a cash sale more attractive than a traditional listing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Closing Costs for Dayton OH Sellers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Cost Item</th><th className="text-left p-3">Amount</th><th className="text-left p-3">Notes</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="p-3 font-medium">Montgomery County conveyance fee</td><td className="p-3">$4.00/$1,000 + $0.50/parcel</td><td className="p-3 text-gray-500">Seller pays; Montgomery County Auditor</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Agent commission</td><td className="p-3">5-6% of sale price</td><td className="p-3 text-gray-500">Traditional listing only</td></tr>
                <tr><td className="p-3 font-medium">Repairs (estimate)</td><td className="p-3">Varies widely</td><td className="p-3 text-gray-500">Pre-1950s stock often $10K-$30K+</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Cash sale (USA Home Buyers)</td><td className="p-3">$0 closing costs</td><td className="p-3 text-gray-500">We cover all costs</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ohio Foreclosure and Probate -- Dayton Specifics</h2>
          <p className="text-gray-700 mb-3">
            Ohio is a judicial foreclosure state -- all Montgomery County foreclosures go through Montgomery County Court of Common Pleas. Ohio HB 130 requires mediation referral for residential foreclosures. Typical timeline: 9-12 months from default to sheriff sale.
          </p>
          <p className="text-gray-700 mb-3">
            Probate: Montgomery County Probate Court, 41 N. Perry St., 2nd Floor, Dayton OH 45422, (937) 225-4640. Ohio uses Probate Court for estate administration. Full probate typically required for estates over $35,000 in gross assets.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Selling a House in Dayton OH 2026" />

        <div className="my-8 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-brand-primary font-semibold mb-2">Related: Dayton OH Market Resources</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/markets/dayton-oh" className="text-sm text-brand-primary hover:underline">Dayton OH Main Page</Link>
            <Link href="/markets/dayton-oh/foreclosure" className="text-sm text-brand-primary hover:underline">Foreclosure Help</Link>
            <Link href="/markets/dayton-oh/inherited-property" className="text-sm text-brand-primary hover:underline">Inherited Property</Link>
            <Link href="/sell-house-fast-ohio" className="text-sm text-brand-primary hover:underline">Ohio Cash Home Buyers</Link>
          </div>
        </div>

        <CashOfferForm variant="footer" headline="Get Your Dayton OH Cash Offer Today" subheadline="No obligation. No fees. Written offer in 24 hours." sourcePage="/guides/sell-house-fast-dayton-oh-2026" />
      </div>
    </>
  );
}
