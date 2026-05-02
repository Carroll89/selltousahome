/* eslint-disable react/no-unescaped-entities */
/**
 * Batch 004 Phase 0 — Philadelphia, PA primary market landing page
 *
 * MANDATORY GUARDRAILS — MUST NOT BE REMOVED (Vigil audit 2026-05-01):
 *
 * GUARDRAIL A — Transfer Tax Split (MANDATORY):
 *   DO NOT publish buyer/seller allocation of the 4.578% total transfer tax.
 *   The customary 50/50 retail split does NOT apply to wholesale/cash closings without attorney confirmation.
 *   Required language: "Our team works with your title company and attorney to handle the full transfer tax
 *   calculation at closing." State total rate (4.578%) only.
 *
 * GUARDRAIL B — Orphans' Court / Estate Sales (MANDATORY):
 *   DO NOT characterize Philadelphia probate as simple, fast, or routine.
 *   Required language: "Philadelphia estate sales require Orphans' Court approval. We work with experienced
 *   Philadelphia estate attorneys to ensure smooth transactions."
 *   ALL specific estate sale content routes to attorney review before publishing.
 *
 * Additional guardrails:
 *  - Combined transfer tax 4.578%: PUBLIC_READY (phila.gov + Saul Ewing LLP, eff. July 1, 2025)
 *  - Recording fee ~$262.75 (eff. July 1, 2025): PUBLIC_READY (phila.gov announcement)
 *  - Transfer tax buyer/seller split: BLOCKED — Guardrail A
 *  - Orphans' Court process detail: BLOCKED — Guardrail B
 *  - Dept of Records address: NOT PUBLISHED (NEEDS_OFFICIAL_CONFIRMATION)
 *  - Orphans' Court / Register of Wills address: NOT PUBLISHED (NEEDS_OFFICIAL_CONFIRMATION)
 *  - Philadelphia property tax rate: NOT PUBLISHED (NEEDS_OFFICIAL_CONFIRMATION)
 *  - Foreclosure diversion program: NOT PUBLISHED (NEEDS_OFFICIAL_CONFIRMATION)
 *  - Foreclosure timelines: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Seller closing cost percentages: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Geographic scope: City and County of Philadelphia ONLY
 *    NOT Camden NJ, Wilmington DE, Montgomery County PA, Delaware County PA
 *
 * Philadelphia estate sale sub-page: MUST be attorney-reviewed before launch.
 * This primary page: INDEX. Sub-pages (row house, estate, North Philly) are Phase 1 — not in this build.
 */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { philadelphiaPALocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'We Buy Philadelphia Houses | USA Home Buyers',
  description:
    'Sell your Philadelphia row house fast for cash. Any neighborhood, any condition. No repairs, no agent fees. We handle Philly transfer tax and closing paperwork. Call 888-274-5006.',
  alternates: { canonical: `${SITE_URL}/sell-my-house-fast-philadelphia-pa` },
};

const PHONE = '888-274-5006';

const FAQ_ITEMS = [
  {
    question: 'What is the Philadelphia transfer tax and how does it affect my sale?',
    answer:
      "Philadelphia's combined transfer tax is 4.578% of the sale price — City of Philadelphia 3.578% plus Pennsylvania state 1%, effective July 1, 2025. It is one of the highest transfer taxes in the country. Our team works with your title company and attorney to handle the full transfer tax calculation at closing. Sources: phila.gov and Saul Ewing LLP.",
  },
  {
    question: 'How fast can you close on a Philadelphia row home?',
    answer:
      'Typically 14–21 days from accepted offer. No lender approval delays, no appraisal contingencies, no inspection holdups. Cash closes move at the speed of title review.',
  },
  {
    question: 'I inherited a Philadelphia property. Can you help with an estate sale?',
    answer:
      'Yes. Philadelphia estate sales require Orphans\u2019 Court approval. We work with experienced Philadelphia estate attorneys to ensure smooth transactions. Reach out early — the court process has its own timeline that we cannot shortcut, but we can work alongside your attorney to be ready to close as soon as the estate is cleared.',
  },
  {
    question: 'Do you buy Philadelphia homes that need major repairs?',
    answer:
      'Yes — we buy Philly row homes as-is. Foundation issues, roof damage, outdated kitchens, fire damage, unoccupied and deteriorating. You do not spend a dollar before we close.',
  },
  {
    question: 'What neighborhoods in Philadelphia do you buy in?',
    answer:
      'All of Philadelphia — South Philly, North Philly, West Philly, Northeast Philly, Kensington, Germantown, Roxborough, Manayunk, Grays Ferry, Overbrook, and everywhere in between. We do not limit to specific ZIP codes.',
  },
  {
    question: 'My Philadelphia home is in foreclosure. What are my options?',
    answer:
      'Pennsylvania is a judicial foreclosure state — the court process must reach final judgment before a sheriff\'s sale can proceed. A cash sale before that judgment may give you more control over the outcome. Time is the critical variable. Consult with your attorney and reach out to us early.',
  },
  {
    question: 'What are the total costs of selling my Philadelphia home to you?',
    answer:
      "You pay no agent commission, no staging costs, and no repair bills. The main closing costs are the Philadelphia transfer tax (total 4.578% — handled with your attorney and title company) and standard deed recording fees (approximately $262.75 effective July 1, 2025). We walk through every line item before you sign. Source: phila.gov.",
  },
];

