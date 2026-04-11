import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, kingOfPrussiaLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Before Foreclosure King of Prussia PA',
  description:
    'Facing foreclosure in King of Prussia or Montgomery County PA? Sell before the sheriff sale and protect your equity. Cash offer in 24 hours, close in 7-14 days.',
  alternates: { canonical: `${SITE_URL}/markets/king-of-prussia-pa/foreclosure` },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Montgomery County, PA?',
    answer:
      "Pennsylvania is a judicial foreclosure state. In Montgomery County, the process typically takes 12–18 months from the first missed payment to a completed sheriff sale. The lender must file a complaint in the Montgomery County Court of Common Pleas and serve you. Pennsylvania law also requires a mandatory conciliation conference in most foreclosure cases — a court-supervised meeting where lender and borrower attempt to reach a resolution. This often adds months.",
  },
  {
    question: 'Where are Montgomery County sheriff sales held?',
    answer:
      "Montgomery County sheriff sales are conducted by the Montgomery County Sheriff's Office at One Montgomery Plaza, 425 Swede Street, Norristown PA 19401. Sales are published in local legal notices and on the sheriff's office website. They typically occur monthly. You can search scheduled sales through the county's online records.",
  },
  {
    question: 'Can I stop a Montgomery County sheriff sale by selling the property?',
    answer:
      "Yes. If you close on a sale before the sheriff sale date, the mortgage gets paid off at closing and the foreclosure case is dismissed. We've helped homeowners close in 7 days to beat sheriff sale deadlines. If you have a scheduled sheriff sale date, call us immediately — every day matters.",
  },
  {
    question: 'What is PA Act 6 and how does it apply to my foreclosure?',
    answer:
      "Pennsylvania's Loan Interest and Protection Law (Act 6, 41 P.S. § 403) requires lenders to send you a 30-day notice before filing a foreclosure complaint. This notice informs you of your right to cure the default by paying the overdue amount. You also have a right to reinstate the loan by paying all overdue amounts plus costs up to one hour before the sheriff sale. Understanding these rights is critical — and selling before the sale is always cleaner than a reinstatement that falls through.",
  },
  {
    question: 'Do I have equity if I sell before foreclosure in King of Prussia?',
    answer:
      "Given King of Prussia's median home value of $453,560 and sale prices around $549,350, many KOP homeowners in foreclosure have significant equity. If your home is worth more than you owe (mortgage balance plus arrears), you keep the difference after the mortgage is paid off at closing. That equity disappears in a sheriff sale where the winning bid may be well below market value.",
  },
];

const pageUrl = `${SITE_URL}/markets/king-of-prussia-pa/foreclosure`;

export default function KopForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        kingOfPrussiaLocalBusinessSchema,
        articleSchema('Sell Before Foreclosure in King of Prussia, PA — Montgomery County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/king-of-prussia-hero.jpg"
          alt="King of Prussia PA — sell house before foreclosure"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/king-of-prussia-pa" className="hover:text-white">King of Prussia</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Facing Foreclosure in King of Prussia PA? Sell First, Protect Your Equity.
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              If your King of Prussia home is in foreclosure or pre-foreclosure, you may still have
              time — and equity — to walk away with cash instead of losing it all at the sheriff sale.
              We close in 7–14 days and have beaten Montgomery County sheriff sale deadlines before.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Time Matters
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/king-of-prussia-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Why Time Is the Most Important Factor</h2>
            <p className="text-gray-700 text-sm">
              A Montgomery County sheriff sale can happen as little as 12–18 months after your first missed payment.
              Once a sale date is set, your options narrow. Selling before that date lets you control the outcome —
              pay off the mortgage, clear any arrears, and walk away with your remaining equity. After the sheriff
              sale, any equity above the winning bid may be recoverable, but the process is complex and uncertain.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              The Pennsylvania Foreclosure Process — What You Need to Know
            </h2>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  label: 'Missed payments → Pre-foreclosure notice (Act 6)',
                  detail: "PA law requires lenders to send a 30-day notice before filing a foreclosure complaint. This notice under PA Act 6 (41 P.S. § 403) informs you of the right to cure the default. This is your earliest opportunity to sell — you have the most time and options.",
                },
                {
                  step: '2',
                  label: 'Foreclosure complaint filed in Montgomery County Court',
                  detail: 'The lender files a complaint in the Montgomery County Court of Common Pleas. You are served with a summons. You have 20 days to respond. At this point, you can still sell — the case can be dismissed if the mortgage is paid off before judgment.',
                },
                {
                  step: '3',
                  label: 'Conciliation conference',
                  detail: "Pennsylvania courts require a conciliation conference in many foreclosure cases. A court-appointed conciliator meets with you and the lender to explore alternatives. This can add months to the timeline — and is another window to arrange a sale.",
                },
                {
                  step: '4',
                  label: 'Judgment and sheriff sale scheduled',
                  detail: "After judgment is entered, the Montgomery County Sheriff's Office schedules the sale. Once a sale date is set, you have until one hour before the sale to reinstate the loan under PA law — or close a sale and pay off the mortgage.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-gray-500">
              <strong>Source:</strong>{' '}
              <a
                href="https://www.legis.state.pa.us/cfdocs/legis/LI/consCheck.cfm?txtType=HTM&ttl=41"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                PA Act 6 (41 P.S.) — Pennsylvania Loan Interest and Protection Law
              </a>{' '}·{' '}
              <a
                href="https://www.montgomerycountypa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Montgomery County PA — montgomerycountypa.gov
              </a>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Equity Is at Stake — King of Prussia Numbers
            </h2>
            <p className="text-gray-700 mb-4 text-sm">
              King of Prussia homes have real equity. At a median value of $453,560–$549,350, even a home
              with a significant mortgage balance may have $100,000 or more in equity that can be preserved
              through a pre-foreclosure sale but lost in a sheriff sale.
            </p>
            <div className="bg-brand-light rounded-xl p-5 text-sm">
              <p className="font-semibold text-brand-dark mb-3">Example: Sell Before vs. Lose at Sheriff Sale</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-brand-primary mb-2">Sell Before Sheriff Sale</p>
                  <div className="space-y-1 text-xs text-gray-700">
                    <div className="flex justify-between"><span>Cash offer</span><span className="font-bold">$350,000</span></div>
                    <div className="flex justify-between"><span>Mortgage payoff</span><span>−$220,000</span></div>
                    <div className="flex justify-between"><span>Closing costs (we pay)</span><span>$0</span></div>
                    <div className="flex justify-between font-bold text-brand-dark border-t pt-1"><span>Net to you</span><span>$130,000</span></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-600 mb-2">Wait for Sheriff Sale</p>
                  <div className="space-y-1 text-xs text-gray-700">
                    <div className="flex justify-between"><span>Sheriff sale bid (often below FMV)</span><span>Variable</span></div>
                    <div className="flex justify-between"><span>Legal/foreclosure costs</span><span>Deducted</span></div>
                    <div className="flex justify-between"><span>Surplus funds process</span><span>Complex/Uncertain</span></div>
                    <div className="flex justify-between font-bold text-gray-600 border-t pt-1"><span>Credit damage</span><span>Severe</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer Before Your Sheriff Sale Date"
            subheadline="We've closed in 7 days to beat sheriff sale deadlines. Call now."
            sourcePage="/markets/king-of-prussia-pa"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Foreclosure in Montgomery County" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/foreclosure" className="text-brand-primary hover:underline">
                PA Foreclosure Guide
              </Link>{' '}
              ·{' '}
              <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">
                Sell Your King of Prussia House
              </Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
