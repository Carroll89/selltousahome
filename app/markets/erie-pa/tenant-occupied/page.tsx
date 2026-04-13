import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Tenant-Occupied Erie PA — Sell Your Rental Fast',
  description:
    'Selling a tenant-occupied property in Erie PA? We buy rental properties with tenants in place — including non-paying tenants. Cash offer in 24 hours. No eviction needed.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/tenant-occupied` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Erie PA rental property with a tenant still in it?',
    answer:
      "Yes. We buy tenant-occupied properties with tenants in place — including non-paying tenants and difficult eviction situations. You don't have to complete an eviction before selling. We take on the tenant relationship at closing.",
  },
  {
    question: 'Do I need to give the tenant notice before selling in Pennsylvania?',
    answer:
      "Pennsylvania tenants have certain rights when a property is sold. Generally, a valid lease survives the sale — the new buyer becomes the landlord. Month-to-month tenants are typically entitled to 15 days' notice to vacate from the new owner. We're familiar with PA landlord-tenant law and handle this after closing.",
  },
  {
    question: 'What if the tenant hasn\'t paid rent in months?',
    answer:
      "We buy properties with non-paying tenants. We factor the tenant situation into our offer. You don't have to complete the PA eviction process (which can take months) before selling to us. You walk away, we handle the tenant.",
  },
  {
    question: 'How much will you pay for a tenant-occupied Erie rental?',
    answer:
      "Cash offers for tenant-occupied Erie rentals account for property condition, current rent (or lack thereof), the tenant situation, and exit costs. With a non-paying tenant, offers are typically toward the lower end of our 60-75% ARV range. With a paying tenant, we may offer closer to retail. Every situation is different.",
  },
  {
    question: "Why are so many Erie landlords selling right now?",
    answer:
      "Erie has a ~50% renter-occupied rate and a 77% pre-1970 housing stock. Many landlords in Erie are non-professional investors who bought one or two properties and are now dealing with deferred maintenance, aging systems, difficult tenants, and a market that's harder to manage than they expected. We buy in all these situations.",
  },
];

const pageUrl = `${SITE_URL}/markets/erie-pa/tenant-occupied`;

export default function ErieTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Sell Tenant-Occupied Rental Property in Erie PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/erie-pa-hero.jpg"
          alt="Erie PA rental home — sell with tenant in place"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/erie-pa" className="hover:text-white">Erie PA</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Tenant-Occupied Property in Erie PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Erie has a ~50% renter-occupied rate — one of the highest in northwest Pennsylvania.
              If you&apos;re a tired landlord dealing with non-paying tenants, deferred maintenance on an aging property,
              or just ready to exit, we buy rental properties with tenants in place. No eviction needed.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/erie-pa/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• We buy <strong>tenant-occupied properties with tenants in place</strong> — paying or non-paying</li>
              <li>• <strong>No eviction required</strong> before you sell — we take on the tenant after closing</li>
              <li>• Erie&apos;s ~50% renter rate means this is one of the most common situations we handle</li>
              <li>• We cover all closing costs — no commissions, no fees, no surprise deductions</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Tired Erie Landlord Problem</h2>
            <p className="text-gray-700 mb-4">
              Erie&apos;s rental market looks attractive on paper — cheap properties, ~50% renters, consistent demand.
              But for non-professional landlords, the reality is different. Erie&apos;s housing stock is 77% pre-1970,
              which means constant maintenance issues. The city&apos;s 23% poverty rate means tenant financial
              instability is common. And lake-effect snow (104+ inches per year) accelerates property wear.
            </p>
            <p className="text-gray-700 mb-4">
              Many Erie landlords reached out to us because they&apos;re dealing with one or more of these:
            </p>
            <div className="space-y-3">
              {[
                'Non-paying tenant — months of unpaid rent, PA eviction process pending',
                'Property needs major work — roof, electrical, plumbing — costs exceed rent value',
                'Out-of-state landlord who can\'t manage a property in Erie from a distance',
                'Inherited rental — didn\'t ask to be a landlord and don\'t want to be',
                'Multiple properties — selling the underperformer to simplify',
                'Tenant on a fixed lease you want to honor but still need to exit',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start border border-gray-200 rounded-lg p-3">
                  <span className="text-brand-primary font-bold mt-0.5">→</span>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How a Tenant-Occupied Sale Works</h2>
            <div className="space-y-3">
              {[
                { step: '1', label: 'You contact us — no eviction required first', detail: "Tell us about the property and tenant situation. We don't require you to evict or remove tenants before we make an offer." },
                { step: '2', label: 'We make a cash offer accounting for tenant situation', detail: "Offer considers property condition, rent rolls or non-payment, and exit complexity. Written offer in 24 hours." },
                { step: '3', label: 'You sign, we coordinate with tenants for access', detail: "We'll contact the tenant to schedule a brief walkthrough per PA landlord-tenant law (24-hour notice required for entry)." },
                { step: '4', label: 'Close in 7-14 days, tenant stays — we handle from here', detail: "You get paid. The tenant relationship transfers to us at closing. PA title company handles the paperwork." },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer for Your Erie PA Rental Property"
            subheadline="Tenant in place, no problem. Written offer in 24 hours. We cover all closing costs."
            sourcePage="/markets/erie-pa/tenant-occupied"
          />

          <FAQSection items={FAQ_ITEMS} heading="Tenant-Occupied Erie PA Rental — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa/property-liens" className="text-brand-primary hover:underline">Property Liens Erie PA</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
