/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { cantonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/canton-oh/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Canton OH — Sell Before Stark County Sheriff Sale',
  description: 'Facing foreclosure in Canton OH? Ohio judicial foreclosure leads to a Stark County Realauction online sheriff sale every Monday. We buy houses for cash before the sale. Close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell before foreclosure in Canton OH?', answer: "USA Home Buyers closes in as few as 7 days in Canton. Ohio foreclosure is judicial — the lender files in Stark County Common Pleas Court, and after judgment the property goes to sheriff sale online through Realauction (sheriffsales.starkcountyohio.gov) every Monday at 10:00 a.m. Eastern. Once that Monday date is set, options narrow. A cash sale before judgment preserves your equity and your credit. Call 888-274-5006. Consult an Ohio-licensed real estate attorney for guidance specific to your case." },
  { question: 'Will selling stop the foreclosure in Ohio?', answer: "Yes — a completed sale satisfies the mortgage and ends proceedings. You keep any equity above your payoff amount. The earlier you act, the more options you have. Redemption may be possible even after the Stark County sheriff sale but before court confirmation — consult an attorney immediately if you're past the sale date." },
  { question: 'What is the foreclosure process in Stark County?', answer: "Ohio requires judicial foreclosure. The lender files in Stark County Common Pleas Court. After the court enters a judgment, the property is ordered sold. Stark County conducts sheriff sales online through Realauction every Monday at 10:00 a.m. Eastern; if Monday is a holiday, sale moves to Tuesday. Deposits of $2,000, $5,000, or $10,000 are required depending on the law, due by wire 2 business days before or by ACH 5 days before the sale. After the sale, the sheriff has up to 60 days to report; the court has up to 30 days to confirm. Source: Stark County Sheriff foreclosure page. Consult an Ohio-licensed real estate attorney for your specific situation." },
  { question: 'What if I owe more than the house is worth?', answer: "A short sale may be possible. We have experience coordinating short sales with lenders in Canton and Stark County. Call us and we'll tell you honestly whether a cash sale or short sale makes more sense." },
];

export default function CantonForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[cantonLocalBusinessSchema, articleSchema('Stop Foreclosure in Canton OH', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/canton-oh" className="hover:text-white">Canton OH</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Canton OH — Sell Before the Stark County Monday Sheriff Sale</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Ohio judicial foreclosure leads to a Stark County sheriff sale online via Realauction (sheriffsales.starkcountyohio.gov) every Monday at 10:00 a.m. Eastern. USA Home Buyers purchases Canton OH houses before that date — written cash offer in 24 hours, close in 7–14 days. We cover all closing costs. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/canton-oh/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Ohio Judicial Foreclosure Works in Stark County</h2>
          <p className="text-gray-700 mb-4">Ohio requires judicial foreclosure — the lender must file in Stark County Common Pleas Court before selling the property. The 120-day federal servicing rule generally prevents filing until the borrower is more than 120 days delinquent. After the court enters a judgment of foreclosure, the property is ordered sold at sheriff sale. As of September 26, 2022, Stark County conducts all foreclosure sales online through the <a href="https://sheriffsales.starkcountyohio.gov/Foreclosures.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Stark County Sheriff's Realauction website</a>. Online auctions are every Monday at 10:00 a.m. Eastern Time; if Monday is a holiday, the sale moves to Tuesday.</p>
          <p className="text-gray-700 mb-4">After the sheriff sale, the sheriff has up to 60 days to report the sale to the court; the court then has up to 30 days to confirm. Redemption — paying the full judgment amount — may be possible before confirmation. A direct cash sale before the judgment preserves your equity and credit. Consult an Ohio-licensed real estate attorney for advice specific to your situation.</p>
          <p className="text-gray-700 mb-4">Canton homeowners facing pre-foreclosure face an additional challenge: with 41.5% of housing units built in 1939 or earlier, many older homes need significant work to attract retail buyers even with time to spare. A cash offer gets you out of the foreclosure process entirely — on your timeline, not the court's.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Canton OH" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/canton-oh/inherited-property', label: 'Inherited Property' }, { href: '/markets/canton-oh/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/canton-oh/probate', label: 'Probate' }, { href: '/markets/canton-oh/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/canton-oh/code-violations', label: 'Code Violations' }, { href: '/markets/canton-oh', label: '← Back to Canton OH' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Canton OH Property?" sourcePage="/markets/canton-oh/foreclosure" />
      </div>
    </>
  );
}
