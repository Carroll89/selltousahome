import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Erie PA Neighborhoods — We Buy Houses in Every Area',
  description:
    'We buy houses in all Erie PA neighborhoods — Little Italy, West Bayfront, Glenwood, Millcreek, Downtown, and more. Cash offer in 24 hours. Serving all of Erie County.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/neighborhoods` },
};

const NEIGHBORHOODS = [
  {
    name: 'Millcreek Corridor (16505)',
    desc: "Millcreek Township is the largest suburban area adjacent to Erie, with a population of ~55,000. The western Erie/Millcreek corridor along Route 5 and Peach Street has moved well into mid-market territory — newer commercial development, suburban-style single-family homes, and higher price points than the city proper.",
    medianPrice: '~$250K–$400K+',
    notes: 'Highest-value segment in the Erie metro. Homes here appeal to traditional MLS buyers, but cash buyers are active for estate sales and condition-related situations.',
  },
  {
    name: 'Southwest Erie / Garden Court (16506)',
    desc: "A mid-tier residential neighborhood southwest of downtown. Mix of owner-occupied and rentals. Solid working-class character with mostly Cape Cods and modest two-stories built in the 1950s-60s. More stable than the urban core, less expensive than Millcreek.",
    medianPrice: '~$100K–$160K',
    notes: 'Active cash buyer market for owner-occupants dealing with deferred maintenance and aging systems.',
  },
  {
    name: 'Glenwood / Glenwood Hills (16504)',
    desc: "Southeast Erie neighborhood with a mix of pre-war and postwar housing. Predominantly working-class, with a range of housing types from bungalows to larger two-stories. Relatively stable neighborhood with longtime residents and some estate sale activity.",
    medianPrice: '~$80K–$130K',
    notes: 'Good volume of inherited and estate properties. 77% pre-1970 housing typical of Erie neighborhoods.',
  },
  {
    name: 'Greater Kahkwa / Upper West (16505)',
    desc: "The upper portion of the west side, near the Kahkwa Club area. More established residential streets, higher-value homes, and a generally more suburban feel than the urban core. Some mid-century ranch-style homes.",
    medianPrice: '~$150K–$280K',
    notes: 'Mid-range Erie market. Cash buyers active for estate sales and condition-related situations.',
  },
  {
    name: 'West Bayfront / West Side (16502)',
    desc: "A large west-side neighborhood stretching from downtown toward Millcreek. Mix of dense urban housing near downtown and more suburban-feeling blocks further out. Little Italy, a historic Italian-American neighborhood, is in this area.",
    medianPrice: '~$70K–$120K',
    notes: 'High volume of older housing with deferred maintenance. Significant landlord-exit and pre-foreclosure activity.',
  },
  {
    name: 'Central Eastside (16503)',
    desc: "The inner-city east side. One of Erie's most affordable and most distressed neighborhoods. High vacancy, older housing stock, significant blight. Median sale price ~$81,000 (Redfin, Feb 2026, ZIP 16503). Cash-only market in many cases — lenders avoid the most distressed properties.",
    medianPrice: '~$50K–$100K',
    notes: 'Highest volume of distressed inventory in Erie. Motivated sellers. Cash buyers frequently the only realistic option.',
  },
  {
    name: 'Southeast Erie / South East Hills (16504)',
    desc: "Southeast Erie residential area with a mix of pre-war and postwar housing. Transitional in character — some blocks are well-maintained, others show significant distress. Active market for cash buyers dealing with aging housing stock.",
    medianPrice: '~$90K–$140K',
    notes: 'Mixed market — some stable blocks, some distressed. Good volume for cash buyers.',
  },
  {
    name: 'Downtown Erie / Bayfront (16507)',
    desc: "Erie's urban core along the waterfront and downtown business district. Mix of commercial, repurposed industrial, and residential. Some investment interest driven by Erie's Bayfront development. Lowest residential price points in the metro.",
    medianPrice: '~$50K–$90K',
    notes: 'Highest distress, lowest prices. Cash-only in many cases. Investment-territory pricing.',
  },
];

const pageUrl = `${SITE_URL}/markets/erie-pa/neighborhoods`;

export default function ErieNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Erie PA Neighborhoods — Cash Home Buyers in Every Area', pageUrl),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Erie PA</Link> › Neighborhoods
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          We Buy Houses in Every Erie PA Neighborhood
        </h1>
        <p className="text-gray-600 mb-2">
          From the Millcreek corridor to Downtown Erie to the Glenwood neighborhood — we buy Cape Cods,
          bungalows, and single-family houses throughout Erie and Erie County. Cash offer in 24 hours.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm">
          <p className="font-semibold text-brand-dark">Erie&apos;s Bifurcated Market</p>
          <p className="text-gray-700">The urban core (ZIPs 16501-16504) trades at $50K-$120K. The suburban Millcreek corridor (16505-16509) has moved to $200K-$400K+. Wherever your property is, we buy in any condition — the offer reflects current as-is value.</p>
        </div>

        <div className="space-y-8">
          {NEIGHBORHOODS.map((n, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <h2 className="text-xl font-bold text-brand-dark">{n.name}</h2>
                <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">{n.medianPrice}</span>
              </div>
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">{n.desc}</p>
              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
                <span className="font-semibold">Cash buyer context:</span> {n.notes}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Erie County Service Area</h2>
          <p className="text-gray-700 mb-4">
            Beyond Erie proper, we buy throughout Erie County. These municipalities pay the same standard
            2% transfer tax as the city — and we cover all closing costs in these areas too.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Millcreek Township', 'Harborcreek', 'Lawrence Park', 'Wesleyville', 'North East', 'Girard', 'Fairview', 'Lake City', 'Edinboro', 'Corry', 'Union City', 'Waterford', 'McKean', 'Summit Township'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Why Cash Buyers Are Especially Relevant in Erie</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>Old housing stock:</strong> 77% of Erie homes were built before 1970. Aging systems,
              snow and ice damage, and deferred maintenance are the norm — conditions that traditional lenders
              often won&apos;t finance. Cash buyers are frequently the only realistic path to a sale.
            </p>
            <p>
              <strong>High renter rate:</strong> ~50% of Erie homes are renter-occupied. Tired landlords,
              non-paying tenants, and inherited rentals are among the most common situations we handle.
            </p>
            <p>
              <strong>23% poverty rate:</strong> Financial distress scenarios — pre-foreclosure, back taxes,
              liens — are structural here, not cyclical. We&apos;ve handled all of these in Erie.
            </p>
            <p>
              <strong>Standard 2% transfer tax:</strong> Erie&apos;s transfer tax is PA&apos;s standard rate. We cover
              all closing costs — call{' '}
              <a href={`tel:${PHONE}`} className="text-brand-primary font-medium">{PHONE}</a>.
            </p>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Erie PA Property"
          subheadline="Any neighborhood. Any condition. Written offer in 24 hours."
          sourcePage="/markets/erie-pa/neighborhoods"
        />

        <p className="mt-4 text-xs text-gray-400">Market data last updated: April 2026. Neighborhood price ranges extrapolated from Redfin ZIP code data (Feb 2026) and NeighborhoodScout distribution data.</p>

        <div className="mt-6 text-sm text-gray-500">
          Related:{' '}
          <Link href="/markets/erie-pa/market-report" className="text-brand-primary hover:underline">Erie PA Market Report</Link>{' '}
          ·{' '}
          <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
        </div>
      </div>
    </>
  );
}
