/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { wilmingtonLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/faq`;

export const metadata: Metadata = {
  title: 'Cash Buyers Wilmington DE — FAQ',
  description:
    'Answers to frequently asked questions about selling your house fast for cash in Wilmington DE. Transfer tax, foreclosure, probate, timeline, and more.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Wilmington DE?',
    answer: "We send a written cash offer within 24 hours of learning about your property. Once you accept, you can close in as few as 7 days — or on whatever timeline works for your situation. According to Redfin (February 2026), the standard Wilmington market takes about 72 days just to go pending, plus another 30-45 days for lender processing. A cash sale cuts that to 7-14 days total.",
  },
  {
    question: 'What is the real estate transfer tax in Wilmington DE?',
    answer: "Wilmington DE has a 4% total transfer tax: 2.5% Delaware state tax (Delaware Code Title 30, Ch. 54) plus 1.5% City of Wilmington local tax. By convention, buyer and seller each pay 2%. On a $210,000 home, the total is $8,400 — seller conventionally pays $4,200. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax. Source: Delaware Division of Revenue (financefiles.delaware.gov); New Castle County (newcastlede.gov/138).",
  },
  {
    question: 'How much will you pay for my Wilmington house?',
    answer: "Cash offers for Wilmington city homes typically range from 65-75% of after-repair value. According to Redfin, Wilmington's median sale price is $210,000 (February 2026). Row homes in Southbridge and West Side often yield offers in the $130,000-$165,000 range when we cover all closing costs — no commissions, no fees deducted from your number. We give you a specific written number within 24 hours.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Wilmington's housing stock is predominantly pre-1940 brick row homes. The U.S. Census ACS confirms most of Wilmington's housing units were built before 1970. Aging systems, deferred maintenance, and structural wear are standard in Southbridge, Brandywine Village, and West Center City row homes — that's exactly what we buy.",
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: "We're an LLC. Every offer is a written purchase agreement — price, terms, and closing date. No verbal promises. We've purchased homes throughout Delaware and Pennsylvania. You can review our offer at your leisure and walk away with no penalty.",
  },
  {
    question: 'How does Delaware foreclosure work, and can a cash sale stop it?',
    answer: "Delaware is a judicial foreclosure state. Lenders file a complaint in New Castle County Superior Court; the typical timeline from filing to sheriff's sale is 6-9 months. You can sell your home at any point before the sheriff's sale. A cash sale closes in 7-14 days — well before most foreclosure timelines. Delaware has no post-sale right of redemption, so acting before the sale is critical. Sources: amerinotexchange.com; Nolo Delaware Foreclosure Laws.",
  },
  {
    question: 'What areas near Wilmington do you buy in?',
    answer: "We serve all of Wilmington city and New Castle County: Newark, New Castle, Elsmere, Claymont, Bear, Middletown, Hockessin, Arden, Edgemoor, Glasgow, Pike Creek, Wilmington Manor, and all surrounding communities.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: "We call within hours during business hours. We'll ask about the property — condition, situation, your timeline. Within 24 hours you receive a written cash offer. The offer stands on its own — no pressure, no obligation. If you accept, we pick a closing date that works for you.",
  },
];

export default function WilmingtonFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[wilmingtonLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/markets/wilmington-de" className="hover:text-brand-primary">Wilmington DE</Link>
          {' › '}
          <span>FAQ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Frequently Asked Questions — Selling Your Wilmington DE Home for Cash
        </h1>
        <p className="text-gray-600 mb-8">
          Answers to the most common questions about selling your Wilmington DE house fast for cash.
          Delaware-specific legal details, transfer tax, foreclosure timeline, and what to expect from a cash sale.
        </p>

        <div className="space-y-8 mb-12">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-8">
              <h2 className="text-lg font-bold text-brand-dark mb-3">{item.question}</h2>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>

        <CashOfferForm
          variant="inline"
          headline="Get Your Wilmington DE Cash Offer"
          subheadline="Written offer in 24 hours. No obligation. We cover all closing costs including Delaware's 4% transfer tax."
          sourcePage="/markets/wilmington-de"
        />

        <nav className="border-t pt-6 mt-8 text-sm text-gray-500">
          <Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">← Back to Wilmington DE</Link>
        </nav>
      </div>
    </>
  );
}
