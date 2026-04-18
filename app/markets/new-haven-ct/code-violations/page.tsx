/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/new-haven-ct/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations New Haven CT',
  description:
    'Selling a New Haven CT home with code violations, LCI notices, or condemnation orders? We buy as-is — no repairs required. Cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is New Haven\'s Livable City Initiative (LCI)?',
    answer: "New Haven's Livable City Initiative is the city's housing code enforcement agency. LCI inspects properties, issues notices of code violations, and pursues remediation — including civil penalties, lien placement, and in severe cases, condemnation and demolition orders. LCI is particularly active in New Haven's pre-war housing stock neighborhoods: Fair Haven, The Hill, Newhallville, and Dixwell. Open LCI violations do not prevent a cash sale.",
  },
  {
    question: 'What types of code violations are common in New Haven homes?',
    answer: "New Haven's pre-war housing stock — triple-deckers, Victorian wood-frames, brick row homes — has predictable code violation patterns: lead paint (common in all pre-1978 construction); knob-and-tube wiring (original to many pre-1940 homes); deteriorating exterior (peeling paint, rotted siding, fascia board); exterior stairs/porches in disrepair; failing HVAC systems; asbestos insulation on pipes and ductwork in pre-1980 buildings. All of these are conditions USA Home Buyers buys in — we buy the property as-is, violations and all.",
  },
  {
    question: 'Can a house with an open code violation be sold in New Haven?',
    answer: 'Yes — Connecticut does not require sellers to remediate code violations before selling. A cash buyer like USA Home Buyers buys properties with open LCI violations, outstanding notices, and active enforcement proceedings. We assume the responsibility for remediation after closing. The violations are accounted for in our offer price.',
  },
  {
    question: 'What if the property has a condemnation order in New Haven?',
    answer: 'We buy condemned and uninhabitable properties in New Haven. A condemnation order from LCI or the City of New Haven Building Official means the property has been declared unfit for occupancy — but it can still be sold. Cash buyers who purchase condemned properties assume all remediation obligations. Call 888-440-5250 to discuss your specific property.',
  },
  {
    question: '¿Compran casas con violaciones de código en New Haven? / Code violations in Spanish?',
    answer: 'Sí, hablamos español. Compramos casas con violaciones de código LCI en New Haven — incluyendo Fair Haven, The Hill y Newhallville. No necesita reparar nada antes de vender. Llámenos: 888-440-5250.',
  },
];

