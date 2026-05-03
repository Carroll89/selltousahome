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
import { daytonLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Dayton OH — Cash Offer in 24 Hours',
  description:
    'We buy houses in Dayton OH for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Montgomery County.',
  alternates: { canonical: `${SITE_URL}/markets/dayton-oh` },
};

const TESTIMONIALS = [
  {
    quote: "My father owned a home in West Dayton since 1978. After he passed, we had to go through Montgomery County Probate Court. The house needed a new roof and the plumbing was decades old. USA Home Buyers made a written offer in 24 hours and waited through the probate timeline. They bought it exactly as-is — fifty years of belongings included. Closed twelve days after letters were issued.",
    name: "LaShonda T.",
    location: "West Dayton, OH",
    situation: "Inherited Property — Montgomery County Probate",
    date: "March 2026",
  },
  {
    quote: "I was two months behind and the Montgomery County Common Pleas foreclosure clock was ticking. USA Home Buyers gave me a written offer the morning I called. We closed in 9 days. I walked away with cash instead of losing everything.",
    name: "Dennis P.",
    location: "Grafton Hill, Dayton OH",
    situation: "Pre-Foreclosure — Ohio Judicial Process",
    date: "February 2026",
  },
  {
    quote: "Divorce was finalized and the Dayton house had to go. My ex and I could barely agree on anything, but we both accepted the one cash offer. USA Home Buyers had attorneys on both sides sign off. Eleven days from offer to closed.",
    name: "Monique and Terry W.",
    location: "Northwest Dayton, OH",
    situation: "Divorce Sale — Court-Ordered",
    date: "January 2026",
  },
  {
    quote: "I owned a rental near University Row. Non-paying tenant, slow eviction process, property falling apart. USA Home Buyers bought it tenant-occupied as-is. Ten days. Done.",
    name: "Marcus B.",
    location: "University Row, Dayton OH",
    situation: "Rental Property — Non-Paying Tenant",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$20K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$6,500–$7,800 on $130K)' },
  { label: 'OH conveyance fee', cashBuyer: 'We cover everything', traditional: '$4.00/$1,000 + $0.50/parcel (Montgomery County)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–82% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Dayton OH?',
    answer: "USA Home Buyers can close in as few as 7 days in Dayton. Written cash offer within 24 hours. Ohio judicial foreclosure runs through Montgomery County Court of Common Pleas — once you're facing a scheduled sheriff sale, options narrow fast. A cash sale before judgment preserves equity. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Dayton OH home?',
    answer: "Cash offers typically range from 70–82% of fair market value. According to Redfin (March 2026), Dayton's median sale price is $130,000 with a Compete Score of 62/100 and 63 days on market. We provide a written offer based on comparable sales and condition. We cover all closing costs including Montgomery County's conveyance fee.",
  },
  {
    question: 'What is the conveyance fee when selling in Montgomery County OH?',
    answer: "Montgomery County charges a conveyance fee of $4.00 per $1,000 of sale price plus $0.50 per parcel. The fee is paid to the Montgomery County Auditor and DTE Form 100 is required before deed recording. On a $130,000 Dayton home, that's approximately $520. When you sell to USA Home Buyers, we cover all closing costs. Source: Montgomery County Auditor (mcohio.org).",
  },
  {
    question: 'How does foreclosure work in Montgomery County OH?',
    answer: "Ohio mortgage foreclosure is judicial — the lender files in Montgomery County Court of Common Pleas (41 N. Perry St., Dayton OH 45422). Ohio HB 130 requires mediation referral for residential foreclosures. After judgment, the property goes to sheriff sale. Typical timeline from default to sheriff sale: 9–12 months. Consult an Ohio-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'What areas near Dayton do you buy in?',
    answer: "All of Montgomery County and surrounding areas: Dayton, Kettering, Beavercreek, Huber Heights, Fairborn, Centerville, Miamisburg, Springboro, Trotwood, Vandalia, Riverside, West Carrollton, Xenia (Greene County), and surrounding communities. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Dayton's housing stock includes a large percentage of pre-1950s homes — bungalows, American Foursquares, and craftsman-era houses in West Dayton, Wright-Dunbar, and Grafton Hill that often have deferred maintenance. We buy in any condition. No repairs, no cleaning, no staging required.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function DaytonOHMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Dayton OH',
    description: 'Step-by-step process for selling your Dayton home for cash in Montgomery County, Ohio',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Dayton property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Montgomery County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          daytonLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Dayton OH — USA Home Buyers',
            description: 'Cash offers for Dayton and Montgomery County homes — any condition, any neighborhood',
            contentUrl: `${SITE_URL}/videos/dayton-oh/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/videos/dayton-oh/landing-poster.jpg`,
            uploadDate: '2026-05-03',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/dayton-oh-hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/dayton-oh-hero.webp"
            alt="Dayton OH homes — 1940s bungalows and residential neighborhoods in Montgomery County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Ohio Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Dayton OH — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Dayton OH and throughout Montgomery County — West Dayton, Wright-Dunbar, Grafton Hill, University Row, Five Oaks, Belmont, and surrounding communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Dayton's median sale price is $130,000 with 63 days on market. We cover all closing costs including Montgomery County's conveyance fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Dayton and Montgomery County in any condition — older bungalows, pre-1950s stock, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Dayton OH Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/dayton-oh" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-03 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Max fallback generation */}
        <VideoEmbed
          src="/videos/dayton-oh/landing.mp4"
          title='Sell My House Fast Dayton OH — USA Home Buyers'
          poster="/videos/dayton-oh/landing-poster.jpg"
          captionsSrc="/videos/dayton-oh/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle='Cash offers for Dayton and Montgomery County homes — any condition, any neighborhood'
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Need to sell your house fast in Dayton, Ohio? USA Home Buyers purchases homes as-is for cash throughout Montgomery County — West Dayton, Grafton Hill, Wright-Dunbar, University Row, Five Oaks, and surrounding areas.</p>
            <p className="mb-3">No agents, no fees, no repairs.</p>
            <p className="mb-3">Ohio is a judicial foreclosure state — once the clock starts in Montgomery County Court of Common Pleas, options narrow fast.</p>
            <p className="mb-3">A cash sale before judgment stops the process and protects your equity.</p>
            <p className="mb-3">We also handle estate properties, tenant-occupied rentals, divorce sales, and homes with code violations.</p>
            <p className="mb-3">Written cash offer in 24 hours.</p>
            <p className="mb-3">Close in 7 days.</p>
            <p className="mb-3">We cover all closing costs including Montgomery County's conveyance fee.</p>
            <p className="mb-3">Call 888-274-5006.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Dayton OH Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Dayton is the county seat of Montgomery County, Ohio, and home to Wright-Patterson Air Force Base — the largest single-site employer in Ohio. According to <a href="https://www.redfin.com/city/5263/OH/Dayton/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $130,000 with 63 days on market, a sale-to-list ratio of 95.7%, and a Compete Score of 62. Dayton's housing stock is predominantly pre-1950s — bungalows, Craftsman frames, and American Foursquares that carry character and often carry significant repair needs.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio sellers pay a conveyance fee rather than a transfer tax. Montgomery County charges <strong>$4.00 per $1,000</strong> of sale price (state $1.00 + county permissive $3.00 per ORC §§ 319.202 and 322.02) plus $0.50 per parcel, paid to the <a href="https://www.mcohio.org/government/elected_officials/auditor/real_estate/transfer.cfm" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Montgomery County Auditor</a>. DTE Form 100 must be submitted before deed recording. Ohio uses judicial foreclosure — all Montgomery County foreclosures run through Montgomery County Court of Common Pleas (41 N. Perry St., Dayton OH 45422).
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Dayton OH</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$130,000</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">63 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">95.7%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">62 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">OH conveyance fee</td><td className="p-3">$4.00/$1,000 + $0.50/parcel (Montgomery County Auditor)</td><td className="p-3 text-gray-500">Montgomery County Auditor (mcohio.org)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Montgomery County Court of Common Pleas; HB 130 mediation referral required</td><td className="p-3 text-gray-500">Ohio Revised Code</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Probate court</td><td className="p-3">Montgomery County Probate Court — 41 N. Perry St., 2nd Floor, Dayton OH 45422; (937) 225-4640</td><td className="p-3 text-gray-500">Montgomery County Probate Court</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Ohio is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Montgomery County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Dayton OH in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/dayton-oh/inherited-property', description: 'Sell an inherited Dayton home through Montgomery County Probate Court' },
            { label: 'Going Through Divorce', href: '/markets/dayton-oh/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/dayton-oh/foreclosure', description: 'Ohio judicial foreclosure — sell before the Montgomery County sheriff sale' },
            { label: 'Probate Sale', href: '/markets/dayton-oh/probate', description: 'We work with Montgomery County Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/dayton-oh/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/dayton-oh/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/dayton-oh/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Dayton OH Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Dayton OH</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $130,000 Dayton median-sale home, a 5–6% agent commission runs $6,500–$7,800. Add Montgomery County's $4.00/$1,000 conveyance fee (~$520), carrying costs during 63 days on market, and repairs to pre-1950s housing stock. A direct cash sale eliminates those costs entirely. Average Dayton homes sell for about 4% below list price with a 63-day median DOM (Redfin, Mar 2026).
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Dayton OH Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Dayton and the surrounding Montgomery County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['West Dayton', 'Wright-Dunbar', 'Grafton Hill', 'University Row', 'Five Oaks', 'Belmont', 'Old North Dayton', 'Trotwood', 'Kettering', 'Beavercreek', 'Huber Heights', 'Fairborn', 'Centerville', 'Miamisburg', 'Springboro', 'Vandalia', 'Riverside', 'West Carrollton'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Wright-Patterson Air Force Base is located just east of Dayton in Fairborn — the largest single-site employer in Ohio creates a steady relocation and PCS seller market throughout the metro area.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Dayton OH" />

        <BlogClusterLinks marketSlug="dayton-oh" cityName="Dayton OH" />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-brand-primary mb-2">Dayton OH mini-site</p>
              <h2 className="text-2xl font-bold text-brand-dark mb-2">Seller resources for Dayton OH homeowners</h2>
              <p className="text-gray-700 max-w-3xl">
                Stay in the Dayton OH section for local market data, situation pages, seller guides, and articles before you decide whether a cash offer or listing makes more sense.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/markets/dayton-oh/resources" className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors">
                Dayton OH Resources
              </Link>
              <Link href="/guides/sell-house-fast-dayton-oh-2026" className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors">
                Local Guide
              </Link>
            </div>
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Dayton OH Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/dayton-oh"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
