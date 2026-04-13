import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Property Liens Erie PA — Cash Sale',
  description:
    'Selling a house with liens or back taxes in Erie PA? We buy properties with liens, back taxes, and judgments. Liens are paid at closing. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/property-liens` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Erie PA house if it has a lien on it?',
    answer:
      "Yes. Most liens are paid off at closing from the sale proceeds — they don't prevent the sale, they just reduce your net proceeds. Liens must be satisfied (paid) before a clear title can transfer to the buyer. We work with PA title companies experienced in lien clearance to handle this at closing.",
  },
  {
    question: 'What types of liens are most common on Erie PA properties?',
    answer:
      "Common liens on Erie properties include: tax liens (city, county, school district back taxes), mortgage liens, code enforcement/blight liens, mechanic's liens (unpaid contractor work), HOA liens (less common in Erie), and judgment liens from court decisions.",
  },
  {
    question: 'What if the liens are more than the property is worth?',
    answer:
      "If total liens exceed the property value (an 'underwater' situation), selling becomes more complex. The lienholder(s) may need to agree to a short sale. We can discuss your specific lien structure and explore whether a negotiated resolution is possible. Call us at " + PHONE + ".",
  },
  {
    question: 'How are back taxes handled in an Erie PA sale?',
    answer:
      "Erie city property taxes and Erie County taxes that are in arrears become liens on the property. These are paid at closing from the sale proceeds — we work with the Erie County Assessment Office and city tax bureau to verify the exact amounts and satisfy them at settlement. You don't need to pay them before selling.",
  },
  {
    question: 'Where can I look up liens on my Erie PA property?',
    answer:
      "You can check for recorded liens at the Erie County Recorder of Deeds (under Clerk of Records, Aubrea Hagerty-Haynes) at the Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. The Erie County Assessment Office (eriecountypa.gov, Assessment department) handles property tax records. A title search through a PA title company will identify all liens before closing.",
  },
];

const pageUrl = `${SITE_URL}/markets/erie-pa/property-liens`;

export default function EriePropertyLiensPage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Selling a House with Property Liens in Erie PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/erie-pa-hero.jpg"
          alt="Erie PA home — sell house with liens for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/erie-pa" className="hover:text-white">Erie PA</Link> › Property Liens
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Erie PA House with Property Liens or Back Taxes
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Liens don&apos;t have to stop a sale. We buy Erie properties with tax liens, code enforcement liens,
              mechanic&apos;s liens, and back taxes. Liens are paid at closing from the proceeds —
              you don&apos;t have to pay them before you sell.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/erie-pa/property-liens" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Most liens are <strong>paid at closing from the sale proceeds</strong> — you don&apos;t pay them upfront</li>
              <li>• Erie&apos;s 23% poverty rate means back taxes and city liens are common — we&apos;ve handled many</li>
              <li>• We work with <strong>PA title companies</strong> experienced in Erie County lien clearance</li>
              <li>• Lien amounts <strong>reduce your net proceeds</strong> — we&apos;re transparent about what you walk away with</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How Liens Work in an Erie PA Sale</h2>
            <p className="text-gray-700 mb-4">
              When a property sells, the title company runs a full title search and identifies all recorded liens.
              Before a clear deed can transfer, those liens must be satisfied (paid off). In most cases:
            </p>
            <div className="space-y-3">
              {[
                { step: '1', label: 'Title search identifies all liens', detail: "A PA title company performs a full title search on the Erie County Recorder of Deeds records. All liens, judgments, and encumbrances are listed." },
                { step: '2', label: 'Lien payoffs are calculated', detail: "Each lienholder provides a payoff amount (the amount needed to satisfy the lien as of the closing date)." },
                { step: '3', label: 'Liens are paid at closing', detail: "At closing, the title company pays each lien directly from the sale proceeds before disbursing the remainder to you." },
                { step: '4', label: 'You receive the net proceeds', detail: "You receive the sale price minus lien payoffs and our closing costs (which we cover). The liens are cleared, the title transfers clean." },
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Erie PA Lien Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Erie County Recorder of Deeds</p>
                <p className="text-gray-600">Clerk of Records (Aubrea Hagerty-Haynes) | Erie County Courthouse, 140 West Sixth Street, Erie PA 16501 | (814) 451-6000</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Erie County Assessment Office</p>
                <p className="text-gray-600">Erie County Courthouse, 140 West Sixth Street, Erie PA 16501 | eriecountypa.gov (Assessment department)</p>
              </div>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer for Your Erie PA Property with Liens"
            subheadline="Liens paid at closing. Written offer in 24 hours. We cover all closing costs."
            sourcePage="/markets/erie-pa/property-liens"
          />

          <FAQSection items={FAQ_ITEMS} heading="Property Liens in Erie PA — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/guides/back-taxes" className="text-brand-primary hover:underline">Back Taxes Guide (PA)</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa/foreclosure" className="text-brand-primary hover:underline">Foreclosure Erie PA</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
