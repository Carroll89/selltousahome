/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bostonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Boston MA — Fast Cash Sale',
  description: 'Going through a divorce in Boston MA? We buy houses for cash. One offer, one closing, clean split. Close in 7-14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell during a divorce in Boston?', answer: 'Yes — with mutual agreement or a court order from Suffolk County Probate and Family Court (which handles both probate and divorce in Massachusetts). Both spouses sign at closing, or one can sell if authorized by the court.' },
  { question: 'How fast can we close?', answer: 'As fast as 7 days once both parties accept. Written cash offer in 24 hours. Proceeds split per your agreement or court order.' },
  { question: 'What if my spouse won\'t agree?', answer: 'Your attorney can petition Suffolk County Probate and Family Court for a court-ordered sale. We buy under court orders regularly.' },
  { question: 'Do both names need to be on the deed?', answer: 'We buy regardless of how title is held. Your divorce attorney advises on required signatures.' },
];

export default function BostonDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, articleSchema('Sell Your House During Divorce in Boston MA', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › Divorce Sale</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your House During Divorce in Boston MA — One Offer, Clean Split</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Divorce requires selling? USA Home Buyers makes one cash offer, sets one closing date, proceeds split through your attorneys. No listing, no showings. Close in 7-14 days in Boston. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="One number. Clean split." sourcePage="/markets/boston-ma/divorce-sale" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a House During Divorce in Boston</h2>
          <p className="text-gray-700 mb-4">In Massachusetts, divorce cases go through Probate and Family Court — the same court that handles estate matters. When the court orders a property sale or both parties agree, a direct cash sale removes the biggest friction point. No repairs on a $800K+ property, no staging, no 6-month listing process while both parties carry the mortgage.</p>
          <p className="text-gray-700">We handle Suffolk County divorce sales regularly. One written offer, both attorneys review, close on a date that works. Any property type — from South Boston row houses to Dorchester triple-deckers.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Sale in Boston MA" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/boston-ma/inherited-property', label: 'Inherited Property' }, { href: '/markets/boston-ma/foreclosure', label: 'Foreclosure' }, { href: '/markets/boston-ma/probate', label: 'Probate' }, { href: '/markets/boston-ma/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/boston-ma/code-violations', label: 'Code Violations' }, { href: '/markets/boston-ma', label: '← Back to Boston' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Boston Property?" sourcePage="/markets/boston-ma/divorce-sale" />
      </div>
    </>
  );
}
