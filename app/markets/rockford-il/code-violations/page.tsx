/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Rockford IL',
  description:
    'Rockford IL code violations - open citations, red-tagged properties, condemnation orders - we buy as-is. Pre-1970 housing stock, any condition. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a house with code violations in Rockford IL?',
    answer: 'Yes - Illinois does not prohibit the sale of a property with open code violations, though you must disclose known material defects under 765 ILCS 77/35. USA Home Buyers purchases Rockford properties with open City of Rockford code enforcement violations, red tags, and condemnation orders in as-is condition. We assess the violation status, account for it in our offer, and handle all remediation after closing. Call 888-274-5006.',
  },
  {
    question: 'What are the most common code violations in Rockford IL homes?',
    answer: 'Rockford\'s pre-1970 housing stock generates specific, recurring violations: (1) Electrical - original knob-and-tube wiring in homes built before 1940, aluminum branch wiring in 1960s-1970s construction, outdated panel capacity. (2) Plumbing - galvanized pipe corrosion in 1950s-1960s homes, original clay or orangeburg sewer lines, inadequate water heater capacity. (3) Foundation - settling and cracking from Rock River alluvial soil that expands and contracts seasonally. (4) Lead paint - pre-1978 construction (virtually all of Rockford\'s working-class housing stock). (5) Structural - balloon-frame wood construction in pre-1940 homes with fire-stop deficiencies. (6) HVAC - systems that exceed design life, inadequate ventilation. City of Rockford code enforcement is active in all residential neighborhoods.',
  },
  {
    question: 'What is the City of Rockford code enforcement process?',
    answer: 'The City of Rockford\'s Community Development Department enforces the International Property Maintenance Code (IPMC) and International Building Code (IBC) as adopted by Illinois. When a violation is found - through complaint, routine inspection, or neighbor report - the city issues a Notice of Violation with a cure deadline, typically 30-90 days depending on severity. If not corrected, the city escalates: administrative hearing, civil penalty, and eventually an abatement order (where the city performs the work and bills the owner) or a condemnation/demolition order for properties deemed dangerous. Contact: City of Rockford Community Development, rockfordil.gov.',
  },
  {
    question: 'What happens if my Rockford property is condemned?',
    answer: 'A condemned property in Rockford - one where the city has issued a condemnation order declaring the structure unfit for habitation - is still sellable to a cash buyer. Illinois does not void a property\'s title or prohibit sale due to condemnation status. The buyer takes the property subject to the condemnation order and the obligation to address it. USA Home Buyers has purchased condemned and red-tagged Rockford properties before. The condemnation status is reflected in our offer price. Call 888-274-5006.',
  },
  {
    question: 'Do I need to disclose code violations when selling in Rockford IL?',
    answer: 'Yes. Under the Illinois Residential Real Estate Disclosure Act, 765 ILCS 77/35, sellers are required to disclose known material defects in the property, including existing code violations. Willful concealment of known defects can expose the seller to liability post-closing. When selling to USA Home Buyers, we assess the property condition ourselves and account for known violations in our offer - you disclose what you know, we price accordingly, and there are no after-closing surprises.',
  },
];

