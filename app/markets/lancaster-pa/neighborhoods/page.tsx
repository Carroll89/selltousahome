/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { lancasterLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Lancaster PA Neighborhoods — We Buy Houses',
  description:
    'We buy houses in every Lancaster PA neighborhood — Cabbage Hill, West End, Chestnut Hill, Musser Park, and all of Lancaster County. Neighborhood price data, investor activity, cash offer info.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/neighborhoods` },
};

const articleSch = articleSchema(
  'Lancaster PA Neighborhoods — Cash Home Buyer Guide',
  `${SITE_URL}/markets/lancaster-pa/neighborhoods`,
  '2026-04-13'
);

const NEIGHBORHOODS = [
  {
    name: 'Cabbage Hill',
    area: 'SW Lancaster City',
    median: '$233,000',
    yoy: '+17.1%',
    competeScore: '80/100',
    dom: '~10 days',
    interest: 'Very High',
    description: 'Dense rowhouse inventory, high renter population, entry-level prices. According to Redfin\'s Cabbage Hill Housing Market page, the neighborhood had a median of $233,000 in February 2026 — up 17.1% year-over-year. Homes with deferred maintenance and code issues are common in pre-1940 brick construction.',
  },
  {
    name: 'West End',
    area: 'W Lancaster City',
    median: '~$195K–$245K',
    yoy: 'Strong appreciation',
    competeScore: 'Competitive',
    dom: '~15-20 days',
    interest: 'Very High',
    description: 'Working-class rowhouses and twins adjacent to Cabbage Hill. Strong investor demand. Many properties have been in the same family for multiple generations. High repair-needed inventory. Adjacent to Cabbage Hill corridor — shares similar housing stock character.',
  },
  {
    name: 'Chestnut Hill',
    area: 'SE Lancaster City (near F&M College)',
    median: '$377,000',
    yoy: 'Stable',
    competeScore: 'Moderate',
    dom: '20-30 days',
    interest: 'Moderate',
    description: 'Victorian singles and semi-detached homes near Franklin & Marshall College. Higher values, more established ownership. Less distressed inventory but estate situations arise in this neighborhood regularly. Median list price approximately $377,000 (Movoto, September 2025).',
  },
  {
    name: 'Musser Park / Old Town',
    area: 'NE Lancaster City',
    median: '$280K–$380K',
    yoy: 'Stable',
    competeScore: 'Moderate',
    dom: '20-30 days',
    interest: 'Moderate',
    description: 'Victorian rowhouses and detached homes near the Lancaster courthouse. Mix of owner-occupied and rental. Proximity to Musser Park adds value. Estate situations from long-time ownership are common.',
  },
  {
    name: 'Southeast Lancaster',
    area: 'SE Lancaster City',
    median: 'Varies ($200K–$320K)',
    yoy: 'Moderate growth',
    competeScore: 'Competitive',
    dom: '~15-25 days',
    interest: 'Moderate',
    description: 'Diverse neighborhood with mix of rowhouses and larger single-family homes. Strong Hispanic community presence. Closer to downtown amenities. Mix of owner-occupied and rental inventory.',
  },
  {
    name: 'Downtown / Central Business District',
    area: 'Core Lancaster City',
    median: '$440,000',
    yoy: '+51.7%',
    competeScore: 'Competitive',
    dom: '~10 days',
    interest: 'Lower',
    description: 'Converted lofts, commercial-mixed residential. According to Redfin, downtown Lancaster had a median of $440,000 in December 2025, up 51.7% YoY. Primarily high-appreciation investment play, fewer distressed sellers. Most activity is commercial conversion and renovation.',
  },
  {
    name: 'Manheim Township',
    area: 'NW of Lancaster City (suburb)',
    median: '$330K–$455K',
    yoy: 'Moderate',
    competeScore: 'Competitive',
    dom: '~18 days',
    interest: 'Moderate',
    description: 'Post-war suburban mix — Cape Cods, ranches, newer construction. Higher values than city core. Established families, good school district. Homes.com data shows Manheim Township medians in the $330K-$455K range depending on subdivision.',
  },
  {
    name: 'Lancaster Township',
    area: 'S/SW of Lancaster City (suburb)',
    median: '~$300K+',
    yoy: 'Stable',
    competeScore: 'Moderate',
    dom: '~20 days',
    interest: 'Moderate',
    description: 'Mix of post-war suburban and older housing stock. Adjacent to Lancaster City border. Estate situations from long-time homeownership are common here.',
  },
];

