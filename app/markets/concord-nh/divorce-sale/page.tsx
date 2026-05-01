/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Concord NH — Cash, Fast Close',
  description: 'Selling a house during divorce in Concord NH? We buy houses for cash — one offer, one close, one done date. No showings, no repairs. Serving Merrimack County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can one spouse sell the house without the other during divorce in New Hampshire?', answer: "Generally no — if both spouses are on the deed, both must sign. During divorce proceedings, the court may order a sale. Consult a NH family law attorney for your specific situation." },
  { question: 'How fast can we close on a Concord NH house during divorce?', answer: "USA Home Buyers can close in as few as 7 days once both parties agree and sign. We work with attorneys on both sides to coordinate a clean closing date that satisfies both parties and the court's timeline." },
  { question: 'Do we need to make repairs before selling?', answer: "No. We buy as-is. Many Concord homes — especially older Colonial and Federal-style properties in Abbott-Downing and South End — have deferred maintenance. We factor condition into our offer. You do nothing." },
  { question: 'How are proceeds divided in a NH divorce sale?', answer: "NH is an equitable distribution state. Division of sale proceeds is determined by the divorce settlement or court order. We pay closing proceeds to the title company; how the money is divided is handled by the attorneys and court. We stay out of that part." },
];

export default function ConcordDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[concordLocalBusinessSchema, articleSchema('Sell a House During Divorce in Concord NH', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › Divorce Sale</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Concord NH House During Divorce — One Offer, One Close</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses from Concord NH couples going through divorce — one offer, one closing date, no showings. We work with both attorneys, close in 7–14 days, and pay proceeds to the title company for distribution per the settlement. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/concord-nh/divorce-sale" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why a Cash Sale Works for Divorcing Couples in Concord</h2>
          <p className="text-gray-700 mb-4">When a marriage ends, the shared home becomes a complication. Traditional listings require both parties to agree on a list price, showing schedules, repair requests, and negotiation responses — at exactly the moment when agreement is hardest. A cash sale collapses that to a single decision: accept the offer or don't. One meeting, one signing, one done date.</p>
          <p className="text-gray-700 mb-4">New Hampshire is an equitable distribution state — marital property is divided fairly in divorce proceedings. Merrimack County courts regularly order home sales as part of divorce decrees. We work with both attorneys, the court's timeline, and whatever closing logistics the settlement requires. We don't get in the middle of the dispute — we get the house sold.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Sale in Concord NH" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/concord-nh/inherited-property', label: 'Inherited Property' }, { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' }, { href: '/markets/concord-nh/probate', label: 'Probate' }, { href: '/markets/concord-nh/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/concord-nh/code-violations', label: 'Code Violations' }, { href: '/markets/concord-nh', label: '← Back to Concord NH' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Concord NH Property?" sourcePage="/markets/concord-nh/divorce-sale" />
      </div>
    </>
  );
}
