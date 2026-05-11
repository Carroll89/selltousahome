/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

import Link from "next/link";
import { CashOfferForm } from "@/components/CashOfferForm";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialBlock } from "@/components/TestimonialBlock";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SituationLinks } from "@/components/SituationLinks";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { VideoEmbed } from "@/components/VideoEmbed";
import {
  kingOfPrussiaLocalBusinessSchema,
  faqSchema,
  howToSchema,
  videoObjectSchema,
} from "@/lib/schema";
import { PHONE, SITE_URL } from "@/lib/utils";
import { MultiStepForm } from "@/components/MultiStepForm";
import { BlogClusterLinks } from "@/components/BlogClusterLinks";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Sell My House Fast King of Prussia PA",
  description:
    "We buy houses in King of Prussia PA for cash, as-is. Written offer in 24 hours, close in 7-14 days. No repairs, no agent fees. Serving Montgomery County.",
  alternates: { canonical: `${SITE_URL}/markets/king-of-prussia-pa` },
  openGraph: {
    images: [
      {
        url: "/images/king-of-prussia-landmark-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Valley Forge National Park and King of Prussia homes — Sell Your House Fast in King of Prussia PA",
      },
    ],
  },
};

const TESTIMONIALS = [
  {
    quote:
      "My father had lived in his split-level off Henderson Road for 42 years. When he moved to memory care, my siblings and I were left managing a house none of us lived near. It needed a new roof, updated plumbing — the works. USA Home Buyers gave us a fair cash offer and closed in 11 days. We didn't have to lift a finger.",
    name: "Patricia W.",
    location: "Wayne, PA",
    situation: "Inherited Property — Estate Sale",
    date: "March 2026",
  },
  {
    quote:
      "Lost my position at a consulting firm and burned through savings faster than I expected. The lender filed in Montgomery County Common Pleas. My attorney said I had maybe three months before judgment. I had $83,000 in equity I was about to lose. USA Home Buyers had a written offer the next morning and we closed in twelve days. Case dismissed.",
    name: "Vincent R.",
    location: "Bridgeport, PA",
    situation: "Pre-Foreclosure — Court Filing",
    date: "May 2025",
  },
  {
    quote:
      "Montgomery County divorce decree said the property had to be sold to finalize the estate division. The house in Swedeland was in both our names and both of us needed the money to move forward. One written offer, both signed it within an hour of receiving it. Closed in fifteen days.",
    name: "Theresa and Mark S.",
    location: "Swedeland, PA",
    situation: "Divorce Sale — Court-Ordered",
    date: "August 2025",
  },
  {
    quote:
      "I owned a two-bedroom rental unit near the KOP Mall that I'd been leasing to a Section 8 tenant for six years. Housing Authority inspections, maintenance calls, always something. When the tenant gave notice I decided I was done. USA Home Buyers bought it vacant, as-is, in ten days.",
    name: "Gordon L.",
    location: "King of Prussia, PA",
    situation: "Rental Property — Landlord Exit",
    date: "March 2025",
  },
  {
    quote:
      "I accepted a position at a pharma company in New Jersey and had 30 days to relocate. Listing on the MLS wasn't an option. USA Home Buyers made a written offer within 24 hours and we closed the week before I had to start. Walked away with cash in hand and zero stress.",
    name: "David K.",
    location: "King of Prussia, PA",
    situation: "Corporate Relocation — Pharma Corridor",
    date: "February 2026",
  },
  {
    quote:
      "Our 1964 colonial needed $90,000 in updates to compete at retail — new kitchen, bathrooms, HVAC, the whole list. We had equity but not the time or energy to manage a full renovation. USA Home Buyers bought it as-is. The net difference wasn't worth the six months of work and uncertainty.",
    name: "Robert and Ellen M.",
    location: "Upper Merion Township, PA",
    situation: "Deferred Maintenance — Sold As-Is",
    date: "January 2026",
  },
  {
    quote:
      "I'm seventy-three and my doctor recommended I move closer to my family in New Jersey. The house in Upper Merion had appreciated enormously since we bought it in 1994 — I had equity, just not the energy to deal with a full listing. USA Home Buyers gave me a fair offer. I was in New Jersey in under two weeks.",
    name: "Barbara K.",
    location: "Upper Merion Township, PA",
    situation: "Downsizing — Moving Closer to Family",
    date: "September 2025",
  },
];

