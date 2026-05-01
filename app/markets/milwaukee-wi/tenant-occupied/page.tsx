/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { milwaukeeLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/milwaukee-wi/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Milwaukee WI — Cash, No Eviction Needed',
  description: 'Need to sell a rental property in Milwaukee WI with tenants in place? We buy tenant-occupied houses and duplexes as-is, for cash. No eviction required. Serving Milwaukee County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a duplex or rental property with tenants in Milwaukee?', answer: "Yes. Wisconsin allows the sale of tenant-occupied properties. Tenants retain their lease rights — the lease transfers with the property. USA Home Buyers buys Milwaukee duplexes, German duplexes, Polish flats, and multifamily buildings with tenants in place. You don't need to evict anyone before selling to us." },
  { question: 'What if the tenant is not paying rent?', answer: "We still buy. Milwaukee has a 58.2% renter-occupied housing share and non-paying tenant situations across its older duplex/multifamily stock are common. We take on the occupancy issue after closing." },
  { question: 'What types of tenant-occupied properties do you buy in Milwaukee?', answer: "Single-family rentals, duplexes (including German duplexes and Cream City brick duplexes), Polish flats, small multifamily buildings, and properties in Bay View, Riverwest, Sherman Park, Washington Heights, and Downtown Milwaukee. Month-to-month or fixed-term leases." },
  { question: 'Do I need to notify tenants before selling to you?', answer: "Wisconsin law has specific tenant notification requirements for real estate transactions. Requirements vary by lease type and situation. We work within the legal framework — consult a Wisconsin landlord-tenant attorney if you have specific questions about your tenant's rights and required notices." },
];

export default function MilwaukeeTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[milwaukeeLocalBusinessSchema, articleSchema('Sell a Tenant-Occupied House in Milwaukee WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/milwaukee-wi" className="hover:text-white">Milwaukee WI</Link> › Tenant-Occupied</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Tenant-Occupied Milwaukee WI Property — Cash, No Eviction Needed</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases tenant-occupied rental properties in Milwaukee WI and Milwaukee County — duplexes, German duplexes, Polish flats, multifamily — as-is, with tenants in place. No eviction required before closing. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/milwaukee-wi/tenant-occupied" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a Milwaukee Rental When Tenants Are in Place</h2>
          <p className="text-gray-700 mb-4">Milwaukee has a 58.2% renter-occupied housing share — one of the highest in Wisconsin. The city's large stock of German duplexes, Cream City brick two-flats, Polish flats, and turn-of-the-century multifamily buildings across Bay View, Riverwest, Sherman Park, and Washington Heights is predominantly tenant-occupied. Landlords who want to exit face a difficult path: manage an eviction, wait for a lease to expire, or try to list a tenant-occupied property through a traditional agent.</p>
          <p className="text-gray-700 mb-4">A cash sale to USA Home Buyers eliminates the showings problem. We make one visit, evaluate the property with tenants in place, and make a written offer within 24 hours. You don't need the tenant out before closing. We handle the occupancy transition after the sale is complete.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Milwaukee WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/milwaukee-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/milwaukee-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/milwaukee-wi/probate', label: 'Probate' }, { href: '/markets/milwaukee-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/milwaukee-wi/code-violations', label: 'Code Violations' }, { href: '/markets/milwaukee-wi', label: '← Back to Milwaukee WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Milwaukee WI Rental Property?" sourcePage="/markets/milwaukee-wi/tenant-occupied" />
      </div>
    </>
  );
}
