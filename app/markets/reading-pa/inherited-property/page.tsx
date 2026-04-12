import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, readingLocalBusinessSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Inherited Property in Reading PA — Sell Your House Fast',
  description:
    'Inherited a house in Reading PA? We buy inherited properties as-is — no cleanout, no repairs needed. Cash offer in 24 hours, close in 7-14 days. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/inherited-property` },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to complete probate before selling an inherited Reading PA property?',
    answer:
      'In most cases, yes. If the property was titled solely in the deceased\'s name, it must pass through the estate process at the Berks County Register of Wills, located at 633 Court Street, Suite 2C, Reading PA 19601 (phone: 610-478-6600). If the property was jointly titled with right of survivorship, it transfers automatically. A PA real estate attorney can clarify your situation quickly.',
  },
  {
    question: 'Where do I file for probate in Berks County?',
    answer:
      'Probate for Reading and Berks County estates is handled by the Berks County Register of Wills, 633 Court Street, Suite 2C, Reading PA 19601. Phone: (610) 478-6600. The Orphans\' Court / Clerk line is (610) 478-6550. Once Letters Testamentary are issued, the executor can sign real estate contracts on behalf of the estate.',
  },
  {
    question: 'Can I sell before Berks County probate is complete?',
    answer:
      'Often yes. Once the Berks County Register of Wills issues Letters Testamentary, the personal representative has authority to sign a deed. A cash buyer experienced with estate sales can enter a purchase agreement and close once those letters are in hand — without waiting for the entire probate process to conclude.',
  },
  {
    question: 'What if there are multiple heirs who need to agree?',
    answer:
      'All beneficiaries with ownership interest must agree to the sale. If heirs disagree, the personal representative may need to petition the Berks County Orphans\' Court. In practice, most families reach agreement when they understand the ongoing costs — Reading\'s property taxes, maintenance on aging pre-war row homes, and carrying costs add up fast.',
  },
  {
    question: 'Does Reading\'s 5% transfer tax affect inherited property sales?',
    answer:
      'Yes. Reading PA has a 5% total transfer tax (4% city + 1% state) — one of the highest rates in Pennsylvania. On a $185,000 inherited home, that\'s $9,250 in transfer taxes. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax. There\'s nothing coming out of your proceeds for taxes or fees.',
  },
  {
    question: 'Do we have to clean out the house before selling?',
    answer:
      'No. Leave whatever you don\'t want. We purchase Reading properties in as-is condition with all contents. Many inherited row homes in Reading have generations of belongings — we handle the cleanout after closing. Take what matters to you and leave the rest.',
  },
];

const pageUrl = `${SITE_URL}/markets/reading-pa/inherited-property`;

