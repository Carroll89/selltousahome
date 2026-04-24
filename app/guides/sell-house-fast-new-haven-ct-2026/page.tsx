/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-new-haven-ct-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast New Haven CT 2026 — Complete Guide',
  description:
    'Complete 2026 guide to selling your house fast in New Haven CT. CT strict foreclosure, conveyance tax, probate, and cash buyer options. Hablamos español.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can you sell a house in New Haven CT?',
    answer: 'Cash buyers close in 7–14 days. Listed homes take 65+ days on market (Redfin Mar 2026) plus 30–45 days to close after going pending — total 95–110+ days. For sellers who need speed, cash is the only path.',
  },
  {
    question: 'How much do cash buyers pay in New Haven CT?',
    answer: "Cash buyers typically offer 65–80% of fair market value. At New Haven's Zillow ZHVI of $323,843, a typical cash offer runs $208,000–$259,000. We cover all closing costs including CT's 1.25% conveyance tax for New Haven.",
  },
  {
    question: 'What is Connecticut strict foreclosure?',
    answer: 'CT strict foreclosure transfers title directly to the lender on Law Day — no auction, no bidding, no surplus. The 5–9 month total timeline from first missed payment to Law Day is faster than most states. CT Gen Stat §§49-1 through 49-31.',
  },
  {
    question: 'What is New Haven\'s conveyance tax?',
    answer: "New Haven is a Targeted Investment municipality — total 1.25% conveyance tax (CT state 0.75% + municipal 0.50%). On a $365,000 sale: $4,563. Seller pays all. Cash buyers like USA Home Buyers absorb this cost.",
  },
  {
    question: 'What are the fastest-selling neighborhoods in New Haven?',
    answer: 'Hot homes in East Rock and Westville move in 28 days at 6% above list. The Hill, Fair Haven, and Newhallville distressed inventory moves much slower — these are the primary cash buyer markets.',
  },
  {
    question: '¿Cómo puedo vender mi casa rápido en New Haven CT?',
    answer: 'Llame a USA Home Buyers al 888-274-5006. Hablamos español. Oferta por escrito en 24 horas, cierre en 7-14 días. Compramos en cualquier condición — sin reparaciones, sin comisiones. Servimos a la comunidad hispana del 31% de New Haven.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Time to offer', cashBuyer: '24 hours', traditional: '14-60 days' },
  { label: 'Time to close', cashBuyer: '7-14 days', traditional: '95-110+ days total' },
  { label: 'Repairs required', cashBuyer: 'None — buy as-is', traditional: 'Typically $10K-$40K avg' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$18,000-$22,000)' },
  { label: 'CT conveyance tax (1.25%)', cashBuyer: 'We cover it', traditional: '$4,563 on $365K (seller pays)' },
  { label: 'Financing contingency', cashBuyer: 'None — cash deal', traditional: 'Yes — 15-20% fall through' },
  { label: 'Net proceeds', cashBuyer: '65-80% of FMV', traditional: '85-92% before repair costs' },
];

