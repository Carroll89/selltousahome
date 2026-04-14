import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/probate`;

export const metadata: Metadata = {
  title: 'Probate Sale Bethlehem PA',
  description:
    'Selling a Bethlehem PA home through probate? We buy probate properties in Northampton County — work with executors, close after Letters Testamentary are issued.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does probate work for a Bethlehem PA real estate sale?',
    answer: "Pennsylvania probate is handled at the county level. For Bethlehem properties, the estate is filed with the Northampton County Register of Wills (669 Washington Street, Easton, PA 18042, phone 610-829-6488). Once the court issues Letters Testamentary, the personal representative (executor) has legal authority to sign real estate contracts on behalf of the estate.",
  },
  {
    question: 'Can I sell a Bethlehem probate property before probate is complete?',
    answer: "Often yes. Once Letters Testamentary are issued, the executor can sell estate property without waiting for the full probate process to conclude. We regularly purchase homes during active probate proceedings. The closing is structured so that proceeds flow to the estate account.",
  },
  {
    question: 'What is the Orphan\'s Court in Northampton County?',
    answer: "The Orphan's Court Division of the Northampton County Court of Common Pleas handles disputed estate matters. For uncontested estate sales, the executor typically has authority to proceed without Orphan's Court involvement. Contested matters or sales at below-market prices to related parties may require Orphan's Court approval.",
  },
  {
    question: 'How long does Northampton County probate take?',
    answer: "Simple estates with a clear will and cooperative heirs can complete initial probate filings in 2-4 weeks. Full probate — including creditor notice period, accounting, and distribution — typically takes 6-12 months in Northampton County. Real estate can be sold during this period once Letters Testamentary are issued.",
  },
  {
    question: 'What if there are disputes between heirs about selling the Bethlehem property?',
    answer: "If heirs disagree, the personal representative may need to petition the Northampton County Orphan's Court for authority to sell. In practice, a written cash offer often helps resolve disagreements — it's a specific documented number rather than a subjective debate about value.",
  },
  {
    question: 'Does a probate sale in Bethlehem require repairs or cleanup?',
    answer: "No. We purchase probate properties as-is with all contents. Many Bethlehem estates involve South Side row homes with decades of belongings — we handle the cleanout after closing. The executor doesn't need to manage or coordinate any repairs or removal.",
  },
];

export default function BethlehemProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('Selling a Probate Property in Bethlehem PA — Northampton County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/bethlehem-pa-hero-640.jpg 640w, /images/optimized/bethlehem-pa-hero-828.jpg 828w, /images/optimized/bethlehem-pa-hero-1080.jpg 1080w, /images/optimized/bethlehem-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bethlehem-pa-hero-1200.jpg"
            alt="Bethlehem PA probate property — cash buyer"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bethlehem-pa" className="hover:text-white">Bethlehem PA</Link> › Probate Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Probate Home Sales in Bethlehem PA — Northampton County
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              We buy probate properties in Bethlehem PA throughout Northampton County. We work with executors
              and estate attorneys, purchase as-is with no cleanout required, and close after Letters Testamentary
              are issued. Written cash offer in 24 hours.
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
            <CashOfferForm variant="hero" sourcePage="/markets/bethlehem-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Probate Sales in Bethlehem — What to Know</h2>
          <p className="text-gray-700 mb-3">
            Pennsylvania uses the Register of Wills and Orphan&apos;s Court structure for estate administration.
            For Bethlehem and all of Northampton County, this is handled at 669 Washington Street, Easton, PA 18042.
            Once the Register of Wills issues Letters Testamentary, the executor has legal authority to sell real estate.
          </p>
          <p className="text-gray-700 mb-3">
            We&apos;ve purchased probate properties in Northampton County before. We understand the executor role,
            the need for estate account proceeds, and how to structure a purchase agreement that works within
            the probate timeline. The closing doesn&apos;t require probate to be fully concluded — just Letters in hand.
          </p>
          <p className="text-gray-700 mb-4">
            Many Bethlehem probate properties are South Side row homes from the steel era — 1890s to 1930s
            construction, often with deferred maintenance and years of accumulated belongings. We buy them
            exactly as they are. According to Redfin, Bethlehem&apos;s median sale price is $320,000 (February 2026),
            with South Side properties averaging near $245,000.
          </p>
        </section>

        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Northampton County Register of Wills</h2>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-sm">
            <p className="font-semibold text-brand-dark">Northampton County Register of Wills and Orphan&apos;s Court</p>
            <p className="text-gray-600">669 Washington Street, Easton, PA 18042</p>
            <p className="text-gray-600">Phone: (610) 829-6488</p>
            <p className="text-gray-600">Hours: Monday–Friday, 8:30am–4:30pm</p>
            <p className="text-gray-600 mt-1">
              Court page:{' '}
              <a href="https://www.nccpa.org/orphans" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                nccpa.org/orphans →
              </a>
            </p>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for the Bethlehem Probate Property"
          subheadline="We work with estate executors throughout Northampton County. Written offer in 24 hours."
          sourcePage="/markets/bethlehem-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Probate Sales in Bethlehem PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/bethlehem-pa/inherited-property" className="text-brand-primary hover:underline">Inherited property in Bethlehem PA →</Link></li>
            <li><Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline">Bethlehem PA market overview →</Link></li>
            <li><Link href="/guides/probate" className="text-brand-primary hover:underline">Pennsylvania probate guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell the Bethlehem Probate Property?" sourcePage="/markets/bethlehem-pa" />
      </div>
    </>
  );
}
