/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/new-haven-ct/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce New Haven CT',
  description:
    'Selling a home during divorce in New Haven CT? We provide one offer, one closing date, clean split. CT equitable distribution, Superior Court Family Division.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does divorce home sale work in Connecticut?',
    answer: 'Connecticut is an equitable distribution state — CT Gen Stat §46b-81 governs property division. The court divides marital property "equitably," which means fairly but not necessarily equally. The family division of New Haven Superior Court (235 Church Street, New Haven CT 06510) handles divorce proceedings. If the parties agree to sell the home and split proceeds, a cash buyer can close on a negotiated timeline and the proceeds are distributed per the divorce agreement. If parties cannot agree, the court may order a sale.',
  },
  {
    question: 'How long does divorce take in Connecticut?',
    answer: "Connecticut has a 90-day minimum waiting period after filing before a divorce can be finalized (from the date of return of the divorce complaint). Uncontested divorces with agreed property settlements typically finalize in 3–5 months. Contested divorces with disputed home ownership typically take 9–18 months. Many couples sell the home during the proceedings — a cash sale can close in 7–14 days and simplify the property division before the divorce is final.",
  },
  {
    question: 'Can we sell the house before the divorce is finalized?',
    answer: 'Yes — both spouses must agree to the sale and sign the sale documents. If both parties are willing to sell, a cash buyer provides the cleanest path: one offer, one closing date, no financing contingency. The proceeds can be held in escrow and distributed per the divorce agreement, or split directly at closing if both parties agree on the split.',
  },
  {
    question: 'What if my spouse won\'t cooperate with the sale?',
    answer: 'Connecticut courts have authority to order the sale of marital property under CT Gen Stat §46b-81. If one spouse refuses to cooperate, the other can petition the New Haven Superior Court family division for an order requiring the sale. A cash buyer\'s offer can be submitted to the court as documentation of available market value. Call 888-274-5006 to discuss your situation.',
  },
  {
    question: '¿Pueden ayudarnos a vender la casa durante el divorcio en New Haven? / Can you help with divorce sale in Spanish?',
    answer: 'Sí, hablamos español. Si usted y su cónyuge necesitan vender la casa durante el divorcio en New Haven, podemos ayudar en español. Ofrecemos una oferta de efectivo, una fecha de cierre, y los fondos se distribuyen según el acuerdo de divorcio. Llámenos: 888-274-5006.',
  },
];

