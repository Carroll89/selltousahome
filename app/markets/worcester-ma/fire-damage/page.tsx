/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { worcesterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/worcester-ma/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire Damaged House Worcester MA',
  description:
    'Selling a fire-damaged house in Worcester MA? We buy fire-damaged properties as-is. No restoration required. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a fire-damaged house in Worcester MA?',
    answer: 'Yes. We buy fire-damaged properties in Worcester at any stage — partial damage with smoke and water, structural fire damage, total losses. We assess the land value, salvageable structure, and remediation costs to make a fair offer.',
  },
  {
    question: 'Should I file an insurance claim before selling?',
    answer: 'You can file a claim before or after selling. If you\'ve already received an insurance payout, that money is yours. We buy the property as-is in its current damaged condition — you keep any insurance proceeds separately. If a claim is pending, we can sometimes work around the timing.',
  },
  {
    question: 'What if the city has condemned the property?',
    answer: 'We have purchased condemned and red-tagged properties in Worcester. Condemnation limits your conventional sale options but not your cash sale options. We can close quickly and take responsibility for addressing the condemnation order.',
  },
  {
    question: 'What happens to my mortgage on a fire-damaged property?',
    answer: 'Your mortgage obligation continues regardless of property condition. If the insurance payout isn\'t enough to cover the mortgage balance, you\'re still responsible for the difference. Selling for cash often provides a path to payoff the mortgage and escape the carrying costs on an uninhabitable property.',
  },
];

export default function WorcesterFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        worcesterLocalBusinessSchema,
        articleSchema('Sell Your Fire-Damaged Worcester MA House — Fast, As-Is', pageUrl, '2026-04-16'),
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
            alt="Worcester MA homes — Sell Your Fire-Damaged Worcester MA House — Fast, As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/worcester-ma" className="hover:text-white">Worcester MA</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged Worcester MA House — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases fire-damaged properties in Worcester MA — partial burns, smoke damage, total losses. We buy as-is, no restoration required. Written cash offer based on land value and salvageable structure in 24 hours. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/worcester-ma/fire-damage" />
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

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire Damage in Worcester MA" />

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

        <CashOfferForm variant="footer" headline="Ready to Sell Your Worcester MA Property?" sourcePage="/markets/worcester-ma/fire-damage" />
      </div>
    </>
  );
}
