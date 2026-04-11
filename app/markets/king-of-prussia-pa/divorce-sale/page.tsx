import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, kingOfPrussiaLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Home in Divorce King of Prussia PA',
  description:
    'Selling a house during divorce in King of Prussia PA? We buy as-is, close in 7-14 days, and eliminate joint ownership complications. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/markets/king-of-prussia-pa/divorce-sale` },
  openGraph: { images: [{ url: '/images/king-of-prussia-hero.jpg', width: 1200, height: 630, alt: 'Sell Your Home During Divorce in King of Prussia PA' }] },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my house during a divorce in Pennsylvania without court approval?',
    answer:
      "It depends on how the divorce is structured. If both spouses agree and no court order prohibits the sale, you can sell during the divorce proceedings. If there's a court order, automatic temporary restraining orders (ATROs), or a dispute over the property's disposition, court approval may be required. Montgomery County Family Court handles these matters at One Montgomery Plaza, 425 Swede Street, Norristown PA 19401. A family law attorney can clarify your specific situation.",
  },
  {
    question: 'What if my spouse and I can\'t agree on selling the house?',
    answer:
      "If one spouse wants to sell and the other doesn't, the dispute can be brought before the Montgomery County Court of Common Pleas under the Divorce Code (23 Pa.C.S. § 3502). The court can order the sale of the marital home and dictate how proceeds are divided. This process takes longer, but cash buyers can often close quickly once an order is issued.",
  },
  {
    question: 'How are proceeds split when selling a marital home in PA?',
    answer:
      'Pennsylvania is an equitable distribution state — marital assets are divided fairly, not necessarily 50/50. Factors include the length of the marriage, each spouse\'s contributions to the property, and each party\'s financial situation. Your attorneys or a mediator will negotiate the split. The sale proceeds go to a title company escrow account and are distributed according to the agreement or court order.',
  },
  {
    question: 'Why is a cash sale better than listing during a divorce?',
    answer:
      "Listing on the MLS requires ongoing cooperation: joint decisions on price reductions, attending showings, coordinating repairs, negotiating offers — all while navigating a difficult personal situation. A cash sale eliminates all of that. One offer, one decision, one closing. Done. Proceeds are split according to the agreement, and both parties move on.",
  },
  {
    question: 'Can we sell a King of Prussia home during divorce if it has a mortgage?',
    answer:
      "Yes. If the sale price exceeds the mortgage balance, the mortgage is paid off at closing and the remaining proceeds are split. If the home is underwater (worth less than the mortgage), a short sale may be necessary — the lender agrees to accept less than the full balance. We can walk you through both scenarios.",
  },
];

const pageUrl = `${SITE_URL}/markets/king-of-prussia-pa/divorce-sale`;

