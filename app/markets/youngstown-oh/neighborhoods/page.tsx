/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { youngstownLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/neighborhoods`;

export const metadata: Metadata = {
  title: 'Youngstown OH Neighborhoods Cash Buyers',
  description:
    'Selling a house in Youngstown OH? We buy in every neighborhood — South Side, Wick Park, Brier Hill, Belle Vista, North Side. Cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  {
    name: 'Wick Park',
    priceRange: '~$89,900 median',
    investorInterest: 'High',
    description: 'Near Youngstown State University, Wick Park is the most stable neighborhood in the city. It mixes restored American Foursquares and Victorian-era homes with deferred-maintenance properties. YSU faculty, students, and historic preservation investors are active here. It\'s the closest thing Youngstown has to a "desirable" neighborhood by conventional metrics.',
    sellerContext: 'Homes here sell on the open market more reliably than most city neighborhoods, but AS-IS cash buyers are still in demand for estates and properties needing significant work.',
  },
  {
    name: 'Belle Vista',
    priceRange: '$70,000–$110,000',
    investorInterest: 'Medium',
    description: 'South of Youngstown State, near Mill Creek Metro Park. Craftsman bungalows and brick homes on tree-lined streets. One of the better-maintained city neighborhoods with more intact block fabric than the North or South Sides.',
    sellerContext: 'Properties in better condition here can attract conventional buyers, but estates and deferred-maintenance homes are cash-buyer territory.',
  },
  {
    name: 'Brownlee Woods / Pleasant Grove',
    priceRange: '$55,000–$95,000',
    investorInterest: 'Medium',
    description: 'South Youngstown, near the Boardman Township border. More suburban feel with post-WWII bungalows alongside older stock. More intact than most city neighborhoods.',
    sellerContext: 'Properties at the lower end of this range are typically cash sales due to condition issues or lot vacancy.',
  },
  {
    name: 'Idora',
    priceRange: '$40,000–$75,000',
    investorInterest: 'Medium-High',
    description: 'Named for the former Idora Park amusement park (closed after a fire in 1984). South Youngstown mix of conditions — some renovation activity from YSU proximity, but significant deferred maintenance throughout.',
    sellerContext: 'Mixed market: renovated properties sell on the open market; distressed ones go to cash buyers.',
  },
  {
    name: 'South Side',
    priceRange: '$30,000–$65,000',
    investorInterest: 'High',
    description: 'Classic steel-worker residential grid. Dense wood-frame bungalows and workers\' cottages, high vacancy rates, significant demolition activity. This is the heart of the post-industrial Youngstown housing market.',
    sellerContext: 'The largest and most active market for cash buyers in the city. Most properties don\'t qualify for conventional financing.',
  },
  {
    name: 'Brier Hill',
    priceRange: '$30,000–$55,000',
    investorInterest: 'High',
    description: 'Historical Italian-American neighborhood on the city\'s northeast. Significant vacancy from population loss. Many properties with deferred maintenance, code violations, or open lots from demolition.',
    sellerContext: 'Almost exclusively cash buyer territory. Strong distress indicators mean fast decisions are more common than market listings.',
  },
  {
    name: 'West Side / Mahoning Ave',
    priceRange: '$25,000–$60,000',
    investorInterest: 'High',
    description: 'Working-class corridor with significant commercial and residential blight. Formerly dense housing stock, many structures demolished or collapsed.',
    sellerContext: 'Cash buyers only for most of this area. Condition and vacancy rates make conventional financing impossible.',
  },
  {
    name: 'North Side',
    priceRange: '$20,000–$50,000',
    investorInterest: 'High',
    description: 'Highest distress concentration in the city. Many vacant lots where neighboring homes have been demolished. Land Bank involvement is common. Very low entry price, very high rehab cost.',
    sellerContext: 'Properties often owe more in deferred taxes and fines than they\'re worth. Selling to a cash buyer is the only option that preserves any remaining equity.',
  },
];

export default function YoungstownNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('Youngstown OH Neighborhoods — Cash Home Buyers by Area', pageUrl, '2026-04-14'),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/youngstown-oh-hero-640.jpg 640w, /images/optimized/youngstown-oh-hero-828.jpg 828w, /images/optimized/youngstown-oh-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-hero-1200.jpg"
            alt="Youngstown OH neighborhoods — cash home buyers"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Youngstown OH Neighborhoods — We Buy in Every One
          </h1>
          <p className="text-lg text-blue-100 mb-4">
            From Wick Park Foursquares to South Side workers' cottages to North Side vacant lots —
            we buy in every Youngstown neighborhood and Mahoning County township.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="mt-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors"
          >
            📞 Call Now — We Answer 24/7
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Youngstown's Neighborhood Landscape</h2>
          <p className="text-gray-700 mb-4">
            Youngstown has over 25 recognized neighborhoods, but they share a common thread: nearly all
            were built during the steel boom years of 1900-1950 to house workers at Youngstown Sheet and Tube,
            Republic Steel, and U.S. Steel. When the mills closed — most between 1977 and 1984 — the
            population that supported those neighborhoods began leaving. It hasn't stopped.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://www.ohio-demographics.com/youngstown-demographics" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">U.S. Census Bureau ACS</a>,
            Youngstown lost 8.4% of its population between 2019 and 2024 — on top of decades of prior loss.
            An estimated 30-40% of residential parcels in the city core are now vacant or demolished.
            The result: neighborhood pricing reflects both the Rust Belt history and the ongoing question
            of which blocks have enough occupied structures to sustain value.
          </p>
          <p className="text-gray-700">
            We know these neighborhoods. We buy in all of them — and we understand the specific distress
            factors that drive sellers in each area.
          </p>
        </section>

        {NEIGHBORHOODS.map((n, i) => (
          <section key={i} className={`mb-8 p-6 rounded-2xl border ${i % 2 === 0 ? 'bg-white border-gray-100' : 'bg-blue-50 border-blue-100'}`}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <h2 className="text-xl font-bold text-brand-dark">{n.name}</h2>
              <div className="flex gap-2">
                <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-medium">{n.priceRange}</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Investor Interest: {n.investorInterest}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-3 text-sm">{n.description}</p>
            <p className="text-brand-primary text-sm font-medium">Seller context: {n.sellerContext}</p>
          </section>
        ))}

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Areas We Serve</h2>
          <p className="text-gray-700 mb-4">
            Beyond city limits, we buy throughout the Youngstown-Warren-Boardman MSA:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { area: 'Boardman Township', note: 'Suburban, ~$140K-$160K median. More intact housing stock.' },
              { area: 'Austintown Township', note: 'West of Youngstown. Suburban, ~38,000 pop.' },
              { area: 'Warren, OH', note: 'Trumbull County seat. Similar steel-era housing, similar distress.' },
              { area: 'Niles, OH', note: 'Trumbull County. ~18,000 pop. Former steel town.' },
              { area: 'Campbell, OH', note: 'Adjacent to Youngstown. Small city, high distress.' },
              { area: 'Struthers, OH', note: 'South Youngstown. Former steel town, ~10,000 pop.' },
              { area: 'Girard, OH', note: 'Trumbull County. ~9,000 pop.' },
              { area: 'Hubbard, OH', note: 'Trumbull County. ~8,000 pop.' },
              { area: 'Canfield, OH', note: 'Mahoning County. Suburban, higher-income area.' },
              { area: 'Poland Township', note: 'Mahoning County. Suburban, higher values ($200K+ range).' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-brand-dark text-sm">{item.area}</p>
                <p className="text-gray-600 text-xs mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer — Any Youngstown Neighborhood"
          subheadline="No obligation. Written offer in 24 hours. We cover all closing costs."
          sourcePage="/markets/youngstown-oh"
        />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/market-report" className="text-brand-primary hover:underline">Youngstown Housing Market Report →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
