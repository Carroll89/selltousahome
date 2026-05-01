/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { waterburyLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-waterbury-ct-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Waterbury CT (2026 Guide)',
  description: 'Complete guide to selling your Waterbury CT house fast in 2026. Cash buyers vs. traditional listing, CT strict foreclosure, attorney closing requirements, and New Haven County selling essentials.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the fastest way to sell a house in Waterbury CT?', answer: "A cash sale to USA Home Buyers. Written offer in 24 hours, close in 7–14 days. Connecticut is an attorney-closing state — we coordinate the buyer-side attorney. No showings, no repairs. Call 888-274-5006." },
  { question: 'What does it cost to sell a house in Waterbury CT?', answer: "With a traditional agent: 5–6% commission (~$14,950–$17,940 on the $299K median), CT conveyance tax (verify TIC rate with CT attorney), attorney closing fees, repair costs, and 78 average days on market. With USA Home Buyers: no commissions, no fees, we cover all closing costs." },
  { question: 'What is the CT conveyance tax for Waterbury?', answer: "Waterbury is a Connecticut Targeted Investment Community (TIC) under CGS §12-494. The TIC designation affects the conveyance tax structure. Verify the exact current rate with a Connecticut-licensed real estate attorney before closing. USA Home Buyers covers all closing costs including the conveyance tax." },
  { question: 'Is Waterbury a good market to sell in 2026?', answer: "According to Redfin (March 2026), Waterbury has 6 average offers per listing and a 99.8% sale-to-list ratio — strong signals for move-in-ready homes. The median is $299,000, up 6.8% YoY. Average days on market is 78 for non-hot properties. For as-is sellers, a cash sale resolves the market's bifurcation." },
  { question: 'Does Connecticut require an attorney to close?', answer: "Yes — Connecticut is an attorney-closing state. Both buyer and seller must be represented by licensed CT attorneys. We coordinate the buyer-side attorney. You need your own closing attorney." },
];

export default function WaterburyGuide2026Page() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, articleSchema('How to Sell a House Fast in Waterbury CT (2026)', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell a House Fast in Waterbury CT — 2026 Guide</h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Waterbury CT and New Haven County for cash, as-is, in any condition. Written offer in 24 hours, close in 7–14 days. According to Zillow (March 2026), Waterbury's median home value is $276,344 — up 2.8%. Connecticut is an attorney-closing state and uses strict foreclosure (Law Day mechanism — no auction). Waterbury is a Targeted Investment Community (TIC) — verify conveyance tax rate with a CT attorney. Cash sale eliminates agent commissions, repair costs, and the 78-day average DOM for non-hot properties. Call 888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Options for Selling a House in Waterbury CT</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Option</th><th className="text-left p-3">Timeline</th><th className="text-left p-3">Net Proceeds</th><th className="text-left p-3">Repairs Required?</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Cash buyer (USA Home Buyers)</td><td className="p-3">7–14 days</td><td className="p-3">70–80% of FMV</td><td className="p-3">No</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Traditional listing</td><td className="p-3">78 days average (6-offer hot homes: much faster)</td><td className="p-3">83–90% after costs</td><td className="p-3">Usually</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FSBO</td><td className="p-3">Variable</td><td className="p-3">80–88% (no agent)</td><td className="p-3">Usually</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Connecticut Closing Costs and Requirements for Waterbury Sellers</h2>
          <p className="text-gray-700 mb-4">
            <strong>Attorney closing:</strong> Connecticut requires licensed CT attorneys for both buyer and seller at closing. USA Home Buyers coordinates the buyer-side attorney. You need your own closing attorney.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Conveyance tax:</strong> Waterbury is a Connecticut Targeted Investment Community (TIC) under <a href="https://www.cga.ct.gov/current/pub/chap_224.htm" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">CGS §12-494</a>. The TIC designation affects the conveyance tax structure. Verify the exact current rate with a Connecticut-licensed real estate attorney — USA Home Buyers covers all closing costs including the conveyance tax when we purchase.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Deed recording:</strong> Waterbury Town Clerk, 235 Grand Street, Waterbury CT, phone (203) 574-6806 — verify current contact information. <strong>Probate Court (for estate situations):</strong> 49 Leavenworth Street (NOT City Hall) — (203) 755-1127, confirmed via <a href="https://ctprobate.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">ctprobate.gov</a>.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Sale Makes More Sense Than Listing in Waterbury</h2>
          <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
            <li>Property needs significant repairs that would block FHA/conventional financing</li>
            <li>Connecticut strict foreclosure is in progress — Law Day is approaching</li>
            <li>Estate in Waterbury Probate Court (49 Leavenworth St.) and you need a buyer who'll coordinate with your CT attorney</li>
            <li>You're a Miami, Boston, or Philadelphia-based heir who needs to close without coming to Waterbury repeatedly</li>
            <li>Tenants are in place in a two-family or multi-unit property</li>
            <li>Two-tier market dynamics — your property is in the 78-day average DOM category, not the 6-offer category</li>
          </ul>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling in Waterbury CT" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Waterbury CT Resources</h2>
          <div className="grid grid-cols-2 gap-3">
            {[{ href: '/markets/waterbury-ct', label: 'Waterbury CT Market Page' }, { href: '/markets/waterbury-ct/market-report', label: 'Market Report' }, { href: '/markets/waterbury-ct/foreclosure', label: 'Foreclosure Guide' }, { href: '/markets/waterbury-ct/inherited-property', label: 'Inherited Property' }, { href: '/markets/waterbury-ct/probate', label: 'Probate Guide' }, { href: '/sell-house-fast-connecticut', label: 'Connecticut Seller Guide' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Waterbury CT Home?" subheadline="Written offer in 24 hours. No fees, no repairs, no obligation." sourcePage="/guides/sell-house-fast-waterbury-ct-2026" />
      </div>
    </>
  );
}
