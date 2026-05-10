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
import { eauClaireLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Eau Claire WI — Cash Offer in 24 Hours',
  description:
    'We buy houses in Eau Claire WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Eau Claire County.',
  alternates: { canonical: `${SITE_URL}/markets/eau-claire-wi` },
};


const TESTIMONIALS = [
  {
    quote: "My sister and I inherited a house near Randall Park. The plaster was cracked, the garage roof leaked, and neither of us lived in Eau Claire anymore. The offer gave us a number we could both agree on, and we closed after the estate paperwork was ready.",
    name: "Laura M.",
    location: "Randall Park, Eau Claire WI",
    situation: "Inherited Property",
    date: "March 2026",
  },
  {
    quote: "I had a rental on the North Side with a tenant who was leaving and a long repair list. I didn’t want another turnover. They bought it as-is and handled the closing through the title company without me cleaning it out.",
    name: "Ben K.",
    location: "North Side, Eau Claire WI",
    situation: "Tenant-Occupied Rental",
    date: "February 2026",
  },
  {
    quote: "The house was in the Third Ward and needed more updates than I could afford before listing. USA Home Buyers walked it once, sent a written offer, and let me choose a closing date after I found my apartment.",
    name: "Nancy H.",
    location: "Third Ward, Eau Claire WI",
    situation: "Downsizing — Repairs Needed",
    date: "January 2026",
  },
  {
    quote: "After the divorce, keeping the Putnam Heights house made no sense. We needed a clean sale and no back-and-forth over repairs. The cash offer was straightforward, and both attorneys had the paperwork they needed.",
    name: "Megan S.",
    location: "Putnam Heights, Eau Claire WI",
    situation: "Divorce Sale",
    date: "December 2025",
  },
];


