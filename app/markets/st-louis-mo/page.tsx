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
import { stLouisLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast St. Louis MO — Cash Offer, No Transfer Tax',
  description:
    'We buy houses in St. Louis City MO for cash, as-is. No Missouri transfer tax. Written offer in 24 hours, close in 7 days. No repairs, no fees.',
  alternates: { canonical: `${SITE_URL}/markets/st-louis-mo` },
};

const TESTIMONIALS = [
  {
    quote: "I owned a South City two-flat in Dutchtown — brick, 1920s, needed everything. USA Home Buyers made a written offer in 24 hours. No inspection contingencies, no repair demands. We closed in 10 days. The no-transfer-tax math was a nice bonus.",
    name: "Clarence R.",
    location: "Dutchtown, St. Louis MO",
    situation: "Rental Property — Landlord Exit",
    date: "March 2026",
  },
  {
    quote: "My mother owned a Benton Park row house since 1965. After she passed, the 22nd Circuit Court handled the estate. USA Home Buyers worked with our attorney around the probate calendar and bought the brick home as-is. Closed within two weeks of authorization.",
    name: "Sandra T.",
    location: "Benton Park, St. Louis MO",
    situation: "Inherited Property — St. Louis City Circuit Court Probate",
    date: "February 2026",
  },
  {
    quote: "I was behind on payments and the non-judicial foreclosure clock was moving. Missouri's deed of trust process moves fast — about 60 days from notice to sale. USA Home Buyers closed in 8 days. I protected my equity.",
    name: "Anthony M.",
    location: "Shaw, St. Louis MO",
    situation: "Pre-Foreclosure — Missouri Non-Judicial Process",
    date: "January 2026",
  },
  {
    quote: "Divorce, court order to sell. My ex-spouse and I agreed on the cash offer because it removed all the variables. USA Home Buyers closed in 12 days. Clean.",
    name: "Renee and James K.",
    location: "Tower Grove South, St. Louis MO",
    situation: "Divorce Sale — Court-Ordered",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$30K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$12,500–$15,000 on $250K)' },
  { label: 'MO transfer tax', cashBuyer: '$0 — Missouri has no transfer tax', traditional: '$0 — Missouri has no transfer tax' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–80% of FMV before property-specific adjustments', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in St. Louis City MO?',
    answer: "USA Home Buyers can close in as few as 7 days in St. Louis City. Written cash offer within 24 hours. Missouri primarily uses non-judicial foreclosure via deed of trust — once the notice of trustee's sale is published, the sale can happen in as little as 60 days. A cash sale before that point protects your equity. Call 888-274-5006.",
  },
  {
    question: 'Does Missouri have a real estate transfer tax?',
    answer: "No. Missouri has no state real estate transfer tax — and neither St. Louis City nor St. Louis County imposes a local deed transfer tax. This is a significant seller advantage compared to neighboring Illinois, Pennsylvania, or other states. City recording fees still apply, but no transfer tax.",
  },
  {
    question: 'What is the difference between St. Louis City and St. Louis County?',
    answer: "St. Louis City and St. Louis County are completely separate jurisdictions with different governments, courts, recorders, and tax systems. St. Louis City is an independent city — it is NOT part of St. Louis County. City government is at City Hall, 1200 Market Street. The City Circuit Court (22nd Judicial Circuit) is located at 10 N. Tucker Blvd., (314) 622-4498. St. Louis County has its own separate government in Clayton, MO. When selling a City of St. Louis property, all filings go through City offices — never County offices.",
  },
  {
    question: 'How does foreclosure work in Missouri?',
    answer: "Missouri primarily uses non-judicial (power of sale) foreclosure via deed of trust under RSMo § 443.310. The trustee advertises the sale in a local newspaper for three consecutive weeks and can conduct the sale without court involvement. Typical timeline: 60–90 days from notice. Note: Missouri's RSMo § 443.410 redemption provisions involve specific conditions and contexts — consult a Missouri-licensed real estate attorney for guidance on redemption rights in your specific situation.",
  },
  {
    question: 'What is the probate process for selling a house in St. Louis City?',
    answer: "For properties in St. Louis City, probate is handled by the St. Louis City Circuit Court (22nd Judicial Circuit), 10 N. Tucker Blvd., St. Louis MO 63101, (314) 622-4498. This is the City court — NOT the St. Louis County Probate Court in Clayton (21st Judicial Circuit). Missouri small estate procedures have a threshold — consult an attorney for the current amount before filing. Cash buyers can purchase probate properties directly once the court authorizes the sale.",
  },
  {
    question: 'What areas in St. Louis do you buy in?',
    answer: "We serve St. Louis City neighborhoods — Dutchtown, South City, Benton Park, Shaw, Tower Grove, The Hill, Soulard, Compton Heights, Cherokee Street corridor, North St. Louis, Baden, Hyde Park, Old North STL, and surrounding City neighborhoods. Call 888-274-5006.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. St. Louis City has some of the most architecturally distinctive housing stock in the Midwest — 1890s–1930s red-brick Federals, South City bungalows, and two-flats. Many carry deferred maintenance. We buy them as-is. No repairs, no cleaning, no staging.",
  },
];

