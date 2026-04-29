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
    answer: "In Ohio, real property transfer after death depends on title, the will, and probate-court authority. Mahoning County Probate Court resources explain that the court may appoint a fiduciary for estate administration. The fiduciary may need to file inventory materials, address creditors, and obtain authority before selling estate real property. Source: Mahoning County Probate Court (mahoningcountyoh.gov/962).",
  },
  {
    question: 'Can I accept a cash offer on a Youngstown probate house?',
    answer: "Yes, once the person signing has the necessary authority. Closing may require court approval, title-company clearance, or completion of probate steps — we structure our offers around your timeline and work with your probate attorney to coordinate.",
  },
  {
    question: 'How long does Ohio probate take?',
    answer: "Ohio probate timing varies by estate, creditor issues, filings, and disputes. According to Mahoning County Probate Court resources, the court is located at 120 Market Street, Youngstown, OH 44503. We can often lock in a cash offer early in the process and close as soon as the court authorizes the sale.",
  },
  {
    question: 'Do I need a probate attorney to sell a house in Mahoning County?',
    answer: "Ohio probate can involve inventory filing, creditor notification, court petitions, and deed preparation. Mahoning County Probate Court can provide procedural information but not legal advice, so many estates use a probate attorney. Legal Aid Society of Mid-Ohio serves eligible residents at (330) 783-3110.",
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
            srcSet="/images/optimized/youngstown-oh-representative-hero-640.jpg 640w, /images/optimized/youngstown-oh-representative-hero-828.jpg 828w, /images/optimized/youngstown-oh-representative-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-representative-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-representative-hero-1200.jpg"
            alt="Representative Youngstown OH early twentieth century home with civic industrial context"
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
            According to Ohio Revised Code Title 21 and Mahoning County Probate Court resources, estate administration can involve inventory filing, creditor notice, and court authority before assets are distributed. Real estate sale authority depends on the will, deed/title posture, and any required court order.
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