const COMPARISON_ROWS = [
  {
    label: "Offer timeline",
    cashBuyer: "24 hours",
    traditional: "14–60 days to get an offer",
  },
  {
    label: "Closing timeline",
    cashBuyer: "7–14 days",
    traditional: "45–60+ days after pending",
  },
  {
    label: "Repairs required",
    cashBuyer: "None — we buy as-is",
    traditional: "Usually required ($15K–$40K+ avg in KOP)",
  },
  {
    label: "Agent commissions",
    cashBuyer: "$0",
    traditional: "5–6% (~$27K–$33K on $550K home)",
  },
  {
    label: "Seller closing costs",
    cashBuyer: "We cover everything",
    traditional: "~1–3% + 1% PA transfer tax (seller share)",
  },
  {
    label: "Sale certainty",
    cashBuyer: "Guaranteed written contract",
    traditional: "15–20% of listings fall through",
  },
  {
    label: "Net proceeds (typical)",
    cashBuyer: "70–80% of FMV",
    traditional: "85–90% of FMV after all costs",
  },
];

const KOP_SITUATIONS = [
  {
    label: "Inherited or Estate Property",
    href: "/markets/king-of-prussia-pa/inherited-property",
    description:
      "Sell an inherited Montgomery County home without repairs or cleanout",
  },
  {
    label: "Facing Foreclosure",
    href: "/markets/king-of-prussia-pa/foreclosure",
    description: "Sell before the sheriff sale, protect your equity and credit",
  },
  {
    label: "Going Through Divorce",
    href: "/markets/king-of-prussia-pa/divorce-sale",
    description: "Close quickly and split proceeds — one decision, done",
  },
  {
    label: "Probate Property",
    href: "/markets/king-of-prussia-pa/probate",
    description:
      "We work with executors and estate attorneys at Montgomery County Register of Wills",
  },
  {
    label: "Tenant-Occupied Property",
    href: "/markets/king-of-prussia-pa/tenant-occupied",
    description: "We buy with tenants in place — no eviction required",
  },
  {
    label: "Code Violations",
    href: "/markets/king-of-prussia-pa/code-violations",
    description: "Upper Merion Township code issues? We buy as-is regardless",
  },
  {
    label: "Fire-Damaged Home",
    href: "/markets/king-of-prussia-pa/fire-damage",
    description:
      "No need to repair or clean out — we buy fire-damaged properties",
  },
  {
    label: "Needs Major Repairs",
    href: "/guides/sell-as-is",
    description: "Roof, foundation, HVAC, plumbing — we buy it anyway",
  },
  {
    label: "Relocating",
    href: "/guides/relocation",
    description:
      "Job offer or move deadline? We close fast to fit your schedule",
  },
];

const FAQ_ITEMS = [
  {
    question: "How fast can I sell my house in King of Prussia PA?",
    answer:
      "Once you accept a written offer, we close in 7–14 days. We send the written offer within 24 hours of your inquiry. Because we pay cash — no lender, no mortgage contingency — there's no waiting on bank approval. On the open market, the median home in King of Prussia sits 25 days before going pending, then another 45–60 days to close.",
  },
  {
    question: "How much will you pay for my King of Prussia home?",
    answer:
      "We pay 70–80% of fair market value. Using the Zillow city ZHVI benchmark of $498,174, that typically means a cash offer of $349,000–$399,000. There are no agent commissions (saving 5–6%), no closing costs (we cover all of them), and no repair costs.",
  },
  {
    question: "Do I need to make repairs before selling?",
    answer:
      "No. We buy in any condition — foundation issues, outdated systems, deferred maintenance, fire damage, code violations. You don't need to clean, update, or stage anything. Take whatever you want from the property and leave the rest.",
  },
  {
    question: "What is the transfer tax on a King of Prussia home sale?",
    answer:
      "The total Pennsylvania realty transfer tax for King of Prussia / Upper Merion Township is 2% of the sale price — 1% state and 1% local (Upper Merion Township). It is customarily split equally: buyer pays 1%, seller pays 1%. When you sell to USA Home Buyers, we cover our share at closing.",
  },
  {
    question: "What areas near King of Prussia do you buy in?",
    answer:
      "All of Montgomery County and surrounding areas: Norristown, Conshohocken, Plymouth Meeting, Bridgeport, Wayne, Collegeville, Gulph Mills, Valley Forge, Bryn Mawr, Eagleville, Trooper, and Audubon. If you have a property in the Philadelphia suburbs, call us.",
  },
  {
    question: "Is this a good time to sell in King of Prussia?",
    answer:
      "King of Prussia's Redfin Compete Score is 80 out of 100 — classified as Very Competitive. But the median home sits 25 days before going pending, and then another 45–60 days to close. That's approximately two to three months of carrying costs, agent fees, and uncertainty. A cash sale closes in two weeks with no risk of a deal falling through.",
  },
  {
    question: "What closing costs do I pay when selling to a cash buyer?",
    answer:
      "Zero. We cover all closing costs — title fees, transfer taxes, recording fees, everything. The offer we make is what you walk away with. No deductions at the closing table.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "We call you within hours during business hours. We'll ask 5–10 questions about the property — condition, situation, and your ideal timeline. Within 24 hours, you receive a written cash offer. No pressure. The offer stands on its own.",
  },
];

