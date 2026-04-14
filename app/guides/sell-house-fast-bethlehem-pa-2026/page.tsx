import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-bethlehem-pa-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast Bethlehem PA 2026',
  description:
    'How to sell your house fast in Bethlehem PA in 2026 — cash buyers, agent listings, FSBO, and iBuyers compared. Local market data, transfer tax, timelines. Northampton County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Bethlehem PA?',
    answer: "A direct sale to a cash buyer like USA Home Buyers is the fastest option — written offer in 24 hours, close in 7-14 days. According to Redfin (February 2026), Bethlehem's median days on market is 10 days for open listings, but that requires showings, inspections, and waiting on lender approval (typically 30+ days just for mortgage processing after an accepted offer). A cash sale skips all of that.",
  },
  {
    question: 'What is the transfer tax when selling a house in Bethlehem PA?',
    answer: "Bethlehem PA has a 2% total real estate transfer tax — 1% Pennsylvania state tax plus 1% City of Bethlehem local tax. By convention this is split 50/50 between buyer and seller. On a $320,000 home, the seller's share is $3,200. Source: City of Bethlehem Ordinance Article 335; confirmed not on the PA Transfer Tax Deviation list.",
  },
  {
    question: 'How much do Bethlehem PA cash buyers pay?',
    answer: "According to Redfin, Bethlehem's median sale price is $320,000 (February 2026). Cash buyers typically offer 70-80% of fair market value — approximately $224,000-$256,000 on a median home. South Side row homes near $245,000 yield cash offers of $172,000-$196,000. USA Home Buyers covers all closing costs, so the offer price is your net — no agent commission, no transfer tax deduction.",
  },
  {
    question: 'Should I list with an agent or sell for cash in Bethlehem PA?',
    answer: "It depends on your timeline and property condition. A retail listing makes sense for turnkey homes where you have 60+ days and can manage showings and negotiations. A cash sale makes sense when you need speed, have a distressed or dated property, want certainty (no deal fall-throughs), or have a complicated situation (foreclosure, inheritance, divorce). On a $320,000 Bethlehem home, a 5-6% agent commission is $16,000-$19,200 — plus repair costs, which on a pre-war South Side row home can easily run $15,000-$40,000.",
  },
  {
    question: 'Do cash home buyers operate in Bethlehem PA?',
    answer: "Yes. USA Home Buyers purchases homes throughout Bethlehem and Northampton County — South Side row homes, twins, single-family. We also serve Fountain Hill, Hellertown, Easton, Nazareth, Palmer Township, Northampton, and all surrounding communities. We're a Pennsylvania LLC with verified sales history. Check pennsylvania-demographics.com for local data.",
  },
  {
    question: '¿Cuál es la mejor forma de vender una casa rápido en Bethlehem PA?',
    answer: "La forma más rápida es vender directamente a un comprador de efectivo. En USA Home Buyers, ofrecemos efectivo en 24 horas y cerramos en 7-14 días. No se necesitan reparaciones, no hay comisiones de agente, y cubrimos todos los costos de cierre. El 31.3% de los residentes de Bethlehem son hispanos o latinos — hablamos español y servimos a la comunidad de South Side.",
  },
  {
    question: 'How do Bethlehem PA home sale costs compare to other PA cities?',
    answer: "Bethlehem's 2% transfer tax is the standard Pennsylvania rate — lower than Philadelphia (4.278% combined) and the same as most PA municipalities. Recording fees at the Northampton County Recorder of Deeds are $75.25 for the first 4 pages of a deed. Agent commissions (5-6%) are consistent with PA norms. The main variable for Bethlehem sellers is repair cost — pre-war row home stock typically requires more pre-sale investment than newer construction.",
  },
];

