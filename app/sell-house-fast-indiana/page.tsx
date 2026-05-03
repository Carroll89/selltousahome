/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, faqSchema, articleSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/sell-house-fast-indiana`;

export const metadata: Metadata = {
  title: 'Sell My House Fast Indiana | Cash Buyers — No Transfer Tax',
  description:
    'We buy houses for cash throughout Indiana. No Indiana transfer tax. Judicial-only foreclosure explained. Written offer in 24 hours, close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Does Indiana have a real estate transfer tax?',
    answer: "No. Indiana abolished its real estate transfer tax in 2009. There is no state, county, or local deed transfer tax in Indiana. A Sales Disclosure Form (Form 46234) is required to be submitted at deed recording through the County Auditor -- this is a standard process step, not a tax. Source: Indiana Code; Allen County Recorder (allencountyrecorder.us).",
  },
  {
    question: 'Is Indiana a judicial or non-judicial foreclosure state?',
    answer: "Indiana is a judicial-only foreclosure state -- there is no non-judicial, power-of-sale, or trustee's sale option in Indiana. All foreclosures must go through the county Circuit or Superior Court. The 2009 Indiana reform added mandatory settlement conferences for residential foreclosures. Typical timeline: 6-12 months from complaint to sheriff's sale. For most residential properties, there is no post-sale right of redemption. Consult an Indiana-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'What is the Sales Disclosure Form in Indiana?',
    answer: "Indiana requires a Sales Disclosure Form (Form 46234) to be submitted with the deed at recording through the County Auditor. The County Auditor endorsement is required before the deed can be recorded at the County Recorder. This is a standard process step -- not a tax. USA Home Buyers handles all paperwork including the Sales Disclosure Form.",
  },
  {
    question: 'How does probate work in Indiana?',
    answer: "Indiana uses Circuit Court for probate (not a separate Probate Court). Allen County probate is handled by the Allen County Circuit Court (Probate Division), 715 S. Calhoun St., Fort Wayne IN 46802, (260) 449-4246. Indiana small estate affidavit (IC § 29-1-8-1) is available for qualifying smaller estates -- consult an attorney for the current threshold amount. Cash buyers can purchase probate properties directly once the court authorizes the sale.",
  },
  {
    question: 'Does Indiana require an attorney at closings?',
    answer: "Indiana does not require an attorney at real estate closings. Title companies handle most residential closings. Attorneys are optional but recommended for complex transactions.",
  },
];

export default function IndianaHubPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell Your House Fast in Indiana -- Cash Home Buyers', pageUrl, '2026-05-03'),
        faqSchema(FAQ_ITEMS),
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Sell House Fast Indiana', item: pageUrl },
          ],
        },
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/fort-wayne-in-hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/fort-wayne-in-hero.webp"
            alt="Sell your house fast in Indiana -- cash buyers"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast in Indiana -- No Transfer Tax, Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases houses throughout Indiana for cash in any condition -- no repairs, no cleaning, no agent fees. Indiana has no transfer tax. Written cash offer within 24 hours, close in as few as 7 days. Select your city below.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-4">
              <span>&#x2713; No repairs</span>
              <span>&#x2713; No transfer tax</span>
              <span>&#x2713; No commissions</span>
              <span>&#x2713; Close in 7 days</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3">
              Call Now -- We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/sell-house-fast-indiana" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Indiana Markets We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Fort Wayne, IN</h3>
              <p className="text-gray-700 text-sm mb-3">
                Allen County. One of Indiana's fastest-growing cities. Median sale price $214,900 (Redfin, Mar 2026). Compete Score 80. Judicial-only foreclosure. No transfer tax. Allen County grew 4.4% since 2020 (US Census, July 2025).
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>&#x2192; No Indiana transfer tax</li>
                <li>&#x2192; DOM: 30 days median</li>
                <li>&#x2192; Allen County Circuit Court handles probate</li>
              </ul>
              <Link href="/markets/fort-wayne-in" className="inline-block bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Sell Your Fort Wayne Home &#x2192;
              </Link>
            </div>
          </div>
        </section>

        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Selling a House in Indiana -- What You Need to Know
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-dark mb-2">No Transfer Tax</h3>
              <p className="text-gray-700 text-sm">
                Indiana abolished its real estate transfer tax in 2009. No state, county, or local deed transfer tax exists in Indiana. A Sales Disclosure Form (Form 46234) is required at recording -- this is a process step, not a tax. The County Auditor endorsement is required before deed recording at the County Recorder.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Judicial-Only Foreclosure</h3>
              <p className="text-gray-700 text-sm">
                Indiana is a judicial-only foreclosure state -- there is no non-judicial, power-of-sale, or trustee's sale option. Lenders must file a civil lawsuit in county Circuit or Superior Court. 2009 Indiana reform added mandatory settlement conferences for residential foreclosures. Typical timeline: 6-12 months. For most residential properties, there is no post-sale right of redemption.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Probate (Circuit Court)</h3>
              <p className="text-gray-700 text-sm">
                Indiana uses Circuit Court for probate -- not a separate Probate Court. Allen County: Allen County Circuit Court (Probate Division), 715 S. Calhoun St., Fort Wayne IN 46802, (260) 449-4246. Indiana small estate affidavit (IC § 29-1-8-1) available for qualifying smaller estates -- consult an attorney for current threshold.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">No Attorney Required at Closing</h3>
              <p className="text-gray-700 text-sm">
                Indiana does not require an attorney at real estate closings. Title companies handle most residential closings. Attorneys are optional but commonly used for complex transactions.
              </p>
            </div>
          </div>
        </section>

        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Indiana Real Estate -- Key Facts for Sellers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Indiana transfer tax', 'None -- abolished in 2009 (Indiana Code)'],
                  ['Sales Disclosure Form', 'Required at recording (Form 46234) -- process step, not a tax'],
                  ['Foreclosure type', 'Judicial-only -- county Circuit or Superior Court; 2009 reform; ~6-12 months'],
                  ['Non-judicial option', 'None -- Indiana prohibits power-of-sale/trustee sale foreclosure'],
                  ['Post-sale redemption', 'Generally none for residential properties'],
                  ['Probate system', 'Circuit Court (each county) -- NOT a separate Probate Court'],
                  ['Small estate affidavit', 'Available for qualifying smaller estates (IC § 29-1-8-1)'],
                  ['Attorney required at closing', 'No -- title companies handle most residential closings'],
                  ['No state inheritance tax', 'Indiana abolished inheritance tax in 2013'],
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

        <FAQSection items={FAQ_ITEMS} heading="Indiana Real Estate FAQs for Sellers" />

        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Indiana Home Fast?"
          subheadline="No obligation. No fees. No transfer tax. Written offer in 24 hours."
          sourcePage="/sell-house-fast-indiana"
        />
      </div>
    </>
  );
}
