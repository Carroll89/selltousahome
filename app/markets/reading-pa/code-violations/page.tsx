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
  title: 'Code Violations in Reading PA — Sell Your House Fast',
  description:
    'Selling a house with code violations in Reading PA? We buy properties with open city citations and condemned homes as-is. Cash offer in 24 hours. We cover all closing costs.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/code-violations` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a Reading PA house with open code violations?',
    answer:
      'Yes. Cash buyers like USA Home Buyers purchase properties with open code violations, citations, and even condemned properties. We factor the violations into our offer — you don\'t have to fix anything before the sale. Open violations do not prevent a cash sale.',
  },
  {
    question: 'Why are code violations so common in Reading PA?',
    answer:
      'According to Census ACS-style housing-age data, a large share of Reading\'s housing stock predates 1940. These pre-war row homes and brick twins were built under older codes and often have outdated electrical systems, lead paint, plumbing issues, and deteriorating structural elements. The City of Reading has an active code enforcement program, so violations on older stock are common.',
  },
  {
    question: 'What types of code violations does Reading PA enforce?',
    answer:
      'Common Reading code violations include: unsafe electrical systems, inadequate heating, lack of smoke/CO detectors, deteriorated exterior (peeling paint, crumbling brick, broken windows), plumbing deficiencies, evidence of unpermitted work, infestation, and properties deemed unfit for habitation. Reading also enforces rental licensing — an unlicensed rental unit can trigger a series of violations.',
  },
  {
    question: 'Do code violations affect the sale price?',
    answer:
      'We factor violation scope into our offer — the more extensive the violations, the more repair cost we account for. But we do not require them to be resolved before closing. You won\'t have to spend months and cash on remediation before the sale.',
  },
  {
    question: 'Does Reading\'s transfer tax still apply on a code-violation sale?',
    answer:
      'Yes, but we cover it. According to the Berks County Recorder of Deeds fee schedule and the PA Department of Revenue\'s realty transfer tax guidance, Reading transfers include local and state transfer tax. When you sell to USA Home Buyers, we pay all closing costs including the transfer tax.',
  },
  {
    question: 'What if the Reading property is condemned?',
    answer:
      'We buy condemned properties. A condemnation order means the city has determined the property is unsafe for habitation — it doesn\'t prevent a sale. It does mean the property cannot be occupied until violations are remediated, which we handle after purchase.',
  },
];

const pageUrl = `${SITE_URL}/markets/reading-pa/code-violations`;

