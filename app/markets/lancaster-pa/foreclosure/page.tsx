/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { lancasterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Lancaster PA — Sell Fast',
  description:
    'Facing foreclosure in Lancaster PA? Lancaster County\'s Foreclosure Diversion Program creates a window to sell. We buy houses before the sheriff sale. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/foreclosure` },
};

const articleSch = articleSchema(
  'How to Sell Your Lancaster PA House Before Foreclosure',
  `${SITE_URL}/markets/lancaster-pa/foreclosure`,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Lancaster County PA?',
    answer: 'Pennsylvania is a judicial foreclosure state. According to amerinotexchange.com, the typical timeline from first missed payment to sheriff\'s sale is approximately 270 days — about 9 months. Lancaster County\'s Foreclosure Diversion Program can extend this further by placing a hold on proceedings when a homeowner engages in counseling. There is no right of redemption after the sheriff\'s sale. Source: Lancaster County Courts Foreclosure Diversion Program (court.co.lancaster.pa.us/260).',
  },
  {
    question: 'What is Lancaster County\'s Foreclosure Diversion Program?',
    answer: 'When a foreclosure complaint is filed in Lancaster County, the court issues a Case Management Order that holds proceedings and requires housing counseling and a conciliation conference. According to the Lancaster County Courts website, this program actively extends timelines — but the hold is temporary. Sellers who want to exit cleanly use this window to find a buyer before proceedings resume.',
  },
  {
    question: 'Can I sell my house while in foreclosure in Lancaster PA?',
    answer: 'Yes, as long as you have equity or can negotiate with the lender. You retain the right to sell your property during the foreclosure process until the sheriff\'s sale is completed. A cash buyer like USA Home Buyers can close in 7-14 days — fast enough to stop the process in most circumstances. We work with sellers in all stages of the Lancaster County foreclosure timeline.',
  },
  {
    question: 'Will selling stop the foreclosure?',
    answer: 'Yes. If the sale closes before the sheriff\'s sale, the proceeds pay off the mortgage and any other liens. The foreclosure ends. You walk away with any remaining equity. No foreclosure on your record, no deficiency judgment from the lender.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'This is a short sale situation. We can still make a cash offer, but a short sale requires lender approval — the lender must agree to accept less than the full mortgage balance. This takes more time than a standard sale. Call us early in the process. The sooner we engage, the more options you have.',
  },
  {
    question: 'What Lancaster legal resources exist for homeowners in foreclosure?',
    answer: 'Pennsylvania Act 6 (Loan Interest and Protection Law, 41 P.S. §§ 101-605) provides certain protections for homeowners in default. HEMAP (Homeowner\'s Emergency Mortgage Assistance Program) provides loans to help catch up on mortgage payments in some cases. The Lancaster County Foreclosure Diversion Program provides free housing counseling. For legal aid, contact MidPenn Legal Services (midpennlegal.org), which serves Lancaster County.',
  },
];

export default function LancasterForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>Foreclosure</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Selling Your Lancaster PA House to Stop Foreclosure
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Lancaster County's Foreclosure Diversion Program gives homeowners a hold period —
          free housing counseling, a conciliation conference, a pause in proceedings.
          For some sellers, it's enough time to regroup. For others, it's the window
          to sell before the sheriff's sale and walk away with equity instead of a judgment.
          USA Home Buyers closes in 7-14 days. That's fast enough.
        </p>

        <CashOfferForm variant="inline" headline="Get a Cash Offer Before the Sheriff Sale" sourcePage="/markets/lancaster-pa" />

        {/* Lancaster foreclosure diversion program */}
        <section className="my-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Lancaster County's Foreclosure Diversion Program</h2>
          <p className="text-gray-700 mb-4">
            When a foreclosure complaint is filed in Lancaster County, the court automatically issues a
            Case Management Order. According to the{' '}
            <a href="https://www.court.co.lancaster.pa.us/260/Foreclosure-Diversion-Program" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              Lancaster County Courts Foreclosure Diversion Program
            </a>{' '}
            page, this order:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Places a hold on foreclosure proceedings</li>
            <li>Directs the homeowner to free housing counseling</li>
            <li>Schedules a conciliation conference between homeowner and lender</li>
          </ul>
          <p className="text-gray-700">
            This creates a window. Many homeowners use it to explore options — including selling.
            A cash sale can close before the conciliation conference, ending the process entirely.
          </p>
        </section>

        {/* PA foreclosure timeline */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Pennsylvania Foreclosure Timeline</h2>
          <div className="space-y-4">
            {[
              { phase: 'Missed payments (Month 1-3)', desc: 'Lender sends notices of default. Pennsylvania law (Act 6) requires specific notice procedures before foreclosure can be filed.' },
              { phase: 'Foreclosure complaint filed', desc: 'Lender files complaint with Lancaster County Court. Lancaster County issues Case Management Order — Foreclosure Diversion Program hold begins.' },
              { phase: 'Diversion period (varies)', desc: 'Homeowner attends housing counseling, conciliation conference. This window can extend the timeline by 60-90 days or more.' },
              { phase: 'Default judgment / order of sale', desc: 'If no resolution, court enters judgment. Approximately 5-9 months into the process.' },
              { phase: 'Sheriff\'s sale', desc: 'Property sold at public auction, typically around 270 days (9 months) from first missed payment. No right of redemption after sale. Source: amerinotexchange.com' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-brand-light rounded-xl">
                <div className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-1.5" />
                <div>
                  <p className="font-bold text-brand-dark">{item.phase}</p>
                  <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Sources:{' '}
            <a href="https://www.amerinotexchange.com/foreclosure-law/pennsylvania/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">amerinotexchange.com — Pennsylvania Foreclosure Laws</a>
            {'; '}
            <a href="https://www.court.co.lancaster.pa.us/260/Foreclosure-Diversion-Program" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Lancaster County Courts</a>
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Foreclosure in Lancaster County PA" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA</Link>
          <Link href="/guides/foreclosure" className="text-brand-primary hover:underline">Full Foreclosure Guide →</Link>
          <Link href="/guides/behind-on-payments" className="text-brand-primary hover:underline">Behind on Payments Guide →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Don't Wait for the Sheriff Sale — Get a Cash Offer Today" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
