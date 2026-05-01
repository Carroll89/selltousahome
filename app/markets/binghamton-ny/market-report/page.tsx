/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { binghamtonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/market-report`;

export const metadata: Metadata = {
  title: 'Binghamton NY Housing Market Report 2026 — Broome County Data',
  description:
    'Binghamton NY housing market data for 2026: median price, days on market, sale-to-list ratio, Broome County transfer tax, and seller insights. Updated March 2026.',
  alternates: { canonical: pageUrl },
};

export default function BinghamtonMarketReportPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema('Binghamton NY Housing Market Report 2026', pageUrl, '2026-05-01'),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
            › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Binghamton NY Housing Market Report — 2026
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              According to Redfin (March 2026), Binghamton's median sale price is <strong>$175,000</strong>{' '}
              with a Compete Score of 72. Sale-to-list ratio: 101.1%. Average DOM: 70 days
              (43 days to pending for typical homes; 16 days for hot homes). Volume is thin:
              27 homes sold in March 2026, down from 40 the prior year. Broome County transfer
              tax: $5/$1,000 (confirmed broomecountyny.gov). Market data last updated: March 2026.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Key Market Metrics — March 2026
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">Date / Source</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median sale price', '$175,000', 'March 2026 · Redfin'],
                  ['Price per square foot', '$95', 'March 2026 · Redfin'],
                  ['Price/sqft YoY change', '+21.0%', 'March 2026 · Redfin'],
                  ['Compete Score', '72 — Very Competitive', 'March 2026 · Redfin'],
                  ['Sale-to-list ratio', '101.1% (+4.0 pts YoY)', 'March 2026 · Redfin'],
                  ['Average days on market', '70 days', 'March 2026 · Redfin'],
                  ['Days to pending (typical homes)', '~43 days', 'March 2026 · Redfin'],
                  ['Days to pending (hot homes)', '~16 days', 'March 2026 · Redfin'],
                  ['Hot homes sale-to-list', '~4% above list price', 'March 2026 · Redfin'],
                  ['Homes sold (March 2026)', '27 (down from 40 prior year)', 'March 2026 · Redfin'],
                  ['Prior year homes sold', '40 (March 2025)', 'March 2026 · Redfin'],
                  ['Broome County transfer tax', '$5/$1,000 ($4 state + $1 county)', 'broomecountyny.gov DeedFAQs (direct fetch 2026-05-01)'],
                  ['Deed recording fee (2-page deed)', '$55 ($45 base + $5/page × 2)', 'broomecountyny.gov DeedFAQs (direct fetch 2026-05-01)'],
                  ['TP-584 filing fee', '$10 + transfer tax owed', 'broomecountyny.gov'],
                  ['RP-5217 filing fee (residential)', '$125', 'broomecountyny.gov (verify current fee)'],
                ].map(([metric, value, source], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium text-sm">{metric}</td>
                    <td className="py-2 px-4 font-semibold text-brand-primary text-sm">{value}</td>
                    <td className="py-2 px-4 text-gray-500 text-xs">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Understanding Binghamton's 2026 Market Conditions
          </h2>

          <div className="space-y-5 text-gray-700">
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Thin volume — what it means for sellers</h3>
              <p className="text-sm">
                Binghamton recorded only 27 home sales in March 2026, down from 40 the prior year.
                That's a thin-volume market. Monthly price movements in thin markets are volatile —
                one or two high-priced sales can swing the median significantly. The more reliable
                indicators of market health are the Compete Score (72), sale-to-list ratio (101.1%),
                and the speed at which hot homes move (16 days to pending, 4% above list). Those
                numbers suggest active buyer demand. But for as-is properties with deferred maintenance
                or title complications, the 70-day average DOM tells a different story.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Cash buyer advantage in Binghamton</h3>
              <p className="text-sm">
                Binghamton's median price of $175,000 sits at a point where inspection contingencies
                and repair negotiations are proportionally painful. A $15,000 repair demand on a
                $175,000 sale represents an 8.6% price reduction — that's significant. Cash buyers
                who take as-is condition eliminate that negotiation entirely. Add in the NY attorney
                closing requirement (which adds 1–2 weeks to any timeline) and cash's speed
                advantage becomes meaningful: 7–14 days vs. 60–90 days for a traditional sale.
              </p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Broome County transfer tax — what sellers pay</h3>
              <p className="text-sm">
                According to Broome County Clerk's DeedFAQs (broomecountyny.gov, confirmed
                direct fetch 2026-05-01), New York State charges $4 per $1,000 and Broome County
                adds $1 per $1,000 — a total of $5 per $1,000 of sale price paid by the seller.
                Example: on a $175,000 sale, the total transfer tax is $875. In addition, sellers
                file TP-584 ($10 + tax owed) and RP-5217 ($125 residential) at the Broome County
                Clerk's Office, 60 Hawley Street, 3rd floor. When you sell to USA Home Buyers,
                we cover all of these costs.
              </p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Closing Costs Estimate — Binghamton NY Seller
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Cost Item</th>
                  <th className="py-3 px-4 text-left">Amount (on $175K sale)</th>
                  <th className="py-3 px-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['NY Transfer Tax (TP-584)', '$700 (state: $4/$1K)', 'NY Tax Law §1402'],
                  ['Broome County Transfer Tax', '$175 (county: $1/$1K)', 'broomecountyny.gov confirmed'],
                  ['TP-584 filing fee', '$10', 'broomecountyny.gov confirmed'],
                  ['RP-5217 filing fee', '$125 (residential)', 'broomecountyny.gov — verify current fee'],
                  ['Deed recording (2-page deed)', '$55', 'broomecountyny.gov confirmed'],
                  ['Seller attorney fee', 'Varies (~$750–$1,500+)', 'NY attorney-closing state requirement'],
                  ['Agent commission (traditional)', '~$8,750–$10,500 (5–6%)', 'N/A with USA Home Buyers'],
                  ['Total (traditional with agent)', '~$10,515–$13,065+', 'Before repairs'],
                  ['Total (USA Home Buyers)', '$0 out of pocket', 'We cover all closing costs'],
                ].map(([item, amount, notes], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : (item.includes('USA Home') ? 'bg-green-50 font-semibold' : 'bg-gray-50')}>
                    <td className="py-2 px-4 font-medium">{item}</td>
                    <td className="py-2 px-4 text-brand-primary font-semibold">{amount}</td>
                    <td className="py-2 px-4 text-gray-500 text-xs">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Estimates based on confirmed Broome County Clerk DeedFAQs data. Attorney fees vary.
            All figures subject to change — verify current rates before closing.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          {[
            { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure →' },
            { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property →' },
            { href: '/markets/binghamton-ny/probate', label: 'Probate Sales →' },
            { href: '/markets/binghamton-ny/faq', label: 'Seller FAQ →' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-brand-light rounded-xl p-4 text-brand-primary hover:bg-blue-100 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <CashOfferForm
          variant="footer"
          headline="Get a Cash Offer for Your Binghamton NY Home"
          subheadline="Written offer in 24 hours. All closing costs covered. Market data last updated March 2026."
          sourcePage="/markets/binghamton-ny/market-report"
        />

        <p className="text-xs text-gray-400 mt-8">
          Source: Redfin Binghamton NY housing market (direct fetch 2026-05-01);
          Broome County Clerk's Office DeedFAQs (broomecountyny.gov, direct fetch 2026-05-01).
          Market data is subject to change. This page is updated periodically but is not a
          real-time data source.
        </p>
      </div>
    </>
  );
}
