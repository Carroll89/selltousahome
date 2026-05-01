/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { binghamtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-binghamton-ny-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Binghamton NY (2026 Guide)',
  description:
    'Complete 2026 guide to selling your Binghamton NY house fast. Cash buyers vs. traditional listing, Broome County closing costs, NY probate, foreclosure, and seller options.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Binghamton NY?',
    answer:
      'A cash sale to USA Home Buyers. Written offer in 24 hours, close in 7–14 days. No showings, no repairs, no financing contingencies, no agent commissions. New York requires attorney closing, but our cash process still closes in 7–14 days. Call 888-274-5006.',
  },
  {
    question: 'What does it cost to sell a house in Binghamton NY?',
    answer:
      "With a traditional agent: 5–6% commission ($8,750–$10,500 on a $175K sale), Broome County transfer tax $5/$1,000 ($875), TP-584 filing ($10 + tax), RP-5217 ($125), deed recording ($55), seller attorney fees ($750–$1,500+), plus repair costs and carrying costs during the 70-day average DOM. With USA Home Buyers: no commissions, no out-of-pocket fees — we cover all closing costs.",
  },
  {
    question: 'What is the transfer tax when selling in Binghamton NY?',
    answer:
      "According to Broome County Clerk's DeedFAQs (broomecountyny.gov, confirmed 2026-05-01), Broome County's total real property transfer tax is $5.00 per $1,000 of sale price. The breakdown: $4/$1,000 goes to New York State (NY Tax Law §1402); $1/$1,000 goes to Broome County. On a $175,000 sale, that's $875 total — paid by the seller. USA Home Buyers covers this and all other closing costs when we purchase.",
  },
  {
    question: 'Is Binghamton a good market to sell in 2026?',
    answer:
      "According to Redfin (March 2026), Binghamton has a Compete Score of 72 with a $175,000 median sale price and 101.1% sale-to-list ratio. Hot homes sell in about 16 days at 4% above list — competitive. However, with only 27 homes sold in March 2026 (down from 40 prior year), it's a thin-volume market. Properties in move-in-ready condition sell competitively. As-is properties and those with title, tenant, or condition issues benefit most from a cash sale — they sit at the longer end of the 70-day average DOM.",
  },
  {
    question: 'What options do Binghamton sellers have?',
    answer:
      '1. Cash sale (fastest, most certain) — 7–14 days, as-is, no fees. 2. Traditional listing (highest potential) — 70+ average days, repairs often required, 5–6% commission, NY attorney closing adds time. 3. FSBO (saves commission, more work). 4. iBuyer (limited coverage in Binghamton). For most sellers with condition issues, probate situations, or timeline pressure, a cash sale delivers the most reliable outcome.',
  },
];

