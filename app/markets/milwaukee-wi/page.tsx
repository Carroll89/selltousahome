/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { milwaukeeLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Milwaukee WI — Cash Offer in 24 Hours',
  description:
    'We buy houses in Milwaukee WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Milwaukee County.',
  alternates: { canonical: `${SITE_URL}/markets/milwaukee-wi` },
};

const TESTIMONIALS = [
  {
    quote: "My aunt left a German duplex in Sherman Park that hadn't been touched since the 1980s. The Milwaukee County probate process took months — the Register in Probate at 901 N. 9th St. had all the paperwork. USA Home Buyers made a written offer while the estate was still open, waited for authorization, and bought the property as-is. Two tenants, no repairs, twelve days after we got the letters.",
    name: "Denise W.",
    location: "Sherman Park, Milwaukee WI",
    situation: "Inherited Property — Probate Sale",
    date: "March 2026",
  },
  {
    quote: "I was four months behind. Wisconsin judicial foreclosure goes through Milwaukee County Circuit Court — it takes time, but the sheriff sales go every Monday morning, and once you're on the schedule the clock moves fast. USA Home Buyers gave me a written offer the same day I called. We closed in 11 days. I kept my equity instead of losing it.",
    name: "Antoine S.",
    location: "Bay View, Milwaukee WI",
    situation: "Pre-Foreclosure — Wisconsin Judicial",
    date: "February 2026",
  },
  {
    quote: "Divorce was ordered and neither of us wanted to deal with a listing in a north-side duplex with a current tenant. USA Home Buyers made one offer, both attorneys reviewed it, we signed. Fourteen days from offer to close. Done.",
    name: "Karen and Paul M.",
    location: "Washington Heights, Milwaukee WI",
    situation: "Divorce Sale — Duplex",
    date: "January 2026",
  },
  {
    quote: "Walked away from a Riverwest three-unit that had been in the family for 25 years. All three units occupied. USA Home Buyers bought it tenant-in-place in nine days. I didn't have to negotiate with anyone, manage a single showing, or wait three months for leases to end.",
    name: "Bernard K.",
    location: "Riverwest, Milwaukee WI",
    situation: "Rental Property — Tenant-Occupied",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$30K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$11,750–$14,100 on $235K)' },
  { label: 'WI transfer fee', cashBuyer: 'We cover everything', traditional: '0.3% ($3/$1,000, seller pays)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–80% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Milwaukee WI?',
    answer: "USA Home Buyers can close in as few as 7 days in Milwaukee. Written cash offer within 24 hours. Wisconsin judicial foreclosure runs through Milwaukee County Circuit Court — sheriff sales go every Monday morning. If you're behind on payments, a cash sale gets you out before the weekly sale date. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Milwaukee WI home?',
    answer: "Cash offers typically range from 70–80% of fair market value. According to Redfin (March 2026), Milwaukee's median sale price is $235,000 — with a Compete Score of 72/100 and 99.7% sale-to-list. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Wisconsin's $3/$1,000 transfer fee collected at the Milwaukee County Register of Deeds.",
  },
  {
    question: 'What is the transfer fee when selling in Milwaukee WI?',
    answer: "Wisconsin charges a real estate transfer fee of $3.00 per $1,000 of sale price. The fee is collected by the Milwaukee County Register of Deeds (901 N. 9th Street, Room 103, Milwaukee WI 53233) when the deed is recorded. Wisconsin recording fee is $30 flat statewide. On a $235,000 home, that's $705 in transfer fees. When you sell to USA Home Buyers, we cover all closing costs including this fee. Source: Wisconsin DOR / Wis. Stat. §77.22.",
  },
  {
    question: 'How does foreclosure work in Milwaukee County?',
    answer: "Wisconsin requires judicial foreclosure. The lender files in Milwaukee County Circuit Court. After judgment, Wisconsin law provides a redemption period — typically 3 to 6 months for post-April 2016 mortgages. Milwaukee County sheriff real estate auctions occur every Monday morning. Wisconsin tax foreclosure involves a separate in-rem process for unpaid property taxes. Consult a Wisconsin-licensed real estate attorney for your specific situation. Source: Wisconsin Law Help, Milwaukee County Sheriff.",
  },
  {
    question: 'What areas near Milwaukee do you buy in?',
    answer: "All of Milwaukee County: Milwaukee, West Allis, Wauwatosa, Shorewood, Whitefish Bay, Glendale, Greenfield, Greendale, Cudahy, South Milwaukee, Oak Creek, Brown Deer, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Milwaukee's housing stock is predominantly older — 34% of city housing units were built in 1939 or earlier, and 44.8% before 1950 (2024 ACS Census data). German duplexes, Cream City brick buildings, Queen Anne homes, Polish flats, and Craftsman bungalows throughout Bay View, Riverwest, Sherman Park, and Walker's Point often have deferred maintenance. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function MilwaukeeWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Milwaukee WI',
    description: 'Step-by-step process for selling your Milwaukee home for cash in Milwaukee County, Wisconsin',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Milwaukee property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Milwaukee County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          milwaukeeLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Milwaukee WI — USA Home Buyers',
            description: 'Cash offers for Milwaukee and Milwaukee County homes — any condition',
            contentUrl: `${SITE_URL}/videos/milwaukee-wi/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/videos/milwaukee-wi/landing-poster.jpg`,
            uploadDate: '2026-05-02',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/milwaukee-wi-hero-640.jpg 640w, /images/optimized/milwaukee-wi-hero-828.jpg 828w, /images/optimized/milwaukee-wi-hero-1080.jpg 1080w, /images/optimized/milwaukee-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/milwaukee-wi-hero-1200.jpg"
            alt="Milwaukee WI homes — Cream City brick duplexes and established city neighborhoods"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Milwaukee WI — Cash Offer in 24 Hours
            </h1>
            {/* MOBILE_FORM_ABOVE_FOLD_FIX: keep form-start before summary block on mobile Template A pages. */}
            <div className="lg:hidden mb-4">
              <CashOfferForm variant="hero" headline="Get Your Milwaukee WI Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/milwaukee-wi" />
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Milwaukee WI and throughout Milwaukee County — Bay View, Riverwest, Sherman Park, Washington Heights, Walker's Point, Lower East Side, Downtown, and surrounding communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Milwaukee's median sale price is $235,000 (+14.6% YoY) with a Compete Score of 72. We cover all closing costs including WI transfer fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Milwaukee and Milwaukee County in any condition — German duplexes, Cream City brick buildings, Queen Anne homes, Craftsman bungalows, estates, foreclosures. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="hidden lg:block w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Milwaukee WI Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/milwaukee-wi" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <VideoEmbed
          src="/videos/milwaukee-wi/landing.mp4"
          title="Sell My House Fast Milwaukee WI — USA Home Buyers"
          poster="/videos/milwaukee-wi/landing-poster.jpg"
          subtitle="A short overview for Milwaukee WI homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you need to sell your house fast in Milwaukee, Wisconsin, USA Home Buyers can help you avoid the delays that come with repairs, showings, inspections, and financing. We buy homes as-is across Milwaukee and Milwaukee County, including Bay View, Riverwest, Washington Heights, Sherman Park, Walker's Point, and the Lower East Side.</p>
            <p className="mb-3">Milwaukee has many older homes, duplexes, tenant-occupied properties, inherited houses, and repair-heavy situations where a normal listing can get complicated fast. You do not have to fix the roof, clear out the basement, remove tenants, or wait for a buyer who may ask for credits after inspection.</p>
            <p className="mb-3">We start with a simple conversation about the property and your timeline. Then we review the house and give you a written cash offer. If it fits your needs, you choose the closing date. If it is not the right fit, there is no pressure and no fee.</p>
            <p className="mb-3">Our goal is certainty. You get a clear number, a clear process, and a local sale path that does not depend on making the home retail-perfect first. For a no-obligation cash offer on a Milwaukee-area house, call USA Home Buyers at 888-274-5006. We will explain your options and help you move forward calmly.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Milwaukee WI Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Milwaukee is Wisconsin's largest city and the county seat of Milwaukee County. According to <a href="https://www.redfin.com/city/35759/WI/Milwaukee/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $235,000 — up 14.6% year-over-year — with 44 days on market and a Compete Score of 72. About 34% of Milwaukee's city housing units were built in 1939 or earlier, and 44.8% before 1950 (2024 ACS Census data). This older stock — German duplexes, Cream City brick buildings, Queen Anne homes, Polish flats, and Craftsman bungalows — carries the city's architectural character and often carries significant deferred maintenance.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin sellers pay a real estate transfer fee of $3.00 per $1,000 of sale price. The fee is collected by the <a href="https://county.milwaukee.gov/EN/Register-of-Deeds" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Milwaukee County Register of Deeds</a> (901 N. 9th Street, Room 103, Milwaukee WI 53233) when the deed is recorded. Recording fee is $30 flat statewide. Wisconsin uses <a href="https://www.wislawhelp.org/page/484/foreclosure-procedure" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">judicial foreclosure</a>, which runs through Milwaukee County Circuit Court. Milwaukee County sheriff real estate auctions occur every Monday morning. Source: Wisconsin Law Help, Milwaukee County.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Milwaukee WI</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price (city)</td><td className="p-3">$235,000 (+14.6% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price (county)</td><td className="p-3">$280,000 (+12.0% YoY)</td><td className="p-3 text-gray-500">Redfin county (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">44 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">99.7%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">72 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">445 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">0.3% ($3/$1,000), Milwaukee County ROD</td><td className="p-3 text-gray-500">WI Stat. §77.22</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat (statewide, WRDA)</td><td className="p-3 text-gray-500">WRDA</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Milwaukee County Circuit Court; sheriff sales every Monday morning</td><td className="p-3 text-gray-500">WI Law Help / Wis. Stat. Ch. 846</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Milwaukee County Probate Court, 901 N. 9th St., Room 207, Milwaukee WI 53233, phone (414) 278-4444</td><td className="p-3 text-gray-500">Milwaukee County Courts</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Wisconsin is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Milwaukee County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Milwaukee WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/milwaukee-wi/inherited-property', description: 'Sell an inherited Milwaukee home through Milwaukee County probate' },
            { label: 'Going Through Divorce', href: '/markets/milwaukee-wi/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/milwaukee-wi/foreclosure', description: 'Wisconsin judicial foreclosure — sell before the Milwaukee County Monday sheriff auction' },
            { label: 'Probate Sale', href: '/markets/milwaukee-wi/probate', description: 'We work with Milwaukee County probate cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/milwaukee-wi/tenant-occupied', description: 'We buy with tenants in place — duplexes, triplexes, and multifamily' },
            { label: 'Code Violations', href: '/markets/milwaukee-wi/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/milwaukee-wi/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Milwaukee WI Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Milwaukee WI</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $235,000 Milwaukee city median-sale home, a 5–6% agent commission runs $11,750–$14,100. Add Wisconsin's 0.3% transfer fee ($705), carrying costs during 44 days on market, and repairs to older duplex/multifamily stock. Milwaukee's 44.8% pre-1950 housing share means many properties need $25,000–$60,000+ in updates to compete on the retail market. A direct cash sale eliminates those costs entirely.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Milwaukee WI Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Milwaukee and the surrounding Milwaukee County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Bay View', 'Riverwest', 'Washington Heights', 'Sherman Park', "Walker's Point", 'Lower East Side', 'Downtown Milwaukee', 'West Allis', 'Wauwatosa', 'Shorewood', 'Whitefish Bay', 'Glendale', 'Greenfield', 'Greendale', 'Cudahy', 'South Milwaukee', 'Oak Creek', 'Brown Deer'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Milwaukee WI" />

        <BlogClusterLinks marketSlug="milwaukee-wi" cityName="Milwaukee WI" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Milwaukee WI mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Milwaukee WI homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Milwaukee WI section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/milwaukee-wi/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Milwaukee WI Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-milwaukee-wi-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Milwaukee WI Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/milwaukee-wi"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
