import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cash Offer vs. Listing with an Agent — Which Is Right for You?',
  description:
    'Honest comparison of selling to a cash buyer vs. listing with a real estate agent. Timeline, costs, certainty, and net proceeds — the real numbers for Pennsylvania sellers.',
  alternates: { canonical: `${SITE_URL}/resources/cash-offer-vs-listing` },
};

const FAQ_ITEMS = [
  {
    question: 'Will I always get more money listing with an agent?',
    answer:
      'Not necessarily. The listed price is higher, but the net proceeds depend on repair costs, agent commissions (5-6%), closing costs, carrying costs while the property sits, and whether the deal falls through. For distressed properties or situations with time pressure, the net difference is often smaller than homeowners expect.',
  },
  {
    question: 'When should I list with an agent instead of taking a cash offer?',
    answer:
      'If the property is in good condition, you have 3-4 months to spare, the local market is active, and maximizing price is the top priority — listing with an agent often makes sense. The traditional route works well when the property and situation are not distressed.',
  },
  {
    question: 'Can I get both a cash offer and a traditional listing assessment?',
    answer:
      'Absolutely. There\'s no obligation in getting a cash offer — use it as a data point alongside a CMA from an agent. If the net difference is significant and your situation isn\'t urgent, list it. If the timing or condition makes a cash sale more practical, you have that option ready.',
  },
  {
    question: 'What is the average time to sell a house in Harrisburg PA?',
    answer:
      'In the Harrisburg area, a well-priced home in good condition typically goes under contract in 2-4 weeks and closes 30-45 days after that. Add repair time and preparation, and the total from decision to closing is often 3-5 months. A cash sale compresses this to 1-2 weeks.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Time to receive offer', cashBuyer: '24-48 hours', traditional: '2-8 weeks on market' },
  { label: 'Total timeline to close', cashBuyer: '7-14 days', traditional: '60-120+ days' },
  { label: 'Repairs required', cashBuyer: 'None — bought as-is', traditional: 'Usually $5K–$30K to compete' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$8,750–$10,500 on $175K home)' },
  { label: 'Seller closing costs', cashBuyer: '$0 (we cover them)', traditional: '1-3% + PA transfer tax (2%)' },
  { label: 'Carrying costs (60-90 days)', cashBuyer: 'Eliminated', traditional: '$3,000–$5,000+ (mortgage, taxes, insurance)' },
  { label: 'Financing contingency risk', cashBuyer: 'None — no financing', traditional: '~15-20% of deals fall through at financing' },
  { label: 'Inspection renegotiation', cashBuyer: 'None', traditional: 'Common — buyers use inspection to lower price' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed at contract', traditional: 'Uncertain until day of closing' },
];

const pageUrl = `${SITE_URL}/resources/cash-offer-vs-listing`;

export default function CashOfferVsListingPage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema('Cash Offer vs. Listing with an Agent', pageUrl), faqSchema(FAQ_ITEMS)]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/resources" className="hover:text-white">Resources</Link> › Cash Offer vs. Listing
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Cash Offer vs. Listing with an Agent
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              An honest, side-by-side comparison. The right answer depends on your property, your situation,
              and what you actually care about.
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/resources/cash-offer-vs-listing" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Honest Take</h2>
            <p className="text-gray-700 text-sm">
              Listing with an agent usually gets you a higher sale price — but the net after repairs, commissions,
              closing costs, and months of carrying costs is often closer to a cash offer than the headline numbers
              suggest. The right choice depends on your property&apos;s condition, your timeline, and how much the
              uncertainty of a traditional sale costs you.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Side-by-Side Comparison</h2>
            <ComparisonTable rows={COMPARISON_ROWS} />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Net Proceeds Calculation</h2>
            <p className="text-gray-700 mb-4">
              Let&apos;s run the actual numbers on a Harrisburg area home worth $175,000 that needs $20,000 in work:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="border-2 border-brand-primary rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-4 flex items-center gap-2">
                  <span className="text-sm bg-brand-primary text-white rounded px-2 py-0.5">Cash Sale</span>
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Cash offer (65% ARV)', value: '$113,750', positive: true },
                    { label: 'Repairs required', value: '$0', positive: true },
                    { label: 'Agent commissions', value: '$0', positive: true },
                    { label: 'Closing costs', value: '$0', positive: true },
                    { label: 'Carrying costs', value: '$0', positive: true },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-gray-600">{item.label}</span>
                      <span className={`font-semibold ${item.value === '$0' ? 'text-green-600' : ''}`}>{item.value}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
                    <span>Net proceeds</span>
                    <span className="text-brand-primary">$113,750</span>
                  </div>
                  <p className="text-xs text-gray-500">Timeline: 7-14 days</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-4 flex items-center gap-2">
                  <span className="text-sm bg-gray-200 text-gray-700 rounded px-2 py-0.5">Traditional Sale</span>
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Sale price (after repairs)', value: '$175,000' },
                    { label: 'Repairs & updates', value: '–$20,000' },
                    { label: 'Agent commissions (5.5%)', value: '–$9,625' },
                    { label: 'Closing costs (2% + transfer tax)', value: '–$5,250' },
                    { label: 'Carrying costs (3 months)', value: '–$3,600' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-gray-600">{item.label}</span>
                      <span className={`font-semibold ${item.value.startsWith('–') ? 'text-red-500' : ''}`}>{item.value}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
                    <span>Net proceeds</span>
                    <span className="text-gray-700">$136,525</span>
                  </div>
                  <p className="text-xs text-gray-500">Timeline: 90-120 days (if no issues)</p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
              <p className="font-semibold text-brand-dark mb-1">
                Real gap: ~$22,775 over 3-4 months — but that&apos;s the ideal scenario
              </p>
              <p className="text-gray-700">
                The traditional sale number assumes: no financing fall-throughs, accurate repair estimates, buyer
                doesn&apos;t renegotiate after inspection, and property sells near asking. In reality, about 15-20%
                of deals fall through — and if you have to relist, the timeline and carrying costs increase further.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">When Each Option Makes More Sense</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-brand-primary rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-4">A Cash Sale Makes More Sense When...</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'The property needs significant repairs ($20K+)',
                    'You need to close in under 30 days',
                    'You can\'t afford to carry the property for 90+ days',
                    'You\'re facing foreclosure, divorce, or estate settlement',
                    'The property is vacant or out of state',
                    'Certainty matters more than maximizing price',
                    'You don\'t want to deal with showings, negotiations, or contractors',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-brand-primary shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-4">Listing with an Agent Makes More Sense When...</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'The property is in good or move-in ready condition',
                    'You have 3-4 months and aren\'t in a hurry',
                    'The market is active and comparable sales are strong',
                    'Maximizing final sale price is the top priority',
                    'You can handle the carrying costs while it\'s listed',
                    'You\'re comfortable with the uncertainty of a traditional sale',
                    'The repair gap between cash and traditional is small',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-gray-400 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get the Number to Compare"
            subheadline="No obligation. Get a cash offer and run it against what an agent says your property is worth."
            sourcePage="/resources/cash-offer-vs-listing"
          />

          <FAQSection items={FAQ_ITEMS} heading="Common Questions" />
        </article>
      </div>
    </>
  );
}
