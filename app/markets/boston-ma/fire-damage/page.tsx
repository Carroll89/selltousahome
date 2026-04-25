/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bostonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Boston MA — Cash Offer, Any Condition',
  description: 'Fire or smoke damage to your Boston home? We buy fire-damaged properties for cash, as-is. No cleanup, no restoration. Close in 7-14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a fire-damaged house in Boston?', answer: 'Yes. We buy fire-damaged houses in any condition — partial damage, total loss, smoke damage. The Boston Fire Department issues the incident report, your insurer makes their assessment. We buy regardless of insurance status.' },
  { question: 'What if insurance doesn\'t cover full repairs?', answer: 'Insurance shortfalls are common. If your insurer offers $35,000 and the contractor quotes $78,000, the gap makes restoration uneconomical. We buy as-is — you keep insurance proceeds plus our purchase price.' },
  { question: 'Do I need to clean up first?', answer: 'No. Fire debris, smoke damage, water damage from firefighting, structural issues — we buy the property in its current state.' },
  { question: 'How fast can you close?', answer: 'As fast as 7 days. Fire-damaged properties don\'t qualify for conventional financing, so cash buyers like us are often the only option.' },
];

export default function BostonFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, articleSchema('Sell a Fire-Damaged House in Boston MA', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › Fire Damage</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Fire-Damaged House in Boston MA — Cash Offer, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Fire or smoke damage to your Boston home? USA Home Buyers purchases fire-damaged properties for cash, as-is. No cleanup, no restoration. Written offer in 24 hours. Close in 7-14 days. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Fire damage? We buy as-is." sourcePage="/markets/boston-ma/fire-damage" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Fire-Damaged Properties in Boston</h2>
          <p className="text-gray-700 mb-4">Boston's dense housing stock — triple-deckers with balloon framing, row houses with shared walls, multi-families with aging electrical — is particularly fire-vulnerable. According to the <a href="https://www.usfa.fema.gov/statistics/residential-fires.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">U.S. Fire Administration (USFA)</a>, residential fires cause billions in property damage annually, with older urban housing disproportionately affected.</p>
          <p className="text-gray-700 mb-4">The <a href="https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">National Fire Protection Association (NFPA)</a> reports that heating equipment and cooking are the leading causes of home fires. In Boston's older buildings, outdated electrical systems and aging heating equipment increase risk significantly.</p>
          <p className="text-gray-700">Whether the damage is a kitchen fire in a Dorchester two-family or a structural loss on a Roxbury triple-decker, we buy as-is. No cleanup, no contractor, no insurance settlement required first.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire-Damaged Property in Boston MA" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/boston-ma/code-violations', label: 'Code Violations' }, { href: '/markets/boston-ma/inherited-property', label: 'Inherited Property' }, { href: '/markets/boston-ma/foreclosure', label: 'Foreclosure' }, { href: '/markets/boston-ma/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/boston-ma/probate', label: 'Probate' }, { href: '/markets/boston-ma', label: '← Back to Boston' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Boston Property?" sourcePage="/markets/boston-ma/fire-damage" />
      </div>
    </>
  );
}
