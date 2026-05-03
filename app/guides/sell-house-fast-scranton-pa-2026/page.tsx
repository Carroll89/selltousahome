/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { scrantonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-scranton-pa-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Scranton PA (2026 Guide)',
  description:
    'Complete guide to selling your Scranton PA house fast in 2026. 3.7% transfer tax explained, Lackawanna County probate, judicial foreclosure, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Scranton PA?',
    answer: 'A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7-14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006.',
  },
  {
    question: 'What is the transfer tax in Scranton PA?',
    answer: "Scranton's total transfer tax is 3.7%: 1% Pennsylvania state + 1% Lackawanna County + 1.7% City of Scranton. On a $215,500 home, that's approximately $7,974. This is significantly higher than the 2% standard for most PA municipalities. Source: PA DOR; alttitle.com (updated July 2025). When you sell to USA Home Buyers, we cover all closing costs.",
  },
  {
    question: 'Is Scranton a good market to sell in 2026?',
    answer: "According to Redfin (March 2026), Scranton's median sale price is $215,500 (+7.8% YoY) with 25 days on market and a Compete Score of 79/100. About 75% of buyers are relocating from outside the metro -- primarily NYC and NJ. Call 888-274-5006 for a no-obligation offer.",
  },
  {
    question: 'How does foreclosure work in Lackawanna County?',
    answer: "Pennsylvania requires judicial foreclosure -- Lackawanna County Court of Common Pleas. Lackawanna County also has a residential mediation program. Typical timeline: 9-18 months from default. Consult a Pennsylvania-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'How does probate work in Lackawanna County?',
    answer: 'Lackawanna County Register of Wills, 123 Wyoming Ave Suite 521, Scranton PA 18503, (570) 963-6702. Pennsylvania uses Register of Wills / Orphans Court system. PA inheritance tax applies: 0% spouse, 4.5% direct descendants, 12% siblings, 15% others. Cash buyers can purchase probate properties directly once the estate is opened.',
  },
];

export default function ScrantonGuide2026Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          scrantonLocalBusinessSchema,
          articleSchema('How to Sell a House Fast in Scranton PA (2026)', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/scranton-pa" className="hover:text-white">Scranton PA</Link> &rsaquo; Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Sell a House Fast in Scranton PA -- 2026 Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Scranton PA and Lackawanna County for cash, as-is. Written offer in 24 hours, close in 7-14 days. Scranton&apos;s total transfer tax is 3.7% (1% PA + 1% Lackawanna County + 1.7% City of Scranton) -- we cover all closing costs. According to Redfin (March 2026), Scranton median sale price is $215,500 (+7.8% YoY). NYC and NJ buyers drive 75% of demand. Call 888-274-5006.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Scranton PA Market Overview (2026)</h2>
          <p className="text-gray-700 mb-4">
            Scranton is the county seat of Lackawanna County, Pennsylvania, and the heart of Northeastern Pennsylvania (NEPA). Median sale price $215,500 (+7.8% YoY), 25 days on market, Compete Score 79 (Redfin, March 2026). About 75% of buyers are relocating from outside the metro -- primarily NYC and NJ. Scranton&apos;s coal-era housing stock is predominantly late-1800s to early-1900s.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Scranton PA Transfer Tax -- Know Your Numbers</h2>
          <p className="text-gray-700 mb-4">
            Scranton&apos;s total transfer tax is <strong>3.7%</strong>: 1% Pennsylvania state + 1% Lackawanna County + 1.7% City of Scranton. On a $215,500 home, that&apos;s approximately $7,974 -- nearly double the standard 2% PA rate. Source: PA Department of Revenue; alttitle.com (updated July 2025). USA Home Buyers covers all closing costs including the full 3.7%.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Foreclosure and Probate in Lackawanna County</h2>
          <p className="text-gray-700 mb-3">
            Pennsylvania judicial foreclosure -- Lackawanna County Court of Common Pleas. Lackawanna County has a residential mediation program. Typical timeline: 9-18 months.
          </p>
          <p className="text-gray-700 mb-3">
            Probate: Lackawanna County Register of Wills, 123 Wyoming Ave Suite 521, Scranton PA 18503, (570) 963-6702. PA inheritance tax: 0% spouse, 4.5% direct descendants, 12% siblings, 15% others.
          </p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Selling a House in Scranton PA 2026" />
        <div className="my-8 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-brand-primary font-semibold mb-2">Related: Scranton PA Resources</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/markets/scranton-pa" className="text-sm text-brand-primary hover:underline">Scranton PA Main Page</Link>
            <Link href="/markets/scranton-pa/foreclosure" className="text-sm text-brand-primary hover:underline">Foreclosure Help</Link>
            <Link href="/markets/scranton-pa/inherited-property" className="text-sm text-brand-primary hover:underline">Inherited Property</Link>
            <Link href="/sell-house-fast-pennsylvania" className="text-sm text-brand-primary hover:underline">Pennsylvania Cash Home Buyers</Link>
          </div>
        </div>
        <CashOfferForm variant="footer" headline="Get Your Scranton PA Cash Offer Today" subheadline="No obligation. No fees. Written offer in 24 hours. We cover Scranton's 3.7% transfer tax." sourcePage="/guides/sell-house-fast-scranton-pa-2026" />
      </div>
    </>
  );
}
