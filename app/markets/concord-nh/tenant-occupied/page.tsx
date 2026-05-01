/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Concord NH — Cash, No Eviction Needed',
  description: 'Need to sell a rental property in Concord NH with tenants in place? We buy tenant-occupied houses and multifamily as-is, for cash. No eviction required. Serving Merrimack County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a house with tenants still living in it in New Hampshire?', answer: "Yes. NH allows the sale of tenant-occupied properties. Tenants retain their lease rights — the lease transfers with the property. USA Home Buyers buys with tenants in place. You don't need to evict anyone before selling to us." },
  { question: 'What if the tenant is not paying rent?', answer: "We still buy. Non-paying tenant situations in Concord — where NH eviction proceedings take time — are exactly where a cash sale makes sense. We take on the occupancy issue after closing." },
  { question: 'What types of tenant-occupied properties do you buy in Concord?', answer: "Single-family rentals, duplexes, small multifamily buildings, and properties with month-to-month or fixed-term leases. Penacook multifamily, Abbott-Downing rentals, West Concord and Concord Heights properties all qualify." },
  { question: 'Do I need to notify tenants before selling to you?', answer: "NH law has specific tenant notification requirements. Requirements vary by lease type and situation. We work within the legal framework — consult a NH landlord-tenant attorney if you have specific questions about your tenant's rights and required notices." },
];

export default function ConcordTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[concordLocalBusinessSchema, articleSchema('Sell a Tenant-Occupied House in Concord NH', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › Tenant-Occupied</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Tenant-Occupied Concord NH Property — Cash, No Eviction Needed</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases tenant-occupied rental properties in Concord NH and Merrimack County — duplexes, multifamily, single-family — as-is, with tenants in place. No eviction required before closing. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/concord-nh/tenant-occupied" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a Rental in Concord NH When Tenants Are in Place</h2>
          <p className="text-gray-700 mb-4">Concord has a 43.2% renter-occupied housing share. The city's older housing stock — multifamily properties in Penacook, older duplexes near downtown Concord, and rental houses in West Concord and Concord Heights — means many landlords find themselves managing tenant-occupied properties they want to exit. Showing a tenant-occupied property through a traditional agent requires tenant cooperation, advance notice, and coordinated showings.</p>
          <p className="text-gray-700 mb-4">A cash sale to USA Home Buyers eliminates the showings problem. We make one visit, evaluate the property with tenants in place, and make a written offer within 24 hours. You don't need the tenant out before closing. We handle the occupancy transition after the sale is complete.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Concord NH" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/concord-nh/inherited-property', label: 'Inherited Property' }, { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' }, { href: '/markets/concord-nh/probate', label: 'Probate' }, { href: '/markets/concord-nh/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/concord-nh/code-violations', label: 'Code Violations' }, { href: '/markets/concord-nh', label: '← Back to Concord NH' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Concord NH Rental Property?" sourcePage="/markets/concord-nh/tenant-occupied" />
      </div>
    </>
  );
}
