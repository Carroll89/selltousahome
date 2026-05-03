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
import { appletonLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Appleton WI — Cash Offer in 24 Hours',
  description:
    'We buy houses in Appleton WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Outagamie County.',
  alternates: { canonical: `${SITE_URL}/markets/appleton-wi` },
};

const TESTIMONIALS = [
  {
    quote: "My mother left a house on the east side of Appleton that had been in the family since the 1960s. The Outagamie County probate process added months to the timeline. USA Home Buyers made a written offer while the estate was still open and waited for the Letters Testamentary before we closed. The house needed a new roof and the wiring was original — they bought it as-is. Twelve days from offer to keys.",
    name: "Diane K.",
    location: "Northwood Park, Appleton WI",
    situation: "Inherited Property — Probate Sale",
    date: "March 2026",
  },
  {
    quote: "I was three months behind on the mortgage. In Wisconsin, judicial foreclosure goes through the circuit court and can drag on for over a year — but I couldn't wait. USA Home Buyers gave me a written offer in less than 24 hours. We closed in 10 days. I walked away with money instead of losing everything at the Outagamie County sheriff sale.",
    name: "Jason R.",
    location: "Erb Park, Appleton WI",
    situation: "Pre-Foreclosure — Wisconsin Judicial",
    date: "February 2026",
  },
  {
    quote: "Divorce was final and the judge ordered the house sold. We agreed on a cash sale because listing would have meant showings, negotiations, and more arguments. USA Home Buyers gave one number, one date. Both attorneys reviewed it, and we closed in eleven days. Clean and done.",
    name: "Michele and Tom B.",
    location: "Downtown Appleton, WI",
    situation: "Divorce Sale — Court-Ordered",
    date: "January 2026",
  },
  {
    quote: "I had a rental on the north side with a tenant who stopped paying. Wisconsin eviction takes time I didn't have. USA Home Buyers bought the duplex with the tenant still in place. Eleven days, start to finish. No managing the eviction, no repairs.",
    name: "Gary S.",
    location: "Old Third Ward, Appleton WI",
    situation: "Rental Property — Non-Paying Tenant",
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
  { label: 'Average net proceeds', cashBuyer: '65–82% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Appleton WI?',
    answer: "USA Home Buyers can close in as few as 7 days in Appleton. Written cash offer within 24 hours. Wisconsin uses judicial foreclosure through Outagamie County Circuit Court — that process takes 6–18 months from filing. If you're behind on payments, a cash sale gets you out months before the court process plays out. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Appleton WI home?',
    answer: "Cash offers typically range from 65–82% of fair market value depending on condition. According to Redfin (March 2026), Appleton's median sale price is $285,000 — with a Compete Score of 77/100. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Wisconsin's $3/$1,000 transfer fee collected at the Outagamie County Register of Deeds.",
  },
  {
    question: 'What is the transfer fee when selling in Appleton WI?',
    answer: "Wisconsin charges a real estate transfer fee of $3.00 per $1,000 of sale price. The fee is collected through the Outagamie County Register of Deeds (320 S. Walnut St., Appleton WI 54911) when the deed is recorded. On a $285,000 home, that's $855. When you sell to USA Home Buyers, we cover all closing costs including this fee. Source: Wisconsin DOR / Wis. Stat. §77.22.",
  },
  {
    question: 'How does foreclosure work in Outagamie County?',
    answer: "Wisconsin uses judicial foreclosure. The lender files in Outagamie County Circuit Court (320 S. Walnut St., Appleton WI 54911). After judgment, Wisconsin law provides a redemption period — typically 3 to 6 months for post-April 2016 mortgages — then a sheriff's sale held on Thursdays at 9:00 a.m. at the Outagamie County Justice Center. Total timeline: 6–18 months from filing. Consult a Wisconsin-licensed real estate attorney for your specific situation. Source: Wisconsin Law Help, Wisconsin Statutes Ch. 846.",
  },
  {
    question: 'What areas near Appleton do you buy in?',
    answer: "All of Outagamie County and the Fox Cities area: Appleton, Menasha, Neenah, Kimberly, Little Chute, Kaukauna, Grand Chute, Fox Crossing, Combined Locks, Greenville, and surrounding communities. Also Winnebago County and Calumet County properties associated with Appleton. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Appleton's older housing stock — bungalows and Craftsman homes in Erb Park, Old Third Ward, and City Park neighborhoods, many built before 1940 — often has aging systems, outdated electrical, and deferred maintenance. About 19% of Appleton's housing units were built in 1939 or earlier. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function AppletonWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Appleton WI',
    description: 'Step-by-step process for selling your Appleton home for cash in Outagamie County, Wisconsin',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Appleton property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Outagamie County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          appletonLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Appleton WI — USA Home Buyers',
            description: 'Cash offers for Appleton and Fox Cities homes — any condition',
            contentUrl: `${SITE_URL}/videos/appleton-wi/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/images/video-posters/appleton-wi-main-poster.jpg`,
            uploadDate: '2026-05-02',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/appleton-wi-hero-640.jpg 640w, /images/optimized/appleton-wi-hero-828.jpg 828w, /images/optimized/appleton-wi-hero-1080.jpg 1080w, /images/optimized/appleton-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/appleton-wi-hero-1200.jpg"
            alt="Appleton WI homes — Craftsman bungalows and established Fox Cities neighborhoods"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Appleton WI — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Appleton WI and throughout Outagamie County — Erb Park, Northwood Park, Old Third Ward, Alicia Park, City Park Historic District, River Drive, and surrounding Fox Cities communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Appleton's median sale price is $285,000 with a Compete Score of 77. We cover all closing costs including WI transfer fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Appleton and Outagamie County in any condition — bungalows, older Craftsman homes, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Appleton WI Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/appleton-wi" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-02 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Lens */}
        <VideoEmbed
          src="/videos/appleton-wi/landing.mp4"
          title="Sell My House Fast Appleton WI — USA Home Buyers"
          poster="/images/video-posters/appleton-wi-main-poster.jpg"
          captionsSrc="/videos/appleton-wi/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for Appleton WI homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you need to sell your house fast in Appleton, Wisconsin, USA Home Buyers can give you a simpler path than listing, repairing, and waiting. We buy houses as-is across Appleton and the Fox Cities area, including Downtown Appleton, Old Third Ward, Erb Park, City Park, and nearby Outagamie County neighborhoods.</p>
            <p className="mb-3">Your house may need repairs, be part of an estate, have tenants, sit vacant, or just feel like one more project you do not want to manage. You do not have to update older systems, clean out every room, or make the property perfect before reaching out.</p>
            <p className="mb-3">Here is the process. You tell us about the house and what you need. We review the property, answer your questions, and give you a written cash offer. If the offer works, you choose the closing date. If you need more time, we can work around your timeline.</p>
            <p className="mb-3">There are no agent commissions, no required repairs, and no obligation. We explain the offer clearly so you know what happens next and what you can expect at closing. If you want a practical cash-sale option for an Appleton-area home, call USA Home Buyers at 888-274-5006. We will walk you through the next step and help you decide if selling as-is makes sense.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Appleton WI Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Appleton is the county seat of Outagamie County and the commercial heart of the Fox Cities region. According to <a href="https://www.redfin.com/city/35753/WI/Appleton/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $285,000 — up 5.6% year-over-year — with 45 days on market and a Compete Score of 77. Appleton's City Park Historic District (142 contributing properties) and the Old Third Ward contain significant early-20th-century housing stock. These older homes carry character — and often carry deferred maintenance.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin sellers pay a real estate transfer fee of $3.00 per $1,000 of sale price. The fee is collected by the Outagamie County Register of Deeds (320 S. Walnut St., Appleton WI 54911, phone 920-832-5114) when the deed is recorded. Recording fee is a flat $30 statewide. Wisconsin uses <a href="https://www.wislawhelp.org/page/484/foreclosure-procedure" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">judicial foreclosure</a>, which runs through Outagamie County Circuit Court. Sheriff sales are held Thursdays at 9:00 a.m. at the Outagamie County Justice Center. Source: Wisconsin Law Help, Outagamie County Sheriff.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Appleton WI</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$285,000 (+5.6% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">45 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">100.6%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">77 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">68 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">0.3% ($3/$1,000, Outagamie County ROD)</td><td className="p-3 text-gray-500">WI DOR / Wis. Stat. §77.22</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat (WRDA statewide rate)</td><td className="p-3 text-gray-500">WRDA / Outagamie ROD</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (~6–18 months, Outagamie Circuit Court)</td><td className="p-3 text-gray-500">WI Law Help / Wis. Stat. Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sheriff sale location</td><td className="p-3">Thursdays 9:00 a.m. — Outagamie County Justice Center lobby, 320 S. Walnut St.</td><td className="p-3 text-gray-500">Outagamie County Sheriff</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Wisconsin is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Outagamie County (primary); parts in Calumet and Winnebago Counties</td><td className="p-3 text-gray-500">City of Appleton</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Appleton WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/appleton-wi/inherited-property', description: 'Sell an inherited Appleton home through Outagamie County probate' },
            { label: 'Going Through Divorce', href: '/markets/appleton-wi/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/appleton-wi/foreclosure', description: 'Wisconsin judicial foreclosure — sell now before the Outagamie sheriff sale' },
            { label: 'Probate Sale', href: '/markets/appleton-wi/probate', description: 'We work with Outagamie County probate cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/appleton-wi/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/appleton-wi/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/appleton-wi/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Appleton WI Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Appleton WI</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $285,000 Appleton median-sale home, a 5–6% agent commission runs $14,250–$17,100. Add Wisconsin's 0.3% transfer fee ($855), carrying costs during 45 days on market, and repairs. Older Craftsman and bungalow homes in Erb Park and Old Third Ward often have deferred maintenance that conventional buyers demand fixed before closing. A direct cash sale eliminates those costs entirely.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Appleton WI Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Appleton and the surrounding Fox Cities communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Erb Park', 'Northwood Park', 'Old Third Ward', 'Alicia Park', 'River Drive', 'City Park / Historic District', 'Downtown Appleton', 'Menasha', 'Neenah', 'Kimberly', 'Little Chute', 'Kaukauna', 'Grand Chute', 'Fox Crossing', 'Combined Locks', 'Greenville'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Appleton WI" />

        <BlogClusterLinks marketSlug="appleton-wi" cityName="Appleton WI" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Appleton WI mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Appleton WI homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Appleton WI section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/appleton-wi/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Appleton WI Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-appleton-wi-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Appleton WI Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/appleton-wi"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
