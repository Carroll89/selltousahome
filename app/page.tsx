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
  alternates: { canonical: 'https://selltousahome.com' },
};

const TESTIMONIALS = [
  {
    quote: 'After my mother passed, my brother and I inherited her house off Derry Street. USA Home Buyers made us a fair offer and closed in 12 days. We didn\'t have to do a thing to the house.',
    name: 'Sandra M.',
    location: 'Paxtang, PA',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
  },
  {
    quote: 'I was four months behind on my mortgage and the letters were piling up. USA Home Buyers explained everything, the offer was fair, and we closed before things got any worse.',
    name: 'James R.',
    location: 'Steelton, PA',
    situation: 'Behind on Payments — Pre-Foreclosure',
    date: 'February 2026',
  },
  {
    quote: 'I had a tenant who stopped paying rent and wouldn\'t leave. USA Home Buyers bought the property with the tenant still in it. Done.',
    name: 'Carol T.',
    location: 'Harrisburg, PA',
    situation: 'Rental Property — Problem Tenant',
    date: 'January 2026',
  },
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
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors"
            >
              📞 Call Now — We Answer 24/7
            </a>
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
