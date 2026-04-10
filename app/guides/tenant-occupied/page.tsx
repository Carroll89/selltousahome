import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Selling a Tenant-Occupied Property in Pennsylvania — Cash Buyers',
  description:
    'Selling a rental property with tenants in Pennsylvania? Cash buyers purchase tenant-occupied properties as-is. PA landlord-tenant law explained.',
  alternates: { canonical: 'https://selltousahome.com/guides/tenant-occupied' },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a rental property with tenants in Pennsylvania?',
    answer:
      'Yes. You can sell a tenant-occupied property at any time. The sale does not terminate the lease — the new owner takes over as landlord and must honor the existing lease terms. Cash buyers purchase tenant-occupied properties and handle the tenant relationship after closing.',
  },
  {
    question: 'How much notice do I need to give tenants before selling in PA?',
    answer:
      'You are not required to give tenants notice that you\'re selling the property. However, if you want to show the property (required for a traditional listing but not for a cash sale), you must give reasonable notice before entry — typically 24 hours under Pennsylvania law.',
  },
  {
    question: 'What happens to the lease when I sell a tenant-occupied property?',
    answer:
      'The lease transfers to the new owner. The buyer must honor the existing lease until it expires. Pennsylvania follows the "sale does not break a lease" doctrine — tenants\' rights continue through a change of ownership.',
  },
  {
    question: 'Can I sell if my tenant stopped paying rent?',
    answer:
      'Yes. Cash buyers purchase properties with non-paying tenants. You are not required to complete the eviction process before selling. The buyer takes ownership subject to the existing tenancy situation and handles it from there.',
  },
  {
    question: 'What is "cash for keys" and does it work in Pennsylvania?',
    answer:
      'Cash for keys is a voluntary agreement where the landlord pays the tenant to vacate the property and leave it in acceptable condition, avoiding the formal eviction process. It\'s legal in Pennsylvania and can be faster and cheaper than eviction for both parties. Typical amounts range from $500 to $2,500 depending on the situation.',
  },
];

const pageUrl = `${SITE_URL}/guides/tenant-occupied`;

