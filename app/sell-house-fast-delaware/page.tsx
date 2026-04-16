/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell Your House Fast in Delaware',
  description:
    'Cash home buyers in Delaware. We buy houses as-is in Wilmington, Newark, New Castle, and throughout New Castle County. Written offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-delaware` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Delaware', item: `${SITE_URL}/sell-house-fast-delaware` },
  ],
};

export default function DelawareStatePage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumbSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/wilmington-de-hero-640.jpg 640w, /images/optimized/wilmington-de-hero-828.jpg 828w, /images/optimized/wilmington-de-hero-1080.jpg 1080w, /images/optimized/wilmington-de-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/wilmington-de-hero-1200.jpg"
            alt="Wilmington Delaware homes — sell your house fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in Delaware — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases homes throughout Delaware for cash — any condition, any situation.
              No repairs, no agent fees, close in 7-14 days. Written cash offer within 24 hours.
              We cover all closing costs including Delaware's transfer tax.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/sell-house-fast-delaware" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Delaware Markets We Serve</h2>
          <p className="text-gray-700 mb-6">
            Select your city below for market-specific data, transfer tax details, and local legal context.
          </p>
          <div className="grid md:grid-cols-1 gap-4">
            <Link
              href="/markets/wilmington-de"
              className="bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-1">Wilmington, DE</h3>
                  <p className="text-gray-600 text-sm">New Castle County · Median sale price $210,000 · 72 days DOM</p>
                  <p className="text-gray-500 text-xs mt-1">Transfer tax: 4% total (2.5% DE state + 1.5% City of Wilmington)</p>
                </div>
                <span className="text-brand-primary text-2xl">→</span>
              </div>
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Additional Delaware markets coming soon. Call us at{' '}
            <a href={`tel:${PHONE}`} className="text-brand-primary hover:underline">{PHONE}</a>{' '}
            if your city isn't listed — we may still be able to help.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling in Delaware — Key Differences from Other States</h2>
          <p className="text-gray-700 mb-4">
            Delaware has several legal and tax characteristics that differ significantly from neighboring Pennsylvania,
            Maryland, and New Jersey. Sellers should understand these before listing or accepting any offer:
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">Transfer Tax — Delaware's Highest Rate in New Castle County</h3>
              <p className="text-gray-700 text-sm">
                Delaware's base state transfer tax is 3%. However, in counties and municipalities that levy a
                local transfer tax, the state rate drops to 2.5% (and the local rate applies on top). In
                Wilmington city limits, this means: 2.5% state + 1.5% City of Wilmington = 4.0% total.
                New Castle County overall applies the maximum 4% rate. Kent County: 3%. Sussex County: 3.5%.
                Source:{' '}
                <a href="https://financefiles.delaware.gov/docs/rtt.pdf" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Delaware Division of Revenue</a>.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">Foreclosure — Judicial Process, No Right of Redemption</h3>
              <p className="text-gray-700 text-sm">
                Delaware is a judicial foreclosure state. All foreclosures go through the New Castle County
                Superior Court. The typical timeline is 170-210 days by statute; 6-9 months in practice.
                Critically, Delaware provides no post-sale right of redemption — once the court confirms the
                sheriff's sale, the property is permanently transferred. This makes acting before the sale
                especially important. Sources:{' '}
                <a href="https://www.nolo.com/legal-encyclopedia/delaware-foreclosure-laws-and-procedures.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Nolo Delaware Foreclosure Laws</a>;{' '}
                <a href="https://www.amerinotexchange.com/foreclosure-law/delaware/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">amerinotexchange.com</a>.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">Probate — Register of Wills (Court of Chancery)</h3>
              <p className="text-gray-700 text-sm">
                Delaware's probate system operates through the Register of Wills as a branch of the Delaware
                Court of Chancery — a unified court system, not county-level Orphans' Courts as in Pennsylvania.
                The New Castle County Register of Wills is at 800 N. French Street, Wilmington DE 19801
                (302-395-7800;{' '}
                <a href="https://www.newcastlede.gov/152/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">newcastlede.gov/152</a>).
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">No Delaware Inheritance Tax</h3>
              <p className="text-gray-700 text-sm">
                Delaware does not impose a state inheritance tax. Federal estate tax may apply for large estates
                (threshold: $13.61 million in 2026). Capital gains on inherited property are calculated from
                the stepped-up basis at date of death, not original purchase price.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION: Legal Overview ===== */}
        <section className="mb-12" id="de-legal-overview">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR &mdash; DE Home Sale Process</p>
            <p className="text-sm text-amber-700 mt-1">Delaware closings can be handled by attorneys or title companies &mdash; it&apos;s not required but attorneys are common. Typical closing timeline: 30-45 days financed, 7-14 days cash. Delaware charges a 3% base state transfer tax (drops to 2.5% in counties/cities that levy their own). No state inheritance tax. Judicial foreclosure state &mdash; 6-9 months typical.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Home Sales Work in Delaware</h2>
          <div className="space-y-4 text-gray-700">
            <p>Delaware is a &ldquo;title company or attorney&rdquo; state &mdash; closings may be handled by either. In practice, many Wilmington transactions involve real estate attorneys, particularly for complex situations like estate sales, short sales, or commercial properties. For straightforward residential transactions, title companies handle most closings.</p>
            <p>The typical Delaware home sale from accepted offer to settlement takes <strong>30-45 days</strong> for financed transactions and <strong>7-14 days</strong> for cash. Delaware uses a standard Association of Realtors purchase contract. Cash buyers waive financing and inspection contingencies, which compresses the timeline considerably.</p>
            <p>Delaware does <strong>not</strong> require a property condition disclosure form by statute in the same way Pennsylvania does. However, sellers have a common law duty to disclose known material defects. Buyers routinely request disclosures and inspections as part of the negotiation process.</p>
            <p>Delaware&apos;s real estate agents are regulated by the <strong>Delaware Real Estate Commission</strong> (Division of Professional Regulation). PA agents cannot practice in DE without obtaining a Delaware license through reciprocity or examination.</p>
            <p className="text-sm text-gray-500">According to <a href="https://dpr.delaware.gov/boards/realestate/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Delaware Division of Professional Regulation &mdash; Real Estate Commission</a>.</p>
          </div>
        </section>

        {/* ===== SECTION: Transfer Tax & Closing Costs ===== */}
        <section className="mb-12" id="de-transfer-tax">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR &mdash; Delaware Transfer Tax</p>
            <p className="text-sm text-amber-700 mt-1">Delaware&apos;s state transfer tax is 3% when no local tax exists. If a county or city levies its own tax, the state drops to 2.5% and local tax applies on top. Wilmington charges 1.5% city tax &mdash; making the total 4% for Wilmington properties. Buyer and seller typically split the tax 50/50.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Delaware Transfer Tax &amp; Closing Costs</h2>
          <div className="space-y-4 text-gray-700">
            <p>Delaware&apos;s realty transfer tax structure is tiered: the state charges <strong>3%</strong> for counties with no local tax, or <strong>2.5%</strong> where a local tax applies. The local rate is then added. By custom, buyers and sellers split the total evenly.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Location</th>
                    <th className="py-3 px-4 text-left">State Rate</th>
                    <th className="py-3 px-4 text-left">Local Rate</th>
                    <th className="py-3 px-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Kent County (no local tax)', '3.00%', '0%', '3.00%'],
                    ['Sussex County (no local tax)', '3.00%', '0%', '3.00%'],
                    ['City of Wilmington', '2.50%', '1.50%', '4.00%'],
                    ['City of Newark', '2.50%', '0.50%', '3.00%'],
                    ['Town of Middletown', '2.50%', '0.50%', '3.00%'],
                  ].map(([loc, state, local, total], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{loc}</td>
                      <td className="py-2 px-4">{state}</td>
                      <td className="py-2 px-4">{local}</td>
                      <td className="py-2 px-4 font-bold text-brand-primary">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Source: <a href="https://financefiles.delaware.gov/docs/rtt.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Delaware Division of Revenue &mdash; Real Estate Transfer Tax</a>. Always verify your specific municipality&apos;s rate before closing.</p>
            <div className="bg-blue-50 rounded-xl p-5 mt-4">
              <h3 className="font-bold text-brand-dark mb-2">Estimated Closing Costs &mdash; $200K Sale in Wilmington, DE</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>&bull; Transfer tax (seller&apos;s share, 50% of 4%): <strong>$4,000</strong></li>
                <li>&bull; Title insurance (owner&apos;s policy): <strong>$800&ndash;$1,200</strong></li>
                <li>&bull; Settlement/closing fee: <strong>$300&ndash;$600</strong></li>
                <li>&bull; Recording fees: <strong>$70&ndash;$150</strong></li>
                <li>&bull; Real estate agent commission (if applicable): <strong>$10,000&ndash;$12,000</strong></li>
                <li className="pt-2 font-bold text-brand-dark">Traditional sale total: ~$15,170&ndash;$17,950</li>
                <li className="font-bold text-green-700">Cash sale with USA Home Buyers: $0 (we cover all closing costs)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== SECTION: Foreclosure Process ===== */}
        <section className="mb-12" id="de-foreclosure">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR &mdash; Delaware Foreclosure</p>
            <p className="text-sm text-amber-700 mt-1">Delaware is a judicial foreclosure state. All cases go through Superior Court. Statute sets a 170-210 day minimum; real-world timelines run 6-9 months. <strong>Critical: Delaware has NO post-sale right of redemption.</strong> Once the court confirms the sale, it&apos;s permanent. Act before the auction.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Delaware Foreclosure Process</h2>
          <div className="space-y-4 text-gray-700">
            <p>Delaware is a <strong>judicial foreclosure state</strong>. All proceedings go through Superior Court &mdash; there is no non-judicial/power-of-sale option. The most critical Delaware-specific fact: <strong>there is no right of redemption after the sheriff&apos;s sale is confirmed.</strong> Once the sale is confirmed by the court, the transfer is permanent.</p>
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
                    ['Missed payments', 'Month 1-3', 'Lender demand letters and notices.'],
                    ['Complaint filed', 'Month 2-4', 'Lender files foreclosure complaint in Superior Court.'],
                    ['Service & response', 'Month 3-5', 'Homeowner served. 20 days to respond.'],
                    ['Decree Nisi', 'Month 4-6', 'Court judgment entered if no valid defense.'],
                    ["Sheriff's sale", 'Month 6-9', 'Property auctioned at county sheriff sale.'],
                    ['Confirmation', 'Days after sale', 'Court confirms. Title transfers. No redemption.'],
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
            <p className="text-sm text-gray-500">According to <a href="https://www.nolo.com/legal-encyclopedia/delaware-foreclosure-laws-and-procedures.html" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Nolo &mdash; Delaware Foreclosure Laws</a>.</p>
            <Link href="/markets/wilmington-de/foreclosure" className="text-sm text-brand-primary hover:underline">Sell your Wilmington home in foreclosure &rarr;</Link>
          </div>
        </section>

        {/* ===== SECTION: Probate Overview ===== */}
        <section className="mb-12" id="de-probate">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR &mdash; Delaware Probate</p>
            <p className="text-sm text-amber-700 mt-1">Delaware probate runs through the Register of Wills (Court of Chancery branch). No state inheritance tax. Small estates under $30,000 can use a simplified affidavit. You CAN sell during probate &mdash; the deed just can&apos;t transfer until Letters are issued. New Castle County Register of Wills: (302) 395-7800.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Delaware Property &mdash; Probate Overview</h2>
          <div className="space-y-4 text-gray-700">
            <p>Delaware probate is administered through the <strong>Register of Wills</strong>, a constitutional officer serving as a branch of the Delaware Court of Chancery. Each of Delaware&apos;s three counties has its own Register of Wills office.</p>
            <p>If someone died owning Delaware real estate solely in their name, that property is part of the probate estate. The executor receives authority via <strong>Letters Testamentary</strong> (will exists) or <strong>Letters of Administration</strong> (no will). The home can be marketed and contracted before Letters are issued, but the deed cannot transfer until the executor has legal authority to sign.</p>
            <p><strong>Can you sell during Delaware probate?</strong> Yes. Cash buyers structure deals to close within days of Letters being issued. We handle this regularly &mdash; it&apos;s not unusual, just requires a flexible closing date.</p>
            <p><strong>Small estate shortcut:</strong> Delaware allows a simplified affidavit for estates with gross assets under <strong>$30,000</strong>. If real estate is the primary asset, full probate is typically still required.</p>
            <p><strong>No Delaware inheritance tax.</strong> Delaware repealed its estate tax and has never had a state inheritance tax. Federal estate tax may apply for estates exceeding $13.61 million (2026). Inherited property gets a stepped-up basis &mdash; capital gains are calculated from the date-of-death value, not original purchase price.</p>
            <div className="bg-blue-50 rounded-xl p-4 mt-2">
              <h3 className="font-bold text-brand-dark mb-1">Delaware Register of Wills Offices</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>&bull; <strong>New Castle County:</strong> 800 N. French St., Wilmington DE 19801 | (302) 395-7800</li>
                <li>&bull; <strong>Kent County:</strong> 38 The Green, Dover DE 19901 | (302) 744-2300</li>
                <li>&bull; <strong>Sussex County:</strong> PO Box 827, Georgetown DE 19947 | (302) 855-7785</li>
              </ul>
            </div>
            <Link href="/markets/wilmington-de/inherited-property" className="text-sm text-brand-primary hover:underline">Sell inherited property in Wilmington &rarr;</Link>
          </div>
        </section>

        {/* ===== SECTION: Market Snapshot ===== */}
        <section className="mb-12" id="de-market-snapshot">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR &mdash; Delaware Market</p>
            <p className="text-sm text-amber-700 mt-1">We serve Wilmington, DE. Wilmington median home price ~$210,000. 72 days median on market for traditional listings. Delaware has no state income tax on retirement income, making it a retirement destination &mdash; this drives estate sale volume. High transfer tax (4% in Wilmington) is a common surprise for sellers.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Delaware Real Estate Market &mdash; Key Facts for Sellers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Wilmington, DE</th>
                  <th className="py-3 px-4 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['County', 'New Castle County', 'Northern Delaware'],
                  ['Median sale price', '~$210,000', 'Redfin, early 2026'],
                  ['Median days on market', '72 days', 'Traditional MLS'],
                  ['Cash sale timeline', '7-14 days', 'USA Home Buyers average'],
                  ['Transfer tax (Wilmington)', '4.00% total', '2.5% state + 1.5% city &mdash; split 50/50'],
                  ['Foreclosure type', 'Judicial only', 'No non-judicial option'],
                  ['Post-sale redemption', 'None', 'Act before the sheriff\'s sale'],
                  ['State inheritance tax', 'None', 'Delaware has no inheritance tax'],
                  ['State income tax on retirement', 'None', 'Draws retirees, drives estate sale volume'],
                ].map(([metric, value, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium text-brand-dark">{metric}</td>
                    <td className="py-2 px-4 font-bold text-brand-primary">{value}</td>
                    <td className="py-2 px-4 text-xs text-gray-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Sources: Redfin, Zillow Home Value Index, Delaware Superior Court, Delaware Division of Revenue. Data as of early 2026.</p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Delaware Cash Offer"
          subheadline="Written offer in 24 hours. We cover all closing costs including Delaware's transfer tax."
          sourcePage="/sell-house-fast-delaware"
        />

        <nav className="border-t pt-6 mt-8 text-sm text-gray-500">
          <Link href="/" className="text-brand-primary hover:underline">&larr; Home</Link>
        </nav>
      </div>
    </>
  );
}
