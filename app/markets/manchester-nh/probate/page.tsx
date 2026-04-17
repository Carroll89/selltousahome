/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { manchesterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/manchester-nh/probate`;

export const metadata: Metadata = {
  title: 'Sell House in Probate Manchester NH',
  description:
    'Selling a house through Hillsborough County probate? We buy probate properties as-is. Written offer in 24 hours. Close after probate clears.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a probate property in Manchester before probate is complete?',
    answer: 'You can sign a purchase agreement before probate is complete, with closing contingent on the personal representative receiving court authority. This way you have a buyer lined up and can close quickly once the court grants authority. We frequently structure deals this way for estates in Hillsborough County.',
  },
  {
    question: 'Where is the probate court for Hillsborough County?',
    answer: 'The probate court for Hillsborough County is: Hillsborough County Probate Court, 300 Chestnut Street, Manchester NH 03101, (603) 669-7410. This court handles all probate proceedings for decedents who owned property in the county.',
  },
  {
    question: 'How long does probate take in New Hampshire?',
    answer: 'New Hampshire probate timelines vary by complexity. Informal probate for straightforward estates can resolve in as little as 2-4 months. Contested estates requiring formal probate may take 12-24 months. The personal representative can often sell property before the estate is fully closed, once the court grants authority.',
  },
  {
    question: 'Do I need to clean out the house before selling?',
    answer: 'No. We buy probate properties in Manchester exactly as-is. Leave everything you don\'t want — belongings, furniture, old appliances. We handle the cleanout after closing.',
  },
];

export default function ManchesterProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        manchesterLocalBusinessSchema,
        articleSchema('Sell Your Manchester NH Probate Property — Fast, As-Is', pageUrl, '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/manchester-nh-hero-640.jpg 640w, /images/optimized/manchester-nh-hero-828.jpg 828w, /images/optimized/manchester-nh-hero-1080.jpg 1080w, /images/optimized/manchester-nh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/manchester-nh-hero-1200.jpg"
            alt="Manchester NH homes — Sell Your Manchester NH Probate Property — Fast, As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/manchester-nh" className="hover:text-white">Manchester NH</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Manchester NH Probate Property — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Manchester NH through Hillsborough County Probate Court. Written cash offer in 24 hours, close after the court grants authority. Any condition, no repairs, no cleanout. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/manchester-nh/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Data: Manchester NH — $315,000 Median Price</h2>
          <p className="text-gray-700 mb-4">
            According to Zillow and Redfin data for Hillsborough County, the median home value in Manchester is approximately $315,000. Transfer tax: New Hampshire Real Estate Transfer Tax — $1.50 per $100 of consideration total (buyer pays $0.75 per $100, seller pays $0.75 per $100). On a $315,000 sale: $4,725 total ($2,363 seller portion). Source: NH Department of Revenue Administration (revenue.nh.gov).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Manchester NH" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Manchester NH</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/manchester-nh/inherited-property', label: 'Inherited Property' },
              { href: '/markets/manchester-nh/foreclosure', label: 'Foreclosure' },
              { href: '/markets/manchester-nh/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/manchester-nh/probate', label: 'Probate' },
              { href: '/markets/manchester-nh/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/manchester-nh', label: '← Back to Manchester' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Manchester NH Property?" sourcePage="/markets/manchester-nh/probate" />
      </div>
    </>
  );
}
