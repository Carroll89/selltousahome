/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { waterburyLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/waterbury-ct/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Waterbury CT — Cash, Fast Close',
  description: 'Selling a house during divorce in Waterbury CT? We buy houses for cash — one offer, one close, CT attorney coordinated. No showings, no repairs. Serving New Haven County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can one spouse sell the house without the other in Connecticut?', answer: "Generally no — both spouses on the deed must consent. Courts in New Haven County may order a sale as part of the divorce settlement. Consult a Connecticut family law attorney for your situation." },
  { question: 'Does Connecticut require an attorney at closing for a divorce sale?', answer: "Yes — Connecticut is an attorney-closing state. Both buyer and seller must have CT attorneys at closing. We coordinate the buyer-side attorney. Your divorce attorney or a separate closing attorney handles the seller side." },
  { question: 'How fast can we close in Waterbury?', answer: "As few as 7 days once both parties agree. We work with both attorneys and the court timeline. Written offer within 24 hours of first contact." },
  { question: 'Do we need to make repairs before selling?', answer: "No. We buy as-is. Waterbury's compact frame homes and two-family properties often have deferred maintenance — we factor condition into our offer." },
];

const LINKS = [
  { href: '/markets/waterbury-ct/inherited-property', label: 'Inherited Property' },
  { href: '/markets/waterbury-ct/foreclosure', label: 'Foreclosure' },
  { href: '/markets/waterbury-ct/probate', label: 'Probate' },
  { href: '/markets/waterbury-ct/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/waterbury-ct/code-violations', label: 'Code Violations' },
  { href: '/markets/waterbury-ct', label: '← Back to Waterbury CT' },
];

export default function WaterburyDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, articleSchema('Sell a House During Divorce in Waterbury CT', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › Divorce Sale</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Waterbury CT House During Divorce — One Offer, CT Attorney Closing</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses from Waterbury CT couples going through divorce — one offer, one closing date, no showings. Connecticut requires attorney closing — we coordinate. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/waterbury-ct/divorce-sale" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Divorce Home Sales in Waterbury CT</h2>
          <p className="text-gray-700 mb-4">Connecticut follows equitable distribution of marital assets — the family court in New Haven County determines the split of proceeds. When both parties agree to a cash sale, we coordinate with both attorneys, schedule a Connecticut-attorney closing, and pay proceeds to the title company for distribution per the settlement order. We don't take sides — we get the house sold.</p>
          <p className="text-gray-700 mb-4">Connecticut is an attorney-closing state: both buyer and seller must have licensed CT attorneys at closing. We coordinate the buyer-side attorney. Your divorce attorney or a separate closing attorney handles the seller side. The closing can be coordinated remotely if needed.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Home Sale in Waterbury CT" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Waterbury CT Property?" sourcePage="/markets/waterbury-ct/divorce-sale" />
      </div>
    </>
  );
}
