/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { wilmingtonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/neighborhoods`;

export const metadata: Metadata = {
  title: 'Wilmington DE Neighborhoods Guide',
  description:
    'Wilmington DE neighborhood guide for sellers: price ranges, housing types, investor activity. Southbridge, Trolley Square, West Center City, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  {
    name: 'Southbridge / South Wilmington',
    priceRange: '$100,000 – $200,000',
    housingType: 'Dense brick row homes, American Foursquare, some detached',
    investorActivity: 'Very High',
    notes: 'Highest investor activity in the city. Tightest price-to-ARV spread. The Southbridge Wetland Park (completed 2022) has improved the neighborhood\'s appeal. Most homes here are pre-1930 worker housing built for DuPont-era industrial employees.',
    source: 'homes.com South Wilmington neighborhood guide',
  },
  {
    name: 'West Side Wilmington',
    priceRange: '~$198,000 median',
    housingType: 'Brick row homes, pre-war housing stock',
    investorActivity: 'Very High',
    notes: 'Below-median pricing with high renter ratio and strong investor demand. The West Side has seen sustained cash buyer interest due to affordable entry points and large unrenovated inventory.',
    source: 'Redfin West Side Wilmington neighborhood data (Sep 2024)',
  },
  {
    name: 'West Center City',
    priceRange: '~$218,000 median',
    housingType: 'Dense row homes, some detached',
    investorActivity: 'High',
    notes: 'Fastest-appreciating submarket in Wilmington city limits (+24.6% YoY as of Sep 2024, Redfin). Many unrenovated homes available. Strong flipper and buy-and-hold interest.',
    source: 'Redfin West Center City neighborhood data (Sep 2024)',
  },
  {
    name: 'Quaker Hill',
    priceRange: '~$271,655 median',
    housingType: 'Pre-war two-stories, Victorian row homes',
    investorActivity: 'High',
    notes: 'Historic district character with a mix of restored and distressed properties. Renovation activity has been ongoing for over a decade. Strong rental demand near Wilmington\'s employment centers.',
    source: 'Ark7 Wilmington investment guide (Feb 2026)',
  },
  {
    name: 'Brandywine Village',
    priceRange: '$150,000 – $250,000',
    housingType: 'Victorian two-stories, brick row homes',
    investorActivity: 'High',
    notes: 'North Wilmington neighborhood close to Brandywine Creek and Brandywine Park. Aging stock with active investor presence. Proximity to the creek and park drives buyer interest in renovated properties.',
    source: 'Ark7 Wilmington investment guide; homes.com neighborhood data',
  },
  {
    name: 'Little Italy',
    priceRange: '$180,000 – $280,000',
    housingType: 'Brick row homes, traditional two-stories',
    investorActivity: 'High',
    notes: 'Tight-knit historic neighborhood with ongoing renovation activity. Some of the best-maintained row home blocks in the city alongside distressed opportunities.',
    source: 'Redfin Wilmington neighborhood data',
  },
  {
    name: 'Trolley Square',
    priceRange: '$350,000 – $500,000+',
    housingType: 'Victorian row homes, brownstones, condos',
    investorActivity: 'Moderate',
    notes: 'Most walkable area in Wilmington; near Brandywine Park and Delaware Avenue. Renovated Victorians dominate. Higher price points reduce cash buyer activity but renovation flips are active. The Trolley Square restaurant corridor attracts younger buyers.',
    source: 'Redfin Trolley Square; Ark7 Wilmington data',
  },
  {
    name: 'Downtown Wilmington / Riverfront',
    priceRange: '$250,000 – $500,000',
    housingType: 'Condos, lofts, modern construction',
    investorActivity: 'Low for wholesale',
    notes: 'The Wilmington Riverfront redevelopment along the Christina River has brought new construction and condo developments. This is primarily newer-vintage housing — not the traditional cash buyer inventory. The Riverwalk, restaurants, and event venues drive demand here.',
    source: 'Redfin Downtown Wilmington data',
  },
];

export default function WilmingtonNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        wilmingtonLocalBusinessSchema,
        articleSchema('Wilmington DE Neighborhoods Guide — Cash Home Buyers by Neighborhood', pageUrl, '2026-04-13'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/markets/wilmington-de" className="hover:text-brand-primary">Wilmington DE</Link>
          {' › '}
          <span>Neighborhoods</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Wilmington DE Neighborhoods — Price Ranges and Investor Activity
        </h1>
        <p className="text-gray-600 mb-4">
          Wilmington's neighborhoods vary significantly in price, housing type, and investor activity.
          Whether you're in Southbridge, Trolley Square, or anywhere between — USA Home Buyers purchases
          homes throughout the city and New Castle County.
        </p>
        <p className="text-gray-600 mb-8 text-sm">
          Data sources: Redfin neighborhood data, Ark7 Wilmington investment guide, homes.com neighborhood
          guides. Market data last updated: April 2026.
        </p>

        <div className="space-y-8 mb-12">
          {NEIGHBORHOODS.map((nbhd, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                <h2 className="text-xl font-bold text-brand-dark">{nbhd.name}</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  nbhd.investorActivity === 'Very High' ? 'bg-red-100 text-red-700' :
                  nbhd.investorActivity === 'High' ? 'bg-orange-100 text-orange-700' :
                  nbhd.investorActivity === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {nbhd.investorActivity} Investor Activity
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Price Range</p>
                  <p className="text-brand-primary font-bold">{nbhd.priceRange}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Housing Type</p>
                  <p className="text-gray-700 text-sm">{nbhd.housingType}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">{nbhd.notes}</p>
              <p className="text-xs text-gray-400">Source: {nbhd.source}</p>
            </div>
          ))}
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New Castle County Surrounding Areas</h2>
          <p className="text-gray-700 mb-4">
            Beyond Wilmington city limits, we serve all of New Castle County — the suburban and rural communities
            that surround the city along the I-95 corridor:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Newark (near University of Delaware)',
              'New Castle (historic Delaware River town)',
              'Elsmere (immediately south of Wilmington)',
              'Claymont (northeast, near PA border)',
              'Bear (growing suburban market)',
              'Middletown (fast-growing south NCC)',
              'Hockessin (affluent western suburb)',
              'Arden (small historic community)',
              'Edgemoor (north Wilmington suburb)',
              'Glasgow (southern New Castle County)',
              'Pike Creek (western suburb)',
              'Wilmington Manor (just south of city limits)',
            ].map(area => (
              <span key={area} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm">{area}</span>
            ))}
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Wilmington DE Home"
          subheadline="Any neighborhood, any condition. Written offer in 24 hours. We cover all closing costs."
          sourcePage="/markets/wilmington-de"
        />

        <nav className="border-t pt-6 mt-8 text-sm text-gray-500">
          <Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">← Back to Wilmington DE</Link>
        </nav>
      </div>
    </>
  );
}
