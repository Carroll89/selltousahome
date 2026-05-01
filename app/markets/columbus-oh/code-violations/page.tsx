/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { columbusLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/columbus-oh/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Columbus OH — We Buy As-Is',
  description:
    'Have open code violations on your Columbus OH home? USA Home Buyers purchases homes with code violations, open permits, or city notices in Franklin County — cash offer in 24 hours, close as-is.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy my Columbus house with open code violations?',
    answer:
      "Yes. We purchase houses with open Columbus code violations, city notices, or Franklin County administrative orders as-is. We resolve violations and liens at or after closing — you don't need to fix anything. Call 888-274-5006.",
  },
  {
    question: 'What kinds of code violations are common in Columbus OH homes?',
    answer:
      "Common Columbus violations in older housing stock include: structural issues (failing foundations, rotted sills), roof and exterior violations, overgrown vegetation, derelict outbuildings, plumbing and electrical deficiencies, and interior habitability issues. With 34.1% of Columbus's housing built in 1939 or earlier, code issues in older neighborhoods like Goodyear Heights, Kenmore, South Columbus, and East Columbus are common. We've bought properties with all of these issues.",
  },
  {
    question: 'Can I still sell if Columbus has issued a demolition order?',
    answer:
      "Call us immediately at 888-274-5006. We can move quickly — and in some cases a fast sale is the best way to stop a demolition order from being executed. Time matters in these situations.",
  },
  {
    question: 'What happens to code violation liens at closing?',
    answer:
      "Code violation fines and municipal liens attach to the property in Ohio. At closing, the title company identifies all liens and they are paid from proceeds before you receive your net amount. We account for known violations in our offer. No surprises — we price the offer with the situation in mind.",
  },
  {
    question: 'Do you need to inspect the interior if the property has violations?',
    answer:
      "We can often make an offer based on exterior inspection, photos, and city violation records. If an interior walkthrough is needed, we coordinate it at your convenience and with respect for any tenant or occupant. We do not require multiple showings or lengthy inspection periods.",
  },
];

const LINKS = [
  { href: '/markets/columbus-oh/inherited-property', label: 'Inherited Property' },
  { href: '/markets/columbus-oh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/columbus-oh/fire-damage', label: 'Fire Damage' },
  { href: '/markets/columbus-oh/probate', label: 'Probate' },
  { href: '/markets/columbus-oh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/columbus-oh', label: '← Back to Columbus OH' },
];

export default function ColumbusCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          columbusLocalBusinessSchema,
          articleSchema('Sell House With Code Violations in Columbus OH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/columbus-oh" className="hover:text-white">Columbus OH</Link>{' '}
              › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a House With Code Violations in Columbus OH — We Buy As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Open code violations, city notices, or administrative orders don't prevent a cash
                sale. USA Home Buyers purchases Columbus homes with code issues as-is throughout
                Franklin County — any condition, any neighborhood. Written cash offer in 24 hours,
                close in 7–14 days. We handle violations after closing. Call 888-274-5006.
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
              sourcePage="/markets/columbus-oh/code-violations"
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
            Code Violations in Columbus OH — Why They're So Common
          </h2>
          <p className="text-gray-700 mb-4">
            Columbus's housing stock is among the oldest in Ohio. With 34.1% of units built in 1939
            or earlier and many more built in the 1940s–1960s, Goodyear Heights, Kenmore,
            Firestone Park, East Columbus, and South Columbus are full of bungalows, two-stories, and
            foursquares that have exceeded the useful life of their original systems. Code
            violations pile up when owners don't have the financial resources or capacity to
            keep up with an aging house.
          </p>
          <p className="text-gray-700 mb-4">
            The City of Columbus's Building Department enforces housing standards including
            structural integrity, exterior maintenance, plumbing and electrical minimums,
            and habitability requirements. Fines for unresolved violations accrue and can
            become liens on the property. In some cases, repeat violations lead to administrative
            hearings and demolition orders.
          </p>
          <p className="text-gray-700 mb-4">
            We buy all of it. Code violations are priced into our offer — you don't pay to fix
            anything. Liens are resolved at closing from proceeds. You walk away clean.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling With Code Violations in Columbus OH" />

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
          headline="Ready to Sell Your Columbus OH Property With Code Violations?"
          sourcePage="/markets/columbus-oh/code-violations"
        />
      </div>
    </>
  );
}
