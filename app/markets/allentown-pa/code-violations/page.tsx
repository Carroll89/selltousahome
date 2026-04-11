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
  title: 'Sell House with Code Violations in Allentown PA | Cash Offer',
  description:
    'Selling a house with code violations in Allentown PA? We buy properties with open violations, liens, and city citations as-is. Cash offer in 24 hours, close in 7-14 days.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/code-violations` },
};

const FAQ_ITEMS = [
  {
    question: 'Can you sell a house with code violations in Allentown?',
    answer:
      'Yes. There is no law in Pennsylvania that prevents you from selling a property with open code violations. The violations are disclosed and typically either paid off at closing or transferred to the buyer. Cash buyers like us buy properties with violations as-is — we price the cost of remediation into our offer.',
  },
  {
    question: 'What are common code violations in Allentown, PA?',
    answer:
      'Allentown\'s older housing stock — much of it Bethlehem Steel-era row homes — commonly generates violations for: failing roof systems, deteriorating facades, broken or boarded windows, electrical panel issues (especially older fuse boxes), plumbing failures, exterior maintenance requirements, and vacant property registration non-compliance. The City of Allentown Bureau of Housing Inspection actively enforces these.',
  },
  {
    question: 'Will code violations prevent my house from being sold?',
    answer:
      'Code violations can prevent a conventional mortgage buyer from purchasing your property — lenders often require violations to be cleared before approving financing. However, a cash buyer purchases without a mortgage, so financing contingencies don\'t apply. We can close on a property with open violations.',
  },
  {
    question: 'Do code violations become liens on the property?',
    answer:
      'In Allentown, unresolved code violations can result in municipal liens being placed on the property. These liens must be addressed at or before closing — either paid from proceeds or negotiated as part of the sale. We can work with the city on lien resolution as part of the closing process.',
  },
  {
    question: 'What is Allentown\'s vacant property ordinance?',
    answer:
      'Allentown requires vacant properties to be registered with the city and maintained to specific standards. Failure to register or maintain a vacant property generates fines and potential liens. If your property is vacant and unregistered, we can still buy it — the registration and any outstanding fines are handled at or after closing.',
  },
  {
    question: 'Do I have to fix the violations before selling to you?',
    answer:
      'No. We buy properties in as-is condition with open violations. You don\'t repair anything. Our offer reflects the cost of bringing the property into compliance, but you don\'t spend a dollar on repairs before closing.',
  },
];

const pageUrl = `${SITE_URL}/markets/allentown-pa/code-violations`;

