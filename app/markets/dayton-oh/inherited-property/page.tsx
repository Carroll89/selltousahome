/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { daytonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/dayton-oh/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Dayton OH -- Estate Sales Montgomery County',
  description: 'Inherited a house in Dayton OH? We buy inherited properties through Montgomery County probate -- cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell an inherited house in Dayton before probate is complete?', answer: 'You can accept an offer before probate closes, but the deed cannot transfer until the executor has authority from the court. We make a cash offer immediately and schedule closing when your legal authority is in hand.' },
  { question: 'Where is the probate court in Montgomery County?', answer: 'Montgomery County Probate Court, 41 N. Perry St., Dayton OH 45422, (937) 225-4640.' },
  { question: 'How long does probate take in Montgomery County?', answer: 'Uncontested probate typically takes 3-9 months for a straightforward estate. You don\'t need to wait for the full estate settlement -- once the executor has authority, a sale can proceed.' },
  { question: 'Are we out-of-state heirs -- can we sell remotely?', answer: 'Yes. Out-of-state heirs sell Dayton houses remotely regularly. We coordinate with the estate attorney and can accommodate remote closings. Call 888-274-5006.' },
  { question: 'What transfer tax applies to estate sales in Dayton?', answer: 'Montgomery County conveyance fee: $4.00/$1,000 + $0.50/parcel. USA Home Buyers covers all closing costs when we purchase.' },
];

const LINKS = [
  { href: '/markets/dayton-oh/inherited-property', label: 'Inherited Property' },
  { href: '/markets/dayton-oh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/dayton-oh/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/dayton-oh/probate', label: 'Probate' },
  { href: '/markets/dayton-oh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/dayton-oh/code-violations', label: 'Code Violations' },
  { href: '/markets/dayton-oh/fire-damage', label: 'Fire Damage' },
  { href: '/markets/dayton-oh', label: '<- Back to Dayton OH' },
];

export default function DaytonInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          daytonLocalBusinessSchema,
          articleSchema('Sell an Inherited House in Dayton OH -- Montgomery County Estate Sale', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/dayton-oh" className="hover:text-white">Dayton OH</Link>
              {' > '} Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in Dayton OH -- Montgomery County Estate Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Inherited a house in Dayton OH? We buy inherited properties through Montgomery County probate -- cash offer in 24 hours.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Dayton OH Cash Offer" sourcePage="/markets/dayton-oh/inherited-property" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Sell Inherited House Dayton OH -- Estate Sales Montgomery County" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Dayton OH Home?" sourcePage="/markets/dayton-oh/inherited-property" />
      </div>
    </>
  );
}
