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
  title: 'Sell Probate Property Lancaster PA — Cash Offer',
  description:
    'Selling a probate property in Lancaster PA? We work with Lancaster County Register of Wills and estate executors. Cash offer in 24 hours, as-is, no repairs or cleanout.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/probate` },
};

const articleSch = articleSchema(
  'Selling a Probate Property in Lancaster PA',
  `${SITE_URL}/markets/lancaster-pa/probate`,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'What is the probate process for selling a house in Lancaster County PA?',
    answer: 'According to the Lancaster County Register of Wills, that office provides probate of decedent estates and Clerk of Orphans\' Court services at the Lancaster County Courthouse. A personal representative may receive Letters Testamentary or Letters of Administration; once authority is granted, they can act for the estate, which may include selling real property. According to the Lancaster County Register of Wills website (co.lancaster.pa.us/159/Register-of-Wills), a new fee bill took effect January 1, 2026.',
  },
  {
    question: 'Can I sell a Lancaster house before probate is complete?',
    answer: 'Not typically. Title generally cannot transfer from an estate until the personal representative has authority and the title company is satisfied. However, you can receive a written cash offer now and have a buyer ready to close the moment probate is granted. We work with Lancaster County estate attorneys and can coordinate timing to minimize delays.',
  },
  {
    question: 'Do I need to fix or clean out the property before selling in probate?',
    answer: 'No. Estate properties in Lancaster City may have accumulated belongings, outdated systems, and deferred maintenance. We buy probate properties as-is — you don\'t need to clean out furniture, personal items, or decades of belongings. Leave what you don\'t want.',
  },
  {
    question: 'What if the estate has multiple beneficiaries?',
    answer: "Required consents depend on the deed, will, and personal representative's authority granted by the Register of Wills or Orphans' Court. We provide a clear written offer that makes it easy for all parties to review and agree. A single written number with a defined closing date can be easier for families to evaluate than an open market listing.",
  },
  {
    question: 'How long does it take to sell a Lancaster probate property?',
    answer: 'Once the personal representative has Letters Testamentary or Letters of Administration, we can often close in 7-14 days if title is clear. Probate timing varies by filing completeness, estate complexity, disputes, and county processing. We\'re ready to move quickly once you have the authority.',
  },
];

export default function LancasterProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">You can sell a house in probate in Lancaster, PA — once the personal representative has authority from the Lancaster County Register of Wills. Probate timing varies by estate complexity, filing completeness, tax issues, and county processing. You can often sign a purchase agreement now and close once the estate has authority and title is ready. USA Home Buyers works with Lancaster County estate executors regularly.</p>
        </div>

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>Probate Sale</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Selling a Probate Property in Lancaster PA
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Probate real estate sales in Lancaster County generally involve the Register of Wills process and title-company review.
          USA Home Buyers works with executors, estate attorneys, and heirs throughout Lancaster County and Lancaster City
          to provide a clean cash sale that fits the court timeline — no repairs, no cleanout, no open houses.
        </p>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for the Lancaster Probate Property" sourcePage="/markets/lancaster-pa" />

        {/* Register of Wills info */}
        <section className="my-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Lancaster County Register of Wills</h2>
          <p className="text-gray-700 mb-4">
            According to Lancaster County, the Register of Wills' Office and Clerk of the Orphans' Court Office provide probate of decedent estates, inheritance tax collection, marriage licenses, and estate-related records.
            The Register of Wills handles probate-related filings; the Clerk of Orphans\' Court handles Orphans' Court filings and records.
          </p>
          <div className="bg-white rounded-xl border border-blue-100 p-4">
            <p className="font-bold text-brand-dark">Lancaster County Register of Wills and Clerk of Orphans\' Court</p>
            <p className="text-sm text-gray-700">Lancaster County Courthouse, 50 N. Duke St., P.O. Box 83480</p>
            <p className="text-sm text-gray-700">Lancaster, PA 17602</p>
            <p className="text-sm text-gray-700">Phone: (717) 299-8243</p>
            <a href="https://co.lancaster.pa.us/159/Register-of-Wills" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:underline block mt-1">
              co.lancaster.pa.us/159/Register-of-Wills
            </a>
            <a href="https://paperless.lancastercountypa.gov/psi3/v/search/case" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:underline block">
              Online case search: paperless.lancastercountypa.gov
            </a>
            <p className="text-sm text-gray-500 mt-2">New fee bill effective 1/1/2026. JCP fee: $41.25 (effective 12/1/2025).</p>
          </div>
        </section>

        {/* What makes Lancaster probate unique */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Makes Lancaster Probate Properties Different</h2>
          <p className="text-gray-700 mb-4">
            Lancaster City's pre-1940 rowhouse stock — concentrated in Cabbage Hill, West End, and Southeast Lancaster —
            is where many probate situations arise. These properties may have been in families for multiple generations,
            passing from grandparents to parents to heirs who may live out of state. According to DataUSA\'s ACS-derived Lancaster profile, the city has a 40.6% Hispanic population, so some probate situations may involve family members navigating the process in their second language.
            We serve the Lancaster community in both English and Spanish.
          </p>
          <p className="text-gray-700 mb-4">
            Rural Lancaster County presents a different probate challenge: farmhouses, bank barns, and agricultural land
            that has been in Pennsylvania Dutch Country families for generations. These estates require a buyer who
            understands both the rural market and the estate process — and who won't demand cleanout of a property
            that may have served as a working farm for generations.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Probate Sales in Lancaster County PA" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA</Link>
          <Link href="/markets/lancaster-pa/inherited-property" className="text-brand-primary hover:underline">Inherited Property →</Link>
          <Link href="/guides/probate" className="text-brand-primary hover:underline">Full Probate Guide →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Ready to Move Forward on the Probate Sale?" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
