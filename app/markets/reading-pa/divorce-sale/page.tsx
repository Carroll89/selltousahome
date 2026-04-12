import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, readingLocalBusinessSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Divorce Sale in Reading PA — Sell Your House Fast',
  description:
    'Selling a house during divorce in Reading PA? Fast, fair cash offers and close in 7–14 days so both parties can move on. No repairs, no showings. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/divorce-sale` },
};

const FAQ_ITEMS = [
  {
    question: 'Can we sell our Reading PA house during a divorce?',
    answer:
      'Yes. A jointly-owned property can be sold during divorce proceedings. Both spouses typically need to sign the purchase agreement and deed unless one has been granted sole authority by the court. A cash sale is often preferred in divorce situations because it avoids the time and complexity of a traditional MLS listing.',
  },
  {
    question: 'What if we disagree on whether to sell or the price?',
    answer:
      'If spouses cannot agree, either party can petition the Berks County Court of Common Pleas for a partition action — a court-ordered sale. Courts in PA generally prefer voluntary sales to partition auctions. A fast cash sale at a fair price often resolves the disagreement more efficiently than litigation.',
  },
  {
    question: 'How does the 5% Reading transfer tax affect a divorce sale?',
    answer:
      'Reading PA has a 5% transfer tax (4% city + 1% state). In a traditional sale, the seller\'s side typically owes 4%, or $7,400 on a $185,000 home. When you sell to USA Home Buyers, we cover 100% of closing costs including the full transfer tax. More of the sale proceeds go to both parties.',
  },
  {
    question: 'Can the Reading house be sold as-is in a divorce?',
    answer:
      'Yes. We buy Reading properties in any condition — no repairs, no staging, no cleanout required. For divorcing couples, this eliminates the logistical and financial burden of preparing the home for market, which can be a significant source of conflict.',
  },
  {
    question: 'How quickly can we close on a divorce home sale in Reading?',
    answer:
      'We can typically close in 7-14 days of an accepted offer. For divorcing couples who need to divide proceeds quickly, or who are under a court timeline, this speed is often critical. We can also adjust the closing date to align with court requirements or attorney advice.',
  },
];

const pageUrl = `${SITE_URL}/markets/reading-pa/divorce-sale`;

