/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { fortWayneLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-fort-wayne-in-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Fort Wayne IN (2026 Guide)',
  description:
    'Complete guide to selling your Fort Wayne IN house fast in 2026. No Indiana transfer tax. Judicial foreclosure explained, Allen County probate, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Fort Wayne IN?',
    answer: 'A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7-14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006.',
  },
  {
    question: 'Does Indiana have a transfer tax?',
    answer: "Indiana abolished its real estate transfer tax in 2009. There is no state, county, or local deed transfer tax in Fort Wayne or Allen County. A Sales Disclosure Form (Form 46234) is required at deed recording through the County Auditor -- this is a process step, not a tax. USA Home Buyers handles all paperwork.",
  },
  {
    question: 'Is Fort Wayne a good market to sell in 2026?',
    answer: "According to Redfin (March 2026), Fort Wayne's median sale price is $214,900 with 30 days on market and a Compete Score of 80/100. Allen County grew 4.4% since 2020 to approximately 402,329 residents (US Census, July 2025). Call 888-274-5006 for a no-obligation offer.",
  },
  {
    question: 'How does foreclosure work in Indiana?',
    answer: "Indiana requires judicial-only foreclosure -- Allen County Superior Court. There is no non-judicial, power-of-sale, or trustee's sale option in Indiana. The 2009 Indiana reform added mandatory settlement conferences for residential foreclosures. Typical timeline: 6-12 months. For most residential properties, there is no post-sale right of redemption. Consult an Indiana-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'How does probate work in Allen County?',
    answer: 'Allen County Circuit Court (Probate Division), 715 S. Calhoun St., Fort Wayne IN 46802, (260) 449-4246. Indiana uses Circuit Court for probate. Indiana small estate affidavit available for qualifying smaller estates (IC § 29-1-8-1). Cash buyers can purchase probate properties directly once the court authorizes the sale.',
  },
];

export default function FortWayneGuide2026Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          fortWayneLocalBusinessSchema,
          articleSchema('How to Sell a House Fast in Fort Wayne IN (2026)', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/fort-wayne-in" className="hover:text-white">Fort Wayne IN</Link> &rsaquo; Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Sell a House Fast in Fort Wayne IN -- 2026 Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Fort Wayne IN and Allen County for cash, as-is. Written offer in 24 hours, close in 7-14 days. Indiana has no transfer tax. According to Redfin (March 2026), Fort Wayne median sale price is $214,900 with 30 days on market and Compete Score 80. Allen County grew 4.4% since 2020 (US Census, July 2025). Indiana judicial-only foreclosure takes 6-12 months -- a cash sale avoids the entire court process. Call 888-274-5006.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Fort Wayne IN Market Overview (2026)</h2>
          <p className="text-gray-700 mb-4">
            Fort Wayne is the largest city in Allen County, Indiana, and one of the fastest-growing mid-sized Midwest cities. Allen County grew 4.4% since 2020 to approximately 402,329 residents (US Census, July 2025). Median sale price $214,900, 30 days on market, Compete Score 80 (Redfin, March 2026). Major employers include Parkview Health, Lincoln Financial, and BAE Systems.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Closing Costs for Fort Wayne IN Sellers</h2>
          <p className="text-gray-700 mb-4">
            Indiana has no transfer tax (abolished 2009). A Sales Disclosure Form (Form 46234) is required at deed recording through the Allen County Auditor -- this is a standard process step, not a tax. Allen County recording fees apply. When you sell to USA Home Buyers, we handle all paperwork and cover closing costs.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Foreclosure and Probate in Allen County</h2>
          <p className="text-gray-700 mb-3">
            Indiana is judicial-only foreclosure -- Allen County Superior Court. No non-judicial option exists. 2009 reform added mandatory settlement conferences. Typical timeline: 6-12 months.
          </p>
          <p className="text-gray-700 mb-3">
            Probate: Allen County Circuit Court (Probate Division), 715 S. Calhoun St., Fort Wayne IN 46802, (260) 449-4246.
          </p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Selling a House in Fort Wayne IN 2026" />
        <div className="my-8 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-brand-primary font-semibold mb-2">Related: Fort Wayne IN Resources</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/markets/fort-wayne-in" className="text-sm text-brand-primary hover:underline">Fort Wayne IN Main Page</Link>
            <Link href="/markets/fort-wayne-in/foreclosure" className="text-sm text-brand-primary hover:underline">Foreclosure Help</Link>
            <Link href="/markets/fort-wayne-in/inherited-property" className="text-sm text-brand-primary hover:underline">Inherited Property</Link>
            <Link href="/sell-house-fast-indiana" className="text-sm text-brand-primary hover:underline">Indiana Cash Home Buyers</Link>
          </div>
        </div>
        <CashOfferForm variant="footer" headline="Get Your Fort Wayne IN Cash Offer Today" subheadline="No obligation. No fees. No transfer tax. Written offer in 24 hours." sourcePage="/guides/sell-house-fast-fort-wayne-in-2026" />
      </div>
    </>
  );
}
