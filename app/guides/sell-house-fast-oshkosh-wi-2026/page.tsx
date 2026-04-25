/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ComparisonTable } from '@/components/ComparisonTable';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-oshkosh-wi-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast Oshkosh WI 2026 — Guide',
  description:
    'Complete 2026 guide to selling your house fast in Oshkosh WI. Cash buyers vs. agents vs. iBuyers with real Winnebago County WI market data. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can you sell a house in Oshkosh WI in 2026?',
    answer: 'Cash buyers like USA Home Buyers close in 7-14 days. A traditional retail listing in Oshkosh averages 61 days median DOM (Redfin, March 2026) plus 30-45 days to close after an accepted offer — totaling 91-106 days in ideal conditions. The 61-day Redfin median applies to retail-ready homes that qualify for conventional financing. Oshkosh\'s pre-war brick bungalows and Victorian housing stock — the dominant residential inventory — frequently doesn\'t meet conventional lender standards without remediation first.',
  },
  {
    question: 'How much do cash buyers pay in Oshkosh WI?',
    answer: 'Cash offers in Oshkosh typically run 70-80% of FMV depending on condition, location, and liens. On the Redfin March 2026 median of $211,000, that\'s $148K-$169K. On the Zillow ZHVI of $250,967, that\'s $176K-$201K. The actual offer depends on condition and neighborhood — Center City and distressed properties run at the lower end; Algoma and Fair Acres mid-century ranches in solid condition run at the higher end. Net comparison vs. retail listing should factor 5-6% commission ($10,550-$12,660 on $211K median), Wisconsin transfer fee ($633), repairs, and 61-day carrying costs.',
  },
  {
    question: 'Are iBuyers (Opendoor, Offerpad) operating in Oshkosh WI?',
    answer: 'No confirmed iBuyer presence in Oshkosh WI. Major iBuyers require metropolitan areas typically above 250,000 population to operate profitably. The Oshkosh-Neenah CBSA (metro area 36780) has a population of roughly 170,000 — below iBuyer operational thresholds. No active Opendoor or Offerpad landing pages for Oshkosh were found as of April 2026. Your realistic options: local/regional cash investors (Fox Cities Home Buyers, Sell My House Fast network, USA Home Buyers) or retail listing with an Oshkosh area agent.',
  },
  {
    question: 'What are the closing costs when selling in Oshkosh WI?',
    answer: 'Wisconsin charges a Real Estate Transfer Fee under Wis. Stat. § 77.22 of $3.00/$1,000 of sale price — seller pays by custom. Winnebago County WI adds no surcharge. City of Oshkosh adds no municipal transfer tax. On $211,000 (Redfin median): $633 total. Recording fee at Winnebago County Register of Deeds: $30 flat per document (Wisconsin Act 314). When selling to USA Home Buyers, we cover all closing costs — transfer fee, recording, and title. You pay nothing at closing.',
  },
  {
    question: 'What is Oshkosh WI\'s housing market like in 2026?',
    answer: 'Oshkosh is the #13 hottest market nationally as of March 2026 (Realtor.com, hotness score 92.809, active listing DOM 36.0 days). Redfin median sale price: $211,000 (-1.1% YoY). Zillow ZHVI: $250,967 (+5.2%). Compete score 60/100 (Somewhat Competitive). Median sold DOM: 61 days. Hot homes go pending in 42 days. The RDC #13 ranking reflects countywide Winnebago County competitiveness including Neenah\'s stronger submarket. Oshkosh city-level data shows a two-speed market: retail-ready homes move; deferred-maintenance pre-war homes sit longer and typically go to cash buyers.',
  },
  {
    question: 'Who are the main cash home buyers in Oshkosh WI?',
    answer: 'Primary cash buyers in Oshkosh WI: Fox Cities Home Buyers (foxcitieshomebuyers.com — Northeast WI specialist with dedicated Oshkosh page, "14 days GUARANTEED" messaging, strong local brand in Fox Valley); Sell My House Fast national network (sellmyhousefast.com/we-buy-houses-oshkosh-wisconsin/ — network model, not a direct buyer, quality varies by local investor); We Buy Ugly Houses/HomeVestors (national franchise, territory coverage for Fox Cities/NE WI not confirmed as of April 2026); and USA Home Buyers (national operation, third WI market after Kenosha #9 and Racine #10, full Winnebago County WI coverage). Each offers different trade-offs between local knowledge, offer speed, and competitiveness.',
  },
  {
    question: 'How does Wisconsin foreclosure affect home sellers in Oshkosh?',
    answer: 'Wisconsin is a 100% judicial foreclosure state under Wis. Stat. Ch. 846 — no non-judicial/trustee-sale path for residential mortgages. All Winnebago County WI foreclosures are filed at Winnebago County Circuit Court, 415 Jackson Street, Oshkosh WI 54901. Timeline: first missed payment to sheriff\'s sale typically 12-15 months. The 6-month redemption period under Wis. Stat. § 846.101 (for owner-occupied 1-4 family homes where lender waives deficiency) is your key window. Sell before the sheriff\'s sale confirmation to preserve equity and avoid credit damage.',
  },
  {
    question: 'Does EAA AirVenture affect the Oshkosh real estate market?',
    answer: 'EAA AirVenture (500,000+ annual attendees, late July-early August) primarily affects the short-term rental market — properties near Wittman Regional Airport command premium AirVenture-week rental rates. This has attracted STR investor interest and created a non-traditional property investor segment in the market. For the broader Oshkosh residential market, EAA keeps regional visibility high and supports professional and business relocation demand. It does not significantly inflate or deflate typical residential sale prices — the $211,000 Redfin median reflects the broader Oshkosh residential market, not EAA-adjacent premium pricing.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '91-106 days (61 DOM + 30-45 close)' },
  { label: 'Repairs required', cashBuyer: 'None', traditional: 'Average $5K-$20K on Oshkosh pre-war stock' },
  { label: 'Agent commission', cashBuyer: '$0', traditional: '5-6% (~$10,550-$12,660 on $211K median)' },
  { label: 'WI transfer fee', cashBuyer: 'Covered by us', traditional: '$633 (0.30% on $211K median — state only, no county or city add-on)' },
  { label: 'iBuyer availability', cashBuyer: 'N/A — we\'re direct', traditional: 'Not operational in Oshkosh-Neenah CBSA (pop ~170K, below iBuyer threshold)' },
  { label: 'Net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-91% after all costs (well-maintained retail-ready homes only)' },
];

