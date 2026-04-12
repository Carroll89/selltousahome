import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, stateCollegeLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Inherited Property State College PA',
  description:
    'Inherited a house in State College or Centre County PA? We buy inherited properties as-is, work around Centre County probate, close in 7-14 days. No cleanout required.',
  alternates: { canonical: `${SITE_URL}/markets/state-college-pa/inherited-property` },
};

const FAQ_ITEMS = [
  {
    question: 'Where do I file for probate in Centre County PA?',
    answer:
      "Probate in Centre County is handled by the Centre County Register of Wills & Clerk of Orphans' Court, located at the Willowbank Office Building, 414 Holmes Street, Suite 2, Bellefonte, PA 16823. Phone: (814) 355-6724. Hours are Monday–Friday, 8:30 AM–5:00 PM. The Register of Wills office probates wills, grants Letters Testamentary (for named executors) and Letters of Administration (when there's no will).",
  },
  {
    question: 'Can I sell an inherited State College property before probate is finished?',
    answer:
      "In many cases, yes. Once the Centre County Register of Wills issues Letters Testamentary or Letters of Administration, the personal representative (executor or administrator) has legal authority to sign a purchase agreement and sell the property. You don't have to wait for the full estate to be settled. We can enter into a contract and coordinate closing around the estate timeline.",
  },
  {
    question: 'Do I need to clean out the house before selling?',
    answer:
      "No. Leave whatever you don't want — furniture, personal belongings, decades of accumulated items. We buy as-is with all contents. Inherited homes in State College often sat in families for 30-40 years, particularly the 1970s-1980s stock in College Heights and Westerly Parkway. The cleanout is our problem after closing.",
  },
  {
    question: 'What if multiple heirs need to agree on the sale?',
    answer:
      "All parties with ownership interest must sign off. If you're one of several heirs, we're experienced coordinating multi-party estate sales. The executor or administrator typically has authority to sign on behalf of the estate — as long as the will or court grants that authority. If heirs are in dispute, the court can appoint an administrator and resolve it, though that adds time.",
  },
  {
    question: 'Are there Centre County-specific closing requirements I should know about?',
    answer:
      "Yes. Centre County requires a Uniform Parcel Identifier (UPI) stamp on all deeds before recording — obtained through the Centre County Tax Assessment Office at 420 Holmes Street, Suite 301, Bellefonte, PA 16823. Cost: $10.00. The Centre County Recorder of Deeds (centrecountypa.gov/418) charges a minimum of $81.25 for deed recording (base $71.25 + UPI $10.00). These are handled by the title company at closing.",
  },
  {
    question: 'The inherited house needs major repairs. Does that matter?',
    answer:
      "Not to us. State College's older housing stock — the Holmes-Foster craftsman bungalows, the 1970s Westerly Parkway colonials — often has deferred maintenance: old roofs, outdated wiring, dated kitchens, or foundation settling. Traditional buyers will require repairs or deep discounts. We price the property based on its actual condition and make one fair offer. No inspection surprises.",
  },
];

const pageUrl = `${SITE_URL}/markets/state-college-pa/inherited-property`;

