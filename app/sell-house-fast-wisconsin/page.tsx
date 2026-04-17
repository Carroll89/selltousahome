/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Wisconsin',
  description:
    'We buy houses for cash throughout Wisconsin — Kenosha and surrounding areas. Written offer in 24 hours, close in 7 days.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-wisconsin` },
};

export default function SellHouseFastWisconsinPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Wisconsin', item: `${SITE_URL}/sell-house-fast-wisconsin` },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumb]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell My House Fast Wisconsin — Cash Home Buyers
        </h1>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            USA Home Buyers purchases houses for cash throughout Wisconsin — currently serving Kenosha. Written offer in 24 hours, close in 7–14 days, any condition, no repairs, no fees. We cover all closing costs. Call 888-440-5250.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Markets We Serve</h2>
          <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/markets/kenosha-wi" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Kenosha, WI</h3>
              <p className="text-sm text-gray-600">Kenosha County · Median $225,000 · 35 days avg DOM</p>
              <p className="text-xs text-brand-primary mt-2">See Kenosha market →</p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 1: Wisconsin Home Sale — Legal Overview</h2>
          <p className="text-gray-700 mb-4">
            Selling a home in Wisconsin involves specific legal requirements that vary from other states. Understanding the process helps you make informed decisions about timing, costs, and your options.
          </p>
          <p className="text-gray-700 mb-4">Wisconsin is not an attorney state — title companies and closing agents commonly handle real estate closings without attorney involvement. However, the buyer's lender attorney often represents the lender's interests at closing.</p>
          <p className="text-gray-700 mb-4">
            Kenosha County median home values are approximately $225,000 (Zillow, March 2026), with suburban Pleasant Prairie and Bristol Townships commanding $260,000-$350,000.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 2: Wisconsin Transfer Tax & Closing Costs</h2>
          <p className="text-gray-700 mb-4">Wisconsin charges a realty transfer fee of $3.00 per $1,000 of consideration. This is a state-level fee — no county or municipal add-on. Entirely paid by the seller. On a $225,000 sale: $675. Source: Wisconsin Department of Revenue (revenue.wi.gov).</p>
          <p className="text-gray-700 mb-4">When you sell to USA Home Buyers, we cover all closing costs — you pay nothing at closing.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 3: Wisconsin Foreclosure Process</h2>
          <p className="text-gray-700 mb-4">Wisconsin is a judicial foreclosure state. All foreclosures must be filed in the county Circuit Court (Chapter 846, Wisconsin Statutes). Timeline from filing to sheriff's sale: 10-14 months. Wisconsin provides a 6-month statutory redemption period for owner-occupied properties after the sheriff's sale. Source: Wis. Stats. Ch. 846 (docs.legis.wisconsin.gov).</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 4: Wisconsin Probate Overview</h2>
          <p className="text-gray-700 mb-4">Wisconsin probate is handled by the Circuit Court in each county. When someone dies owning real estate, the estate typically must go through probate (unless held in a trust or jointly). Wisconsin offers a simplified Transfer by Affidavit process for estates under $50,000, but real estate typically requires full probate. Probate timelines: informal estates 3-6 months; contested estates 12-24+ months. Source: Wisconsin Statutes Ch. 851-882 (docs.legis.wisconsin.gov).</p>
          <p className="text-gray-700 mb-4"><strong>Probate courts for our Wisconsin markets:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
            <li>Kenosha County Circuit Court — Probate Division, 912 56th Street, Kenosha WI 53140, Phone: (262) 653-2444</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 5: Wisconsin Market Snapshot</h2>
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
                <tr className="bg-white"><td className="p-3"><Link href="/markets/kenosha-wi" className="text-brand-primary hover:underline">Kenosha</Link></td><td className="p-3">Kenosha County</td><td className="p-3">$225,000</td><td className="p-3">~35 days</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">Data: Zillow ZHVI and Redfin market statistics, March–April 2026.</p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Wisconsin Home" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/sell-house-fast-wisconsin" />
      </div>
    </>
  );
}
