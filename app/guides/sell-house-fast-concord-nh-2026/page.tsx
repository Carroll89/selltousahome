/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-concord-nh-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Concord NH (2026 Guide)',
  description: 'Complete guide to selling your Concord NH house fast in 2026. Cash buyers vs. traditional listing, NH transfer tax, probate, foreclosure, and what sellers need to know.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the fastest way to sell a house in Concord NH?', answer: "A cash sale to a direct buyer like USA Home Buyers is the fastest path. Written offer in 24 hours, close in 7–14 days. No showings, no repairs, no waiting for buyer financing. Call 888-274-5006." },
  { question: 'What does it cost to sell a house in Concord NH?', answer: "With a traditional agent: 5–6% commission (~$20,975–$25,170 on $419,500 median) plus the seller's share of the NH RETT ($3,146), repair costs, and carrying costs during 34 average days on market. With USA Home Buyers: no commissions, no fees, we cover all closing costs including the seller's share of the transfer tax." },
  { question: 'How does New Hampshire\'s real estate transfer tax work?', answer: "NH charges a Real Estate Transfer Tax (RETT) of $0.75 per $100 from buyer and $0.75 per $100 from seller — total 1.5% of the sale price, split equally. Both parties purchase stamps from the Merrimack County Registry of Deeds (163 North Main St., Suite 103, Concord NH 03301, phone 603-228-0101) at closing. Separate checks required for recording fee, transfer tax, and LCHIP. On a $419,500 home, total RETT = ~$6,293; seller's share = ~$3,146. USA Home Buyers covers the seller's share when we purchase. Source: NH DRA RETT FAQ; Merrimack County Registry." },
  { question: 'Is Concord a good market to sell in 2026?', answer: "According to Redfin (March 2026), Concord's median sale price is $419,500 with a Compete Score of 86/100 and 99.0% sale-to-list. Homes go pending in about 34 days. However, the city's 66% pre-1980 housing stock often needs $20,000–$50,000+ in updates to attract retail buyers — that's where a cash sale makes sense." },
  { question: 'What options do Concord sellers have?', answer: "1. Cash sale (fastest, most certain) — 7–14 days, as-is, no fees. 2. Traditional listing (highest potential price) — 34+ average days, repairs often required, 5–6% commission. 3. FSBO (save commission but less reach, more work). 4. iBuyer/investor (convenience but often lower net than retail listing)." },
];

export default function ConcordGuide2026Page() {
  return (
    <>
      <SchemaMarkup schema={[concordLocalBusinessSchema, articleSchema('How to Sell a House Fast in Concord NH (2026)', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › Seller Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell a House Fast in Concord NH — 2026 Guide</h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in Concord NH and Merrimack County for cash, as-is, in any condition. Written offer in 24 hours, close in 7–14 days. According to Redfin (March 2026), Concord's median sale price is $419,500 with a Compete Score of 86/100. NH RETT is $0.75/$100 from seller + $0.75/$100 from buyer, collected at Merrimack County Registry. Cash sale eliminates agent commissions, transfer tax cost, and the 34-day average time on market. Call 888-274-5006 or visit selltousahome.com.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Options for Selling a House in Concord NH</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Option</th><th className="text-left p-3">Timeline</th><th className="text-left p-3">Net Proceeds</th><th className="text-left p-3">Repairs Required?</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Cash buyer (USA Home Buyers)</td><td className="p-3">7–14 days</td><td className="p-3">70–82% of FMV</td><td className="p-3">No</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Traditional listing</td><td className="p-3">34+ days average</td><td className="p-3">84–90% after costs</td><td className="p-3">Usually</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FSBO</td><td className="p-3">Variable</td><td className="p-3">80–88% (no agent)</td><td className="p-3">Usually</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">iBuyer / investor</td><td className="p-3">14–30 days</td><td className="p-3">75–85%</td><td className="p-3">No</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">NH Transfer Tax and Closing Costs in Concord</h2>
          <p className="text-gray-700 mb-4">
            NH charges a Real Estate Transfer Tax (RETT) of $0.75 per $100 from buyer and $0.75 per $100 from seller — total 1.5% of the sale price, split equally by statute. Both parties purchase stamps from the <a href="https://www.merrimackcounty.net/departments/register_of_deeds/index.php" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Merrimack County Registry of Deeds</a> (163 North Main St., Suite 103, Concord NH 03301, Register Samantha Morse, phone 603-228-0101, Mon–Fri 8:30–3:30) at closing. Recording requires separate checks for recording fee, transfer tax, and LCHIP (Land & Community Heritage Investment Program). On a $419,500 Concord home: total RETT ~$6,293; seller's share ~$3,146. USA Home Buyers covers the seller's share when we purchase. Source: <a href="https://www.revenue.nh.gov/resource-center/frequently-asked-questions/real-estate-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">NH DRA RETT FAQ</a>.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Sale Makes More Sense Than Listing</h2>
          <p className="text-gray-700 mb-4">Concord's 86/100 Compete Score means move-in-ready homes attract buyers. But the city's 66% pre-1980 housing stock — New England Colonials, Cape Cods, and older multifamily in Abbott-Downing, South End, and Penacook — often needs $20,000–$50,000+ in updates to satisfy retail buyer expectations.</p>
          <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
            <li>Your property needs significant updates to compete on the retail market</li>
            <li>You're managing the sale from out of state as an heir or executor</li>
            <li>NH non-judicial foreclosure is running — you need to sell before the 45-day notice clock counts down</li>
            <li>Tenants are in place in a Penacook multifamily or older rental (43.2% renter-occupied market)</li>
            <li>Probate is open and you need a buyer who'll wait for NH Circuit Court Probate Division authorization</li>
          </ul>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling in Concord NH" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Concord NH Resources</h2>
          <div className="grid grid-cols-2 gap-3">
            {[{ href: '/markets/concord-nh', label: 'Concord NH Market Page' }, { href: '/markets/concord-nh/market-report', label: 'Market Report' }, { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure Guide' }, { href: '/markets/concord-nh/inherited-property', label: 'Inherited Property' }, { href: '/markets/concord-nh/probate', label: 'Probate Guide' }, { href: '/sell-house-fast-new-hampshire', label: 'NH Seller Guide' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Concord NH Home?" subheadline="Written offer in 24 hours. No fees, no repairs, no obligation." sourcePage="/guides/sell-house-fast-concord-nh-2026" />
      </div>
    </>
  );
}
