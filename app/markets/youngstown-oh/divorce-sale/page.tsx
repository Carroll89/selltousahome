/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/divorce-sale`;

export const metadata: Metadata = {
  title: 'Divorce Home Sale Youngstown OH',
  description:
    'Need to sell your Youngstown OH house during divorce? We buy as-is, one offer, one closing. Coordinate with your attorneys or Mahoning County court order.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How do Ohio courts handle the family home in a divorce?',
    answer: "Ohio is an equitable distribution state — marital property is divided fairly but not necessarily 50/50. Mahoning County domestic relations cases are heard in the Mahoning County Court of Common Pleas, Domestic Relations Division, at 120 Market Street, Youngstown, OH 44503. The court can order the home sold and proceeds split, or award the home to one spouse with a buyout. A cash sale is often the cleanest resolution because it closes fast and eliminates the uncertainty of a traditional listing.",
  },
  {
    question: 'Can we sell the house before the divorce is finalized?',
    answer: "Yes, with both spouses' agreement or an applicable court order. Required signatures depend on title, marital rights, and court directives. Many couples choose to sell before the divorce is finalized to get the financial separation done — the proceeds can be escrowed or split at closing per your attorney's direction.",
  },
  {
    question: 'What if one spouse wants to sell and the other doesn\'t?',
    answer: "If spouses can't agree, either party can ask the Mahoning County domestic relations court for orders addressing the property. Whether a sale is ordered depends on the facts and the judge's order. A cash buyer can close quickly once the required authority is in place.",
  },
  {
    question: 'How does a cash sale help with a Youngstown divorce?',
    answer: "Speed and certainty. A traditional listing can take months once showings, inspection negotiations, and buyer financing are included — during which both spouses may still be co-owners, still paying taxes and insurance, and still connected through the property. A cash sale can close in 7-14 days when title is clear and attorneys/court orders allow, creating a clean proceeds split.",
  },
  {
    question: 'Are there tax implications when selling during divorce in Ohio?',
    answer: "The federal home sale exclusion ($250,000 per person / $500,000 per couple for primary residence gains) has specific rules for divorce situations. Ohio does not have an additional capital gains tax — gains pass through to federal returns. Consult a tax professional about your specific situation. Source: IRS Publication 523 (Selling Your Home); Ohio Department of Taxation (tax.ohio.gov).",
  },
];

export default function YoungstownDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('Selling a House During Divorce in Youngstown OH — Mahoning County', pageUrl, '2026-04-14'),
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
              <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Youngstown OH House During Divorce — One Offer, Clean Split
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Divorcing in Mahoning County and need to sell the house fast? We make one cash offer,
              coordinate with both attorneys, and close in 7-14 days when title and any court approvals are clear. No open houses, no showings,
              no extended timeline while you're still financially tied together.
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
          <p className="text-gray-700 text-sm leading-relaxed">Yes, you can sell a house during or after a divorce in Youngstown, OH when the required owners agree or the court authorizes the sale. A cash sale can be a fast way to divide the home and finalize the settlement. USA Home Buyers buys divorce-sale properties in Youngstown as-is, often closing in 7–14 days when title and approvals are clear.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Divorcing Couples Choose a Cash Sale in Youngstown</h2>
          <p className="text-gray-700 mb-4">
            A traditional listing in Youngstown can take months once showings,
            inspections, repair negotiations, and the buyer's lender approval process are included. During that time,
            both spouses may remain co-owners, sharing responsibility for taxes, insurance, and maintenance
            on a property neither may want to keep. Arguments about staging, pricing, and showings can
            extend what's already a difficult process.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale eliminates the timeline uncertainty. One offer. One closing. Proceeds distributed
            directly at the Mahoning County title company on the closing date — either split at closing
            or escrowed per your attorneys' direction. The financial tie to the property — and to each other
            through it — ends on a known date.
          </p>
          <p className="text-gray-700">
            According to Mahoning County court resources, divorce cases are handled by the{' '}
            <a href="https://www.mahoningcountyoh.gov/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County Court of Common Pleas</a>,
            Domestic Relations Division. Under Ohio Revised Code Chapter 3105, Ohio is an equitable distribution state — not community property — meaning courts divide
            marital assets fairly based on circumstances, not automatically 50/50.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer on Your Youngstown Home"
          subheadline="One number. One closing. Proceeds split cleanly. Written offer in 24 hours."
          sourcePage="/markets/youngstown-oh"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Divorce Home Sales in Youngstown OH" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/probate" className="text-brand-primary hover:underline">Probate Sale in Youngstown OH →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
