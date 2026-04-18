/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/springfield-il/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House with Code Violations Springfield IL',
  description:
    'Have open code violations in Springfield IL? We buy houses as-is with open violations, condemnation orders, or failed inspections. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a Springfield house with open code violations?',
    answer: 'Yes. We buy Springfield IL properties with open City of Springfield code violations, failed inspections, condemnation orders, and structures in any stage of the code enforcement process. The violations transfer with the property — we assume responsibility for remediation after closing. You receive cash at closing without making a single repair.',
  },
  {
    question: 'What are common code violations in Springfield IL homes?',
    answer: 'Springfield\'s older housing stock generates a predictable set of code violations: deteriorated exterior (peeling paint, damaged siding, broken windows, collapsing gutters), electrical deficiencies (knob-and-tube wiring, overloaded panels, missing GFCI protection), plumbing deficiencies (galvanized pipe leaks, backflow issues, sewer line problems), structural issues (settling foundations, deteriorated floor systems, unsafe porches or stairs), and exterior property maintenance (overgrown vegetation, inoperable vehicles, accumulated debris). Victorian-era Enos Park homes and post-war Harvard Park bungalows are disproportionately represented in the code enforcement caseload.',
  },
  {
    question: 'What happens if I get a demolition order in Springfield?',
    answer: 'If the City of Springfield Building and Zoning Department issues a demolition order, you typically have a set time period to either remediate the violations or have the structure demolished. If you don\'t act, the city can demolish the structure and assess the cost against the property as a lien — which must be paid before the property can transfer clean title. If you\'re facing a demolition order, contact us immediately at 888-440-5250. We can often close before the demolition deadline, taking the property as-is and handling the city process after closing.',
  },
  {
    question: 'Can a Springfield house with code violations be sold?',
    answer: 'Yes. Code violations don\'t prevent a sale — they just affect the buyer pool. Conventional mortgage lenders require properties to meet minimum condition standards (appraisal guidelines for FHA, VA, and conventional loans exclude properties with safety-related deficiencies). Cash buyers have no such constraint. We purchase properties regardless of their code compliance status — the violations transfer with the deed and we handle remediation on our own timeline after closing.',
  },
  {
    question: 'Are there daily fines for code violations in Springfield IL?',
    answer: 'The City of Springfield Building and Zoning Department has authority to issue notices of violation and assess fines for continued non-compliance. Fines accumulate as liens against the property — they must be paid or satisfied before the property can be conveyed with clean title. When we close on a code-violation property, the title company includes lien payoffs in the closing statement. Any outstanding fines are paid from proceeds at closing. We account for known liens in our offer price.',
  },
];

