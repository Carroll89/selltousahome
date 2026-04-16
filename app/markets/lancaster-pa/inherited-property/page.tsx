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
  title: 'Sell Inherited House Lancaster PA',
  description:
    'Inherited a house in Lancaster PA? We buy inherited properties as-is — rowhouses, farmsteads, estate sales. Cash offer in 24 hours. Work with Lancaster County Register of Wills.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/inherited-property` },
};

const articleSch = articleSchema(
  'Selling an Inherited House in Lancaster PA',
  `${SITE_URL}/markets/lancaster-pa/inherited-property`,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'Can I sell an inherited house in Lancaster PA before probate is complete?',
    answer: 'Not typically. In Pennsylvania, the estate must go through probate before legal title can transfer to a buyer. The Lancaster County Register of Wills (50 N. Duke St., 717-299-8243) handles probate filings. Once Letters Testamentary or Letters of Administration are issued, the executor has authority to sell. We work with executors throughout Lancaster County regularly — call us and we\'ll walk through the timeline with you.',
  },
  {
    question: 'What is Lancaster County\'s probate process?',
    answer: 'Lancaster County uses the standard Pennsylvania probate structure through the Register of Wills and Clerk of Orphans\' Court at 50 N. Duke Street. The executor files for Letters Testamentary (with a will) or Letters of Administration (without a will). Once granted, the executor can legally sell real property. According to the Lancaster County Register of Wills website (co.lancaster.pa.us/159/Register-of-Wills), a new fee bill took effect January 1, 2026 — the JCP fee increased to $41.25 effective December 1, 2025.',
  },
  {
    question: 'Do I need to clean out or repair the inherited house before selling?',
    answer: 'No. We buy Lancaster inherited properties as-is — furniture, personal property, and all. Leave whatever you don\'t want. Cabbage Hill and West End rowhouses with deferred maintenance, aging boilers, outdated wiring, and years of accumulated belongings are exactly what we buy every week. No cleanout required, no repairs, no staging.',
  },
  {
    question: 'What if the inherited house has tenants?',
    answer: 'We buy tenant-occupied properties too. The sale transfers ownership; existing leases go with the property under Pennsylvania landlord-tenant law. We handle the tenant situation after closing. You don\'t need to manage it.',
  },
  {
    question: 'How long does it take to close on an inherited Lancaster property?',
    answer: 'Once the executor has legal authority to sell, we can close in as few as 7-14 days. The probate timeline itself varies — simple, uncontested estates with a clear will can move quickly. We can coordinate with the estate attorney and be ready to close the moment the executor is authorized.',
  },
  {
    question: 'What if there are multiple heirs who need to agree?',
    answer: 'All heirs with an ownership interest in the estate must agree to the sale. We\'re experienced working with multi-heir situations — we can provide the written offer and let the family review it together. The clarity of a single written number, with a defined closing date, often helps families reach agreement faster than an agent listing does.',
  },
];

export default function LancasterInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">If you inherited a house in Lancaster, PA, you likely need to complete probate through the Lancaster County Register of Wills before selling — unless the property was held jointly or in a living trust. Lancaster County probate typically runs 10–15 months. USA Home Buyers buys inherited properties in Lancaster as-is — no repairs, no cleanout, and we work around your probate timeline.</p>
        </div>

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>Inherited Property</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell an Inherited House in Lancaster PA — Cash, As-Is, No Cleanout
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Inheriting a Lancaster property — a Cabbage Hill rowhouse, a West End twin, a rural farmstead in Lancaster County —
          puts you in charge of something complicated at an already difficult time. USA Home Buyers works with
          executors and heirs throughout Lancaster County to provide a clean, straightforward cash sale.
          No repairs, no cleanout, no open houses.
        </p>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for the Inherited Lancaster Property" sourcePage="/markets/lancaster-pa" />

        {/* What makes Lancaster inherited sales unique */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Lancaster Inherited Properties Are Different</h2>
          <p className="text-gray-700 mb-4">
            Lancaster City's housing stock is mostly pre-1940 brick construction. These homes have character —
            original woodwork, stone fireplaces, solid brick walls built to last. They also have aging systems:
            knob-and-tube wiring that hasn't been touched in 50 years, cast iron plumbing, boilers that last ran
            reliably when the original owner was alive. When a property passes through an estate, deferred
            maintenance gets inherited along with it.
          </p>
          <p className="text-gray-700 mb-4">
            Lancaster County also has a significant rural inheritance situation. According to Lancaster County
            government data, the county contains thousands of acres of farmland — much of it in Pennsylvania
            Dutch Country. When a farmer or long-time rural landowner passes, the estate often includes farmhouses,
            bank barns, and outbuildings that have been in the family for generations. These properties require
            a buyer who understands both the rural Lancaster market and the estate process.
          </p>
        </section>

        {/* Lancaster County Register of Wills info */}
        <section className="my-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Lancaster County Register of Wills</h2>
          <p className="text-gray-700 mb-4">
            Pennsylvania probate in Lancaster County runs through the Register of Wills and Clerk of Orphans' Court.
            This is different from Philadelphia, which uses the Orphans' Court Division — Lancaster uses the
            standard county Register of Wills model.
          </p>
          <div className="bg-white rounded-xl border border-blue-100 p-4 mb-4">
            <p className="font-bold text-brand-dark">Lancaster County Register of Wills</p>
            <p className="text-sm text-gray-700">Lancaster County Courthouse, 50 N. Duke St., Lancaster, PA 17602</p>
            <p className="text-sm text-gray-700">Phone: (717) 299-8243</p>
            <a href="https://co.lancaster.pa.us/159/Register-of-Wills" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:underline">
              co.lancaster.pa.us/159/Register-of-Wills
            </a>
            <p className="text-sm text-gray-500 mt-2">New fee bill effective 1/1/2026 — JCP fee: $41.25 effective 12/1/2025</p>
          </div>
          <p className="text-sm text-gray-600">
            According to the{' '}
            <a href="https://co.lancaster.pa.us/159/Register-of-Wills" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              Lancaster County Register of Wills
            </a>
            , you can search open cases online at paperless.lancastercountypa.gov. Once Letters Testamentary or
            Letters of Administration are issued, the executor can authorize a sale.
          </p>
        </section>

        {/* Process */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How the Process Works for Inherited Properties</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Confirm executor authority', desc: 'The estate executor needs Letters Testamentary or Letters of Administration from the Lancaster County Register of Wills before a sale can close. If that\'s in progress, we can provide a written offer now and be ready to close the moment authority is granted.' },
              { step: '2', title: 'Property walkthrough', desc: 'We tour the Lancaster property — we\'re familiar with Cabbage Hill rowhouses, West End twins, and rural Lancaster County farmsteads. Condition doesn\'t disqualify a property.' },
              { step: '3', title: 'Written cash offer within 24 hours', desc: 'You receive a formal written purchase agreement — price, closing date, terms. No verbal promises. The offer stands; no post-walkthrough renegotiation.' },
              { step: '4', title: 'Close on your schedule', desc: 'We coordinate with the estate attorney. Closing happens at a Lancaster County title company. Heirs receive proceeds, estate is settled.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 bg-brand-light rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-brand-dark">{item.title}</p>
                  <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Properties in Lancaster PA" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA</Link>
          <Link href="/markets/lancaster-pa/probate" className="text-brand-primary hover:underline">Lancaster Probate Sales →</Link>
          <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Full Inherited Property Guide →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Ready to Sell the Inherited Lancaster Property?" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