const localBusinessSchema = {
  ...philadelphiaPALocalBusinessSchema,
  telephone: PHONE,
  url: `${SITE_URL}/sell-my-house-fast-philadelphia-pa`,
  // GUARDRAIL A: description intentionally does not include buyer/seller transfer tax split
  // GUARDRAIL B: description intentionally does not characterize Orphans' Court as simple or fast
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Pennsylvania', item: `${SITE_URL}/sell-house-fast-pennsylvania` },
    { '@type': 'ListItem', position: 3, name: 'Sell My House Fast Philadelphia PA', item: `${SITE_URL}/sell-my-house-fast-philadelphia-pa` },
  ],
};

export default function PhiladelphiaPAPage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, faqSchema(FAQ_ITEMS), breadcrumbSchema]} />

      {/* Hero Section */}
      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-blue-950 to-brand-dark opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Pennsylvania Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              We Buy Houses in Philadelphia — Cash Offers for Row Homes, Any Neighborhood, Any Condition
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases Philadelphia row homes, twins, and single-family houses in all
                neighborhoods — South Philly, North Philly, West Philly, Northeast Philly, Kensington, Fishtown,
                Hunting Park, Tioga, Germantown, Manayunk, and beyond. Cash offer in 24 hours. Close in 14–21
                days. No repairs, no agent fees. We handle Philly's transfer tax process with your attorney
                and title company. Call {PHONE}.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              Skip the 58-day Philadelphia listing average. One clear offer, one closing date — no financing
              contingency fallouts, no open houses.
            </p>
            <ul className="space-y-2 mb-6 text-blue-100 text-sm">
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Skip the 58-day average market wait.</strong> Philadelphia homes averaged 58–61 days on market in March 2026 (Redfin). Our cash offer closes on your schedule.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">We buy Philly row homes as-is.</strong> Brick row in North Philly, West Philly twin, South Philly rowhome — any condition, no repairs required.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">We handle the Philadelphia transfer tax.</strong> Philadelphia's combined transfer tax is 4.578% of the sale price. Our team works with your title company and attorney to handle the full calculation at closing.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Real Philadelphia market data.</strong> The median sale price in Philly was $280,000 in March 2026 (+1.8% YoY, Redfin).</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">One clear offer, no surprises.</strong> Average homes sold ~3% below list price in March 2026. With us, you get a defined number, a defined closing date, and no negotiation drama.</span></li>
            </ul>
            <a
              href={`tel:+1${PHONE.replace(/-/g, '')}`}
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call {PHONE} — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Philadelphia Cash Offer"
              subheadline="No repairs. No open houses. We handle Philly's transfer tax and closing paperwork with your attorney."
              sourcePage="/sell-my-house-fast-philadelphia-pa"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        {/* Market Context */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Philadelphia Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            According to <a href="https://www.redfin.com/city/15502/PA/Philadelphia/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>,
            Philadelphia's median sale price is $280,000 (+1.8% year-over-year) with 58–61 days on market and a Compete
            Score of 52/100. Hot homes go pending in ~24 days. Average homes sold ~3% below list price.
          </p>
          <p className="text-gray-700 mb-4">
            Philadelphia has one of the highest combined real estate transfer taxes in the country:{' '}
            <strong>4.578% total</strong> — City of Philadelphia 3.578% + Pennsylvania state 1%,{' '}
            <strong>effective July 1, 2025</strong>. Our team works with your title company and attorney to handle
            the full transfer tax calculation at closing.{' '}
            <a href="https://www.phila.gov/services/payments-assistance-taxes/taxes/property-and-real-estate-taxes/realty-transfer-tax/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Source: phila.gov</a>.
          </p>
          <p className="text-gray-700 mb-4">
            Philadelphia deed recording fees increased to approximately <strong>$262.75 effective July 1, 2025</strong>.
            We factor all recording costs into our closing process — nothing hits you unexpectedly at the table.
            Source: phila.gov official announcement.
          </p>
          <p className="text-gray-700 mb-4">
            Pennsylvania is a <strong>judicial foreclosure state</strong>. If you are in the court process, a cash
            sale before final judgment may give you more options. Time is the critical variable — reach out early.
          </p>
          <p className="text-gray-700 mb-4">
            Philadelphia sellers are entitled to a <strong>3-day right to review and rescind</strong> any home
            purchase contract. No pressure — you have time to review our offer with no penalty.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Philadelphia, PA</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$280,000 (+1.8% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$207/sq ft (+3.5% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Avg days on market</td><td className="p-3">58–61 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">52 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                {/* GUARDRAIL A: Only total rate published — NO buyer/seller split */}
                <tr className="bg-white"><td className="p-3 font-medium">Combined transfer tax</td><td className="p-3">4.578% total (City 3.578% + PA state 1%, eff. July 1, 2025) — handled at closing with your attorney and title company</td><td className="p-3 text-gray-500">phila.gov + Saul Ewing LLP</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Recording fee</td><td className="p-3">~$262.75 (eff. July 1, 2025)</td><td className="p-3 text-gray-500">phila.gov official announcement</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Pennsylvania; court process required before sheriff's sale</td><td className="p-3 text-gray-500">Pennsylvania law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Right to rescind</td><td className="p-3">3-day review period for sellers on purchase contracts</td><td className="p-3 text-gray-500">Pennsylvania law</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Philadelphia County (coterminous city/county)</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Market data: Redfin March 2026. Transfer tax and recording fee: phila.gov (official). Buyer/seller transfer tax allocation not published — handled with your attorney at closing per Guardrail A. Seller closing cost percentages not published per Vigil audit guardrails.</p>
        </section>

        {/* Trust Signals */}
        <section className="my-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Philadelphia Sellers Choose USA Home Buyers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Row house expertise</h3>
              <p className="text-gray-700 text-sm">
                We buy Philadelphia row homes — 2-story brick, 3-story, twins, triples. Shared party walls, marble
                stoops, flat roofs. We have closed on them all. We speak the language of Philadelphia housing stock.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Transfer tax transparency</h3>
              <p className="text-gray-700 text-sm">
                Philadelphia has one of the highest combined transfer taxes in the country — 4.578% of the sale price.
                Our team works with your title company and attorney to handle every aspect of the transfer tax
                calculation at closing. No surprises.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Estate sale experience</h3>
              {/* GUARDRAIL B: Must use this exact language — cannot characterize as simple or fast */}
              <p className="text-gray-700 text-sm">
                Philadelphia estate sales require Orphans' Court approval. We work with experienced Philadelphia estate
                attorneys to ensure smooth transactions. Reach out early — the court process has its own timeline, but
                we coordinate alongside your attorney.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Speed advantage without pressure</h3>
              <p className="text-gray-700 text-sm">
                Hot Philadelphia homes go pending in ~24 days. Our cash process skips the listing and financing wait.
                And Pennsylvania law gives you 3 days to review any purchase contract at no penalty — no pressure
                from us.
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Philadelphia Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout all of Philadelphia — every ZIP code, every condition:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              'South Philly', 'North Philly', 'West Philly', 'Northeast Philly', 'Kensington',
              'Fishtown', 'Frankford', 'Hunting Park', 'Tioga', 'Germantown', 'Roxborough',
              'Manayunk', 'Grays Ferry', 'Overbrook', 'Port Richmond', 'Bridesburg',
              'Olney', 'Logan', 'Feltonville',
            ].map((n) => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            We cover the entire City and County of Philadelphia. We do not serve Camden, NJ; Wilmington, DE; or
            Montgomery County, PA — those are separate states and counties with different legal requirements.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Philadelphia, PA" />

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Philadelphia Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours. We handle Philly's transfer tax and closing paperwork."
          sourcePage="/sell-my-house-fast-philadelphia-pa"
        />
      </div>
    </>
  );
}
