/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { binghamtonLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/faq`;

export const metadata: Metadata = {
  title: 'Binghamton NY Home Seller FAQ — Cash Buyers Broome County',
  description:
    "Answers to the most common questions Binghamton NY home sellers ask: transfer tax, probate, foreclosure, attorney closing, and selling as-is for cash. Updated 2026.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How do I get a cash offer for my Binghamton NY home?',
    answer:
      'Call 888-274-5006 or submit the form on this page. USA Home Buyers will assess your property — no tour required — and provide a written cash offer within 24 hours. There is no obligation. If you accept, we move to closing in 7–14 days.',
  },
  {
    question: 'What is the Broome County transfer tax when selling a house?',
    answer:
      "According to the Broome County Clerk's Office DeedFAQs (broomecountyny.gov, confirmed 2026-05-01), the total real property transfer tax in Broome County is $5.00 per $1,000 of sale price. The breakdown: $4/$1,000 goes to New York State; $1/$1,000 goes to Broome County. On a $175,000 sale, the total is $875. Sellers also file a TP-584 ($10 filing fee + transfer tax) and RP-5217 ($125 for qualifying residential property) at the Broome County Clerk, 60 Hawley Street, 3rd floor, Binghamton. When you sell to USA Home Buyers, we cover all of these costs.",
  },
  {
    question: "What is New York's foreclosure process in Broome County?",
    answer:
      "New York uses judicial foreclosure — the lender files in Broome County Supreme Court. Before filing, lenders must provide a 90-day pre-foreclosure notice under RPAPL §1304. Once filed, mandatory settlement conferences under CPLR §3408 add months. The full process from first default to confirmed sheriff sale can take 12–36+ months in Broome County. There is no post-sale statutory redemption period in New York — once the court confirms the sale, the right to redeem ends. Consult a New York-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'How does Broome County probate work for selling an inherited home?',
    answer:
      "New York probate is handled by the Surrogate's Court in each county. Broome County Surrogate's Court is at 92 Court Street, Binghamton, NY 13901 — phone (607) 240-5789 per broomecountyny.gov/courts (verify at nycourts.gov before relying on this). The executor receives Letters Testamentary, which authorize selling real property. If there is no will, the court appoints an administrator who may need court authorization to sell under SCPA Article 19. Important: New York's simplified SCPA §1301 small estate procedure covers personal property only — real property always requires formal Surrogate's Court probate. Uncontested probates typically take 3–6 months in Broome County.",
  },
  {
    question: 'Does New York require an attorney to close on a home sale?',
    answer:
      "Yes. New York is an attorney-closing state under NY Judiciary Law §484. Only a licensed attorney may prepare the deed and transfer documents for compensation. Both buyer and seller typically retain separate attorneys. Our cash sale process accounts for the NY attorney review timeline — we can still close in 7–14 days in Binghamton.",
  },
  {
    question: 'What does selling as-is mean in Binghamton?',
    answer:
      "Selling as-is to USA Home Buyers means you are not required to make any repairs, remediate any code violations, clear any tenant situations, or perform any cleanup before closing. We purchase the property in its current physical and legal condition. There is no inspection contingency — we assess the property ourselves and factor condition into our offer.",
  },
  {
    question: 'How much below market value will a cash buyer pay in Binghamton?',
    answer:
      "For average-condition properties, cash offers typically land around 70–80% of fair market value — before factoring in repair costs, property condition, title issues, holding costs, and risk adjustments specific to your home. Clean condition with marketable title: 68–75%. Heavy repair, code violations, or deferred maintenance: 60–68%. Probate/title complexity, tenant situations, or legal clouds: 58–65%. That discount reflects what you save on agent commissions, repairs, carrying costs during the 70-day average DOM, and the NY closing cost stack. Call 888-274-5006 for a specific offer on your property.",
  },
  {
    question: 'What is Johnson City and does it affect my Binghamton sale?',
    answer:
      "Johnson City is a separate village — it is not part of the City of Binghamton. Legal requirements, municipal codes, and applicable city services differ between the two. If your property is in Johnson City rather than the City of Binghamton, city-specific Binghamton content on this site does not apply to your situation. Contact us at 888-274-5006 and we'll discuss your Johnson City property directly.",
  },
  {
    question: 'What neighborhoods in Binghamton do you serve?',
    answer:
      "We buy houses throughout all of Binghamton's residential neighborhoods — Westside, South Side (East and West), North Side, East Side, and Downtown. We also serve Broome County communities outside the City of Binghamton. Contact us to confirm we serve your specific address.",
  },
];

export default function BinghamtonFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[binghamtonLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
            › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Binghamton NY Home Seller FAQ — Cash Buyers &amp; Broome County Selling Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              Answers to the most common Binghamton NY home seller questions: transfer tax
              ($5/$1,000 total), NY judicial foreclosure in Broome County Supreme Court,
              Surrogate's Court probate at 92 Court Street, attorney closing requirement,
              and cash offer process. Call 888-274-5006 for answers specific to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-green-600 text-white p-3 flex items-center justify-center gap-3 shadow-lg">
        <a href="tel:+18882745006" className="font-bold text-base">
          📞 Call 888-274-5006 — Get Cash Offer
        </a>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Selling a House in Binghamton NY — Full FAQ" />

        <div className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">More Seller Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure' },
              { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property' },
              { href: '/markets/binghamton-ny/probate', label: 'Probate' },
              { href: '/markets/binghamton-ny/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/binghamton-ny/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/binghamton-ny/market-report', label: 'Market Report' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <CashOfferForm
          variant="footer"
          headline="Still Have Questions? Call or Submit and We'll Answer."
          subheadline="No pressure, no obligation. Cash offer in 24 hours."
          sourcePage="/markets/binghamton-ny/faq"
        />
      </div>
    </>
  );
}
