import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Probate Property Erie PA — Cash Sale',
  description:
    'Selling a probate property in Erie PA? We buy estate homes as-is, work around Erie County probate timelines, and close in 7-14 days. No repairs, no cleanout required.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/probate` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell an Erie PA house while it\'s still in probate?',
    answer:
      "Yes, in many cases. Once the Erie County Register of Wills issues Letters Testamentary, the personal representative (executor) has legal authority to sell estate real estate. You don't need to wait for the entire probate to conclude — just the issuance of those letters.",
  },
  {
    question: 'Where is the Erie County Register of Wills?',
    answer:
      "The Erie County Register of Wills is part of the Clerk of Records office (Aubrea Hagerty-Haynes) at the Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. Main county phone: (814) 451-6000. Navigate to eriecountypa.gov, then Row Offices → Register of Wills.",
  },
  {
    question: 'How long does Erie County probate take?',
    answer:
      "Pennsylvania estates typically take 6-18 months to fully settle, depending on complexity, number of heirs, and whether there are disputes. However, Letters Testamentary are often issued within days to a few weeks of filing — enabling a property sale much sooner than the full estate settlement.",
  },
  {
    question: 'What if there is no will?',
    answer:
      "If there is no will, the court appoints an administrator and issues Letters of Administration instead of Letters Testamentary. The process is similar — the administrator has authority to sell real estate once letters are issued. This is handled at the same Erie County Register of Wills office.",
  },
  {
    question: 'Do I need an attorney to sell a probate property in Erie PA?',
    answer:
      "Pennsylvania doesn't legally require an attorney for a probate property sale, but it's strongly recommended. PA is a 'lawyer state' for real estate — attorneys are commonly involved in estate transactions. A PA estate attorney can help navigate Letters Testamentary, heir agreements, and title issues efficiently.",
  },
];

const pageUrl = `${SITE_URL}/markets/erie-pa/probate`;

export default function ErieProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Selling a Probate Property in Erie PA — Erie County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/erie-pa-hero.jpg"
          alt="Erie PA home — sell probate property fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/erie-pa" className="hover:text-white">Erie PA</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Probate Property in Erie PA — Erie County
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              We buy probate and estate properties in Erie County as-is — no repairs, no cleanout required.
              We work around your Erie County probate timeline and can close in 7-14 days once
              Letters Testamentary are issued.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/erie-pa/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• File probate at <strong>Erie County Register of Wills, 140 West Sixth Street, Erie PA 16501</strong></li>
              <li>• Once <strong>Letters Testamentary or Letters of Administration are issued</strong>, you can sell</li>
              <li>• We buy as-is — no cleanout, no repairs, no staging required</li>
              <li>• We cover all closing costs — <strong>Erie&apos;s 2% transfer tax, title fees, everything</strong></li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Erie County Probate Property Sale — How It Works</h2>
            <div className="space-y-3">
              {[
                { step: '1', label: 'File for probate at Erie County Register of Wills', detail: "Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. The executor named in the will files for Letters Testamentary. No will? An administrator files for Letters of Administration." },
                { step: '2', label: 'Letters Testamentary (or Administration) are issued', detail: "Once issued, the personal representative has legal authority to manage and sell estate real estate. This can happen within days to a few weeks of filing." },
                { step: '3', label: 'We enter a purchase agreement', detail: "With letters in hand, the personal representative signs a purchase agreement on behalf of the estate. We provide a written offer with price, terms, and closing date." },
                { step: '4', label: 'Title company handles the closing', detail: "A PA title company with estate sales experience handles the closing. Proceeds go to the estate account for distribution. We cover all closing costs — transfer tax, title fees, recording fees." },
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

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Cash Buyers Work Well for Erie Probate Properties</h2>
            <p className="text-gray-700 mb-4">
              With an aging Erie population (median age 34.8 years, but significant older-homeowner concentration
              in the city), probate properties are common here. Erie&apos;s housing stock is 77% pre-1970 —
              estate homes typically need significant work. Traditional buyers and lenders often avoid these properties.
              Cash buyers like us are frequently the most realistic path to a sale.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'No repairs required', desc: "Estate homes in Erie are typically older, often with deferred maintenance. We buy in any condition — the executor doesn't need to fund a renovation." },
                { title: 'No cleanout required', desc: "Leave all contents. Many estate properties in Erie have decades of belongings. We handle the cleanout after closing." },
                { title: 'Works with probate timeline', desc: "We can enter a contract while probate is processing and close once letters are issued. No rushed decisions." },
                { title: 'We cover all costs', desc: "Transfer tax (2%), title insurance, recording fees at Erie County — we pay everything. Estate proceeds go to the heirs, not to fees." },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-dark mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer for the Erie PA Probate Property"
            subheadline="No cleanup, no repairs. We work around Erie County estate timelines. Written offer in 24 hours."
            sourcePage="/markets/erie-pa/probate"
          />

          <FAQSection items={FAQ_ITEMS} heading="Erie County Probate Property Sale — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Erie County Register of Wills: Erie County Courthouse, 140 West Sixth Street, Erie PA 16501 | (814) 451-6000</p>
            <p className="mt-1">eriecountypa.gov — Row Offices → Register of Wills</p>
            <p className="mt-2">Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/markets/erie-pa/inherited-property" className="text-brand-primary hover:underline">Inherited Property Erie PA</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
