import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection } from '@/components/FAQSection';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { faqSchema, readingLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Reading PA Cash Home Buyer FAQ | Sell Your House Fast',
  description:
    'Answers to every question about selling your house fast in Reading PA — transfer taxes, timelines, prices, probate, foreclosure, and more. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/faq` },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Reading PA?',
    answer: 'Once you accept a written offer, we typically close in 7-14 days. We send the written offer within 24 hours of your initial inquiry. Because we pay cash — no bank financing, no mortgage contingency — there\'s no waiting on lender approval. The fastest close we\'ve completed in the Reading area was 5 days.',
  },
  {
    question: 'What is Reading PA\'s transfer tax and why does it matter?',
    answer: 'Reading PA has one of the highest real estate transfer taxes in Pennsylvania — 5% total (4% City of Reading local tax + 1% PA state tax). On a $185,000 home, that\'s $9,250 in transfer taxes. By comparison, every other Berks County municipality pays just 2% total. The seller\'s conventional portion is 4% ($7,400 on a $185K sale). When you sell to USA Home Buyers, we cover all closing costs including the full 5% transfer tax. Source: Berks County Recorder of Deeds Fee Schedule, berkspa.gov.',
  },
  {
    question: '¿Hablan español? / Do you have Spanish-speaking staff?',
    answer: `Sí, hablamos español. Reading is 70.8% Hispanic — we serve Reading's majority-Hispanic community and handle the entire process bilingually. Call us at ${PHONE} in English or Spanish.`,
  },
  {
    question: 'How much will you pay for my Reading PA house?',
    answer: 'We pay 70-80% of fair market value. Reading\'s Zillow ZHVI is $227,041 and the Redfin median sale price is $185,000 (Feb 2026). Cash offers for typical Reading homes typically range from $130,000-$182,000 depending on condition, neighborhood, and exit strategy. High-end properties in College Heights can yield offers up to $200K+. There are no agent commissions, no closing costs, and no repair expenses from your side.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Reading\'s housing stock is 56% pre-1939 — lead paint, aging electrical, old plumbing, and deferred maintenance are the rule here. We buy in any condition. You don\'t need to repair, clean, or stage anything. Take what you want from the property and leave the rest.',
  },
  {
    question: 'What neighborhoods in Reading PA do you buy in?',
    answer: 'All of Reading and Berks County — College Heights, Hampden Heights, Centre Park Historic District, Millmont, East Reading, Downtown Reading, GoggleWorks/Callowhill, and Mount Penn. We also buy throughout the surrounding Berks County service area: Wyomissing, Shillington, Sinking Spring, Muhlenberg, Boyertown, Kutztown, and Pottstown.',
  },
  {
    question: 'What if my Reading row home has code violations?',
    answer: 'We buy houses with open code violations throughout Reading. Reading\'s pre-war housing stock generates code violations regularly — outdated electrical, lead paint, unpermitted work, structural issues. Traditional buyers and lenders avoid these properties. We buy them. Code violations are factored into our offer, not used as a reason to decline.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company in Reading PA?',
    answer: 'USA Home Buyers LLC is a BBB-accredited business with a verifiable history of closed sales in Berks County. Every offer we make is in writing — a formal purchase agreement with price, terms, and closing date. You can verify our Pennsylvania business registration at corporations.pa.gov.',
  },
  {
    question: 'Do I need to complete probate before selling an inherited Reading property?',
    answer: 'In most cases, yes — if the property was titled solely in the deceased\'s name. Probate for Reading and Berks County estates is handled by the Berks County Register of Wills, 633 Court Street, Suite 2C, Reading PA 19601 (phone: 610-478-6600). Once Letters Testamentary are issued, the executor can sign a real estate contract. We can close shortly after those letters are in hand — you don\'t need to wait for the full estate to settle.',
  },
  {
    question: 'How long does foreclosure take in Berks County?',
    answer: 'Pennsylvania is a judicial foreclosure state. In Berks County, the full process typically takes 12-18 months from first missed payment to sheriff sale at the Berks County Courthouse (633 Court Street, Reading PA 19601). Before foreclosure can be filed, PA law requires an Act 91 notice giving you 33 days to apply for PHFA HEMAP assistance. If you have equity and sell before the sheriff sale, the mortgage gets paid off at closing and the foreclosure is dismissed. We can close in 7 days if needed.',
  },
  {
    question: 'Can I sell my tenant-occupied Reading rental without evicting the tenant?',
    answer: 'Yes. We buy tenant-occupied properties with tenants in place — including non-paying tenants. You don\'t have to complete the eviction process. We take on the tenant relationship at closing. Reading has a 61.5% renter-occupied rate and a highly active rental market — this is one of the most common situations we encounter.',
  },
  {
    question: 'What does "we cover all closing costs" actually mean in Reading?',
    answer: 'It means zero out-of-pocket closing costs for you. We pay: the full 5% transfer tax (4% Reading city + 1% PA state), title insurance and search fees, recording fees at the Berks County Recorder of Deeds (633 Court Street, 3rd Floor, Reading PA 19601), settlement/notary fees, and all other customary closing costs. The offer we make is the number you walk away with.',
  },
  {
    question: 'What is the Recording Fees fee at the Berks County Recorder of Deeds?',
    answer: 'The Berks County Recorder of Deeds charges $82.00 for a deed (up to 4 pages), plus $4.00 per additional page. The Recorder\'s office is at 633 Court Street, 3rd Floor, Reading PA 19601, phone 610-478-3380. Online records are searchable at berks.pa.publicsearch.us. We pay these fees as part of closing costs.',
  },
  {
    question: 'What happens after I submit the online form?',
    answer: 'We call you within hours during business hours — in English or Spanish. We\'ll ask 5-10 questions about the property: condition, situation, timeline, what you need from the sale. Within 24 hours of that call, you receive a written cash offer via email. No high-pressure follow-ups. The offer stands on its own. You decide.',
  },
];

