import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection } from '@/components/FAQSection';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { faqSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Erie PA Cash Home Buyer FAQ | Sell Your House Fast',
  description:
    'Answers to every question about selling your house fast in Erie PA — timelines, prices, transfer tax, probate, foreclosure, and more. Serving Erie County.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/faq` },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Erie PA?',
    answer: "Once you accept a written offer, we typically close in 7-14 days. We send the written offer within 24 hours of your initial inquiry. Because we pay cash — no bank financing, no mortgage contingency — there's no waiting on lender approval. The fastest close we've done in the Erie area was 5 days.",
  },
  {
    question: "What is Erie PA's transfer tax?",
    answer: "Erie PA has Pennsylvania's standard 2% total transfer tax — 1% PA state tax plus 1% local (0.5% city of Erie + 0.5% school district). By convention, buyer and seller each pay 1% (your half = $1,150 on a $115,000 home). When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax. Source: PA Department of Revenue, pa.gov.",
  },
  {
    question: 'How much will you pay for my Erie PA house?',
    answer: "Cash offers for Erie homes typically range from 60-75% of after-repair value for distressed properties, or 70-80% of FMV for retail-ready homes. Erie's urban core median is around $115,000-$120,000 (DataUSA 2024). A typical cash offer for an urban Erie home is $70,000-$90,000. Millcreek/suburban properties at $250,000-$300,000 can yield $175,000-$225,000. We cover all closing costs — no commissions, no fees.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Erie's housing stock is 77% pre-1970 — old electrical, aging plumbing, snow and ice dam damage, and deferred maintenance are the rule here, not the exception. We buy in any condition. You don't need to repair, clean, or stage anything.",
  },
  {
    question: 'What neighborhoods in Erie PA do you buy in?',
    answer: 'All of Erie and Erie County — Little Italy, West Bayfront, Glenwood, Southeast Erie, Downtown Erie, Central Eastside, and the Millcreek corridor. We also buy throughout Erie County: Harborcreek, Lawrence Park, Wesleyville, North East, Girard, Fairview, Edinboro, Corry, Union City, and Waterford.',
  },
  {
    question: "What if my Erie home has code violations or snow/weather damage?",
    answer: "We buy houses with open code violations. Erie gets 104+ inches of snow per year — roof damage, ice dam issues, foundation problems, and deferred winter maintenance are common. These don't prevent a cash sale. Code violations and weather damage are factored into our offer, not used as a reason to decline.",
  },
  {
    question: 'Is USA Home Buyers a legitimate company in Erie PA?',
    answer: "USA Home Buyers LLC is a legitimate Pennsylvania business with a verifiable history of closed sales. Every offer we make is in writing — a formal purchase agreement with price, terms, and closing date. You can verify our Pennsylvania business registration at corporations.pa.gov.",
  },
  {
    question: 'Do I need to complete probate before selling an inherited Erie property?',
    answer: "In most cases, yes — if the property was titled solely in the deceased's name. Probate for Erie County estates is handled by the Erie County Register of Wills (part of Clerk of Records, Aubrea Hagerty-Haynes) at the Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. Phone: (814) 451-6000. Once Letters Testamentary are issued, the executor can sign a real estate contract. We can close shortly after — you don't need to wait for the full estate to settle.",
  },
  {
    question: 'How long does foreclosure take in Erie County?',
    answer: "Pennsylvania is a judicial foreclosure state. In Erie County, the full process typically takes 9-18 months from first missed payment to sheriff sale at the Erie County Courthouse (140 West Sixth Street, Erie PA 16501), conducted by Sheriff Chris Campanelli's office. PA law requires an Act 91 notice before foreclosure can be filed. If you have equity and sell before the sheriff sale, the mortgage gets paid off at closing and the foreclosure is dismissed. We can close in 7 days if needed.",
  },
  {
    question: 'Can I sell my tenant-occupied Erie rental without evicting the tenant?',
    answer: "Yes. We buy tenant-occupied properties with tenants in place — including non-paying tenants. You don't have to complete the eviction process. We take on the tenant relationship at closing. Erie has a ~50% renter-occupied rate — selling with tenants in place is one of the most common situations we handle.",
  },
  {
    question: "What does 'we cover all closing costs' mean in Erie PA?",
    answer: "It means zero out-of-pocket closing costs for you. We pay: the full 2% transfer tax (1% state + 1% Erie local), title insurance and title search fees, recording fees at the Erie County Recorder of Deeds (140 West Sixth Street, Erie PA 16501), settlement and notary fees, and all other customary closing costs. The offer we make is the number you walk away with.",
  },
  {
    question: "What are recording fees at the Erie County Recorder of Deeds?",
    answer: "Erie County recording fees for a deed are typically $50-$90 depending on page count (base fee plus per-page fee). The Erie County Recorder of Deeds is part of the Clerk of Records office (Aubrea Hagerty-Haynes) at the Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. Phone: (814) 451-6000. We pay these fees as part of our closing costs.",
  },
  {
    question: 'What happens after I submit the online form?',
    answer: "We call you within hours during business hours. We'll ask 5-10 questions about the property: condition, situation, timeline, what you need from the sale. Within 24 hours of that call, you receive a written cash offer via email. No high-pressure follow-up. The offer stands on its own. You decide.",
  },
];

export default function ErieFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        faqSchema(FAQ_ITEMS),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Erie PA</Link> › FAQ
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Erie PA Cash Home Buyer — Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mb-2">
          Everything you need to know about selling your Erie PA house for cash — transfer tax, timelines,
          prices, probate, foreclosure, tenant situations, and more.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-sm font-semibold text-brand-dark mb-1">Erie&apos;s 2% Transfer Tax — Standard PA Rate</p>
          <p className="text-sm text-gray-700">
            Unlike some PA cities (Reading is 5%), Erie&apos;s transfer tax is the standard 2% — 1% state + 1% local.
            On a $115,000 home, that&apos;s $2,300 total ($1,150 per side by convention). We cover all closing costs
            when you sell to us — the offer we make is what you walk away with.
            Source: <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer" className="underline">PA Dept. of Revenue</a>
          </p>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="" />

        <CashOfferForm
          variant="inline"
          headline="Ready to Get Your Erie PA Cash Offer?"
          subheadline="Written offer in 24 hours. We cover all closing costs."
          sourcePage="/markets/erie-pa/faq"
        />

        <p className="mt-4 text-xs text-gray-400">Market data last updated: April 2026</p>

        <div className="mt-6 text-sm text-gray-500">
          Related:{' '}
          <Link href="/markets/erie-pa/market-report" className="text-brand-primary hover:underline">Erie Market Report</Link>{' '}
          ·{' '}
          <Link href="/markets/erie-pa/neighborhoods" className="text-brand-primary hover:underline">Erie Neighborhoods</Link>{' '}
          ·{' '}
          <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
        </div>
      </div>
    </>
  );
}
