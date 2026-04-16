/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Tenant Property York PA',
  description:
    'Selling a tenant-occupied property in York PA? We buy rental homes with tenants still in place. No eviction needed. Cash offer in 24 hours, York County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy my York rental with the tenant still in it?',
    answer: "Yes. We regularly purchase tenant-occupied properties throughout York County. The tenant stays — we take over as landlord at closing. You don't need to evict, and you don't need to wait for a lease to expire.",
  },
  {
    question: 'What are tenant rights in York PA?',
    answer: "According to Pennsylvania's Landlord and Tenant Act of 1951, tenants have the right to proper notice before landlord entry and the right to continued occupancy through their lease term under new ownership. Pennsylvania law also requires landlords to return security deposits within 30 days of tenancy end. When we purchase, we take over all landlord obligations under state law.",
  },
  {
    question: 'Does York City require rental registration?',
    answer: "According to the City of York (yorkcity.org), York City requires all rental properties to be registered and inspected. As the new buyer, we assume responsibility for maintaining registration compliance. If there are outstanding registration violations, we factor this into the offer — you don't need to resolve them first.",
  },
  {
    question: 'What if my York tenant hasn\'t paid rent?',
    answer: "A non-paying tenant doesn't prevent a sale. We factor the tenant situation into our offer. If the tenant is on a month-to-month arrangement or the lease has expired, we handle any subsequent actions as the new owner. You walk away from the situation entirely.",
  },
  {
    question: 'How does the sale work with a tenant in place?',
    answer: "We purchase the property subject to the existing tenancy. At closing, the lease and security deposit transfer to us. The tenant receives written notice of the new owner. You receive your cash. The tenant stays put — that's their right under Pennsylvania law if they have an active lease.",
  },
];

export default function YorkTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('Selling a Tenant-Occupied Property in York PA — York County', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/york-pa-hero-640.jpg 640w, /images/optimized/york-pa-hero-828.jpg 828w, /images/optimized/york-pa-hero-1080.jpg 1080w, /images/optimized/york-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/york-pa-hero-1200.jpg"
            alt="York PA rental property — sell with tenant in place"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/york-pa" className="hover:text-white">York PA</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Tenant-Occupied Property in York PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Ready to exit your York rental? We buy tenant-occupied properties throughout York County —
              tenant stays, you get paid. No eviction process, no vacancy period, no waiting.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ Tenant stays — no eviction</span>
              <span>✓ Close in 7-14 days</span>
              <span>✓ Any lease situation</span>
              <span>✓ We cover all closing costs</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/york-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, USA Home Buyers buys tenant-occupied properties in York, PA. Pennsylvania law (68 P.S. § 250.101 et seq.) requires existing leases to transfer to the new owner at closing — you don't need to evict the tenant before selling. Fixed-term leases transfer intact; month-to-month tenancies can be ended with 15–30 days written notice. We buy with the tenant in place — no eviction, no vacancy requirement. Written cash offer within 24 hours.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            York's Rental Market — Context for Sellers
          </h2>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://datausa.io/profile/geo/york-pa" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">U.S. Census Bureau ACS via DataUSA</a>,
            York City has a homeownership rate of just 43.7% — meaning 56.3% of occupied housing units
            are renter-occupied. Northeast and Southwest York have even higher renter concentrations,
            with many of the row homes that were once owner-occupied now functioning as multi-unit rentals.
          </p>
          <p className="text-gray-700 mb-3">
            Landlords exit for many reasons: problem tenants, deferred maintenance, rising taxes, or
            wanting to liquidate an investment. A traditional sale of a tenant-occupied property is
            complicated — most retail buyers don't want an existing tenant, and showings require tenant
            cooperation. We buy tenant-occupied properties as-is, no showings required.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://yorkcity.org/government/authorities-boards-and-commissions/codified-ordinances/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">City of York Codified Ordinances (yorkcity.org)</a>,
            York City requires rental property registration and periodic inspections. We handle the ownership
            transfer and take over all compliance requirements at closing — you walk away clean.
          </p>
          <p className="text-gray-700 mb-4">
            According to{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue (pa.gov)</a>,
            all property transfers in York PA — including tenant-occupied rentals — are subject to
            the 2% realty transfer tax. We cover all closing costs, so this comes out of our end,
            not yours.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your York Rental Property"
          subheadline="Written offer in 24 hours. Tenant-occupied is fine — no eviction needed."
          sourcePage="/markets/york-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Tenant-Occupied Sales in York PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/york-pa" className="text-brand-primary hover:underline">York PA market overview →</Link></li>
            <li><Link href="/guides/tenant-occupied" className="text-brand-primary hover:underline">Selling a tenant-occupied property guide →</Link></li>
          
            <li><Link href="/blog/destroyed-rental-property-case-study" className="text-brand-primary hover:underline">Case Study: He Sold His Destroyed Rental for $50K →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your York Rental Property?" sourcePage="/markets/york-pa" />
      </div>
    </>
  );
}
