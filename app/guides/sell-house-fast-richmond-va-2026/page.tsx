/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { richmondLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-richmond-va-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Richmond VA (2026 Guide)',
  description:
    'Complete guide to selling your Richmond VA house fast in 2026. Cash buyers vs. traditional listing, Richmond City closing costs, probate, foreclosure, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Richmond VA?',
    answer: 'A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7-14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006.',
  },
  {
    question: 'What does it cost to sell a house in Richmond VA?',
    answer: "Virginia state grantor's tax is $0.50/$500 of value (seller pays, VA Code § 58.1-802). State recordation tax $0.25/$100 is paid by the buyer. Richmond City may levy a local add-on under § 58.1-814 -- verify with settlement agent. With USA Home Buyers: no commissions, no fees, we cover all closing costs.",
  },
  {
    question: 'Is Richmond a good market to sell in 2026?',
    answer: "According to Redfin (March 2026), Richmond's median sale price is $414,500 with 24 days on market and a Compete Score of 82/100. Homes are selling at 100.4% of list. Call 888-274-5006 for a no-obligation offer.",
  },
  {
    question: 'How does foreclosure work in Richmond VA?',
    answer: 'Virginia primarily uses non-judicial foreclosure via deed of trust (VA Code § 55.1-321). Typical timeline: 45-60 days from acceleration. No post-sale right of redemption in Virginia. Consult a Virginia-licensed real estate attorney for your specific situation.',
  },
  {
    question: 'How does probate work in Richmond City?',
    answer: 'Richmond City Circuit Court Clerk, 400 N. 9th St., Richmond VA 23219, (804) 646-6505. Richmond is an independent city -- no county court layer. Virginia small estate affidavit available for estates under $50,000 (VA Code § 64.2-601). Cash buyers can purchase probate properties directly once the court authorizes the sale.',
  },
];

export default function RichmondGuide2026Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          richmondLocalBusinessSchema,
          articleSchema('How to Sell a House Fast in Richmond VA (2026)', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/richmond-va" className="hover:text-white">Richmond VA</Link> &rsaquo; Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Sell a House Fast in Richmond VA -- 2026 Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Richmond VA (independent city) for cash, as-is. Written offer in 24 hours, close in 7-14 days. According to Redfin (March 2026), Richmond median sale price is $414,500 with 24 days on market and Compete Score 82. Richmond is an independent city -- all records at Richmond City Circuit Court Clerk (400 N. 9th St.). Call 888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Richmond VA Market Overview (2026)</h2>
          <p className="text-gray-700 mb-4">
            Richmond is an independent city in Virginia -- it has no county layer. All deeds, court records, and probate filings go through the Richmond City Circuit Court Clerk. Median sale price $414,500 (Redfin, March 2026), 24 days on market, sale-to-list ratio 100.4%, Compete Score 82. DC-to-Richmond migration is the top inbound buyer source.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Closing Costs for Richmond VA Sellers</h2>
          <p className="text-gray-700 mb-4">
            Virginia state grantor&apos;s tax: $0.50/$500 of value (~0.10%, seller pays, VA Code § 58.1-802). State recordation tax $0.25/$100 (buyer pays, § 58.1-801). Richmond City may levy a local add-on under § 58.1-814 -- verify current rate with settlement agent before closing. When you sell to USA Home Buyers, we cover all closing costs.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Foreclosure and Probate in Richmond City</h2>
          <p className="text-gray-700 mb-3">
            Virginia uses non-judicial foreclosure via deed of trust (VA Code § 55.1-321). Typical timeline: 45-60 days from acceleration. No post-sale right of redemption.
          </p>
          <p className="text-gray-700 mb-3">
            Probate: Richmond City Circuit Court Clerk, 400 N. 9th St., Richmond VA 23219, (804) 646-6505. Virginia small estate affidavit available under $50,000 (VA Code § 64.2-601).
          </p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Selling a House in Richmond VA 2026" />
        <div className="my-8 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-brand-primary font-semibold mb-2">Related: Richmond VA Resources</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/markets/richmond-va" className="text-sm text-brand-primary hover:underline">Richmond VA Main Page</Link>
            <Link href="/markets/richmond-va/foreclosure" className="text-sm text-brand-primary hover:underline">Foreclosure Help</Link>
            <Link href="/markets/richmond-va/inherited-property" className="text-sm text-brand-primary hover:underline">Inherited Property</Link>
            <Link href="/sell-house-fast-virginia" className="text-sm text-brand-primary hover:underline">Virginia Cash Home Buyers</Link>
          </div>
        </div>
        <CashOfferForm variant="footer" headline="Get Your Richmond VA Cash Offer Today" subheadline="No obligation. No fees. Written offer in 24 hours." sourcePage="/guides/sell-house-fast-richmond-va-2026" />
      </div>
    </>
  );
}