export default function BinghamtonGuide2026Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema('How to Sell a House Fast in Binghamton NY (2026)', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
            › Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Sell a House Fast in Binghamton NY — 2026 Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Binghamton NY and Broome County for cash,
              as-is, any condition. Written offer in 24 hours, close in 7–14 days. According
              to Redfin (March 2026), Binghamton's median sale price is $175,000 with a
              Compete Score of 72. Broome County transfer tax is $5/$1,000 — confirmed via
              broomecountyny.gov. NY requires attorney closing; we account for that. No repairs,
              no agent fees, we cover all closing costs.{' '}
              <a href="tel:+18882745006" className="text-green-300 font-bold">
                Call 888-274-5006
              </a>{' '}
              or visit selltousahome.com.
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

        {/* ===== Options Comparison ===== */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Your Options for Selling a House in Binghamton NY
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Option</th>
                  <th className="text-left p-3">Timeline</th>
                  <th className="text-left p-3">Net Proceeds</th>
                  <th className="text-left p-3">Repairs?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="p-3 font-medium">Cash buyer (USA Home Buyers)</td>
                  <td className="p-3">7–14 days</td>
                  <td className="p-3">58–75% of ARV</td>
                  <td className="p-3">No</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium">Traditional listing</td>
                  <td className="p-3">70 days average DOM</td>
                  <td className="p-3">83–90% after costs</td>
                  <td className="p-3">Usually</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-medium">FSBO</td>
                  <td className="p-3">Variable</td>
                  <td className="p-3">80–88% (no agent)</td>
                  <td className="p-3">Usually</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            The cash buyer discount reflects avoided costs: 5–6% agent commission, repair
            costs (often $10,000–$30,000 on Binghamton's older housing stock), and carrying
            costs during the 70-day average DOM ($175K × 1–1.5% monthly carrying ≈
            $1,750–$2,625/month). For sellers with condition issues or time pressure,
            the math often favors cash.
          </p>
        </section>

        {/* ===== NY Closing Explained ===== */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            New York Closing Process — What Binghamton Sellers Pay
          </h2>
          <p className="text-gray-700 mb-4">
            Selling a house in New York is more involved than in most other states. Three
            things make it different: mandatory attorney closing, dual-form tax filing,
            and judicial foreclosure for distressed sellers.
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Attorney closing (NY Judiciary Law §484)</h3>
              <p>
                New York requires a licensed attorney to prepare the deed and related documents.
                Both buyer and seller retain separate attorneys. The attorney review phase typically
                adds 1–2 weeks before a contract is binding. Our cash sale process accounts for
                this — we still close in 7–14 days.
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">TP-584 and RP-5217 filing</h3>
              <p>
                New York requires two tax forms at closing, both filed at the Broome County Clerk
                (60 Hawley Street, 3rd floor). The TP-584 (Real Estate Transfer Tax Return) costs
                $10 plus transfer tax; the RP-5217 (Real Property Transfer Report) costs $125 for
                qualifying residential property. Source: broomecountyny.gov DeedFAQs, direct fetch
                2026-05-01.
              </p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Broome County transfer tax</h3>
              <p>
                $5.00 per $1,000 of sale price — $4/$1,000 to NY State, $1/$1,000 to Broome County.
                Example: $175,000 × 0.005 = $875. Paid by the seller. Source: Broome County Clerk
                DeedFAQs (broomecountyny.gov), confirmed government source.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Common Binghamton Seller Situations ===== */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Common Seller Situations in Binghamton
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Inherited Property',
                href: '/markets/binghamton-ny/inherited-property',
                desc: "Former IBM-era families, out-of-state heirs, Surrogate's Court probate at 92 Court Street.",
              },
              {
                label: 'Foreclosure',
                href: '/markets/binghamton-ny/foreclosure',
                desc: "NY judicial foreclosure through Broome County Supreme Court — 12–36+ month process. Sell before the sheriff's sale.",
              },
              {
                label: 'Probate Sale',
                href: '/markets/binghamton-ny/probate',
                desc: "Letters Testamentary from Broome County Surrogate's Court authorize the executor to sell.",
              },
              {
                label: 'Tenant-Occupied',
                href: '/markets/binghamton-ny/tenant-occupied',
                desc: 'Student rentals near BU, South Side 2-families, non-paying tenants. We buy with tenant in place.',
              },
              {
                label: 'Code Violations',
                href: '/markets/binghamton-ny/code-violations',
                desc: 'City Building Division citations for aging Binghamton housing stock. No remediation before sale.',
              },
              {
                label: 'Fire Damage',
                href: '/markets/binghamton-ny/fire-damage',
                desc: "We buy fire and smoke-damaged properties as-is. Keep your insurance payout — it doesn't reduce our offer.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border border-gray-200 rounded-xl p-4 hover:border-brand-primary hover:shadow-sm transition-all"
              >
                <h3 className="font-bold text-brand-dark mb-1">{item.label} →</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Binghamton NY Seller Guide — FAQ" />

        <div className="mt-8 mb-4">
          <h2 className="text-xl font-bold text-brand-dark mb-4">More Resources</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/markets/binghamton-ny"
              className="text-brand-primary hover:underline font-medium text-sm"
            >
              Binghamton NY Market Hub →
            </Link>
            <Link
              href="/sell-house-fast-new-york"
              className="text-brand-primary hover:underline font-medium text-sm"
            >
              New York Cash Buyers Hub →
            </Link>
            <Link
              href="/markets/binghamton-ny/market-report"
              className="text-brand-primary hover:underline font-medium text-sm"
            >
              2026 Market Report →
            </Link>
          </div>
        </div>

        <CashOfferForm
          variant="footer"
          headline="Get a Cash Offer for Your Binghamton NY Home"
          subheadline="Written offer in 24 hours. Any condition. All closing costs covered."
          sourcePage="/guides/sell-house-fast-binghamton-ny-2026"
        />

        <p className="text-xs text-gray-400 mt-8">
          Sources: Redfin Binghamton NY housing market (direct fetch 2026-05-01);
          Broome County Clerk's Office DeedFAQs (broomecountyny.gov, direct fetch 2026-05-01);
          NY Tax Law §1402; NY Judiciary Law §484; RPAPL §1304.
          Guide updated: May 2026.
        </p>
      </div>
    </>
  );
}
