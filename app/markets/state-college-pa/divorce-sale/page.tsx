import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, stateCollegeLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell House During Divorce in State College PA',
  description:
    'Selling a house during divorce in State College or Centre County PA? We make it fast and clean. Cash offer in 24 hours, close in 7-14 days. No repair disputes, no agent complications.',
  alternates: { canonical: `${SITE_URL}/markets/state-college-pa/divorce-sale` },
};

const FAQ_ITEMS = [
  {
    question: 'How does dividing a house work in a Pennsylvania divorce?',
    answer:
      "Pennsylvania uses 'equitable distribution' — not a strict 50/50 split. The court considers factors like length of marriage, each spouse's income and assets, and contributions to the marital estate. For a jointly owned home, the court can order a sale with proceeds split per the distribution formula, or one spouse can buy out the other. Selling to a cash buyer and splitting the proceeds cleanly is often the simplest resolution both spouses can agree on.",
  },
  {
    question: 'Where is the Centre County divorce court?',
    answer:
      "Divorce cases in Centre County are filed in the Centre County Court of Common Pleas, located at the Centre County Courthouse, Bellefonte, PA 16823. The Prothonotary's office handles civil filings including divorce actions. Phone: (814) 355-6706.",
  },
  {
    question: 'Can we sell the house even if we disagree on other divorce issues?',
    answer:
      "Often yes, if both spouses agree to the sale itself. You don't have to resolve every aspect of the divorce to sell the marital home. Both parties need to sign the deed and closing documents. If one spouse refuses to cooperate, the court can compel the sale through an equitable distribution order.",
  },
  {
    question: 'What if one spouse is still living in the house?',
    answer:
      "That's fine — we can still make an offer and arrange closing. The occupying spouse arranges their move-out as part of the closing timeline. We're flexible on possession dates to accommodate transitions. The occupying spouse staying through closing isn't a dealbreaker.",
  },
  {
    question: 'Do we need to make repairs before selling?',
    answer:
      "No. Cash buyers don't care about outdated kitchens, old carpet, or deferred maintenance. In a divorce situation, this matters: you don't want to be negotiating who pays for repairs while also negotiating everything else. We set an offer price based on as-is condition and stick to it.",
  },
  {
    question: 'How do proceeds get divided at closing?',
    answer:
      "The title company handles disbursement per your settlement agreement or court order. Each spouse's share, after paying off the mortgage and closing costs, goes where the agreement specifies. If there's a written marital settlement agreement, the title company follows it. If the court ordered the split, the title company follows the court order.",
  },
];

const pageUrl = `${SITE_URL}/markets/state-college-pa/divorce-sale`;

export default function StateCollegeDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        stateCollegeLocalBusinessSchema,
        articleSchema('Selling a House During Divorce in State College, PA', pageUrl, '2026-04-12'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA home — sell during divorce"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/state-college-pa" className="hover:text-white">State College</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling the Marital Home During Divorce in State College, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              When both parties want a fast, clean resolution for the family home in Centre County,
              a cash sale cuts through the complications. No repair negotiations. No agent fees to
              fight about. A written offer, both spouses sign, and it&apos;s done in 7-14 days.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Confidential Conversation
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/state-college-pa/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why Divorcing Couples Choose a Cash Sale in Centre County
            </h2>
            <p className="text-gray-700 mb-4">
              Selling a house during a divorce is already complicated. A traditional MLS listing adds
              more moving parts: agents, showings, repair requests, appraisals, buyer financing that can
              fall through. When you&apos;re already navigating a settlement, the last thing you need is a
              deal falling apart in escrow.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                { title: 'One offer, one price', desc: "We make a single written offer on the as-is condition. No haggling over repairs after inspection. The number is the number — both spouses know exactly what they're getting." },
                { title: 'Fast timeline', desc: "Close in 7-14 days. State College's competitive market means traditional listings move fast too — but financing still adds 45-60 days after offer acceptance. Cash doesn't." },
                { title: 'No agents in the middle', desc: "No 5-6% commission coming off the top. On a $400,000 home, that's $20,000+ staying in the proceeds to be divided between the parties instead." },
                { title: 'Both parties must sign', desc: "We work with both spouses and their attorneys. No one is left out of the process. Proceeds are disbursed at closing per your agreement or court order." },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              The State College Transfer Tax — It Matters in a Divorce Sale
            </h2>
            <p className="text-gray-700 mb-4">
              State College Borough charges 3.00% total realty transfer tax — the highest in Centre County.
              On a $400,000 sale, that&apos;s $12,000. We cover the full transfer tax when we buy your home,
              which means that cost doesn&apos;t come out of the proceeds you&apos;re dividing.
            </p>
            <p className="text-xs text-gray-500">
              Source:{' '}
              <a href="https://centrecountypa.gov/420/Realty-Transfer-Tax-Rates" target="_blank" rel="noopener noreferrer" className="underline">Centre County Realty Transfer Tax Rates</a>
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer for the Marital Home"
            subheadline="Confidential. No obligation. Written offer in 24 hours."
            sourcePage="/markets/state-college-pa/divorce-sale"
          />

          <FAQSection items={FAQ_ITEMS} heading="Divorce Sale in State College PA — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/divorce-sale" className="text-brand-primary hover:underline">Divorce Property Sale Guide (PA)</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">Sell Your State College House for Cash</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
