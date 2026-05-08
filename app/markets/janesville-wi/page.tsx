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
import { janesvilleLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Janesville WI — Cash Offer in 24 Hours',
  description:
    'We buy houses in Janesville WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Rock County.',
  alternates: { canonical: `${SITE_URL}/markets/janesville-wi` },
};


const TESTIMONIALS = [
  {
    quote: "My dad’s house near Courthouse Hill had been in the family for decades. The porch needed work and the basement took water after heavy rain. We did not want to list it and negotiate inspection repairs. The written offer gave the estate a clean number.",
    name: "Carol B.",
    location: "Courthouse Hill, Janesville WI",
    situation: "Inherited Property",
    date: "March 2026",
  },
  {
    quote: "I owned a rental near the Old Fourth Ward. The tenant was leaving, the furnace was old, and I was tired of patching things. USA Home Buyers bought it as-is and closed before I had to advertise it again.",
    name: "Ray J.",
    location: "Old Fourth Ward, Janesville WI",
    situation: "Rental Property",
    date: "February 2026",
  },
  {
    quote: "The Rock County foreclosure paperwork was already moving. I needed a sale that could close, not a listing that might sit. The offer was plain, and the title company handled the payoff.",
    name: "Tina L.",
    location: "Fourth Ward, Janesville WI",
    situation: "Pre-Foreclosure",
    date: "January 2026",
  },
  {
    quote: "We were moving out of state from the Monterey area and the house needed windows and flooring. They bought it without repairs and gave us time to leave the garage items behind.",
    name: "Mark E.",
    location: "Monterey, Janesville WI",
    situation: "Relocation — Repairs Needed",
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
  { label: 'Average net proceeds', cashBuyer: '65–81% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Janesville WI?',
    answer: "USA Home Buyers can close in as few as 7 days in Janesville. Written cash offer within 24 hours. Wisconsin uses judicial foreclosure through Rock County Circuit Court — that process takes 6–18 months from filing. If you're behind on payments, a cash sale gets you out months before the court process plays out. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Janesville WI home?',
    answer: "Cash offers typically range from 65–81% of fair market value depending on condition. According to Redfin (March 2026), Janesville's median sale price is $275,000 — with a Compete Score of 72/100. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Wisconsin's $3/$1,000 transfer fee collected at the Rock County Register of Deeds.",
  },
  {
    question: 'What is the transfer fee when selling in Janesville WI?',
    answer: "Wisconsin charges a real estate transfer fee of $3.00 per $1,000 of sale price. The fee is collected through the Rock County Register of Deeds  when the deed is recorded. On a $275,000 home, that's $855. When you sell to USA Home Buyers, we cover all closing costs including this fee. Source: Wisconsin DOR / Wis. Stat. §77.22.",
  },
  {
    question: 'How does foreclosure work in Rock County?',
    answer: "Wisconsin uses judicial foreclosure. The lender files in Rock County Circuit Court . After judgment, Wisconsin law provides a redemption period — typically 3 to 6 months for post-April 2016 mortgages — then a sheriff's sale held on Thursdays at 9:00 a.m. at the Rock County Justice Center. Total timeline: 6–18 months from filing. Consult a Wisconsin-licensed real estate attorney for your specific situation. Source: Wisconsin Law Help, Wisconsin Statutes Ch. 846.",
  },
  {
    question: 'What areas near Janesville do you buy in?',
    answer: "All of Rock County and Janesville neighborhoods: Janesville, Courthouse Hill, Old Fourth Ward, Downtown Janesville, Rockport, and Monterey. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Janesville's older housing stock — bungalows and Craftsman homes in Courthouse Hill Historic District, Old Fourth Ward, Downtown Janesville, Rockport, and Monterey, many built before 1940 — often has aging systems, outdated electrical, and deferred maintenance. About 19% of Janesville's housing units were built in 1939 or earlier. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function JanesvilleWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Janesville WI',
    description: 'Step-by-step process for selling your Janesville home for cash in Rock County, Wisconsin',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Janesville property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Rock County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          janesvilleLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Janesville WI — USA Home Buyers',
            description: 'A short overview for Janesville WI homeowners considering a direct as-is cash sale.',
            contentUrl: `${SITE_URL}/videos/janesville-wi/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/images/video-posters/janesville-wi-main-poster.jpg`,
            uploadDate: '2026-05-02',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/janesville-wi-hero-640.jpg 640w, /images/optimized/janesville-wi-hero-828.jpg 828w, /images/optimized/janesville-wi-hero-1080.jpg 1080w, /images/optimized/janesville-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/janesville-wi-hero-1200.jpg"
            alt="Janesville WI homes — Craftsman bungalows and established Janesville neighborhoods"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Janesville WI — Cash Offer in 24 Hours
            </h1>
          </div>
          <div className="w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Janesville WI Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/janesville-wi" />
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Janesville WI and throughout Rock County — Courthouse Hill, Rockport, Old Fourth Ward, Monterey, Courthouse Hill Historic District, Downtown Janesville, and surrounding Janesville communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Janesville's median sale price is $275,000 with a Compete Score of 72. We cover all closing costs including WI transfer fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Janesville and Rock County in any condition — bungalows, older Craftsman homes, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-02 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Lens */}
        <VideoEmbed
          src="/videos/janesville-wi/landing.mp4"
          title="Sell My House Fast Janesville WI — USA Home Buyers"
          poster="/images/video-posters/janesville-wi-main-poster.jpg"
          captionsSrc="/videos/janesville-wi/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for Janesville WI homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you need to sell your house fast in Janesville, Wisconsin, USA Home Buyers gives you a simple as-is cash-sale option. We buy homes throughout Janesville and Rock County, including Courthouse Hill, Old Fourth Ward, Rockport, Monterey, Downtown Janesville, and nearby working-class neighborhoods along the Rock River.</p>
            <p className="mb-3">This is for sellers who need certainty more than a long listing process. The property may be inherited, older, vacant, tenant-occupied, facing foreclosure pressure, or in need of repairs that do not make sense to complete before selling. You do not have to restore a historic home, clean everything out, or wait on a buyer's financing.</p>
            <p className="mb-3">The first step is easy. Tell us about the house, the condition, and the timeline that would help you. We review the property and provide a written cash offer. If the offer works, you choose the closing date. If you need extra time, we can work around that when possible.</p>
            <p className="mb-3">There is no commission, no required repair list, and no obligation to accept. We focus on making the next step clear so you can compare your options without pressure. For a straightforward cash offer on a Janesville-area home, call USA Home Buyers at 888-274-5006. We will explain the process and help you move forward.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Janesville WI Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Janesville is the county seat of Rock County and the commercial heart of the Janesville region. According to <a href="https://www.redfin.com/city/9601/WI/Janesville/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $275,000 (-4.3% YoY), with 47 days on market and a Compete Score of 72. Janesville’s Courthouse Hill, Old Fourth Ward, Monterey, and downtown neighborhoods have older homes where roof, porch, basement, or mechanical repairs can slow a financed sale.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin sellers pay a real estate transfer fee of $3.00 per $1,000 of sale price. The fee is collected by the Rock County Register of Deeds (verify current county office location before relying on it) when the deed is recorded. Recording fee is a flat $30 statewide. Wisconsin uses <a href="https://www.wislawhelp.org/page/484/foreclosure-procedure" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">judicial foreclosure</a>, which runs through Rock County Circuit Court. Sheriff sales are held Thursdays at 9:00 a.m. at the Rock County Justice Center. Source: Wisconsin Law Help; county sheriff-sale details should be verified for the parcel.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Janesville WI</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$275,000 (-4.3% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">47 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">101.2%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">72 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">59 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">0.3% ($3/$1,000, Rock County ROD)</td><td className="p-3 text-gray-500">WI DOR / Wis. Stat. §77.22</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat (WRDA statewide rate)</td><td className="p-3 text-gray-500">WRDA / Rock County Register of Deeds</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (~6–18 months, Rock County Circuit Court)</td><td className="p-3 text-gray-500">WI Law Help / Wis. Stat. Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sheriff sale location</td><td className="p-3">Sheriff-sale logistics vary by county and case</td><td className="p-3 text-gray-500">Rock County Sheriff</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Wisconsin is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Rock County (primary); verify parcel jurisdiction for edge cases</td><td className="p-3 text-gray-500">City of Janesville</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Janesville WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/janesville-wi/inherited-property', description: 'Sell an inherited Janesville home through Rock County probate' },
            { label: 'Going Through Divorce', href: '/markets/janesville-wi/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/janesville-wi/foreclosure', description: 'Wisconsin judicial foreclosure — sell before a Rock County sheriff sale' },
            { label: 'Probate Sale', href: '/markets/janesville-wi/probate', description: 'We work with Rock County probate cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/janesville-wi/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/janesville-wi/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/janesville-wi/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />
        <section className="my-12 rounded-xl border border-gray-200 bg-gray-50 p-6"><h2 className="text-2xl font-bold text-brand-dark mb-3">Why Janesville sellers use a direct cash offer</h2><p className="text-gray-700">A Courthouse Hill estate, an Old Fourth Ward rental, and a Monterey house with window or flooring issues can all lose time during inspections. We look at the actual property, Rock County title work, tenants, repairs, and your closing date. Then we give one written number you can compare against listing and waiting.</p></section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Janesville WI</h2>
          <TestimonialBlock testimonials={TESTIMONIALS} heading="What Janesville WI Homeowners Are Saying" />

          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $275,000 Janesville median-sale home, a 5–6% agent commission runs $14,250–$17,100. Add Wisconsin's 0.3% transfer fee ($855), carrying costs during 47 days on market, and repairs. Older Craftsman and bungalow homes in Courthouse Hill and Old Fourth Ward often have deferred maintenance that conventional buyers demand fixed before closing. A direct cash sale eliminates those costs entirely.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Janesville WI Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Janesville and the surrounding Janesville communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Courthouse Hill', 'Old Fourth Ward', 'Downtown Janesville', 'Rockport', 'Monterey', 'Fourth Ward', 'Look West', 'Southwest Janesville', 'Northeast Janesville', 'Center Avenue'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Janesville WI" />

        <BlogClusterLinks marketSlug="janesville-wi" cityName="Janesville WI" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Janesville WI mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Janesville WI homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Janesville WI section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/janesville-wi/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Janesville WI Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-janesville-wi-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Janesville WI Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/janesville-wi"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
