import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Us vs. Opendoor — Which Is Better for Selling Your House?',
  description:
    'Comparing USA Home Buyers vs. Opendoor for selling your house fast. Key differences in fees, service areas, speed, and who actually pays more. Local vs. iBuyer explained.',
  alternates: { canonical: `${SITE_URL}/compare/usa-home-buyers-vs-opendoor` },
};

const COMPARISON_ROWS = [
  { label: 'Type of buyer', cashBuyer: 'Local direct cash buyer', traditional: 'iBuyer (tech-backed algorithm)' },
  { label: 'Service area', cashBuyer: 'Harrisburg PA, Allentown PA, Central PA', traditional: 'Limited metro markets — may not serve your area' },
  { label: 'Offer process', cashBuyer: 'Human walkthrough, personal assessment', traditional: 'Algorithm-generated online offer (often inaccurate)' },
  { label: 'Service fees', cashBuyer: 'None — zero fees', traditional: '5-8% service fee (charged as a deduction)' },
  { label: 'Repair costs', cashBuyer: 'Priced into offer — no deductions after', traditional: 'Post-inspection repair deductions can reduce your net' },
  { label: 'Offer revision risk', cashBuyer: 'Low — offer is firm after walkthrough', traditional: 'High — offers frequently revised down after inspection' },
  { label: 'Closing timeline', cashBuyer: '7-14 days, or your schedule', traditional: '14-60 days, less flexible' },
  { label: 'Home condition required', cashBuyer: 'Any condition — as-is', traditional: 'Generally move-in ready or near-ready homes' },
  { label: 'Who you deal with', cashBuyer: 'A person who knows your market', traditional: 'A call center and an algorithm' },
];

const FAQ_ITEMS = [
  {
    question: 'Does Opendoor operate in Harrisburg PA or Allentown PA?',
    answer:
      'As of 2026, Opendoor operates in select major metros — primarily large Sun Belt cities. Harrisburg PA and Allentown PA are not currently in Opendoor\'s service area. If you\'re in Central Pennsylvania and want a cash offer, a local buyer like USA Home Buyers is your actual option.',
  },
  {
    question: 'What fees does Opendoor charge sellers?',
    answer:
      'Opendoor charges a service fee of 5-8% of the sale price, on top of which they may deduct repair costs discovered after their inspection. For a $200,000 home, that\'s $10,000-$16,000 in service fees alone — before repair deductions. USA Home Buyers charges zero fees and covers all closing costs.',
  },
  {
    question: 'Is an iBuyer like Opendoor better than a local cash buyer?',
    answer:
      'It depends on your situation and market. iBuyers like Opendoor use algorithms to generate offers and work well for very standard homes in high-volume markets. The downsides: fees are typically higher, offers are often revised down after inspection, and they don\'t operate in most smaller markets. A local buyer has market knowledge an algorithm doesn\'t, zero fees, and can buy properties in any condition.',
  },
  {
    question: 'Can Opendoor buy houses that need repairs?',
    answer:
      'Opendoor generally targets move-in ready homes and factors repairs into post-inspection deductions. USA Home Buyers specifically buys homes in any condition — foundation issues, roof problems, fire damage, full of belongings — without inspection-based deductions after the offer.',
  },
  {
    question: 'Who pays more — Opendoor or USA Home Buyers?',
    answer:
      'Net proceeds matter more than the headline offer number. Opendoor\'s algorithm may generate a slightly higher offer, but after subtracting their 5-8% service fee and any repair deductions, the net to the seller is often comparable to or less than what a local cash buyer offers with zero fees. Always compare net, not gross.',
  },
];

const pageUrl = `${SITE_URL}/compare/usa-home-buyers-vs-opendoor`;

