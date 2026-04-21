/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { hartfordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Hartford CT — Sell Before the Law Day',
  description:
    'Facing foreclosure in Hartford CT? We buy houses before the strict foreclosure Law Day. Written offer in 24 hours. Close in 7 days. No fees.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Hartford CT?',
    answer: 'We can close in as few as 7 days once you accept an offer. Connecticut uses strict foreclosure — the lender files in Hartford Superior Court, and if granted, the court sets a "Law Day." You must pay the full debt by that date or title transfers directly to the lender. No auction, no bidding, no redemption after. Timeline from filing to judgment: typically 3-6 months. Source: CT Judicial Branch (jud.ct.gov). Call 888-440-5250 immediately.',
  },
  {
    question: 'What is the foreclosure process in Hartford County?',
    answer: 'Connecticut uses strict foreclosure. The lender files in Hartford Superior Court. If the court grants foreclosure, it sets a "Law Day" — a deadline to pay the full amount or lose title directly to the lender. There is no public auction. Timeline from filing to judgment: typically 3-6 months. Source: CT Judicial Branch (jud.ct.gov).',
  },
  {
    question: 'Will selling stop foreclosure proceedings?',
    answer: 'Yes — a completed sale satisfies the mortgage and ends the foreclosure. Proceeds pay off the outstanding balance, and you keep any remaining equity. Even if the mortgage exceeds the value, a short sale may be possible. Call us to discuss your situation.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'A short sale may be an option — the lender agrees to accept less than the full payoff to release the lien. We have experience with short sales in Hartford and can help you understand whether that path works in your case.',
  },
];

export default function HartfordForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        hartfordLocalBusinessSchema,
        articleSchema('Stop Foreclosure in Hartford CT — Sell Your House Fast', pageUrl, '2026-04-20'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Hartford CT — Sell Your House Before the Law Day
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Connecticut strict foreclosure gives you no auction and no second chance after the Law Day. USA Home Buyers purchases houses in Hartford CT from homeowners facing foreclosure — written cash offer in 24 hours, close in 7-14 days. We cover all closing costs. Serving Hartford County. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <p className="text-blue-100 text-sm mb-4">Hablamos español — servimos a la comunidad de habla hispana.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/hartford-ct/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Strict Foreclosure Works in Hartford CT</h2>
          <p className="text-gray-700 mb-4">
            Connecticut is one of only a few states that uses strict foreclosure — and it's one of the harshest systems for homeowners. Here's how it works in Hartford County:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
            <li>The lender files a foreclosure complaint in Hartford Superior Court.</li>
            <li>If the court determines you owe more than the property is worth, it grants a strict foreclosure decree.</li>
            <li>The court sets a "Law Day" — a specific date by which you must pay the full debt.</li>
            <li>If you don't pay by the Law Day, title transfers directly to the lender. No auction. No bidding. No redemption period.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            The timeline from filing to judgment is typically 3-6 months. Once the Law Day passes, your options are gone. Source: Connecticut Judicial Branch (<a href="https://jud.ct.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">jud.ct.gov</a>).
          </p>
          <p className="text-gray-700">
            A direct cash sale before the Law Day is often the only way to preserve equity and avoid a foreclosure on your credit for seven years.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Hartford CT" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Hartford CT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/hartford-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/hartford-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/hartford-ct/probate', label: 'Probate' },
              { href: '/markets/hartford-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/hartford-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/hartford-ct', label: '← Back to Hartford' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Hartford CT Property?" sourcePage="/markets/hartford-ct/foreclosure" />
      </div>
    </>
  );
}
