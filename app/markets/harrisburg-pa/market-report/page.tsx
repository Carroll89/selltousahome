import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { faqSchema, harrisburgLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const revalidate = 86400;

// ─── Update these numbers each month ─────────────────────────────────────────
const REPORT_DATA = {
  lastUpdated: 'April 2026',
  medianHomeValueZHVI: '$234,569',
  medianSalePriceCity: '~$152,500',
  daysToPending: 24,
  daysToClose: '45–60',
  totalSaleTimeline: '50–65',
  yoyPriceChange: '+5.2%',
  pricePerSqft: '$104',
  activeListings: 'Low (seller\'s market)',
  listToSaleRatio: '98.4%',
  cashOfferRangeLow: '$100,000',
  cashOfferRangeHigh: '$187,000',
  paTransferTax: '2% (1% buyer / 1% seller)',
  realtorCommission: '5–6%',
};

const NEIGHBORHOODS = [
  {
    name: 'Steelton',
    medianPrice: '~$90,000–$115,000',
    dom: '8 days',
    notes: 'Entry-level inventory; high cash buyer activity. Many properties have deferred maintenance.',
  },
  {
    name: 'Penbrook',
    medianPrice: '~$100,000–$135,000',
    dom: '7 days',
    notes: 'Blue-collar neighborhood with tight inventory. Working-class row homes move quickly.',
  },
  {
    name: 'Allison Hill',
    medianPrice: '~$75,000–$110,000',
    dom: '10 days',
    notes: 'Highest investor activity in the city. Rentals common; inherited property sales frequent.',
  },
  {
    name: 'Camp Hill',
    medianPrice: '~$280,000–$380,000',
    dom: '4 days',
    notes: 'Competitive Cumberland County suburb. Move-in ready homes; multiple offers common.',
  },
  {
    name: 'Mechanicsburg',
    medianPrice: '~$260,000–$340,000',
    dom: '5 days',
    notes: 'Strong school district demand. Fastest-moving suburb in the metro area.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is the median home price in Harrisburg PA in 2026?',
    answer:
      'The Zillow Home Value Index (ZHVI) for the Harrisburg metro area is approximately $234,569 as of April 2026. Within city limits, Redfin and local MLS data show a median sale price closer to $152,500, reflecting Harrisburg\'s concentration of older row homes and working-class neighborhoods.',
  },
  {
    question: 'How long does it take to sell a house in Harrisburg PA?',
    answer:
      'The median days on market in Harrisburg is approximately 24 days per Redfin March 2026 data. After going under contract, the full closing process (inspections, appraisals, mortgage underwriting, title) adds another 45–60 days. Total timeline from list to close: 70–85 days. Cash buyers close in 7–14 days.',
  },
  {
    question: 'Is Harrisburg PA a buyer\'s or seller\'s market in 2026?',
    answer:
      'Harrisburg is a seller\'s market in 2026. Active inventory is low, homes are moving steadily, and the list-to-sale price ratio is approximately 98.4%, meaning sellers are getting very close to their asking price. This reflects the broader Central PA trend of limited new construction and sustained demand.',
  },
  {
    question: 'What are home prices doing in Harrisburg year-over-year?',
    answer:
      'Harrisburg area home values are up approximately 5.2% year-over-year as of April 2026 per Redfin March 2026 data. This is consistent with the broader Pennsylvania housing market trend, driven by low inventory, remote work demand, and affordability relative to Philadelphia and Pittsburgh.',
  },
  {
    question: 'How much do cash buyers pay for Harrisburg homes?',
    answer:
      'Cash buyers typically offer 70–80% of fair market value. On a Harrisburg home in the $152,500–$234,000 range, that means a cash offer of $100,000–$187,000. The trade-off: no agent commissions (5–6%), no closing costs (the buyer covers), no repairs, and closing in 7–14 days instead of 70–85.',
  },
  {
    question: 'Which Harrisburg neighborhoods have the highest home values?',
    answer:
      'Camp Hill and Mechanicsburg (both in Cumberland County) have the highest home values in the metro area, with medians of $280,000–$380,000. Within Harrisburg city limits, Uptown and areas near the Capitol tend to command premium prices. Allison Hill and Steelton have the lowest city-limit values, typically $75,000–$135,000.',
  },
];

const PAGE_URL = `${SITE_URL}/markets/harrisburg-pa/market-report`;

export const metadata: Metadata = {
  title: 'Harrisburg PA Housing Market 2026',
  description:
    'Current Harrisburg PA housing market data for 2026: median home price $234,569, 5 days to pending, 4.2% YoY appreciation. Updated April 2026 with neighborhood breakdown.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Harrisburg PA Housing Market Report 2026',
    description:
      'Current data on Harrisburg PA home prices, days on market, inventory, and what it means if you\'re selling. Updated April 2026.',
    url: PAGE_URL,
    type: 'article',
  },
};

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Harrisburg PA Housing Market Data — April 2026',
  description:
    'Monthly housing market statistics for Harrisburg, Pennsylvania including median home value, days on market, year-over-year price change, and neighborhood-level data.',
  url: PAGE_URL,
  creator: {
    '@type': 'Organization',
    name: 'USA Home Buyers',
    url: SITE_URL,
  },
  temporalCoverage: '2026-04',
  spatialCoverage: {
    '@type': 'Place',
    name: 'Harrisburg, Pennsylvania',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.2732,
      longitude: -76.8867,
    },
  },
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Median Home Value (ZHVI)', value: '$234,569' },
    { '@type': 'PropertyValue', name: 'Median Days to Pending', value: '5' },
    { '@type': 'PropertyValue', name: 'Year-over-Year Price Change', value: '+4.2%' },
    { '@type': 'PropertyValue', name: 'Price Per Square Foot', value: '$142' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Harrisburg PA Housing Market Report — April 2026',
  datePublished: '2026-04-01',
  dateModified: '2026-04-16',
  author: { '@type': 'Organization', name: 'USA Home Buyers', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'USA Home Buyers',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

export default function HarrisburgMarketReport() {
  return (
    <>
      <SchemaMarkup schema={[harrisburgLocalBusinessSchema, datasetSchema, articleSchema, faqSchema(FAQ_ITEMS)]} />

      {/* Hero */}
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/harrisburg-pa" className="hover:text-white">Harrisburg PA</Link>
              {' '}› Market Report
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Harrisburg PA Housing Market Report — {REPORT_DATA.lastUpdated}
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Current data on home prices, days on market, inventory, and what Harrisburg&apos;s market
              means if you&apos;re planning to sell — with neighborhood-level breakdown.
            </p>
            <p className="text-blue-300 text-sm mb-6">
              Last updated: <strong className="text-white">{REPORT_DATA.lastUpdated}</strong>
              {' '}· Data sources: Zillow ZHVI, Redfin, local MLS
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm"
            >
              Questions? Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/harrisburg-pa/market-report" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0fc/Z-XmF_o8FB2J9ON4IJWK2_harrisburg-market-report.mp4"
        title="Harrisburg, PA Real Estate Market Report"
        poster="/images/video-posters/harrisburg-market-report-poster.jpg"
        subtitle="Get the latest insights on the Harrisburg PA real estate market from our local team"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Let me give you the real numbers on the Harrisburg PA housing market in 2026. I&apos;m with USA Home Buyers, and we track this data every day.</p>
            <p className="mb-3">Zillow&apos;s Home Value Index for the Harrisburg area puts the median home value at $234,569 as of early 2026. Redfin&apos;s median sale price for city-limit properties is around $145,000 — that gap tells you something about the mix of urban row homes and suburban single-family houses in the metro area.</p>
            <p className="mb-3">Average days to pending in Harrisburg is five days. That&apos;s fast — it means when a well-priced home hits the MLS, it goes under contract quickly. But after going pending, you&apos;re still 45 to 60 days from closing. Inspections, appraisals, mortgage underwriting — all of that happens after the offer is accepted.</p>
            <p className="mb-3">That&apos;s why some sellers in Harrisburg choose a cash sale instead. We close in 7 to 14 days. There&apos;s no appraisal contingency, no financing that can fall through, no buyer getting cold feet after inspection.</p>
            <p className="mb-3">Harrisburg is also seeing year-over-year appreciation, driven by its status as the state capital, Penn State Harrisburg&apos;s presence, and relative affordability compared to Philadelphia and Pittsburgh.</p>
            <p className="mb-3">Whether you decide to list traditionally or call us, understanding the market helps you make a better decision. If you&apos;d like a cash offer on your Harrisburg property, call USA Home Buyers at 888-274-5006.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-3">TL;DR — The Short Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>Median home value (ZHVI):</strong> {REPORT_DATA.medianHomeValueZHVI} —
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
              {' '}for a typical Harrisburg home — closes in 7–14 days with no repairs or fees.
            </li>
            <li>
              <strong>Bottom line:</strong> If speed or condition matters, a cash sale makes sense.
              If you have a move-in ready home and can wait 60 days, the MLS will net more on paper —
              though the gap is narrower than it looks after commissions, transfer tax, and repairs.
            </li>
          </ul>
        </div>

        {/* Current Market Snapshot */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            Current Market Snapshot — Harrisburg PA ({REPORT_DATA.lastUpdated})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Median Value (ZHVI)', value: REPORT_DATA.medianHomeValueZHVI, note: 'Metro area' },
              { label: 'City-Limit Median Sale', value: REPORT_DATA.medianSalePriceCity, note: 'Redfin / MLS' },
              { label: 'Days to Pending', value: `${REPORT_DATA.daysToPending} days`, note: 'Very fast' },
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
                  <th className="px-4 py-3 text-left">Harrisburg Market Metric</th>
                  <th className="px-4 py-3 text-left">Value ({REPORT_DATA.lastUpdated})</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median home value (Zillow ZHVI)', REPORT_DATA.medianHomeValueZHVI],
                  ['Median sale price — city limits', REPORT_DATA.medianSalePriceCity],
                  ['Days to pending (median)', `${REPORT_DATA.daysToPending} days`],
                  ['Full sale timeline (list to close)', `${REPORT_DATA.totalSaleTimeline} days`],
                  ['Year-over-year price change', REPORT_DATA.yoyPriceChange],
                  ['Price per square foot', REPORT_DATA.pricePerSqft],
                  ['List-to-sale price ratio', REPORT_DATA.listToSaleRatio],
                  ['Inventory conditions', REPORT_DATA.activeListings],
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
            Sources: Zillow ZHVI, Redfin, local MLS data. Last updated: {REPORT_DATA.lastUpdated}.
          </p>
        </section>

        {/* Price Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Price Trends — What&apos;s Happening and Why</h2>
          <div className="prose prose-gray max-w-none text-sm text-gray-700 space-y-4">
            <p>
              According to the Zillow Home Value Index (ZHVI), Harrisburg area home values are up <strong>{REPORT_DATA.yoyPriceChange} year-over-year</strong> as of
              {' '}{REPORT_DATA.lastUpdated}. This is not a bubble — it&apos;s a supply problem. According to U.S. Census Bureau building permit data, Central Pennsylvania
              has seen sustained demand from remote workers priced out of Philadelphia, combined with very limited new
              residential construction. Harrisburg&apos;s older row home stock doesn&apos;t turn over fast.
            </p>
            <p>
              The metro-wide Zillow ZHVI of <strong>{REPORT_DATA.medianHomeValueZHVI}</strong> is pulled up by
              Camp Hill, Mechanicsburg, and Hershey. According to Redfin and local MLS data, within Harrisburg city limits, the median sale price is closer
              to <strong>{REPORT_DATA.medianSalePriceCity}</strong> — a meaningful difference driven by the
              concentration of older, smaller homes in Allison Hill, Steelton, and Penbrook.
            </p>
            <p>
              According to Redfin, at <strong>{REPORT_DATA.pricePerSqft} per square foot</strong>, Harrisburg remains significantly more
              affordable than Philadelphia (~$250/sqft) and most Mid-Atlantic metros. This affordability gap
              is a primary driver of continued demand from out-of-market buyers and investors.
            </p>
            <p>
              According to local MLS data, the list-to-sale ratio of <strong>{REPORT_DATA.listToSaleRatio}</strong> means sellers are receiving
              offers extremely close to asking price — and in competitive segments like Mechanicsburg and Camp Hill,
              above asking is common. This is a seller&apos;s market in all measurable indicators.
            </p>
          </div>
        </section>

        {/* What This Means If You're Selling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means If You&apos;re Selling</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Priced right, clean homes move in days',
                desc: `According to Redfin, the ${REPORT_DATA.daysToPending}-day median to pending is real. A well-priced, move-in ready home in a desirable neighborhood will receive offers within a week. The risk is still in the 45–60 day closing period — inspections, appraisals, and financing can still derail deals.`,
              },
              {
                title: 'Condition matters for financing',
                desc: 'FHA and conventional lenders will flag deferred maintenance. Peeling paint, failed systems, foundation cracks, and roof issues can cause deals to fall through at the appraisal stage. If your home needs work, expect to repair it, price below market, or sell to a cash buyer.',
              },
              {
                title: 'The net proceeds gap is smaller than it looks',
                desc: `According to the National Association of Realtors and PA Department of Revenue, after 5–6% agent commission, 1% PA transfer tax, pre-listing repairs, and 60 days of carrying costs, the "higher price" of a traditional sale often nets only 5–15% more than a cash offer — with significantly more time and uncertainty.`,
              },
              {
                title: 'Cash buyers are active in this market',
                desc: `Low-priced Harrisburg inventory (especially under $150,000) attracts heavy investor and cash buyer interest. If your home is in Allison Hill, Steelton, or Penbrook and needs work, a cash sale is often the fastest path to closing.`,
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
            Neighborhood Breakdown — Harrisburg Area Home Prices
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
            Price ranges are approximations based on recent MLS sales and Zillow estimates. Individual properties vary
            significantly based on condition, size, and lot. Data as of {REPORT_DATA.lastUpdated}.
          </p>
        </section>

        {/* Cash vs Traditional in This Market */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Cash Buyer vs. Traditional Sale in the Harrisburg Market
          </h2>
          <p className="text-gray-700 text-sm mb-6">
            In a seller&apos;s market, you might think cash buyers are irrelevant — demand is high, so why not list?
            The answer depends on your specific situation. Here&apos;s how the two paths compare given current conditions:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-brand-light rounded-xl p-5">
              <h3 className="font-bold text-brand-primary mb-1 text-sm">Cash Sale (USA Home Buyers)</h3>
              <p className="text-xs text-gray-500 mb-3">Example: $175,000 home needing $12,000 in repairs</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cash offer (~75% FMV)</span>
                  <span className="font-bold">$131,250</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Agent commission</span><span>$0</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Transfer tax (seller 1%)</span><span>$0 (we cover)</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Closing costs</span><span>$0 (we cover)</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Pre-listing repairs</span><span>$0</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Carrying costs</span><span>$0</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-brand-dark">
                  <span>Net to seller</span><span>$131,250</span>
                </div>
                <div className="text-xs text-gray-500 pt-1">Timeline: 7–14 days</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-700 mb-1 text-sm">Traditional MLS Sale</h3>
              <p className="text-xs text-gray-500 mb-3">Same $175,000 home, same $12,000 in repairs needed</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Sale price</span><span className="font-bold">$175,000</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Agent commission (5.5%)</span><span>−$9,625</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Transfer tax (seller 1%)</span><span>−$1,750</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Title / closing costs</span><span>−$2,500</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Pre-listing repairs</span><span>−$12,000</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Carrying costs (~75 days)</span><span>−$3,750</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-brand-dark">
                  <span>Net to seller</span><span>$145,375</span>
                </div>
                <div className="text-xs text-gray-500 pt-1">Timeline: 50–65 days (+ 15–20% fall-through risk)</div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
            <p>
              <strong>The gap in this example: $14,125</strong> — or about $188 per day of waiting.
              Whether that&apos;s worth it depends entirely on your situation: timeline, property condition,
              certainty requirements, and carrying cost burden.
            </p>
          </div>
        </section>

        {/* Mid-page CTA */}
        <div className="my-10">
          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Harrisburg Home"
            subheadline="No obligation. Written offer in 24 hours. Close in 7–14 days."
            sourcePage="/markets/harrisburg-pa/market-report"
          />
        </div>

        {/* FAQ */}
        <FAQSection
          items={FAQ_ITEMS}
          heading="Harrisburg Housing Market — Frequently Asked Questions"
        />

        {/* Related Links */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p className="font-medium text-gray-700 mb-2">Related resources:</p>
          <p className="space-x-3">
            <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">
              Sell Your Harrisburg Home for Cash
            </Link>
            {' '}·{' '}
            <Link href="/guides/sell-house-fast-harrisburg-pa-2026" className="text-brand-primary hover:underline">
              2026 Harrisburg Seller Guide
            </Link>
            {' '}·{' '}
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              Cash Offer vs. MLS Listing
            </Link>
          </p>
          <p className="mt-4 text-xs text-gray-400">
            Market data sourced from Zillow ZHVI, Redfin, and local MLS. Updated {REPORT_DATA.lastUpdated}.
            Individual home values vary based on condition, location, and market timing.
            This page is for informational purposes — contact a licensed real estate professional for personalized advice.
          </p>
          <p className="mt-3 text-xs text-gray-400">
            <strong>Sources:</strong>{' '}
            <a href="https://www.legis.state.pa.us/" target="_blank" rel="noopener noreferrer" className="underline">PA Real Property Law — Title 68 (legis.state.pa.us)</a>{' '}·{' '}
            <a href="https://www.dauphincounty.gov/government/support-agencies/register-of-wills" target="_blank" rel="noopener noreferrer" className="underline">Dauphin County Register of Wills</a>{' '}·{' '}
            <a href="https://www.revenue.pa.gov/" target="_blank" rel="noopener noreferrer" className="underline">PA Inheritance Tax — Revenue.PA.gov</a>{' '}·{' '}
            <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer" className="underline">NAR Research &amp; Statistics</a>
          </p>
        </div>
      </div>
    </>
  );
}