export default function VsOpendoorPage() {
  return (
    <>
      <SchemaMarkup schema={[
        articleSchema('USA Home Buyers vs. Opendoor — Direct Comparison', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/" className="hover:text-white">USA Home Buyers</Link> › Compare
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              USA Home Buyers vs. Opendoor — What&apos;s the Difference?
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Both claim to offer fast cash for your home. But a local direct buyer and an iBuyer algorithm
              are fundamentally different. Here&apos;s what actually matters when choosing.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Get a Local Offer: {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/compare/usa-home-buyers-vs-opendoor" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Bottom Line Up Front</h2>
            <p className="text-gray-700 text-sm">
              Opendoor doesn&apos;t serve Harrisburg or Allentown. If you&apos;re in Central PA and need to sell fast,
              a local direct buyer is your real option. Even where Opendoor does operate, their 5-8% service fee
              plus post-inspection repair deductions often makes their net offer less competitive than it appears.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How Opendoor Works</h2>
            <p className="text-gray-700 mb-4">
              Opendoor is an iBuyer — a technology company that uses algorithms to generate instant offers on homes.
              Here&apos;s the actual process:
            </p>
            <div className="space-y-3">
              {[
                { step: '1', title: 'You submit your home online', detail: 'Enter address, square footage, condition. An algorithm generates an offer based on comparable sales data.' },
                { step: '2', title: 'Opendoor sends an "instant" offer', detail: 'This is a preliminary offer, not a final one. It\'s based on an algorithm with limited local knowledge.' },
                { step: '3', title: 'Opendoor does an inspection', detail: 'An inspector assesses the home. Repair costs are deducted from your original offer — sometimes significantly.' },
                { step: '4', title: 'Service fees are deducted', detail: 'Opendoor charges 5-8% of the sale price as a service fee. On a $250,000 home, that\'s $12,500-$20,000.' },
                { step: '5', title: 'Closing on their timeline', detail: 'Opendoor controls the closing date within a window. Less flexibility than a local buyer.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How USA Home Buyers Works</h2>
            <div className="space-y-3">
              {[
                { step: '1', title: 'You contact us', detail: 'Call or fill out the form. A real person — someone who knows the Harrisburg and Lehigh Valley markets — responds quickly.' },
                { step: '2', title: 'Brief property walkthrough', detail: '20-30 minutes. We see the actual condition of the home, not an algorithm\'s guess.' },
                { step: '3', title: 'Written cash offer in 24 hours', detail: 'No service fees. No post-inspection deductions. What we offer is what you get.' },
                { step: '4', title: 'You choose the closing date', detail: 'Fast as 7 days or slow as 60 — your choice. We accommodate your timeline.' },
                { step: '5', title: 'Close and receive funds', detail: 'Funds wired on closing day. We cover all closing costs. Zero deductions from your offer.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Side-by-Side Comparison</h2>
            <ComparisonTable rows={COMPARISON_ROWS} />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Fee Math That Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-1 text-sm">Opendoor Example</h3>
                <p className="text-xs text-gray-500 mb-3">$250,000 home, good condition</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Initial offer</span><span className="font-bold">$237,500</span></div>
                  <div className="flex justify-between text-red-600"><span>Service fee (6%)</span><span>−$14,250</span></div>
                  <div className="flex justify-between text-red-600"><span>Repair deductions (est.)</span><span>−$5,000–$12,000</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-brand-dark">
                    <span>Net to seller</span><span>$211,000–$218,000</span>
                  </div>
                  <div className="text-xs text-gray-500 pt-1">Timeline: 2-4 weeks | Not available in Central PA</div>
                </div>
              </div>
              <div className="bg-brand-light rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-1 text-sm">USA Home Buyers Example</h3>
                <p className="text-xs text-gray-500 mb-3">Same $250,000 home</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Cash offer (75-80% FMV)</span><span className="font-bold">$187,500–$200,000</span></div>
                  <div className="flex justify-between text-gray-500"><span>Service fee</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Repair deductions</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Closing costs</span><span>$0 (we cover)</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-brand-dark">
                    <span>Net to seller</span><span>$187,500–$200,000</span>
                  </div>
                  <div className="text-xs text-gray-500 pt-1">Timeline: 7-14 days | Serves Harrisburg &amp; Allentown</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Note: This example assumes a move-in ready home. For properties needing repairs, Opendoor&apos;s repair
              deductions would be higher, narrowing or eliminating any gap further.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Local Cash Offer — No Fees, No Algorithms"
            subheadline="We serve Harrisburg, Allentown, and Central PA. Written offer in 24 hours."
            sourcePage="/compare/usa-home-buyers-vs-opendoor"
          />

          <FAQSection items={FAQ_ITEMS} heading="USA Home Buyers vs. Opendoor — Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/compare/usa-home-buyers-vs-homevestors" className="text-brand-primary hover:underline">USA Home Buyers vs. HomeVestors</Link>{' '}
              ·{' '}
              <Link href="/compare/usa-home-buyers-vs-listing-with-agent" className="text-brand-primary hover:underline">Cash Offer vs. Listing with an Agent</Link>{' '}
              ·{' '}
              <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">Cash Offer vs. MLS Listing</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
