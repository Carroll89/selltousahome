/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House Code Violations Youngstown OH',
  description:
    'Selling a Youngstown OH house with code violations, open permits, or demolition orders? We buy as-is. No repairs needed. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a Youngstown house with code violations?',
    answer: "Yes. We buy properties with open code violations, unpaid violation fines, demolition orders, and condemned status. Youngstown's City Inspections Division (youngstownohio.gov) is aggressive about citing pre-1950 properties that fall below minimum habitability standards — lead paint, structural issues, exterior deterioration, open foundations. These violations don't prevent a sale to a cash buyer. We factor the violation status into our offer and handle remediation or demolition after closing.",
  },
  {
    question: 'What types of code violations are common in Youngstown OH?',
    answer: "Youngstown's pre-1950 housing stock generates predictable violation categories: exterior deterioration (siding, roofing, foundation), structural compromise (porch collapse, sagging floors), electrical and plumbing (ungrounded wiring, unpermitted work), lead paint (universal in pre-1978 city housing), and delinquent property maintenance. Some North and South Side properties have received demolition orders from the city. We buy in all these conditions.",
  },
  {
    question: 'Will I owe money for the violations at closing?',
    answer: "Unpaid code violation fines become liens on the property in Ohio and must be satisfied at or before closing. The title company will identify all outstanding liens during the title search. We account for known violations and liens in our offer — you won't be surprised at the closing table.",
  },
  {
    question: 'What is the Youngstown city code enforcement process?',
    answer: "The City of Youngstown's Inspections Division (youngstownohio.gov) inspects properties and issues violation notices. Owners have a specified time to comply before fines accrue. Serious structural or safety violations can result in a demolition order, after which the city may demolish and assess the cost against the property. The Mahoning County Land Bank (youngstownlandbank.com) acquires many such properties when taxes and fines exceed the property value. Selling to us before that point preserves your equity.",
  },
  {
    question: 'Can I sell a condemned property in Youngstown?',
    answer: "Yes. A condemnation order makes the property uninhabitable under city code but does not prevent a sale. We've purchased condemned properties throughout our service area. The transaction proceeds normally — the buyer (us) takes responsibility for addressing the condemnation after closing.",
  },
];

export default function YoungstownCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('Selling a House With Code Violations in Youngstown OH', pageUrl, '2026-04-14'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/youngstown-oh-hero-640.jpg 640w, /images/optimized/youngstown-oh-hero-828.jpg 828w, /images/optimized/youngstown-oh-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-hero-1200.jpg"
            alt="Youngstown OH house with code violations — sell as-is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Youngstown OH House With Code Violations — As-Is
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Open violations, demolition orders, condemned status — we buy Youngstown properties
              in any legal and physical condition. No repairs, no remediation, no permit closure required before closing.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3"
            >
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/youngstown-oh" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Youngstown — A Market-Specific Reality</h2>
          <p className="text-gray-700 mb-4">
            Youngstown has one of the highest rates of code-cited and condemned residential properties
            of any city in Ohio. The pre-1950 housing stock — built for steelworkers who long since
            left — deteriorates faster than the limited local renovation capacity can address.
            According to the{' '}
            <a href="https://www.youngstownohio.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">City of Youngstown</a>,
            thousands of properties have active violations at any given time.
          </p>
          <p className="text-gray-700 mb-4">
            The Mahoning County Land Bank (
            <a href="https://www.youngstownlandbank.com" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">youngstownlandbank.com</a>
            ) exists specifically to absorb these distressed properties after taxes and fines
            accumulate beyond recovery. Once a property enters the land bank process, the owner
            loses any remaining equity. Selling to a cash buyer before that point — even with
            open violations — almost always yields a better outcome.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer on Your Youngstown Code-Violation Property"
          subheadline="Open violations, demolition orders, condemned — we buy anyway. Written offer in 24 hours."
          sourcePage="/markets/youngstown-oh"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Code Violations in Youngstown OH" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/fire-damage" className="text-brand-primary hover:underline">Fire Damage Properties in Youngstown →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