export default function NewHavenGuide2026() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell House Fast New Haven CT 2026 — Complete Seller Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/sell-house-fast-connecticut" className="text-brand-primary hover:underline">Connecticut</Link>
          {' '}›{' '}
          <Link href="/markets/new-haven-ct" className="text-brand-primary hover:underline">New Haven CT</Link>
          {' '}› 2026 Guide
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
          How to Sell Your House Fast in New Haven CT — 2026 Complete Guide
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR — Quick Answer</p>
          <p className="text-blue-900 text-sm leading-relaxed">
            New Haven CT (RDC hotness #12, DOM 65 days, Zillow ZHVI $323,843) has a two-tier market: hot homes close in 28 days; distressed properties need cash buyers. CT strict foreclosure has no auction — Law Day 5-9 months. New Haven conveyance tax: 1.25% (Targeted Investment muni). CT Probate Court at 200 Orange St, (203) 946-4880. Cash buyers close in 7-14 days. 31% Hispanic — hablamos español. Call 888-274-5006.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">New Haven's 2026 Housing Market — The Real Picture</h2>
          <p className="text-gray-700 mb-4">
            Realtor.com ranks New Haven-Milford MSA #12 nationally for market hotness — a score of 93.645 with a metro-level median active listing DOM of 37.5 days as of March 2026. That number sounds promising for sellers. But the city-level data tells a more nuanced story.
          </p>
          <p className="text-gray-700 mb-4">
            Redfin's March 2026 data for the city of New Haven shows median days on market of 65 days — up 19 days from 46 days in March 2025. The sale-to-list ratio is 101.5%, meaning well-priced homes still sell above list. But only 45 homes closed in March 2026 — a thin transaction volume that makes averages unreliable for any individual property. The Redfin compete score is 51 out of 100: "Somewhat Competitive." Not a seller's market, not a buyer's market.
          </p>
          <p className="text-gray-700 mb-4">
            The Zillow ZHVI for New Haven city is $323,843 (February 2026, +4.3% year-over-year). Redfin's median sale price is $365,000 — higher because the March 2026 transaction mix skewed toward East Rock and Westville premium sales. The typical New Haven home, for cash offer purposes, is closer to the $323,843 Zillow figure.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Two-Tier Market: Hot vs. Distressed</h2>
          <p className="text-gray-700 mb-4">
            New Haven in 2026 operates as a two-tier market. The first tier: hot homes in East Rock, Westville, and Wooster Square — well-maintained Victorians and Craftsmans in the $400,000–$750,000 range. These move in 28 days at 6% above list price. They get multiple offers. They don't need cash buyers.
          </p>
          <p className="text-gray-700 mb-4">
            The second tier: distressed inventory in Fair Haven, The Hill, Newhallville, and Dixwell — triple-deckers with deferred maintenance, inherited properties that haven't been updated since the 1970s, pre-foreclosure situations, and properties with open code violations. These homes are not candidates for retail financing. Lead paint, knob-and-tube wiring, aging boilers, and structural issues prevent conventional lenders from approving mortgages. These homes need cash buyers — and that's exactly who USA Home Buyers is.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Cash Buyer vs. Listing With an Agent in New Haven CT</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="text-gray-700 mt-4 mb-4 text-sm">
            On a $365,000 New Haven home: agent commissions 5-6% = $18,250–$21,900 + CT conveyance tax 1.25% = $4,563 + carrying costs during 65 days on market + repairs to make the home lender-financeable. The real total cost of listing can exceed $40,000 on an older New Haven property.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Connecticut Transfer Tax — New Haven's 1.25% Targeted Investment Rate</h2>
          <p className="text-gray-700 mb-4">
            New Haven sellers pay more in conveyance tax than sellers in most Connecticut municipalities. The city is one of 18 Targeted Investment Communities designated under CT law — a list that includes Bridgeport, Hartford, Waterbury, and 15 others. That designation means the municipal conveyance tax is 0.50% (0.25% standard + 0.25% Targeted Investment) instead of the standard 0.25%. The state adds 0.75%. Total: 1.25% of the sale price for transactions under $800,000. Seller pays all of it.
          </p>
          <p className="text-gray-700 mb-4">
            On a $365,000 sale: state 0.75% = $2,738; municipal standard 0.25% = $913; Targeted Investment 0.25% = $913. Total conveyance tax: $4,563. This is filed on the OP-236 conveyance tax return at the New Haven City Clerk recording. Source: CT Gen Stat Chapter 223 (cga.ct.gov/current/pub/chap_223.htm). When you sell to USA Home Buyers, we absorb this cost entirely.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Connecticut Strict Foreclosure — No Auction, Just Law Day</h2>
          <p className="text-gray-700 mb-4">
            Connecticut's foreclosure process is unlike any other state's. In most states — Illinois, Wisconsin, Ohio — the lender must hold a public auction after obtaining a foreclosure judgment. Third parties bid; the high bid pays off the debt; surplus goes to the former owner. Connecticut skips the auction entirely.
          </p>
          <p className="text-gray-700 mb-4">
            Under CT Gen Stat §§49-1 through 49-31, the lender files in New Haven Superior Court (235 Church Street, New Haven CT 06510, (203) 503-6800). If the court grants a Judgment of Strict Foreclosure, it sets a "Law Day" — the date by which you must pay the full mortgage balance or lose title. If you don't pay by Law Day, title passes directly to the lender. No auction, no surplus, no second chance.
          </p>
          <p className="text-gray-700 mb-4">
            Law Day is typically 45–90 days after judgment. The total timeline from first missed payment to Law Day is 5–9 months. Connecticut is one of the fastest foreclosure states for lenders — which means the seller window is compressed. The mandatory mediation program (CT Gen Stat § 49-31l) for owner-occupied residences adds 60–90 days and creates a structured negotiation window. Source: CT Judicial Branch (jud.ct.gov).
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Connecticut Probate Court — New Haven's Unique Process</h2>
          <p className="text-gray-700 mb-4">
            Connecticut has 54 dedicated Probate Districts — standalone courts separate from Superior Court. New Haven Probate Court is at 200 Orange Street, 1st Floor, New Haven CT 06504, phone (203) 946-4880, ctprobate.gov/courts/new-haven-probate-court. Any New Haven homeowner who dies with real property in the city leaves that property to be administered through the New Haven Probate Court.
          </p>
          <p className="text-gray-700 mb-4">
            The executor or administrator cannot sell the property without Probate Court authorization. The motion-to-sell process adds 3–6 weeks to any closing timeline. Total estate administration: 6–12 months for testate (with will), 6–18 months for intestate (no will). Connecticut's small-estate threshold (CT Gen Stat §45a-273) — $40,000 in personal property, no real estate — does not apply when there's a house involved.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">New Haven's Housing Stock — What Sellers Are Working With</h2>
          <p className="text-gray-700 mb-4">
            New Haven's residential character is defined by pre-WWII construction. The Victorian wood-frames of East Rock, built 1880–1920, are the city's most photographed homes. The triple-deckers of Fair Haven and The Hill, built 1900–1930, are the workhorse of the rental market. The brick row homes of Newhallville and Dixwell, built 1910–1940, represent the working-class ownership tradition near the Winchester arms district.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-WWII construction means: lead paint in all homes built before 1978 (virtually the entire stock of the targeted neighborhoods); original plumbing systems in many properties — galvanized steel pipes that corrode and restrict water flow; knob-and-tube wiring in some homes that haven't been fully rewired; balloon framing that creates rapid fire spread risk; and oil-fired heating systems that may be decades past their service life.
          </p>
          <p className="text-gray-700 mb-4">
            Conventional lenders require these issues to be addressed before financing a purchase. That requirement removes a huge portion of New Haven's distressed inventory from the conventional sale market entirely. Cash buyers are the only buyers for much of this housing stock — which is why the New Haven cash buyer market is active and why USA Home Buyers operates here.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">New Haven's Hispanic Community — Hablamos Español</h2>
          <p className="text-gray-700 mb-4">
            According to the U.S. Census Bureau (census.gov), New Haven's Hispanic and Latino population is 31% of the city — one of the highest percentages in Connecticut. The community is concentrated in Fair Haven and The Hill, with significant Puerto Rican and Ecuadorian representation. Many Fair Haven homeowners are first- or second-generation immigrants whose families built equity through triple-decker ownership over decades.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers serves New Haven's Hispanic community in English and Spanish. We can handle the entire transaction in Spanish — from the initial phone call through the Probate Court process, through closing with the real estate attorney. Hablamos español. Call 888-274-5006.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The 4 Ways to Sell a House in New Haven CT</h2>
          <p className="text-gray-700 mb-4">
            Every New Haven seller has four options. Understanding each helps you match the right approach to your specific situation.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Option 1: List with a real estate agent.</strong> 5-6% commission. 65+ day median DOM before going pending. 30-45 days to close after pending. Total timeline: 95-110+ days. Best for: move-in-ready homes in East Rock, Westville, or Wooster Square where retail buyers can get financing. Not suitable for: distressed properties with deferred maintenance, code violations, or condition issues that lenders flag.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Option 2: Sell directly to USA Home Buyers.</strong> Written offer in 24 hours. Close in 7-14 days. Any condition, no repairs, we cover all closing costs including the 1.25% CT conveyance tax. Offer: 65-80% of fair market value. Best for: any property that doesn't qualify for conventional financing, or any seller who needs speed over maximum price.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Option 3: iBuyer (Opendoor, Offerpad).</strong> As of April 2026, neither Opendoor nor Offerpad has active New Haven-specific landing pages or confirmed purchase activity in the New Haven market. iBuyers have limited CT presence generally. This option may not be practically available for New Haven sellers.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Option 4: FSBO (For Sale By Owner).</strong> No agent commission, but full responsibility for marketing, negotiations, legal compliance, and the CT attorney-close process. FSBO properties sell for less than agent-listed homes on average, according to National Association of Realtors data. FSBO also doesn't solve the fundamental issue of distressed New Haven properties that lenders won't finance.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">New Haven CT Closing Costs — The Full Picture</h2>
          <p className="text-gray-700 mb-4">
            Connecticut is an attorney-close state — both buyer and seller typically have their own real estate attorney at closing. Attorney fees: $750–$1,500 per side for a typical residential closing. The New Haven City Clerk records the deed: $53 for the first page + $5 per additional page (CT Gen Stat § 7-34a). The OP-236 conveyance tax return accompanies every deed recording. Title insurance: owner's policy typically seller-paid at closing.
          </p>
          <p className="text-gray-700 mb-4">
            Total closing costs for a New Haven seller on a $365,000 home in a conventional sale: conveyance tax $4,563 + agent commission $18,250–$21,900 + attorney $750–$1,500 + title insurance $800–$1,500 = $24,363–$29,463 before any repairs. With repairs to an older New Haven home: $35,000–$50,000+ in total costs off the top.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers covers all closing costs — conveyance tax, title, attorney coordination. The written offer is the net amount to you. No deductions at closing.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Ready to Sell Your New Haven CT Home?</h2>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases homes throughout New Haven city and New Haven County — Fair Haven, East Rock, Westville, The Hill, Newhallville, Wooster Square, Dixwell, Dwight, Edgewood, West Haven, Hamden, East Haven, Milford, Shelton, Branford, Derby, Ansonia, Naugatuck, and Wallingford. Any condition. Any situation. Written offer in 24 hours. Close in 7-14 days. Hablamos español. Call 888-274-5006.
          </p>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your New Haven CT Home in 2026" />

        <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: '/markets/new-haven-ct', label: 'New Haven CT Main' },
            { href: '/markets/new-haven-ct/foreclosure', label: 'Stop Foreclosure' },
            { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
            { href: '/markets/new-haven-ct/probate', label: 'Probate Sale' },
            { href: '/markets/new-haven-ct/divorce-sale', label: 'Divorce Sale' },
            { href: '/markets/new-haven-ct/tenant-occupied', label: 'Tenant-Occupied' },
            { href: '/markets/new-haven-ct/code-violations', label: 'Code Violations' },
            { href: '/markets/new-haven-ct/fire-damage', label: 'Fire Damage' },
            { href: '/sell-house-fast-connecticut', label: 'CT State Hub' },
            { href: '/markets/bridgeport-ct', label: 'Bridgeport CT' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <CashOfferForm variant="footer" headline="Ready to Sell Your New Haven CT Home Fast?" sourcePage="/guides/sell-house-fast-new-haven-ct-2026" />
      </div>
    </>
  );
}
