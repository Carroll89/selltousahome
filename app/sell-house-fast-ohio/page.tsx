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

        {/* ===== SECTION: Legal Overview ===== */}
        <section className="my-12" id="oh-legal-overview">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — OH Home Sale Process</p>
            <p className="text-sm text-amber-700 mt-1">Ohio closings are typically handled by title companies — attorneys are optional, not required. Standard timeline: 30-45 days financed, 7-14 days cash. Ohio requires a Residential Property Disclosure Form (ORC § 5302.30) for most residential sales. Sellers pay the conveyance fee. Ohio does NOT have a traditional real estate transfer tax.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Home Sales Work in Ohio</h2>
          <div className="space-y-4 text-gray-700">
            <p>Ohio is a title-company state for most residential closings. Attorneys are not required at closing, though many sellers choose to use one for complex transactions (estate sales, short sales, properties with title issues). Title companies coordinate the closing, verify title, and handle the conveyance fee payment to the county auditor.</p>
            <p>Ohio uses the standard Ohio Association of Realtors purchase contract. Cash buyers waive financing and inspection contingencies, allowing closings in as few as 7 days. Traditional financed transactions typically take 30-45 days from accepted offer to closing.</p>
            <p>Ohio requires sellers to complete a <strong>Residential Property Disclosure Form</strong> under ORC § 5302.30. This form discloses known material defects: structural, plumbing, electrical, HVAC, water/drainage, hazardous materials, zoning violations, and pending litigation. Cash buyers purchasing as-is still receive this form but typically waive the inspection contingency. Federal lead paint disclosure is required for pre-1978 homes — nearly universal in Youngstown&apos;s pre-WWII housing stock.</p>
            <p>Ohio also has a <strong>Transfer-on-Death (TOD) Deed</strong> option — a beneficiary deed that allows real estate to pass outside of probate. If a property has a TOD deed, it bypasses the probate process entirely and transfers directly to the named beneficiary. This is increasingly common in Ohio and significantly affects how estate sales are handled.</p>
            <p className="text-sm text-gray-500">According to <a href="https://codes.ohio.gov/ohio-revised-code/section-5302.30" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">ORC § 5302.30 — Ohio Residential Property Disclosure</a> and <a href="https://codes.ohio.gov/ohio-revised-code/section-5302.22" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">ORC § 5302.22 — Transfer on Death Deed</a>.</p>
          </div>
        </section>

        {/* ===== SECTION: Transfer Tax (Conveyance Fee) ===== */}
        <section className="my-12" id="oh-conveyance-fee">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — Ohio Conveyance Fee</p>
            <p className="text-sm text-amber-700 mt-1">Ohio doesn&apos;t have a &ldquo;transfer tax&rdquo; — it&apos;s called a conveyance fee. State rate: $1.00 per $1,000. Most counties add a permissive fee of up to $3.00/1,000. Mahoning County (Youngstown) total: $4.00/1,000 + $0.50/parcel. The seller pays. On a $130K Youngstown sale, that&apos;s about $520 + $0.50.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ohio Conveyance Fee — Not a Transfer Tax</h2>
          <div className="space-y-4 text-gray-700">
            <p>Ohio calls its transaction fee a <strong>conveyance fee</strong> rather than a real estate transfer tax. It&apos;s functionally the same thing — a fee paid when real estate changes hands — but it&apos;s administered by county auditors, not a state revenue department, and paid via DTE Form 100 at the county auditor&apos;s office at closing.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">County</th>
                    <th className="py-3 px-4 text-left">State Fee</th>
                    <th className="py-3 px-4 text-left">Permissive Fee</th>
                    <th className="py-3 px-4 text-left">Total</th>
                    <th className="py-3 px-4 text-left">Extra</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Mahoning County (Youngstown)', '$1.00/1,000', '$3.00/1,000', '$4.00/1,000', '$0.50/parcel'],
                    ['Most Ohio counties', '$1.00/1,000', '$3.00/1,000', '$4.00/1,000', 'Varies'],
                    ['Franklin County (Columbus)', '$1.00/1,000', '$3.00/1,000', '$4.00/1,000', 'None'],
                    ['Some rural counties', '$1.00/1,000', '$1.00/1,000', '$2.00/1,000', 'None'],
                  ].map(([county, state, perm, total, extra], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{county}</td>
                      <td className="py-2 px-4">{state}</td>
                      <td className="py-2 px-4">{perm}</td>
                      <td className="py-2 px-4 font-bold text-brand-primary">{total}</td>
                      <td className="py-2 px-4 text-xs text-gray-600">{extra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Source: <a href="https://codes.ohio.gov/ohio-revised-code/section-319.202" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">ORC § 319.202</a> (state fee) and <a href="https://codes.ohio.gov/ohio-revised-code/section-322.02" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">ORC § 322.02</a> (permissive fee). Use <a href="https://auditor.mahoningcountyoh.gov/ConveyanceCalculator" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Mahoning County Auditor&apos;s conveyance calculator</a> for Youngstown properties.</p>
            <div className="bg-blue-50 rounded-xl p-5 mt-4">
              <h3 className="font-bold text-brand-dark mb-2">Estimated Closing Costs — $130K Sale in Youngstown, OH</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Conveyance fee (Mahoning County, seller pays): <strong>$520.50</strong> ($4.00/1,000 × 130 + $0.50)</li>
                <li>• Title insurance (owner&apos;s policy): <strong>$500–$800</strong></li>
                <li>• Settlement/closing fee: <strong>$300–$500</strong></li>
                <li>• Recording fees (Senate Bill 94): <strong>$39 base + $8/page</strong></li>
                <li>• Real estate agent commission (if applicable): <strong>$6,500–$7,800</strong> (5-6%)</li>
                <li className="pt-2 font-bold text-brand-dark">Traditional sale total: ~$7,860–$9,620</li>
                <li className="font-bold text-green-700">Cash sale with USA Home Buyers: $0 (we cover all closing costs)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== SECTION: Foreclosure Process ===== */}
        <section className="my-12" id="oh-foreclosure">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — Ohio Foreclosure</p>
            <p className="text-sm text-amber-700 mt-1">Ohio is a judicial foreclosure state — all cases go through the county Court of Common Pleas. Timeline: 6-24 months from first missed payment to sheriff&apos;s sale confirmation. Ohio HB 130 requires mediation referral for residential foreclosures. Homeowners retain the right to cure through confirmation of the sale.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ohio Foreclosure Process — What Sellers Need to Know</h2>
          <div className="space-y-4 text-gray-700">
            <p>Ohio is a <strong>judicial foreclosure state</strong>. Every foreclosure must go through the county Court of Common Pleas — there is no non-judicial (power-of-sale) option. This is somewhat consumer-protective (more process, more notice, more opportunity to respond) but also slower and more public.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Phase</th>
                    <th className="py-3 px-4 text-left">Timing</th>
                    <th className="py-3 px-4 text-left">What Happens</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Missed payments', 'Month 1-3', 'Lender notices and demand letters. No legal action yet.'],
                    ['Complaint filed', 'Month 2-5', 'Lender files in Court of Common Pleas. You are served.'],
                    ['Mediation referral', 'Month 3-5', 'Ohio HB 130 requires mediation referral for residential foreclosures.'],
                    ['Judgment', 'Month 4-8', 'If no valid defense or settlement, court enters judgment.'],
                    ["Sheriff's sale ordered", 'Month 6-12', 'Court orders sheriff sale. Scheduled with at least 30-day notice.'],
                    ["Sheriff's sale", 'Month 6-24', 'Property auctioned at county courthouse.'],
                    ['Sale confirmation', 'Weeks after sale', 'Court confirms sale. Deed transferred to buyer.'],
                  ].map(([phase, timing, what], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 font-medium">{phase}</td>
                      <td className="py-2 px-4 text-orange-600">{timing}</td>
                      <td className="py-2 px-4">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Ohio homeowners retain the right to cure (pay off the arrears) through confirmation of the sheriff&apos;s sale — this is one of the most seller-protective aspects of Ohio foreclosure law. You can also sell at any point before sale confirmation. A cash buyer can close in 7-14 days, which is far faster than the foreclosure process moves.</p>
            <p className="text-sm text-gray-500">According to <a href="https://www.ohiolegalhelp.org/foreclosure_timeline" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Ohio Legal Help — Foreclosure Timeline</a> and ORC Chapter 2323.</p>
            <Link href="/markets/youngstown-oh/foreclosure" className="text-sm text-brand-primary hover:underline">Sell your Youngstown home in foreclosure &rarr;</Link>
          </div>
        </section>

        {/* ===== SECTION: Probate Overview ===== */}
        <section className="my-12" id="oh-probate">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — Ohio Probate</p>
            <p className="text-sm text-amber-700 mt-1">Ohio uses Probate Court (county-level), not a Register of Wills. Full probate required for estates over $35,000. Mahoning County Probate Court: 120 Market St., Youngstown, (330) 740-2310. You CAN sell during probate once the court opens the estate and grants authority. Ohio has no state inheritance tax (abolished 2013).</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Ohio Property — Probate Overview</h2>
          <div className="space-y-4 text-gray-700">
            <p>Ohio uses <strong>Probate Court</strong> for estate administration — not a &ldquo;Register of Wills&rdquo; (Pennsylvania) or &ldquo;Register of Wills/Chancery Court&rdquo; (Delaware). Each of Ohio&apos;s 88 counties has its own Probate Court. The court oversees estate administration, appoints personal representatives, and authorizes the sale of real property.</p>
            <p>Full probate is typically required for estates with gross assets exceeding <strong>$35,000</strong> (or $100,000 for a surviving spouse). Below those thresholds, a simplified release or summary administration may be available. Real estate ownership is valued at fair market value for this threshold calculation.</p>
            <p><strong>Can you sell during Ohio probate?</strong> Yes. Once the Probate Court opens the estate and appoints a personal representative (executor or administrator), that person gains authority to manage and sell estate real estate — subject to court approval for the sale price in some circumstances. We work with probate timelines regularly.</p>
            <p><strong>Transfer-on-Death deed:</strong> Ohio permits TOD deeds (ORC § 5302.22) that allow real estate to bypass probate entirely. If the deceased filed a TOD deed naming a beneficiary, the property passes outside of probate. The beneficiary simply records an affidavit of confirmation. This is common in Youngstown and throughout Ohio.</p>
            <p><strong>Ohio inheritance tax:</strong> Ohio abolished its estate tax on January 1, 2013. There is no Ohio state inheritance tax. Federal estate tax may apply for very large estates. Inherited property receives a stepped-up basis at the date of death.</p>
            <div className="bg-blue-50 rounded-xl p-4 mt-2">
              <h3 className="font-bold text-brand-dark mb-1">Ohio Probate Courts — Our Markets</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Mahoning County (Youngstown):</strong> 120 Market St., Youngstown OH 44503 | (330) 740-2310</li>
              </ul>
            </div>
            <p className="text-sm text-gray-500">According to <a href="https://codes.ohio.gov/ohio-revised-code/section-2113.03" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">ORC § 2113.03</a> and the <a href="https://www.mahoningcountyoh.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Mahoning County Probate Court</a>.</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/markets/youngstown-oh/inherited-property" className="text-sm text-brand-primary hover:underline">Inherited property in Youngstown &rarr;</Link>
              <Link href="/markets/youngstown-oh/probate" className="text-sm text-brand-primary hover:underline">Probate sale in Youngstown &rarr;</Link>
            </div>
          </div>
        </section>

        {/* ===== SECTION: Market Snapshot ===== */}
        <section className="my-12" id="oh-market-snapshot">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">TL;DR — Ohio Market</p>
            <p className="text-sm text-amber-700 mt-1">We currently serve Youngstown, OH (Mahoning County). Youngstown is a Rust Belt market: median sale price ~$129,200, 70 days median DOM, pre-1950 housing stock dominates. Many properties don&apos;t qualify for conventional financing — strong cash buyer demand. Ohio conveyance fee: $4.00/1,000 in Mahoning County.</p>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ohio Market Snapshot — Youngstown</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Youngstown, OH</th>
                  <th className="py-3 px-4 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['County', 'Mahoning County', 'Northeast Ohio, Rust Belt'],
                  ['Median sale price', '~$129,200', 'Redfin, early 2026'],
                  ['Median days on market', '70 days', 'Traditional MLS listings'],
                  ['Cash sale timeline', '7-14 days', 'USA Home Buyers average'],
                  ['Conveyance fee (seller pays)', '$4.00/1,000 + $0.50', 'Mahoning County rate'],
                  ['Foreclosure type', 'Judicial (Common Pleas)', 'No non-judicial option in Ohio'],
                  ['State inheritance tax', 'None (abolished 2013)', 'Federal estate tax may apply'],
                  ['TOD deed available', 'Yes — ORC § 5302.22', 'Can bypass probate entirely'],
                  ['Attorney at closing', 'Optional', 'Not required by Ohio statute'],
                  ['Conventional financing', 'Limited', 'Pre-1950 stock often fails inspection'],
                  ['Cash buyer activity', 'High', 'Strong demand from investors + owner-occupants'],
                ].map(([metric, value, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium text-brand-dark">{metric}</td>
                    <td className="py-2 px-4 font-bold text-brand-primary">{value}</td>
                    <td className="py-2 px-4 text-xs text-gray-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Sources: Redfin, Zillow, Mahoning County Auditor, Ohio Legal Help, ORC. Data as of early 2026.</p>
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Ohio Home Fast?" sourcePage="/sell-house-fast-ohio" />
        </section>
      </div>
    </>
  );
}
