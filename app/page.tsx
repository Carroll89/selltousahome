import type { Metadata } from 'next';

import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { SituationLinks } from '@/components/SituationLinks';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { localBusinessSchema, harrisburgFAQSchema, howToSchema } from '@/lib/schema';
import { PHONE } from '@/lib/utils';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sell Your House Fast for Cash',
  description:
    'USA Home Buyers purchases homes for cash in any condition. No repairs, no agent fees, close in 7-14 days. Serving Harrisburg, Allentown, King of Prussia, Reading, State College, and all of Pennsylvania.',
  alternates: { canonical: 'https://www.selltousahome.com' },
};

const TESTIMONIALS = [
  {
    "quote": "After my mother passed, my brother and I inherited her house off Derry Street. Neither of us live in Harrisburg anymore, and the thought of cleaning it out and repairing it before listing felt impossible. USA Home Buyers made us a fair offer and closed in 12 days. We didn't have to do a thing.",
    "name": "Sandra M.",
    "location": "Paxtang, PA",
    "situation": "Inherited Property — Estate Sale",
    "date": "March 2026"
  },
  {
    "quote": "My father worked at Youngstown Sheet and Tube his whole life. When he passed, I inherited the house on the South Side — built in 1928, deferred maintenance for 20 years. I live in Cleveland now. USA Home Buyers made a written offer the next day and closed in 11 days. I didn't have to touch a single thing.",
    "name": "Gerald M.",
    "location": "South Side, Youngstown OH",
    "situation": "Inherited Property — Estate Sale",
    "date": "February 2026"
  },
  {
    "quote": "I got behind after losing my job at MassMutual. The mortgage servicer was already sending notices and Massachusetts foreclosure moves fast — non-judicial, no court. USA Home Buyers explained the timeline and we closed before it got to auction. I walked away with money I didn't know I could keep.",
    "name": "Darnell W.",
    "location": "Six Corners, Springfield MA",
    "situation": "Pre-Foreclosure — Behind on Payments",
    "date": "November 2025"
  },
  {
    "quote": "We inherited my aunt's cream brick cottage on the Northside — knob-and-tube wiring, original slate roof that was about to go, nobody in the family lives in Racine anymore. I reached out Tuesday evening. USA Home Buyers had a written cash offer at my email Wednesday morning. Closed in 11 days. No cleanout, no repairs.",
    "name": "Thomas H.",
    "location": "Northside Historic District, Racine WI",
    "situation": "Inherited Property — Estate Sale",
    "date": "March 2025"
  },
  {
    "quote": "I relocated to Boston for work and had my Manchester house on the market for three months with an agent — two failed offers, one buyer who couldn't get financing. USA Home Buyers gave me a written number the next morning and we closed before my lease on the new apartment ran out. Should have called them first.",
    "name": "Lisa F.",
    "location": "North End, Manchester NH",
    "situation": "Relocation — Carrying Two Properties",
    "date": "September 2025"
  },
  {
    "quote": "My divorce required selling the house in Black Rock. My ex and I couldn't agree on anything. USA Home Buyers gave one offer, one closing date, and the proceeds split through our attorneys. Three weeks from first call to cash in hand. The simplest part of the whole divorce, honestly.",
    "name": "Ana M.",
    "location": "Black Rock, Bridgeport CT",
    "situation": "Divorce Sale",
    "date": "July 2025"
  },
  {
    "quote": "Fifty years in Corn Hill. We raised our kids there and watched the neighborhood come back to life. But property taxes hit $7,800 this year and we're both past seventy on fixed incomes. USA Home Buyers were fair and honest, and we closed in 8 days. We're in a senior community in Pittsford now. Good neighbors.",
    "name": "Norman and Betty S.",
    "location": "Corn Hill, Rochester NY",
    "situation": "Downsizing — Retirement",
    "date": "January 2026"
  }
];

