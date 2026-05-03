/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, faqSchema, articleSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/sell-house-fast-virginia`;

export const metadata: Metadata = {
  title: 'Sell My House Fast Virginia | Cash Buyers',
  description:
    'We buy houses for cash throughout Virginia. Written offer in 24 hours, close in 7 days. Virginia grantor\'s tax, non-judicial foreclosure, probate -- all explained.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does the Virginia grantor\'s tax work?',
    answer: "Virginia charges a state grantor's tax of $0.50 per $500 of value (approximately 0.10% of sale price) under VA Code § 58.1-802 -- the seller pays. The state recordation tax of $0.25 per $100 (0.25%) is paid by the buyer/grantee under § 58.1-801. Individual cities and counties may levy an additional local recordation fee under § 58.1-814 -- verify the current local rate with your settlement agent before closing. When you sell to USA Home Buyers, we cover all closing costs.",
  },
  {
    question: 'Is Virginia a judicial or non-judicial foreclosure state?',
    answer: "Virginia primarily uses non-judicial foreclosure via deed of trust under VA Code § 55.1-321. The trustee can sell without court involvement, typically within 45-60 days of acceleration. Virginia has no post-sale right of redemption -- once the foreclosure sale is complete, it is final. Judicial foreclosure exists but is rarely used. Selling before the trustee sale preserves equity. Consult a Virginia-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'How does probate work in Virginia?',
    answer: "Virginia uses Circuit Court for probate -- there is no separate Probate Court. Each jurisdiction's Circuit Court handles estate administration. Virginia small estate affidavit is available for estates under $50,000 (VA Code § 64.2-601). Richmond is an independent city -- its probate is handled by the Richmond City Circuit Court Clerk (400 N. 9th St., Richmond VA 23219), not a county court.",
  },
  {
    question: 'Does Virginia require an attorney at real estate closings?',
    answer: "Virginia does not require an attorney at real estate closings. Title companies are authorized as settlement agents under the Virginia Consumer Real Estate Settlement Protection Act (CRESPA), VA Code § 55.1-1000 et seq. Sellers may retain their own attorney at their option. For complex transactions, consulting a Virginia-licensed attorney is advisable.",
  },
  {
    question: 'Does Virginia require a seller disclosure?',
    answer: "Virginia requires a Residential Property Disclosure Statement under VA Code § 55.1-703 for most residential sales. However, sellers may elect to sell 'as-is' by completing a Disclosure Waiver. Cash buyers who purchase as-is typically receive the disclosure statement but waive inspection contingencies.",
  },
];

export default function VirginiaHubPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell Your House Fast in Virginia -- Cash Home Buyers', pageUrl, '2026-05-03'),
        faqSchema(FAQ_ITEMS),
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Sell House Fast Virginia', item: pageUrl },
          ],
        },
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/richmond-va-hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/richmond-va-hero.webp"
            alt="Sell your house fast in Virginia -- cash buyers"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast in Virginia -- Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases houses throughout Virginia for cash in any condition -- no repairs, no cleaning, no agent fees. Written cash offer within 24 hours, close in as few as 7 days. Virginia's grantor's tax covered. Select your city below.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-4">
              <span>&#x2713; No repairs</span>
              <span>&#x2713; No commissions</span>
              <span>&#x2713; We pay all closing costs</span>
              <span>&#x2713; Close in 7 days</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3">
              Call Now -- We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/sell-house-fast-virginia" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Virginia Markets */}
        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Virginia Markets We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Richmond, VA</h3>
              <p className="text-gray-700 text-sm mb-3">
                Richmond City (independent city -- no county layer). Historic row houses, The Fan, Church Hill, Scott's Addition. Median sale price $414,500 (Redfin, Mar 2026). Compete Score 82. Non-judicial foreclosure.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>&#x2192; State grantor's tax $0.50/$500 (seller pays)</li>
                <li>&#x2192; DOM: 24 days median</li>
                <li>&#x2192; Circuit Court Clerk handles probate (independent city)</li>
              </ul>
              <Link href="/markets/richmond-va" className="inline-block bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Sell Your Richmond Home &#x2192;
              </Link>
            </div>
          </div>
        </section>

        {/* Virginia legal overview */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Selling a House in Virginia -- What You Need to Know
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Grantor's Tax (Transfer Tax)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Virginia charges a state grantor's tax of $0.50 per $500 of value (~0.10%) under VA Code § 58.1-802 -- the seller pays. State recordation tax of $0.25/$100 is paid by the buyer. Individual cities and counties may add a local recordation fee under § 58.1-814 -- verify the current local rate with your settlement agent.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Non-Judicial Foreclosure (Fast Process)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Virginia primarily uses non-judicial foreclosure via deed of trust under VA Code § 55.1-321. The trustee can sell without court involvement -- typical timeline 45-60 days from acceleration. No post-sale right of redemption. Selling before the trustee sale preserves equity.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Probate (Circuit Court)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Virginia uses Circuit Court for probate -- not a separate Probate Court. Virginia small estate affidavit available for estates under $50,000 (VA Code § 64.2-601). Independent cities (Richmond, Alexandria, etc.) have their own Circuit Courts separate from surrounding county courts.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Settlement Agents and Closings</h3>
              <p className="text-gray-700 text-sm">
                Virginia does not require an attorney at real estate closings -- title companies are authorized settlement agents under CRESPA (VA Code § 55.1-1000 et seq.). Sellers may retain their own attorney at their option. For complex transactions, consulting a Virginia-licensed real estate attorney is advisable.
              </p>
            </div>
          </div>
        </section>

        {/* Key data table */}
        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Virginia Real Estate -- Key Facts for Sellers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['State grantor\'s tax', '$0.50 per $500 of value (~0.10%) -- seller pays (VA Code § 58.1-802)'],
                  ['State recordation tax', '$0.25/$100 -- buyer/grantee pays (VA Code § 58.1-801)'],
                  ['Local recordation fee', 'Varies by city/county under § 58.1-814 -- verify with settlement agent'],
                  ['Foreclosure type', 'Non-judicial (deed of trust) primary -- VA Code § 55.1-321; ~45-60 days'],
                  ['Post-sale redemption', 'None in Virginia -- foreclosure sale is final'],
                  ['Probate system', 'Circuit Court (each jurisdiction) -- NOT a separate Probate Court'],
                  ['Small estate affidavit', 'Available for estates under $50,000 (VA Code § 64.2-601)'],
                  ['Attorney required at closing', 'No -- CRESPA authorizes title companies (VA Code § 55.1-1000)'],
                  ['Seller disclosure', 'Required (VA Code § 55.1-703) or as-is waiver available'],
                  ['No state inheritance tax', 'Virginia repealed estate/inheritance tax in 2007'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-200">
                    <td className="py-3 pr-6 font-medium text-brand-dark w-1/3">{label}</td>
                    <td className="py-3 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Virginia Real Estate FAQs for Sellers" />

        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Virginia Home Fast?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/sell-house-fast-virginia"
        />
      </div>
    </>
  );
}
