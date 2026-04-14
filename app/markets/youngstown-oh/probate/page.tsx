/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Youngstown OH',
  description:
    'Selling a probate property through Mahoning County Probate Court in Youngstown OH? We buy probate homes as-is. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the Ohio probate process for selling real estate?',
    answer: "In Ohio, when someone dies owning real property, the estate must go through Mahoning County Probate Court before that property can be transferred or sold. The court appoints a personal representative (executor if named in a will, administrator if not) who is authorized to sign deeds on behalf of the estate. Full probate is typically required in Ohio for estates over $35,000 in gross assets. The personal representative files an inventory, notifies creditors, pays estate debts, and then can petition the court for authority to sell real property. Source: Mahoning County Probate Court (mahoningcountyoh.gov/962).",
  },
  {
    question: 'Can I accept a cash offer on a Youngstown probate house?',
    answer: "Yes. The personal representative can negotiate and sign a purchase agreement once appointed by the court. Closing typically requires either court approval of the sale or completion of the probate process — we structure our offers around your timeline and work with your probate attorney to coordinate.",
  },
  {
    question: 'How long does Ohio probate take?',
    answer: "Ohio probate typically runs 6-12 months for a standard estate, though complex cases or disputes can take longer. Mahoning County Probate Court processes cases at 120 Market Street, Youngstown, OH 44503. We can often lock in a cash offer early in the process and close as soon as the court authorizes the sale.",
  },
  {
    question: 'Do I need a probate attorney to sell a house in Mahoning County?',
    answer: "Ohio law doesn't require an attorney for probate, but it strongly recommends one given the complexity of the process — inventory filing, creditor notification, court petitions, deed preparation. The Mahoning County Probate Court clerk can provide procedural information but cannot give legal advice. Legal Aid Society of Mid-Ohio serves eligible residents at (330) 783-3110.",
  },
  {
    question: 'What if the probate house has code violations or is in bad condition?',
    answer: "We buy probate properties in any condition — code violations, deferred maintenance, vacant for years, contents left behind. Youngstown's pre-1950 housing stock makes condition issues nearly universal in estate sales. A cash buyer is often the only realistic option when the property doesn't qualify for conventional financing.",
  },
];

export default function YoungstownProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('Selling a Probate Property in Youngstown OH — Mahoning County Probate Court Guide', pageUrl, '2026-04-14'),
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
            alt="Youngstown OH probate home sale"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › Probate Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Probate Property in Youngstown OH — Cash, Any Condition
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Going through Mahoning County Probate Court? We buy probate properties in Youngstown
              in any condition — no repairs, no cleanout, no agent required. We coordinate with
              your probate attorney and close as soon as the court authorizes.
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
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Mahoning County Probate Court — At a Glance</h2>
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-6">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Court:</strong> Mahoning County Probate Court</li>
              <li><strong>Address:</strong> 120 Market Street, 1st Floor, Youngstown, OH 44503</li>
              <li><strong>Phone:</strong> (330) 740-2310</li>
              <li><strong>Fax:</strong> (330) 740-2325</li>
              <li><strong>Hours:</strong> Monday–Friday, 8:00 AM–4:00 PM (closed legal holidays)</li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="https://www.mahoningcountyoh.gov/962/Probate-Court" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  mahoningcountyoh.gov/962/Probate-Court
                </a>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Important Ohio distinction:</strong> Ohio uses Probate Court for estate matters —
            NOT a "Register of Wills" (that's a Pennsylvania system) and NOT an "Orphans' Court" or
            "Chancery Court." If you encounter those terms in connection with your Youngstown estate,
            they don't apply here. Mahoning County Probate Court has exclusive jurisdiction over
            estate administration, guardianships, and related matters in this county.
          </p>
          <p className="text-gray-700">
            The Ohio Revised Code governs estate administration under Title 21 (Courts — Probate).
            The personal representative must file an inventory within three months, notify known creditors,
            and satisfy estate debts before distributing assets or selling real property. Real estate sales
            require either authorization in the will or a court order.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer on Your Youngstown Probate Property"
          subheadline="We coordinate with probate attorneys and close when the court authorizes. Any condition, any timeline."
          sourcePage="/markets/youngstown-oh"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Probate Sales in Youngstown OH" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh/inherited-property" className="text-brand-primary hover:underline">Inherited Property in Youngstown OH →</Link></li>
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
          </ul>
        </section>

        <section className="mt-10">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Youngstown Probate Property?" sourcePage="/markets/youngstown-oh" />
        </section>
      </div>
    </>
  );
}
