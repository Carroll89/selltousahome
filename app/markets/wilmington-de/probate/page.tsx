/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wilmingtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/probate`;

export const metadata: Metadata = {
  title: 'Sell Probate House Wilmington DE',
  description:
    'Selling a probate property in Wilmington DE? We buy probate homes as-is. Work with NCC Register of Wills. Cash offer in 24 hours, close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the probate process in Delaware for real property?',
    answer: "In Delaware, probate is handled through the Register of Wills — a branch of the Delaware Court of Chancery. The New Castle County Register of Wills is located at 800 N. French Street, 2nd Floor, Wilmington, DE 19801 (phone: 302-395-7800). After the executor or administrator is appointed and probate is granted, a new deed must be recorded at the NCC Recorder of Deeds before the property can be sold. Source: newcastlede.gov/152.",
  },
  {
    question: 'Can I sell a probate property in Wilmington DE before probate closes?',
    answer: "In some cases, yes — with court approval. The executor may petition the NCC Court of Chancery to sell the property during probate proceedings if it serves the estate's interests (e.g., avoiding ongoing carrying costs). We work with executors and their attorneys throughout the process and can prepare purchase paperwork before probate is finalized.",
  },
  {
    question: 'What is Delaware\'s small estate threshold for probate?',
    answer: "Delaware provides a simplified small estate process for estates with a total value under $30,000. If the estate qualifies, a simplified affidavit procedure may allow transfer of assets without full probate. For real property, however, formal probate is typically required regardless of estate size if the property was held solely in the decedent's name. Source: NCC Register of Wills FAQ (newcastlede.gov/FAQ.aspx?QID=71).",
  },
  {
    question: 'How does the transfer tax work on a probate sale in Wilmington?',
    answer: "Wilmington has a 4% total transfer tax (2.5% Delaware state + 1.5% City of Wilmington), typically split 50/50 between buyer and seller. On a $210,000 sale, the total is $8,400. When you sell to USA Home Buyers, we cover all closing costs — nothing comes out of the estate's proceeds.",
  },
  {
    question: 'How quickly can the estate sell after probate is granted?',
    answer: "Once the estate has clear title and the executor has authority to sell, we can close in as few as 7 days. We prepare the purchase agreement in advance so everything is ready the moment probate clears.",
  },
];

export default function WilmingtonProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        wilmingtonLocalBusinessSchema,
        articleSchema('Selling a Probate Property in Wilmington DE — NCC Court of Chancery', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/wilmington-de-hero-640.jpg 640w, /images/optimized/wilmington-de-hero-828.jpg 828w, /images/optimized/wilmington-de-hero-1080.jpg 1080w, /images/optimized/wilmington-de-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/wilmington-de-hero-1200.jpg"
            alt="Wilmington DE probate property — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/wilmington-de" className="hover:text-white">Wilmington DE</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Probate Property in Wilmington DE — We Work With Estates
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases probate properties throughout Wilmington and New Castle County.
              We work with executors, administrators, and Delaware Court of Chancery timelines.
              Written cash offer in 24 hours — close the moment title is clear.
            </p>
            <p className="text-blue-200 text-sm mb-4">
              NCC Register of Wills: 800 N. French St, Wilmington DE 19801 · (302) 395-7800
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors"
            >
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/wilmington-de" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Delaware Probate — How It Works for Real Property</h2>
          <p className="text-gray-700 mb-4">
            Delaware's probate system is administered through the <strong>Register of Wills</strong>, which operates as
            part of the Delaware Court of Chancery. This is different from Pennsylvania, which uses county-level
            Register of Wills offices and Orphans' Court — Delaware's Court of Chancery is a unified court system with
            statewide jurisdiction for equity matters including probate.
          </p>
          <p className="text-gray-700 mb-4">
            The New Castle County Register of Wills office is located at{' '}
            <a href="https://www.newcastlede.gov/152/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
              800 N. French Street, 2nd Floor, Wilmington, DE 19801
            </a>
            {' '}(phone: 302-395-7800). The Register maintains a list of Delaware probate attorneys for referrals.
          </p>
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-6">
            <h3 className="font-bold text-brand-dark mb-3">Key Steps for Probate Property Sale in Wilmington</h3>
            <ol className="space-y-2 text-gray-700 text-sm list-decimal pl-5">
              <li>Will filed with NCC Register of Wills (800 N. French St, Wilmington)</li>
              <li>Executor or administrator appointed by the court</li>
              <li>Inventory of estate assets completed (including real property)</li>
              <li>Estate debts and claims resolved</li>
              <li>Court approval obtained for property sale (if required)</li>
              <li>New deed recorded at NCC Recorder of Deeds (also 800 N. French St)</li>
              <li>Closing — title transferred to buyer, proceeds to estate</li>
            </ol>
          </div>
          <p className="text-gray-700 mb-4">
            For estates where the property is the primary asset, selling early can reduce carrying costs (taxes,
            insurance, utilities, maintenance) that otherwise erode estate value. We can prepare our purchase agreement
            while probate is pending, so we're ready to close the moment title is clear.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Wilmington Probate Property"
          subheadline="We work with executors, administrators, and Delaware Court of Chancery timelines. Written offer in 24 hours."
          sourcePage="/markets/wilmington-de"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Probate Property Sale in Wilmington DE" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/wilmington-de/inherited-property" className="text-brand-primary hover:underline">Inherited Property in Wilmington DE →</Link></li>
            <li><Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">Wilmington DE Cash Home Buyers →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
