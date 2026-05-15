/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/how-cash-buyers-calculate-offer`;

export const metadata: Metadata = {
  title: 'How Cash Home Buyers Calculate Their Offer',
  description:
    'The real math behind cash buyer offers: ARV, repair costs, margin, and how your net proceeds compare to a traditional listing once commissions and carrying costs are factored in.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Why is the cash offer lower than my Zillow estimate?',
    answer:
      "Zillow's Zestimate is an automated public estimate, not an appraisal. In many of the markets we work in — mid-size Pennsylvania cities, upstate New York, Wisconsin, and similar — Zestimates frequently diverge from actual closed sales by 5–15%. Cash buyers use real comparable sales from the MLS or county records: what similar homes actually sold for in the last 3–6 months, in similar condition, nearby. The ARV (After Repair Value) a buyer uses is their best estimate of what a fully updated version of your home would bring — not what an algorithm projects. The gap between Zillow's number and a cash offer is mostly explained by repair costs, commissions and closing costs the buyer absorbs, and the buyer's required margin. Run the full net proceeds math before deciding the two numbers are far apart.",
  },
  {
    question: 'Do cash buyers pay closing costs, or does the seller still pay them?',
    answer:
      'It depends on the buyer and the contract terms — always read the purchase agreement. Many cash buyers cover standard seller-side closing costs: title search fees, title insurance, transfer taxes, and recording fees. Some buyers also cover the attorney fee in states that require one at closing, such as Connecticut and parts of New York. What you should verify in any contract: who pays transfer taxes, who orders and pays for title insurance, and whether there are any fees the buyer is passing back to you. A transparent cash buyer will answer these questions directly before you sign anything.',
  },
  {
    question: 'What if the buyer drops the offer after the inspection?',
    answer:
      "This is one of the most common tactics in the industry: make a high number, get the seller off the market, then renegotiate at the walkthrough. A reputable cash buyer either (a) walks the property before making an offer and builds their best estimate into the number upfront, or (b) is explicit in the contract about what is subject to change after inspection and by how much. Before you accept any offer, ask: 'Is this number subject to change after inspection?' If the answer is yes, ask them to specify which items could change it and what the range would be. If they can't or won't answer that clearly, slow down.",
  },
  {
    question: 'How fast can a cash sale actually close?',
    answer:
      "Most cash transactions close in 7–21 days from signed contract, provided the title comes back clean. The timeline is driven by the title search — typically 5–10 business days — and any issues that need to be resolved before clear title can be transferred. Common title issues that add time: open liens, estate situations requiring court authorization, or unpaid property taxes. If you need a specific closing date — for a job relocation, a divorce settlement deadline, or to coordinate with another purchase — tell the buyer upfront. A legitimate buyer will tell you honestly whether that timeline is achievable.",
  },
  {
    question: 'Do I need to clean out or fix anything before a cash buyer looks at the house?',
    answer:
      "No. Cash buyers purchase as-is, which means they account for the current condition of the property in their offer. You don't need to remove furniture, make repairs, or stage anything. You can leave belongings behind if you don't want to move them — most buyers will handle the cleanout. The inspection or walkthrough a cash buyer does is for their own estimation purposes, not to generate a repair-request list for you to address. The only thing you need to do before a buyer walks through is give them access.",
  },
];

export default function HowCashBuyersCalculateOfferPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          organizationSchema,
          articleSchema(
            'How Cash Home Buyers Calculate Their Offer: The Real Math',
            pageUrl,
            '2026-05-15'
          ),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            Educational · May 15, 2026 ·{' '}
            <Link href="/blog" className="text-brand-primary hover:underline">
              Blog
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            How Cash Home Buyers Calculate Their Offer: The Real Math
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Most sellers' first reaction to a cash offer is "that's lower than Zillow says." That reaction is understandable — and usually incomplete. Here's exactly how cash buyers arrive at their numbers, what goes into each component, and how to run the comparison that actually matters: your net proceeds, not two raw headline prices.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          {/* Quick summary */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Version</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Cash buyers start from After Repair Value (ARV) — what the house would sell for in retail condition — multiply it by roughly 65–75%, then subtract estimated repair costs. The percentage and repair estimate vary by buyer and market. The resulting offer looks lower than a list price, but the right comparison is net proceeds: what you walk away with after commissions, closing costs, carrying costs, and inspection concessions on the traditional side. On a $200,000 house those friction costs routinely run $18,000–$27,000. The gap between a cash offer and a list price is often smaller than it looks once you run the full math.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Formula Every Serious Cash Buyer Uses</h2>
          <p className="text-gray-700 mb-4">
            Cash buyers aren't guessing. Most serious operators work from the same baseline formula:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 text-center">
            <p className="text-lg font-mono font-bold text-brand-dark">
              Offer = (ARV × 0.65–0.75) − Estimated Repair Costs
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            The percentage range isn't arbitrary. The buyer needs room between what they pay you and what the property will be worth after renovation — enough to cover repairs, holding costs while they work, transaction costs when they resell or refinance, and a margin that makes the business sustainable over dozens of deals. A buyer working at 80% of ARV minus repairs is operating without margin for error. A buyer offering 55% of ARV minus repairs is either padding heavily or using the number as an anchor to renegotiate.
          </p>
          <p className="text-gray-700 mb-4">
            That 65–75% range tightens or loosens depending on local market conditions. In markets where values have been moving up consistently — like certain Rochester, NY neighborhoods or the stronger pockets of Harrisburg, PA — buyers might stretch toward the higher end. In slower markets or on properties with significant uncertainty around repair costs, they'll anchor lower. Neither end of that range is dishonest; it reflects where that particular buyer thinks the risk sits.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">ARV: What It Means and How Buyers Determine It</h2>
          <p className="text-gray-700 mb-4">
            ARV stands for After Repair Value — what your home would sell for on the open market if it were fully updated and in retail-ready condition. Not what it's worth now. Not what it would sell for as-is. What it would bring if a buyer spent money on it and then listed it for a conventional sale.
          </p>
          <p className="text-gray-700 mb-4">
            Buyers determine ARV from comparable sales: actual closed transactions from MLS records or county deed filings for similar homes — similar size, similar age, similar layout — within a quarter to half mile, in the last 3–6 months. Buyers who know their markets well will pull their own comps and explain what they used. Buyers who don't will lean on automated estimates.
          </p>
          <p className="text-gray-700 mb-4">
            Zillow's Zestimate is a publicly available automated estimate, not an appraisal, and not what cash buyers use as their foundation. In mid-size markets — central Pennsylvania, upstate New York, mid-size Wisconsin and Illinois cities — automated estimates routinely diverge from real comparable sales by 5–15% in either direction. A buyer relying on Zillow ARV is setting up a deal that may fall apart when the actual market data comes in. A buyer who can show you the three or four specific comps they used is doing the job correctly.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Repair Costs: The Variable That Separates Offers</h2>
          <p className="text-gray-700 mb-4">
            Two experienced cash buyers can walk the same house and submit offers $15,000–$20,000 apart — legitimately — because of different repair estimates. This is the most variable input in the formula, and it's where sellers should spend time asking questions.
          </p>
          <p className="text-gray-700 mb-4">
            Items that move estimates the most:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>
              <strong>Roof:</strong> $8,000–$22,000+ depending on pitch, square footage, and material choice. A buyer who sees a 15-year-old roof might budget full replacement; another might inspect it and conclude it has 5–7 years left and budget a smaller contingency.
            </li>
            <li>
              <strong>HVAC:</strong> $4,500–$8,000 for a furnace-only replacement; $12,000–$20,000 for a full system. Age and condition matter, but so does the buyer's contractor relationships — some buyers have HVAC crews they use regularly at lower cost.
            </li>
            <li>
              <strong>Foundation:</strong> Minor crack injection runs $1,500–$4,000. Structural issues can reach $20,000–$50,000+. A buyer without foundation expertise will pad heavily; one who has done dozens of deals with a structural engineer will scope it more precisely.
            </li>
            <li>
              <strong>Electrical panel:</strong> A standard 200-amp upgrade runs $2,500–$6,500. Knob-and-tube wiring adds significantly more. Some buyers budget a full rewire on older homes as a conservative estimate; others do a quick circuit count and budget only what's clearly necessary.
            </li>
            <li>
              <strong>Kitchen and bathrooms:</strong> $15,000–$40,000 for a kitchen renovation depending on size and finish level; $5,000–$15,000 per bathroom. These are high-visibility items that move ARV significantly — buyers differ on how much they'll spend to extract the value.
            </li>
            <li>
              <strong>Deferred maintenance:</strong> Flooring throughout, windows, siding, exterior paint — these items accumulate. $15,000–$35,000 in deferred maintenance is common on a home that hasn't been updated in 20 years.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Reputable buyers either walk the property before submitting a final number, or are transparent upfront about which elements of the offer are still subject to verification and what could change. An offer submitted sight-unseen that gets cut by $15,000 at the walkthrough is not a good-faith offer — it's a tactic. For more on how to spot that pattern, see our{' '}
            <Link href="/blog/cash-home-buyer-red-flags" className="text-brand-primary hover:underline">
              guide to cash buyer red flags
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Net Proceeds Comparison That Actually Matters</h2>
          <p className="text-gray-700 mb-4">
            When sellers compare a cash offer to a "higher" list price, they're comparing gross numbers, not what they'd actually keep. The friction on a traditional sale is significant and often underestimated.
          </p>
          <p className="text-gray-700 mb-4">
            According to the National Association of Realtors' 2024 Profile of Home Buyers and Sellers, seller's agent commissions and buyer-side compensation together have historically totaled 5–6% of the sale price, though the structure has shifted following the 2024 NAR settlement. On a $200,000 home, that's $10,000–$12,000 off the top.
          </p>
          <p className="text-gray-700 mb-4">
            According to the Consumer Financial Protection Bureau, sellers typically pay an additional 2–3% of the home's value in closing costs: title insurance, transfer taxes, attorney fees (required at closing in several of our states, including Connecticut, New York, and parts of Pennsylvania), and recording fees. On that same $200,000 sale, that's another $4,000–$6,000.
          </p>
          <p className="text-gray-700 mb-4">
            Then add carrying costs while the home is listed. Forty-five to ninety days on market is typical across many of our markets — that's 1.5–3 months of mortgage, property taxes, utilities, and insurance the seller continues paying while waiting for a buyer. On a $200,000 home with a $1,400/month carry, that's $2,100–$4,200.
          </p>
          <p className="text-gray-700 mb-4">
            Finally, post-inspection concessions. Most conventional buyers use their inspection as a negotiating tool. A $3,000–$8,000 credit or repair demand after inspection is routine — sometimes higher when the house has deferred maintenance.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
            <h3 className="font-bold text-brand-dark mb-3 text-sm uppercase tracking-wide">Sample Net Proceeds Comparison — $200,000 ARV Home</h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold text-brand-dark mb-2">Traditional listing at $195,000</p>
                <ul className="text-gray-700 space-y-1">
                  <li>Gross: $195,000</li>
                  <li>− Commissions (5.5%): −$10,725</li>
                  <li>− Closing costs (2.5%): −$4,875</li>
                  <li>− Carrying (2 months): −$2,800</li>
                  <li>− Inspection concession: −$5,000</li>
                  <li className="font-bold text-brand-dark pt-1 border-t border-gray-300">Net: ~$171,600</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-brand-dark mb-2">Cash offer at $168,000</p>
                <ul className="text-gray-700 space-y-1">
                  <li>Gross: $168,000</li>
                  <li>− Commissions: $0</li>
                  <li>− Closing costs: $0 (buyer covers)</li>
                  <li>− Carrying: $0 (close in 14 days)</li>
                  <li>− Concessions: $0</li>
                  <li className="font-bold text-brand-dark pt-1 border-t border-gray-300">Net: ~$168,000</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Illustrative example. Actual figures vary by market, buyer terms, and property conditions. Always request closing cost terms in writing.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            That comparison doesn't always favor the cash offer — it depends on the property, the market, and the terms. But it's the comparison that matters. Gross list price versus gross cash offer is a misleading apples-to-oranges read.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">When Cash Clearly Makes Sense vs. When It Might Not</h2>
          <p className="text-gray-700 mb-4">
            A cash offer is not the right move for every seller. If the house is already in retail condition, if you have time, and if you can absorb the carrying and transaction costs — a conventional listing may net you more. Cash doesn't automatically win.
          </p>
          <p className="text-gray-700 mb-4">
            Cash offers make the clearest case when:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>The house needs significant work and you don't want to manage or finance a renovation before listing</li>
            <li>You have a firm closing deadline — job relocation, divorce proceedings, estate settlement, or a purchase contingent on this sale</li>
            <li>The title has complications: open liens, unpaid taxes, code violations, or occupancy issues</li>
            <li>You're selling an inherited property and need to close on a schedule that fits around probate — see our{' '}
              <Link href="/markets/harrisburg-pa/inherited-property" className="text-brand-primary hover:underline">
                inherited property process in Harrisburg
              </Link>{' '}
              for an example of how that works in practice</li>
            <li>You've had a conventional listing fall through at the financing contingency and want certainty over the highest possible number</li>
            <li>The home would require repairs to pass conventional lender inspection, and you don't want to fund those repairs out of pocket before closing</li>
          </ul>
          <p className="text-gray-700 mb-4">
            If you're facing a foreclosure deadline and need options fast, the{' '}
            <Link href="/markets/harrisburg-pa/foreclosure" className="text-brand-primary hover:underline">
              Harrisburg foreclosure page
            </Link>{' '}
            covers how a cash sale fits into that timeline specifically.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Five Questions to Ask Before You Accept Any Cash Offer</h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
            <li>
              <strong>Can you show me the comparables you used for ARV?</strong> A buyer who can't or won't show you the actual sales they based the offer on is working from something other than real data.
            </li>
            <li>
              <strong>What are the specific repair items in your estimate, and how did you arrive at each number?</strong> "General repairs" is not an answer. Line-item estimates signal a buyer who actually walked the house and did the work.
            </li>
            <li>
              <strong>Is this offer subject to change after inspection? If yes, what range?</strong> Get this in writing. If the offer can drop by any amount after the walkthrough with no defined limit, you're not holding a firm offer.
            </li>
            <li>
              <strong>Can you provide proof of funds today?</strong> Not at closing — before you sign. A bank statement, a letter from a lender confirming a credit line, or a letter from their escrow company confirming available funds. Any delay on this is a warning.
            </li>
            <li>
              <strong>Who is this company, and can I verify past closings?</strong> An LLC registration, verifiable reviews, and references to past transactions in your area. A buyer who has closed 40 homes in{' '}
              <Link href="/markets/rochester-ny" className="text-brand-primary hover:underline">
                Rochester
              </Link>{' '}
              or{' '}
              <Link href="/markets/manchester-nh" className="text-brand-primary hover:underline">
                Manchester, NH
              </Link>{' '}
              is different from an operator who set up a website last month.
            </li>
          </ol>
          <p className="text-gray-700 mb-4">
            See also:{' '}
            <Link href="/blog/what-happens-after-accepting-cash-offer" className="text-brand-primary hover:underline">
              What happens after you accept a cash offer
            </Link>{' '}
            — a step-by-step breakdown from signed contract to money in your account.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">How We Calculate Our Offers</h2>
          <p className="text-gray-700 mb-4">
            We use the same formula described above. We walk every property before submitting a final number, pull our own comparable sales from local MLS and county records, and build a line-item repair estimate based on what we actually see. If an offer is subject to change after walkthrough for a specific reason, we say so before you sign — not during a renegotiation call three days before closing.
          </p>
          <p className="text-gray-700 mb-4">
            We buy homes across our markets in Pennsylvania, New York, New Hampshire, Connecticut, Wisconsin, Illinois, and Ohio. If you want to see a number based on your specific house, submit below. There's no obligation, and you can use the number however you want — even as a floor when you talk to other buyers.
          </p>

        </div>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer — No Obligation"
          subheadline="We'll pull the real comps, estimate repairs honestly, and show you how we arrived at our number. No pressure, no lowball-and-renegotiate."
          sourcePage="/blog/how-cash-buyers-calculate-offer"
        />

        <FAQSection
          items={FAQ_ITEMS}
          heading="Common Questions About Cash Offer Math"
        />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { href: '/blog/what-happens-after-accepting-cash-offer', label: 'What Happens After You Accept a Cash Offer?' },
              { href: '/blog/cash-home-buyer-red-flags', label: '5 Red Flags When Choosing a Cash Home Buyer' },
              { href: '/blog/cash-buyer-vs-realtor-pennsylvania', label: 'Cash Buyer vs. Realtor: The Real Math (PA)' },
              { href: '/markets/harrisburg-pa/inherited-property', label: 'Inherited Property — Harrisburg PA' },
              { href: '/markets/harrisburg-pa/foreclosure', label: 'Foreclosure Options — Harrisburg PA' },
              { href: '/markets/rochester-ny', label: 'We Buy Houses — Rochester NY' },
              { href: '/markets/manchester-nh', label: 'We Buy Houses — Manchester NH' },
              { href: '/markets/milwaukee-wi', label: 'We Buy Houses — Milwaukee WI' },
              { href: '/resources/how-the-process-works', label: 'How the Process Works' },
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
    </>
  );
}
