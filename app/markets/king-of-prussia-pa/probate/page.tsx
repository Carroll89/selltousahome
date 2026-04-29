import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, kingOfPrussiaLocalBusinessSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Probate Property King of Prussia PA',
  description:
    'Selling a probate property in King of Prussia PA? We work with executors, handle estate complications, and close in 7-14 days. No repairs, no cleanout.',
  alternates: { canonical: `${SITE_URL}/markets/king-of-prussia-pa/probate` },
  openGraph: { images: [{ url: '/images/king-of-prussia-hero.jpg', width: 1200, height: 630, alt: 'Sell a Probate Property in King of Prussia PA' }] },
};

const FAQ_ITEMS = [
  {
    question: 'What is probate and does my King of Prussia property need to go through it?',
    answer:
      "Probate is the legal process of administering a deceased person's estate. In Pennsylvania, if the property was titled solely in the deceased's name and no non-probate transfer applies, it usually must pass through estate administration before it can be sold. The Montgomery County Register of Wills handles this process. If the property was in a living trust or jointly titled with survivorship rights, it may avoid probate; ask a Pennsylvania estate attorney to confirm the deed and estate facts.",
  },
  {
    question: 'Where do I file for probate for a King of Prussia property?',
    answer:
      'Probate in Montgomery County is filed with the Montgomery County Register of Wills and Clerk of Orphans\' Court, One Montgomery Plaza (4th Floor), 425 Swede Street, Norristown PA 19401. Phone: 610-278-3400. Email: ROWSupport@montgomerycountypa.gov. Hours: Monday–Friday, 8:30 AM to 4:15 PM (no walk-ins after 3:30 PM). An E-Filing portal is available at webapp.montcopa.org/ROWEFiling for eligible filings.',
  },
  {
    question: 'Can I sell a King of Prussia property while probate is still open?',
    answer:
      "Yes. Per Montgomery County Register of Wills resources, once the executor receives Letters Testamentary (or an administrator receives Letters of Administration), they can act for the estate, which may include entering a real estate purchase agreement and selling the property. The estate may not have to be fully settled before real estate is sold, depending on authority and title guidance.",
  },
  {
    question: 'What are Pennsylvania inheritance tax rates for Montgomery County estates?',
    answer:
      "According to the Pennsylvania Department of Revenue, inheritance tax rates include 0% for transfers to a surviving spouse or from a child aged 21 or younger to a parent; 4.5% for direct descendants and lineal heirs; 12% for siblings; and 15% for other heirs, with exceptions for exempt entities. How tax is paid and whether realty transfer tax applies should be confirmed by the estate attorney or title company. Source: PA Department of Revenue — revenue.pa.gov.",
  },
  {
    question: 'How long does probate take in Montgomery County, PA?',
    answer:
      'Probate timing varies by estate complexity, county processing, beneficiary issues, and tax questions. Selling the real property can happen before the estate fully closes, once the executor has authority to sell.',
  },
];

const pageUrl = `${SITE_URL}/markets/king-of-prussia-pa/probate`;

