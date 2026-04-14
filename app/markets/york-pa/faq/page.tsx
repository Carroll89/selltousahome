/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/faq`;

export const metadata: Metadata = {
  title: 'York PA Sell House FAQ',
  description:
    'Answers to frequently asked questions about selling your house fast for cash in York PA. Transfer tax, probate, foreclosure, timeline, and more.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in York PA?',
    answer: "We send a written cash offer within 24 hours of learning about your property. Once you accept, you can close in as few as 7 days — or on whatever timeline works for your situation. According to Redfin (February 2026), the standard York City market takes about 31 days just to go pending, plus another 30-45 days for lender processing. A cash sale cuts that to 7-14 days total.",
  },
  {
    question: 'What is the real estate transfer tax in York PA?',
    answer: "York PA has a 2% total transfer tax: 1% Pennsylvania state (PA Dept. of Revenue) + 0.5% City of York + 0.5% York City School District (per Article 355 of York City Codified Ordinances). It is customarily split 50/50 between buyer and seller. On a $165,000 home, the total is $3,300 — seller conventionally pays $1,650. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax. Source: pa.gov; yorkcity.org.",
  },
  {
    question: 'How much will you pay for my York house?',
    answer: "Cash offers for York City homes typically range from 65-75% of after-repair value. According to Redfin, York City's median sale price is $165,850 (February 2026). Northeast York properties near the $120,000 level can still generate fair cash offers when we cover all closing costs — no commissions, no fees. We give you a specific written number within 24 hours.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. York City's housing stock is predominantly pre-1940 brick row homes. The U.S. Census ACS confirms York's housing age skews heavily pre-1960. Aging systems, deferred maintenance, and structural wear are standard — that's what we buy every week throughout York County.",
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: "We're a Pennsylvania LLC. Every offer is in writing — a formal purchase agreement with price, terms, and closing date. No verbal promises. You can verify our Pennsylvania business registration at corporations.pa.gov. We've closed sales throughout York County.",
  },
  {
    question: '¿Hablamos español? / Do you help Spanish-speaking sellers?',
    answer: "Sí, hablamos español. According to the U.S. Census Bureau ACS, 36.6% of York City residents are Hispanic or Latino. We serve the York community in both English and Spanish. Call us, fill out the form, or stop by — entendemos el vecindario y el proceso.",
  },
  {
    question: 'What areas near York do you buy in?',
    answer: "We serve all of York City and York County: Hanover, Red Lion, Dallastown, Spring Grove, Dover, Shrewsbury, New Freedom, Glen Rock, Dillsburg, York Haven, Manchester, Windsor, Seven Valleys, Jacobus, West York, North York, Wrightsville, Mount Wolf, East York, and all surrounding communities.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: "We call you within hours during business hours. We ask about the property — condition, situation, timeline. Within 24 hours you receive a written cash offer. The offer stands on its own — no pressure, no obligation. If you accept, we pick a closing date that works for you.",
  },
  {
    question: 'What are my closing costs when selling to a cash buyer in York PA?',
    answer: "Zero. When you sell to USA Home Buyers, we pay all closing costs — transfer tax, recording fees, title insurance, settlement charges. The written offer amount is the net amount you receive at closing. No deductions, no surprises.",
  },
  {
    question: 'Can I sell my York house if it has liens or back taxes?',
    answer: "Yes. Outstanding liens and back taxes get resolved at closing from the sale proceeds. The title company handles payoff of all encumbrances. If the liens and back taxes exceed the offer amount, your attorney can discuss whether a short sale is appropriate. Disclose all known liens and we factor them in.",
  },
];

export default function YorkFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[yorkLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/markets/york-pa" className="hover:text-brand-primary">York PA</Link>
          {' › '}
          <span>FAQ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Selling Your House Fast in York PA — Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mb-8">
          Answers to the most common questions from York PA homeowners considering a cash sale.
        </p>

        <div className="space-y-6 mb-12">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-6">
              <h2 className="text-lg font-bold text-brand-dark mb-2">{item.question}</h2>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>

        <CashOfferForm
          variant="inline"
          headline="Ready to Get Your York PA Cash Offer?"
          subheadline="Written offer in 24 hours. No obligation."
          sourcePage="/markets/york-pa"
        />

        <div className="flex flex-wrap gap-4 text-sm mt-8">
          <Link href="/markets/york-pa" className="text-brand-primary hover:underline">← York PA market overview</Link>
          <Link href="/markets/york-pa/market-report" className="text-brand-primary hover:underline">York market report →</Link>
          <Link href="/guides/sell-house-fast-york-pa-2026" className="text-brand-primary hover:underline">2026 York selling guide →</Link>
        </div>
      </div>
    </>
  );
}
