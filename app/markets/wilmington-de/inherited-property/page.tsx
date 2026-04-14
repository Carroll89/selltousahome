/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wilmingtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Wilmington DE',
  description:
    'Inherited a house in Wilmington DE? We buy inherited properties as-is — row homes, estate sales. Cash offer in 24 hours. Work with NCC Register of Wills.',
  alternates: { canonical: pageUrl },
};

const articleSch = articleSchema(
  'Selling an Inherited House in Wilmington DE — New Castle County',
  pageUrl,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'What is the probate process for an inherited house in Wilmington DE?',
    answer: "In Delaware, real property transfers through the New Castle County Register of Wills — a branch of the Delaware Court of Chancery (not a separate Orphans' Court as in some other states). The Register of Wills office is located at 800 N. French Street, 2nd Floor, Wilmington, DE 19801 (phone: 302-395-7800; newcastlede.gov/152). After probate is granted, a new deed must be recorded at the NCC Recorder of Deeds before the property can be sold.",
  },
  {
    question: 'Do I need to complete probate before selling an inherited Wilmington house?',
    answer: "Generally yes, if the property was held solely in the decedent's name. Probate legally transfers title to the heirs. However, properties held in joint tenancy, living trusts, or with a transfer-on-death deed may pass outside probate. We work with executors and administrators throughout the Delaware probate process — we can begin the purchase process while probate is still pending and close once title is clear.",
  },
  {
    question: 'What is the transfer tax on an inherited property sale in Wilmington DE?',
    answer: "Wilmington has a 4% total transfer tax (2.5% Delaware state + 1.5% City of Wilmington). By convention, buyer and seller each pay 2%. On a $210,000 inherited home, the total is $8,400. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax — nothing comes out of your number.",
  },
  {
    question: 'Can I sell an inherited Wilmington house as-is without repairs?',
    answer: "Yes — and that's often the right call for inherited properties. Wilmington's pre-war brick row homes commonly have aging electrical, lead paint, outdated plumbing, and deferred maintenance. Rather than invest in repairs you won't benefit from, a cash sale lets you close quickly with no out-of-pocket costs. We buy as-is, including properties with tenants, estate contents left behind, and code violations.",
  },
  {
    question: 'What if there are multiple heirs who need to agree on the sale?',
    answer: "We work with multi-heir situations regularly. All named heirs or beneficiaries typically need to agree and sign. Our process is flexible — we can coordinate with multiple parties, attorneys, and different timelines. Call us to discuss your specific situation.",
  },
  {
    question: 'What are the taxes on selling an inherited house in Delaware?',
    answer: "Delaware does not have an inheritance tax. Estate tax may apply at the federal level for large estates (threshold: $13.61 million in 2026). Capital gains on an inherited property are typically calculated from the stepped-up basis (fair market value at date of death), not the original purchase price. Consult a Delaware tax professional for guidance specific to your situation.",
  },
];

export default function WilmingtonInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[wilmingtonLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

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
            alt="Wilmington DE inherited house — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/wilmington-de" className="hover:text-white">Wilmington DE</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in Wilmington DE — Fast, As-Is, No Hassle
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases inherited homes throughout Wilmington and New Castle County for cash —
              row homes in Southbridge, pre-war two-stories in Brandywine Village, estate properties in any
              condition. Written cash offer in 24 hours, close in as few as 7 days.
            </p>
            <p className="text-blue-100 mb-4 text-sm">
              We work with the NCC Register of Wills process and Delaware Court of Chancery. We can begin
              purchase paperwork while probate is still pending.
            </p>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3"
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
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Inherited a Wilmington Row Home? Here's What to Expect.
          </h2>
          <p className="text-gray-700 mb-4">
            Most inherited properties in Wilmington fall into a predictable pattern: a pre-1940 brick row home
            in Southbridge, West Center City, Brandywine Village, or the Eastside. It was lived in for decades,
            maintained inconsistently, and now sits in an estate. The beneficiaries — often out-of-state — need
            to make decisions about a property they didn't plan to own and may never have visited.
          </p>
          <p className="text-gray-700 mb-4">
            The New Castle County Register of Wills process in Delaware is handled through the Court of Chancery
            system at 800 N. French Street. According to{' '}
            <a href="https://www.newcastlede.gov/152/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">newcastlede.gov</a>,
            the Register of Wills maintains a list of Delaware probate attorneys and provides guidance on the
            small estate process (available for estates under $30,000). Larger estates require formal probate
            before the property can be transferred and sold.
          </p>
          <p className="text-gray-700 mb-4">
            We work with executors and administrators at every stage. If probate is already complete, we can
            close in 7 days. If it's still in progress, we can prepare purchase paperwork and close the moment
            the deed is transferable.
          </p>
        </section>

        <section className="mb-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Key Delaware Facts for Inherited Property</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Probate court:</strong> New Castle County Register of Wills (Delaware Court of Chancery system), 800 N. French St, Wilmington DE 19801. Phone: (302) 395-7800.{' '}
              <a href="https://www.newcastlede.gov/152/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">newcastlede.gov/152</a>
            </li>
            <li>
              <strong>Recording a new deed:</strong> After probate, the new deed must be recorded at NCC Recorder of Deeds, 800 N. French St. Recording fees: $30 doc fee + $5 tech fee + $13/page + $3/parcel (NCC Recorder; newcastlede.gov/136).
            </li>
            <li>
              <strong>Transfer tax:</strong> 4% total in Wilmington (2.5% Delaware state + 1.5% City of Wilmington). When you sell to us, we cover all closing costs. Source: Delaware Division of Revenue.
            </li>
            <li>
              <strong>Delaware inheritance tax:</strong> None. Delaware does not impose a state inheritance tax.
            </li>
            <li>
              <strong>Stepped-up basis:</strong> Capital gains are calculated from fair market value at date of death — not the original purchase price. Consult a Delaware CPA for your specific situation.
            </li>
          </ul>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Inherited Wilmington Property"
          subheadline="No repairs, no cleaning, no obligation. Written offer in 24 hours. We work with estates and executors."
          sourcePage="/markets/wilmington-de"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Property in Wilmington DE" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/wilmington-de/probate" className="text-brand-primary hover:underline">Probate Property Sales in Wilmington DE →</Link></li>
            <li><Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">Wilmington DE Cash Home Buyers →</Link></li>
            <li><Link href="/markets/wilmington-de/market-report" className="text-brand-primary hover:underline">Wilmington DE Housing Market Report →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
