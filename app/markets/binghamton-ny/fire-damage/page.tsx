/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { binghamtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire Damaged House Binghamton NY — Cash Offer, Any Condition',
  description:
    "Selling a fire-damaged home in Binghamton NY? USA Home Buyers purchases fire and smoke-damaged properties as-is — no repairs, no remediation. Written cash offer in 24 hours.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: "Can I sell a fire-damaged house as-is in Binghamton NY?",
    answer:
      "Yes. USA Home Buyers purchases fire-damaged and smoke-damaged properties throughout Binghamton and Broome County. No repairs, no remediation, no board-up requirements before selling to us. We buy in current condition. Call 888-274-5006.",
  },
  {
    question: "Does insurance payout affect the sale?",
    answer:
      "If you received an insurance payout for the fire damage, that's yours to keep — it doesn't reduce our offer. Our offer is based on the property's as-is condition and comparable Broome County sales. If there's a lender's claim on the insurance proceeds (mortgagee named on the policy), your NY attorney at closing will coordinate payoff. Call us and we'll walk through your specific insurance situation.",
  },
  {
    question: "What if the fire-damaged house has open permits or city orders?",
    answer:
      "We purchase properties with open City of Binghamton Building Division orders related to fire damage — emergency board-up orders, structural safety citations, and hazard abatement notices. These transfer with the property. We account for remediation costs in our offer.",
  },
  {
    question: "How do you determine a fair offer for a fire-damaged home?",
    answer:
      "We evaluate the after-repair value (ARV) of the property based on Broome County comparable sales, estimate the remediation cost for fire and smoke damage, and factor in carrying costs. Our written offer reflects that analysis. We're straightforward about our methodology — call 888-274-5006 and we'll walk through it.",
  },
  {
    question: "How quickly can we close on a fire-damaged property?",
    answer:
      "Written offer in 24 hours; close in 7–14 days. New York requires attorney closing — our timeline accounts for the NY attorney review period. We close as fast as your legal representation can process the paperwork.",
  },
];

const LINKS = [
  { href: '/markets/binghamton-ny/code-violations', label: 'Code Violations' },
  { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property' },
  { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure' },
  { href: '/markets/binghamton-ny/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/binghamton-ny/probate', label: 'Probate' },
  { href: '/markets/binghamton-ny/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/binghamton-ny', label: '← Back to Binghamton NY' },
];

export default function BinghamtonFireDamagePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema('Sell Fire Damaged House in Binghamton NY', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
              › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Fire-Damaged House in Binghamton NY — Cash Buyer, Any Condition
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases fire-damaged and smoke-damaged properties throughout
                Binghamton and Broome County. No repairs, no remediation, no board-up required
                before closing. Written cash offer in 24 hours. Call 888-274-5006.
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
              subheadline="Fire damage — any extent. Written offer in 24 hours."
              sourcePage="/markets/binghamton-ny/fire-damage"
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
            Fire-Damaged Homes in Binghamton — What Sellers Face
          </h2>
          <p className="text-gray-700 mb-4">
            Binghamton's older housing stock is particularly vulnerable to fire. Knob-and-tube
            wiring (common in pre-1940 construction), aging heating systems, and older chimneys
            create fire risk that's elevated compared to newer suburban construction. Kitchen
            fires, chimney fires, and electrical fires account for the majority of residential
            fire events in the city.
          </p>
          <p className="text-gray-700 mb-4">
            After a fire, owners face a difficult calculation. The insurance payout rarely
            covers the full cost of restoration. Contractor availability and costs in the
            Southern Tier can add months to any remediation timeline. And the retail market
            for fire-damaged homes is thin — most conventional buyers and their lenders won't
            touch a property with significant fire or smoke damage without substantial remediation
            first. A cash buyer changes that equation entirely.
          </p>

          <div className="border-l-4 border-red-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Insurance payout and the sale price</h3>
            <p className="text-sm text-gray-700">
              If you've received an insurance settlement for the fire damage, that money is
              yours regardless of how you sell. Our offer for the property is based on
              its as-is condition — we don't adjust downward because you received an insurance
              payment. The insurance and the sale are two separate transactions. Your NY
              attorney at closing handles any outstanding lender claims on insurance proceeds.
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">City orders after a fire</h3>
            <p className="text-sm text-gray-700">
              The City of Binghamton Building Division may issue emergency board-up orders,
              structural safety citations, and prohibit occupancy after significant fire
              damage. These orders don't prevent a sale — they transfer with the property
              to the new owner. We purchase properties with all of these open orders in place.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a Fire-Damaged Home in Binghamton NY" />

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
          headline="Ready to Sell Your Fire-Damaged Binghamton NY Property?"
          sourcePage="/markets/binghamton-ny/fire-damage"
        />
      </div>
    </>
  );
}
