/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { binghamtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Binghamton NY — Cash Buyer, As-Is',
  description:
    "Selling a house with open code violations in Binghamton NY? USA Home Buyers purchases code-violation properties as-is — no repairs, no remediation. Cash offer in 24 hours.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: "Can I sell a house with open code violations in Binghamton?",
    answer:
      "Yes. USA Home Buyers purchases properties with open City of Binghamton Building Division code violations as-is. You don't need to remediate violations or bring the property up to code before selling. We account for the violation and remediation costs in our offer.",
  },
  {
    question: "What types of code violations does the City of Binghamton issue?",
    answer:
      "The City of Binghamton Building Division enforces the International Property Maintenance Code (IPMC) as adopted by New York. Common violations in Binghamton's older housing stock include: deteriorated or failing roofs (ice dam damage is common given upstate winters), structural deficiencies, unsafe porches or stairs, inadequate heating, exposed or failing electrical systems (especially knob-and-tube wiring in pre-1940 homes), and exterior maintenance failures. We buy properties with all of these conditions.",
  },
  {
    question: "What happens to the code violations at closing?",
    answer:
      "When we purchase your property, the open violations transfer with it. We take responsibility for remediation as the new owner. You are not required to clear violations before closing to sell to us. However, you should disclose known violations to us as part of the purchase process.",
  },
  {
    question: "Are there tax liens for unresolved violations?",
    answer:
      "In some cases, Binghamton can place tax liens for unresolved code violations — particularly if the city performed emergency repairs on a non-compliant property. We conduct a title search and account for any outstanding liens in our offer. Known liens are generally resolved at closing from sale proceeds.",
  },
  {
    question: "What if the house also has deferred maintenance beyond the violations?",
    answer:
      "We buy as-is regardless of condition. Old roof, failing foundation, knob-and-tube wiring, boiler that needs replacement, deteriorated windows — these don't prevent a sale to us. Call 888-274-5006 for an honest, no-pressure offer.",
  },
];

const LINKS = [
  { href: '/markets/binghamton-ny/fire-damage', label: 'Fire Damage' },
  { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property' },
  { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure' },
  { href: '/markets/binghamton-ny/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/binghamton-ny/probate', label: 'Probate' },
  { href: '/markets/binghamton-ny/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/binghamton-ny', label: '← Back to Binghamton NY' },
];

export default function BinghamtonCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema('Sell House With Code Violations in Binghamton NY', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
              › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a House With Code Violations in Binghamton NY — Cash, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases Binghamton properties with open City Building Division
                code violations as-is — no remediation required. Roof failures, electrical issues,
                structural deficiencies, exterior maintenance orders — we buy them all. Written
                cash offer in 24 hours. Call 888-274-5006.
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
              subheadline="Code violations — no problem. Written offer in 24 hours."
              sourcePage="/markets/binghamton-ny/code-violations"
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
            Code Violations in Binghamton's Older Housing Stock
          </h2>
          <p className="text-gray-700 mb-4">
            Binghamton's residential inventory is among the oldest in New York's Southern Tier.
            Westside Victorians built in the 1890s–1910s, South Side 2-families from the 1920s
            and 1930s, and North Side Cape Cods from the post-war era all share a common challenge:
            aging systems and deferred maintenance that accumulate into code violation territory.
          </p>
          <p className="text-gray-700 mb-4">
            Upstate New York winters accelerate the problem. Ice damming — a function of poor
            attic insulation common in older homes — destroys roofs and causes water damage.
            Knob-and-tube wiring, common in pre-1940 Binghamton construction, creates electrical
            code exposure. Front porches and rear decks on older homes deteriorate faster than
            owners realize. The City of Binghamton Building Division actively inspects and cites
            violations — particularly on properties with deferred maintenance or complaints.
          </p>

          <div className="border-l-4 border-yellow-500 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">What we look for</h3>
            <p className="text-sm text-gray-700">
              When you contact us about a property with code violations, we want to understand
              the nature and extent of the violations (how many, which systems), any municipal
              correspondence, and whether liens have been attached for city-performed emergency
              work. With that information, we can typically provide a written offer within
              24 hours and close in 7–14 days.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-green-800 font-semibold">What "as-is" means for code violations</p>
            <p className="text-sm text-green-700 mt-1">
              Selling as-is to USA Home Buyers means you are not required to remediate any
              open violation before closing. We take the property in its current condition —
              violations, liens, deferred maintenance and all. There is no inspection contingency
              requiring repairs. You receive your cash, we handle remediation.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a Home With Code Violations in Binghamton NY" />

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
          headline="Ready to Sell Your Binghamton Property With Code Violations?"
          sourcePage="/markets/binghamton-ny/code-violations"
        />
      </div>
    </>
  );
}
