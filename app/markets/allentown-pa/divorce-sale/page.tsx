import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, allentownLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Your House During Divorce in Allentown PA',
  description:
    'Selling a house during divorce in Allentown PA? We buy fast for cash — no showings, no waiting. Close on your timeline. Lehigh County PA divorce home sale guide.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/divorce-sale` },
};

const FAQ_ITEMS = [
  {
    question: 'Who gets the house in a divorce in Pennsylvania?',
    answer: 'Pennsylvania is an equitable distribution state, not a community property state. Courts divide marital assets based on fairness — not automatically 50/50. Factors include length of the marriage, each spouse\'s financial contributions, custody of children, and each party\'s ability to maintain the home independently. Consult a PA family law attorney before assuming any particular split.',
  },
  {
    question: 'Can I force a house sale during a divorce in Pennsylvania?',
    answer: 'Yes, through a court order. If one spouse refuses to agree to a sale, the other can petition the Lehigh County Court of Common Pleas to order the sale. Courts generally prefer voluntary agreements but will order a sale when the spouses are deadlocked.',
  },
  {
    question: 'Can I sell my house before the divorce is finalized in PA?',
    answer: 'Yes. The house can be sold before the divorce is finalized — this is common and often practical. You don\'t need to wait for the divorce to be complete to sell the property and split the proceeds.',
  },
  {
    question: 'How is the home sale split in a Pennsylvania divorce?',
    answer: 'The title company distributes proceeds at closing according to your settlement agreement or court order. Both parties\' attorneys can be present. The check goes out the same day — no waiting months for financing to clear.',
  },
  {
    question: 'How long does it take to sell a house during divorce in Allentown?',
    answer: 'With a cash buyer: 1-2 weeks total from first inquiry to closing. With a traditional MLS listing: 60-90 days minimum, with ongoing cooperation required at every stage. Each month a home sits costs both parties in carrying costs.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Timeline', cashBuyer: '7-14 days total', traditional: '60-90 days minimum' },
  { label: 'Cooperation required', cashBuyer: 'Minimal — one decision point', traditional: 'Ongoing — list price, showings, repairs' },
  { label: 'Repair negotiations', cashBuyer: 'None — we buy as-is', traditional: 'Buyer inspector finds issues, both spouses negotiate' },
  { label: 'Showings', cashBuyer: 'None required', traditional: 'Requires coordination between parties' },
  { label: 'Carrying costs (90 days)', cashBuyer: 'Eliminated by fast close', traditional: '$4,000-$6,000+ in shared expenses' },
  { label: 'Net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% of FMV (before repairs & carrying costs)' },
];

const pageUrl = `${SITE_URL}/markets/allentown-pa/divorce-sale`;

