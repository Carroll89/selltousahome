/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { binghamtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/probate`;

export const metadata: Metadata = {
  title: 'Probate House Sale Binghamton NY — Broome County Surrogate Court',
  description:
    "Selling a house through Broome County Surrogate's Court probate in Binghamton NY? USA Home Buyers purchases probate properties as-is — cash offer in 24 hours after Letters Testamentary.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: "Where is Broome County Surrogate's Court?",
    answer:
      "Broome County Surrogate's Court is located at 92 Court Street, Binghamton, NY 13901 (inside the Broome County Courthouse complex). Phone: (607) 240-5789 — per broomecountyny.gov official county court directory. Verify current contact information at nycourts.gov/courts before relying on this number. Hours are generally Monday–Friday 9:00 AM–4:30 PM, but verify at the official source.",
  },
  {
    question: "What is the difference between Letters Testamentary and Letters of Administration?",
    answer:
      "Letters Testamentary are issued to the executor named in a valid will, authorizing them to act on behalf of the estate. Letters of Administration are issued by the Surrogate's Court when there is no will (intestate estate) — the court appoints an administrator, typically the closest surviving relative. Both grant authority to sell real property. The intestate path adds time because the court must appoint the administrator and may require a petition for authorization to sell.",
  },
  {
    question: "Can an executor sell a house without court approval?",
    answer:
      "In New York, if the will grants the executor full power to sell real property, no additional court authorization is typically required — the Letters Testamentary are sufficient. If the will is silent or limits executor authority, a court order may be needed under SCPA Article 19. A New York-licensed estate attorney can review the specific will and advise on the authorization required.",
  },
  {
    question: "How does the TP-584 and RP-5217 filing work for a probate sale?",
    answer:
      "Every property sale in New York requires TP-584 (Real Estate Transfer Tax Return) and RP-5217 (Real Property Transfer Report) filings with the county clerk. According to the Broome County Clerk's Office (broomecountyny.gov), the TP-584 fee is $10 plus the transfer tax owed; the RP-5217 fee is $125 for qualifying residential property. These are filed at the Broome County Clerk, 60 Hawley Street, 3rd floor. USA Home Buyers covers all filing costs when we purchase.",
  },
  {
    question: "Does probate property qualify for a cash sale?",
    answer:
      "Yes, absolutely. We purchase probate properties throughout Binghamton and Broome County. The key requirement is that the executor or administrator holds their Letters Testamentary or Letters of Administration before we can close. We make a written offer immediately and schedule closing for when your legal authority is confirmed.",
  },
];

const LINKS = [
  { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property' },
  { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure' },
  { href: '/markets/binghamton-ny/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/binghamton-ny/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/binghamton-ny/code-violations', label: 'Code Violations' },
  { href: '/markets/binghamton-ny/fire-damage', label: 'Fire Damage' },
  { href: '/markets/binghamton-ny', label: '← Back to Binghamton NY' },
];

export default function BinghamtonProbatePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema("Selling a Probate Property in Binghamton NY", pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
              › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Probate Property in Binghamton NY — Broome County Surrogate's Court
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                New York probate is handled by Broome County Surrogate's Court at 92 Court Street.
                Once the executor holds Letters Testamentary, USA Home Buyers closes in 7–14 days.
                All TP-584, RP-5217, and Broome County Clerk filing costs are covered. No repairs.
                No prep. Call 888-274-5006.
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
              subheadline="Probate sale specialists — written offer in 24 hours."
              sourcePage="/markets/binghamton-ny/probate"
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
            New York Probate — How It Works in Broome County
          </h2>
          <p className="text-gray-700 mb-4">
            New York's probate system is handled entirely by the Surrogate's Court — a specialized
            court in each of New York's 62 counties with exclusive jurisdiction over wills and
            estate administration. The Broome County Surrogate's Court sits at <strong>92 Court
            Street, Binghamton, NY 13901</strong>, inside the Broome County Courthouse complex.
            Judge David H. Guy presides; Clerk Rebecca A. Malmquist, Esq. oversees filings.
            Contact: (607) 240-5789 (per broomecountyny.gov/courts — also verify at nycourts.gov).
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">With a valid will</h3>
              <p className="text-sm text-gray-700">
                The Surrogate's Court admits the will to probate and issues <strong>Letters
                Testamentary</strong> to the executor named in the will. Those letters grant
                full authority to act on behalf of the estate — including conveying real
                property. If the will grants the executor full power to sell, no additional
                court approval is needed before closing.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Without a will (intestate)</h3>
              <p className="text-sm text-gray-700">
                If there's no will, the Surrogate's Court appoints an administrator and
                issues <strong>Letters of Administration</strong>. For intestate estates,
                the administrator may need to petition the court under SCPA Article 19 for
                specific authorization to sell real property — adding 2–4 months versus the
                testate (will) path.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-gray-300 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Real property is excluded from SCPA §1301 small estate procedure</h3>
            <p className="text-sm text-gray-700">
              Many families assume New York's simplified "small estate" affidavit procedure
              applies when a parent leaves a modest home. It doesn't. SCPA §1301 Voluntary
              Administration covers personal property only — for estates where personal property
              is $50,000 or less. Any estate that includes real property (even a single-family
              home valued well below that threshold) requires formal Surrogate's Court probate.
              Consult a New York-licensed estate attorney for your specific situation.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-blue-800">What we need to close</p>
            <p className="text-sm text-blue-700 mt-1">
              A valid copy of the Letters Testamentary or Letters of Administration issued by
              Broome County Surrogate's Court. Once you have that document in hand, we can
              close in as few as 7 days. We handle the TP-584, RP-5217, deed preparation,
              and Broome County Clerk filing on our side. You retain your own NY-licensed
              estate attorney for the seller's side.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate Property Sale in Binghamton NY" />

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
          headline="Ready to Sell Your Binghamton NY Probate Property?"
          sourcePage="/markets/binghamton-ny/probate"
        />
      </div>
    </>
  );
}
