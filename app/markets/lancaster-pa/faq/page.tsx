/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { lancasterLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'FAQ — Sell House Fast Lancaster PA',
  description:
    'Answers to common questions about selling your house fast for cash in Lancaster PA — price ranges, transfer tax, timeline, neighborhoods, and more.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/faq` },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Lancaster PA?',
    answer: 'We can close in as few as 7 days from an accepted offer. We send a written cash offer within 24 hours of learning about your property. According to Redfin, Lancaster City homes go pending in about 19 days on the open market — that path requires showings, inspections, and lender approval. With a cash sale, there\'s no bank, no contingency period, no waiting.',
  },
  {
    question: 'How much will you pay for my Lancaster PA house?',
    answer: 'Cash offers typically range from 70-80% of fair market value. According to Zillow, Lancaster City\'s median home value is $332,965 (February 2026). For a Cabbage Hill or West End rowhouse near the $233,000 neighborhood median, a cash offer is approximately $163,000-$186,000. We cover all closing costs — no agent commissions, no fees taken from your number.',
  },
  {
    question: 'What is the real estate transfer tax in Lancaster PA?',
    answer: 'Lancaster PA\'s transfer tax is 2% total — 1% Commonwealth of Pennsylvania plus 1% local (City of Lancaster and School District of Lancaster, per PA Act 77 of 1986). By convention, buyer and seller each pay 1%. On a $235,000 home, the seller\'s share is $2,350. When you sell to us, we cover all closing costs including the full transfer tax. Source: PA Dept. of Revenue; ALT Title PA Transfer Tax Deviations (July 2025).',
  },
  {
    question: 'Do I need to make repairs before selling to you?',
    answer: 'No. We buy in any condition — knob-and-tube wiring, failing boilers, leaking roofs, code violations, deferred maintenance of any kind. Lancaster City\'s housing stock is mostly pre-1940 brick construction. Deferred maintenance is the norm, not the exception. Leave whatever you don\'t want.',
  },
  {
    question: 'What neighborhoods and areas in Lancaster do you buy in?',
    answer: 'All of Lancaster City — Cabbage Hill, West End, Chestnut Hill, Musser Park, Old Town, Southeast Lancaster, and downtown. All of Lancaster County — Lititz, Ephrata, Manheim, Columbia, Mount Joy, Elizabethtown, Millersville, New Holland, Quarryville, Strasburg, East Petersburg, Marietta, Mountville, and all rural townships and boroughs.',
  },
  {
    question: '¿Compran casas en Lancaster PA en español?',
    answer: 'Sí, hablamos español. According to the U.S. Census Bureau ACS, 40.6% of Lancaster City residents are Hispanic or Latino — the highest proportion of any market we serve. We serve the Lancaster community in both English and Spanish. Llámenos al 888-440-5250.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: 'USA Home Buyers is a Pennsylvania LLC. Every offer is a written purchase agreement — price, closing date, terms, signed by us. No verbal promises. You can verify our Pennsylvania business registration at corporations.pa.gov. We\'ve closed transactions throughout Lancaster County.',
  },
  {
    question: 'What are the recording fees when selling in Lancaster County?',
    answer: 'According to the Lancaster County Recorder of Deeds fee schedule (lancasterdeeds.com), recording a standard deed costs $71.25 for up to 4 pages, plus $2.00 per additional page. The office accepts electronic recording. When we buy your property, we cover all recording fees and closing costs.',
  },
  {
    question: 'What if my house has tenants who won\'t leave?',
    answer: 'We buy tenant-occupied properties. Lancaster City has a renter rate of approximately 51.4% — tenant situations are common in our market. We buy with tenants in place. The tenant situation becomes our responsibility after closing. You don\'t need to evict anyone before selling.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call you within hours during business hours. We\'ll ask about the property — condition, situation, your timeline. Within 24 hours you receive a written cash offer. No obligation, no pressure. If you accept, we choose a closing date together. We show up, you sign, you get paid.',
  },
];

export default function LancasterFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>FAQ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Frequently Asked Questions — Selling Your House Fast in Lancaster PA
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Common questions from Lancaster PA homeowners considering a cash sale. Prices, timelines,
          transfer tax, neighborhoods — answered with real numbers from real Lancaster data.
        </p>

        <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-brand-dark mb-1">Still have questions?</p>
          <p className="text-gray-700 text-sm mb-3">Call us directly — we answer 24/7.</p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-3 transition-colors">
            📞 {PHONE} — We Answer 24/7
          </a>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA Market Page</Link>
          <Link href="/markets/lancaster-pa/market-report" className="text-brand-primary hover:underline">Market Report →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Ready to Get Your Lancaster PA Cash Offer?" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
