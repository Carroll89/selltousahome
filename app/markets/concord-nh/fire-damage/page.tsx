/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Concord NH — We Buy As-Is Cash',
  description:
    'Need to sell a fire-damaged or smoke-damaged house in Concord NH? USA Home Buyers purchases fire-damaged homes as-is in Merrimack County — cash offer in 24 hours, no repairs required.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Concord NH?',
    answer:
      "Yes. We purchase fire-damaged and smoke-damaged homes throughout Concord and Merrimack County as-is. No cleanup, no repairs, no board-up required on your end. We make an offer based on current condition and close quickly. Call 888-274-5006.",
  },
  {
    question: 'Can I sell a fire-damaged house if the insurance claim isn\'t settled?',
    answer:
      "In many cases, yes — but timing and coordination with your insurer matters. Consult your insurance agent before signing a purchase contract. The insurance payout and the sale can often be structured to work together. Call us to discuss your specific situation.",
  },
  {
    question: 'What if the City of Concord has red-tagged or condemned the property?',
    answer:
      "We buy condemned and red-tagged properties. A condemnation does not prevent a sale. If there's a city demolition timeline in play, we can move quickly to close before that date. Call 888-274-5006 immediately.",
  },
  {
    question: 'Do I need to clean out the fire-damaged contents before selling?',
    answer:
      "No. We purchase with all contents in place — fire debris, smoke-damaged belongings, damaged fixtures. You take what you want and leave the rest. We handle the cleanup as the new owner.",
  },
  {
    question: 'What does a fire-damaged house in Concord typically sell for?',
    answer:
      "It depends on the extent of damage, the underlying property value, and the lot. Our offer reflects current as-is condition. Even significantly damaged properties in established Merrimack County neighborhoods retain land value. Call 888-274-5006 for a specific assessment.",
  },
];

const LINKS = [
  { href: '/markets/concord-nh/code-violations', label: 'Code Violations' },
  { href: '/markets/concord-nh/inherited-property', label: 'Inherited Property' },
  { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/concord-nh/probate', label: 'Probate' },
  { href: '/markets/concord-nh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/concord-nh', label: '← Back to Concord NH' },
];

export default function ConcordFireDamagePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          concordLocalBusinessSchema,
          articleSchema('Sell a Fire-Damaged House in Concord NH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link>{' '}
              › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Fire-Damaged House in Concord NH — Cash As-Is Buyer
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases fire-damaged and smoke-damaged homes throughout Concord
                and Merrimack County — any level of damage, any condition. No repairs, no cleanup,
                no board-up required. We coordinate with insurance where applicable. Written cash
                offer in 24 hours. Close in 7–14 days. Call 888-274-5006.
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
              subheadline="Fire damage welcome — cash offer in 24 hours."
              sourcePage="/markets/concord-nh/fire-damage"
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
            Selling a Fire-Damaged Property in Concord NH
          </h2>
          <p className="text-gray-700 mb-4">
            Fire damage creates immediate complexity: insurance adjusters, contractor estimates,
            city inspections and board-up orders, and an uncertain restoration timeline. For many
            Concord homeowners, the restoration cost — especially on older colonial and New
            England-style homes with wood framing, older mechanicals, and knob-and-tube wiring
            that may have contributed to the fire — exceeds the post-repair market value.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale to USA Home Buyers cuts through all of that. We assess the property in
            its current damaged state, make a written offer within 24 hours, and close in 7–14
            days. No repairs, no board-up, no debris hauling required. We buy the property as
            it sits and handle the restoration ourselves.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire-Damaged Home Sales in Concord NH" />

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
          headline="Ready to Sell Your Fire-Damaged Concord NH Property?"
          sourcePage="/markets/concord-nh/fire-damage"
        />
      </div>
    </>
  );
}