export default function NewHavenCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell a New Haven CT Home With Code Violations — Cash Offer, No Repairs Required', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/new-haven-ct-hero-640.jpg 640w, /images/optimized/new-haven-ct-hero-828.jpg 828w, /images/optimized/new-haven-ct-hero-1080.jpg 1080w, /images/optimized/new-haven-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/new-haven-ct-hero-1200.jpg"
            alt="New Haven CT homes — Sell With Code Violations"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/new-haven-ct" className="hover:text-white">New Haven CT</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your New Haven CT Home With Code Violations — No Repairs Required
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                New Haven's Livable City Initiative (LCI) actively enforces code violations on the city's pre-war housing stock. Lead paint, knob-and-tube wiring, structural issues, failed systems — USA Home Buyers buys New Haven properties with open LCI violations as-is. No repairs, no remediation, no waiting for reinspection. Written offer in 24 hours. Call 888-440-5250. Hablamos español.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              Open LCI violations, condemnation orders, blight notices — we buy anyway, as-is.
            </p>
            <p className="text-blue-100 text-sm mb-4">Hablamos español — llamar para ayuda en español. 888-440-5250.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer — Violations OK" subheadline="We buy with open LCI violations. No repairs required." sourcePage="/markets/new-haven-ct/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New Haven Livable City Initiative (LCI) — How Code Enforcement Works</h2>
          <p className="text-gray-700 mb-4">
            New Haven's Livable City Initiative is the city's housing and building code enforcement program. LCI inspectors respond to complaints, conduct proactive inspections in targeted neighborhoods, and issue written notices for code violations. In a city where 70% of housing stock predates 1950, LCI is constantly active — the gap between what New Haven's housing stock looks like and what current codes require is enormous.
          </p>
          <p className="text-gray-700 mb-4">
            LCI enforcement follows a graduated process: initial notice of violation with a remediation deadline; re-inspection; civil penalty assessment if not remediated; placement of a lien on the property for accumulated fines; escalation to condemnation proceedings for the most severely distressed properties. The city also has a blight remediation program targeting properties that detract from neighborhood character.
          </p>
          <p className="text-gray-700 mb-4">
            LCI is particularly concentrated in neighborhoods with the oldest housing stock and the highest distress: Fair Haven, The Hill, Newhallville, and Dixwell. These are also the neighborhoods where USA Home Buyers is most active. We have direct experience with LCI notices, lien situations, and condemnation orders — and we buy through all of them.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Pre-War Housing Stock — Why Code Violations Are Inevitable</h2>
          <p className="text-gray-700 mb-4">
            New Haven's code violation landscape is inseparable from its housing stock. The city's dominant residential architecture — triple-deckers and Victorian wood-frames built 1880–1940 — was never designed to meet 21st-century building codes. Three categories of issues appear repeatedly:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Lead paint.</strong> Every home built before 1978 potentially contains lead-based paint. In New Haven, where the housing stock skews heavily toward 1900–1940 construction, lead paint is nearly universal in the targeted neighborhoods. The CT Department of Public Health (portal.ct.gov/DPH) maintains data on lead poisoning incidents; New Haven has had persistently elevated childhood lead exposure rates compared to state averages. LCI prioritizes lead violations, especially in rental properties where children occupy units.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Knob-and-tube wiring.</strong> Original electrical systems from the early 20th century — two-conductor wiring run through ceramic knobs and through tubing in joists — are still present in some New Haven homes that haven't been rewired since the 1940s or 1950s. Knob-and-tube is not automatically illegal, but it becomes a code violation when it's been altered, overloaded, or covered with insulation (which causes fire risk). Insurance companies frequently refuse coverage for homes with active knob-and-tube wiring.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Structural and exterior deficiencies.</strong> Rotted wood on triple-decker porches and exterior stairs is the most common LCI violation category in Fair Haven and The Hill. A three-story porch with failed railings and rotted decking is both a safety hazard and an LCI target. Failing roofs, deteriorating exterior cladding, and non-functioning HVAC systems round out the most frequent violation types.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers accounts for all of these conditions in our offer. We're not expecting a perfect property. We're looking to close quickly and take on the remediation work ourselves.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Asbestos — Common in New Haven's Pre-1980 Housing Stock</h2>
          <p className="text-gray-700 mb-4">
            Asbestos-containing materials were used in residential construction through the 1970s. In New Haven's pre-1980 housing stock, asbestos is commonly found in pipe insulation, duct insulation, floor tiles (especially 9x9 inch vinyl tiles from the 1950s-1970s), textured ceilings, and roofing materials. Asbestos is not automatically a health risk if it's in good condition and undisturbed — but it becomes a compliance and disclosure issue when the property is being sold or renovated.
          </p>
          <p className="text-gray-700 mb-4">
            Cash buyers like USA Home Buyers account for asbestos remediation in our offer. We don't require sellers to test, encapsulate, or remediate asbestos before closing. We buy the property as-is and manage the abatement ourselves.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">LCI Lien Situation — What Happens to Accumulated Fines</h2>
          <p className="text-gray-700 mb-4">
            When a New Haven property owner doesn't remediate violations after LCI notices, the city can assess civil penalties and eventually place a lien on the property for the accumulated amount. This lien attaches to the title and must be satisfied at or before closing. When USA Home Buyers purchases a property with an LCI lien, the lien is paid off from the sale proceeds at closing — it doesn't have to be resolved by the seller out-of-pocket before we can close.
          </p>
          <p className="text-gray-700 mb-4">
            We account for known liens in our offer. If you're not sure whether your New Haven property has a lien attached, you can search the land records at the New Haven City Clerk's office (165 Church Street, New Haven CT 06510) or through the online land records portal at newhavenct.gov. We can also help you determine this as part of the due diligence process.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">CT State Housing Code — What Governs New Haven Properties</h2>
          <p className="text-gray-700 mb-4">
            New Haven properties are subject to both city (LCI) code enforcement and state housing code requirements. The CT Public Health Code (Sections 19-13-B1 through 19-13-B113) establishes minimum housing standards that apply statewide. The CT Building Code (based on the International Building Code with CT amendments) governs construction standards. LCI enforces both the city's local ordinances and applicable state standards.
          </p>
          <p className="text-gray-700 mb-4">
            For sellers, the key point is simple: open violations don't prevent a cash sale. The violations are disclosed as part of the transaction, accounted for in the offer price, and assumed by the buyer at closing. USA Home Buyers has purchased properties under active condemnation orders, with multiple open LCI notices, with accumulated civil penalties, and in every category of distressed condition New Haven's housing stock produces. Call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">LCI Blight List — Properties on New Haven's Active Enforcement Radar</h2>
          <p className="text-gray-700 mb-4">
            New Haven's Livable City Initiative maintains active enforcement on properties identified as blighted — vacant, deteriorating, or creating neighborhood health and safety issues. Properties on the blight list face escalating enforcement: fines, liens, and ultimately condemnation and City-ordered demolition if the owner doesn't act. The City of New Haven has used its blight remediation program to demolish severely deteriorated properties at owner expense, creating a debt that survives through the estate if the owner is deceased.
          </p>
          <p className="text-gray-700 mb-4">
            Selling before a property reaches advanced blight enforcement status is critical. Once the city has expended funds on emergency remediation or demolition, those costs become a lien that attaches to the property and reduces any sale proceeds. A cash sale while there are open LCI violations — but before the city has incurred remediation costs — preserves more equity for the seller. USA Home Buyers can close quickly to get ahead of escalating enforcement. Call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Lead Paint — New Haven's Most Pervasive Code Issue</h2>
          <p className="text-gray-700 mb-4">
            Lead paint is the single most pervasive code issue in New Haven's pre-war housing stock. The CT Department of Public Health (portal.ct.gov/DPH) tracks childhood blood lead levels; New Haven has historically had elevated rates compared to Connecticut and national averages. LCI prioritizes lead violations, particularly in rental properties where children occupy units, because of the public health significance.
          </p>
          <p className="text-gray-700 mb-4">
            Lead abatement in a Fair Haven or Newhallville triple-decker — full remediation to clear all lead hazards — typically costs $15,000–$35,000 depending on unit count, surface area, and severity. This cost alone is a major barrier to conventional listing for many inherited or distressed New Haven properties. Cash buyers absorb this cost as part of their renovation plan. You sell the property as-is; we handle the abatement after closing. No remediation expense for the seller.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Selling a Code-Violating New Haven Home — Step by Step</h2>
          <p className="text-gray-700 mb-4">
            The process for selling a New Haven property with open code violations to USA Home Buyers is straightforward: call 888-440-5250 or submit the form; describe the property and the known violations; we assess (photos or brief visit); receive a written cash offer within 24 hours; accept and set a closing date; close with a CT real estate attorney in 7–14 days. The violations are documented as known conditions; the deed transfers with the buyer taking responsibility for remediation. Hablamos español.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Seller Disclosure of Code Violations in Connecticut</h2>
          <p className="text-gray-700 mb-4">
            Connecticut's residential property condition disclosure statute (CT Gen Stat §20-327b) requires sellers to disclose known material defects — which includes known code violations. When you sell to USA Home Buyers, we are a cash investor buyer who already knows properties of this type and age carry violations. The disclosure is a confirmation, not a surprise — and it doesn't reduce our offer below the written number. We price for the condition we can see, and we close.
          </p>
          <p className="text-gray-700 mb-4">
            For sellers with code violations in Fair Haven, The Hill, Newhallville, Dixwell, or anywhere in New Haven County: USA Home Buyers buys as-is. No repairs. No remediation before closing. Written offer in 24 hours. Close in 7–14 days. We cover all closing costs including CT's 1.25% conveyance tax. Call 888-440-5250 — hablamos español, servimos a la comunidad hispana de New Haven.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in New Haven CT" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
              { href: '/markets/new-haven-ct/fire-damage', label: 'Fire Damage' },
              { href: '/markets/new-haven-ct/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/new-haven-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
              { href: '/sell-house-fast-connecticut', label: 'CT State Hub' },
              { href: '/markets/bridgeport-ct', label: 'Bridgeport CT' },
              { href: '/guides/sell-house-fast-new-haven-ct-2026', label: 'New Haven Seller Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your New Haven CT Property With Code Violations?" sourcePage="/markets/new-haven-ct/code-violations" />
      </div>
    </>
  );
}
