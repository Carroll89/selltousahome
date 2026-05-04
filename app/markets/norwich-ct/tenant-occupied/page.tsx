/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { norwichLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/norwich-ct/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Norwich CT — We Buy With Tenants In Place',
  description:
    'Need to sell a rental property in Norwich CT with tenants in place? USA Home Buyers purchases tenant-occupied homes as-is in New London County — cash offer in 24 hours, no eviction required.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy my Norwich rental with tenants still living there?',
    answer:
      "Yes. We purchase tenant-occupied properties with tenants in place — month-to-month tenants, lease tenants, and non-paying tenants. No eviction required before sale. We handle the tenant situation as the new owner after closing. Call 888-274-5006.",
  },
  {
    question: 'What are my notice obligations to tenants in Connecticut?',
    answer:
      "Connecticut landlord-tenant rules govern entry rights, notice, deposits, and lease obligations. We typically minimize disruption to tenants — we can often make an offer based on exterior inspection and available information without requiring interior showings. Consult a CT-licensed attorney for notice requirements specific to your lease.",
  },
  {
    question: 'What if my tenant is behind on rent or I have begun eviction?',
    answer:
      "We buy in all situations — current tenants, month-to-month tenants, tenants behind on rent, and properties with active CT Circuit Court eviction cases. We price the offer to account for tenant risk and take that burden ourselves after closing. Call 888-274-5006.",
  },
  {
    question: 'How does the security deposit transfer work in Connecticut?',
    answer:
      "When a Connecticut rental property is sold, lease and deposit obligations are handled through the closing and transfer to the new owner as required by Connecticut law. At closing, security deposit obligations transfer to us and we manage that relationship going forward. This is standard and your title company will handle the mechanics.",
  },
  {
    question: 'What areas near Norwich do you buy tenant-occupied rentals?',
    answer:
      "New London County communities including Norwich, New London, Groton, Waterford, Montville, Preston, Ledyard, Griswold, Stonington, East Lyme, Lisbon, Sprague, Voluntown, and surrounding communities. Call 888-274-5006.",
  },
];

const LINKS = [
  { href: '/markets/norwich-ct/inherited-property', label: 'Inherited Property' },
  { href: '/markets/norwich-ct/foreclosure', label: 'Foreclosure' },
  { href: '/markets/norwich-ct/probate', label: 'Probate' },
  { href: '/markets/norwich-ct/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/norwich-ct/code-violations', label: 'Code Violations' },
  { href: '/markets/norwich-ct/fire-damage', label: 'Fire Damage' },
  { href: '/markets/norwich-ct', label: '← Back to Norwich CT' },
];

export default function NorwichTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          norwichLocalBusinessSchema,
          articleSchema('Sell a Tenant-Occupied Rental in Norwich CT', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/norwich-ct" className="hover:text-white">Norwich CT</Link>{' '}
              › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Tenant-Occupied Rental in Norwich CT — We Buy With Tenants In Place
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases tenant-occupied rental properties throughout Norwich and
                New London County — paying tenants, month-to-month tenants, or non-paying tenants.
                No eviction required before closing. Written cash offer in 24 hours. Close in
                7–14 days. Call 888-274-5006.
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
              subheadline="Tenant-occupied specialists — close in 7–14 days."
              sourcePage="/markets/norwich-ct/tenant-occupied"
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
            Selling a Rental Property With Tenants in Norwich CT
          </h2>
          <p className="text-gray-700 mb-4">
            Selling a tenant-occupied property through the retail market is difficult: most
            retail buyers are owner-occupants who require vacant possession, and CT notice
            requirements, tenant coordination for showings, and the uncertainty of tenant
            cooperation all extend the timeline. CT Circuit Court eviction cases can take
            several months to complete.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases tenant-occupied properties without requiring vacant
            possession. We typically don't require interior showings that disrupt your tenant.
            We make an offer based on exterior inspection, photos, and available property
            information. You close, we become the new landlord — and the tenant situation
            transfers to us to manage.
          </p>

          <div className="border-l-4 border-blue-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Non-paying tenants and eviction situations</h3>
            <p className="text-sm text-gray-700">
              CT eviction (unlawful detainer) runs through Circuit Court. Even with a court order,
              the process takes time. If you're mid-eviction or facing a non-paying tenant
              situation, a cash sale is often faster and less expensive than completing the
              eviction, doing repairs, and re-renting or listing. We account for tenant risk
              in our offer and take that burden off you.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Sales in Norwich CT" />

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
          headline="Ready to Sell Your Norwich CT Rental Property?"
          sourcePage="/markets/norwich-ct/tenant-occupied"
        />
      </div>
    </>
  );
}
