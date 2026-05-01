/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { waterburyLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/waterbury-ct/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Waterbury CT — Cash, As-Is',
  description: 'Have code violations on your Waterbury CT property? We buy houses with open violations as-is, for cash. No repairs required. Serving New Haven County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a house with code violations in Waterbury CT?', answer: 'Yes. Code violations travel with the property, not the seller. We buy as-is, including open violations, and take responsibility for remediation after closing.' },
  { question: 'Do I have to fix violations before selling?', answer: 'Not when selling to us. We factor open violations and repair costs into our offer. You do nothing.' },
  { question: 'What kinds of violations do you buy?', answer: "Electrical violations, structural concerns, unpermitted additions, HVAC deficiencies, failed inspections, lead paint disclosure requirements (Waterbury's older housing stock commonly has this), mold — we buy in any condition." },
  { question: 'What if I have a city lien from Waterbury?', answer: 'Liens are addressed at closing from sale proceeds. We review open liens before making an offer. Many situations are resolvable.' },
];

const LINKS = [
  { href: '/markets/waterbury-ct/inherited-property', label: 'Inherited Property' },
  { href: '/markets/waterbury-ct/foreclosure', label: 'Foreclosure' },
  { href: '/markets/waterbury-ct/probate', label: 'Probate' },
  { href: '/markets/waterbury-ct/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/waterbury-ct/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/waterbury-ct', label: '← Back to Waterbury CT' },
];

export default function WaterburyCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, articleSchema('Sell a House With Code Violations in Waterbury CT', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › Code Violations</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Waterbury CT House With Code Violations — Cash, As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases Waterbury CT properties with open code violations — as-is, for cash, no repairs required. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/waterbury-ct/code-violations" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Waterbury's Older Housing Stock</h2>
          <p className="text-gray-700 mb-4">Waterbury's compact frame homes and multi-unit properties from the early 20th century carry common code enforcement challenges: lead paint disclosure requirements, aging electrical systems (older two-family homes often have 60A service where modern standards require 200A), unpermitted basement conversions, and structural deferred maintenance. These issues block FHA and conventional financing, making a conventional sale difficult without significant upfront investment.</p>
          <p className="text-gray-700 mb-4">A cash buyer doesn't need lender approval, which means no appraisal, no inspection contingency, and no demand to clear violations before closing. We price in the remediation cost and close as-is.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Waterbury CT" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Waterbury CT Property?" sourcePage="/markets/waterbury-ct/code-violations" />
      </div>
    </>
  );
}
