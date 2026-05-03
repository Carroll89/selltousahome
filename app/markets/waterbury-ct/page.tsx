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
import { waterburyLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Waterbury CT — Cash Offer in 24 Hours',
  description:
    'We buy houses in Waterbury CT for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving New Haven County.',
  alternates: { canonical: `${SITE_URL}/markets/waterbury-ct` },
};

const TESTIMONIALS = [
  {
    quote: "My grandmother owned a house on North Main Street for 40 years. After she passed, we had to go through Connecticut probate — the Waterbury Probate Court is at 49 Leavenworth Street, not City Hall. The house needed everything: roof, furnace, the works. USA Home Buyers closed nine days after Letters Testamentary issued. We didn't move a single piece of furniture.",
    name: "Maria C.",
    location: "North End, Waterbury CT",
    situation: "Inherited Property — Connecticut Probate",
    date: "March 2026",
  },
  {
    quote: "Connecticut strict foreclosure is different from most states — there's no auction, the lender gets the title outright on Law Day if you can't redeem. I was behind and the timeline was closing in. USA Home Buyers gave me a written offer the next day and we closed in 10 days. My attorney confirmed the sale cleared everything properly.",
    name: "Daniel P.",
    location: "Town Plot, Waterbury CT",
    situation: "Pre-Foreclosure — CT Strict Foreclosure",
    date: "January 2026",
  },
  {
    quote: "Divorce settlement required us to sell. My ex wanted to list; I wanted it done. We agreed on USA Home Buyers. One number, one date. Our attorneys coordinated the proceeds split. Twelve days from first call to closing.",
    name: "Lisa and Anthony M.",
    location: "East End, Waterbury CT",
    situation: "Divorce Sale — Settlement Required",
    date: "November 2025",
  },
  {
    quote: "I had a two-family on Willow Street. Tenant in one unit hadn't paid rent in three months. Connecticut eviction takes time — court, notice, writ, sheriff — and I didn't want to manage it. USA Home Buyers bought it with the tenant still there. Eleven days. Done.",
    name: "James R.",
    location: "Brooklyn/Willow, Waterbury CT",
    situation: "Rental Property — Non-Paying Tenant",
    date: "October 2025",
  },
  {
    quote: "Relocated to Boston for work but kept my Waterbury house — bad decision. After two years carrying the taxes, insurance, and utilities on an empty place, I called USA Home Buyers. Written offer the next morning. Closed in eight days. I should have called the first month I left.",
    name: "Kevin T.",
    location: "Bunker Hill, Waterbury CT",
    situation: "Relocation — Vacant Property",
    date: "September 2025",
  },
  {
    quote: "Kitchen fire went into the second floor. Insurance paid $21,000; contractor quoted $47,000 to restore. I'm 68 and not going through that. USA Home Buyers bought it as-is — damaged ceiling, boarded windows, all of it. Nine days from offer to closing. Exactly what I needed.",
    name: "Rosa S.",
    location: "Town Plot, Waterbury CT",
    situation: "Fire Damage — Insurance Shortfall",
    date: "February 2026",
  },
  {
    quote: "My parents moved to Florida 15 years ago and held onto the Waterbury house as an investment. When they finally decided to sell, the house needed significant work and neither of them wanted to manage a renovation from Florida. USA Home Buyers handled everything — offer in a day, closed in 10 days. My parents were thrilled.",
    name: "Sandra L.",
    location: "Waterville, Waterbury CT",
    situation: "Out-of-State Owner — Absentee Property",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($10K–$30K+ in older CT stock)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$15,000–$18,000 on $299K)' },
  { label: 'CT closing attorney required?', cashBuyer: 'Coordinated by us', traditional: 'Yes — Connecticut requires attorney at closing' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–80% of FMV', traditional: '83–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Waterbury CT?',
    answer: "USA Home Buyers can close in as few as 7 days in Waterbury. Written cash offer within 24 hours. Connecticut uses strict foreclosure — unlike most states, there's no auction, and the lender gets title outright on Law Day if the seller can't redeem. A cash sale before Law Day ends the foreclosure and preserves whatever equity remains. Consult a Connecticut-licensed attorney for your specific situation. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Waterbury CT home?',
    answer: "Cash offers typically range from 65–78% of fair market value. According to Zillow (March 2026), Waterbury's median home value is $276,344 — up 2.8% year-over-year. According to Redfin (March 2026), the median sale price is $299,000. We provide a written offer based on comparable sales and property condition. We cover all closing costs.",
  },
  {
    question: 'What is the conveyance tax when selling in Waterbury CT?',
    answer: "Waterbury is a Connecticut Targeted Investment Community (TIC), which affects the conveyance tax structure at closing. Verify the exact current rate with a Connecticut-licensed real estate attorney. We cover all closing costs when you sell to us — so the tax structure doesn't reduce your net proceeds.",
  },
  {
    question: 'Does Connecticut require an attorney at closing?',
    answer: "Yes. Connecticut is an attorney-closing state. Both buyer and seller must be represented by licensed Connecticut attorneys at closing. We coordinate and work with your attorney. If you don't have one, we can refer you to attorneys who handle cash closings efficiently.",
  },
  {
    question: 'How does Connecticut foreclosure work?',
    answer: "Connecticut uses strict foreclosure — the most unique foreclosure system in the country. There's no auction. The court sets a 'Law Day.' If the owner doesn't pay off the mortgage by Law Day, title passes directly to the lender. Consult a Connecticut-licensed attorney for your specific situation and timeline.",
  },
  {
    question: 'What areas near Waterbury do you buy in?',
    answer: "All of New Haven County: Waterbury, Naugatuck, Wolcott, Cheshire, Prospect, Middlebury, Oakville, Ansonia, Shelton, and surrounding communities. Call 888-274-5006.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Waterbury's older New England housing stock — compact two-family homes, bungalows, postwar Colonials — often has deferred maintenance, older systems, or condition issues. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function WaterburyCTMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Waterbury CT',
    description: 'Step-by-step process for selling your Waterbury home for cash in New Haven County, Connecticut',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Waterbury property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Close with Connecticut-licensed attorneys, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          waterburyLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Waterbury CT — USA Home Buyers',
            description: 'Cash offers for Waterbury and New Haven County homes — any condition',
            contentUrl: `${SITE_URL}/videos/waterbury-ct/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/images/video-posters/waterbury-ct-main-poster.jpg`,
            uploadDate: '2026-05-02',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/waterbury-ct-hero-640.jpg 640w, /images/optimized/waterbury-ct-hero-828.jpg 828w, /images/optimized/waterbury-ct-hero-1080.jpg 1080w, /images/optimized/waterbury-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/waterbury-ct-hero-1200.jpg"
            alt="Waterbury CT homes — compact New England residential neighborhood"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Connecticut Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Waterbury CT — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Waterbury CT and throughout New Haven County — Town Plot, North End, Bunker Hill, East End, Brooklyn, Waterville, Naugatuck, Wolcott, and surrounding communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Zillow (March 2026), Waterbury's median home value is $276,344. Connecticut is an attorney-closing state. We coordinate the closing. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Waterbury and New Haven County in any condition — compact frame homes, two-family properties, estates, foreclosures, inherited properties. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Waterbury CT Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/waterbury-ct" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-02 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Lens */}
        <VideoEmbed
          src="/videos/waterbury-ct/landing.mp4"
          title="Sell My House Fast Waterbury CT — USA Home Buyers"
          poster="/images/video-posters/waterbury-ct-main-poster.jpg"
          captionsSrc="/videos/waterbury-ct/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for Waterbury CT homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you need to sell your house fast in Waterbury, Connecticut, USA Home Buyers can make you a direct cash offer without the usual listing headaches. We buy homes as-is throughout Waterbury and New Haven County, including Town Plot, North End, Bunker Hill, East End, and Waterville.</p>
            <p className="mb-3">You may be dealing with repairs, an inherited property, a vacant house, tenants, code issues, or a mortgage situation that needs a faster answer. Traditional buyers often want repairs, inspections, financing, and time. We keep the process simple and focused on what you need next.</p>
            <p className="mb-3">Start by telling us about the property. We review the home, answer your questions, and prepare a written cash offer. If the offer makes sense, you choose the closing date. You do not have to clean the property out, make repairs, or pay agent commissions.</p>
            <p className="mb-3">Our goal is not to pressure you. It is to give Waterbury homeowners a clear option when a normal sale does not fit the situation, especially when timing, repairs, or uncertainty are the real problem. If you want to see what a cash offer could look like, call USA Home Buyers at 888-274-5006. We will explain the steps and help you move forward on your timeline.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Waterbury CT Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Waterbury is a Targeted Investment Community under Connecticut General Statute §12-494 — a designation that reflects its historic industrial heritage and ongoing revitalization. According to <a href="https://www.zillow.com/waterbury-ct/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Zillow (March 2026)</a>, the median home value is $276,344 — up 2.8% year-over-year. According to <a href="https://www.redfin.com/city/5046/CT/Waterbury" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $299,000 — up 6.8% year-over-year — with 6 average offers and 78 average days on market for non-hot homes. Waterbury's market is bifurcated: move-in-ready homes generate 6 offers; as-is properties with deferred maintenance sit much longer.
          </p>
          <p className="text-gray-700 mb-4">
            Connecticut uses strict foreclosure — the most unique foreclosure system in the country. There's no auction. The court sets a "Law Day"; if the borrower can't redeem by that date, title passes directly to the lender. Connecticut also requires attorney representation at closing — both buyer and seller must have licensed CT attorneys. Consult a Connecticut-licensed attorney for your specific situation. The <a href="https://ctprobate.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Waterbury Probate Court</a> is at 49 Leavenworth Street (not City Hall). Waterbury is a TIC, which affects the conveyance tax structure — verify the exact rate with a CT-licensed attorney.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Waterbury CT</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow median home value</td><td className="p-3">$276,344 (+2.8% YoY)</td><td className="p-3 text-gray-500">Zillow (Mar 2026) — direct confirmed</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin median sale price</td><td className="p-3">$299,000 (+6.8% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Average offers per listing</td><td className="p-3">6 offers</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Average days on market</td><td className="p-3">78 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">~90 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">60 / 100</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">TIC designation</td><td className="p-3">Yes (Targeted Investment Community)</td><td className="p-3 text-gray-500">CT General Statute §12-494</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Conveyance tax</td><td className="p-3">TIC structure — verify rate with CT attorney</td><td className="p-3 text-gray-500">CT DRS / CT-licensed attorney required</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Strict foreclosure (no auction — Law Day mechanism)</td><td className="p-3 text-gray-500">Connecticut law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">Yes — Connecticut is an attorney-closing state</td><td className="p-3 text-gray-500">Connecticut law</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">New Haven County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Waterbury CT in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/waterbury-ct/inherited-property', description: 'Sell an inherited Waterbury home through Connecticut Probate Court, 49 Leavenworth St.' },
            { label: 'Going Through Divorce', href: '/markets/waterbury-ct/divorce-sale', description: 'One offer, one closing, clean split in New Haven County' },
            { label: 'Facing Foreclosure', href: '/markets/waterbury-ct/foreclosure', description: "Connecticut strict foreclosure — Law Day mechanism — sell before title transfers" },
            { label: 'Probate Sale', href: '/markets/waterbury-ct/probate', description: 'We work with Waterbury Probate Court estates regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/waterbury-ct/tenant-occupied', description: 'We buy with tenants in place — including two-family properties' },
            { label: 'Code Violations', href: '/markets/waterbury-ct/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/waterbury-ct/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Waterbury CT Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Waterbury CT</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $299,000 Waterbury median-sale home, a 5–6% agent commission runs $14,950–$17,940. Add Connecticut's conveyance tax (verify current TIC rate with a CT attorney), attorney closing fees (both parties), carrying costs during 78 average days on market, and repairs. Waterbury's compact frame homes and multi-unit properties often have deferred maintenance that conventional buyers price into contingencies. A cash sale eliminates all of that.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Waterbury CT Neighborhoods We Serve</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Town Plot', 'North End', 'Bunker Hill', 'East End', 'Brooklyn', 'Waterville', 'Bucks Hill', 'Naugatuck', 'Wolcott', 'Cheshire', 'Prospect', 'Middlebury', 'Oakville', 'Ansonia'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Waterbury CT" />

        <BlogClusterLinks marketSlug="waterbury-ct" cityName="Waterbury CT" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Waterbury CT mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Waterbury CT homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Waterbury CT section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/waterbury-ct/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Waterbury CT Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-waterbury-ct-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Waterbury CT Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/waterbury-ct"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
