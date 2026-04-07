import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'How Much Do Cash Home Buyers Pay? The Real Math Explained',
  description:
    'Cash buyers typically offer 60-80% of fair market value — but the gap is smaller than it looks once you account for repairs, commissions, and carrying costs. Here\'s the real comparison.',
  alternates: { canonical: `${SITE_URL}/resources/how-much-do-cash-buyers-pay` },
};

const FAQ_ITEMS = [
  {
    question: 'What percentage of market value do cash buyers pay?',
    answer:
      'Cash buyers typically offer 60-80% of a property\'s after-repair value (ARV). The exact percentage depends on the property\'s condition, the local market, and the buyer\'s model. Higher-condition properties in active markets may see offers closer to 75-80%. Properties needing significant repairs might come in at 60-65%.',
  },
  {
    question: 'What is after-repair value (ARV)?',
    answer:
      'After-repair value is what the property would sell for on the open market if it were in fully updated, move-in ready condition. Cash buyers calculate offers based on ARV, not current as-is value — then subtract estimated repair costs and their margin.',
  },
  {
    question: 'Does a lower cash offer actually cost me money?',
    answer:
      'Not always. When you factor in agent commissions (5-6%), closing costs (1-3%), repair costs, and carrying costs during the months a traditional sale takes, the net proceeds from a cash sale and a traditional sale are often closer than the headline offer prices suggest. The comparison depends heavily on the property\'s condition and how long you\'d carry it.',
  },
  {
    question: 'How do I know if a cash offer is fair?',
    answer:
      'Ask the buyer to explain their math: what ARV they used, what repair costs they\'re accounting for, and what their target margin is. Then do your own research on comparable sales in the area. A transparent buyer will walk you through this.',
  },
  {
    question: 'Can I negotiate a cash offer?',
    answer:
      'Yes. Cash offers aren\'t take-it-or-leave-it. You can counter, ask for a higher price, ask for a faster or slower close, or ask for different terms. The buyer may not budge much if their math is tight, but negotiating is always reasonable.',
  },
];

const pageUrl = `${SITE_URL}/resources/how-much-do-cash-buyers-pay`;

