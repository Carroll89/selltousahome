/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { waterburyLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/waterbury-ct/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Waterbury CT — We Buy With Tenants',
  description: 'Selling a rental property in Waterbury CT with tenants in place? We buy two-family and single-family rentals as-is — no eviction needed, no repairs. Serving New Haven County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can you buy my Waterbury rental property with a tenant living there?', answer: "Yes. We purchase tenant-occupied properties throughout Waterbury and New Haven County. The existing lease transfers to us as the new owner. No eviction required." },
  { question: 'How does Connecticut eviction work?', answer: "Connecticut eviction requires a summary process hearing in the Housing Court or regular court session. The landlord must serve proper notice (typically 3 days for non-payment, 15 days for other violations), then file a summary process action. Timeline: 4–8 weeks minimum. Consult a Connecticut-licensed attorney for your specific situation." },
  { question: 'Do you buy two-family and three-family Waterbury properties?', answer: "Yes. Waterbury has significant multi-unit stock — two-family and compact triple-decker forms are common. We purchase all of it as-is, with tenants in place." },
  { question: 'What if the tenant has damaged the property?', answer: "We factor condition into our offer. Damaged units, unpaid rent, security deposit complications — these don't stop us from making an offer." },
];

const LINKS = [
  { href: '/markets/waterbury-ct/inherited-property', label: 'Inherited Property' },
  { href: '/markets/waterbury-ct/foreclosure', label: 'Foreclosure' },
  { href: '/markets/waterbury-ct/probate', label: 'Probate' },
  { href: '/markets/waterbury-ct/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/waterbury-ct/code-violations', label: 'Code Violations' },
  { href: '/markets/waterbury-ct', label: '← Back to Waterbury CT' },
];

export default function WaterburyTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, articleSchema('Sell a Tenant-Occupied Property in Waterbury CT', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › Tenant-Occupied</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Tenant-Occupied Rental in Waterbury CT — No Eviction Needed</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases tenant-occupied rental properties in Waterbury CT — two-family and single-family, no eviction required, as-is. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/waterbury-ct/tenant-occupied" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Waterbury's Multi-Unit Rental Market</h2>
          <p className="text-gray-700 mb-4">Waterbury has a significant stock of two-family and compact multi-unit properties — a legacy of its immigrant community housing patterns. Many of these properties have been landlord-owned for 20–40 years. When the owner is ready to exit and tenant complications make a conventional listing difficult, a cash buyer who takes the property with tenants in place is the most practical solution.</p>
          <p className="text-gray-700 mb-4">Connecticut eviction law (CGS §47a) requires a formal summary process. The process starts with proper written notice, then a court hearing, then a writ of execution — minimum 4–6 weeks even in clear non-payment situations. We buy with tenants in place so you don't have to manage that process.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Waterbury CT" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Waterbury CT Rental Property?" sourcePage="/markets/waterbury-ct/tenant-occupied" />
      </div>
    </>
  );
}
