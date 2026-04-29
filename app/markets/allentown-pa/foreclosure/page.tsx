import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, allentownLocalBusinessSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell Before Foreclosure in Allentown PA | Lehigh County',
  description:
    'Facing foreclosure in Allentown or Lehigh County PA? Sell before the sheriff sale and protect your equity. Cash offer in 24 hours. Fast closing when title and payoff timing allow. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/foreclosure` },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Lehigh County, PA?',
    answer:
      'Pennsylvania foreclosures go through court, and Lehigh County maintains a mortgage foreclosure conciliation program through the Court of Common Pleas. Actual timing varies by lender, court schedule, notices, postponements, and whether a resolution is reached, so treat any timeline estimate as case-specific rather than certain.',
  },
  {
    question: 'Where are Lehigh County sheriff sales held?',
    answer:
      'Per the Lehigh County Sheriff\'s Office, sheriff-sale information and sale lists are published through the county\'s official Sheriff Sale pages. Check the county site and your case notices for the actual sale date, location, and postponement status.',
  },
  {
    question: 'Can I stop a Lehigh County sheriff sale by selling the property?',
    answer:
      'Often, yes, if the closing happens before the sale and the payoff figures are available. The mortgage payoff and any required foreclosure costs are handled through the closing statement. If a sale date is already scheduled, call immediately so the title company can confirm whether there is enough time.',
  },
  {
    question: 'What is the Lehigh County conciliation conference?',
    answer:
      'Lehigh County Court of Common Pleas publishes a Mortgage Foreclosure Conciliation Program and calendar for conciliation conferences. The conference is intended to let borrowers and lenders review possible resolutions, but outcomes and case timing depend on the court, lender, and homeowner\'s facts.',
  },
  {
    question: 'Do I have any equity if I sell before foreclosure?',
    answer:
      'If the sale price is higher than the mortgage payoff, arrears, liens, and closing costs, the remaining proceeds normally go to you at closing. A title company has to confirm the payoff and all recorded liens before anyone can know the exact net amount.',
  },
  {
    question: 'Do you work with Spanish-speaking homeowners in Allentown?',
    answer:
      'Yes. We offer bilingual service for Allentown homeowners who prefer to communicate in Spanish. We can discuss the offer, closing steps, and timing in Spanish so you understand your options clearly. Llámenos hoy.',
  },
];

const pageUrl = `${SITE_URL}/markets/allentown-pa/foreclosure`;

