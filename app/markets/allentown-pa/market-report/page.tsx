import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { faqSchema, allentownLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

// ─── Update these numbers each month ─────────────────────────────────────────
const REPORT_DATA = {
  lastUpdated: 'April 2026',
  medianHomeValue: '$245,000',
  medianSalePriceCity: '~$195,000',
  daysToPending: 7,
  daysToClose: '45–60',
  totalSaleTimeline: '52–67',
  yoyPriceChange: '+5.1%',
  pricePerSqft: '$148',
  activeListings: 'Low (seller\'s market)',
  listToSaleRatio: '98.7%',
  cashOfferRangeLow: '$136,000',
  cashOfferRangeHigh: '$196,000',
  paTransferTax: '2% (1% buyer / 1% seller)',
  realtorCommission: '5–6%',
  renterOccupied: '58%',
  hispanicPopulation: '56%',
};

const NEIGHBORHOODS = [
  {
    name: 'South Side (18103)',
    medianPrice: '~$155,000–$200,000',
    dom: '8 days',
    notes: 'Historic row homes; large Hispanic community. High renter-occupied rate. Strong cash buyer activity.',
  },
  {
    name: 'West End',
    medianPrice: '~$200,000–$280,000',
    dom: '6 days',
    notes: 'More established neighborhood. Mix of owner-occupied and rentals. Faster moving than South Side.',
  },
  {
    name: 'Center City / Downtown (18101)',
    medianPrice: '~$130,000–$175,000',
    dom: '10 days',
    notes: 'Highest code violation density. Investor-heavy market. Many Bethlehem Steel-era row homes.',
  },
  {
    name: 'Old Allentown Historic District',
    medianPrice: '~$180,000–$250,000',
    dom: '7 days',
    notes: 'Historic designation affects renovation requirements. Steady demand from buyers valuing character.',
  },
  {
    name: 'Bethlehem (neighboring)',
    medianPrice: '~$230,000–$310,000',
    dom: '5 days',
    notes: 'Adjacent Northampton County market. Higher values than Allentown. Fast-moving inventory.',
  },
  {
    name: 'Easton (neighboring)',
    medianPrice: '~$195,000–$260,000',
    dom: '6 days',
    notes: 'Eastern Lehigh Valley. Growing demand. Mix of historic and newer suburban inventory.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is the median home price in Allentown PA in 2026?',
    answer:
      'The median home value in Allentown is approximately $245,000 as of April 2026. Within specific neighborhoods like the South Side and Center City, values range from $130,000–$200,000. West End and surrounding areas command higher prices in the $200,000–$280,000 range.',
  },
  {
    question: 'How long does it take to sell a house in Allentown PA?',
    answer:
      'The median days to pending in Allentown is approximately 7 days — meaning offers come quickly on well-priced properties. However, the full closing process (inspections, appraisals, mortgage underwriting, title) adds another 45–60 days. Total timeline from list to close: 52–67 days. Cash buyers close in 7–14 days.',
  },
  {
    question: 'Is Allentown PA a buyer\'s or seller\'s market in 2026?',
    answer:
      'Allentown is a seller\'s market in 2026. Active inventory is low, homes are going pending quickly, and the list-to-sale price ratio is approximately 98.7%, meaning sellers are getting very close to their asking price. The Lehigh Valley has seen sustained demand from buyers priced out of the Philadelphia metro.',
  },
  {
    question: 'What are home prices doing in Allentown year-over-year?',
    answer:
      'Allentown area home values are up approximately 5.1% year-over-year as of April 2026. This is driven by continued demand from Philadelphia-area buyers, limited new construction in the Lehigh Valley, and Allentown\'s relative affordability compared to other PA metros.',
  },
  {
    question: 'How much do cash buyers pay for Allentown homes?',
    answer:
      'Cash buyers typically offer 70–80% of fair market value. On an Allentown home in the $195,000–$245,000 range, that means a cash offer of $136,000–$196,000. The trade-off: no agent commissions (5–6%), no closing costs (the buyer covers), no repairs, and closing in 7–14 days instead of 52–67.',
  },
  {
    question: 'What makes Allentown\'s housing market unique?',
    answer:
      'Allentown has several distinctive characteristics: 56% Hispanic population (one of the largest in PA), 58% renter-occupied rate (much higher than state average), large stock of Bethlehem Steel-era row homes, and significant revitalization investment in downtown from the Neighborhood Improvement Zone (NIZ). These factors create a market with high investor demand, particularly for value-add properties.',
  },
];

const PAGE_URL = `${SITE_URL}/markets/allentown-pa/market-report`;

export const metadata: Metadata = {
  title: 'Allentown PA Housing Market Report 2026 — Prices, Trends & Data',
  description:
    'Current Allentown PA housing market data for 2026: median home value $245K, 7 days to pending, 5.1% YoY appreciation. Updated April 2026 with neighborhood breakdown.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Allentown PA Housing Market Report 2026',
    description:
      'Current data on Allentown PA home prices, days on market, inventory, and what it means if you\'re selling. Updated April 2026.',
    url: PAGE_URL,
    type: 'article',
  },
};

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Allentown PA Housing Market Data — April 2026',
  description:
    'Monthly housing market statistics for Allentown, Pennsylvania including median home value, days on market, year-over-year price change, and neighborhood-level data.',
  url: PAGE_URL,
  creator: {
    '@type': 'Organization',
    name: 'USA Home Buyers',
    url: SITE_URL,
  },
  temporalCoverage: '2026-04',
  spatialCoverage: {
    '@type': 'Place',
    name: 'Allentown, Pennsylvania',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.6023,
      longitude: -75.4714,
    },
  },
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Median Home Value', value: '$245,000' },
    { '@type': 'PropertyValue', name: 'Median Days to Pending', value: '7' },
    { '@type': 'PropertyValue', name: 'Year-over-Year Price Change', value: '+5.1%' },
    { '@type': 'PropertyValue', name: 'Price Per Square Foot', value: '$148' },
  ],
};

