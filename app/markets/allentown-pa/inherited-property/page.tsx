import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, allentownLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Inherited Property in Allentown PA',
  description:
    'Inherited a house in Allentown or Lehigh County PA? We buy inherited properties as-is, handle estate complications, and close in 7-14 days. No cleanout, no repairs. Bilingual service.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/inherited-property` },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to complete probate before selling an inherited Allentown property?',
    answer:
      'In most cases, yes. If the property was titled solely in the deceased\'s name, it must pass through the estate administration process through the Lehigh County Register of Wills, located at the Lehigh County Courthouse, 455 W Hamilton St, Allentown PA 18101. However, if the property was jointly titled with right of survivorship, it transfers automatically. An experienced PA real estate attorney can clarify your specific situation quickly.',
  },
  {
    question: 'Where do I file for probate in Allentown?',
    answer:
      'Probate for estates in Allentown is handled by the Lehigh County Register of Wills, located at the Lehigh County Courthouse at 455 W Hamilton St, Allentown PA 18101. If the deceased lived in a different county, probate is filed in that county\'s Register of Wills office.',
  },
  {
    question: 'Can I sell before probate is complete?',
    answer:
      'Often yes, with the right coordination. Once Letters Testamentary or Letters of Administration are issued by the Lehigh County Register of Wills, the personal representative (executor) has authority to sign the deed. A cash buyer experienced with estate sales can enter a purchase agreement and close once those letters are in hand — without waiting for the entire probate process to conclude.',
  },
  {
    question: 'What if there are multiple heirs who need to agree?',
    answer:
      'All beneficiaries with ownership interest must agree to the sale. If heirs are not in agreement, the personal representative may need to petition the court. In practice, most families reach agreement — especially when the alternative is ongoing carrying costs, maintenance, and taxes on a property no one wants to keep.',
  },
  {
    question: 'Do we have to clean out the house before selling?',
    answer:
      'No. Leave whatever you don\'t want. We purchase properties in as-is condition with all contents. Many Allentown inherited properties have decades of belongings — we handle the cleanout after closing. You take what matters to you and leave the rest.',
  },
  {
    question: 'Do you work with Spanish-speaking families inheriting Allentown properties?',
    answer:
      'Yes. With over 56% of Allentown\'s population being Hispanic, we regularly work with families where Spanish is the primary language. We can explain the entire process in Spanish and work with your family at every step. No language barrier should prevent you from understanding your options and rights.',
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
              We buy inherited properties as-is and close in 7-14 days.
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
            <p className="mb-3">If the property is going through probate, that&apos;s fine. Once the Lehigh County Register of Wills issues Letters Testamentary or Letters of Administration, the personal representative can authorize the sale. The house can be sold while other estate matters are still being wrapped up.</p>
            <p className="mb-3">You don&apos;t have to spend months managing an Allentown property you didn&apos;t ask for. Call USA Home Buyers at 888-440-5250. Fair offer, fast close, no hassle.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What Most Families Want to Know First</h2>
            <p className="text-gray-700 text-sm">
              You don&apos;t have to clean it out. You don&apos;t have to fix anything. You don&apos;t have to be in Allentown
              to close. The biggest questions are usually about probate — and most of those are resolvable faster
              than people expect with the right title company and a clear estate situation.
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
                  desc: 'You and your siblings, cousins, or other family members inherited the house together. Everyone needs to agree. We\'re experienced with multi-heir situations and can work with your estate attorney to get everyone to the closing table.',
                },
                {
                  title: 'Property needs work',
                  desc: 'The house hasn\'t been updated in decades, or it\'s been vacant for years. Many Allentown row homes have aging systems — older boilers, knob-and-tube wiring, aging roofs. Traditional buyers will ask for repairs or discounts. We buy it as-is.',
                },
                {
                  title: 'Estate still in probate',
                  desc: 'Probate in Lehigh County isn\'t finished yet, but you want to move forward. We can enter a purchase agreement and close once Letters Testamentary are issued from the Lehigh County Register of Wills. No need to wait for the full process to conclude.',
                },
                {
                  title: 'Back taxes or liens',
                  desc: 'The property has accumulated back taxes or there are liens from the estate. These are handled at closing — paid from proceeds. They don\'t prevent the sale.',
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
              If the property was titled solely in the deceased&apos;s name, it goes through probate at the
              Lehigh County Register of Wills. Here&apos;s what that typically looks like:
            </p>
            <div className="space-y-3">
              {[
                { step: '1', label: 'File for probate at Lehigh County Register of Wills', detail: '455 W Hamilton St, Allentown PA 18101 (Lehigh County Courthouse). The executor (personal representative) named in the will files for Letters Testamentary.' },
                { step: '2', label: 'Letters Testamentary are issued', detail: 'Once issued, the executor has legal authority to manage and sell estate assets. This often happens within days to a couple of weeks.' },
                { step: '3', label: 'Executor signs the purchase agreement', detail: 'With Letters Testamentary in hand, the executor can sign a real estate contract. The estate sells the property, not the individual heirs.' },
                { step: '4', label: 'Close with a title company', detail: 'Closing is handled by a PA title company. Proceeds go to the estate account for distribution to heirs according to the will or PA intestate law.' },
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
