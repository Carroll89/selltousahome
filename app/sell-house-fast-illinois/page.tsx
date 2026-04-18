/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Illinois | Cash Home Buyers',
  description:
    'USA Home Buyers purchases homes for cash in Illinois — currently serving Springfield / Sangamon County. Written offer in 24 hours, close in 7-14 days. Call 888-440-5250.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-illinois` },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house in Illinois?',
    answer:
      'With a cash buyer like USA Home Buyers, you can close in 7-14 days — compared to the 57-72 day traditional timeline (27-day median DOM + 30-45 days to close) in Springfield. Cash transactions skip mortgage underwriting; title companies handle Illinois closings without attorney involvement required by law. We deliver a written offer within 24 hours. We currently serve Springfield / Sangamon County, IL. Call 888-440-5250.',
  },
  {
    question: 'Does Illinois require an attorney to sell a house?',
    answer:
      'No. Illinois is NOT an attorney state. Title companies handle residential closings in Illinois without attorney involvement required by law. This contrasts with New York (Judiciary Law §484) and New Jersey, which require licensed attorneys. In Illinois, the title company manages escrow, prepares the closing disclosure, coordinates payoff of existing liens, collects transfer taxes, records the deed, and distributes proceeds. Attorneys are optional — common in Chicago metro for complex transactions but not legally required.',
  },
  {
    question: 'What is Illinois\'s real estate transfer tax?',
    answer:
      'Illinois charges a state transfer tax of $0.50 per $500 of consideration (35 ILCS 200/31-10), paid by the seller. Counties may add their own tax — Sangamon County charges $0.25 per $500 (confirmed from Sangamon County Recorder fee schedule). Combined Springfield rate: $0.75/$500 ($1.50/$1,000 = 0.15%). Chicago adds a large municipal transfer tax ($1.50/$500 seller + $3.75/$500 buyer). The City of Springfield has NO municipal transfer tax. Form PTAX-203 is filed at closing with the county recorder.',
  },
  {
    question: 'Is Illinois a judicial foreclosure state?',
    answer:
      'Yes. Illinois is a 100% judicial foreclosure state under the Illinois Mortgage Foreclosure Law (735 ILCS 5/15-1101 et seq.). Every residential foreclosure must go through the Circuit Court in the county where the property sits. There is no power-of-sale or non-judicial option. Sangamon County (Springfield) foreclosures are filed at Sangamon County Circuit Court, 200 S 9th St, (217) 753-6674. Typical Springfield timeline: 12-15 months. Cook County (Chicago): 24-36+ months due to court backlog.',
  },
  {
    question: 'What Illinois markets does USA Home Buyers serve?',
    answer:
      'We currently serve Springfield / Sangamon County, IL only. We do not operate in Chicago, the Chicago metro, Peoria, Rockford, Champaign, or any other Illinois market outside Sangamon County. All statewide information on this page is educational for Illinois sellers. Call 888-440-5250 to discuss your specific situation.',
  },
  {
    question: 'How does Illinois probate work when selling a house?',
    answer:
      'Illinois probate is handled by Circuit Courts — not a standalone Probate Court or Register of Wills. If the decedent owned real property, formal probate is required regardless of estate value. The executor receives Letters of Office from the Circuit Court and can then convey the property. Under independent administration (755 ILCS 5/28-1), executors can sell real property without individual court approval — typical timeline 6-9 months. Small estate affidavit (755 ILCS 5/25-1, threshold $150,000 after 2025 amendment) applies to personal property only — real estate is excluded.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Sell House Fast Illinois', item: `${SITE_URL}/sell-house-fast-illinois` },
  ],
};

export default function SellHouseFastIllinoisPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumbSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell My House Fast Illinois — Cash Home Buyers
        </h1>

        {/* TL;DR */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR — Sell Your House Fast in Illinois</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            USA Home Buyers purchases homes for cash in Illinois. Our active market is <strong>Springfield / Sangamon County</strong> — call <strong>888-440-5250</strong> if you're elsewhere and we'll help or refer you. Written offer within 24 hours, close in 7-14 days, any condition, no repairs, no agent fees. We cover all closing costs. Illinois is NOT an attorney state — title companies handle closings. Illinois state + Sangamon County transfer tax: $0.75/$500 (0.15%) — we cover it. Springfield's Redfin median: $187,000 (+23% YoY, March 2026). RDC hotness rank: #10 nationally.
          </p>
        </div>

        {/* Service Coverage Callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10">
          <p className="text-sm font-semibold text-amber-800">📍 Service Coverage</p>
          <p className="text-sm text-amber-700 mt-1">
            We currently serve <strong>Springfield / Sangamon County, IL only</strong>. We do not operate in Chicago, the Chicago metro, Peoria, Rockford, Champaign-Urbana, or any other Illinois market. The information below is educational for any Illinois seller — wherever you are in the state. Active buying is Sangamon County only.
          </p>
        </div>

        {/* Our Active IL Market */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Our Illinois Market: Springfield / Sangamon County</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">Source</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Zillow ZHVI (avg home value)', '$163,198 (+8.2% YoY)', 'Zillow (3/31/2026)'],
                  ['Redfin Median Sale Price', '$187,000 (+23.0% YoY)', 'Redfin (Mar 2026)'],
                  ['Price per Sq Ft', '$112 (+24.4% YoY)', 'Redfin (Mar 2026)'],
                  ['Median Days on Market (sold)', '27 days', 'Redfin (Mar 2026)'],
                  ['RDC Hotness Rank', '#10 nationally (score 93.979)', 'Realtor.com (Mar 2026)'],
                  ['Compete Score', '78/100 — Very Competitive', 'Redfin (Mar 2026)'],
                  ['Population', '113,330', 'US Census ACS (2024)'],
                  ['Median Household Income', '$66,064', 'US Census ACS (2024)'],
                ].map(([metric, value, source], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium">{metric}</td>
                    <td className="py-2 px-4 font-semibold text-green-700">{value}</td>
                    <td className="py-2 px-4 text-gray-500">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm mb-4">
            Springfield is Illinois's state capital and Sangamon County seat — a city whose economy is anchored by state government employment, making it unusually recession-resistant compared to manufacturing-dependent downstate cities. The #10 national hotness ranking reflects tight supply, strong demand from buyers priced out of Chicago metro, and a large stock of pre-1970 homes that drive cash buyer demand. <Link href="/markets/springfield-il" className="text-brand-primary hover:underline">See our full Springfield market →</Link>
          </p>
        </section>

        {/* ===== SECTION 1: Legal Overview ===== */}
        <section className="mb-12" id="il-legal-overview">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Section 1: Illinois Home Sale — Legal Overview
          </h2>

          <div className="space-y-5 text-gray-700">
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Illinois is NOT an attorney state</h3>
              <p className="text-sm">
                Title companies handle residential real estate closings in Illinois without attorney involvement required by law. This is fundamentally different from New York (Judiciary Law §484 requires licensed attorneys for all real estate instrument preparation) and different from most people's expectations if they've bought or sold homes in attorney-heavy states. The title company manages everything: escrow, closing disclosure preparation, payoff coordination, transfer tax collection, deed recording, and fund distribution. Buyers and sellers may retain attorneys for contract review — this is common in the Chicago metro for complex transactions — but it is optional, not mandatory.
              </p>
            </div>

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Seller Disclosure — Mandatory Under 765 ILCS 77/</h3>
              <p className="text-sm">
                Illinois requires sellers of 1-4 unit residential properties to complete and deliver a Residential Real Property Disclosure Statement to every buyer before contract signing, under the Residential Real Property Disclosure Act (765 ILCS 77/). The form covers known material defects in roof, foundation, structural components, plumbing, electrical, heating/cooling, presence of lead paint, radon, hazardous materials, flooding history, boundary disputes, and other known conditions. Unlike pre-2024 New York, Illinois does NOT allow sellers to skip the form in exchange for a cash credit. Selling "as-is" does NOT waive the disclosure obligation — the form must be delivered. It only means the seller won't make repairs. USA Home Buyers as buyer receives a completed disclosure form from every seller.
              </p>
            </div>

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Closing Timeline</h3>
              <p className="text-sm">
                Financed purchase: 30-45 days from signed contract. Cash purchase: 7-14 days (can be as few as 3-5 days with clean title). Estate/probate sales: add 30-90 days for executor to obtain Letters of Office before contract can be executed. Chicago metro: attorney involvement on buyer side is common, adding 5-10 business days for attorney review before binding contract. Downstate (Springfield): simpler title chain, faster searches, cash transactions commonly close in 7-10 days at local title companies.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Feature</th>
                  <th className="py-3 px-4 text-left">Illinois</th>
                  <th className="py-3 px-4 text-left">New York (for contrast)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Attorney required at closing', 'No', 'Yes — Judiciary Law §484'],
                  ['Closing conducted by', 'Title company (standard)', "Buyer's + seller's attorneys"],
                  ['Attorney review period', 'Optional / not standard', '1-2 weeks typical (pre-contract)'],
                  ['Seller disclosure required', 'Yes — 765 ILCS 77/ (mandatory)', 'Yes — RPL §462 (mandatory since 3/20/2024)'],
                  ['"AS IS" waives disclosure?', 'No — still required', 'No'],
                  ['Typical cash close time', '7-14 days', '30 days'],
                  ['Typical financed close time', '30-45 days', '60-90 days'],
                ].map(([feature, il, ny], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium">{feature}</td>
                    <td className="py-2 px-4 text-green-700">{il}</td>
                    <td className="py-2 px-4 text-gray-600">{ny}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== SECTION 2: Transfer Tax ===== */}
        <section className="mb-12" id="il-transfer-tax">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Section 2: Illinois Transfer Tax &amp; Closing Costs
          </h2>

          <div className="space-y-5 text-gray-700">
            <p>
              Illinois charges a state real estate transfer tax of <strong>$0.50 per $500 of consideration</strong> ($1.00 per $1,000 = 0.10% of sale price), paid by the seller at closing under 35 ILCS 200/31-10. Counties may add their own transfer tax under 35 ILCS 200/31-55. The complexity — and the significant cost variance within Illinois — comes from Chicago's large municipal transfer tax, which stacks on top of the state and county rates. Most downstate municipalities, including Springfield, impose no municipal transfer tax.
            </p>

            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Chicago's municipal transfer tax is massive</h3>
              <p className="text-sm">
                Chicago imposes a municipal transfer tax of $1.50 per $500 (seller) plus $3.75 per $500 (buyer) under Chicago Municipal Code. On a $400,000 Chicago sale: the seller pays state ($400) + Cook County ($200) + Chicago seller portion ($1,200) = $1,800; the buyer pays Chicago buyer portion ($3,000). Total combined all parties: $4,800. Compare this to a Springfield sale at the same price: seller pays only state ($400) + Sangamon County ($200) = $600. The Chicago municipal transfer tax is roughly 3x the entire Springfield tax bill for both parties combined.
              </p>
            </div>

            <h3 className="font-semibold text-brand-dark">Illinois Municipal Transfer Tax — Selected Cities</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Municipality</th>
                    <th className="py-3 px-4 text-left">Municipal Transfer Tax</th>
                    <th className="py-3 px-4 text-left">Combined Rate (state+county+muni)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Springfield', 'NONE — confirmed', '$0.75/$500 (0.15%)'],
                    ['Chicago', '$1.50/$500 seller + $3.75/$500 buyer', '$5.50/$500 combined (1.10%)'],
                    ['Evanston', '$5.00/$1,000 (0.50%)', '~$6.00/$1,000 combined'],
                    ['Oak Park', '$8.00/$1,000 (0.80%)', '~$9.00/$1,000 combined'],
                    ['Most downstate cities', 'None', '$0.75/$500 (0.15%) — state + county only'],
                  ].map(([city, muni, combined], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{city}</td>
                      <td className="py-2 px-4">{muni}</td>
                      <td className={`py-2 px-4 font-semibold ${city === 'Springfield' ? 'text-green-700' : ''}`}>{combined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold text-brand-dark mt-4">Transfer Tax Comparison — Three Illinois Scenarios</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Scenario</th>
                    <th className="py-3 px-4 text-left">Tax Layer</th>
                    <th className="py-3 px-4 text-left">Amount</th>
                    <th className="py-3 px-4 text-left">Who Pays</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['$187K Springfield (Sangamon Co.) — Our Market', 'IL State (35 ILCS 200/31-10)', '$187', 'Seller'],
                    ['', 'Sangamon County ($0.25/$500)', '$93.50', 'Seller'],
                    ['', 'Springfield Municipal', '$0', 'None'],
                    ['', 'Total seller →', '$280.50', 'Seller'],
                    ['$400K Chicago (Cook County + City)', 'IL State', '$400', 'Seller'],
                    ['', 'Cook County ($0.25/$500)', '$200', 'Seller'],
                    ['', 'Chicago — seller portion ($1.50/$500)', '$1,200', 'Seller'],
                    ['', 'Chicago — buyer portion ($3.75/$500)', '$3,000', 'Buyer'],
                    ['', 'Total seller →', '$1,800', 'Seller'],
                    ['$600K North Shore Suburb (Cook Co., no muni)', 'IL State', '$600', 'Seller'],
                    ['', 'Cook County ($0.25/$500)', '$300', 'Seller'],
                    ['', 'No municipal transfer tax', '$0', '—'],
                    ['', 'Total seller →', '$900', 'Seller'],
                  ].map(([scenario, tax, amount, who], i) => (
                    <tr key={i} className={scenario ? 'bg-white font-medium' : 'bg-gray-50'}>
                      <td className="py-2 px-4 text-sm">{scenario}</td>
                      <td className="py-2 px-4">{tax}</td>
                      <td className={`py-2 px-4 font-semibold ${tax.includes('Total') ? 'text-brand-primary' : ''}`}>{amount}</td>
                      <td className="py-2 px-4">{who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-2">
              <p className="text-sm text-green-800 font-semibold">
                When you sell to USA Home Buyers in Springfield, we cover all closing costs — transfer taxes, recording fees, title. You pay nothing at closing.
              </p>
            </div>

            <h3 className="font-semibold text-brand-dark">Other Seller Closing Costs (IL Typical)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Item</th>
                    <th className="py-3 px-4 text-left">Typical Range</th>
                    <th className="py-3 px-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Agent commission', '5-6% (if agent used)', 'Not applicable in cash direct sale'],
                    ['Owner\'s title insurance', '0.3-0.5% of sale price', 'Usually paid by seller in downstate IL'],
                    ['Prorated property taxes', 'Varies — often 6-12 months', 'IL taxes paid in arrears; seller credits buyer at closing'],
                    ['Recording fees', '$64 (Sangamon County)', 'Per standard document (8.5×11)'],
                    ['Attorney fee (optional)', '$500-$2,000', 'Optional; common in Chicago metro'],
                    ['Transfer taxes', 'See table above', 'We cover in direct sale'],
                    ['Mortgage payoff', 'Outstanding balance + per diem', 'Paid from proceeds at closing'],
                  ].map(([item, range, notes], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{item}</td>
                      <td className="py-2 px-4">{range}</td>
                      <td className="py-2 px-4 text-gray-600">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Source: 35 ILCS 200/31-10 (IL state transfer tax); Sangamon County Recorder fee schedule (sangamonil.gov); NorthSide Legal (northsidelegal.com); IL IDOR (tax.illinois.gov).</p>
          </div>
        </section>

        {/* ===== SECTION 3: Foreclosure ===== */}
        <section className="mb-12" id="il-foreclosure">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Section 3: Illinois Foreclosure Process
          </h2>

          <div className="space-y-5 text-gray-700">
            <p>
              Illinois is a <strong>100% judicial foreclosure state</strong>. Every residential foreclosure must proceed through the Circuit Court in the county where the property sits. There is no power-of-sale or non-judicial foreclosure option under the Illinois Mortgage Foreclosure Law (IMFL), 735 ILCS 5/15-1101 et seq. This requirement makes Illinois foreclosures significantly longer than non-judicial states like California or Texas — and it creates a window for distressed sellers to sell the property before the court confirms the auction sale.
            </p>

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Reinstatement Period — 735 ILCS 5/15-1602</h3>
              <p className="text-sm">
                The borrower may reinstate the loan — pay all arrears, attorney fees, and court costs — any time until 90 days after entry of the judgment of foreclosure. After this window closes, reinstatement is no longer available. The reinstatement amount is calculated by the lender and can be requested in writing. Most distressed homeowners don't have access to this cash, which is why selling to a cash buyer during the redemption period is the more common path.
              </p>
            </div>

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Redemption Period — 735 ILCS 5/15-1603</h3>
              <p className="text-sm">
                The right of redemption expires the LATER of: (a) 7 months from the date the mortgagor was served with the foreclosure summons, OR (b) 3 months from the date of entry of judgment of foreclosure. During this window, the borrower can sell the property and use the proceeds to pay off the full mortgage balance, preserving any remaining equity. This is the primary window in which selling to a cash buyer protects the homeowner's equity. Once the redemption period expires and the court confirms the auction sale, the homeowner's options disappear.
              </p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Consent Foreclosure — 735 ILCS 5/15-1402</h3>
              <p className="text-sm">
                A borrower with no equity who wants a clean exit may consent to a judgment vesting title directly in the lender. Upon entry of a consent foreclosure judgment, the borrower's reinstatement and redemption rights are eliminated. In exchange, the debt is typically satisfied — the lender usually waives the right to pursue a deficiency judgment. This is a last-resort option for genuinely underwater properties. If there is any equity at all, selling to a cash buyer first almost always produces a better outcome.
              </p>
            </div>

            <h3 className="font-semibold text-brand-dark">IL Foreclosure Timeline — Regional Variation</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Region</th>
                    <th className="py-3 px-4 text-left">Typical Timeline (1st missed payment → sale)</th>
                    <th className="py-3 px-4 text-left">Court</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Sangamon County (Springfield)', '12–15 months (uncontested); 18+ contested', 'Sangamon Co. Circuit Court, 200 S 9th St'],
                    ['DuPage, Will, Lake (collar suburbs)', '12–18 months', 'Respective Circuit Courts'],
                    ['Cook County (Chicago)', '24–36+ months (significant backlog)', 'Cook County Circuit Court'],
                    ['IL Statewide Average', '~12–18 months (excluding Cook Co. distortion)', 'Per respective Circuit Court'],
                  ].map(([region, timeline, court], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{region}</td>
                      <td className="py-2 px-4">{timeline}</td>
                      <td className="py-2 px-4 text-gray-600">{court}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Source: Vantage Group Legal (2025/2026 IL foreclosure guide); Steven Grace Law (Feb 2025 timeline); Illinois Legal Aid Online; 735 ILCS 5/15-1101 et seq.</p>
          </div>
        </section>

        {/* ===== SECTION 4: Probate ===== */}
        <section className="mb-12" id="il-probate">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Section 4: Illinois Probate Process
          </h2>

          <div className="space-y-5 text-gray-700">
            <p>
              Illinois probate is handled by <strong>Circuit Courts</strong> — there is no standalone Probate Court, no Surrogate's Court as in New York, and no Register of Wills as in Pennsylvania. Every county's Circuit Court has a probate division. Illinois probate is governed by the Illinois Probate Act of 1975 (755 ILCS 5/).
            </p>

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Small Estate Affidavit — 755 ILCS 5/25-1 — $150,000 Threshold (2025 Amendment)</h3>
              <p className="text-sm">
                The Illinois small estate affidavit allows heirs to collect personal property without opening a formal probate estate when total personal property value does not exceed <strong>$150,000</strong>. The 2025 amendment to 755 ILCS 5/25-1(a-5)(2)(A) raised this threshold from the prior $100,000. No court filing required. However — and this is critical — <strong>real property (houses, land, condos) is completely excluded from the small estate affidavit procedure</strong>, regardless of estate value. If the decedent owned any Illinois real estate, formal probate through the Circuit Court is required to establish authority to convey title.
              </p>
            </div>

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Independent Administration — 755 ILCS 5/28-1 — The Faster Path</h3>
              <p className="text-sm">
                Illinois offers independent administration as a simplified path for routine estates requiring formal probate. Under independent administration, the executor or administrator has authority to manage and sell estate assets — including real property — WITHOUT court approval for each transaction. Court supervision is only required for the final accounting or if an interested party objects. This is significantly faster and less expensive than supervised administration, where the executor must petition the court before accepting any offer on real property. For estates with real property to sell, requesting independent administration at the time the estate is opened is almost always the right choice.
              </p>
            </div>

            <h3 className="font-semibold text-brand-dark">IL Probate Timeline by Administration Type</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Administration Type</th>
                    <th className="py-3 px-4 text-left">Typical Timeline</th>
                    <th className="py-3 px-4 text-left">Court Approval for Property Sale?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Independent Administration (755 ILCS 5/28-1)', '6-9 months (uncontested)', 'No — executor has authority after Letters of Office'],
                    ['Supervised Administration', '12-18 months (uncontested)', 'Yes — petition required for each sale'],
                    ['Contested Estate', '18-36+ months', 'Yes — and contested at each step'],
                    ['Small Estate Affidavit (755 ILCS 5/25-1)', 'Days (no court)', 'N/A — personal property only; real estate excluded'],
                  ].map(([type, timeline, approval], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{type}</td>
                      <td className="py-2 px-4">{timeline}</td>
                      <td className="py-2 px-4 text-gray-600">{approval}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold text-brand-dark mt-4">Illinois Circuit Court Probate Divisions — Key Jurisdictions</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">County</th>
                    <th className="py-3 px-4 text-left">Circuit</th>
                    <th className="py-3 px-4 text-left">Address</th>
                    <th className="py-3 px-4 text-left">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Sangamon (Springfield)', '7th Judicial Circuit', '200 S 9th St, 7th Floor, Springfield IL 62701', '(217) 753-6674'],
                    ['Cook (Chicago)', 'Circuit Court of Cook County', '69 W Washington St, Chicago IL 60602', '(312) 603-6441'],
                    ['DuPage (Wheaton)', '18th Judicial Circuit', '505 N County Farm Rd, Wheaton IL 60187', '(630) 407-8700'],
                    ['Will (Joliet)', '12th Judicial Circuit', '14 W Jefferson St, Joliet IL 60432', '(815) 727-8592'],
                    ['Lake (Waukegan)', '19th Judicial Circuit', '18 N County St, Waukegan IL 60085', '(847) 377-3380'],
                  ].map(([county, circuit, address, phone], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`py-2 px-4 font-medium ${county.includes('Sangamon') ? 'text-brand-primary' : ''}`}>{county}</td>
                      <td className="py-2 px-4">{circuit}</td>
                      <td className="py-2 px-4 text-gray-600 text-xs">{address}</td>
                      <td className="py-2 px-4">{phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Source: sangamonil.gov (Sangamon); cookcountyclerkofcourt.org (Cook); respective county Circuit Court websites. Confirm phone/address before traveling — court locations may vary by division.</p>
          </div>
        </section>

        {/* ===== SECTION 5: IL Market Snapshot ===== */}
        <section className="mb-12" id="il-market-snapshot">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Section 5: Illinois Market Snapshot
          </h2>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">📍 Service Coverage Reminder</p>
            <p className="text-sm text-amber-700 mt-1">USA Home Buyers serves Springfield / Sangamon County only. Market data below is educational for Illinois sellers statewide. No service claims are implied outside Sangamon County.</p>
          </div>

          <div className="space-y-5 text-gray-700">
            <h3 className="font-semibold text-brand-dark">Illinois Statewide Housing Context</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Metric</th>
                    <th className="py-3 px-4 text-left">Illinois Statewide</th>
                    <th className="py-3 px-4 text-left">Springfield (Our Market)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Zillow ZHVI', '$282,909 (+3.8% YoY)', '$163,198 (+8.2% YoY)'],
                    ['Redfin Median Sale Price', '~$295,000', '$187,000 (+23% YoY)'],
                    ['Median Days on Market', '51 days', '27 days'],
                    ['Population', '~12.8M (state)', '113,330 (city)'],
                    ['National Hotness Rank', 'N/A (state)', '#10 nationally (Mar 2026)'],
                  ].map(([metric, statewide, spfld], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{metric}</td>
                      <td className="py-2 px-4">{statewide}</td>
                      <td className="py-2 px-4 font-semibold text-green-700">{spfld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold text-brand-dark mt-4">Illinois Regional Market Tiers (Educational)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Region / Market</th>
                    <th className="py-3 px-4 text-left">Approx. Median Home Value</th>
                    <th className="py-3 px-4 text-left">Character</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Chicago city (Cook County)', '~$345,000', 'Co-op market in Gold Coast/Lake Shore; condo market in River North/West Loop; large municipal transfer tax'],
                    ['DuPage County (collar suburb)', '~$450,000-$550,000', "Naperville, Wheaton, Downers Grove — Illinois's highest-income county"],
                    ['Lake County', '~$380,000-$480,000', 'North Shore + western Lake County; wide range'],
                    ['Will County', '~$290,000-$360,000', 'Southwest suburbs; Joliet, Bolingbrook; more affordable'],
                    ['Springfield / Sangamon Co.', '$163,198 ZHVI (our market)', '#10 national hotness; state capital; govt employment base'],
                    ['Peoria / Peoria Co.', '~$150,000-$180,000', 'Manufacturing, healthcare; slower appreciation currently'],
                    ['Rockford / Winnebago Co.', '~$130,000-$160,000', 'Former manufacturing; higher distress; active investor market'],
                    ['Champaign-Urbana', '~$200,000-$240,000', 'University of Illinois; stable rental demand'],
                    ['Decatur / Macon Co.', '~$95,000-$130,000', 'Manufacturing decline; among most affordable IL markets'],
                  ].map(([region, value, char], i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${region.includes('Springfield') ? 'bg-blue-50' : ''}`}>
                      <td className={`py-2 px-4 font-medium ${region.includes('Springfield') ? 'text-brand-primary' : ''}`}>{region}</td>
                      <td className="py-2 px-4 font-semibold">{value}</td>
                      <td className="py-2 px-4 text-gray-600">{char}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Regional value ranges are characterizations based on Zillow/Redfin county-level data reviewed April 2026. Not individually sourced single-date figures. Source: Zillow statewide ZHVI $282,909 +3.8% (zillow.com/home-values/21/il/); Redfin IL state market page. Springfield data: confirmed sources per market data package (April 18, 2026).</p>

            <div className="mt-4">
              <h3 className="font-semibold text-brand-dark mb-3">Key Illinois Market Dynamics for Sellers</h3>
              <ul className="space-y-3 text-sm">
                <li><strong>High property taxes statewide.</strong> Illinois property taxes are among the highest effective rates in the US. Sangamon County property taxpayers face significant annual tax burdens relative to home values. This motivates sellers who are carrying properties they can't quickly sell via retail — cash buyers absorb this cost after closing.</li>
                <li><strong>Population outmigration.</strong> Illinois has experienced net outmigration for several consecutive years — people leaving for lower-tax states. This creates a supply of sellers motivated to exit quickly. Source: US Census Bureau population estimates.</li>
                <li><strong>Chicago vs. Downstate divide.</strong> The Illinois housing market is effectively two separate markets. Chicago metro (high-cost, attorney involvement common, large municipal transfer tax, complex co-op market) vs. downstate (affordable, faster cash closings, title-company driven, more distress inventory). Springfield is a downstate market that happens to be unusually hot right now.</li>
                <li><strong>Judicial foreclosure creates distressed seller opportunity.</strong> Illinois's 100% judicial process is slower than non-judicial states, which means a larger pool of pre-foreclosure and early-redemption-period sellers who need alternatives to retail listing. We serve that population in Springfield.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA + FAQ */}
        <div className="my-8">
          <CashOfferForm
            variant="inline"
            headline="Sell Your Springfield IL House for Cash"
            subheadline="We serve Springfield / Sangamon County. Written offer in 24 hours. All closing costs covered."
            sourcePage="/sell-house-fast-illinois"
          />
        </div>

        <FAQSection items={FAQ_ITEMS} heading="Illinois Home Selling FAQ" />

        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield IL Market — Detailed Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/markets/springfield-il', label: 'Springfield IL Landing Page', desc: 'Full market overview, testimonials, comparison table' },
              { href: '/markets/springfield-il/inherited-property', label: 'Inherited Property', desc: 'Sangamon County probate — 755 ILCS 5/ explained' },
              { href: '/markets/springfield-il/foreclosure', label: 'Foreclosure', desc: '735 ILCS 5/15-1101 — stop foreclosure before the auction' },
              { href: '/markets/springfield-il/probate', label: 'Probate Sale', desc: 'Sangamon Co. Circuit Court, independent administration' },
              { href: '/markets/springfield-il/divorce-sale', label: 'Divorce Sale', desc: 'Equitable distribution — 750 ILCS 5/503' },
              { href: '/guides/sell-house-fast-springfield-il-2026', label: 'Springfield 2026 Guide', desc: 'Complete comparison: cash vs. retail vs. iBuyer' },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="bg-brand-light rounded-xl p-4 hover:bg-blue-100 transition-colors">
                <p className="font-bold text-brand-dark">{label}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Springfield IL Home?" sourcePage="/sell-house-fast-illinois" />
      </div>
    </>
  );
}
