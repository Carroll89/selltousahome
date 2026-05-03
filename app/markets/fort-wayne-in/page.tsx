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
import { fortWayneLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Fort Wayne IN — Cash Offer, No Transfer Tax',
  description:
    'We buy houses in Fort Wayne IN and Allen County for cash, as-is. Indiana has no transfer tax. Written offer in 24 hours, close in 7 days. No repairs, no fees.',
  alternates: { canonical: `${SITE_URL}/markets/fort-wayne-in` },
};

const TESTIMONIALS = [
  {
    quote: "I inherited a house in Waynedale from my parents through Allen County probate. The house was 1950s, needed roof work and the basement was a project. USA Home Buyers gave me a written offer in 24 hours and waited while the estate processed. No Indiana transfer tax either — that was a nice surprise. Closed in 11 days after authorization.",
    name: "Carolyn S.",
    location: "Waynedale, Fort Wayne IN",
    situation: "Inherited Property — Allen County Probate",
    date: "March 2026",
  },
  {
    quote: "I was facing Indiana judicial foreclosure. The process takes 6–12 months but I didn't want that on my record. USA Home Buyers closed in 9 days. I walked away with equity instead of waiting out the court process.",
    name: "James P.",
    location: "Southeast Fort Wayne, IN",
    situation: "Pre-Foreclosure — Indiana Judicial Process",
    date: "February 2026",
  },
  {
    quote: "Relocation to Texas — plant closure. I had maybe 45 days to close on the Fort Wayne house. USA Home Buyers had an offer the same day I called and we closed in 12 days. No contingencies, no repair demands.",
    name: "Michelle T.",
    location: "Southwest Fort Wayne, IN",
    situation: "Job Relocation — Fast Close",
    date: "January 2026",
  },
  {
    quote: "I owned a rental near Electric Works. Tenant gave notice, I decided to exit. USA Home Buyers bought it vacant in 10 days. The Sales Disclosure Form they handled themselves — I didn't have to do anything.",
    name: "David H.",
    location: "Downtown Fort Wayne, IN",
    situation: "Rental Property — Landlord Exit",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$20K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$10,745–$12,894 on $214,900)' },
  { label: 'IN transfer tax', cashBuyer: '$0 — Indiana has no transfer tax', traditional: '$0 — Indiana has no transfer tax' },
  { label: 'Sales Disclosure Form', cashBuyer: 'We handle all paperwork', traditional: 'Required at recording (standard process step)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–82% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Fort Wayne IN?',
    answer: "USA Home Buyers can close in as few as 7 days in Fort Wayne. Written cash offer within 24 hours. Indiana uses judicial-only foreclosure — the process runs through Allen County Superior Court and can take 6–12 months. A cash sale well before that point preserves your equity and avoids the court process entirely. Call 888-274-5006.",
  },
  {
    question: 'Does Indiana have a real estate transfer tax?',
    answer: "No. Indiana abolished its real estate transfer tax in 2009. There is no state, county, or local deed transfer tax in Fort Wayne or Allen County. A Sales Disclosure Form (Form 46234) is required to be submitted at deed recording through the Allen County Auditor — this is a standard process step, not a tax. Source: Allen County Recorder (allencountyrecorder.us).",
  },
  {
    question: 'How does foreclosure work in Indiana?',
    answer: "Indiana requires judicial foreclosure — lenders must file a civil lawsuit in Allen County Superior Court. There is no non-judicial, power-of-sale, or trustee's sale option in Indiana. Indiana is judicial only. The 2009 Indiana reform added a mandatory settlement conference for residential foreclosures. Typical timeline: 6–12 months from complaint to sheriff's sale. For most residential properties, there is no post-sale right of redemption. Consult an Indiana-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'What is the probate process for selling a house in Fort Wayne?',
    answer: "Allen County probate is handled by the Allen County Circuit Court (Probate Division), located at 715 S. Calhoun St., Fort Wayne IN 46802, phone (260) 449-4246. Indiana uses Circuit Court for probate, not a separate Probate Court. The Indiana small estate affidavit (IC § 29-1-8-1) is available for qualifying smaller estates. Cash buyers can purchase probate properties directly once the court authorizes the sale.",
  },
  {
    question: 'What is the Sales Disclosure Form in Indiana?',
    answer: "Indiana requires a Sales Disclosure Form (Form 46234) to be submitted with the deed at recording through the Allen County Auditor. This is a standard recording process step — not a tax. The County Auditor endorsement is required before the deed can be recorded at the Allen County Recorder. When you sell to USA Home Buyers, we handle all the paperwork including the Sales Disclosure Form.",
  },
  {
    question: 'What areas near Fort Wayne do you buy in?',
    answer: "All of Allen County: Fort Wayne, New Haven, Waynedale, Huntertown, Grabill, Leo-Cedarville, Woodburn, Garrett, and surrounding Allen County communities. We also serve parts of DeKalb County and Whitley County. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Fort Wayne's housing stock includes established neighborhoods of 1920s–1950s bungalows in Waynedale and Southeast Fort Wayne, Craftsman-style homes in older areas, and newer suburban construction in Southwest Fort Wayne. We buy in any condition. No repairs, no cleaning, no staging.",
  },
];

