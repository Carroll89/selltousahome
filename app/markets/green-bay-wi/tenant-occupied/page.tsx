/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { greenBayLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Green Bay WI — We Buy With Tenants',
  description: 'Selling a rental property in Green Bay WI with tenants in place? We buy tenant-occupied houses as-is — no eviction needed, no repairs. Serving Brown County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "Can you buy my Green Bay rental with a tenant still there?", answer: "Yes. We purchase tenant-occupied properties throughout Green Bay and Brown County. The existing lease transfers to us as the new owner. No eviction required." },
  { question: "How does Wisconsin eviction work if needed?", answer: "Wisconsin eviction requires a court order from Brown County Circuit Court. Process: serve proper notice (5 days for non-payment), file in small claims, attend a hearing, receive a writ of restitution through the Brown County Sheriff. Timeline: typically 3–6 weeks minimum. Consult a Wisconsin-licensed attorney for your situation. Source: Wisconsin Statutes Ch. 799." },
  { question: "Do you buy UWGB student rental properties?", answer: "Yes. Green Bay has significant student rental stock near UWGB. We buy student rentals with tenants in place — any condition, any lease situation." },
  { question: "What if the tenant has damaged the property?", answer: "We factor condition into our offer. Damaged units, unpaid rent, security deposit disputes — these don't stop us from making an offer. We buy as-is." },
];

const LINKS = [
  { href: '/markets/green-bay-wi/inherited-property', label: 'Inherited Property' },
  { href: '/markets/green-bay-wi/foreclosure', label: 'Foreclosure' },
  { href: '/markets/green-bay-wi/probate', label: 'Probate' },
  { href: '/markets/green-bay-wi/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/green-bay-wi/code-violations', label: 'Code Violations' },
  { href: '/markets/green-bay-wi', label: '← Back to Green Bay WI' },
];

export default function GreenBayTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('Sell a Tenant-Occupied Property in Green Bay WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Tenant-Occupied</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Tenant-Occupied Rental in Green Bay WI — No Eviction Needed</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases tenant-occupied rental properties in Green Bay WI and Brown County — no eviction required, as-is. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/green-bay-wi/tenant-occupied" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Green Bay's Rental Market — Tired Landlord Situations</h2>
          <p className="text-gray-700 mb-4">Green Bay has a diverse rental market: older multi-units near downtown and the manufacturing neighborhoods, student rentals near UWGB, and single-family rentals throughout the outer neighborhoods. Many landlords have owned these properties for 20–30 years. When the owner is ready to exit and tenant complications make a conventional listing difficult, a cash buyer who doesn't need vacant possession is the simplest path.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Green Bay WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Green Bay WI Rental Property?" sourcePage="/markets/green-bay-wi/tenant-occupied" />
      </div>
    </>
  );
}
