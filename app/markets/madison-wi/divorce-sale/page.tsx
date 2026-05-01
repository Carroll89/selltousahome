/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { madisonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/madison-wi/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Madison WI — Cash, Fast Close',
  description: 'Selling a house during divorce in Madison WI? We buy houses for cash — one offer, one close, one done date. No showings, no repairs. Serving Dane County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can one spouse sell the house without the other during divorce in Wisconsin?', answer: "Generally no — if both spouses are on the deed, both must sign the deed at closing. During divorce proceedings, the court may order a sale. Consult a Wisconsin family law attorney for your specific situation." },
  { question: 'How fast can we close on a Madison WI house during divorce?', answer: "USA Home Buyers can close in as few as 7 days once both parties agree and sign. We work with attorneys on both sides to coordinate a clean closing date that satisfies both parties and the court's timeline." },
  { question: 'Do we need to make repairs before selling?', answer: "No. We buy as-is. Many Madison homes — especially older Craftsman and Foursquare properties — have deferred maintenance or updates needed. We factor condition into our offer. You do nothing." },
  { question: 'How are proceeds divided in a Wisconsin divorce sale?', answer: "Wisconsin is a marital property state. Division of sale proceeds is determined by the divorce settlement or court order. We pay closing proceeds to the title company; how the money is divided is handled by the attorneys and court. We stay out of that part." },
];

export default function MadisonDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, articleSchema('Sell a House During Divorce in Madison WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/madison-wi" className="hover:text-white">Madison WI</Link> › Divorce Sale</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Madison WI House During Divorce — One Offer, One Close</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses from Madison WI couples going through divorce — one offer, one closing date, no showings. We work with both attorneys, close in 7–14 days, and pay proceeds to the title company for distribution per the settlement. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/madison-wi/divorce-sale" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why a Cash Sale Works for Divorcing Couples in Madison</h2>
          <p className="text-gray-700 mb-4">When a marriage ends, the shared home becomes a complication. Traditional listings require both parties to agree on a list price, showing schedules, repair requests, and negotiation responses — at exactly the moment when agreement is hardest. A cash sale collapses that to a single decision: accept the offer or don't. One meeting, one signing, one done date.</p>
          <p className="text-gray-700 mb-4">Wisconsin is a marital property state under <a href="https://docs.legis.wisconsin.gov/statutes/statutes/766" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Statutes Ch. 766</a>. Courts in Dane County regularly order home sales as part of divorce settlements. We work with both attorneys, the court's timeline, and whatever closing logistics the settlement requires. We don't get in the middle of the dispute — we get the house sold.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Home Sale in Madison WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/madison-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/madison-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/madison-wi/probate', label: 'Probate' }, { href: '/markets/madison-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/madison-wi/code-violations', label: 'Code Violations' }, { href: '/markets/madison-wi', label: '← Back to Madison WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Madison WI Property?" sourcePage="/markets/madison-wi/divorce-sale" />
      </div>
    </>
  );
}
