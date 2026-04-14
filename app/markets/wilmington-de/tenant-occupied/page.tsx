/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wilmingtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Tenant-Occupied Home Wilmington DE',
  description:
    'Sell your tenant-occupied rental property in Wilmington DE. We buy with tenants in place — no eviction required. Cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can you buy a house with tenants still living in it in Delaware?',
    answer: "Yes. We purchase tenant-occupied properties throughout Wilmington and New Castle County regularly. Tenants stay in place through closing — we take over as the new landlord. No eviction required before you sell.",
  },
  {
    question: 'Do I need to notify my tenants before selling in Delaware?',
    answer: "Delaware Code Title 25, §5314 generally requires landlords to provide tenants with advance notice of entry for showings. For a cash sale with no showings required, this is less of a concern. However, under 'Sale of Tenant's Home' provisions (Delaware Code Title 25, §5317), if the property is sold and the new owner intends to occupy it, specific notice periods apply. Since we're investors, not owner-occupants, standard lease terms continue with us as new landlord. Consult a Delaware landlord-tenant attorney for specifics.",
  },
  {
    question: 'What happens to the security deposit when I sell?',
    answer: "In Delaware, the security deposit transfers with the property to the new owner. At closing, you credit us the security deposit amount, and we assume the obligation to return it to the tenant per Delaware law (Title 25, §5514) when the tenancy ends.",
  },
  {
    question: 'Does Wilmington have rent control?',
    answer: "As of April 2026, Delaware does not have state-level rent control, and Wilmington City does not have a local rent stabilization ordinance. Delaware landlord-tenant law (Title 25, Chapter 55) governs residential leases, required notices, and allowable lease terms.",
  },
  {
    question: 'How fast can you close on a tenant-occupied property?',
    answer: "We can close in 7-14 days on a tenant-occupied property. Unlike traditional buyers, we don't require the property to be vacant. Title search and closing logistics run on the same timeline as any cash purchase.",
  },
];

export default function WilmingtonTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        wilmingtonLocalBusinessSchema,
        articleSchema('Selling a Tenant-Occupied Property in Wilmington DE', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/wilmington-de-hero-640.jpg 640w, /images/optimized/wilmington-de-hero-828.jpg 828w, /images/optimized/wilmington-de-hero-1080.jpg 1080w, /images/optimized/wilmington-de-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/wilmington-de-hero-1200.jpg"
            alt="Wilmington DE tenant-occupied rental — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/wilmington-de" className="hover:text-white">Wilmington DE</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Wilmington Rental Property — Tenants in Place, No Eviction Needed
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Wilmington is approximately 55% renter-occupied — one of the highest ratios in the mid-Atlantic.
              We buy tenant-occupied properties throughout New Castle County. Tenants stay. You close.
              Written cash offer in 24 hours.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors"
            >
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/wilmington-de" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Landlords in Wilmington Sell to Us</h2>
          <p className="text-gray-700 mb-4">
            Wilmington's ~55% renter population (per{' '}
            <a href="https://www.neighborhoodscout.com/de/wilmington/real-estate" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">NeighborhoodScout</a>)
            means a high share of the city's housing stock is tenant-occupied. Landlords face a common
            dilemma: problem tenants, aging properties that need capital, or simply a desire to exit the
            landlord business — but they can't sell on the open market without first vacating the property.
          </p>
          <p className="text-gray-700 mb-4">
            Traditional buyers want vacant possession. We don't. We purchase tenant-occupied row homes,
            duplexes, and single-families throughout Southbridge, West Center City, Brandywine Village,
            and the Eastside with tenants in place. We take over the landlord role at closing — including
            any existing lease terms and security deposit obligations.
          </p>
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-6">
            <h3 className="font-bold text-brand-dark mb-2">Delaware Landlord-Tenant Reference</h3>
            <p className="text-gray-700 text-sm">
              Delaware landlord-tenant law is governed by{' '}
              <a href="https://delcode.delaware.gov/title25/c055/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Title 25, Chapter 55 of the Delaware Code</a>.
              Required notice periods, security deposit handling, and lease transfer procedures are all
              covered by state statute. When we take ownership, we comply with all applicable Delaware
              landlord-tenant obligations.
            </p>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer — Sell Your Wilmington Rental Property"
          subheadline="Tenants stay in place. No eviction required. Written offer in 24 hours."
          sourcePage="/markets/wilmington-de"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Tenant-Occupied Property in Wilmington DE" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">Wilmington DE Cash Home Buyers →</Link></li>
            <li><Link href="/markets/wilmington-de/code-violations" className="text-brand-primary hover:underline">Sell a Property with Code Violations in Wilmington →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
