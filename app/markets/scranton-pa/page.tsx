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
import { scrantonLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Scranton PA — Cash Offer for NEPA Homes',
  description:
    'We buy houses in Scranton PA and Lackawanna County for cash, as-is. 3.7% transfer tax explained. Written offer in 24 hours, close in 7 days. No repairs, no fees.',
  alternates: { canonical: `${SITE_URL}/markets/scranton-pa` },
};

const TESTIMONIALS = [
  {
    quote: "I owned a Green Ridge home that had been in the family since the coal era. USA Home Buyers gave me a written cash offer in 24 hours and handled all the transfer tax paperwork — 3.7% in Scranton adds up and I was glad they handled it. Closed in 10 days.",
    name: "Thomas V.",
    location: "Green Ridge, Scranton PA",
    situation: "Estate Property — Cash Sale",
    date: "March 2026",
  },
  {
    quote: "I was facing Lackawanna County judicial foreclosure. PA foreclosures can drag out 360 days or more, but I didn't want to wait. USA Home Buyers closed in 8 days. The equity I preserved meant a fresh start.",
    name: "Maria C.",
    location: "Hill Section, Scranton PA",
    situation: "Pre-Foreclosure — Pennsylvania Judicial Process",
    date: "February 2026",
  },
  {
    quote: "My aunt passed and left us a Hyde Park row house through the Lackawanna County Register of Wills. The estate took three months. USA Home Buyers gave us an upfront offer and waited — no pressure. Closed the week authorization came through.",
    name: "Kevin M.",
    location: "Hyde Park, Scranton PA",
    situation: "Inherited Property — Register of Wills",
    date: "January 2026",
  },
  {
    quote: "University of Scranton proximity meant I had student renters for years. Tired of it. USA Home Buyers bought the Hill Section house with the tenant still in place. Nine days.",
    name: "Dorothy G.",
    location: "University Area, Scranton PA",
    situation: "Tenant-Occupied Property — Landlord Exit",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$25K+ for coal-era homes)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$10,775–$12,930 on $215,500)' },
  { label: 'Scranton transfer tax', cashBuyer: 'We cover everything', traditional: '3.7% total: 1% PA + 1% Lackawanna County + 1.7% City ($7,974 on $215,500)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–82% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Scranton PA?',
    answer: "USA Home Buyers can close in as few as 7 days in Scranton. Written cash offer within 24 hours. Pennsylvania judicial foreclosure runs through Lackawanna County Court of Common Pleas — typical timeline 360 days or more. A cash sale before the process begins protects your equity and credit. Call 888-274-5006.",
  },
  {
    question: 'What is the transfer tax when selling in Scranton PA?',
    answer: "Scranton has a total transfer tax of 3.7%, broken down as follows: 1% Pennsylvania state transfer tax + 1% Lackawanna County transfer tax + 1.7% City of Scranton transfer tax = 3.7% total. On a $215,500 Scranton median-priced home, that's approximately $7,974. This is significantly higher than the 2% standard for most PA municipalities outside Scranton. Source: Pennsylvania Department of Revenue; alttitle.com (updated July 2025). When you sell to USA Home Buyers, we cover all closing costs including the full 3.7% transfer tax.",
  },
  {
    question: 'How does foreclosure work in Lackawanna County PA?',
    answer: "Pennsylvania requires judicial foreclosure — the lender files in Lackawanna County Court of Common Pleas. Lackawanna County also has a residential mortgage foreclosure mediation program, which can extend the timeline and provide additional options. Typical timeline: 9–18 months from first default to sheriff sale. Consult a Pennsylvania-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'What is the probate process for selling a house in Scranton?',
    answer: "Pennsylvania uses a Register of Wills system (not a Probate Court). Lackawanna County Register of Wills is located at 123 Wyoming Ave, Suite 521, Scranton PA 18503, phone (570) 963-6702. Pennsylvania inheritance tax applies: 0% for spouse, 4.5% for direct descendants, 12% for siblings, 15% for others. Cash buyers can purchase estate properties directly once the estate is opened.",
  },
  {
    question: 'Why is Scranton\'s transfer tax so high?',
    answer: "Scranton levies a 1.7% local transfer tax — higher than the 0.5–1% local rate in most Pennsylvania municipalities. Combined with the 1% state rate and 1% Lackawanna County rate, the total reaches 3.7%. This compares to 2% total in most other PA markets. Knowing this upfront helps sellers calculate their true net proceeds.",
  },
  {
    question: 'What areas near Scranton do you buy in?',
    answer: "All of Lackawanna County and surrounding areas: Scranton, Dickson City, Dunmore, Old Forge, Taylor, Moosic, Jessup, Carbondale, Olyphant, Clarks Summit, Archbald, and surrounding communities. We also serve Luzerne County (Wilkes-Barre area). Call 888-274-5006.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Scranton's housing stock is predominantly late-1800s to early-1900s — coal-era row homes, Victorian frames, and brick workers' housing that often have deferred maintenance, aging systems, and knob-and-tube wiring. We buy in any condition. No repairs, no cleaning, no staging.",
  },
];

