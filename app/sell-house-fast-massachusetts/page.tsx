/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Massachusetts',
  description:
    'We buy houses for cash throughout Massachusetts — Springfield, Worcester, and surrounding Hampden and Worcester Counties. Written offer in 24 hours. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-massachusetts` },
};

export default function SellHouseFastMassachusettsPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Massachusetts', item: `${SITE_URL}/sell-house-fast-massachusetts` },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumb]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell My House Fast Massachusetts — Cash Home Buyers
        </h1>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            USA Home Buyers purchases houses for cash throughout Massachusetts — currently serving Springfield (Hampden County) and Worcester (Worcester County), with expansion ongoing. Written offer in 24 hours, close in 7–14 days, any condition, no repairs, no fees. Massachusetts deed excise stamps ($4.56 per $1,000) covered by us. Non-judicial foreclosure state — process moves in 75-120 days. Hablamos español. Call 888-440-5250.
          </p>
        </div>

        {/* Markets in MA */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Massachusetts Markets We Serve</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/markets/springfield-ma" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Springfield, MA</h3>
              <p className="text-sm text-gray-600">Hampden County · Median $178,000 · 48% Hispanic community</p>
              <p className="text-xs text-brand-primary mt-2">See Springfield market →</p>
            </Link>
            <Link href="/markets/worcester-ma" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Worcester, MA</h3>
              <p className="text-sm text-gray-600">Worcester County · Median $310,000 · Central MA hub</p>
              <p className="text-xs text-brand-primary mt-2">See Worcester market →</p>
            </Link>
            <Link href="/markets/boston-ma" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Boston, MA</h3>
              <p className="text-sm text-gray-600">Suffolk County · Median $829,000 metro · #15 Hottest Market</p>
              <p className="text-xs text-brand-primary mt-2">See Boston market →</p>
            </Link>
          </div>
        </section>

        {/* Section 1: Legal Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 1: Massachusetts Home Sale — Legal Overview</h2>
          <p className="text-gray-700 mb-4">
            Massachusetts is an attorney state — a licensed attorney must be present at closing. The closing attorney handles the title examination, deed preparation, transfer tax (deed excise stamps) calculation, and disbursement of proceeds. Both buyer and seller typically have their own attorneys, though in cash transactions it's common to use a single closing attorney.
          </p>
          <p className="text-gray-700 mb-4">
            The typical home sale process in Massachusetts runs 45-60 days from accepted offer to close for conventional transactions. Cash transactions close significantly faster — 7-14 days — because there is no lender involved and no appraisal or financing contingency.
          </p>
          <p className="text-gray-700 mb-4">
            According to the Massachusetts Board of Bar Overseers, Massachusetts requires attorney involvement in all real estate closings (real property transfers must be conducted by a licensed Massachusetts attorney). Source: Mass. Gen. Laws Ch. 221 §46A.
          </p>
        </section>

        {/* Section 2: Transfer Tax */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 2: Massachusetts Transfer Tax & Closing Costs</h2>
          <p className="text-gray-700 mb-4">
            Massachusetts uses deed excise stamps instead of a traditional real estate transfer tax. The rate is $4.56 per $1,000 of consideration (or fraction thereof), paid entirely by the seller. There is no buyer-side transfer tax.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Sale Price</th>
                  <th className="text-left p-3">Deed Excise Stamps</th>
                  <th className="text-left p-3">Seller Pays</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">$175,000 (Springfield)</td><td className="p-3">$4.56 × 175 = $798</td><td className="p-3">$798</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$310,000 (Worcester)</td><td className="p-3">$4.56 × 310 = $1,414</td><td className="p-3">$1,414</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            Some Massachusetts cities have historically had no additional local excise (the state rate covers all). Source: Massachusetts Department of Revenue (mass.gov). When you sell to USA Home Buyers, we cover all closing costs including deed excise stamps.
          </p>
        </section>

        {/* Section 3: Foreclosure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 3: Massachusetts Foreclosure Process</h2>
          <p className="text-gray-700 mb-4">
            Massachusetts is a non-judicial foreclosure state. Under Massachusetts General Laws Chapter 183 §27 (the "statutory power of sale"), lenders can foreclose without going to court. This makes Massachusetts foreclosures significantly faster than judicial states like New York or Wisconsin.
          </p>
          <p className="text-gray-700 mb-4">
            The Massachusetts foreclosure timeline from first missed payment to auction:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-4">
            <li>30-90 days: Servicer default notices and loss mitigation attempts (federal CFPB requirements)</li>
            <li>Published notice of foreclosure sale in a local newspaper — 3 consecutive weeks required (MGL Ch. 244 §14)</li>
            <li>Written notice to borrower at least 14 days before sale</li>
            <li>Total timeline from first missed payment to auction: typically 75-120 days</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Massachusetts does not have a statutory right of redemption after a foreclosure sale — once the auction is complete, the title transfers immediately. This makes the window to sell before foreclosure critical. Source: MGL Ch. 244 (malegislature.gov).
          </p>
        </section>

        {/* Section 4: Probate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 4: Massachusetts Probate Overview</h2>
          <p className="text-gray-700 mb-4">
            Massachusetts probate is handled by the Probate and Family Courts in each county. When someone dies owning real estate in Massachusetts, the property typically must go through probate before it can be sold (unless held in trust or with a joint tenancy with right of survivorship).
          </p>
          <p className="text-gray-700 mb-4">
            Massachusetts offers two primary probate tracks:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-4">
            <li><strong>Informal probate:</strong> Administrative process, no court hearing required for uncontested estates. Timeline: 2-4 months typical.</li>
            <li><strong>Formal probate:</strong> Court-supervised, required for contested estates or complex situations. Timeline: 6-18+ months.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Massachusetts allows the personal representative to sell property under a License to Sell issued by the probate court. The small estate threshold (Voluntary Administration) is $25,000 in gross personal property — real estate generally requires full probate regardless. Source: MGL Ch. 190B (Uniform Probate Code) at malegislature.gov.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Probate courts for our MA markets:</strong> Hampden County Probate and Family Court (50 State Street, Springfield, (413) 748-7776); Worcester County Probate and Family Court (225 Main Street, Worcester, (508) 770-0825).
          </p>
        </section>

        {/* Section 5: Market Snapshot */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 5: Massachusetts Market Snapshot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Market</th>
                  <th className="text-left p-3">County</th>
                  <th className="text-left p-3">Median Value</th>
                  <th className="text-left p-3">DOM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3"><Link href="/markets/springfield-ma" className="text-brand-primary hover:underline">Springfield</Link></td><td className="p-3">Hampden County</td><td className="p-3">$178,000</td><td className="p-3">~32 days</td></tr>
                <tr className="bg-gray-50"><td className="p-3"><Link href="/markets/worcester-ma" className="text-brand-primary hover:underline">Worcester</Link></td><td className="p-3">Worcester County</td><td className="p-3">$310,000</td><td className="p-3">~24 days</td></tr>
                <tr className="bg-white"><td className="p-3"><Link href="/markets/boston-ma" className="text-brand-primary hover:underline">Boston</Link></td><td className="p-3">Suffolk County</td><td className="p-3">$829,000 (metro)</td><td className="p-3">#15 hottest</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">Data: Zillow ZHVI and Redfin market statistics, March 2026.</p>
        </section>

        <div className="mb-8 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-900"><strong>Hablamos español.</strong> Springfield has a 48% Hispanic community, primarily Puerto Rican. We serve Massachusetts sellers in English and Spanish. Llámenos al 888-440-5250.</p>
        </div>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Massachusetts Home" subheadline="Written offer in 24 hours. We cover all closing costs including MA deed excise stamps." sourcePage="/sell-house-fast-massachusetts" />
      </div>
    </>
  );
}