export default function StLouisMOMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in St. Louis City MO',
    description: 'Step-by-step process for selling your St. Louis City home for cash — no transfer tax',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your St. Louis City property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at a St. Louis City title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          stLouisLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'We Buy Houses in St. Louis, Missouri — USA Home Buyers',
            description: 'Cash offers for St. Louis City homes — Dutchtown, South City, The Hill, any condition',
            contentUrl: `${SITE_URL}/videos/st-louis-mo/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/videos/st-louis-mo/landing-poster.jpg`,
            uploadDate: '2026-05-03',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/st-louis-mo-hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/st-louis-mo-hero.webp"
            alt="St. Louis MO homes — red brick row houses in South City"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="text-blue-300 text-sm font-medium mb-2">Missouri Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              We Buy Houses in St. Louis, Missouri — Cash Offers, No Transfer Tax, Close Fast
            </h1>
          </div>
          <div className="w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your St. Louis City Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. No transfer tax." sourcePage="/markets/st-louis-mo" />
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in St. Louis City, MO — Dutchtown, South City, Benton Park, Shaw, Tower Grove, The Hill, Soulard, North St. Louis, and all City neighborhoods. Written cash offer in 24 hours. Close in 7–14 days. Missouri has no state or local transfer tax. According to Redfin (March 2026), St. Louis City's median sale price is $250,000. St. Louis City is an independent city — separate from St. Louis County. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in St. Louis City in any condition — brick Federals, bungalows, two-flats, rentals, estates. No repairs, no agent fees, no transfer tax.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <VideoEmbed
          src="/videos/st-louis-mo/landing.mp4"
          title='We Buy Houses in St. Louis, Missouri — USA Home Buyers'
          poster="/videos/st-louis-mo/landing-poster.jpg"
          subtitle='Cash offers for St. Louis City homes — Dutchtown, South City, The Hill, any condition'
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Need to sell your house fast in St. Louis, Missouri? USA Home Buyers purchases homes as-is for cash throughout St. Louis City — Dutchtown, South City, Soulard, Benton Park, Shaw, Tower Grove, The Hill, Cherokee Street, North St. Louis, and surrounding City neighborhoods.</p>
            <p className="mb-3">No agents, no fees, no repairs. St. Louis City is independent from St. Louis County, and all transactions go through City offices.</p>
            <p className="mb-3">Missouri has no transfer tax, which can be a real advantage at closing. Missouri uses non-judicial foreclosure; once the trustee's sale notice is published, the sale can happen in 60–90 days.</p>
            <p className="mb-3">A cash sale before that can help preserve your equity. We provide a written cash offer in 24 hours, and if the offer works for you, we can close in as few as 7 days. Call USA Home Buyers at 888-274-5006.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">St. Louis City Real Estate Market — What Sellers Need to Know</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-bold text-brand-primary mb-2">⚠️ St. Louis City ≠ St. Louis County</p>
            <p className="text-sm text-gray-700">
              St. Louis City is an independent city in Missouri — it is NOT part of St. Louis County. They are completely separate jurisdictions with different governments, courts, recorders, and tax rates. All content on this page applies to <strong>St. Louis City only</strong>. The City Circuit Court (22nd Judicial Circuit, 10 N. Tucker Blvd.) is the City court. The County Probate Court (21st Judicial Circuit, 7900 Carondelet Ave., Clayton) serves St. Louis County — a different jurisdiction entirely.
            </p>
          </div>

          <p className="text-gray-700 mb-4">
            According to <a href="https://www.redfin.com/city/17041/MO/Saint-Louis/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, St. Louis City's median sale price is $250,000 with 31 days on market, a sale-to-list ratio of 98.5%, and a Compete Score of 73. Missouri has <strong>no state real estate transfer tax</strong> and St. Louis City imposes no local deed transfer tax — a meaningful seller advantage compared to neighboring Illinois or Pennsylvania.
          </p>
          <p className="text-gray-700 mb-4">
            Missouri primarily uses <strong>non-judicial (power of sale) foreclosure</strong> via deed of trust under RSMo § 443.310. The trustee publishes notice in a local newspaper for three consecutive weeks and can conduct the sale without court involvement — typical timeline 60–90 days from notice. Probate for St. Louis City properties goes through the 22nd Circuit Court (City court), not the County court in Clayton.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">St. Louis City</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$250,000</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">31 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">98.5%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">73 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Missouri transfer tax</td><td className="p-3">$0 — Missouri has no state or local real estate transfer tax</td><td className="p-3 text-gray-500">Missouri law / deedclaim.com</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial (deed of trust) — RSMo § 443.310; ~60–90 days from notice</td><td className="p-3 text-gray-500">Missouri Revised Statutes</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Probate court (City)</td><td className="p-3">St. Louis City Circuit Court (22nd Judicial Circuit) — 10 N. Tucker Blvd., St. Louis MO 63101; (314) 622-4498</td><td className="p-3 text-gray-500">Missouri Courts</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Missouri title companies handle most residential closings</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Jurisdiction</td><td className="p-3">St. Louis City — independent city, NOT St. Louis County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in St. Louis City in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/st-louis-mo/inherited-property', description: 'Sell an inherited St. Louis City home through the 22nd Circuit Court' },
            { label: 'Going Through Divorce', href: '/markets/st-louis-mo/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/st-louis-mo/foreclosure', description: 'Missouri non-judicial foreclosure — sell before the trustee sale' },
            { label: 'Probate Sale', href: '/markets/st-louis-mo/probate', description: 'St. Louis City 22nd Circuit Court — city probate, not County' },
            { label: 'Tenant-Occupied Property', href: '/markets/st-louis-mo/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/st-louis-mo/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/st-louis-mo/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What St. Louis City Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in St. Louis City</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $250,000 St. Louis City median-sale home, a 5–6% agent commission runs $12,500–$15,000. Missouri's $0 transfer tax is a genuine advantage — no transfer tax at any level. Average homes sell for about 2% below list with a 31-day DOM. A direct cash sale eliminates commissions, repair costs, and carrying costs entirely (Redfin, Mar 2026).
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">St. Louis City Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout St. Louis City neighborhoods:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Dutchtown', 'South City', 'Benton Park', 'Shaw', 'Tower Grove South', 'Tower Grove East', 'The Hill', 'Soulard', 'Compton Heights', 'Cherokee Street', 'South Grand', 'Carondelet', 'North St. Louis', 'Baden', 'Hyde Park', 'Old North St. Louis', 'Gravois Park', 'Botanical Heights'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            All neighborhoods listed are within St. Louis City limits — an independent city jurisdiction separate from St. Louis County. City government: City Hall, 1200 Market Street, St. Louis MO 63103.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in St. Louis City MO" />

        <BlogClusterLinks marketSlug="st-louis-mo" cityName="St. Louis MO" />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-brand-primary mb-2">St. Louis MO mini-site</p>
              <h2 className="text-2xl font-bold text-brand-dark mb-2">Seller resources for St. Louis City homeowners</h2>
              <p className="text-gray-700 max-w-3xl">
                Stay in the St. Louis MO section for local market data, situation pages, seller guides, and articles before you decide whether a cash offer or listing makes more sense.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/markets/st-louis-mo/resources" className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors">
                St. Louis MO Resources
              </Link>
              <Link href="/guides/sell-house-fast-st-louis-mo-2026" className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors">
                Local Guide
              </Link>
            </div>
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your St. Louis City Cash Offer?"
          subheadline="No obligation. No fees. No transfer tax. Written offer in 24 hours."
          sourcePage="/markets/st-louis-mo"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