export default function SellHouseFastOshkoshWIGuide() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell House Fast Oshkosh WI 2026 — Complete Seller Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Seller Guide 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Sell House Fast Oshkosh WI 2026 — Complete Seller Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              Sell your Oshkosh WI house fast in 2026. Redfin median sale price $211,000; Zillow ZHVI $250,967 (+5.2% YoY). RDC hotness rank #13. Median sold DOM 61 days — hot homes pending in 42 days. WI transfer fee $3.00/$1,000 (state only; no Winnebago County WI or City of Oshkosh add-on). WI judicial foreclosure (Wis. Stat. Ch. 846) — 12-15 months. No iBuyer presence in Oshkosh-Neenah CBSA (~170K metro). USA Home Buyers: cash offer in 24 hours, close in 7-14 days. Call 888-274-5006.
            </p>
          </div>
          <p className="text-lg text-blue-100">
            Everything Oshkosh and Winnebago County WI sellers need to know to make the right decision in 2026 — cash buyers, agent listings, market data, Wisconsin legal context, and honest comparisons.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh WI 2026 Market Overview — What's Actually Happening</h2>
          <p className="text-gray-700 mb-4">
            Oshkosh in 2026 is a tale of two markets. Realtor.com ranks it #13 hottest nationally with a 36.0-day active listing DOM — a figure driven significantly by Neenah's stronger submarket within the Winnebago County data. Redfin's city-level Oshkosh data tells a more nuanced story: 61-day median sold DOM, a compete score of 60/100 (somewhat competitive), and a -1.1% YoY price decline on the $211,000 median sale price.
          </p>
          <p className="text-gray-700 mb-4">
            The gap between the RDC active-listing DOM (36.0 days) and Redfin sold DOM (61 days) is the key insight. It reflects a two-speed market: retail-ready homes — particularly in Algoma, Sawyer Creek, and other neighborhoods where buyers can get conventional financing — are competitive and move quickly. But the majority of Oshkosh's housing stock is pre-war construction that frequently can't qualify for FHA or conventional lending without renovation. Those properties sit longer and typically sell to cash buyers.
          </p>
          <p className="text-gray-700 mb-4">
            EAA AirVenture's 500,000+ annual attendees keep Oshkosh's profile high — the city punches well above its weight in national recognition. UW Oshkosh's 12,000 students create consistent rental demand. Oshkosh Corporation, Mercury Marine, and the broader Fox Valley manufacturing base maintain employment. But for individual sellers, especially those with older homes in need of renovation, the retail market's 61-day DOM and 5-6% agent commission represent real costs — particularly on a $211,000 sale.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh WI 2026 Housing Market Data</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow ZHVI</td><td className="p-3">$250,967 (+5.2% YoY)</td><td className="p-3 text-gray-500">Zillow (Apr 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price</td><td className="p-3">$211,000 (-1.1% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per Sq Ft (city)</td><td className="p-3">$137 (-2.8% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median Sold DOM</td><td className="p-3">61 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Hot Homes Pending</td><td className="p-3">~42 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">RDC Hotness Rank</td><td className="p-3">#13 nationally (score 92.809)</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">60/100 — Somewhat Competitive</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-List Ratio</td><td className="p-3">99.5%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Homes Sold (Mar 2026)</td><td className="p-3">53</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI Transfer Fee</td><td className="p-3">$3.00/$1,000 state only — no Winnebago County WI or City of Oshkosh add-on</td><td className="p-3 text-gray-500">Wis. Stat. § 77.22</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash Sale vs. Agent Listing in Oshkosh WI — Honest Comparison</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            The right choice depends on your property condition and timeline. Retail-ready Oshkosh homes in Algoma or Sawyer Creek with current mechanicals and updated systems may genuinely net more through a retail listing — 61-day DOM plus closing at 85-91% of FMV less commission and costs. Pre-war brick bungalows in Merritt or Center City with deferred maintenance, aging systems, or code issues frequently net more through a cash sale because the retail buyer pool is constrained by financing requirements and repair cost.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Legal Context for Oshkosh Sellers</h2>
          <p className="text-gray-700 mb-4">
            Oshkosh's Wisconsin legal context defines the rules of the game for sellers. Three areas matter most:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">1. Transfer Fee — Wis. Stat. § 77.22</h3>
          <p className="text-gray-700 mb-4">
            Wisconsin's state Real Estate Transfer Fee is $3.00/$1,000 of sale price. Winnebago County WI adds nothing. City of Oshkosh adds nothing. This is the simplest transfer tax structure in any market USA Home Buyers serves. On a $211,000 sale: $633 total. A Wisconsin Real Estate Transfer Return (RETR form) must accompany any deed at recording with the Winnebago County Register of Deeds, 415 Jackson Street, (920) 232-3390.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">2. Foreclosure — Wis. Stat. Ch. 846</h3>
          <p className="text-gray-700 mb-4">
            Wisconsin is 100% judicial — no power-of-sale/trustee foreclosure path for residential mortgages. Every Winnebago County WI foreclosure is filed at Winnebago County Circuit Court. The § 846.101 six-month redemption period (for owner-occupied 1-4 family homes, lender waives deficiency) is your critical window. First missed payment to sheriff's sale: 12-15 months. Selling before confirmation of the sheriff's sale preserves remaining equity and avoids the credit damage of a completed foreclosure.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">3. Probate — Wis. Stat. Ch. 856 and Ch. 857-879</h3>
          <p className="text-gray-700 mb-4">
            Oshkosh inherited real estate requires probate through the Winnebago County Circuit Court Register in Probate (415 Jackson Street Room 242, (920) 236-4808). Informal probate (Ch. 856): 4-8 months. Formal probate (Ch. 857-879): 9-18 months. Small estate affidavit only applies to estates under $50K with no real property — real estate always requires the full probate process.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Who Should Consider a Cash Sale in Oshkosh WI in 2026</h2>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">✓</span><div><strong>Estate heirs managing out of state:</strong> You're in Arizona or Florida managing an Oshkosh estate from a distance. You don't want to coordinate contractors, cleanouts, and staged showings remotely. A cash sale closes with minimal on-site presence required.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">✓</span><div><strong>Pre-war home owners with deferred maintenance:</strong> Brick bungalow with knob-and-tube wiring, galvanized plumbing, or foundation issues that won't qualify for FHA or conventional financing. Your retail buyer pool is constrained. Cash is your best market.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">✓</span><div><strong>Facing foreclosure with remaining equity:</strong> You have equity above the mortgage payoff. A cash sale preserves it before the sheriff's sale confirmation eliminates it. 12-15 months sounds like a long time until you're six weeks from the sale date.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">✓</span><div><strong>Landlord exits — near-campus or Fox Valley rentals:</strong> Done managing student tenants near UW Oshkosh, or an EAA area STR that's not performing. We buy with tenants in place under Wis. Stat. § 704.09.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">✓</span><div><strong>Divorce situations:</strong> One offer, one closing, proceeds split per the Winnebago County Family Court order or mutual agreement. Cleaner than the alternative.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">✓</span><div><strong>Time-constrained sellers:</strong> Job relocation, health issues, or any situation where 61 days of retail DOM plus 30-45 days of escrow is simply too slow.</div></li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh WI's Housing Stock — Know What You're Selling</h2>
          <p className="text-gray-700 mb-4">
            Oshkosh's housing stock has a character that determines how it sells. The pre-war inventory — brick bungalows in Merritt and Algoma, Victorian-era wood-frame homes on the Lake Shore, early-20th-century two-stories in Center City — is architecturally distinctive and structurally specific. These homes were built to last, and many have lasted, but they carry original systems well past their design lives.
          </p>
          <p className="text-gray-700 mb-4">
            Knob-and-tube wiring in Oshkosh bungalows is the most common conventional-loan disqualifier. Many homeowners' insurance companies will not bind a policy on a home with active knob-and-tube — and without insurance, no lender will fund a mortgage. That limitation removes most retail buyers from the equation. Cash buyers don't have that constraint.
          </p>
          <p className="text-gray-700 mb-4">
            Lake Winnebago's flood plain affects South Shore and waterfront properties. Flood insurance requirements and flood history disclosures (required under Wis. Stat. Ch. 709 Real Estate Condition Report) complicate retail sales of Lake Winnebago-adjacent properties. Cash buyers price in the flood risk without walking.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling a House in Oshkosh WI in 2026" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Next Steps</h2>
          <p className="text-gray-700 mb-4">
            Ready to sell your Oshkosh WI house in 2026? Here's the path:
          </p>
          <ol className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-3"><span className="bg-brand-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">1</span><div>Call 888-274-5006 or fill out the form below — describe your property, condition, and timeline. Takes 2 minutes.</div></li>
            <li className="flex items-start gap-3"><span className="bg-brand-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">2</span><div>We review your property and deliver a written cash offer within 24 hours — no obligation, no pressure.</div></li>
            <li className="flex items-start gap-3"><span className="bg-brand-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">3</span><div>Accept the offer and choose your closing date — as fast as 7 days or whenever works for your situation.</div></li>
            <li className="flex items-start gap-3"><span className="bg-brand-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">4</span><div>Sign at a Winnebago County WI title company. Walk away with your cash. No repairs, no cleanout.</div></li>
          </ol>
        </section>

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: 'Oshkosh WI Home' },
              { href: '/markets/oshkosh-wi/market-report', label: 'Market Report' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/oshkosh-wi/probate', label: 'Probate Sale' },
              { href: '/markets/oshkosh-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/oshkosh-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/oshkosh-wi/code-violations', label: 'Code Violations' },
              { href: '/markets/oshkosh-wi/fire-damage', label: 'Fire Damage' },
              { href: '/sell-house-fast-wisconsin', label: 'WI Legal Guide' },
              { href: '/markets/kenosha-wi', label: 'Kenosha WI Market' },
              { href: '/markets/racine-mount-pleasant-wi', label: 'Racine WI Market' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Get Your Oshkosh WI Cash Offer" sourcePage="/guides/sell-house-fast-oshkosh-wi-2026" />
      </div>
    </>
  );
}