export default function AllentownCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        allentownLocalBusinessSchema,
        articleSchema('Selling a House with Code Violations in Allentown, PA', pageUrl),
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
              <Link href="/markets/allentown-pa" className="hover:text-white">Allentown</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a House with Code Violations in Allentown, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Open code violations don&apos;t have to stop your sale. We buy properties in Allentown and Lehigh County
              with city citations, municipal liens, and unresolved violations — in any condition, as-is.
              <strong className="block mt-2 text-white">Hablamos español.</strong>
            </p>
            <div className="bg-yellow-900/50 border border-yellow-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-yellow-200 mb-1">Violations escalating?</p>
              <p className="text-yellow-100">
                Daily fines accumulate fast. Call <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a>{' '}
                — we can often close before additional penalties pile up.
              </p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/allentown-pa/code-violations" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0f7/HYZLhBnB0wizPc_TfbeNT_allentown-code-violations.mp4"
        title="Selling a Home with Code Violations in Allentown"
        poster="/images/video-posters/allentown-code-violations.jpg"
        subtitle="Learn about selling your code violation property in Allentown"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If your Allentown property has code violations — city citations, failed inspections, unpermitted additions, structural deficiencies — you&apos;ve got a real problem selling it the traditional way. I&apos;m with USA Home Buyers, and this is exactly what we buy.</p>
            <p className="mb-3">Allentown&apos;s Bureau of Housing Inspection and Neighborhood Services is active in enforcing code compliance. If you&apos;ve got open violations, accumulating fines, or a property that would fail inspection, conventional buyers using financing can&apos;t close on it. That takes out 80 to 90 percent of your potential buyer pool.</p>
            <p className="mb-3">We pay cash. No lender review, no appraiser flagging structural issues, no financing contingency that collapses when the buyer&apos;s bank finds out about the violations. We buy the property in its current condition.</p>
            <p className="mb-3">How do violations get handled at closing? The title search identifies all outstanding municipal liens and fines. They get paid directly from your closing proceeds — in most cases, you don&apos;t need to come up with that money upfront.</p>
            <p className="mb-3">We&apos;ve bought Allentown properties with multiple outstanding violations, properties that failed city inspection, properties with unpermitted work, and properties where violations had been accumulating for years.</p>
            <p className="mb-3">If you have a code violation property in Allentown or anywhere in Lehigh County, call USA Home Buyers at 888-440-5250. Written cash offer within 24 hours.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Why Code Violations Are Common in Allentown</h2>
            <p className="text-gray-700 text-sm">
              Allentown&apos;s housing stock includes many Bethlehem Steel-era row homes and older structures built
              before modern building codes. With 58% of residents renting, many properties have experienced
              deferred maintenance over decades. The City of Allentown Bureau of Housing Inspection actively
              enforces exterior and structural standards — meaning violations can accumulate on properties that
              haven&apos;t had recent investment. This doesn&apos;t make the property unsellable. It just means you need
              a buyer who doesn&apos;t require conventional financing.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Allentown Code Violations We Buy Through</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Roofing and structural violations',
                  desc: 'Failed roof systems, structural deterioration, sagging floors, foundation issues. Common in older Lehigh Valley row homes. We buy these as-is.',
                },
                {
                  title: 'Exterior maintenance citations',
                  desc: 'Peeling paint, deteriorating facades, broken or boarded windows, overgrown lots. Allentown actively enforces exterior appearance standards.',
                },
                {
                  title: 'Electrical and mechanical systems',
                  desc: 'Outdated fuse boxes, non-compliant wiring, failing HVAC systems. These can block conventional financing but don\'t stop a cash sale.',
                },
                {
                  title: 'Vacant property violations',
                  desc: 'Failure to register a vacant property with Allentown, non-compliance with vacant property maintenance standards, security violations.',
                },
                {
                  title: 'Plumbing and sanitation',
                  desc: 'Failed plumbing systems, sewage backup issues, non-functioning bathrooms. We buy properties with active plumbing violations.',
                },
                {
                  title: 'Municipal liens',
                  desc: 'When violations go unresolved, Allentown can place liens on the property. These are typically resolved at closing from sale proceeds.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How a Cash Sale Works When There Are Violations</h2>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  title: 'We assess the property and violations',
                  detail: 'We review available city records and do a walkthrough. We get a sense of the violation scope and what remediation will cost.',
                },
                {
                  step: '2',
                  title: 'We make a written offer',
                  detail: 'Our offer reflects the as-is value after factoring in violation remediation costs. No financing contingency — our offer is firm.',
                },
                {
                  step: '3',
                  title: 'Title search identifies all liens',
                  detail: 'The title company runs a full search including city and municipal liens. Everything surfaces before closing.',
                },
                {
                  step: '4',
                  title: 'Liens are resolved at closing',
                  detail: 'Outstanding municipal liens are typically paid from closing proceeds. The property transfers with clear title.',
                },
                {
                  step: '5',
                  title: 'We handle violations after closing',
                  detail: 'Once we own the property, we handle the remediation and code compliance. That\'s not your problem anymore.',
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">We Know Allentown&apos;s Neighborhoods</h2>
            <p className="text-gray-700 mb-4">
              We buy properties throughout Allentown and Lehigh County — South Side, West End, Center City,
              Old Allentown Historic District, Fountain Hill, Catasauqua, Coplay, and surrounding communities.
              We understand the city&apos;s enforcement patterns, the typical violation types in each neighborhood,
              and what it takes to close despite open citations.
            </p>
            <p className="text-gray-700">
              Priority ZIPs 18102 and 18103 are areas we know well. If your property is in these zip codes,
              call us directly for the fastest assessment.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — Violations and All"
            subheadline="No repairs required. We handle violations after closing. Close in 7-14 days."
            sourcePage="/markets/allentown-pa/code-violations"
          />

          <FAQSection items={FAQ_ITEMS} heading="Allentown Code Violations — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Allentown Code Enforcement Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">City of Allentown — Bureau of Housing Inspection</p>
                <p className="text-gray-600">
                  <a href="https://www.allentownpa.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">allentownpa.gov</a>{' '}
                  — Code violation lookup, permit applications, inspection scheduling
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Lehigh County Tax Claim Bureau</p>
                <p className="text-gray-600">For tax lien status and delinquent tax information — Lehigh County Courthouse, 455 W Hamilton St, Allentown PA 18101</p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Sell Your Allentown House</Link>{' '}
              ·{' '}
              <Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Selling As-Is in PA</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
