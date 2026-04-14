/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/neighborhoods`;

export const metadata: Metadata = {
  title: 'York PA Neighborhoods — Home Prices',
  description:
    'York PA neighborhood guide: home prices, investor interest, and cash offer ranges by area. Northeast York, Downtown, Southwest York, Springdale, East Side.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  {
    name: 'Downtown York',
    medianPrice: '$183,000',
    yoy: '-11.0%',
    investorInterest: 'Medium-High',
    description: 'Colonial and Federal architecture dating to the 1700s. Continental Square area. Mix of converted commercial, condo lofts, and historic homes. Gentrification activity near York Central Market.',
    cashRange: '$119,000–$137,000',
  },
  {
    name: 'Springdale',
    medianPrice: '$209,000',
    yoy: '-12.9%',
    investorInterest: 'Medium',
    description: 'Northwest York. More intact housing stock with a mix of owner-occupants and investors. Tree-lined streets, slightly higher price point than city average.',
    cashRange: '$136,000–$157,000',
  },
  {
    name: 'Southwest York',
    medianPrice: '$175,000',
    yoy: '+10.8%',
    investorInterest: 'High',
    description: 'Strong price appreciation in 2025-2026. Working-class row homes, active investor market. One of the fastest-appreciating pockets in York City.',
    cashRange: '$114,000–$131,000',
  },
  {
    name: 'East Side',
    medianPrice: '$160,000',
    yoy: '+3.2%',
    investorInterest: 'High',
    description: 'Fast-moving market (~17 days DOM average). Traditional row homes, high renter population. Strong demand from both investors and first-time buyers.',
    cashRange: '$104,000–$120,000',
  },
  {
    name: 'Northeast York',
    medianPrice: '$120,000',
    yoy: '-10.3%',
    investorInterest: 'Very High',
    description: 'Lowest prices in the city. Heavy investor activity. Aging industrial-era housing stock, many properties in need of significant work. Most cash buyers concentrate here.',
    cashRange: '$78,000–$90,000',
  },
  {
    name: 'North York Borough',
    medianPrice: '$180,000',
    yoy: '-0.1%',
    investorInterest: 'Medium',
    description: 'Separate borough adjacent to York City. Row homes and single-family mix. Slightly higher price point. Stable market with moderate investor activity.',
    cashRange: '$117,000–$135,000',
  },
];

export default function YorkNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('York PA Neighborhoods — Home Prices and Cash Offer Ranges', pageUrl, '2026-04-13'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/markets/york-pa" className="hover:text-brand-primary">York PA</Link>
          {' › '}
          <span>Neighborhoods</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          York PA Neighborhoods — Price Ranges & Cash Offer Guide
        </h1>
        <p className="text-gray-600 mb-2">
          Data from Redfin neighborhood market pages (February–November 2025/2026). Cash offer ranges reflect
          65-75% of ARV typical for York City's older housing stock.
        </p>
        <p className="text-gray-600 text-sm mb-8">Last updated: April 2026</p>

        <div className="space-y-6 mb-12">
          {NEIGHBORHOODS.map((n, i) => (
            <div key={i} className="bg-brand-light rounded-2xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h2 className="text-xl font-bold text-brand-dark">{n.name}</h2>
                  <span className={`inline-block text-xs px-2 py-1 rounded-full mt-1 ${
                    n.investorInterest === 'Very High' ? 'bg-red-100 text-red-700' :
                    n.investorInterest === 'High' ? 'bg-orange-100 text-orange-700' :
                    n.investorInterest === 'Medium-High' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    Investor Interest: {n.investorInterest}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-brand-primary">{n.medianPrice}</p>
                  <p className="text-xs text-gray-500">Median sale price · {n.yoy} YoY</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">{n.description}</p>
              <div className="bg-white rounded-xl p-3 text-sm">
                <span className="font-semibold text-brand-dark">Typical cash offer range: </span>
                <span className="text-brand-primary font-bold">{n.cashRange}</span>
                <span className="text-gray-500 ml-1">(65-75% of ARV, all closing costs included)</span>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">York County Service Area</h2>
          <p className="text-gray-700 mb-4 text-sm">
            Beyond York City, we buy throughout York County. These surrounding communities are all within
            our active service area — same 24-hour offer, same 7-14 day close:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Hanover', 'Red Lion', 'Dallastown', 'Spring Grove', 'Dover',
              'Shrewsbury', 'New Freedom', 'Glen Rock', 'Dillsburg', 'York Haven',
              'Manchester', 'Windsor', 'Seven Valleys', 'Jacobus', 'West York',
              'North York', 'Wrightsville', 'Mount Wolf', 'East York', 'Shiloh',
            ].map(city => (
              <span key={city} className="bg-white text-brand-primary px-3 py-1 rounded-full text-sm font-medium border border-blue-200">{city}</span>
            ))}
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your York Neighborhood Property"
          subheadline="Tell us the address — we'll give you a written offer within 24 hours."
          sourcePage="/markets/york-pa"
        />

        <div className="flex flex-wrap gap-4 text-sm mt-8">
          <Link href="/markets/york-pa" className="text-brand-primary hover:underline">← York PA market overview</Link>
          <Link href="/markets/york-pa/market-report" className="text-brand-primary hover:underline">York market report →</Link>
        </div>
      </div>
    </>
  );
}
