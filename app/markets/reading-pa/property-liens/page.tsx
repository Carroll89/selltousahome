import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, readingLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Property Liens in Reading PA — Sell Your House Fast',
  description:
    'Selling a house with liens in Reading PA? Tax liens, judgment liens, mechanic\'s liens — we buy properties with liens. Cash offer in 24 hours. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/property-liens` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Reading PA house if it has liens?',
    answer:
      'Yes. Liens don\'t prevent a sale — they\'re paid off at closing from the proceeds. The title company identifies all liens during the title search, and they\'re satisfied (paid) at closing before the deed transfers to the new owner. You receive whatever equity remains after all liens and closing costs are paid.',
  },
  {
    question: 'What types of liens are common on Reading PA properties?',
    answer:
      'Common liens on Reading properties include: municipal (city) tax liens for unpaid property taxes or water/sewer bills, IRS or PA state tax liens, judgment liens from court cases, mechanic\'s liens from unpaid contractors, and HOA liens (less common in Reading). Reading also issues code enforcement liens for unresolved violations.',
  },
  {
    question: 'What is the Berks County Assessment Office and how do I look up liens?',
    answer:
      'The Berks County Assessment Office is located at 400 E. Wyomissing Avenue, Mohnton PA 19540 (phone: 610-478-6262). Online parcel search is available at gis.co.berks.pa.us/parcelsearch. Recorded liens are searchable through the Berks County Recorder of Deeds at 633 Court Street, 3rd Floor, Reading PA 19601 (phone: 610-478-3380) and online at berks.pa.publicsearch.us.',
  },
  {
    question: 'What if my liens exceed what the house is worth?',
    answer:
      'If total liens exceed the home\'s value, you may be "underwater." In this case, a short sale may be possible — the lienholders agree to accept less than the full amount owed. This requires negotiation and lender cooperation. Call us to discuss your specific situation — we\'ve navigated underwater properties in Reading before.',
  },
  {
    question: 'How does Reading\'s 5% transfer tax interact with a lien-heavy sale?',
    answer:
      'Reading has a 5% transfer tax (4% city + 1% state). In a traditional sale with liens, the seller pays liens, transfer tax (4% city portion), agent commissions, and other closing costs out of proceeds. When you sell to USA Home Buyers, we cover all closing costs including the transfer tax. The only deductions from your proceeds are the liens themselves — no fees, no tax on top.',
  },
  {
    question: 'How fast can I close on a Reading property with liens?',
    answer:
      'Liens add some complexity — a title search identifies them and payoff amounts must be confirmed. Typically we can close in 10-21 days on a lien-encumbered property. If there are IRS liens, federal payoff letters can add time (IRS typically requires 10-14 days for payoff letters). We move as fast as the lien-clearance process allows.',
  },
];

const pageUrl = `${SITE_URL}/markets/reading-pa/property-liens`;

export default function ReadingPropertyLiensPage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Selling a House With Liens in Reading PA — Berks County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/reading-landmark-hero.jpg"
          alt="Reading PA property with liens — sell for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/reading-pa" className="hover:text-white">Reading PA</Link> › Property Liens
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Reading PA House With Liens — We Handle It at Closing
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Tax liens, judgment liens, city liens from code enforcement — liens don&apos;t block a sale.
              They get paid off at closing from the proceeds. We buy Reading PA properties with
              any lien situation, cover all closing costs including the 5% transfer tax, and
              close in 10-21 days. Hablamos español.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We Know How to Handle Liens
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/reading-pa/property-liens" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Liens Don&apos;t Block Sales — They Get Paid at Closing</h2>
            <p className="text-gray-700 text-sm">
              A lien is a legal claim against a property for unpaid debts. It attaches to the property, not the
              person — meaning it must be resolved before the deed can transfer to a new owner. The title company
              identifies all liens during the title search, gets payoff amounts, and pays them at closing from
              the sale proceeds. You receive whatever equity remains.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Liens on Reading PA Properties</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'City of Reading tax liens', desc: 'Unpaid Reading city property taxes or municipal utility bills (water/sewer) can become liens. The city has an active collections process on older properties.' },
                { title: 'Berks County tax liens', desc: 'Unpaid county property taxes are also liened. The Berks County Assessment Office (400 E. Wyomissing Ave, Mohnton PA) is the source for tax status.' },
                { title: 'IRS / PA state tax liens', desc: 'Federal and state income tax liens attach to all real property in the county where filed. These are among the most complex to clear — IRS payoff letters take 10-14 days.' },
                { title: 'Judgment liens', desc: 'Court judgments against the owner become liens on real property in the county. Common sources: credit card lawsuits, personal injury judgments, debt collection.' },
                { title: 'Mechanic\'s liens', desc: 'Filed by contractors who performed work and weren\'t paid. Reading\'s old housing stock generates frequent renovation projects — and sometimes unpaid contractor disputes.' },
                { title: 'Code enforcement liens', desc: 'Reading issues liens for unresolved code violations where the city performed corrective work. These are cleared from sale proceeds at closing.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-brand-dark text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How to Research Liens on Your Reading Property</h2>
            <div className="space-y-3 text-sm">
              {[
                { name: 'Berks County Recorder of Deeds', detail: '633 Court Street, 3rd Floor, Reading PA 19601 | Phone: 610-478-3380 | Online: berks.pa.publicsearch.us', url: 'https://berks.pa.publicsearch.us/' },
                { name: 'Berks County Assessment Office', detail: '400 E. Wyomissing Avenue, Mohnton PA 19540 | Phone: 610-478-6262 | Parcel Search: gis.co.berks.pa.us/parcelsearch', url: 'https://gis.co.berks.pa.us/parcelsearch/' },
                { name: 'City of Reading — Tax & Utility', detail: 'Contact City of Reading Finance Department for municipal tax and utility lien status', url: null },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-brand-dark">{item.name}</p>
                  <p className="text-gray-600">{item.detail}</p>
                  {item.url && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline text-xs">{item.url}</a>
                  )}
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — Liens and All"
            subheadline="We handle the lien payoffs at closing. Written offer in 24 hours. We cover all costs including Reading's 5% transfer tax."
            sourcePage="/markets/reading-pa/property-liens"
          />

          <FAQSection items={FAQ_ITEMS} heading="Reading PA Property Liens — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-1">
              Sources:{' '}
              <a href="https://berks.pa.publicsearch.us/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Berks County Recorder of Deeds</a>
              {' · '}
              <a href="https://www.berkspa.gov/departments/assessment" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Berks County Assessment Office</a>
            </p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/markets/reading-pa/foreclosure" className="text-brand-primary hover:underline">Foreclosure in Reading PA</Link>{' '}
              ·{' '}
              <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
