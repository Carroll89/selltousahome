/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { cantonLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Canton OH — Cash Offer in 24 Hours',
  description:
    'We buy houses in Canton OH for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Stark County.',
  alternates: { canonical: `${SITE_URL}/markets/canton-oh` },
};

const TESTIMONIALS = [
  {
    quote: "My father owned a central Canton home since 1972. After he passed, we had to deal with the Stark County probate process on top of a house that needed a new roof and foundation work. USA Home Buyers made a written offer in 24 hours and waited while the estate worked through probate. They bought it exactly as it was — over 50 years of stuff included. We closed in 12 days after letters issued.",
    name: "Ronald G.",
    location: "Central Canton, OH",
    situation: "Inherited Property — Probate Sale",
    date: "March 2026",
  },
  {
    quote: "I was behind on the mortgage and the Stark County sheriff sale was scheduled online through Realauction. Once that Monday auction date is set, time moves fast. USA Home Buyers gave me a written offer in under 24 hours. We closed in 9 days. I walked away with money instead of losing everything.",
    name: "Tamara B.",
    location: "Southwest Canton, OH",
    situation: "Pre-Foreclosure — Ohio Judicial Sheriff Sale",
    date: "February 2026",
  },
  {
    quote: "Divorce was done and the house was court-ordered sold. My ex and I couldn't coordinate anything, but we both agreed to accept the cash offer. USA Home Buyers handled the attorneys on both sides. Twelve days from signed offer to closed. Clean.",
    name: "Michael and Sandra L.",
    location: "North Central Canton, OH",
    situation: "Divorce Sale — Court-Ordered",
    date: "January 2026",
  },
  {
    quote: "I had a rental on the east side. Tenant stopped paying, I couldn't get them out fast enough through the court system. USA Home Buyers bought it with the tenant still there. Ten days. I stopped managing the nightmare.",
    name: "Carl O.",
    location: "Northeast Canton, OH",
    situation: "Rental Property — Non-Paying Tenant",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$20K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$6,350–$7,620 on $127K)' },
  { label: 'OH conveyance fee', cashBuyer: 'We cover everything', traditional: '0.4% ($4/$1,000, Stark County)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–82% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Canton OH?',
    answer: "USA Home Buyers can close in as few as 7 days in Canton. Written cash offer within 24 hours. Ohio judicial foreclosure runs through Stark County Common Pleas Court, and once the Realauction sheriff sale is scheduled for Monday, options narrow fast. A cash sale before judgment preserves your equity. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Canton OH home?',
    answer: "Cash offers typically range from 70–82% of fair market value. According to Redfin (March 2026), Canton's median sale price is $127,000 — with a Compete Score of 75/100. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Stark County's $4.00/$1,000 conveyance fee.",
  },
  {
    question: 'What is the conveyance fee when selling in Canton OH?',
    answer: "Stark County charges a conveyance fee of $4.00 per $1,000 of sale price (0.40%), rounded up to the next $100, plus $0.50 per tax parcel. Deeds cannot be recorded until stamped by the Stark County Auditor (110 Central Plaza South, Suite 220, Canton OH 44702, phone 330-451-7357), and DTE Form 100 must be submitted. On a $127,000 home, that's approximately $508 in conveyance fee. When you sell to USA Home Buyers, we cover all closing costs. Source: Stark County Auditor transfer department.",
  },
  {
    question: 'How does foreclosure work in Stark County OH?',
    answer: "Ohio mortgage foreclosure is judicial. The lender files in Stark County Common Pleas Court. After judgment, the property goes to sheriff sale — which in Stark County is conducted online through Realauction (sheriffsales.starkcountyohio.gov) every Monday at 10:00 a.m. Eastern. After the sale, the sheriff has up to 60 days to report; the court has up to 30 days to confirm. Redemption may be possible before confirmation by paying the judgment. Consult an Ohio-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'What areas near Canton do you buy in?',
    answer: "All of Stark County: Canton, Massillon, North Canton, Louisville, Alliance, Hartville, Navarre, East Canton, Jackson Township, Perry Township, Plain Township, Canton Township, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Canton's older housing stock is significant — 41.5% of housing units built in 1939 or earlier, per 2024 ACS Census data. Pre-1940 homes in Central Canton, Southwest Canton, and Historic Ridgewood often have lead paint, aging electrical, plumbing, and foundation issues. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function CantonOHMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Canton OH',
    description: 'Step-by-step process for selling your Canton home for cash in Stark County, Ohio',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Canton property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Stark County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[cantonLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/canton-oh-hero-640.jpg 640w, /images/optimized/canton-oh-hero-828.jpg 828w, /images/optimized/canton-oh-hero-1080.jpg 1080w, /images/optimized/canton-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/canton-oh-hero-1200.jpg"
            alt="Canton OH homes — older brick and frame residential neighborhoods in Stark County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Ohio Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Canton OH — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Canton OH and throughout Stark County — Central Canton, Southwest Canton, North Central Canton, Northeast Canton, Colonial Heights, and surrounding communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Canton's median sale price is $127,000 with a Compete Score of 75. We cover all closing costs including Stark County's conveyance fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Canton and Stark County in any condition — older brick homes, pre-1940 stock, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Canton OH Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/canton-oh" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Canton OH Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Canton is the county seat of Stark County, Ohio, and has one of the most affordable housing markets in the state. According to <a href="https://www.redfin.com/city/3101/OH/Canton/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $127,000 — up 5.8% year-over-year — with 45 days on market and a Compete Score of 75. About 41.5% of Canton's housing units were built in 1939 or earlier per 2024 ACS Census data. This older housing stock — brick colonials, bungalows, Craftsman frames — carries history and often carries significant repair needs.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio sellers pay a conveyance fee rather than a transfer tax. Stark County charges <strong>$4.00 per $1,000</strong> of sale price (rounded up to the next $100) plus $0.50 per parcel, collected by the <a href="https://www.starkcountyohio.gov/government/offices/auditor/real_estate/transfer_department.php" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Stark County Auditor</a> (110 Central Plaza South, Suite 220, Canton OH 44702). Deeds must be stamped by the Auditor and DTE Form 100 submitted before recording at the Stark County Recorder (Suite 170, same building). Ohio uses judicial foreclosure, with Stark County sheriff sales conducted online through <a href="https://sheriffsales.starkcountyohio.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Realauction</a> every Monday at 10:00 a.m. Eastern.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Canton OH</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$127,000 (+5.8% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">45 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">98.6%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">75 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">53 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">OH conveyance fee</td><td className="p-3">$4.00/$1,000 + $0.50/parcel (Stark County Auditor)</td><td className="p-3 text-gray-500">Stark County Auditor</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Stark County recording fee</td><td className="p-3">$34 for first 2 pages + $8/additional page (Stark County Recorder)</td><td className="p-3 text-gray-500">Stark County Recorder fee schedule</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Stark County Common Pleas Court; sheriff sale online via Realauction, Mondays 10:00 a.m. ET</td><td className="p-3 text-gray-500">Stark County Sheriff</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Probate court</td><td className="p-3">Stark County Probate Court, Judge Curt Werren — 110 Central Plaza South, Suite 501, Canton OH 44702, phone 330-451-7755</td><td className="p-3 text-gray-500">Stark County Probate Court</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Ohio is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Stark County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Canton OH in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/canton-oh/inherited-property', description: 'Sell an inherited Canton home through Stark County probate' },
            { label: 'Going Through Divorce', href: '/markets/canton-oh/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/canton-oh/foreclosure', description: 'Ohio judicial foreclosure — sell before the Stark County Realauction Monday sale' },
            { label: 'Probate Sale', href: '/markets/canton-oh/probate', description: 'We work with Stark County Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/canton-oh/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/canton-oh/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/canton-oh/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Canton OH Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Canton OH</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $127,000 Canton median-sale home, a 5–6% agent commission runs $6,350–$7,620. Add Stark County's 0.4% conveyance fee (~$508), carrying costs during 45 days on market, and repairs to pre-1940 housing stock. A direct cash sale eliminates those costs entirely. Average Canton homes sell for about 3% below list and go pending in around 40 days; hot homes can sell for about 3% above list and go pending in around 16 days (Redfin, Mar 2026).
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Canton OH Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Canton and the surrounding Stark County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Central Canton', 'Southwest Canton', 'North Central Canton', 'Northeast Canton', 'Colonial Heights', 'Historic Ridgewood', 'Massillon', 'North Canton', 'Louisville', 'Alliance', 'Jackson Township', 'Perry Township', 'Plain Township', 'Green', 'Hartville'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Canton OH" />

        <BlogClusterLinks marketSlug="canton-oh" cityName="Canton OH" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Canton OH mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Canton OH homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Canton OH section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/canton-oh/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Canton OH Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-canton-oh-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Canton OH Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/canton-oh"
        />
      </div>
    </>
  );
}
