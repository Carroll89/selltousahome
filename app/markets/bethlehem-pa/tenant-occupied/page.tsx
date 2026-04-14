import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Tenant Property Bethlehem PA',
  description:
    'Selling a tenant-occupied property in Bethlehem PA? We buy rental homes with tenants still in place. No eviction needed. Cash offer in 24 hours, Northampton County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy my Bethlehem rental with the tenant still in it?',
    answer: "Yes. We regularly purchase tenant-occupied properties throughout Northampton County. The tenant stays — we take over as landlord at closing. You don't need to evict, and you don't need to wait for a lease to expire.",
  },
  {
    question: 'What are the tenant rights in Bethlehem PA?',
    answer: "Pennsylvania has landlord-tenant rules under the Landlord and Tenant Act of 1951. Tenants have the right to notice before entry and the right to continued occupancy through their lease term under new ownership. The City of Bethlehem also has a Rental Registration Program requiring landlords to register units. When we purchase, we take over all landlord obligations.",
  },
  {
    question: 'What if my Bethlehem tenant hasn\'t paid rent?',
    answer: "A non-paying tenant doesn't prevent a sale. We factor the tenant situation into our offer. If the tenant is on a month-to-month arrangement or the lease is expired, we handle any subsequent actions as the new owner. You walk away from the situation entirely.",
  },
  {
    question: 'Do I need to disclose the tenant situation to you?',
    answer: "Yes — and we want to know. Tell us: is there a lease? When does it expire? Are they current on rent? This helps us structure the offer and the closing timeline appropriately. There's no tenant situation we haven't seen.",
  },
  {
    question: 'How does the sale work with a tenant in place?',
    answer: "We purchase the property subject to the existing tenancy. At closing, the lease and security deposit transfer to us. The tenant receives notice of the new owner. You receive your cash. The tenant stays put — that's their right under Pennsylvania law if they have an active lease.",
  },
  {
    question: 'What if I want the tenant to leave before closing?',
    answer: "If you prefer a vacant property, you can offer the tenant a cash incentive to vacate (cash for keys) before closing. This is legal and common. We can advise on typical amounts. Alternatively, if they're month-to-month, a proper 30-day notice can initiate that process — though the timing will affect the close date.",
  },
];

export default function BethlehemTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('Selling a Tenant-Occupied Property in Bethlehem PA — Northampton County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/bethlehem-pa-hero-640.jpg 640w, /images/optimized/bethlehem-pa-hero-828.jpg 828w, /images/optimized/bethlehem-pa-hero-1080.jpg 1080w, /images/optimized/bethlehem-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bethlehem-pa-hero-1200.jpg"
            alt="Bethlehem PA rental property — sell with tenant in place"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bethlehem-pa" className="hover:text-white">Bethlehem PA</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Tenant-Occupied Property in Bethlehem PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Ready to exit your Bethlehem rental? We buy tenant-occupied properties throughout Northampton County —
              tenant stays, you get paid. No eviction process, no vacancy period, no waiting.
              Written cash offer in 24 hours.
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
            <CashOfferForm variant="hero" sourcePage="/markets/bethlehem-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Bethlehem&apos;s Rental Market — Context for Sellers
          </h2>
          <p className="text-gray-700 mb-3">
            According to U.S. Census Bureau data via BestNeighborhood.org, approximately 39.1% of Bethlehem&apos;s
            housing units are renter-occupied. The South Side has a higher renter concentration — many of the
            row homes and twins built for Bethlehem Steel workers have been rental properties for decades.
          </p>
          <p className="text-gray-700 mb-3">
            Landlords exit for many reasons: problem tenants, deferred maintenance, rising taxes, or simply
            wanting to liquidate an asset. A traditional sale of a tenant-occupied property is complicated —
            most retail buyers don&apos;t want an existing tenant, and showings require tenant cooperation.
            We buy tenant-occupied properties as-is, no showings required.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://www.bethlehem-pa.gov/Planning_and_Zoning/Housing/RentalRegistrationProgram/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">City of Bethlehem Rental Registration Program (bethlehem-pa.gov)</a>,
            landlords must maintain a valid rental registration. We handle the ownership transfer and take over
            all compliance requirements at closing — you walk away clean.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue (pa.gov)</a>,
            a 2% total realty transfer tax applies to Bethlehem property sales, including tenant-occupied rentals.
            Pennsylvania&apos;s Landlord and Tenant Act of 1951 also governs how lease obligations transfer to the
            new owner — existing tenants retain their rights under active lease agreements.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Bethlehem Rental Property"
          subheadline="Written offer in 24 hours. Tenant-occupied is fine — no eviction needed."
          sourcePage="/markets/bethlehem-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Tenant-Occupied Sales in Bethlehem PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline">Bethlehem PA market overview →</Link></li>
            <li><Link href="/guides/tenant-occupied" className="text-brand-primary hover:underline">Selling a tenant-occupied property guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Bethlehem Rental Property?" sourcePage="/markets/bethlehem-pa" />
      </div>
    </>
  );
}
