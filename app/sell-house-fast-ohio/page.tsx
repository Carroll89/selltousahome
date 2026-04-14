/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, faqSchema, articleSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/sell-house-fast-ohio`;

export const metadata: Metadata = {
  title: 'Sell My House Fast Ohio | Cash Buyers',
  description:
    'We buy houses for cash throughout Ohio. Written offer in 24 hours, close in 7 days. Ohio conveyance fees, judicial foreclosure, probate — all explained.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does the Ohio conveyance fee work?',
    answer: "Ohio uses a conveyance fee system instead of a traditional real estate transfer tax. The base state fee is $1.00 per $1,000 of sale price (ORC § 319.202). Counties may levy an additional permissive fee of up to $3.00/1,000 (ORC § 322.02). Most Ohio counties apply the permissive fee, making the typical total $2-$4 per $1,000. In Mahoning County (Youngstown), the total is $4.00/1,000 plus $0.50 per parcel. The seller pays. Source: Ohio Department of Taxation; Mahoning County Auditor (auditor.mahoningcountyoh.gov).",
  },
  {
    question: 'Is Ohio a judicial foreclosure state?',
    answer: "Yes. Ohio is a judicial foreclosure state — all foreclosures must go through the county Court of Common Pleas. There is no non-judicial/power-of-sale option. Ohio also requires mediation referral for residential foreclosures under HB 130. Typical timelines run 6-24 months from first missed payment to sheriff's sale confirmation. Homeowners retain the right to cure through confirmation of the sale. Source: Ohio Legal Help (ohiolegalhelp.org); ORC Chapter 2323.",
  },
  {
    question: 'How does probate work in Ohio?',
    answer: "Ohio uses Probate Court for estate administration — not a Register of Wills (Pennsylvania system) or Orphans' Court. Each county has its own Probate Court. In Mahoning County, that's the Mahoning County Probate Court at 120 Market Street, Youngstown, OH 44503, (330) 740-2310. Full probate is typically required for estates over $35,000 in gross assets. The personal representative gains authority to sell real property after the court opens the estate.",
  },
  {
    question: 'What is the Ohio Residential Property Disclosure Form?',
    answer: "Ohio law (ORC § 5302.30) requires sellers to complete a Residential Property Disclosure Form for most residential sales. This discloses known material defects: structural, plumbing, electrical, HVAC, water/drainage, hazardous materials, zoning violations, and pending litigation. Cash buyers who purchase as-is still receive the disclosure form but typically waive inspection contingencies. Lead paint disclosure is federally required for pre-1978 homes.",
  },
  {
    question: 'Does Ohio require an attorney at real estate closings?',
    answer: "No. Ohio does not require an attorney at real estate closings. Title companies handle most residential closings. Attorneys are optional but commonly used for complex transactions, probate sales, or distressed properties.",
  },
];

export default function OhioHubPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell Your House Fast in Ohio — Cash Home Buyers', pageUrl, '2026-04-14'),
        faqSchema(FAQ_ITEMS),
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Sell House Fast Ohio', item: pageUrl },
          ],
        },
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/youngstown-oh-hero-640.jpg 640w, /images/optimized/youngstown-oh-hero-828.jpg 828w, /images/optimized/youngstown-oh-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-hero-1200.jpg"
            alt="Sell your house fast in Ohio — cash buyers"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast in Ohio — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases houses throughout Ohio for cash in any condition — no repairs,
              no cleaning, no agent fees. Written cash offer within 24 hours, close in as few as 7 days.
              Ohio's conveyance fee covered. Select your city below.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-4">
              <span>✓ No repairs</span>
              <span>✓ No commissions</span>
              <span>✓ We pay all closing costs</span>
              <span>✓ Close in 7 days</span>
              <span>✓ Ohio conveyance fee covered</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/sell-house-fast-ohio" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Ohio Markets */}
        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Ohio Markets We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Youngstown, OH</h3>
              <p className="text-gray-700 text-sm mb-3">
                Mahoning County. Rust Belt market, pre-1950 housing stock, median sale price $129,200.
                Strong demand from cash buyers — many city properties don't qualify for conventional financing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>→ Conveyance fee: $4.00/1,000 (Mahoning County)</li>
                <li>→ DOM: 70 days median</li>
                <li>→ Cash offer: 65-75% of ARV</li>
              </ul>
              <Link href="/markets/youngstown-oh" className="inline-block bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Sell Your Youngstown Home →
              </Link>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 opacity-75">
              <h3 className="text-xl font-bold text-gray-500 mb-2">More Ohio Markets</h3>
              <p className="text-gray-500 text-sm mb-3">
                We're expanding our Ohio coverage. Additional markets coming soon.
              </p>
              <p className="text-gray-500 text-sm">
                Already in your area and need to sell? Call us — we evaluate properties throughout Ohio.
              </p>
              <a href={`tel:${PHONE}`} className="inline-block mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                Call to Discuss Your Property
              </a>
            </div>
          </div>
        </section>

        {/* Ohio-specific overview */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Selling a House in Ohio — What You Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            Ohio's real estate transaction framework differs from neighboring Pennsylvania and West Virginia
            in several important ways. If you're a seller — especially one dealing with an inherited property,
            foreclosure, or distressed condition — these details affect your timeline and net proceeds.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Conveyance Fee (Not Transfer Tax)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Ohio calls it a "conveyance fee" rather than a transfer tax. The state levies $1.00 per
                $1,000 of sale price under ORC § 319.202. Counties may add a permissive fee of up to
                $3.00/1,000 under ORC § 322.02. Most Ohio counties apply this — making the typical
                range $2-$4 per $1,000 statewide. The seller pays.
              </p>
              <p className="text-gray-700 text-sm">
                The conveyance fee is paid to the County Auditor at closing via the title company,
                filed on DTE Form 100. The{' '}
                <a href="https://auditor.mahoningcountyoh.gov/ConveyanceCalculator" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County Auditor provides a conveyance calculator online</a>.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Judicial Foreclosure (Court Process)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Ohio is a judicial foreclosure state. All foreclosures go through the county Court of
                Common Pleas — there is no non-judicial option. The typical timeline is 6-24 months
                from first missed payment to sheriff's sale confirmation. Ohio's HB 130 requires
                mediation referral for residential foreclosures.
              </p>
              <p className="text-gray-700 text-sm">
                Selling before the sheriff's sale is the most common way to protect equity. A cash
                buyer can close in 7-14 days — far faster than the foreclosure process moves.
                Source:{' '}
                <a href="https://www.ohiolegalhelp.org/foreclosure_timeline" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Ohio Legal Help</a>.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Probate Court (Not Register of Wills)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Ohio uses Probate Court for estate administration — not a "Register of Wills" (that's
                Pennsylvania) or "Chancery Court" (that's Delaware). Each Ohio county has its own
                Probate Court. Full probate is typically required for estates over $35,000 in gross assets.
              </p>
              <p className="text-gray-700 text-sm">
                The personal representative gains authority to sell real property after the court opens
                the estate. We work with probate timelines regularly and can structure transactions
                around the court's authorization schedule.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Disclosure Requirements</h3>
              <p className="text-gray-700 text-sm">
                Ohio requires the{' '}
                <a href="https://codes.ohio.gov/ohio-revised-code/section-5302.30" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Residential Property Disclosure Form (ORC § 5302.30)</a>
                {' '}for most residential sales. Cash buyers who purchase as-is still receive the form
                but typically waive inspection contingencies. Lead paint disclosure is federally required
                for pre-1978 homes — nearly universal in Youngstown's housing stock.
              </p>
            </div>
          </div>
        </section>

        {/* Key data table */}
        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Ohio Real Estate — Key Facts for Sellers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Transfer fee name', 'Conveyance fee (not "transfer tax")'],
                  ['State conveyance fee', '$1.00 per $1,000 (ORC § 319.202) — applies in all 88 counties'],
                  ['County permissive fee', 'Up to $3.00/1,000 (ORC § 322.02) — most counties apply it'],
                  ['Mahoning County total (Youngstown)', '$4.00/1,000 + $0.50/parcel'],
                  ['Who pays conveyance fee', 'Seller (standard throughout Ohio)'],
                  ['Recording fees — Mahoning County (2026)', '$39 base + $8/additional page (Senate Bill 94)'],
                  ['Foreclosure type', 'Judicial — all 88 counties, through Court of Common Pleas'],
                  ['Foreclosure timeline', '6-24 months typical'],
                  ['Mediation requirement', 'Yes — HB 130 requires referral for residential foreclosures'],
                  ['Probate system', 'Probate Court (county-level) — NOT Register of Wills'],
                  ['Attorney required at closing', 'No — Ohio does not require attorney at closing'],
                  ['Disclosure form', 'Ohio Residential Property Disclosure Form (ORC § 5302.30)'],
                  ['Lead paint disclosure', 'Federally required for pre-1978 homes'],
                ].map(([metric, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark rounded-l">{metric}</td>
                    <td className="py-3 px-4 text-brand-primary rounded-r">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Sources:{' '}
            <a href="https://codes.ohio.gov/ohio-revised-code/section-319.202" className="hover:underline" target="_blank" rel="noopener noreferrer">ORC § 319.202</a>{' '}
            · <a href="https://www.ohiolegalhelp.org/foreclosure_timeline" className="hover:underline" target="_blank" rel="noopener noreferrer">Ohio Legal Help</a>{' '}
            · <a href="https://www.mahoningcountyoh.gov/788/Schedule-of-Fees" className="hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County Recorder</a>{' '}
            · <a href="https://codes.ohio.gov/ohio-revised-code/section-5302.30" className="hover:underline" target="_blank" rel="noopener noreferrer">ORC § 5302.30</a>
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer for Your Ohio Home"
            subheadline="No obligation. Written offer in 24 hours. We cover all Ohio closing costs."
            sourcePage="/sell-house-fast-ohio"
          />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling a House in Ohio" />

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Ohio Home Fast?" sourcePage="/sell-house-fast-ohio" />
        </section>
      </div>
    </>
  );
}
