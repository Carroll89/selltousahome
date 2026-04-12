import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { articleSchema, faqSchema, stateCollegeLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Probate Property State College PA',
  description:
    'Selling probate property in State College PA? We work with executors, buy as-is, and close around Centre County Register of Wills timelines',
  alternates: { canonical: `${SITE_URL}/markets/state-college-pa/probate` },
};

const FAQ_ITEMS = [
  {
    question: 'Does a Centre County probate property have to be sold through an estate agent?',
    answer:
      "No. The personal representative (executor or administrator) has broad authority to sell real estate — through any method they choose, including directly to a cash buyer, as long as it's in the best interest of the estate. An estate attorney can confirm the authority granted by the Letters issued by the Centre County Register of Wills.",
  },
  {
    question: 'What does the Centre County Register of Wills do?',
    answer:
      "The Centre County Register of Wills & Clerk of Orphans' Court (Willowbank Office Building, 414 Holmes Street, Suite 2, Bellefonte, PA 16823, phone 814-355-6724) probates wills, grants Letters Testamentary and Letters of Administration, and oversees estate administration. It also handles adoptions, guardianships, and some trust matters through the Orphans' Court division.",
  },
  {
    question: 'How long does Centre County probate typically take?',
    answer:
      "For a straightforward, uncontested estate with a clear will and no creditor disputes, the personal representative can have Letters Testamentary within days to a few weeks of filing. The full estate settlement — paying debts, filing the PA inheritance tax return, distributing assets — typically takes several months to a year. But you don't have to wait for full settlement to sell the property. Once Letters are issued, you can sell.",
  },
  {
    question: 'Is there a PA inheritance tax on estate property in Centre County?',
    answer:
      "Yes. Pennsylvania has a separate inheritance tax (not a federal estate tax). The rate depends on the relationship to the deceased: 0% for spouses, 4.5% for children and direct lineal descendants, 12% for siblings, 15% for others. This is paid by the estate to the PA Department of Revenue, not at the property closing. Source: revenue.pa.gov.",
  },
  {
    question: 'Can we sell before the PA inheritance tax is settled?',
    answer:
      "Yes. The real estate sale can proceed before the inheritance tax return is filed or paid. The title company may require confirmation that the tax lien has been addressed or will be paid from proceeds, but the closing doesn't have to wait for PA Revenue to process the return.",
  },
  {
    question: 'What if the estate has multiple beneficiaries in different states?',
    answer:
      "Remote signings are routine. We coordinate with title companies that handle out-of-state or remote closings. Documents can be signed via mail or notary public in the beneficiary's home state. Penn State-connected families are often spread across the country — this isn't an unusual situation for Centre County estate sales.",
  },
];

const pageUrl = `${SITE_URL}/markets/state-college-pa/probate`;

