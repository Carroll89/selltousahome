/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { greenBayLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Green Bay WI — Cash, Fast Close',
  description: 'Selling a house during divorce in Green Bay WI? We buy houses for cash — one offer, one close. No showings, no repairs. Serving Brown County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "Can one spouse sell the house without the other in Wisconsin?", answer: "Generally no — both spouses on the deed must sign. Courts in Brown County may order a sale as part of the divorce settlement. Consult a Wisconsin family law attorney for your situation." },
  { question: "How fast can we close in Green Bay?", answer: "As few as 7 days once both parties agree. We work with both attorneys to coordinate a closing date that satisfies the settlement timeline. Written offer within 24 hours." },
  { question: "Do we need to make repairs before selling?", answer: "No. We buy as-is. Many Green Bay homes — Ranch, Cape Cod, older working-class stock — have deferred maintenance. We factor condition into our offer." },
  { question: "Wisconsin is a marital property state — how does that affect the sale?", answer: "Wisconsin follows community property principles for marital assets. The divorce court in Brown County Circuit Court determines the split of proceeds. We coordinate with both attorneys and pay proceeds to the title company for distribution per the settlement. Source: Wisconsin Statutes Ch. 766." },
];

const LINKS = [
  { href: '/markets/green-bay-wi/inherited-property', label: 'Inherited Property' },
  { href: '/markets/green-bay-wi/foreclosure', label: 'Foreclosure' },
  { href: '/markets/green-bay-wi/probate', label: 'Probate' },
  { href: '/markets/green-bay-wi/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/green-bay-wi/code-violations', label: 'Code Violations' },
  { href: '/markets/green-bay-wi', label: '← Back to Green Bay WI' },
];

export default function GreenBayDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('Sell a House During Divorce in Green Bay WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Divorce Sale</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Green Bay WI House During Divorce — One Offer, One Close</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses from Green Bay WI couples going through divorce — one offer, one closing date, no showings. We work with both attorneys. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/green-bay-wi/divorce-sale" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why a Cash Sale Works for Divorcing Couples in Brown County</h2>
          <p className="text-gray-700 mb-4">A cash sale collapses the home-sale decision to one: accept the offer or don't. No showings, no repair negotiations, no carrying costs while waiting for a retail buyer. Wisconsin's community property framework means the division of proceeds is handled by the Brown County Circuit Court — we coordinate with both attorneys, get the house sold, and pay into the title company for distribution per the court's order.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Home Sale in Green Bay WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Green Bay WI Property?" sourcePage="/markets/green-bay-wi/divorce-sale" />
      </div>
    </>
  );
}