export default function ReadingInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Selling an Inherited Property in Reading PA — Berks County', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({ name: 'Selling an Inherited House in Reading PA', description: 'USA Home Buyers explains how to sell an inherited property in Reading PA without cleanouts, repairs, or waiting for probate to finish.', contentUrl: `${SITE_URL}/videos/reading-pa-inherited.mp4`, thumbnailUrl: `${SITE_URL}/videos/reading-pa-inherited-poster.jpg`, uploadDate: '2026-04-12' }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/reading-landmark-hero.jpg"
          alt="Reading PA row home — sell inherited property fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/reading-pa" className="hover:text-white">Reading PA</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Inherited House in Reading PA — Berks County
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You inherited a property in Reading or Berks County. Whether it&apos;s across town or across
              the country, you don&apos;t have to deal with repairs, cleanouts, probate delays, or months on the market.
              We buy inherited properties as-is and close in 7-14 days. Hablamos español.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today (English / Español)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/reading-pa/inherited-property" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/reading-pa-inherited.mp4"
        title="Selling an Inherited House in Reading PA"
        poster="/videos/reading-pa-inherited-poster.jpg"
        subtitle="We handle probate complexity and buy as-is"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">If you&apos;ve inherited a house in Reading, you&apos;re probably dealing with Berks County probate court, property taxes piling up, and a house that needs work. Most of Reading&apos;s homes were built before 1939. That means old systems, possible lead paint, and expensive repairs.</p>
          <p>We buy inherited properties as-is. No cleanouts, no repairs, no listing. We handle the paperwork and can close around your probate timeline.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>No cleanup, no repairs required</strong> — we buy Reading row homes exactly as-is with all contents</li>
              <li>• Berks County probate is filed at the <strong>Register of Wills, 633 Court St, Reading PA 19601</strong> (610-478-6600)</li>
              <li>• Once <strong>Letters Testamentary are issued</strong>, we can close in 7–14 days — you don&apos;t wait for full estate settlement</li>
              <li>• Reading&apos;s <strong>5% transfer tax = $9,250</strong> on a $185K sale — we cover all closing costs so heirs keep more</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What Most Families Want to Know First</h2>
            <p className="text-gray-700 text-sm">
              You don&apos;t have to clean it out. You don&apos;t have to fix anything. Reading&apos;s pre-war row homes
              are exactly what we buy. The biggest questions are usually about probate — and most are resolvable faster
              than people expect with the right title company and a clear estate situation. According to the{' '}
              <a href="https://www.berkspa.gov/departments/register-of-wills" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">Berks County Register of Wills (berkspa.gov)</a>,
              once Letters Testamentary are issued the executor has full legal authority to sell estate real estate — no need to
              wait for the entire probate to conclude. One more thing:{' '}
              <strong>Reading&apos;s 5% transfer tax is a real cost in a traditional sale — we cover it entirely.</strong>
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Common Inherited Property Situations in Reading PA
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Out-of-state heirs',
                  desc: 'You live outside PA and inherited a Reading row home or twin. Managing contractors, cleanouts, and showings from out of state on a 56%-pre-1939 housing stock is a logistical nightmare. We handle everything locally. You can close remotely.',
                },
                {
                  title: 'Multiple heirs',
                  desc: 'You and siblings or other family members inherited the house together. Everyone needs to agree. We work with your estate attorney and can coordinate with the Berks County Register of Wills to get everyone to the closing table.',
                },
                {
                  title: 'Property needs major work',
                  desc: 'The Reading row home hasn\'t been updated in decades — old electrical, lead paint, aging plumbing, maybe a crumbling front stoop. Traditional buyers will negotiate hard or walk. We buy it as-is, period.',
                },
                {
                  title: 'Estate still in probate at Berks County Register of Wills',
                  desc: 'Berks County probate isn\'t finished, but you want to move forward. We can enter a purchase agreement and close once Letters Testamentary are issued by the Register of Wills at 633 Court Street, Reading PA 19601.',
                },
                {
                  title: 'Back taxes or city liens',
                  desc: 'Reading properties sometimes carry accumulated back taxes or city liens from code enforcement. These are handled at closing — paid from proceeds. They don\'t prevent the sale, and we\'ve dealt with them many times.',
                },
                {
                  title: 'Hispanic family estate — Spanish language needed',
                  desc: 'Reading is 70.8% Hispanic. Many estate situations in our market involve families who are more comfortable discussing complex legal and financial matters in Spanish. We handle the entire process bilingually — English or Spanish.',
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Berks County Probate — The Basics</h2>
            <p className="text-gray-700 mb-4">
              If the property was titled solely in the deceased&apos;s name, it goes through probate at the
              Berks County Register of Wills. Here&apos;s what the process looks like:
            </p>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  label: 'File for probate at Berks County Register of Wills',
                  detail: '633 Court Street, Suite 2C, Reading PA 19601 | Phone: (610) 478-6600. The executor named in the will files for Letters Testamentary.',
                },
                {
                  step: '2',
                  label: 'Letters Testamentary are issued',
                  detail: 'Once issued, the executor has legal authority to manage and sell estate assets. This can happen within days to a few weeks of filing.',
                },
                {
                  step: '3',
                  label: 'Executor signs the purchase agreement',
                  detail: 'With Letters Testamentary in hand, the executor can sign a real estate contract on behalf of the estate.',
                },
                {
                  step: '4',
                  label: 'Close with a PA title company',
                  detail: 'Closing is handled by a PA title company experienced with estate sales. Proceeds go to the estate for distribution to heirs. We cover all closing costs including Reading\'s 5% transfer tax.',
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
            <div className="mt-4 text-xs text-gray-400 space-y-1">
              <p>Berks County Register of Wills: <a href="https://www.berkspa.gov/departments/register-of-wills" target="_blank" rel="noopener noreferrer" className="underline">berkspa.gov/departments/register-of-wills</a></p>
              <p>Online estate search: <a href="http://rwills.co.berks.pa.us/geneology/RegMain.htm" target="_blank" rel="noopener noreferrer" className="underline">rwills.co.berks.pa.us</a></p>
              <p>Market data last updated: April 2026</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Reading&apos;s Housing Stock: What You&apos;re Dealing With</h2>
            <p className="text-gray-700 mb-4">
              Over 56% of Reading&apos;s housing stock was built before 1939. That means the inherited property you&apos;re
              dealing with is likely a brick row home or semi-detached twin with lead paint, knob-and-tube or
              fuse-box electrical, cast iron pipes, and a deferred maintenance list longer than the house is wide.
            </p>
            <p className="text-gray-700 mb-4">
              Traditional buyers will ask for inspections. Inspections find problems. Problems become price reductions
              or deals that fall apart. Cash buyers like us account for condition in the offer — and then you&apos;re done.
              No back-and-forth, no repair credits, no lender re-approval after a price change.
            </p>
            <p className="text-gray-700">
              According to the{' '}
              <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">Berks County Recorder of Deeds (berkspa.gov)</a>{' '}
              and the{' '}
              <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">PA Department of Revenue (pa.gov)</a>,
              Reading&apos;s combined transfer tax is 5% — one of the highest rates in Pennsylvania. On a $185,000 sale,
              that&apos;s $9,250 in transfer taxes, with the seller conventionally paying the 4% city portion ($7,400).
              When you sell to us, we cover everything.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Inherited Reading Property"
            subheadline="No cleanup, no repairs, no showings. We work around Berks County estate timelines. Hablamos español."
            sourcePage="/markets/reading-pa/inherited-property"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Property in Berks County" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide (PA)</Link>{' '}
              ·{' '}
              <Link href="/markets/reading-pa/probate" className="text-brand-primary hover:underline">Reading PA Probate Sales</Link>{' '}
              ·{' '}
              <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
