/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bostonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/probate`;

export const metadata: Metadata = {
  title: 'Sell Probate Property Boston MA — Cash Offer After Court Appointment',
  description: 'Need to sell a probate property in Boston? We buy estate houses for cash, as-is. Close quickly after Suffolk County Probate Court appointment.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How does probate work in Boston?', answer: 'Estates go through Suffolk County Probate and Family Court. A personal representative is appointed (executor if named in will, administrator if no will). Massachusetts may require a license to sell real estate from the estate (MGL Ch. 202) unless the will grants specific authority. Source: Suffolk County Probate Court.' },
  { question: 'How long does Suffolk County probate take?', answer: 'Typical timeline: 3-8 months for fiduciary appointment. Complex or contested estates take longer. Once authorized, we close in 7 days.' },
  { question: 'Can I sell before probate finishes?', answer: 'You need authority to sell before closing. We can evaluate and have an offer ready so you close immediately upon appointment.' },
  { question: 'What about liens or back taxes?', answer: 'We buy properties with liens and back taxes. Suffolk County property taxes, water/sewer liens, and mortgages are settled at closing from proceeds.' },
];

export default function BostonProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, articleSchema('Sell a Probate Property in Boston MA', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Probate Property in Boston MA — Cash Offer, Close Quickly</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Handling a Boston estate? USA Home Buyers purchases probate properties for cash, as-is. Once you have authority from Suffolk County Probate Court, we close in 7-14 days. No repairs, no cleanout. Call 888-440-5250.</p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-440-5250 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Probate property? Written offer in 24 hours." sourcePage="/markets/boston-ma/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Estate Property Through Suffolk County Probate Court</h2>
          <p className="text-gray-700 mb-4">Estate properties in Boston often sit vacant during probate — Suffolk County property taxes pile up ($10-$14 per $1,000 of assessed value), pipes freeze in winter, and the city's Inspectional Services Department may issue violations. A quick cash sale after appointment eliminates carrying costs and gets proceeds to heirs faster.</p>
          <p className="text-gray-700">We buy estate properties in any condition across Greater Boston — from Dorchester triple-deckers to Jamaica Plain Victorians.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate Sales in Boston MA" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/boston-ma/inherited-property', label: 'Inherited Property' }, { href: '/markets/boston-ma/foreclosure', label: 'Foreclosure' }, { href: '/markets/boston-ma/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/boston-ma/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/boston-ma/code-violations', label: 'Code Violations' }, { href: '/markets/boston-ma', label: '← Back to Boston' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Boston Estate Property?" sourcePage="/markets/boston-ma/probate" />
      </div>
    </>
  );
}
