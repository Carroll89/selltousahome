/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Concord NH — We Buy As-Is',
  description:
    'Have open code violations on your Concord NH home? USA Home Buyers purchases homes with code violations, open permits, or city notices in Merrimack County — cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy my Concord house with open code violations?',
    answer:
      "Yes. We purchase houses with open Concord code violations, city notices, or administrative orders as-is. We resolve violations and liens at or after closing — you don't need to fix anything. Call 888-274-5006.",
  },
  {
    question: 'What kinds of code violations are common in Concord NH homes?',
    answer:
      "Common violations in Concord's older housing stock include: structural issues (failing foundations, rotted sills, bowing walls), roof and exterior violations, overgrown vegetation, unpermitted additions, plumbing and electrical deficiencies, and habitability issues. Older colonials and cape cods in Concord's established neighborhoods regularly carry these issues. We've bought properties with all of them.",
  },
  {
    question: 'Can I still sell if the City of Concord has issued an unsafe-building order?',
    answer:
      "Call us immediately at 888-274-5006. An unsafe-building determination doesn't prevent a sale — but time matters. We can move quickly to close before demolition orders are executed.",
  },
  {
    question: 'What happens to code violation liens at closing?',
    answer:
      "Municipal liens for code violations attach to the property. At closing, the title company (and required NH attorney) identify all liens; they are resolved from proceeds before you receive your net amount. We price our offer with known violations in mind — no surprises.",
  },
  {
    question: 'Do you need to inspect the interior if the property has violations?',
    answer:
      "We can often make an offer based on exterior inspection, city violation records, and photos. If an interior walkthrough is needed, we coordinate it at your convenience. We do not require multiple showings or extended inspection periods.",
  },
];

const LINKS = [
  { href: '/markets/concord-nh/inherited-property', label: 'Inherited Property' },
  { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/concord-nh/fire-damage', label: 'Fire Damage' },
  { href: '/markets/concord-nh/probate', label: 'Probate' },
  { href: '/markets/concord-nh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/concord-nh', label: '← Back to Concord NH' },
];

export default function ConcordCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          concordLocalBusinessSchema,
          articleSchema('Sell House With Code Violations in Concord NH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link>{' '}
              › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a House With Code Violations in Concord NH — We Buy As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Open code violations, city notices, or building orders don't prevent a cash sale.
                USA Home Buyers purchases Concord homes with code issues as-is throughout
                Merrimack County. Written cash offer in 24 hours, close in 7–14 days. We handle
                violations after closing. Call 888-274-5006.
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
              subheadline="Code violations welcome — cash offer in 24 hours."
              sourcePage="/markets/concord-nh/code-violations"
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
            Code Violations in Concord NH — Why They Happen
          </h2>
          <p className="text-gray-700 mb-4">
            Concord's housing stock includes many older colonial, cape cod, and Victorian-era homes
            that have exceeded the useful life of their original systems. When owners — especially
            elderly owners or out-of-state heirs — can't keep up with aging housing infrastructure,
            code violations accumulate. Roof failures, exterior deterioration, overgrown vegetation,
            unpermitted additions, and habitability issues are all common in Merrimack County's
            older housing inventory.
          </p>
          <p className="text-gray-700 mb-4">
            The City of Concord's code enforcement and building department track these violations.
            Municipal fines accrue and can become liens on the property. In severe cases, the city
            can declare a building unsafe and issue a demolition order. A cash sale stops that
            process — we purchase as-is, violations priced into our offer, liens resolved at closing.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling With Code Violations in Concord NH" />

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
          headline="Ready to Sell Your Concord NH Property With Code Violations?"
          sourcePage="/markets/concord-nh/code-violations"
        />
      </div>
    </>
  );
}