const articleSchemaObj = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Allentown PA Housing Market Report — April 2026',
  datePublished: '2026-04-01',
  dateModified: '2026-04-07',
  author: { '@type': 'Organization', name: 'USA Home Buyers', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'USA Home Buyers',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

export default function AllentownMarketReport() {
  return (
    <>
      <SchemaMarkup schema={[allentownLocalBusinessSchema, datasetSchema, articleSchemaObj, faqSchema(FAQ_ITEMS)]} />

      {/* Hero */}
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/allentown-hero.jpg"
          alt="Allentown PA homes — we buy houses fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/allentown-pa" className="hover:text-white">Allentown PA</Link>
              {' '}› Market Report
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Allentown PA Housing Market Report — {REPORT_DATA.lastUpdated}
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Current data on Allentown home prices, days on market, inventory, and what the Lehigh Valley&apos;s
              market means if you&apos;re planning to sell — with neighborhood-level breakdown.
            </p>
            <p className="text-blue-300 text-sm mb-6">
              Last updated: <strong className="text-white">{REPORT_DATA.lastUpdated}</strong>
              {' '}· Data sources: Zillow, Redfin, local MLS
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm"
            >
              Questions? Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/allentown-pa/market-report" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0f9/Xkj6xhxOG8RjUXMCfaw4H_allentown-market-report.mp4"
        title="Allentown, PA Real Estate Market Report"
        poster="/images/video-posters/allentown-market-report-poster.jpg"
        subtitle="Get the latest insights on the Allentown PA real estate market from our local team"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-3">TL;DR — The Short Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>Median home value:</strong> {REPORT_DATA.medianHomeValue} —
              up {REPORT_DATA.yoyPriceChange} year-over-year.
            </li>
            <li>
              <strong>Days to pending:</strong> ~{REPORT_DATA.daysToPending} days. But full closing
              takes {REPORT_DATA.daysToClose} days after that.
            </li>
            <li>
              <strong>Market conditions:</strong> Seller&apos;s market. Low inventory,
              list-to-sale ratio of {REPORT_DATA.listToSaleRatio}.
            </li>
            <li>
              <strong>Cash buyer range:</strong> {REPORT_DATA.cashOfferRangeLow}–{REPORT_DATA.cashOfferRangeHigh}
              {' '}for a typical Allentown home — closes in 7–14 days with no repairs or fees.
            </li>
            <li>
              <strong>Key market facts:</strong> 56% Hispanic population, 58% renter-occupied rate,
              large Bethlehem Steel-era housing stock. High cash buyer and investor activity.
            </li>
          </ul>
        </div>

        {/* Current Market Snapshot */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            Current Market Snapshot — Allentown PA ({REPORT_DATA.lastUpdated})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Median Home Value', value: REPORT_DATA.medianHomeValue, note: 'Lehigh Valley' },
              { label: 'City Median Sale Price', value: REPORT_DATA.medianSalePriceCity, note: 'MLS data' },
              { label: 'Days to Pending', value: `${REPORT_DATA.daysToPending} days`, note: 'Active market' },
              { label: 'Offer to Close', value: `${REPORT_DATA.daysToClose} days`, note: 'After going pending' },
              { label: 'YoY Price Change', value: REPORT_DATA.yoyPriceChange, note: 'Year-over-year' },
              { label: 'Price Per Sq Ft', value: REPORT_DATA.pricePerSqft, note: 'City average' },
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
                  <th className="px-4 py-3 text-left">Allentown Market Metric</th>
                  <th className="px-4 py-3 text-left">Value ({REPORT_DATA.lastUpdated})</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median home value', REPORT_DATA.medianHomeValue],
                  ['City median sale price', REPORT_DATA.medianSalePriceCity],
                  ['Days to pending (median)', `${REPORT_DATA.daysToPending} days`],
                  ['Full sale timeline (list to close)', `${REPORT_DATA.totalSaleTimeline} days`],
                  ['Year-over-year price change', REPORT_DATA.yoyPriceChange],
                  ['Price per square foot', REPORT_DATA.pricePerSqft],
                  ['List-to-sale price ratio', REPORT_DATA.listToSaleRatio],
                  ['Inventory conditions', REPORT_DATA.activeListings],
                  ['Renter-occupied rate', REPORT_DATA.renterOccupied],
                  ['Hispanic population', REPORT_DATA.hispanicPopulation],
                  ['Cash offer range (typical home)', `${REPORT_DATA.cashOfferRangeLow}–${REPORT_DATA.cashOfferRangeHigh}`],
                  ['PA transfer tax', REPORT_DATA.paTransferTax],
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
            Sources: Zillow, Redfin, local MLS data. Last updated: {REPORT_DATA.lastUpdated}.
          </p>
        </section>

        {/* What Makes Allentown Unique */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Makes Allentown&apos;s Market Unique</h2>
          <div className="prose prose-gray max-w-none text-sm text-gray-700 space-y-4">
            <p>
              Allentown is the Lehigh Valley&apos;s largest city and one of Pennsylvania&apos;s most distinctive housing markets.
              Several factors set it apart from other PA metros:
            </p>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              {[
                {
                  title: '56% Hispanic population',
                  desc: 'Allentown has one of the largest Hispanic populations of any PA city. This creates strong community ties and demand for bilingual services in real estate transactions. We provide full bilingual service.',
                },
                {
                  title: '58% renter-occupied',
                  desc: 'Far above the state average. Allentown\'s rental market is one of the most active in PA, creating constant demand from investors and landlords looking to acquire rental properties.',
                },
                {
                  title: 'Bethlehem Steel legacy housing',
                  desc: 'Much of Allentown\'s housing stock was built for steel workers in the early-to-mid 20th century. These row homes are durable but often need significant updating — creating opportunity for as-is buyers.',
                },
                {
                  title: 'NIZ investment driving downtown',
                  desc: 'The Neighborhood Improvement Zone (NIZ) has brought significant commercial investment to downtown Allentown. Residential values near downtown have risen as a result.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhood Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Neighborhood Breakdown — Allentown Area Home Prices
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 text-left">Neighborhood</th>
                  <th className="px-4 py-3 text-left">Median Price Range</th>
                  <th className="px-4 py-3 text-left">Avg Days to Pending</th>
                  <th className="px-4 py-3 text-left">Market Notes</th>
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
            Price ranges are approximations based on recent MLS sales and market data. Individual properties vary
            significantly based on condition, size, and lot. Data as of {REPORT_DATA.lastUpdated}.
          </p>
        </section>

        {/* Mid-page CTA */}
        <div className="my-10">
          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Allentown Home"
            subheadline="No obligation. Written offer in 24 hours. Close in 7–14 days."
            sourcePage="/markets/allentown-pa/market-report"
          />
        </div>

        {/* FAQ */}
        <FAQSection
          items={FAQ_ITEMS}
          heading="Allentown Housing Market — Frequently Asked Questions"
        />

        {/* Related Links */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p className="font-medium text-gray-700 mb-2">Related resources:</p>
          <p className="space-x-3">
            <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">
              Sell Your Allentown Home for Cash
            </Link>
            {' '}·{' '}
            <Link href="/markets/harrisburg-pa/market-report" className="text-brand-primary hover:underline">
              Harrisburg Market Report
            </Link>
            {' '}·{' '}
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              Cash Offer vs. MLS Listing
            </Link>
          </p>
          <p className="mt-4 text-xs text-gray-400">
            Market data sourced from Zillow, Redfin, and local MLS. Updated {REPORT_DATA.lastUpdated}.
            Individual home values vary based on condition, location, and market timing.
            This page is for informational purposes — contact a licensed real estate professional for personalized advice.
          </p>
        </div>
      </div>
    </>
  );
}
