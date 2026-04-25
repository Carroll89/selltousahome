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
    answer: 'We can close in as few as 7 days once you accept an offer. Wisconsin is a judicial foreclosure state (Wis. Stat. Ch. 846) — every Racine County foreclosure is filed at the Racine County Circuit Court, 730 Wisconsin Avenue, Racine WI 53403. Timeline from filing to confirmation of sheriff\'s sale is 10-14 months, but once judgment is entered the bank controls the timeline. Speed matters — call 888-274-5006 immediately.',
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
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses in Racine and Mount Pleasant WI from homeowners facing foreclosure — before the Racine County Circuit Court sheriff\'s sale. Written cash offer in 24 hours, close in 7-14 days. We cover all closing costs. Serving all of Racine County. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/racine-mount-pleasant-wi/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Judicial Foreclosure — The Racine County Timeline</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin is a judicial foreclosure state under Wis. Stat. Ch. 846. Every foreclosure on a Racine County property must be filed as a civil action in the Racine County Circuit Court at 730 Wisconsin Avenue, Racine WI 53403, (262) 636-3333. There is no non-judicial / trustee-sale path available in Wisconsin; lenders cannot bypass the court.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Typical Timeline</th>
                  <th className="text-left p-3">Statute</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Default / missed payments</td><td className="p-3">Months 1-3</td><td className="p-3">Per mortgage contract</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Notice of right to cure</td><td className="p-3">Varies (15-30 days typical)</td><td className="p-3">Wis. Stat. § 425.104 (consumer credit) or policy</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Complaint filed in Racine County Circuit Court</td><td className="p-3">Day 0 of the lawsuit</td><td className="p-3">Wis. Stat. § 846.03</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Summons and complaint served on borrower</td><td className="p-3">Days 1-60</td><td className="p-3">Wis. Stat. § 801.11</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Answer due</td><td className="p-3">20 days after service</td><td className="p-3">Wis. Stat. § 802.06</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Judgment of foreclosure entered</td><td className="p-3">Months 3-6 after filing</td><td className="p-3">Wis. Stat. § 846.10</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Statutory redemption period — 6 months (owner-occupied 1-4 family, lender waives deficiency)</td><td className="p-3">6 months from judgment</td><td className="p-3">Wis. Stat. § 846.101</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Statutory redemption period — 12 months (lender preserves deficiency, or non-owner-occupied)</td><td className="p-3">12 months from judgment</td><td className="p-3">Wis. Stat. § 846.10</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sheriff\'s sale (published in Racine Journal Times)</td><td className="p-3">After redemption expires</td><td className="p-3">Wis. Stat. § 846.16</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Confirmation of sale hearing</td><td className="p-3">15-30 days after sale</td><td className="p-3">Wis. Stat. § 846.17</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Writ of assistance (eviction from foreclosed home)</td><td className="p-3">After confirmation</td><td className="p-3">Wis. Stat. § 846.185</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            Total Racine County timeline from complaint filing to sheriff\'s sale: 10-14 months typical. The pivotal fork is Wis. Stat. § 846.101 — if the lender waives its right to a deficiency judgment, the redemption period drops from 12 months to 6 months. For owner-occupied 1-4 family dwellings, this is the lender\'s default path because it gets the sheriff\'s sale six months sooner. If you\'re reading the complaint and it says the lender waives deficiency, your clock is 6 months from judgment — not 12.
          </p>
          <p className="text-gray-700 mb-4">
            The redemption period is your window. During it, you can: (1) cure the default and reinstate the loan (Wis. Stat. § 425.105 for consumer-credit loans), (2) pay off the full balance and redeem the property (§ 846.13), (3) sell the property and pay off the mortgage from proceeds, (4) negotiate a short sale with the lender, or (5) do nothing and lose the property at the sheriff\'s sale. Options (3) and (4) are where we come in. We can close in 7-14 days, the closing proceeds satisfy the mortgage, the lender files a satisfaction at the Racine County Register of Deeds, and the foreclosure action is dismissed.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Racine Market Data — Why Selling Beats Auction</h2>
          <p className="text-gray-700 mb-4">
            Per Redfin (March 2026), the Racine median sale price is $205,000 with homes receiving 8 offers on average and selling in around 35 days. Per the Zillow Home Value Index (February 2026), the typical Racine home value is $171,496, up 4.4% year over year. The Wisconsin realty transfer fee under Wis. Stat. § 77.22 is $3.00 per $1,000 ($615 on a $205,000 sale); we cover it. Per Realtor.com (April 2026), the Racine-Mount Pleasant metro hotness median is $347,720.
          </p>
          <p className="text-gray-700 mb-4">
            Sheriff\'s sales at Racine County Circuit Court typically recover 60-75% of fair market value for the lender — often less. Our cash offers for distressed Racine foreclosure properties typically run 68-80% of FMV, with the seller preserving any equity above the mortgage payoff. If your Racine cream brick cottage has $30K of equity and you\'re six weeks from the sheriff\'s sale, the math on selling now versus letting the sale happen is stark: either you walk with the $30K, or the lender and buyer at auction absorb it.
          </p>
          <p className="text-gray-700 mb-4">
            Source: Wisconsin Statutes Ch. 846 (docs.legis.wisconsin.gov); Redfin.com; Zillow.com; Racine County Clerk of Courts, (262) 636-3333.
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
