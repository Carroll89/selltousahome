/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { daytonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/dayton-oh/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Dayton OH -- Sell Before Montgomery County Sheriff Sale',
  description: 'Facing foreclosure in Dayton OH? USA Home Buyers purchases homes before the Montgomery County sheriff sale -- cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell before foreclosure in Dayton OH?', answer: 'USA Home Buyers closes in as few as 7 days. Ohio judicial foreclosure -- Montgomery County Common Pleas Court; HB 130 mediation referral required. A cash sale before the sheriff sale preserves your equity and credit. Call 888-274-5006. Consult a licensed real estate attorney for your specific situation.' },
  { question: 'Will selling stop the foreclosure process?', answer: 'Yes -- a completed sale satisfies the mortgage and ends proceedings. You keep any equity above your payoff. Acting early in the process gives you the most options.' },
  { question: 'What is the foreclosure process in Montgomery County?', answer: 'Ohio judicial foreclosure -- Montgomery County Common Pleas Court; HB 130 mediation referral required. Consult a licensed real estate attorney for your specific situation.' },
  { question: 'What if I owe more than the house is worth?', answer: 'A short sale may be possible. Call 888-274-5006 and we\'ll walk through your specific payoff situation honestly.' },
  { question: 'What areas near Dayton do you serve?', answer: 'We serve all of Montgomery County and surrounding communities. Call 888-274-5006.' },
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

export default function DaytonForeclosurePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          daytonLocalBusinessSchema,
          articleSchema('Stop Foreclosure in Dayton OH -- Sell Before the Montgomery County Sheriff Sale', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/dayton-oh" className="hover:text-white">Dayton OH</Link>
              {' > '} Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Dayton OH -- Sell Before the Montgomery County Sheriff Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Facing foreclosure in Dayton OH? USA Home Buyers purchases homes before the Montgomery County sheriff sale -- cash offer in 24 hours.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Dayton OH Cash Offer" sourcePage="/markets/dayton-oh/foreclosure" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Stop Foreclosure Dayton OH -- Sell Before Montgomery County Sheriff Sale" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Dayton OH Home?" sourcePage="/markets/dayton-oh/foreclosure" />
      </div>
    </>
  );
}
