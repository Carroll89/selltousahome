/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bostonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied Property Boston MA — No Eviction Needed',
  description: 'Selling a rental in Boston with tenants? We buy tenant-occupied properties for cash. No eviction required. Close in 7-14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Do I need to evict tenants before selling in Boston?', answer: 'No. We buy with tenants in place. Massachusetts eviction through Boston Housing Court takes months — the summary process requires a 14-day notice to quit, then a court hearing, then a 10-day appeal period. We skip all of that.' },
  { question: 'Will you buy with non-paying tenants?', answer: 'Yes. Non-paying tenants, lease violations, holdover tenants — we buy regardless. The tenant situation is factored into our offer.' },
  { question: 'What about Boston\'s rent control history?', answer: 'Massachusetts ended rent control statewide in 1994, but Boston\'s rental market is still heavily regulated. We understand the tenant protections under MGL Ch. 186 and factor them into our purchase approach.' },
  { question: 'What happens to tenants after you buy?', answer: 'We honor existing leases where legally required. Our approach varies by situation.' },
];

export default function BostonTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, articleSchema('Sell a Tenant-Occupied Property in Boston MA', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › Tenant-Occupied</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Tenant-Occupied Property in Boston MA — No Eviction Needed</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Done being a landlord in Boston? We buy tenant-occupied properties for cash — tenants in place, no eviction. Written offer in 24 hours. Close in 7-14 days. Call 888-440-5250.</p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-440-5250 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Tenant-occupied? We buy as-is." sourcePage="/markets/boston-ma/tenant-occupied" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Rental Property in Boston</h2>
          <p className="text-gray-700 mb-4">Boston is one of the most tenant-friendly cities in the country. Eviction through Boston Housing Court requires strict notice procedures, a court hearing, and potential appeals — the process routinely takes 3-6 months. For landlords with problem tenants, that timeline feels infinite when you're carrying a mortgage, insurance, and property taxes on a property that isn't generating income.</p>
          <p className="text-gray-700">We buy triple-deckers, two-families, and multi-units across Boston with tenants in place. Dorchester, Roxbury, East Boston, Mattapan, Brighton — every neighborhood. You don't wait for an eviction to sell.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Boston MA" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/boston-ma/inherited-property', label: 'Inherited Property' }, { href: '/markets/boston-ma/foreclosure', label: 'Foreclosure' }, { href: '/markets/boston-ma/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/boston-ma/probate', label: 'Probate' }, { href: '/markets/boston-ma/code-violations', label: 'Code Violations' }, { href: '/markets/boston-ma', label: '← Back to Boston' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Boston Rental Property?" sourcePage="/markets/boston-ma/tenant-occupied" />
      </div>
    </>
  );
}
