import type { Metadata } from 'next';

import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { VideoEmbed } from '@/components/VideoEmbed';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { erieLocalBusinessSchema, erieFAQSchema, erieHowToSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Erie PA',
  description:
    'We buy houses in Erie PA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Erie County — 77% pre-1970 homes, any condition.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa` },
  openGraph: {
    images: [{ url: '/images/erie-pa-hero.jpg', width: 1200, height: 630, alt: 'Erie PA home — Sell Your House Fast in Erie PA' }],
  },
};

const TESTIMONIALS = [
  {
    "quote": "My dad's house on East 26th Street had been sitting empty for two years after he passed. Old knob-and-tube wiring, a leaky roof, and none of us lived in Erie anymore. USA Home Buyers gave us a fair cash offer and we closed in 11 days. We didn't touch a thing.",
    "name": "Robert D.",
    "location": "Glenwood, Erie PA",
    "situation": "Inherited Property — Estate Sale",
    "date": "March 2026"
  },
  {
    "quote": "I was behind on my mortgage with a sheriff sale looming. I didn't realize I still had equity or that I had options. USA Home Buyers explained everything clearly, the offer was fair, and we closed in 9 days — the foreclosure was dismissed at closing.",
    "name": "Diane M.",
    "location": "West Bayfront, Erie PA",
    "situation": "Pre-Foreclosure — Behind on Mortgage",
    "date": "February 2026"
  },
  {
    "quote": "Lawrence Park house, divorce, court order to sell. We hadn't spoken in months except through lawyers. USA Home Buyers sent one offer — we both said yes, separately, through our attorneys — and closed in fourteen days. Didn't have to share a room with my ex once.",
    "name": "Tamara N.",
    "location": "Lawrence Park, Erie PA",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "September 2025"
  },
  {
    "quote": "Had a rental near Little Italy that the tenant hadn't paid rent on in six months and wouldn't leave. USA Home Buyers bought it with the tenant in place. That was it — done.",
    "name": "Gary S.",
    "location": "Erie, PA",
    "situation": "Rental Property — Problem Tenant",
    "date": "January 2026"
  },
  {
    "quote": "Wabtec called with an offer from their Pittsburgh headquarters. I had about six weeks before I needed to be there. My Millcreek house was fine — nothing wrong with it — but the timing meant I couldn't wait for a traditional buyer. USA Home Buyers closed in eleven days. Covered both situations for a total of eleven days. That's a bargain.",
    "name": "Brian C.",
    "location": "Millcreek Township, Erie PA",
    "situation": "Relocation — Corporate Transfer",
    "date": "April 2025"
  },
  {
    "quote": "The upstairs bathroom had been leaking into the kitchen ceiling for longer than I want to admit. When the ceiling finally came down, we found black mold behind the joists. Remediation company said $38,000 and four weeks of work. I'm sixty-seven and I couldn't deal with that. USA Home Buyers made me a fair offer and closed in eight days.",
    "name": "Helen G.",
    "location": "East Side, Erie PA",
    "situation": "Water Damage — Mold",
    "date": "November 2025"
  },
  {
    "quote": "We'd been in our Wesleyville place for thirty-one years. Raised three kids there. But the property taxes were $4,200 a year and the house had more rooms than we'd ever use again. USA Home Buyers gave us a clean, quick exit. Closed in nine days. We had our equity check before Christmas.",
    "name": "John and Mary A.",
    "location": "Wesleyville, Erie PA",
    "situation": "Downsizing — Empty Nesters",
    "date": "December 2025"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$5,500-$7,000 on $115K home)' },
  { label: 'Transfer tax (2%)', cashBuyer: 'We cover everything', traditional: 'Seller pays ~1% local portion' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '60-75% of ARV (after repairs)', traditional: '85-90% of FMV (before costs)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Erie PA?',
    answer: "Once you accept a written offer, we typically close in 7-14 days. We send the written offer within 24 hours of your inquiry. Because we pay cash — no bank financing, no mortgage contingency — there's no waiting on lender approval.",
  },
  {
    question: "What is Erie PA's transfer tax?",
    answer: "Erie PA has Pennsylvania's standard 2% transfer tax — 1% PA state tax plus 1% local tax. By convention this is split 50/50 between buyer and seller (1% each). On a $115,000 home, your share is $1,150. When you sell to us, we cover all closing costs including the full transfer tax. Source: PA Department of Revenue, pa.gov.",
  },
  {
    question: 'How much will you pay for my Erie house?',
    answer: "Cash offers for Erie homes typically range from 60-75% of after-repair value. Erie's urban core median is around $115,000-$120,000 (DataUSA 2024). For an average urban Erie home, a cash offer is typically $70,000-$90,000. Suburban Millcreek homes ($250,000-$300,000 range) yield offers of $175,000-$225,000. We cover all closing costs — no agent commissions, no fees.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Erie's housing stock is 77% pre-1970 — old electrical, aging plumbing, deferred winter maintenance, ice dam damage, and outdated systems are common. We buy in any condition. You don't need to repair, clean, or stage anything. Take what you want, leave the rest.",
  },
  {
    question: 'What neighborhoods in Erie do you buy in?',
    answer: 'All of Erie and Erie County — Little Italy, West Bayfront, Glenwood, Southeast Erie, Downtown, Central Eastside, and the Millcreek corridor. We also serve Harborcreek, Lawrence Park, Wesleyville, North East, Girard, Fairview, Edinboro, Corry, Union City, and Waterford.',
  },
  {
    question: "What if my Erie home has code violations or snow/weather damage?",
    answer: "We buy houses with open code violations. Erie gets 104+ inches of snow per year — roof damage, ice dam issues, foundation problems, and deferred winter maintenance are common. These don't prevent a cash sale, they just get factored into our offer.",
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: "We're a legitimate Pennsylvania LLC with a verifiable history of closed sales. Every offer we make is in writing — a formal purchase agreement with price, terms, and closing date. You can verify our Pennsylvania business registration at corporations.pa.gov.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: "We call you within hours during business hours. We'll ask 5-10 questions about the property — condition, situation, timeline. Within 24 hours, you receive a written cash offer. No pressure. The offer stands on its own.",
  },
];

