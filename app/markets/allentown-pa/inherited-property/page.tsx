import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, allentownLocalBusinessSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Inherited Property in Allentown PA',
  description:
    'Inherited a house in Allentown or Lehigh County PA? We buy inherited properties as-is, handle estate complications, and can close quickly once title and estate authority are ready. No cleanout, no repairs. Bilingual service.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/inherited-property` },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to complete probate before selling an inherited Allentown property?',
    answer:
      'Often, yes. According to the Lehigh County Register of Wills, that office probates estates and provides estate-administration forms; if the property was titled solely in the deceased owner\'s name, estate authority usually has to be opened before a deed can be signed. Joint title, beneficiary deeds, trusts, or other facts can change the answer, so a Pennsylvania estate attorney or title company should confirm your specific situation.',
  },
  {
    question: 'Where do I file for probate in Allentown?',
    answer:
      'Per Lehigh County, the Register of Wills is at the Lehigh County Courthouse, Room 122, 455 W Hamilton St, Allentown PA 18101. If the deceased was domiciled in another Pennsylvania county, the correct Register of Wills office may be different.',
  },
  {
    question: 'Can I sell before probate is complete?',
    answer:
      'Often yes, with the right coordination. Under Pennsylvania Title 20 § 3155, letters testamentary or letters of administration are granted by the register to the appropriate executor or administrator. Once estate authority is in place and title is clear, a purchase agreement and closing can often move forward while other estate tasks continue.',
  },
  {
    question: 'What if there are multiple heirs who need to agree?',
    answer:
      'Who must consent depends on title, estate authority, the will, and any court orders. If heirs or beneficiaries disagree, the personal representative should get guidance from a Pennsylvania estate attorney before signing a contract. We can still make an offer, but closing has to follow the estate documents and title company requirements.',
  },
  {
    question: 'Do we have to clean out the house before selling?',
    answer:
      'No. Leave whatever you don\'t want. We purchase properties in as-is condition with all contents. Many Allentown inherited properties have decades of belongings — we handle the cleanout after closing. You take what matters to you and leave the rest.',
  },
  {
    question: 'Do you work with Spanish-speaking families inheriting Allentown properties?',
    answer:
      'Yes. We offer bilingual service for Allentown families who prefer to discuss an inherited-property sale in Spanish. We can explain the offer, title steps, and closing process clearly so language does not block your understanding of the sale.',
  },
];

const pageUrl = `${SITE_URL}/markets/allentown-pa/inherited-property`;

