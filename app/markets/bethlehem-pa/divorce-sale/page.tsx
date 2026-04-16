import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/divorce-sale`;

export const metadata: Metadata = {
  title: 'Divorce Home Sale Bethlehem PA',
  description:
    'Selling a house during divorce in Bethlehem PA? Get a fair cash offer in 24 hours. Both parties agree once — close fast, split proceeds cleanly. Northampton County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Bethlehem house before the divorce is finalized?',
    answer: "Yes, in many cases. With both spouses' consent, the property can be sold before the divorce decree. The proceeds are held in escrow or split at closing per a written agreement. An attorney can confirm whether your divorce proceedings require court approval for the sale. Selling before finalization is often faster and reduces ongoing carrying costs.",
  },
  {
    question: 'What happens to the transfer tax when selling during divorce?',
    answer: "Bethlehem PA has a 2% total transfer tax (1% PA state + 1% City of Bethlehem). On a $320,000 home, the seller's share is $3,200. When selling to USA Home Buyers, we cover all closing costs including the full transfer tax — the full offer price goes to be split between parties.",
  },
  {
    question: 'What if my spouse and I disagree on the sale price?',
    answer: "A written third-party cash offer removes the subjective debate about value. Our written offer is a documented market number — not subject to one spouse's opinion. If the divorce is contested and a judge is involved, a cash offer can serve as a data point or the agreed-upon outcome. Pennsylvania courts have authority to order a sale if parties can't agree.",
  },
  {
    question: 'How is the sale handled if we both own the property?',
    answer: "Both spouses on title must sign the sales agreement and the deed at closing. This can be coordinated separately — spouses don't need to be in the same room. The Northampton County title company handles the transaction and distributes proceeds per the agreement.",
  },
  {
    question: 'How fast can we close on a Bethlehem divorce sale?',
    answer: "We close in 7-14 days from the signed purchase agreement. There's no mortgage contingency, no home inspection contingency, and no lender waiting period. For divorcing couples who need to stop shared carrying costs and move on, this speed is often the most valuable part.",
  },
  {
    question: 'What if there is a mortgage on the Bethlehem home?',
    answer: "The mortgage is paid off at closing from the sale proceeds. After payoff, any remaining equity is split per the divorce agreement. We coordinate with the title company to handle the payoff and any lien releases.",
  },
];

export default function BethlehemDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('Selling a House During Divorce in Bethlehem PA — Northampton County', pageUrl),
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
            alt="Bethlehem PA home — divorce sale cash buyer"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bethlehem-pa" className="hover:text-white">Bethlehem PA</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your House During Divorce in Bethlehem PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              A cash sale is often the cleanest way to divide a shared Bethlehem home during divorce —
              one agreed-upon price, one closing, proceeds split per your agreement.
              No negotiations about repairs, no showings, no waiting on buyers.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ One written offer both parties see</span>
              <span>✓ Close in 7-14 days</span>
              <span>✓ No repairs required</span>
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

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, you can sell a house during or after a divorce in Bethlehem, PA. Both spouses must agree to the sale, or a Northampton County Court of Common Pleas order can compel it. A cash sale eliminates the carrying costs and emotional friction of a long listing — you split the equity and close in 7–14 days. USA Home Buyers buys divorce-sale properties in the Bethlehem area as-is, with no repairs required.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Why Cash Buyers Make Divorce Home Sales Easier
          </h2>
          <p className="text-gray-700 mb-3">
            A traditional listing during a divorce creates friction at every step: both spouses need to agree on
            an asking price, approve every showing, negotiate with buyers, and wait 45-60 days for closing while
            carrying shared mortgage costs and utilities.
          </p>
          <p className="text-gray-700 mb-3">
            A cash sale collapses that process. We make one written offer — documented, specific, no emotion attached.
            Both parties agree once. We handle the rest. The Northampton County title company distributes proceeds
            per the divorce agreement at closing, often within 7-14 days.
          </p>
          <p className="text-gray-700 mb-4">
            According to Redfin, Bethlehem homes sell at a 100.5% sale-to-list ratio with a median of 10 days
            on market — but that assumes a market-ready home. Properties with deferred maintenance, where
            neither party wants to manage repairs during a contentious period, often sit longer. Our as-is offer
            removes that barrier.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue (pa.gov)</a>,
            a 2% total realty transfer tax applies to all PA property transfers, including divorce-related sales.
            On a $320,000 Bethlehem home, that&apos;s $6,400 — customarily split 50/50. When you sell to us,
            we cover the full transfer tax as part of paying all closing costs.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/RealEstate/Pages/default.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">PA Real Estate Commission (dos.pa.gov)</a>,
            Pennsylvania does not require an attorney at closing, but both parties on title must sign a deed transfer.
            In divorce situations, a Northampton County title company can coordinate separate signings if needed.
          </p>
        </section>

        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">What Happens at Closing</h2>
          <p className="text-gray-700 mb-3 text-sm">
            The Northampton County title company handles the transaction. Both parties on title must sign —
            this can be coordinated separately. At closing:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ Mortgage payoff handled directly at closing</li>
            <li>✓ Any liens or back taxes resolved from proceeds</li>
            <li>✓ Transfer tax and all closing costs covered by USA Home Buyers</li>
            <li>✓ Net proceeds distributed per your divorce agreement</li>
          </ul>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Bethlehem Marital Home"
          subheadline="Written offer in 24 hours. Close in 7-14 days. Both parties receive the same offer documentation."
          sourcePage="/markets/bethlehem-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Divorce Home Sales in Bethlehem PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline">Bethlehem PA market overview →</Link></li>
            <li><Link href="/guides/divorce-sale" className="text-brand-primary hover:underline">Pennsylvania divorce home sale guide →</Link></li>
            <li><Link href="/markets/bethlehem-pa/market-report" className="text-brand-primary hover:underline">Bethlehem PA market report →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Settle the Bethlehem Property?" sourcePage="/markets/bethlehem-pa" />
      </div>
    </>
  );
}