const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$20K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$8,550–$10,260 on $285K)' },
  { label: 'WI transfer fee', cashBuyer: 'We cover everything', traditional: '0.3% ($3/$1,000, seller pays)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–80% of FMV before property-specific adjustments', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Eau Claire WI?',
    answer: "USA Home Buyers can close in as few as 7 days in Eau Claire. Written cash offer within 24 hours. Wisconsin uses judicial foreclosure through Eau Claire County Circuit Court — that process takes 6–18 months from filing. If you're behind on payments, a cash sale gets you out months before the court process plays out. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Eau Claire WI home?',
    answer: "For average-condition properties, cash offers typically land around 70–80% of fair market value — before factoring in repair costs, property condition, title issues, holding costs, and risk adjustments specific to your home. According to Redfin (March 2026), Eau Claire's median sale price is $285,000 — with a Compete Score of 60/100. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Wisconsin's $3/$1,000 transfer fee collected at the Eau Claire County Register of Deeds.",
  },
  {
    question: 'What is the transfer fee when selling in Eau Claire WI?',
    answer: "Wisconsin charges a real estate transfer fee of $3.00 per $1,000 of sale price. The fee is collected through the Eau Claire County Register of Deeds  when the deed is recorded. On a $285,000 home, that's $855. When you sell to USA Home Buyers, we cover all closing costs including this fee. Source: Wisconsin DOR / Wis. Stat. §77.22.",
  },
  {
    question: 'How does foreclosure work in Eau Claire County?',
    answer: "Wisconsin uses judicial foreclosure. The lender files in Eau Claire County Circuit Court . After judgment, Wisconsin law provides a redemption period — typically 3 to 6 months for post-April 2016 mortgages — then a sheriff's sale held on Thursdays at 9:00 a.m. at the Eau Claire County Justice Center. Total timeline: 6–18 months from filing. Consult a Wisconsin-licensed real estate attorney for your specific situation. Source: Wisconsin Law Help, Wisconsin Statutes Ch. 846.",
  },
  {
    question: 'What areas near Eau Claire do you buy in?',
    answer: "All of Eau Claire County and Eau Claire neighborhoods: Eau Claire, Randall Park, Third Ward, East Hill, North Side, and Putnam Heights. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Eau Claire's older housing stock — bungalows and Craftsman homes in Randall Park, Third Ward, East Hill, North Side, and Putnam Heights, many built before 1940 — often has aging systems, outdated electrical, and deferred maintenance. About 19% of Eau Claire's housing units were built in 1939 or earlier. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function EauClaireWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Eau Claire WI',
    description: 'Step-by-step process for selling your Eau Claire home for cash in Eau Claire County, Wisconsin',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Eau Claire property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Eau Claire County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          eauClaireLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Eau Claire WI — USA Home Buyers',
            description: 'Cash offers for Eau Claire and Chippewa Valley homes — any condition',
            contentUrl: `${SITE_URL}/videos/eau-claire-wi/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/images/video-posters/eau-claire-wi-main-poster.jpg`,
            uploadDate: '2026-05-02',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/eau-claire-wi-hero-640.jpg 640w, /images/optimized/eau-claire-wi-hero-828.jpg 828w, /images/optimized/eau-claire-wi-hero-1080.jpg 1080w, /images/optimized/eau-claire-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/eau-claire-wi-hero-1200.jpg"
            alt="Eau Claire WI homes — Craftsman bungalows and established Eau Claire neighborhoods"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Eau Claire WI — Cash Offer in 24 Hours
            </h1>
            {/* MOBILE_FORM_ABOVE_FOLD_FIX: keep form-start before summary block on mobile Template A pages. */}
            <div className="lg:hidden mb-4">
              <CashOfferForm variant="hero" headline="Get Your Eau Claire WI Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/eau-claire-wi" />
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Eau Claire WI and throughout Eau Claire County — Randall Park, East Hill, Third Ward, Putnam Heights, Randall Park area, North Side, and surrounding Eau Claire communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Eau Claire's median sale price is $285,000 with a Compete Score of 60. We cover all closing costs including WI transfer fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Eau Claire and Eau Claire County in any condition — bungalows, older Craftsman homes, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="hidden lg:block w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Eau Claire WI Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/eau-claire-wi" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-02 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Lens */}
        <VideoEmbed
          src="/videos/eau-claire-wi/landing.mp4"
          title="Sell My House Fast Eau Claire WI — USA Home Buyers"
          poster="/images/video-posters/eau-claire-wi-main-poster.jpg"
          captionsSrc="/videos/eau-claire-wi/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for Eau Claire WI homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you need to sell your house fast in Eau Claire, Wisconsin, USA Home Buyers can help you move forward without repairs, open houses, or agent fees. We buy homes as-is across Eau Claire and the surrounding county area, including Randall Park, Third Ward, Eastside Hill, Putnam Heights, Dells Pond, and North Side Hill.</p>
            <p className="mb-3">This is for sellers who need certainty. The home might be inherited, rented to tenants, near the UWEC area, vacant, older, or in need of repairs you do not want to manage. You do not have to clean everything out, update old systems, or wait for a retail buyer's financing.</p>
            <p className="mb-3">Our process is simple. Tell us about the house, the condition, and the timeline that would help you. We review the property and give you a written cash offer. If it works, you choose the closing date. If you need more time, we can discuss a timeline that fits your situation.</p>
            <p className="mb-3">There is no obligation, no pressure, and no commission. We explain the offer clearly so you are not left guessing about fees, repairs, or closing steps. If you want a straightforward cash offer for an Eau Claire-area house, call USA Home Buyers at 888-274-5006. We will help you understand your options before you decide.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Eau Claire WI Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Eau Claire is the county seat of Eau Claire County and the commercial heart of the Eau Claire region. According to <a href="https://www.redfin.com/city/5746/WI/Eau-Claire/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $285,000 (+2.6% YoY), with 41 days on market and a Compete Score of 60. Eau Claire’s Randall Park, East Hill, Third Ward, and Putnam Heights areas have older homes that often need plaster, roof, sewer, or electrical work before a financed buyer feels comfortable.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin sellers pay a real estate transfer fee of $3.00 per $1,000 of sale price. The fee is collected by the Eau Claire County Register of Deeds (verify current county office location before relying on it) when the deed is recorded. Recording fee is a flat $30 statewide. Wisconsin uses <a href="https://www.wislawhelp.org/page/484/foreclosure-procedure" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">judicial foreclosure</a>, which runs through Eau Claire County Circuit Court. Sheriff sales are held Thursdays at 9:00 a.m. at the Eau Claire County Justice Center. Source: Wisconsin Law Help; county sheriff-sale details should be verified for the parcel.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Eau Claire WI</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$285,000 (+2.6% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">41 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">99.7%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">60 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">49 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">0.3% ($3/$1,000, Eau Claire County ROD)</td><td className="p-3 text-gray-500">WI DOR / Wis. Stat. §77.22</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat (WRDA statewide rate)</td><td className="p-3 text-gray-500">WRDA / Eau Claire County Register of Deeds</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (~6–18 months, Eau Claire County Circuit Court)</td><td className="p-3 text-gray-500">WI Law Help / Wis. Stat. Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sheriff sale location</td><td className="p-3">Sheriff-sale logistics vary by county and case</td><td className="p-3 text-gray-500">Eau Claire County Sheriff</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Wisconsin is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Eau Claire County (primary); verify parcel jurisdiction for edge cases</td><td className="p-3 text-gray-500">City of Eau Claire</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Eau Claire WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/eau-claire-wi/inherited-property', description: 'Sell an inherited Eau Claire home through Eau Claire County probate' },
            { label: 'Going Through Divorce', href: '/markets/eau-claire-wi/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/eau-claire-wi/foreclosure', description: 'Wisconsin judicial foreclosure — sell before a Eau Claire County sheriff sale' },
            { label: 'Probate Sale', href: '/markets/eau-claire-wi/probate', description: 'We work with Eau Claire County probate cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/eau-claire-wi/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/eau-claire-wi/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/eau-claire-wi/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />
        <section className="my-12 rounded-xl border border-gray-200 bg-gray-50 p-6"><h2 className="text-2xl font-bold text-brand-dark mb-3">Why Eau Claire sellers use a direct cash offer</h2><p className="text-gray-700">Older houses near Randall Park, East Hill, the Third Ward, and Putnam Heights can need roof, plaster, sewer, or electrical work before a retail buyer feels comfortable. We look at the repair list, title, tenants, and your closing date first. Then we give one written offer so you can decide whether a direct sale is simpler than listing.</p></section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Eau Claire WI</h2>
          <TestimonialBlock testimonials={TESTIMONIALS} heading="What Eau Claire WI Homeowners Are Saying" />

          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $285,000 Eau Claire median-sale home, a 5–6% agent commission runs $14,250–$17,100. Add Wisconsin's 0.3% transfer fee ($855), carrying costs during 41 days on market, and repairs. Older Craftsman and bungalow homes in Randall Park and Third Ward often have deferred maintenance that conventional buyers demand fixed before closing. A direct cash sale eliminates those costs entirely.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Eau Claire WI Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Eau Claire and the surrounding Eau Claire communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Randall Park', 'Third Ward', 'East Hill', 'North Side', 'Putnam Heights', 'Downtown Eau Claire', 'Water Street', 'Shawtown', 'West Side', 'North River Front'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Eau Claire WI" />

        <BlogClusterLinks marketSlug="eau-claire-wi" cityName="Eau Claire WI" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Eau Claire WI mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Eau Claire WI homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Eau Claire WI section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/eau-claire-wi/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Eau Claire WI Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-eau-claire-wi-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Eau Claire WI Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/eau-claire-wi"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
