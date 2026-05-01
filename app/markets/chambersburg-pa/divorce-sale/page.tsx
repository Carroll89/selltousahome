/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { chambersburgLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/chambersburg-pa/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Chambersburg PA — Cash, Fast Close',
  description: 'Selling a house during divorce in Chambersburg PA? We buy houses for cash — one offer, one close, no showings. Serving Franklin County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can one spouse sell the house without the other in Pennsylvania?', answer: 'Generally no — both spouses on the deed must sign. Courts in Franklin County may order a sale as part of the divorce settlement. Consult a Pennsylvania family law attorney for your situation.' },
  { question: 'How does Pennsylvania handle marital property in a divorce?', answer: "Pennsylvania follows equitable distribution of marital property — assets are divided fairly but not necessarily 50/50. The divorce court in Franklin County's Court of Common Pleas determines the split. We coordinate with both attorneys, pay closing proceeds to the title company, and let the legal process govern distribution." },
  { question: 'How fast can we close in Chambersburg?', answer: 'As few as 7 days once both parties agree. We work with both attorneys to coordinate a closing date that works for the settlement timeline.' },
  { question: 'Do we need to make repairs before selling?', answer: 'No. We buy as-is. Many Franklin County homes need updates — we factor condition into our offer and you do nothing.' },
];

const LINKS = [
  { href: '/markets/chambersburg-pa/inherited-property', label: 'Inherited Property' },
  { href: '/markets/chambersburg-pa/foreclosure', label: 'Foreclosure' },
  { href: '/markets/chambersburg-pa/probate', label: 'Probate' },
  { href: '/markets/chambersburg-pa/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/chambersburg-pa/code-violations', label: 'Code Violations' },
  { href: '/markets/chambersburg-pa', label: '← Back to Chambersburg PA' },
];

export default function ChambersburgDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, articleSchema('Sell a House During Divorce in Chambersburg PA', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › Divorce Sale</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Chambersburg PA House During Divorce — One Offer, One Close</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses from Franklin County couples going through divorce — one offer, one closing date, no showings. We work with both attorneys. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/chambersburg-pa/divorce-sale" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why a Cash Sale Works for Divorcing Couples in Franklin County</h2>
          <p className="text-gray-700 mb-4">When a marriage ends, the shared home becomes a decision that requires cooperation at the worst possible moment. A cash sale collapses the decision to one: accept the offer or don't. No showings, no repair negotiations, no carrying costs while waiting for a retail buyer who needs financing. One number, one date.</p>
          <p className="text-gray-700 mb-4">Pennsylvania follows equitable distribution under the Divorce Code (23 Pa.C.S. §3502). Chambersburg courts in Franklin County's Court of Common Pleas handle the division of proceeds — we coordinate the closing and pay into the title company for distribution as ordered. We don't take sides.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Home Sale in Chambersburg PA" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Chambersburg PA Property?" sourcePage="/markets/chambersburg-pa/divorce-sale" />
      </div>
    </>
  );
}