export default function RockfordCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House With Code Violations in Rockford IL - Winnebago County Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/rockford-il-hero-640.jpg 640w, /images/optimized/rockford-il-hero-828.jpg 828w, /images/optimized/rockford-il-hero-1080.jpg 1080w, /images/optimized/rockford-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/rockford-il-hero-1200.jpg"
            alt="Rockford IL home - Sell With Code Violations"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Rockford IL Home With Code Violations - As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Rockford IL code violations don't stop USA Home Buyers. City of Rockford code enforcement issues open violations, red tags, and condemnation orders on older housing stock - pre-1970 construction with lead paint, knob-and-tube wiring, foundation issues. We buy as-is, any violation status. Written offer in 24 hours. No repairs required. Close in 7-14 days. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Open violations, red tags, or condemnation orders in Rockford? We buy as-is - any violation status, no repairs required.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now - 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get a Cash Offer - Code Violations Welcome" subheadline="We buy Rockford properties with open violations, any condition. Written offer in 24 hours." sourcePage="/markets/rockford-il/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Rockford Has More Code Violations Than Most IL Cities</h2>
          <p className="text-gray-700 mb-4">
            Rockford's housing code violation rate isn't random - it reflects the direct consequence of the city's industrial history and demographic profile. The majority of Rockford's residential stock was built before 1970. Most of it was built before 1960. In neighborhoods like Jackson Oaks, Signal Hill, and along West State Street, significant shares of the housing stock date to the 1920s-1940s manufacturing-era boom, when homes were built to the standards of the time without the systems and materials modern code requires.
          </p>
          <p className="text-gray-700 mb-4">
            The intersection of old housing stock and an aging, often fixed-income homeowner population creates a specific dynamic: deferred maintenance that accumulates faster than it gets addressed. A Signal Hill ranch owner on a manufacturing pension doesn't have $15,000 for a new electrical panel, $8,000 for a water heater and plumbing upgrade, and $12,000 for foundation waterproofing - not when those costs represent more than the home's annual tax value. The result is years of code-violating conditions that eventually attract city enforcement.
          </p>
          <p className="text-gray-700 mb-4">
            Four specific housing issues drive the majority of Rockford code violations:
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford's Four Major Code Violation Categories</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">1. Lead Paint - Pre-1978 Construction</h3>
          <p className="text-gray-700 mb-4">
            Federal law (42 U.S.C. § 4851 et seq.) requires disclosure of known lead-based paint hazards in pre-1978 residential housing. Virtually all of Rockford's working-class residential stock falls into this category. Lead paint is not in itself a code violation as long as it remains intact and undisturbed - the issue arises when paint deteriorates (peeling, chipping, or chalking), creating a hazardous condition that triggers both Illinois and city health code requirements. In pre-1940 Rockford homes, lead paint deterioration is endemic. Remediation costs vary from $2,000-$3,000 for spot treatments to $15,000+ for full encapsulation or removal in older homes.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">2. Knob-and-Tube and Outdated Electrical</h3>
          <p className="text-gray-700 mb-4">
            Homes built in Rockford before 1940 frequently have original knob-and-tube wiring - an open-air wiring method that relies on ceramic knobs and tubes to separate conductors. Modern insurance underwriters have largely stopped insuring homes with active knob-and-tube wiring, and modern electrical code (as adopted by Rockford) requires that it be replaced before any significant renovation. When knob-and-tube is still active in a Rockford home, it's a hard-stop for FHA and conventional financing. City code enforcement flags it when visible during inspections of properties reported for other violations.
          </p>
          <p className="text-gray-700 mb-4">
            Homes from the 1960s-1970s present a different electrical issue: aluminum branch circuit wiring, used during a period when copper prices surged. Aluminum wiring creates fire risks at connection points and is a common source of violations in Rockford's post-war ranches.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">3. Foundation Issues - Rock River Alluvial Soil</h3>
          <p className="text-gray-700 mb-4">
            Rockford sits on glacially deposited soil and Rock River alluvial deposits that have above-average expansive clay content. This soil moves seasonally - swelling during wet periods, contracting during dry ones. The result, over decades, is foundation stress: horizontal cracking in block foundations, stair-step cracking in brick foundations, and bowing basement walls. Many pre-war Rockford homes on the west side and along the Rock River corridor have foundation conditions that range from cosmetically concerning to structurally problematic.
          </p>
          <p className="text-gray-700 mb-4">
            Foundation repairs in Rockford range from $3,000-$5,000 for minor crack sealing to $20,000-$40,000+ for significant structural remediation. City code enforcement issues violation notices for structural safety conditions - including visible foundation instability - and can require owner remediation before habitation. We assess foundation conditions as part of our property evaluation and price them into the offer.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">4. Plumbing - Galvanized Pipe and Aging Sewer Lines</h3>
          <p className="text-gray-700 mb-4">
            Galvanized steel plumbing, standard in homes built before roughly 1960, has a design life of 40-70 years. Rockford's pre-1960 housing stock is well past that range. Galvanized pipe corrodes from the inside out - progressive rust accumulation reduces water pressure, discolors water, and eventually fails. When discovered in a code inspection, the city typically requires replacement. Full re-plumbing in a Rockford house runs $5,000-$15,000 depending on size and access. Orangeburg sewer pipes (bituminized fiber pipe used from the 1940s through the 1970s) also fail with age and are a frequent source of code violations in older Rockford neighborhoods.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">City of Rockford Code Enforcement - The Process</h2>
          <p className="text-gray-700 mb-4">
            The City of Rockford enforces housing codes through its Community Development Department. Rockford enforces the International Property Maintenance Code (IPMC) and the International Building Code (IBC), as adopted and amended by the State of Illinois and the City of Rockford. Enforcement is triggered by complaint, routine inspection of properties flagged by the city, or discovery during other city interactions with the property.
          </p>
          <p className="text-gray-700 mb-4">
            The typical code enforcement sequence:
          </p>
          <ol className="space-y-3 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <div><strong className="text-brand-dark">Inspection and Notice of Violation.</strong> According to City of Rockford (2026), the city inspector identifies violations and issues a written Notice of Violation with a specific cure deadline (typically 30-90 days for minor violations; immediate action for dangerous conditions).</div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <div><strong className="text-brand-dark">Administrative Hearing (if not cured).</strong> If the violation isn't corrected by the deadline, the city schedules an administrative hearing. Civil penalties of up to several hundred dollars per day can be assessed for continued violations.</div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <div><strong className="text-brand-dark">Abatement or Condemnation.</strong> For serious violations, the city can declare a property a dangerous or hazardous structure under Illinois law and issue a condemnation order. The city may perform abatement (clean up or board up) and place a lien against the property for the costs.</div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <div><strong className="text-brand-dark">Demolition Order.</strong> In extreme cases, Rockford can order demolition of structures that cannot be economically rehabilitated and pose a public safety hazard. Demolition orders don't void the underlying real estate - the land remains yours, but the structure is removed at owner's expense (or city's with a lien).</div>
            </li>
          </ol>
          <p className="text-gray-700 mb-4">
            USA Home Buyers can purchase a Rockford property at any of these stages - including properties under condemnation order and those facing demolition notice. We assess the situation accurately and make an offer that reflects the real cost. Call 888-274-5006.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Disclosure Requirements for Code-Violation Properties</h2>
          <p className="text-gray-700 mb-4">
            Under the Illinois Residential Real Estate Disclosure Act (765 ILCS 77/35), sellers must disclose known material defects - including open code violations, condemnation notices, and known structural issues. "Willful concealment" of known defects exposes the seller to post-closing liability. This doesn't mean you need to investigate unknown issues - it means you disclose what you're aware of.
          </p>
          <p className="text-gray-700 mb-4">
            When selling to USA Home Buyers, we request disclosure of what you know, conduct our own assessment of the property, and price our offer accordingly. There are no after-closing surprise claims because we've assessed the condition before buying. The offer is priced for the as-is condition including any known violations.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations and Financing - Why Cash Buyers Are Often the Only Option</h2>
          <p className="text-gray-700 mb-4">
            Open code violations don't just affect the seller - they directly limit the buyer pool. FHA loans require properties to meet minimum property standards (MPS) at the time of appraisal. Any condition that a code enforcement officer has flagged - and many conditions that code enforcement hasn't even visited yet - will surface during an FHA appraisal and require remediation before the loan closes. Conventional loans follow Fannie Mae and Freddie Mac guidelines with similar requirements for habitability and structural integrity.
          </p>
          <p className="text-gray-700 mb-4">
            For Rockford homes with open violations, this means the practical buyer pool collapses to cash buyers and hard-money investors. Per Redfin (March 2026), the compete score of 89/100 and 14-day median DOM applies to the retail-ready segment of Rockford’s inventory - not to the code-violation segment. In Jackson Oaks, Signal Hill, and the West State corridor, a significant share of available inventory falls into the code-violation category, and those homes move through the cash buyer market, not the retail listing market.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers prices violation-condition properties accurately. We assess the repair cost implied by the violation, factor it into our offer, and purchase as-is. You receive a specific written number within 24 hours. No inspection contingency, no repair list, no lender approval required. The path from your decision to closing can be 7 days in Rockford. Call 888-274-5006.
          </p>
          <p className="text-gray-700 mb-4">
            For Rockford homeowners who have received a Notice of Violation from the City of Rockford Community Development Department and cannot fund the required remediation - or who simply want to exit the property rather than invest more into it - a direct sale to USA Home Buyers is the cleanest exit. We buy the property with the violation in place, notify the city of the change of ownership at closing, and handle all remediation afterward. Your slate is clean from closing day forward.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs - Code Violations in Rockford IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/rockford-il', label: '← Back to Rockford IL' },
              { href: '/markets/rockford-il/fire-damage', label: 'Fire Damage' },
              { href: '/markets/rockford-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/rockford-il/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/rockford-il/inherited-property', label: 'Inherited Property' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
              { href: '/markets/springfield-il/code-violations', label: 'Springfield IL Code Violations' },
              { href: '/markets/rockford-il/faq', label: 'Rockford IL FAQ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Rockford IL Property - Code Violations and All?" sourcePage="/markets/rockford-il/code-violations" />
      </div>
    </>
  );
}
