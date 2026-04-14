/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/faq`;

export const metadata: Metadata = {
  title: 'Cash Home Buyer FAQ Youngstown OH',
  description:
    'Frequently asked questions about selling your house fast for cash in Youngstown OH. Ohio conveyance fees, probate, foreclosure, as-is sales answered.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Youngstown OH?',
    answer: "Once you accept our written offer, we close in 7-14 days. We send the written offer within 24 hours of your inquiry. According to Redfin, Youngstown homes spend a median of 70 days on market when listed traditionally — a cash sale with us eliminates the bank approval wait, the inspection contingency, and the showing calendar.",
  },
  {
    question: 'What is the Ohio conveyance fee in Mahoning County?',
    answer: "Ohio uses a conveyance fee system, not a transfer tax. In Mahoning County the total is $4.00 per $1,000 of sale price — $1/1,000 Ohio state fee (ORC § 319.202) plus $3/1,000 Mahoning County permissive fee (ORC § 322.02) — plus a $0.50 per-parcel transfer fee. The seller pays at closing on DTE Form 100 filed with the Mahoning County Auditor. On a $129,200 sale that's about $517. When you sell to USA Home Buyers, we cover all closing costs. Source: auditor.mahoningcountyoh.gov.",
  },
  {
    question: 'How much will you pay for my Youngstown OH house?',
    answer: "Cash offers for Youngstown city homes typically run 65-75% of after-repair value. According to Redfin, the Youngstown median sale price is $129,200 (February 2026). City-core properties receive offers in the $35,000-$90,000 range depending on neighborhood and condition; Boardman and Austintown area properties are higher. We cover all closing costs — nothing deducted from your number.",
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: "No. We buy Youngstown homes in any condition — pre-1950 workers' cottages with lead paint and structural issues, fire damage, code violations, demolition orders. You leave what you don't want and take what you do. No repairs, no cleanout, no staging.",
  },
  {
    question: 'What areas near Youngstown do you buy in?',
    answer: "We serve all of Mahoning County and extend into Trumbull County — Warren, Boardman, Austintown, Niles, Campbell, Struthers, Girard, Hubbard, Canfield, Poland, Mineral Ridge, and Lowellville. Anywhere in the Youngstown-Warren MSA.",
  },
  {
    question: 'How does foreclosure work in Ohio?',
    answer: "Ohio is a judicial foreclosure state. All foreclosures go through the Mahoning County Court of Common Pleas. The process typically runs 6-24 months from first missed payment to sheriff's sale confirmation. You can sell at any point before the sheriff's sale to pay off the mortgage and walk away with equity. Source: Ohio Legal Help (ohiolegalhelp.org).",
  },
  {
    question: 'How does probate work in Ohio when selling a house?',
    answer: "Inherited property in Ohio goes through Mahoning County Probate Court (not a Register of Wills — that's a Pennsylvania system). The court appoints a personal representative who gains authority to sell the property. Ohio typically requires full probate for estates over $35,000 in gross assets. The Probate Court is at 120 Market Street, Youngstown, OH 44503, (330) 740-2310. We work with estates and probate attorneys regularly.",
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: "We're an LLC. Every offer is a written purchase agreement — price, terms, closing date. No verbal promises. You can review the offer at your leisure and walk away with no penalty.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: "We call within hours during business hours. We'll ask about the property — condition, situation, your timeline. Within 24 hours you receive a written cash offer. No pressure, no obligation. If you accept, we pick a closing date that works for you.",
  },
];

export default function YoungstownFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
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
            alt="Youngstown OH cash home buyers FAQ"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Selling Your Youngstown OH House for Cash — FAQ
          </h1>
          <p className="text-lg text-blue-100">
            Common questions about Ohio conveyance fees, probate, foreclosure, as-is sales, and how the cash buying process works in Mahoning County.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="mt-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors"
          >
            📞 Call Now — We Answer 24/7
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FAQSection items={FAQ_ITEMS} heading="All Your Questions — Selling a House Fast in Youngstown OH" />

        <CashOfferForm
          variant="inline"
          headline="Still Have Questions? Get a Written Cash Offer."
          subheadline="No obligation. Written offer in 24 hours. We cover all closing costs."
          sourcePage="/markets/youngstown-oh"
        />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/market-report" className="text-brand-primary hover:underline">Youngstown Housing Market Report →</Link></li>
            <li><Link href="/guides/sell-house-fast-youngstown-oh-2026" className="text-brand-primary hover:underline">2026 Seller Guide: Youngstown OH →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
