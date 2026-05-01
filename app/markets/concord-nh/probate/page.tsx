/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Concord NH — Merrimack County Estate Cash Buyer',
  description:
    'Need to sell a house through Merrimack County Probate Division in Concord NH? USA Home Buyers purchases probate properties for cash — offer in 24 hours, close after Letters of Administration issued.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a probate house in Concord before the estate closes?',
    answer:
      "Yes. You can accept an offer and sign a purchase contract during probate. The deed cannot transfer until the personal representative holds Letters of Administration from Merrimack County Circuit Court — Probate Division. We set the closing date for after that authority is issued and close quickly once it is in hand.",
  },
  {
    question: 'Where is Merrimack County Probate Division and who do I contact?',
    answer:
      "Merrimack County Circuit Court — Probate Division. Address: 163 North Main Street, Concord NH 03301. Phone: (603) 271-6400. The court handles will probate, estate administration, guardianship, and related matters in Merrimack County.",
  },
  {
    question: 'Do I need an attorney to sell a probate property in New Hampshire?',
    answer:
      "New Hampshire is an attorney state — a licensed NH attorney must certify title marketability before any real estate closing (lender or title company requirement). For probate sales specifically, you also typically need an estate attorney to open the case and obtain Letters of Administration. We work regularly with NH probate attorneys and can recommend trusted professionals if needed.",
  },
  {
    question: 'What if the estate has liens, back taxes, or deferred maintenance?',
    answer:
      "We buy probate properties as-is, including those with open liens, property tax arrears, or significant deferred maintenance. Liens are resolved at closing from proceeds. No repairs or cleanout required. Call 888-274-5006 and tell us about the property's situation.",
  },
  {
    question: 'How long does probate take in Merrimack County NH?',
    answer:
      "Informal (uncontested) probate in New Hampshire typically takes 3–6 months. Once the personal representative holds Letters of Administration, we can close within 7–14 days. The real property sale does not need to wait for the full estate to settle.",
  },
];

const LINKS = [
  { href: '/markets/concord-nh/inherited-property', label: 'Inherited Property' },
  { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/concord-nh/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/concord-nh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/concord-nh/code-violations', label: 'Code Violations' },
  { href: '/markets/concord-nh/fire-damage', label: 'Fire Damage' },
  { href: '/markets/concord-nh', label: '← Back to Concord NH' },
];

export default function ConcordProbatePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          concordLocalBusinessSchema,
          articleSchema('Sell a Probate House in Concord NH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link>{' '}
              › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Probate House in Concord NH — Merrimack County Estate Cash Buyer
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                NH estate sales go through Merrimack County Circuit Court — Probate Division
                (163 North Main Street, Concord NH 03301, phone (603) 271-6400). Once the
                personal representative holds Letters of Administration, USA Home Buyers closes
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
              sourcePage="/markets/concord-nh/probate"
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
            Probate Real Estate Sales in Merrimack County, NH
          </h2>
          <p className="text-gray-700 mb-4">
            Merrimack County Circuit Court — Probate Division handles estate administration for
            Concord and all of Merrimack County. The court is located at <strong>163 North Main
            Street, Concord NH 03301</strong>, phone (603) 271-6400. When a property owner passes
            away, the personal representative named in the will receives
            <strong> Letters of Administration</strong> upon the will's admission to probate.
            For intestate estates (no will), the court appoints an administrator. Those letters
            grant legal authority to sell real property on behalf of the estate.
          </p>
          <p className="text-gray-700 mb-4">
            New Hampshire is an attorney state — a licensed NH attorney must certify title
            marketability before any real estate closing. For probate sales specifically, an
            estate attorney is typically involved to open the case and obtain Letters of
            Administration. We work with NH probate attorneys regularly.
          </p>

          <div className="border-l-4 border-purple-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Accept our offer before probate closes</h3>
            <p className="text-sm text-gray-700">
              Sign a purchase contract now; we set the closing date for when Letters of
              Administration are issued. This keeps the sale moving rather than waiting idle
              during the Merrimack County probate process. Informal uncontested probate in NH
              typically takes 3–6 months — we can close the real property transaction quickly
              once authority is in hand.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate Home Sales in Concord NH" />

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
          headline="Ready to Sell a Concord NH Probate Property?"
          sourcePage="/markets/concord-nh/probate"
        />
      </div>
    </>
  );
}
