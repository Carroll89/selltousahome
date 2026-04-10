/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cash Buyer vs. Realtor in Pennsylvania: The Real Difference | USA Home Buyers',
  description:
    'Selling your PA home? Compare cash buyers vs. real estate agents on price, speed, costs, and hassle. Honest breakdown — no spin.',
  alternates: { canonical: `${SITE_URL}/blog/cash-buyer-vs-realtor-pennsylvania` },
};

const FAQ_ITEMS = [
  {
    question: 'How much less do you get selling to a cash buyer versus listing with an agent in Pennsylvania?',
    answer:
      'Cash buyers typically offer 70-80% of fair market value. But the real comparison is net proceeds, not gross sale price. A traditional listing at full market value minus 5-6% agent commission, closing costs, repair requests, holding costs (mortgage, taxes, utilities during the listing period), and potential price reductions after failed inspections often nets less than it appears. For distressed properties or situations where speed matters, the gap frequently narrows to 5-10% or disappears entirely.',
  },
  {
    question: 'How long does it take to sell with a realtor vs. a cash buyer in Pennsylvania?',
    answer:
      'The average PA home listed with an agent sells in 30-60 days from listing to contract, then takes another 30-45 days to close — totaling 60-105 days from list to close. A cash sale typically closes in 7-21 days from accepted offer. If you need to move quickly — job relocation, foreclosure deadline, estate settlement — the timeline difference is significant.',
  },
  {
    question: 'Do cash buyers pay closing costs in Pennsylvania?',
    answer:
      'Reputable cash buyers like USA Home Buyers typically cover standard closing costs, including title insurance and settlement fees. In a traditional sale, sellers typically pay 1-3% in closing costs on top of the agent commission. Get this in writing before accepting any offer.',
  },
  {
    question: 'When does it make sense to list with a realtor instead of selling to a cash buyer?',
    answer:
      'Listing with an agent usually makes more sense when: your property is in excellent condition and ready to show, you have 3+ months of time flexibility, the market is hot enough to support bidding wars, and you don\'t have a pressing situation (foreclosure, divorce deadline, relocation). In those conditions, the extra net proceeds from a full-market listing can justify the time and hassle.',
  },
  {
    question: 'Are cash home buyers legitimate in Pennsylvania?',
    answer:
      'Legitimate cash buyers do exist — look for an LLC or corporation registered in Pennsylvania, a track record of closed deals, verifiable reviews on Google, and a willingness to provide references. Legitimate buyers provide written purchase agreements, use licensed PA title companies, and don\'t charge upfront fees. Red flags: pressure to sign quickly without time to review, requests for upfront fees, no physical or verifiable business presence.',
  },
];

const pageUrl = `${SITE_URL}/blog/cash-buyer-vs-realtor-pennsylvania`;

export default function CashBuyerVsRealtorPAPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema(
            'Cash Buyer vs. Realtor in Pennsylvania: What\'s the Real Difference?',
            pageUrl,
            '2026-04-11'
          ),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/blog" className="hover:text-white">Blog</Link> › Comparisons
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Cash Buyer vs. Realtor in Pennsylvania: What's the Real Difference?
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Most articles on this topic are written by people trying to sell you one or the other. 
              This one isn't. Here's what each option actually costs, how long each actually takes, 
              and when one makes more sense than the other.
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/blog/cash-buyer-vs-realtor-pennsylvania" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          {/* TL;DR — GEO/AEO citation block */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">TL;DR — Honest Summary</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Cash buyers pay less than market value (typically 70-80%), but eliminate agent commissions (5-6%), 
              repair costs, holding costs, and closing delays. In Pennsylvania, a traditional listing takes 60-105 
              days to close; a cash sale takes 7-21 days. For distressed properties, time-sensitive situations, 
              or homes needing significant repairs, the net difference in proceeds is often smaller than it appears — 
              sometimes in favor of the cash sale. For move-in-ready homes with flexible timelines, a traditional 
              listing usually yields more. The right choice depends entirely on your situation.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Numbers: A Side-by-Side</h2>
            <p className="text-gray-700 mb-6">
              Let's use a concrete example. A Harrisburg home with a fair market value of $175,000 that needs 
              roughly $20,000 in repairs to be fully competitive on the market.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-left p-4 font-semibold">List With Agent</th>
                    <th className="text-left p-4 font-semibold">Cash Buyer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Sale price', '$175,000 (after repairs)', '$126,000–$140,000 (as-is)'],
                    ['Repairs needed', '−$20,000', '$0'],
                    ['Agent commissions', '−$9,625 (5.5%)', '$0'],
                    ['Closing costs (seller)', '−$2,500 est.', '$0 (buyer covers)'],
                    ['Holding costs (3 months)', '−$3,600 est.', '$0'],
                    ['Price reduction risk', 'Common after inspection', 'None — offer is firm'],
                    ['Timeline', '60–105 days', '7–21 days'],
                    ['Estimated net proceeds', '$139,275', '$126,000–$140,000'],
                  ].map(([factor, agent, cash], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-gray-700">{factor}</td>
                      <td className="p-4 text-gray-600">{agent}</td>
                      <td className="p-4 text-gray-600">{cash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm italic">
              Example uses estimated figures for illustration. Actual results vary based on property condition, market, 
              and terms negotiated. Agent commission rate varies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What a Traditional Listing Actually Involves</h2>
            <p className="text-gray-700 mb-4">
              People underestimate how much work a traditional listing requires — and how many ways it can go sideways. 
              Here's the honest picture.
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  step: '1. Pre-listing prep',
                  desc: 'Repairs, cleaning, staging, photography. This can take 2-8 weeks and cost anywhere from nothing (if the home is already in great shape) to tens of thousands of dollars.',
                },
                {
                  step: '2. The listing period',
                  desc: 'Showings with strangers walking through your home. Keeping it clean and show-ready at all times. Pets to manage, schedules to work around. Average days on market in PA has been 25-40 days in recent years — but slower properties can sit much longer.',
                },
                {
                  step: '3. The offer and negotiation',
                  desc: 'When an offer comes in, the buyer typically requests an inspection. The inspection generates a list of defects. The buyer requests repairs or a price reduction. You negotiate. In PA, this back-and-forth can easily cost you 2-5% of the sale price.',
                },
                {
                  step: '4. Financing contingency',
                  desc: 'Most traditional buyers use mortgage financing. Lenders can kill deals at the last minute — appraisals come in low, buyers lose their jobs, debt-to-income ratios change. PA real estate contracts typically give buyers 30-45 days for financing approval.',
                },
                {
                  step: '5. Closing',
                  desc: 'Settlement typically happens 30-45 days after the contract. In PA, closings go through title companies or attorneys. It\'s straightforward, but it takes time.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.step}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What a Cash Sale Actually Involves</h2>
            <p className="text-gray-700 mb-4">
              A cash sale is simpler, but it's not without its own considerations.
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  step: '1. Get the offer',
                  desc: 'We gather basic property info, drive by or schedule a quick walkthrough, and send a written cash offer within 24-48 hours. The offer reflects the property\'s as-is condition — we\'re not going to come back and reduce it after inspection.',
                },
                {
                  step: '2. Review and decide',
                  desc: 'You look at the number, compare it to your situation, and decide. There\'s no pressure to accept. A good cash buyer will explain how they arrived at the number.',
                },
                {
                  step: '3. Title and closing',
                  desc: 'We open title with a PA-licensed title company. They do the title search, confirm the property can be conveyed cleanly, and schedule closing. This takes 7-21 days depending on title complexity.',
                },
                {
                  step: '4. Closing day',
                  desc: 'You sign documents, the title company pays off any mortgages or liens, and the remainder comes to you. Some sellers walk out with a check same day; others receive a wire transfer.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.step}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">When Listing With an Agent Wins</h2>
            <p className="text-gray-700 mb-4">
              Cash buyers aren't the right choice for everyone, and we'd rather be straight with you about that 
              than oversell it.
            </p>
            <p className="text-gray-700 mb-4">
              Listing makes more sense when: your home is in excellent, show-ready condition; you have no pressing 
              timeline; the local market is active enough to attract multiple offers; and you can absorb the carrying 
              costs while the property is listed. In those conditions, a competitive listing will usually net you more.
            </p>
            <p className="text-gray-700">
              The Harrisburg and Allentown markets have seen consistent demand — homes in good condition in desirable 
              neighborhoods can move quickly at or above asking. If that's your situation, talk to a good agent and 
              get a realistic CMA before deciding.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Buyer Wins</h2>
            <p className="text-gray-700 mb-4">
              Cash buyers win in situations where time, certainty, or property condition is the constraint. Specifically:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Foreclosure deadline', desc: 'You have a sheriff sale date or need to close before a lender accelerates. Traditional financing can\'t move fast enough.' },
                { title: 'Property needs significant work', desc: 'Major repairs, code violations, deferred maintenance. Lenders won\'t finance it; buyers won\'t take it as-is.' },
                { title: 'Inherited or estate property', desc: 'Multiple heirs, probate complications, property full of contents. Cash buyer handles the complexity.' },
                { title: 'Divorce', desc: 'Both parties want the asset converted to cash quickly, with no ongoing joint responsibility for the property.' },
                { title: 'Relocation', desc: 'Job starts in 45 days. You can\'t manage a showing schedule from another state.' },
                { title: 'Tired landlord', desc: 'Tenant-occupied, deferred maintenance, you\'re done being a landlord. Cash buyer handles everything.' },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Want a Cash Offer to Compare?"
            subheadline="No obligation. See what your PA home is worth as-is — in 24 hours."
            sourcePage="/blog/cash-buyer-vs-realtor-pennsylvania"
          />

          <FAQSection items={FAQ_ITEMS} heading="Cash Buyer vs. Realtor — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Dig Deeper</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { href: '/resources/cash-offer-vs-listing', label: 'Cash Offer vs. Listing: Full Breakdown' },
                { href: '/resources/how-much-do-cash-buyers-pay', label: 'How Much Do Cash Buyers Actually Pay?' },
                { href: '/resources/are-cash-home-buyers-legit', label: 'Are Cash Home Buyers Legit?' },
                { href: '/compare/usa-home-buyers-vs-listing-with-agent', label: 'USA Home Buyers vs. Listing With Agent' },
                { href: '/markets/harrisburg-pa', label: 'Sell Your Harrisburg House Fast' },
                { href: '/markets/allentown-pa', label: 'Sell Your Allentown House Fast' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-gray-200 rounded-lg p-3 hover:border-brand-primary hover:text-brand-primary transition-colors"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>

        </article>
      </div>
    </>
  );
}
