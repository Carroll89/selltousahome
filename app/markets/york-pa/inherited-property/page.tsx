/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/inherited-property`;

export const metadata: Metadata = {
  title: 'Inherited Property York PA',
  description:
    'Inherited a house in York PA? We buy inherited properties as-is — no cleanout, no repairs. Cash offer in 24 hours. York County Register of Wills guidance included.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to complete probate before selling an inherited York PA property?',
    answer: "In most cases, yes. If the property was titled solely in the deceased's name, it must pass through the York County Register of Wills at 45 North George Street, Suite 2, York, PA 17401 (phone: 717-771-9607). If the property was jointly titled with right of survivorship, it transfers automatically without probate. A Pennsylvania real estate attorney can confirm your specific situation quickly.",
  },
  {
    question: 'Where do I file for probate in York County?',
    answer: "York County probate is handled by the York County Register of Wills, 45 North George Street, Suite 2, York, PA 17401, open Monday through Friday 8:00am–4:15pm (phone: 717-771-9607). Once Letters Testamentary are issued, the executor has legal authority to sign real estate contracts on behalf of the estate.",
  },
  {
    question: 'Can I sell before York County probate is complete?',
    answer: "Often yes. Once the York County Register of Wills issues Letters Testamentary, the personal representative can manage and sell estate assets. A cash buyer can enter a purchase agreement and close once those letters are in hand — without waiting for the full probate process to conclude. Pennsylvania also allows a Voluntary Administration affidavit for small estates under $50,000.",
  },
  {
    question: 'What if multiple heirs need to agree to the York PA sale?',
    answer: "All beneficiaries with an ownership interest must consent to the sale. If heirs disagree, the personal representative may need to petition the York County Orphan's Court. In practice, most families reach agreement quickly — carrying costs on a York City row home (property taxes, utilities, deferred maintenance) mount up fast.",
  },
  {
    question: 'What is the transfer tax on an inherited property in York PA?',
    answer: "York PA has a standard 2% total transfer tax (1% PA state + 1% local). On a $165,000 inherited row home, total transfer tax is $3,300. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax — nothing comes out of your proceeds.",
  },
  {
    question: 'Do we have to clean out the York house before selling?',
    answer: "No. We purchase York properties in as-is condition with all contents. Many inherited Northeast York row homes have a lifetime of belongings — furniture, tools, appliances. Take what matters to you and leave the rest. We handle the cleanout after closing.",
  },
];

export default function YorkInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('Selling an Inherited Property in York PA — York County', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      {/* Hero */}
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/york-pa-hero-640.jpg 640w, /images/optimized/york-pa-hero-828.jpg 828w, /images/optimized/york-pa-hero-1080.jpg 1080w, /images/optimized/york-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/york-pa-hero-1200.jpg"
            alt="York PA row home — sell inherited property for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/york-pa" className="hover:text-white">York PA</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Inherited House in York PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Inherited a York row home, twin, or single-family house? We buy inherited properties
              in any condition throughout York County — no cleanout, no repairs, no agent fees.
              Written cash offer in 24 hours, close on your timeline.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ No cleanout required</span>
              <span>✓ No repairs</span>
              <span>✓ Work with estate executors</span>
              <span>✓ Close in 7-14 days</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/york-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">If you inherited a house in York, PA, you likely need to complete probate through the York County Register of Wills before selling — unless the property was held jointly or in a living trust. York County probate typically runs 9–14 months. USA Home Buyers buys inherited properties in York as-is — no repairs or cleanout required, and we work around your probate timeline.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Inherited a York PA Home? Here's What to Know
          </h2>
          <p className="text-gray-700 mb-3">
            York City's pre-1940 row home stock passes through generations — many of the worker cottages
            in Northeast and Southwest York were built by the same families who worked at York Barbell,
            York International, and the factory belt that defined this city. When a family member passes,
            an estate sale is often the practical path forward.
          </p>
          <p className="text-gray-700 mb-3">
            According to{' '}
            <a href="https://www.redfin.com/city/21030/PA/York/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (February 2026)</a>,
            York City's median sale price is $165,850 — but Northeast York properties average closer to
            $120,000 and often require significant work before competing at retail. That math changes
            when a cash buyer purchases as-is: no repairs, no staging, no commission.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://yorkcountypa.gov/385/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">York County Register of Wills (yorkcountypa.gov)</a>,
            the probate process requires Letters Testamentary before estate real estate can be formally
            transferred. The York County Register of Wills — located at 45 North George Street, Suite 2,
            York, PA 17401 — handles all York County estate filings.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue (pa.gov)</a>,
            a 2% total realty transfer tax applies to all PA property transfers, including estate sales.
            On a $165,000 inherited York row home, that's $3,300. When you sell to us, we cover it completely.
          </p>
        </section>

        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">
            York County Register of Wills — Probate Office
          </h2>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-sm">
            <p className="font-semibold text-brand-dark">York County Register of Wills</p>
            <p className="text-gray-600">45 North George Street, Suite 2, York, PA 17401</p>
            <p className="text-gray-600">Phone: (717) 771-9607</p>
            <p className="text-gray-600">Hours: Monday–Friday, 8:00am–4:15pm</p>
            <p className="text-gray-600 mt-1">
              <a href="https://yorkcountypa.gov/385/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                yorkcountypa.gov/385/Register-of-Wills →
              </a>
            </p>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            York County uses the standard PA Register of Wills model. Small estates under $50,000 may use
            a Voluntary Administration affidavit without full probate. An attorney can advise on whether
            your estate qualifies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How the Sale Process Works</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Confirm estate authority', desc: 'The executor needs Letters Testamentary from the York County Register of Wills before signing contracts. This typically takes 2-4 weeks from initial filing.' },
              { step: '2', title: 'Contact us for a cash offer', desc: 'We make a written offer based on the property\'s current condition — no repairs or cleanout needed. Northeast York row homes, Downtown Colonial properties, whatever the situation.' },
              { step: '3', title: 'Sign the purchase agreement', desc: 'The executor signs on behalf of the estate. The contract specifies price, terms, and a closing date that works for the estate timeline.' },
              { step: '4', title: 'Close at a York County title company', desc: 'Proceeds go to the estate account. We cover all closing costs — transfer tax, recording fees, title insurance. Nothing comes out of your number.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-brand-light rounded-xl p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">{item.step}</div>
                <div>
                  <p className="font-semibold text-brand-dark">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for the Inherited York Property"
          subheadline="No obligation. We work with executors and estate attorneys throughout York County."
          sourcePage="/markets/york-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Properties in York PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/york-pa/probate" className="text-brand-primary hover:underline">Probate sales in York PA →</Link></li>
            <li><Link href="/markets/york-pa" className="text-brand-primary hover:underline">York PA market overview →</Link></li>
            <li><Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Pennsylvania inherited property guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell the Inherited York Property?" sourcePage="/markets/york-pa" />
      </div>
    </>
  );
}
