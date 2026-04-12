import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { faqSchema, stateCollegeLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

const REPORT_DATA = {
  lastUpdated: 'April 2026',
  medianHomeValueZHVI: '$408,500',
  medianSalePriceRedfin: '$450,000',
  yoyZHVI: '+0.9%',
  yoyRedfin: '-0.22%',
  pricePerSqft: '$256',
  pricePerSqftYoY: '+6.2%',
  daysToPending: 5,
  saleToListRatio: '100.3%',
  redfinCompeteScore: '93/100',
  cashOfferRangeLow: '$286,000',
  cashOfferRangeHigh: '$327,000',
  transferTaxBorough: '3.00%',
  transferTaxMostTownships: '2.00%',
  ownerOccupied: '26.1%',
  renterOccupied: '73.9%',
  population: '41,050',
};

const NEIGHBORHOODS = [
  {
    name: 'Tusseyview',
    medianPrice: '$619,000',
    notes: 'Highest-priced neighborhood per Redfin (Dec 2025 data). High volatility — +84.8% YoY. Limited inventory; single sales can swing the median significantly.',
  },
  {
    name: 'College Heights',
    medianPrice: '~$584,000',
    notes: 'Premium owner-occupied zone near campus. Popular with faculty. 1950s-70s colonial and ranch homes with large lots by borough standards.',
  },
  {
    name: 'State College South',
    medianPrice: '$490,000–$519,000',
    notes: '+5.9% to +25.6% YoY range (Redfin). Mix of 1960s-1980s homes. Strong owner-occupant demand.',
  },
  {
    name: 'Holmes-Foster Historic District',
    medianPrice: 'No recent median available',
    notes: 'Pre-war craftsman bungalows and colonial revival homes. Owner-occupied premium. Older stock with character but higher maintenance costs.',
  },
  {
    name: 'Highlands',
    medianPrice: '~$360,000',
    notes: '-5% YoY; ~31 days DOM (homes.com). Slightly longer DOM than citywide average — more buyer negotiation leverage.',
  },
  {
    name: 'Orchard Park',
    medianPrice: 'Near citywide median',
    notes: 'Family-oriented. Mix of 1970s-1980s ranches and split-levels. Popular with non-student residents.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is the median home price in State College PA in 2026?',
    answer:
      "According to Zillow's ZHVI, the median home value in State College is $408,500 as of March 2026, up 0.9% year-over-year. Redfin's median sale price (February 2026) is $450,000. The difference reflects the distinction between estimated value and actual closed sale data — Redfin's figure skews higher because it captures what homes actually sold for, including above-ask deals.",
  },
  {
    question: 'How fast do homes sell in State College PA?',
    answer:
      "The median days on market is 5 days — meaning competitive homes go pending in less than a week. Redfin's Compete Score of 93/100 rates State College as 'Most Competitive.' The sale-to-list ratio of 100.3% confirms homes frequently sell above asking price. However, non-standard properties (student rentals, deferred maintenance, estate sales) typically take longer and sell at steeper discounts.",
  },
  {
    question: "Is State College a buyer's or seller's market in 2026?",
    answer:
      "It's a seller's market. Low owner-occupied inventory (only 26.1% of housing units are owner-occupied), fast DOM, and above-ask sale prices confirm seller strength. But that dynamic applies to retail-ready homes. Investment properties, inherited homes, and properties needing work attract a different buyer pool — often cash investors — at 70-80% of FMV.",
  },
  {
    question: 'What is the transfer tax rate in State College Borough?',
    answer:
      "State College Borough charges 3.00% total realty transfer tax: 1.00% state, 1.50% borough, 0.50% school district. Most other Centre County municipalities charge 2.00% total. The higher borough rate is a meaningful cost difference — $13,500 on a $450,000 sale versus $9,000 in a nearby township. Source: Centre County RTT Rates (centrecountypa.gov).",
  },
  {
    question: 'How does Penn State affect the State College housing market?',
    answer:
      "Penn State University Park's 46,000+ enrolled students and 17,000 employees shape almost every aspect of the local market. Owner-occupied housing is only 26% of total stock — the rest is student and faculty rentals. Seasonal demand peaks occur in spring (May-August relocations) and fall (August-September). The academic calendar drives inventory cycles more than national economic trends.",
  },
];

const pageUrl = `${SITE_URL}/markets/state-college-pa/market-report`;

export const metadata: Metadata = {
  title: 'State College PA Housing Market 2026',
  description:
    'State College PA housing market data for 2026: median prices, days on market, transfer tax rates, and neighborhood breakdown. Updated April 2026.',
  alternates: { canonical: pageUrl },
};

export default function StateCollegeMarketReport() {
  return (
    <>
      <SchemaMarkup schema={[
        stateCollegeLocalBusinessSchema,
        articleSchema('State College PA Housing Market Report 2026', pageUrl, '2026-04-12'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA housing market"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/state-college-pa" className="hover:text-white">State College</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            State College PA Housing Market Report — 2026
          </h1>
          <p className="text-lg text-blue-100">
            Current market data for State College and Centre County: median prices, days on market,
            transfer tax rates, and neighborhood breakdown. Updated {REPORT_DATA.lastUpdated}.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Key Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Key Market Metrics</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">Metric</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">Value</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">Source</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median home value (Zillow ZHVI)', `${REPORT_DATA.medianHomeValueZHVI} (${REPORT_DATA.yoyZHVI} YoY)`, 'Zillow, March 2026'],
                  ['Median sale price', `${REPORT_DATA.medianSalePriceRedfin} (${REPORT_DATA.yoyRedfin} YoY)`, 'Redfin, Feb 2026'],
                  ['Median sale price per sq ft', `${REPORT_DATA.pricePerSqft} (${REPORT_DATA.pricePerSqftYoY} YoY)`, 'Redfin, Feb 2026'],
                  ['Median days on market', `${REPORT_DATA.daysToPending} days`, 'Redfin, Feb 2026'],
                  ['Sale-to-list ratio', REPORT_DATA.saleToListRatio, 'Redfin, Feb 2026'],
                  ['Redfin Compete Score', REPORT_DATA.redfinCompeteScore, 'Redfin, Feb 2026'],
                  ['Typical cash offer range', `${REPORT_DATA.cashOfferRangeLow}–${REPORT_DATA.cashOfferRangeHigh}`, '70-80% of Zillow ZHVI'],
                  ['Transfer tax — State College Borough', REPORT_DATA.transferTaxBorough, 'Centre County RTT Table'],
                  ['Transfer tax — most Centre County townships', REPORT_DATA.transferTaxMostTownships, 'Centre County RTT Table'],
                  ['Owner-occupied housing', REPORT_DATA.ownerOccupied, 'DataUSA / ACS, 2024'],
                  ['Renter-occupied housing', REPORT_DATA.renterOccupied, 'DataUSA / RentCafe, 2024'],
                  ['Population (2024 est.)', REPORT_DATA.population, 'US Census / PA Demographics'],
                ].map(([metric, value, source], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary">{value}</td>
                    <td className="py-3 px-4 text-xs text-gray-500">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Transfer Tax Deep Dive */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">
            The State College Borough Transfer Tax — What Sellers Need to Know
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            State College Borough charges a <strong>3.00% total realty transfer tax</strong> — significantly
            above the 2.00% standard across most of Centre County. The breakdown matters:
          </p>
          <table className="w-full text-sm mb-4">
            <thead className="bg-amber-100">
              <tr>
                <th className="py-2 px-3 text-left font-semibold">Component</th>
                <th className="py-2 px-3 text-left font-semibold">Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Pennsylvania State RTT', '1.00%'],
                ['State College Borough Local RTT', '1.50% ← above most municipalities'],
                ['State College Area School District', '0.50%'],
                ['Total', '3.00%'],
              ].map(([comp, rate], i) => (
                <tr key={i} className={i === 3 ? 'font-bold border-t' : ''}>
                  <td className="py-2 px-3">{comp}</td>
                  <td className="py-2 px-3">{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-600 mb-2">
            On a $450,000 sale, total RTT = $13,500. Customarily split 50/50, but negotiable.
            In cash investor transactions, the seller often pays the full 3%.
          </p>
          <p className="text-xs text-gray-500">
            Source:{' '}
            <a href="https://centrecountypa.gov/420/Realty-Transfer-Tax-Rates" target="_blank" rel="noopener noreferrer" className="underline">
              Centre County Realty Transfer Tax Rates by Municipality (centrecountypa.gov)
            </a>
          </p>
        </section>

        {/* Neighborhood Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            State College Neighborhood Price Breakdown
          </h2>
          <p className="text-gray-700 text-sm mb-6">
            Median prices vary sharply by neighborhood in State College. Owner-occupied zones like
            College Heights and Tusseyview command premiums; areas with higher student rental density
            see different pricing dynamics.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">Neighborhood</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">Median Price</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                {NEIGHBORHOODS.map((n, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-semibold text-brand-dark">{n.name}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary">{n.medianPrice}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{n.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Sources: Redfin neighborhood data, homes.com, Movoto. Prices reflect recent sales; market
            conditions change. Individual home values vary by condition, size, and lot.
          </p>
        </section>

        {/* Penn State Market Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            What Penn State Means for the State College Housing Market
          </h2>
          <p className="text-gray-700 mb-4">
            You can&apos;t understand State College real estate without understanding Penn State University Park.
            With 46,000+ enrolled students, the university drives everything: rental demand, seasonal
            inventory cycles, and the demographics of who actually owns homes here.
          </p>
          <p className="text-gray-700 mb-4">
            Only 26% of housing units are owner-occupied — one of the lowest rates of any Pennsylvania
            municipality. The other 74% are student and faculty rentals. That student population also
            distorts the median household income figures (reported at $45,424 — artificially low because
            students report minimal income). The actual non-student working population earns considerably more.
          </p>
          <p className="text-gray-700 mb-4">
            Seasonal demand follows the academic calendar, not the typical spring/fall real estate cycle:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm mb-4">
            <li><strong>May–August:</strong> Peak seller motivation — faculty relocations, lease turnovers, landlords listing</li>
            <li><strong>January–March:</strong> Peak buyer competition — low inventory, aggressive buyers</li>
            <li><strong>November–January:</strong> Slowest period — between semesters, holiday season</li>
          </ul>
          <p className="text-gray-700">
            According to NeighborhoodScout, State College has seen 7.68% appreciation over the past 12 months,
            outperforming 91% of US communities — a reflection of sustained university-driven demand.
          </p>
        </section>

        {/* Mid-page CTA */}
        <div className="my-10">
          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your State College Home"
            subheadline="No obligation. Written offer in 24 hours. We cover the 3% transfer tax."
            sourcePage="/markets/state-college-pa/market-report"
          />
        </div>

        <FAQSection items={FAQ_ITEMS} heading="State College Housing Market — FAQ" />

        {/* Sources */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p className="font-medium text-gray-700 mb-2">Related resources:</p>
          <p>
            <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">
              Sell Your State College Home for Cash
            </Link>
            {' '}·{' '}
            <Link href="/guides/sell-house-fast-state-college-pa-2026" className="text-brand-primary hover:underline">
              2026 State College Seller Guide
            </Link>
            {' '}·{' '}
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              Cash Offer vs. MLS Listing
            </Link>
          </p>
          <p className="mt-4 text-xs text-gray-400">
            <strong>Sources:</strong>{' '}
            <a href="https://www.zillow.com/home-values/47837/state-college-pa/" target="_blank" rel="noopener noreferrer" className="underline">Zillow ZHVI — State College</a>
            {' '}·{' '}
            <a href="https://www.redfin.com/city/18769/PA/State-College/housing-market" target="_blank" rel="noopener noreferrer" className="underline">Redfin — State College Housing Market</a>
            {' '}·{' '}
            <a href="https://centrecountypa.gov/420/Realty-Transfer-Tax-Rates" target="_blank" rel="noopener noreferrer" className="underline">Centre County RTT Rates</a>
            {' '}·{' '}
            <a href="https://datausa.io/profile/geo/state-college-pa/" target="_blank" rel="noopener noreferrer" className="underline">DataUSA — State College Demographics</a>
            {' '}·{' '}
            <a href="https://www.neighborhoodscout.com/pa/state-college/real-estate" target="_blank" rel="noopener noreferrer" className="underline">NeighborhoodScout — State College Real Estate</a>
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Market data last updated: {REPORT_DATA.lastUpdated}. Individual home values vary based on
            condition, location, and market timing. This page is for informational purposes — contact
            a licensed real estate professional for personalized advice.
          </p>
        </div>
      </div>
    </>
  );
}
