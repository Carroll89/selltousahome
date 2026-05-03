/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { fortWayneLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/fort-wayne-in/resources`;

export const metadata: Metadata = {
  title: 'Fort Wayne IN Seller Resources -- Guides, Market Data & Help',
  description: 'Seller resources for Fort Wayne IN homeowners -- market data, situation guides, and cash buyer information for Allen County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What resources does USA Home Buyers provide for Fort Wayne sellers?', answer: 'Local market data, situation-specific guides (probate, foreclosure, divorce, tenant-occupied), and a direct cash offer. Call 888-274-5006.' },
  { question: 'How do I know if a cash sale is right for me?', answer: 'A cash sale makes sense when you need speed, certainty, or want to avoid repairs and agent commissions. Call 888-274-5006 for an honest assessment.' },
  { question: 'What are the closing costs in Fort Wayne IN?', answer: 'No Indiana transfer tax (abolished 2009); Sales Disclosure Form required at recording. USA Home Buyers covers all closing costs when we purchase.' },
  { question: 'How do I get started?', answer: 'Fill out the form on this page or call 888-274-5006. We respond within business hours and send a written cash offer within 24 hours. No obligation.' },
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

export default function FortWayneResourcesPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          fortWayneLocalBusinessSchema,
          articleSchema('Fort Wayne IN Seller Resources', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/fort-wayne-in" className="hover:text-white">Fort Wayne IN</Link>
              {' > '} Resources
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Fort Wayne IN Seller Resources
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Seller resources for Fort Wayne IN homeowners -- market data, situation guides, and cash buyer information for Allen County.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Fort Wayne IN Cash Offer" sourcePage="/markets/fort-wayne-in/resources" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Fort Wayne IN Seller Resources -- Guides, Market Data & Help" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Fort Wayne IN Home?" sourcePage="/markets/fort-wayne-in/resources" />
      </div>
    </>
  );
}
