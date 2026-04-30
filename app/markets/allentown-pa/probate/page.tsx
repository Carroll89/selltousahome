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
  title: 'Probate Property Sale — Allentown PA',
  description:
    'Need to sell a house in probate in Allentown or Lehigh County PA? We buy probate properties as-is, work around estate timelines, and can close quickly once title and estate authority are ready. Bilingual service available.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/probate` },
};

const FAQ_ITEMS = [
  {
    question: 'Where is probate filed in Allentown, PA?',
    answer:
      'According to Lehigh County, the Register of Wills is at the Lehigh County Courthouse, Room 122, 455 W Hamilton St, Allentown PA 18101, and its responsibilities include the probate of estates. Pennsylvania Title 20 § 3155 explains that letters testamentary or letters of administration are granted by the register to the appropriate executor or administrator.',
  },
  {
    question: 'How long does probate take in Lehigh County?',
    answer:
      'Timing varies by filings, estate complexity, heirs, debts, and court or Register of Wills requirements. Lehigh County notes that estate administration can be complex and suggests contacting an attorney for assistance. A real-property sale can often be evaluated once the personal representative has letters and the title company confirms authority.',
  },
  {
    question: 'Can I sell the house before probate is finished?',
    answer:
      'Often, yes. Per Pennsylvania Title 20 § 3155, the register grants letters to the appropriate executor or administrator. Once those letters and title requirements are confirmed, a sale may be able to close while other estate administration tasks continue.',
  },
  {
    question: 'Who has to sign the deed in a probate sale?',
    answer:
      'Usually the personal representative signs in the capacity shown in the estate documents, but the exact deed signature depends on title, the will, letters, and title company requirements. The Lehigh County Register of Wills handles estate filings; a Pennsylvania title company or estate attorney should prepare the deed correctly.',
  },
  {
    question: 'What happens to the sale proceeds in a probate sale?',
    answer:
      'In a typical estate sale, proceeds are paid to the estate or as directed by the closing documents. The personal representative then handles debts, expenses, taxes, and distributions under the will, Pennsylvania law, and any court or title requirements.',
  },
  {
    question: 'Can you help if the heirs speak Spanish?',
    answer:
      'Yes. We offer bilingual service for Allentown families who prefer to discuss probate-sale options in Spanish. We can explain the offer, title steps, and closing timeline clearly from the first call through closing.',
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
        videoObjectSchema({
          name: 'Selling a Probate Property in Allentown',
          description:
            'USA Home Buyers explains how executors and personal representatives can sell Allentown probate properties as-is once estate authority is in place.',
          contentUrl: 'https://v3b.fal.media/files/b/0a95c0f9/sGkI0ze2QQXFYH2nOxhSa_allentown-probate.mp4',
          thumbnailUrl: `${SITE_URL}/images/video-posters/allentown-probate-poster.jpg`,
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
      {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0f9/sGkI0ze2QQXFYH2nOxhSa_allentown-probate.mp4"
        title="Selling a Probate Property in Allentown"
        poster="/images/video-posters/allentown-probate-poster.jpg"
        subtitle="See how we help Allentown families sell probate properties for cash, fast"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you&apos;re the executor or personal representative of an estate with property in Allentown or Lehigh County, here&apos;s what you need to know about selling it. I&apos;m with USA Home Buyers.</p>
            <p className="mb-3">Probate in Allentown is handled through the Lehigh County Register of Wills. Pennsylvania Title 20 § 3155 explains that letters testamentary or letters of administration are granted by the register to the appropriate executor or administrator. Once those letters and title requirements are confirmed, the property sale may be able to move forward before every estate task is finished.</p>
            <p className="mb-3">Lehigh County notes that estate administration can be complex and suggests contacting an attorney for assistance. Timing depends on the filings, heirs, debts, and estate facts.</p>
            <p className="mb-3">We buy probate properties in Allentown and throughout Lehigh and Northampton County as-is. The personal representative signs according to the estate documents and title company requirements. The title company prepares estate-specific closing documentation.</p>
            <p className="mb-3">No repairs. No cleanout. No open houses. We can close quickly once title and estate authority are ready. The estate can move forward without a property sitting on the Allentown MLS for months.</p>
            <p className="mb-3">Call USA Home Buyers at 888-274-5006. We&apos;ll give you a written cash offer within 24 hours and walk you through exactly how a probate sale works in Lehigh County.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">For Executors and Personal Representatives</h2>
            <p className="text-gray-700 text-sm">
              According to Lehigh County, the Register of Wills probates estates; under Pennsylvania Title 20 § 3155,
              letters are granted to the appropriate executor or administrator. Once your letters and title authority
              are confirmed, you may be able to sell estate real property before every other estate task is finished.
              A cash sale can reduce repair negotiations and carrying costs when the estate is ready to sell.
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
                  detail: 'Located at the Lehigh County Courthouse, Room 122, 455 W Hamilton St, Allentown PA 18101. The register probates estates and provides estate-administration forms.',
                },
                {
                  step: '2',
                  title: 'Letters Testamentary are issued',
                  detail: 'Per Pennsylvania Title 20 § 3155, letters are granted to the appropriate executor or administrator. Title then confirms whether that authority is sufficient for the deed.',
                },
                {
                  step: '3',
                  title: 'Enter a purchase agreement as executor',
                  detail: 'You generally sign in the capacity shown by the estate documents, subject to title company and attorney review.',
                },
                {
                  step: '4',
                  title: 'Title company handles closing',
                  detail: 'An experienced PA title company prepares the deed, closing documents, and verifies that the estate documents support the sale. We work with title companies in the Lehigh Valley who handle probate sales routinely.',
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
                  desc: 'The estate stops accumulating carrying costs as soon as you close. A cash sale can move quickly when letters, title, payoff, and estate authority are already in place.',
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

          <BlogClusterLinks marketSlug="allentown-pa" cityName="Allentown" />

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
