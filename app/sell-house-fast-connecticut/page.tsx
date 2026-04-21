/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Connecticut',
  description:
    'We buy houses for cash throughout Connecticut — Bridgeport, New Haven, and surrounding areas. Written offer in 24 hours, close in 7 days.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-connecticut` },
};

export default function SellHouseFastConnecticutPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Connecticut', item: `${SITE_URL}/sell-house-fast-connecticut` },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumb]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell My House Fast Connecticut — Cash Home Buyers
        </h1>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            USA Home Buyers purchases houses for cash throughout Connecticut — currently serving Bridgeport and New Haven. Written offer in 24 hours, close in 7–14 days, any condition, no repairs, no fees. We cover all closing costs. Call 888-440-5250.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Our Connecticut Markets: Bridgeport + New Haven</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/markets/bridgeport-ct" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Bridgeport, CT</h3>
              <p className="text-sm text-gray-600">Fairfield County · Median $240,000 · 38 days avg DOM</p>
              <p className="text-xs text-brand-primary mt-2">See Bridgeport market →</p>
            </Link>
            <Link href="/markets/new-haven-ct" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">New Haven, CT</h3>
              <p className="text-sm text-gray-600">New Haven County · Median $323,843 · 65 days avg DOM</p>
              <p className="text-xs text-brand-primary mt-2">See New Haven market →</p>
            </Link>
            <Link href="/markets/hartford-ct" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Hartford, CT</h3>
              <p className="text-sm text-gray-600">Hartford County · Median $455,000 metro · #13 Hottest Market</p>
              <p className="text-xs text-brand-primary mt-2">See Hartford market →</p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 1: Connecticut Home Sale — Legal Overview</h2>
          <p className="text-gray-700 mb-4">
            Selling a home in Connecticut involves specific legal requirements that vary from other states. Understanding the process helps you make informed decisions about timing, costs, and your options.
          </p>
          <p className="text-gray-700 mb-4"><strong>Attorney requirement:</strong> Connecticut is an attorney state — a licensed CT attorney must be involved in the real estate closing. Attorneys handle deed preparation, title examination, and escrow disbursement. Unlike PA, CT does not use title companies exclusively — real estate attorneys conduct closings directly.</p>
          <p className="text-gray-700 mb-4">
            Fairfield County encompasses both the most expensive (Greenwich, Westport at $1M+ median) and most affordable (Bridgeport at $240,000) housing markets in Connecticut. Bridgeport properties represent strong investor value with significant upside as the city continues revitalization along Steelpointe Harbor and downtown. Bridgeport's 41% Hispanic population reflects a large Puerto Rican and Central American community.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 2: Connecticut Transfer Tax & Closing Costs</h2>
          <p className="text-gray-700 mb-4">Connecticut has a Real Estate Conveyance Tax consisting of a state portion and a municipal portion — both paid by the seller. State rate: 0.75% on the first $800,000 of consideration. Standard municipal rate: 0.25%. Combined: 1.0% for most CT properties under $800,000. Properties over $800,000: an additional 1.25% state surcharge applies to the amount over $800,000. Source: Connecticut Department of Revenue Services, CGS §12-494 (ct.gov/drs).</p>
          <p className="text-gray-700 mb-4"><strong>Bridgeport (Fairfield County):</strong> 1.25% total — distressed municipality rate (0.75% state + 0.50% City of Bridgeport local). On a $240,000 Bridgeport home: $3,000.</p>
          <p className="text-gray-700 mb-4"><strong>New Haven (New Haven County):</strong> 1.25% total — targeted-investment municipality rate (0.75% state + 0.25% base municipal + 0.25% Targeted Investment additional per Public Act 11-6). New Haven is confirmed on CT's 18-town distressed/targeted-investment list. On a $323,843 New Haven home: ~$4,048.</p>
          <p className="text-gray-700 mb-4">When you sell to USA Home Buyers, we cover all closing costs — you pay nothing at closing.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 3: Connecticut Foreclosure Process</h2>
          <p className="text-gray-700 mb-4">Connecticut uses strict foreclosure — one of the most unusual foreclosure systems in the United States. When a lender files a foreclosure action in CT Superior Court, the court can grant "strict foreclosure" where no auction takes place. Instead, the court sets a "Law Day" — a specific date by which the homeowner must pay off the full debt or lose title directly to the lender. There is no redemption period after the Law Day passes. Title vests in the lender immediately when the Law Day expires without payment. Connecticut also uses "foreclosure by sale" (court-ordered auction) in some cases. Source: Connecticut General Statutes §49-1 through 49-31 (cga.ct.gov).</p>
          <p className="text-gray-700 mb-4"><strong>For both our CT markets:</strong> CT's mandatory owner-occupied mediation program requires lenders to offer mediation before proceeding — typically adding 60-90 days before a Law Day is set. This window is critical for distressed sellers: a cash sale before Law Day preserves credit and avoids the lender taking title outright.</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
            <li><strong>Bridgeport (Fairfield County):</strong> Strict foreclosure or foreclosure by sale · Bridgeport Superior Court · typical timeline 5-9 months + 60-90 day mediation window</li>
            <li><strong>New Haven (New Haven County):</strong> Strict foreclosure (CT Gen Stat §§49-1 through 49-31) · New Haven Superior Court · Law Day title-transfer, NO auction · typical timeline 5-9 months · mandatory owner-occupied mediation 60-90 days</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 4: Connecticut Probate Overview</h2>
          <p className="text-gray-700 mb-4">Connecticut has a unique probate system — each town and city has its own probate court, a structure found in very few other states. When someone dies owning real estate in Bridgeport, the estate goes through the Bridgeport Probate Court (45 Lyon Terrace Room 121, Bridgeport CT 06604, (203) 576-7957). Connecticut probate can be surprisingly efficient for uncontested estates — the local probate judge has broad authority. Connecticut allows voluntary dissolution of small estates (under $40,000) without probate proceedings. Source: Connecticut Probate Court Administrator (ct.gov/probate).</p>
          <p className="text-gray-700 mb-4"><strong>Probate courts for our Connecticut markets:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
            <li>Bridgeport Probate Court, 45 Lyon Terrace Room 121, Bridgeport CT 06604, Phone: (203) 576-7957</li>
            <li>New Haven Probate Court, 200 Orange Street, New Haven CT 06510, Phone: (203) 946-4880</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 5: Connecticut Market Snapshot</h2>
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
                <tr className="bg-white"><td className="p-3"><Link href="/markets/bridgeport-ct" className="text-brand-primary hover:underline">Bridgeport</Link></td><td className="p-3">Fairfield County</td><td className="p-3">$240,000</td><td className="p-3">~38 days</td></tr>
                <tr className="bg-gray-50"><td className="p-3"><Link href="/markets/new-haven-ct" className="text-brand-primary hover:underline">New Haven</Link></td><td className="p-3">New Haven County</td><td className="p-3">$323,843</td><td className="p-3">~65 days</td></tr>
                <tr className="bg-white"><td className="p-3"><Link href="/markets/hartford-ct" className="text-brand-primary hover:underline">Hartford</Link></td><td className="p-3">Hartford County</td><td className="p-3">$455,000 (metro)</td><td className="p-3">#13 hottest</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">Data: Zillow ZHVI and Redfin market statistics, March–April 2026.</p>
        </section>

        <div className="mb-8 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-900"><strong>Hablamos español.</strong> Bridgeport has a 41% Hispanic community; New Haven is 31% Hispanic. We serve Connecticut sellers in English and Spanish across both markets. Llámenos al 888-440-5250.</p>
        </div>
        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Connecticut Home" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/sell-house-fast-connecticut" />
      </div>
    </>
  );
}