const SURROUNDING = [
  { name: 'Lititz', note: 'Named "happiest town in America" — tight inventory, high demand' },
  { name: 'Ephrata', note: 'Borough north of Lancaster — mix of older borough stock and rural adjacency' },
  { name: 'Manheim (Borough)', note: 'Historic borough, older housing stock, estate situations common' },
  { name: 'Columbia', note: 'River borough — Victorian housing, waterfront proximity' },
  { name: 'Mount Joy', note: 'Small borough, mix of older homes and suburban development' },
  { name: 'Elizabethtown', note: 'College town character, mix of rental and owner-occupied' },
  { name: 'Millersville', note: 'College town, student rental market, seasonal ownership' },
  { name: 'New Holland', note: 'Smaller borough east of Lancaster, agricultural adjacency' },
  { name: 'Quarryville', note: 'Southern Lancaster County, rural character, estate farmsteads' },
  { name: 'Strasburg', note: 'Amish Country tourism area, farmhouses and rural properties' },
  { name: 'Marietta', note: 'Historic river borough, Victorian homes, estate situations' },
  { name: 'Mountville', note: 'Small borough adjacent to Manheim Township' },
];

export default function LancasterNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>Neighborhoods</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Lancaster PA Neighborhoods — Where We Buy Houses
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          We buy houses in every Lancaster City neighborhood and throughout Lancaster County. Here's what each
          area looks like — housing stock, price ranges, and investor activity — sourced from Redfin, Zillow,
          and local market data.
        </p>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Lancaster Neighborhood Home" sourcePage="/markets/lancaster-pa" />

        {/* City neighborhoods */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Lancaster City Neighborhoods</h2>
          <div className="space-y-6">
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} className="bg-brand-light rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">{n.name}</h3>
                    <p className="text-sm text-gray-500">{n.area}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    n.interest === 'Very High' ? 'bg-red-100 text-red-700' :
                    n.interest === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    Investor Interest: {n.interest}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  {[
                    { label: 'Median Price', value: n.median },
                    { label: 'YoY Change', value: n.yoy },
                    { label: 'Compete Score', value: n.competeScore },
                    { label: 'Avg Days on Market', value: n.dom },
                  ].map((stat, j) => (
                    <div key={j} className="bg-white rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                      <p className="font-bold text-brand-dark text-sm">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-700">{n.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Sources: Redfin Lancaster City and neighborhood pages (Feb 2026); Redfin Cabbage Hill Housing Market;
            Movoto Chestnut Hill Lancaster; Zillow ZHVI (Feb 2026). Market data last updated: April 2026.
          </p>
        </section>

        {/* Surrounding areas */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Lancaster County Surrounding Areas</h2>
          <p className="text-gray-700 mb-4">
            We buy throughout Lancaster County — from the small boroughs adjacent to the city to the rural townships
            of Pennsylvania Dutch Country. Estate farmsteads, small-town rowhouses, suburban ranches — Lancaster County
            is diverse in housing stock and we buy all of it.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {SURROUNDING.map((area, i) => (
              <div key={i} className="bg-brand-light rounded-xl p-4">
                <p className="font-bold text-brand-dark">{area.name}</p>
                <p className="text-sm text-gray-600 mt-1">{area.note}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA Market Page</Link>
          <Link href="/markets/lancaster-pa/market-report" className="text-brand-primary hover:underline">Lancaster Market Report →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Lancaster Neighborhood Home" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
