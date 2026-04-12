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
  title: 'Probate Property Sale — Harrisburg PA',
  description:
    'Need to sell a house in probate in Harrisburg or Dauphin County PA? We buy probate properties as-is, work around estate timelines, and close in 7-14 days.',
  alternates: { canonical: `${SITE_URL}/markets/harrisburg-pa/probate` },
};

const FAQ_ITEMS = [
  {
    question: 'Where is probate filed in Harrisburg, PA?',
    answer:
      'Probate for Harrisburg-area estates is filed at the Dauphin County Register of Wills, located at the Dauphin County Courthouse, 101 Market Street, Harrisburg PA 17101. The Register of Wills issues Letters Testamentary (if there is a will) or Letters of Administration (if there is no will), which give the personal representative authority to manage estate assets including real property.',
  },
  {
    question: 'How long does probate take in Dauphin County?',
    answer:
      'Simple estates in Dauphin County can move through probate in a few weeks to a few months. More complex situations — multiple heirs, contested wills, property with complications — can take 6-12 months or longer. The sale of real property doesn\'t have to wait until the entire estate is settled; it can often occur once the personal representative has Letters Testamentary.',
  },
  {
    question: 'Can I sell the house before probate is finished?',
    answer:
      'Yes. Once the Dauphin County Register of Wills issues Letters Testamentary or Letters of Administration, the personal representative has authority to sell estate real property. Closing can occur while other aspects of the estate are still being administered.',
  },
  {
    question: 'Who has to sign the deed in a probate sale?',
    answer:
      'The personal representative (executor or administrator) signs the deed, not the individual heirs. The deed typically references the estate and the Letters Testamentary. A PA title company experienced with estate sales will prepare the correct documentation.',
  },
  {
    question: 'What happens to the sale proceeds in a probate sale?',
    answer:
      'Proceeds go to the estate account, not directly to heirs. The personal representative uses the estate funds to pay estate debts, taxes, and expenses. The remaining balance is distributed to beneficiaries according to the will or PA intestate succession law.',
  },
];

const pageUrl = `${SITE_URL}/markets/harrisburg-pa/probate`;

export default function HarrisburgProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        harrisburgLocalBusinessSchema,
        articleSchema('Selling a Probate Property in Harrisburg, PA', pageUrl),
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
              <Link href="/markets/harrisburg-pa" className="hover:text-white">Harrisburg</Link> › Probate Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Probate Property in Harrisburg, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You&apos;re the executor or administrator of an estate with real property in Harrisburg or Dauphin County.
              We buy probate properties as-is and work around estate timelines. No repairs, no cleanout.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk Through the Estate Situation
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/harrisburg-pa/probate" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0fd/U7h8UzeQ4x2PjBwIKRqyc_harrisburg-probate.mp4"
        title="Selling a Probate Property in Harrisburg"
        poster="/images/video-posters/harrisburg-probate-poster.jpg"
        subtitle="See how we help Harrisburg families sell probate properties for cash, fast"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you&apos;re an executor or administrator handling an estate with property in Harrisburg, this video is for you. Probate real estate sales have their own rules, and I want to make sure you understand them.</p>
            <p className="mb-3">First, where does probate happen in Harrisburg? The Dauphin County Register of Wills, located at the county courthouse on Market Street. That&apos;s where Letters Testamentary or Letters of Administration get issued — and once you have those, you have the legal authority to sell the estate&apos;s real property.</p>
            <p className="mb-3">Here&apos;s something that surprises a lot of executors: you don&apos;t have to wait until the entire estate is closed to sell the house. Once you have your Letters, you can move on the property. Simple estates in Dauphin County can move through the opening process in a few weeks.</p>
            <p className="mb-3">We buy probate properties in Harrisburg and Dauphin County as-is. No repairs, no cleanout. We work around your timeline. If you need to close fast, we can do it in 7 to 14 days. If the estate needs more time, we can accommodate that too.</p>
            <p className="mb-3">The executor signs the deed — not individual heirs — and the proceeds go into the estate account for distribution. A title company experienced with estate sales handles all the paperwork.</p>
            <p className="mb-3">If you&apos;re the personal representative of a Harrisburg estate and need to sell the home, call USA Home Buyers at 888-440-5250. We&apos;ll walk you through the process and get you a written cash offer within 24 hours.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">For Executors and Personal Representatives</h2>
            <p className="text-gray-700 text-sm">
              Once the Dauphin County Register of Wills issues your Letters Testamentary, you have authority
              to sell estate real property. You don&apos;t need to wait for the rest of probate to close.
              A cash sale is often the cleanest path — fast, certain, no repair negotiations,
              and the property stops accumulating carrying costs from the estate.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              How a Probate Sale Works in Dauphin County
            </h2>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  title: 'File at Dauphin County Register of Wills',
                  detail: 'Located at the Courthouse, 101 Market Street, Harrisburg. The executor named in the will files for Letters Testamentary. If no will, an administrator files for Letters of Administration.',
                },
                {
                  step: '2',
                  title: 'Letters Testamentary are issued',
                  detail: 'Once issued, you have legal authority to manage and sell estate property. This is typically the key milestone before a sale can proceed.',
                },
                {
                  step: '3',
                  title: 'Enter a purchase agreement as executor',
                  detail: 'You sign the contract in your capacity as personal representative of the estate. The contract references the estate name and your authority.',
                },
                {
                  step: '4',
                  title: 'Title company handles closing',
                  detail: 'An experienced PA title company prepares the deed, closing documents, and verifies the estate has authority to sell. We work with title companies in Harrisburg who handle probate sales routinely.',
                },
                {
                  step: '5',
                  title: 'Proceeds go to the estate',
                  detail: 'Funds go to the estate account. You distribute to beneficiaries according to the will or PA law after paying estate debts and expenses.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Cash Buyers Work Well for Probate Sales</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'No financing contingency',
                  desc: 'Cash buyers don\'t need mortgage approval. The sale won\'t fall through because of a financing issue — a common failure point in traditional estate sales.',
                },
                {
                  title: 'No repair negotiations',
                  desc: 'Probate properties often have deferred maintenance. A cash buyer prices that in upfront. No back-and-forth over inspection findings after you\'re already under contract.',
                },
                {
                  title: 'Faster than the MLS',
                  desc: 'The estate stops accumulating carrying costs as soon as you close. A cash sale can close in 7-14 days vs. 90+ days for a traditional sale.',
                },
                {
                  title: 'No cleanout required',
                  desc: 'Decades of belongings? Family disputes over furniture? You take what matters and leave the rest. We handle the cleanout.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Probate Property"
            subheadline="We work around estate timelines. No repairs, no cleanup required."
            sourcePage="/markets/harrisburg-pa/probate"
          />

          <FAQSection items={FAQ_ITEMS} heading="Dauphin County Probate Sales — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Dauphin County Resources</h2>
            <div className="border border-gray-200 rounded-lg p-4 text-sm">
              <p className="font-semibold text-brand-dark">Dauphin County Register of Wills</p>
              <p className="text-gray-600">101 Market Street, Harrisburg PA 17101</p>
              <p className="text-gray-600">Dauphin County Courthouse</p>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/probate" className="text-brand-primary hover:underline">PA Probate Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/inherited-property" className="text-brand-primary hover:underline">Harrisburg Inherited Property</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
