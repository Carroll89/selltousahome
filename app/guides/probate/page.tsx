import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Selling a House During Probate in Pennsylvania — Guide',
  description:
    'Selling a house during probate in Pennsylvania? Learn how estate sales work, PA probate timelines, and how cash buyers can close while probate is ongoing.',
  alternates: { canonical: 'https://selltousahome.com/guides/probate' },
};

const FAQ_ITEMS = [
  {
    question: 'Can you sell a house while in probate in Pennsylvania?',
    answer:
      'Yes. Once the personal representative (executor or administrator) has Letters Testamentary or Letters of Administration from the Register of Wills, they have legal authority to sell estate assets including real property. The sale can close while the overall estate administration is still ongoing.',
  },
  {
    question: 'How long does probate take in Pennsylvania?',
    answer:
      'Simple estates with clear wills and minimal assets can be administered in 6-12 months. Contested estates, estates with complex assets, or estates with creditor claims can take 1-3 years. However, property sales can usually proceed much earlier in the process once the personal representative has authority.',
  },
  {
    question: 'Does probate require court approval to sell the house?',
    answer:
      'In most Pennsylvania estates, the personal representative can sell real property without specific court approval if the will grants that authority or if all beneficiaries consent. If there is disagreement among beneficiaries or specific will restrictions, court approval may be required through the Orphans\' Court.',
  },
  {
    question: 'What if there is no will?',
    answer:
      'If the deceased died without a will (intestate), an administrator is appointed by the Register of Wills. The administrator has the same authority to sell property as an executor, but may need to follow additional procedures depending on the estate size and beneficiary situation.',
  },
  {
    question: 'Can multiple heirs prevent a property sale?',
    answer:
      'Heirs can object to a sale, which may require Orphans\' Court intervention. However, if the personal representative has authority and the beneficiaries agree (or a court orders it), the sale can proceed. In practice, cash buyers experienced with estates can often help facilitate the process and address concerns.',
  },
];

const pageUrl = `${SITE_URL}/guides/probate`;

export default function ProbateGuidePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling a House During Probate in Pennsylvania', pageUrl),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/guides" className="hover:text-white">Guides</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a House During Probate in Pennsylvania
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You don&apos;t have to wait for the entire estate to close before selling the property. Once the
              personal representative has legal authority, the house can be sold — even while probate is ongoing.
              Cash buyers work with estates at every stage.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Call {PHONE} — We work with estates
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer: Selling a House During Probate in Pennsylvania</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, you can sell a house while it is in probate in Pennsylvania — once the executor or administrator has Letters Testamentary or Letters of Administration from the county Register of Wills. Pennsylvania probate typically takes 9–18 months for a simple estate. You do not need to wait for probate to complete: you can sign a purchase agreement during probate and close once the executor has legal authority to deed the property. USA Home Buyers works with estate executors throughout Pennsylvania and closes in as few as 7 days.</p>
        </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Pennsylvania Probate — The Basics
            </h2>
            <p className="text-gray-700 mb-4">
              When a Pennsylvania resident dies, their estate typically goes through a court-supervised process
              called probate (or estate administration). This process is handled through the <strong>Register of
              Wills</strong> in the county where the deceased resided.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Step 1: Open the Estate</h3>
                <p className="text-sm text-gray-700">
                  The executor named in the will (or an administrator appointed by the court if there is no will)
                  files with the Register of Wills in the county where the deceased lived. In Harrisburg, that&apos;s
                  the Dauphin County Register of Wills. The Register issues Letters Testamentary (with a will)
                  or Letters of Administration (without a will).
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Step 2: Personal Representative Has Authority to Sell</h3>
                <p className="text-sm text-gray-700">
                  Once Letters Testamentary or Administration are issued, the personal representative has legal
                  authority to manage and sell estate assets — including real property. <strong>This is when we
                  can close a cash sale</strong>. You do not need to wait for the entire estate to be administered.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Step 3: Sale Proceeds Pay Estate Debts, Then Distribute</h3>
                <p className="text-sm text-gray-700">
                  Proceeds from the property sale go to pay estate debts (creditor claims, taxes, administration
                  costs) first. Remaining proceeds are distributed to beneficiaries per the will or PA intestate
                  succession law.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Selling During Probate vs. After Probate Closes
            </h2>
            <p className="text-gray-700 mb-4">
              Many people assume they must wait until the entire estate administration is complete before selling.
              This is almost never necessary and often impractical given PA probate timelines.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-brand-primary rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-3">Sell During Probate</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Possible once Letters are issued (often 2-8 weeks after death)</li>
                  <li>✓ Eliminates property carrying costs during administration</li>
                  <li>✓ Cash in estate simplifies remaining administration</li>
                  <li>✓ Cash buyers close in 7-14 days</li>
                  <li>✓ Proceeds available to pay estate debts immediately</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-3">Wait Until Probate Closes</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>— Can take 6 months to 2+ years</li>
                  <li>— Property costs accrue throughout (taxes, insurance, maintenance)</li>
                  <li>— No practical benefit in most cases</li>
                  <li>— Required only if the will specifically restricts early sale</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              How We Work With Pennsylvania Estates
            </h2>
            <p className="text-gray-700 mb-4">
              We&apos;re experienced purchasing properties from estates at every stage of the probate process. Here&apos;s
              how it works:
            </p>
            <div className="space-y-3">
              {[
                { title: 'Contact us with the property details', desc: 'Tell us about the property and where you are in the probate process. We can make offers at any stage — even before Letters are issued, so you\'re ready to move quickly once authority is granted.' },
                { title: 'We provide a written cash offer', desc: 'Within 24 hours, we provide a formal written offer. You can share this with estate beneficiaries and your estate attorney for review.' },
                { title: 'Personal representative signs the purchase agreement', desc: 'The executor or administrator signs on behalf of the estate. If beneficiary consent is needed, we can accommodate the timeline required.' },
                { title: 'Licensed title company handles the close', desc: 'We close through a PA-licensed title company that is experienced with estate sales. They handle title search, deed transfer from the estate, and proceeds distribution.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="bg-brand-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Pennsylvania Inheritance Tax on Probate Property Sales
            </h2>
            <p className="text-gray-700 mb-4">
              When inherited property is sold, Pennsylvania inheritance tax applies to the fair market value at
              the time of death — not the sale price. Tax rates:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="px-4 py-3 text-left">Relationship to Deceased</th>
                    <th className="px-4 py-3 text-left">PA Inheritance Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Spouse or charity', '0%'],
                    ['Direct descendants (children, grandchildren)', '4.5%'],
                    ['Siblings', '12%'],
                    ['All other heirs', '15%'],
                  ].map(([rel, rate], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 border-b border-gray-100">{rel}</td>
                      <td className="py-3 px-4 font-bold text-brand-primary border-b border-gray-100">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Inheritance tax is paid from the estate, not by the buyer. Consult a PA estate attorney or CPA for
              tax implications specific to your situation.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Estate Property"
            subheadline="We work with executors, administrators, and estate attorneys. Written offer in 24 hours."
            sourcePage="/guides/probate"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions — Probate Property Sales in Pennsylvania"
          />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/probate" className="text-brand-primary hover:underline">Dauphin County Probate Guide</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
