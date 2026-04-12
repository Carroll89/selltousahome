import type { Metadata } from 'next';
import Image from 'next/image';
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
    'USA Home Buyers purchases homes for cash in any condition. No repairs, no agent fees, close in 7-14 days. Serving Harrisburg PA and Central Pennsylvania.',
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
  { value: '200+', label: 'Homes purchased in Central PA' },
  { value: '24 hrs', label: 'Written cash offer turnaround' },
  { value: '7-14 days', label: 'Average close time' },
  { value: 'PA', label: 'Licensed Real Estate Investor' },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, harrisburgFAQSchema, howToSchema]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Harrisburg PA neighborhood — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast for Cash — Any Condition, Any Situation
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              USA Home Buyers purchases homes in Harrisburg PA and Central Pennsylvania for cash in any condition.
              No repairs, no agent fees, no waiting 60-90 days. Written cash offer in 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 text-blue-100 text-sm mb-6">
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
              <p className="text-gray-600 text-sm">Dauphin County & Cumberland County — our primary market</p>
            </Link>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-400 text-lg mb-1">Camp Hill / Mechanicsburg</h3>
              <p className="text-gray-400 text-sm">Cumberland County — coming soon</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-400 text-lg mb-1">Lebanon / York Counties</h3>
              <p className="text-gray-400 text-sm">Central PA expansion — coming soon</p>
            </div>
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
              { title: 'Licensed PA Investor', desc: 'Verified business with a track record of closed sales in Dauphin and Cumberland Counties you can check at the county recorder.' },
              { title: 'Local Experts', desc: '5+ years buying homes in Harrisburg. We know Steelton, Penbrook, Allison Hill, Camp Hill, and everywhere in between.' },
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
