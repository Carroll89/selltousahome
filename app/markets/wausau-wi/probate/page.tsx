/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wausauLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/wausau-wi/probate`;

export const metadata: Metadata = {
  title: 'Sell Probate Property Wausau WI — Cash Offer After Court Appointment',
  description: 'Need to sell a probate property in Wausau? We buy estate houses for cash. Close quickly after Marathon County probate appointment.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "How does probate work in Marathon County?", answer: "Estates go through Marathon County Circuit Court. A personal representative is appointed. Wisconsin Statutes Ch. 856 govern the process." },
  { question: "How long does Marathon County probate take?", answer: "3-6 months typically. Once appointed, we close in 7 days." },
  { question: "Can I sell before probate finishes?", answer: "You need authority first. We can have an offer ready so you close immediately upon appointment." },
  { question: "What about liens or back taxes?", answer: "We buy with liens and back taxes. Everything settles at closing." },
];

export default function WausauProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[wausauLocalBusinessSchema, articleSchema('Selling Estate Property Through Marathon County Probate', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/wausau-wi" className="hover:text-white">Wausau WI</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Probate Property Wausau WI — Cash Offer After Court Appointment</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses in Wausau WI. Written cash offer in 24 hours, close in 7-14 days. Any condition, no repairs. Serving Marathon County. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/wausau-wi/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Estate Property Through Marathon County Probate</h2>
          <p className="text-gray-700 mb-4">Estate properties in Wausau often sit vacant during Wisconsin winters — pipes freeze, furnaces fail, property taxes pile up. Marathon County probate typically takes 3-6 months for the personal representative appointment. Once authorized, we close in as few as 7 days. Source: Wisconsin Statutes Ch. 856.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Wausau WI" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/wausau-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/wausau-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/wausau-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/wausau-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/wausau-wi/code-violations', label: 'Code Violations' }, { href: '/markets/wausau-wi', label: '← Back to Wausau' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Wausau WI Property?" sourcePage="/markets/wausau-wi/probate" />
      </div>
    </>
  );
}