export default function ReadingCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Selling a House With Code Violations in Reading PA', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({ name: 'Sell Your Reading PA House With Code Violations', description: 'USA Home Buyers buys Reading PA properties with open code violations, citations, and condemned homes as-is — no repairs required.', contentUrl: `${SITE_URL}/videos/reading-pa-code-violations.mp4`, thumbnailUrl: `${SITE_URL}/videos/reading-pa-code-violations-poster.jpg`, uploadDate: '2026-04-12' }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/reading-landmark-hero.jpg"
          alt="Reading PA row home with code violations — sell as-is for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/reading-pa" className="hover:text-white">Reading PA</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Reading PA House With Code Violations — As-Is, Cash Offer
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Code citations, open violations, condemned properties — we buy them. Reading&apos;s pre-war brick row
              homes can generate code violations regularly. You don&apos;t need to fix anything before selling to us.
              Written cash offer in 24 hours. Per Berks County and PA Department of Revenue transfer-tax guidance, we cover the applicable transfer tax and other closing costs.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We Buy As-Is
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/reading-pa/code-violations" />
          </div>
        </div>
      </section>

      {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
      <VideoEmbed
        src="/videos/reading-pa-code-violations.mp4"
        title="Reading PA Code Violations — Sell As-Is"
        poster="/videos/reading-pa-code-violations-poster.jpg"
        subtitle="We buy properties with open citations, no repairs needed"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">Got code violations on your Reading property? Many of Reading&apos;s older row homes run into code issues. Outdated wiring, structural problems, lead paint. We buy properties with open violations, no repairs required.</p>
          <p>You don&apos;t need to fix anything before we close.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• We buy properties with <strong>open code violations</strong> — no remediation required before closing</li>
              <li>• Census ACS-style housing-age data shows much of Reading&apos;s housing stock predates 1940</li>
              <li>• Violation-heavy properties can struggle with FHA or conventional financing — cash buyers are often the realistic path to a sale</li>
              <li>• Per Berks County and PA Department of Revenue transfer-tax guidance, we cover applicable transfer tax and closing costs</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Code Violations in Reading — The Reality</h2>
            <p className="text-gray-700 text-sm">
              Reading has one of the older housing stocks in Pennsylvania. According to Census ACS-style housing-age data,
              many homes were built before 1940, which can mean lead paint, outdated electrical, aging plumbing,
              crumbling brick, and unpermitted work. These properties can struggle with conventional financing,
              which makes cash buyers a practical solution.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations We&apos;ve Bought Around in Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Electrical violations', desc: 'Knob-and-tube wiring, fuse boxes, lack of GFCI, unpermitted electrical work — extremely common in Reading\'s pre-war stock.' },
                { title: 'Lead paint hazards', desc: 'Pre-1978 homes may trigger lead paint notices from the City. Traditional lenders may require abatement. We don\'t.' },
                { title: 'Plumbing deficiencies', desc: 'Cast iron pipes, failing sewer laterals, code-non-compliant fixtures. We account for it in our offer and handle it after closing.' },
                { title: 'Structural / exterior deterioration', desc: 'Crumbling brick, failed mortar, damaged roof, broken windows, deteriorated porch or stoop. These are often the most visible violations in Reading row homes.' },
                { title: 'Unpermitted additions or work', desc: 'Third-floor additions, enclosed porches, basement apartments built without permits are common in Reading and can trigger code enforcement.' },
                { title: 'Rental licensing violations', desc: 'Local rental-license issues can trigger city notices. We buy tenant-occupied properties with licensing issues.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-brand-dark text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Code Violations Kill Traditional Sales in Reading</h2>
            <p className="text-gray-700 mb-4">
              FHA and conventional mortgage lenders require properties to meet minimum habitability standards.
              A property with significant code violations — especially lead paint, structural issues, or unsafe
              electrical — may fail an FHA appraisal or create lender repair conditions that traditional buyers
              cannot clear. That narrows the buyer pool.
            </p>
            <p className="text-gray-700 mb-4">
              Cash buyers don&apos;t have lender requirements. We evaluate the property on its merits and as-is value.
              We then factor remediation costs into our offer, so you avoid bringing the property into compliance
              before you can sell.
            </p>
            <p className="text-gray-700">
              According to the{' '}
              <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">Berks County Recorder of Deeds (berkspa.gov)</a>
              and the{' '}
              <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">PA Department of Revenue (pa.gov)</a>,
              Reading&apos;s 5% transfer tax (4% city + 1% state) applies to all real estate transfers in the city —
              significantly higher than the 2% paid in surrounding Berks County municipalities.
              The total cost of a traditional sale — violations remediation + agent commissions + transfer tax —
              can materially reduce net proceeds. Our cash offer, with zero closing costs to you,
              may be the more rational economic choice.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — Code Violations and All"
            subheadline="Written offer in 24 hours. We buy Reading PA properties with any code violations. We cover all closing costs."
            sourcePage="/markets/reading-pa/code-violations"
          />

          <FAQSection items={FAQ_ITEMS} heading="Reading PA Code Violations — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Provider data: Redfin city March 2026; Zillow Research city ZHVI 2026-03-31</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/blog/sell-house-with-code-violations-pa" className="text-brand-primary hover:underline">Selling a House With Code Violations in PA</Link>{' '}
              ·{' '}
              <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
