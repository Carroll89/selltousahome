/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { lancasterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Lancaster PA',
  description:
    'Sell your tenant-occupied rental in Lancaster PA — we buy with tenants in place. No eviction required. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/tenant-occupied` },
};

const articleSch = articleSchema(
  'Selling a Tenant-Occupied Property in Lancaster PA',
  `${SITE_URL}/markets/lancaster-pa/tenant-occupied`,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'Can I sell a Lancaster rental property with tenants still in it?',
    answer: 'Yes. You can usually sell a tenant-occupied property in Pennsylvania. Existing leases and tenant rights generally continue after ownership transfers unless the lease or law provides otherwise. USA Home Buyers buys tenant-occupied properties routinely — you don\'t need to evict anyone before selling.',
  },
  {
    question: 'Do tenants have to leave when I sell a Lancaster rental?',
    answer: 'Not immediately. Under Pennsylvania landlord-tenant rules and the lease, a fixed-term tenant generally remains through the lease term; month-to-month termination depends on proper notice and lease terms. A buyer who purchases tenant-occupied property takes the property with the existing tenants and their rights intact.',
  },
  {
    question: 'What if I have a problem tenant who hasn\'t paid rent?',
    answer: 'Problem tenants don\'t prevent a sale — they complicate it for retail buyers who want vacant possession. We buy with tenants in place, regardless of rent status. We handle the tenant situation after closing. Your responsibility ends at closing.',
  },
  {
    question: 'Do tenants get notice when their rental is being sold in Pennsylvania?',
    answer: 'Tenants generally learn of a sale through standard notice procedures and the transfer of ownership. Under Pennsylvania law and the lease, tenants generally retain lease rights after ownership transfer. Advance-sale notice requirements can depend on the lease and facts, so transparency and legal review are prudent. Your attorney can advise on any specific notice obligations in your situation.',
  },
  {
    question: 'What types of Lancaster rental properties do you buy?',
    answer: "All types — rowhouses, twins, single-family rentals, multi-unit buildings. According to DataUSA's ACS-derived profile, Lancaster's homeownership rate is 48.6%, implying a renter share of roughly 51.4%. Cabbage Hill and West End have high concentrations of rental rowhouses. We know the neighborhoods and understand the local rental market.",
  },
];

export default function LancasterTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, USA Home Buyers buys tenant-occupied properties in Lancaster, PA. Under Pennsylvania landlord-tenant rules and existing lease terms, leases generally remain in effect after a sale and the buyer becomes the new landlord. Month-to-month termination notice depends on the lease and applicable PA rules. We buy with the tenant in place — no eviction required before closing. Written cash offer within 24 hours. We serve all of Lancaster City and Lancaster County.</p>
        </div>

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>Tenant-Occupied Property</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell Your Tenant-Occupied Lancaster PA Rental — No Eviction Required
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          According to DataUSA\'s ACS-derived Lancaster profile, the city's homeownership rate is 48.6%, implying roughly 51.4% renter occupancy. That's a lot of landlords. And some of those landlords need to exit a property
          with a tenant still in it. USA Home Buyers buys tenant-occupied properties throughout Lancaster City
          and Lancaster County. No eviction, no vacating required before closing.
        </p>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Lancaster Rental Property" sourcePage="/markets/lancaster-pa" />

        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Lancaster's Rental Market Context</h2>
          <p className="text-gray-700 mb-4">
            According to DataUSA (ACS-derived data), Lancaster City's homeownership rate is approximately 48.6% —
            meaning roughly 51.4% of residents rent. This is notably higher than Lancaster County overall, compared with a higher homeownership rate countywide. The city's dense rowhouse neighborhoods — Cabbage Hill, West End, Southeast
            Lancaster — have high concentrations of rental properties, many in small landlord portfolios.
          </p>
          <p className="text-gray-700 mb-4">
            Per City of Lancaster code resources, rental properties are subject to local property standards. Code issues
            in older rowhouses may complicate retail financing or inspections, but they do not prevent an as-is sale to us.
          </p>
        </section>

        <section className="my-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">What Happens to Tenants After We Buy</h2>
          <p className="text-gray-700 mb-3">
            When we purchase your Lancaster rental, we account for the existing lease and tenant rights at closing.
            Per Pennsylvania landlord-tenant law (68 P.S. §§ 250.101-250.602), tenants retain rights that the new owner must respect.
          </p>
          <p className="text-gray-700">
            You're done after closing. The tenant situation becomes our problem to manage, not yours.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Tenant-Occupied Rentals in Lancaster PA" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA</Link>
          <Link href="/markets/lancaster-pa/code-violations" className="text-brand-primary hover:underline">Code Violations →</Link>
          <Link href="/guides/tenant-occupied" className="text-brand-primary hover:underline">Full Tenant-Occupied Guide →</Link>
        
          <Link href="/blog/destroyed-rental-property-case-study" className="text-brand-primary hover:underline">Case Study: Destroyed Rental → $50K →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Lancaster Rental" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
