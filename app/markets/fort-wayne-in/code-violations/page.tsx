/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { fortWayneLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/fort-wayne-in/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Fort Wayne IN -- As-Is Cash Buyers',
  description: 'House with code violations in Fort Wayne IN? USA Home Buyers buys as-is -- no repairs required, cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Will you buy a house with open code violations in Fort Wayne?', answer: 'Yes. USA Home Buyers purchases properties with open code violations, outstanding permits, unpaid fines, and unsafe structures as-is. The violations are factored into our offer. Call 888-274-5006.' },
  { question: 'Do I need to fix violations before selling?', answer: 'No. We buy as-is, violations included. You do not need to repair anything or obtain a certificate of occupancy to sell to USA Home Buyers.' },
  { question: 'What types of violations do you buy?', answer: 'Structural issues, fire code violations, electrical and plumbing deficiencies, exterior maintenance orders, unsafe roof, lead paint citations, mold, and any other open matter.' },
  { question: 'Can code violations prevent a conventional sale from closing?', answer: 'With a conventional buyer, yes -- lenders often require violations to be cleared. With USA Home Buyers (cash), there are no lender conditions. We close on the property as-is.' },
  { question: 'How fast can you close?', answer: 'As few as 7 days from accepted offer. Call 888-274-5006.' },
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

export default function FortWayneCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          fortWayneLocalBusinessSchema,
          articleSchema('Sell a House With Code Violations in Fort Wayne IN -- We Buy As-Is', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/fort-wayne-in" className="hover:text-white">Fort Wayne IN</Link>
              {' > '} Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a House With Code Violations in Fort Wayne IN -- We Buy As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">House with code violations in Fort Wayne IN? USA Home Buyers buys as-is -- no repairs required, cash offer in 24 hours.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Fort Wayne IN Cash Offer" sourcePage="/markets/fort-wayne-in/code-violations" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Sell House With Code Violations Fort Wayne IN -- As-Is Cash Buyers" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Fort Wayne IN Home?" sourcePage="/markets/fort-wayne-in/code-violations" />
      </div>
    </>
  );
}
