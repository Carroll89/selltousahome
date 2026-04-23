/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/new-haven-ct/market-report`;

export const metadata: Metadata = {
  title: 'New Haven CT Housing Market Report 2026',
  description:
    'New Haven CT housing market data 2026: median prices, days on market, foreclosure trends, and transfer tax breakdown for New Haven County sellers.',
  alternates: { canonical: pageUrl },
};

export default function NewHavenMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('New Haven CT Housing Market Report 2026 — What Sellers Need to Know', pageUrl, '2026-04-18'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/markets/new-haven-ct" className="text-brand-primary hover:underline">New Haven CT</Link> › Market Report
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
          New Haven CT Housing Market Report 2026
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR — Quick Answer</p>
          <p className="text-blue-900 text-sm leading-relaxed">
            New Haven median sale price: $365,000 (Redfin, Mar 2026). Zillow typical value: $323,843. Days on market: 65 days, up 19 days year-over-year. RDC hotness rank #12 nationally. New Haven is a Targeted Investment municipality — conveyance tax 1.25% total (seller pays). Cash buyers close in 7–14 days vs. 65-day retail average. Call 888-274-5006.
          </p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New Haven CT Home Prices — March 2026</h2>
          <p className="text-gray-700 mb-4">
            New Haven's home price data shows a divergence between Zillow's stock-based index and Redfin's transaction-level median. According to Zillow (February 2026), the city's typical home value (ZHVI) is $323,843, reflecting a +4.3% year-over-year gain. Per Redfin (March 2026), the median closed sale price is $365,000, down 2.7% from March 2025 — a reflection of the transaction mix skewing toward higher-end East Rock and Westville sales in that month's closings.
          </p>
          <p className="text-gray-700 mb-4">
            For cash buyer offer-range context, the Zillow ZHVI ($323,843) is the more representative baseline for the typical New Haven home. The Redfin median is pulled upward by premium neighborhoods. A cash offer on an average-condition New Haven home runs 70–80% of ZHVI — roughly $227,000–$259,000 for a standard property.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">Source / Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow ZHVI (city)</td><td className="p-3">$323,843 (+4.3% YoY)</td><td className="p-3 text-gray-500">Zillow, Feb 2026</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Zillow ZHVI (county)</td><td className="p-3">$395,478 (+3.9% YoY)</td><td className="p-3 text-gray-500">Zillow, Feb 2026</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin median sale price</td><td className="p-3">$365,000 (-2.7% YoY)</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$207 (+10.4% YoY)</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">65 days (+19 days YoY)</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">101.5% (+0.9 pt YoY)</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Homes sold (Mar 2026)</td><td className="p-3">45 (up from 43, Mar 2025)</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Avg offers per home</td><td className="p-3">3 offers</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Hot homes DOM</td><td className="p-3">~28 days</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">RDC hotness rank</td><td className="p-3">#12 (score 93.645)</td><td className="p-3 text-gray-500">Realtor.com, Mar 2026</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin compete score</td><td className="p-3">51 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Two-Tier Market: Hot Homes vs. Distressed Inventory</h2>
          <p className="text-gray-700 mb-4">
            New Haven's market data tells a two-tier story. Hot homes — move-in-ready properties in East Rock, Westville, and Wooster Square — are still moving in 28 days at 6% above list price. These are the homes that appear in the 101.5% sale-to-list ratio and 3-average-offers figures.
          </p>
          <p className="text-gray-700 mb-4">
            The distressed inventory — triple-deckers in Fair Haven and The Hill with deferred maintenance, vacant inherited homes in Newhallville, pre-foreclosure properties anywhere in the city — sits much longer. These homes either require significant capital ($30,000–$60,000 for lead abatement, boiler replacement, roof, and electrical on a typical pre-1950 New Haven triple-decker) or attract only cash buyers. For sellers in that situation, the 65-day median DOM is irrelevant — their home will sit months longer unless priced aggressively or sold off-market.
          </p>
          <p className="text-gray-700 mb-4">
            The cash buyer market exists precisely for this inventory. USA Home Buyers purchases New Haven properties in any condition, with no financing contingencies, no repair requirements, and a closing timeline as fast as 7 days. Call 888-274-5006.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New Haven County Transfer Tax — 1.25% Targeted Investment Rate</h2>
          <p className="text-gray-700 mb-4">
            New Haven sellers pay more in conveyance tax than most Connecticut homeowners. The city is one of 18 municipalities on Connecticut's Targeted Investment list — a designation that adds 0.25% to the standard municipal rate. The full breakdown:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Component</th>
                  <th className="text-left p-3">Rate</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">CT State Conveyance Tax (≤$800K)</td><td className="p-3">0.75%</td><td className="p-3 text-gray-500">Applied to full price on typical residential sale</td></tr>
                <tr className="bg-gray-50"><td className="p-3">New Haven Municipal Base Rate</td><td className="p-3">0.25%</td><td className="p-3 text-gray-500">Standard for all CT municipalities</td></tr>
                <tr className="bg-white"><td className="p-3">New Haven Targeted Investment Rate</td><td className="p-3">+0.25%</td><td className="p-3 text-gray-500">New Haven is confirmed on 18-town list</td></tr>
                <tr className="bg-gray-50 font-medium"><td className="p-3">Total (≤$800K residential)</td><td className="p-3 text-red-700">1.25%</td><td className="p-3">Seller pays all portions</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            On a $365,000 sale: state tax $2,738 + municipal 0.25% $913 + Targeted Investment 0.25% $913 = <strong>$4,563 total conveyance tax</strong>. Source: CT Gen Stat Chapter 223 (cga.ct.gov). When you sell to USA Home Buyers, we cover this cost entirely.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New Haven County Neighborhoods — Price Ranges by Area</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Neighborhood</th>
                  <th className="text-left p-3">Approx. Median Price</th>
                  <th className="text-left p-3">Character</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">East Rock</td><td className="p-3">$725K (SF median)</td><td className="p-3 text-gray-500">Victorian single-family; Yale-adjacent; highly desirable</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Westville</td><td className="p-3">$527K (SF median)</td><td className="p-3 text-gray-500">Large Victorian Craftsman; arts district; stable</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Edgewood</td><td className="p-3">$330K–$430K</td><td className="p-3 text-gray-500">Transitional; gentrification pressure; growing</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Beaver Hills</td><td className="p-3">$290K–$360K</td><td className="p-3 text-gray-500">Middle-class; brick Colonials and ranches</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Fair Haven</td><td className="p-3">$200K–$300K</td><td className="p-3 text-gray-500">Working-class; Hispanic majority; triple-deckers</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">The Hill</td><td className="p-3">$190K–$260K</td><td className="p-3 text-gray-500">Dense urban; multi-family; high investor activity</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Newhallville</td><td className="p-3">$170K–$240K</td><td className="p-3 text-gray-500">Highest distress; deepest cash discounts; pre-war stock</td></tr>
              </tbody>
            </table>
          </div>
          <Link href="/markets/new-haven-ct/neighborhoods" className="text-brand-primary hover:underline text-sm font-medium">View full neighborhood guide →</Link>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Foreclosure Trends in New Haven County</h2>
          <p className="text-gray-700 mb-4">
            Connecticut's strict foreclosure process — where title transfers directly to the lender on Law Day without any public auction — creates unique dynamics in New Haven's foreclosure pipeline. The absence of a competitive bidding process means there's no "second chance" at the courthouse steps. Once a Law Day passes without the mortgage being paid, the lender owns the property.
          </p>
          <p className="text-gray-700 mb-4">
            According to Nolo.com (June 2025), the total timeline from first missed payment to Law Day in New Haven County runs 5–9 months — faster than Wisconsin (12–15 months) or Illinois (12–18 months). For homeowners in pre-foreclosure, the window to sell and recover equity is compressed. The mandatory mediation program for owner-occupied primary residences (CT Gen Stat § 49-31l) adds 60–90 days of structured negotiation time, but only if pursued. Cash buyers operating in the New Haven market need to move quickly — and so do sellers in that situation.
          </p>
        </section>

        <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
            { href: '/markets/new-haven-ct/foreclosure', label: 'Foreclosure Help' },
            { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
            { href: '/markets/new-haven-ct/neighborhoods', label: 'Neighborhoods Guide' },
            { href: '/sell-house-fast-connecticut', label: 'Connecticut State Hub' },
            { href: '/markets/bridgeport-ct', label: 'Bridgeport CT' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
              {link.label}
            </Link>
          ))}
        </div>


      <VideoEmbed
        src="/videos/new-haven-ct/market-report.mp4"
        title="New Haven CT Real Estate Market Report 2026"
        poster="/videos/new-haven-ct/market-report-poster.jpg"
        subtitle="Yale University anchor, healthcare growth, steady appreciation in New Haven County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          New Haven CT market 2026: Yale University and Yale New Haven Health anchor steady demand. Buyers priced out of Fairfield County discover New Haven affordability. Consistent appreciation. USA Home Buyers gives you a cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
        <CashOfferForm variant="footer" headline="Ready to Sell Your New Haven CT Home?" sourcePage="/markets/new-haven-ct/market-report" />
      </div>
    </>
  );
}
