/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { eauClaireLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/eau-claire-wi/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Eau Claire WI — Cash, No Eviction Needed',
  description: 'Need to sell a rental property in Eau Claire WI with tenants in place? We buy tenant-occupied houses as-is, for cash. No eviction required. Serving Eau Claire County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a house with tenants still living in it in Wisconsin?', answer: "Yes. Wisconsin allows the sale of tenant-occupied properties. Tenants retain their lease rights — the lease transfers with the property. USA Home Buyers buys with tenants in place and manages the occupancy situation after closing. You don't need to evict anyone before selling to us." },
  { question: 'Do I need to give tenants notice before selling?', answer: "Wisconsin law requires certain notices to tenants, but not necessarily eviction, for a sale. Requirements vary by lease type and situation. We'll work within the legal framework — consult a Wisconsin landlord-tenant attorney if you have specific questions about your tenant's rights." },
  { question: 'What if the tenant is not paying rent?', answer: "We still buy. Non-paying tenant situations in Eau Claire — where Wisconsin eviction through small claims takes weeks — are exactly where a cash sale makes sense. We take on the occupancy issue after closing." },
  { question: 'What types of tenant-occupied properties do you buy in Eau Claire?', answer: "Single-family rentals, duplexes, small multifamily buildings, and properties with month-to-month or fixed-term leases. Third Ward duplexes, north-side rentals near downtown Eau Claire, and Eau Claire multifamily properties all qualify." },
];

export default function EauClaireTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[eauClaireLocalBusinessSchema, articleSchema('Sell a Tenant-Occupied House in Eau Claire WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/eau-claire-wi" className="hover:text-white">Eau Claire WI</Link> › Tenant-Occupied</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Tenant-Occupied Eau Claire WI Property — Cash, No Eviction Needed</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases tenant-occupied rental properties in Eau Claire WI and Eau Claire County — as-is, with tenants in place. No eviction required before closing. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/eau-claire-wi/tenant-occupied" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a Rental in Eau Claire WI When Tenants Are in Place</h2>
          <p className="text-gray-700 mb-4">Eau Claire has a renter-occupied share of about 32.9% of occupied housing units — with significant duplex and small multifamily inventory in Third Ward, downtown Eau Claire, and north-side neighborhoods. Landlords often find themselves stuck: tenants have rights, eviction takes time, and listing a tenant-occupied property with a traditional agent means showings that require tenant cooperation.</p>
          <p className="text-gray-700 mb-4">A cash sale to USA Home Buyers eliminates the showings problem entirely. We make one visit, evaluate the property as-is, and make a written offer within 24 hours. Tenants don't need to be out before closing. We handle the occupancy transition after the sale is complete.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Eau Claire WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/eau-claire-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/eau-claire-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/eau-claire-wi/probate', label: 'Probate' }, { href: '/markets/eau-claire-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/eau-claire-wi/code-violations', label: 'Code Violations' }, { href: '/markets/eau-claire-wi', label: '← Back to Eau Claire WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Eau Claire WI Rental Property?" sourcePage="/markets/eau-claire-wi/tenant-occupied" />
      </div>
    </>
  );
}
