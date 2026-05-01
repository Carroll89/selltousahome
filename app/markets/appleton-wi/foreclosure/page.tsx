/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { appletonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/appleton-wi/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Appleton WI — Sell Before Outagamie Sheriff Sale',
  description: 'Facing foreclosure in Appleton WI? Wisconsin judicial foreclosure runs through Outagamie County Circuit Court. We buy houses for cash before the sheriff sale. Close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell before foreclosure in Appleton WI?', answer: "USA Home Buyers closes in as few as 7 days in Appleton. Wisconsin judicial foreclosure runs through Outagamie County Circuit Court (320 S. Walnut St., Appleton WI 54911). After judgment, there's a redemption period — typically 3 to 6 months for mortgages signed after April 27, 2016 — then the sheriff's sale (Thursdays at 9:00 a.m., Outagamie County Justice Center lobby). A cash sale before judgment preserves your equity and your credit. Call 888-274-5006. Consult a Wisconsin-licensed real estate attorney for guidance specific to your case." },
  { question: 'Will selling stop the foreclosure in Wisconsin?', answer: "Yes — a completed sale satisfies the mortgage and ends proceedings. You keep any equity above your payoff amount. The earlier you act, the more options you have." },
  { question: 'What is the foreclosure process in Outagamie County?', answer: "Wisconsin requires judicial foreclosure. The lender files in Outagamie County Circuit Court. After judgment, Wisconsin law provides a redemption period — typically 3–6 months for newer mortgages, up to 12 months for older ones — then a sheriff's sale. Outagamie County sheriff sales are held Thursdays at 9:00 a.m. at the Justice Center (320 S. Walnut St., Appleton). Winning bidders need 10% at sale; balance due within 10 days of court confirmation. Total timeline: 6–18 months from filing. Source: Wisconsin Law Help, Outagamie County Sheriff, Wisconsin Statutes Ch. 846. Consult a Wisconsin-licensed real estate attorney for your specific situation." },
  { question: 'What if I owe more than the house is worth?', answer: "A short sale may be possible. We have experience coordinating short sales with lenders in Appleton. Call us and we'll tell you honestly whether a cash sale or short sale makes more sense." },
];

export default function AppletonForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[appletonLocalBusinessSchema, articleSchema('Stop Foreclosure in Appleton WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/appleton-wi" className="hover:text-white">Appleton WI</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Appleton WI — Sell Before the Outagamie Sheriff Sale</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Wisconsin judicial foreclosure takes 6–18 months through Outagamie County Circuit Court. Outagamie sheriff sales run Thursdays at 9:00 a.m. at the Justice Center (320 S. Walnut St., Appleton). USA Home Buyers purchases houses from Appleton homeowners facing foreclosure — written cash offer in 24 hours, close in 7–14 days. We cover all closing costs. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/appleton-wi/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Judicial Foreclosure Works in Outagamie County</h2>
          <p className="text-gray-700 mb-4">Wisconsin requires judicial foreclosure — the lender must file in Outagamie County Circuit Court (320 S. Walnut Street, Appleton WI 54911, phone 920-832-5131). After the court enters a judgment of foreclosure, Wisconsin law provides a redemption period. For owner-occupied residential properties with mortgages signed on or after April 27, 2016, the redemption period is typically 3 months if the lender waives deficiency, or 6 months if not. After the redemption period, the sheriff's sale is held on Thursdays at 9:00 a.m. in the lobby of the Outagamie County Justice Center. Winning bidders need 10% down at the time of sale, with the balance due within 10 days of court confirmation. Properties are sold as-is. A direct cash sale before judgment preserves your equity and credit. Consult a Wisconsin-licensed real estate attorney for advice specific to your situation. Source: <a href="https://www.wislawhelp.org/page/484/foreclosure-procedure" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Law Help</a>; <a href="https://www.outagamie.gov/Our-County/Sheriffs-Office/Foreclosures-Sheriff-Sales" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Outagamie County Sheriff</a>.</p>
          <p className="text-gray-700 mb-4">Appleton homeowners facing pre-foreclosure have more options the earlier they act. Older Craftsman bungalows and historic-district homes in Erb Park, Old Third Ward, and City Park neighborhoods often have deferred maintenance that complicates a quick retail sale. A cash offer gets you out of the foreclosure process entirely — on your timeline, not the court's.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Appleton WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/appleton-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/appleton-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/appleton-wi/probate', label: 'Probate' }, { href: '/markets/appleton-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/appleton-wi/code-violations', label: 'Code Violations' }, { href: '/markets/appleton-wi', label: '← Back to Appleton WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Appleton WI Property?" sourcePage="/markets/appleton-wi/foreclosure" />
      </div>
    </>
  );
}
