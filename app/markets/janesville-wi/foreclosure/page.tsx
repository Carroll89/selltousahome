/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { janesvilleLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/janesville-wi/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Janesville WI — Sell Before Rock County Sheriff Sale',
  description: 'Facing foreclosure in Janesville WI? Wisconsin judicial foreclosure runs through Rock County Circuit Court. We buy houses for cash before the sheriff sale. Close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell before foreclosure in Janesville WI?', answer: "USA Home Buyers closes in as few as 7 days in Janesville. Wisconsin judicial foreclosure runs through Rock County Circuit Court . After judgment, there's a redemption period — typically 3 to 6 months for mortgages signed after April 27, 2016 — then the sheriff's sale (Thursdays at 9:00 a.m., Rock County Justice Center lobby). A cash sale before judgment preserves your equity and your credit. Call 888-274-5006. Consult a Wisconsin-licensed real estate attorney for guidance specific to your case." },
  { question: 'Will selling stop the foreclosure in Wisconsin?', answer: "Yes — a completed sale satisfies the mortgage and ends proceedings. You keep any equity above your payoff amount. The earlier you act, the more options you have." },
  { question: 'What is the foreclosure process in Rock County?', answer: "Wisconsin requires judicial foreclosure. The lender files in Rock County Circuit Court. After judgment, Wisconsin law provides a redemption period — typically 3–6 months for newer mortgages, up to 12 months for older ones — then a sheriff's sale. Rock County sheriff sales are held Thursdays at 9:00 a.m. at the Justice Center (verify current county office location before relying on it). Winning bidders need 10% at sale; balance due within 10 days of court confirmation. Total timeline: 6–18 months from filing. Source: Wisconsin Law Help, Rock County Sheriff, Wisconsin Statutes Ch. 846. Consult a Wisconsin-licensed real estate attorney for your specific situation." },
  { question: 'What if I owe more than the house is worth?', answer: "A short sale may be possible. We have experience coordinating short sales with lenders in Janesville. Call us and we'll tell you honestly whether a cash sale or short sale makes more sense." },
];

export default function JanesvilleForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[janesvilleLocalBusinessSchema, articleSchema('Stop Foreclosure in Janesville WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/janesville-wi" className="hover:text-white">Janesville WI</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Janesville WI — Sell Before the Rock County Sheriff Sale</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Wisconsin judicial foreclosure takes 6–18 months through Rock County Circuit Court. Rock County sheriff-sale schedules should be confirmed locally; Wisconsin judicial foreclosure can still take Thursdays at 9:00 a.m. at the Justice Center (verify current county office location before relying on it). USA Home Buyers purchases houses from Janesville homeowners facing foreclosure — written cash offer in 24 hours, close in 7–14 days. We cover all closing costs. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/janesville-wi/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Judicial Foreclosure Works in Rock County</h2>
          <p className="text-gray-700 mb-4">Wisconsin requires judicial foreclosure — the lender must file in Rock County Circuit Court (the appropriate county circuit court office. After the court enters a judgment of foreclosure, Wisconsin law provides a redemption period. For owner-occupied residential properties with mortgages signed on or after April 27, 2016, the redemption period is typically 3 months if the lender waives deficiency, or 6 months if not. After the redemption period, the sheriff's sale is held on Thursdays at 9:00 a.m. in the lobby of the Rock County Justice Center. Winning bidders need 10% down at the time of sale, with the balance due within 10 days of court confirmation. Properties are sold as-is. A direct cash sale before judgment preserves your equity and credit. Consult a Wisconsin-licensed real estate attorney for advice specific to your situation. Source: <a href="https://www.wislawhelp.org/page/484/foreclosure-procedure" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Law Help</a>; <a href="https://www.outagamie.gov/Our-County/Sheriffs-Office/Foreclosures-Sheriff-Sales" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Rock County Sheriff</a>.</p>
          <p className="text-gray-700 mb-4">Janesville homeowners facing pre-foreclosure have more options the earlier they act. Older Craftsman bungalows and historic-district homes in Courthouse Hill Historic District, Old Fourth Ward, Downtown Janesville, Rockport, and Monterey often have deferred maintenance that complicates a quick retail sale. A cash offer gets you out of the foreclosure process entirely — on your timeline, not the court's.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Janesville WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/janesville-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/janesville-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/janesville-wi/probate', label: 'Probate' }, { href: '/markets/janesville-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/janesville-wi/code-violations', label: 'Code Violations' }, { href: '/markets/janesville-wi', label: '← Back to Janesville WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Janesville WI Property?" sourcePage="/markets/janesville-wi/foreclosure" />
      </div>
    </>
  );
}
