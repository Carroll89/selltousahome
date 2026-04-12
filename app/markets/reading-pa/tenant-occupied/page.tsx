import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, readingLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Tenant-Occupied Home in Reading PA | Cash Offer, No Eviction',
  description:
    'Selling a rental or tenant-occupied property in Reading PA? We buy tenant-occupied homes as-is. No eviction required. Cash offer in 24 hours. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/tenant-occupied` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Reading PA rental property with a tenant still in it?',
    answer:
      'Yes. We buy tenant-occupied properties throughout Reading and Berks County. You do not need to evict the tenant before selling to us. We take on the tenant relationship at closing and handle any necessary transition ourselves.',
  },
  {
    question: 'What if the tenant is not paying rent?',
    answer:
      'Non-paying tenants are one of the most common situations we encounter in Reading. Reading has a 61.5% renter-occupied rate — the largest renter market in Berks County. Eviction proceedings in PA can take 2-6 months. We buy with the non-paying tenant in place, eliminating the need for you to complete the eviction process.',
  },
  {
    question: 'What if the tenant has a current lease?',
    answer:
      'Under Pennsylvania law, a lease runs with the property — a new owner must honor an existing lease through its term. We know this and account for it in our offer. The lease is not a barrier to the sale.',
  },
  {
    question: 'Does Reading require special disclosures for tenant-occupied rental sales?',
    answer:
      'Reading has a rental licensing program. When selling a rental property, the buyer typically needs to apply for a new rental license. We handle this as the new owner. We\'re familiar with Reading\'s rental licensing requirements and code enforcement process.',
  },
  {
    question: 'How does Reading\'s 5% transfer tax affect a rental property sale?',
    answer:
      'Reading has a 5% transfer tax (4% city + 1% state) on all transfers, including investment properties. When you sell to USA Home Buyers, we pay all closing costs including the transfer tax. Your net proceeds are the offer we make — no deductions for taxes or fees.',
  },
  {
    question: 'What if the tenant has caused significant damage to the Reading rental?',
    answer:
      'Tenant-caused damage — holes in walls, missing fixtures, damaged floors, hoarding conditions — we\'ve seen it all. We buy in any condition. The damage is factored into our offer; you don\'t need to repair anything before selling.',
  },
];

const pageUrl = `${SITE_URL}/markets/reading-pa/tenant-occupied`;

export default function ReadingTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Selling a Tenant-Occupied Property in Reading PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/reading-landmark-hero.jpg"
          alt="Reading PA rental property — sell with tenant for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/reading-pa" className="hover:text-white">Reading PA</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Tenant-Occupied Reading PA Rental — No Eviction Needed
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Non-paying tenant? Problem tenant? Lease you can&apos;t break? We buy Reading PA rental properties
              with tenants in place — no eviction required from you. Cash offer in 24 hours. We cover all
              closing costs including Reading&apos;s 5% transfer tax. Hablamos español.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We Buy With Tenants In Place
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/reading-pa/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>No eviction required</strong> — we buy Reading rental properties with tenants in place, including non-paying tenants</li>
              <li>• Reading&apos;s <strong>61.5% renter-occupied rate</strong> makes tenant-occupied sales one of our most common situations</li>
              <li>• <strong>PA eviction takes 2–6 months</strong> — selling avoids the entire process and stops the cost bleed</li>
              <li>• Reading&apos;s <strong>5% transfer tax = $9,250</strong> on a $185K sale — we cover all closing costs so your net is the offer</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Reading PA: A High-Density Rental Market</h2>
            <p className="text-gray-700 text-sm">
              According to{' '}
              <a href="https://www.neighborhoodscout.com/pa/reading/real-estate" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">NeighborhoodScout</a>,
              Reading has a 61.5% renter-occupied rate — more renters than almost any other comparable PA city.
              Average rent is $1,748/month. According to the{' '}
              <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">Berks County Recorder of Deeds (berkspa.gov)</a>,
              Reading&apos;s 5% transfer tax (4% city + 1% state) applies to all rental property sales.
              With 70.8% Hispanic population, many rentals in Reading serve families on tight budgets. When tenant situations go wrong — non-payment, property
              damage, licensing violations — the eviction and recovery process in PA is slow and costly.
              Selling to a cash buyer is often the fastest path out.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Tenant Situations We Buy Around</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Non-paying tenant',
                  desc: 'PA eviction (Order for Possession) typically takes 2-6 months from filing to sheriff\'s removal. We buy the property with the non-paying tenant in place. You walk away with cash — no more court dates, no more stress.',
                },
                {
                  title: 'Month-to-month tenant',
                  desc: 'Month-to-month tenancies in PA require 15+ days notice before termination. We buy with the tenant in place and manage the transition as the new owner.',
                },
                {
                  title: 'Fixed-term lease',
                  desc: 'A current lease runs with the property. We account for the lease term in our offer. This is not a barrier to the sale.',
                },
                {
                  title: 'Tenant-caused damage',
                  desc: 'Holes in walls, damaged fixtures, missing appliances, hoarding conditions. We buy in any condition. Tenant damage is factored into our offer — you don\'t fix it before closing.',
                },
                {
                  title: 'Rental licensing violations',
                  desc: 'Reading requires rental licenses. An unlicensed or non-compliant rental can trigger city citations and orders. We buy properties with open rental licensing issues.',
                },
                {
                  title: 'Multi-unit with mixed tenants',
                  desc: 'Duplexes and small apartment buildings where some units are occupied and some vacant. We buy the whole building as-is, regardless of occupancy mix.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Math on Selling a Reading Rental</h2>
            <p className="text-gray-700 mb-4">
              Reading&apos;s average rent is $1,748/month. If a tenant is not paying, that&apos;s $1,748/month in lost
              income plus $500-$1,500/month in carrying costs (taxes, insurance, utilities if applicable). A
              6-month eviction process could cost $12,000-$20,000 in lost rent and expenses — before you even
              list the property. Plus agent commissions, Reading&apos;s 5% transfer tax, and potential repairs.
            </p>
            <p className="text-gray-700">
              A cash sale eliminates all of that. The offer is lower than retail value — that&apos;s the tradeoff. But
              when you compare it to the actual cost of the full traditional path in Reading, a cash sale often
              nets you more in real money.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Reading Rental Property"
            subheadline="Tenants in place, no problem. Written offer in 24 hours. We cover all closing costs. Hablamos español."
            sourcePage="/markets/reading-pa/tenant-occupied"
          />

          <FAQSection items={FAQ_ITEMS} heading="Reading PA Tenant-Occupied Properties — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/markets/reading-pa/code-violations" className="text-brand-primary hover:underline">Code Violations in Reading</Link>{' '}
              ·{' '}
              <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
