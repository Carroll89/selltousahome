/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { binghamtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Binghamton NY — Cash Buyer, No Eviction',
  description:
    "Selling a rental property in Binghamton NY with tenants in place? USA Home Buyers purchases tenant-occupied houses as-is — no eviction required before closing. Call 888-274-5006.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: "Can you buy a house with a tenant still living there?",
    answer:
      "Yes. USA Home Buyers purchases tenant-occupied properties throughout Binghamton and Broome County. We take the property subject to the existing lease — you don't need to evict the tenant before closing. We handle the landlord-tenant transition as the new owner.",
  },
  {
    question: "What are New York's tenant protections when selling?",
    answer:
      "New York tenant protections apply under RPL Article 7. A tenant with a fixed-term lease has the right to remain through the lease term regardless of ownership change. Month-to-month tenants are entitled to proper notice before vacating — the amount of notice depends on how long they've occupied the unit (NY RPL §232-b). We understand NY tenant rights and purchase properties subject to existing tenancy agreements. Consult a New York-licensed attorney for your specific lease terms and local ordinances.",
  },
  {
    question: "What if the tenant stopped paying rent?",
    answer:
      "We buy properties with non-paying tenants. You don't need to resolve the eviction before selling to us. A non-paying tenant is a cash buyer's problem to inherit — which is why we account for that in our offer. You close, you're done, and we handle the tenant situation as the new owner.",
  },
  {
    question: "Do I have to disclose the lease to the buyer?",
    answer:
      "Yes. As the seller, you'll provide all lease documentation — lease agreement, security deposit records, and any relevant correspondence with the tenant — as part of the sale. We review these as part of our due diligence. Security deposits must be transferred to us at closing under NY RPL §7-103.",
  },
  {
    question: "What types of rentals do you purchase in Binghamton?",
    answer:
      "We purchase student rentals near Binghamton University (Westside corridor), working-class rentals on the South Side and North Side, single-family homes with month-to-month tenants, 2-family houses, and multi-unit properties throughout Broome County. Call 888-274-5006 to discuss your specific property.",
  },
];

const LINKS = [
  { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property' },
  { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure' },
  { href: '/markets/binghamton-ny/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/binghamton-ny/probate', label: 'Probate' },
  { href: '/markets/binghamton-ny/code-violations', label: 'Code Violations' },
  { href: '/markets/binghamton-ny/fire-damage', label: 'Fire Damage' },
  { href: '/markets/binghamton-ny', label: '← Back to Binghamton NY' },
];

export default function BinghamtonTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema('Sell Tenant-Occupied Property in Binghamton NY', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
              › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Tenant-Occupied House in Binghamton NY — No Eviction Required
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases tenant-occupied properties in Binghamton and Broome
                County — active leases, month-to-month, non-paying tenants. No eviction needed
                before closing. NY tenant protections under RPL Article 7 apply; consult a
                NY attorney for your lease terms. Written cash offer in 24 hours. Call 888-274-5006.
              </p>
            </div>
            <a
              href="tel:+18882745006"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Cash Offer"
              subheadline="Tenant in place — no problem. Written offer in 24 hours."
              sourcePage="/markets/binghamton-ny/tenant-occupied"
            />
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-green-600 text-white p-3 flex items-center justify-center gap-3 shadow-lg">
        <a href="tel:+18882745006" className="font-bold text-base">
          📞 Call 888-274-5006 — Get Cash Offer
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Binghamton's Rental Landscape — Why Tenant-Occupied Sales Are Common
          </h2>
          <p className="text-gray-700 mb-4">
            Binghamton University draws roughly 18,000 students from across the state and region.
            The Westside neighborhood — particularly the Front Street and Leroy Street corridor —
            has a concentration of student rentals in older single-family and 2-family homes.
            Many of these properties are owned by longtime landlords, former IBM-era families,
            or out-of-state heirs who inherited rental property alongside the estate.
          </p>
          <p className="text-gray-700 mb-4">
            The South Side and North Side also carry working-class rental stock — older
            2-families and single-family homes where landlord-tenant relationships have
            existed for years, sometimes without formal leases. When an owner decides to exit,
            the tenant situation complicates a traditional sale: most retail buyers don't want
            to inherit a tenant.
          </p>

          <div className="border-l-4 border-orange-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">What "subject to tenancy" means</h3>
            <p className="text-sm text-gray-700">
              When we buy a tenant-occupied property, we take ownership subject to the existing
              lease. The tenant's legal right to occupy doesn't change at the moment of sale.
              As the new owner, we step into the landlord role and handle the tenant relationship
              going forward. You, as the seller, hand over the lease documents and security
              deposit and you're done.
            </p>
          </div>

          <div className="border-l-4 border-orange-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">NY tenant protections apply</h3>
            <p className="text-sm text-gray-700">
              New York's RPL Article 7 provides meaningful protections for tenants — fixed-term
              leases survive ownership change, and month-to-month tenants are entitled to proper
              notice under NY RPL §232-b. If a Section 8 Housing Assistance Payments (HAP)
              contract is in place, confirm HAP assignment requirements before closing.
              Consult a New York-licensed real estate attorney for your specific lease terms
              and applicable local ordinances.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling Tenant-Occupied Property in Binghamton NY" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Binghamton NY Rental Property?"
          sourcePage="/markets/binghamton-ny/tenant-occupied"
        />
      </div>
    </>
  );
}
