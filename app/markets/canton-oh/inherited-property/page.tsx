/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { cantonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/canton-oh/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Canton OH — Cash Offer, Any Condition',
  description: 'Inherited a house in Canton OH? We buy inherited properties through Stark County Probate Court, as-is. Written offer in 24 hours, close after Letters issue.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell an inherited house during probate in Ohio?', answer: "Yes — you can accept an offer and sign a purchase agreement during probate. The deed typically can't transfer until the estate is authorized to sell by the Stark County Probate Court (110 Central Plaza South, Suite 501, Canton OH 44702, Judge Curt Werren, phone 330-451-7755). USA Home Buyers coordinates with estates and waits for the appropriate authorization." },
  { question: 'How long does Stark County probate take?', answer: "Ohio probate timelines vary. Uncontested estates with straightforward assets may resolve in 3–6 months. Complex estates with real property, multiple heirs, or creditor claims can take 12–24 months. The initial minimum deposit to open an estate in Stark County is $125.00; average total court costs are usually less than $200. Source: Stark County Probate Court FAQ. Consult an estate attorney for your specific situation." },
  { question: 'Do I need to clean out the inherited property?', answer: "No. Leave whatever you don't want — furniture, belongings, decades of contents. We handle the cleanout after closing. We've purchased Canton estates in every condition." },
  { question: 'What if the inherited house needs major repairs?', answer: "We price condition into our offer. Older homes in Central Canton, Southwest Canton, and Historic Ridgewood — with 41.5% of Canton housing units built in 1939 or earlier — often have lead paint, aging electrical, cast-iron plumbing, and foundation issues. We buy as-is. You do nothing." },
];

export default function CantonInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[cantonLocalBusinessSchema, articleSchema('Sell an Inherited House in Canton OH', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/canton-oh" className="hover:text-white">Canton OH</Link> › Inherited Property</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell an Inherited House in Canton OH — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases inherited houses in Canton OH and Stark County through probate — any condition, no repairs. Stark County Probate Court: 110 Central Plaza South, Suite 501, Canton OH 44702, phone 330-451-7755. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/canton-oh/inherited-property" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Home Through Stark County Probate</h2>
          <p className="text-gray-700 mb-4">Ohio probate is handled through the Probate Court in the county where the deceased lived. For Stark County estates, that's the Stark County Probate Court at 110 Central Plaza South, Suite 501, Canton OH 44702 — Judge Curt Werren, phone 330-451-7755, open Monday–Friday 8:30 a.m.–4:30 p.m. The initial minimum deposit to open an estate is $125.00 and average estate court costs are usually less than $200, though total costs vary by the complexity of pleadings and actions required. Source: <a href="https://www.starkcountyohio.gov/government/legal___judicial/probate_court/faqs/decedents_estate.php" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Stark County Probate Court decedent estate FAQ</a>.</p>
          <p className="text-gray-700 mb-4">Canton's older housing stock — with 41.5% of housing units built in 1939 or earlier — means inherited properties often come with significant deferred maintenance: lead paint, older wiring, aging HVAC, and foundation concerns. Heirs living out of state, managing multiple properties, or simply not wanting the burden of repairs and showings are exactly who we help. We close on a timeline that works within the probate process — we're not in a rush to force a difficult situation.</p>
          <p className="text-gray-700 mb-4">After closing, the deed must be stamped by the Stark County Auditor (110 Central Plaza South, Suite 220) and DTE Form 100 submitted before recording at the Stark County Recorder (Suite 170, same building). The Stark County conveyance fee of $4.00/$1,000 plus $0.50/parcel applies — we cover this when we purchase.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Canton OH" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/canton-oh/probate', label: 'Probate' }, { href: '/markets/canton-oh/foreclosure', label: 'Foreclosure' }, { href: '/markets/canton-oh/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/canton-oh/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/canton-oh/code-violations', label: 'Code Violations' }, { href: '/markets/canton-oh', label: '← Back to Canton OH' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Canton OH Property?" sourcePage="/markets/canton-oh/inherited-property" />
      </div>
    </>
  );
}
