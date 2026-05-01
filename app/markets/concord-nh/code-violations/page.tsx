/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Concord NH — Cash, As-Is',
  description: 'Have code violations on your Concord NH property? We buy houses with open violations as-is, for cash. No repairs required. Serving Merrimack County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a house with code violations in Concord NH?', answer: "Yes. Code violations don't prevent a sale — they transfer with the property. A cash buyer like USA Home Buyers buys as-is, including open violations, and takes responsibility for remediation after closing." },
  { question: 'Do I have to fix violations before selling?', answer: "Not when selling to us. We factor open violations and repair costs into our offer. You don't fix anything." },
  { question: 'What kinds of violations do you buy with in Concord?', answer: "Open permit issues, unpermitted additions, electrical violations, plumbing deficiencies, structural concerns, failed inspections, lead paint (common in Concord's 33% pre-1940 housing stock and 66% pre-1980 stock), mold, and exterior maintenance violations. We buy in any condition." },
  { question: 'What if the City of Concord has placed a lien?', answer: "Liens are addressed at closing from the sale proceeds. We'll review any open liens before making an offer. Many lien situations are resolvable." },
];

export default function ConcordCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[concordLocalBusinessSchema, articleSchema('Sell a House With Code Violations in Concord NH', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › Code Violations</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Concord NH House With Code Violations — Cash, As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases Concord NH properties with open code violations, failed inspections, and unpermitted work — as-is, for cash, no repairs required. We handle remediation after closing. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/concord-nh/code-violations" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Concord's Older Housing Stock</h2>
          <p className="text-gray-700 mb-4">Concord has a significant older-home base — 33% of housing units were built in 1939 or earlier, and 66% before 1980 (2024 ACS Census data). New England Colonial and Federal-style homes in Abbott-Downing and the North End, Cape Cods and older ranches throughout Concord Heights and West Concord, and multifamily properties in Penacook commonly have aging electrical (knob-and-tube in pre-1940 stock), old plumbing, lead paint (any pre-1978 home), and deferred maintenance. These generate code enforcement flags, especially when properties are inherited, tenant-occupied, or managed at a distance.</p>
          <p className="text-gray-700 mb-4">A cash buyer doesn't need to satisfy a lender's underwriting requirements. That means no appraisal, no inspection contingency, and no demand to clear violations before closing. We price in the remediation cost and close on your timeline.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Concord NH" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/concord-nh/inherited-property', label: 'Inherited Property' }, { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' }, { href: '/markets/concord-nh/probate', label: 'Probate' }, { href: '/markets/concord-nh/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/concord-nh/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/concord-nh', label: '← Back to Concord NH' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Concord NH Property?" sourcePage="/markets/concord-nh/code-violations" />
      </div>
    </>
  );
}
