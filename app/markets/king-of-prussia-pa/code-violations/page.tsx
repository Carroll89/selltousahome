import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { VideoEmbed } from '@/components/VideoEmbed';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, kingOfPrussiaLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Code Violations Sale King of Prussia PA',
  description:
    'Code violations in King of Prussia or Upper Merion Township? We buy as-is regardless of code issues. Cash offer in 24 hours, close in 7-14 days.',
  alternates: { canonical: `${SITE_URL}/markets/king-of-prussia-pa/code-violations` },
  openGraph: { images: [{ url: '/images/king-of-prussia-hero.jpg', width: 1200, height: 630, alt: 'Sell a Home with Code Violations in King of Prussia PA' }] },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a house with code violations in King of Prussia PA?',
    answer:
      "Yes. Pennsylvania law doesn't prohibit selling a property with open code violations — the violations must be disclosed to the buyer, but the sale can proceed. Cash buyers like USA Home Buyers buy as-is, knowing violations exist. Retail buyers using traditional financing often cannot purchase a home with significant code violations because the lender requires the property to meet minimum habitability standards.",
  },
  {
    question: 'Who enforces code violations in King of Prussia?',
    answer:
      "King of Prussia is an unincorporated community within Upper Merion Township. Code enforcement is handled by the Upper Merion Township Building and Code Enforcement department. Complaints and violations are processed through Township offices. You can contact Upper Merion Township directly at 175 West Valley Forge Road, King of Prussia PA 19406, or at the township website (uppermerion.com) for information on open violations.",
  },
  {
    question: 'What kinds of code violations can you buy with?',
    answer:
      "We buy properties with virtually any code violation — structural issues (foundation cracks, load-bearing wall problems), electrical (outdated panels, ungrounded circuits), plumbing (failing septic, aged pipes), HVAC (failed systems), exterior violations (deferred maintenance, siding, roofing), zoning non-conformities, unpermitted additions, and health/safety violations. If Upper Merion Township issued the violation, we can work with it.",
  },
  {
    question: 'Do code violations need to be cleared before closing?',
    answer:
      "No — not when selling to a cash buyer. We purchase properties with open violations and assume responsibility for resolving them after closing. This is one of the key advantages of selling as-is. In a traditional sale, the buyer would likely require violations to be cured before closing, pushing the cost and effort back to you.",
  },
  {
    question: 'Can I sell if the property has been condemned or declared uninhabitable?',
    answer:
      "Yes. A condemned status means the property has been determined unfit for occupancy — it doesn't mean it can't be sold. Cash buyers specifically seek condemned and uninhabitable properties that require significant renovation. We buy in any condition, regardless of habitability status. The sale price reflects the condition, but you can sell and move forward.",
  },
];

const pageUrl = `${SITE_URL}/markets/king-of-prussia-pa/code-violations`;

