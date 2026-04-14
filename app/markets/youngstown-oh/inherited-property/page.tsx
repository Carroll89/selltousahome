/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Youngstown OH',
  description:
    'Inherited a house in Youngstown OH? We buy inherited properties as-is through Mahoning County Probate Court. Written offer in 24 hours, close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does inheriting a house work in Ohio?',
    answer: "When someone dies owning real estate in Ohio, the property typically goes through Mahoning County Probate Court before it can be sold. The court appoints a personal representative (executor or administrator) who has authority to deed the property once the estate is opened and probated. Ohio does not have a simplified affidavit procedure for estates over $35,000 in gross assets — full probate is typically required. The Mahoning County Probate Court is located at 120 Market Street, 1st Floor, Youngstown, OH 44503. Phone: (330) 740-2310. Source: mahoningcountyoh.gov/962.",
  },
  {
    question: 'Can I sell an inherited Youngstown house before probate is complete?',
    answer: "Generally no — the personal representative needs court authorization to deed the property. However, you can accept an offer and sign a purchase agreement before probate closes, with closing contingent on completion of the probate process. We work with estates regularly and can structure the transaction around your probate timeline.",
  },
  {
    question: 'Do I need to make repairs on an inherited Youngstown house?',
    answer: "No. Inherited properties in Youngstown are often pre-1950 workers' cottages and bungalows that have been deferred for years or decades — the original steelworker housing that defined this city. Lead paint (pre-1978) is nearly universal. We buy in any condition: vacant, tenant-occupied, filled with belongings, structurally compromised. Leave what you don't want.",
  },
  {
    question: 'What are the tax implications of selling an inherited house in Ohio?',
    answer: "Inherited property receives a stepped-up basis to fair market value at the date of death for federal income tax purposes. This means if the home was worth $80,000 when you inherited it and you sell for $85,000, your taxable gain is only $5,000 — not the full sale price. Ohio does not have an estate tax (repealed in 2013). Consult a tax professional for your specific situation. Source: IRS Publication 551; Ohio Department of Taxation (tax.ohio.gov).",
  },
  {
    question: 'What if there are multiple heirs on a Youngstown inherited property?',
    answer: "All heirs with an ownership interest must agree to the sale for it to proceed. If heirs disagree, the probate court can resolve the dispute — including forcing a sale (partition) if some heirs want to sell and others don't. We've worked through complex multi-heir situations before and can close once all parties are aligned.",
  },
];

export default function YoungstownInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('Selling an Inherited House in Youngstown OH — Mahoning County Probate Guide', pageUrl, '2026-04-14'),
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
            alt="Youngstown OH inherited property — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Inherited Youngstown OH House — Fast, As-Is
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Inherited a Youngstown property through Mahoning County Probate Court? We buy inherited
              houses in any condition — pre-1950 workers' cottages, vacant estates, code-violation
              properties, homes filled with belongings. No repairs, no cleanout, no agent fees.
              Written offer in 24 hours.
            </p>
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
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Inherited Property in Youngstown — The Reality</h2>
          <p className="text-gray-700 mb-4">
            More inherited properties come out of Youngstown than almost any other market we serve.
            The pattern is consistent: a steelworker or their spouse owned a South Side bungalow or
            North Side cottage since the 1940s or 1950s. They passed away. The adult children or
            grandchildren — often living outside the city now, sometimes out of state — inherit a
            property with 70 years of deferred maintenance, no mortgage, and no realistic path to
            renovation.
          </p>
          <p className="text-gray-700 mb-4">
            The property sits. Property taxes accumulate (Mahoning County property taxes are paid
            to the{' '}
            <a href="https://auditor.mahoningcountyoh.gov/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County Auditor</a>).
            Eventually the family reaches a decision point: sell as-is to a cash buyer, or risk
            the property going tax-delinquent and eventually through the Mahoning County Land Bank.
            A cash sale — even at a number that feels low — is almost always the better outcome.
          </p>
        </section>

        <section className="mb-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Mahoning County Probate Court — Key Information</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li><strong>Court:</strong> Mahoning County Probate Court</li>
            <li><strong>Address:</strong> 120 Market Street, 1st Floor, Youngstown, OH 44503</li>
            <li><strong>Phone:</strong> (330) 740-2310</li>
            <li><strong>Hours:</strong> Monday–Friday, 8:00 AM–4:00 PM</li>
            <li>
              <strong>Website:</strong>{' '}
              <a href="https://www.mahoningcountyoh.gov/962/Probate-Court" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                mahoningcountyoh.gov/962/Probate-Court
              </a>
            </li>
            <li><strong>Note:</strong> Ohio uses Probate Court — NOT a Register of Wills (that's a Pennsylvania system). If you see references to "Register of Wills" in Ohio documents, that's an error.</li>
          </ul>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer on Your Youngstown Inherited Property"
          subheadline="We work with estates and probate timelines. Written offer in 24 hours. Any condition."
          sourcePage="/markets/youngstown-oh"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Property in Youngstown OH" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/probate" className="text-brand-primary hover:underline">Probate Sale in Youngstown OH →</Link></li>
            <li><Link href="/markets/youngstown-oh/foreclosure" className="text-brand-primary hover:underline">Facing Foreclosure in Youngstown →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
