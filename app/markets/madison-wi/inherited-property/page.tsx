/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { madisonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/madison-wi/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Madison WI — Cash Offer, Any Condition',
  description: 'Inherited a house in Madison WI? We buy inherited properties through Dane County probate, as-is. Written offer in 24 hours, close after Letters Testamentary issue.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell an inherited house during probate in Wisconsin?', answer: "Yes — you can accept an offer and sign a purchase agreement during probate. The deed typically can't transfer until Letters Testamentary or Letters of Administration are issued by the Dane County Circuit Court Probate Division (Room 1005, 215 S. Hamilton St., Madison WI 53703). USA Home Buyers coordinates with estates and waits for Letters when needed." },
  { question: 'How long does Dane County probate take?', answer: "Uncontested estates in Wisconsin typically resolve in 3–6 months through informal administration. Complex estates with multiple heirs, contested wills, or outstanding debts can take longer. Wisconsin also offers summary assignment for small estates. Consult an estate attorney for your specific situation." },
  { question: 'Do I need to clean out the inherited property?', answer: "No. Leave whatever you don't want — furniture, belongings, decades of contents. We handle the cleanout after closing. We've purchased Madison estates in every condition." },
  { question: 'What if the inherited house needs major repairs?', answer: "We price condition into our offer. Aging Craftsman bungalows and Foursquares in Madison often have deferred maintenance — old wiring, aging HVAC, foundation issues. We buy as-is. You do nothing." },
];

export default function MadisonInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, articleSchema('Sell an Inherited House in Madison WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/madison-wi" className="hover:text-white">Madison WI</Link> › Inherited Property</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell an Inherited House in Madison WI — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases inherited houses in Madison WI and Dane County through probate — any condition, no repairs. We work with estates and wait for Letters Testamentary when needed. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/madison-wi/inherited-property" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Home Through Dane County Probate</h2>
          <p className="text-gray-700 mb-4">Wisconsin probate is handled by the Circuit Court Probate Division. For Dane County estates, that's Room 1005 at 215 S. Hamilton Street, Madison WI 53703 — phone (608) 266-4331. Most uncontested estates proceed through informal administration and resolve in 3–6 months. You can accept a cash offer before probate closes; the deed transfers after Letters Testamentary are issued. Consult an estate attorney for guidance specific to your situation.</p>
          <p className="text-gray-700 mb-4">Madison's older housing stock — Craftsman bungalows in Marquette and Tenney-Lapham, Foursquares in Vilas, established Nakoma homes — often carries decades of deferred maintenance. Heirs living out of state, managing multiple properties, or simply not wanting the burden of repairs and showings are exactly who we help. We close after Letters issue, on your schedule.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Madison WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/madison-wi/probate', label: 'Probate' }, { href: '/markets/madison-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/madison-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/madison-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/madison-wi/code-violations', label: 'Code Violations' }, { href: '/markets/madison-wi', label: '← Back to Madison WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Madison WI Property?" sourcePage="/markets/madison-wi/inherited-property" />
      </div>
    </>
  );
}
