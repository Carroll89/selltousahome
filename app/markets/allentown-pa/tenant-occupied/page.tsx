import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, allentownLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied Rental in Allentown PA | Cash Offer',
  description:
    'Selling a rental property with tenants in Allentown PA? We buy tenant-occupied properties as-is — no eviction required. Cash offer in 24 hours, close in 7-14 days. 58% renter market.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/tenant-occupied` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a house with tenants still living in it in Pennsylvania?',
    answer:
      'Yes. Pennsylvania law allows you to sell a property with tenants in place. The sale doesn\'t terminate the lease — the lease transfers to the new buyer along with the property. This is common in Allentown\'s investment property market, where 58% of residents are renters.',
  },
  {
    question: 'Does my tenant have to be notified if I sell?',
    answer:
      'Yes. Pennsylvania requires written notice to tenants before the property is sold. Lease terms and conditions remain in effect for the new owner. We handle the notification requirements and coordinate the transition.',
  },
  {
    question: 'Do I need to evict the tenant before selling to you?',
    answer:
      'No. We buy tenant-occupied properties. You don\'t need to go through the eviction process before closing. We take ownership of the property — and the tenant relationship — at closing. This is especially valuable in Allentown, where Lehigh County eviction proceedings can be lengthy.',
  },
  {
    question: 'What if my tenant is behind on rent or has damaged the property?',
    answer:
      'That\'s a situation we see regularly in Allentown\'s rental market. We account for the tenant\'s payment status and any damage in our offer. You don\'t fix it, and you don\'t have to pursue the tenant for back rent. We take it from there at closing.',
  },
  {
    question: 'What happens to the security deposit at closing?',
    answer:
      'Any security deposit you\'re holding must be transferred to the buyer at closing. This is credited or debited on the closing statement. The title company handles the accounting.',
  },
  {
    question: 'What are Allentown\'s rental market conditions?',
    answer:
      'Allentown has one of the highest renter-occupied rates in Pennsylvania at approximately 58%. This means a large pool of long-term tenants and a robust investor market for rental properties. Properties in ZIPs 18102 and 18103 see strong demand from landlords looking to acquire cash-flowing rentals.',
  },
];

const pageUrl = `${SITE_URL}/markets/allentown-pa/tenant-occupied`;