const STATS = [
  { value: 'Hundreds', label: 'Homeowners helped across 11 states' },
  { value: '24 hrs', label: 'Written cash offer turnaround' },
  { value: '7-14 days', label: 'Average close time' },
  { value: 'A+', label: 'BBB Accredited Business' },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, harrisburgFAQSchema, howToSchema]} />

      {/* Hero */}
      <section className="relative text-white py-6 md:py-12 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/harrisburg-hero-640.jpg 640w, /images/optimized/harrisburg-hero-828.jpg 828w, /images/optimized/harrisburg-hero-1080.jpg 1080w, /images/optimized/harrisburg-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/harrisburg-hero-1200.jpg"
            alt="Harrisburg PA neighborhood — sell your house fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              Sell Your House Fast for Cash
              <span className="hidden md:inline"> — Any Condition, Any Situation</span>
            </h1>
            <p className="text-sm text-blue-100 mb-3">
              Hundreds of homes purchased across 11 states · Written offer in 24 hours
            </p>
            <p className="hidden lg:block text-xl text-blue-100 mb-6">
              USA Home Buyers purchases homes across Pennsylvania for cash in any condition.
              No repairs, no agent fees, no waiting 60–90 days. Written cash offer in 24 hours.
            </p>
            <div className="hidden lg:flex flex-wrap gap-4 text-blue-100 text-sm mb-6">
              <span>✓ No repairs required</span>
              <span>✓ No agent commissions</span>
              <span>✓ Close in 7-14 days</span>
              <span>✓ We cover all closing costs</span>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/" />
          </div>
        </div>
      </section>

      {/* Mobile-only brochure content — desktop sees this in the hero left column */}
      <section className="lg:hidden bg-brand-dark text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-blue-100 mb-4">
            USA Home Buyers purchases homes across Pennsylvania for cash in any condition.
            No repairs, no agent fees, no waiting 60–90 days. Written cash offer in 24 hours.
          </p>
          <div className="flex flex-wrap gap-3 text-blue-100 text-sm">
            <span>✓ No repairs required</span>
            <span>✓ No agent commissions</span>
            <span>✓ Close in 7–14 days</span>
            <span>✓ We cover all closing costs</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-primary text-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-blue-100 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works */}
        <HowItWorks heading="How Selling Your House for Cash Works" />

        {/* Markets */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">
            Markets We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/markets/harrisburg-pa"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">Harrisburg, PA</h3>
              <p className="text-gray-600 text-sm">Dauphin County & Cumberland County</p>
            </Link>
            <Link
              href="/markets/allentown-pa"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">Allentown, PA</h3>
              <p className="text-gray-600 text-sm">Lehigh County & Lehigh Valley</p>
            </Link>
            <Link
              href="/markets/king-of-prussia-pa"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">King of Prussia, PA</h3>
              <p className="text-gray-600 text-sm">Montgomery County & suburban Philadelphia</p>
            </Link>
            <Link
              href="/markets/reading-pa"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">Reading, PA</h3>
              <p className="text-gray-600 text-sm">Berks County</p>
            </Link>
            <Link
              href="/markets/state-college-pa"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">State College, PA</h3>
              <p className="text-gray-600 text-sm">Centre County</p>
            </Link>
            <Link
              href="/markets/erie-pa"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">Erie, PA</h3>
              <p className="text-gray-600 text-sm">Erie County — Northwest PA</p>
            </Link>
            <Link
              href="/markets/bethlehem-pa"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">Bethlehem, PA</h3>
              <p className="text-gray-600 text-sm">Northampton County — Lehigh Valley</p>
            </Link>
            <Link
              href="/markets/lancaster-pa"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">Lancaster, PA</h3>
              <p className="text-gray-600 text-sm">Lancaster County — PA Dutch Country</p>
            </Link>
            <Link
              href="/markets/york-pa"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">York, PA</h3>
              <p className="text-gray-600 text-sm">York County — First US Capital</p>
            </Link>
            <Link
              href="/markets/youngstown-oh"
              className="block bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-brand-primary text-lg mb-1">Youngstown, OH</h3>
              <p className="text-gray-600 text-sm">Mahoning County — Rust Belt, Ohio</p>
            </Link>
          </div>
        </section>

        {/* Situation Links */}
        <SituationLinks />

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} />

        {/* Why Us */}
        <section className="my-12 bg-brand-light rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">
            Why Choose USA Home Buyers?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Written Offers Only', desc: 'We never make verbal promises. Every offer is a formal written purchase agreement with price, terms, and closing date.' },
              { title: 'Licensed PA Investor', desc: 'Verified business with a track record of closed sales across Pennsylvania — check the county recorder in any market we serve.' },
              { title: 'Local Experts', desc: '15+ years buying homes across PA. Harrisburg, Allentown, King of Prussia — we know the neighborhoods, the numbers, and the process.' },
              { title: 'No Pressure, Ever', desc: 'The offer stands on its own. Take your time reviewing it. We don\'t do high-pressure follow-up calls.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 bg-brand-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA form */}
        <section className="my-12">
          <CashOfferForm variant="inline" headline="Ready to Get Your Cash Offer?" sourcePage="/" />
        </section>
      </div>
    </>
  );
}