export default function StateCollegeProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        stateCollegeLocalBusinessSchema,
        articleSchema('Selling a Probate Property in State College, PA', pageUrl, '2026-04-12'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA home — sell probate property fast"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/state-college-pa" className="hover:text-white">State College</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Probate Property in State College, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Estate sales through the Centre County Register of Wills don&apos;t have to drag on.
              Once Letters Testamentary are issued, we can close the property in 7-14 days.
              We buy as-is, work with estate attorneys, and handle the Centre County recording requirements.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We Work with Executors
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/state-college-probate.mp4"
        title="Selling Probate Property in State College PA"
        poster="/videos/state-college-probate-poster.jpg"
        subtitle="Working with executors and Centre County Register of Wills"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Handling a probate sale in Centre County? We work directly with executors and the Register of Wills office. We buy as-is, no repairs needed, and we close around probate timelines. Cash offer in 24 hours.
        </div>
      </details>
          <CashOfferForm variant="hero" sourcePage="/markets/state-college-pa/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-base font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              You can sell once the Centre County Register of Wills issues Letters Testamentary or Letters
              of Administration — you don&apos;t need to wait for the full estate to settle. According to the
              Centre County Register of Wills (centrecountypa.gov), executors have broad authority to sell
              real estate once Letters are issued. We can provide a written offer before Letters are issued,
              giving you a concrete number for estate planning. Closing happens when you have authority to sign.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">For Executors and Estate Attorneys</h2>
            <p className="text-gray-700 text-sm">
              We work with personal representatives and their attorneys throughout Centre County.
              We can provide a written offer before Letters are issued — giving you a concrete number
              to work with during the estate planning process. Closing happens once you have authority to sign.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Centre County Register of Wills — What You Need
            </h2>
            <p className="text-gray-700 mb-4">
              The Centre County Register of Wills & Clerk of Orphans&apos; Court handles all probate matters
              for estates in Centre County:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 text-sm">
              <p className="font-semibold text-brand-dark mb-1">Centre County Register of Wills & Clerk of Orphans&apos; Court</p>
              <p className="text-gray-600">Willowbank Office Building</p>
              <p className="text-gray-600">414 Holmes Street, Suite 2</p>
              <p className="text-gray-600">Bellefonte, PA 16823</p>
              <p className="text-gray-600">Phone: (814) 355-6724</p>
              <p className="text-gray-600">Hours: Monday–Friday, 8:30 AM–5:00 PM</p>
              <p className="text-gray-500 mt-2 text-xs">
                Source:{' '}
                <a href="https://www.centrecountypa.gov/393/Register-of-Wills-Clerk-of-Orphans-Court" target="_blank" rel="noopener noreferrer" className="underline">
                  centrecountypa.gov
                </a>
              </p>
            </div>
            <p className="text-gray-700 mb-3">
              The Register of Wills issues Letters Testamentary (when a valid will names an executor)
              or Letters of Administration (when there&apos;s no will or the named executor can&apos;t serve).
              Either instrument gives the personal representative authority to sell real property.
            </p>
            <p className="text-gray-700">
              According to the Centre County Tax Assessment Office (centrecountypa.gov), all deeds in
              Centre County require a Uniform Parcel Identifier (UPI) stamp obtained from their office
              at 420 Holmes Street, Suite 301, Bellefonte, PA 16823 before the deed can be recorded.
              Cost: $10.00. This is handled by the title company at closing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why Penn State-Connected Estates Often Need Speed
            </h2>
            <p className="text-gray-700 mb-4">
              Many estate properties in State College are former Penn State faculty or staff homes —
              1970s-1990s colonials and ranches in College Heights, Westerly Parkway, or Holmes-Foster.
              The beneficiaries are often scattered: Philadelphia, Pittsburgh, DC, out of state entirely.
              Nobody wants to manage an empty Centre County property for 12-18 months while the estate
              winds down.
            </p>
            <p className="text-gray-700">
              Vacant properties accumulate carrying costs: property taxes, homeowner&apos;s insurance,
              utilities, and maintenance. The sooner the property is sold, the sooner the estate stops
              paying those costs and distributes assets to beneficiaries.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Cash Offer for the Probate Property"
            subheadline="We work around Centre County probate timelines. No obligation."
            sourcePage="/markets/state-college-pa/probate"
          />

          <FAQSection items={FAQ_ITEMS} heading="Probate Property Sales in Centre County — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/state-college-pa/inherited-property" className="text-brand-primary hover:underline">Inherited Property in State College</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">Sell Your State College House for Cash</Link>
            </p>
            <p className="mt-3 text-xs text-gray-400">
              Sources:{' '}
              <a href="https://www.centrecountypa.gov/393/Register-of-Wills-Clerk-of-Orphans-Court" target="_blank" rel="noopener noreferrer" className="underline">Centre County Register of Wills</a>
              {' '}·{' '}
              <a href="https://www.revenue.pa.gov/TaxesAndPrograms/InheritanceTax/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="underline">PA Inheritance Tax (revenue.pa.gov)</a>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
