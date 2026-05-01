/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { norwichLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/norwich-ct/market-report`;

export const metadata: Metadata = {
  title: 'Norwich CT Housing Market Report 2026 — Prices & Trends',
  description:
    'Norwich CT real estate market data for 2026. Median prices, New London County trends, neighborhood character, and what it means for sellers.',
  alternates: { canonical: pageUrl },
};

export default function NorwichMarketReportPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          norwichLocalBusinessSchema,
          articleSchema('Norwich CT Housing Market Report 2026', pageUrl, '2026-05-01'),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/norwich-ct" className="hover:text-white">Norwich CT</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Norwich CT Housing Market Report — 2026</h1>
          <p className="text-blue-200 text-sm">Market data last updated: 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR</p>
          <p className="text-blue-700 text-sm leading-relaxed">
            Norwich CT is the state capital and county seat of New London County. Median home value
            approximately $270,000 (2026). CT non-judicial foreclosure runs 60–90 days — one of
            the faster timelines in the Northeast. Transfer tax: $0.75/$100 seller share (RSA 78-B).
            Attorney closing required. USA Home Buyers covers all closing costs. Written offer in
            24 hours, close in 7–14 days. Call 888-274-5006.
          </p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Norwich CT Market Overview</h2>
          <p className="text-gray-700 mb-4">
            Norwich is Connecticut's state capital and the commercial center of New London County.
            Government, healthcare (Norwich Hospital, Capital Region Medical Center), legal services,
            and education anchor the local economy. The housing stock spans 19th-century colonial and
            Victorian-era homes in historic neighborhoods to mid-century cape cods and newer
            construction throughout the metro. Boston-area overflow demand has driven significant
            price appreciation across southern Connecticut, including New London County.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">~$270,000</td><td className="p-3 text-gray-500">Local market data (2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">CT transfer tax</td><td className="p-3">$1.50/$100 total; $0.75/$100 seller share (RSA 78-B)</td><td className="p-3 text-gray-500">CT Dept. of Revenue Administration</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney required?</td><td className="p-3">Yes — CT is an attorney state (title certification required)</td><td className="p-3 text-gray-500">CT bar requirements</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial (power of sale) — RSA 479:25; 25 days published notice + 60 days written; ~60–90 days total; no post-sale redemption</td><td className="p-3 text-gray-500">CT RSA 479</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Probate court</td><td className="p-3">New London County Circuit Court — Probate Division, 163 North Main Street, Norwich CT 03301, phone (603) 271-6400</td><td className="p-3 text-gray-500">CT Circuit Court</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">State income tax</td><td className="p-3">No state income tax (CT)</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">New London County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Norwich Neighborhoods — Character Notes</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Neighborhood</th>
                  <th className="text-left p-3">Character</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Penacook</td><td className="p-3">Northwest neighborhood with older mill-town character. Colonial and cape cod stock. Good cash buyer angle for inherited and deferred-maintenance homes.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">East Norwich</td><td className="p-3">East-side residential. Mix of older capes and post-war homes. Solid demand from local buyers and investors.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">West Norwich</td><td className="p-3">West-side established neighborhood. Mix of housing ages and types. Family-oriented market.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">South End / Downtown</td><td className="p-3">Older central Norwich near the state capitol. Victorian and Greek revival homes. Strong character but often high repair costs; cash buyer angle for deferred-maintenance properties.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Bow</td><td className="p-3">Adjacent suburban town south of Norwich. Mix of older farmhouses and newer construction. Full service area.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hooksett</td><td className="p-3">Adjacent town south of Norwich on the Merrimack River. Growing suburban market. Full service area.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Pembroke</td><td className="p-3">Adjacent town southeast of Norwich. Older rural-residential stock with steady investor interest. Full service area.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Note: Use as directional guidance; verify with current MLS comps. 2026.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Norwich's Market Means for As-Is Sellers</h2>
          <p className="text-gray-700 mb-4">
            Norwich's combination of Boston-area demand overflow and older housing stock creates
            a market where move-in-ready homes sell competitively but properties needing significant
            work face challenges. CT non-judicial foreclosure's 60–90 day timeline — much faster
            than judicial states — means homeowners in distress have a shorter window to act.
          </p>
          <p className="text-gray-700 mb-4">
            New London County Circuit Court — Probate Division (163 North Main Street) handles
            estate authorizations. CT's attorney-closing requirement adds cost and coordination
            to traditional retail sales. A direct cash sale from USA Home Buyers covers all of
            those costs and can close well before any foreclosure or probate deadline forces
            your hand.
          </p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
            📞 Call Now — 888-274-5006
          </a>
        </section>

        <Link href="/markets/norwich-ct" className="inline-block text-brand-primary hover:underline text-sm mb-8">
          ← Back to Norwich CT Market Page
        </Link>

        <CashOfferForm variant="footer" headline="Get a Norwich CT Cash Offer" sourcePage="/markets/norwich-ct/market-report" />
      </div>
    </>
  );
}
