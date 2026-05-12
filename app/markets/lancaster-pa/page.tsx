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
import {
  lancasterLocalBusinessSchema,
  lancasterFAQSchema,
  lancasterHowToSchema,
  videoObjectSchema,
} from "@/lib/schema";
import { PHONE, SITE_URL } from "@/lib/utils";
import { BlogClusterLinks } from "@/components/BlogClusterLinks";
import { MultiStepForm } from "@/components/MultiStepForm";
import { VideoEmbed } from "@/components/VideoEmbed";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Sell My House Fast Lancaster PA",
  description:
    "We buy houses in Lancaster PA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no agent fees. Lancaster County. Hablamos español.",
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa` },
  openGraph: {
    images: [
      {
        url: "/images/lancaster-pa-representative-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Representative Lancaster PA Cabbage Hill brick rowhouses — Sell Your House Fast for Cash",
      },
    ],
  },
};

const TESTIMONIALS = [
  {
    quote:
      "My father owned a row home on Dauphin Street in Cabbage Hill for 40 years. After he passed, I inherited a property with knob-and-tube wiring, a failed furnace, and a tenant who was months behind on rent. I live in Delaware — managing a Lancaster property from out of state was impossible. USA Home Buyers made a written offer within 24 hours and closed in 11 days.",
    name: "Robert C.",
    location: "Cabbage Hill, Lancaster PA",
    situation: "Inherited Property — Estate Sale",
    date: "March 2026",
  },
  {
    quote:
      "I got a Case Management Order from Lancaster County Court — the foreclosure diversion hold. I had maybe six weeks before the conciliation conference. USA Home Buyers knew exactly what that meant. They got me a written offer in 18 hours, we closed before the conference date, and I walked away with equity instead of a sheriff sale on my record.",
    name: "Angela M.",
    location: "West End, Lancaster PA",
    situation: "Foreclosure Diversion — Pre-Foreclosure Sale",
    date: "February 2026",
  },
  {
    quote:
      "Divorce sale on our house on Hershey Avenue. My ex and I couldn't agree on anything, but we both agreed we needed it done fast and clean. One written number, no repair arguments, closed in 9 days. The attorney handled the rest. Cleanest part of the whole divorce.",
    name: "Donna R.",
    location: "Southeast Lancaster, PA",
    situation: "Divorce Sale — Split Proceeds",
    date: "January 2026",
  },
  {
    quote:
      "I had a rental row home on Beaver Street for seven years. Section 8, fine at first. Last two years, the city cited me four times for violations — exterior, plumbing, smoke detectors. I fixed everything twice and still got re-cited. USA Home Buyers bought it in eleven days, citations and all.",
    name: "Pedro A.",
    location: "Southeast Lancaster, PA",
    situation: "Rental Property — Code Violations",
    date: "June 2025",
  },
  {
    quote:
      "Armstrong called me about a position at their Florida office. I had five weeks. The house in Manheim Township was in good shape but I didn't have time for showings and waiting. USA Home Buyers gave me a written offer in eighteen hours. I accepted, we closed in nine days, and I drove to Florida with a clear head.",
    name: "Jennifer K.",
    location: "Manheim Township, PA",
    situation: "Relocation — Corporate Transfer",
    date: "September 2025",
  },
  {
    quote:
      "Our house on Lime Street had a slab crack that had been shifting for years. The structural engineer said the foundation needed $52,000 in repairs minimum, possibly more once they opened the walls. No conventional buyer would touch it. USA Home Buyers gave me a real offer the next day. Closed in thirteen days.",
    name: "Harold B.",
    location: "Conestoga Village, Lancaster PA",
    situation: "Foundation Damage — Structural",
    date: "November 2025",
  },
  {
    quote:
      "I'm sixty-eight, my husband passed, and I was in a four-bedroom house by myself on Fruitville Pike. Couldn't keep up with the yard, the exterior needed paint, and I just didn't want to deal with it. USA Home Buyers gave me a fair offer. I closed in ten days and moved into a smaller place near my daughter.",
    name: "Ruth M.",
    location: "Lancaster City, PA",
    situation: "Downsizing — Widowed",
    date: "January 2025",
  },
];

const COMPARISON_ROWS = [
  {
    label: "Offer timeline",
    cashBuyer: "24 hours",
    traditional: "14-60 days to get an offer",
  },
  {
    label: "Closing timeline",
    cashBuyer: "7-14 days",
    traditional: "45-60+ days",
  },
  {
    label: "Repairs required",
    cashBuyer: "None — we buy as-is",
    traditional: "Usually required ($8K-$22K avg)",
  },
  {
    label: "Agent commissions",
    cashBuyer: "$0",
    traditional: "5-6% (~$17,500-$21,000 on $350K county median)",
  },
  {
    label: "Transfer tax (2%)",
    cashBuyer: "We cover all closing costs",
    traditional: "Seller pays ~1% local portion (~$3,500 on $350K)",
  },
  {
    label: "Sale certainty",
    cashBuyer: "Guaranteed — written contract",
    traditional: "15-20% of listings fall through",
  },
  {
    label: "Average net proceeds",
    cashBuyer: "70-80% of FMV (no deductions)",
    traditional: "85-90% FMV minus repairs, commissions, costs",
  },
];

const FAQ_ITEMS = [
  {
    question: "How fast can I sell my house for cash in Lancaster PA?",
    answer:
      "Once you accept a written offer, we close in 7-14 days. We send the written offer within 24 hours of your inquiry. According to Redfin, Lancaster City median days on market is 22 days (March 2026) — but that path requires showings, inspections, and waiting on mortgage lender approval. With a cash sale, there's no bank involved, no contingency period.",
  },
  {
    question: "What is the transfer tax when selling in Lancaster PA?",
    answer:
      "Lancaster PA has a 2% total real estate transfer tax — 1% Commonwealth of Pennsylvania plus 1% local (split between City of Lancaster and the School District of Lancaster per PA Act 77). By convention, buyer and seller each pay 1%. On a $235,000 home, the total is $4,700 — seller's share is $2,350. When you sell to us, we cover all closing costs including the full transfer tax. Source: PA Dept. of Revenue; ALT Title PA Transfer Tax Deviations (July 2025).",
  },
  {
    question: "How much will you pay for my Lancaster PA house?",
    answer:
      "Cash offers for Lancaster homes typically range from 70-80% of fair market value. According to Redfin, the Lancaster City median sale price is $255,000 (March 2026). Cabbage Hill and West End rowhouses near the $233,000 neighborhood median yield cash offers of approximately $163,000-$186,000. We cover all closing costs — no agent commissions, no fees deducted from your number.",
  },
  {
    question: "Do I need to make repairs before selling?",
    answer:
      "No. Lancaster City's housing stock is overwhelmingly pre-1940 brick construction — rowhouses and twins built for workers in the late 19th and early 20th centuries. According to the City of Lancaster's 2021 CRA Housing Report, the majority of city stock is single-family and multi-unit attached housing with aging systems and deferred maintenance. That's exactly the kind of house we buy every week.",
  },
  {
    question: "What neighborhoods in Lancaster do you buy in?",
    answer:
      "All of Lancaster City and the surrounding county — Cabbage Hill, West End, Chestnut Hill, Musser Park, Old Town, Southeast Lancaster, and downtown. We also serve Lititz, Ephrata, Manheim, Columbia, Mount Joy, Elizabethtown, Millersville, New Holland, Quarryville, Strasburg, East Petersburg, Marietta, and Mountville.",
  },
  {
    question:
      "¿Compran casas en Lancaster PA? / Do you work with Spanish-speaking sellers?",
    answer:
      "Sí, hablamos español. According to the U.S. Census Bureau ACS, 40.6% of Lancaster City residents are Hispanic or Latino — the highest concentration of any market we serve. We serve the Lancaster community in both English and Spanish. Call us, fill out the form, or stop by. Entendemos el vecindario y el proceso.",
  },
  {
    question: "Is USA Home Buyers a legitimate company?",
    answer:
      "We're a Pennsylvania LLC. Every offer is in writing — a formal purchase agreement with price, terms, and closing date. No verbal promises. You can verify our Pennsylvania business registration at corporations.pa.gov. We've closed sales throughout Lancaster County.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "We call you within hours during business hours. We'll ask about the property — condition, situation, your timeline. Within 24 hours you receive a written cash offer. The offer stands on its own — no pressure, no obligation. If you accept, we pick a closing date that works for you.",
  },
];

export default function LancasterMarketPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          lancasterLocalBusinessSchema,
          lancasterFAQSchema,
          lancasterHowToSchema,
          videoObjectSchema({
            name: "Sell My House Fast Lancaster PA — USA Home Buyers",
            description:
              "Cash offers for Lancaster and Lancaster County homes — any condition",
            contentUrl: `${SITE_URL}/videos/lancaster-pa/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/videos/lancaster-pa/landing-poster.jpg`,
            uploadDate: "2026-05-12",
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/lancaster-pa-representative-hero-640.jpg 640w, /images/optimized/lancaster-pa-representative-hero-828.jpg 828w, /images/optimized/lancaster-pa-representative-hero-1080.jpg 1080w, /images/optimized/lancaster-pa-representative-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/lancaster-pa-representative-hero-1200.jpg"
            alt="Representative Lancaster PA Cabbage Hill brick rowhouses — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 ring-1 ring-white/20 mb-3">
              Lancaster cash home buyer · Written offer in 24 hours
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Sell Your House Fast in Lancaster, PA — Cash Offer in 24 Hours
            </h1>
            <p className="text-base md:text-lg text-blue-100 lg:hidden">
              Get a written cash offer for your Lancaster house in any condition
              — no repairs, no cleaning, no agent fees.
            </p>
          </div>
          <div className="order-2 w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24">
            <CashOfferForm variant="hero" sourcePage="/markets/lancaster-pa" />
          </div>
          <div className="order-3 lg:col-start-1 lg:row-start-2">
            <p className="hidden lg:block text-base md:text-lg text-blue-100 mb-4">
              Get a written cash offer for your Lancaster house in any condition
              — no repairs, no cleaning, no agent fees. Written offer within 24
              hours, close in as few as 7 days.
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
              Lancaster mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Lancaster homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Lancaster section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/lancaster-pa/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Lancaster Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-lancaster-pa-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
      <VideoEmbed
        src="/videos/lancaster-pa/landing.mp4"
        poster="/videos/lancaster-pa/landing-poster.jpg"
        captionsSrc="/videos/lancaster-pa/landing-captions.vtt"
        captionsLabel="English captions"
        title="Sell My House Fast Lancaster PA — USA Home Buyers"
        subtitle="Cash offers for Lancaster and Lancaster County homes — any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p>If you need to sell a house in Lancaster, Pennsylvania, we can make you a simple cash offer and buy the property as is — meaning no repairs, no cleanup, and no open houses.</p>
            <p>This can help if you inherited a house, have tenants you do not want to manage, are behind on payments, have code violations, or just need a clean way to move on.</p>
            <p>We handle houses across Lancaster and the surrounding area, including older brick rowhomes, capes and single-family homes, and brick twins and attached homes that need work.</p>
            <p>There are no commissions, no agent showings, and no pressure. If the offer works for you, you choose the closing date.</p>
            <p>Call eight eight eight, two seven four, five zero zero six, and we will walk you through your options.</p>
        </div>
      </details>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lancaster-specific context — Amish Country + Cabbage Hill */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Lancaster PA Housing: Pre-1940 Rowhouses, PA Dutch Farmsteads, and a
            Market That Moves Fast
          </h2>
          <p className="text-gray-700 mb-4">
            Lancaster isn't a suburb. The city core is dense pre-war brick —
            rowhouses packed into neighborhoods like Cabbage Hill and West End,
            built in the late 1800s and early 1900s for factory and mill
            workers. According to the City of Lancaster's 2021 CRA Housing
            Report, the majority of city housing stock is single-family attached
            (rowhouses) with aging systems and significant deferred maintenance.
            Beyond the city, Lancaster County stretches into genuine
            Pennsylvania Dutch Country — stone farmhouses, Amish farmsteads, and
            multigenerational rural properties that carry their own set of
            estate and probate complexities.
          </p>
          <p className="text-gray-700 mb-4">
            The city's Central Market — the oldest publicly operated farmers'
            market in the United States — anchors a downtown that's seen real
            revitalization. But that rising tide lifts some boats and leaves
            others behind. Many longtime homeowners in Cabbage Hill and West End
            sit on properties they can't afford to fix and can't afford to walk
            away from. That's where we come in.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              {
                label: "Redfin Compete Score",
                value: "Very Competitive",
                note: "Lancaster City (Mar 2026) — Redfin",
              },
              {
                label: "Hispanic residents",
                value: "40.6%",
                note: "Highest of any market we serve — ACS 2024",
              },
              {
                label: "City Redfin Sale Price",
                value: "$255,000",
                note: "Median sale price, Mar 2026 — Redfin",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-blue-100 rounded-xl p-4 text-center"
              >
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-brand-dark">
                  {item.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            Lancaster also has an active Foreclosure Diversion Program — the
            county court issues Case Management Orders that put a hold on
            proceedings and require housing counseling. Sellers caught in that
            program need a fast, credible exit. That's the window we fill.
          </p>
        </section>

        {/* Market Data Table */}
        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Lancaster PA Housing Market — 2026 Data
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  [
                    "Median sale price — city (Redfin, Mar 2026)",
                    "$255,000 (−0.2% YoY, 63 sales)",
                  ],
                  [
                    "Median sale price — county (Redfin, Mar 2026)",
                    "$349,775 / ~$350K (+5.8% YoY, 366 sales)",
                  ],
                  ["Price per sq ft — city (Redfin, Mar 2026)", "$179/sqft"],
                  ["Price per sq ft — county (Redfin, Mar 2026)", "$203/sqft"],
                  [
                    "Median days on market — city (Redfin, Mar 2026)",
                    "22 days",
                  ],
                  [
                    "Median days on market — county (Redfin, Mar 2026)",
                    "12 days",
                  ],
                  ["Sale-to-list ratio — city (Redfin, Mar 2026)", "99.2%"],
                  [
                    "Sale-to-list ratio — county (Redfin, Mar 2026)",
                    "101.9% — seller's market",
                  ],
                  ["Redfin Compete Score — city", "Very Competitive"],
                  [
                    "Lancaster County ZHVI (Zillow, Mar 2026)",
                    "$381,587 (+4.49% YoY) — county context only",
                  ],
                  [
                    "Cabbage Hill median price (Redfin, Feb 2026)",
                    "$233,000 (+17.1% YoY)",
                  ],
                  [
                    "Cash offer range (typical)",
                    "$233,000–$266,000 (70-80% of city median)",
                  ],
                  [
                    "Cabbage Hill cash offer range",
                    "$163,000–$186,000 (70-80% of $233K)",
                  ],
                  [
                    "Transfer tax",
                    "2% total (1% PA state + 1% City/School District)",
                  ],
                  [
                    "Transfer tax — typical split",
                    "Buyer and seller each pay 1%",
                  ],
                  [
                    "Typical realtor commission",
                    "5–6% (~$16,600-$19,900 on $332K home)",
                  ],
                  [
                    "Hispanic population — city",
                    "40.6% — ACS 2024 (highest of any market we serve)",
                  ],
                  [
                    "Homeownership rate — city",
                    "~48.6% (DataUSA, ACS-derived)",
                  ],
                  [
                    "Housing stock",
                    "Majority pre-1940 brick rowhouses and twins — City of Lancaster CRA Report 2021",
                  ],
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
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Market data last updated: April 2026
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Lancaster County is a seller’s market — city sale-to-list is 99.2%
            and county sale-to-list is 101.9%. But “competitive” only applies to
            move-in-ready properties. Cabbage Hill and West End rowhouses with
            deferred maintenance, code issues, or complicated ownership can sit
            for months. For those sellers, a cash offer is certainty the retail
            market won't provide.
          </p>
          <p className="mt-2 text-sm">
            <Link
              href="/markets/lancaster-pa/market-report"
              className="text-brand-primary hover:underline"
            >
              See the full Lancaster PA market report →
            </Link>
          </p>
        </section>

        {/* Hablamos Español — prominent placement unique to Lancaster */}
        <section className="my-10 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Hablamos Español — Servimos a la Comunidad de Lancaster
          </h2>
          <p className="text-gray-700 mb-3">
            According to the U.S. Census Bureau ACS, 40.6% of Lancaster City
            residents are Hispanic or Latino. Lancaster's Spanish-speaking
            community — primarily Puerto Rican and Dominican families — has been
            part of this city for generations, concentrated in Cabbage Hill,
            West End, and Southeast Lancaster.
          </p>
          <p className="text-gray-700 mb-4">
            Compramos casas en Lancaster, PA. Si necesita vender su casa rápido
            — sin reparaciones, sin agentes, sin complicaciones — llámenos.
            Ofrecemos una oferta en efectivo en 24 horas y cerramos en 7 días.
            Hablamos español y entendemos su situación.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-3 transition-colors"
          >
            📞 Llámenos — Se Habla Español
          </a>
        </section>

        {/* How It Works */}
        <HowItWorks heading="How Selling Your Lancaster PA House for Cash Works" />

        {/* Situations */}
        <SituationLinks
          heading="We Buy Houses in Lancaster in Any Situation"
          situations={[
            {
              label: "Inherited or Estate Property",
              href: "/markets/lancaster-pa/inherited-property",
              description:
                "Sell an inherited Lancaster rowhouse or county farmstead without cleanout",
            },
            {
              label: "Going Through Divorce",
              href: "/markets/lancaster-pa/divorce-sale",
              description:
                "Close quickly, split proceeds cleanly — no repair disputes",
            },
            {
              label: "Facing Foreclosure",
              href: "/markets/lancaster-pa/foreclosure",
              description:
                "Lancaster County's Foreclosure Diversion Program creates a narrow window — sell now",
            },
            {
              label: "Probate Sale",
              href: "/markets/lancaster-pa/probate",
              description:
                "We work with Lancaster County Register of Wills and estate executors regularly",
            },
            {
              label: "Tenant-Occupied Property",
              href: "/markets/lancaster-pa/tenant-occupied",
              description:
                "We buy with tenants still in place — no eviction required",
            },
            {
              label: "Code Violations",
              href: "/markets/lancaster-pa/code-violations",
              description:
                "Open permits, failed inspections, condemned properties — we buy anyway",
            },
            {
              label: "Fire Damage",
              href: "/markets/lancaster-pa/fire-damage",
              description:
                "Fire or smoke damage? We purchase as-is with no cleanup required",
            },
            {
              label: "Needs Repairs (Sell As-Is)",
              href: "/guides/sell-as-is",
              description: "Foundation, roof, plumbing — we buy it anyway",
            },
            {
              label: "Back Taxes or Liens",
              href: "/guides/back-taxes",
              description: "Unpaid taxes and liens get handled at closing",
            },
          ]}
        />

        {/* Testimonials */}
        <TestimonialBlock
          testimonials={TESTIMONIALS}
          heading="What Lancaster PA Homeowners Are Saying"
        />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Lancaster PA
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $349,775 Lancaster County median home, a 5-6% agent commission
            is $17,500-$21,000. Add inspection repairs on a pre-1940 Cabbage
            Hill rowhouse, 45-60 days of carrying costs, and transfer tax — the
            real gap between a cash offer and a traditional listing is narrower
            than most sellers expect, and the certainty is incomparable.
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Lancaster PA Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs."
            sourcePage="/markets/lancaster-pa"
          />
        </section>

        {/* FAQ */}
        <FAQSection
          items={FAQ_ITEMS}
          heading="Frequently Asked Questions — Selling Your Lancaster PA Home for Cash"
        />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Lancaster City and Lancaster County
          </h2>
          <p className="text-gray-700 mb-4">
            Our primary market is Lancaster City — Cabbage Hill, West End,
            Chestnut Hill, Musser Park, Old Town, Southeast Lancaster, and the
            Central Business District near Lancaster Central Market. We know
            these neighborhoods: the dense rowhouse blocks off Manor Street, the
            Victorians near Franklin & Marshall, the narrow lots on Dauphin and
            Rockland Streets.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve all of Lancaster County — from the suburban townships
            of Manheim, Lancaster Township, and Manor to the small boroughs of
            Lititz, Ephrata, Columbia, Elizabethtown, and Millersville. If
            you're in Amish Country with a farmstead that's been in the family
            for generations, we handle those estate situations too.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Cabbage Hill",
              "West End Lancaster",
              "Chestnut Hill",
              "Musser Park",
              "Southeast Lancaster",
              "Downtown Lancaster",
              "Lititz",
              "Ephrata",
              "Manheim",
              "Columbia",
              "Mount Joy",
              "Elizabethtown",
              "Millersville",
              "New Holland",
              "Quarryville",
              "Strasburg",
              "East Petersburg",
              "Marietta",
              "Mountville",
              "Akron",
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

        {/* Neighborhoods link */}
        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">
            Lancaster PA Neighborhoods We Serve
          </h2>
          <p className="text-gray-700 text-sm mb-3">
            From Cabbage Hill rowhouses to rural Lancaster County farmsteads —
            we buy in every Lancaster neighborhood and township.
          </p>
          <Link
            href="/markets/lancaster-pa/neighborhoods"
            className="text-brand-primary hover:underline font-medium text-sm"
          >
            See neighborhood-by-neighborhood price ranges and investor data →
          </Link>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks marketSlug="lancaster-pa" cityName="Lancaster" />

        {/* Guided Survey Form */}
        <section
          className="my-12 bg-brand-light rounded-2xl p-8"
          id="survey-form"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for
              your Lancaster PA home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/lancaster-pa" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm
            variant="footer"
            headline="Ready to Sell Your Lancaster PA Home?"
            sourcePage="/markets/lancaster-pa"
          />
        </section>
      </div>
    </>
  );
}