export default function TenantOccupiedGuidePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling a Tenant-Occupied Property in Pennsylvania', pageUrl),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/guides" className="hover:text-white">Guides</Link> › Tenant-Occupied Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Tenant-Occupied Property in Pennsylvania
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You don&apos;t have to wait for the lease to end, complete an eviction, or navigate tenant cooperation
              for showings. Cash buyers purchase tenant-occupied rentals as-is. Written offer in 24 hours.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Pennsylvania Landlord-Tenant Law — What You Need to Know
            </h2>
            <p className="text-gray-700 mb-4">
              Pennsylvania landlord-tenant relationships are primarily governed by the <strong>Pennsylvania Landlord
              and Tenant Act (68 P.S. § 250.101 et seq.)</strong>. Understanding the key provisions helps you evaluate
              your options when selling a rental property.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Month-to-Month Tenancies — Notice Requirements</h3>
                <p className="text-sm text-gray-700">
                  For a month-to-month tenancy, you must give at least 15 days written notice to terminate (for
                  tenancies of less than 1 year) or 30 days notice (for tenancies of 1 year or more). Notice must
                  be in writing. The notice period begins at the start of the next rental period.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Fixed-Term Leases — Lease Transfers with the Property</h3>
                <p className="text-sm text-gray-700">
                  If there is a fixed-term lease (e.g., a 12-month lease), selling the property does not terminate
                  it. The new owner must honor the lease until it expires. The sale simply transfers the landlord
                  role to the buyer. This is why many cash buyers are comfortable purchasing tenant-occupied rentals —
                  they become the new landlord and handle the tenancy from there.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Right of Entry for Showings</h3>
                <p className="text-sm text-gray-700">
                  Pennsylvania law requires landlords to provide reasonable notice before entering a rented unit.
                  For showing purposes, most landlords provide 24-48 hours written notice. Tenants can make showings
                  difficult if they&apos;re uncooperative — this is one major reason landlords prefer cash buyers (who
                  don&apos;t need showings).
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">No Right of First Refusal</h3>
                <p className="text-sm text-gray-700">
                  Pennsylvania does not grant tenants a statutory right of first refusal when a property is sold.
                  You are not required to offer the tenant the opportunity to purchase before selling to a third party,
                  unless your lease specifically includes such a provision.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Options for Selling a Rental in Pennsylvania
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-2">Option 1: Sell to a Cash Buyer With Tenant in Place</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Cash buyers purchase tenant-occupied properties. No showings, no need for tenant cooperation,
                  no waiting for the lease to end. The buyer inherits the tenant relationship at closing. If you
                  have a non-paying or problem tenant, a cash buyer may discount the offer to reflect that —
                  but you close and move on.
                </p>
                <p className="text-xs font-semibold text-brand-secondary">Best for: Non-paying tenants, problem tenants, lease situations where tenant cooperation is unlikely.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-2">Option 2: Cash for Keys — Negotiate Voluntary Vacancy</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Offer the tenant a cash payment to vacate voluntarily before the sale. Faster and cheaper than
                  formal eviction. Works best when the tenant wants to move but needs financial help covering
                  moving costs or a deposit on a new place. See section below for details.
                </p>
                <p className="text-xs font-semibold text-gray-500">Best for: Cooperative tenants who want to leave but lack the means to do so.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-2">Option 3: Wait for Lease to Expire</h3>
                <p className="text-gray-700 text-sm mb-2">
                  If the lease is expiring soon (1-3 months), you can give proper notice and list after the tenant
                  vacates. This gets you a vacant property for traditional listing — which typically brings higher
                  offers. Practical when the timeline works in your favor.
                </p>
                <p className="text-xs font-semibold text-gray-500">Best for: Lease expiring soon, cooperative tenant, property in good condition.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-2">Option 4: Formal Eviction (Then Sell)</h3>
                <p className="text-gray-700 text-sm mb-2">
                  If a tenant is not paying and won&apos;t leave voluntarily, formal eviction through the District
                  Justice is an option. In Pennsylvania, the process typically takes 4-8 weeks for non-payment.
                  Costly (time and money) but may be necessary in some situations.
                </p>
                <p className="text-xs font-semibold text-gray-500">Note: You can sell to a cash buyer at any point during the eviction process — the buyer takes over the eviction.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Cash for Keys — What It Is and How It Works in PA
            </h2>
            <p className="text-gray-700 mb-4">
              Cash for keys is a voluntary agreement between a landlord and tenant: the landlord pays the tenant
              a lump sum in exchange for vacating the property by a specified date in clean, undamaged condition.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
              <h3 className="font-semibold text-brand-dark mb-3">Typical Cash for Keys Terms</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Payment amount:</strong> $500-$2,500 depending on situation, location, and urgency</p>
                <p><strong>Vacate deadline:</strong> 7-21 days from signing the agreement</p>
                <p><strong>Condition requirement:</strong> Property returned in clean condition, all personal property removed</p>
                <p><strong>Agreement format:</strong> Written agreement signed by landlord and tenant</p>
                <p><strong>Payment timing:</strong> Usually upon vacating and key return — not upfront</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              Cash for keys is almost always faster and cheaper than formal eviction in Pennsylvania. A formal
              eviction runs 4-8 weeks and costs $200-$500+ in court fees, plus your time. Cash for keys at
              $1,500 may actually be the less expensive option.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Rental Property"
            subheadline="Tenant-occupied is fine. Written offer in 24 hours."
            sourcePage="/guides/tenant-occupied"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions — Selling Tenant-Occupied Property in PA"
          />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/harrisburg-pa/tenant-occupied" className="text-brand-primary hover:underline">Harrisburg Tenant-Occupied Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Sell As-Is Guide</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
