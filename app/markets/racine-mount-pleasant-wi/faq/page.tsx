/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { racineWILocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/faq`;

export const metadata: Metadata = {
  title: 'Cash Home Buyers Racine WI — FAQ',
  description:
    'Answers to the most common questions about selling your house for cash in Racine WI. Transfer taxes, foreclosure, probate, timelines, and more.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Racine WI?',
    answer: 'USA Home Buyers sends a written cash offer within 24 hours of learning about your Racine property. Once you accept, we can close in as few as 7 days. The typical timeline is 7–14 days from offer to close. There is no bank financing, no inspection contingency, no appraisal wait.',
  },
  {
    question: 'How much will USA Home Buyers pay for my Racine property?',
    answer: 'Cash offers typically range from 68-80% of fair market value. According to the Zillow Home Value Index (February 2026), the typical Racine home value is $171,496, up 4.4% year over year. Redfin reports a March 2026 median sale price of $205,000 in Racine. Mount Pleasant homes run higher — the Realtor.com metro hotness median is $347,720. We cover all closing costs — the offer we make is what you walk away with. No deductions at the closing table.',
  },
  {
    question: 'What is the transfer tax when selling a house in Racine WI?',
    answer: 'Wisconsin realty transfer fee is $3.00 per $1,000 of consideration (0.30%), set by Wis. Stat. § 77.22. This is a state-only fee — Racine County does not add a local surcharge, and neither does the City of Racine or the Village of Mount Pleasant. Seller (grantor) pays. On a $205,000 Racine sale: $615. On a $347,720 Mount Pleasant sale: $1,043. When you sell to USA Home Buyers, we cover all closing costs.',
  },
  {
    question: 'How does foreclosure work in Wisconsin?',
    answer: 'Judicial (Racine County Circuit Court, 10-14 months, Ch. 846 Wis. Stats.). If you are behind on payments, selling before the foreclosure is complete allows you to recover any remaining equity.',
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: 'No. We buy Racine properties in any condition — fire damage, code violations, structural issues, deferred maintenance, tenant damage. No repairs, no cleaning, no staging.',
  },
  {
    question: 'What areas near Racine do you buy in?',
    answer: 'All of Racine County: Racine, Mount Pleasant, Caledonia, Sturtevant, Union Grove, Burlington, Wind Point, Raymond, Waterford, and Rochester (WI). We also overlap Kenosha County to the south (Kenosha, Pleasant Prairie, Somers, Bristol). Call 888-440-5250 if you\'re not sure whether your address is in our coverage area.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: 'We provide a written purchase agreement with price, terms, and closing date — no verbal promises. We have closed transactions throughout Wisconsin. You can call us at 888-440-5250 to speak with someone directly.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask 5–10 questions about your Racine property, and send a written cash offer within 24 hours. No pressure. If the offer works for you, you pick the closing date.',
  },
  {
    question: 'What are my closing costs when selling to a cash buyer?',
    answer: 'Zero out of pocket. We cover all closing costs — title fees, transfer taxes, recording fees, attorney fees. The offer we make is the number you walk away with.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'A short sale may be possible — where the lender agrees to accept less than the full payoff to release the mortgage lien. We have experience with short sales and can discuss whether that path is available for your Racine situation.',
  },
];

export default function RacineFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[racineWILocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/racine-mount-pleasant-wi" className="hover:underline">Racine WI</Link> › FAQ
        </p>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Cash Home Buyers Racine WI — Frequently Asked Questions</h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            Common questions from Racine homeowners about selling for cash. If your question isn't here, call 888-440-5250.
          </p>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="All FAQ — Selling Your Racine WI Home for Cash" />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/markets/racine-mount-pleasant-wi" className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-primary/90">← Back to Racine WI</Link>
          <Link href="/markets/racine-mount-pleasant-wi/market-report" className="bg-brand-light text-brand-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100">Racine Market Report</Link>
        </div>

        <div className="mt-10">
          <CashOfferForm variant="inline" headline="Ready to Get Started?" subheadline="Written offer in 24 hours. No obligation." sourcePage="/markets/racine-mount-pleasant-wi/faq" />
        </div>
      </div>
    </>
  );
}
