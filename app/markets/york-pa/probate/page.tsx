/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/probate`;

export const metadata: Metadata = {
  title: 'Probate Sale York PA',
  description:
    'Selling a York PA home through probate? We buy probate properties in York County — work with executors, close after Letters Testamentary are issued.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does probate work for a York PA real estate sale?',
    answer: "Pennsylvania probate is handled at the county level. For York properties, the estate is filed with the York County Register of Wills (45 North George Street, Suite 2, York, PA 17401, phone 717-771-9607). Once the court issues Letters Testamentary, the personal representative (executor) has legal authority to sign real estate contracts on behalf of the estate.",
  },
  {
    question: 'Can I sell a York probate property before probate is complete?',
    answer: "Often yes. Once Letters Testamentary are issued by the York County Register of Wills, the executor can sell estate property without waiting for the full probate process to conclude. We regularly purchase homes during active probate proceedings. The closing is structured so that proceeds flow to the estate account.",
  },
  {
    question: 'How long does York County probate take?',
    answer: "Simple estates with a clear will and cooperative heirs can complete initial probate filings in 2-4 weeks. Full probate — including creditor notice period, accounting, and distribution — typically takes 6-12 months in York County. Real estate can be sold during this period once Letters Testamentary are issued.",
  },
  {
    question: 'What are York County Register of Wills hours and location?',
    answer: "York County Register of Wills: 45 North George Street, Suite 2, York, PA 17401. Phone: (717) 771-9607. Hours: Monday through Friday, 8:00am to 4:15pm. Located in the York County Judicial Center. No cell phones, cameras, or weapons permitted in the building.",
  },
  {
    question: 'What if heirs dispute the sale of the York property?',
    answer: "If heirs disagree, the personal representative may petition the York County Orphan's Court for authority to sell. In practice, a written cash offer often resolves disagreements — it's a specific documented number rather than an abstract debate about value. Carrying costs on a York row home (taxes, utilities, insurance) mount quickly and motivate agreement.",
  },
];

export default function YorkProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('Selling a Probate Property in York PA — York County Register of Wills', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/york-pa-hero-640.jpg 640w, /images/optimized/york-pa-hero-828.jpg 828w, /images/optimized/york-pa-hero-1080.jpg 1080w, /images/optimized/york-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/york-pa-hero-1200.jpg"
            alt="York PA probate property — cash buyer"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/york-pa" className="hover:text-white">York PA</Link> › Probate Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Probate Home Sales in York PA — York County
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              We buy probate properties in York PA throughout York County. We work with executors
              and estate attorneys, purchase as-is with no cleanout required, and close after Letters
              Testamentary are issued from the York County Register of Wills.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ Work with executors</span>
              <span>✓ No cleanout or repairs</span>
              <span>✓ Close during active probate</span>
              <span>✓ We cover all closing costs</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/york-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Probate Sales in York County — What to Know</h2>
          <p className="text-gray-700 mb-3">
            Pennsylvania uses the Register of Wills model for estate administration — not a separate Probate
            Court. For York City and York County properties, this is handled at 45 North George Street,
            Suite 2, York, PA 17401. Once the Register of Wills issues Letters Testamentary, the executor
            has legal authority to sell real estate.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://yorkcountypa.gov/385/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">York County Register of Wills (yorkcountypa.gov)</a>,
            the probate process includes Letters Testamentary or Letters of Administration, inheritance tax
            collection for the PA Dept. of Revenue, and fiduciary oversight under the PA Probate, Estates
            and Fiduciaries Code. York County's Register of Wills has collected approximately $45M in
            inheritance taxes in recent years — evidence of an active estate market.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://yorkcountypa.gov/561/Recording-Fees" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">York County Recorder of Deeds (yorkcountypa.gov)</a>,
            all estate deed transfers must be recorded at 45 N. George Street, York, PA 17401 following
            court authorization. Deed recording fees: $86.25 base plus $20 per additional parcel identifier.
          </p>
          <p className="text-gray-700 mb-4">
            Many York City probate properties are Northeast York row homes from the industrial era —
            1890s to 1930s construction, deferred maintenance, and years of accumulated belongings.
            We buy them exactly as they are.
          </p>
        </section>

        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">York County Register of Wills</h2>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-sm">
            <p className="font-semibold text-brand-dark">York County Register of Wills</p>
            <p className="text-gray-600">45 North George Street, Suite 2, York, PA 17401</p>
            <p className="text-gray-600">Phone: (717) 771-9607</p>
            <p className="text-gray-600">Hours: Monday–Friday, 8:00am–4:15pm</p>
            <p className="text-gray-600 mt-1">
              <a href="https://yorkcountypa.gov/385/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                yorkcountypa.gov/385/Register-of-Wills →
              </a>
            </p>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for the York Probate Property"
          subheadline="We work with estate executors throughout York County. Written offer in 24 hours."
          sourcePage="/markets/york-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Probate Sales in York PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/york-pa/inherited-property" className="text-brand-primary hover:underline">Inherited property in York PA →</Link></li>
            <li><Link href="/markets/york-pa" className="text-brand-primary hover:underline">York PA market overview →</Link></li>
            <li><Link href="/guides/probate" className="text-brand-primary hover:underline">Pennsylvania probate guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell the York Probate Property?" sourcePage="/markets/york-pa" />
      </div>
    </>
  );
}
