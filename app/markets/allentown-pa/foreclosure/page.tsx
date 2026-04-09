import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Before Foreclosure in Allentown PA | Lehigh County',
  description:
    'Facing foreclosure in Allentown or Lehigh County PA? Sell before the sheriff sale and protect your equity. Cash offer in 24 hours, close in 7-14 days. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/foreclosure` },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Lehigh County, PA?',
    answer:
      'Pennsylvania is a judicial foreclosure state. In Lehigh County, the process typically takes 12-18 months from first missed payment to completed sheriff sale. The Lehigh County Court of Common Pleas requires a mandatory conciliation conference — a court-supervised meeting where the lender and borrower attempt to reach a resolution. This often adds several months to the timeline, giving you more time than you may realize.',
  },
  {
    question: 'Where are Lehigh County sheriff sales held?',
    answer:
      'Lehigh County sheriff sales are held at the Lehigh County Courthouse, 455 W Hamilton St, Allentown PA 18101. Sales are published in the Lehigh Law Journal and online. They typically occur monthly. You can find scheduled sales on the Lehigh County Sheriff\'s Office website.',
  },
  {
    question: 'Can I stop a Lehigh County sheriff sale by selling the property?',
    answer:
      'Yes. If you close on a cash sale before the sheriff sale date, the mortgage gets paid off at closing and the foreclosure case is dismissed. We\'ve helped homeowners close in 7 days to beat sheriff sale deadlines. Call us immediately if you have a sale date scheduled.',
  },
  {
    question: 'What is the Lehigh County conciliation conference?',
    answer:
      'Lehigh County requires a mandatory foreclosure conciliation conference before a judge can enter judgment. A court-appointed conciliator facilitates a meeting between you and the lender to explore alternatives — repayment plans, loan modifications, short sales, or deeds in lieu. This is required before the case can proceed to judgment. It\'s also an opportunity to buy time while exploring your options.',
  },
  {
    question: 'Do I have any equity if I sell before foreclosure?',
    answer:
      'If your home is worth more than you owe (mortgage balance plus arrears), yes — you keep the difference after the mortgage is paid off at closing. For example: Allentown home sells for $200,000, you owe $140,000 including back payments, you walk away with $60,000 minus closing costs (which we cover). If you wait for the sheriff sale, the outcome is far less certain.',
  },
  {
    question: 'Do you work with Spanish-speaking homeowners in Allentown?',
    answer:
      'Yes. With over 56% of Allentown\'s population being Hispanic, we regularly work with Spanish-speaking homeowners. We can communicate in Spanish throughout the process — from the initial offer through closing. Llámenos hoy.',
  },
];

const pageUrl = `${SITE_URL}/markets/allentown-pa/foreclosure`;