export default function KopCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        kingOfPrussiaLocalBusinessSchema,
        articleSchema('Selling a Home with Code Violations in King of Prussia, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/king-of-prussia-hero.jpg"
          alt="King of Prussia PA — sell house with code violations"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/king-of-prussia-pa" className="hover:text-white">King of Prussia</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a King of Prussia Home with Code Violations
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Upper Merion Township code violations — structural, electrical, plumbing, exterior — don&apos;t
              have to stop your sale. We buy properties as-is with open violations and handle remediation
              after closing. Cash offer in 24 hours, close in 7–14 days.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We Buy As-Is, Violations and All
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/king-of-prussia-pa" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/kop/kop-code-violations.mp4"
        title="Selling a Home with Code Violations in King of Prussia"
        poster="/images/video-posters/kop-code-violations.jpg"
        subtitle="As-is cash sale — violations handled after closing"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If your King of Prussia or Montgomery County property has open code violations, you&apos;re in a situation where most traditional buyers can&apos;t help you. I&apos;m with USA Home Buyers, and code violation properties are something we buy regularly.</p>
            <p className="mb-3">Montgomery County has active code enforcement. Violations — whether from unpermitted additions, structural deficiencies, health and safety citations, or deferred maintenance — make it nearly impossible to sell to a buyer using conventional financing.</p>
            <p className="mb-3">We don&apos;t use financing. We pay cash. There&apos;s no appraiser, no lender underwriting, no appraisal contingency. We buy the property in its current condition — violations, citations, and all.</p>
            <p className="mb-3">How do violations get resolved at closing? They&apos;re treated like any other lien or encumbrance. The title search identifies all outstanding fines and municipal liens. At closing, those get paid from your proceeds before the remainder goes to you.</p>
            <p className="mb-3">We&apos;ve bought Montgomery County properties with multiple open violations, properties cited for structural issues, properties with unpermitted construction, and properties where code enforcement had been active for years.</p>
            <p className="mb-3">Call USA Home Buyers at 888-440-5250. We&apos;ll make a written cash offer within 24 hours and explain exactly how the violation resolution works at closing.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Why Code Violations Block Traditional Sales (But Not Cash Sales)</h2>
            <p className="text-gray-700 text-sm">
              When a buyer finances a home with a conventional mortgage or FHA loan, the lender requires
              the property to meet minimum standards. Code violations — especially structural, electrical,
              or health-related — will fail a lender&apos;s appraisal inspection and kill the deal unless cured
              first. Cash buyers don&apos;t use lenders. There&apos;s no appraisal requirement. We evaluate the property
              in its current state and make an offer that reflects the condition.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Code Violations We Regularly Buy With in Upper Merion Township
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Structural violations', detail: 'Foundation issues, load-bearing wall problems, sagging floors, failing roofs' },
                { label: 'Electrical violations', detail: 'Outdated panels, ungrounded circuits, non-compliant wiring, unpermitted electrical work' },
                { label: 'Plumbing violations', detail: 'Failing pipes, aged systems, sewer line issues, non-compliant fixtures' },
                { label: 'HVAC violations', detail: 'Failed or absent systems, non-compliant installations, ventilation issues' },
                { label: 'Exterior / maintenance violations', detail: 'Failing siding, deferred exterior maintenance, roof condition, overgrown property' },
                { label: 'Unpermitted additions', detail: 'Additions or renovations done without Upper Merion Township permits' },
                { label: 'Zoning violations', detail: 'Non-conforming uses or structures that violate Upper Merion zoning ordinance' },
                { label: 'Condemned or uninhabitable', detail: 'Property declared uninhabitable by the township — we still buy it' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Upper Merion Township Code Enforcement — What to Know
            </h2>
            <p className="text-gray-700 mb-4 text-sm">
              King of Prussia is within Upper Merion Township, which manages building and code enforcement
              for the area. Open violations appear on township records and must be disclosed in any sale.
              When you sell to us, we receive a full disclosure of all known violations and purchase with
              that knowledge — no renegotiation after the walkthrough.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 text-sm">
              <p className="font-semibold text-brand-dark mb-2">Upper Merion Township Contact</p>
              <div className="space-y-1 text-gray-700 text-xs">
                <p>175 West Valley Forge Road, King of Prussia PA 19406</p>
                <p>
                  Township website:{' '}
                  <a href="https://www.uppermerion.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    uppermerion.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — Code Violations and All"
            subheadline="No need to cure violations before selling. We handle it after closing."
            sourcePage="/markets/king-of-prussia-pa"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Code Violations in King of Prussia" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Code Violation Resources — Montgomery County</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">HUD — Minimum Property Standards</p>
                <p className="text-gray-600">
                  <a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">hud.gov</a>{' '}
                  — Federal guidelines on housing habitability standards, including violations that affect financing eligibility.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Montgomery County Board of Assessment Appeals</p>
                <p className="text-gray-600">
                  <a href="https://www.montcopa.org/368/Board-of-Assessment-Appeals" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">montcopa.org</a>{' '}
                  — Assessment and property records for Upper Merion Township and all of Montgomery County.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">
                Sell As-Is Guide
              </Link>{' '}
              ·{' '}
              <Link href="/markets/king-of-prussia-pa/fire-damage" className="text-brand-primary hover:underline">
                Fire-Damaged Homes
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
