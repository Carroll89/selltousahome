import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Divorce Sale Erie PA — Sell Your House Fast for Cash',
  description:
    'Selling a house during divorce in Erie PA? We buy as-is, close in 7-14 days, and split proceeds at closing. No repairs, no showings, no delay. Serving Erie County.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/divorce-sale` },
};

const FAQ_ITEMS = [
  {
    question: 'Can we sell the house before the divorce is finalized in Erie PA?',
    answer:
      "Yes, in many cases. If both spouses agree to sell and are both on the title, you can sell during the divorce process. The proceeds are typically held in escrow or distributed per court order or mutual agreement. A PA family law attorney can advise on your specific situation.",
  },
  {
    question: 'What if one spouse wants to sell and the other doesn\'t?',
    answer:
      "If both spouses are on the title and can't agree, a court may need to order a partition or sale through Erie County Court of Common Pleas. However, many couples find that a fast cash sale is the cleanest resolution — it removes the house from the dispute, creates liquid proceeds to divide, and lets both parties move on.",
  },
  {
    question: 'How fast can we close on a divorce sale in Erie PA?',
    answer:
      "If both spouses can sign and there are no court holds on the property, we can close in 7-14 days. We handle the paperwork and coordinate with both parties. You don't need to be in the same room — we can accommodate remote signings.",
  },
  {
    question: 'Do we have to make repairs before selling during divorce?',
    answer:
      "No. We buy Erie properties in any condition. In a divorce situation, the last thing either party usually wants is to coordinate and fund a renovation together. We buy as-is and adjust the offer for condition. You walk away clean.",
  },
  {
    question: "What is the transfer tax on a divorce sale in Erie PA?",
    answer:
      "Erie's standard 2% transfer tax applies (1% state + 1% local). On a $115,000 home that's $2,300 total. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax. The proceeds divided between the parties are net of all costs.",
  },
];

const pageUrl = `${SITE_URL}/markets/erie-pa/divorce-sale`;

export default function ErieDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Selling a House During Divorce in Erie PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/erie-pa-hero.jpg"
          alt="Erie PA home — sell during divorce fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/erie-pa" className="hover:text-white">Erie PA</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a House During Divorce in Erie PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Divorce is hard enough without months of showings, repairs, and negotiations with an agent.
              We buy Erie homes as-is, close in 7-14 days, and split proceeds at closing.
              No joint decisions about paint colors. No repairs to coordinate. Just done.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Confidential, No Pressure
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/erie-pa/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Both spouses must agree to sell (or a court must order it) — we coordinate with both parties</li>
              <li>• We buy as-is — <strong>no joint renovation decisions, no shared repair coordination</strong></li>
              <li>• Proceeds are <strong>split at closing</strong> per your agreement or court order</li>
              <li>• We cover all closing costs — Erie&apos;s 2% transfer tax, title fees, everything</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Cash Buyers Work Well in Divorce Sales</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Speed ends the shared ownership',
                  desc: "Every month the house sits on the market is another month you're co-owners, sharing decisions and carrying costs. A 7-14 day cash close puts an end date on the shared obligation.",
                },
                {
                  title: 'No repairs to coordinate',
                  desc: "Traditional sales on Erie's aging housing stock typically require some repairs or updates to be marketable. Coordinating that between two divorcing parties is a recipe for conflict. We buy as-is.",
                },
                {
                  title: 'Clean division at closing',
                  desc: "Proceeds go directly to an escrow split or to each party per your agreement. The title company handles the distribution. No one has to trust the other to write a check.",
                },
                {
                  title: 'Confidential process',
                  desc: "A cash sale doesn't require public showings, open houses, or an MLS listing. Your situation stays private. We work discreetly.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How the Process Works</h2>
            <div className="space-y-3">
              {[
                { step: '1', label: 'One or both parties contacts us', detail: "Either spouse can initiate the conversation. We'll ask about the property condition, situation, and timeline. Confidential." },
                { step: '2', label: 'Written cash offer within 24 hours', detail: "We send a formal written offer with price, terms, and proposed closing date. Both parties can review it independently." },
                { step: '3', label: 'Both parties sign the purchase agreement', detail: "Both spouses on the title must sign. We can accommodate remote signing or separate signing appointments if needed." },
                { step: '4', label: 'Close in 7-14 days, proceeds split at closing', detail: "The PA title company handles the closing and distributes proceeds per your agreement or court order. We cover all costs." },
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
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer for Your Erie PA Divorce Sale"
            subheadline="Confidential. Written offer in 24 hours. We cover all closing costs."
            sourcePage="/markets/erie-pa/divorce-sale"
          />

          <FAQSection items={FAQ_ITEMS} heading="Divorce Sale in Erie PA — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/guides/divorce-sale" className="text-brand-primary hover:underline">Divorce Sale Guide (PA)</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