export default function ReadingFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        faqSchema(FAQ_ITEMS),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Reading PA</Link> › FAQ
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Reading PA Cash Home Buyer — Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mb-2">
          Everything you need to know about selling your Reading PA house for cash — transfer taxes,
          timelines, prices, probate, foreclosure, tenant situations, and more.
          <span className="block mt-1 text-sm text-brand-primary font-medium">🇵🇷 Hablamos español — llamenos al {PHONE}</span>
        </p>

        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mb-8">
          <p className="text-sm font-semibold text-brand-dark mb-1">⚠️ Reading&apos;s 5% Transfer Tax — The Most-Asked Question</p>
          <p className="text-sm text-gray-700">
            Reading PA&apos;s 5% transfer tax (4% city + 1% state) is one of the highest in Pennsylvania.
            On a $185,000 home, that&apos;s $9,250 in transfer taxes. We cover it entirely — the offer we make
            is what you walk away with, zero deductions for taxes or closing costs.
            Source: <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer" className="underline">Berks County Recorder of Deeds</a>
          </p>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="" />

        <CashOfferForm
          variant="inline"
          headline="Ready to Get Your Reading PA Cash Offer?"
          subheadline="Written offer in 24 hours. We cover all closing costs including the 5% transfer tax. Hablamos español."
          sourcePage="/markets/reading-pa/faq"
        />

        <p className="mt-4 text-xs text-gray-400">Market data last updated: April 2026</p>

        <div className="mt-6 text-sm text-gray-500">
          Related:{' '}
          <Link href="/markets/reading-pa/market-report" className="text-brand-primary hover:underline">Reading Market Report</Link>{' '}
          ·{' '}
          <Link href="/markets/reading-pa/neighborhoods" className="text-brand-primary hover:underline">Reading Neighborhoods</Link>{' '}
          ·{' '}
          <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
        </div>
      </div>
    </>
  );
}
