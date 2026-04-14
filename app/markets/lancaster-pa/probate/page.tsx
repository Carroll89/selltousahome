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
    answer: 'In Lancaster County, probate runs through the Register of Wills and Clerk of Orphans\' Court at 50 N. Duke St. (717-299-8243). The executor files for Letters Testamentary (with a will) or Letters of Administration (without a will). Once granted, the executor has legal authority to sell real property on behalf of the estate. According to the Lancaster County Register of Wills website (co.lancaster.pa.us/159/Register-of-Wills), a new fee bill took effect January 1, 2026.',
  },
  {
    question: 'Can I sell a Lancaster house before probate is complete?',
    answer: 'Not typically. Title cannot legally transfer until the executor has authority from the court. However, you can receive a written cash offer now and have a buyer ready to close the moment probate is granted. We work with Lancaster County estate attorneys and can coordinate timing to minimize delays.',
  },
  {
    question: 'Do I need to fix or clean out the property before selling in probate?',
    answer: 'No. Estate properties in Lancaster City often have decades of accumulated belongings, outdated systems, and deferred maintenance. We buy probate properties as-is — you don\'t need to clean out furniture, personal items, or decades of belongings. Leave what you don\'t want.',
  },
  {
    question: 'What if the estate has multiple beneficiaries?',
    answer: 'All beneficiaries with an interest in the estate must ultimately consent to the sale, either directly or through the executor\'s authority granted by the court. We provide a clear written offer that makes it easy for all parties to review and agree. A single written number with a defined closing date often resolves family disagreements faster than an open market listing.',
  },
  {
    question: 'How long does it take to sell a Lancaster probate property?',
    answer: 'Once the executor has Letters Testamentary or Letters of Administration, we can close in as few as 7-14 days. The probate process itself — from filing to letters being granted — can take anywhere from a few weeks for simple, uncontested estates to several months for complex ones. We\'re ready to move quickly once you have the authority.',
  },
];

export default function LancasterProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          Probate real estate sales in Lancaster County follow a specific legal process through the Register of Wills.
          USA Home Buyers works with executors, estate attorneys, and heirs throughout Lancaster County and Lancaster City
          to provide a clean cash sale that fits the court timeline — no repairs, no cleanout, no open houses.
        </p>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for the Lancaster Probate Property" sourcePage="/markets/lancaster-pa" />

        {/* Register of Wills info */}
        <section className="my-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Lancaster County Register of Wills</h2>
          <p className="text-gray-700 mb-4">
            Lancaster County uses the standard Pennsylvania Register of Wills model — not Philadelphia's Orphans' Court
            Division structure. The Register of Wills handles probate (Letters Testamentary, Letters of Administration,
            guardianships). The Clerk of Orphans' Court (same office) handles formal Orphans' Court proceedings.
          </p>
          <div className="bg-white rounded-xl border border-blue-100 p-4">
            <p className="font-bold text-brand-dark">Lancaster County Register of Wills and Clerk of Orphans' Court</p>
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
            is where many probate situations arise. These properties have often been in families for multiple generations,
            passing from grandparents to parents to heirs who may live out of state. The city's 40.6% Hispanic population
            (ACS 2024) also means many probate situations involve family members navigating a process in their second language.
            We serve the Lancaster community in both English and Spanish.
          </p>
          <p className="text-gray-700 mb-4">
            Rural Lancaster County presents a different probate challenge: farmhouses, bank barns, and agricultural land
            that has been in Pennsylvania Dutch Country families for generations. These estates require a buyer who
            understands both the rural market and the estate process — and who won't demand cleanout of a property
            that has served as a working farm for a century.
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
