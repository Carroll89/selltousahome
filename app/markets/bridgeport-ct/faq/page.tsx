/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bridgeportLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bridgeport-ct/faq`;

export const metadata: Metadata = {
  title: 'Cash Home Buyers Bridgeport CT — FAQ',
  description:
    'Answers to the most common questions about selling your house for cash in Bridgeport CT. Transfer taxes, foreclosure, probate, timelines, and more.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Bridgeport CT?',
    answer: 'USA Home Buyers sends a written cash offer within 24 hours of learning about your Bridgeport property. Once you accept, we can close in as few as 7 days. The typical timeline is 7–14 days from offer to close. There is no bank financing, no inspection contingency, no appraisal wait.',
  },
  {
    question: 'How much will USA Home Buyers pay for my Bridgeport property?',
    answer: 'Cash offers typically range from 65-78% of fair market value. According to Zillow, the Bridgeport median home value is $240,000. We cover all closing costs — the offer we make is what you walk away with. No deductions at the closing table.',
  },
  {
    question: 'What is the transfer tax when selling a house in Bridgeport CT?',
    answer: 'Transfer tax in Bridgeport CT: 1.0% (0.75% state + 0.25% municipal, seller pays). When you sell to USA Home Buyers, we cover all closing costs.',
  },
  {
    question: 'How does foreclosure work in Connecticut?',
    answer: 'Strict foreclosure (Superior Court, Law Day, no auction — unique to CT). If you are behind on payments, selling before the foreclosure is complete allows you to recover any remaining equity.',
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: 'No. We buy Bridgeport properties in any condition — fire damage, code violations, structural issues, deferred maintenance, tenant damage. No repairs, no cleaning, no staging.',
  },
  {
    question: 'What areas near Bridgeport do you buy in?',
    answer: 'All of Fairfield County and surrounding areas including Stamford, Danbury, Stratford, Milford, Shelton. Call 888-274-5006 if you\'re not sure whether your address is in our coverage area.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: 'We provide a written purchase agreement with price, terms, and closing date — no verbal promises. We have closed transactions throughout Connecticut. You can call us at 888-274-5006 to speak with someone directly.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask 5–10 questions about your Bridgeport property, and send a written cash offer within 24 hours. No pressure. If the offer works for you, you pick the closing date.',
  },
  {
    question: 'What are my closing costs when selling to a cash buyer?',
    answer: 'Zero out of pocket. We cover all closing costs — title fees, transfer taxes, recording fees, attorney fees. The offer we make is the number you walk away with.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'A short sale may be possible — where the lender agrees to accept less than the full payoff to release the mortgage lien. We have experience with short sales and can discuss whether that path is available for your Bridgeport situation.',
  },
];

export default function BridgeportFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[bridgeportLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/bridgeport-ct" className="hover:underline">Bridgeport CT</Link> › FAQ
        </p>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Cash Home Buyers Bridgeport CT — Frequently Asked Questions</h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            Common questions from Bridgeport homeowners about selling for cash. If your question isn't here, call 888-274-5006.
          </p>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="All FAQ — Selling Your Bridgeport CT Home for Cash" />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/markets/bridgeport-ct" className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-primary/90">← Back to Bridgeport CT</Link>
          <Link href="/markets/bridgeport-ct/market-report" className="bg-brand-light text-brand-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100">Bridgeport Market Report</Link>
        </div>

        <div className="mt-10 mb-8">
          <h2 className="text-xl font-bold text-brand-dark mb-4">External Resources for Bridgeport CT Sellers</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <a href="https://www.zillow.com/bridgeport-ct/home-values/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Zillow — Bridgeport CT Home Values</a> — Current market data and median price trends for Fairfield County</li>
            <li>• <a href="https://portal.ct.gov/DRS/Real-Estate/Real-Estate-Conveyance-Tax" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Connecticut DRS — Real Estate Conveyance Tax</a> — Official CT conveyance tax rates (0.75% state + 0.25% municipal Bridgeport)</li>
            <li>• <a href="https://www.jud.ct.gov/faq/probate.html" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Connecticut Judicial Branch — Probate FAQ</a> — How strict foreclosure and probate proceedings work in CT courts</li>
            <li>• <a href="https://www.hud.gov/topics/avoiding_foreclosure" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">HUD — Avoiding Foreclosure</a> — Federal guidance on foreclosure alternatives, short sales, and seller options</li>
            <li>• <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">National Association of Realtors — Research &amp; Statistics</a> — National home sale benchmarks and seller cost comparisons</li>
            <li>• <a href="https://www.census.gov/quickfacts/bridgeportcityconnecticut" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">U.S. Census Bureau — Bridgeport CT Quick Facts</a> — Demographics and housing unit data for Bridgeport and Fairfield County</li>
          </ul>
        </div>

        <div className="mt-6">
          <CashOfferForm variant="inline" headline="Ready to Get Started?" subheadline="Written offer in 24 hours. No obligation." sourcePage="/markets/bridgeport-ct/faq" />
        </div>
      </div>
    </>
  );
}