export default function AllentownDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        allentownLocalBusinessSchema,
        articleSchema('Selling Your House During Divorce in Allentown, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/allentown-hero.jpg"
          alt="Allentown PA homes — we buy houses fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/allentown-pa" className="hover:text-white">Allentown, PA</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Selling Your House During Divorce in Allentown, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Divorce is difficult. A cash sale eliminates the delays of MLS listing, skips repair negotiations between
              parties, and lets both spouses move on quickly. We buy in any condition, close in 7-14 days.
            </p>
            <p className="text-blue-100 text-sm">
              Selling a house during a divorce in Allentown can be completed in as little as 7-14 days through a cash
              sale. Under Pennsylvania&apos;s equitable distribution law, proceeds are split according to the divorce
              agreement — often 50/50, but always court-determined.
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/allentown-pa/divorce-sale" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0f7/caLPVXoORM986HzvQqDBE_allentown-divorce.mp4"
        title="Selling a House During Divorce in Allentown"
<<<<<<< HEAD
        poster="/images/video-posters/allentown-divorce-poster.jpg"
        subtitle="See how we help Allentown homeowners sell quickly and move forward during a divorce"
=======
        poster="/images/video-posters/allentown-divorce.jpg"
        subtitle="Learn about selling your property during divorce in Allentown"
>>>>>>> db652478dd89d7d27200e95ec4d3219806ea3cbb
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Selling a house during a divorce in Allentown is hard — not just logistically, but emotionally. I&apos;m with USA Home Buyers, and I want to make the real estate part of this as simple as it can be.</p>
            <p className="mb-3">The traditional listing route during a divorce is full of friction. You need both parties to agree on an agent, agree on a list price, agree on what repairs to make, agree on which offer to accept — and then wait 45 to 60 days to close while a divorce case may still be active.</p>
            <p className="mb-3">A cash sale eliminates most of that. We make one written offer. Both parties review it. If you both accept, we set a closing date — as fast as 7 to 14 days. The proceeds come out of closing and get divided according to your divorce agreement or court order.</p>
            <p className="mb-3">We&apos;re a neutral third party. We have no relationship with either spouse. Our job is just to close the transaction efficiently so both of you can move on.</p>
            <p className="mb-3">Lehigh County Court of Common Pleas handles divorce proceedings in the Allentown area. Whether you&apos;re early in the process or have a court-ordered sale, we can work with your attorneys and timeline.</p>
            <p className="mb-3">If you and your spouse need to sell a house in Allentown, call USA Home Buyers at 888-440-5250. We&apos;ll have a written offer to you within 24 hours.</p>
        </div>
      </details>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-4xl">

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              How Pennsylvania Divorce Law Affects Your Allentown Home Sale
            </h2>
            <p className="text-gray-700 mb-4">
              Pennsylvania is an <strong>equitable distribution state</strong> — not a community property state.
              Courts divide assets &quot;equitably&quot; — meaning fairly, based on circumstances, which often results in
              something close to 50/50, but not always.
            </p>
            <p className="text-gray-700 mb-4">
              The marital home is typically the largest single asset in a divorce. In Allentown, with a median
              home price around $245,000, that&apos;s often $100,000+ in net equity at stake. How it gets divided
              depends on factors including length of the marriage, each spouse&apos;s income, and whether children are involved.
            </p>
            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-lg p-4 mb-4">
              <p className="font-semibold text-brand-dark mb-1">Important:</p>
              <p className="text-gray-700 text-sm">
                <strong>The house can be sold before the divorce is finalized.</strong> This is common and often
                practical — sometimes court-ordered. You don&apos;t need to wait for the divorce to be complete to
                sell the property and split the proceeds.
              </p>
            </div>
            <p className="text-gray-700 mb-3">
              Under PA law, a no-fault divorce requires a 90-day waiting period after filing. If both spouses consent,
              the divorce can proceed after that period. Most contested divorces in Lehigh County take 12-24 months
              to finalize.
            </p>
            <p className="text-gray-700 mb-3">
              If both spouses cannot agree on what to do with the marital home, the Lehigh County Court of Common
              Pleas can order the property sold — even if one spouse objects.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
              <p className="font-semibold text-brand-dark mb-1">Lehigh County Court of Common Pleas — Domestic Relations</p>
              <p>455 W Hamilton St, Allentown, PA 18101</p>
              <p>Governing statute: <strong>23 Pa.C.S. § 3501</strong></p>
              <p className="mt-2 text-xs text-gray-500">
                This is general information about Pennsylvania law, not legal advice. Consult a PA family law attorney
                before making real estate decisions during divorce proceedings.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Options for Selling During a Divorce in Allentown
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-brand-primary mb-2">Option 1: Sell to a Cash Buyer (Fastest)</h3>
                <p className="text-gray-700 text-sm">
                  If both spouses agree to sell, this is the simplest path. Accept a cash offer, close in 7-14 days,
                  and split the proceeds at closing per your agreement. No showings, no staging, no open houses.
                  Cash buyers don&apos;t require ongoing cooperation — there&apos;s one decision to agree on, then the process
                  runs itself.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-600 mb-2">Option 2: List on the MLS</h3>
                <p className="text-gray-700 text-sm">
                  Traditional listing makes sense when the home is in good condition, both spouses are cooperating
                  fully, and neither party is in a financial hurry. The challenge: both spouses must agree at every
                  stage — list price, showings, inspection repairs. Any breakdown in cooperation can derail the sale.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-600 mb-2">Option 3: Court-Ordered Sale</h3>
                <p className="text-gray-700 text-sm">
                  If spouses can&apos;t agree and neither will buy out the other, the Lehigh County Court of Common Pleas
                  can order a sale. This route tends to be slower and more expensive. A voluntary cash sale almost
                  always produces a better outcome for both parties.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why a Cash Sale Makes Sense for Allentown Divorce Situations
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Speed means less time paying shared bills', desc: 'An Allentown mortgage on a $245,000 home runs $1,400-$1,900/month. A 75-day listing process adds thousands in joint expenses that reduce both parties\' net proceeds.' },
                { title: 'No repair negotiations between spouses', desc: 'Many Allentown row homes and older properties have deferred maintenance. When a buyer\'s inspector finds issues, who pays? With a cash buyer, there are no repair negotiations — the offer is the offer.' },
                { title: 'One closing, one check, immediate split', desc: 'The title company can split proceeds at closing according to your agreement or court order. Both parties can have attorneys present. The check goes out the same day.' },
                { title: 'Both spouses don\'t need to be in the same room', desc: 'We coordinate paperwork and closings to minimize contact between parties. We\'re experienced at working with attorneys to make it logistically smooth.' },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-dark mb-2">✓ {item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Cash Sale vs. MLS Listing During Divorce
            </h2>
            <ComparisonTable rows={COMPARISON_ROWS} />
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get Your Cash Offer — Move Forward Faster"
            sourcePage="/markets/allentown-pa/divorce-sale"
          />

          <section className="my-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Lehigh County Divorce Resources</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Lehigh County Court of Common Pleas — Domestic Relations</p>
                <p>455 W Hamilton St, Allentown, PA 18101 | <a href="https://www.lehighcounty.org" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">lehighcounty.org</a></p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Legal Aid Network — Lehigh Valley</p>
                <p><a href="https://palawhelp.org" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">palawhelp.org</a> — Free legal resources for qualifying PA residents</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Bar Association Lawyer Referral Service</p>
                <p><a href="https://pabar.org" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">pabar.org</a> — Find a Lehigh County family law attorney</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Divorce Code — Equitable Distribution</p>
                <p>23 Pa.C.S. § 3501 — the governing statute for how marital property is divided in Pennsylvania</p>
              </div>
            </div>
          </section>

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Divorce Home Sale in Allentown, PA" />

          <section className="my-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Related Pages</h2>
            <div className="flex flex-wrap gap-2">
              <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline text-sm">Allentown Market Page</Link>
              <span className="text-gray-300">|</span>
              <Link href="/guides/divorce-sale" className="text-brand-primary hover:underline text-sm">PA Divorce Sale Guide</Link>
              <span className="text-gray-300">|</span>
              <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline text-sm">Cash Offer vs. Listing</Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
