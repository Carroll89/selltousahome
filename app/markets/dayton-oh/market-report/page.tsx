/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { daytonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/dayton-oh/market-report`;

export const metadata: Metadata = {
  title: 'Dayton OH Housing Market Report 2026 -- Home Prices & Trends',
  description: 'Dayton OH housing market data 2026. Median prices, days on market, and what it means for sellers in Montgomery County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the median home price in Dayton OH?', answer: 'According to Redfin (March 2026), the median sale price in Dayton is $130,000 with 63 days on market and a sale-to-list ratio of 95.7%. Compete Score: 62/100.' },
  { question: 'Is Dayton a buyer\'s or seller\'s market?', answer: 'According to Redfin (March 2026), Dayton has a Compete Score of 62/100. Cash offers with no contingencies typically close faster and with more certainty in any market.' },
  { question: 'What closing costs do sellers pay in Dayton OH?', answer: 'Montgomery County conveyance fee: $4.00/$1,000 + $0.50/parcel. USA Home Buyers covers all closing costs when we purchase.' },
  { question: 'How fast do homes sell in Dayton?', answer: 'According to Redfin (March 2026), the median days on market in Dayton is 63 days. Cash buyers typically close in 7-14 days.' },
  { question: 'Should I sell now or wait in Dayton?', answer: 'Market conditions change. If you need certainty, speed, or want to avoid repairs, a cash sale may be the right move regardless of market conditions. Call 888-274-5006 for a no-obligation offer.' },
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

export default function DaytonMarketReportPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          daytonLocalBusinessSchema,
          articleSchema('Dayton OH Housing Market 2026 -- What Sellers Need to Know', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/dayton-oh" className="hover:text-white">Dayton OH</Link>
              {' > '} Market Report
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Dayton OH Housing Market 2026 -- What Sellers Need to Know
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Dayton OH housing market data 2026. Median prices, days on market, and what it means for sellers in Montgomery County.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Dayton OH Cash Offer" sourcePage="/markets/dayton-oh/market-report" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Dayton OH Housing Market Report 2026 -- Home Prices & Trends" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Dayton OH Home?" sourcePage="/markets/dayton-oh/market-report" />
      </div>
    </>
  );
}
