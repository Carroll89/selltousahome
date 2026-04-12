import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, stateCollegeLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Rental Property State College PA',
  description:
    'Done with State College student rentals? We buy tenant-occupied properties — no eviction required. Cash offer in 24 hours, close in 7-14 days.',
  alternates: { canonical: `${SITE_URL}/markets/state-college-pa/tenant-occupied` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my State College rental property with the student tenant still living there?',
    answer:
      "Yes. Pennsylvania law allows you to sell a property with tenants in place. The lease doesn't terminate because of a sale — it transfers to the buyer with all the same terms. We buy tenant-occupied properties regularly in State College. With 73% of housing renter-occupied, we know this market well.",
  },
  {
    question: 'Do I have to evict the tenant before selling to you?',
    answer:
      "No. You don't need to go through the eviction process before closing. We take ownership — and the tenant relationship — at closing. This is especially valuable when the tenant is a Penn State student mid-lease. Going through Centre County's eviction process can take months and will cost money. We skip all of that.",
  },
  {
    question: 'What if my tenant hasn\'t been paying rent?',
    answer:
      "That's a situation we see regularly in State College's rental market. Non-paying tenants, seasonal abandonment after the school year ends, property damage at move-out — all of it is factored into our offer upfront. You don't pursue the tenant for back rent. You don't make repairs. We account for it in the price and take it from there.",
  },
  {
    question: 'What happens to the security deposit when I sell?',
    answer:
      "Any security deposit you hold transfers to the buyer at closing — it's credited or debited on the closing statement. The title company handles the accounting. Don't spend it before closing.",
  },
  {
    question: 'Does my tenant need to be notified if I sell?',
    answer:
      "Yes — Pennsylvania law requires written notice to tenants before a property is sold. We coordinate the proper notification as part of the closing process. The tenant's lease terms remain in full effect with the new buyer.",
  },
  {
    question: 'The house has Penn State lease clauses — does that complicate things?',
    answer:
      "Student leases in State College often run June to May to match the academic year. That timeline doesn't complicate a cash sale — we buy the property and the existing lease. Whether there are 2 months left or 10 months left on the student lease, we handle it. If the lease has Penn State-specific addendums, they transfer with the property.",
  },
];

const pageUrl = `${SITE_URL}/markets/state-college-pa/tenant-occupied`;

export default function StateCollegeTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        stateCollegeLocalBusinessSchema,
        articleSchema('Selling a Tenant-Occupied Rental in State College, PA', pageUrl, '2026-04-12'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA rental property — sell with tenant in place"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/state-college-pa" className="hover:text-white">State College</Link> › Tenant-Occupied Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Done Landlording in State College? Sell Your Rental With the Tenant Still In It
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Twelve years of Penn State lease cycles, move-out damage, May vacancy scrambles, and
              seasonal headaches is enough for a lot of State College landlords. With 73% of housing
              here renter-occupied, you&apos;re not alone. We buy rental properties tenant-occupied — no
              eviction, no repairs, no drama.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk Through Your Rental Situation
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/state-college-pa/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-base font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              You don&apos;t need to evict before selling. We buy State College rental properties with tenants
              in place — student leases, non-paying tenants, mid-lease situations, all of it. According to
              the U.S. Census Bureau (census.gov), 73.9% of State College housing units are renter-occupied
              — the most common sale we do here. The lease transfers to us at closing, the security deposit
              is accounted for on the closing statement, and you&apos;re done landlording in 7–14 days.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              The Penn State Rental Trap — and How to Get Out
            </h2>
            <p className="text-gray-700 mb-4">
              State College Borough has a 73.9% renter-occupied housing rate — one of the highest in
              Pennsylvania. Nearly all of it is Penn State students and university-related workers.
              That creates a very specific type of landlord:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-4">
              <li>Bought a house near campus in the 1990s or 2000s as an investment</li>
              <li>Spent years managing student tenants — different groups every 12 months</li>
              <li>The property is now 25-30 years old and starting to need real money</li>
              <li>May have a decent tenant in right now but dreads the next turnover</li>
              <li>Knows the house would rent again in spring but wonders if it&apos;s worth it</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If that&apos;s you, the exit strategy is simple: sell to us. We buy the property with the
              current tenant in place. No eviction. No vacancy period. You don&apos;t need to wait for
              the lease to end.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-gray-700">
              According to the U.S. Census Bureau (census.gov), 73.9% of State College housing units are
              renter-occupied — compared to Pennsylvania&apos;s statewide average of roughly 31%.
              According to Pennsylvania&apos;s Landlord and Tenant Act (68 P.S. § 250.101 et seq.), a lease
              does not terminate because of a property sale — it transfers to the new owner with all
              original terms intact. We know this market well.
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Situations We Handle in State College Rentals
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Non-paying student tenant',
                  desc: "Tenant stopped paying after the fall semester. You've sent notices but don't want to go through Centre County Magisterial District Court eviction proceedings. We buy it as-is. You get paid. The tenant problem becomes our problem.",
                },
                {
                  title: 'Seasonal vacancy between leases',
                  desc: "The lease runs June-May. You're in the May window — old tenant out, new tenant not signed. The property is empty and you're carrying costs with no income. We can close during a vacancy period just as easily as with a tenant in place.",
                },
                {
                  title: 'Property damage at move-out',
                  desc: "Previous tenant left the place wrecked — holes in walls, stained carpet, broken fixtures. You're looking at $15,000+ in repairs to get it rent-ready again. We buy it in that condition. You don't fix it.",
                },
                {
                  title: 'Long-term tenant, great history — but you want out',
                  desc: "Your tenant has been there 8 years and pays on time. But you're 65, tired of the management calls, and want the capital. We buy the property, the tenant stays, and everyone moves on with their lives.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your State College Rental"
            subheadline="Tenant in place is fine. As-is condition is fine. Written offer in 24 hours."
            sourcePage="/markets/state-college-pa/tenant-occupied"
          />

          <FAQSection items={FAQ_ITEMS} heading="Selling a Tenant-Occupied Property in State College — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/tenant-occupied" className="text-brand-primary hover:underline">Tenant-Occupied Property Guide (PA)</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">Sell Your State College House for Cash</Link>
            </p>
            <p className="mt-3 text-xs text-gray-400">
              Sources:{' '}
              <a href="https://datausa.io/profile/geo/state-college-pa/" target="_blank" rel="noopener noreferrer" className="underline">DataUSA — State College Demographics</a>
              {' '}·{' '}
              <a href="https://www.rentcafe.com/average-rent-market-trends/us/pa/state-college/" target="_blank" rel="noopener noreferrer" className="underline">RentCafe — State College Rental Market</a>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
