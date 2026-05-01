/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { columbusLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-columbus-oh-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Columbus OH (2026 Guide)',
  description:
    'Complete guide to selling your Columbus OH house fast in 2026. Cash buyers vs. traditional listing, Franklin County conveyance fee, probate, foreclosure, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Columbus OH?',
    answer:
      "A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7–14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006.",
  },
  {
    question: 'What does it cost to sell a house in Columbus OH?',
    answer:
      "With a traditional agent: 5–6% commission (~$7,588–$9,105 on a $151,750 median) plus Franklin County's $4.00/$1,000 conveyance fee (~$607), repair costs, and carrying costs during 42 average days on market. With USA Home Buyers: no commissions, no fees, we cover all closing costs.",
  },
  {
    question: "How does Ohio's conveyance fee work in Franklin County?",
    answer:
      "Franklin County charges $4.00 per $1,000 of sale price (rounded up to the next $100) plus $0.50 per lot, paid to the Franklin County Fiscal Office Recording Division (175 S. Main St., 4th Floor, Columbus OH 44308). DTE Forms 100 and 100(EX) are required; forms received by 3:30 PM process same business day. On a $151,750 Columbus median-sale home, that's approximately $607. USA Home Buyers covers this when we purchase.",
  },
  {
    question: 'Is Columbus a good market to sell in 2026?',
    answer:
      "According to Redfin (March 2026), Columbus's median sale price is $151,750 (+21.4% YoY) with a Compete Score of 73/100. Average homes sell for about 3% below list price and go pending in around 12 days for hot properties. However, Columbus's 34.1% pre-1940 housing stock often needs significant updates to attract retail buyers — that's where a cash sale makes sense.",
  },
  {
    question: 'What options do Columbus sellers have?',
    answer:
      "1. Cash sale (fastest, most certain) — 7–14 days, as-is, no fees. 2. Traditional listing (highest potential price) — 42+ average days, repairs often required, 5–6% commission. 3. FSBO (save commission but less reach, more work). 4. iBuyer/investor (convenience but often lower net than retail listing).",
  },
];

export default function ColumbusGuide2026Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          columbusLocalBusinessSchema,
          articleSchema('How to Sell a House Fast in Columbus OH (2026)', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/columbus-oh" className="hover:text-white">Columbus OH</Link> › Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Sell a House Fast in Columbus OH — 2026 Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Columbus OH and Franklin County for cash, as-is,
              in any condition. Written offer in 24 hours, close in 7–14 days. According to
              Redfin (March 2026), Columbus's median sale price is $151,750 (+21.4% YoY) with
              a Compete Score of 73/100. Franklin County conveyance fee is $4.00/$1,000 plus
              $0.50/lot, paid to the Franklin County Fiscal Office. Cash sale eliminates agent
              commissions, repair costs, and the 42-day average time on market. Call
              888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Options for Selling a House in Columbus OH</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Option</th>
                  <th className="text-left p-3">Timeline</th>
                  <th className="text-left p-3">Net Proceeds</th>
                  <th className="text-left p-3">Repairs Required?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Cash buyer (USA Home Buyers)</td><td className="p-3">7–14 days</td><td className="p-3">60–80% of FMV</td><td className="p-3">No</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Traditional listing</td><td className="p-3">42+ days average</td><td className="p-3">84–90% after costs</td><td className="p-3">Usually</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FSBO</td><td className="p-3">Variable</td><td className="p-3">80–88% (no agent)</td><td className="p-3">Usually</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">iBuyer / investor</td><td className="p-3">14–30 days</td><td className="p-3">75–85%</td><td className="p-3">No</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Franklin County Conveyance Fee and Closing Costs in Columbus</h2>
          <p className="text-gray-700 mb-4">
            Ohio sellers pay a conveyance fee rather than a transfer tax. Franklin County charges
            $4.00 per $1,000 of sale price (rounded up to the next $100) plus $0.50 per lot,
            paid to the Franklin County Fiscal Office Recording Division (175 S. Main St., 4th Floor,
            Columbus OH 44308, Mon–Fri 7:30 AM–4:00 PM). DTE Forms 100 and 100(EX) are required;
            forms received by 3:30 PM process same business day. Recording fee is $34 for the first
            two pages plus $8 per additional page. On a $151,750 Columbus median-sale home: conveyance
            fee ~$607. USA Home Buyers covers all closing costs when we purchase.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Sale Makes More Sense Than Listing</h2>
          <p className="text-gray-700 mb-4">
            Columbus's 73/100 Compete Score means move-in-ready homes attract buyers. But the city's
            34.1% pre-1940 housing stock — rubber-era bungalows, foursquares, and colonials in
            Goodyear Heights, Kenmore, and Firestone Park — often needs $20,000–$50,000+ in updates
            to attract conventional financing and retail buyers. Average homes sell for 3% below
            list price.
          </p>
          <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
            <li>Your property needs significant updates to compete on the retail market</li>
            <li>You're managing the sale from out of state as an heir or executor</li>
            <li>Ohio judicial foreclosure is running — you need to sell before the Franklin County RealAuction Friday sale</li>
            <li>A tenant is in place (51.3% renter-occupied market) and managing showings is complicated</li>
            <li>Probate is open and you need a buyer who'll wait for Franklin County Probate Court authorization</li>
          </ul>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling in Columbus OH" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Columbus OH Resources</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { href: '/markets/columbus-oh', label: 'Columbus OH Market Page' },
              { href: '/markets/columbus-oh/market-report', label: 'Market Report' },
              { href: '/markets/columbus-oh/foreclosure', label: 'Foreclosure Guide' },
              { href: '/markets/columbus-oh/inherited-property', label: 'Inherited Property' },
              { href: '/markets/columbus-oh/probate', label: 'Probate Guide' },
              { href: '/sell-house-fast-ohio', label: 'Ohio Seller Guide' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Columbus OH Home?"
          subheadline="Written offer in 24 hours. No fees, no repairs, no obligation."
          sourcePage="/guides/sell-house-fast-columbus-oh-2026"
        />
      </div>
    </>
  );
}