export default function StateCollegeInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        stateCollegeLocalBusinessSchema,
        articleSchema('Selling an Inherited Property in State College, PA', pageUrl, '2026-04-12'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA home — sell inherited property fast"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/state-college-pa" className="hover:text-white">State College</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Inherited House in State College, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You inherited a property in State College or Centre County. Whether you&apos;re managing probate
              through the Register of Wills in Bellefonte, coordinating with out-of-state siblings, or
              just trying to figure out where to start — we can help. We buy as-is, we close in 7-14 days,
              and you don&apos;t touch a thing.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/state-college-pa/inherited-property" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/state-college-inherited.mp4"
        title="Selling an Inherited Property in State College PA"
        poster="/images/video-posters/state-college-inherited.jpg"
        subtitle="How we help families sell inherited properties in Centre County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">Inheriting a house in State College is more common than people realize. A lot of the owner-occupied homes here were bought by Penn State faculty and staff in the 1970s and 1980s — and those folks are now passing those properties on to family members who may live in Philadelphia, Pittsburgh, or out of state entirely.</p>
          <p className="mb-3">I&apos;m with USA Home Buyers, and we work with families in exactly this situation throughout Centre County. The inherited house is often in decent shape but dated — 1970s kitchen, old HVAC, deferred maintenance. Traditional buyers will negotiate hard on all of that. We don&apos;t. We buy as-is.</p>
          <p className="mb-3">If the property is going through probate, that happens at the Centre County Register of Wills office in Bellefonte — at the Willowbank Office Building on Holmes Street. Once the executor has Letters Testamentary, they can sign the purchase agreement. We can coordinate our closing timeline around the estate process.</p>
          <p className="mb-3">You don&apos;t have to fly in to deal with the property. You don&apos;t have to clean it out. Take the things that matter to you and leave the rest — we handle everything after closing.</p>
          <p className="mb-3">Call USA Home Buyers at 888-440-5250. We&apos;ll ask about 10 questions, give you a written cash offer within 24 hours, and take it from there.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer for Most Families</h2>
            <p className="text-gray-700 text-sm">
              You don&apos;t have to clean it out, fix anything, or be in State College to close.
              Most Centre County probate situations resolve faster than families expect — often 2-6 weeks
              for Letters Testamentary. We can have a signed contract before probate is finished and
              close the day Letters are issued.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Common Situations We Handle in Centre County
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Out-of-state heirs',
                  desc: "You live in another state and inherited a State College house. Many heirs of Penn State faculty are scattered across the country. Managing contractors, cleanouts, and showings from a distance isn't realistic. We handle the property; you can close remotely.",
                },
                {
                  title: 'Multiple heirs — sibling coordination',
                  desc: "You and siblings or other relatives inherited the property together. Everyone needs to agree. We coordinate around multi-heir situations and work with estate attorneys to get everyone to the closing table without conflict.",
                },
                {
                  title: 'Property needs significant work',
                  desc: "The house hasn't been updated since the Carter administration, or it's been vacant and neglected. Traditional buyers will use every defect as a negotiating chip. We account for condition upfront and make one honest offer.",
                },
                {
                  title: 'Estate still in probate through Bellefonte',
                  desc: "The Centre County Register of Wills probate isn't finished yet. We can execute a purchase agreement now and coordinate closing for when Letters are issued — no need to wait for the full estate to be settled.",
                },
                {
                  title: 'Back Centre County taxes or liens',
                  desc: "The property has accumulated delinquent taxes with the Centre County Tax Assessment Office or has liens from contractors or code enforcement. These are resolved at closing from proceeds — they don't prevent the sale.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Centre County Probate — The Basics
            </h2>
            <p className="text-gray-700 mb-4">
              If the property was titled solely in the deceased&apos;s name, it passes through the estate
              at the Centre County Register of Wills. Here&apos;s how it typically works:
            </p>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  label: "File at Centre County Register of Wills in Bellefonte",
                  detail: "Willowbank Office Building, 414 Holmes Street, Suite 2, Bellefonte, PA 16823. Phone: (814) 355-6724. The executor named in the will files for Letters Testamentary. If there's no will, an administrator is appointed and receives Letters of Administration.",
                },
                {
                  step: '2',
                  label: 'Letters Testamentary (or Administration) are issued',
                  detail: 'Once issued, the personal representative has legal authority to sign contracts and sell estate assets. This often happens within days to a few weeks for straightforward estates.',
                },
                {
                  step: '3',
                  label: 'Executor signs the purchase agreement',
                  detail: "With Letters in hand, the executor or administrator signs the real estate contract on behalf of the estate. We've done this many times — it's straightforward.",
                },
                {
                  step: '4',
                  label: 'Close with a Centre County title company',
                  detail: "Closing is coordinated through a PA title company. The Centre County Recorder of Deeds records the deed. Net proceeds flow to the estate account for distribution per the will or PA intestate law.",
                },
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
            <p className="mt-4 text-xs text-gray-500">
              Sources:{' '}
              <a href="https://www.centrecountypa.gov/393/Register-of-Wills-Clerk-of-Orphans-Court" target="_blank" rel="noopener noreferrer" className="underline">Centre County Register of Wills</a>
              {' '}·{' '}
              <a href="https://centrecountypa.gov/423/Tax-Assessment" target="_blank" rel="noopener noreferrer" className="underline">Centre County Tax Assessment Office</a>
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Inherited Property"
            subheadline="No cleanup, no repairs, no showings. We work around Centre County probate timelines."
            sourcePage="/markets/state-college-pa/inherited-property"
          />

          <FAQSection items={FAQ_ITEMS} heading="Inherited Property in Centre County — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide (PA)</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa/probate" className="text-brand-primary hover:underline">Selling a Probate Property in State College</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">Sell Your State College House for Cash</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
