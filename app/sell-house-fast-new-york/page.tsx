/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast New York | Cash Home Buyers',
  description:
    'USA Home Buyers purchases homes for cash in New York — currently serving Monroe County / Rochester. Written offer in 24 hours, close in 7–14 days, all closing costs covered. Call 888-440-5250.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-new-york` },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house in New York?',
    answer:
      'With a cash buyer like USA Home Buyers, you can close in 7–14 days — compared to the 60–90 day traditional timeline statewide. Cash transactions skip mortgage underwriting; attorney review still happens but compresses fast. We deliver a written offer within 24 hours. We currently serve Monroe County / Rochester, NY. Call 888-440-5250.',
  },
  {
    question: "What is New York's transfer tax?",
    answer:
      "New York State charges a Real Property Transfer Tax (RPTT) of $4.00 per $1,000 (0.40%) of the sale price, paid by the seller — under NY Tax Law §1402. In NYC, sellers also pay an additional NYC RPTT of 1.0% (under $500K) or 1.425% (over $500K) per NYC Administrative Code §11-2102. Monroe County and most upstate markets pay only the state rate — no city or county add-on.",
  },
  {
    question: 'Is New York a judicial foreclosure state?',
    answer:
      "Yes. New York requires every residential foreclosure to go through the court system under RPAPL §1301 et seq. There's no power-of-sale or non-judicial option. Timelines vary widely: 12–24 months in Monroe County, 3–5+ years historically in NYC. According to ATTOM's Q3 2024 foreclosure report, NY's statewide average was 2,087 days (~5.7 years) — 3rd longest in the U.S. You can sell your home at any point before the court confirms the foreclosure sale.",
  },
  {
    question: 'Does New York require an attorney at closing?',
    answer:
      "Yes. New York is an attorney state. Under NY Judiciary Law §484, only licensed attorneys may prepare real estate instruments for compensation. Both buyer and seller hire separate attorneys — the seller's attorney drafts the contract, the buyer's attorney reviews it. Title companies participate but don't run the closing independently as they do in most other states.",
  },
  {
    question: 'What New York markets does USA Home Buyers serve?',
    answer:
      'We currently serve Monroe County / Rochester, NY only. We do not operate in New York City, Long Island, Buffalo, Syracuse, Albany, or any other NY market outside Monroe County. The legal and market information on this page is educational for sellers anywhere in New York. Call 888-440-5250 to discuss your situation.',
  },
  {
    question: "How does NY probate work when selling a house?",
    answer:
      "New York probate is handled by the Surrogate's Court in each county — not a \"Probate Court.\" If the deceased owned real property, the estate generally requires formal probate regardless of value. The executor receives Letters Testamentary from the Surrogate's Court and can then convey the property. Uncontested probates take 3–6 months in most NY counties; NYC courts often run longer. Small estates with personal property under $50,000 may qualify for Voluntary Administration under SCPA §1301, but real property is excluded from that simplified procedure.",
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sell House Fast New York',
      item: `${SITE_URL}/sell-house-fast-new-york`,
    },
  ],
};

export default function SellHouseFastNewYorkPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumbSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell My House Fast New York — Cash Home Buyers
        </h1>

        {/* TL;DR — Iron Rule #5 */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">
            TL;DR — Sell Your House Fast in New York
          </p>
          <p className="text-sm text-blue-900 leading-relaxed">
            USA Home Buyers purchases homes for cash throughout New York. Our active market is Monroe
            County / Rochester — call{' '}
            <strong>888-440-5250</strong> if you&apos;re elsewhere and we&apos;ll help or refer you.
            Written offer within 24 hours, close in 7–14 days, any condition, no repairs, no agent
            fees. We cover all closing costs. New York requires attorneys at closing — our process
            accounts for that. Monroe County&apos;s Redfin median is $160,000 with a 14-day median
            days-on-market (Redfin, March 2026).
          </p>
        </div>

        {/* Service Coverage Callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10">
          <p className="text-sm font-semibold text-amber-800">📍 Service Coverage</p>
          <p className="text-sm text-amber-700 mt-1">
            We currently serve Monroe County / Rochester, NY. The information below is educational
            for any New York seller — whether you&apos;re in Westchester, Long Island, the North
            Country, or the five boroughs. Active buying is Monroe County only.
          </p>
        </div>

        {/* ===== SECTION 1: Legal Overview ===== */}
        <section className="mb-12" id="ny-legal-overview">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            New York Home Sale — Legal Overview
          </h2>

          <div className="space-y-5 text-gray-700">
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">New York is an attorney state</h3>
              <p className="text-sm">
                Per NY Judiciary Law §484, only licensed attorneys may prepare deeds, mortgages, and
                other real estate instruments for compensation. Both buyer and seller hire separate
                attorneys. The seller&apos;s attorney drafts the contract of sale; the buyer&apos;s
                attorney reviews and negotiates it. That attorney review phase typically runs 1–2
                weeks before either party is contractually bound. Title companies issue title
                insurance and participate in the transaction, but they don&apos;t run the closing
                independently — that&apos;s different from most states where a title company or
                escrow agent handles everything without attorneys present.
              </p>
            </div>

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">
                Property Condition Disclosure — mandatory since March 20, 2024
              </h3>
              <p className="text-sm">
                Per NY Real Property Law §462–§467, sellers of 1–4 family residential properties
                must deliver a completed Property Condition Disclosure Statement (PCDS) to every
                buyer before contract signing. Before March 20, 2024, sellers could skip the form
                entirely by paying a $500 credit at closing. According to NYSAR (New York State
                Association of Realtors), Governor Hochul&apos;s 2024 amendment eliminated that
                opt-out entirely and added mandatory flood history and flood zone disclosures.
                Sellers who fail to provide the PCDS now face potential liability — not just a $500
                charge. Limited exemptions exist for commercial transfers, court-ordered transfers,
                and transfers between co-owners.
              </p>
            </div>

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Closing timeline</h3>
              <p className="text-sm">
                A typical New York residential closing takes <strong>60–90 days</strong> from signed
                contract to keys — longer than most states. The attorney review phase adds 1–2 weeks
                upfront. Mortgage underwriting adds another 4–6 weeks for financed deals. New York
                also uses &ldquo;on or about&rdquo; closing dates by convention, with adjournment
                rights built into the standard contract. Cash transactions close in roughly 30 days
                statewide. NYC is slower: co-op board approvals routinely add 4–8+ weeks, pushing
                NYC closings to 90–120+ days. Upstate closings — including Monroe County — move
                faster without those layers.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Feature</th>
                  <th className="py-3 px-4 text-left">New York</th>
                  <th className="py-3 px-4 text-left">Most Other States</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Attorney required at closing', 'Yes — Judiciary Law §484', 'No'],
                  [
                    'Closing conducted by',
                    "Buyer's + seller's attorneys",
                    'Title company or escrow agent',
                  ],
                  ['Attorney review period', '1–2 weeks typical (pre-contract)', 'Rarely standard'],
                  [
                    'Property disclosure required',
                    'Yes — PCDS mandatory (RPL §462–§467)',
                    'Varies by state',
                  ],
                  [
                    'Typical closing timeline',
                    '60–90 days (30 days cash)',
                    '30–45 days',
                  ],
                  [
                    'NYC co-op board approval',
                    'Yes — adds 4–8+ weeks',
                    'N/A (no co-op structure)',
                  ],
                ].map(([feature, ny, other], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium">{feature}</td>
                    <td className="py-2 px-4">{ny}</td>
                    <td className="py-2 px-4 text-gray-600">{other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== SECTION 2: Transfer Tax ===== */}
        <section className="mb-12" id="ny-transfer-tax">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            New York Transfer Tax &amp; Closing Costs
          </h2>

          <div className="space-y-5 text-gray-700">
            <p>
              According to the NY Department of Taxation and Finance, New York State charges a Real
              Property Transfer Tax (RPTT) of <strong>$4.00 per $1,000 of consideration
              (0.40%)</strong> on all property conveyances, paid by the seller at closing under NY
              Tax Law §1402. That&apos;s the base rate everywhere in New York. The complexity comes
              from NYC layering on its own tax, and from the statewide mansion tax on sales over
              $1 million.
            </p>

            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">
                NYC adds its own RPTT on top of the state rate
              </h3>
              <p className="text-sm">
                If the property sits in one of New York City&apos;s five boroughs — Manhattan,
                Brooklyn, Queens, Bronx, Staten Island — sellers also pay a separate NYC Real
                Property Transfer Tax under NYC Administrative Code §11-2102. For residential
                properties: <strong>1.0%</strong> on sales at or below $500,000 and{' '}
                <strong>1.425%</strong> on sales above $500,000. These two taxes stack; you pay
                both. Monroe County, Long Island (Nassau and Suffolk), and all upstate markets pay
                only the state rate — the NYC RPTT does not apply outside the five boroughs.
              </p>
              <p className="text-sm mt-2">
                Additionally, the <strong>NYS RPTT itself is elevated for high-value NYC
                transactions</strong> (2019 amendment to NY Tax Law §1402): for NYC residential
                properties with a purchase price at or above <strong>$3,000,000</strong>, the state
                rate increases from $4.00/$1,000 (0.40%) to{' '}
                <strong>$6.50 per $1,000 (0.65%)</strong>. For non-residential NYC properties, the
                0.65% threshold is ≥$2,000,000. This elevated state rate applies only within the
                five boroughs and has been in effect since July 1, 2019 (NY Tax Law §1402;
                tax.ny.gov).
              </p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">
                Mansion tax — buyer&apos;s obligation on sales at or above $1M
              </h3>
              <p className="text-sm">
                New York&apos;s statewide mansion tax under NY Tax Law §1402-a applies to any
                residential sale at or above $1,000,000 — anywhere in the state, including upstate
                and Long Island. The base rate is 1% of the purchase price, paid by the buyer.
                For NYC sales at or above $2,000,000, an additional supplemental mansion tax
                (§1402-b, effective July 1, 2019) stacks on top of the base 1%. The combined
                §1402-a + §1402-b rates for NYC are:
              </p>
              <div className="overflow-x-auto mt-3 mb-2">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-brand-dark text-white">
                    <tr>
                      <th className="py-2 px-4 text-left">NYC Purchase Price</th>
                      <th className="py-2 px-4 text-left">Total Mansion Tax Rate (§1402-a + §1402-b)</th>
                      <th className="py-2 px-4 text-left">Who Pays</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['$1M – under $2M', '1.00%', 'Buyer'],
                      ['$2M – under $3M', '1.25%', 'Buyer'],
                      ['$3M – under $5M', '1.50%', 'Buyer'],
                      ['$5M – under $10M', '2.25%', 'Buyer'],
                      ['$10M – under $15M', '3.25%', 'Buyer'],
                      ['$15M – under $20M', '3.50%', 'Buyer'],
                      ['$20M – under $25M', '3.75%', 'Buyer'],
                      ['$25M and above', '3.90%', 'Buyer'],
                    ].map(([price, rate, who], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-4">{price}</td>
                        <td className="py-2 px-4 font-semibold">{rate}</td>
                        <td className="py-2 px-4">{who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-2">
                Source: NY Tax Law §1402-a, §1402-b (NYC only; effective July 1, 2019). Monroe
                County residential sales rarely reach the $1M threshold — but if they do, the
                statewide 1% falls on the buyer, not the seller.
              </p>
            </div>

            <h3 className="font-semibold text-brand-dark mt-2">
              Tax stack examples — three New York scenarios
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Scenario</th>
                    <th className="py-3 px-4 text-left">Tax</th>
                    <th className="py-3 px-4 text-left">Rate</th>
                    <th className="py-3 px-4 text-left">Amount</th>
                    <th className="py-3 px-4 text-left">Who Pays</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      '$200K Upstate (Monroe County)',
                      'NYS RPTT §1402',
                      '0.40%',
                      '$800',
                      'Seller',
                    ],
                    ['', 'Monroe County add-on', 'None', '$0', '—'],
                    ['', 'Mansion Tax (< $1M)', 'N/A', '$0', '—'],
                    ['', 'Total seller cost →', '', '$800', 'Seller'],
                    [
                      '$800K NYC Sale (Brooklyn / Queens)',
                      'NYS RPTT §1402',
                      '0.40%',
                      '$3,200',
                      'Seller',
                    ],
                    [
                      '',
                      'NYC RPTT §11-2102 (> $500K residential)',
                      '1.425%',
                      '$11,400',
                      'Seller',
                    ],
                    ['', 'Mansion Tax (< $1M)', 'N/A', '$0', '—'],
                    ['', 'Total seller cost →', '', '$14,600', 'Seller'],
                    [
                      '$1.5M Long Island (Nassau or Suffolk County)',
                      'NYS RPTT §1402',
                      '0.40%',
                      '$6,000',
                      'Seller',
                    ],
                    [
                      '',
                      'NYC RPTT (Nassau/Suffolk not in NYC)',
                      'N/A',
                      '$0',
                      '—',
                    ],
                    [
                      '',
                      'Mansion Tax §1402-a (≥ $1M, statewide)',
                      '1.00%',
                      '$15,000',
                      'Buyer',
                    ],
                    ['', 'Total seller cost →', '', '$6,000', 'Seller'],
                  ].map(([scenario, tax, rate, amount, who], i) => (
                    <tr
                      key={i}
                      className={scenario ? 'bg-white font-medium' : 'bg-gray-50'}
                    >
                      <td className="py-2 px-4 text-sm">{scenario}</td>
                      <td className="py-2 px-4">{tax}</td>
                      <td className="py-2 px-4">{rate}</td>
                      <td
                        className={`py-2 px-4 font-semibold ${
                          tax.includes('Total') ? 'text-brand-primary' : ''
                        }`}
                      >
                        {amount}
                      </td>
                      <td className="py-2 px-4">{who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Source: NY Tax Law §1402, §1402-a, §1402-b; NYC Administrative Code §11-2102;
              NY Dept. of Taxation and Finance (tax.ny.gov)
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-2">
              <p className="text-sm text-green-800 font-semibold">
                When you sell to USA Home Buyers, we cover all closing costs — including transfer
                tax. You pay nothing at closing.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: Foreclosure ===== */}
        <section className="mb-12" id="ny-foreclosure">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            New York Foreclosure Process
          </h2>

          <div className="space-y-5 text-gray-700">
            <p>
              New York is a <strong>100% judicial foreclosure state</strong>. Every residential
              foreclosure must proceed through the Supreme Court in the county where the property
              sits — there&apos;s no power-of-sale or non-judicial option under RPAPL §1301 et seq.
              That requirement is one reason New York has among the longest foreclosure timelines in
              the country.
            </p>

            <div className="border-l-4 border-red-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">
                90-day pre-foreclosure notice (RPAPL §1304)
              </h3>
              <p className="text-sm">
                Before filing a foreclosure complaint, lenders must send a 90-day pre-foreclosure
                notice to the borrower. Per RPAPL §1304, this notice must be in at least 14-point
                type and include the statement &ldquo;YOU MAY BE AT RISK OF FORECLOSURE&rdquo;
                along with a list of approved housing counseling agencies. According to the New York
                Department of Financial Services, the 90-day clock runs before any court filing
                begins. This pre-filing period is your earliest window to negotiate with the lender,
                explore loss mitigation, or sell the property.
              </p>
            </div>

            <div className="border-l-4 border-red-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">
                Mandatory settlement conferences (CPLR §3408)
              </h3>
              <p className="text-sm">
                Once a foreclosure action is filed for an owner-occupied 1–4 family home, the court
                automatically schedules mandatory settlement conferences under CPLR §3408.
                Administered through the Office of Court Administration, these conferences require
                lenders to negotiate loss mitigation in good faith. The conference process can span
                multiple dates and add months to the overall timeline. It&apos;s a consumer
                protection built into New York procedure — but it does extend things significantly
                compared to non-judicial states.
              </p>
            </div>

            <div className="border-l-4 border-red-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">
                Foreclosure Abuse Prevention Act (FAPA) — signed December 30, 2022
              </h3>
              <p className="text-sm">
                Governor Hochul signed FAPA on December 30, 2022, with immediate retroactive effect
                on all pending foreclosure actions where the sale had not yet been confirmed. FAPA
                changed one key rule: a lender&apos;s voluntary discontinuance of a foreclosure
                action no longer resets the six-year statute of limitations. That reversed{' '}
                <em>Freedom Mortgage Corp. v. Engel</em> (2021), which had allowed lenders to
                voluntarily dismiss and refile to restart the clock. Under FAPA, once the six-year
                SOL runs from the date of acceleration, the lender also loses the right to pursue a
                separate judgment on the promissory note (amended RPAPL §1301). FAPA&apos;s
                retroactive application created significant litigation as lenders challenged its
                constitutionality — many pending cases faced immediate SOL challenges from borrowers.
              </p>
            </div>

            <h3 className="font-semibold text-brand-dark">
              Regional foreclosure timelines — New York varies dramatically by county
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Region</th>
                    <th className="py-3 px-4 text-left">Typical Timeline</th>
                    <th className="py-3 px-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      'Monroe County (Rochester)',
                      '12–24 months',
                      'Monroe County Supreme Court; less backlogged than NYC or Long Island courts',
                    ],
                    [
                      'New York City (5 boroughs)',
                      '3–5+ years historically',
                      'Dense dockets, high settlement conference volume, contested litigation',
                    ],
                    [
                      'Long Island (Nassau / Suffolk)',
                      '2–4+ years',
                      'Nassau and Suffolk Supreme Courts; historically significant backlogs',
                    ],
                    [
                      'NY Statewide Average (ATTOM Q3 2024)',
                      '~5.7 years (2,087 days)',
                      'NY ranked 3rd longest in the U.S., behind Louisiana and Hawaii',
                    ],
                  ].map(([region, timeline, notes], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{region}</td>
                      <td className="py-2 px-4 text-orange-600 font-semibold">{timeline}</td>
                      <td className="py-2 px-4 text-sm text-gray-600">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Source: ATTOM Q3 2024 U.S. Foreclosure Market Report; RPAPL §1301; nycourts.gov
              foreclosure flowchart
            </p>

            <p>
              <strong>Redemption rights:</strong> New York has no post-sale statutory redemption
              period. Your right to redeem — pay off the debt and stop the foreclosure — exists
              throughout the court process but ends when the court confirms the foreclosure sale.
              After confirmation, that right is gone.
            </p>

            <p>
              If you&apos;re in foreclosure in Monroe County, call{' '}
              <a
                href={`tel:${PHONE}`}
                className="text-brand-primary underline font-semibold"
              >
                {PHONE}
              </a>
              {' '}— a cash sale can close before the sale date.
            </p>
          </div>
        </section>

        {/* ===== SECTION 4: Probate ===== */}
        <section className="mb-12" id="ny-probate">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            New York Probate — Selling an Inherited Property
          </h2>

          <div className="space-y-5 text-gray-700">
            <p>
              New York probate is handled by the <strong>Surrogate&apos;s Court</strong> in each
              county — not a &ldquo;Probate Court.&rdquo; The Surrogate&apos;s Court is a
              specialized court with exclusive jurisdiction over wills, estate administration, and
              the affairs of decedents. Each of New York&apos;s 62 counties has one.
            </p>

            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">
                Small estate exception — personal property only
              </h3>
              <p className="text-sm">
                New York&apos;s simplified procedure, Voluntary Administration under SCPA §1301, is
                available when the decedent left personal property with a gross value of $50,000 or
                less. Per Nixon Peabody, the threshold was raised from $30,000 to $50,000 in
                November 2019.{' '}
                <strong>
                  Critical for sellers: Voluntary Administration covers personal property only.
                </strong>{' '}
                If the estate includes real property — a house, condo, or land — formal probate
                through the Surrogate&apos;s Court is typically required regardless of the total
                estate value. That&apos;s a common surprise for families who assumed the small
                estate shortcut would apply.
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">
                Selling during probate — yes, it&apos;s possible
              </h3>
              <p className="text-sm">
                The executor named in the will receives <strong>Letters Testamentary</strong> from
                the Surrogate&apos;s Court upon admission of the will to probate. Those letters
                grant authority to sell real property. If the will grants full power to the
                executor, no additional court authorization is needed. For intestate estates (no
                will), the Surrogate&apos;s Court appoints an administrator, who may petition for
                an order authorizing sale under SCPA Article 19 (§1902) — that court authorization
                step adds roughly 2–4 months. Either way, the deed can&apos;t transfer until
                legal authority is in hand. But the property can be listed, shown, and put under
                contract while probate is pending.
              </p>
            </div>

            <h3 className="font-semibold text-brand-dark">
              Surrogate&apos;s Court locations — key New York counties
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">County</th>
                    <th className="py-3 px-4 text-left">Court Name</th>
                    <th className="py-3 px-4 text-left">Address</th>
                    <th className="py-3 px-4 text-left">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      'Monroe County (Rochester)',
                      "Monroe County Surrogate's Court",
                      '99 Exchange Blvd, Hall of Justice, 5th Fl, Room 541, Rochester, NY 14614',
                      '(585) 371-3310',
                    ],
                    [
                      'New York County (Manhattan)',
                      "New York County Surrogate's Court",
                      '31 Chambers St, New York, NY 10007',
                      '(646) 386-5000',
                    ],
                    [
                      'Kings County (Brooklyn)',
                      "Kings County Surrogate's Court",
                      '2 Johnson St, Brooklyn, NY 11201',
                      '(347) 404-9700',
                    ],
                    [
                      'Nassau County',
                      "Nassau County Surrogate's Court",
                      '262 Old Country Rd, Mineola, NY 11501',
                      '(516) 493-3000',
                    ],
                    [
                      'Suffolk County',
                      "Suffolk County Surrogate's Court",
                      '320 Center Drive, Riverhead, NY 11901',
                      '(631) 852-1745',
                    ],
                  ].map(([county, court, address, phone], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{county}</td>
                      <td className="py-2 px-4">{court}</td>
                      <td className="py-2 px-4 text-sm">{address}</td>
                      <td className="py-2 px-4">{phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Source: NYS Unified Court System (nycourts.gov)
            </p>

            <p>
              Uncontested probate in New York typically takes <strong>3–6 months</strong> in most
              counties. Contested estates or complex assets stretch to 12–24+ months. Kings County
              (Brooklyn) and Queens County Surrogate&apos;s Courts have historically experienced
              backlogs that push even uncontested cases past the statewide norm. Monroe County
              Surrogate&apos;s Court tends to move faster — closer to the 3–4 month end of the
              range for straightforward estates.
            </p>
          </div>
        </section>

        {/* ===== SECTION 5: Market Snapshot ===== */}
        <section className="mb-12" id="ny-market-snapshot">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New York Market Snapshot</h2>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">Service note</p>
            <p className="text-sm text-amber-700 mt-1">
              USA Home Buyers currently serves Rochester / Monroe County only. The statewide figures
              below are educational for any New York seller — not service coverage claims.
            </p>
          </div>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-brand-dark mb-3">
                Rochester / Monroe County — our New York market
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-brand-dark text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Metric</th>
                      <th className="py-3 px-4 text-left">Value</th>
                      <th className="py-3 px-4 text-left">Source</th>
                      <th className="py-3 px-4 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Zillow ZHVI (Monroe County)', '$212,810', 'Zillow', 'Apr 2026'],
                      ['Redfin Median Sale Price (city)', '$160,000', 'Redfin', 'Mar 2026'],
                      ['YoY Price Change', '+5.3%', 'Redfin', 'Mar 2026'],
                      ['Median Days on Market', '14 days', 'Redfin', 'Mar 2026'],
                      ['Avg Sale-to-List Ratio', '~108% (8% above list)', 'Redfin', 'Mar 2026'],
                      ['Redfin Compete Score', '86/100 — Very Competitive', 'Redfin', 'Mar 2026'],
                    ].map(([metric, value, source, date], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-4 font-medium">{metric}</td>
                        <td className="py-2 px-4 font-semibold text-brand-primary">{value}</td>
                        <td className="py-2 px-4 text-gray-600">{source}</td>
                        <td className="py-2 px-4 text-gray-600">{date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Source: Zillow (zillow.com), Redfin (redfin.com) — Rochester, NY housing market,
                March–April 2026
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-brand-dark mb-3">
                New York regional comparison (educational)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-brand-dark text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Region</th>
                      <th className="py-3 px-4 text-left">Median / ZHVI Range</th>
                      <th className="py-3 px-4 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        'Upstate NY (Rochester / Buffalo)',
                        '$160K–$215K (Redfin/Zillow)',
                        'Affordable entry; strong cash buyer activity; faster court timelines than NYC',
                      ],
                      [
                        'NYC Metro (five boroughs)',
                        '$799,871 ZHVI (Zillow, ~Mar 2026)',
                        'Co-ops dominate Manhattan; condos and 1–4 family in outer boroughs',
                      ],
                      [
                        'Long Island (Nassau / Suffolk)',
                        'Nassau ~$795K–$849K; Suffolk ~$649K',
                        'Suburban; strong NYC commuter demand; no NYC RPTT applies here',
                      ],
                      [
                        'NY Statewide',
                        '$425,000 median (NYSAR, Feb 2026)',
                        'Statewide median heavily influenced by downstate pricing',
                      ],
                    ].map(([region, range, notes], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-4 font-medium">{region}</td>
                        <td className="py-2 px-4 font-semibold text-brand-primary">{range}</td>
                        <td className="py-2 px-4 text-sm text-gray-600">{notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Sources: Zillow, Redfin, NYSAR (nysar.com market data Feb 2026), News12 Long Island,
                Norada Real Estate
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">
                NYC housing types — unique to the five boroughs
              </h3>
              <p className="text-sm">
                New York City&apos;s housing market divides into three types not found in upstate
                markets.{' '}
                <strong>Co-ops:</strong> buyers purchase shares in a cooperative corporation — not
                real property. Co-op boards have approval authority over purchasers, and that
                application process takes 4–8+ weeks. Co-ops dominate Manhattan and parts of Queens
                and the Bronx. <strong>Condos:</strong> buyers purchase a real property unit with
                no board approval (though some boards hold right of first refusal). Standard
                financing and closing timelines apply. <strong>1–4 family homes:</strong> more
                common in the outer boroughs — Staten Island, Queens, Brooklyn&apos;s outer
                neighborhoods. Standard RPTT rules apply to all three types; the co-op board
                approval layer is a uniquely NYC complication.
              </p>
            </div>
          </div>

          {/* Markets card */}
          <div className="mt-8">
            <h3 className="font-semibold text-brand-dark mb-3">Markets We Serve in New York</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/markets/rochester-ny"
                className="block border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-brand-dark">Rochester, NY</h4>
                    <p className="text-xs text-gray-500">Monroe County · Active market</p>
                  </div>
                  <span className="text-brand-primary text-sm">→</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  Zillow ZHVI $212,810 · Redfin median $160K · 14 days median DOM
                </p>
                <p className="text-xs text-gray-400">
                  86/100 compete score · avg 8 offers per home · 108% sale-to-list
                </p>
              </Link>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Not in Rochester?{' '}
              <a href={`tel:${PHONE}`} className="text-brand-primary underline">
                Call {PHONE}
              </a>{' '}
              — we&apos;ll help or refer you to a trusted buyer in your area.
            </p>
          </div>
        </section>

        {/* CashOfferForm */}
        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your New York Home"
          subheadline="Written offer in 24 hours. We cover all closing costs. Call 888-440-5250."
          sourcePage="/sell-house-fast-new-york"
        />

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Selling a House in New York — FAQ" />

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>
            <Link href="/markets/rochester-ny" className="text-brand-primary hover:underline">
              Rochester, NY
            </Link>
            {' '}·{' '}
            <Link
              href="/sell-house-fast-pennsylvania"
              className="text-brand-primary hover:underline"
            >
              Sell in Pennsylvania
            </Link>
            {' '}·{' '}
            <Link
              href="/sell-house-fast-massachusetts"
              className="text-brand-primary hover:underline"
            >
              Sell in Massachusetts
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
