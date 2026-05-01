/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { greenBayLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Green Bay WI — Cash, As-Is',
  description: 'Have code violations on your Green Bay WI property? We buy houses with open violations as-is, for cash. No repairs required. Serving Brown County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "Can I sell a house with code violations in Green Bay WI?", answer: "Yes. Code violations travel with the property, not the seller. We buy as-is, including open violations, and take responsibility for remediation after closing." },
  { question: "Do I have to fix violations before selling?", answer: "Not when selling to us. We factor violations and repair costs into our offer. You do nothing." },
  { question: "What types of violations do you buy?", answer: "Electrical violations, structural concerns, unpermitted additions, HVAC deficiencies, failed inspections, lead paint disclosures, mold, exterior code flags — we buy in any condition." },
  { question: "What if I have a city lien?", answer: "Liens are addressed at closing from sale proceeds. We review open liens before making an offer. Many situations are resolvable." },
];

const LINKS = [
  { href: '/markets/green-bay-wi/inherited-property', label: 'Inherited Property' },
  { href: '/markets/green-bay-wi/foreclosure', label: 'Foreclosure' },
  { href: '/markets/green-bay-wi/probate', label: 'Probate' },
  { href: '/markets/green-bay-wi/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/green-bay-wi/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/green-bay-wi', label: '← Back to Green Bay WI' },
];

export default function GreenBayCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('Sell a House With Code Violations in Green Bay WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Code Violations</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Green Bay WI House With Code Violations — Cash, As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases Green Bay WI properties with open code violations — as-is, for cash, no repairs required. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/green-bay-wi/code-violations" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Green Bay's Older Housing Stock</h2>
          <p className="text-gray-700 mb-4">Green Bay's post-WWII Ranch and Cape Cod homes — and older Craftsman stock near Astor Park and Fort Howard — frequently have code enforcement issues: aging electrical panels (60A where 200A is now required), unpermitted basement conversions from the 1960s–1970s, older heating systems, and exterior code flags from deferred maintenance. These issues block FHA and conventional financing, making a retail sale difficult without significant upfront investment. A cash buyer doesn't need bank financing — no appraisal, no inspection contingency, no demand to clear violations before closing.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Green Bay WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Green Bay WI Property?" sourcePage="/markets/green-bay-wi/code-violations" />
      </div>
    </>
  );
}
