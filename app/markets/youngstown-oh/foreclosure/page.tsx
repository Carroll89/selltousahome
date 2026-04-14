/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Youngstown OH',
  description:
    'Facing foreclosure in Youngstown OH? Sell before the Mahoning County sheriff sale. Ohio judicial foreclosure takes 6-24 months — sell now, protect your equity.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Ohio?',
    answer: "Ohio is a judicial foreclosure state. Every foreclosure must go through the Mahoning County Court of Common Pleas. The process typically runs 6-24 months from first missed payment to confirmation of the sheriff's sale — from complaint filing (after roughly 90-180 days of missed payments), through the 28-day answer deadline, summary judgment, sheriff's appraisal, the public auction (advertised 3 weeks in a local newspaper), and court confirmation. Ohio's HB 130 also requires mediation referral for residential foreclosures, which adds time but protects homeowners. Source: Ohio Legal Help (ohiolegalhelp.org/foreclosure_timeline).",
  },
  {
    question: 'Can I sell my Youngstown house to stop foreclosure?',
    answer: "Yes. You can sell at any point before the sheriff's sale is confirmed by the court. A cash sale with us closes faster than the foreclosure process moves. The proceeds pay off the mortgage balance, any liens, and closing costs. If you have equity — even modest equity — you walk away with cash instead of losing the property at the sheriff's auction.",
  },
  {
    question: 'What happens at an Ohio sheriff\'s sale?',
    answer: "In Mahoning County, the sheriff orders an appraisal after judgment. The minimum bid at the sheriff's sale is typically two-thirds of the appraised value. The sale is advertised for three consecutive weeks in a local newspaper. If no one bids, the property goes back to the lender. After the court confirms the sale, the homeowner must vacate. Ohio does provide an equity of redemption right through the confirmation of sale — which means you can cure the default and reclaim the property before that point — but once confirmed, the property is gone.",
  },
  {
    question: 'Does Ohio have a right of redemption after foreclosure?',
    answer: "Ohio provides the right of redemption up through confirmation of the sheriff's sale. Once the Mahoning County Common Pleas Court confirms the sale, the homeowner has no legal right to reclaim the property. This is different from some states that allow redemption for months after the sale.",
  },
  {
    question: 'What free foreclosure help is available in Youngstown?',
    answer: "Legal Aid Society of Mid-Ohio serves Mahoning County at (330) 783-3110. Ohio Legal Help (ohiolegalhelp.org) has state-specific foreclosure resources. HUD-approved housing counselors are available at 1-800-569-4287 or hud.gov. Ohio's mandatory mediation referral (HB 130) means most residential foreclosures are required to go through a mediation process — your right, at no cost to you.",
  },
  {
    question: 'How quickly can you close if I\'m facing foreclosure in Youngstown?',
    answer: "We close in as few as 7 days once we have clear title. Given Ohio's 6-24 month judicial foreclosure timeline, most sellers in the early stages have more time than they realize. But every month of delay adds carrying costs and brings the sheriff's sale closer. Call us for a written offer within 24 hours.",
  },
];

export default function YoungstownForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('Selling Your House Before Foreclosure in Youngstown OH — Mahoning County', pageUrl, '2026-04-14'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/youngstown-oh-hero-640.jpg 640w, /images/optimized/youngstown-oh-hero-828.jpg 828w, /images/optimized/youngstown-oh-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-hero-1200.jpg"
            alt="Youngstown OH home — stop foreclosure with a cash sale"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Before the Sheriff Sale — Youngstown OH Foreclosure Help
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Ohio's judicial foreclosure process moves through Mahoning County Common Pleas Court
              and takes 6-24 months. You have time to act — but the window closes. A cash sale can
              close in 7 days, pay off your mortgage, and let you walk away with equity instead of nothing.
            </p>
            <div className="bg-amber-500/20 border border-amber-400 rounded-lg p-4 mb-4">
              <p className="text-amber-200 text-sm font-medium">
                ⚠️ Ohio's equity of redemption expires at confirmation of the sheriff's sale. After that, the property is gone. Act before the sale.
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
            <CashOfferForm variant="hero" sourcePage="/markets/youngstown-oh" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ohio Foreclosure Timeline — What Happens and When</h2>
          <p className="text-gray-700 mb-4">
            Ohio is a <strong>judicial foreclosure state</strong>. There is no non-judicial or
            "power of sale" option — every foreclosure must go through the court system. In Youngstown,
            that means Mahoning County Court of Common Pleas at 120 Market Street. According to{' '}
            <a href="https://www.ohiolegalhelp.org/foreclosure_timeline" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Ohio Legal Help's foreclosure timeline</a>
            {' '}and{' '}
            <a href="https://www.nolo.com/legal-encyclopedia/ohio-foreclosure-procedures.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Nolo's Ohio Foreclosure Procedures</a>,
            the typical progression:
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
                  ['Missed payments', 'Servicer attempts contact; no legal action yet', 'Day 1–120'],
                  ['Foreclosure filed', 'Lender files complaint in Mahoning County Common Pleas Court', 'Day 120–180'],
                  ['Answer deadline', 'Homeowner has 28 days to file written answer', '28 days from service'],
                  ['Summary judgment', 'Lender files motion; if no contest, court rules for lender', 'Day 180–270 (est.)'],
                  ['Sheriff\'s appraisal', 'County sheriff orders appraisal; minimum bid = 2/3 appraised value', 'Post-judgment'],
                  ['Sheriff\'s sale', 'Public auction; advertised 3 consecutive weeks in local paper', 'Post-appraisal'],
                  ['Confirmation', 'Court confirms sale; equity of redemption expires', '30 days post-sale'],
                  ['Total typical timeline', 'Varies by court backlog and homeowner response', '6–24 months'],
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
            Ohio's HB 130 (codified in ORC Chapter 2323) requires mediation referral for residential
            foreclosures. This gives homeowners an additional opportunity to negotiate with lenders
            — loan modification, repayment plan, or agreed sale. Selling to a cash buyer before
            or during mediation is a legitimate and common outcome.
          </p>
        </section>

        <section className="mb-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Free Foreclosure Resources — Youngstown OH</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              <strong>Legal Aid Society of Mid-Ohio (Mahoning County):</strong> (330) 783-3110 — free legal help for eligible homeowners
            </li>
            <li>
              <strong>Ohio Legal Help:</strong>{' '}
              <a href="https://www.ohiolegalhelp.org" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">ohiolegalhelp.org</a>
              {' '}— Ohio-specific foreclosure timelines and resources
            </li>
            <li>
              <strong>HUD-Approved Housing Counselor:</strong> Call 1-800-569-4287 or visit{' '}
              <a href="https://www.hud.gov/find_a_housing_counselor" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">hud.gov</a>
            </li>
            <li>
              <strong>Ohio Mandatory Mediation (HB 130):</strong> Residential foreclosures must be referred to mediation — you have the right to a mediation session at no cost before the case proceeds
            </li>
          </ul>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer — Stop the Foreclosure Clock"
          subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs including Ohio's conveyance fee."
          sourcePage="/markets/youngstown-oh"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Foreclosure in Youngstown OH" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/inherited-property" className="text-brand-primary hover:underline">Inherited Property in Youngstown OH →</Link></li>
            <li><Link href="/markets/youngstown-oh/probate" className="text-brand-primary hover:underline">Probate Sale in Youngstown OH →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
