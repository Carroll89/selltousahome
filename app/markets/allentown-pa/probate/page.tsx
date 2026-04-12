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
  title: 'Probate Property Sale — Allentown PA',
  description:
    'Need to sell a house in probate in Allentown or Lehigh County PA? We buy probate properties as-is, work around estate timelines, and close in 7-14 days. Bilingual service available.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/probate` },
};

const FAQ_ITEMS = [
  {
    question: 'Where is probate filed in Allentown, PA?',
    answer:
      'Probate for Allentown-area estates is filed at the Lehigh County Register of Wills, located at the Lehigh County Courthouse, 455 W Hamilton St, Allentown PA 18101. The Register of Wills issues Letters Testamentary (if there is a will) or Letters of Administration (if there is no will), which give the personal representative authority to manage estate assets including real property.',
  },
  {
    question: 'How long does probate take in Lehigh County?',
    answer:
      'Simple estates in Lehigh County can move through probate in a few weeks to a few months. More complex situations — multiple heirs, contested wills, property with complications — can take 6-12 months or longer. The sale of real property doesn\'t have to wait until the entire estate is settled; it can often occur once the personal representative has Letters Testamentary.',
  },
  {
    question: 'Can I sell the house before probate is finished?',
    answer:
      'Yes. Once the Lehigh County Register of Wills issues Letters Testamentary or Letters of Administration, the personal representative has authority to sell estate real property. Closing can occur while other aspects of the estate are still being administered.',
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
  {
    question: 'Can you help if the heirs speak Spanish?',
    answer:
      'Yes. Given Allentown\'s large Hispanic community, we regularly work with families where Spanish is the primary language. We can communicate in Spanish throughout the entire process — from the initial discussion through closing. No language barrier should prevent you from understanding your options.',
  },
];

const pageUrl = `${SITE_URL}/markets/allentown-pa/probate`;

export default function AllentownProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        allentownLocalBusinessSchema,
        articleSchema('Selling a Probate Property in Allentown, PA', pageUrl),
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
              <Link href="/markets/allentown-pa" className="hover:text-white">Allentown</Link> › Probate Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Probate Property in Allentown, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You&apos;re the executor or administrator of an estate with real property in Allentown or Lehigh County.
              We buy probate properties as-is and work around estate timelines. No repairs, no cleanout.
              Bilingual service available — <strong className="text-white">Hablamos español.</strong>
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk Through the Estate Situation
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/allentown-pa/probate" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0f9/sGkI0ze2QQXFYH2nOxhSa_allentown-probate.mp4"
        title="Selling a Probate Property in Allentown"
<<<<<<< HEAD
        poster="/images/video-posters/allentown-probate-poster.jpg"
        subtitle="See how we help Allentown families sell probate properties for cash, fast"
=======
        poster="/images/video-posters/allentown-probate.jpg"
        subtitle="Learn about selling your probate property in Allentown"
>>>>>>> db652478dd89d7d27200e95ec4d3219806ea3cbb
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you&apos;re the executor or personal representative of an estate with property in Allentown or Lehigh County, here&apos;s what you need to know about selling it. I&apos;m with USA Home Buyers.</p>
            <p className="mb-3">Probate in Allentown is handled through the Lehigh County Register of Wills. Once Letters Testamentary or Letters of Administration are issued, the personal representative has legal authority to sell estate real property. You don&apos;t have to wait for the entire estate to close.</p>
            <p className="mb-3">Simple estates in Lehigh County can open and get Letters issued in a matter of weeks. More complex situations — contested wills, multiple heirs, outstanding debts — can take longer. But the house can often be sold independently while the estate continues.</p>
            <p className="mb-3">We buy probate properties in Allentown and throughout Lehigh and Northampton County as-is. The executor signs the deed on behalf of the estate. Proceeds go into the estate account for distribution. The title company prepares all estate-specific documentation.</p>
            <p className="mb-3">No repairs. No cleanout. No open houses. We close in 7 to 14 days. The estate can move forward without a property sitting on the Allentown MLS for months.</p>
            <p className="mb-3">Call USA Home Buyers at 888-440-5250. We&apos;ll give you a written cash offer within 24 hours and walk you through exactly how a probate sale works in Lehigh County.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">For Executors and Personal Representatives</h2>
            <p className="text-gray-700 text-sm">
              Once the Lehigh County Register of Wills issues your Letters Testamentary, you have authority
              to sell estate real property. You don&apos;t need to wait for the rest of probate to close.
              A cash sale is often the cleanest path — fast, certain, no repair negotiations,
              and the property stops accumulating carrying costs from the estate.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              How a Probate Sale Works in Lehigh County
            </h2>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  title: 'File at Lehigh County Register of Wills',
                  detail: 'Located at the Lehigh County Courthouse, 455 W Hamilton St, Allentown PA 18101. The executor named in the will files for Letters Testamentary. If no will, an administrator files for Letters of Administration.',
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
                  detail: 'An experienced PA title company prepares the deed, closing documents, and verifies the estate has authority to sell. We work with title companies in the Lehigh Valley who handle probate sales routinely.',
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
                  desc: 'Allentown probate properties often include historic row homes and older Bethlehem Steel-era houses with deferred maintenance. A cash buyer prices that in upfront. No back-and-forth over inspection findings.',
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
            sourcePage="/markets/allentown-pa/probate"
          />

          <FAQSection items={FAQ_ITEMS} heading="Lehigh County Probate Sales — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Lehigh County Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Lehigh County Register of Wills</p>
                <p className="text-gray-600">455 W Hamilton St, Allentown PA 18101</p>
                <p className="text-gray-600">Lehigh County Courthouse</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Lehigh Valley Legal Services</p>
                <p className="text-gray-600">Free or low-cost legal help for qualifying residents in the Lehigh Valley area</p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/probate" className="text-brand-primary hover:underline">PA Probate Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/allentown-pa/inherited-property" className="text-brand-primary hover:underline">Allentown Inherited Property</Link>
              ·{' '}
              <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Sell Your Allentown House</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
