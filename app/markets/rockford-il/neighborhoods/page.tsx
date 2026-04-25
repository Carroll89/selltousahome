/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/neighborhoods`;

export const metadata: Metadata = {
  title: 'Rockford IL Neighborhoods — Cash Buyer Guide',
  description:
    'Neighborhood-by-neighborhood home values in Rockford IL. Churchill Grove, Midtown, Signal Hill, Haight Historic District. We buy houses in all Rockford areas. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  {
    name: 'Churchill Grove',
    zhvi: '$157,396',
    type: 'Mixed Victorian, bungalow, craftsman — northwest corridor',
    investorInterest: 'High',
    notes: 'Tree-lined streets, undervalued relative to housing stock quality. Mix of pre-war craftsmans and brick colonials from the 1920s-1940s. Strong renovation upside on deferred-maintenance examples.',
    source: 'Zillow ZHVI (2026)',
  },
  {
    name: 'Northeast Rockford',
    zhvi: '$220,000',
    type: 'Ranch, colonial, newer SFR — above-median',
    investorInterest: 'Moderate',
    notes: 'Highest-value residential area in the city. Ranch and colonial homes from 1950s-1980s. Smaller distressed pipeline at this price point; conventional buyer pool is stronger here.',
    source: 'Redfin (Jan 2026)',
  },
  {
    name: 'Midtown',
    zhvi: '$106,000',
    type: 'Pre-war bungalow, two-flat, craftsman — dense urban core',
    investorInterest: 'High',
    notes: '+38.8% YoY appreciation as of February 2026 — fastest-appreciating neighborhood in Rockford, signaling gentrification. Classic buy-low zone with strong upside. Near Rock River industrial corridor.',
    source: 'Redfin (Feb 2026)',
  },
  {
    name: 'Signal Hill',
    zhvi: '$85,792',
    type: 'Mid-century ranch, working-class SFR',
    investorInterest: 'Very High',
    notes: 'Below-median pricing with strong fix-and-flip opportunity. Post-war ranch homes in the 1950s-1970s vintage. Deferred maintenance common. Entry-level investor market.',
    source: 'Zillow ZHVI (2026)',
  },
  {
    name: 'Jackson Oaks',
    zhvi: '$83,093',
    type: 'Post-war ranch, modest SFR',
    investorInterest: 'Very High',
    notes: 'Below-market distressed pipeline. Modest working-class ranches in southwest Rockford. Significant deferred maintenance in older examples. Cash buyers are often the only viable buyer here.',
    source: 'Zillow ZHVI (2026)',
  },
  {
    name: 'Haight Village Historic District',
    zhvi: '$75,000–$300,000 range',
    type: 'Victorian and Queen Anne homes (1840s–1890s)',
    investorInterest: 'Moderate-High',
    notes: 'Oldest neighborhood in Rockford — historic district designation since 1981. Some of the oldest residential stock in northern Illinois. Victorian and Queen Anne homes; renovation premium on restored examples, distressed discount on deteriorated ones. Complex ownership and title situations common.',
    source: 'homes.com (2026)',
  },
  {
    name: 'West Rockford / West State Corridor',
    zhvi: '~$88/sqft',
    type: 'Working-class cottages, smaller ranches, some industrial-era two-flats',
    investorInterest: 'High',
    notes: 'Lowest-price zone in the city. Pre-1960s construction, deferred maintenance typical, overhead utility lines, modest setbacks. Strong distressed seller pipeline. Cash buyers are the primary exit for most of these homes.',
    source: 'Redfin sqft data (2026)',
  },
  {
    name: 'Old Rockford College Area',
    zhvi: '$51,970',
    type: 'Older SFR, compact lots',
    investorInterest: 'Very High',
    notes: 'Lowest ZHVI index in the city. Highest distress likelihood. Very compressed price point means conventional financing is rare; cash is the market here. Strong investor demand at these entry prices.',
    source: 'Zillow ZHVI (2026)',
  },
];

export default function RockfordILNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Rockford IL Neighborhood Home Values — Cash Buyer Guide 2026', pageUrl, '2026-04-18'),
      ]} />

      <section className="relative text-white py-14 px-4 bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Rockford IL Neighborhoods — Home Values &amp; Cash Buyer Guide
          </h1>
          <p className="text-blue-100 text-lg mb-4">
            Neighborhood-by-neighborhood price data across Rockford and Winnebago County. We buy houses in every area — any condition, any situation.
          </p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg transition-colors">
            📞 Call Now — 888-274-5006 (24/7)
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <p className="text-gray-700 mb-6">
            Rockford's housing market is not monolithic. The city ranges from the Haight Village Historic District with Victorian homes dating to 1843 to working-class ranches in Jackson Oaks and Signal Hill with ZHVI indexes below $85,000. The Midtown neighborhood appreciated 38.8% in a single year. Northeast Rockford trades at $220,000 — nearly twice the city's ZHVI average. Understanding which neighborhood you're in matters for pricing, buyer pool, and timeline.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Rockford Neighborhoods — Price &amp; Investor Data</h2>
          <div className="space-y-6">
            {NEIGHBORHOODS.map(n => (
              <div key={n.name} className="border border-gray-200 rounded-xl p-5 bg-white">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold text-brand-dark">{n.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${n.investorInterest === 'Very High' ? 'bg-red-100 text-red-700' : n.investorInterest === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-brand-primary'}`}>
                    Investor Interest: {n.investorInterest}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-3 text-sm mb-3">
                  <div><span className="font-medium text-gray-700">Median / ZHVI:</span> <span className="text-brand-dark font-bold">{n.zhvi}</span></div>
                  <div><span className="font-medium text-gray-700">Housing type:</span> {n.type}</div>
                </div>
                <p className="text-gray-700 text-sm">{n.notes}</p>
                <p className="text-xs text-gray-400 mt-2">Source: {n.source}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Winnebago County Communities</h2>
          <p className="text-gray-700 mb-4">
            Our service area extends throughout Winnebago County, including Loves Park (immediately north of Rockford, pop ~23K), Machesney Park (northwest, pop ~23K), Roscoe, Rockton, Cherry Valley, New Milford, Winnebago Village, and Pecatonica. We also cover adjacent Boone County (Belvidere, pop ~25K — home to the former Chrysler FCA plant that drove significant manufacturing employment in the region) and portions of southern Ogle County.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Loves Park', 'Machesney Park', 'Roscoe', 'Rockton', 'Cherry Valley', 'New Milford', 'Winnebago Village', 'Pecatonica', 'Belvidere (Boone Co.)', 'Byron (Ogle Co.)'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford vs. Chicago — Not the Same Market</h2>
          <p className="text-gray-700 mb-4">
            Rockford is 90 miles west of Chicago. The two markets are entirely distinct. Chicago metro median prices often run $300,000-$400,000+; Rockford's is $170,000. Cook County foreclosure timelines run 24-36 months; Winnebago County runs 14-20 months. Chicago has iBuyer presence (Opendoor, Offerpad); Rockford does not — the metropolitan population of 337,000 is below typical iBuyer service thresholds. Investors active in Cook County should not apply Cook County pricing, cap rates, or timeline assumptions to Winnebago County properties.
          </p>
        </section>

        <section className="my-8">
          <div className="bg-brand-light rounded-xl p-6">
            <h2 className="text-xl font-bold text-brand-dark mb-3">We Buy Houses in Every Rockford Neighborhood</h2>
            <p className="text-gray-700 text-sm mb-4">
              From a $51,970 ZHVI property in the Old Rockford College area to a $300,000 Haight Historic District Victorian — any neighborhood, any condition, any situation. Written cash offer in 24 hours. Call 888-274-5006 or fill out the form below.
            </p>
          </div>
        </section>

        <div className="my-4 grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: '/markets/rockford-il', label: '← Back to Rockford IL' },
            { href: '/markets/rockford-il/market-report', label: 'Market Report' },
            { href: '/markets/rockford-il/inherited-property', label: 'Inherited Property' },
            { href: '/markets/rockford-il/foreclosure', label: 'Foreclosure Help' },
            { href: '/markets/rockford-il/faq', label: 'FAQ' },
            { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-50 font-medium text-sm transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Rockford IL Home" sourcePage="/markets/rockford-il/neighborhoods" />
      </div>
    </>
  );
}