export default function KopDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        kingOfPrussiaLocalBusinessSchema,
        articleSchema('Selling a House During Divorce in King of Prussia, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/king-of-prussia-hero.jpg"
          alt="King of Prussia PA — sell house during divorce"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/king-of-prussia-pa" className="hover:text-white">King of Prussia</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your House During Divorce in King of Prussia, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              A cash sale eliminates the most difficult parts of selling a marital home — no joint
              showings, no shared repair decisions, no waiting on a buyer&apos;s financing. One offer,
              one closing, proceeds split according to your agreement. We close in 7–14 days.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Discreet, Fast, Direct
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/king-of-prussia-pa" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95df0e/xq97s-oPWTHJKhDC2X5H-_tmprp6rudrp.mp4"
        title="Selling Your House During Divorce in King of Prussia"
        poster="/images/video-posters/kop-divorce.jpg"
        subtitle="Neutral third party — fair offer, fast close, done"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Selling a house during a divorce in King of Prussia is stressful under the best circumstances. I&apos;m with USA Home Buyers, and I want to explain why a cash sale often makes the most sense in this situation.</p>
            <p className="mb-3">The traditional listing route requires agreement at every step — agent selection, list price, repairs and updates, which offers to accept. When two people in a divorce have to agree on all of that, it often drags on for months. Meanwhile, you&apos;re both carrying a shared asset and dealing with a house neither of you wants to be tied to anymore.</p>
            <p className="mb-3">A cash sale cuts through that. We make one written offer to both parties within 24 hours. If you accept, we close in 7 to 14 days. The proceeds come out at closing and get divided per your divorce agreement or court order.</p>
            <p className="mb-3">With King of Prussia median home values in the $453,000 to $549,000 range, there&apos;s often significant equity at stake. Our goal is to get both parties a fair, fast outcome.</p>
            <p className="mb-3">We&apos;re a neutral third party. We don&apos;t have a stake in either side of the divorce. Our job is just to close the deal efficiently.</p>
            <p className="mb-3">Montgomery County Court of Common Pleas handles divorce proceedings. Call USA Home Buyers at 888-440-5250. Fair offer, 24 hours, close in 7 to 14 days. Done.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Core Advantage of a Cash Sale in Divorce</h2>
            <p className="text-gray-700 text-sm">
              Listing a home on the MLS requires active cooperation between two people going through a difficult
              separation. Every decision — pricing, repairs, counteroffers — becomes another negotiation.
              A cash sale cuts that short: one offer, one signature from each party (or the authorized representative),
              one closing. The house is sold. You both move forward.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why Divorce Sales in King of Prussia Often Go the Cash Route
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Speed and finality',
                  desc: 'A traditional listing in KOP means 34 days to pending plus 45–60 more days to close. That\'s three months of ongoing joint ownership, shared decision-making, and uncertainty. A cash sale closes in 7–14 days. Both parties move on.',
                },
                {
                  title: 'Homes that need updates',
                  desc: "Many KOP homes are 1960s–1970s vintage. Neither party may have the time, budget, or agreement to fund the $40,000–$80,000 in updates the house needs to compete at top retail prices. Cash buyers buy as-is.",
                },
                {
                  title: 'Equity that needs to be unlocked',
                  desc: "Given KOP's median home values ($453K–$549K), there's often meaningful equity in the marital home. A cash sale unlocks that equity fast without the risk of a financed buyer's deal falling through.",
                },
                {
                  title: 'Neutrality of the process',
                  desc: 'We work with both parties, or with the designated authorized representative. We don\'t take sides. Our goal is a clean, documented transaction that both parties can confirm was handled fairly.',
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Montgomery County Family Court — What You Need to Know
            </h2>
            <p className="text-gray-700 mb-4 text-sm">
              Divorce proceedings in King of Prussia go through the Montgomery County Court of Common Pleas,
              Family Division, located at One Montgomery Plaza, 425 Swede Street, Norristown PA 19401.
              Under Pennsylvania&apos;s Divorce Code (23 Pa.C.S. § 3323), either party can petition the court
              for the sale and distribution of marital real estate. Pennsylvania is an equitable distribution
              state — not a community property state — so the division reflects each party&apos;s contributions
              and circumstances.
            </p>
            <p className="text-gray-700 text-sm">
              If both parties agree on the sale and the division of proceeds, the process is straightforward
              and does not require a court order — just signatures from both parties on the sale documents.
              We work with your family law attorneys to make the transaction clean and properly documented.
            </p>
            <div className="mt-3 text-xs text-gray-500">
              <strong>Source:</strong>{' '}
              <a
                href="https://www.legis.state.pa.us/cfdocs/legis/LI/consCheck.cfm?txtType=HTM&ttl=23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Pennsylvania Divorce Code — 23 Pa.C.S. § 3323 (legis.state.pa.us)
              </a>{' '}·{' '}
              <a
                href="https://www.montgomerycountypa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Montgomery County Court of Common Pleas — montgomerycountypa.gov
              </a>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Marital Property"
            subheadline="Discreet, fast, and straightforward. Both parties informed at every step."
            sourcePage="/markets/king-of-prussia-pa"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Divorce Home Sale in Montgomery County" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/divorce-sale" className="text-brand-primary hover:underline">
                PA Divorce Home Sale Guide
              </Link>{' '}
              ·{' '}
              <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">
                Sell Your King of Prussia House
              </Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
