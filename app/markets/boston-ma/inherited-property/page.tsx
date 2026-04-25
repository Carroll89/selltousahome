/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bostonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Boston MA — Cash Offer, No Repairs',
  description: 'Inherited a house in Boston MA? We buy inherited properties for cash, as-is. No repairs, no cleaning. Close in 7-14 days after probate.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How do I sell an inherited house in Boston?', answer: 'If probate is required, you\'ll need appointment as personal representative from Suffolk County Probate and Family Court. Massachusetts requires a license to sell real estate from the estate unless the will grants specific authority. Once authorized, we can close in 7 days. Source: MGL Ch. 202.' },
  { question: 'How long does probate take in Suffolk County?', answer: 'Suffolk County Probate and Family Court typically takes 3-8 months for standard estates. Contested estates take longer. Once you have authority to sell, we close fast.' },
  { question: 'Do I need to clean out the house?', answer: 'No. We buy houses full of belongings, with deferred maintenance, outdated systems. Many inherited Boston homes have decades of accumulated contents. We handle everything.' },
  { question: 'What if there are multiple heirs?', answer: 'All heirs or the court-appointed personal representative must agree. We handle multi-heir sales regularly in Suffolk County.' },
];

export default function BostonInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, articleSchema('Sell an Inherited House in Boston MA', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › Inherited Property</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell an Inherited House in Boston MA — Cash Offer, No Repairs</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases inherited houses in Boston — after probate through Suffolk County Probate Court or via trust/joint tenancy. Cash offer in 24 hours. Close in 7-14 days. Any condition, no cleanout. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Inherited property? Written offer in 24 hours." sourcePage="/markets/boston-ma/inherited-property" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Inherited Property in Boston</h2>
          <p className="text-gray-700 mb-4">Inheriting a house in Boston often means inheriting expensive problems. A Dorchester triple-decker with lead paint on every floor. A Roxbury Victorian with a failed boiler. Property taxes in Suffolk County averaging $10-$14 per $1,000 of assessed value — piling up while probate moves through Suffolk County Probate and Family Court.</p>
          <p className="text-gray-700 mb-4">Massachusetts may require a license to sell real estate from an estate unless the will specifically grants that authority (MGL Ch. 202). Your probate attorney can advise. Once you have authority, we can close in as few as 7 days.</p>
          <p className="text-gray-700">We buy estate properties across Greater Boston in any condition — from Mattapan multi-families to Charlestown row houses. Full of belongings, outdated systems, structural issues — we handle it all.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Boston MA" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/boston-ma/probate', label: 'Probate Sale' }, { href: '/markets/boston-ma/foreclosure', label: 'Foreclosure' }, { href: '/markets/boston-ma/code-violations', label: 'Code Violations' }, { href: '/markets/boston-ma/fire-damage', label: 'Fire Damage' }, { href: '/markets/boston-ma/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/boston-ma', label: '← Back to Boston' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Boston Property?" sourcePage="/markets/boston-ma/inherited-property" />
      </div>
    </>
  );
}
