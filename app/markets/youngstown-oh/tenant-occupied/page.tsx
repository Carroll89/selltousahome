/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Youngstown OH',
  description:
    'Selling a rental property in Youngstown OH with tenants in place? We buy tenant-occupied houses as-is. No eviction required before closing.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Youngstown rental property with tenants still living there?',
    answer: "Yes. We buy tenant-occupied properties in Youngstown and throughout Mahoning County without requiring eviction first. The tenant's lease survives the sale under Ohio law — the new owner steps into the landlord's shoes. This is a standard investor-to-investor transaction, and we handle it regularly.",
  },
  {
    question: 'What are Ohio tenant rights when a property is sold?',
    answer: "Under Ohio law (ORC Chapter 5321), tenants have the right to remain in the property through the end of their lease term after a sale, regardless of who the new owner is. For month-to-month tenants, the new owner must provide proper notice under Ohio law before requiring them to vacate. The sale itself is not grounds for immediate eviction. Source: Ohio Revised Code § 5321.01 et seq. (Ohio Landlord-Tenant Law).",
  },
  {
    question: 'Do I need to tell tenants I\'m selling?',
    answer: "Ohio law requires providing tenants reasonable notice before showing the property. If you're selling to us directly — no showings, no listing — tenant disruption is minimal. We do a private walkthrough with reasonable advance notice, and the tenants continue their lease with us as the new owner.",
  },
  {
    question: 'What if my Youngstown tenant is behind on rent?',
    answer: "We buy with problem tenants, non-paying tenants, and full vacancies. If rent is owed, that's factored into our offer — it doesn't prevent the sale. You don't have to go through the eviction process in Mahoning County Municipal Court before selling to us.",
  },
  {
    question: 'What if the tenant has damaged the property?',
    answer: "We buy in any condition, including properties with tenant damage. You don't need to repair, clean, or remediate before closing. Our offer reflects the as-is condition of the property, including any damage.",
  },
];

export default function YoungstownTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('Selling a Tenant-Occupied Rental Property in Youngstown OH', pageUrl, '2026-04-14'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/youngstown-oh-hero-640.jpg 640w, /images/optimized/youngstown-oh-hero-828.jpg 828w, /images/optimized/youngstown-oh-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-hero-1200.jpg"
            alt="Youngstown OH rental property with tenants — sell as-is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Youngstown OH Rental Property — Tenants In Place
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Ready to exit your Youngstown rental? We buy tenant-occupied properties in Mahoning
              County with no eviction required before closing. One call, one offer, done.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3"
            >
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/youngstown-oh" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Youngstown Rental Market Context</h2>
          <p className="text-gray-700 mb-4">
            Youngstown is a majority-renter city — an estimated 60% of occupied housing units are
            renter-occupied, according to{' '}
            <a href="https://www.ohio-demographics.com/youngstown-demographics" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Census ACS data</a>.
            That reflects low home values, population decline, and a large stock of properties owned
            by absentee landlords who purchased during the post-industrial price collapse of the 1980s
            and 1990s. Many of those landlords are now looking to exit — they're aging, the properties
            need significant capital investment, and the Youngstown rental market doesn't support rents
            high enough to justify the work.
          </p>
          <p className="text-gray-700 mb-4">
            We buy from landlords who are done — whether the tenant is current, behind on rent,
            or the property is vacant. We don't require you to go through the Mahoning County
            Municipal Court eviction process before closing. We close on the property as-is and
            handle the tenant relationship after.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer on Your Youngstown Rental"
          subheadline="Tenants stay in place. No eviction required. Written offer in 24 hours."
          sourcePage="/markets/youngstown-oh"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Tenant-Occupied Properties in Youngstown OH" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/code-violations" className="text-brand-primary hover:underline">Code Violations in Youngstown OH →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
