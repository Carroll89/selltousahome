/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { fortWayneLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/fort-wayne-in/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Fort Wayne IN -- Fast Cash Sale',
  description: 'Need to sell during divorce in Fort Wayne IN? USA Home Buyers makes cash offers for court-ordered home sales -- close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can a court-ordered home sale be completed quickly in Fort Wayne?', answer: 'Yes. USA Home Buyers closes in as few as 7 days. Court-ordered sales require both parties to agree to the sale terms -- our written cash offer gives you one number both parties can accept. Call 888-274-5006.' },
  { question: 'Do both parties need to sign in a IN divorce sale?', answer: 'Yes -- both parties with legal interest in the property must sign the deed at closing. We coordinate with attorneys on both sides to make this as smooth as possible.' },
  { question: 'How are sale proceeds split in a divorce?', answer: 'Proceeds are distributed according to the court order or marital settlement agreement. We work directly with both attorneys to ensure funds are distributed per the court\'s instructions.' },
  { question: 'What closing costs apply to a Fort Wayne home sale?', answer: 'No Indiana transfer tax (abolished 2009); Sales Disclosure Form required at recording. When you sell to USA Home Buyers, we cover all closing costs.' },
  { question: 'How fast can you close?', answer: 'As few as 7 days from accepted offer. For divorces with court timelines, we can also hold closing for a date you specify. Call 888-274-5006.' },
];

const LINKS = [
  { href: '/markets/fort-wayne-in/inherited-property', label: 'Inherited Property' },
  { href: '/markets/fort-wayne-in/foreclosure', label: 'Foreclosure' },
  { href: '/markets/fort-wayne-in/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/fort-wayne-in/probate', label: 'Probate' },
  { href: '/markets/fort-wayne-in/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/fort-wayne-in/code-violations', label: 'Code Violations' },
  { href: '/markets/fort-wayne-in/fire-damage', label: 'Fire Damage' },
  { href: '/markets/fort-wayne-in', label: '<- Back to Fort Wayne IN' },
];

export default function FortWayneDivorceSalePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          fortWayneLocalBusinessSchema,
          articleSchema('Sell Your House During Divorce in Fort Wayne IN -- Court-Ordered Cash Sale', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/fort-wayne-in" className="hover:text-white">Fort Wayne IN</Link>
              {' > '} Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House During Divorce in Fort Wayne IN -- Court-Ordered Cash Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Need to sell during divorce in Fort Wayne IN? USA Home Buyers makes cash offers for court-ordered home sales -- close in 7 days.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Fort Wayne IN Cash Offer" sourcePage="/markets/fort-wayne-in/divorce-sale" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Sell House During Divorce Fort Wayne IN -- Fast Cash Sale" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Fort Wayne IN Home?" sourcePage="/markets/fort-wayne-in/divorce-sale" />
      </div>
    </>
  );
}
