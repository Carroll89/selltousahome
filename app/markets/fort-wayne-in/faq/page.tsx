/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { fortWayneLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/fort-wayne-in/faq`;

export const metadata: Metadata = {
  title: 'FAQs -- Selling a House in Fort Wayne IN',
  description: 'Common questions about selling your house fast for cash in Fort Wayne IN. Allen County market specifics and process information.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Fort Wayne IN?', answer: 'USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours. Call 888-274-5006.' },
  { question: 'How much will you pay for my Fort Wayne home?', answer: 'For average-condition properties, cash offers typically land around 70–80% of fair market value — before factoring in repair costs, property condition, title issues, holding costs, and risk adjustments specific to your home. We cover all closing costs.' },
  { question: 'What closing costs apply when selling in Fort Wayne IN?', answer: 'No Indiana transfer tax (abolished 2009); Sales Disclosure Form required at recording. When you sell to USA Home Buyers, we cover all closing costs.' },
  { question: 'Do I need to make repairs?', answer: 'No. We buy in any condition -- no repairs, no cleaning, no staging required.' },
  { question: 'How does the IN foreclosure process work?', answer: 'Indiana judicial-only foreclosure -- Allen County Superior Court; ~6-12 months; no non-judicial option. Consult a licensed real estate attorney for your specific situation.' },
  { question: 'How does probate work in Allen County?', answer: 'Allen County Circuit Court (Probate Division), 715 S. Calhoun St., Fort Wayne IN 46802, (260) 449-4246. Cash buyers can purchase probate properties directly once the court authorizes the sale.' },
  { question: 'What happens after I submit the form?', answer: 'We call within business hours and send a written cash offer within 24 hours. No pressure.' },
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

export default function FortWayneFaqPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          fortWayneLocalBusinessSchema,
          articleSchema('FAQs -- Selling a House Fast in Fort Wayne IN', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/fort-wayne-in" className="hover:text-white">Fort Wayne IN</Link>
              {' > '} Faq
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              FAQs -- Selling a House Fast in Fort Wayne IN
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Common questions about selling your house fast for cash in Fort Wayne IN. Allen County market specifics and process information.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Fort Wayne IN Cash Offer" sourcePage="/markets/fort-wayne-in/faq" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- FAQs -- Selling a House in Fort Wayne IN" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Fort Wayne IN Home?" sourcePage="/markets/fort-wayne-in/faq" />
      </div>
    </>
  );
}
