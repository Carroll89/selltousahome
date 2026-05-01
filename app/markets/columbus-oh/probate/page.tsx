/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { columbusLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/columbus-oh/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Columbus OH — Franklin County Estate Cash Buyer',
  description:
    'Need to sell a house through Franklin County Probate Court in Columbus OH? USA Home Buyers purchases probate properties for cash — offer in 24 hours, close after Letters of Authority issued.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a probate house in Columbus before the estate closes?',
    answer:
      "Yes. You can accept an offer and sign a purchase contract during probate. The deed cannot transfer until the executor holds Letters of Authority from Franklin County Probate Court — but we can have a signed contract in place and close quickly once that authorization is issued. We've done many Franklin County probate closings and understand the timeline.",
  },
  {
    question: 'Where is Franklin County Probate Court and who do I contact?',
    answer:
      "Franklin County Court of Common Pleas — Probate Division, Judge Elinore Marsh Stormer. Address: 209 South High Street, Columbus OH 44308. Phone: 330-643-2350. Open Monday–Friday. The court handles wills, estate administration, guardianship, and related matters in Franklin County.",
  },
  {
    question: 'Do I need a real estate attorney to sell a probate property in Ohio?',
    answer:
      "Ohio does not require an attorney for a residential real estate closing — it's a title company state. However, for probate sales you typically need an estate attorney to open the probate case, get Letters of Authority, and authorize the sale. We work regularly with Columbus-area probate attorneys and can recommend trusted professionals if needed.",
  },
  {
    question: 'What if the estate has liens, back taxes, or code violations?',
    answer:
      "We buy probate properties as-is, including those with open liens, back property taxes, Franklin County code violations, or deferred maintenance. We resolve title issues at closing from the proceeds. Call 888-274-5006 and tell us about the property's situation — we'll give you a straight answer.",
  },
  {
    question: 'How long does probate take in Franklin County?',
    answer:
      "A straightforward uncontested estate in Franklin County typically takes 3–9 months. The real property does not need to wait for the entire estate to be settled — once the executor has Letters of Authority, a sale can proceed. We close within 7–14 days of the executor having that legal authority.",
  },
];

const LINKS = [
  { href: '/markets/columbus-oh/inherited-property', label: 'Inherited Property' },
  { href: '/markets/columbus-oh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/columbus-oh/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/columbus-oh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/columbus-oh/code-violations', label: 'Code Violations' },
  { href: '/markets/columbus-oh/fire-damage', label: 'Fire Damage' },
  { href: '/markets/columbus-oh', label: '← Back to Columbus OH' },
];

export default function ColumbusProbatePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          columbusLocalBusinessSchema,
          articleSchema('Sell a Probate House in Columbus OH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/columbus-oh" className="hover:text-white">Columbus OH</Link>{' '}
              › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Probate House in Columbus OH — Franklin County Estate Cash Buyer
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Ohio estate sales go through Franklin County Probate Court (209 South High Street,
                Columbus OH 44308, Judge Elinore Marsh Stormer). Once the executor has Letters of
                Authority, USA Home Buyers closes in 7–14 days. We buy as-is — any condition,
                liens, or back taxes resolved at closing. Written cash offer in 24 hours.
                Call 888-274-5006.
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
              sourcePage="/markets/columbus-oh/probate"
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
            Probate Real Estate Sales in Franklin County, OH
          </h2>
          <p className="text-gray-700 mb-4">
            Franklin County Probate Court handles estate administration for Columbus and all of Summit
            County. The court is located at <strong>209 South High Street, Columbus OH 44308</strong>
            , phone 330-643-2350. When a property owner passes away, the executor named in the
            will petitions the court and receives <strong>Letters of Authority (Testamentary)</strong>
            — the legal document authorizing the sale of estate assets including real property.
            For intestate estates (no will), the court appoints an administrator who seeks similar
            authority.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio is a title company state — a real estate attorney is not legally required to
            close a residential sale. However, probate cases typically involve an estate attorney
            to open the case and obtain Letters of Authority. We work with Columbus-area probate
            attorneys regularly and can recommend trusted professionals if the estate doesn't
            have one.
          </p>

          <div className="border-l-4 border-purple-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">You can accept our offer before probate closes</h3>
            <p className="text-sm text-gray-700">
              Sign a purchase contract now; we set the closing date for when Letters of Authority
              are issued. This keeps the sale moving rather than waiting idle during the probate
              process. In a straightforward Franklin County estate, that's typically 3–9 months —
              but we can close the real property transaction quickly once authority is in hand.
            </p>
          </div>

          <div className="border-l-4 border-orange-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Columbus's probate housing stock</h3>
            <p className="text-sm text-gray-700">
              34.1% of Columbus's housing units were built in 1939 or earlier. Probate properties
              in Goodyear Heights, Kenmore, Firestone Park, and East Columbus often have decades
              of deferred maintenance — knob-and-tube wiring, aging plumbing, lead paint,
              and roofs well past their expected life. We buy all of it as-is. No repairs,
              no cleanout required.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate Home Sales in Columbus OH" />

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
          headline="Ready to Sell an Columbus OH Probate Property?"
          sourcePage="/markets/columbus-oh/probate"
        />
      </div>
    </>
  );
}