export default function BethlehemGuide2026Page() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('How to Sell Your House Fast in Bethlehem PA — 2026 Guide', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' › '}
          <Link href="/guides/sell-house-fast-harrisburg-pa-2026" className="hover:text-brand-primary">Seller Guides</Link>
          {' › '}
          <span>Bethlehem PA 2026</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          How to Sell Your House Fast in Bethlehem PA — 2026 Guide
        </h1>

        {/* TL;DR block — 60-90 words, AEO-optimized */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-5 mb-8">
          <p className="font-semibold text-brand-dark text-sm mb-1">TL;DR — Quick Answer</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            The fastest way to sell a house in Bethlehem PA is through a cash buyer. USA Home Buyers serves
            Bethlehem and Northampton County — written cash offer in 24 hours, close in 7-14 days, as-is,
            no repairs or agent fees. Bethlehem&apos;s median sale price is $320,000 (Redfin, February 2026).
            Transfer tax is 2% total (standard PA rate). Call <a href={`tel:${PHONE}`} className="text-brand-primary font-semibold hover:underline">{PHONE}</a> — 24/7 answering service.
          </p>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Bethlehem PA is a competitive seller&apos;s market in 2026 — but &quot;competitive&quot; doesn&apos;t mean every home sells fast.
          Pre-war row homes with deferred maintenance, complicated ownership situations, and properties in
          less desirable condition require a different approach. This guide covers your real options.
        </p>

        {/* Option 1: Cash buyer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Option 1: Sell to a Cash Home Buyer (Fastest)
          </h2>
          <p className="text-gray-700 mb-3">
            A direct cash sale is the fastest path. USA Home Buyers and similar companies purchase
            Bethlehem homes for cash in any condition — row homes, twins, single-family — without
            requiring repairs, showings, or lender approval.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Factor</th>
                  <th className="py-3 px-4 text-left">Detail</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Offer timeline', '24 hours after property information received'],
                  ['Closing timeline', '7-14 days from signed contract'],
                  ['Repairs required', 'None — sold as-is in any condition'],
                  ['Agent commissions', '$0 — no agent involved'],
                  ['Transfer tax', 'Covered by buyer (USA Home Buyers pays all closing costs)'],
                  ['Sale certainty', 'Guaranteed — cash, no financing contingency'],
                  ['Typical offer range', '70-80% of FMV ($224K-$256K on $320K median)'],
                ].map(([factor, detail], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{factor}</td>
                    <td className="py-3 px-4 text-gray-700">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm">
            <strong>Best for:</strong> Sellers who need speed, have a property in poor condition, are facing
            foreclosure or probate, can&apos;t manage showings, or want a guaranteed outcome without deal fall-throughs.
          </p>
        </section>

        {/* Option 2: Traditional listing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Option 2: List with a Real Estate Agent
          </h2>
          <p className="text-gray-700 mb-3">
            According to Redfin (February 2026), Bethlehem&apos;s median sale price is $320,000 — up 16.6% year-over-year.
            The market is competitive, with a Compete Score of 89/100 and homes receiving an average of 5 offers.
            In this environment, a well-positioned retail listing can command full market value.
          </p>
          <p className="text-gray-700 mb-3">
            The catch: &quot;well-positioned&quot; means turnkey or near-turnkey condition. South Side row homes with
            original systems, code issues, or deferred maintenance compete against a different buyer pool —
            investors and lower-income buyers with conventional financing who want work done before closing.
            That path is slower and less certain.
          </p>
          <p className="text-gray-700 mb-3">
            Agent commissions in Pennsylvania run 5-6% of the sale price. On a $320,000 Bethlehem home,
            that&apos;s $16,000-$19,200 in commission alone — before repairs, transfer tax share, staging, or
            carrying costs during the listing period.
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Best for:</strong> Move-in-ready homes in good condition, sellers with 60+ days and bandwidth
            to manage the process, and properties in desirable neighborhoods (Historic North Side, Northeast Bethlehem).
          </p>
        </section>

        {/* Option 3: FSBO */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Option 3: Sell By Owner (FSBO)
          </h2>
          <p className="text-gray-700 mb-3">
            Selling without an agent saves the listing commission but requires managing marketing, showings,
            negotiations, and the Pennsylvania disclosure process yourself. The National Association of Realtors
            reports FSBO homes typically sell for less than agent-listed homes — buyers know you&apos;re saving the
            commission and often negotiate accordingly.
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Best for:</strong> Experienced sellers with real estate knowledge, time, and a ready buyer
            (family member, neighbor, known investor). Not recommended for first-timers or distressed-property situations.
          </p>
        </section>

        {/* Option 4: iBuyer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Option 4: iBuyers (Opendoor, Offerpad, etc.)
          </h2>
          <p className="text-gray-700 mb-3">
            National iBuyers like Opendoor use algorithmic pricing and offer 90-95% of market value but
            require homes to be in good condition and within their service area. According to our competitor
            research, <strong>Opendoor does not actively make offers in Bethlehem, PA</strong> as of early 2026.
            Offerpad has similarly limited Lehigh Valley penetration.
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Best for:</strong> Sellers of newer, suburban homes in well-mapped markets. Not practical
            for Bethlehem&apos;s older urban housing stock or sellers outside iBuyer service zones.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Factor</th>
                  <th className="py-3 px-4 text-left">Cash Buyer</th>
                  <th className="py-3 px-4 text-left">Agent Listing</th>
                  <th className="py-3 px-4 text-left">FSBO</th>
                  <th className="py-3 px-4 text-left">iBuyer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Time to offer', '24 hours', '14-60 days', 'Variable', 'N/A in Bethlehem'],
                  ['Time to close', '7-14 days', '45-75 days', '45-75 days', 'N/A'],
                  ['Net proceeds', '70-80% of FMV', '~85-90% (after costs)', '~87-90%', 'N/A'],
                  ['Repairs required', 'None', 'Often yes', 'Seller-managed', 'Yes'],
                  ['Commission', '$0', '5-6%', '$0', 'N/A'],
                  ['Sale certainty', 'Guaranteed', '~80%', 'Lower', 'N/A'],
                  ['Condition required', 'Any', 'Good-excellent', 'Good', 'Good'],
                ].map(([factor, cash, agent, fsbo, ibuy], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{factor}</td>
                    <td className="py-3 px-4 text-brand-primary font-medium">{cash}</td>
                    <td className="py-3 px-4">{agent}</td>
                    <td className="py-3 px-4">{fsbo}</td>
                    <td className="py-3 px-4 text-gray-400">{ibuy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Sources: Redfin Bethlehem housing market data (February 2026); NAR data on FSBO outcomes;
            Opendoor service area verification (April 2026); City of Bethlehem Ordinance Article 335 (transfer tax).
          </p>
        </section>

        {/* Hablamos español */}
        <section className="mb-10 bg-green-50 border border-green-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">
            Hablamos Español — Para Propietarios Hispanos en Bethlehem
          </h2>
          <p className="text-gray-700 mb-3">
            Según el Censo de EE.UU. (ACS 2024), el 31.3% de los residentes de Bethlehem son hispanos o latinos.
            La comunidad de South Side tiene una historia larga y vibrante — muchos propietarios son de Puerto Rico,
            República Dominicana y México.
          </p>
          <p className="text-gray-700 mb-3">
            Si necesita vender su casa en Bethlehem — ya sea por herencia, divorcio, ejecución hipotecaria, o
            simplemente porque quiere mudarse — llámenos. Ofrecemos efectivo, cerramos rápido, y no se necesitan
            reparaciones. Hablamos su idioma.
          </p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-3 transition-colors text-sm">
            📞 Llámenos — Se Habla Español
          </a>
        </section>

        {/* CTA form */}
        <CashOfferForm
          variant="inline"
          headline="Get Your Bethlehem PA Cash Offer"
          subheadline="Written offer in 24 hours. We cover all closing costs — transfer tax, recording fees, everything."
          sourcePage="/guides/sell-house-fast-bethlehem-pa-2026"
        />

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Bethlehem PA House in 2026" />

        {/* Citations */}
        <section className="my-10 bg-gray-50 rounded-2xl p-6 text-sm">
          <h2 className="font-bold text-brand-dark mb-3">Sources</h2>
          <ul className="space-y-1 text-gray-600">
            <li>Redfin — Bethlehem PA Housing Market: <a href="https://www.redfin.com/city/1616/PA/Bethlehem/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">redfin.com →</a></li>
            <li>Zillow ZHVI Bethlehem PA: <a href="https://www.zillow.com/home-values/17008/bethlehem-pa/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">zillow.com →</a></li>
            <li>City of Bethlehem Transfer Tax Ordinance: <a href="https://www.bethlehem-pa.gov/Ordinances/R/Realty-Transfer-Tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">bethlehem-pa.gov →</a></li>
            <li>Northampton County Recorder of Deeds: <a href="https://norcopa.gov/recorder-of-deeds" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">norcopa.gov →</a></li>
            <li>U.S. Census Bureau ACS 2024 — Bethlehem Demographics: <a href="http://censusreporter.org/profiles/16000US4206088-bethlehem-pa/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">censusreporter.org →</a></li>
            <li>Pennsylvania Real Estate Seller Disclosure Act (68 P.S. § 7301 et seq.): <a href="https://www.dos.pa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">dos.pa.gov →</a></li>
            <li>Northampton County Mortgage Foreclosure Diversion Program: <a href="https://www.nccpa.org/geninfo/mortgage-foreclosure-diversion-program" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">nccpa.org →</a></li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Explore Bethlehem PA Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline">Bethlehem PA market overview →</Link></li>
            <li><Link href="/markets/bethlehem-pa/market-report" className="text-brand-primary hover:underline">Full Bethlehem market report →</Link></li>
            <li><Link href="/markets/bethlehem-pa/inherited-property" className="text-brand-primary hover:underline">Inherited property in Bethlehem →</Link></li>
            <li><Link href="/markets/bethlehem-pa/foreclosure" className="text-brand-primary hover:underline">Foreclosure help in Bethlehem →</Link></li>
            <li><Link href="/markets/bethlehem-pa/neighborhoods" className="text-brand-primary hover:underline">Bethlehem neighborhood guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Bethlehem PA Home?" sourcePage="/guides/sell-house-fast-bethlehem-pa-2026" />
      </div>
    </>
  );
}
