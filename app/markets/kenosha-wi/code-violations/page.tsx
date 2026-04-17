/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { kenoshWILocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/kenosha-wi/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House with Code Violations Kenosha WI',
  description:
    'House with code violations in Kenosha WI? We buy properties with code violations as-is. No repairs required. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a house with code violations in Kenosha WI?',
    answer: 'Yes. We buy properties with open code violations in Kenosha as-is. The violations transfer with the property at closing — you don\'t have to fix them. Most conventional buyers and their lenders can\'t purchase a property with open violations, which is why cash buyers like us are often the only viable option.',
  },
  {
    question: 'What kinds of code violations do you buy?',
    answer: 'All types: structural violations, electrical violations, plumbing violations, fire safety violations, occupancy violations, unpermitted additions, environmental violations. If the city has cited the property, we can still make an offer.',
  },
  {
    question: 'Will the city fines transfer with the property?',
    answer: 'In Wisconsin, municipal fines and liens typically attach to the property, not the owner personally. When we purchase the property, we take it subject to those liens — they don\'t follow you after closing. The price we offer accounts for the outstanding fines and the cost of resolving the violations.',
  },
  {
    question: 'Do I need to disclose the violations to you?',
    answer: 'Yes — we ask about known violations as part of our assessment. We factor them into the offer. Full disclosure protects both parties and ensures there are no surprises at closing.',
  },
];

export default function KenoshaCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        kenoshWILocalBusinessSchema,
        articleSchema('Sell Your Kenosha WI House with Code Violations — As-Is', pageUrl, '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/kenosha-wi-hero-640.jpg 640w, /images/optimized/kenosha-wi-hero-828.jpg 828w, /images/optimized/kenosha-wi-hero-1080.jpg 1080w, /images/optimized/kenosha-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/kenosha-wi-hero-1200.jpg"
            alt="Kenosha WI homes — Sell Your Kenosha WI House with Code Violations — As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/kenosha-wi" className="hover:text-white">Kenosha WI</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Kenosha WI House with Code Violations — As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases properties with city code violations in Kenosha WI — structural issues, electrical, plumbing, fire damage, occupancy violations. We buy as-is. Written cash offer in 24 hours, close in 7-14 days. The violations transfer with the property. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/kenosha-wi/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Data: Kenosha WI — $235,000 Median Price</h2>
          <p className="text-gray-700 mb-4">
            According to Zillow and Redfin data for Kenosha County, the median home value in Kenosha is approximately $235,000. Transfer tax: Wisconsin realty transfer fee — $3.00 per $1,000 of consideration, paid by seller. On a $235,000 sale: $705. Source: Wisconsin Department of Revenue (revenue.wi.gov).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Kenosha WI" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Kenosha WI</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/kenosha-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/kenosha-wi/foreclosure', label: 'Foreclosure' },
              { href: '/markets/kenosha-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/kenosha-wi/probate', label: 'Probate' },
              { href: '/markets/kenosha-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/kenosha-wi', label: '← Back to Kenosha' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Kenosha WI Property?" sourcePage="/markets/kenosha-wi/code-violations" />
      </div>
    </>
  );
}