export default function AllentownInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        allentownLocalBusinessSchema,
        articleSchema('Selling an Inherited Property in Allentown, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({
          name: 'Selling an Inherited Property in Allentown',
          description:
            'USA Home Buyers explains how families can sell inherited Allentown and Lehigh County properties as-is, without repairs, cleanout, or months on the market.',
          contentUrl: 'https://v3b.fal.media/files/b/0a95c0f8/FqXR-hxAOSciAP09lUsin_allentown-inherited.mp4',
          thumbnailUrl: `${SITE_URL}/images/video-posters/allentown-inherited-poster.jpg`,
          uploadDate: '2026-04-06',
        }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/allentown-hero.jpg"
          alt="Allentown PA homes — we buy houses fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/allentown-pa" className="hover:text-white">Allentown</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Inherited House in Allentown, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You inherited a property in Allentown or Lehigh County. Whether it&apos;s across town or across
              the country, you don&apos;t have to deal with repairs, cleanouts, or months on the market.
              We buy inherited properties as-is and can close quickly once title and estate authority are ready.
              <strong className="block mt-2 text-white">Bilingual service — Hablamos español.</strong>
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/allentown-pa/inherited-property" />
          </div>
        </div>
      </section>
      {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0f8/FqXR-hxAOSciAP09lUsin_allentown-inherited.mp4"
        title="Selling an Inherited Property in Allentown"
        poster="/images/video-posters/allentown-inherited-poster.jpg"
        subtitle="See how we help Allentown families sell inherited properties without the hassle"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Inheriting a house in Allentown is rarely straightforward. There&apos;s the emotional weight of it, the logistics of a property you may not live near, and often family members in different places with different opinions. I&apos;m with USA Home Buyers, and we handle inherited properties in Allentown and Lehigh County every week.</p>
            <p className="mb-3">The most common thing we hear: they don&apos;t want to deal with it. The property needs work. There&apos;s furniture and belongings that need to go somewhere. Nobody wants to manage a Lehigh Valley property from another state. A traditional listing means repairs, cleanout, showings, waiting — on top of everything else you&apos;re already dealing with.</p>
            <p className="mb-3">We buy inherited Allentown properties as-is. Don&apos;t touch a thing. No cleanout, no repairs, no painting, no landscaping. We make a written cash offer within 24 hours and close in as few as seven days.</p>
            <p className="mb-3">If the property is going through probate, that&apos;s fine. The Lehigh County Register of Wills says its office probates estates, and Pennsylvania Title 20 § 3155 explains who may receive letters. Once estate authority and title requirements are confirmed, the house can often be sold while other estate matters are still being wrapped up.</p>
            <p className="mb-3">You don&apos;t have to spend months managing an Allentown property you didn&apos;t ask for. Call USA Home Buyers at 888-274-5006. Fair offer, fast close, no hassle.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What Most Families Want to Know First</h2>
            <p className="text-gray-700 text-sm">
              You don&apos;t have to clean it out. You don&apos;t have to fix anything. You don&apos;t have to be in Allentown
              to close. The biggest questions are usually about probate. According to the Lehigh County Register
              of Wills, estate administration can involve required filings and legal documents, so a title company
              or Pennsylvania estate attorney should confirm authority before closing.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Allentown Inherited Property: Common Situations We Handle
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Out-of-state heirs',
                  desc: 'You live in another state and inherited an Allentown property. Managing a traditional sale from a distance — contractors, cleanouts, showings — is a logistical nightmare. Many Allentown properties are older row homes and Bethlehem Steel-era houses that need significant work. We handle it from here. You can close remotely.',
                },
                {
                  title: 'Multiple heirs',
                  desc: 'You and your siblings, cousins, or other family members inherited the house together. Consent and signing authority depend on title, the will, letters, and court requirements. We can work with your estate attorney and title company to identify who has to sign.',
                },
                {
                  title: 'Property needs work',
                  desc: 'The house hasn\'t been updated in decades, or it\'s been vacant for years. Many Allentown row homes have aging systems — older boilers, knob-and-tube wiring, aging roofs. Traditional buyers will ask for repairs or discounts. We buy it as-is.',
                },
                {
                  title: 'Estate still in probate',
                  desc: 'Probate in Lehigh County isn\'t finished yet, but you want to move forward. Per Pennsylvania Title 20 § 3155, the register grants letters to the appropriate personal representative; once that authority and title requirements are confirmed, the property sale can often proceed before every estate task is complete.',
                },
                {
                  title: 'Back taxes or liens',
                  desc: 'The property has accumulated back taxes or there are liens from the estate. The title company identifies recorded liens and payoff items so they can be addressed through the closing documents when a sale is feasible.',
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Lehigh County Probate — The Basics</h2>
            <p className="text-gray-700 mb-4">
              If the property was titled solely in the deceased&apos;s name, it usually has to be handled through
              estate administration. The Lehigh County Register of Wills says its office probates estates and provides
              estate-administration forms; Pennsylvania Title 20 § 3155 explains who may receive letters. Here&apos;s what
              that process usually looks like:
            </p>
            <div className="space-y-3">
              {[
                { step: '1', label: 'File for probate at Lehigh County Register of Wills', detail: 'Lehigh County lists the Register of Wills at Room 122, 455 W Hamilton St, Allentown PA 18101. The office probates estates and provides administration forms.' },
                { step: '2', label: 'Letters Testamentary are issued', detail: 'Once issued, the executor or administrator can act for the estate within the authority granted. Timing depends on the filings, estate facts, and Register of Wills requirements.' },
                { step: '3', label: 'Executor signs the purchase agreement', detail: 'With confirmed letters and title authority, the personal representative can usually sign a real estate contract for the estate.' },
                { step: '4', label: 'Close with a title company', detail: 'Closing is handled by a PA title company. Proceeds are paid according to the closing documents and estate requirements.' },
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

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Inherited Property"
            subheadline="No cleanup, no repairs, no showings. We work around estate timelines."
            sourcePage="/markets/allentown-pa/inherited-property"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Property in Lehigh County" />

          <BlogClusterLinks marketSlug="allentown-pa" cityName="Allentown" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide (PA)</Link>{' '}
              ·{' '}
              <Link href="/guides/probate" className="text-brand-primary hover:underline">PA Probate Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Sell Your Allentown House</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
