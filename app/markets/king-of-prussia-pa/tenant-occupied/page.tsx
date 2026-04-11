import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, kingOfPrussiaLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied Property King of Prussia PA',
  description:
    'Selling a rental property with tenants in King of Prussia or Montgomery County PA? We buy tenant-occupied homes as-is. No eviction needed, no repairs, close in 7-14 days.',
  alternates: { canonical: `${SITE_URL}/markets/king-of-prussia-pa/tenant-occupied` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my rental property in King of Prussia while tenants are living there?',
    answer:
      "Yes. Pennsylvania law allows the sale of tenant-occupied properties. The lease transfers to the new owner — tenants keep their rights under the existing lease. As a cash buyer, we purchase the property with tenants in place. You don't need to wait for the lease to expire or go through an eviction.",
  },
  {
    question: 'Do tenants have the right to buy the property before I sell?',
    answer:
      "Pennsylvania does not have a statewide tenant right of first refusal law for residential properties. Tenants in King of Prussia and Upper Merion Township do not have a statutory right to purchase the property before you sell it, unless your specific lease agreement includes such a clause. Review your lease before proceeding.",
  },
  {
    question: 'How much notice do I need to give tenants before selling in Pennsylvania?',
    answer:
      "Pennsylvania law (68 P.S. § 250.501) requires landlords to give tenants written notice before entering the property for showings. For periodic tenancies (month-to-month), the standard notice for entry is 24 hours. However, because we purchase properties as-is without requiring showings or inspections by retail buyers, tenant disruption is typically minimal — often just one walkthrough.",
  },
  {
    question: 'What if my tenant has stopped paying rent?',
    answer:
      "We buy tenant-occupied properties regardless of payment status — including properties with non-paying tenants. You don't need to complete the eviction before selling. We take ownership of the tenant relationship and handle it from there. This is one of the most common reasons Montgomery County landlords sell to cash buyers.",
  },
  {
    question: 'What happens to the security deposit when I sell?',
    answer:
      "Under PA landlord-tenant law (68 P.S. § 250.512), security deposits must be transferred to the new owner at closing, or returned to the tenant. This is handled through the title company at closing — it's a standard step in any Pennsylvania tenant-occupied property transaction.",
  },
];

const pageUrl = `${SITE_URL}/markets/king-of-prussia-pa/tenant-occupied`;

