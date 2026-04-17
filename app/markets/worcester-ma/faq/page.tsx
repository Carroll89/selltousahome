/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { worcesterLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/worcester-ma/faq`;

export const metadata: Metadata = {
  title: 'Cash Home Buyers Worcester MA — FAQ',
  description:
    'Answers to the most common questions about selling your house for cash in Worcester MA. Transfer taxes, foreclosure, probate, timelines, and more.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Worcester MA?',
    answer: 'USA Home Buyers sends a written cash offer within 24 hours of learning about your Worcester property. Once you accept, we can close in as few as 7 days. The typical timeline is 7–14 days from offer to close. There is no bank financing, no inspection contingency, no appraisal wait.',
  },
  {
    question: 'How much will USA Home Buyers pay for my Worcester property?',
    answer: 'Cash offers typically range from 68-80% of fair market value. According to Zillow, the Worcester median home value is $310,000. We cover all closing costs — the offer we make is what you walk away with. No deductions at the closing table.',
  },
  {
    question: 'What is the transfer tax when selling a house in Worcester MA?',
    answer: 'Transfer tax in Worcester MA: $4.56 per $1,000 (deed excise, seller pays). When you sell to USA Home Buyers, we cover all closing costs.',
  },
  {
    question: 'How does foreclosure work in Massachusetts?',
    answer: 'Non-judicial (power of sale, ~75-120 days, MGL Ch. 183). If you are behind on payments, selling before the foreclosure is complete allows you to recover any remaining equity.',
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: 'No. We buy Worcester properties in any condition — fire damage, code violations, structural issues, deferred maintenance, tenant damage. No repairs, no cleaning, no staging.',
  },
  {
    question: 'What areas near Worcester do you buy in?',
    answer: 'All of Worcester County and surrounding areas including Shrewsbury, Auburn, Millbury, Grafton, Holden. Call 888-440-5250 if you\'re not sure whether your address is in our coverage area.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: 'We provide a written purchase agreement with price, terms, and closing date — no verbal promises. We have closed transactions throughout Massachusetts. You can call us at 888-440-5250 to speak with someone directly.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask 5–10 questions about your Worcester property, and send a written cash offer within 24 hours. No pressure. If the offer works for you, you pick the closing date.',
  },
  {
    question: 'What are my closing costs when selling to a cash buyer?',
    answer: 'Zero out of pocket. We cover all closing costs — title fees, transfer taxes, recording fees, attorney fees. The offer we make is the number you walk away with.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'A short sale may be possible — where the lender agrees to accept less than the full payoff to release the mortgage lien. We have experience with short sales and can discuss whether that path is available for your Worcester situation.',
  },
];

export default function WorcesterFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[worcesterLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/worcester-ma" className="hover:underline">Worcester MA</Link> › FAQ
        </p>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Cash Home Buyers Worcester MA — Frequently Asked Questions</h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            Common questions from Worcester homeowners about selling for cash. If your question isn't here, call 888-440-5250.
          </p>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="All FAQ — Selling Your Worcester MA Home for Cash" />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/markets/worcester-ma" className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-primary/90">← Back to Worcester MA</Link>
          <Link href="/markets/worcester-ma/market-report" className="bg-brand-light text-brand-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100">Worcester Market Report</Link>
        </div>

        <div className="mt-10">
          <CashOfferForm variant="inline" headline="Ready to Get Started?" subheadline="Written offer in 24 hours. No obligation." sourcePage="/markets/worcester-ma/faq" />
        </div>
      </div>
    </>
  );
}
