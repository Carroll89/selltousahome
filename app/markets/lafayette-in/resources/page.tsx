/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, lafayetteLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { LAFAYETTE_FAQ_ITEMS, LAFAYETTE_SITUATIONS } from '../shared';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/lafayette-in/resources`;

export const metadata: Metadata = {
  title: 'Lafayette IN Seller Resources | USA Home Buyers',
  description: 'Resources for Lafayette IN homeowners: market data, probate, foreclosure, seller costs, and cash offer help.',
  alternates: { canonical: pageUrl },
};

export default function LafayetteResourcesPage() {
  return (
    <>
      <SchemaMarkup schema={[lafayetteLocalBusinessSchema, articleSchema('Lafayette IN Seller Resources', pageUrl, '2026-05-19'), faqSchema(LAFAYETTE_FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/lafayette-in" className="hover:text-white">Lafayette IN</Link>
              {' > '} Resources
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Lafayette IN Seller Resources</h1>
            <p className="text-lg text-blue-100 mb-6">Market facts, seller-situation guides, Tippecanoe County context, and direct cash offer help.</p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 - We Answer 24/7
            </a>
          </div>
          <CashOfferForm variant="hero" headline="Get Your Lafayette IN Cash Offer" sourcePage="/markets/lafayette-in/resources" />
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Local Seller Links</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/markets/lafayette-in/market-report', label: 'Lafayette Market Report', desc: 'Price, days on market, Indiana transfer-tax context, and seller options.' },
              { href: '/blog/lafayette-in-sell-house-fast-2026', label: 'Lafayette Seller Guide 2026', desc: 'First-pass launch guide for homeowners comparing a listing with a direct cash offer.' },
              { href: '/resources/cash-offer-vs-listing', label: 'Cash Offer vs. Listing', desc: 'Compare speed, certainty, repairs, commissions, and net proceeds.' },
              { href: '/resources/sell-house-without-repairs', label: 'Sell Without Repairs', desc: 'General as-is sale guidance for homes that need work before a retail listing.' },
              { href: '/guides/back-taxes', label: 'Back Taxes and Liens', desc: 'How tax balances and liens can often be handled during title and closing.' },
              { href: '/guides/vacant-property', label: 'Vacant Property Guide', desc: 'Options when carrying a vacant home is becoming expensive or risky.' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-md transition-all">
                <h3 className="font-semibold text-brand-dark mb-1">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </Link>
            ))}
            {LAFAYETTE_SITUATIONS.map((s) => (
              <Link key={s.slug} href={`/markets/lafayette-in/${s.slug}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-md transition-all">
                <h3 className="font-semibold text-brand-dark mb-1">{s.label}</h3>
                <p className="text-sm text-gray-500">{s.description}</p>
              </Link>
            ))}
          </div>
        </section>
        <FAQSection items={LAFAYETTE_FAQ_ITEMS} heading="FAQs - Lafayette IN Seller Resources" />
        <CashOfferForm variant="footer" headline="Ready to Sell Your Lafayette IN Home?" sourcePage="/markets/lafayette-in/resources" />
      </div>
    </>
  );
}
