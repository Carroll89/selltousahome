/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { organizationSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell Your House Fast in Pennsylvania',
  description:
    'USA Home Buyers buys houses across Pennsylvania for cash — as-is, any condition, close in 7-14 days. No repairs, no agent fees. Serving Harrisburg, Allentown, State College, and beyond.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-pennsylvania` },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house in Pennsylvania?',
    answer:
      "With a cash buyer like USA Home Buyers, you can close in 7-14 days anywhere in Pennsylvania. Traditional MLS listings take 45-60+ days after offer acceptance — and that's after getting an offer, which in slower markets can take weeks.",
  },
  {
    question: 'What is Pennsylvania\'s realty transfer tax?',
    answer:
      "Pennsylvania's base realty transfer tax is 1% (state) plus a local component that varies by municipality. Most Pennsylvania municipalities charge 2% total. Some charge more: State College Borough charges 3.00%, and Philadelphia charges 4.278% combined. Always verify the rate for your specific municipality before closing.",
  },
  {
    question: 'Is Pennsylvania a judicial foreclosure state?',
    answer:
      "Yes. Pennsylvania only allows judicial foreclosure — every case goes through the county Court of Common Pleas. The full process takes 9-18 months from first missed payment to sheriff's sale. There is no redemption period after the sheriff's sale. Act 6 of 1974 requires a 30-day notice of intent before filing, and HEMAP notification is required as well.",
  },
  {
    question: 'Does Pennsylvania require an attorney at closing?',
    answer:
      "No. Pennsylvania doesn't require an attorney at closing — most transactions use a title company as settlement agent. However, many buyers and sellers choose to use a real estate attorney, especially for estate sales, short sales, or complex transactions.",
  },
  {
    question: 'What areas of Pennsylvania does USA Home Buyers serve?',
    answer:
      "We currently have active markets in Central Pennsylvania (Harrisburg and Dauphin County), the Lehigh Valley (Allentown, Bethlehem, Easton), Greater Philadelphia (King of Prussia, Montgomery County), and State College / Centre County. We're expanding across PA — call us if you're not sure whether we cover your area.",
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Sell House Fast Pennsylvania', item: `${SITE_URL}/sell-house-fast-pennsylvania` },
  ],
};

const PA_MARKETS = [
  {
    city: 'Harrisburg',
    county: 'Dauphin County',
    slug: 'harrisburg-pa',
    highlight: 'Central PA hub, 5-day median DOM, 2% transfer tax',
    surrounding: 'Camp Hill, Mechanicsburg, Carlisle, Steelton',
  },
  {
    city: 'Allentown',
    county: 'Lehigh County',
    slug: 'allentown-pa',
    highlight: 'Lehigh Valley, 2.5% transfer tax, strong Hispanic market (Hablamos español)',
    surrounding: 'Bethlehem, Easton, Whitehall, Northampton',
  },
  {
    city: 'King of Prussia',
    county: 'Montgomery County',
    slug: 'king-of-prussia-pa',
    highlight: 'Greater Philadelphia, Montgomery County, high-value suburban market',
    surrounding: 'Norristown, Conshohocken, Wayne, Plymouth Meeting',
  },
  {
    city: 'State College',
    county: 'Centre County',
    slug: 'state-college-pa',
    highlight: 'Penn State market, 3% transfer tax (Borough), 73% renter-occupied, landlord exits',
    surrounding: 'Bellefonte, Boalsburg, Port Matilda, Philipsburg',
  },
];

export default function SellHouseFastPennsylvaniaPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumbSchema, faqSchema(FAQ_ITEMS)]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Sell Your House Fast in Pennsylvania — Any City, Any Condition
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            USA Home Buyers purchases houses across Pennsylvania for cash — as-is, in any condition,
            with written offers in 24 hours and closings in 7-14 days. No repairs, no agent fees,
            no transfer tax surprises.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-white text-brand-dark font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            📞 Call Now — We Answer 24/7
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer: Sell Your House Fast in Pennsylvania</h2>
          <p className="text-gray-700 text-sm leading-relaxed">USA Home Buyers purchases houses throughout Pennsylvania for cash — as-is, in any condition, with no repairs and no agent fees. We serve 11 markets across PA: Harrisburg, Allentown, Bethlehem, Lancaster, York, Reading, Erie, State College, and King of Prussia. According to the Zillow Home Value Index, Pennsylvania's statewide median home value is approximately $287,000 (early 2026). Pennsylvania charges a 2% transfer tax (1% state + 1% local) — we cover all closing costs. Written offer within 24 hours, closing in 7–14 days.</p>
        </div>


        {/* PA Markets Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Our Pennsylvania Markets</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {PA_MARKETS.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="block border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-brand-dark">{market.city}</h3>
                    <p className="text-xs text-gray-500">{market.county}</p>
                  </div>
                  <span className="text-brand-primary text-sm">→</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">{market.highlight}</p>
                <p className="text-xs text-gray-400">Also serving: {market.surrounding}</p>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Don&apos;t see your city? Call us at{' '}
            <a href={`tel:${PHONE}`} className="text-brand-primary underline">{PHONE}</a>
            {' '}— we may be able to help or refer you to a trusted partner.
          </p>
        </section>

        {/* PA Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a House Fast in Pennsylvania — What to Know</h2>
          <div className="space-y-4 text-gray-700">
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Transfer tax varies by municipality</h3>
              <p className="text-sm">
                Pennsylvania&apos;s base realty transfer tax is 1% (state portion), but local municipalities add
                their own — and the rates vary significantly. Most PA municipalities total 2.00%, but
                State College Borough charges 3.00%, Allentown charges 2.5%, and Philadelphia charges 4.278%.
                Always verify the rate for your specific municipality before signing anything.
                Source:{' '}
                <a href="https://centrecountypa.gov/420/Realty-Transfer-Tax-Rates" target="_blank" rel="noopener noreferrer" className="underline text-brand-primary">
                  Centre County RTT Rates
                </a>
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Judicial foreclosure only</h3>
              <p className="text-sm">
                Pennsylvania requires all foreclosures to go through the county Court of Common Pleas.
                This makes the process longer (9-18 months is typical) but also gives homeowners more
                notice and more time to act. Act 6 of 1974 requires a 30-day pre-suit notice, and
                lenders must notify borrowers of HEMAP assistance options.
                Source:{' '}
                <a href="https://www.nolo.com/legal-encyclopedia/pennsylvania-foreclosure-laws-procedures.html" target="_blank" rel="noopener noreferrer" className="underline text-brand-primary">
                  PA Foreclosure Laws (Nolo)
                </a>
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">No attorney required at closing</h3>
              <p className="text-sm">
                Pennsylvania doesn&apos;t require legal counsel at closing. Title companies typically handle
                settlement and deed preparation. For complex situations (estate sales, liens, short sales),
                using a real estate attorney is recommended.
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">PA inheritance tax applies to estate properties</h3>
              <p className="text-sm">
                Pennsylvania charges an inheritance tax on assets inherited from a decedent, including
                real estate. Rates: 0% (surviving spouse), 4.5% (children/lineal descendants), 12%
                (siblings), 15% (others). The tax is separate from the real estate closing and is paid
                by the estate to the PA Department of Revenue.
                Source:{' '}
                <a href="https://www.revenue.pa.gov/TaxesAndPrograms/InheritanceTax/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="underline text-brand-primary">
                  PA Inheritance Tax (revenue.pa.gov)
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION: Legal Overview ===== */}
        <section className="mb-12" id="pa-legal-overview">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — PA Home Sale Process</p>
            <p className="text-sm text-amber-700 mt-1">Pennsylvania closings are handled by title companies (not attorneys), take 30-60 days for traditional sales. The state charges a 1% transfer tax; local municipalities add their own (most total 2%). Judicial-only foreclosure state — 9-18 months from missed payment to sheriff&apos;s sale. No redemption period after sheriff&apos;s sale.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Home Sales Work in Pennsylvania</h2>
          <div className="space-y-4 text-gray-700">
            <p>Pennsylvania is a title-company state — unlike some states, you don&apos;t need a lawyer present at closing. Settlement agents (title companies) handle the paperwork, coordinate payoffs, and transfer the deed. That said, for complex situations like estate sales, short sales, or disputed titles, hiring a real estate attorney is money well spent.</p>
            <p>Typical closing timeline from accepted offer to keys: <strong>30-45 days</strong> for traditional financed sales; <strong>7-14 days</strong> for cash sales. The Pennsylvania Agreement of Sale is the standard contract — it includes inspection contingencies, mortgage contingencies, and a defined settlement date. Cash buyers waive financing and inspection contingencies, which compresses the timeline significantly.</p>
            <p>Pennsylvania sellers are required to complete a <strong>Seller&apos;s Property Disclosure Statement</strong> (68 Pa. C.S. § 7304) disclosing known material defects. Cash buyers who purchase as-is receive this form but typically waive the inspection contingency. Federal lead paint disclosure is required for pre-1978 homes — relevant in most of our PA markets, which have significant pre-WWII housing stock.</p>
            <p className="text-sm text-gray-500">According to <a href="https://www.dos.pa.gov/BusinessCharities/RealEstate/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Pennsylvania Department of State — Real Estate Commission</a> and 68 Pa. C.S. § 7304.</p>
          </div>
        </section>

        {/* ===== SECTION: Transfer Tax & Closing Costs ===== */}
        <section className="mb-12" id="pa-transfer-tax">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — PA Transfer Tax</p>
            <p className="text-sm text-amber-700 mt-1">Pennsylvania&apos;s realty transfer tax is 1% state + local rate (usually 1%, sometimes more). Most PA sellers pay 2% total. Seller and buyer typically split it 50/50 by custom — but it&apos;s negotiable. USA Home Buyers covers all closing costs including transfer tax.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax &amp; Closing Costs in Pennsylvania</h2>
          <div className="space-y-4 text-gray-700">
            <p>Pennsylvania imposes a <strong>1% state realty transfer tax</strong> on all real estate transactions, plus a local tax levied by the municipality where the property sits. By custom, buyers and sellers typically split the combined tax evenly — but this is negotiable and should be specified in the Agreement of Sale.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Municipality</th>
                    <th className="py-3 px-4 text-left">State Tax</th>
                    <th className="py-3 px-4 text-left">Local Tax</th>
                    <th className="py-3 px-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Most PA municipalities', '1.00%', '1.00%', '2.00%'],
                    ['Allentown (City)', '1.00%', '1.50%', '2.50%'],
                    ['State College Borough', '1.00%', '2.00%', '3.00%'],
                    ['Philadelphia (City+School)', '1.00%', '3.278%', '4.278%'],
                    ['Harrisburg', '1.00%', '1.00%', '2.00%'],
                    ['Lancaster City', '1.00%', '1.00%', '2.00%'],
                    ['York City', '1.00%', '1.00%', '2.00%'],
                    ['Bethlehem (City)', '1.00%', '1.00%', '2.00%'],
                    ['Erie (City)', '1.00%', '1.00%', '2.00%'],
                    ['Reading (City)', '1.00%', '1.00%', '2.00%'],
                  ].map(([muni, state, local, total], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{muni}</td>
                      <td className="py-2 px-4">{state}</td>
                      <td className="py-2 px-4">{local}</td>
                      <td className="py-2 px-4 font-bold text-brand-primary">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Source: <a href="https://www.revenue.pa.gov/TaxesAndPrograms/RealtyCTransferTax/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PA Department of Revenue — Realty Transfer Tax</a>. Always verify your specific municipality&apos;s rate before closing.</p>
            <div className="bg-blue-50 rounded-xl p-5 mt-4">
              <h3 className="font-bold text-brand-dark mb-2">Estimated Total Closing Costs — $200K Sale in PA</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Realty transfer tax (seller&apos;s share): <strong>$2,000</strong> (at 2% split 50/50)</li>
                <li>• Title insurance (owner&apos;s policy): <strong>$800-$1,200</strong></li>
                <li>• Settlement/closing fee: <strong>$300-$600</strong></li>
                <li>• Recording fees (deed + mortgage release): <strong>$100-$200</strong></li>
                <li>• Real estate agent commission (if applicable): <strong>$10,000-$12,000</strong> (5-6%)</li>
                <li>• Misc. (HOA letters, wiring fees): <strong>$100-$300</strong></li>
                <li className="pt-2 font-bold text-brand-dark">Traditional sale total: ~$13,300-$14,300</li>
                <li className="font-bold text-green-700">Cash sale with USA Home Buyers: $0 (we cover all closing costs)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== SECTION: Foreclosure Process ===== */}
        <section className="mb-12" id="pa-foreclosure">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — PA Foreclosure</p>
            <p className="text-sm text-amber-700 mt-1">Pennsylvania is judicial-only. Every foreclosure goes through court. Process takes 9-18 months from first missed payment. No redemption period after sheriff&apos;s sale — once it&apos;s sold, it&apos;s sold. You can sell your home up until the moment the sheriff&apos;s sale is confirmed.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Pennsylvania Foreclosure Process — What Sellers Need to Know</h2>
          <div className="space-y-4 text-gray-700">
            <p>Pennsylvania is a <strong>judicial foreclosure state</strong>, meaning every foreclosure must go through the county Court of Common Pleas. There is no non-judicial (power-of-sale) option. This is consumer-protective — it means you have more time and more legal process before losing your home — but it also means the process is lengthy and public.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Phase</th>
                    <th className="py-3 px-4 text-left">Timing</th>
                    <th className="py-3 px-4 text-left">What Happens</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Missed payments', 'Month 1-3', 'Lender sends notices. No legal action yet.'],
                    ['Act 6 / Act 91 notice', 'Month 3-4', '30-day pre-foreclosure notice required. HEMAP assistance notification.'],
                    ['Complaint filed', 'Month 4-6', 'Lender files in Court of Common Pleas. You are served.'],
                    ['Answer / response window', 'Month 5-7', 'You have 20 days to respond. Negotiate or fight here.'],
                    ['Judgment entered', 'Month 6-10', 'If no defense or settlement, court enters judgment for lender.'],
                    ['Sheriff&apos;s sale scheduled', 'Month 8-14', 'Sheriff&apos;s sale scheduled at least 30 days out. Published publicly.'],
                    ['Sheriff&apos;s sale', 'Month 9-18', 'Property sold at auction. No post-sale redemption period in PA.'],
                  ].map(([phase, timing, what], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{phase}</td>
                      <td className="py-2 px-4 text-orange-600">{timing}</td>
                      <td className="py-2 px-4">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p><strong>The most important fact:</strong> You can sell your home at any point in this process — right up until the sheriff&apos;s sale is confirmed. A cash buyer can close in 7-14 days. If you&apos;re in foreclosure, the question isn&apos;t whether you can sell — it&apos;s whether you act before the auction date.</p>
            <p className="text-sm text-gray-500">According to <a href="https://www.hud.gov/states/pennsylvania/homeownership/foreclosure" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">HUD.gov — Pennsylvania Foreclosure Resources</a> and 35 P.S. § 1680.402 (Act 91 of 1983).</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/markets/harrisburg-pa/foreclosure" className="text-sm text-brand-primary hover:underline">Foreclosure sale in Harrisburg →</Link>
              <Link href="/markets/allentown-pa/foreclosure" className="text-sm text-brand-primary hover:underline">Foreclosure sale in Allentown →</Link>
              <Link href="/blog/sell-house-foreclosure-pennsylvania" className="text-sm text-brand-primary hover:underline">Blog: Selling in PA Foreclosure →</Link>
            </div>
          </div>
        </section>

        {/* ===== SECTION: Probate Overview ===== */}
        <section className="mb-12" id="pa-probate">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — PA Probate</p>
            <p className="text-sm text-amber-700 mt-1">Pennsylvania probate takes 9-18 months for simple estates, up to 24+ for complex ones. You CAN sell during probate — but the deed doesn&apos;t transfer until the executor has Letters Testamentary. Small estates under $50,000 may qualify for simplified process. PA charges an inheritance tax (0% spouse, 4.5% children, 12% siblings).</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Property in Pennsylvania — Probate Overview</h2>
          <div className="space-y-4 text-gray-700">
            <p>Pennsylvania probate runs through the county Register of Wills — each county has its own office. If someone died owning real estate solely in their name, that property is part of the probate estate and cannot be deeded to a buyer until an executor or administrator has legal authority from the court.</p>
            <p>That authority comes in the form of <strong>Letters Testamentary</strong> (if there was a will) or <strong>Letters of Administration</strong> (if not). Once issued, the executor can market, contract, and ultimately convey the property.</p>
            <p><strong>Can you sell during probate?</strong> Yes. The house can be listed, shown, and put under contract while probate is pending. The deed just can&apos;t transfer until Letters are issued. Cash buyers regularly structure deals around probate timing — it&apos;s standard, not unusual.</p>
            <p><strong>Small estate shortcut:</strong> Pennsylvania allows a simplified process for estates with gross assets under <strong>$50,000</strong> (excluding jointly-held property and beneficiary-designated assets). The surviving spouse or family members can file a simple affidavit at the Register of Wills office instead of full probate. If real estate is the primary asset, full probate is typically still required regardless of size.</p>
            <p><strong>PA Inheritance Tax rates:</strong> Surviving spouse: 0% | Lineal descendants (children, grandchildren): 4.5% | Siblings: 12% | Others: 15%. This tax is separate from the real estate closing and is paid by the estate to the PA Department of Revenue, due 9 months from date of death (early payment within 3 months gets 5% discount).</p>
            <p className="text-sm text-gray-500">According to <a href="https://www.revenue.pa.gov/TaxesAndPrograms/InheritanceTax/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PA Department of Revenue — Inheritance Tax</a> and 20 Pa. C.S. (Decedents, Estates and Fiduciaries Code).</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/markets/harrisburg-pa/inherited-property" className="text-sm text-brand-primary hover:underline">Inherited property in Harrisburg →</Link>
              <Link href="/markets/lancaster-pa/probate" className="text-sm text-brand-primary hover:underline">Probate sale in Lancaster →</Link>
              <Link href="/blog/probate-timeline-pennsylvania" className="text-sm text-brand-primary hover:underline">Blog: PA Probate Timeline →</Link>
              <Link href="/blog/sell-inherited-house-pennsylvania" className="text-sm text-brand-primary hover:underline">Blog: Selling Inherited House in PA →</Link>
            </div>
          </div>
        </section>

        {/* ===== SECTION: Market Snapshot ===== */}
        <section className="mb-12" id="pa-market-snapshot">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — PA Market Snapshot</p>
            <p className="text-sm text-amber-700 mt-1">We serve 9 Pennsylvania markets from Erie to King of Prussia. Median home values across our PA markets range from ~$129K (Reading) to ~$380K (King of Prussia area). PA market conditions vary dramatically by region — don&apos;t assume Philadelphia-area trends apply to Harrisburg or Erie.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Pennsylvania Market Snapshot — Our 9 Active Markets</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Market</th>
                  <th className="py-3 px-4 text-left">County</th>
                  <th className="py-3 px-4 text-left">Median Value</th>
                  <th className="py-3 px-4 text-left">Transfer Tax</th>
                  <th className="py-3 px-4 text-left">Market Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Harrisburg', 'Dauphin', '~$175K', '2.00%', 'Capital city, strong rental demand, fast DOM'],
                  ['Allentown', 'Lehigh', '~$210K', '2.50%', 'Lehigh Valley growth hub, 30%+ Hispanic pop.'],
                  ['Bethlehem', 'Northampton', '~$235K', '2.00%', 'SteelStacks redevelopment, rising values'],
                  ['Lancaster', 'Lancaster', '~$265K', '2.00%', 'Strong buyer demand, low inventory, 30%+ Hispanic'],
                  ['York', 'York', '~$195K', '2.00%', 'Affordable entry point, historic downtown revitalization'],
                  ['Reading', 'Berks', '~$129K', '2.00%', 'Distressed stock, high cash buyer activity'],
                  ['Erie', 'Erie', '~$142K', '2.00%', 'Rust Belt market, affordable, strong rental demand'],
                  ['State College', 'Centre', '~$305K', '3.00% (Borough)', 'Penn State rental market, high turnover'],
                  ['King of Prussia', 'Montgomery', '~$380K', '2.00%', 'Greater Philadelphia, suburban professional market'],
                ].map(([market, county, value, tax, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium">{market}</td>
                    <td className="py-2 px-4 text-gray-600">{county}</td>
                    <td className="py-2 px-4 font-bold text-brand-primary">{value}</td>
                    <td className="py-2 px-4">{tax}</td>
                    <td className="py-2 px-4 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Median home values approximate per Zillow Home Value Index and Redfin (early 2026). Transfer tax rates per PA Department of Revenue and local municipalities. Hablamos español — servimos a comunidades de habla hispana en Allentown, Lancaster, Reading y York.</p>
        </section>

        {/* CTA Form */}
        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Pennsylvania Home"
          subheadline="Written offer in 24 hours. No obligation. We cover closing costs."
          sourcePage="/sell-house-fast-pennsylvania"
        />

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Selling a House Fast in Pennsylvania — FAQ" />

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>
            <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Harrisburg</Link>
            {' '}·{' '}
            <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Allentown</Link>
            {' '}·{' '}
            <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">King of Prussia</Link>
            {' '}·{' '}
            <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">State College</Link>
          </p>
        </div>
      </div>
    </>
  );
}