export default function SpringfieldCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House with Code Violations in Springfield IL', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/springfield-il-hero-640.jpg 640w, /images/optimized/springfield-il-hero-828.jpg 828w, /images/optimized/springfield-il-hero-1080.jpg 1080w, /images/optimized/springfield-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/springfield-il-hero-1200.jpg"
            alt="Springfield IL house with code violations — sell as-is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/springfield-il" className="hover:text-white">Springfield IL</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Springfield IL House with Code Violations — As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases Springfield IL houses with open City of Springfield code violations, condemnation orders, failed inspections, and outstanding fines. We assume responsibility for violations after closing. No repairs, no remediation before you get paid. Written offer in 24 hours. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Open violations, condemnation, daily fines — we buy as-is. You don't touch a single thing before closing.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/springfield-il/code-violations.mp4"
        title="Sell a House With Code Violations in Springfield IL"
        poster="/videos/springfield-il/code-violations-poster.jpg"
        subtitle="Open violations, condemned notices — we buy as-is"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Does your Springfield property have code violations? Don't let that stop you from selling. At USA Home Buyers, we buy properties with open violations — as-is, for cash. Whether it's structural issues, electrical problems, or a condemned notice — we've seen it all. Call us at 888-440-5250 for a free, no-obligation cash offer.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Open violations, no problem. Written offer in 24 hours." sourcePage="/markets/springfield-il/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield IL Code Enforcement — How the City Process Works</h2>
          <p className="text-gray-700 mb-4">
            Springfield's code enforcement is administered by the City of Springfield Building and Zoning Department. When a property falls out of compliance — through a complaint, a routine inspection, or a city-initiated sweep of older neighborhoods — the department issues a Notice of Violation outlining specific deficiencies and a compliance deadline. Failure to comply can result in fines, citations, and ultimately a demolition order for structures deemed unsafe or beyond remediation.
          </p>
          <p className="text-gray-700 mb-4">
            The code enforcement process in Springfield is particularly active in the city's older neighborhoods — Enos Park, the North Side, South Side, and West Side — where aging housing stock built in the late 1800s and early 1900s requires continuous maintenance to stay code-compliant. Properties that have been inherited, vacated, or held by absentee landlords are disproportionately represented in the code enforcement caseload.
          </p>
          <p className="text-gray-700 mb-4">
            Springfield's code enforcement priorities include exterior property maintenance (paint, siding, windows, gutters), structural integrity (foundations, porch safety, floor systems), electrical and plumbing safety, and exterior property conditions (overgrowth, abandoned vehicles, trash accumulation). Each category can generate one or multiple separate violation notices, each with its own compliance deadline.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Code Violations Don't Stop — A Sale to Cash Buyers</h2>
          <p className="text-gray-700 mb-4">
            Conventional mortgage financing and FHA/VA loans require properties to meet minimum property standards — appraisers flag code violations that create safety or habitability concerns, and lenders won't fund loans on properties with significant open violations. This eliminates the majority of retail buyers from the pool for a code-violation property in Springfield.
          </p>
          <p className="text-gray-700 mb-4">
            Cash buyers are under no such constraint. We don't need an appraisal that clears lender property standards. We buy in any condition and factor the remediation cost into our offer price. The code violations transfer with the deed — they become our problem after closing, not yours. You receive cash at closing without making a single repair or paying a single contractor.
          </p>
          <p className="text-gray-700 mb-4">
            Outstanding fines and liens are handled at the title company during closing — they're paid from proceeds and the title is conveyed clean. The title company's title search identifies all recorded code violation liens, and the closing statement includes payoffs for any recorded city liens. We account for known liens when we formulate our offer.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield's Most Common Code Violation Properties</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">Enos Park and North Side Victorians</h3>
              <p className="text-sm text-gray-700">Pre-1920 frame construction with original electrical (knob-and-tube), galvanized plumbing, and plaster walls. Common violations: exterior deterioration, electrical upgrades required, lead paint hazards, foundation cracking. Many are contributing historic structures — the neighborhood's active association (Enos Park Neighborhood Improvement Association) advocates for preservation, but that doesn't make remediation cheaper or faster.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">Harvard Park and South Side Bungalows</h3>
              <p className="text-sm text-gray-700">1940s-1960s Craftsman and Cape Cod homes that have cycled through multiple owners. Galvanized plumbing corrosion, aging electrical panels, deteriorated roofing, and deferred exterior maintenance are common. Properties in this price range ($92K-$130K) often can't support the cost of full remediation — the math doesn't work for a conventional buyer to rehabilitate and resell.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">West Side Brick Ranches</h3>
              <p className="text-sm text-gray-700">Post-war 1950s-1970s brick ranches with outdated electrical panels, lead-based paint in pre-1978 construction, deteriorated sewer laterals, and outdated HVAC systems. Often absentee-owned or recently vacated. Exterior maintenance violations are common — overgrown lots, deteriorated driveways, broken windows.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">Distressed Multi-Family Properties</h3>
              <p className="text-sm text-gray-700">Small apartment buildings (2-4 units) throughout Springfield's older neighborhoods. Multi-unit code violations can compound quickly — each unit may carry separate violations, and the building as a whole may face structural or systems deficiencies. Multi-family cash sales are straightforward for us.</p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Demolition Orders — Act Before the City Does</h2>
          <p className="text-gray-700 mb-4">
            A demolition order from the City of Springfield Building and Zoning Department is the most urgent code enforcement situation. If the city determines a structure is unsafe, beyond remediation, or a public nuisance, it can issue a demolition order with a compliance deadline. If the owner doesn't act within that deadline, the city contracts for the demolition and places the cost as a lien on the property.
          </p>
          <p className="text-gray-700 mb-4">
            The timeline between a demolition order and city-initiated demolition varies — Springfield typically provides multiple notice opportunities before taking direct action. But once a demolition order is active, your window to sell the property with any value intact is closing. Once the city demolishes the structure, you're left with a vacant lot with a demolition cost lien — worth significantly less than an occupied structure.
          </p>
          <p className="text-gray-700 mb-4">
            If you've received a demolition order, call 888-440-5250 immediately. In many cases we can close before the demolition deadline, preserving value for you and handling the property remediation on our own schedule.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Context — Why Springfield Code-Violation Properties Sell</h2>
          <p className="text-gray-700 mb-4">
            Springfield's RDC hotness ranking of #10 nationally as of March 2026 means there's genuine investor demand for renovation properties. At a Zillow ZHVI of $163,198 and a Redfin median sale price of $187,000, the post-renovation value on a properly rehabilitated Springfield home is real — investors can make the math work even on deeply distressed properties.
          </p>
          <p className="text-gray-700 mb-4">
            That investor demand is what allows us to pay a fair cash price for code-violation properties. We're not buying them to leave them as-is — we're buying them to renovate and return to productive use. That's good for the seller (you get cash today), good for the neighborhood, and good for Springfield's housing stock.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Code Violation Liens Work at Closing</h2>
          <p className="text-gray-700 mb-4">
            When the City of Springfield assesses fines or costs for code violations that go unpaid, those amounts typically become recorded liens against the property. A lien is a legal claim on the property that must be paid before clean title can be conveyed. The title company conducting your closing will perform a full title search and identify all recorded liens — including city code violation fines, property tax arrears, judgment liens, and mechanic's liens.
          </p>
          <p className="text-gray-700 mb-4">
            At closing, these liens are paid from the sale proceeds. The title company prepares a closing statement that itemizes all payoffs. After liens are paid, the remaining proceeds come to you. We account for known liens when we formulate our offer — we ask about existing violations and lien history upfront, so there are no surprises at closing.
          </p>
          <p className="text-gray-700 mb-4">
            For properties with large accumulated fines, it's worth requesting a payoff quote from the City of Springfield Building and Zoning Department before we finalize the offer. Knowing the exact lien payoff amount allows us to price the transaction correctly so you know exactly what you'll net at closing.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-3">Vacant and Abandoned Properties — Springfield's Active Registration Program</h3>
          <p className="text-gray-700 mb-4">
            Springfield has an active vacant property registration and monitoring program. Properties that have been vacant for a specified period may be subject to additional registration requirements and periodic inspections. Failure to register a vacant property can result in fines separate from and in addition to any other code violation citations.
          </p>
          <p className="text-gray-700 mb-4">
            For inherited properties or estate properties that have been sitting vacant since the owner's death, the vacant property registration status is worth confirming with the City of Springfield Building and Zoning Department. If there are outstanding registration fees or vacancy-related fines, these will appear in the title search and must be resolved at closing. We handle this as part of our standard closing process.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Lead Paint, Asbestos, and Environmental Disclosures in Springfield</h2>
          <p className="text-gray-700 mb-4">
            Illinois requires sellers to complete the Residential Real Property Disclosure Statement under 765 ILCS 77/ for all 1-4 unit residential sales. The form includes disclosure of known hazardous materials. For pre-1978 construction — which includes virtually all of Enos Park, Harvard Park, and the older West Side neighborhoods — federal lead paint disclosure requirements also apply under the Residential Lead-Based Paint Hazard Reduction Act (42 U.S.C. § 4852d). Sellers of pre-1978 homes must provide buyers with available lead paint records and a disclosure form. Buyers have a 10-day inspection window for lead paint inspection.
          </p>
          <p className="text-gray-700 mb-4">
            Asbestos in floor tiles, pipe insulation, and popcorn ceilings is common in Springfield homes built before 1980. Asbestos in good condition and undisturbed is not itself a code violation — it becomes a concern when disturbed during renovation. For properties with known asbestos, disclosure on the 765 ILCS 77/ form is the legal requirement; actual remediation is the buyer's responsibility in an as-is sale. We accept properties with known asbestos and factor remediation cost into our offer.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Springfield IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/springfield-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/springfield-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/springfield-il/fire-damage', label: 'Fire Damage' },
              { href: '/markets/springfield-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/springfield-il/probate', label: 'Probate Sale' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Seller Guide' },
              { href: '/markets/springfield-il', label: '← Back to Springfield IL' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Sell Your Springfield IL Code-Violation Property As-Is" sourcePage="/markets/springfield-il/code-violations" />
      </div>
    </>
  );
}