export default function KopTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        kingOfPrussiaLocalBusinessSchema,
        articleSchema('Selling a Tenant-Occupied Property in King of Prussia, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/king-of-prussia-hero.jpg"
          alt="King of Prussia PA — sell tenant-occupied rental property"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/king-of-prussia-pa" className="hover:text-white">King of Prussia</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Tenant-Occupied Rental in King of Prussia, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You don&apos;t need to wait for the lease to end. You don&apos;t need to evict the tenant. We buy
              tenant-occupied properties in King of Prussia and Montgomery County as-is — with tenants
              still in place — and close in 7–14 days.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We Handle the Tenant Situation
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/king-of-prussia-pa" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95df2c/Znob3E96boiwZJHMS5_eL_tmp7ayu0frl.mp4"
        title="Selling a Tenant-Occupied Property in King of Prussia"
        poster="/images/video-posters/kop-tenant.jpg"
        subtitle="We buy with tenants in place — no eviction required"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Selling a rental property in King of Prussia or Montgomery County with tenants in place is one of the situations where a cash buyer makes the most sense. I&apos;m with USA Home Buyers, and we buy tenant-occupied properties regularly.</p>
            <p className="mb-3">Most buyers using conventional financing don&apos;t want to purchase a tenant-occupied property. They either want to move in themselves or they&apos;re not set up to be landlords. Financing lenders get cautious. Your buyer pool shrinks significantly before you even list.</p>
            <p className="mb-3">Pennsylvania landlord-tenant law gives your tenants rights around showings and access. If your tenant isn&apos;t cooperative — which often happens when they realize the property is being sold — coordinating showings through the MLS can be a nightmare.</p>
            <p className="mb-3">We don&apos;t need showings. We buy tenant-occupied properties in King of Prussia as-is, with tenants in place. We take the property with the existing lease and handle the tenant transition ourselves after closing.</p>
            <p className="mb-3">Montgomery County&apos;s rental market is strong, particularly near the King of Prussia business corridor, Valley Forge, and communities along Route 202.</p>
            <p className="mb-3">Call USA Home Buyers at 888-440-5250. Written cash offer in 24 hours. No eviction required.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Simplest Path Out of a Problem Rental</h2>
            <p className="text-gray-700 text-sm">
              Listing a tenant-occupied property on the MLS is complicated — most retail buyers don&apos;t want to
              deal with existing tenants, especially if the relationship has become difficult. A cash sale
              bypasses all of that. We buy the property as-is, with the tenant in place, and take over the
              landlord relationship at closing. You&apos;re done.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Tenant-Occupied Situations We Buy In King of Prussia
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Non-paying tenant',
                  desc: "You've started the eviction process or are considering it. Evictions in Pennsylvania take time and legal fees — typically 3–6 months from first missed payment to regaining possession. Selling now transfers that burden to us.",
                },
                {
                  title: 'Long-term tenant in a property you want to exit',
                  desc: "The tenant has been there for years. The property needs work. You want out of the landlord business. We buy it with the tenant in place — no disruption to a long-term tenant, no awkward conversations.",
                },
                {
                  title: 'Lease expiring and you don\'t want to re-rent',
                  desc: "If the lease expires soon but you don't want to go through another rental cycle, we can close the purchase after the lease ends — or buy with the tenant still in place if the timing works.",
                },
                {
                  title: 'Inherited rental with existing tenant',
                  desc: "You inherited a King of Prussia rental property and don't want to become a landlord. We buy the property with the tenant in place. You receive cash; the tenant stays. Everyone moves forward.",
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Pennsylvania Landlord-Tenant Law — Key Points for Sellers
            </h2>
            <p className="text-gray-700 mb-4 text-sm">
              Under Pennsylvania&apos;s Landlord and Tenant Act (68 P.S. § 250.101 et seq.), tenants have
              defined rights that transfer to the new owner at closing. Here&apos;s what matters for a sale:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="px-4 py-3 text-left">Item</th>
                    <th className="px-4 py-3 text-left">PA Law</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Lease transfer', 'Existing lease transfers to new owner at closing; tenant rights preserved'],
                    ['Security deposit', 'Must be transferred to buyer at closing or returned to tenant (68 P.S. § 250.512)'],
                    ['Notice of new ownership', 'New owner must notify tenant of purchase and address for notices'],
                    ['Tenant entry notice', '24-hour written notice required for non-emergency entry (68 P.S. § 250.511)'],
                    ['Eviction by new owner', 'New owner must follow PA eviction procedures if lease terminated after purchase'],
                  ].map(([item, law], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 font-medium text-brand-dark border-b border-gray-100">{item}</td>
                      <td className="py-3 px-4 text-gray-700 border-b border-gray-100 text-xs">{law}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <strong>Source:</strong>{' '}
              <a
                href="https://www.legis.state.pa.us/cfdocs/legis/LI/consCheck.cfm?txtType=HTM&ttl=68"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Pennsylvania Landlord and Tenant Act — 68 P.S. § 250.101 et seq. (legis.state.pa.us)
              </a>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Rental Property"
            subheadline="Tenant in place? That's fine. We buy it as-is."
            sourcePage="/markets/king-of-prussia-pa"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Tenant-Occupied Property in King of Prussia" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/king-of-prussia-pa/inherited-property" className="text-brand-primary hover:underline">
                Inherited Rental Property
              </Link>{' '}
              ·{' '}
              <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">
                Sell Your King of Prussia House
              </Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
