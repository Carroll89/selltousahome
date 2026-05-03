/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { daytonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/dayton-oh/resources`;

export const metadata: Metadata = {
  title: 'Dayton OH Seller Resources -- Guides, Market Data & Help',
  description: 'Seller resources for Dayton OH homeowners -- market data, situation guides, and cash buyer information for Montgomery County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What resources does USA Home Buyers provide for Dayton sellers?', answer: 'Local market data, situation-specific guides (probate, foreclosure, divorce, tenant-occupied), and a direct cash offer. Call 888-274-5006.' },
  { question: 'How do I know if a cash sale is right for me?', answer: 'A cash sale makes sense when you need speed, certainty, or want to avoid repairs and agent commissions. Call 888-274-5006 for an honest assessment.' },
  { question: 'What are the closing costs in Dayton OH?', answer: 'Montgomery County conveyance fee: $4.00/$1,000 + $0.50/parcel. USA Home Buyers covers all closing costs when we purchase.' },
  { question: 'How do I get started?', answer: 'Fill out the form on this page or call 888-274-5006. We respond within business hours and send a written cash offer within 24 hours. No obligation.' },
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

export default function DaytonResourcesPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          daytonLocalBusinessSchema,
          articleSchema('Dayton OH Seller Resources', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/dayton-oh" className="hover:text-white">Dayton OH</Link>
              {' > '} Resources
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Dayton OH Seller Resources
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Seller resources for Dayton OH homeowners -- market data, situation guides, and cash buyer information for Montgomery County.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Dayton OH Cash Offer" sourcePage="/markets/dayton-oh/resources" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Dayton OH Seller Resources -- Guides, Market Data & Help" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Dayton OH Home?" sourcePage="/markets/dayton-oh/resources" />
      </div>
    </>
  );
}