export default function ReadingDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Selling a House During Divorce in Reading PA', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({ name: 'Selling a House During Divorce in Reading PA', description: 'USA Home Buyers explains how divorcing couples can sell their Reading PA home fast for cash with no repairs, no showings, and a clean break for both parties.', contentUrl: `${SITE_URL}/videos/reading-pa-divorce.mp4`, thumbnailUrl: `${SITE_URL}/videos/reading-pa-divorce-poster.jpg`, uploadDate: '2026-04-12' }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/reading-landmark-hero.jpg"
          alt="Reading PA home — sell during divorce fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/reading-pa" className="hover:text-white">Reading PA</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a House During Divorce in Reading PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              A fast, clean sale lets both parties move forward. We buy Reading PA row homes and houses
              as-is, close in 7-14 days, and cover all closing costs — including the 5% transfer tax.
              No showings, no repairs, no drawn-out process. Hablamos español.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Confidential, No Pressure
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/reading-pa/divorce-sale" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/reading-pa-divorce.mp4"
        title="Selling a House During Divorce in Reading PA"
        poster="/videos/reading-pa-divorce-poster.jpg"
        subtitle="A fast, fair cash offer so both parties can move on"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">Going through a divorce and need to sell a house in Reading? We make it simple. Both parties get a fair cash offer, we handle everything, and you can close fast without the stress of listing, showing, or waiting.</p>
          <p>With Reading&apos;s five percent transfer tax, a traditional sale costs thousands more than you&apos;d expect. We buy as-is, no repairs needed.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• A cash sale delivers a <strong>firm number and a clean break</strong> — both parties know exactly what they&apos;re getting and when</li>
              <li>• <strong>Both spouses must typically sign</strong> unless the Berks County Court grants one party sole authority</li>
              <li>• <strong>No repairs, no staging, no showings</strong> — eliminates the biggest source of conflict in divorce property sales</li>
              <li>• Reading&apos;s <strong>5% transfer tax adds $9,250</strong> on a $185K sale — we absorb it so more gets divided between both parties</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Why a Cash Sale Works in Divorce Situations</h2>
            <p className="text-gray-700 text-sm">
              A traditional MLS listing in Reading requires coordination, showings, inspections, and weeks of
              uncertainty — all while both parties remain financially and legally tied to the property. A cash
              sale delivers a firm number, a clear closing date, and a clean break. Both parties know exactly
              what they&apos;re getting, when they&apos;re getting it, and can move forward with their lives.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How Divorce Home Sales Work in Reading PA</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Both spouses typically sign',
                  desc: 'For jointly-owned property, both spouses sign the purchase agreement and deed. If one spouse has been granted sole authority by the Berks County Court of Common Pleas, they may sign alone. We coordinate with your divorce attorneys to ensure proper documentation.',
                },
                {
                  title: 'Proceeds split at closing',
                  desc: 'The title company handles proceeds distribution at closing per your divorce agreement or court order. Both parties can receive their share directly. No delays, no second transactions.',
                },
                {
                  title: 'Reading\'s 5% transfer tax disappears',
                  desc: 'In a traditional Reading sale, the seller\'s side typically owes 4% city transfer tax — $7,400 on a $185K home. When you sell to us, we cover all closing costs. More money gets divided between both parties.',
                },
                {
                  title: 'As-is condition — no coordination needed',
                  desc: 'No need to agree on which repairs to make, which contractor to hire, or how to stage the home. We buy it exactly as it is. This eliminates a major source of conflict in divorce property sales.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Reading PA Divorce Home Sale: The Numbers</h2>
            <p className="text-gray-700 mb-4">
              Reading&apos;s median home sale price is $185,000 (Redfin, Feb 2026) with a Zillow ZHVI of $227,041.
              In a traditional sale, a Reading seller faces: 5% transfer tax (4% local = $7,400), agent commissions
              (5-6% = $9,250-$11,100), and potential repair costs on pre-1939 housing stock. Total friction costs
              of $17,000-$25,000+ are common. According to the{' '}
              <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">Berks County Recorder of Deeds (berkspa.gov)</a>,
              Reading&apos;s 5% transfer tax is the city&apos;s 4% local rate plus 1% PA state — more than double what most Berks County
              municipalities pay.
            </p>
            <p className="text-gray-700">
              When you sell to USA Home Buyers, we make a written cash offer and absorb all closing costs.
              The offer we make is what you walk away with to divide — no surprise deductions at the closing table.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Reading&apos;s Housing Stock and Divorce Situations</h2>
            <p className="text-gray-700 mb-4">
              Over 56% of Reading&apos;s housing stock was built before 1939. That means most homes involved in Reading
              divorce sales are brick row homes or semi-detached twins with aging electrical, lead paint, cast iron
              plumbing, and deferred maintenance. According to{' '}
              <a href="https://www.neighborhoodscout.com/pa/reading/real-estate" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">NeighborhoodScout</a>,
              over 52% of Reading&apos;s housing units are attached row homes — the dominant housing type across almost every neighborhood.
            </p>
            <p className="text-gray-700 mb-4">
              A traditional divorce sale in Reading requires both parties to agree on repairs, contractors, and
              listing price while managing an active court process. Pre-1939 row homes regularly surface inspection
              issues that result in price renegotiations — a fresh source of conflict when a couple is already
              under legal and financial strain.
            </p>
            <p className="text-gray-700">
              A cash sale eliminates that entirely: no inspection contingencies, no repair negotiations, no
              counter-offers triggered by home defects. Both parties receive their share of a fixed number on
              a fixed closing date. In Reading&apos;s majority-Hispanic community — 70.8% of residents are Hispanic —
              we&apos;re also fully bilingual. We can handle the entire process in English or Spanish, which matters
              when family members or attorneys prefer to communicate in one language or the other.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Reading PA Home"
            subheadline="Written offer in 24 hours. Close in 7-14 days. Both parties can move forward. Hablamos español."
            sourcePage="/markets/reading-pa/divorce-sale"
          />

          <FAQSection items={FAQ_ITEMS} heading="Reading PA Divorce Home Sale — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>{' '}
              ·{' '}
              <Link href="/markets/reading-pa/property-liens" className="text-brand-primary hover:underline">Reading PA Property Liens</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
