/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { chambersburgLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Chambersburg PA — Cash Offer in 24 Hours',
  description:
    'We buy houses in Chambersburg PA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Franklin County.',
  alternates: { canonical: `${SITE_URL}/markets/chambersburg-pa` },
};

const TESTIMONIALS = [
  {
    quote: "My aunt owned a house on Lincoln Way East for over 30 years. After she passed, we had to go through Franklin County Orphans' Court — the Register & Recorder at 157 Lincoln Way East handled the estate filings. The house needed a new roof and the kitchen hadn't been updated since the 1980s. USA Home Buyers closed eleven days after we got our Letters Testamentary. Clean and done.",
    name: "Margaret C.",
    location: "Downtown Chambersburg, PA",
    situation: "Inherited Property — Estate Sale",
    date: "February 2026",
  },
  {
    quote: "I was behind on the mortgage and facing Pennsylvania judicial foreclosure — which goes through Franklin County Court of Common Pleas and can take 9 to 18 months. That's a long time to wait. USA Home Buyers gave me a written offer in 24 hours. We closed before the foreclosure process went further. I kept my equity.",
    name: "James R.",
    location: "Fayetteville, PA",
    situation: "Pre-Foreclosure — Pennsylvania Judicial",
    date: "March 2026",
  },
  {
    quote: "Divorce settlement required the house sold. My ex and I couldn't coordinate anything, but we both signed the purchase agreement from USA Home Buyers on the same day. One offer, one closing. The attorneys handled the distribution of proceeds. Done in 12 days.",
    name: "Patricia and Gary M.",
    location: "Guilford Township, PA",
    situation: "Divorce Sale — Settlement Required",
    date: "January 2026",
  },
  {
    quote: "I own a small rental in the historic district. The tenant stopped paying and stopped maintaining the place. Pennsylvania eviction takes weeks even in clear cases. USA Home Buyers bought it with the tenant still there. Ten days from first call to closing. I didn't have to manage a single showing.",
    name: "Harold T.",
    location: "Chambersburg Historic District, PA",
    situation: "Rental Property — Problem Tenant",
    date: "October 2025",
  },
  {
    quote: "I moved to Maryland for work but kept my Chambersburg house thinking I'd come back. Didn't. After two years of carrying it from a distance — paying taxes and insurance on a place I wasn't using — I called USA Home Buyers. Written offer the next morning, closed in nine days. Should have done it sooner.",
    name: "Kevin L.",
    location: "Chambersburg Borough, PA",
    situation: "Relocation — Out-of-State Owner",
    date: "September 2025",
  },
  {
    quote: "Kitchen fire. Insurance paid $19,000 and the restoration contractor said $38,000 minimum. I'm 71 and not taking on a construction project. USA Home Buyers bought it as-is — smoke damage, boarded windows and all — in eight days. Exactly the right solution.",
    name: "Dorothy W.",
    location: "Waynesboro, PA",
    situation: "Fire Damage — Insurance Shortfall",
    date: "November 2025",
  },
  {
    quote: "My parents had a reverse mortgage and I had six months to sell before the loan came due. The estate was in Orphans' Court and I needed a buyer who could wait for Letters. USA Home Buyers did everything right — offered in a day, waited for the court, closed in ten days after Letters issued. The reverse mortgage was paid and the estate kept the difference.",
    name: "Sandra H.",
    location: "Greencastle, PA",
    situation: "Reverse Mortgage / Estate — Franklin County Probate",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$20K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$11,000–$14,000 on $229K)' },
  { label: 'PA transfer tax', cashBuyer: 'We cover everything', traditional: '2% total (1% state + 1% Borough of Chambersburg, seller typically pays 1%)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–80% of FMV', traditional: '83–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Chambersburg PA?',
    answer: "USA Home Buyers can close in as few as 7 days in Chambersburg. Written cash offer within 24 hours. Pennsylvania judicial foreclosure runs through Franklin County Court of Common Pleas and can take 9–18 months — a cash sale gets you out before the court's timeline decides for you. Consult a Pennsylvania-licensed real estate attorney for your specific situation. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Chambersburg PA home?',
    answer: "Cash offers typically range from 65–78% of fair market value. According to Redfin (March 2026), Chambersburg's median sale price is $228,975 with a Compete Score of 79 — the market moves fast for move-in-ready homes. We provide a written offer based on comparable sales and property condition. We cover all closing costs.",
  },
  {
    question: 'What is the transfer tax when selling in Chambersburg PA?',
    answer: "Pennsylvania charges a 1% state real estate transfer tax. The Borough of Chambersburg adds a 1% local transfer tax — confirmed by the Franklin County Assessment Office. Total: 2%. Typically split evenly (seller pays 1%, buyer pays 1%). On a $228,975 home, seller's share is $2,290. When you sell to USA Home Buyers, we cover all closing costs. Source: Pennsylvania Revenue (revenue.pa.gov); Borough of Chambersburg confirmed 1% local rate.",
  },
  {
    question: 'How does foreclosure work in Pennsylvania?',
    answer: "Pennsylvania uses judicial foreclosure. The lender must file in Franklin County Court of Common Pleas. After judgment, there's a sheriff's sale. Typical timeline: 9–18 months from filing, though it varies. Consult a Pennsylvania-licensed real estate attorney for your specific situation. A cash sale before judgment preserves your equity and your credit.",
  },
  {
    question: 'What areas near Chambersburg do you buy in?',
    answer: "All of Franklin County: Chambersburg Borough, Waynesboro, Greencastle, Mercersburg, Shippensburg, Carlisle, Fayetteville, and the surrounding townships. We also buy in neighboring Cumberland County. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Franklin County homes — from the historic district to Waynesboro to Greencastle — often have aging systems, older structural elements, or deferred maintenance. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function ChambersburgPAMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Chambersburg PA',
    description: 'Step-by-step process for selling your Chambersburg home for cash in Franklin County, Pennsylvania',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Chambersburg property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Franklin County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/chambersburg-pa-hero-640.jpg 640w, /images/optimized/chambersburg-pa-hero-828.jpg 828w, /images/optimized/chambersburg-pa-hero-1080.jpg 1080w, /images/optimized/chambersburg-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/chambersburg-pa-hero-1200.jpg"
            alt="Chambersburg PA homes — brick Colonials and residential neighborhoods in Franklin County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Pennsylvania Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Chambersburg PA — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Chambersburg PA and throughout Franklin County — the Borough, Waynesboro, Greencastle, Mercersburg, Shippensburg, and surrounding townships. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Chambersburg's Compete Score is 79 — one of the highest in our Pennsylvania markets. PA transfer tax is 2% total. We cover all closing costs. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Chambersburg and Franklin County in any condition — historic district homes, ranch homes, estates, foreclosures, inherited properties. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Chambersburg PA Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/chambersburg-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Chambersburg PA Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Chambersburg is the county seat of Franklin County, Pennsylvania — the commercial hub of the Cumberland Valley at the crossroads of I-81 and US-30. According to <a href="https://www.redfin.com/city/3879/PA/Chambersburg" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, Chambersburg has a Compete Score of 79 — one of the most competitive markets in our Pennsylvania service area — with hot homes going under contract in just 5 days. The median sale price is $228,975 with volume nearly doubling year-over-year (13 to 24 homes/month). For move-in-ready homes, this market moves. For properties with condition issues, it's a different story.
          </p>
          <p className="text-gray-700 mb-4">
            According to <a href="https://www.revenue.pa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Revenue (revenue.pa.gov)</a>, Pennsylvania charges a 1% state real estate transfer tax. The Borough of Chambersburg confirms a 1% local transfer tax — total 2%, typically split 1%/1% between buyer and seller. The Franklin County recording fee is $92.75 (confirmed at <a href="https://www.franklincountypa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">franklincountypa.gov</a>). Pennsylvania uses judicial foreclosure, which runs through Franklin County Court of Common Pleas — consult a Pennsylvania-licensed real estate attorney for your specific situation.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Chambersburg PA</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$228,975</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Days to pending (hot homes)</td><td className="p-3">5 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">99.1%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">79 / 100 (very competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">PA transfer tax (state)</td><td className="p-3">1% (revenue.pa.gov)</td><td className="p-3 text-gray-500">Pennsylvania Revenue</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Borough of Chambersburg transfer tax</td><td className="p-3">1% (Borough confirmed)</td><td className="p-3 text-gray-500">Franklin County Assessment Office</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Franklin County recording fee</td><td className="p-3">$92.75</td><td className="p-3 text-gray-500">franklincountypa.gov</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (Franklin County Court of Common Pleas)</td><td className="p-3 text-gray-500">Pennsylvania law</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Pennsylvania is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Franklin County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Chambersburg PA in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/chambersburg-pa/inherited-property', description: "Sell an inherited Chambersburg home through Franklin County Orphans' Court" },
            { label: 'Going Through Divorce', href: '/markets/chambersburg-pa/divorce-sale', description: 'One offer, one closing, clean split in Franklin County' },
            { label: 'Facing Foreclosure', href: '/markets/chambersburg-pa/foreclosure', description: 'Pennsylvania judicial foreclosure — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/chambersburg-pa/probate', description: "We work with Franklin County Orphans' Court probate regularly" },
            { label: 'Tenant-Occupied Property', href: '/markets/chambersburg-pa/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/chambersburg-pa/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/chambersburg-pa/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Chambersburg PA Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Chambersburg PA</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $228,975 Chambersburg median-sale home, a 5–6% agent commission runs $11,449–$13,738. Add Pennsylvania's 2% total transfer tax (seller typically pays 1% = $2,290), Franklin County recording fees ($92.75), carrying costs, and repairs. Properties in Chambersburg's historic district or township areas often need updates that conventional buyers price into their offers as contingencies. A cash sale eliminates all of that.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Chambersburg PA Areas We Serve</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Chambersburg Borough', 'Waynesboro', 'Greencastle', 'Mercersburg', 'Shippensburg', 'Carlisle', 'Fayetteville', 'Guilford Township', 'Greene Township', 'Antrim Township', 'St. Thomas Township', 'Peters Township'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-sm text-gray-500">Note: Wayne Heights is in Washington Township near Waynesboro — a separate community from Chambersburg Borough. We serve the broader Franklin County area.</p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Chambersburg PA" />

        <BlogClusterLinks marketSlug="chambersburg-pa" cityName="Chambersburg PA" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Chambersburg PA mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Chambersburg PA homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Chambersburg PA section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/chambersburg-pa/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Chambersburg PA Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-chambersburg-pa-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Chambersburg PA Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/chambersburg-pa"
        />
      </div>
    </>
  );
}
