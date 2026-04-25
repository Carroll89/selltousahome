/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bostonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Boston MA — We Buy As-Is',
  description: 'Code violations on your Boston property? We buy houses with ISD violations, lead paint orders for cash, as-is. No repairs. Close in 7-14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a house with code violations in Boston?', answer: 'Yes. We buy houses with open violations from Boston\'s Inspectional Services Department (ISD). Lead paint orders, structural issues, fire code violations, sanitary code violations — we purchase as-is.' },
  { question: 'What are the most common violations in Boston?', answer: 'Lead paint (mandatory under MGL Ch. 111 §197A for units with children under 6), sanitary code violations (State Sanitary Code Ch. II, 105 CMR 410), fire escape maintenance, structural deficiencies in triple-deckers, electrical code, and boiler/heating failures. Boston ISD actively enforces all of these.' },
  { question: 'Will violations affect the price?', answer: 'Violations are factored into our offer, but they don\'t prevent a sale. We assess remediation costs and adjust accordingly.' },
  { question: 'What about condemned properties?', answer: 'We buy condemned properties. If Boston ISD has condemned the building, it can still be sold — you just can\'t occupy it. We handle remediation after closing.' },
];

export default function BostonCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, articleSchema('Sell a House With Code Violations in Boston MA', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › Code Violations</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a House With Code Violations in Boston MA — We Buy As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Open violations from Boston ISD? USA Home Buyers purchases properties with code violations for cash — lead paint, structural, fire code, sanitary. No repairs required. Written offer in 24 hours. Close in 7-14 days. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Code violations? We buy as-is." sourcePage="/markets/boston-ma/code-violations" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Boston — What Homeowners Face</h2>
          <p className="text-gray-700 mb-4">Boston's Inspectional Services Department (ISD) enforces building, housing, sanitary, fire, and lead paint codes across the city. Massachusetts has some of the strictest lead paint laws in the country — MGL Ch. 111 §197A requires lead paint removal or encapsulation in any unit where a child under 6 resides. Deleading a Boston triple-decker can cost $8,000-$15,000 per unit.</p>
          <p className="text-gray-700">The State Sanitary Code (105 CMR 410) sets minimum standards for all rental housing — heating, plumbing, electrical, structural, pest control. Violations can result in fines, rent withholding, and receivership. For many Boston landlords, the cost of compliance exceeds what they can finance. We buy these properties as-is.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Boston MA" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/boston-ma/inherited-property', label: 'Inherited Property' }, { href: '/markets/boston-ma/foreclosure', label: 'Foreclosure' }, { href: '/markets/boston-ma/fire-damage', label: 'Fire Damage' }, { href: '/markets/boston-ma/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/boston-ma/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/boston-ma', label: '← Back to Boston' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Boston Property?" sourcePage="/markets/boston-ma/code-violations" />
      </div>
    </>
  );
}
