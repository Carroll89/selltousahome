import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, erieLocalBusinessSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Inherited Property Erie PA — Sell Your House Fast',
  description:
    'Inherited a house in Erie PA? We buy inherited properties as-is — no cleanout, no repairs needed. Cash offer in 24 hours, close in 7-14 days. Serving Erie County.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/inherited-property` },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to complete probate before selling an inherited Erie PA property?',
    answer:
      "In most cases, yes. If the property was titled solely in the deceased's name, it must pass through the estate process at the Erie County Register of Wills, located at the Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. If the property was jointly titled with right of survivorship, it transfers automatically. A PA real estate attorney can clarify your situation quickly.",
  },
  {
    question: 'Where do I file for probate in Erie County?',
    answer:
      "Probate for Erie County estates is handled by the Erie County Register of Wills (part of the Clerk of Records office, Aubrea Hagerty-Haynes), Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. The main county line is (814) 451-6000. Once Letters Testamentary are issued, the executor can sign real estate contracts on behalf of the estate.",
  },
  {
    question: 'Can I sell before Erie County probate is complete?',
    answer:
      "Often yes. Once the Erie County Register of Wills issues Letters Testamentary, the personal representative has legal authority to manage and sell estate assets. A cash buyer experienced with estate sales can enter a purchase agreement and close once those letters are in hand — without waiting for the entire probate process to conclude.",
  },
  {
    question: 'What if there are multiple heirs who need to agree?',
    answer:
      "All beneficiaries with ownership interest must agree to the sale. If heirs disagree, the personal representative may need to petition the Erie County Orphans' Court. In practice, most families reach agreement when they understand the ongoing costs — Erie's property taxes, carrying costs on an aging pre-1970 home through a harsh winter, and deferred maintenance costs add up fast.",
  },
  {
    question: "What is Erie's transfer tax on an inherited property sale?",
    answer:
      "Erie PA has a standard 2% total transfer tax (1% PA state + 1% local). On a $115,000 inherited home, that's $2,300 total. By convention, buyer and seller each pay half (1% each = $1,150). When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax — nothing comes out of your proceeds.",
  },
  {
    question: 'Do we have to clean out the house before selling?',
    answer:
      "No. Leave whatever you don't want. We purchase Erie properties in as-is condition with all contents. Many inherited Erie homes have generations of belongings — we handle the cleanout after closing. Take what matters to you and leave the rest.",
  },
];

const pageUrl = `${SITE_URL}/markets/erie-pa/inherited-property`;

