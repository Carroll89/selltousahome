/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { worcesterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/worcester-ma/probate`;

export const metadata: Metadata = {
  title: 'Sell House in Probate Worcester MA',
  description:
    'Selling a house through Worcester County probate? We buy probate properties as-is. Written offer in 24 hours. Close after probate clears.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a probate property in Worcester before probate is complete?',
    answer: 'You can sign a purchase agreement before probate is complete, with closing contingent on the personal representative receiving court authority. This way you have a buyer lined up and can close quickly once the court grants authority. We frequently structure deals this way for estates in Worcester County.',
  },
  {
    question: 'Where is the probate court for Worcester County?',
    answer: 'The probate court for Worcester County is: Worcester County Probate and Family Court, 225 Main Street, Worcester MA 01608, (508) 770-0825. This court handles all probate proceedings for decedents who owned property in the county.',
  },
  {
    question: 'How long does probate take in Massachusetts?',
    answer: 'Massachusetts probate timelines vary by complexity. Informal probate for straightforward estates can resolve in as little as 2-4 months. Contested estates requiring formal probate may take 12-24 months. The personal representative can often sell property before the estate is fully closed, once the court grants authority.',
  },
  {
    question: 'Do I need to clean out the house before selling?',
    answer: 'No. We buy probate properties in Worcester exactly as-is. Leave everything you don\'t want — belongings, furniture, old appliances. We handle the cleanout after closing.',
  },
];

export default function WorcesterProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        worcesterLocalBusinessSchema,
        articleSchema('Sell Your Worcester MA Probate Property — Fast, As-Is', pageUrl, '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/worcester-ma-hero-640.jpg 640w, /images/optimized/worcester-ma-hero-828.jpg 828w, /images/optimized/worcester-ma-hero-1080.jpg 1080w, /images/optimized/worcester-ma-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/worcester-ma-hero-1200.jpg"
            alt="Worcester MA homes — Sell Your Worcester MA Probate Property — Fast, As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/worcester-ma" className="hover:text-white">Worcester MA</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Worcester MA Probate Property — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Worcester MA through Worcester County Probate and Family Court. Written cash offer in 24 hours, close after the court grants authority. Any condition, no repairs, no cleanout. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/worcester-ma/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Data: Worcester MA — $315,000 Median Price</h2>
          <p className="text-gray-700 mb-4">
            According to Zillow and Redfin data for Worcester County, the median home value in Worcester is approximately $315,000. Transfer tax: Massachusetts deed excise stamps — $4.56 per $1,000 of consideration, paid by seller. On a $315,000 sale: ~$1,436. Source: Massachusetts DOR (mass.gov).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Worcester MA" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Worcester MA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/worcester-ma/inherited-property', label: 'Inherited Property' },
              { href: '/markets/worcester-ma/foreclosure', label: 'Foreclosure' },
              { href: '/markets/worcester-ma/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/worcester-ma/probate', label: 'Probate' },
              { href: '/markets/worcester-ma/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/worcester-ma', label: '← Back to Worcester' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Worcester MA Property?" sourcePage="/markets/worcester-ma/probate" />
      </div>
    </>
  );
}
