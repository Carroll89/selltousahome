/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Concord NH — Estate Sales Merrimack County',
  description:
    'Inherited a house in Concord NH? We buy inherited properties through Merrimack County Probate Division — cash offer in 24 hours, close as-is after Letters of Administration issued.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell an inherited house in Concord before probate is complete?',
    answer:
      "You can accept an offer and sign a purchase contract during probate, but the deed cannot transfer until the executor or administrator holds Letters of Administration from Merrimack County Circuit Court — Probate Division. We make a cash offer immediately and schedule closing for when that legal authority is in hand.",
  },
  {
    question: 'Where is Merrimack County Probate Division in Concord NH?',
    answer:
      "New Hampshire probate is handled by the Circuit Court — Probate Division in each county. Merrimack County Circuit Court — Probate Division is located at 163 North Main Street, Concord NH 03301, phone (603) 271-6400. The court handles will probate, estate administration, and related matters in Merrimack County.",
  },
  {
    question: 'How long does probate take in Merrimack County NH?',
    answer:
      "Informal (uncontested) probate in New Hampshire typically takes 3–6 months. Formal or contested estates can take significantly longer. The real property does not need to wait for the entire estate to be settled — once the personal representative holds Letters of Administration, a sale can proceed. We close within 7–14 days of that authority being issued.",
  },
  {
    question: 'Does NH have a simplified small estate procedure that avoids probate?',
    answer:
      "New Hampshire offers voluntary administration for estates with personal property under $10,000. However, real estate generally requires formal probate through the Circuit Court — Probate Division regardless of the property's value. Consult an NH-licensed estate attorney for your specific situation.",
  },
  {
    question: "We're out-of-state heirs — can we sell the Concord property remotely?",
    answer:
      "Yes. Many heirs sell Concord NH properties remotely. We coordinate with the estate attorney, handle the Merrimack County process, and the executor can often sign closing documents via remote notarization or by traveling once for signing. Call 888-274-5006 to discuss your specific timeline.",
  },
];

const LINKS = [
  { href: '/markets/concord-nh/probate', label: 'Probate Sale' },
  { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/concord-nh/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/concord-nh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/concord-nh/code-violations', label: 'Code Violations' },
  { href: '/markets/concord-nh/fire-damage', label: 'Fire Damage' },
  { href: '/markets/concord-nh', label: '← Back to Concord NH' },
];

export default function ConcordInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          concordLocalBusinessSchema,
          articleSchema('Sell Inherited House in Concord NH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link>{' '}
              › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in Concord NH — Merrimack County Estate Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                NH estate sales run through Merrimack County Circuit Court — Probate Division
                (163 North Main Street, Concord NH 03301, phone (603) 271-6400). Once the
                personal representative holds Letters of Administration, USA Home Buyers closes
                in 7–14 days. No repairs, no prep, no cleanout required. We buy Concord colonials,
                capes, and older New England homes as-is. Written cash offer in 24 hours.
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
              subheadline="Estate sale specialists — cash offer in 24 hours."
              sourcePage="/markets/concord-nh/inherited-property"
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
            Why Concord Has Many Inherited Properties
          </h2>
          <p className="text-gray-700 mb-4">
            Concord's older housing stock — colonial, cape cod, and Victorian-era homes in
            Penacook, South End, and established city neighborhoods — was built by generations
            of New Hampshire state government workers, healthcare professionals, and tradespeople
            who settled here in the early-to-mid 20th century. That generation is aging, and
            the homes they're passing on often carry decades of deferred maintenance.
          </p>
          <p className="text-gray-700 mb-4">
            Out-of-state heirs are common. Adult children who grew up in Concord and moved to
            Boston, Manchester, or out of New England entirely inherit houses they have no
            practical ability to maintain or sell through traditional channels. Aging heating
            systems, older roofs, and deferred maintenance that accumulates over decades all
            complicate a retail listing. We buy in any condition.
          </p>

          <div className="border-l-4 border-purple-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Merrimack County Circuit Court — Probate Division</h3>
            <p className="text-sm text-gray-700">
              New Hampshire probate runs through the Circuit Court — Probate Division in each
              county. In Concord, that's <strong>163 North Main Street, Concord NH 03301</strong>,
              phone (603) 271-6400. The personal representative named in the will receives
              <strong> Letters of Administration</strong> upon the will's admission to probate.
              For intestate estates (no will), the court appoints an administrator. Those letters
              grant legal authority to sell real property on behalf of the estate.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-blue-800">Accept our offer while probate is pending</p>
            <p className="text-sm text-blue-700 mt-1">
              You can sign a purchase contract before probate is complete. We set the closing
              date for after Letters of Administration are issued. This keeps the process moving
              rather than waiting idle during the Merrimack County probate process. Call
              888-274-5006 to walk through your timeline.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Concord NH" />

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
          headline="Ready to Sell an Inherited Concord NH Property?"
          sourcePage="/markets/concord-nh/inherited-property"
        />
      </div>
    </>
  );
}
