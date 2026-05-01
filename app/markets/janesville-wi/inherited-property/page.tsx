/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { janesvilleLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/janesville-wi/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Janesville WI — Cash Offer, Any Condition',
  description: 'Inherited a house in Janesville WI? We buy inherited properties through Rock County probate, as-is. Written offer in 24 hours, close after Letters Testamentary issue.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell an inherited house during probate in Wisconsin?', answer: "Yes — you can accept an offer and sign a purchase agreement during probate. The deed typically can't transfer until Letters Testamentary or Letters of Administration are issued by the Rock County Clerk of Circuit Court (verify current county office location before relying on it). USA Home Buyers coordinates with estates and waits for Letters when needed." },
  { question: 'How long does Rock County probate take?', answer: "Uncontested estates in Wisconsin typically resolve in 3–6 months through informal administration. Complex estates with multiple heirs, contested wills, or outstanding debts can take longer. Wisconsin also offers summary assignment for small estates. Consult an estate attorney for your specific situation." },
  { question: 'Do I need to clean out the inherited property?', answer: "No. Leave whatever you don't want — furniture, belongings, decades of contents. We handle the cleanout after closing. We've purchased Janesville estates in every condition." },
  { question: 'What if the inherited house needs major repairs?', answer: "We price condition into our offer. Older homes in Janesville's Courthouse Hill Historic District, Courthouse Hill, and Old Fourth Ward — many built before 1940 — often have deferred maintenance: old wiring, aging HVAC, foundation issues. About 19% of Janesville's housing units were built in 1939 or earlier. We buy as-is. You do nothing." },
];

export default function JanesvilleInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[janesvilleLocalBusinessSchema, articleSchema('Sell an Inherited House in Janesville WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/janesville-wi" className="hover:text-white">Janesville WI</Link> › Inherited Property</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell an Inherited House in Janesville WI — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases inherited houses in Janesville WI and Rock County through probate — any condition, no repairs. We work with estates and wait for Letters Testamentary when needed. Rock County Clerk of Courts: the appropriate county office. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/janesville-wi/inherited-property" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Home Through Rock County Probate</h2>
          <p className="text-gray-700 mb-4">Wisconsin probate is handled by the Circuit Court in the county where the deceased lived. For Rock County estates, that's the Clerk of Circuit Court at the Rock County Justice Center, the appropriate county circuit court office— verify current contact before relying on it, open Monday through Friday 8:00 a.m.–4:30 p.m. Most uncontested estates proceed through informal administration and resolve in 3–6 months. You can accept a cash offer before probate closes; the deed transfers after Letters Testamentary are issued. Consult an estate attorney for guidance specific to your situation.</p>
          <p className="text-gray-700 mb-4">Janesville's older housing stock — bungalows and Craftsman homes in Courthouse Hill and the Old Fourth Ward, established homes in Rockport and Downtown Janesville, and properties in Janesville neighborhoods — often carries decades of deferred maintenance. Heirs living out of state, managing multiple properties, or simply not wanting the burden of repairs and showings are exactly who we help. We close after Letters issue, on your schedule.</p>
          <p className="text-gray-700 mb-4">The deed and completed Wisconsin Real Estate Transfer Return (eRETR) are recorded at the Rock County Register of Deeds (verify current county office location before relying on it). Wisconsin's $3/$1,000 transfer fee is collected at recording — we cover this when we purchase.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Janesville WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/janesville-wi/probate', label: 'Probate' }, { href: '/markets/janesville-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/janesville-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/janesville-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/janesville-wi/code-violations', label: 'Code Violations' }, { href: '/markets/janesville-wi', label: '← Back to Janesville WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Janesville WI Property?" sourcePage="/markets/janesville-wi/inherited-property" />
      </div>
    </>
  );
}
