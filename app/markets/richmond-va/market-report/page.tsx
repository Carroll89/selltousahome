/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { richmondLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/richmond-va/market-report`;

export const metadata: Metadata = {
  title: 'Richmond VA Housing Market Report 2026 -- Home Prices & Trends',
  description: 'Richmond VA housing market data 2026. Median prices, days on market, and what it means for sellers in Richmond City (independent city).',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the median home price in Richmond VA?', answer: 'According to Redfin (March 2026), the median sale price in Richmond is $414,500 with 24 days on market and a sale-to-list ratio of 100.4%. Compete Score: 82/100.' },
  { question: 'Is Richmond a buyer\'s or seller\'s market?', answer: 'According to Redfin (March 2026), Richmond has a Compete Score of 82/100. Cash offers with no contingencies typically close faster and with more certainty in any market.' },
  { question: 'What closing costs do sellers pay in Richmond VA?', answer: 'State grantor\'s tax $0.50/$500 (seller); state recordation $0.25/$100 (buyer); Richmond City local add-on -- verify with settlement agent. USA Home Buyers covers all closing costs when we purchase.' },
  { question: 'How fast do homes sell in Richmond?', answer: 'According to Redfin (March 2026), the median days on market in Richmond is 24 days. Cash buyers typically close in 7-14 days.' },
  { question: 'Should I sell now or wait in Richmond?', answer: 'Market conditions change. If you need certainty, speed, or want to avoid repairs, a cash sale may be the right move regardless of market conditions. Call 888-274-5006 for a no-obligation offer.' },
];

const LINKS = [
  { href: '/markets/richmond-va/inherited-property', label: 'Inherited Property' },
  { href: '/markets/richmond-va/foreclosure', label: 'Foreclosure' },
  { href: '/markets/richmond-va/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/richmond-va/probate', label: 'Probate' },
  { href: '/markets/richmond-va/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/richmond-va/code-violations', label: 'Code Violations' },
  { href: '/markets/richmond-va/fire-damage', label: 'Fire Damage' },
  { href: '/markets/richmond-va', label: '<- Back to Richmond VA' },
];

export default function RichmondMarketReportPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          richmondLocalBusinessSchema,
          articleSchema('Richmond VA Housing Market 2026 -- What Sellers Need to Know', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/richmond-va" className="hover:text-white">Richmond VA</Link>
              {' > '} Market Report
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Richmond VA Housing Market 2026 -- What Sellers Need to Know
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Richmond VA housing market data 2026. Median prices, days on market, and what it means for sellers in Richmond City (independent city).</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Richmond VA Cash Offer" sourcePage="/markets/richmond-va/market-report" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Richmond VA Housing Market Report 2026 -- Home Prices & Trends" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Richmond VA Home?" sourcePage="/markets/richmond-va/market-report" />
      </div>
    </>
  );
}
