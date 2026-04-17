/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast New York',
  description:
    'We buy houses for cash throughout New York — Rochester and surrounding areas. Written offer in 24 hours, close in 7 days.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-new-york` },
};

export default function SellHouseFastNewYorkPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'New York', item: `${SITE_URL}/sell-house-fast-new-york` },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumb]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell My House Fast New York — Cash Home Buyers
        </h1>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            USA Home Buyers purchases houses for cash throughout New York — currently serving Rochester. Written offer in 24 hours, close in 7–14 days, any condition, no repairs, no fees. We cover all closing costs. Call 888-440-5250.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New York Markets We Serve</h2>
          <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/markets/rochester-ny" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Rochester, NY</h3>
              <p className="text-sm text-gray-600">Monroe County · Median $155,000 · 33 days avg DOM</p>
              <p className="text-xs text-brand-primary mt-2">See Rochester market →</p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 1: New York Home Sale — Legal Overview</h2>
          <p className="text-gray-700 mb-4">
            Selling a home in New York involves specific legal requirements that vary from other states. Understanding the process helps you make informed decisions about timing, costs, and your options.
          </p>
          <p className="text-gray-700 mb-4"><strong>Attorney requirement:</strong> New York is an attorney state — New York law requires attorney involvement in real estate transactions. Unlike most other states, New York does not use title companies to conduct closings; instead, attorneys for buyer and seller handle the closing and disbursement of funds. The attorney's role is mandated by New York Judiciary Law §484 and case law (Cooperman v. Waldstein).</p>
          <p className="text-gray-700 mb-4">
            Rochester has some of the most affordable home prices of any major Northeastern city, with a Monroe County median around $155,000 (Zillow, March 2026). The post-Kodak/Xerox economic transition has created buyer diversity — retirees, first-time buyers, and investors all active in the Rochester market. The 19th Ward and South Wedge are particularly active for cash investors.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 2: New York Transfer Tax & Closing Costs</h2>
          <p className="text-gray-700 mb-4">New York State has a Real Property Transfer Tax (RPTT) of $4.00 per $1,000 of consideration (0.4%), paid by the seller under Tax Law §1402. Properties with a price above $1,000,000 in New York City are subject to an additional "mansion tax" of 1%, paid by the buyer (not applicable in Monroe County). Monroe County does not impose an additional county transfer tax beyond the state rate. On a $162,000 Rochester home: $648 seller-paid transfer tax. Source: NY Department of Taxation and Finance (tax.ny.gov).</p>
          <p className="text-gray-700 mb-4">When you sell to USA Home Buyers, we cover all closing costs — you pay nothing at closing.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 3: New York Foreclosure Process</h2>
          <p className="text-gray-700 mb-4">New York is a judicial foreclosure state. All foreclosures must be filed in the Supreme Court of the county where the property is located (Real Property Actions and Proceedings Law §1301 et seq.). In Monroe County, foreclosures are filed in Monroe County Supreme Court. The timeline from first missed payment to confirmation of referee's sale is typically 12-24 months in Monroe County. New York requires lenders to send a 90-day pre-foreclosure notice (RPAPL §1304) before filing. There is a 12-month post-sale redemption period in some cases. Source: NY RPAPL §1301 et seq. (nysenate.gov).</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 4: New York Probate Overview</h2>
          <p className="text-gray-700 mb-4">New York probate is handled by the Surrogate's Court in each county. Monroe County Surrogate's Court is located at 99 Exchange Blvd, Rochester NY 14614 (Hall of Justice), phone (585) 371-3310. When someone dies owning real estate in Monroe County, the estate typically goes through Surrogate's Court. New York offers a Voluntary Administration procedure for small estates (gross personal property under $50,000), but real estate generally requires formal probate. New York probate timelines: uncontested estates 3-6 months; contested 12-24+ months. Source: NY Surrogate's Court Procedure Act (nysenate.gov).</p>
          <p className="text-gray-700 mb-4"><strong>Probate courts for our New York markets:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
            <li>Monroe County Surrogate's Court, 99 Exchange Blvd, Rochester NY 14614 (Hall of Justice), Phone: (585) 371-3310</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 5: New York Market Snapshot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Market</th>
                  <th className="text-left p-3">County</th>
                  <th className="text-left p-3">Median Value</th>
                  <th className="text-left p-3">Avg DOM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3"><Link href="/markets/rochester-ny" className="text-brand-primary hover:underline">Rochester</Link></td><td className="p-3">Monroe County</td><td className="p-3">$155,000</td><td className="p-3">~33 days</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">Data: Zillow ZHVI and Redfin market statistics, March–April 2026.</p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your New York Home" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/sell-house-fast-new-york" />
      </div>
    </>
  );
}
