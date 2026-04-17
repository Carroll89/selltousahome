/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { racineWILocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Racine WI',
  description:
    'Facing foreclosure in Racine or Mount Pleasant WI? We buy before the sheriff\'s sale. Written offer in 24 hours, close in 7 days. No fees.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Racine WI?',
    answer: 'We can close in as few as 7 days once you accept an offer. Wisconsin is a judicial foreclosure state (Wis. Stat. Ch. 846) — every Racine County foreclosure is filed at the Racine County Circuit Court, 730 Wisconsin Avenue, Racine WI 53403. Timeline from filing to confirmation of sheriff\'s sale is 10-14 months, but once judgment is entered the bank controls the timeline. Speed matters — call 888-440-5250 immediately.',
  },
  {
    question: 'What is the foreclosure process in Racine County?',
    answer: 'Wisconsin judicial foreclosure is governed by Wis. Stat. Ch. 846. The lender files a complaint in Racine County Circuit Court. Once judgment of foreclosure is entered, a statutory redemption period begins — 6 months for 1-4 family owner-occupied homes when the lender waives deficiency (Wis. Stat. § 846.101), or 12 months if the lender preserves its right to a deficiency judgment. After redemption, the sheriff\'s sale is held. A confirmation hearing formalizes the transfer. Total timeline: 10-14 months typical. Source: docs.legis.wisconsin.gov.',
  },
  {
    question: 'Will selling stop foreclosure proceedings in Racine?',
    answer: 'Yes — a completed sale satisfies the mortgage and ends the foreclosure. The proceeds pay off the outstanding balance, and any surplus goes to you. Once we close at a Racine title company, the lender files a satisfaction of mortgage with the Racine County Register of Deeds (730 Wisconsin Ave) and the foreclosure action is dismissed. Even if the mortgage exceeds the property\'s value, a short sale may be possible. Call us to discuss.',
  },
  {
    question: 'What if I owe more than my Racine house is worth?',
    answer: 'A short sale may be possible — where the lender agrees to accept less than the full payoff to release the mortgage lien. Short sales are common in older Racine neighborhoods where original cream brick cottages and Northside Victorians have sometimes been financed close to or above market, especially after 2022 rate-driven valuation shifts. We have experience with Wisconsin short sales and can help you understand whether that path works for your situation.',
  },
];

export default function RacineForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        racineWILocalBusinessSchema,
        articleSchema('Stop Foreclosure in Racine WI — Sell Your House Fast', pageUrl, '2026-04-17'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/racine-mount-pleasant-wi-hero-640.jpg 640w, /images/optimized/racine-mount-pleasant-wi-hero-828.jpg 828w, /images/optimized/racine-mount-pleasant-wi-hero-1080.jpg 1080w, /images/optimized/racine-mount-pleasant-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/racine-mount-pleasant-wi-hero-1200.jpg"
            alt="Racine WI homes — Stop Foreclosure in Racine WI — Sell Your House Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/racine-mount-pleasant-wi" className="hover:text-white">Racine-Mount Pleasant WI</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Racine WI — Sell Your House Fast
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses in Racine and Mount Pleasant WI from homeowners facing foreclosure — before the Racine County Circuit Court sheriff\'s sale. Written cash offer in 24 hours, close in 7-14 days. We cover all closing costs. Serving all of Racine County. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/racine-mount-pleasant-wi/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Data: Racine WI — $205,000 Median Price, 35-Day DOM</h2>
          <p className="text-gray-700 mb-4">
            According to Redfin (March 2026), the median sale price in Racine is $205,000 with homes receiving 8 offers on average and selling in around 35 days. The Zillow Home Value Index (February 2026) puts the typical Racine home value at $171,496, up 4.4% year over year. Transfer tax: Wisconsin realty transfer fee — $3.00 per $1,000 of consideration, paid by seller (Wis. Stat. § 77.22). On a $205,000 Racine sale: $615. Source: Wisconsin Department of Revenue (revenue.wi.gov).
          </p>
          <p className="text-gray-700 mb-4">
            If your foreclosure is already filed at Racine County Circuit Court, every week matters. Judgment of foreclosure starts the 6-month statutory redemption clock (Wis. Stat. § 846.101). After that, the sheriff&rsquo;s sale is final. Selling now lets you preserve equity and walk away — selling after the sale usually means the lender has absorbed it.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Racine WI" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Racine WI</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/racine-mount-pleasant-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/racine-mount-pleasant-wi/foreclosure', label: 'Foreclosure' },
              { href: '/markets/racine-mount-pleasant-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/racine-mount-pleasant-wi/probate', label: 'Probate' },
              { href: '/markets/racine-mount-pleasant-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/racine-mount-pleasant-wi', label: '← Back to Racine' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Racine WI Property?" sourcePage="/markets/racine-mount-pleasant-wi/foreclosure" />
      </div>
    </>
  );
}
