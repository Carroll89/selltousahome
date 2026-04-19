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

const pageUrl = `${SITE_URL}/guides/sell-house-fast-champaign-urbana-il-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast Champaign-Urbana IL 2026 — Complete Guide',
  description:
    'Complete 2026 guide to selling your house fast in Champaign or Urbana IL. Cash buyers, agents, transfer tax clarification (0.15% not 1.5%), county seat in Urbana, UIUC market context. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can you sell a house in Champaign-Urbana IL in 2026?',
    answer: 'Cash buyers like USA Home Buyers close in 7-14 days. A traditional retail listing averages 8 days pending timeline (Zillow metro data) but requires an additional 30-45 days to close after an accepted offer — totaling 38-53 days in ideal conditions. This assumes a retail-ready property that qualifies for conventional financing. UIUC-adjacent pre-1940 homes in University District Urbana and Old West Urbana frequently don\'t meet conventional lender standards without remediation.',
  },
  {
    question: 'How much do cash buyers pay in Champaign-Urbana IL?',
    answer: 'Cash offers typically run 68-76% of fair market value. According to Zillow (Feb 2026), the Champaign-Urbana Metro ZHVI is $226,978; Champaign city ZHVI is $199,076; Urbana city is $168,903. Per Redfin (Feb 2026), Champaign County median sale price is $230,000 (+4.3% YoY). On the county median, a 68-76% range = $156,400-$174,800. Net comparison vs. retail listing should include 5-6% agent commission ($11,500-$13,800 on county median), repair requests, carrying costs, and closing costs.',
  },
  {
    question: 'What is the real estate transfer tax in Champaign-Urbana?',
    answer: 'The combined transfer tax is $300 on a $200,000 sale (0.15%). That breaks down as: $200 IL state (35 ILCS 200/31-10 at $0.50/$500) + $100 Champaign County ($0.25/$500 per 55 ILCS 5/5-1031) + $0 Champaign city + $0 Urbana city (both ATG-404 confirmed, no municipal RETT). Important: the Champaign County Clerk\'s website states "1.5%" — that is a decimal-point typo. The actual rate is 0.15% (10x less). The Clerk\'s own "2/3 state, 1/3 county" math ($0.50/$0.75 = 2/3; $0.25/$0.75 = 1/3) confirms 0.15% total.',
  },
  {
    question: 'Why is the county seat in Urbana, not Champaign?',
    answer: 'Urbana has been the county seat of Champaign County since the county was organized. This means all county-level legal infrastructure is in Urbana: Champaign County Circuit Court (101 E. Main Street, Urbana IL 61802, phone 217-384-3725), County Clerk/Recorder (1776 E. Washington Street, Urbana, phone 217-384-3774), and the Register in Probate. For sellers dealing with foreclosure, probate, or deed recording — everything goes to Urbana. Not Champaign city.',
  },
  {
    question: 'Are iBuyers operating in Champaign-Urbana IL?',
    answer: 'No confirmed iBuyer (Opendoor, Offerpad) presence in Champaign-Urbana. Major iBuyers require large metro populations to operate profitably. Champaign County\'s ~208,000 population is below typical iBuyer market thresholds. Your realistic options: local cash investors (USA Home Buyers) or retail listing with a Champaign-Urbana area agent.',
  },
  {
    question: 'What is the Champaign-Urbana housing market like in 2026?',
    answer: 'Champaign-Urbana is ranked #77 nationally on the Realtor.com Market Hotness Index. According to Zillow (Feb 2026), the Metro ZHVI is $226,978 (+5.0% YoY). Per Redfin (Feb 2026), the Champaign County median sale price is $230,000 (+4.3% YoY). The 8-day metro pending timeline (Zillow) signals genuine demand. UIUC\'s 57,000-student enrollment and the Research Park\'s 3,000+ tech workers create two distinct demand segments — academic and professional — that insulate the market from the broader downstate Illinois slowdown.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '~38-53 days (DOM + 30-45 day close)' },
  { label: 'Repairs required', cashBuyer: 'None', traditional: 'Average $8K-$20K on pre-1940 C-U stock' },
  { label: 'Agent commission', cashBuyer: '$0', traditional: '5-6% (~$11,500-$13,800 on $230K county median)' },
  { label: 'Transfer tax', cashBuyer: 'Covered by us', traditional: '$300 on $200K (0.15% combined — NOT 1.5%)' },
  { label: 'iBuyer availability', cashBuyer: 'N/A — we\'re local', traditional: 'Not confirmed in C-U metro' },
  { label: 'Net proceeds', cashBuyer: '68-76% of FMV', traditional: '85-91% after all costs (well-maintained only)' },
];

export default function SellHouseFastChampaignUrbanaILGuide() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell House Fast Champaign-Urbana IL 2026 — The Complete Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/guides" className="hover:text-white">Guides</Link> › Champaign-Urbana IL
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Sell House Fast Champaign-Urbana IL 2026 — The Complete Guide
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              Champaign-Urbana IL (#77 nationally, RDC 2026): Metro ZHVI $226,978 (+5.0%, Zillow Feb 2026); county median sale price $230,000 (+4.3%, Redfin Feb 2026). Cash buyers offer 68-76% of FMV, close 7-14 days. Transfer tax: 0.15% ($300 on $200K) — NOT 1.5% as the Champaign County Clerk site states (decimal-point typo confirmed). County seat is Urbana — all filings at 101 E. Main St., Urbana IL 61802. iBuyers not operating in C-U. Call (888) 440-5250.
            </p>
          </div>
          <p className="text-blue-100 text-lg mb-6">
            Everything a Champaign or Urbana seller needs to know in 2026 — cash buyers, retail listing, the county-seat quirk, transfer tax clarification, and the honest math.
          </p>
          <a
            href="tel:+18884405250"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg transition-colors"
          >
            📞 (888) 440-5250 — Get Your Offer
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Champaign-Urbana Market in 2026 — What Makes It Different</h2>
          <p className="text-gray-700 mb-4">
            Champaign-Urbana is not a typical downstate Illinois market. It's not a Rust Belt manufacturing city like Rockford or Peoria. It's not primarily a government town like Springfield. It's a research university ecosystem — one of the largest in the country — that happens to have a residential housing market embedded in it.
          </p>
          <p className="text-gray-700 mb-4">
            The University of Illinois Urbana-Champaign (UIUC) enrolls approximately 57,000 students. According to UIUC (illinois.edu), the university employs 6,000-7,000 faculty and academic staff — plus thousands more in civil service and support roles. The University of Illinois Research Park (researchpark.illinois.edu) hosts 100+ technology companies employing 3,000+ professionals in adjacent to the campus. Carle Foundation Hospital adds another major employer cluster in Urbana.
          </p>
          <p className="text-gray-700 mb-4">
            This concentration creates a housing market with two tracks operating simultaneously: a high-demand market for professionally-oriented housing in Southwest Champaign, Savoy, and the Research Park corridor; and a high-supply rental market in Campustown, University District Urbana, and Old West Urbana, where student demand supports investor economics but deferred maintenance is the rule.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The County Seat Quirk — Urbana, Not Champaign</h2>
          <p className="text-gray-700 mb-4">
            One of the most consistently confusing aspects of the C-U market for out-of-state sellers, estate attorneys, and first-time Champaign-Urbana homeowners: the county seat of Champaign County is Urbana, not Champaign.
          </p>
          <p className="text-gray-700 mb-4">
            This matters practically for anyone dealing with foreclosure, probate, deed recording, or any county-level legal matter. Every filing goes to Urbana:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Champaign County Circuit Court (foreclosure, probate, divorce):</strong> 101 E. Main Street, Urbana IL 61802, phone 217-384-3725</li>
            <li><strong>Champaign County Recorder (deed recording, transfer tax stamps):</strong> 1776 E. Washington Street, Urbana IL 61802, phone 217-384-3774</li>
          </ul>
          <p className="text-gray-700 mb-4">
            UIUC faculty moving to Champaign for the first time often assume the county courthouse is in Champaign. It isn't. Out-of-state heirs dealing with a Champaign-Urbana estate for the first time make the same assumption. The correct address is in Urbana. Getting this right the first time avoids delays.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax — The 1.5% vs. 0.15% Clarification</h2>
          <p className="text-gray-700 mb-4">
            The transfer tax is one of the areas where the Champaign-Urbana market has caused the most confusion — and we are providing the authoritative correction here.
          </p>
          <p className="text-gray-700 mb-4">
            The Champaign County Clerk's official website states: "Real Estate Transfer tax assessed in the amount of 1.5% of the value of the property." This is factually incorrect — a decimal-point typo on an official government website. The actual combined transfer tax rate in Champaign-Urbana is 0.15%, not 1.5%.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-6">
            <h3 className="font-bold text-amber-900 mb-2">The Proof: The Clerk's Own Math Refutes the 1.5% Figure</h3>
            <p className="text-amber-800 text-sm mb-2">The Clerk's website also states: "Of this, 2/3 is given to the State of Illinois. 1/3 remains in the County." Apply that math:</p>
            <ul className="text-amber-800 text-sm space-y-1 mb-3">
              <li>• Illinois state rate per 35 ILCS 200/31-10: $0.50 per $500 (0.10%)</li>
              <li>• Champaign County rate per 55 ILCS 5/5-1031 and County Ordinance 96: $0.25 per $500 (0.05%)</li>
              <li>• Combined: $0.75 per $500 = 0.15%</li>
              <li>• State share: $0.50 ÷ $0.75 = 2/3 ✓ | County share: $0.25 ÷ $0.75 = 1/3 ✓</li>
            </ul>
            <p className="text-amber-800 text-sm font-medium">The math works at 0.15%, not 1.5%. On a $200,000 sale: $300 total, not $3,000.</p>
            <p className="text-amber-700 text-xs mt-2">Source: Per Champaign County Clerk (retrieved April 2026), 35 ILCS 200/31-10, and 55 ILCS 5/5-1031.</p>
          </div>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Sale Price</th>
                  <th className="text-left p-3">Correct Tax (0.15%)</th>
                  <th className="text-left p-3">Incorrect Website Figure (1.5%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">$170,000</td><td className="p-3 text-green-700 font-medium">$255</td><td className="p-3 text-red-700 line-through">$2,550</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$200,000</td><td className="p-3 text-green-700 font-medium">$300</td><td className="p-3 text-red-700 line-through">$3,000</td></tr>
                <tr className="bg-white"><td className="p-3">$230,000 (county median)</td><td className="p-3 text-green-700 font-medium">$345</td><td className="p-3 text-red-700 line-through">$3,450</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Champaign-Urbana IL</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $230,000 Champaign County median home, a 5-6% agent commission runs $11,500-$13,800. Add transfer tax ($345), carrying costs during listing, and repair requests on pre-1940 University District or Campustown stock. At the county median, every dollar of commission and repair cost is significant.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Foreclosure in Champaign County — The Timeline</h2>
          <p className="text-gray-700 mb-4">
            Illinois uses 100% judicial foreclosure under 735 ILCS 5/15-1101 et seq. All Champaign County foreclosures are filed at the 6th Judicial Circuit Court, 101 E. Main Street, Urbana. The typical uncontested timeline is 12-16 months from first missed payment to completed sheriff's sale. Borrowers have a 3-month reinstatement right (735 ILCS 5/15-1602) and 7-month redemption period (735 ILCS 5/15-1603). Selling before the auction preserves equity and avoids the foreclosure notation on your credit report.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate in Champaign County — The Basics</h2>
          <p className="text-gray-700 mb-4">
            Under 755 ILCS 5, real property always requires formal probate. The small estate affidavit (755 ILCS 5/25-1, threshold raised to $150,000 by 2025 amendment) covers personal property only — never real estate. Champaign County probate: 6th Judicial Circuit, 101 E. Main Street, Urbana IL 61802, phone 217-384-3725. Under independent administration (755 ILCS 5/28-1), the executor can sell real estate without individual court orders. Typical uncontested timeline: 6-12 months.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Champaign-Urbana Home Fast in 2026" />

        <section className="my-8">
          <CashOfferForm variant="inline" headline="Get Your Champaign-Urbana Cash Offer" subheadline="No obligation. Written offer in 24 hours. We cover all closing costs." sourcePage="/guides/sell-house-fast-champaign-urbana-il-2026" />
        </section>

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-4">More Champaign-Urbana Resources</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              ['Market Report', '/markets/champaign-urbana-il/market-report'],
              ['Neighborhoods', '/markets/champaign-urbana-il/neighborhoods'],
              ['Inherited Property', '/markets/champaign-urbana-il/inherited-property'],
              ['Foreclosure', '/markets/champaign-urbana-il/foreclosure'],
              ['Probate', '/markets/champaign-urbana-il/probate'],
              ['Tenant-Occupied', '/markets/champaign-urbana-il/tenant-occupied'],
              ['Code Violations', '/markets/champaign-urbana-il/code-violations'],
              ['Fire Damage', '/markets/champaign-urbana-il/fire-damage'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-brand-primary hover:underline font-medium">{label} →</Link>
              </li>
            ))}
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Champaign-Urbana Home Fast?" sourcePage="/guides/sell-house-fast-champaign-urbana-il-2026" />
      </div>
    </>
  );
}
