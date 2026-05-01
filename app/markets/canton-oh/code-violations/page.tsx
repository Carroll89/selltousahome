/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { cantonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/canton-oh/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Canton OH — Cash, As-Is',
  description: 'Have code violations on your Canton OH property? We buy houses with open violations as-is, for cash. No repairs required. Serving Stark County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a house with code violations in Canton OH?', answer: "Yes. Code violations don't prevent a sale — they transfer with the property. A cash buyer like USA Home Buyers buys as-is, including open violations, and takes responsibility for remediation after closing." },
  { question: 'Do I have to fix violations before selling?', answer: "Not when selling to us. We factor open violations and repair costs into our offer. You don't fix anything." },
  { question: 'What kinds of code violations do you buy in Canton?', answer: "Open permit issues, unpermitted additions, electrical violations, HVAC deficiencies, structural concerns, failed inspections, lead paint (common in Canton's pre-1940 housing stock), mold — we buy in any condition." },
  { question: 'What if I have a lien from the City of Canton?', answer: "Liens are addressed at closing from the sale proceeds. We'll review any open liens before making an offer. Many lien situations are resolvable." },
];

export default function CantonCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[cantonLocalBusinessSchema, articleSchema('Sell a House With Code Violations in Canton OH', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/canton-oh" className="hover:text-white">Canton OH</Link> › Code Violations</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Canton OH House With Code Violations — Cash, As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases Canton OH properties with open code violations, failed inspections, and unpermitted work — as-is, for cash, no repairs required. We handle remediation after closing. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/canton-oh/code-violations" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Canton's Older Housing Stock</h2>
          <p className="text-gray-700 mb-4">Canton has one of the highest concentrations of older housing in Ohio — 41.5% of housing units were built in 1939 or earlier per 2024 ACS Census data. Pre-1940 homes in Central Canton, Southwest Canton, and Historic Ridgewood commonly have knob-and-tube wiring, galvanized or cast-iron plumbing, lead paint (any home pre-1978), and unpermitted basement conversions or additions. These generate code enforcement flags especially when properties are inherited, tenant-occupied, or managed remotely.</p>
          <p className="text-gray-700 mb-4">A cash buyer doesn't need to satisfy a lender's underwriting requirements. That means no appraisal, no inspection contingency, and no demand to clear violations before closing. We price in the remediation cost and close on your timeline.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Canton OH" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/canton-oh/inherited-property', label: 'Inherited Property' }, { href: '/markets/canton-oh/foreclosure', label: 'Foreclosure' }, { href: '/markets/canton-oh/probate', label: 'Probate' }, { href: '/markets/canton-oh/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/canton-oh/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/canton-oh', label: '← Back to Canton OH' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Canton OH Property?" sourcePage="/markets/canton-oh/code-violations" />
      </div>
    </>
  );
}
