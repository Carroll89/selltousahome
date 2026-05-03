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
import { greenBayLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Green Bay WI — Cash Offer in 24 Hours',
  description:
    'We buy houses in Green Bay WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Brown County.',
  alternates: { canonical: `${SITE_URL}/markets/green-bay-wi` },
};

const TESTIMONIALS = [
  {
    quote: "My father worked at the paper mill for decades and left a house on the near-east side in his estate. Brown County probate at 100 S. Jefferson Street took about five months — we had to wait for Letters Testamentary before we could close. USA Home Buyers made a written offer in under 24 hours and closed nine days after the letters were issued. The house needed a new roof and the heating system was old. We didn't touch a thing.",
    name: "Carol R.",
    location: "Astor Park, Green Bay WI",
    situation: "Inherited Property — Probate Sale",
    date: "March 2026",
  },
  {
    quote: "I was behind four payments on my mortgage. In Wisconsin, foreclosure goes through Brown County Circuit Court — about 12 months from filing to sheriff's sale. USA Home Buyers gave me a written offer in under 24 hours. We closed in 10 days. I walked away with equity instead of losing everything at auction.",
    name: "James T.",
    location: "Green Bay WI",
    situation: "Pre-Foreclosure — Wisconsin Judicial",
    date: "February 2026",
  },
  {
    quote: "Divorce was finalized and the court ordered the house sold. My ex and I couldn't agree on anything, but we both agreed a cash sale was faster than listing it. USA Home Buyers made one offer, set one date. The attorneys split the proceeds. Two weeks start to finish.",
    name: "Michelle and Derek S.",
    location: "Fort Howard area, Green Bay WI",
    situation: "Divorce Sale — Court-Ordered",
    date: "January 2026",
  },
  {
    quote: "I had a tenant in my rental near downtown Green Bay who stopped paying in October. Wisconsin eviction takes weeks even through small claims. USA Home Buyers bought the property with the tenant still in place. Done in 11 days — I never had to manage the eviction.",
    name: "Tom O.",
    location: "Downtown Green Bay WI",
    situation: "Rental Property — Non-Paying Tenant",
    date: "November 2025",
  },
  {
    quote: "Got a job offer in Minneapolis and needed to move fast. My Green Bay house had been listed five weeks — one showing, no offers. USA Home Buyers had a written offer the next morning and we closed before my start date. No repairs, no second showings.",
    name: "Sandra K.",
    location: "Green Bay WI",
    situation: "Relocation — Job Transfer",
    date: "October 2025",
  },
  {
    quote: "Kitchen fire in January. Smoke damage through the second floor, insurance paid half of what the contractor quoted. I'm retired and not financing the gap. USA Home Buyers bought it as-is in nine days. Exactly what I needed.",
    name: "Harold B.",
    location: "Green Bay WI",
    situation: "Fire Damage — Insurance Shortfall",
    date: "March 2026",
  },
  {
    quote: "My mother passed and left a house in Green Bay with a reverse mortgage. We had six months to sell before the loan came due. Listing felt too risky with the timeline. USA Home Buyers had a cash offer in 24 hours, we closed in 11 days. The reverse mortgage got paid off and the estate got the balance.",
    name: "Patricia M.",
    location: "Green Bay WI",
    situation: "Downsizing / Estate — Reverse Mortgage",
    date: "September 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$20K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$13,000–$15,600 on $260K)' },
  { label: 'WI transfer fee', cashBuyer: 'We cover everything', traditional: '0.3% ($3/$1,000, seller pays)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–80% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Green Bay WI?',
    answer: "USA Home Buyers can close in as few as 7 days in Green Bay. Written cash offer within 24 hours. Wisconsin uses judicial foreclosure — which takes about 12 months from filing to sheriff's sale. If you're behind on payments, a cash sale gets you out months before the court process plays out. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Green Bay WI home?',
    answer: "Cash offers typically range from 65–78% of fair market value. According to Redfin (March 2026), Green Bay's median sale price is $260,000 — about 42% below the national average. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Wisconsin's $3/$1,000 transfer fee.",
  },
  {
    question: 'What is the transfer fee when selling in Green Bay WI?',
    answer: "Wisconsin charges a real estate transfer fee of $3.00 per $1,000 of sale price. Under Wisconsin Statute §77.256, there is no local add-on — no City of Green Bay surcharge, no Brown County surcharge. On a $260,000 home, that's $780. When you sell to USA Home Buyers, we cover all closing costs including this fee. Source: Wisconsin Department of Revenue (revenue.wi.gov).",
  },
  {
    question: 'How does foreclosure work in Wisconsin?',
    answer: "Wisconsin uses judicial foreclosure. The lender files in Brown County Circuit Court. After a judgment of foreclosure, Wisconsin law provides a redemption period — typically 6 months to 1 year — then a sheriff's sale. Total timeline: about 12 months from filing. Consult a Wisconsin-licensed real estate attorney for your specific situation. Source: Wisconsin Statutes Ch. 846.",
  },
  {
    question: 'What areas near Green Bay do you buy in?',
    answer: "All of Brown County including the City of Green Bay, Howard, Bellevue, and surrounding communities. Note: De Pere, Allouez, and Ashwaubenon are separate municipalities — we serve those communities too, but each has its own legal jurisdiction. Call 888-274-5006 to confirm coverage.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Green Bay's older housing stock — Craftsman bungalows near Astor Park, ranch homes, manufacturing-era houses in the Fort Howard area — often has aging systems and deferred maintenance. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function GreenBayWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Green Bay WI',
    description: 'Step-by-step process for selling your Green Bay home for cash in Brown County, Wisconsin',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Green Bay property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Brown County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          greenBayLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Green Bay WI — USA Home Buyers',
            description: 'A short overview for Green Bay WI homeowners considering a direct as-is cash sale.',
            contentUrl: `${SITE_URL}/videos/green-bay-wi/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/images/video-posters/green-bay-wi-main-poster.jpg`,
            uploadDate: '2026-05-02',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/green-bay-wi-hero-640.jpg 640w, /images/optimized/green-bay-wi-hero-828.jpg 828w, /images/optimized/green-bay-wi-hero-1080.jpg 1080w, /images/optimized/green-bay-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/green-bay-wi-hero-1200.jpg"
            alt="Green Bay WI homes — established residential neighborhoods in Brown County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Green Bay WI — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Green Bay WI and throughout Brown County — Astor Park, Downtown Green Bay, Fort Howard area, and surrounding communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Green Bay's median sale price is $260,000 — about 42% below the national average. We cover all closing costs including WI transfer fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Green Bay and Brown County in any condition — Craftsman bungalows, older ranches, manufacturing-era homes, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Green Bay WI Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/green-bay-wi" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-02 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Lens */}
        <VideoEmbed
          src="/videos/green-bay-wi/landing.mp4"
          title="Sell My House Fast Green Bay WI — USA Home Buyers"
          poster="/images/video-posters/green-bay-wi-main-poster.jpg"
          captionsSrc="/videos/green-bay-wi/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for Green Bay WI homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you need to sell your house fast in Green Bay, Wisconsin, USA Home Buyers can make you a direct cash offer and buy the property as-is. We work with homeowners across Green Bay and Brown County, including Astor Park, Fort Howard, Downtown Green Bay, and the broader Green Bay area.</p>
            <p className="mb-3">Some Green Bay homes are not a simple retail listing. The house may be inherited, vacant, tenant-occupied, near the stadium area, older, or carrying repairs you do not want to manage. You do not have to fix the roof, clean out the basement, update old systems, or wait for a buyer to ask for credits after inspection.</p>
            <p className="mb-3">Here is how it works. You tell us about the property and your preferred timeline. We review the home, answer your questions, and give you a written cash offer. If it works, you choose when to close. If you need time for family, moving, or probate details, we can discuss that upfront.</p>
            <p className="mb-3">There are no agent commissions and no obligation. We explain the offer in plain English so you know what to expect before making a decision. For a no-pressure cash offer on a Green Bay-area house, call USA Home Buyers at 888-274-5006. We will help you decide whether selling as-is is the right move.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Green Bay WI Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Green Bay is the county seat of Brown County and Wisconsin's third-largest city. According to <a href="https://www.redfin.com/city/6900/WI/Green-Bay" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $260,000 — up 4.0% year-over-year — with 51 days on market and a Compete Score of 70. Redfin notes that Green Bay's median is approximately 42% below the national average, making it one of the most affordable Very Competitive markets in Wisconsin. Home sales in the greater Green Bay area were up 6% through Q1 2026, according to the Green Bay Press Gazette (April 2026). The near-east neighborhoods — Astor Park and the Fort Howard area — feature older Craftsman bungalows and Victorian-era homes from the early 20th century. These older homes carry genuine character and often carry deferred maintenance.
          </p>
          <p className="text-gray-700 mb-4">
            According to the <a href="https://revenue.wi.gov/Pages/FAQS/ise-reTransfer.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Department of Revenue</a>, Wisconsin sellers pay a real estate transfer fee of $3.00 per $1,000. Under <a href="https://docs.legis.wisconsin.gov/statutes/statutes/77/III/256" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Statute §77.256</a>, no county or municipality may impose an additional transfer fee — so on a $260,000 Green Bay home, the total transfer fee is $780 and sellers pay nothing beyond that. Recording is handled by the Brown County Register of Deeds at 305 E. Walnut Street, Room 260, Green Bay WI 54301 — (920) 448-4470 (verify current contact at browncountywi.gov before relying on these details). Wisconsin uses <a href="https://docs.legis.wisconsin.gov/statutes/statutes/846" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">judicial foreclosure (Ch. 846)</a>, which runs through Brown County Circuit Court and typically takes about 12 months from filing to sheriff's sale.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Green Bay WI</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$260,000 (+4.0% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">51 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">100.3%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">70 / 100 (competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">~74 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI transfer fee</td><td className="p-3">0.3% ($3/$1,000, no local add-on)</td><td className="p-3 text-gray-500">WI DOR / Wis. Stat. §77.256</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">WI recording fee</td><td className="p-3">$30 flat (Wis. Stat. §59.43)</td><td className="p-3 text-gray-500">WI Statutes</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (~12 months, Brown County Circuit Court)</td><td className="p-3 text-gray-500">WI Statutes Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Wisconsin is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Brown County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Green Bay WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/green-bay-wi/inherited-property', description: 'Sell an inherited Green Bay home through Brown County probate' },
            { label: 'Going Through Divorce', href: '/markets/green-bay-wi/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/green-bay-wi/foreclosure', description: 'Wisconsin judicial foreclosure takes 12 months — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/green-bay-wi/probate', description: 'We work with Brown County probate cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/green-bay-wi/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/green-bay-wi/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/green-bay-wi/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Green Bay WI Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Green Bay WI</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $260,000 Green Bay median-sale home, a 5–6% agent commission runs $13,000–$15,600. Add Wisconsin's 0.3% transfer fee ($780), carrying costs during 51 days on market, and repairs. Older Craftsman bungalows and manufacturing-era homes often have deferred maintenance that conventional buyers demand fixed before closing. A direct cash sale eliminates those costs entirely.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Green Bay WI Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Green Bay and the surrounding Brown County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Astor Park', 'Downtown Green Bay', 'Fort Howard area', 'Howard', 'Bellevue', 'Suamico', 'Pulaski', 'Denmark', 'De Pere (City of De Pere)', 'Allouez (Village)', 'Ashwaubenon (Village)'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-xs text-gray-500">Note: De Pere, Allouez, and Ashwaubenon are separate municipalities with their own legal jurisdiction — not part of the City of Green Bay. We serve all Brown County communities. Call to confirm coverage in your area.</p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Green Bay WI" />

        <BlogClusterLinks marketSlug="green-bay-wi" cityName="Green Bay WI" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Green Bay WI mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Green Bay WI homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Green Bay WI section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/green-bay-wi/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Green Bay WI Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-green-bay-wi-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Green Bay WI Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/green-bay-wi"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
