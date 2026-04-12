import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { faqSchema, kingOfPrussiaLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const revalidate = 86400;

const REPORT_DATA = {
  lastUpdated: 'April 2026',
  medianHomeValueZHVI: '$453,560',
  medianSalePrice: '$549,350',
  daysToPending: 34,
  yoyZHVI: '+5.9%',
  yoySalePrice: '+3.7%',
  pricePerSqft: '$266',
  saleToList: '97.6%',
  competeScore: '82/100',
  competeLabel: 'Very Competitive',
  cashOfferRangeLow: '$350,000',
  cashOfferRangeHigh: '$400,000',
  cashOfferBasis: '$500K home',
  paTransferTax: '2% (1% buyer / 1% seller)',
  realtorCommission: '5–6%',
};

const NEIGHBORHOODS = [
  {
    name: 'King of Prussia (19406 core)',
    medianPrice: '$453K–$549K',
    dom: '34 days (to pending)',
    notes: 'Split-levels, ranches, colonials from 1950s–1970s. Aging stock with equity. Main target for cash buyers.',
  },
  {
    name: 'Gulph Mills',
    medianPrice: 'High ($500K+)',
    dom: 'Variable',
    notes: 'Upper Merion Township enclave. Older single-family homes on private lots. Occasional estate activity.',
  },
  {
    name: 'Plymouth Meeting',
    medianPrice: '~$563K',
    dom: '~30 days',
    notes: 'Solid suburban demand, up 2.4% YoY. Adjacent to KOP; similar housing stock profile.',
  },
  {
    name: 'Conshohocken',
    medianPrice: '~$433K–$510K',
    dom: '~20–30 days',
    notes: 'Active younger buyer market. Mix of older rowhouses and newer condos. Moderate cash buyer interest.',
  },
  {
    name: 'Norristown',
    medianPrice: '~$220K–$293K',
    dom: 'Fast',
    notes: 'County seat. Significantly lower price point; high investor and cash buyer activity. Best wholesale opportunity in the county.',
  },
  {
    name: 'Bridgeport',
    medianPrice: '~$375K',
    dom: 'Moderate',
    notes: 'Small borough adjacent to Norristown. Value play with some deferred maintenance inventory.',
  },
  {
    name: 'Collegeville',
    medianPrice: '~$523K',
    dom: '~25–35 days',
    notes: 'Pharma corridor suburb. Growing demand, less investor-saturated than core KOP.',
  },
  {
    name: 'Wayne (Radnor Twp)',
    medianPrice: '~$1.2M',
    dom: 'Variable',
    notes: 'Main Line. High-wealth. Limited wholesale opportunity outside occasional estate or divorce sale.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is the median home price in King of Prussia PA in 2026?',
    answer:
      'The Zillow Home Value Index (ZHVI) for King of Prussia is $453,560 as of February 2026, up 5.9% year-over-year. Redfin reports the median sale price at $549,350 — a gap that reflects the mix of condos and apartments vs. detached single-family homes in the 19406 market.',
  },
  {
    question: 'How long does it take to sell a house in King of Prussia PA?',
    answer:
      "The median time to pending in King of Prussia is 34 days — meaning it takes about a month to receive and accept an offer. After going pending, inspections, appraisals, and mortgage processing add another 45–60 days. Total time from listing to close: roughly 80–95 days. Cash buyers close in 7–14 days.",
  },
  {
    question: "Is King of Prussia a buyer's or seller's market in 2026?",
    answer:
      "King of Prussia is a seller's market with a Redfin Compete Score of 82 out of 100. Many homes receive multiple offers, some with waived contingencies. The sale-to-list ratio of 97.6% means sellers are getting close to asking price. Hot homes go pending in around 14 days.",
  },
  {
    question: 'What are home prices doing year-over-year in King of Prussia?',
    answer:
      'The Zillow ZHVI is up 5.9% year-over-year as of February 2026. Redfin reports the median sale price up 3.7% YoY. Both signals point to continued appreciation, driven by strong suburban Philadelphia demand and limited new inventory in the established residential neighborhoods.',
  },
  {
    question: 'How much do cash buyers pay for King of Prussia homes?',
    answer:
      "Cash buyers typically offer 70–75% of fair market value in KOP's higher-end market. On a home with a $500,000 after-repair value, the cash offer range is $350,000–$400,000. The seller keeps more because there are no agent commissions (typically $27,500–$33,000 on a $550K sale), no closing costs (we cover all of them), and no repair costs.",
  },
  {
    question: 'What is the transfer tax on a King of Prussia home sale?',
    answer:
      'The total realty transfer tax for King of Prussia / Upper Merion Township is 2% of sale price — 1% Pennsylvania state and 1% local (Upper Merion Township is not on the PA deviation list). Customarily split: buyer pays 1%, seller pays 1%. On a $500,000 sale, the seller pays $5,000 in transfer tax.',
  },
];

const PAGE_URL = `${SITE_URL}/markets/king-of-prussia-pa/market-report`;

export const metadata: Metadata = {
  title: 'King of Prussia PA Housing Market 2026',
  description:
    'King of Prussia PA housing market 2026: median home value $453,560, median sale $549,350, 34 days to pending, +5.9% YoY. Cash buyer ranges. Updated April 2026.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'King of Prussia PA Housing Market Report 2026',
    description:
      'Current King of Prussia PA home prices, days on market, and what it means if you\'re selling in 2026.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: '/images/king-of-prussia-hero.jpg', width: 1200, height: 630, alt: 'King of Prussia PA Housing Market 2026' }],
  },
};

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'King of Prussia PA Housing Market Data — April 2026',
  description:
    'Monthly housing market statistics for King of Prussia, Pennsylvania including median home value, sale price, days on market, year-over-year price change, and neighborhood-level data.',
  url: PAGE_URL,
  creator: { '@type': 'Organization', name: 'USA Home Buyers', url: SITE_URL },
  temporalCoverage: '2026-04',
  spatialCoverage: {
    '@type': 'Place',
    name: 'King of Prussia, Pennsylvania',
    geo: { '@type': 'GeoCoordinates', latitude: 40.0892, longitude: -75.3961 },
  },
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Median Home Value (ZHVI)', value: '$453,560' },
    { '@type': 'PropertyValue', name: 'Median Sale Price', value: '$549,350' },
    { '@type': 'PropertyValue', name: 'Median Days to Pending', value: '34' },
    { '@type': 'PropertyValue', name: 'Year-over-Year Price Change (ZHVI)', value: '+5.9%' },
    { '@type': 'PropertyValue', name: 'Price Per Square Foot', value: '$266' },
  ],
};

const reportArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'King of Prussia PA Housing Market Report — April 2026',
  datePublished: '2026-04-11',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'USA Home Buyers', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'USA Home Buyers',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

export default function KingOfPrussiaMarketReport() {
  return (
    <>
      <SchemaMarkup
        schema={[kingOfPrussiaLocalBusinessSchema, datasetSchema, reportArticleSchema, faqSchema(FAQ_ITEMS)]}
      />

      {/* Hero */}
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/king-of-prussia-hero.jpg"
          alt="King of Prussia PA home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/king-of-prussia-pa" className="hover:text-white">King of Prussia PA</Link>
              {' '}› Market Report
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              King of Prussia PA Housing Market Report — {REPORT_DATA.lastUpdated}
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Current data on home prices, days on market, and what the KOP market means
              if you&apos;re planning to sell — with neighborhood-level breakdown.
            </p>
            <p className="text-blue-300 text-sm mb-6">
              Last updated: <strong className="text-white">{REPORT_DATA.lastUpdated}</strong>
              {' '}· Sources: Zillow ZHVI, Redfin, Census, PA Dept of Revenue
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm"
            >
              Questions? Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/king-of-prussia-pa/market-report" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95dee2/wgOSCCLedS62biZT2idSa_tmpsnmzp1ou.mp4"
        title="King of Prussia PA Real Estate Market Report 2026"
        poster="/images/video-posters/kop-market-report.jpg"
        subtitle="$453K median value — competitive market, but we buy in any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Let&apos;s look at the King of Prussia PA real estate market in 2026 — actual numbers, not hype. I&apos;m with USA Home Buyers.</p>
            <p className="mb-3">The Zillow Home Value Index for King of Prussia is $453,560 as of February 2026, up 5.9 percent year-over-year. Redfin reports the median sale price at $549,350. King of Prussia has a Redfin Compete Score of 82 out of 100, classified as Very Competitive. The sale-to-list ratio is 97.6 percent.</p>
            <p className="mb-3">Here&apos;s the number that doesn&apos;t get enough attention: the median home takes 34 days to go pending. After that, inspections, appraisals, and mortgage processing add another 45 to 60 days. Total time from listing to close is roughly 80 to 95 days.</p>
            <p className="mb-3">We close in 7 to 14 days. No appraisal contingency. No financing that can fall through. No buyer getting cold feet after inspection.</p>
            <p className="mb-3">Year-over-year appreciation is up 5.9 percent on ZHVI and 3.7 percent per Redfin. Both signal continued strength, driven by suburban Philadelphia demand and limited new inventory in established neighborhoods near Valley Forge.</p>
            <p className="mb-3">If you&apos;re trying to decide between listing and a cash sale in King of Prussia, the math depends on your timeline and how much certainty matters. Call USA Home Buyers at 888-440-5250 for a written offer within 24 hours.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-3">TL;DR — The Short Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>Median home value (ZHVI):</strong> {REPORT_DATA.medianHomeValueZHVI} —
              up {REPORT_DATA.yoyZHVI} year-over-year.
            </li>
            <li>
              <strong>Median sale price:</strong> {REPORT_DATA.medianSalePrice} per Redfin (up {REPORT_DATA.yoySalePrice} YoY).
            </li>
            <li>
              <strong>Days to pending:</strong> ~{REPORT_DATA.daysToPending} days. Full closing adds 45–60 more days after that.
            </li>
            <li>
              <strong>Market conditions:</strong> Very Competitive (Redfin Compete Score {REPORT_DATA.competeScore}).
              Multiple offers common; sale-to-list ratio {REPORT_DATA.saleToList}.
            </li>
            <li>
              <strong>Cash offer range:</strong> {REPORT_DATA.cashOfferRangeLow}–{REPORT_DATA.cashOfferRangeHigh}{' '}
              on a {REPORT_DATA.cashOfferBasis}. Closes in 7–14 days, no repairs, no fees.
            </li>
            <li>
              <strong>Transfer tax:</strong> {REPORT_DATA.paTransferTax} — Upper Merion Township follows
              the standard PA rate (no deviation).
            </li>
          </ul>
        </div>

        {/* Current Market Snapshot */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            Market Snapshot — King of Prussia PA ({REPORT_DATA.lastUpdated})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Median Value (ZHVI)', value: REPORT_DATA.medianHomeValueZHVI, note: `${REPORT_DATA.yoyZHVI} YoY` },
              { label: 'Median Sale Price', value: REPORT_DATA.medianSalePrice, note: `${REPORT_DATA.yoySalePrice} YoY` },
              { label: 'Days to Pending', value: `${REPORT_DATA.daysToPending} days`, note: 'After active marketing' },
              { label: 'Price Per Sq Ft', value: REPORT_DATA.pricePerSqft, note: 'Redfin Feb 2026' },
              { label: 'Sale-to-List Ratio', value: REPORT_DATA.saleToList, note: '~1% below ask avg' },
              { label: 'Compete Score', value: REPORT_DATA.competeScore, note: REPORT_DATA.competeLabel },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-brand-primary mb-1">{stat.value}</p>
                <p className="text-xs font-semibold text-brand-dark">{stat.label}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.note}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 text-left">King of Prussia Market Metric</th>
                  <th className="px-4 py-3 text-left">Value ({REPORT_DATA.lastUpdated})</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median home value (Zillow ZHVI)', REPORT_DATA.medianHomeValueZHVI],
                  ['Year-over-year ZHVI change', REPORT_DATA.yoyZHVI],
                  ['Median sale price (Redfin)', REPORT_DATA.medianSalePrice],
                  ['Year-over-year sale price change', REPORT_DATA.yoySalePrice],
                  ['Price per square foot', REPORT_DATA.pricePerSqft],
                  ['Median days to pending', `${REPORT_DATA.daysToPending} days`],
                  ['Full market time (list to close)', '79+ days'],
                  ['Sale-to-list price ratio', REPORT_DATA.saleToList],
                  ['Redfin Compete Score', `${REPORT_DATA.competeScore} — ${REPORT_DATA.competeLabel}`],
                  ['Cash offer range (on $500K home)', `${REPORT_DATA.cashOfferRangeLow}–${REPORT_DATA.cashOfferRangeHigh}`],
                  ['PA transfer tax (Upper Merion Twp)', REPORT_DATA.paTransferTax],
                  ['Typical realtor commission', REPORT_DATA.realtorCommission],
                ].map(([metric, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border-b border-gray-100">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary border-b border-gray-100">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Sources: Zillow ZHVI, Redfin, PA Dept of Revenue, Census. Last updated: {REPORT_DATA.lastUpdated}.
          </p>
        </section>

        {/* Price Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Price Trends — What&apos;s Happening and Why</h2>
          <div className="prose prose-gray max-w-none text-sm text-gray-700 space-y-4">
            <p>
              King of Prussia area home values are up <strong>{REPORT_DATA.yoyZHVI} year-over-year</strong> as of
              {' '}{REPORT_DATA.lastUpdated}, per Zillow ZHVI. The median sale price is up {REPORT_DATA.yoySalePrice}.
              This appreciation reflects sustained demand for suburban Philadelphia housing from buyers priced out
              of the city, combined with limited new single-family inventory in the established KOP neighborhoods.
            </p>
            <p>
              The spread between the ZHVI (<strong>{REPORT_DATA.medianHomeValueZHVI}</strong>) and the Redfin
              median sale price (<strong>{REPORT_DATA.medianSalePrice}</strong>) — roughly $96,000 — reflects the
              market composition. KOP&apos;s large apartment and condo population (it crossed 50% renter-occupied
              in 2022) pulls the ZHVI down, while detached single-family home sales in the $500K–$600K range
              drive the Redfin median up.
            </p>
            <p>
              At <strong>{REPORT_DATA.pricePerSqft} per square foot</strong>, KOP sits well above the Pennsylvania
              median (~$165–$200/sqft) and is in line with competitive suburban Philadelphia markets like
              Conshohocken and Plymouth Meeting. The gap vs. the Main Line communities (Wayne at $500+/sqft,
              Bryn Mawr higher) reflects KOP&apos;s older 1950s–1970s housing stock.
            </p>
            <p>
              The <strong>97.6% sale-to-list ratio</strong> means most homes sell just below asking — not at the
              deep discounts of a soft market. Hot homes in the most desirable sub-neighborhoods sell 4% above
              list. If your home is priced right and in good condition, the market will reward it — eventually.
            </p>
          </div>
        </section>

        {/* What This Means If Selling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means If You&apos;re Selling</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Well-priced, updated homes move in weeks',
                desc: `A properly priced, move-in ready home in the best KOP sub-neighborhoods can go pending in 14 days. The risk is the 45–60 day financing period — inspections, appraisals, and lender approval can still derail deals after you've accepted an offer.`,
              },
              {
                title: 'The 1950s–1970s stock is where it gets complicated',
                desc: "KOP's established residential neighborhoods are full of split-levels and colonials that haven't been updated since the 1990s. FHA and conventional lenders will flag deferred maintenance. Buyers discount heavily for work needed. Cash buyers don't care.",
              },
              {
                title: 'Agent fees are material at these price points',
                desc: `At a $550K median sale price, a 5.5% agent commission is $30,250. Add a 1% PA transfer tax ($5,500), closing costs ($5,000–$8,000), and any pre-listing repairs — you're well above $40,000 in transaction costs before the first showing.`,
              },
              {
                title: 'Cash buyers are active for the right property',
                desc: 'Older KOP homes with deferred maintenance, estate properties, and situations requiring speed attract strong cash buyer interest. These aren\'t distressed properties in the traditional sense — they\'re equity-rich homes where the seller\'s priority is speed and certainty, not maximum gross price.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Neighborhood Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Neighborhood Breakdown — King of Prussia Area Home Prices
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 text-left">Neighborhood / Community</th>
                  <th className="px-4 py-3 text-left">Median Price Range</th>
                  <th className="px-4 py-3 text-left">DOM</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {NEIGHBORHOODS.map((n, i) => (
                  <tr key={n.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-semibold text-brand-dark border-b border-gray-100">{n.name}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary border-b border-gray-100">{n.medianPrice}</td>
                    <td className="py-3 px-4 text-gray-700 border-b border-gray-100">{n.dom}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs border-b border-gray-100">{n.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Price ranges based on Redfin, Zillow, and Rocket Homes data (2025–2026). Individual properties vary
            by condition, lot size, and sub-neighborhood. Data as of {REPORT_DATA.lastUpdated}.
          </p>
        </section>

        {/* Mid-page CTA */}
        <div className="my-10">
          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your King of Prussia Home"
            subheadline="No obligation. Written offer in 24 hours. Close in 7–14 days."
            sourcePage="/markets/king-of-prussia-pa/market-report"
          />
        </div>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="King of Prussia Housing Market — Frequently Asked Questions" />

        {/* Related Links */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p className="font-medium text-gray-700 mb-2">Related resources:</p>
          <p className="space-x-3">
            <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">
              Sell Your King of Prussia Home for Cash
            </Link>
            {' '}·{' '}
            <Link href="/guides/sell-house-fast-king-of-prussia-pa-2026" className="text-brand-primary hover:underline">
              2026 KOP Seller Guide
            </Link>
            {' '}·{' '}
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              Cash Offer vs. MLS Listing
            </Link>
          </p>
          <p className="mt-4 text-xs text-gray-400">
            Sources:{' '}
            <a href="https://www.zillow.com/home-values/21825/king-of-prussia-pa/" target="_blank" rel="noopener noreferrer" className="underline">Zillow ZHVI — King of Prussia</a>{' '}·{' '}
            <a href="https://www.redfin.com/city/23712/PA/King-of-Prussia/housing-market" target="_blank" rel="noopener noreferrer" className="underline">Redfin KOP Housing Market</a>{' '}·{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer" className="underline">PA Realty Transfer Tax — Revenue.PA.gov</a>{' '}·{' '}
            <a href="https://www.montgomerycountypa.gov/464/Board-of-Assessment-Appeals" target="_blank" rel="noopener noreferrer" className="underline">Montgomery County Board of Assessment</a>
          </p>
        </div>
      </div>
    </>
  );
}
