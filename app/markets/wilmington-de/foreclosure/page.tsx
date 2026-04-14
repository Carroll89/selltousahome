/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wilmingtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Wilmington DE',
  description:
    'Facing foreclosure in Wilmington DE? Sell your house before the sheriff sale. Delaware judicial foreclosure is 6-9 months — sell now, protect your equity.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Delaware?',
    answer: "Delaware is a judicial foreclosure state. Lenders must file a complaint in New Castle County Superior Court. The statutory timeline from filing to sheriff's sale is 170-210 days, but 6-9 months is typical in practice depending on NCC court backlog. This includes the complaint filing, service of process (homeowner has 20 days to respond), court proceedings, and sheriff's sale scheduling. Delaware has no post-sale right of redemption — once the court confirms the sheriff's sale, there is no way to reclaim the property. Sources: amerinotexchange.com; Nolo Delaware Foreclosure Laws.",
  },
  {
    question: 'Can I sell my Wilmington house to stop foreclosure?',
    answer: "Yes. You can sell your home at any point before the sheriff's sale — even after a foreclosure complaint is filed in NCC Superior Court. A cash sale closes faster than the foreclosure process. The proceeds pay off the mortgage balance, any liens, and closing costs. If you have equity, you walk away with cash instead of losing the property at sheriff's sale with no proceeds.",
  },
  {
    question: 'Does Delaware have a right of redemption after foreclosure?',
    answer: "No. Delaware does not provide a statutory right of redemption after a judicial foreclosure sale. Once the New Castle County Superior Court confirms the sheriff's sale, the homeowner has no legal right to reclaim the property by paying the amount owed. This makes selling before the sheriff's sale even more critical.",
  },
  {
    question: 'What is the Delaware Foreclosure Mediation Program?',
    answer: "Delaware offers a voluntary foreclosure mediation program through the Delaware Superior Court to allow lenders and homeowners to negotiate alternatives — loan modification, repayment plans, or short sales. Wilmington homeowners in default should contact Delaware Legal Aid at (302) 575-0408 or Community Legal Aid Society (clasi.org) for free guidance.",
  },
  {
    question: 'How much will I net from selling before a Wilmington foreclosure?',
    answer: "According to Redfin, Wilmington's median sale price is $210,000 as of February 2026. Cash offers typically run 65-75% of after-repair value. From the offer, your mortgage payoff, any liens, and closing costs are paid at closing. We cover all closing costs including Delaware's 4% transfer tax — nothing extra out of your pocket.",
  },
  {
    question: 'How quickly can you close if I\'m facing foreclosure in Wilmington?',
    answer: "We close in as few as 7 days once we have clear title. Given Delaware's judicial foreclosure timeline of 6-9 months, most sellers in the early stages of foreclosure have more time than they realize — but every month of delay adds carrying costs and brings the sheriff's sale closer. Call us today for a written offer within 24 hours.",
  },
];

export default function WilmingtonForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        wilmingtonLocalBusinessSchema,
        articleSchema('Selling Your House Before Foreclosure in Wilmington DE — New Castle County', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/wilmington-de-hero-640.jpg 640w, /images/optimized/wilmington-de-hero-828.jpg 828w, /images/optimized/wilmington-de-hero-1080.jpg 1080w, /images/optimized/wilmington-de-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/wilmington-de-hero-1200.jpg"
            alt="Wilmington DE home — stop foreclosure with a cash sale"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/wilmington-de" className="hover:text-white">Wilmington DE</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Before the Sheriff Sale — Wilmington DE Foreclosure Help
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Delaware's judicial foreclosure process moves through New Castle County Superior Court.
              You have time to act — but the timeline closes fast. A cash sale can close in 7 days,
              pay off your mortgage, and let you walk away with equity instead of nothing.
            </p>
            <div className="bg-amber-500/20 border border-amber-400 rounded-lg p-4 mb-4">
              <p className="text-amber-200 text-sm font-medium">
                ⚠️ Delaware has NO post-sale right of redemption. Once the sheriff's sale is confirmed, the property is gone. Act before the sale.
              </p>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3"
            >
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/wilmington-de" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Delaware Foreclosure Timeline — What Happens and When</h2>
          <p className="text-gray-700 mb-4">
            Delaware is a <strong>judicial foreclosure state</strong>. Every foreclosure goes through the court system —
            there is no non-judicial/power-of-sale option. Lenders must file a complaint in New Castle County Superior
            Court, and the process proceeds under court oversight. According to{' '}
            <a href="https://www.amerinotexchange.com/foreclosure-law/delaware/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">amerinotexchange.com's Delaware foreclosure guide</a>
            {' '}and{' '}
            <a href="https://www.nolo.com/legal-encyclopedia/delaware-foreclosure-laws-and-procedures.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Nolo's Delaware Foreclosure Laws</a>,
            the typical timeline:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left">Phase</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Default / Notice', 'Lender sends notice after missed payments', 'After 90+ days delinquent'],
                  ['Complaint Filed', 'Lender files in NCC Superior Court', '30-90 days post-default'],
                  ['Service & Response', 'Homeowner served; 20 days to respond', '20-60 days'],
                  ['Court Proceedings', 'Judge reviews; sheriff\'s sale ordered', '60-120 days'],
                  ['Sheriff\'s Sale', 'Public auction', 'After court order'],
                  ['Confirmation', 'Court confirms sale — NO redemption right', '10-30 days post-sale'],
                  ['Total typical timeline', '170-210 days by statute; 6-9 months in practice', 'Varies by NCC backlog'],
                ].map(([phase, desc, time], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border border-gray-100">{phase}</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-100">{desc}</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-100">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm">
            The key difference from Pennsylvania: Delaware has <strong>no post-sale right of redemption</strong>.
            In PA, foreclosure sales can sometimes be challenged post-sale. In Delaware, once the court confirms
            the sheriff's sale, the property is gone permanently.
          </p>
        </section>

        <section className="mb-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Free Foreclosure Resources — Wilmington DE</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              <strong>Delaware Legal Aid:</strong> (302) 575-0408 — free legal help for eligible homeowners
            </li>
            <li>
              <strong>Community Legal Aid Society (CLASI):</strong>{' '}
              <a href="https://www.clasi.org" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">clasi.org</a>
              {' '}— Wilmington-based legal aid
            </li>
            <li>
              <strong>HUD-Approved Housing Counselor:</strong> Call 1-800-569-4287 or visit{' '}
              <a href="https://www.hud.gov/find_a_housing_counselor" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">hud.gov</a>
            </li>
            <li>
              <strong>Delaware Foreclosure Mediation Program:</strong> Voluntary mediation through Delaware Superior Court to negotiate loan modifications or alternatives
            </li>
          </ul>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer — Stop the Foreclosure Clock"
          subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs including Delaware's 4% transfer tax."
          sourcePage="/markets/wilmington-de"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Foreclosure in Wilmington DE" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">Wilmington DE Cash Home Buyers →</Link></li>
            <li><Link href="/markets/wilmington-de/inherited-property" className="text-brand-primary hover:underline">Inherited Property in Wilmington DE →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
