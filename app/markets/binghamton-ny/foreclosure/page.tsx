/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { binghamtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Binghamton NY — Sell Before Broome County Sheriff Sale',
  description:
    "Facing foreclosure in Binghamton NY? NY judicial foreclosure runs through Broome County Supreme Court. USA Home Buyers purchases homes before the sheriff's sale — cash offer in 24 hours.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Binghamton NY?',
    answer:
      "USA Home Buyers closes in as few as 7 days. New York judicial foreclosure runs through Broome County Supreme Court. Before the lender can file, they must send a 90-day pre-foreclosure notice under RPAPL §1304. Once filed, mandatory settlement conferences add more time. A cash sale before the court confirms the sheriff's sale preserves your equity. Consult a New York-licensed real estate attorney for your specific situation. Call 888-274-5006.",
  },
  {
    question: 'Will selling stop the NY foreclosure process?',
    answer:
      "Yes — a completed sale satisfies the mortgage and ends proceedings. Any proceeds above your payoff amount belong to you. Acting before judgment is confirmed gives you the most options. A sale can happen at any point before the Broome County Supreme Court confirms the sheriff's sale.",
  },
  {
    question: "What is the foreclosure process in Broome County NY?",
    answer:
      "New York requires judicial foreclosure. The lender files in Broome County Supreme Court. Before filing, lenders must send a 90-day pre-foreclosure notice (RPAPL §1304). For owner-occupied 1–4 family homes, the court schedules mandatory settlement conferences (CPLR §3408) which can extend the timeline. Overall, from first default to confirmed sale can take 12–36+ months. Consult a New York-licensed real estate attorney for current statutes and timeline specifics.",
  },
  {
    question: "What is the RPAPL §1304 notice?",
    answer:
      "Under New York's RPAPL §1304, lenders must send a pre-foreclosure notice at least 90 days before filing any foreclosure action. The notice must be in 14-point type, state 'YOU MAY BE AT RISK OF FORECLOSURE,' and include a list of housing counseling agencies. This 90-day window before any court filing is your earliest opportunity to negotiate with the lender, explore loss mitigation, or sell the property.",
  },
  {
    question: "What if I owe more than the house is worth?",
    answer:
      "A short sale may be possible — we have experience coordinating with Broome County lenders on short sales. Call 888-274-5006 and we'll walk through your specific payoff situation.",
  },
];

const LINKS = [
  { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property' },
  { href: '/markets/binghamton-ny/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/binghamton-ny/probate', label: 'Probate' },
  { href: '/markets/binghamton-ny/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/binghamton-ny/code-violations', label: 'Code Violations' },
  { href: '/markets/binghamton-ny/fire-damage', label: 'Fire Damage' },
  { href: '/markets/binghamton-ny', label: '← Back to Binghamton NY' },
];

export default function BinghamtonForeclosurePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema('Stop Foreclosure in Binghamton NY', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
              › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Binghamton NY — Sell Before the Sheriff Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                New York judicial foreclosure runs through Broome County Supreme Court and
                can take 12–36+ months from first default to confirmed sheriff's sale.
                USA Home Buyers purchases Binghamton homes before that point — written cash
                offer in 24 hours, close in 7–14 days. We cover all closing costs.
                Consult a NY-licensed attorney for your specific timeline. Call 888-274-5006.
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
              subheadline="Written offer in 24 hours."
              sourcePage="/markets/binghamton-ny/foreclosure"
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
            How Judicial Foreclosure Works in Broome County, NY
          </h2>
          <p className="text-gray-700 mb-4">
            New York is a 100% judicial foreclosure state — the lender must go through the court
            system. In Binghamton, that means Broome County Supreme Court. Before any filing,
            lenders are required to send a <strong>90-day pre-foreclosure notice under RPAPL §1304</strong>{' '}
            — which must arrive at your door before the process formally begins. That pre-filing
            period is your first and clearest window to act.
          </p>
          <p className="text-gray-700 mb-4">
            Once the lender files the foreclosure action, the case moves through mandatory
            settlement conferences under CPLR §3408. These conferences — required for
            owner-occupied 1–4 family homes — require the lender to negotiate loss mitigation
            in good faith. Each conference adds months. After a judgment of foreclosure is
            entered, the court appoints a referee who conducts the sheriff's sale. The court
            then confirms the sale, which is when your right to stop the process ends.
          </p>
          <p className="text-gray-700 mb-4">
            The full timeline from first default to confirmed sale in Broome County can run
            12–36+ months depending on court congestion and whether the borrower engages the
            settlement conference process. This timeline is long by national standards — and it
            creates real opportunity to sell and walk away with equity before the sale is
            confirmed. Consult a New York-licensed real estate attorney for your specific
            situation and current statutes.
          </p>

          <div className="border-l-4 border-red-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">No post-sale redemption in New York</h3>
            <p className="text-sm text-gray-700">
              Unlike some states, New York provides no statutory right to redeem your property
              after the court confirms the foreclosure sale. Your window to act — sell, refinance,
              or cure — ends at confirmation. Before that point, a cash sale is a legitimate
              and fully legal exit.
            </p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Binghamton's housing stock and the foreclosure window</h3>
            <p className="text-sm text-gray-700">
              Binghamton's aging housing stock — Foursquares from the 1910s, Cape Cods from the
              1940s and 1950s — often carries deferred maintenance that complicates a quick
              retail listing during financial stress. A cash buyer eliminates the inspection
              contingency, the repair negotiation, and the financing risk. We buy houses in
              foreclosure as-is — regardless of condition.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Binghamton NY" />

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
          headline="Ready to Sell Your Binghamton NY Home Before Foreclosure?"
          sourcePage="/markets/binghamton-ny/foreclosure"
        />
      </div>
    </>
  );
}