export default function FortWayneINMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Fort Wayne IN',
    description: 'Step-by-step process for selling your Fort Wayne home for cash — Allen County, no transfer tax',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Fort Wayne property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Allen County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          fortWayneLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/fort-wayne-in-hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/fort-wayne-in-hero.webp"
            alt="Fort Wayne IN homes — 1940s bungalow in Allen County residential neighborhood"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Indiana Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Fort Wayne, Indiana — Fast Cash Offers, No Transfer Tax
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Fort Wayne IN and throughout Allen County — Aboite, Southwest Fort Wayne, Downtown, Electric Works district, Waynedale, Southeast Fort Wayne, and surrounding communities. Written cash offer in 24 hours. Close in 7–14 days. Indiana has no state or local transfer tax. According to Redfin (March 2026), Fort Wayne's median sale price is $214,900 with 30 days on market and a Compete Score of 80. Allen County grew 4.4% since 2020 (US Census, July 2025). Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Fort Wayne and Allen County in any condition — bungalows, Craftsman homes, rentals, estates, foreclosures. No repairs, no agent fees, no transfer tax.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Fort Wayne IN Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. No Indiana transfer tax." sourcePage="/markets/fort-wayne-in" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Fort Wayne IN Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Fort Wayne is the largest city in Allen County, Indiana, and one of the fastest-growing mid-sized Midwest cities. Allen County grew 4.4% since 2020 to approximately 402,329 residents (US Census, July 2025). According to <a href="https://www.redfin.com/city/6476/IN/Fort-Wayne/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $214,900 with 30 days on market, a sale-to-list ratio of 97.8%, and a Compete Score of 80. Major employers include Parkview Health, Lincoln Financial Group, and BAE Systems.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-green-800 mb-1">Indiana Has No Transfer Tax</p>
            <p className="text-sm text-green-700">
              Indiana abolished its real estate transfer tax in 2009. There is no state, county, or city transfer tax in Fort Wayne or Allen County. A Sales Disclosure Form is required at deed recording — this is a standard process step, not a tax. Source: Allen County Recorder (allencountyrecorder.us). USA Home Buyers handles all paperwork.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-amber-800 mb-1">Indiana Foreclosure: Judicial Only</p>
            <p className="text-sm text-amber-700">
              Indiana is a judicial foreclosure state — there is no power-of-sale, non-judicial, or trustee's sale option. All foreclosures must go through Allen County Superior Court. The 2009 Indiana reform added mandatory settlement conferences for residential foreclosures. Typical timeline: 6–12 months. For most residential properties, there is no post-sale right of redemption.
            </p>
          </div>

          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Fort Wayne IN</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$214,900</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">30 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">97.8%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">80 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Indiana transfer tax</td><td className="p-3">$0 — Indiana abolished transfer tax in 2009</td><td className="p-3 text-gray-500">Indiana Code / Allen County Recorder</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sales Disclosure Form</td><td className="p-3">Required at recording (Form 46234) — process step, not a tax</td><td className="p-3 text-gray-500">Allen County Auditor</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial only — Allen County Superior Court; 2009 reform (mandatory settlement conference); ~6–12 months</td><td className="p-3 text-gray-500">Indiana Code IC 32-30-10</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Allen County Circuit Court (Probate Division) — 715 S. Calhoun St., Fort Wayne IN 46802; (260) 449-4246</td><td className="p-3 text-gray-500">Allen County Courts</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Indiana title companies handle most residential closings</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Allen County (pop. ~402,329, US Census July 2025)</td><td className="p-3 text-gray-500">US Census Bureau</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Fort Wayne IN in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/fort-wayne-in/inherited-property', description: 'Sell an inherited Fort Wayne home through Allen County Circuit Court probate' },
            { label: 'Going Through Divorce', href: '/markets/fort-wayne-in/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/fort-wayne-in/foreclosure', description: 'Indiana judicial-only foreclosure — sell before the Allen County sheriff sale' },
            { label: 'Probate Sale', href: '/markets/fort-wayne-in/probate', description: 'Allen County Circuit Court (Probate Division)' },
            { label: 'Tenant-Occupied Property', href: '/markets/fort-wayne-in/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/fort-wayne-in/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/fort-wayne-in/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Fort Wayne IN Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Fort Wayne IN</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $214,900 Fort Wayne median-sale home, a 5–6% agent commission runs $10,745–$12,894. Indiana's $0 transfer tax is a genuine advantage. Add carrying costs during 30 days on market and any repair costs. Average Fort Wayne homes sell for about 2.2% below list price (Redfin, Mar 2026). A direct cash sale eliminates commissions and repair costs entirely.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Fort Wayne IN Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Fort Wayne and Allen County:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Aboite', 'Southwest Fort Wayne', 'Downtown Fort Wayne', 'Electric Works District', 'Waynedale', 'Southeast Fort Wayne', 'New Haven', 'West Central', 'Northeast Fort Wayne', 'Georgetown', 'Huntertown', 'Leo-Cedarville', 'Woodburn', 'Grabill'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Fort Wayne's Electric Works district represents a major urban revitalization project in the former General Electric campus — creating new momentum in Downtown Fort Wayne for both sellers and buyers.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Fort Wayne IN" />

        <BlogClusterLinks marketSlug="fort-wayne-in" cityName="Fort Wayne IN" />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-brand-primary mb-2">Fort Wayne IN mini-site</p>
              <h2 className="text-2xl font-bold text-brand-dark mb-2">Seller resources for Fort Wayne IN homeowners</h2>
              <p className="text-gray-700 max-w-3xl">
                Stay in the Fort Wayne IN section for local market data, situation pages, seller guides, and articles before you decide whether a cash offer or listing makes more sense.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/markets/fort-wayne-in/resources" className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors">
                Fort Wayne IN Resources
              </Link>
              <Link href="/guides/sell-house-fast-fort-wayne-in-2026" className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors">
                Local Guide
              </Link>
            </div>
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Fort Wayne IN Cash Offer?"
          subheadline="No obligation. No fees. No transfer tax. Written offer in 24 hours."
          sourcePage="/markets/fort-wayne-in"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