export default function KopProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        kingOfPrussiaLocalBusinessSchema,
        articleSchema('Selling a Probate Property in King of Prussia, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({
          name: 'Selling a Probate Property in Montgomery County PA',
          description: 'We work with executors and the Register of Wills process',
          contentUrl: 'https://v3b.fal.media/files/b/0a95df1c/KQo_XFArGldrHQEJk2zmF_tmpvn8hov_u.mp4',
          thumbnailUrl: `${SITE_URL}/images/video-posters/kop-probate.jpg`,
        }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/king-of-prussia-hero.jpg"
          alt="King of Prussia PA — sell probate property for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/king-of-prussia-pa" className="hover:text-white">King of Prussia</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Probate Property in King of Prussia, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              We work with estate executors and attorneys throughout Montgomery County to purchase
              probate properties as-is. No repairs, no cleanout, no lengthy coordination with
              traditional buyers. Written offer in 24 hours, close when you&apos;re ready.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We Work Around Estate Timelines
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/king-of-prussia-pa" />
          </div>
        </div>
      </section>

      {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95df1c/KQo_XFArGldrHQEJk2zmF_tmpvn8hov_u.mp4"
        title="Selling a Probate Property in Montgomery County PA"
        poster="/images/video-posters/kop-probate.jpg"
        subtitle="We work with executors and the Register of Wills process"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you&apos;re the executor of an estate with real property in King of Prussia or Montgomery County, here&apos;s what you need to know. I&apos;m with USA Home Buyers.</p>
            <p className="mb-3">Probate in Montgomery County goes through the Montgomery County Register of Wills, located in Norristown. Once Letters Testamentary or Letters of Administration are issued, the personal representative can act for the estate, which may include selling estate real property. You don&apos;t need to wait for the entire estate to settle.</p>
            <p className="mb-3">Montgomery County estates vary widely in complexity. A straightforward estate may move through the opening process faster than a contested or incomplete filing. Multi-heir situations or contested estates take longer. But the sale of the property itself can often proceed independently.</p>
            <p className="mb-3">We buy probate properties in King of Prussia and throughout Montgomery County as-is. The authorized personal representative signs sale documents on behalf of the estate. Closing proceeds go into the estate account. A title company with estate experience handles all documentation.</p>
            <p className="mb-3">In King of Prussia&apos;s higher-value housing market, estate properties may carry meaningful equity. A clean sale can help the estate move toward distribution once legal and tax obligations are handled.</p>
            <p className="mb-3">Call USA Home Buyers at 888-274-5006. Written cash offer in 24 hours. We work with executors and estate attorneys and understand the Montgomery County probate process.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer for Executors</h2>
            <p className="text-gray-700 text-sm">
              Once you have Letters Testamentary from the Montgomery County Register of Wills, you have the
              authority to enter a real estate purchase contract. You don&apos;t need to wait for the entire estate
              to settle. We can sign a purchase agreement now and close as soon as you&apos;re ready — or hold
              to a specific date that works for the estate timeline. No repairs, no cleanout required.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Montgomery County Probate — How It Works for Real Estate
            </h2>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  label: 'File for probate at the Montgomery County Register of Wills',
                  detail: 'One Montgomery Plaza (4th Floor), 425 Swede Street, Norristown PA 19401. Phone: 610-278-3400. File the original will and pay applicable filing fees. E-Filing available at webapp.montcopa.org/ROWEFiling for eligible documents.',
                },
                {
                  step: '2',
                  label: 'Receive Letters Testamentary or Letters of Administration',
                  detail: 'These documents authorize the executor (or administrator if no will) to act on behalf of the estate — including selling real property. Timing varies by completeness of the filing, estate complexity, and county processing.',
                },
                {
                  step: '3',
                  label: 'Executor signs the purchase agreement',
                  detail: 'With Letters Testamentary in hand, the executor signs the real estate contract on behalf of the estate. We work with your estate attorney to ensure the documentation is correct.',
                },
                {
                  step: '4',
                  label: 'Close with a PA title company — proceeds to estate account',
                  detail: 'Closing is handled by a licensed Pennsylvania title company. Proceeds go to the estate account for distribution to heirs after PA inheritance tax obligations and other estate debts are settled.',
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
            <div className="mt-4 text-xs text-gray-500">
              <strong>Sources:</strong>{' '}
              <a
                href="https://www.montgomerycountypa.gov/202/Register-of-Wills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Montgomery County Register of Wills — montgomerycountypa.gov/202/Register-of-Wills
              </a>{' '}·{' '}
              <a
                href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/inheritance-tax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                PA Inheritance Tax — Revenue.PA.gov
              </a>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Estate Property"
            subheadline="No cleanup, no repairs. We work with your estate attorney and timeline."
            sourcePage="/markets/king-of-prussia-pa"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Probate Real Estate in Montgomery County" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/king-of-prussia-pa/inherited-property" className="text-brand-primary hover:underline">
                Inherited Property in King of Prussia
              </Link>{' '}
              ·{' '}
              <Link href="/guides/probate" className="text-brand-primary hover:underline">
                PA Probate Guide
              </Link>{' '}
              ·{' '}
              <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">
                Sell Your King of Prussia House
              </Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
