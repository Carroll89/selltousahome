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

const pageUrl = `${SITE_URL}/markets/peoria-il/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Peoria IL — As-Is, No Repairs',
  description:
    'Sell a fire-damaged house in Peoria IL as-is. 24.3% pre-1940 balloon-frame stock. IL OCI insurance claims (215 ILCS 5), ILSFM, FEMA flood zone. Written offer 24 hrs. Call (888) 440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Peoria IL?',
    answer: 'Yes. USA Home Buyers purchases fire and smoke-damaged houses in Peoria and throughout Peoria County — partial damage, total structural loss, smoke-only, or water damage from fire suppression. No cleanup, no repairs, no boarding-up required. We assess and issue a written cash offer within 24 hours. Call (888) 440-5250.',
  },
  {
    question: 'Do I need to resolve my insurance claim before selling?',
    answer: 'No. You can sell the property before, during, or after an insurance claim. Three common approaches: (1) Sell as-is and assign any pending insurance proceeds to the buyer at closing. (2) Collect the settlement first, then sell the unrepaired property. (3) Sell before filing any claim. Each has different financial implications depending on your coverage and damage extent. Call (888) 440-5250 to discuss your specific situation.',
  },
  {
    question: 'What does Illinois law require me to disclose about fire damage?',
    answer: 'Under the Illinois Residential Real Property Disclosure Act, 765 ILCS 77/35, sellers must disclose known material defects including prior fire damage, structural damage, and any known environmental conditions resulting from the fire. Willful concealment of known fire damage can expose the seller to post-closing liability. When selling to USA Home Buyers, you disclose what you know; we assess the property and the offer reflects as-is condition with no post-closing claims.',
  },
  {
    question: 'How does Illinois insurance law apply to my fire damage claim?',
    answer: 'Under 215 ILCS 5/154.5, Illinois prohibits unfair claims settlement practices, including failure to acknowledge claims promptly, inadequate investigation, and unreasonable delay in payment. If your insurer is delaying or disputing your fire damage claim, file a complaint with the Illinois Department of Insurance at insurance.illinois.gov. The OCI enforces 215 ILCS 5/401 et seq. against insurers who violate their settlement obligations.',
  },
  {
    question: 'Should I rebuild or sell my fire-damaged Peoria home?',
    answer: 'The rebuild-versus-sell decision turns on rebuild cost relative to post-rebuild value. For pre-1940 Peoria balloon-frame construction — which represents 24.3% of all Peoria housing units per biggestuscities.com — rebuild costs in fire-damaged structures almost always exceed post-rebuild market value. Balloon-frame fires propagate through wall cavities without firestops, meaning visible surface damage understates total structural involvement. A cash sale captures land value and salvageable structure without rebuild risk.',
  },
  {
    question: 'Does the Illinois Office of the State Fire Marshal have any role after a house fire?',
    answer: 'The Illinois Office of the State Fire Marshal (OSFM) investigates fires of suspicious or unknown origin under 20 ILCS 3105. If the OSFM determines the fire was of incendiary origin, it coordinates with law enforcement and may affect insurance claim processing. For non-suspicious residential fires, the OSFM\'s primary role is record-keeping. Local Peoria Fire Department handles the scene investigation; the OSFM becomes involved for suspected arson. Visit illinoissfm.illinois.gov for OSFM information.',
  },
];

export default function PeoriaFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Fire-Damaged House in Peoria IL — What Homeowners Need to Know', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/peoria-il-hero-640.jpg 640w, /images/optimized/peoria-il-hero-828.jpg 828w, /images/optimized/peoria-il-hero-1080.jpg 1080w, /images/optimized/peoria-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/peoria-il-hero-1200.jpg"
            alt="Peoria IL fire-damaged house — Sell As-Is for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Fire-Damaged House in Peoria IL — As-Is, No Repairs
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Fire-damaged house in Peoria IL? Source: biggestuscities.com confirms 24.3% of Peoria homes are pre-1940 balloon-frame — highest concentration in downstate IL. Per 215 ILCS 5/154.5, insurers must settle claims fairly; file complaints at insurance.illinois.gov. According to 765 ILCS 77/35, sellers disclose known damage. USA Home Buyers buys as-is, any condition. Written offer in 24 hours. Call (888) 440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy fire and smoke-damaged homes in Peoria IL — balloon-frame, total loss, partial damage. No cleanup, no claims settlement required.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — (888) 440-5250 (24/7)
            </a>
          </div>

      <VideoEmbed
        src="/videos/peoria-il/fire-damage.mp4"
        title="Sell a Fire-Damaged House in Peoria IL"
        poster="/videos/peoria-il/fire-damage-poster.jpg"
        subtitle="No restoration required — we buy fire-damaged homes as-is in Peoria County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Fire damage on your Peoria IL property? USA Home Buyers purchases fire-damaged homes in Peoria County as-is. No contractor bids, no delays. Fair cash offer on current condition. Call 888-440-5250.
        </div>
      </details>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer Now" subheadline="We buy fire-damaged Peoria properties as-is. Written offer in 24 hours." sourcePage="/markets/peoria-il/fire-damage" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria's Fire-Damage Profile — Why 24.3% Pre-1940 Matters</h2>
          <p className="text-gray-700 mb-4">
            Peoria has the highest concentration of pre-1940 housing stock of any Illinois market in USA Home Buyers' portfolio. Source: biggestuscities.com confirms that 24.3% of all Peoria housing units were built before 1940 — nearly one in four homes in the city. In the South Peoria, East Bluff, and Manual area neighborhoods, the concentration is even higher. This matters for fire damage in ways that are specific to the construction techniques of that era.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-1940 residential construction in Peoria is predominantly balloon-frame: a technique in which continuous vertical studs run from the sill plate at the foundation all the way to the top plate at the roof, without horizontal firestops at each floor level. This structural characteristic — common to all Midwest working-class housing built before roughly 1940, when platform framing became standard — means that fire starting anywhere in the structure can propagate vertically through wall cavities to the attic with no structural interruption.
          </p>
          <p className="text-gray-700 mb-4">
            The National Fire Protection Association (NFPA, nfpa.org) has documented that balloon-frame structures present dramatically higher fire spread rates than platform-frame buildings. What appears as a contained kitchen fire in a pre-1940 Peoria bungalow frequently involves the attic by the time the fire department arrives — because the flame traveled up through wall voids the homeowner couldn't see. This explains why fire damage assessments on pre-1940 Peoria homes almost always reveal more structural involvement than the initial visible damage suggests.
          </p>
          <p className="text-gray-700 mb-4">
            For homeowners trying to decide between rebuilding and selling, the balloon-frame assessment problem is critical. Per Zillow (February 2026), the Peoria city ZHVI is $115,649. A fire-damaged pre-1940 South Peoria bungalow with apparent moderate damage may require $60,000–$120,000 in full structural remediation — exceeding the pre-fire value of the home. A cash sale captures land value and salvageable structure without the rebuild risk.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Insurance Law — Your Rights After a House Fire</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Unfair Claims Settlement Practices — 215 ILCS 5/154.5</h3>
          <p className="text-gray-700 mb-4">
            Under 215 ILCS 5/154.5, Illinois law prohibits insurers from engaging in unfair claims settlement practices. The statute defines prohibited practices with specificity: failure to acknowledge receipt of claims within a reasonable time; failure to adopt and implement reasonable standards for prompt investigation; failure to affirm or deny coverage within a reasonable time; and not attempting in good faith to effectuate prompt, fair, and equitable settlements of claims when liability is reasonably clear.
          </p>
          <p className="text-gray-700 mb-4">
            If your insurer is delaying investigation, denying coverage without adequate explanation, or offering substantially less than the documented damage supports, these behaviors may constitute violations of 215 ILCS 5/154.5. The Illinois Department of Insurance, which regulates insurers under 215 ILCS 5/401 et seq., handles consumer complaints at insurance.illinois.gov/consumer. Filing a complaint with the Illinois Department of Insurance (OCI) is free and can accelerate insurer response.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Bad Faith Insurance Litigation — 215 ILCS 5/155</h3>
          <p className="text-gray-700 mb-4">
            Under 215 ILCS 5/155, if an insurer refuses to pay a valid claim without reasonable cause, the policyholder may be entitled to attorney's fees, costs, and additional penalties beyond the insurance proceeds. This "bad faith" provision gives policyholders leverage when an insurer unreasonably delays or denies a valid fire damage claim in Illinois. Consult an Illinois insurance attorney if you believe your claim is being handled in bad faith.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Total Loss Determination — Illinois Standards</h3>
          <p className="text-gray-700 mb-4">
            Illinois does not have a fixed statutory percentage threshold for "total loss" — insurers use their own assessments based on repair cost relative to actual cash value or replacement cost (depending on policy type). Under Illinois insurance regulations and 215 ILCS 5/143.13, insurers must clearly communicate their methodology and basis for any settlement offer. If your insurer has declared a total loss, they must pay the agreed-upon coverage amount (subject to policy terms and deductibles). If they have not declared total loss but the repair estimate exceeds value, consult a public adjuster or insurance attorney.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Public Adjusters — Economic Analysis for Peoria</h3>
          <p className="text-gray-700 mb-4">
            A public adjuster is a licensed insurance professional who represents the policyholder (not the insurance company) in negotiating a claim settlement. Public adjusters typically charge 10-15% of the settlement amount. For a Peoria fire damage claim involving a pre-1940 balloon-frame property with $80,000–$120,000 in damages, a public adjuster fee of $8,000–$18,000 may be justified if the adjuster can negotiate a materially better settlement than the insurer's initial offer.
          </p>
          <p className="text-gray-700 mb-4">
            The alternative — selling the fire-damaged property as-is to USA Home Buyers without pursuing an insurance claim — avoids the public adjuster fee and the multi-month claims process entirely. The optimal choice depends on your coverage, the insurer's initial offer, and your timeline. USA Home Buyers can provide a written cash offer within 24 hours that gives you a concrete alternative to compare against an insurance settlement.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Office of the State Fire Marshal (OSFM)</h2>
          <p className="text-gray-700 mb-4">
            The Illinois Office of the State Fire Marshal (OSFM), established under 20 ILCS 3105, has jurisdiction over fire investigation in Illinois. Per illinoissfm.illinois.gov, the OSFM's Fire Investigation Division investigates fires of suspicious or unknown origin in cooperation with local fire departments and law enforcement.
          </p>
          <p className="text-gray-700 mb-4">
            For a residential fire in Peoria, the Peoria Fire Department handles the initial scene investigation. If the origin or cause is unclear, the OSFM may become involved in a joint investigation. An OSFM determination that the fire was of incendiary (arson) origin triggers cooperation with the Peoria Police Department and the Peoria County State's Attorney's Office, and may result in a hold on insurance proceeds pending the criminal investigation.
          </p>
          <p className="text-gray-700 mb-4">
            Note: South Peoria vacant properties are the subject of incendiary fires at above-average rates for a downstate market. Investors purchasing vacant pre-1940 properties in South Peoria should conduct due diligence on fire history through the OSFM Fire Investigation Division and the City of Peoria Fire Department records.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Seller Disclosure Requirements for Fire Damage</h2>
          <p className="text-gray-700 mb-4">
            Under the Illinois Residential Real Property Disclosure Act, 765 ILCS 77/35, sellers of residential real property must disclose to buyers all known material defects — including prior fire damage, structural damage, and any known environmental conditions that resulted from a fire (smoke contamination, water damage, asbestos disturbed during the fire). The disclosure form is mandatory and cannot be waived. Selling "as-is" in Illinois does NOT waive the disclosure obligation — it only means the seller will not make repairs.
          </p>
          <p className="text-gray-700 mb-4">
            Practically: when selling to USA Home Buyers, you complete the Illinois disclosure form identifying all known fire damage and related conditions. We conduct our own assessment and the offer reflects the as-is condition. There are no post-closing surprise claims, disputes, or rescission demands from us based on conditions you disclosed.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">FEMA Flood Zone Consideration for Illinois River Properties</h2>
          <p className="text-gray-700 mb-4">
            Some Peoria properties in low-lying areas adjacent to the Illinois River carry FEMA flood zone designations — typically AE (100-year floodplain) or X (minimal flood hazard). Per fema.gov and the FEMA Flood Map Service Center (msc.fema.gov), flood zone status affects post-fire rebuild financing options for properties in designated flood hazard areas.
          </p>
          <p className="text-gray-700 mb-4">
            A property in a FEMA AE flood zone that suffers substantial fire damage may be subject to the "substantial improvement" rule: if the cost of rebuilding (or repairing) exceeds 50% of the structure's pre-damage market value, the rebuild must bring the entire structure into compliance with current National Flood Insurance Program (NFIP) standards — typically requiring elevating the structure above the base flood elevation. For a pre-1940 Peoria River-adjacent bungalow, this requirement can make rebuilding economically infeasible. A cash sale captures land value without the elevation obligation.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Hazardous Materials in Pre-1940 Peoria Fire Damage</h2>
          <p className="text-gray-700 mb-4">
            Pre-1940 construction in Peoria commonly contains building materials that require special handling when disturbed by fire:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Asbestos</h3>
          <p className="text-gray-700 mb-4">
            Pre-1980 construction — which encompasses virtually all of Peoria's pre-1940 stock — commonly contains asbestos in pipe insulation, floor tiles, ceiling tiles, and roofing materials. When a fire disturbs these materials, asbestos fibers may be released into the air and deposited throughout the structure. Disturbance of asbestos-containing materials during fire or fire suppression activities triggers the requirements of 29 CFR 1926.1101 (OSHA asbestos standard for construction) and EPA's National Emission Standards for Hazardous Air Pollutants (NESHAP) under 40 CFR Part 61, Subpart M.
          </p>
          <p className="text-gray-700 mb-4">
            Remediation of asbestos-contaminated fire damage requires licensed asbestos abatement contractors and compliance with EPA NESHAP notification requirements filed with the Illinois Environmental Protection Agency (IEPA, illinois.gov/agencies/iepa). This adds cost and timeline to any rebuild. When selling as-is to USA Home Buyers, the buyer assumes these obligations — the seller is not required to complete asbestos remediation before the sale.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Lead-Based Paint</h3>
          <p className="text-gray-700 mb-4">
            Under 42 U.S.C. § 4852d (Residential Lead-Based Paint Hazard Reduction Act), sellers of pre-1978 residential property must provide buyers with an EPA-approved disclosure pamphlet and disclose any known lead-based paint hazards. The vast majority of Peoria's housing stock was built before 1978. Fire damage to lead-painted surfaces creates lead dust and debris hazards requiring specialized remediation. USA Home Buyers accepts lead-based paint disclosure and buys the property as-is.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Structural Toxins from Fire Suppression</h3>
          <p className="text-gray-700 mb-4">
            Water used in fire suppression creates secondary damage: saturated wood framing develops mold within 24-48 hours without immediate drying treatment (per CDC guidelines at cdc.gov/niosh). Pre-1940 balloon-frame construction with dense wall framing and horizontal blocking creates numerous water traps that are difficult to dry completely. Mold remediation in fire-damaged structures frequently costs $5,000–$20,000 on top of structural repair costs.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rebuild vs. Sell Decision Framework for Peoria</h2>
          <p className="text-gray-700 mb-4">
            For fire-damaged pre-1940 Peoria properties, the rebuild-versus-sell calculation is almost always straightforward once the full cost picture is assembled:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Factor</th>
                  <th className="text-left p-3">Rebuild</th>
                  <th className="text-left p-3">Sell As-Is</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Timeline</td><td className="p-3">6-18 months minimum</td><td className="p-3">7-14 days</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Structural cost (pre-1940 balloon-frame, moderate fire)</td><td className="p-3">$50,000–$120,000+</td><td className="p-3">$0 (buyer assumes)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Asbestos remediation</td><td className="p-3">$5,000–$20,000</td><td className="p-3">$0 (buyer assumes)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Mold remediation</td><td className="p-3">$5,000–$20,000</td><td className="p-3">$0 (buyer assumes)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Post-rebuild market value</td><td className="p-3">$80,000–$130,000 (Peoria median range)</td><td className="p-3">N/A</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Financing risk</td><td className="p-3">Construction loan required; strict qualification</td><td className="p-3">None (cash buyer)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FEMA flood compliance (if applicable)</td><td className="p-3">May require structure elevation ($20,000–$60,000)</td><td className="p-3">$0 (buyer assumes)</td></tr>
                <tr className="bg-gray-50 font-medium"><td className="p-3">Net outcome (typical South Peoria scenario)</td><td className="p-3 text-red-700">Often negative ROI</td><td className="p-3 text-green-700">Certain cash proceeds</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), Peoria's ZHVI is $115,649. For a South Side or East Bluff pre-1940 property with $70,000–$100,000 in fire remediation costs, rebuilding to deliver a home worth $70,000–$90,000 on the open market is rarely the right financial decision. A cash sale delivers certainty, speed, and proceeds — without the rebuild gamble.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Illinois Property Condition Disclosure Statement and Fire Damage</h2>
          <p className="text-gray-700 mb-4">
            The Illinois Residential Real Property Disclosure Act (765 ILCS 77) requires completion of a Property Condition Disclosure Statement (PCDS) for all residential sales in Illinois. Post-March 2024 amendments under 765 ILCS 77/ expanded the disclosure requirements. The PCDS specifically asks about:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Prior or current fire damage to the property</li>
            <li>Structural defects known to the seller</li>
            <li>Known hazardous materials including asbestos and lead paint</li>
            <li>Prior damage from water (relevant to fire suppression water damage)</li>
            <li>Any material defects not otherwise addressed in the form</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The disclosure is mandatory and cannot be waived. Sellers who willfully conceal known material defects — including fire damage — are exposed to post-closing liability under Illinois law. When selling to USA Home Buyers, you complete the PCDS disclosing what you know. The offer price reflects the as-is condition including disclosed damage.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">City of Peoria Building Permits and Post-Fire Rebuilds</h2>
          <p className="text-gray-700 mb-4">
            Any structural repair or rebuild work on a fire-damaged Peoria property requires building permits from the City of Peoria Building and Zoning Department. The permit process includes: plan review for structural work; electrical permit for rewiring; plumbing permit for plumbing replacement; HVAC permit for mechanical systems. For pre-1940 construction, permit requirements may trigger full code compliance on all affected systems — not just the fire-damaged portions. This "triggered upgrade" requirement is a significant additional cost on top of fire remediation.
          </p>
          <p className="text-gray-700 mb-4">
            Selling to USA Home Buyers before obtaining permits eliminates the permit process for the seller. The buyer assumes all post-sale permit and compliance obligations. For sellers who simply want to exit the property cleanly and quickly, this is a meaningful simplification.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a Fire-Damaged House in Peoria IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/code-violations', label: 'Code Violations' },
              { href: '/markets/peoria-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/peoria-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/peoria-il/foreclosure', label: 'Foreclosure' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Peoria IL Home?" sourcePage="/markets/peoria-il/fire-damage" />
      </div>
    </>
  );
}