export default function AllentownTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        allentownLocalBusinessSchema,
        articleSchema('Selling a Tenant-Occupied Property in Allentown, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/allentown-hero.jpg"
          alt="Allentown PA homes — we buy houses fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/allentown-pa" className="hover:text-white">Allentown</Link> › Tenant-Occupied Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Allentown Rental — Tenant Still in It
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You don&apos;t have to evict the tenant first. We buy rental properties in Allentown with tenants
              in place — non-paying, month-to-month, lease violations, or just time to be done landlording.
              With 58% of Allentown residents renting, we know this market.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk Through Your Situation
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/allentown-pa/tenant-occupied" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0f9/9i3z8bWrhNYAyWExOZasV_allentown-tenant-occupied.mp4"
        title="Selling a Tenant-Occupied Property in Allentown"
        poster="/images/video-posters/allentown-tenant-occupied-poster.jpg"
        subtitle="See how we buy tenant-occupied properties in Allentown — no evictions required"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Selling a rental property in Allentown with tenants in place is one of the trickier real estate situations you can be in. I&apos;m with USA Home Buyers, and we handle tenant-occupied properties all the time.</p>
            <p className="mb-3">Most retail buyers using conventional financing don&apos;t want to buy a tenant-occupied property, especially with an active lease. Lenders get nervous. Buyers want to move in, not inherit a landlord relationship. That cuts your buyer pool dramatically right from the start.</p>
            <p className="mb-3">Pennsylvania landlord-tenant law also gives your tenants specific rights around showings and access. If your tenant isn&apos;t cooperative — which happens a lot when they know the property is being sold — getting the house shown and sold through the MLS can be a months-long ordeal.</p>
            <p className="mb-3">We buy tenant-occupied properties in Allentown as-is, with tenants in place. We don&apos;t require you to evict before closing. We make our offer based on the property and the situation, and we handle the tenant transition after closing.</p>
            <p className="mb-3">Allentown and the Lehigh Valley have a strong rental market. Whether you have a long-term tenant or a problem tenant situation you need to exit, we&apos;ve seen it.</p>
            <p className="mb-3">Call USA Home Buyers at 888-274-5006. Cash offer in 24 hours, close in 7 to 14 days. No eviction required.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer</h2>
            <p className="text-gray-700 text-sm">
              You can sell a tenant-occupied property in Pennsylvania without evicting first. The lease
              transfers to the new buyer at closing. Allentown is a high-renter market (58% renter-occupied)
              — we buy these regularly, including non-paying tenants, problem tenants, tenants with lease violations,
              and tenants who won&apos;t allow showings. You sign the deed, we take it from there.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Situations We Handle in Allentown</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Non-paying tenant',
                  desc: 'Your tenant stopped paying rent but hasn\'t left. You\'re carrying the mortgage out of pocket every month and you\'re done. We buy it with the tenant in place — you don\'t need to go through Lehigh County Court of Common Pleas eviction process before closing.',
                },
                {
                  title: 'Tenant won\'t allow showings',
                  desc: 'A traditional sale requires the tenant to cooperate with showings. If they refuse, you\'re stuck. We don\'t need multiple showings — we\'ll do a brief inspection walk with advance notice per PA law and then buy as-is.',
                },
                {
                  title: 'Lease violation / property damage',
                  desc: 'The tenant has violated lease terms, damaged the property, or the unit has been altered without permission. We factor that into our offer. You don\'t fix it — we deal with it after closing.',
                },
                {
                  title: 'Bethlehem Steel-era rental property',
                  desc: 'Allentown has many older industrial-era row homes and rental properties. Aging systems, deferred maintenance, code violations piling up — we buy these as-is. The property\'s history doesn\'t disqualify it.',
                },
                {
                  title: 'Done being a landlord',
                  desc: 'The tenant is fine, the property is fine, you just don\'t want to be in the landlord business anymore. We buy cash-flowing rentals and distressed ones. Tell us what you have.',
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">PA Tenant Rights — What This Means for Your Sale</h2>
            <p className="text-gray-700 mb-4">
              Pennsylvania has tenant protections that affect how a sale works, but they don&apos;t prevent the sale:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-brand-dark text-sm mb-2">Lease survives the sale</h3>
                <p className="text-xs text-gray-600">
                  If the tenant has a fixed-term lease, the lease terms transfer to the new buyer. The tenant
                  keeps their right to occupy the unit until the lease expires. A cash buyer buying
                  as-is accepts this condition.
                </p>
              </div>
              <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-brand-dark text-sm mb-2">Month-to-month tenants</h3>
                <p className="text-xs text-gray-600">
                  Month-to-month tenants can be given written notice by the new owner (typically 15-30 days
                  depending on rent schedule). This doesn&apos;t need to happen before your sale closes.
                </p>
              </div>
              <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-brand-dark text-sm mb-2">Showing notice required</h3>
                <p className="text-xs text-gray-600">
                  PA law requires advance notice before entering the unit for inspections or showings —
                  typically at least 24 hours. We comply with this. We don&apos;t need multiple showings;
                  one walkthrough is typically enough for our evaluation.
                </p>
              </div>
              <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-brand-dark text-sm mb-2">Security deposit transfer</h3>
                <p className="text-xs text-gray-600">
                  Any security deposit you hold must be transferred to the buyer at closing. This is handled
                  on the closing statement — no separate action needed from you.
                </p>
              </div>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get an Offer on Your Allentown Rental"
            subheadline="Tenant still in it? That's fine. We handle it."
            sourcePage="/markets/allentown-pa/tenant-occupied"
          />

          <FAQSection items={FAQ_ITEMS} heading="Selling an Allentown Rental — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/tenant-occupied" className="text-brand-primary hover:underline">Tenant-Occupied Property Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Sell Your Allentown House</Link>
            
              {'·'}{' '}
              <Link href="/blog/destroyed-rental-property-case-study" className="text-brand-primary hover:underline">Case Study: Destroyed Rental, $50K Cash Out</Link></p>
          </div>
        </article>
      </div>
    </>
  );
}
