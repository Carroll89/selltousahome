import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Divorce Sale Erie PA — Cash Home Buyers',
  description:
    'Selling a house during divorce in Erie PA? We buy as-is and coordinate around title, divorce agreements, and court orders. No repairs, no showings. Serving Erie County.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/divorce-sale` },
};

const FAQ_ITEMS = [
  {
    question: 'Can we sell the house before the divorce is finalized in Erie PA?',
    answer:
      "Yes, in many cases, when the titled owners and any divorce agreement or court order allow it. Pennsylvania equitable-distribution law allows a court to direct the transfer or sale of marital property to enforce an order or agreement, so title and court documents need to be checked before closing.",
  },
  {
    question: 'What if one spouse wants to sell and the other doesn\'t?',
    answer:
      "If titled owners cannot agree, the sale may need to wait for a divorce agreement or court direction. Many couples still use a cash sale because it removes the house from the dispute, creates liquid proceeds to divide, and lets both parties move on.",
  },
  {
    question: 'How fast can we close on a divorce sale in Erie PA?',
    answer:
      "If the titled owners can sign and there are no court holds or title issues, we can often close quickly. We handle the purchase paperwork and coordinate with both parties. You don't need to be in the same room — we can accommodate separate signing logistics.",
  },
  {
    question: 'Do we have to make repairs before selling during divorce?',
    answer:
      "No. We buy Erie properties in any condition. In a divorce situation, the last thing either party usually wants is to coordinate and fund a renovation together. We buy as-is and adjust the offer for condition. You walk away clean.",
  },
  {
    question: "What is the transfer tax on a divorce sale in Erie PA?",
    answer:
      "Pennsylvania realty transfer tax includes the Commonwealth's 1% share and often an additional local transfer tax collected by the county Recorder of Deeds. We can account for ordinary seller closing costs in the offer so the parties understand the net proceeds before signing.",
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
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/erie-pa-representative-hero-640.jpg 640w, /images/optimized/erie-pa-representative-hero-828.jpg 828w, /images/optimized/erie-pa-representative-hero-1080.jpg 1080w, /images/optimized/erie-pa-representative-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/erie-pa-representative-hero-1200.jpg"
            alt="Representative Erie PA home near Lake Erie bayfront on a bright clear day"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
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
              We buy Erie homes as-is and coordinate around title, divorce agreements, and court orders.
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
              <li>• The titled owners and any divorce order or agreement control sale authority — we coordinate with both parties</li>
              <li>• We buy as-is — <strong>no joint renovation decisions, no shared repair coordination</strong></li>
              <li>• Proceeds are distributed under the deed, closing instructions, and any written agreement or court order</li>
              <li>• Pennsylvania and local transfer taxes may apply; we account for closing costs in the offer</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Cash Buyers Work Well in Divorce Sales</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Speed ends the shared ownership',
                  desc: "Every month the house sits on the market is another month you're co-owners, sharing decisions and carrying costs. A cash close can put an end date on the shared obligation once title and divorce documents are ready.",
                },
                {
                  title: 'No repairs to coordinate',
                  desc: "Traditional sales on Erie's aging housing stock typically require some repairs or updates to be marketable. Coordinating that between two divorcing parties is a recipe for conflict. We buy as-is.",
                },
                {
                  title: 'Clean division at closing',
                  desc: "Proceeds are distributed according to the deed, closing instructions, and any divorce agreement or court order. No one has to rely on an informal side promise.",
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
            <p className="text-sm text-gray-700 mb-4">
              Under <a href="https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/23/00.035.002.000..HTM" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">23 Pa.C.S. § 3502</a>, Pennsylvania courts can divide marital property and may direct transfer or sale to enforce an equitable-distribution order or agreement. The <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue</a> explains that realty transfer tax includes the Commonwealth&apos;s 1% share and often local transfer tax.
            </p>
            <div className="space-y-3">
              {[
                { step: '1', label: 'One or both parties contacts us', detail: "Either spouse can initiate the conversation. We'll ask about the property condition, situation, and timeline. Confidential." },
                { step: '2', label: 'Written cash offer within 24 hours', detail: "We send a formal written offer with price, terms, and proposed closing date. Both parties can review it independently." },
                { step: '3', label: 'Sale authority is confirmed', detail: "Titled owners and any required agreement or court order are reviewed before closing. We can accommodate separate signing logistics if needed." },
                { step: '4', label: 'Close and distribute proceeds', detail: "Closing proceeds are distributed according to the deed, closing instructions, and any written agreement or court order." },
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
