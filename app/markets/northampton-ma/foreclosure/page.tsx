/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { northamptonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/northampton-ma/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Northampton MA — Sell Before MA Power of Sale Date',
  description:
    'Facing foreclosure in Northampton MA? Massachusetts foreclosure timelines depend on the notice and sale schedule. USA Home Buyers purchases homes before the power of sale date — cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Northampton MA?',
    answer:
      "USA Home Buyers closes in as few as 7 days. Massachusetts foreclosure timelines depend on the required notices, lender schedule, and the planned sale date. A cash sale before the foreclosure sale date preserves your equity. Call 888-274-5006. Consult a Massachusetts-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'Will selling stop the MA foreclosure process?',
    answer:
      'Yes — a completed sale satisfies the mortgage and ends proceedings. Any proceeds above your payoff amount belong to you. Unlike some states, Massachusetts provides no post-sale redemption period after the foreclosure sale — your window to act ends when the sale is completed.',
  },
  {
    question: 'What is the foreclosure process in Hampshire County MA?',
    answer:
      "Massachusetts foreclosure commonly proceeds by power of sale under Massachusetts law after required borrower notices and sale publication. Exact deadlines depend on the loan, notice status, and scheduled sale date, so acting early is critical. Consult a Massachusetts-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer:
      "A short sale may be possible — we have experience coordinating with Hampshire County lenders. Call 888-274-5006 and we'll walk through your specific payoff situation.",
  },
  {
    question: 'What areas near Northampton do you buy in pre-foreclosure?',
    answer:
      'Hampshire County communities including Northampton, Easthampton, Amherst, Hadley, Hatfield, Williamsburg, Southampton, South Hadley, Belchertown, Granby, and surrounding communities. Call 888-274-5006.',
  },
];

const LINKS = [
  { href: '/markets/northampton-ma/inherited-property', label: 'Inherited Property' },
  { href: '/markets/northampton-ma/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/northampton-ma/probate', label: 'Probate' },
  { href: '/markets/northampton-ma/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/northampton-ma/code-violations', label: 'Code Violations' },
  { href: '/markets/northampton-ma/fire-damage', label: 'Fire Damage' },
  { href: '/markets/northampton-ma', label: '← Back to Northampton MA' },
];

export default function NorthamptonForeclosurePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          northamptonLocalBusinessSchema,
          articleSchema('Stop Foreclosure in Northampton MA', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/northampton-ma" className="hover:text-white">Northampton MA</Link>{' '}
              › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Northampton MA — Sell Before the Power of Sale Date
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Massachusetts foreclosure timelines depend on required notices and the scheduled sale date. A cash sale before the sale can help preserve options; consult a Massachusetts-licensed attorney for case-specific advice. There is generally no post-sale redemption
                period. USA Home Buyers purchases Northampton homes before the power of sale date —
                written cash offer in 24 hours, close in 7–14 days. We cover all closing costs.
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
              subheadline="Written offer in 24 hours."
              sourcePage="/markets/northampton-ma/foreclosure"
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
            How Foreclosure Works in Massachusetts
          </h2>
          <p className="text-gray-700 mb-4">
            Massachusetts foreclosure commonly proceeds by power of sale under Massachusetts law after required borrower notices and sale publication. Confirm the exact deadlines with a Massachusetts-licensed attorney before the
            foreclosure sale in a local newspaper for three consecutive weeks and provide 60 days'
            written notice to the borrower. The total timeline from default to completed foreclosure
            sale is typically <strong>60–90 days</strong> — significantly faster than New England
            judicial states.
          </p>
          <p className="text-gray-700 mb-4">
            Critically, Massachusetts provides <strong>no post-sale redemption period</strong>
            after the foreclosure sale is completed. Once the property is sold at the foreclosure
            auction, your right to reclaim it ends. This means the window to act — sell, refinance,
            or negotiate with the lender — closes faster in MA than in most other northeastern states.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale to USA Home Buyers can close in 7 days from accepted offer. If you've
            received a 60-day written notice, that window is tight. Consult a Massachusetts-licensed
            real estate attorney for advice specific to your situation and current statutes.
          </p>

          <div className="border-l-4 border-red-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">MA foreclosure moves faster than you expect</h3>
            <p className="text-sm text-gray-700">
              Many homeowners receive a 60-day written notice and assume they have plenty of time.
              But finding a buyer, negotiating, and closing a traditional retail sale in that
              window — while managing the emotional and financial stress of foreclosure — is
              extremely difficult. The foreclosure notice period is also running publicly, which
              complicates a standard retail listing. A direct cash offer resolves that in 7–14 days.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Northampton MA" />

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
          headline="Ready to Sell Your Northampton MA Home Before Foreclosure?"
          sourcePage="/markets/northampton-ma/foreclosure"
        />
      </div>
    </>
  );
}
