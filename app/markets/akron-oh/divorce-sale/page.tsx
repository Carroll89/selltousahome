/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { akronLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/akron-oh/divorce-sale`;

export const metadata: Metadata = {
  title: 'Divorce Home Sale Akron OH — Court-Ordered Cash Sale Summit County',
  description:
    'Selling a house during divorce in Akron OH? We buy homes as-is, one offer, one closing date — both parties agree and attorneys sign off. Cash offer in 24 hours. Close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can you buy our house before the Ohio divorce is finalized?',
    answer:
      "Yes. We can close before or after the Summit County Domestic Relations Court decree, depending on what works for your situation. Most couples have a signed contract in place early and close once the decree authorizes the sale or both parties sign independently. Call 888-274-5006 — we've done many divorce closings in Akron.",
  },
  {
    question: 'What if my spouse and I disagree on the sale price?',
    answer:
      "We provide one written offer based on the property's condition and comparable Summit County sales. One price, one date. Often that neutral third-party offer resolves disagreements faster than months of negotiation. If a court order is needed, we're familiar with the Summit County Domestic Relations Court process and can work within that timeline.",
  },
  {
    question: 'What happens to the proceeds at closing?',
    answer:
      "Ohio is an equitable distribution state — courts aim for fair (not necessarily equal) division. Typically, proceeds go to a joint account or are split at closing per the divorce agreement or court order. Both attorneys can coordinate the split directly with the title company. We stay out of the legal side — that's between you and your attorneys.",
  },
  {
    question: 'Does the house need to be repaired before selling?',
    answer:
      "No. If you're going through a divorce, the last thing you need is a $15,000–$30,000 repair project you both have to agree on. We buy as-is — no repairs, no updates, no staging. You both get a clean exit on a set date.",
  },
  {
    question: 'How fast can you close on a divorce sale in Akron?',
    answer:
      "As fast as 7–14 days from signed contract. We pick a closing date that works for both parties. Ohio is a title company state, so no attorney is legally required at closing — though many divorce sales coordinate through attorneys. The key is a clear timeline with no surprises.",
  },
];

const LINKS = [
  { href: '/markets/akron-oh/inherited-property', label: 'Inherited Property' },
  { href: '/markets/akron-oh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/akron-oh/probate', label: 'Probate' },
  { href: '/markets/akron-oh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/akron-oh/code-violations', label: 'Code Violations' },
  { href: '/markets/akron-oh/fire-damage', label: 'Fire Damage' },
  { href: '/markets/akron-oh', label: '← Back to Akron OH' },
];

export default function AkronDivorceSalePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          akronLocalBusinessSchema,
          articleSchema('Sell a House During Divorce in Akron OH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/akron-oh" className="hover:text-white">Akron OH</Link>{' '}
              › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a House During Divorce in Akron OH — One Offer, One Closing, Clean Split
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Divorce sales in Akron and Summit County can close in 7–14 days. USA Home Buyers
                makes one written offer — no repairs, no showings, no co-managed renovation project.
                Both attorneys sign off. Proceeds split at closing per the agreement or court order.
                Written cash offer in 24 hours. Call 888-274-5006.
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
              sourcePage="/markets/akron-oh/divorce-sale"
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
            Why a Cash Sale Simplifies Divorce Property Sales in Summit County
          </h2>
          <p className="text-gray-700 mb-4">
            Selling a house during a divorce through the traditional retail process means both
            parties agreeing on an agent, a list price, repair decisions, showing schedules, and
            any negotiated concessions — all while managing the emotional and legal stress of the
            divorce itself. In Summit County Domestic Relations Court, a judge can order the
            sale if parties can't agree — but that adds months.
          </p>
          <p className="text-gray-700 mb-4">
            A direct cash sale to USA Home Buyers eliminates all of that. One written offer.
            One closing date. Both attorneys review and sign off. Proceeds go to the title company
            and are distributed at closing per the divorce decree or agreement. No repair
            negotiations, no showing coordination, no co-managed project.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio is a title company state — an attorney is not legally required at the closing
            table. The divorce attorneys handle the legal division; the title company handles
            the real estate closing. We've completed many Summit County divorce sales and
            understand how to work within that structure cleanly.
          </p>

          <div className="border-l-4 border-blue-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Court-ordered sales</h3>
            <p className="text-sm text-gray-700">
              If the Summit County Domestic Relations Court has ordered the house sold,
              we can work within that order and move quickly. A court-ordered sale often
              has a deadline — our 7–14 day closing timeline is one of the fastest available.
              Both parties and attorneys receive the same information and the same closing date.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Home Sales in Akron OH" />

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
          headline="Ready to Sell Your Akron OH Home During Divorce?"
          sourcePage="/markets/akron-oh/divorce-sale"
        />
      </div>
    </>
  );
}
