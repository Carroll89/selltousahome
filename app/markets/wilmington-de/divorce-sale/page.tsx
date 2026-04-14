/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wilmingtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House in Divorce Wilmington DE',
  description:
    'Need to sell your Wilmington DE house during divorce? One cash offer, one closing, proceeds split cleanly. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How is real property divided in a Delaware divorce?',
    answer: "Delaware follows equitable distribution. The court divides marital assets — including real property — in a manner that is fair, though not necessarily equal. According to Delaware Code Title 13, §1513, courts consider factors like the length of the marriage, each party's financial situation, and contributions to the marital home. The marital home is often the largest asset in dispute.",
  },
  {
    question: 'Does the divorce decree require us to sell the Wilmington house?',
    answer: "Not always — but it's common. If neither spouse can buy out the other's equity or refinance the mortgage in their sole name, a court-ordered sale is typical. We've worked with Wilmington sellers who needed to sell on a court-imposed timeline. A cash sale with a 7-14 day close often works better than a listed sale when speed and certainty matter.",
  },
  {
    question: 'What is the transfer tax on a divorce property sale in Wilmington?',
    answer: "Wilmington has a 4% total transfer tax (2.5% Delaware state + 1.5% City of Wilmington). By convention, buyer and seller split it 50/50 (each pays 2%). On a $210,000 home, the total is $8,400. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax.",
  },
  {
    question: 'Can you buy a house that has both spouses on the title?',
    answer: "Yes. Both parties listed on the title must sign the purchase agreement and the deed at closing. We coordinate with both parties and their attorneys. If spouses can't communicate directly, we route communications through counsel. One contract, one closing, proceeds split according to your divorce agreement or court order.",
  },
  {
    question: 'How long does a cash sale take vs. listing during a divorce?',
    answer: "A cash sale closes in 7-14 days. A traditionally listed Wilmington home spends a median of 72 days on market (Redfin, Feb 2026) — and that's before the 30-45 day lender processing period. Divorce proceedings are already stressful enough. A cash sale ends the shared financial obligation in days, not months.",
  },
];

export default function WilmingtonDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        wilmingtonLocalBusinessSchema,
        articleSchema('Selling Your House During Divorce in Wilmington DE', pageUrl, '2026-04-13'),
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
            alt="Wilmington DE divorce home sale — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/wilmington-de" className="hover:text-white">Wilmington DE</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Wilmington DE House During Divorce — One Offer, One Closing
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Divorce adds complexity to every step of a home sale. USA Home Buyers simplifies it:
              one written offer, one closing, proceeds split according to your divorce agreement.
              No showings, no repairs, no weeks of uncertainty. Close in as few as 7 days.
            </p>
            <a
              href={`tel:${PHONE}`}
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
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Cash Sales Work Better During Divorce</h2>
          <p className="text-gray-700 mb-4">
            A traditional listing during divorce means weeks of coordinating showings, agreeing on repairs,
            responding to inspection demands, and waiting on a buyer's lender — all while the divorce
            proceedings are ongoing. Every delay extends the time both parties remain financially tied together.
          </p>
          <p className="text-gray-700 mb-4">
            According to Redfin, Wilmington homes spend a median of 72 days on market. Add 30-45 days for
            lender approval on a financed buyer, and you're looking at 3-4 months before closing. A cash sale
            with USA Home Buyers closes in 7-14 days. Both parties sign, proceeds are distributed at the title
            company, and that chapter is closed.
          </p>
          <p className="text-gray-700 mb-4">
            Delaware family law courts are familiar with cash sales for divorce properties. According to{' '}
            <a href="https://delcode.delaware.gov/title13/c015/sc02/index.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Delaware Code Title 13</a>,
            courts can order a sale of marital property with the proceeds split per the divorce decree. We coordinate
            with both parties' attorneys when direct communication isn't possible.
          </p>
        </section>

        <section className="mb-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Delaware Divorce Property Sale — Key Facts</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li><strong>Property division:</strong> Delaware follows equitable distribution (Delaware Code Title 13, §1513)</li>
            <li><strong>Both spouses must sign:</strong> Both titleholders must sign the purchase agreement and deed at closing</li>
            <li><strong>Transfer tax:</strong> 4% total in Wilmington — we cover it as part of all closing costs</li>
            <li><strong>Court-ordered sale:</strong> We've handled court-mandated sale timelines; call to discuss your specific order</li>
            <li><strong>Attorney coordination:</strong> We communicate through attorneys when parties prefer no direct contact</li>
          </ul>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Wilmington Divorce Property"
          subheadline="One offer, one closing, proceeds split cleanly. Written offer in 24 hours."
          sourcePage="/markets/wilmington-de"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Divorce Property Sale in Wilmington DE" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">Wilmington DE Cash Home Buyers →</Link></li>
            <li><Link href="/markets/wilmington-de/foreclosure" className="text-brand-primary hover:underline">Foreclosure Help in Wilmington DE →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
