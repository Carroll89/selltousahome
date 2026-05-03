/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { stLouisLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/st-louis-mo/market-report`;

export const metadata: Metadata = {
  title: 'St. Louis MO Housing Market Report 2026 -- Home Prices & Trends',
  description: 'St. Louis MO housing market data 2026. Median prices, days on market, and what it means for sellers in St. Louis City (independent city).',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the median home price in St. Louis MO?', answer: 'According to Redfin (March 2026), the median sale price in St. Louis is $250,000 with 31 days on market and a sale-to-list ratio of 98.5%. Compete Score: 73/100.' },
  { question: 'Is St. Louis a buyer\'s or seller\'s market?', answer: 'According to Redfin (March 2026), St. Louis has a Compete Score of 73/100. Cash offers with no contingencies typically close faster and with more certainty in any market.' },
  { question: 'What closing costs do sellers pay in St. Louis MO?', answer: 'No Missouri state or local transfer tax. USA Home Buyers covers all closing costs when we purchase.' },
  { question: 'How fast do homes sell in St. Louis?', answer: 'According to Redfin (March 2026), the median days on market in St. Louis is 31 days. Cash buyers typically close in 7-14 days.' },
  { question: 'Should I sell now or wait in St. Louis?', answer: 'Market conditions change. If you need certainty, speed, or want to avoid repairs, a cash sale may be the right move regardless of market conditions. Call 888-274-5006 for a no-obligation offer.' },
];

const LINKS = [
  { href: '/markets/st-louis-mo/inherited-property', label: 'Inherited Property' },
  { href: '/markets/st-louis-mo/foreclosure', label: 'Foreclosure' },
  { href: '/markets/st-louis-mo/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/st-louis-mo/probate', label: 'Probate' },
  { href: '/markets/st-louis-mo/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/st-louis-mo/code-violations', label: 'Code Violations' },
  { href: '/markets/st-louis-mo/fire-damage', label: 'Fire Damage' },
  { href: '/markets/st-louis-mo', label: '<- Back to St. Louis MO' },
];

export default function StLouisMarketReportPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          stLouisLocalBusinessSchema,
          articleSchema('St. Louis MO Housing Market 2026 -- What Sellers Need to Know', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/st-louis-mo" className="hover:text-white">St. Louis MO</Link>
              {' > '} Market Report
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              St. Louis MO Housing Market 2026 -- What Sellers Need to Know
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">St. Louis MO housing market data 2026. Median prices, days on market, and what it means for sellers in St. Louis City (independent city).</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your St. Louis MO Cash Offer" sourcePage="/markets/st-louis-mo/market-report" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- St. Louis MO Housing Market Report 2026 -- Home Prices & Trends" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your St. Louis MO Home?" sourcePage="/markets/st-louis-mo/market-report" />
      </div>
    </>
  );
}
