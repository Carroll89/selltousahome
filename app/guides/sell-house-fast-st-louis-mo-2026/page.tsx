/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { stLouisLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-st-louis-mo-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in St. Louis MO (2026 Guide)',
  description:
    'Complete guide to selling your St. Louis City MO house fast in 2026. No Missouri transfer tax. Cash buyers vs. traditional listing, City vs. County explained, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in St. Louis City MO?',
    answer: 'A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7-14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006.',
  },
  {
    question: 'Does Missouri have a transfer tax?',
    answer: "No. Missouri has no state real estate transfer tax and neither St. Louis City nor St. Louis County imposes a local deed transfer tax. This is a significant seller advantage compared to neighboring Illinois or Pennsylvania. City recording fees still apply, but no transfer tax at any level.",
  },
  {
    question: 'Is St. Louis City a good market to sell in 2026?',
    answer: "According to Redfin (March 2026), St. Louis City's median sale price is $250,000 with 31 days on market and a Compete Score of 73/100. Call 888-274-5006 for a no-obligation offer.",
  },
  {
    question: 'How does foreclosure work in St. Louis City?',
    answer: "Missouri primarily uses non-judicial foreclosure via deed of trust (RSMo § 443.310). The trustee publishes notice for three consecutive weeks and can conduct the sale without court involvement. Typical timeline: 60-90 days from notice. RSMo § 443.410 redemption provisions involve specific conditions -- consult a Missouri-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'How does probate work in St. Louis City?',
    answer: "St. Louis City Circuit Court (22nd Judicial Circuit), 10 N. Tucker Blvd., St. Louis MO 63101, (314) 622-4498. This is the City court -- NOT the St. Louis County court in Clayton (21st Circuit). Cash buyers can purchase probate properties directly once the court authorizes the sale.",
  },
];

export default function StLouisGuide2026Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          stLouisLocalBusinessSchema,
          articleSchema('How to Sell a House Fast in St. Louis City MO (2026)', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/st-louis-mo" className="hover:text-white">St. Louis MO</Link> &rsaquo; Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Sell a House Fast in St. Louis City MO -- 2026 Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in St. Louis City, MO for cash, as-is. Written offer in 24 hours, close in 7-14 days. Missouri has no transfer tax at any level. According to Redfin (March 2026), St. Louis City median sale price is $250,000 with 31 days on market. St. Louis City is an independent city -- separate from St. Louis County. All City filings go through the 22nd Circuit Court (10 N. Tucker Blvd.). Call 888-274-5006.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">St. Louis City Market Overview (2026)</h2>
          <p className="text-gray-700 mb-4">
            St. Louis City is an independent city in Missouri -- NOT part of St. Louis County. Median sale price $250,000, 31 days on market, Compete Score 73 (Redfin, March 2026). Missouri has no state or local transfer tax. Red-brick South City housing stock (Dutchtown, Benton Park, Shaw, Tower Grove) is a major seller market.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-brand-primary mb-1">Important: City ≠ County</p>
            <p className="text-sm text-gray-700">
              St. Louis City and St. Louis County are separate jurisdictions with different courts, recorders, and governments. City Circuit Court (22nd Judicial Circuit) is at 10 N. Tucker Blvd. County Probate (21st Judicial Circuit) is in Clayton. All City property filings go through City offices only.
            </p>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Closing Costs for St. Louis City Sellers</h2>
          <p className="text-gray-700 mb-4">
            Missouri has no state real estate transfer tax and no local deed transfer tax in St. Louis City. City recording fees apply -- verify current rates with your title company. When you sell to USA Home Buyers, we cover all closing costs.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Foreclosure and Probate in St. Louis City</h2>
          <p className="text-gray-700 mb-3">
            Missouri uses non-judicial foreclosure via deed of trust (RSMo § 443.310). Typical timeline: 60-90 days from notice. RSMo § 443.410 redemption provisions have specific applicability conditions -- consult a Missouri attorney for your situation.
          </p>
          <p className="text-gray-700 mb-3">
            City probate: St. Louis City Circuit Court (22nd Judicial Circuit), 10 N. Tucker Blvd., St. Louis MO 63101, (314) 622-4498. This is the City court -- separate from the County court in Clayton.
          </p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Selling a House in St. Louis City MO 2026" />
        <div className="my-8 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-brand-primary font-semibold mb-2">Related: St. Louis MO Resources</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/markets/st-louis-mo" className="text-sm text-brand-primary hover:underline">St. Louis MO Main Page</Link>
            <Link href="/markets/st-louis-mo/foreclosure" className="text-sm text-brand-primary hover:underline">Foreclosure Help</Link>
            <Link href="/markets/st-louis-mo/inherited-property" className="text-sm text-brand-primary hover:underline">Inherited Property</Link>
            <Link href="/sell-house-fast-missouri" className="text-sm text-brand-primary hover:underline">Missouri Cash Home Buyers</Link>
          </div>
        </div>
        <CashOfferForm variant="footer" headline="Get Your St. Louis City Cash Offer Today" subheadline="No obligation. No fees. No transfer tax. Written offer in 24 hours." sourcePage="/guides/sell-house-fast-st-louis-mo-2026" />
      </div>
    </>
  );
}
