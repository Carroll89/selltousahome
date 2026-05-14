/* eslint-disable react/no-unescaped-entities */
/**
 * G1_REWORK_MARKETS_ROUTE: actual /markets route now renders the above-fold form page directly.
 * Prior 2026-05-09 pass patched only legacy /sell-my-house-fast-* aliases; BrowserStack target was /markets/<slug>.
 */
/**
 * Batch 004 Phase 0 — Cincinnati, OH primary market landing page
 * Guardrails active (Vigil audit 2026-05-01):
 *  - Hamilton County conveyance fee $3.00/1,000: PUBLIC_READY (hamiltoncountyauditor.org/transfercalciii/, eff. 3/13/2021)
 *  - Transfer fee $0.50/parcel: PUBLIC_READY (same official source)
 *  - Recording fee $34 first 2 pages / $8 additional: PUBLIC_READY (recordersoffice.hamilton-co.org)
 *  - Hamilton County Recorder main office address: NOT PUBLISHED (NEEDS_OFFICIAL_CONFIRMATION)
 *  - Hamilton County Probate Court room/contact: NOT PUBLISHED (NEEDS_OFFICIAL_CONFIRMATION)
 *  - GEOGRAPHIC HARD FENCE: Cincinnati = City of Cincinnati, Hamilton County, Ohio ONLY
 *    DO NOT apply Ohio law to Covington, Newport, Florence (KY) or Lawrenceburg (IN)
 *    KY/IN content NOT IN SCOPE — separate legal packet required
 *  - Foreclosure timelines: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Seller closing cost percentages: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Neighborhood quality claims: NOT PUBLISHED
 */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { cincinnatiOHLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'We Buy Cincinnati Houses',
  description:
    'Sell your Cincinnati home fast for cash. Victorians, ranches, any condition on any hill. No repairs, no agent fees. Hamilton County Ohio. We handle closing paperwork. Call 888-274-5006.',
  alternates: { canonical: `${SITE_URL}/markets/cincinnati-oh` },
};

const PHONE = '888-274-5006';

const FAQ_ITEMS = [
  {
    question: 'How fast can you close on my Cincinnati home?',
    answer:
      'Typically 14–21 days from accepted offer. No bank approval, no appraisal contingency, no financing holdups. We set the closing date around your schedule.',
  },
  {
    question: 'What are Hamilton County\'s closing costs for sellers?',
    answer:
      "Key Ohio seller costs include Hamilton County's conveyance fee ($3.00 per $1,000 of the sale price — lower than many Ohio counties — plus $0.50 per parcel) and standard deed recording fees ($34 for a standard first two-page deed). We walk through every cost line item before you sign. Source: hamiltoncountyauditor.org/transfercalciii/ (effective 3/13/2021).",
  },
  {
    question: 'Do you buy homes in Cincinnati that need major repairs?',
    answer:
      'Yes — as-is means exactly that. Old boiler systems, foundation concerns, outdated wiring, deferred maintenance. We price honestly based on condition and make a real offer without requiring you to fix anything.',
  },
  {
    question: 'Do you buy on the Kentucky side of Cincinnati too?',
    answer:
      "Our Cincinnati operations focus on Hamilton County and the Ohio side of the metro. Covington, Newport, and the Kentucky side operate under Kentucky law, which is different from Ohio. If you have a property on the Kentucky side, let us know and we'll discuss options.",
  },
  {
    question: 'My Cincinnati home has steep terrain and an unusual lot. Does that affect your offer?',
    answer:
      "Not in a disqualifying way. We buy throughout Cincinnati's hill neighborhoods — from Hyde Park to Price Hill — including steep lots, hillside entries, and non-standard foundations. Condition and location are accounted for in our offer.",
  },
  {
    question: 'I inherited a Cincinnati home. Can you help with an estate property?',
    answer:
      'Yes. We handle inherited properties in Hamilton County regularly. If the estate requires probate in Hamilton County, we coordinate with estate attorneys to clear title before close.',
  },
  {
    question: 'What if my Cincinnati property has back taxes or liens?',
    answer:
      'Ohio requires delinquent property taxes to be resolved before a deed transfer can proceed. We work with title companies to address outstanding taxes and liens at or before closing when possible.',
  },
];

const localBusinessSchema = {
  ...cincinnatiOHLocalBusinessSchema,
  telephone: PHONE,
  url: `${SITE_URL}/markets/cincinnati-oh`,
  // GEOGRAPHIC FENCE: areaServed is scoped to City of Cincinnati + Hamilton County, Ohio ONLY
  // KY/IN side explicitly excluded from schema per Vigil guardrails
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Ohio', item: `${SITE_URL}/sell-house-fast-ohio` },
    { '@type': 'ListItem', position: 3, name: 'Sell My House Fast Cincinnati OH', item: `${SITE_URL}/markets/cincinnati-oh` },
  ],
};

