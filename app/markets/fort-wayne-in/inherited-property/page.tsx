/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { fortWayneLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/fort-wayne-in/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Fort Wayne IN -- Estate Sales Allen County',
  description: 'Inherited a house in Fort Wayne IN? We buy inherited properties through Allen County probate -- cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell an inherited house in Fort Wayne before probate is complete?', answer: 'You can accept an offer before probate closes, but the deed cannot transfer until the executor has authority from the court. We make a cash offer immediately and schedule closing when your legal authority is in hand.' },
  { question: 'Where is the probate court in Allen County?', answer: 'Allen County Circuit Court (Probate Division), 715 S. Calhoun St., Fort Wayne IN 46802, (260) 449-4246.' },
  { question: 'How long does probate take in Allen County?', answer: 'Uncontested probate typically takes 3-9 months for a straightforward estate. You don\'t need to wait for the full estate settlement -- once the executor has authority, a sale can proceed.' },
  { question: 'Are we out-of-state heirs -- can we sell remotely?', answer: 'Yes. Out-of-state heirs sell Fort Wayne houses remotely regularly. We coordinate with the estate attorney and can accommodate remote closings. Call 888-274-5006.' },
  { question: 'What transfer tax applies to estate sales in Fort Wayne?', answer: 'No Indiana transfer tax (abolished 2009); Sales Disclosure Form required at recording. USA Home Buyers covers all closing costs when we purchase.' },
];

const LINKS = [
  { href: '/markets/fort-wayne-in/inherited-property', label: 'Inherited Property' },
  { href: '/markets/fort-wayne-in/foreclosure', label: 'Foreclosure' },
  { href: '/markets/fort-wayne-in/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/fort-wayne-in/probate', label: 'Probate' },
  { href: '/markets/fort-wayne-in/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/fort-wayne-in/code-violations', label: 'Code Violations' },
  { href: '/markets/fort-wayne-in/fire-damage', label: 'Fire Damage' },
  { href: '/markets/fort-wayne-in', label: '<- Back to Fort Wayne IN' },
];

export default function FortWayneInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          fortWayneLocalBusinessSchema,
          articleSchema('Sell an Inherited House in Fort Wayne IN -- Allen County Estate Sale', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/fort-wayne-in" className="hover:text-white">Fort Wayne IN</Link>
              {' > '} Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in Fort Wayne IN -- Allen County Estate Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Inherited a house in Fort Wayne IN? We buy inherited properties through Allen County probate -- cash offer in 24 hours.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Fort Wayne IN Cash Offer" sourcePage="/markets/fort-wayne-in/inherited-property" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Sell Inherited House Fort Wayne IN -- Estate Sales Allen County" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Fort Wayne IN Home?" sourcePage="/markets/fort-wayne-in/inherited-property" />
      </div>
    </>
  );
}
