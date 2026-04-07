import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ComparisonTable } from '@/components/ComparisonTable';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Selling a House During Divorce in Pennsylvania — Guide',
  description:
    'How to sell a house during divorce in Pennsylvania. Equitable distribution explained, your options, and how a cash sale eliminates delays and friction.',
  alternates: { canonical: 'https://selltousahome.com/guides/divorce-sale' },
};

const FAQ_ITEMS = [
  {
    question: 'Who gets the house in a Pennsylvania divorce?',
    answer:
      'Pennsylvania is an equitable distribution state — courts divide marital assets based on fairness, not automatically 50/50. Factors include the length of the marriage, each spouse\'s financial contributions, custody arrangements, and each party\'s ability to maintain the home. Consult a PA family law attorney for guidance specific to your situation.',
  },
  {
    question: 'Can I sell a house before the divorce is finalized in Pennsylvania?',
    answer:
      'Yes. The house can be sold before the divorce is finalized. Both spouses must agree to the sale terms (unless a court orders it), but completing the sale before the divorce closes is common and often practical. Proceeds are then divided per the settlement agreement.',
  },
  {
    question: 'Can a court force the sale of a home during divorce in PA?',
    answer:
      'Yes. If spouses disagree, either party can petition the Court of Common Pleas to order the property sold. Courts generally prefer voluntary agreements, but will issue sale orders when spouses are deadlocked and neither will buy out the other.',
  },
  {
    question: 'How are sale proceeds split in a Pennsylvania divorce?',
    answer:
      'According to your settlement agreement or court order. The title company distributes proceeds at closing per those terms. Both parties\' attorneys can be present. Payment is issued the same day of closing.',
  },
  {
    question: 'How long does it take to sell a house during a divorce?',
    answer:
      'With a cash buyer: 7-14 days from accepted offer to close. With a traditional MLS listing: 60-90+ days minimum, plus ongoing cooperation required at every stage. Each additional month costs both parties in mortgage payments, utilities, and property taxes.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Timeline', cashBuyer: '7-14 days total', traditional: '60-90+ days minimum' },
  { label: 'Cooperation required', cashBuyer: 'Minimal — one decision point', traditional: 'Ongoing at every stage' },
  { label: 'Repair disputes', cashBuyer: 'None — as-is purchase', traditional: 'Both spouses negotiate after inspection' },
  { label: 'Showings/open houses', cashBuyer: 'Not required', traditional: 'Requires both spouses\' cooperation' },
  { label: 'Monthly carrying cost (90 days)', cashBuyer: 'Eliminated by fast close', traditional: '$3,500-$5,000 shared costs' },
  { label: 'Net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% FMV (before all costs)' },
];

const pageUrl = `${SITE_URL}/guides/divorce-sale`;

export default function DivorceSaleGuidePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling a House During Divorce in Pennsylvania', pageUrl),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/guides" className="hover:text-white">Guides</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a House During Divorce in Pennsylvania
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              A cash sale is often the most practical solution for divorcing couples: one decision, fast close,
              proceeds split at closing. No ongoing cooperation required through showings, inspections, or repair
              negotiations.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Pennsylvania Equitable Distribution — How Your Home Gets Divided
            </h2>
            <p className="text-gray-700 mb-4">
              Pennsylvania is an <strong>equitable distribution state</strong>. This means marital assets — including the
              family home — are divided based on what a court determines is fair given the circumstances. This is not
              automatically 50/50, though that outcome is common.
            </p>
            <p className="text-gray-700 mb-4">
              Factors courts consider under 23 Pa.C.S. § 3501 include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-4 ml-2">
              <li>Length of the marriage</li>
              <li>Each spouse&apos;s income, earning capacity, and future employability</li>
              <li>Each spouse&apos;s contributions to acquiring and maintaining the property</li>
              <li>Custody arrangements and each parent&apos;s relationship with the children</li>
              <li>Each spouse&apos;s ability to independently maintain the home</li>
              <li>Tax consequences of the proposed division</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-lg p-4">
              <p className="font-semibold text-brand-dark mb-1">The house can be sold before the divorce is finalized.</p>
              <p className="text-gray-700 text-sm">
                This is common — often the most practical path. Once sold, proceeds are distributed according to your
                settlement agreement. You don&apos;t have to wait for the divorce to close to sell the property.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Three Options for Selling During Divorce in Pennsylvania
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-2">Option 1: Voluntary Sale to a Cash Buyer</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Both spouses agree to sell. A cash buyer makes a written offer within 24 hours. One decision point,
                  then the process runs itself. Close in 7-14 days. Proceeds split at closing per your agreement.
                  No showings, no open houses, no ongoing coordination.
                </p>
                <p className="text-sm font-semibold text-brand-secondary">Best for: Couples who agree the house should be sold and want to move forward quickly.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-2">Option 2: Traditional MLS Listing</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Higher gross sale price, but requires ongoing cooperation: both spouses must agree on list price,
                  showings schedule, inspection repair requests, and closing timeline. Any breakdown in cooperation
                  can derail the sale. Timeline: 60-90 days minimum.
                </p>
                <p className="text-sm font-semibold text-gray-500">Best for: Cooperative couples, home in good condition, neither party in financial urgency.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-2">Option 3: Court-Ordered Sale</h3>
                <p className="text-gray-700 text-sm mb-2">
                  If spouses cannot agree, a court can order the property sold. Slower, more expensive, and less
                  control over outcome. A voluntary sale almost always produces better results for both parties.
                </p>
                <p className="text-sm font-semibold text-gray-500">Best for: When one spouse refuses to cooperate and the other has exhausted all alternatives.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why Cash Sales Work Well for Divorcing Couples
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Minimum cooperation required',
                  desc: 'You agree once to accept the offer. After that, the title company handles everything. No showing coordination, no inspection negotiations, no price reductions to agree on.',
                },
                {
                  title: 'No repair negotiations between spouses',
                  desc: 'When a buyer\'s inspector finds $15,000 in issues, who pays? With a cash buyer, there are no repair conditions. The offer is the offer.',
                },
                {
                  title: 'Fast close reduces carrying costs',
                  desc: 'A shared mortgage on a Harrisburg home runs $1,200-$2,000/month. Three extra months of traditional listing costs $3,600-$6,000 in shared expenses that reduce both parties\' net.',
                },
                {
                  title: 'Attorneys can be present at closing',
                  desc: 'Both parties can have their attorneys review and oversee the closing. Proceeds are distributed per your agreement on closing day — no waiting.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Cash Sale vs. MLS Listing During Divorce — Side by Side
            </h2>
            <ComparisonTable rows={COMPARISON_ROWS} />
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get Your Cash Offer — Move Forward Faster"
            subheadline="Written offer in 24 hours. Close in 7-14 days. Proceeds split at closing."
            sourcePage="/guides/divorce-sale"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions — Divorce Home Sale in Pennsylvania"
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Pennsylvania Divorce Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Bar Association — Lawyer Referral Service</p>
                <p className="text-gray-600"><a href="https://pabar.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">pabar.org</a> — Find a PA family law attorney</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Legal Aid Network</p>
                <p className="text-gray-600"><a href="https://palawhelp.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">palawhelp.org</a> — Free legal resources for qualifying PA residents</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Divorce Code — Equitable Distribution</p>
                <p className="text-gray-600">23 Pa.C.S. § 3501 — Governing statute for marital property division in Pennsylvania</p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/harrisburg-pa/divorce-sale" className="text-brand-primary hover:underline">Harrisburg Divorce Sale Guide</Link>{' '}
              ·{' '}
              <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">Cash Offer vs. Listing</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
