/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { columbusLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/columbus-oh/market-report`;

export const metadata: Metadata = {
  title: 'Columbus OH Housing Market Report 2026 — Prices & Trends',
  description:
    'Columbus OH real estate market data for 2026. Median prices, Franklin County trends, neighborhood character, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function ColumbusMarketReportPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          columbusLocalBusinessSchema,
          articleSchema('Columbus OH Housing Market Report 2026', pageUrl, '2026-05-01'),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/columbus-oh" className="hover:text-white">Columbus OH</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Columbus OH Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">
            According to Redfin (March 2026), Columbus's median sale price is $151,750 — up 21.4%
            year-over-year — with 42 days on market and a Compete Score of 73/100. USA Home Buyers
            purchases Columbus homes for cash in any condition, any situation. Written offer in 24
            hours, close in 7–14 days. Call 888-274-5006.
          </p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Columbus OH Market Overview</h2>
          <p className="text-gray-700 mb-4">
            Columbus is the county seat of Franklin County, Ohio — the former rubber capital of the world.
            Goodyear, Firestone, General Tire, and B.F. Goodrich shaped a city of dense working-class
            neighborhoods with bungalows, Cape Cods, and American foursquares stretching from
            Goodyear Heights and Kenmore to Firestone Park and East Columbus. With a Compete Score of
            73/100 and a median sale price of $151,750 (up 21.4% YoY per Redfin March 2026), Columbus
            sits in the "Very Competitive" tier for Ohio metros.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$151,750 (+21.4% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$119/sq ft (+18.4% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">42 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">97.3%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">73 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">196 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">OH conveyance fee</td><td className="p-3">$4.00/$1,000 + $0.50/lot (Franklin County Fiscal Office)</td><td className="p-3 text-gray-500">Franklin County Fiscal Office</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Recording fee</td><td className="p-3">$34 first 2 pages + $8/additional page</td><td className="p-3 text-gray-500">Franklin County Fiscal Office Recording Division</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Franklin County Common Pleas; RealAuction mortgage sales Fridays 10:00 a.m.; delinquent tax sales Tuesdays 10:00 a.m.</td><td className="p-3 text-gray-500">Franklin County Sheriff</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Franklin County Probate Court, Judge Elinore Marsh Stormer — 209 South High Street, Columbus OH 44308, phone 330-643-2350</td><td className="p-3 text-gray-500">Franklin County Probate Court</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Ohio is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Franklin County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Columbus Neighborhoods — Character Notes</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Neighborhood</th>
                  <th className="text-left p-3">Character</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Goodyear Heights</td><td className="p-3">Classic rubber-era bungalows and foursquares. High concentration of pre-1940 stock. Strong as-is, estate, and inherited angle.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Kenmore</td><td className="p-3">Working-class southwest neighborhood. Older colonials and bungalows. Investor-friendly pricing, strong cash buyer demand.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Firestone Park</td><td className="p-3">Firestone company-era homes. Stable older neighborhood; estate and deferred-maintenance angle common.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">East Columbus</td><td className="p-3">Diverse east-side neighborhood. Older two-stories and Cape Cods. Active investor market, lower price point.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Highland Square</td><td className="p-3">Walkable central-west neighborhood near downtown. Craftsman bungalows and older colonials. Stronger retail demand for updated homes.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">South Columbus / Middlebury</td><td className="p-3">Mixed residential. Older stock, varied condition. Good for as-is and distressed sales.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Northwest Columbus</td><td className="p-3">More suburban west-side areas including Fairlawn adjacency. Mix of older and post-war stock. Better retail fit for move-in-ready homes.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Cuyahoga Falls</td><td className="p-3">Adjacent Franklin County city. Mix of post-war and newer stock. Active retail and cash buyer market.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Note: Neighborhood samples can be small. Use as directional guidance; verify with current MLS comps. Sources: Redfin neighborhood pages, March 2026.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Columbus's Market Means for As-Is Sellers</h2>
          <p className="text-gray-700 mb-4">
            Columbus's 73/100 Compete Score means move-in-ready homes attract competitive offers. But
            the city's 34.1% pre-1940 housing stock means inherited, distressed, or
            deferred-maintenance properties often can't compete without significant investment.
            Average homes sell for about 3% below list price and go pending in around 12 days for
            hot properties — but older homes needing work can sit much longer.
          </p>
          <p className="text-gray-700 mb-4">
            Franklin County's RealAuction Friday sheriff sale, Franklin County Probate Court (209 South
            High Street), and the city's active code enforcement all create situations where a
            direct cash sale is faster and cheaper than a traditional listing. USA Home Buyers
            closes before any of those deadlines and covers all closing costs.
          </p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
            📞 Call Now — 888-274-5006
          </a>
        </section>

        <Link href="/markets/columbus-oh" className="inline-block text-brand-primary hover:underline text-sm mb-8">
          ← Back to Columbus OH Market Page
        </Link>

        <CashOfferForm variant="footer" headline="Get an Columbus OH Cash Offer" sourcePage="/markets/columbus-oh/market-report" />
      </div>
    </>
  );
}