export default function ErieInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Selling an Inherited Property in Erie PA — Erie County', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({ name: 'Selling an Inherited House in Erie PA', description: 'USA Home Buyers explains how to sell an inherited property in Erie PA without cleanouts, repairs, or waiting for probate to finish.', contentUrl: `${SITE_URL}/videos/erie-pa-inherited.mp4`, thumbnailUrl: `${SITE_URL}/videos/erie-pa-inherited-poster.jpg`, uploadDate: '2026-04-12' }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/erie-pa-hero.jpg"
          alt="Erie PA home — sell inherited property fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/erie-pa" className="hover:text-white">Erie PA</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Inherited House in Erie PA — Erie County
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You inherited a property in Erie or Erie County. Whether it&apos;s across town or across
              the country, you don&apos;t have to deal with repairs, cleanouts, probate delays, or months on the market.
              We buy inherited properties as-is and close in 7-14 days.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/erie-pa/inherited-property" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/erie-pa-inherited.mp4"
        title="Selling an Inherited House in Erie PA"
        poster="/videos/erie-pa-inherited-poster.jpg"
        subtitle="We handle probate complexity and buy as-is"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">If you&apos;ve inherited a house in Erie, you&apos;re probably dealing with Erie County probate, property taxes piling up, and a house that needs work. Erie&apos;s housing stock is 77% pre-1970 — that means old systems, possible deferred maintenance, and a house that&apos;s harder to sell on the open market.</p>
          <p>We buy inherited properties as-is. No cleanouts, no repairs, no listing. We handle the paperwork and can close around your probate timeline.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>No cleanup, no repairs required</strong> — we buy Erie homes exactly as-is with all contents</li>
              <li>• Erie County probate is filed at the <strong>Register of Wills, 140 West Sixth Street, Erie PA 16501</strong></li>
              <li>• Once <strong>Letters Testamentary are issued</strong>, we can close in 7–14 days — you don&apos;t wait for full estate settlement</li>
              <li>• Erie&apos;s <strong>standard 2% transfer tax</strong> — we cover all closing costs so heirs keep more proceeds</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What Most Families Want to Know First</h2>
            <p className="text-gray-700 text-sm">
              You don&apos;t have to clean it out. You don&apos;t have to fix anything. Erie&apos;s aging housing stock —
              77% pre-1970 — is exactly what we buy. The biggest questions are usually about probate, and most
              are resolvable faster than people expect. The Erie County Register of Wills is part of the Clerk of Records
              office at the Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. Once Letters Testamentary
              are issued, the executor has full legal authority to sell estate real estate — no need to wait for the
              entire probate to conclude.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Common Inherited Property Situations in Erie PA
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Out-of-state heirs',
                  desc: "You live outside PA and inherited an Erie home. Managing contractors, cleanouts, and showings from out of state on a 77%-pre-1970 housing stock is a logistical challenge. We handle everything locally. You can close remotely.",
                },
                {
                  title: 'Multiple heirs',
                  desc: "You and siblings or other family members inherited the house together. Everyone needs to agree. We work with your estate attorney and can coordinate with Erie County to get all parties to the closing table.",
                },
                {
                  title: 'Property needs major work',
                  desc: "The Erie home hasn't been updated in decades — old electrical, aging plumbing, maybe roof damage from years of lake-effect snow. Traditional buyers will negotiate hard or walk. We buy it as-is, period.",
                },
                {
                  title: 'Estate still in probate at Erie County Register of Wills',
                  desc: "Erie County probate isn't finished, but you want to move forward. We can enter a purchase agreement and close once Letters Testamentary are issued by the Register of Wills at 140 West Sixth Street, Erie PA 16501.",
                },
                {
                  title: 'Back taxes or city liens',
                  desc: "Erie properties sometimes carry accumulated back taxes or code enforcement liens. These are handled at closing — paid from proceeds. They don't prevent the sale, and we've dealt with them many times.",
                },
                {
                  title: 'Snow and weather damage',
                  desc: "Erie gets 104+ inches of snow per year. Inherited properties that sat empty often have ice dam damage, roof issues, and water intrusion from harsh winters. These don't prevent a cash sale — we factor condition into the offer.",
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Erie County Probate — The Basics</h2>
            <p className="text-gray-700 mb-4">
              If the property was titled solely in the deceased&apos;s name, it goes through probate at the
              Erie County Register of Wills. Here&apos;s what the process looks like:
            </p>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  label: 'File for probate at Erie County Register of Wills',
                  detail: 'Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. The executor named in the will files for Letters Testamentary. County main line: (814) 451-6000.',
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
                  detail: "Closing is handled by a PA title company experienced with estate sales. Proceeds go to the estate for distribution to heirs. We cover all closing costs.",
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
              <p>Erie County Courthouse: 140 West Sixth Street, Erie PA 16501 | (814) 451-6000</p>
              <p>eriecountypa.gov — navigate: Row Offices → Register of Wills</p>
              <p>Market data last updated: April 2026</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Erie&apos;s Housing Stock: What You&apos;re Dealing With</h2>
            <p className="text-gray-700 mb-4">
              77% of Erie&apos;s housing stock was built before 1970. That means the inherited property you&apos;re
              dealing with is likely a Cape Cod, bungalow, or simple two-story colonial with aging systems —
              knob-and-tube wiring, cast iron pipes, an older furnace, and a roof that&apos;s been through decades
              of Erie winters.
            </p>
            <p className="text-gray-700 mb-4">
              Traditional buyers will ask for inspections. Inspections find problems. Problems become price
              reductions or deals that fall apart. Cash buyers like us account for condition in the offer —
              and then you&apos;re done. No back-and-forth, no repair credits, no lender issues after a price change.
            </p>
            <p className="text-gray-700">
              According to the{' '}
              <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">PA Department of Revenue (pa.gov)</a>,
              Erie&apos;s combined transfer tax is 2% — standard for Pennsylvania. On a $115,000 sale, that&apos;s $2,300.
              When you sell to us, we cover everything.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Inherited Erie Property"
            subheadline="No cleanup, no repairs, no showings. We work around Erie County estate timelines."
            sourcePage="/markets/erie-pa/inherited-property"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Property in Erie County" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide (PA)</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa/probate" className="text-brand-primary hover:underline">Erie PA Probate Sales</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