export default function NewHavenDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell Your Home During Divorce in New Haven CT — Cash Offer, Clean Split', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/new-haven-ct-hero-640.jpg 640w, /images/optimized/new-haven-ct-hero-828.jpg 828w, /images/optimized/new-haven-ct-hero-1080.jpg 1080w, /images/optimized/new-haven-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/new-haven-ct-hero-1200.jpg"
            alt="New Haven CT homes — Sell House During Divorce"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/new-haven-ct" className="hover:text-white">New Haven CT</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Home During Divorce in New Haven CT — One Offer, Clean Split
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Divorcing in New Haven? Connecticut is equitable distribution (CT Gen Stat §46b-81). New Haven Superior Court family division handles home sale orders. USA Home Buyers gives one offer, one closing date — proceeds split through attorneys. Close in 7–14 days. No repairs, no agent, no delays. Call 888-274-5006. Hablamos español.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              One cash offer. One closing date. Proceeds split through your attorneys. Done.
            </p>
            <p className="text-blue-100 text-sm mb-4">Hablamos español — llamar para ayuda en español. 888-274-5006.</p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/new-haven-ct/divorce-sale.mp4"
        title="Selling a House During Divorce in New Haven CT"
        poster="/videos/new-haven-ct/divorce-sale-poster.jpg"
        subtitle="One offer, one closing, clean split of proceeds in New Haven County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Divorce in New Haven and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call 888-274-5006.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Divorce Sale Cash Offer" subheadline="One offer. One closing. Proceeds split at closing." sourcePage="/markets/new-haven-ct/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Connecticut Equitable Distribution — How New Haven Divorce Home Sales Work</h2>
          <p className="text-gray-700 mb-4">
            Connecticut is an equitable distribution state. Under CT Gen Stat §46b-81, the court distributes marital assets — including the family home — "equitably" based on factors like the length of the marriage, each spouse's contribution to the property, earning capacity, age, and health. Equitable does not mean equal: the court has broad discretion, and outcomes vary. In practice, most divorcing couples negotiating their own settlement divide the home proceeds 50/50 or according to a specific agreement, then have the court approve that agreement.
          </p>
          <p className="text-gray-700 mb-4">
            The New Haven family division of Superior Court handles divorce proceedings, including temporary orders regarding the marital home. If you and your spouse cannot agree on whether to sell or how to split proceeds, the court can issue an order requiring the sale. A cash buyer's written offer gives both parties and the court a concrete, market-based reference point.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Connecticut Divorce Timeline — Home Sale Timing</h2>
          <p className="text-gray-700 mb-4">
            According to CT General Statutes §46b-67 (Connecticut General Assembly), Connecticut has a 90-day minimum waiting period after the divorce complaint is returned to the court before a divorce can be finalized (the "return date" process). Uncontested divorces with complete property agreements — including an agreed home sale — typically finalize in 3–5 months from filing. Contested divorces where parties disagree on property division can run 9–18 months in New Haven Superior Court.
          </p>
          <p className="text-gray-700 mb-4">
            Many New Haven couples choose to sell the home during the divorce proceedings rather than waiting for finalization. This removes the home from the contested asset pool, generates cash that can be distributed or held in escrow pending the final decree, and eliminates ongoing mortgage obligations and carrying costs during what may be a 9–12 month legal process.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale is particularly valuable here because it closes in 7–14 days — far faster than the 65-day average for listed New Haven homes. Getting the home off the balance sheet quickly reduces carrying costs, stops the mortgage from accumulating (if payments have fallen behind), and removes one major point of contention between the parties.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Why Cash Sale Beats Listing During a New Haven Divorce</h2>
          <p className="text-gray-700 mb-4">
            A divorce sale on the MLS requires both spouses to agree on: the listing agent, the list price, how to handle showings while one or both parties may still occupy the property, how to respond to offers, whether to accept price reductions, and how to manage repairs that buyers request. Each of these is a potential conflict point in an already conflicted situation.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale requires only one agreement: accept the written cash offer. One number, one closing date, one disbursement. The proceeds go through the real estate attorney; each party's share is wire-transferred per the divorce agreement at closing. No shared decisions after that. The property is out of both parties' lives.
          </p>
          <p className="text-gray-700 mb-4">
            New Haven's current 65-day median DOM means listing and selling through a conventional agent would extend the shared-property period by at least three months before even considering negotiation time, inspection contingencies, and potential financing fallthrough. That's three additional months of co-ownership, mortgage payments, and potential conflict.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Divorce Sale Neighborhoods — Every Part of the City</h2>
          <p className="text-gray-700 mb-4">
            Divorce sales happen in every New Haven neighborhood. Westville's Victorian homes — often purchased during more financially stable years — generate some of the city's higher-value divorce sales. East Rock's single-family Victorians with equity accumulated over 15-20 years of ownership involve divorce sales where both parties have real equity to protect. Fair Haven's triple-deckers, Beaver Hills' Colonials, and Wooster Square's brownstones all have divorce situations with their own neighborhood-specific character.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers buys in every New Haven neighborhood. We don't require repairs, staging, or cleanout. Whether the home is occupied by one spouse, both, or neither — we can work around the living situation and close on a date that works for both parties. Call 888-274-5006.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">CT Conveyance Tax on a Divorce Sale</h2>
          <p className="text-gray-700 mb-4">
            According to CT General Statutes Chapter 223 (cga.ct.gov), New Haven divorce sale proceeds are subject to the 1.25% conveyance tax (CT state 0.75% + New Haven municipal 0.50% Targeted Investment rate). On a $365,000 home: $4,563 in conveyance tax. This is the seller's obligation — in a divorce, it typically reduces the gross proceeds before the split. When you sell to USA Home Buyers, we cover all closing costs including the conveyance tax, maximizing what both parties receive at closing.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Connecticut Is an Attorney-Close State — What That Means for Divorce Sellers</h2>
          <p className="text-gray-700 mb-4">
            Connecticut requires that real estate closings be conducted by licensed CT real estate attorneys. Both buyer and seller typically have their own attorney. In a divorce sale, this is actually an advantage: each party's attorney participates in the closing, reviews the disbursement of proceeds, and confirms that the split is being executed per the divorce agreement. There is no ambiguity about who receives what — the attorneys handle the disbursement directly.
          </p>
          <p className="text-gray-700 mb-4">
            Attorney fees for a New Haven closing typically run $750–$1,500 per side. Each spouse pays their own attorney. USA Home Buyers covers the transaction's other closing costs — title search, title insurance coordination, the conveyance tax itself. You and your spouse each pay your own attorney; everything else is on us.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">What Happens to the Mortgage During a New Haven Divorce</h2>
          <p className="text-gray-700 mb-4">
            If both spouses are on the mortgage, both remain legally obligated to the lender until the mortgage is satisfied — regardless of what the divorce decree says about who "owns" the home or who is responsible for payments. A divorce decree that assigns the home to one spouse does not remove the other spouse from the mortgage; only a refinance or sale accomplishes that. If the spouse assigned the home fails to pay, the other spouse's credit is still damaged.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale to USA Home Buyers solves this problem immediately. At closing, the mortgage is paid off from the sale proceeds, the lender files a satisfaction of mortgage with the New Haven City Clerk, and both spouses are released from the mortgage obligation. That's a clean financial break that a divorce decree assigning the home to one party cannot achieve without a subsequent refinance — and many parties can't qualify for a refinance on a single income.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Divorce Sale — Pre-Foreclosure Intersection</h2>
          <p className="text-gray-700 mb-4">
            Divorce and pre-foreclosure frequently intersect in New Haven. A couple going through a contentious divorce misses mortgage payments during the proceedings — each party assumes the other is paying, or neither can afford the full payment on a single income, or communication has broken down to the point that routine financial management has stopped. Meanwhile, Connecticut's strict foreclosure timeline begins running: 5–9 months from first missed payment to Law Day.
          </p>
          <p className="text-gray-700 mb-4">
            If your New Haven home is both in divorce proceedings and pre-foreclosure, speed is critical. USA Home Buyers can close in 7–14 days, stopping the foreclosure proceeding and extracting maximum equity before the Law Day arrives. Both spouses receive their shares at closing; the mortgage is paid off; the foreclosure action is dismissed. The divorce court still has to finalize the asset distribution, but the home is off the table. Call 888-274-5006 — this situation is exactly what we're built for.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Serving New Haven's Hispanic Community During Divorce</h2>
          <p className="text-gray-700 mb-4">
            New Haven is 31% Hispanic — the largest single demographic group in the city (U.S. Census Bureau, census.gov). For Fair Haven and Hill families navigating divorce, the combination of a stressful legal process and transacting in a second language creates real barriers. USA Home Buyers offers full Spanish-language service: the initial consultation, the offer discussion, and coordination with the estate and divorce attorneys can all be conducted in Spanish. Hablamos español. Call 888-274-5006 — Spanish service available.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Divorce Sale — Market Data Context</h2>
          <p className="text-gray-700 mb-4">
            New Haven's median sale price is $365,000 (Redfin, March 2026), with a 65-day median DOM. On a Westville Victorian at $525,000, a 5-6% agent commission = $26,250–$31,500 off the top. Add Connecticut's 1.25% conveyance tax ($6,563), two sets of attorney fees ($1,500–$3,000 combined), and three-plus months of shared carrying costs during the listing period. The total transaction cost of a conventional listing in a divorce situation easily reaches $40,000–$50,000 on a mid-range New Haven home. A cash sale eliminates most of these costs and closes in weeks instead of months. The net difference between cash and listed is smaller than the headline cash-offer percentage suggests.
          </p>
          <p className="text-gray-700 mb-4">
            New Haven also has a two-tier market: distressed properties in Fair Haven, The Hill, and Newhallville need cash buyers regardless, because conventional financing isn't available for homes with deferred maintenance, lead paint, and code violations. If your marital home falls into this category, a cash sale may be the only practical option for a quick resolution. Call 888-274-5006.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Home Sale in New Haven CT" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
              { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/new-haven-ct/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/new-haven-ct/probate', label: 'Probate Sale' },
              { href: '/markets/new-haven-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/sell-house-fast-connecticut', label: 'CT State Hub' },
              { href: '/markets/bridgeport-ct', label: 'Bridgeport CT' },
              { href: '/guides/sell-house-fast-new-haven-ct-2026', label: 'New Haven Seller Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your New Haven CT Home During Divorce?" sourcePage="/markets/new-haven-ct/divorce-sale" />
      </div>
    </>
  );
}
