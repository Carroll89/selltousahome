/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wausauLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/wausau-wi/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Wausau WI — We Buy As-Is',
  description: 'Code violations on your Wausau property? We buy houses with violations for cash, as-is. No repairs. Close in 7-14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "Can I sell with code violations in Wausau?", answer: "Yes. We buy houses with open violations from the City of Wausau. Any type — we handle compliance after closing." },
  { question: "What are common violations in Wausau?", answer: "Aging electrical, heating failures, structural concerns, exterior maintenance. Wisconsin winters are hard on older homes." },
  { question: "Will violations affect the price?", answer: "Violations are factored in but don't prevent a sale." },
  { question: "What about condemned properties?", answer: "We buy condemned properties and handle remediation." },
];

export default function WausauCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[wausauLocalBusinessSchema, articleSchema('Code Violations in Wausau WI', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/wausau-wi" className="hover:text-white">Wausau WI</Link> › Code Violations</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell House With Code Violations Wausau WI — We Buy As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses in Wausau WI. Written cash offer in 24 hours, close in 7-14 days. Any condition, no repairs. Serving Marathon County. Call 888-440-5250.</p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-440-5250 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/wausau-wi/code-violations" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Wausau WI</h2>
          <p className="text-gray-700 mb-4">The City of Wausau enforces housing and building codes actively. Common issues include aging electrical systems, heating equipment failures, structural concerns in older homes, and exterior maintenance violations. We buy properties with any type of violation and handle compliance after closing.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Wausau WI" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/wausau-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/wausau-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/wausau-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/wausau-wi/probate', label: 'Probate' }, { href: '/markets/wausau-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/wausau-wi', label: '← Back to Wausau' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Wausau WI Property?" sourcePage="/markets/wausau-wi/code-violations" />
      </div>
    </>
  );
}
