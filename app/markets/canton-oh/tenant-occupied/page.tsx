/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { cantonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/canton-oh/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Canton OH — Cash, No Eviction Needed',
  description: 'Need to sell a rental property in Canton OH with tenants in place? We buy tenant-occupied houses as-is, for cash. No eviction required. Serving Stark County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a house with tenants still living in it in Ohio?', answer: "Yes. Ohio allows the sale of tenant-occupied properties. Tenants retain their lease rights — the lease transfers with the property. USA Home Buyers buys with tenants in place and manages the occupancy situation after closing. You don't need to evict anyone before selling to us." },
  { question: 'What if the tenant is not paying rent?', answer: "We still buy. Canton has a 51.3% renter-occupied housing stock, and non-paying tenant situations are common. We take on the occupancy issue after closing." },
  { question: 'What types of tenant-occupied properties do you buy in Canton?', answer: "Single-family rentals, duplexes, small multifamily buildings, and properties with month-to-month or fixed-term leases. Central Canton, Southwest Canton, Northeast Canton, and Colonial Heights rental properties all qualify." },
  { question: 'Do I need to disclose the tenant situation to you?', answer: "Yes — we'll ask about the current occupancy, lease terms, and payment status when we evaluate the property. Full information helps us make the most accurate offer. There are no surprises after we make our written offer." },
];

export default function CantonTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[cantonLocalBusinessSchema, articleSchema('Sell a Tenant-Occupied House in Canton OH', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/canton-oh" className="hover:text-white">Canton OH</Link> › Tenant-Occupied</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Tenant-Occupied Canton OH Property — Cash, No Eviction Needed</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases tenant-occupied rental properties in Canton OH and Stark County — as-is, with tenants in place. No eviction required before closing. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/canton-oh/tenant-occupied" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a Rental in Canton OH When Tenants Are in Place</h2>
          <p className="text-gray-700 mb-4">Canton has a 51.3% renter-occupied housing stock — one of the highest in the region. Landlords who want to exit the Canton rental market face a difficult choice: manage an eviction, wait for a lease to expire, or try to list a tenant-occupied property through a traditional agent with all the showing complications that entails.</p>
          <p className="text-gray-700 mb-4">A cash sale to USA Home Buyers eliminates the showings problem entirely. We make one visit, evaluate the property as-is with tenants in place, and make a written offer within 24 hours. You don't need the tenant out before closing. We handle the occupancy transition after the sale is complete.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Canton OH" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/canton-oh/inherited-property', label: 'Inherited Property' }, { href: '/markets/canton-oh/foreclosure', label: 'Foreclosure' }, { href: '/markets/canton-oh/probate', label: 'Probate' }, { href: '/markets/canton-oh/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/canton-oh/code-violations', label: 'Code Violations' }, { href: '/markets/canton-oh', label: '← Back to Canton OH' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Canton OH Rental Property?" sourcePage="/markets/canton-oh/tenant-occupied" />
      </div>
    </>
  );
}