const kopFAQSchema = faqSchema(FAQ_ITEMS);

export default function KingOfPrussiaMarketPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          kingOfPrussiaLocalBusinessSchema,
          kopFAQSchema,
          howToSchema,
          videoObjectSchema({
          name: 'Sell Your House Fast in King of Prussia, PA',
          description:
            'A short overview of how USA Home Buyers helps King of Prussia, PA homeowners sell as-is for cash with no repairs, no agent commissions, and a no-obligation offer.',
          contentUrl: `${SITE_URL}/videos/king-of-prussia-pa/landing.mp4`,
          thumbnailUrl: `${SITE_URL}/videos/king-of-prussia-pa/landing-poster.jpg`,
          uploadDate: '2026-05-10',
        }),
        ]}
      />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/king-of-prussia-landmark-hero-640.jpg 640w, /images/optimized/king-of-prussia-landmark-hero-828.jpg 828w, /images/optimized/king-of-prussia-landmark-hero-1080.jpg 1080w, /images/optimized/king-of-prussia-landmark-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/king-of-prussia-landmark-hero-1200.jpg"
            alt="King of Prussia PA homes — cash home buyers serving Montgomery County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 ring-1 ring-white/20 mb-3">
              King of Prussia cash home buyer · Written offer in 24 hours
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Sell Your House Fast in King of Prussia, PA — Cash Offer in 24
              Hours
            </h1>
            <p className="text-base md:text-lg text-blue-100 lg:hidden">
              Get a written cash offer for your King of Prussia house in any
              condition — no repairs, no cleaning, no agent fees.
            </p>
          </div>
          <div className="order-2 w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24">
            <CashOfferForm
              variant="hero"
              sourcePage="/markets/king-of-prussia-pa"
            />
          </div>
          <div className="order-3 lg:col-start-1 lg:row-start-2">
            <p className="hidden lg:block text-base md:text-lg text-blue-100 mb-4">
              Get a written cash offer for your King of Prussia house in any
              condition — no repairs, no cleaning, no agent fees. Written offer
              within 24 hours, close in as few as 7 days.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 text-blue-50 text-sm mb-4">
              <span>✓ No repairs or cleaning</span>
              <span>✓ No commissions</span>
              <span>✓ We pay closing costs</span>
              <span>✓ Close in as few as 7 days</span>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="flex w-full sm:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">
              BBB Accredited · 15+ Years Experience · Hundreds of Homes
              Purchased
            </p>
          </div>
        </div>
      </section>

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              King of Prussia mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for King of Prussia homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the King of Prussia section for local market data,
              situation pages, seller guides, and articles before you decide
              whether a cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/king-of-prussia-pa/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              King of Prussia Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-king-of-prussia-pa-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TL;DR — GEO/AEO Quick Answer */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Quick Answer: Sell Your House Fast in King of Prussia, PA
          </h2>
          <p className="text-gray-700 leading-relaxed">
            USA Home Buyers purchases houses in King of Prussia, PA for cash —
            no repairs, no fees, close in your timeline. According to the Zillow
            Home Value Index, the King of Prussia median home value is $498,174
            (2026-03-31, +3.1% year-over-year); Redfin's median closed sale
            price is $540,620. The typical KOP home takes 25 days to go pending
            and another 45–60 days to close — roughly 70–85 days total. We close
            in 7–14 days. No inspections, no appraisals, no financing
            contingencies. Montgomery County's standard 2% transfer tax applies;
            we cover all closing costs.
          </p>
        </section>

        {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
        <VideoEmbed
          src="/videos/king-of-prussia-pa/landing.mp4"
          title="Sell Your House Fast in King of Prussia, PA"
          poster="/videos/king-of-prussia-pa/landing-poster.jpg"
          captionsSrc="/videos/king-of-prussia-pa/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for King of Prussia, PA homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p>If you need to sell a house in King of Prussia, PA, USA Home Buyers can make a no-obligation cash offer. We buy houses as-is, so you do not have to make repairs, clean out the property, or pay agent commissions. Tell us about the house and your timeline. We review the property, answer your questions, and put the offer in writing. If the offer works for you, you choose the closing date. Call 888-274-5006 to get started.</p>
          </div>
        </details>


        {/* How It Works */}
        <HowItWorks heading="How Selling Your King of Prussia Home for Cash Works" />

        {/* Situations */}
        <SituationLinks
          situations={KOP_SITUATIONS}
          heading="We Buy Houses in King of Prussia in Any Situation"
        />

        {/* Market Data */}
        <section className="my-12 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            King of Prussia PA Housing Market — 2026 Numbers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Median home value (Zillow ZHVI)", "$498,174"],
                  ["Median sale price (Redfin, Mar 2026)", "$540,620"],
                  ["Price per square foot", "$267"],
                  ["Average days to pending", "25 days"],
                  ["Total market time (list to close)", "79+ days"],
                  ["Cash offer range (on $500K home)", "$349,000–$399,000"],
                  [
                    "PA transfer tax (Upper Merion Township)",
                    "2% total (1% buyer / 1% seller)",
                  ],
                  ["Redfin Compete Score", "80/100 — Very Competitive"],
                  ["Typical realtor commission", "5–6%"],
                ].map(([metric, value], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-3 px-4 font-medium text-brand-dark rounded-l">
                      {metric}
                    </td>
                    <td className="py-3 px-4 font-bold text-brand-primary rounded-r">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-gray-400">
              Market data last updated: March 2026
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            KOP is competitive — but &quot;competitive&quot; means your home
            sits 25 days before an offer, then another 45–60 days before
            closing. That&apos;s over three months of carrying costs, showings,
            and uncertainty, plus agent fees north of $27,000 on a $500K sale.
          </p>
          <p className="mt-2 text-sm">
            <Link
              href="/markets/king-of-prussia-pa/market-report"
              className="text-brand-primary hover:underline"
            >
              See the full King of Prussia market report →
            </Link>
          </p>
        </section>

        {/* Testimonials */}
        <TestimonialBlock
          testimonials={TESTIMONIALS}
          heading="What King of Prussia Homeowners Are Saying"
        />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in King of Prussia: The Real
            Math
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $500,000 King of Prussia home that needs $40,000 in updates:
            agent commission ($27,500), transfer tax ($5,000 seller share),
            closing costs ($5,000), repairs ($40,000), and three months of
            carrying costs ($6,000) add up to $83,500 in deductions. A cash
            offer at 72% FMV returns $360,000 — the gap is smaller than it
            looks. For sellers with equity but without the time or budget to
            manage a full renovation and listing, a cash sale often makes more
            sense.
          </p>
          <p className="mt-2 text-sm">
            <Link
              href="/resources/cash-offer-vs-listing"
              className="text-brand-primary hover:underline"
            >
              Full comparison: Cash Offer vs. Listing →
            </Link>
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your King of Prussia Cash Offer"
            subheadline="No obligation. Written offer in 24 hours."
            sourcePage="/markets/king-of-prussia-pa"
          />
        </section>

        {/* FAQ */}
        <FAQSection
          items={FAQ_ITEMS}
          heading="Frequently Asked Questions — Selling Your King of Prussia Home"
        />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Montgomery County and Surrounding Areas
          </h2>
          <p className="text-gray-700 mb-4">
            Our primary service area is King of Prussia and Upper Merion
            Township — including Gulph Mills, Swedeland, Swedesford, King Manor,
            and Valley Forge. We buy homes on Henderson Road, Walker Road, Gulph
            Road, and throughout the established residential neighborhoods of
            the 19406 ZIP code.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve the surrounding Montgomery County communities:
            Norristown, Conshohocken, Plymouth Meeting, Bridgeport,
            Collegeville, Eagleville, Trooper, and Audubon. Our reach extends
            into Chester County (Wayne) and Delaware County (Bryn Mawr).
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "King of Prussia",
              "Norristown",
              "Conshohocken",
              "Plymouth Meeting",
              "Bridgeport",
              "Wayne",
              "Collegeville",
              "Gulph Mills",
              "Valley Forge",
              "Bryn Mawr",
              "Eagleville",
              "Trooper",
              "Audubon",
              "Swedeland",
            ].map((city) => (
              <span
                key={city}
                className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks
          marketSlug="king-of-prussia-pa"
          cityName="King of Prussia"
        />

        {/* Guided Survey Form */}
        <section className="my-12 bg-brand-light rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for
              your King of Prussia home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/king-of-prussia-pa" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm
            variant="footer"
            headline="Ready to Sell Your King of Prussia Home?"
            sourcePage="/markets/king-of-prussia-pa"
          />
        </section>
      </div>
    </>
  );
}
