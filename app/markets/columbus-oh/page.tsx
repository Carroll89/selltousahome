/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { columbusLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Columbus OH — Cash Offer in 24 Hours',
  description:
    'We buy houses in Columbus OH for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Franklin County.',
  alternates: { canonical: `${SITE_URL}/markets/columbus-oh` },
};


const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$25K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$14,500–$17,400 on $290,000)' },
  { label: 'OH conveyance fee', cashBuyer: 'We cover everything', traditional: '$3.00/$1,000 (Franklin County Auditor)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '60–80% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Columbus OH?',
    answer: "USA Home Buyers can close in as few as 7 days in Columbus. Written cash offer within 24 hours. Ohio judicial foreclosure runs through Franklin County Common Pleas Court. Franklin County online sheriff sales through RealAuction go on Fridays at 10:00 a.m. — once you're on the schedule, options narrow. A cash sale before judgment preserves your equity. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Columbus OH home?',
    answer: "Cash offers typically range from 60–80% of fair market value. According to Redfin (March 2026), Columbus's median sale price is $290,000 — up 3.9% year-over-year — with a Compete Score of 65. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Franklin County's $3.00/$1,000 conveyance fee.",
  },
  {
    question: 'What is the conveyance fee when selling in Franklin County OH?',
    answer: "Franklin County charges a conveyance fee of $3.00 per $1,000 of sale price ($1/1,000 state + $2/1,000 county) paid to the Franklin County Auditor's Transfer & Conveyance Department before recording. DTE Forms 100 and 100(EX) are required. Recording is handled by the Franklin County Recorder (373 S. High St., 18th Floor, Columbus OH 43215) at $34 for the first 2 pages + $8 per additional page. On a $290,000 Columbus home, the conveyance fee is approximately $870. We cover all closing costs. Source: Franklin County Auditor conveyance fee calculator, direct-fetched 2026-04-30.",
  },
  {
    question: 'How does foreclosure work in Franklin County OH?',
    answer: "Ohio mortgage foreclosure is judicial — the lender files in Franklin County Common Pleas Court. After judgment, the matter is brought to the Franklin County Sheriff. Mortgage sales are online through RealAuction, Fridays at 10:00 AM; delinquent tax sales go on Tuesdays at 10:00 AM. Starting bid is 2/3 of the appraised value. Sale to deed takes a minimum of 6–8 weeks after the sheriff sale. Source: Franklin County Sheriff. Consult an Ohio-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'What areas near Columbus do you buy in?',
    answer: "All of Franklin County: Columbus, Westerville, Dublin, Hilliard, Grove City, Gahanna, Worthington, Upper Arlington, Reynoldsburg, Pickerington, Canal Winchester, and surrounding Central Ohio communities. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Columbus has substantial older housing stock — Franklinton, Linden, Hilltop, South Side, and Near East Side have many bungalows, American foursquares, and colonials from the early-to-mid 1900s with lead paint, knob-and-tube wiring, and years of deferred maintenance. We buy in any condition.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function ColumbusOHMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Columbus OH',
    description: 'Step-by-step process for selling your Columbus home for cash in Franklin County, Ohio',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Columbus property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Franklin County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          columbusLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Columbus OH — USA Home Buyers',
            description: 'A short overview for Columbus OH homeowners considering a direct as-is cash sale.',
            contentUrl: `${SITE_URL}/videos/columbus-oh/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/images/video-posters/columbus-oh-main-poster.jpg`,
            uploadDate: '2026-05-02',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/columbus-oh-hero-640.jpg 640w, /images/optimized/columbus-oh-hero-828.jpg 828w, /images/optimized/columbus-oh-hero-1080.jpg 1080w, /images/optimized/columbus-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/columbus-oh-hero-1200.jpg"
            alt="Columbus OH homes — older Central Ohio residential neighborhoods in Franklin County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Ohio Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Columbus OH — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Columbus OH and throughout Franklin County — German Village, Short North, Franklinton, Clintonville, Linden, Hilltop, South Side, Bexley, and surrounding communities. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Columbus's median sale price is $290,000 (+3.9% YoY) with a Compete Score of 65. We cover all closing costs including Franklin County's conveyance fee. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Columbus and Franklin County in any condition — bungalows, foursquares, colonials, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Columbus OH Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/columbus-oh" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-02 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Lens */}
        <VideoEmbed
          src="/videos/columbus-oh/landing.mp4"
          title="Sell My House Fast Columbus OH — USA Home Buyers"
          poster="/images/video-posters/columbus-oh-main-poster.jpg"
          captionsSrc="/videos/columbus-oh/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for Columbus OH homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you need to sell your house fast in Columbus, Ohio, USA Home Buyers can help you avoid repairs, showings, and months of uncertainty. We buy homes as-is across Columbus and Franklin County, including Franklinton, Linden, Hilltop, Clintonville, the South Side, and the University District.</p>
            <p className="mb-3">Columbus is a large market, but a normal listing still may not fit your situation. The property might be inherited, vacant, tenant-occupied, behind on payments, tied to a probate timeline, or located in an older neighborhood where repairs and code items can slow everything down. You do not have to clean it out, update it, or manage contractors before speaking with us.</p>
            <p className="mb-3">We start by learning about the house and your timeline. Then we review the property, answer your questions, and give you a written cash offer. If it works for you, you pick the closing date. If it does not, there is no pressure and no fee.</p>
            <p className="mb-3">Our role is to give Columbus homeowners a practical as-is option when speed and certainty matter. We are not making promises about your buyer pool or resale plan; we are giving you a clear offer and a simpler path. For a no-obligation cash offer, call USA Home Buyers at 888-274-5006. We will walk you through the next step.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Columbus OH Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Columbus is the county seat and state capital of Franklin County, Ohio — one of the fastest-growing large cities in the Midwest. According to <a href="https://www.redfin.com/city/4664/OH/Columbus/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $290,000 (+3.9% YoY), with 47 days on market and a Compete Score of 65. Columbus has substantial older housing stock concentrated in neighborhoods like Franklinton, Linden, Hilltop, and the Near East Side — bungalows, American foursquares, colonials, and Cape Cods that often carry lead paint, deferred maintenance, and significant repair needs.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio sellers pay a conveyance fee rather than a transfer tax. Franklin County charges <strong>$3.00 per $1,000</strong> of sale price ($1/1,000 state + $2/1,000 county), paid to the <a href="https://audr-apps.franklincountyohio.gov/calc/conveyancefee" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Franklin County Auditor's Transfer & Conveyance Department</a>. DTE Forms 100 and 100(EX) required. Deed recording is handled by the Franklin County Recorder (373 S. High St., 18th Floor, Columbus OH 43215). Ohio uses judicial foreclosure; Franklin County mortgage sheriff sales go online through RealAuction on Fridays at 10:00 AM.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026 · Batch 002 source restriction honored: Columbus is approved for build coverage; Houzeo outlier and city-transfer-add-on claims are excluded unless verified by title review.</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Columbus OH</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$290,000 (+3.9% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$184/sq ft (−2.6% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">47 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">98.5%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">65 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Monthly homes sold</td><td className="p-3">787 homes</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">OH conveyance fee</td><td className="p-3">$3.00/$1,000 ($1 state + $2 county) — Franklin County Auditor Transfer & Conveyance Dept.</td><td className="p-3 text-gray-500">Franklin County Auditor fee calculator (confirmed 2026-04-30)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Franklin County recording fee</td><td className="p-3">$34 first 2 pages + $8/additional page — Franklin County Recorder, 373 S. High St., 18th Floor, Columbus OH 43215</td><td className="p-3 text-gray-500">Franklin County Recorder (confirmed 2026-04-30)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Franklin County Common Pleas; online RealAuction mortgage sales, Fridays 10:00 a.m.; delinquent tax sales Tuesdays 10:00 a.m.</td><td className="p-3 text-gray-500">Franklin County Sheriff</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Franklin County Probate Court (independent court in Ohio) — 373 S. High St., 22nd Floor, Columbus OH 43215, phone (614) 525-3894, probate.franklincountyohio.gov</td><td className="p-3 text-gray-500">Franklin County Probate Court</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Ohio is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Franklin County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Columbus OH in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/columbus-oh/inherited-property', description: 'Sell an inherited Columbus home through Franklin County Probate Court' },
            { label: 'Going Through Divorce', href: '/markets/columbus-oh/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/columbus-oh/foreclosure', description: 'Ohio judicial foreclosure — sell before the Franklin County RealAuction Friday sale' },
            { label: 'Probate Sale', href: '/markets/columbus-oh/probate', description: 'We work with Franklin County Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/columbus-oh/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/columbus-oh/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/columbus-oh/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />
        <section className="my-12 rounded-xl border border-gray-200 bg-gray-50 p-6"><h2 className="text-2xl font-bold text-brand-dark mb-3">Why sellers use a direct cash offer here</h2><p className="text-gray-700">Every property is different: repairs, title, liens, tenants, probate timing, and closing date all affect the offer. We give a written number after reviewing the actual house, then you choose whether it is easier than listing, repairing, staging, and waiting for a financed buyer.</p></section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Columbus OH</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $290,000 Columbus median-sale home, a 5–6% agent commission runs $14,500–$17,400. Add Franklin County's conveyance fee (~$870), carrying costs during 47 days on market, and repairs to older housing stock. Average homes sell for about 1.5% below list price. A direct cash sale eliminates those costs entirely. Hot homes can sell for about 1% above list and go pending in around 29 days (Redfin, Mar 2026).
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Columbus OH Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Columbus and the surrounding Franklin County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['German Village', 'Short North', 'Franklinton', 'Clintonville', 'Linden', 'Hilltop', 'South Side', 'Bexley', 'Italian Village', 'Victorian Village', 'Near East Side', 'University District', 'Westerville', 'Dublin', 'Hilliard', 'Grove City', 'Gahanna', 'Worthington', 'Upper Arlington', 'Reynoldsburg', 'Pickerington', 'Canal Winchester'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Columbus OH" />

        <BlogClusterLinks marketSlug="columbus-oh" cityName="Columbus OH" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Columbus OH mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Columbus OH homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Columbus OH section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/columbus-oh/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Columbus OH Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-columbus-oh-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Columbus OH Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/columbus-oh"
        />
      </div>
    </>
  );
}
