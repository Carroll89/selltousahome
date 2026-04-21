/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wausauLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/wausau-wi/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Wausau WI — Cash Offer, No Repairs',
  description: 'Inherited a house in Wausau WI? We buy inherited properties for cash, as-is. No repairs, no cleaning. Close in 7-14 days after probate.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "How do I sell an inherited house in Wausau?", answer: "If probate is required, you need appointment as personal representative from Marathon County Circuit Court. Wisconsin Statutes Ch. 856 govern estate administration. Once appointed, we close in 7 days." },
  { question: "How long does Marathon County probate take?", answer: "Typically 3-6 months for standard estates. Complex estates take longer." },
  { question: "Do I need to clean out the house?", answer: "No. We buy houses full of belongings, with deferred maintenance, any condition." },
  { question: "What about multiple heirs?", answer: "All heirs or the personal representative must agree. We handle multi-heir sales regularly." },
];

export default function WausauInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[wausauLocalBusinessSchema, articleSchema('Selling Inherited Property in Wausau', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/wausau-wi" className="hover:text-white">Wausau WI</Link> › Inherited Property</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Inherited House Wausau WI — Cash Offer, No Repairs</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses in Wausau WI. Written cash offer in 24 hours, close in 7-14 days. Any condition, no repairs. Serving Marathon County. Call 888-440-5250.</p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-440-5250 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/wausau-wi/inherited-property" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Inherited Property in Wausau</h2>
          <p className="text-gray-700 mb-4">Inheriting a house in Wausau often means inheriting winter damage — aging furnace, ice dam issues, basement moisture. Marathon County probate typically takes 3-6 months. Once the personal representative is appointed by Marathon County Circuit Court, we can close in as few as 7 days. Source: Wisconsin Statutes Ch. 856.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Wausau WI" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/wausau-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/wausau-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/wausau-wi/probate', label: 'Probate' }, { href: '/markets/wausau-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/wausau-wi/code-violations', label: 'Code Violations' }, { href: '/markets/wausau-wi', label: '← Back to Wausau' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Wausau WI Property?" sourcePage="/markets/wausau-wi/inherited-property" />
      </div>
    </>
  );
}