export default function AllentownForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        allentownLocalBusinessSchema,
        articleSchema('Sell Before Foreclosure in Allentown, PA — Lehigh County', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({
          name: 'Selling Before Foreclosure in Allentown',
          description:
            'USA Home Buyers explains how Allentown and Lehigh County homeowners can sell before a sheriff sale, pay off the mortgage at closing, and protect remaining equity.',
          contentUrl: 'https://v3b.fal.media/files/b/0a95c0f8/WDXLw4OFz0AB3MkMFsn3b_allentown-foreclosure.mp4',
          thumbnailUrl: `${SITE_URL}/images/video-posters/allentown-foreclosure-poster.jpg`,
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
              <Link href="/markets/allentown-pa" className="hover:text-white">Allentown</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Facing Foreclosure in Allentown? Sell Before the Lehigh County Sheriff Sale
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Pennsylvania foreclosures go through court, and PHFA says an Act 91 notice can trigger a 33-day
              HEMAP counseling window. If you have equity in your Allentown home, selling before the sheriff sale
              may protect it if payoff figures and timing line up.
              <strong className="block mt-2 text-white">Hablamos español.</strong>
            </p>
            <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-red-200 mb-1">Sheriff sale date scheduled?</p>
              <p className="text-red-100">
                Call immediately at <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a>{' '}
                — we may be able to close before the sale date.
              </p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/allentown-pa/foreclosure" />
          </div>
        </div>
      </section>
      {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0f8/WDXLw4OFz0AB3MkMFsn3b_allentown-foreclosure.mp4"
        title="Selling Before Foreclosure in Allentown"
        poster="/images/video-posters/allentown-foreclosure-poster.jpg"
        subtitle="See how we help Allentown homeowners stop foreclosure and protect their equity"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you&apos;re facing foreclosure in Allentown or anywhere in Lehigh County, I want to give you a clear picture of what&apos;s happening and what your options are. I&apos;m with USA Home Buyers.</p>
            <p className="mb-3">Pennsylvania foreclosures go through court, and Lehigh County Court of Common Pleas publishes a Mortgage Foreclosure Conciliation Program for local cases. Once a sheriff sale date is scheduled, the pressure is intense.</p>
            <p className="mb-3">Here&apos;s the option most people don&apos;t fully understand: sell before the sheriff sale. If you close on a cash sale before the scheduled sheriff sale date, the mortgage and required payoff items can be handled at closing. Whatever equity remains after payoff, liens, and costs is normally yours.</p>
            <p className="mb-3">We move fast because we pay cash — no financing contingency, no lender approval process, no waiting on an appraisal. The title company still has to confirm payoff figures, liens, and sale timing before closing.</p>
            <p className="mb-3">There&apos;s also PHFA&apos;s HEMAP assistance program — if you haven&apos;t applied, you have 33 days from receiving the notice of intention to foreclose to do so.</p>
            <p className="mb-3">The worst thing you can do right now is wait. Call USA Home Buyers at 888-274-5006. We&apos;ll give you a written cash offer within 24 hours and help you understand exactly where you stand.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What You Need to Know Right Now</h2>
            <p className="text-gray-700 text-sm">
              Pennsylvania foreclosures go through court, and Lehigh County Court of Common Pleas publishes
              a Mortgage Foreclosure Conciliation Program for local cases. PHFA also says homeowners who receive
              an Act 91 notice must meet with a participating counselor within 33 days to put the foreclosure process
              on hold through HEMAP. If your home is worth more than you owe, a cash sale before sheriff sale can
              pay off the mortgage and preserve any remaining proceeds after liens and costs.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Lehigh County Foreclosure: What&apos;s Different Here</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Mandatory Conciliation</h3>
                <p className="text-sm text-gray-700">
                  Lehigh County Court of Common Pleas publishes Mortgage Foreclosure Conciliation Program materials
                  and calendars. The conference gives borrowers and lenders a court-supervised setting to review
                  possible resolutions, but the exact effect on timing depends on the case.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Monthly Sheriff Sales</h3>
                <p className="text-sm text-gray-700">
                  Per the Lehigh County Sheriff&apos;s Office, sheriff sale information and sale lists are maintained
                  on the county&apos;s official Sheriff Sale pages. Always verify the active sale date and any postponement
                  directly with the county or your attorney.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Act 91 Notice Required</h3>
                <p className="text-sm text-gray-700">
                  PHFA says that after an Act 91 Notice, a homeowner must meet with a participating counseling agency
                  within 33 days from the notice date to put the foreclosure process on hold while applying for HEMAP.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Right to Cure (Act 6)</h3>
                <p className="text-sm text-gray-700">
                  You may have payoff, reinstatement, HEMAP, sale, or settlement options before the sheriff sale,
                  but the available cure rights and deadlines are case-specific. Confirm the exact amount and deadline
                  with the lender, court notices, or a Pennsylvania foreclosure attorney.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why Selling Before the Sheriff Sale Makes Sense
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'You keep your equity',
                  desc: 'Any amount above your mortgage payoff, liens, and closing costs is normally seller equity. The title company confirms payoff figures before closing; a sheriff sale outcome is harder to control.',
                },
                {
                  title: 'Credit damage is limited',
                  desc: 'Missed payments hurt your credit either way. But a completed foreclosure stays on your report for 7 years and affects housing, employment, and financing for years. A pre-foreclosure sale is far less damaging.',
                },
                {
                  title: 'The process stops',
                  desc: 'Once we close and your mortgage is paid off, the foreclosure case is dismissed. No more court dates. No more certified letters. No more calls from the lender.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">We Know Allentown</h2>
            <p className="text-gray-700 mb-4">
              We buy houses throughout Allentown and Lehigh County — the South Side, West End, Center City,
              the Old Allentown Historic District, Fountain Hill, Catasauqua, and surrounding communities.
              We know the neighborhoods, we know the values, and we know what it takes to close fast in this market.
            </p>
            <p className="text-gray-700 mb-4">
              Allentown&apos;s neighborhoods include many historic row homes and Bethlehem Steel-era properties.
              We buy these in any condition — no repairs, no updates required.
            </p>
            <p className="text-gray-700">
              We provide bilingual service throughout the process for Allentown homeowners who prefer Spanish.
              <strong> Si prefiere comunicarse en español, llámenos al <a href={`tel:${PHONE}`} className="text-brand-primary underline">{PHONE}</a>.</strong>
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer Before Your Sheriff Sale"
            subheadline="Written offer in 24 hours. Fast cash closing when title and payoff timing allow."
            sourcePage="/markets/allentown-pa/foreclosure"
          />

          <FAQSection items={FAQ_ITEMS} heading="Lehigh County Foreclosure — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">PA Foreclosure Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Housing Finance Agency (PHFA) — HEMAP</p>
                <p className="text-gray-600">
                  <a href="https://www.phfa.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">phfa.org</a>{' '}
                  — Emergency mortgage assistance for PA homeowners
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Lehigh County Sheriff&apos;s Office</p>
                <p className="text-gray-600">Lehigh County Courthouse, 455 W Hamilton St, Allentown PA 18101 — for scheduled sheriff sale dates and property listings</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Community Action Committee of the Lehigh Valley (CACLV)</p>
                <p className="text-gray-600">
                  <a href="https://www.caclv.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">caclv.org</a>{' '}
                  — Housing counseling and foreclosure prevention services in the Lehigh Valley
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/foreclosure" className="text-brand-primary hover:underline">PA Foreclosure Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/behind-on-payments" className="text-brand-primary hover:underline">Behind on Payments</Link>{' '}
              ·{' '}
              <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Sell Your Allentown House</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