export default function ErieMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[erieLocalBusinessSchema, erieFAQSchema, erieHowToSchema]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/erie-pa-hero-640.jpg 640w, /images/optimized/erie-pa-hero-828.jpg 828w, /images/optimized/erie-pa-hero-1080.jpg 1080w, /images/optimized/erie-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/erie-pa-hero-1200.jpg"
            alt="Erie PA home — we buy houses fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in Erie, PA — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Erie PA and throughout Erie County — West Bayfront, Glenwood, Little Italy, Southeast Erie, and the Millcreek corridor including Lawrence Park and Wesleyville. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. Erie urban-core home values are typically around $115,000 to $120,000, with suburban Millcreek homes often much higher. We cover all closing costs including Erie&apos;s 2% transfer tax. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              USA Home Buyers purchases houses throughout Erie PA and Erie County for cash in any condition —
              no repairs, no cleaning, no agent fees. Cape Cods, bungalows, and aging single-family homes.
              Written cash offer within 24 hours, close in as few as 7 days.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ No repairs</span>
              <span>✓ No commissions</span>
              <span>✓ We pay all closing costs</span>
              <span>✓ Close in 7 days</span>
              <span>✓ Any condition</span>
            </div>
            <a href={`tel:${PHONE}`} className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/erie-pa" />
          </div>
        </div>
      </section>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Market Data — moved up to establish credibility early */}
        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Erie PA Housing Market — 2026 Data
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Median home value — DataUSA ACS', '$115,000–$120,000'],
                  ['Median sale price — Redfin (Feb 2026, 16503)', '$81,000'],
                  ['Median sale price — Redfin (Feb 2026, 16505)', '$300,000'],
                  ['Median sale price — Redfin (Feb 2026, 16509)', '$245,000'],
                  ['Median days on market (urban core)', '42 days'],
                  ['Median days on market (Millcreek/west, 16505)', '20 days'],
                  ['Compete Score (Redfin)', '71-81/100 — Very Competitive'],
                  ['Cash offer range (urban Erie home)', '$70,000–$90,000'],
                  ['Erie transfer tax', '2% total (1% state + 1% local) — standard PA rate'],
                  ['Typical realtor commission', '5–6%'],
                  ['Housing stock age', '77% built before 1970'],
                  ['Homeownership rate', '~50%'],
                  ['Poverty rate', '~23%'],
                  ['Annual snowfall', '104+ inches (3rd snowiest US city)'],
                ].map(([metric, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark rounded-l">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary rounded-r">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400">Market data last updated: April 2026</p>
          <p className="mt-2 text-sm text-gray-600">
            Erie&apos;s market is bifurcated — the urban core has affordable but often distressed housing, while the Millcreek corridor has moved to mid-market prices. For sellers with older homes in any condition, cash buyers offer speed and certainty that the traditional market can&apos;t match.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/markets/erie-pa/market-report" className="text-brand-primary hover:underline">
              See the full Erie PA market report →
            </Link>
          </p>
        </section>

        {/* Why Erie Homeowners Choose Cash Buyers */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Why Erie Homeowners Choose Cash Buyers
          </h2>
          <p className="text-gray-700 mb-4">
            Erie isn&apos;t Allentown or Reading. It&apos;s a Rust Belt city on Lake Erie — and that shapes everything about
            its housing market. Three structural facts drive cash buyer demand here:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Pre-1970 housing', value: '77%', note: 'Aging systems, deferred maintenance, snow damage' },
              { label: 'Renter-occupied', value: '~50%', note: 'Highest landlord exit rate in northwest PA' },
              { label: 'Poverty rate', value: '~23%', note: 'Near-2x national average — financial distress common' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-blue-100 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-brand-dark">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            Traditional buyers want move-in-ready homes. Erie has a lot of homes that aren&apos;t — old electrical,
            aging plumbing, roofs battered by 104 inches of snow per year, deferred maintenance from owners who
            couldn&apos;t keep up. Cash buyers like us are frequently the most realistic path to a sale, and we can
            close in days rather than months.
          </p>
        </section>

        <VideoEmbed
          src="/videos/erie-pa-main.mp4"
          title="Sell Your House Fast in Erie, PA"
          poster="/videos/erie-pa-main-poster.jpg"
          subtitle="See how we help homeowners in Erie sell fast for cash"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p>Video transcript coming soon.</p>
          </div>
        </details>

        {/* How It Works */}
        <HowItWorks heading="How Selling Your Erie PA House for Cash Works" />

        {/* Situations */}
        <SituationLinks
          heading="We Buy Houses in Erie in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/erie-pa/inherited-property', description: 'Sell an inherited home fast without repairs or hassle' },
            { label: 'Going Through Divorce', href: '/markets/erie-pa/divorce-sale', description: 'Close quickly and split proceeds — minimal conflict' },
            { label: 'Behind on Mortgage', href: '/markets/erie-pa/foreclosure', description: 'Sell before the sheriff sale, protect your credit' },
            { label: 'Tenant-Occupied Property', href: '/markets/erie-pa/tenant-occupied', description: 'We buy with tenants still in place — no eviction needed' },
            { label: 'Needs Repairs (Sell As-Is)', href: '/guides/sell-as-is', description: 'Foundation, roof, mold — we buy it anyway' },
            { label: 'Back Taxes or Liens', href: '/guides/back-taxes', description: 'Unpaid taxes and liens get handled at closing' },
            { label: 'Relocating', href: '/guides/relocation', description: 'Job start date? We close fast to meet your timeline' },
            { label: 'Vacant Property', href: '/guides/vacant-property', description: 'Stop paying taxes on a property you can\'t use' },
            { label: 'Probate Sale', href: '/markets/erie-pa/probate', description: 'We work with estate attorneys and executors regularly' },
          ]}
        />

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Erie PA Homeowners Are Saying" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Erie PA: The Real Numbers
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $115,000 Erie home, 5-6% agent commissions equal $5,750-$6,900. Add inspection repairs on a
            77%-pre-1970 housing stock, 45-60 days of carrying costs through a cold Erie winter, and the
            gap between a cash offer and a traditional listing can be smaller than most sellers expect.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              See full comparison: Cash Offer vs. Listing in Erie PA →
            </Link>
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Erie PA Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs."
            sourcePage="/markets/erie-pa"
          />
        </section>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Erie PA Home for Cash" />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Erie and Erie County
          </h2>
          <p className="text-gray-700 mb-4">
            Our primary market is Erie proper — Little Italy, West Bayfront, Glenwood, Southeast Erie,
            Downtown Erie, and the Central Eastside. We know these neighborhoods, the older Cape Cods and
            bungalows, the pre-war worker housing, and the challenges that come with it.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve the surrounding Erie County communities: Millcreek Township and Harborcreek
            (immediately adjacent), plus Lawrence Park, Wesleyville, North East, Girard, Fairview,
            Edinboro, Corry, Union City, and Waterford further out.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'Erie', 'Millcreek Township', 'Harborcreek', 'Lawrence Park', 'Wesleyville',
              'North East', 'Girard', 'Fairview', 'Edinboro', 'Corry', 'Union City', 'Waterford', 'McKean',
            ].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        {/* Neighborhoods link */}
        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Erie Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">
            From Little Italy to the Millcreek corridor to Downtown Erie — we buy in every Erie neighborhood.
          </p>
          <Link href="/markets/erie-pa/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">
            See neighborhood-by-neighborhood price ranges and market data →
          </Link>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks marketSlug="erie-pa" cityName="Erie" />

        {/* Guided Survey Form */}
        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for your Erie PA home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/erie-pa" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Erie PA Home?" sourcePage="/markets/erie-pa" />
        </section>
      </div>
    </>
  );
}
