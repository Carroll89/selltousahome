/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { rochesterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rochester-ny/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Rochester NY',
  description:
    'Facing foreclosure in Rochester NY? We buy houses before the judicial. Written offer in 24 hours. Close in 7 days. No fees.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Rochester NY?',
    answer: 'We can close in as few as 7 days once you accept an offer. New York judicial foreclosure. Lender files in Monroe County Supreme Court (RPAPL §1301). Timeline from first missed payment to referee\'s sale: typically 12-24 months. NY requires a 90-day pre-foreclosure notice (RPAPL §1304) before filing. Source: NY Real Property Actions and Proceedings Law (nysenate.gov). Speed is critical in Rochester foreclosure situations — call 888-274-5006 immediately.',
  },
  {
    question: 'What is the foreclosure process in Monroe County?',
    answer: 'New York judicial foreclosure. Lender files in Monroe County Supreme Court (RPAPL §1301). Timeline from first missed payment to referee\'s sale: typically 12-24 months. NY requires a 90-day pre-foreclosure notice (RPAPL §1304) before filing. Source: NY Real Property Actions and Proceedings Law (nysenate.gov).',
  },
  {
    question: 'Will selling stop foreclosure proceedings?',
    answer: 'Yes — a completed sale satisfies the mortgage and ends the foreclosure process. The proceeds pay off the outstanding mortgage balance, and you keep any remaining equity. Even if the mortgage exceeds the value, a short sale may be possible. Call us to discuss your specific situation.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'A short sale may be possible — where the lender agrees to accept less than the full payoff to release the mortgage lien. We have experience with short sales in Rochester and can help you understand whether that path is available in your situation.',
  },
];

export default function RochesterForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        rochesterLocalBusinessSchema,
        articleSchema('Stop Foreclosure in Rochester NY — Sell Your House Fast', pageUrl, '2026-04-16'),
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
            alt="Rochester NY homes — Stop Foreclosure in Rochester NY — Sell Your House Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/rochester-ny" className="hover:text-white">Rochester NY</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Rochester NY — Sell Your House Fast
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses in Rochester NY from homeowners facing foreclosure — before the judicial. Written cash offer in 24 hours, close in 7-14 days. We cover all closing costs. Serving Monroe County and surrounding areas. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/rochester-ny/foreclosure" />
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

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Rochester NY" />

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

        <CashOfferForm variant="footer" headline="Ready to Sell Your Rochester NY Property?" sourcePage="/markets/rochester-ny/foreclosure" />
      </div>
    </>
  );
}
