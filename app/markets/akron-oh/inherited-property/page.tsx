/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { akronLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/akron-oh/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Akron OH — Estate Sales Summit County',
  description:
    'Inherited a house in Akron OH? We buy inherited properties through Summit County Probate Court — cash offer in 24 hours, close as-is after Letters of Administration issued.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell an inherited house in Akron before probate is complete?',
    answer:
      "You can accept an offer before probate closes, but the deed cannot transfer until the executor or administrator has authority from Summit County Probate Court. We make a cash offer immediately and schedule closing for when your legal authority is in hand — typically within days of Letters of Authority being issued.",
  },
  {
    question: 'Where is Summit County Probate Court in Akron OH?',
    answer:
      "Summit County Court of Common Pleas — Probate Division, Judge Elinore Marsh Stormer. Located at 209 South High Street, Akron OH 44308, phone 330-643-2350. Open Monday–Friday. The Probate Division handles wills, estate administration, and guardianship proceedings in Summit County.",
  },
  {
    question: 'How long does probate take in Summit County?',
    answer:
      "Uncontested probate in Summit County typically takes 3–9 months for a straightforward estate. Contested estates or complex asset structures can run longer. Importantly, you don't need to wait for the full estate settlement to close on the real property — once the executor holds Letters of Authority, a sale can proceed.",
  },
  {
    question: 'Does Ohio have a small estate procedure that avoids probate?',
    answer:
      "Ohio's Release of Estate From Administration applies to estates with assets of $35,000 or less (or $100,000 if the surviving spouse is the sole beneficiary). If real property is involved, the value of that property generally determines whether full administration is required. A house typically requires full probate unless the property transfers by survivorship deed or beneficiary designation. Consult an Ohio-licensed estate attorney for your specific situation.",
  },
  {
    question: "We're out-of-state heirs — can we sell remotely?",
    answer:
      "Yes. Out-of-state heirs sell Akron houses remotely regularly. We coordinate with the estate attorney, handle the Summit County process, and the executor can often sign closing documents via remote notarization or by traveling once for signing. Call 888-274-5006 to discuss your specific timeline.",
  },
];

const LINKS = [
  { href: '/markets/akron-oh/probate', label: 'Probate Sale' },
  { href: '/markets/akron-oh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/akron-oh/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/akron-oh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/akron-oh/code-violations', label: 'Code Violations' },
  { href: '/markets/akron-oh/fire-damage', label: 'Fire Damage' },
  { href: '/markets/akron-oh', label: '← Back to Akron OH' },
];

export default function AkronInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          akronLocalBusinessSchema,
          articleSchema('Sell Inherited House in Akron OH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/akron-oh" className="hover:text-white">Akron OH</Link>{' '}
              › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in Akron OH — Summit County Estate Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Ohio estate sales run through Summit County Probate Court (209 South High Street,
                Akron OH 44308, phone 330-643-2350). Once the executor holds Letters of Authority,
                USA Home Buyers closes in 7–14 days. No repairs, no prep, no cleanout required.
                We buy Kenmore bungalows, Goodyear Heights colonials, and rubber-era houses of
                any age as-is. Written cash offer in 24 hours. Call 888-274-5006.
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
              subheadline="Estate sale specialists — cash offer in 24 hours."
              sourcePage="/markets/akron-oh/inherited-property"
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
            Why Akron Has So Many Inherited Properties
          </h2>
          <p className="text-gray-700 mb-4">
            Akron was the rubber capital of the world in the early-to-mid 20th century. Goodyear,
            Firestone, General Tire, and B.F. Goodrich built a working-class city of bungalows,
            Cape Cods, and American foursquares throughout neighborhoods like Goodyear Heights,
            Kenmore, Firestone Park, and East Akron. That generation of homeowners is aging — and
            the houses they're passing on often carry significant deferred maintenance from decades
            of ownership.
          </p>
          <p className="text-gray-700 mb-4">
            With 34.1% of Akron's housing units built in 1939 or earlier (2024 ACS Census data),
            inherited houses in Akron regularly feature lead paint, aging electrical, plumbing
            issues, and roofs and mechanicals that have exceeded their useful life. These
            conditions make a traditional retail listing difficult or impossible without
            substantial investment. We buy in any condition — no repairs, no cleanout required.
          </p>

          <div className="border-l-4 border-purple-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Summit County Probate Court — what you need to sell</h3>
            <p className="text-sm text-gray-700">
              Ohio probate runs through the Court of Common Pleas — Probate Division in each
              county. In Akron, that's Summit County Probate Court at <strong>209 South High
              Street, Akron OH 44308</strong>, phone 330-643-2350. The executor named in the
              will receives <strong>Letters of Authority (Testamentary)</strong> upon the will's
              admission to probate. For intestate estates (no will), the court appoints an
              administrator. Those letters grant legal authority to sell real property on behalf
              of the estate.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-blue-800">Accepting an offer while probate is pending</p>
            <p className="text-sm text-blue-700 mt-1">
              You can sign a purchase contract before probate is complete. We set the closing
              date for after Letters of Authority are issued — keeping the process moving rather
              than waiting idle. We've coordinated many Summit County estate closings. Call
              888-274-5006 to walk through your timeline.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Akron OH" />

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
          headline="Ready to Sell an Inherited Akron OH Property?"
          sourcePage="/markets/akron-oh/inherited-property"
        />
      </div>
    </>
  );
}