export default function AllentownForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        articleSchema('Sell Before Foreclosure in Allentown, PA — Lehigh County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/allentown-pa" className="hover:text-white">Allentown</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Facing Foreclosure in Allentown? Sell Before the Lehigh County Sheriff Sale
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Pennsylvania gives you more time and more options than most states. If you have equity in your
              Allentown home, selling before the sheriff sale protects it. We can close in 7 days.
              <strong className="block mt-2 text-white">Hablamos español.</strong>
            </p>
            <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-red-200 mb-1">Sheriff sale date scheduled?</p>
              <p className="text-red-100">
                Call immediately at <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a>{' '}
                — we may be able to close before the sale date.
              </p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/allentown-pa/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What You Need to Know Right Now</h2>
            <p className="text-gray-700 text-sm">
              Pennsylvania&apos;s judicial foreclosure process averages 12-18 months. In Lehigh County,
              Allentown&apos;s home county, there&apos;s a mandatory conciliation conference that often pushes
              the timeline further. You have more time than you think. If your home is worth more than
              you owe, a cash sale pays off the mortgage, stops the foreclosure, and puts money in your pocket.
              With Allentown&apos;s median home price around $245K, many homeowners have meaningful equity to protect.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Lehigh County Foreclosure: What&apos;s Different Here</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Mandatory Conciliation</h3>
                <p className="text-sm text-gray-700">
                  Lehigh County requires a foreclosure conciliation conference before a judge enters judgment.
                  This court-supervised meeting is designed to help lenders and homeowners reach a resolution.
                  It also buys you time — the case cannot move to judgment until after the conference.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Monthly Sheriff Sales</h3>
                <p className="text-sm text-gray-700">
                  Lehigh County holds sheriff sales monthly at the Courthouse, 455 W Hamilton St, Allentown.
                  Properties are listed in the Lehigh Law Journal. Sales are often postponed 1-2 times,
                  which can give you additional time to explore options.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Act 91 Notice Required</h3>
                <p className="text-sm text-gray-700">
                  Before your lender can file foreclosure, they must send a state-mandated Act 91 notice.
                  You have 33 days from receipt to apply for PHFA&apos;s HEMAP assistance. The lender cannot
                  file until this period expires.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Right to Cure (Act 6)</h3>
                <p className="text-sm text-gray-700">
                  You can pay off all arrears plus costs up until one hour before the sheriff sale.
                  If you can come up with the full amount owed, the foreclosure stops. This is a last resort,
                  but it&apos;s a right under Pennsylvania law.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why Selling Before the Sheriff Sale Makes Sense
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'You keep your equity',
                  desc: 'Any amount above your mortgage payoff comes directly to you at closing. Allentown\'s median home price of ~$245K means many homeowners have real equity worth protecting. A foreclosure sale may return excess proceeds — but not reliably.',
                },
                {
                  title: 'Credit damage is limited',
                  desc: 'Missed payments hurt your credit either way. But a completed foreclosure stays on your report for 7 years and affects housing, employment, and financing for years. A pre-foreclosure sale is far less damaging.',
                },
                {
                  title: 'The process stops',
                  desc: 'Once we close and your mortgage is paid off, the foreclosure case is dismissed. No more court dates. No more certified letters. No more calls from the lender.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">We Know Allentown</h2>
            <p className="text-gray-700 mb-4">
              We buy houses throughout Allentown and Lehigh County — the South Side, West End, Center City,
              the Old Allentown Historic District, Fountain Hill, Catasauqua, and surrounding communities.
              We know the neighborhoods, we know the values, and we know what it takes to close fast in this market.
            </p>
            <p className="text-gray-700 mb-4">
              Allentown&apos;s neighborhoods include many historic row homes and Bethlehem Steel-era properties.
              We buy these in any condition — no repairs, no updates required.
            </p>
            <p className="text-gray-700">
              With over 56% of Allentown&apos;s residents being Hispanic, we provide bilingual service throughout
              the process. <strong>Si prefiere comunicarse en español, llámenos al <a href={`tel:${PHONE}`} className="text-brand-primary underline">{PHONE}</a>.</strong>
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer Before Your Sheriff Sale"
            subheadline="Written offer in 24 hours. Close in 7-14 days. Stop the foreclosure."
            sourcePage="/markets/allentown-pa/foreclosure"
          />

          <FAQSection items={FAQ_ITEMS} heading="Lehigh County Foreclosure — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">PA Foreclosure Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Housing Finance Agency (PHFA) — HEMAP</p>
                <p className="text-gray-600">
                  <a href="https://www.phfa.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">phfa.org</a>{' '}
                  — Emergency mortgage assistance for PA homeowners
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Lehigh County Sheriff&apos;s Office</p>
                <p className="text-gray-600">Lehigh County Courthouse, 455 W Hamilton St, Allentown PA 18101 — for scheduled sheriff sale dates and property listings</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Community Action Committee of the Lehigh Valley (CACLV)</p>
                <p className="text-gray-600">
                  <a href="https://www.caclv.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">caclv.org</a>{' '}
                  — Housing counseling and foreclosure prevention services in the Lehigh Valley
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/foreclosure" className="text-brand-primary hover:underline">PA Foreclosure Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/behind-on-payments" className="text-brand-primary hover:underline">Behind on Payments</Link>{' '}
              ·{' '}
              <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Sell Your Allentown House</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
