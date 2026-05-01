/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { milwaukeeLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/milwaukee-wi/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Milwaukee WI — Sell Before Milwaukee County Sheriff Sale',
  description: 'Facing foreclosure in Milwaukee WI? Wisconsin judicial foreclosure runs through Milwaukee County Circuit Court with sheriff auctions every Monday morning. We buy houses for cash. Close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell before foreclosure in Milwaukee WI?', answer: "USA Home Buyers closes in as few as 7 days in Milwaukee. Wisconsin judicial foreclosure runs through Milwaukee County Circuit Court (901 N. 9th St., Milwaukee). After judgment, there's a redemption period — typically 3 to 6 months for post-April 2016 mortgages — then the Milwaukee County sheriff real estate auction (every Monday morning). A cash sale before judgment preserves your equity and credit. Call 888-274-5006. Consult a Wisconsin-licensed real estate attorney for guidance specific to your case." },
  { question: 'Will selling stop the foreclosure in Wisconsin?', answer: "Yes — a completed sale satisfies the mortgage and ends proceedings. You keep any equity above your payoff amount. The earlier you act, the more options you have." },
  { question: 'What is the foreclosure process in Milwaukee County?', answer: "Wisconsin requires judicial foreclosure. The lender files in Milwaukee County Circuit Court. After judgment, Wisconsin law provides a redemption period — typically 3–6 months for mortgages signed after April 27, 2016 (Wis. Stat. §846.101). Milwaukee County sheriff real estate auctions occur every Monday morning at the Milwaukee County Sheriff's Office (949 N. 9th St., Milwaukee). Notice of sale must be posted and published weekly for 3 successive weeks before the sale. Total timeline: 6–18 months from filing. Source: Wisconsin Law Help, Milwaukee County. Consult a Wisconsin-licensed real estate attorney for your situation." },
  { question: 'What about Milwaukee tax foreclosure?', answer: "Milwaukee uses in-rem tax foreclosure for unpaid property taxes. Wisconsin Law Help explains that if property taxes remain unpaid by Aug. 31, a tax certificate starts a two-year redemption period; after that the City of Milwaukee may use an in-rem foreclosure process. Consult an attorney for your specific situation. Source: Wisconsin Law Help." },
];

export default function MilwaukeeForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[milwaukeeLocalBusinessSchema, articleSchema('Stop Foreclosure in Milwaukee WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/milwaukee-wi" className="hover:text-white">Milwaukee WI</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Milwaukee WI — Sell Before the Monday Sheriff Auction</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Wisconsin judicial foreclosure takes 6–18 months through Milwaukee County Circuit Court. Milwaukee County sheriff real estate auctions occur every Monday morning. USA Home Buyers purchases Milwaukee WI houses facing foreclosure — written cash offer in 24 hours, close in 7–14 days. We cover all closing costs. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/milwaukee-wi/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Judicial Foreclosure Works in Milwaukee County</h2>
          <p className="text-gray-700 mb-4">Wisconsin requires judicial foreclosure — the lender must file in Milwaukee County Circuit Court (901 N. 9th Street, Milwaukee WI 53233). After the court enters a judgment of foreclosure, Wisconsin law provides a redemption period. Under <a href="https://docs.legis.wisconsin.gov/statutes/statutes/846/101?view=section" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wis. Stat. §846.101</a>, for owner-occupied one-to-four-family residential properties with mortgages executed on or after April 27, 2016, the redemption period is typically 3 months if deficiency is waived, or 6 months if not. After the redemption period, a Milwaukee County sheriff real estate auction is scheduled. These auctions occur every Monday morning; foreclosure sales are posted in the lobby of the Criminal Justice Facility at 949 N. 9th St., Milwaukee.</p>
          <p className="text-gray-700 mb-4">Milwaukee homeowners facing pre-foreclosure have a particular challenge: the city's older duplex and multifamily stock — German duplexes, Cream City brick buildings, and pre-war housing in Bay View, Sherman Park, and Riverwest — is exactly the stock that's hardest to sell quickly through traditional channels. A cash offer gets you out of the foreclosure process entirely.</p>
          <p className="text-gray-700 mb-4">Milwaukee also has a separate city tax foreclosure process under an in-rem proceeding for unpaid property taxes. If property taxes go unpaid past August 31, a two-year redemption period begins; after that the City of Milwaukee may proceed with in-rem foreclosure. Source: <a href="https://www.wislawhelp.org/page/507/property-tax-issues-homeowners" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Law Help</a>.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Milwaukee WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/milwaukee-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/milwaukee-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/milwaukee-wi/probate', label: 'Probate' }, { href: '/markets/milwaukee-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/milwaukee-wi/code-violations', label: 'Code Violations' }, { href: '/markets/milwaukee-wi', label: '← Back to Milwaukee WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Milwaukee WI Property?" sourcePage="/markets/milwaukee-wi/foreclosure" />
      </div>
    </>
  );
}
