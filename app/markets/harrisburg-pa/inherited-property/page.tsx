import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, harrisburgLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Inherited Property in Harrisburg PA',
  description:
    'Inherited a house in Harrisburg or Dauphin County PA? We buy inherited properties as-is, handle estate complications, and close in 7-14 days. No cleanout, no repairs.',
  alternates: { canonical: `${SITE_URL}/markets/harrisburg-pa/inherited-property` },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to complete probate before selling an inherited Harrisburg property?',
    answer:
      'In most cases, yes. If the property was titled solely in the deceased\'s name, it must pass through the estate administration process through the Dauphin County Register of Wills, located at the Dauphin County Courthouse. However, if the property was jointly titled with right of survivorship, it transfers automatically. An experienced PA real estate attorney can clarify your specific situation quickly.',
  },
  {
    question: 'Where do I file for probate in Harrisburg?',
    answer:
      'Probate for estates in Harrisburg is handled by the Dauphin County Register of Wills, located at the Dauphin County Courthouse at 101 Market Street, Harrisburg PA 17101. If the deceased lived in a different county, probate is filed in that county\'s Register of Wills office.',
  },
  {
    question: 'Can I sell before probate is complete?',
    answer:
      'Often yes, with the right coordination. Once Letters Testamentary or Letters of Administration are issued by the Register of Wills, the personal representative (executor) has authority to sign the deed. A cash buyer who is experienced with estate sales can enter a purchase agreement and close once those letters are in hand — without waiting for the entire probate process to conclude.',
  },
  {
    question: 'What if there are multiple heirs who need to agree?',
    answer:
      'All beneficiaries with ownership interest must agree to the sale. If heirs are not in agreement, the personal representative may need to petition the court. In practice, most families reach agreement — especially when the alternative is ongoing carrying costs, maintenance, and taxes on a property no one wants to keep.',
  },
  {
    question: 'Do we have to clean out the house before selling?',
    answer:
      'No. Leave whatever you don\'t want. We purchase properties in as-is condition with all contents. Many inherited properties have decades of belongings — we handle the cleanout after closing. You take what matters to you and leave the rest.',
  },
];

const pageUrl = `${SITE_URL}/markets/harrisburg-pa/inherited-property`;

export default function HarrisburgInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        harrisburgLocalBusinessSchema,
        articleSchema('Selling an Inherited Property in Harrisburg, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

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
              <Link href="/markets/harrisburg-pa" className="hover:text-white">Harrisburg</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Inherited House in Harrisburg, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You inherited a property in Harrisburg or Dauphin County. Whether it&apos;s across town or across
              the country, you don&apos;t have to deal with repairs, cleanouts, or months on the market.
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
            <CashOfferForm variant="hero" sourcePage="/markets/harrisburg-pa/inherited-property" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0fb/gxjjT8T-3zVNFOeDd2o8__harrisburg-inherited.mp4"
        title="Selling an Inherited Property in Harrisburg"
<<<<<<< HEAD
        poster="/images/video-posters/harrisburg-inherited-poster.jpg"
        subtitle="See how we help Harrisburg families sell inherited properties without the hassle"
=======
        poster="/images/video-posters/harrisburg-inherited.jpg"
        subtitle="Learn about selling your inherited property in Harrisburg"
>>>>>>> db652478dd89d7d27200e95ec4d3219806ea3cbb
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Inheriting a house in Harrisburg can feel overwhelming, especially when you don&apos;t live nearby, the property needs work, or there are multiple family members involved. I&apos;m with USA Home Buyers, and we help families in exactly this situation every day.</p>
            <p className="mb-3">What we see a lot: someone passes away, leaves behind a home in Dauphin County, and the heirs are scattered. Nobody wants to deal with repairs, cleaning out decades of belongings, or managing showings from out of town. The thought of going through a traditional listing — finding an agent, fixing things up, waiting 60 or 90 days to close — it&apos;s exhausting on top of already grieving.</p>
            <p className="mb-3">We buy inherited properties as-is. That means you don&apos;t touch a thing. Don&apos;t clean it out, don&apos;t make repairs, don&apos;t even sweep the floor. We&apos;ll handle all of that. We make you a written cash offer within 24 hours of your call, and we can close in as few as seven days.</p>
            <p className="mb-3">If the property is in probate, that&apos;s okay. We work around estate timelines and can coordinate directly with executors and attorneys. The personal representative can sign for the sale once the Dauphin County Register of Wills issues Letters Testamentary.</p>
            <p className="mb-3">We serve all of Harrisburg and Dauphin County. No repairs. No cleanout. No agent fees. Just a fair cash offer and a simple process.</p>
            <p className="mb-3">Call USA Home Buyers at 888-440-5250. We&apos;ll answer your questions and get you an offer fast.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What Most Families Want to Know First</h2>
            <p className="text-gray-700 text-sm">
              You don&apos;t have to clean it out. You don&apos;t have to fix anything. You don&apos;t have to be in Harrisburg
              to close. The biggest questions are usually about probate — and most of those are resolvable faster
              than people expect with the right title company and a clear estate situation.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Harrisburg Inherited Property: Common Situations We Handle
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Out-of-state heirs',
                  desc: 'You live in another state and inherited a Harrisburg property. Managing a traditional sale from a distance — contractors, cleanouts, showings — is a logistical nightmare. We handle the property from here. You can close remotely.',
                },
                {
                  title: 'Multiple heirs',
                  desc: 'You and your siblings, cousins, or other family members inherited the house together. Everyone needs to agree. We\'re experienced with multi-heir situations and can work with your estate attorney to get everyone to the closing table.',
                },
                {
                  title: 'Property needs work',
                  desc: 'The house hasn\'t been updated in decades, or it\'s been vacant for years. Traditional buyers will ask for repairs or discounts. We buy it as-is — foundation issues, outdated systems, water damage, whatever.',
                },
                {
                  title: 'Estate still in probate',
                  desc: 'Probate in Dauphin County isn\'t finished yet, but you want to move forward. We can enter a purchase agreement and close once Letters Testamentary are issued. No need to wait for the full process to conclude.',
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Dauphin County Probate — The Basics</h2>
            <p className="text-gray-700 mb-4">
              If the property was titled solely in the deceased&apos;s name, it goes through probate at the
              Dauphin County Register of Wills. Here&apos;s what that typically looks like:
            </p>
            <div className="space-y-3">
              {[
                { step: '1', label: 'File for probate at Dauphin County Register of Wills', detail: '101 Market Street, Harrisburg PA 17101. The executor (personal representative) named in the will files for Letters Testamentary.' },
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
            sourcePage="/markets/harrisburg-pa/inherited-property"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Property in Dauphin County" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide (PA)</Link>{' '}
              ·{' '}
              <Link href="/guides/probate" className="text-brand-primary hover:underline">PA Probate Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Sell Your Harrisburg House</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
