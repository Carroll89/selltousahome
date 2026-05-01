/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { akronLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/akron-oh/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Akron OH — Sell Before Summit County RealAuction Sale',
  description:
    'Facing foreclosure in Akron OH? Ohio judicial foreclosure runs through Summit County Common Pleas Court. USA Home Buyers purchases homes before the RealAuction Friday sheriff sale — cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Akron OH?',
    answer:
      "USA Home Buyers closes in as few as 7 days. Ohio judicial foreclosure runs through Summit County Common Pleas Court. Mortgage sheriff sales are held online through RealAuction every Friday at 10:00 a.m.; delinquent tax sales go Tuesdays at 10:00 a.m. Starting bid is 2/3 of the appraised value. A cash sale before judgment preserves your equity and your credit. Call 888-274-5006. Consult an Ohio-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'Will selling stop the foreclosure in Ohio?',
    answer:
      'Yes — a completed sale satisfies the mortgage and ends proceedings. You keep any equity above your payoff amount. Acting before the Summit County Common Pleas Court enters judgment gives you the most options.',
  },
  {
    question: 'What is the foreclosure process in Summit County OH?',
    answer:
      "Ohio requires judicial foreclosure — the lender files in Summit County Common Pleas Court. After judgment, the Summit County Sheriff conducts the sale online through RealAuction. Mortgage sales are held Fridays at 10:00 a.m.; delinquent tax sales go Tuesdays at 10:00 a.m. Starting bid is 2/3 of the appraised value. After the sale, sale-to-deed takes a minimum of 6–8 weeks. No post-sale redemption in Ohio for mortgage foreclosures after the confirmation. Total timeline from default to confirmed sale: typically 9–18 months. Source: Summit County Sheriff foreclosure page. Consult an Ohio-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer:
      "A short sale may be possible — we have experience coordinating with Summit County lenders. Call 888-274-5006 and we'll walk through your specific payoff situation honestly.",
  },
  {
    question: 'What areas near Akron do you buy in pre-foreclosure?',
    answer:
      'All of Summit County: Akron, Cuyahoga Falls, Barberton, Stow, Tallmadge, Fairlawn, Green, Norton, Portage Lakes, Hudson, Munroe Falls, Mogadore, and surrounding communities. Call 888-274-5006.',
  },
];

const LINKS = [
  { href: '/markets/akron-oh/inherited-property', label: 'Inherited Property' },
  { href: '/markets/akron-oh/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/akron-oh/probate', label: 'Probate' },
  { href: '/markets/akron-oh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/akron-oh/code-violations', label: 'Code Violations' },
  { href: '/markets/akron-oh/fire-damage', label: 'Fire Damage' },
  { href: '/markets/akron-oh', label: '← Back to Akron OH' },
];

export default function AkronForeclosurePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          akronLocalBusinessSchema,
          articleSchema('Stop Foreclosure in Akron OH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/akron-oh" className="hover:text-white">Akron OH</Link>{' '}
              › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Akron OH — Sell Before the Summit County Friday RealAuction Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Ohio judicial foreclosure runs through Summit County Common Pleas Court. Mortgage
                sheriff sales go online through RealAuction every Friday at 10:00 a.m.; delinquent
                tax sales go Tuesdays at 10:00 a.m. USA Home Buyers purchases Akron homes before
                that point — written cash offer in 24 hours, close in 7–14 days. We cover all
                closing costs including Summit County's conveyance fee. Call 888-274-5006.
              </p>
            </div>
            <a
              href="tel:+18882745006"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Cash Offer"
              subheadline="Written offer in 24 hours."
              sourcePage="/markets/akron-oh/foreclosure"
            />
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-green-600 text-white p-3 flex items-center justify-center gap-3 shadow-lg">
        <a href="tel:+18882745006" className="font-bold text-base">
          📞 Call 888-274-5006 — Get Cash Offer
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            How Judicial Foreclosure Works in Summit County, OH
          </h2>
          <p className="text-gray-700 mb-4">
            Ohio is a 100% judicial foreclosure state — the lender must file in court and obtain a
            judgment before selling the property. In Akron, that means Summit County Common Pleas
            Court. The federal 120-day servicing rule generally prevents a foreclosure filing until
            a borrower is more than 120 days delinquent, giving homeowners a window to act first.
          </p>
          <p className="text-gray-700 mb-4">
            After judgment, the Summit County Sheriff conducts the foreclosure sale. The Summit
            County Sheriff lists <strong>mortgage sales online through RealAuction, held every
            Friday at 10:00 a.m.</strong> Delinquent tax sales go Tuesdays at 10:00 a.m. Starting
            bid is 2/3 of the court-appraised value. After the sale, the process of getting deed
            transfer takes a minimum of 6–8 weeks. Once the court confirms the sale, your right
            to stop the process ends. Ohio does not provide a post-confirmation statutory redemption
            period for residential mortgage foreclosures.
          </p>
          <p className="text-gray-700 mb-4">
            Total timeline from default to confirmed sale typically runs 9–18 months in Summit
            County depending on court docket congestion. That window — while long by national
            standards — closes faster than most homeowners expect once they are past the 120-day
            mark and a filing is made. Consult an Ohio-licensed real estate attorney for your
            specific situation and current statutes.
          </p>

          <div className="border-l-4 border-red-400 pl-4 mb-6">
            <h3 className="font-semibold text-brand-dark mb-1">Akron's older housing stock complicates a quick retail listing</h3>
            <p className="text-sm text-gray-700">
              Akron's rubber-era bungalows, foursquares, and colonials — 34.1% built in 1939 or
              earlier — often carry deferred maintenance that makes a quick retail listing during
              financial stress very difficult. Lead paint, knob-and-tube wiring, and aging
              mechanicals in Goodyear Heights, Kenmore, Firestone Park, and East Akron
              neighborhoods are common. A cash buyer purchases as-is and eliminates the
              repair negotiation, inspection contingency, and financing risk entirely.
            </p>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Akron OH" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Akron OH Home Before Foreclosure?"
          sourcePage="/markets/akron-oh/foreclosure"
        />
      </div>
    </>
  );
}