export default function HowMuchCashBuyersPayPage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema('How Much Do Cash Home Buyers Pay?', pageUrl), faqSchema(FAQ_ITEMS)]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/resources" className="hover:text-white">Resources</Link> › How Much Do Cash Buyers Pay?
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              How Much Do Cash Home Buyers Pay?
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Cash buyers pay below market value — that&apos;s the trade-off for speed and certainty. But the actual
              gap is often smaller than homeowners expect once you account for what a traditional sale actually costs.
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/resources/how-much-do-cash-buyers-pay" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer</h2>
            <p className="text-gray-700 text-sm">
              Cash buyers typically offer 60-80% of a property&apos;s after-repair value (ARV). That sounds like a
              big discount — but by the time you subtract agent commissions, repair costs, and months of carrying
              costs from a traditional sale, the actual difference in what you walk away with is often much smaller.
              For distressed properties, the cash offer is sometimes competitive with a traditional net.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How Cash Buyers Calculate Offers</h2>
            <p className="text-gray-700 mb-6">
              Most cash buyers use a variation of this formula:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 font-mono text-sm mb-6">
              <div className="space-y-2">
                <p><span className="text-brand-primary font-bold">ARV</span> (After-Repair Value)</p>
                <p className="pl-4 text-gray-600">— What the house would sell for in fully repaired, updated condition</p>
                <p className="text-gray-400">–</p>
                <p><span className="text-orange-600 font-bold">Estimated Repair Costs</span></p>
                <p className="pl-4 text-gray-600">— Materials, labor, contractor margin</p>
                <p className="text-gray-400">–</p>
                <p><span className="text-orange-600 font-bold">Holding Costs</span></p>
                <p className="pl-4 text-gray-600">— Taxes, insurance, utilities, financing during rehab (typically 3-6 months)</p>
                <p className="text-gray-400">–</p>
                <p><span className="text-orange-600 font-bold">Selling Costs</span></p>
                <p className="pl-4 text-gray-600">— Agent commissions, closing costs when they resell</p>
                <p className="text-gray-400">–</p>
                <p><span className="text-orange-600 font-bold">Profit Margin</span></p>
                <p className="pl-4 text-gray-600">— Typically 10-20% of ARV</p>
                <p className="text-gray-400">=</p>
                <p className="text-green-700 font-bold">Cash Offer to You</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              This is why a cash offer typically comes in at 60-80% of ARV. It&apos;s not arbitrary — it&apos;s math.
              A legitimate buyer will show you their numbers if you ask.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">The Real Comparison: Cash Offer vs. Traditional Sale</h2>
            <p className="text-gray-700 mb-4">
              Let&apos;s use a real example. A house in Harrisburg with an ARV of $175,000 that needs $25,000 in work.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border-2 border-brand-primary rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-4">Cash Sale</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cash offer (65% of ARV)</span>
                    <span className="font-semibold">$113,750</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Repairs required</span>
                    <span className="font-semibold text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Agent commissions</span>
                    <span className="font-semibold text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Closing costs</span>
                    <span className="font-semibold text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carrying costs (none)</span>
                    <span className="font-semibold text-green-600">$0</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
                    <span>Net to seller</span>
                    <span className="text-brand-primary">$113,750</span>
                  </div>
                  <div className="text-xs text-gray-500">Close in 7-14 days</div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-4">Traditional MLS Sale</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">List price (after repairs)</span>
                    <span className="font-semibold">$175,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Repairs / updates</span>
                    <span className="font-semibold text-red-500">–$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Agent commissions (5.5%)</span>
                    <span className="font-semibold text-red-500">–$9,625</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seller closing costs (2%)</span>
                    <span className="font-semibold text-red-500">–$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carrying costs (4 months)</span>
                    <span className="font-semibold text-red-500">–$4,800</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
                    <span>Net to seller</span>
                    <span className="text-gray-700">$132,075</span>
                  </div>
                  <div className="text-xs text-gray-500">Close in 90-120 days (if no issues)</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
              <p className="font-semibold text-brand-dark mb-1">The actual gap: ~$18,000 over 3-4 months</p>
              <p className="text-gray-700">
                That&apos;s real money. But for many sellers, the speed, certainty, and zero effort of a cash sale
                is worth $18,000. For others — especially those who can handle the repairs and the wait — the
                traditional route makes sense. The math should drive the decision.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Offer Makes Financial Sense</h2>
            <div className="space-y-3">
              {[
                {
                  scenario: 'The house needs significant repairs',
                  detail: 'If you\'re looking at $30K+ in repairs, that money comes directly out of your traditional sale net. The gap between cash and traditional narrows significantly.',
                },
                {
                  scenario: 'You\'re carrying two properties',
                  detail: 'Every month you own the property costs money — mortgage, taxes, insurance, utilities. If you\'ve already moved or are paying two mortgages, carrying costs add up fast.',
                },
                {
                  scenario: 'You\'re facing foreclosure',
                  detail: 'If the alternative to a cash sale is a completed foreclosure, the comparison changes entirely. A foreclosure destroys credit for 7 years and you may walk away with nothing.',
                },
                {
                  scenario: 'The property is out of state',
                  detail: 'Managing a traditional sale from out of state is expensive and stressful. Contractors, cleanouts, showings, negotiations — all require either travel or a local property manager.',
                },
                {
                  scenario: 'Speed is the priority',
                  detail: 'Relocation, divorce settlement, estate closure — situations where time matters. Four months of uncertainty has real costs beyond the mortgage payment.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-brand-dark text-sm mb-1">{item.scenario}</p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Find Out What We'd Offer on Your Property"
            subheadline="No obligation. We explain our math. Written offer within 24 hours."
            sourcePage="/resources/how-much-do-cash-buyers-pay"
          />

          <FAQSection items={FAQ_ITEMS} heading="Common Questions About Cash Buyer Offers" />
        </article>
      </div>
    </>
  );
}