export default function ScrantonPAMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Scranton PA',
    description: 'Step-by-step process for selling your Scranton home for cash — Lackawanna County, 3.7% transfer tax explained',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Scranton property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Lackawanna County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          scrantonLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Scranton PA — USA Home Buyers',
            description: 'Cash offers for Scranton and Lackawanna County homes — coal-era homes, any condition',
            contentUrl: `${SITE_URL}/videos/scranton-pa/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/videos/scranton-pa/landing-poster.jpg`,
            uploadDate: '2026-05-03',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/scranton-pa-hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/scranton-pa-hero.webp"
            alt="Scranton PA homes — Victorian-era frame and brick houses in Lackawanna County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Pennsylvania Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              We Buy Houses in Scranton, Pennsylvania — Cash Offers for NEPA Homes
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Scranton PA and throughout Lackawanna County — Green Ridge, Hill Section, Hyde Park, South Scranton, West Side, North Scranton, Minooka, and surrounding NEPA communities. Written cash offer in 24 hours. Close in 7–14 days. Scranton's total transfer tax is 3.7% (1% PA + 1% Lackawanna County + 1.7% City of Scranton) — we cover all closing costs. According to Redfin (March 2026), Scranton's median sale price is $215,500 (+7.8% YoY). NYC and NJ buyers are driving 75% of Scranton's buyer demand. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Scranton and Lackawanna County in any condition — coal-era row homes, Victorian frames, estates, foreclosures, tenant-occupied. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Scranton PA Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs including the 3.7% transfer tax." sourcePage="/markets/scranton-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-03 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Max fallback generation */}
        <VideoEmbed
          src="/videos/scranton-pa/landing.mp4"
          title='Sell My House Fast Scranton PA — USA Home Buyers'
          poster="/videos/scranton-pa/landing-poster.jpg"
          captionsSrc="/videos/scranton-pa/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle='Cash offers for Scranton and Lackawanna County homes — coal-era homes, any condition'
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Need to sell your house fast in Scranton, Pennsylvania? USA Home Buyers purchases homes as-is for cash throughout Lackawanna County — Scranton, Dickson City, Dunmore, Old Forge, Taylor, Moosic, Clarks Summit, and surrounding areas.</p>
            <p className="mb-3">No agents, no fees, no repairs.</p>
            <p className="mb-3">Pennsylvania judicial foreclosure runs through Lackawanna County Court of Common Pleas and can take 9-18 months.</p>
            <p className="mb-3">A cash sale before the sheriff sale stops the clock.</p>
            <p className="mb-3">Important: Scranton has a 3.7% total transfer tax — 1% state, 1% Lackawanna County, 1.7% City.</p>
            <p className="mb-3">When you sell to USA Home Buyers, we cover the entire 3.7%.</p>
            <p className="mb-3">Written cash offer in 24 hours.</p>
            <p className="mb-3">Close in 7 days.</p>
            <p className="mb-3">Call 888-274-5006.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Scranton PA Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Scranton is the county seat of Lackawanna County, Pennsylvania, and the heart of Northeastern Pennsylvania (NEPA). According to <a href="https://www.redfin.com/city/17254/PA/Scranton/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $215,500 — up 7.8% year-over-year — with 25 days on market, a sale-to-list ratio of 97.3%, and a Compete Score of 79. About 75% of Scranton buyers are relocating from outside the metro area — primarily from New York City and New Jersey — driving robust demand and price appreciation.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-amber-800 mb-2">Scranton Transfer Tax — Know Your Numbers Before You List</p>
            <p className="text-sm text-amber-700">
              Scranton's total transfer tax is <strong>3.7%</strong>: 1% Pennsylvania state + 1% Lackawanna County + 1.7% City of Scranton. On a $215,500 sale, that's approximately $7,974 — nearly double the 2% standard for most Pennsylvania municipalities. This is not a rounding artifact: the three-tier breakdown is 1% + 1% + 1.7% = 3.7%. Source: PA Department of Revenue; alttitle.com (updated July 2025). USA Home Buyers covers all closing costs including the full transfer tax.
            </p>
          </div>

          <p className="text-gray-700 mb-4">
            Pennsylvania is a <strong>judicial foreclosure state</strong> — all Lackawanna County foreclosures run through the Lackawanna County Court of Common Pleas. Lackawanna County also maintains a residential mortgage foreclosure mediation program. Typical timeline: 9–18 months from first default. Probate uses the <strong>Register of Wills / Orphans' Court</strong> system — Lackawanna County Register of Wills is at 123 Wyoming Ave, Suite 521, Scranton PA 18503, (570) 963-6702.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Scranton PA</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$215,500 (+7.8% YoY)</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">25 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">97.3%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">79 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Transfer tax (Scranton)</td><td className="p-3"><strong>3.7% total</strong>: 1% Pennsylvania + 1% Lackawanna County + 1.7% City of Scranton</td><td className="p-3 text-gray-500">PA DOR; alttitle.com (Jul 2025)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Lackawanna County Court of Common Pleas; mediation program available; ~9–18 months</td><td className="p-3 text-gray-500">Pennsylvania law</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Probate system</td><td className="p-3">Register of Wills / Orphans' Court — 123 Wyoming Ave, Suite 521, Scranton PA 18503; (570) 963-6702</td><td className="p-3 text-gray-500">Lackawanna County</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">PA inheritance tax</td><td className="p-3">0% spouse · 4.5% direct descendants · 12% siblings · 15% others</td><td className="p-3 text-gray-500">PA DOR</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — Pennsylvania is a title company state</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Lackawanna County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Scranton PA in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/scranton-pa/inherited-property', description: 'Sell an inherited Scranton home through Lackawanna County Register of Wills' },
            { label: 'Going Through Divorce', href: '/markets/scranton-pa/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/scranton-pa/foreclosure', description: 'PA judicial foreclosure — sell before the Lackawanna County sheriff sale' },
            { label: 'Probate Sale', href: '/markets/scranton-pa/probate', description: 'We work with Lackawanna County Register of Wills cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/scranton-pa/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/scranton-pa/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/scranton-pa/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Scranton PA Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Scranton PA</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $215,500 Scranton median-sale home, a 5–6% agent commission runs $10,775–$12,930. Add the 3.7% transfer tax ($7,974), carrying costs during 25 days on market, and repairs to coal-era housing stock. A direct cash sale eliminates those costs entirely. Average Scranton homes sell for about 2.7% below list price (Redfin, Mar 2026).
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Scranton PA Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Scranton and the surrounding Lackawanna County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Green Ridge', 'Hill Section', 'Hyde Park', 'South Scranton', 'West Side', 'North Scranton', 'Minooka', 'Bellevue', 'Dickson City', 'Dunmore', 'Old Forge', 'Taylor', 'Moosic', 'Jessup', 'Carbondale', 'Olyphant', 'Clarks Summit'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Note: Dickson City, Dunmore, and other listed communities are separate boroughs outside Scranton City limits — their transfer tax rates may differ from Scranton's 3.7%. Contact us for specifics on your borough.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Scranton PA" />

        <BlogClusterLinks marketSlug="scranton-pa" cityName="Scranton PA" />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-brand-primary mb-2">Scranton PA mini-site</p>
              <h2 className="text-2xl font-bold text-brand-dark mb-2">Seller resources for Scranton PA homeowners</h2>
              <p className="text-gray-700 max-w-3xl">
                Stay in the Scranton PA section for local market data, situation pages, seller guides, and articles before you decide whether a cash offer or listing makes more sense.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/markets/scranton-pa/resources" className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors">
                Scranton PA Resources
              </Link>
              <Link href="/guides/sell-house-fast-scranton-pa-2026" className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors">
                Local Guide
              </Link>
            </div>
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Scranton PA Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours. We cover all closing costs including Scranton's 3.7% transfer tax."
          sourcePage="/markets/scranton-pa"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
