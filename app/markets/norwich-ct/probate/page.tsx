/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { norwichLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/norwich-ct/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Norwich CT — New London County Estate Cash Buyer',
  description:
    'Need to sell a house through New London County Probate Division in Norwich CT? USA Home Buyers purchases probate properties for cash — offer in 24 hours, close after Letters of Administration issued.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a probate house in Norwich before the estate closes?',
    answer:
      "Yes. You can accept an offer and sign a purchase contract during probate. The deed cannot transfer until the personal representative holds probate authority from Norwich Probate District. We set the closing date for after that authority is issued and close quickly once it is in hand.",
  },
  {
    question: 'Where is the Norwich Probate District and who do I contact?',
    answer:
      "Norwich Probate District, Norwich CT 06360. The court handles will probate, estate administration, guardianship, and related matters for Norwich-area estates.",
  },
  {
    question: 'Do I need an attorney to sell a probate property in Connecticut?',
    answer:
      "Connecticut is an attorney state — a licensed CT attorney must certify title marketability before any real estate closing (lender or title company requirement). For probate sales specifically, you also typically need an estate attorney to open the case and obtain Letters of Administration. We work regularly with CT probate attorneys and can recommend trusted professionals if needed.",
  },
  {
    question: 'What if the estate has liens, back taxes, or deferred maintenance?',
    answer:
      "We buy probate properties as-is, including those with open liens, property tax arrears, or significant deferred maintenance. Liens are resolved at closing from proceeds. No repairs or cleanout required. Call 888-274-5006 and tell us about the property's situation.",
  },
  {
    question: 'How long does probate take in New London County CT?',
    answer:
      "Informal (uncontested) probate in Connecticut typically takes 3–6 months. Once the personal representative holds Letters of Administration, we can close within 7–14 days. The real property sale does not need to wait for the full estate to settle.",
  },
];

const LINKS = [
  { href: '/markets/norwich-ct/inherited-property', label: 'Inherited Property' },
  { href: '/markets/norwich-ct/foreclosure', label: 'Foreclosure' },
  { href: '/markets/norwich-ct/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/norwich-ct/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/norwich-ct/code-violations', label: 'Code Violations' },
  { href: '/markets/norwich-ct/fire-damage', label: 'Fire Damage' },
  { href: '/markets/norwich-ct', label: '← Back to Norwich CT' },
];

export default function NorwichProbatePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          norwichLocalBusinessSchema,
          articleSchema('Sell a Probate House in Norwich CT', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/norwich-ct" className="hover:text-white">Norwich CT</Link>{' '}
              › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Probate House in Norwich CT — New London County Estate Cash Buyer
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                CT estate sales go through the Norwich Probate District in Norwich CT 06360. Once the
                personal representative holds probate authority, USA Home Buyers closes
                in 7–14 days. We buy as-is — any condition, liens or back taxes resolved at
                closing. Written cash offer in 24 hours. Call 888-274-5006.
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
              subheadline="Probate specialists — cash offer in 24 hours."
              sourcePage="/markets/norwich-ct/probate"
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
            Probate Real Estate Sales in New London County, CT
          </h2>
          <p className="text-gray-700 mb-4">
            Norwich Probate District handles estate administration for Norwich. The court is located in
            <strong>Norwich CT 06360</strong>. When a property owner passes
            away, the court issues probate authority to the personal representative named in the will
            upon the will's admission to probate.
            For intestate estates (no will), the court appoints an administrator. That authority
            grants legal standing to sell real property on behalf of the estate.
          </p>
          <p className="text-gray-700 mb-4">
            Connecticut is an attorney state — a licensed CT attorney must certify title
            marketability before any real estate closing. For probate sales specifically, an
            estate attorney is typically involved to open the case and obtain Letters of
            Administration. We work with CT probate attorneys regularly.
          </p>

          <div className="border-l-4 border-purple-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Accept our offer before probate closes</h3>
            <p className="text-sm text-gray-700">
              Sign a purchase contract now; we set the closing date for when Letters of
              Administration are issued. This keeps the sale moving rather than waiting idle
              during the New London County probate process. Informal uncontested probate in CT
              typically takes 3–6 months — we can close the real property transaction quickly
              once authority is in hand.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate Home Sales in Norwich CT" />

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
          headline="Ready to Sell a Norwich CT Probate Property?"
          sourcePage="/markets/norwich-ct/probate"
        />
      </div>
    </>
  );
}
