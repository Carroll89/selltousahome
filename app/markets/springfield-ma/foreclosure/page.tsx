/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { springfieldLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/springfield-ma/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Springfield MA',
  description:
    'Facing foreclosure in Springfield MA? We buy houses before the non-judicial. Written offer in 24 hours. Close in 7 days. No fees.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Springfield MA?',
    answer: 'We can close in as few as 7 days once you accept an offer. Massachusetts non-judicial foreclosure (power of sale). Lenders can foreclose without court action under MGL Ch. 183 §27. Timeline from default to auction: 75-120 days. Published notice in newspaper required for 3 consecutive weeks. Speed is critical in Springfield foreclosure situations — call 888-440-5250 immediately.',
  },
  {
    question: 'What is the foreclosure process in Hampden County?',
    answer: 'Massachusetts non-judicial foreclosure (power of sale). Lenders can foreclose without court action under MGL Ch. 183 §27. Timeline from default to auction: 75-120 days. Published notice in newspaper required for 3 consecutive weeks.',
  },
  {
    question: 'Will selling stop foreclosure proceedings?',
    answer: 'Yes — a completed sale satisfies the mortgage and ends the foreclosure process. The proceeds pay off the outstanding mortgage balance, and you keep any remaining equity. Even if the mortgage exceeds the value, a short sale may be possible. Call us to discuss your specific situation.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'A short sale may be possible — where the lender agrees to accept less than the full payoff to release the mortgage lien. We have experience with short sales in Springfield and can help you understand whether that path is available in your situation.',
  },
];

export default function SpringfieldForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        springfieldLocalBusinessSchema,
        articleSchema('Stop Foreclosure in Springfield MA — Sell Your House Fast', pageUrl, '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/springfield-ma-hero-640.jpg 640w, /images/optimized/springfield-ma-hero-828.jpg 828w, /images/optimized/springfield-ma-hero-1080.jpg 1080w, /images/optimized/springfield-ma-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/springfield-ma-hero-1200.jpg"
            alt="Springfield MA homes — Stop Foreclosure in Springfield MA — Sell Your House Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/springfield-ma" className="hover:text-white">Springfield MA</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Springfield MA — Sell Your House Fast
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses in Springfield MA from homeowners facing foreclosure — before the non-judicial. Written cash offer in 24 hours, close in 7-14 days. We cover all closing costs. Serving Hampden County and surrounding areas. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
          <p className="text-blue-100 text-sm">Hablamos español — servimos a la comunidad de habla hispana.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/springfield-ma/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Data: Springfield MA — $185,000 Median Price</h2>
          <p className="text-gray-700 mb-4">
            According to Zillow and Redfin data for Hampden County, the median home value in Springfield is approximately $185,000. Transfer tax: Massachusetts deed excise stamps — $4.56 per $1,000 of consideration, paid by seller. On a $185,000 sale: ~$844. Source: Massachusetts DOR (mass.gov).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Springfield MA" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Springfield MA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/springfield-ma/inherited-property', label: 'Inherited Property' },
              { href: '/markets/springfield-ma/foreclosure', label: 'Foreclosure' },
              { href: '/markets/springfield-ma/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/springfield-ma/probate', label: 'Probate' },
              { href: '/markets/springfield-ma/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/springfield-ma', label: '← Back to Springfield' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Springfield MA Property?" sourcePage="/markets/springfield-ma/foreclosure" />
      </div>
    </>
  );
}
