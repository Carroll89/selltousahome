/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { binghamtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Binghamton NY — Estate Sales Broome County',
  description:
    "Inherited a house in Binghamton NY? We buy inherited properties through Broome County probate — cash offer in 24 hours, close as-is after Letters Testamentary issued.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: "Can I sell an inherited house in Binghamton before probate is complete?",
    answer:
      "You can list and accept an offer during probate, but the deed cannot transfer until the executor holds Letters Testamentary from Broome County Surrogate's Court. We make a cash offer immediately and schedule closing for when your legal authority is in hand — typically within days of Letters Testamentary being issued.",
  },
  {
    question: "What is Broome County Surrogate's Court and where is it?",
    answer:
      "New York probate is handled by the Surrogate's Court in each county — not a general 'Probate Court.' Broome County Surrogate's Court is located at 92 Court Street, Binghamton, NY 13901. Phone: (607) 240-5789 (per broomecountyny.gov official directory — verify current contact at nycourts.gov before relying on this number). Hours: Monday–Friday. The Surrogate's Court has exclusive jurisdiction over wills, estate administration, and decedent affairs in Broome County.",
  },
  {
    question: "How long does probate take in Broome County?",
    answer:
      "Uncontested probate in Broome County typically takes 3–6 months for a straightforward estate. Contested estates, complex asset structures, or intestate situations can run 12–24+ months. We can buy your house as soon as the executor has Letters Testamentary in hand — you don't need to wait for the full estate settlement to close on the real property.",
  },
  {
    question: "Does New York's small estate procedure apply to inherited real property?",
    answer:
      "No. New York's Voluntary Administration procedure under SCPA §1301 applies to personal property only — estates with a gross personal property value of $50,000 or less. If the estate includes real property (a house, condo, or land), formal probate through Broome County Surrogate's Court is required regardless of the total estate value. This surprises many out-of-state heirs who assume the small estate shortcut applies.",
  },
  {
    question: "We're out-of-state heirs — can we sell remotely?",
    answer:
      "Yes. Former IBM Endicott families and other out-of-state heirs sell Binghamton houses remotely all the time. We handle the Broome County process, coordinate with the estate attorney, and the executor signs closing documents — often via remote notarization or by traveling once for signing. Call 888-274-5006 to discuss your specific situation.",
  },
];

const LINKS = [
  { href: '/markets/binghamton-ny/probate', label: 'Probate Sale' },
  { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure' },
  { href: '/markets/binghamton-ny/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/binghamton-ny/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/binghamton-ny/code-violations', label: 'Code Violations' },
  { href: '/markets/binghamton-ny/fire-damage', label: 'Fire Damage' },
  { href: '/markets/binghamton-ny', label: '← Back to Binghamton NY' },
];

export default function BinghamtonInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema('Sell Inherited House in Binghamton NY', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
              › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in Binghamton NY — Broome County Estate Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                New York probate runs through Broome County Surrogate's Court (92 Court Street).
                Once the executor holds Letters Testamentary, USA Home Buyers closes in 7–14 days.
                No repairs, no prep work, no coordination with tenants or neighbors required.
                We buy Westside Victorians, South Side 2-families, and IBM-era single-family
                homes as-is. Written cash offer in 24 hours. Call 888-274-5006.
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
              sourcePage="/markets/binghamton-ny/inherited-property"
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
            Why Binghamton Has So Many Inherited Properties
          </h2>
          <p className="text-gray-700 mb-4">
            Binghamton's housing stock tells the story of the city's industrial peak. The Westside
            has some of the most elegant older residential architecture in Broome County — 2-story
            Colonials and Victorian-era homes built for IBM engineers and plant managers in the
            early-to-mid 20th century. The South Side has rows of modest 2-family frame homes
            built for the working-class families that kept the plants running.
          </p>
          <p className="text-gray-700 mb-4">
            That population is aging. Out-of-state heirs — often former Binghamton and Endicott
            residents who left for work in other metros — regularly inherit houses they have no
            practical way to maintain or sell through traditional channels. Open code violations,
            deferred roof work, aging mechanicals, and tenant situations left behind by deceased
            relatives all complicate a standard listing. We buy houses in all of these conditions.
          </p>

          <div className="border-l-4 border-purple-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Broome County Surrogate's Court — what you need to sell</h3>
            <p className="text-sm text-gray-700">
              New York probate is handled by the Surrogate's Court in each county. In Binghamton,
              that's Broome County Surrogate's Court at <strong>92 Court Street, Binghamton,
              NY 13901</strong> (phone: (607) 240-5789 per broomecountyny.gov/courts —
              verify at nycourts.gov before relying on this number). The executor named in
              the will receives <strong>Letters Testamentary</strong> upon the will's admission
              to probate. Those letters grant the authority to sell real property. For intestate
              estates (no will), the court appoints an administrator who petitions for an order
              authorizing sale — that additional step can add 2–4 months.
            </p>
          </div>

          <div className="border-l-4 border-purple-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Real property is not covered by SCPA §1301 small estate procedure</h3>
            <p className="text-sm text-gray-700">
              New York's simplified Voluntary Administration procedure under SCPA §1301 covers
              personal property only — for estates with personal property under $50,000. If the
              estate includes a house or land, formal probate through Broome County Surrogate's
              Court is required regardless of the property's value or the total estate size.
              This is one of the most common misunderstandings among out-of-state heirs.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-blue-800">Selling while probate is pending</p>
            <p className="text-sm text-blue-700 mt-1">
              You can accept our offer and sign a purchase contract before probate is complete.
              The closing date is set for after Letters Testamentary are issued. This keeps
              the process moving rather than waiting idle. We've coordinated Broome County
              estate closings many times — call 888-274-5006 to walk through your timeline.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Binghamton NY" />

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
          headline="Ready to Sell an Inherited Binghamton Property?"
          sourcePage="/markets/binghamton-ny/inherited-property"
        />
      </div>
    </>
  );
}
