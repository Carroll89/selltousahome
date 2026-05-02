/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { akronLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Akron OH — Cash Offer in 24 Hours',
  description:
    'We buy houses in Akron OH for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Summit County.',
  alternates: { canonical: `${SITE_URL}/markets/akron-oh` },
};

const TESTIMONIALS = [
  {
    quote: "My grandmother owned a house in Kenmore since the 1960s. After she passed, we had to deal with Summit County probate — the Probate Court is at 209 South High Street in Akron. The house needed everything. USA Home Buyers made a written offer in 24 hours, waited while the estate went through court, and bought it exactly as it was. Closed twelve days after authorization.",
    name: "Patricia C.",
    location: "Kenmore, Akron OH",
    situation: "Inherited Property — Probate Sale",
    date: "March 2026",
  },
  {
    quote: "The Summit County online sheriff sale was scheduled through RealAuction for a Friday. USA Home Buyers gave me a written offer the morning I called. We closed in 9 days. I walked away with equity instead of losing everything to an online bidder.",
    name: "DeShawn M.",
    location: "East Akron, OH",
    situation: "Pre-Foreclosure — Ohio Sheriff Sale",
    date: "February 2026",
  },
  {
    quote: "Divorce decree came through and ordered the house sold. My ex and I agreed on nothing except the cash offer. USA Home Buyers had one price, one date. Both attorneys signed off. Done in eleven days.",
    name: "Patricia and Mark W.",
    location: "Goodyear Heights, Akron OH",
    situation: "Divorce Sale — Court-Ordered",
    date: "January 2026",
  },
  {
    quote: "I owned a rental in Highland Square. Tenant stopped paying, I couldn't get through the eviction process fast enough. USA Home Buyers bought it with the tenant in place. Ten days total. No court appearances, no repairs.",
    name: "Robert G.",
    location: "Highland Square, Akron OH",
    situation: "Rental Property — Non-Paying Tenant",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$25K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$7,588–$9,105 on $151,750)' },
  { label: 'OH conveyance fee', cashBuyer: 'We cover everything', traditional: '$4.00/$1,000 + $0.50/lot (Summit County)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '60–80% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Akron OH?',
    answer: "USA Home Buyers can close in as few as 7 days in Akron. Written cash offer within 24 hours. Ohio judicial foreclosure runs through Summit County Common Pleas Court. Summit County online sheriff sales through RealAuction go on Fridays at 10:00 a.m. — once you're on the schedule, options narrow. A cash sale before judgment preserves your equity. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Akron OH home?',
    answer: "Cash offers typically range from 60–80% of fair market value. According to Redfin (March 2026), Akron's median sale price is $151,750 — up 21.4% year-over-year — with a Compete Score of 73/100. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Summit County's $4.00/$1,000 conveyance fee.",
  },
  {
    question: 'What is the conveyance fee when selling in Summit County OH?',
    answer: "Summit County charges a conveyance fee of $4.00 per $1,000 of sale price (rounded up to the next $100) plus $0.50 per lot in the legal description. Forms must be received by the Summit County Fiscal Office Property Transfer by 3:30 PM for same-business-day title transfer. DTE Forms 100 and 100(EX) are required. Recording Division is at 175 S. Main St., 4th Floor, Akron OH 44308, open Mon–Fri 7:30 AM–4:00 PM. On a $151,750 home, that's approximately $607. We cover all closing costs. Source: Summit County Fiscal Office.",
  },
  {
    question: 'How does foreclosure work in Summit County OH?',
    answer: "Ohio mortgage foreclosure is judicial — the lender files in Summit County Common Pleas Court. After judgment, the matter is brought to the Summit County Sheriff. Mortgage sales are online through RealAuction, Fridays at 10:00 AM; delinquent tax sales go on Tuesdays at 10:00 AM. Starting bid is 2/3 of the appraised value. Sale to deed takes a minimum of 6–8 weeks after the sheriff sale. Source: Summit County Sheriff. Consult an Ohio-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'What areas near Akron do you buy in?',
    answer: "All of Summit County: Akron, Cuyahoga Falls, Barberton, Stow, Tallmadge, Fairlawn, Green, Norton, Portage Lakes, Mogadore, Hudson, Munroe Falls, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Akron's older housing stock is substantial — 34.1% of housing units were built in 1939 or earlier (2024 ACS Census data). Goodyear Heights, East Akron, Kenmore, Firestone Park, and Highland Square are full of bungalows, American foursquares, and colonials that often have lead paint, knob-and-tube wiring, and deferred maintenance from the rubber-industry era. We buy in any condition.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function AkronOHMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Akron OH',
    description: 'Step-by-step process for selling your Akron home for cash in Summit County, Ohio',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Akron property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Summit County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[akronLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/akron-oh-hero-640.jpg 640w, /images/optimized/akron-oh-hero-828.jpg 828w, /images/optimized/akron-oh-hero-1080.jpg 1080w, /images/optimized/akron-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/akron-oh-hero-1200.jpg"
            alt="Akron OH homes — older Northeast Ohio residential neighborhoods in Summit County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Ohio Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Akron OH — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Akron OH and throughout Summit County — East Akron, Goodyear Heights, Kenmore, South Akron, Middlebury, Highland Square, Firestone Park, Northwest Akron, and surrounding communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Akron's median sale price is $151,750 (+21.4% YoY) with a Compete Score of 73. We cover all closing costs including Summit County's conveyance fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Akron and Summit County in any condition — bungalows, foursquares, colonials, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Akron OH Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/akron-oh" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Akron OH Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Akron is the county seat of Summit County, Ohio, and the former rubber capital of the world. According to <a href="https://www.redfin.com/city/244/OH/Akron/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $151,750 — up 21.4% year-over-year — with 42 days on market and a Compete Score of 73. About 34.1% of Akron's housing units were built in 1939 or earlier per 2024 ACS Census data. This older stock — bungalows, American foursquares, colonials, and Cape Cods throughout Goodyear Heights, Kenmore, Firestone Park, and East Akron — carries Akron's rubber-era character and often carries significant repair needs.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio sellers pay a conveyance fee rather than a transfer tax. Summit County charges <strong>$4.00 per $1,000</strong> of sale price (rounded to next $100) plus $0.50 per lot, paid to the <a href="https://fiscaloffice.summitoh.net/index.php/recorded-documents/fees" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Summit County Fiscal Office</a> Recording Division (175 S. Main St., 4th Floor, Akron OH 44308, Mon–Fri 7:30 AM–4:00 PM). DTE Forms 100 and 100(EX) required; forms received by 3:30 PM process same business day. Ohio uses judicial foreclosure; Summit County mortgage sheriff sales go online through <a href="https://sheriff.summitoh.net/pages/Sheriff-Sales-Information.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">RealAuction on Fridays at 10:00 AM</a>.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Akron OH</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$151,750 (+21.4% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$119/sq ft (+18.4% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">42 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">97.3%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">73 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">196 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">OH conveyance fee</td><td className="p-3">$4.00/$1,000 + $0.50/lot (Summit County Fiscal Office)</td><td className="p-3 text-gray-500">Summit County Fiscal Office fee schedule</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Summit County recording fee</td><td className="p-3">$34 first 2 pages + $8/additional page</td><td className="p-3 text-gray-500">Summit County Fiscal Office Recording Division</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Summit County Common Pleas; online RealAuction mortgage sales, Fridays 10:00 a.m.; delinquent tax sales Tuesdays 10:00 a.m.</td><td className="p-3 text-gray-500">Summit County Sheriff</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Summit County Court of Common Pleas — Probate Division, Judge Elinore Marsh Stormer — 209 South High Street, Akron OH 44308, phone 330-643-2350</td><td className="p-3 text-gray-500">Summit County Probate Court</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Ohio is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Summit County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Akron OH in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/akron-oh/inherited-property', description: 'Sell an inherited Akron home through Summit County Probate Court' },
            { label: 'Going Through Divorce', href: '/markets/akron-oh/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/akron-oh/foreclosure', description: 'Ohio judicial foreclosure — sell before the Summit County RealAuction Friday sale' },
            { label: 'Probate Sale', href: '/markets/akron-oh/probate', description: 'We work with Summit County Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/akron-oh/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/akron-oh/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/akron-oh/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Akron OH Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Akron OH</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $151,750 Akron median-sale home, a 5–6% agent commission runs $7,588–$9,105. Add Summit County's conveyance fee (~$607), carrying costs during 42 days on market, and repairs to pre-1940 housing stock. Average homes sell for about 3% below list price. A direct cash sale eliminates those costs entirely. Hot homes can sell for about 2% above list and go pending in around 12 days (Redfin, Mar 2026).
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Akron OH Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Akron and the surrounding Summit County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['East Akron', 'Goodyear Heights', 'Kenmore', 'South Akron', 'Middlebury', 'Highland Square', 'Firestone Park', 'Northwest Akron', 'Cuyahoga Falls', 'Barberton', 'Stow', 'Tallmadge', 'Fairlawn', 'Green', 'Norton', 'Hudson'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Akron OH" />

        <BlogClusterLinks marketSlug="akron-oh" cityName="Akron OH" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Akron OH mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Akron OH homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Akron OH section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/akron-oh/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Akron OH Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-akron-oh-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Akron OH Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/akron-oh"
        />
      </div>
    </>
  );
}
