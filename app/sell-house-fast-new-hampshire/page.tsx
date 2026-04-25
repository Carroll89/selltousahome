/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast New Hampshire',
  description:
    'We buy houses for cash throughout New Hampshire — Manchester and surrounding areas. Written offer in 24 hours, close in 7 days.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-new-hampshire` },
};

export default function SellHouseFastNewHampshirePage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'New Hampshire', item: `${SITE_URL}/sell-house-fast-new-hampshire` },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumb]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell My House Fast New Hampshire — Cash Home Buyers
        </h1>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            USA Home Buyers purchases houses for cash throughout New Hampshire — currently serving Manchester. Written offer in 24 hours, close in 7–14 days, any condition, no repairs, no fees. We cover all closing costs. Call 888-274-5006.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New Hampshire Markets We Serve</h2>
          <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/markets/manchester-nh" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Manchester, NH</h3>
              <p className="text-sm text-gray-600">Hillsborough County · Median $310,000 · 25 days avg DOM</p>
              <p className="text-xs text-brand-primary mt-2">See Manchester market →</p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 1: New Hampshire Home Sale — Legal Overview</h2>
          <p className="text-gray-700 mb-4">
            Selling a home in New Hampshire involves specific legal requirements that vary from other states. Understanding the process helps you make informed decisions about timing, costs, and your options.
          </p>
          <p className="text-gray-700 mb-4"><strong>Attorney requirement:</strong> New Hampshire is an attorney state — New Hampshire law requires a licensed NH attorney to examine title and certify that the title is marketable before a lender will issue a mortgage. In cash transactions, an attorney is still recommended (and required by most title insurance companies) to prepare the deed and closing documents.</p>
          <p className="text-gray-700 mb-4">
            Manchester is New Hampshire's largest city and commercial hub. The Manchester-Nashua CBSA median home value has risen sharply with Boston-area overflow demand. Hillsborough County properties are trading at $310,000+ median (Zillow, March 2026). No state income tax and no general sales tax make New Hampshire attractive to relocating buyers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 2: New Hampshire Transfer Tax & Closing Costs</h2>
          <p className="text-gray-700 mb-4">New Hampshire has a Real Estate Transfer Tax of $1.50 per $100 of consideration total — split equally between buyer and seller at $0.75 per $100 each. This is one of the few states where the transfer tax is split 50/50 rather than being entirely seller-paid. On a $315,000 home: $4,725 total ($2,363 buyer, $2,363 seller). Source: NH Department of Revenue Administration, RSA 78-B (revenue.nh.gov).</p>
          <p className="text-gray-700 mb-4">When you sell to USA Home Buyers, we cover all closing costs — you pay nothing at closing.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 3: New Hampshire Foreclosure Process</h2>
          <p className="text-gray-700 mb-4">New Hampshire is a non-judicial foreclosure state. Under RSA 479:25, lenders can foreclose via power of sale without court involvement. Requirements: published notice in a local newspaper for three consecutive weeks, plus 60 days' written notice to the borrower. Total timeline from default to foreclosure sale: typically 60-90 days — among the faster timelines in the Northeast. New Hampshire provides no post-sale redemption period. Source: NH RSA 479 (gencourt.state.nh.us).</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 4: New Hampshire Probate Overview</h2>
          <p className="text-gray-700 mb-4">New Hampshire probate is handled by the Circuit Court — Probate Division in each county. The probate court for Hillsborough County is located at 300 Chestnut Street, Manchester NH 03101, phone (603) 669-7410. New Hampshire offers voluntary administration for estates under $10,000 in personal property, but real estate generally requires full probate. Informal proceedings handle most uncontested estates in 2-4 months. Source: NH RSA 547 (gencourt.state.nh.us).</p>
          <p className="text-gray-700 mb-4"><strong>Probate courts for our New Hampshire markets:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
            <li>Hillsborough County Probate Court, 300 Chestnut Street, Manchester NH 03101, Phone: (603) 669-7410</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 5: New Hampshire Market Snapshot</h2>
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
                <tr className="bg-white"><td className="p-3"><Link href="/markets/manchester-nh" className="text-brand-primary hover:underline">Manchester</Link></td><td className="p-3">Hillsborough County</td><td className="p-3">$310,000</td><td className="p-3">~25 days</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">Data: Zillow ZHVI and Redfin market statistics, March–April 2026.</p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your New Hampshire Home" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/sell-house-fast-new-hampshire" />
      </div>
    </>
  );
}
