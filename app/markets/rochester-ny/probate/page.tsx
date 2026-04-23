/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { rochesterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rochester-ny/probate`;

export const metadata: Metadata = {
  title: 'Sell House in Probate Rochester NY',
  description:
    'Selling a house through Monroe County probate? We buy probate properties as-is. Written offer in 24 hours. Close after probate clears.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a probate property in Rochester before probate is complete?',
    answer: 'You can sign a purchase agreement before probate is complete, with closing contingent on the personal representative receiving court authority. This way you have a buyer lined up and can close quickly once the court grants authority. We frequently structure deals this way for estates in Monroe County.',
  },
  {
    question: 'Where is the probate court for Monroe County?',
    answer: 'The probate court for Monroe County is: Monroe County Surrogate\'s Court, 99 Exchange Blvd, Rochester NY 14614 (Hall of Justice), (585) 371-3310. This court handles all probate proceedings for decedents who owned property in the county.',
  },
  {
    question: 'How long does probate take in New York?',
    answer: 'New York probate timelines vary by complexity. Informal probate for straightforward estates can resolve in as little as 2-4 months. Contested estates requiring formal probate may take 12-24 months. The personal representative can often sell property before the estate is fully closed, once the court grants authority.',
  },
  {
    question: 'Do I need to clean out the house before selling?',
    answer: 'No. We buy probate properties in Rochester exactly as-is. Leave everything you don\'t want — belongings, furniture, old appliances. We handle the cleanout after closing.',
  },
];

export default function RochesterProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        rochesterLocalBusinessSchema,
        articleSchema('Sell Your Rochester NY Probate Property — Fast, As-Is', pageUrl, '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/rochester-ny-hero-640.jpg 640w, /images/optimized/rochester-ny-hero-828.jpg 828w, /images/optimized/rochester-ny-hero-1080.jpg 1080w, /images/optimized/rochester-ny-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/rochester-ny-hero-1200.jpg"
            alt="Rochester NY homes — Sell Your Rochester NY Probate Property — Fast, As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/rochester-ny" className="hover:text-white">Rochester NY</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Rochester NY Probate Property — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Rochester NY through Monroe County Surrogate's Court. Written cash offer in 24 hours, close after the court grants authority. Any condition, no repairs, no cleanout. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/rochester-ny/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Data: Rochester NY — $162,000 Median Price</h2>
          <p className="text-gray-700 mb-4">
            According to Zillow and Redfin data for Monroe County, the median home value in Rochester is approximately $162,000. Transfer tax: New York State Real Property Transfer Tax — $4.00 per $1,000 of consideration (0.4%). Seller pays. Monroe County does not impose an additional county transfer tax. On a $162,000 sale: $648. Source: NY Department of Taxation and Finance (tax.ny.gov).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Rochester NY" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Rochester NY</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/rochester-ny/inherited-property', label: 'Inherited Property' },
              { href: '/markets/rochester-ny/foreclosure', label: 'Foreclosure' },
              { href: '/markets/rochester-ny/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/rochester-ny/probate', label: 'Probate' },
              { href: '/markets/rochester-ny/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/rochester-ny', label: '← Back to Rochester' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Rochester NY Property?" sourcePage="/markets/rochester-ny/probate" />
      </div>
    </>
  );
}
