/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { norwichLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/norwich-ct/divorce-sale`;

export const metadata: Metadata = {
  title: 'Divorce Home Sale Norwich CT — Court-Ordered Cash Sale New London County',
  description:
    'Selling a house during divorce in Norwich CT? We buy homes as-is, one offer, one closing date — both parties agree and attorneys sign off. Cash offer in 24 hours. Close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can you buy our house before the CT divorce is finalized?',
    answer:
      "Yes. We can close before or after the New London County Family Division court decree, depending on what works for your situation. Many couples have a signed contract in place early and close once the decree authorizes the sale or both parties sign. Call 888-274-5006 — we've done many CT divorce closings.",
  },
  {
    question: 'What if my spouse and I disagree on the sale price?',
    answer:
      "We provide one written offer based on the property's condition and comparable New London County sales. One price, one date. That neutral third-party offer often resolves disagreements faster than months of negotiation. If a court order is needed, we're familiar with the CT Family Division process.",
  },
  {
    question: 'What happens to the proceeds at closing in an CT divorce?',
    answer:
      "Connecticut is an equitable distribution state — courts aim for fair distribution. Proceeds typically go to a joint account or are split at closing per the divorce agreement or court order. Both attorneys can coordinate the split directly with the title company. We handle the real estate transaction cleanly; the legal division is between the parties and their attorneys.",
  },
  {
    question: 'Does CT require an attorney to close a divorce real estate sale?',
    answer:
      "Connecticut is an attorney state — a licensed CT attorney must certify title marketability before the closing. In divorce sales, both the real estate attorney and the divorce attorneys are typically involved. We are experienced with CT divorce closings and work within that multi-attorney structure.",
  },
  {
    question: 'How fast can you close on a divorce sale in Norwich CT?',
    answer:
      "As fast as 7–14 days from signed contract. We set a closing date that works for both parties. CT attorney involvement adds a small amount of coordination time, but 7–14 days is typically achievable once both parties agree to the offer.",
  },
];

const LINKS = [
  { href: '/markets/norwich-ct/inherited-property', label: 'Inherited Property' },
  { href: '/markets/norwich-ct/foreclosure', label: 'Foreclosure' },
  { href: '/markets/norwich-ct/probate', label: 'Probate' },
  { href: '/markets/norwich-ct/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/norwich-ct/code-violations', label: 'Code Violations' },
  { href: '/markets/norwich-ct/fire-damage', label: 'Fire Damage' },
  { href: '/markets/norwich-ct', label: '← Back to Norwich CT' },
];

export default function NorwichDivorceSalePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          norwichLocalBusinessSchema,
          articleSchema('Sell a House During Divorce in Norwich CT', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/norwich-ct" className="hover:text-white">Norwich CT</Link>{' '}
              › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a House During Divorce in Norwich CT — One Offer, One Closing, Clean Split
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Divorce sales in Norwich and New London County can close in 7–14 days. USA Home
                Buyers makes one written offer — no repairs, no showings, no co-managed project.
                Both attorneys review and sign off. Proceeds split at closing per the agreement
                or court order. Written cash offer in 24 hours. Call 888-274-5006.
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
              subheadline="Divorce sale specialists — one offer, one date."
              sourcePage="/markets/norwich-ct/divorce-sale"
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
            Why a Cash Sale Simplifies Divorce Property Sales in Norwich CT
          </h2>
          <p className="text-gray-700 mb-4">
            Selling a house during a divorce through the traditional retail process requires both
            parties agreeing on an agent, a list price, repair decisions, showing schedules, and
            any negotiated concessions — all while managing the emotional and legal complexity of
            the divorce itself. If parties can't agree, New London County Family Division can order
            the sale — but that adds months and legal fees.
          </p>
          <p className="text-gray-700 mb-4">
            A direct cash sale to USA Home Buyers eliminates all of that. One written offer. One
            closing date. Both attorneys review and sign off. Proceeds go to the title company and
            are distributed at closing per the divorce decree or agreement. Connecticut is an
            attorney state — the closing attorney handles the title work while the divorce attorneys
            handle the legal division.
          </p>

          <div className="border-l-4 border-blue-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Court-ordered CT divorce sales</h3>
            <p className="text-sm text-gray-700">
              If the New London County Family Division has ordered the house sold, we can work
              within that order and move quickly. Our 7–14 day closing timeline is among the
              fastest available. Both parties and attorneys receive the same information and
              the same closing date. No surprises.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Home Sales in Norwich CT" />

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
          headline="Ready to Sell Your Norwich CT Home During Divorce?"
          sourcePage="/markets/norwich-ct/divorce-sale"
        />
      </div>
    </>
  );
}
