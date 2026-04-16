/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/divorce-sale`;

export const metadata: Metadata = {
  title: 'Divorce Home Sale York PA',
  description:
    'Selling a house during divorce in York PA? Get a fair cash offer in 24 hours. Both parties agree once — close fast, split proceeds cleanly. York County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my York house before the divorce is finalized?',
    answer: "Yes, in many cases. With both spouses' consent, the property can be sold before the divorce decree. The proceeds are held in escrow or split at closing per a written agreement. An attorney can confirm whether your York County Court of Common Pleas proceedings require court approval for the sale.",
  },
  {
    question: 'What happens to the transfer tax when selling during divorce in York PA?',
    answer: "York PA has a 2% total transfer tax (1% PA state + 1% local). On a $165,000 home, the seller's share is $1,650. When selling to USA Home Buyers, we cover all closing costs including the full transfer tax — the full offer price goes to be split between parties.",
  },
  {
    question: 'What if my spouse and I disagree on the York house sale price?',
    answer: "A written cash offer from a licensed cash buyer provides an objective market-based number. If one spouse refuses to agree to any sale, the other can petition the York County Court of Common Pleas for a partition order — compelling a sale. This is slower and costlier; an agreed cash sale is usually far cleaner.",
  },
  {
    question: 'Does selling to a cash buyer require court approval in York PA?',
    answer: "Not typically for an uncontested agreed sale — both parties on title sign the deed at closing. If your divorce decree or court order specifically restricts property sales, you'll need your attorney to confirm. We can structure the closing to coordinate with any court requirements.",
  },
  {
    question: 'How quickly can the York house close during divorce proceedings?',
    answer: "We can close in as few as 7 days from an accepted offer. In contested divorce situations, we can delay closing to match any court timelines or settlement schedules. The flexibility of a cash buyer timeline is one of the key advantages over a retail listing.",
  },
];

export default function YorkDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('Selling a House During Divorce in York PA — York County', pageUrl, '2026-04-13'),
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
            alt="York PA home — divorce sale cash buyer"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/york-pa" className="hover:text-white">York PA</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your House During Divorce in York PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              A cash sale is the cleanest way to divide a shared York home during divorce —
              one agreed-upon price, one closing, proceeds split per your agreement.
              No repair negotiations, no showings, no waiting on buyers.
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
            <CashOfferForm variant="hero" sourcePage="/markets/york-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, you can sell a house during or after a divorce in York, PA. Both spouses must agree to the sale, or a York County Court of Common Pleas order can require it. A cash sale cuts through the delays of a traditional listing when both parties need a clean break. USA Home Buyers buys divorce-sale properties in York as-is, closing in 7–14 days with no repairs required.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Why Cash Buyers Make York Divorce Home Sales Easier
          </h2>
          <p className="text-gray-700 mb-3">
            A traditional listing during a divorce creates friction at every step: both spouses need to agree on
            asking price, approve every showing, negotiate with buyers, and wait 31+ days for closing while
            carrying shared mortgage costs and utilities. York's 31-day median days on market means a retail sale
            takes at least 60-90 days start to finish.
          </p>
          <p className="text-gray-700 mb-3">
            A cash sale collapses that process. We make one written offer — documented, specific, no emotion attached.
            Both parties agree once. The York County title company distributes proceeds per the divorce agreement
            at closing, often within 7-14 days.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue (pa.gov)</a>,
            a 2% total realty transfer tax applies to all PA property transfers, including divorce-related sales.
            On a $165,000 York home, that's $3,300 — customarily split 50/50. When you sell to us,
            we cover the full transfer tax as part of paying all closing costs.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/RealEstate/Pages/default.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">PA Real Estate Commission (dos.pa.gov)</a>,
            Pennsylvania does not require an attorney at closing, but both parties on title must sign the deed
            transfer. In divorce situations, a York County title company can coordinate separate signings
            when needed.
          </p>
        </section>

        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">What Happens at Closing</h2>
          <p className="text-gray-700 mb-3 text-sm">
            The York County title company handles the transaction. Both parties on title must sign —
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
          headline="Get a Cash Offer for Your York Marital Home"
          subheadline="Written offer in 24 hours. Both parties receive the same offer documentation."
          sourcePage="/markets/york-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Divorce Home Sales in York PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/york-pa" className="text-brand-primary hover:underline">York PA market overview →</Link></li>
            <li><Link href="/guides/divorce-sale" className="text-brand-primary hover:underline">Pennsylvania divorce home sale guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Settle the York PA Property?" sourcePage="/markets/york-pa" />
      </div>
    </>
  );
}
