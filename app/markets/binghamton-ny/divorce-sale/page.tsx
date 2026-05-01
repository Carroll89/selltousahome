/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { binghamtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/divorce-sale`;

export const metadata: Metadata = {
  title: 'Divorce House Sale Binghamton NY — Sell Fast, Split Clean',
  description:
    "Selling a house in a Binghamton NY divorce? Both parties must execute the deed in New York. USA Home Buyers simplifies court-ordered sales — cash offer in 24 hours, close in 7–14 days.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: "Do both spouses have to agree to the sale?",
    answer:
      "In New York, both spouses must execute the deed to transfer real property — even if only one spouse is on the title. If the parties can't agree on a buyer or price, the court can order a sale through a referee. A cash buyer with a fixed offer and a firm closing date simplifies the transaction: one offer, one date, proceeds split per the agreement or court order.",
  },
  {
    question: "How does a court-ordered home sale work in Broome County?",
    answer:
      "In a contested divorce, the Broome County Supreme Court (92 Court Street) can appoint a referee to conduct a sale. The referee sets terms, markets the property, and conveys the deed under court supervision. A cash offer accepted voluntarily by both parties — before the court needs to intervene — is faster and less costly than the referee process.",
  },
  {
    question: "Can we sell if the divorce isn't final yet?",
    answer:
      "Yes. New York allows the sale of marital real property before the divorce is finalized, with both parties' consent. Proceeds are typically held in escrow or split per a temporary court order pending the final divorce decree. Consult a New York family law attorney for your specific situation.",
  },
  {
    question: "How quickly can we close?",
    answer:
      "USA Home Buyers can close in 7–14 days once both parties execute the purchase contract. New York requires attorney closing, so our timeline accounts for seller-side attorney review. We've handled Broome County divorce sales from signed contract to keys in under two weeks. Call 888-274-5006.",
  },
  {
    question: "What if the house has deferred maintenance or needs repairs?",
    answer:
      "We buy as-is — no repairs, no inspections, no negotiated credits. During a contentious divorce, agreeing on who pays for repairs before a sale is often the biggest obstacle. We eliminate that negotiation entirely.",
  },
];

const LINKS = [
  { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property' },
  { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure' },
  { href: '/markets/binghamton-ny/probate', label: 'Probate' },
  { href: '/markets/binghamton-ny/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/binghamton-ny/code-violations', label: 'Code Violations' },
  { href: '/markets/binghamton-ny/fire-damage', label: 'Fire Damage' },
  { href: '/markets/binghamton-ny', label: '← Back to Binghamton NY' },
];

export default function BinghamtonDivorceSalePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema('Divorce House Sale in Binghamton NY', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
              › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in a Binghamton NY Divorce — Split Clean, Move On
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                In New York, both spouses must execute the deed. USA Home Buyers makes one
                cash offer, sets one closing date, and distributes proceeds per the agreement.
                No showings, no repair negotiations, no competing schedules. Written offer
                in 24 hours, close in 7–14 days. Call 888-274-5006.
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
              subheadline="One offer, one date, split proceeds."
              sourcePage="/markets/binghamton-ny/divorce-sale"
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
            How Divorce Home Sales Work in New York
          </h2>
          <p className="text-gray-700 mb-4">
            New York matrimonial proceedings run through the Supreme Court in the county where
            the couple lives — in Binghamton, that's Broome County Supreme Court at 92 Court
            Street. Equitable distribution in New York means the marital home is subject to
            division regardless of whose name is on the deed. Both spouses must execute the
            deed to transfer ownership — there's no workaround.
          </p>
          <p className="text-gray-700 mb-4">
            The friction in divorce sales typically shows up in three places: agreeing on a
            listing price, agreeing on who pays for pre-listing repairs, and coordinating
            showings when spouses are no longer living together. A cash buyer eliminates all
            three friction points — you accept one offer, set one closing date, and the
            proceeds flow to wherever your attorneys have directed.
          </p>

          <div className="border-l-4 border-blue-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">We buy as-is — no repair negotiations</h3>
            <p className="text-sm text-gray-700">
              One of the most common sticking points in Binghamton divorce sales is the
              repair question. The house has been sitting vacant since one party moved out,
              or maintenance was deferred during the proceeding. Who pays for the repairs
              before listing? Who chooses the contractor? We remove that question entirely —
              we buy the house in its current condition, period.
            </p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Court-ordered sales</h3>
            <p className="text-sm text-gray-700">
              If the court has ordered the house sold — through a referee or otherwise —
              we are experienced purchasing under court-supervised sale conditions.
              The proceeds are held and distributed per the court's order. Call 888-274-5006
              to discuss your court order and timeline.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Home Sale in Binghamton NY" />

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
          headline="Ready to Sell Your Binghamton NY Home in a Divorce?"
          sourcePage="/markets/binghamton-ny/divorce-sale"
        />
      </div>
    </>
  );
}