export default function CincinnatiOHPage() {
  return (
    <>
      <SchemaMarkup schema={[
        localBusinessSchema,
        faqSchema(FAQ_ITEMS),
        breadcrumbSchema,
        videoObjectSchema({
          name: 'Sell Your House Fast in Cincinnati, OH',
          description:
            'USA Home Buyers explains how Cincinnati, OH homeowners can sell as-is for cash with no repairs, no cleanup, and no open houses.',
          contentUrl: `${SITE_URL}/videos/cincinnati-oh/landing.mp4`,
          thumbnailUrl: `${SITE_URL}/videos/cincinnati-oh/landing-poster.jpg`,
          uploadDate: '2026-05-12',
        }),
      ]} />

      {/* Hero Section */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden bg-brand-dark">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/cincinnati-oh-representative-hero-640.jpg 640w, /images/optimized/cincinnati-oh-representative-hero-828.jpg 828w, /images/optimized/cincinnati-oh-representative-hero-1080.jpg 1080w, /images/optimized/cincinnati-oh-representative-hero-1200.jpg 1200w"
            sizes="100vw"
          />
          <img
            src="/images/optimized/cincinnati-oh-representative-hero-1200.jpg"
            alt="Representative Cincinnati OH older single-family home — sell your house fast for cash"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Ohio Cash Home Buyers — Hamilton County</p>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
              We Buy Houses in Cincinnati — Cash Offers for Victorian Homes, Ranches, and Everything On the Hills
            </h1>
            {/* MOBILE_FORM_ABOVE_FOLD_FIX: keep form-start before summary block on mobile Template A pages. */}
            <div className="lg:hidden mb-4">
              <CashOfferForm
                variant="hero"
                headline="Get Your Cincinnati Cash Offer"
                subheadline="No repairs. No agent fees. Hamilton County's lower $3.00/1,000 conveyance fee — we handle all the Ohio paperwork."
                sourcePage="/markets/cincinnati-oh"
              />
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases homes throughout Cincinnati and Hamilton County, Ohio — Price Hill,
                Evanston, Bond Hill, Norwood, Oakley, Hyde Park, Avondale, Northside, Mount Washington, Westwood,
                and across all Cincinnati neighborhoods. Cash offer in 24 hours. Close in 14–21 days. No repairs,
                no agent fees. Hamilton County's lower $3.00/1,000 conveyance fee. We handle Ohio paperwork.
                Call {PHONE}.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              Skip the 51-day listing wait. Strong Cincinnati market — real cash offer based on today's Hamilton County
              data.
            </p>
            <ul className="space-y-2 mb-6 text-blue-100 text-sm">
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Skip the 51-day listing wait.</strong> Cincinnati homes averaged 51–52 days on market in March 2026 (Redfin). Our cash process closes in days.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">We buy Cincinnati homes as-is.</strong> Victorian frames, brick Craftsmans, brick ranches — on steep lots or flat streets, any condition.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Strong market, real offer.</strong> Cincinnati's median sale price hit $290,000 in March 2026 — up 9.2% year-over-year (Redfin).</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Lower closing fees than most Ohio markets.</strong> Hamilton County's conveyance fee is $3.00 per $1,000 — lower than the Ohio maximum. We walk you through every cost before you commit.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">We handle Hamilton County closing paperwork.</strong> Ohio requires a DTE 100 Conveyance Fee Statement through the Hamilton County Auditor. We coordinate every step.</span></li>
            </ul>
            <a
              href={`tel:+1${PHONE.replace(/-/g, '')}`}
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call {PHONE} — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="hidden lg:block">
            <CashOfferForm
              variant="hero"
              headline="Get Your Cincinnati Cash Offer"
              subheadline="No repairs. No agent fees. Hamilton County's lower $3.00/1,000 conveyance fee — we handle all the Ohio paperwork."
              sourcePage="/markets/cincinnati-oh"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <VideoEmbed
          src="/videos/cincinnati-oh/landing.mp4"
          title="Sell Your House Fast in Cincinnati, OH"
          poster="/videos/cincinnati-oh/landing-poster.jpg"
          subtitle="A short overview for Cincinnati, OH homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed space-y-3">
            <p>If you need to sell a house in Cincinnati, Ohio, we can make you a simple cash offer and buy the property as is — meaning no repairs, no cleanup, and no open houses.</p>
            <p>This can help if you inherited a house, have tenants you do not want to manage, are behind on payments, have code violations, or just need a clean way to move on.</p>
            <p>We handle houses across Cincinnati and Hamilton County, including older single-family homes, bungalows and capes, and duplexes and small rental properties that need work.</p>
            <p>There are no commissions, no agent showings, and no pressure. If the offer works for you, you choose the closing date.</p>
            <p>Call eight eight eight, two seven four, five zero zero six, and we will walk you through your options.</p>
          </div>
        </details>

        <HowItWorks />

        {/* Market Context */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Cincinnati Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            According to <a href="https://www.redfin.com/city/3879/OH/Cincinnati/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>,
            Cincinnati's median sale price is $290,000 (+9.2% year-over-year), with 51–52 days on market and a Compete
            Score of 57/100. Per-square-foot prices rose 14.2% year-over-year. Hot homes go pending in ~33 days.
          </p>
          <p className="text-gray-700 mb-4">
            Hamilton County's conveyance fee is <strong>$3.00 per $1,000</strong> of the sale price — lower than
            Ohio's maximum rate of $4.00/1,000 and lower than Cuyahoga or Lucas County rates. Plus $0.50 per parcel.
            On a $290,000 home, that is approximately $870.50 in conveyance fees. Source:{' '}
            <a href="https://hamiltoncountyauditor.org/transfercalciii/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">hamiltoncountyauditor.org</a>{' '}
            (effective 3/13/2021).
          </p>
          <p className="text-gray-700 mb-4">
            Hamilton County deed recording starts at <strong>$34 for a standard deed</strong>. We coordinate the
            full recording process with the Hamilton County Recorder. Source:{' '}
            <a href="https://recordersoffice.hamilton-co.org" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">recordersoffice.hamilton-co.org</a>.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio is a <strong>judicial foreclosure state</strong>. If you are in the court process, a cash sale may
            give you more options — but acting earlier gives you more choices. There is no redemption period after a
            confirmed sheriff's sale in Ohio.
          </p>
          <p className="text-gray-700 mb-4">
            Our Cincinnati operations focus on the <strong>Ohio side of the metro — Hamilton County only</strong>.
            Covington and Newport are in Kentucky and operate under different laws. If you have a property on the
            Kentucky side, contact us and we will discuss options.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Cincinnati, OH (Hamilton County)</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$290,000 (+9.2% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$193/sq ft (+14.2% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Avg days on market</td><td className="p-3">51–52 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">57 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Conveyance fee</td><td className="p-3">$3.00 per $1,000 + $0.50 per parcel (lower than Ohio max)</td><td className="p-3 text-gray-500">hamiltoncountyauditor.org (eff. 3/13/2021)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Recording fee</td><td className="p-3">$34 first 2 pages; $8 each additional page</td><td className="p-3 text-gray-500">recordersoffice.hamilton-co.org</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Hamilton County Common Pleas; no right of redemption after confirmed sale</td><td className="p-3 text-gray-500">Ohio law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Geographic scope</td><td className="p-3">City of Cincinnati + Hamilton County, Ohio ONLY (not KY/IN side)</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Hamilton County, Ohio</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Market data: Redfin March 2026. Conveyance and recording fees: official Hamilton County Auditor and Recorder sources. Seller closing cost percentages not published per Vigil audit guardrails.</p>
        </section>

        {/* Trust Signals */}
        <section className="my-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Cincinnati Sellers Choose USA Home Buyers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Hamilton County expertise</h3>
              <p className="text-gray-700 text-sm">
                We buy in Cincinnati and throughout Hamilton County — on the East Side, West Side, and everywhere
                in between. Ohio-side only. We know Price Hill, Evanston, Bond Hill, Hyde Park, and every hill
                in between.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Conveyance fee transparency</h3>
              <p className="text-gray-700 text-sm">
                Hamilton County's conveyance fee is $3.00 per $1,000 of the sale price — lower than Ohio's maximum
                rate. On a $290,000 home, that is approximately $870 in conveyance fees. We walk through every
                line item before you sign. Source: hamiltoncountyauditor.org (eff. 3/13/2021).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Cincinnati topography knowledge</h3>
              <p className="text-gray-700 text-sm">
                Cincinnati's hilly neighborhoods — from Hyde Park to Price Hill — are our home turf. We have
                bought on steep lots, on narrow streets, and in every corner of Hamilton County. Slope does not
                disqualify your property.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Strong appreciation, honest offers</h3>
              <p className="text-gray-700 text-sm">
                Cincinnati's per-square-foot price rose 14.2% year-over-year in early 2026. Our cash offers
                capture today's real market values — not stale estimates.
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cincinnati Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Cincinnati and Hamilton County, Ohio:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              'Price Hill', 'East Price Hill', 'West Price Hill', 'Evanston', 'Bond Hill',
              'Norwood', 'Oakley', 'Hyde Park', 'Avondale', 'Northside', 'Mount Washington',
              'Westwood', 'Madisonville', 'Walnut Hills', 'Kennedy Heights', 'Roselawn',
            ].map((n) => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            We focus on the Ohio side of the Cincinnati metro — Hamilton County. We do not apply Ohio law to
            Covington or Newport, KY. For Kentucky-side properties, contact us and we will discuss options.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Cincinnati, OH" />



        {/* Local resources hub */}
        <section className="my-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Cincinnati OH mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Cincinnati OH homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Cincinnati OH section for local seller resources, situation pages, the cash-sale process,
              reviews, and about pages before you decide whether a cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="/markets/cincinnati-oh/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Cincinnati OH Resources
            </a>
            <a
              href="/guides/sell-house-fast-cincinnati-oh-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </a>
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Cincinnati Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours. We handle the Hamilton County Ohio paperwork."
          sourcePage="/markets/cincinnati-oh"
        />
      </div>
    </>
  );
}
