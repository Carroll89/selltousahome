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
    answer: "Yes. We buy properties with open code violations, unpaid violation fines, demolition orders, and condemned status. According to the City of Youngstown's code-enforcement resources, the city inspects and cites properties that fall below code. We factor the violation status into our offer and handle remediation or demolition after closing.",
  },
  {
    question: 'What types of code violations are common in Youngstown OH?',
    answer: "Youngstown's older housing stock can generate predictable violation categories: exterior deterioration, structural compromise, electrical and plumbing issues, vacant-property registration issues, and illegal dumping. We buy in all these conditions.",
  },
  {
    question: 'Will I owe money for the violations at closing?',
    answer: "Unpaid code violation fines may become liens or title exceptions that need to be addressed at or before closing. The title company will identify recorded liens during the title search. We account for known violations and liens in our offer.",
  },
  {
    question: 'What is the Youngstown city code enforcement process?',
    answer: "According to the City of Youngstown's Inspections Division resources, the city inspects properties and issues violation notices. Owners may receive a compliance period before fines accrue; serious structural or safety violations can result in condemnation or demolition orders.",
  },
  {
    question: 'Can I sell a condemned property in Youngstown?',
    answer: "Per local code-enforcement practice, a condemnation order generally means the property cannot be occupied until safety issues are corrected; it does not by itself prevent a sale. We've purchased condemned properties throughout our service area and take responsibility for remediation after closing.",
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
            srcSet="/images/optimized/youngstown-oh-representative-hero-640.jpg 640w, /images/optimized/youngstown-oh-representative-hero-828.jpg 828w, /images/optimized/youngstown-oh-representative-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-representative-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-representative-hero-1200.jpg"
            alt="Representative Youngstown OH early twentieth century home with civic industrial context"
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

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, USA Home Buyers purchases houses with code violations in Youngstown, OH — as-is, with no repairs required before closing. Youngstown's housing stock (heavily concentrated in pre-1940 working-class homes) frequently carries City of Youngstown Property Maintenance Code violations, open permits, or exterior disrepair notices. When we buy, violations transfer with the deed. You close on your timeline without touching a single issue. Written cash offer in 24 hours.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Youngstown — A Market-Specific Reality</h2>
          <p className="text-gray-700 mb-4">
            Youngstown has a visible inventory of code-cited and vacant residential properties. Older housing stock
            can deteriorate faster than limited local renovation capacity can address.
            According to the{' '}
            <a href="https://www.youngstownohio.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">City of Youngstown</a>,
            the city maintains code-enforcement and property-maintenance programs for violation and nuisance-property issues.
          </p>
          <p className="text-gray-700 mb-4">
            The Mahoning County Land Bank (
            <a href="https://www.youngstownlandbank.com" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">youngstownlandbank.com</a>
            ) works with vacant and distressed properties in the county. If taxes, fines, or title problems
            keep accumulating, owner options can narrow. Selling to a cash buyer before that point — even with
            open violations — can preserve more flexibility.
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
