/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { madisonLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Madison WI — Cash Offer in 24 Hours',
  description:
    'We buy houses in Madison WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Dane County.',
  alternates: { canonical: `${SITE_URL}/markets/madison-wi` },
};

const TESTIMONIALS = [
  {
    quote: "My parents owned a house on Williamson Street for over 30 years. After my mother passed, the Dane County probate process took about five months — Room 1005 at 215 S. Hamilton handles everything. The house needed a new roof and the furnace was from 2004. USA Home Buyers made a written offer in less than a day and closed nine days after we got the Letters Testamentary. We didn't have to do a thing.",
    name: "Susan R.",
    location: "Marquette Neighborhood, Madison WI",
    situation: "Inherited Property — Probate Sale",
    date: "March 2026",
  },
  {
    quote: "I was four months behind on the mortgage. In Wisconsin, foreclosure goes through Dane County Circuit Court and takes about a year from filing — but I couldn't keep paying. USA Home Buyers gave me a written offer in under 24 hours. We closed in 11 days. I walked away with money instead of losing everything at sheriff's sale.",
    name: "Marcus T.",
    location: "South Madison, WI",
    situation: "Pre-Foreclosure — Wisconsin Judicial",
    date: "February 2026",
  },
  {
    quote: "Divorce was final and the judge ordered the house sold. My ex and I couldn't agree on anything, but we both agreed a cash sale was better than dragging it through a listing. USA Home Buyers gave one number, one date. The attorneys handled the split of proceeds. Two weeks from first call to done.",
    name: "Kevin and Donna S.",
    location: "Tenney-Lapham, Madison WI",
    situation: "Divorce Sale — Court-Ordered",
    date: "November 2025",
  },
  {
    quote: "I owned a duplex on Atwood Avenue for eight years. My tenant stopped paying in October and Wisconsin eviction through small claims still takes weeks. USA Home Buyers bought it with the tenant still there. Twelve days, start to finish. I didn't have to manage the eviction or repairs.",
    name: "Patrick O.",
    location: "Atwood/Schenk Neighborhood, Madison WI",
    situation: "Rental Property — Non-Paying Tenant",
    date: "January 2026",
  },
  {
    quote: "Got a position at the UW Health system in Rochester and had to move fast. My Dudgeon-Monroe house had been listed for six weeks — two showings, no offers. USA Home Buyers had a written offer the next morning and we closed before my start date. No repairs, no open houses.",
    name: "Dr. Sarah L.",
    location: "Dudgeon-Monroe, Madison WI",
    situation: "Relocation — Job Transfer",
    date: "September 2025",
  },
  {
    quote: "Chimney fire in February. Took out the attic insulation and part of the second floor had smoke damage. Insurance paid $22,000 — contractor said $45,000 minimum. I'm retired and not financing that. USA Home Buyers bought it as-is in eight days. Exactly what I needed.",
    name: "Walter B.",
    location: "Vilas Neighborhood, Madison WI",
    situation: "Fire Damage — Insurance Shortfall",
    date: "March 2026",
  },
  {
    quote: "My father passed and left a Nakoma house with a reverse mortgage. We had six months to sell before the loan came due. Listing felt too risky with the timeline. USA Home Buyers gave us a cash offer in a day and we closed in 10 days. The reverse mortgage got paid off, and the estate got the rest.",
    name: "Jennifer M.",
    location: "Nakoma, Madison WI",
    situation: "Downsizing / Estate — Reverse Mortgage",
    date: "October 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$20K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$22,000–$27,000 on $453K)' },
  { label: 'WI transfer fee', cashBuyer: 'We cover everything', traditional: '0.3% ($3/$1,000, seller pays)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–80% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Madison WI?',
    answer: "USA Home Buyers can close in as few as 7 days in Madison. Written cash offer within 24 hours. Wisconsin uses judicial foreclosure — which takes about 12 months from filing to sheriff's sale. If you're behind on payments, a cash sale gets you out months before the court process plays out. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Madison WI home?',
    answer: 'Cash offers typically range from 65–78% of fair market value. According to Redfin (March 2026), Madison\'s median sale price is $453,500 — among the highest in the Wisconsin markets we serve. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Wisconsin\'s $3/$1,000 transfer fee.',
  },
  {
    question: 'What is the transfer fee when selling in Madison WI?',
    answer: "Wisconsin charges a real estate transfer fee of $3.00 per $1,000 of sale price. Under Wisconsin Statute §77.256, there is no local add-on — no City of Madison surcharge, no Dane County surcharge. On a $453,500 home, that's $1,360. When you sell to USA Home Buyers, we cover all closing costs including this fee. Source: Wisconsin Department of Revenue (revenue.wi.gov).",
  },
  {
    question: 'How does foreclosure work in Wisconsin?',
    answer: "Wisconsin uses judicial foreclosure. The lender files in Dane County Circuit Court. After a judgment of foreclosure, Wisconsin law provides a redemption period — typically 6 months to 1 year — then a sheriff's sale. Total timeline: about 12 months from filing. Consult a Wisconsin-licensed real estate attorney for your specific situation. Source: Wisconsin Statutes Ch. 846.",
  },
  {
    question: 'What areas near Madison do you buy in?',
    answer: 'All of Dane County: Madison, Fitchburg, Middleton, Sun Prairie, Monona, Verona, Stoughton, DeForest, McFarland, Cottage Grove, and the surrounding communities. Call 888-274-5006 if you\'re not sure we cover your area.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Madison's older housing stock — Craftsman bungalows, American Foursquares, older duplexes near UW-Madison — often has aging systems, outdated electrical, and deferred maintenance. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function MadisonWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Madison WI',
    description: 'Step-by-step process for selling your Madison home for cash in Dane County, Wisconsin',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Madison property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Dane County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/madison-wi-hero-640.jpg 640w, /images/optimized/madison-wi-hero-828.jpg 828w, /images/optimized/madison-wi-hero-1080.jpg 1080w, /images/optimized/madison-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/madison-wi-hero-1200.jpg"
            alt="Madison WI homes — Craftsman bungalows and established residential neighborhoods"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Madison WI — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Madison WI and throughout Dane County — Capitol/Isthmus, Marquette, Tenney-Lapham, Vilas, Nakoma, Dudgeon-Monroe, South Madison, and surrounding communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Madison's median sale price is $453,500. We cover all closing costs including WI transfer fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Madison and Dane County in any condition — Craftsman bungalows, older duplexes, Foursquares, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Madison WI Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/madison-wi" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Madison WI Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Madison is the state capital and home of the University of Wisconsin, making it one of the most economically stable markets in the Midwest. According to <a href="https://www.redfin.com/city/10770/WI/Madison" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $453,500 — up 5.8% year-over-year — with 41 days on market and a Compete Score of 74. The near-east and near-west neighborhoods (Marquette, Tenney-Lapham, Vilas, Dudgeon-Monroe) are dominated by Craftsman bungalows and American Foursquares from the 1910s–1940s. These older homes carry character — and often carry deferred maintenance.
          </p>
          <p className="text-gray-700 mb-4">
            According to the <a href="https://revenue.wi.gov/Pages/FAQS/ise-reTransfer.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Department of Revenue</a>, Wisconsin sellers pay a real estate transfer fee of $3.00 per $1,000. Under <a href="https://docs.legis.wisconsin.gov/statutes/statutes/77/III/256" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Statute §77.256</a>, no county or municipality may impose an additional transfer fee — so on a $453,500 Madison home, the total transfer fee is $1,360 and sellers pay nothing beyond that. Wisconsin uses <a href="https://docs.legis.wisconsin.gov/statutes/statutes/846" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">judicial foreclosure (Ch. 846)</a>, which runs through Dane County Circuit Court and takes about 12 months from filing to sheriff's sale.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Madison WI</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$453,500 (+5.8% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">41 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">100.9%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">74 / 100 (competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">~216 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">0.3% ($3/$1,000, no local add-on)</td><td className="p-3 text-gray-500">WI DOR / Wis. Stat. §77.256</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat (Wis. Stat. §59.43)</td><td className="p-3 text-gray-500">WI Statutes</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (~12 months, Dane County Circuit Court)</td><td className="p-3 text-gray-500">WI Statutes Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Wisconsin is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Dane County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Madison WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/madison-wi/inherited-property', description: 'Sell an inherited Madison home through Dane County Orphans Court probate' },
            { label: 'Going Through Divorce', href: '/markets/madison-wi/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/madison-wi/foreclosure', description: 'Wisconsin judicial foreclosure takes 12 months — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/madison-wi/probate', description: 'We work with Dane County probate cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/madison-wi/tenant-occupied', description: 'We buy with tenants in place — including student rentals' },
            { label: 'Code Violations', href: '/markets/madison-wi/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/madison-wi/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Madison WI Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Madison WI</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $453,500 Madison median-sale home, a 5–6% agent commission runs $22,675–$27,210. Add Wisconsin's 0.3% transfer fee ($1,360), carrying costs during 41 days on market, and repairs. Older Craftsman and Foursquare homes near campus often have deferred maintenance that conventional buyers demand fixed before closing. A direct cash sale eliminates those costs entirely.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Madison WI Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Madison and the surrounding Dane County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Capitol/Isthmus', 'Marquette', 'Tenney-Lapham', 'Vilas', 'Nakoma', 'Dudgeon-Monroe', 'South Madison', 'Fitchburg', 'Middleton', 'Sun Prairie', 'Monona', 'Verona', 'Stoughton', 'DeForest', 'McFarland', 'Cottage Grove'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Madison WI" />

        <BlogClusterLinks marketSlug="madison-wi" cityName="Madison WI" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Madison WI mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Madison WI homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Madison WI section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/madison-wi/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Madison WI Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-madison-wi-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Madison WI Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/madison-wi"
        />
      </div>
    </>
  );
}
