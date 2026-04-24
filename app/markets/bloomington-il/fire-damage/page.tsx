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

const pageUrl = `${SITE_URL}/markets/bloomington-il/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Bloomington IL',
  description:
    "Sell a fire-damaged house in Bloomington IL as-is. Founders' Grove balloon-frame, IL insurance law (215 ILCS 5), 765 ILCS 77 disclosure. State Farm city — unique insurance context. Call 888-274-5006.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Bloomington IL?',
    answer: "Yes. USA Home Buyers purchases fire and smoke-damaged houses in Bloomington and throughout McLean County in any condition — partial damage, total loss, smoke-only damage, water damage from fire suppression. You don't need to clean up, board up, or make any repairs. We assess the property and make a written cash offer within 24 hours. Per Zillow (February 2026), the Bloomington ZHVI is $228,634 — even a significantly fire-damaged home retains land value and structural value that we can price. Call (888) 274-5006.",
  },
  {
    question: 'Does my fire insurance claim need to be resolved before I sell?',
    answer: "No. You can sell the fire-damaged property before, during, or after the insurance claim process. Common approaches: (1) Sell as-is and assign any pending insurance proceeds to the buyer at closing. (2) Collect the insurance settlement first, then sell the partially or fully unrepaired property to a cash buyer. (3) Sell before any insurance claim is filed. Under Illinois insurance law (215 ILCS 5/), your policy benefits are a separate asset from the property itself. The Illinois Department of Insurance (insurance.illinois.gov) regulates insurer conduct under 215 ILCS 5/154.5 — unfair claims settlement practices including unreasonable delays are prohibited. Call (888) 274-5006.",
  },
  {
    question: 'What must I disclose about fire damage when selling in Bloomington IL?',
    answer: "Under the Illinois Residential Real Property Disclosure Act, 765 ILCS 77/35, sellers must disclose all known material defects including fire damage, smoke damage, and water damage from fire suppression. The mandatory Property Condition Disclosure Statement (PCDS) asks specifically about prior damage from fire, flooding, or other casualty events. Willful concealment of known fire damage exposes the seller to post-closing liability. When selling to USA Home Buyers, you disclose what you know; we assess the damage independently, and our offer reflects the as-is fire-damaged condition. No after-closing surprise claims from us.",
  },
  {
    question: 'What is Illinois insurance law regarding fire damage claims?',
    answer: "Illinois insurance law under 215 ILCS 5/154.5 (Illinois Insurance Code) prohibits unfair claims settlement practices by insurers, including failure to acknowledge claims promptly, inadequate investigation, and unreasonable delay in payment. The Illinois Department of Insurance (insurance.illinois.gov) is the regulatory authority under 215 ILCS 5/401 et seq. If your insurer is delaying or disputing your fire damage claim, file a complaint at the IDI's consumer portal. Illinois also requires insurers to pay the greater of actual cash value or replacement cost value (depending on policy type) for a covered total loss. Source: 215 ILCS 5/155.04 (replacement cost provisions).",
  },
  {
    question: "Why is fire damage especially complicated in Bloomington's historic neighborhoods?",
    answer: "Founders' Grove Historic District and West Bloomington/Sunset Hills contain substantial balloon-frame construction — a pre-1910 building method that uses continuous wall studs from foundation to roofline with no horizontal fire blocking. Per the National Fire Protection Association (nfpa.org), balloon-frame structures spread fire through wall cavities faster than platform-frame construction. Post-fire rebuild costs in balloon-frame structures often exceed the post-rebuild market value — the frame must be rebuilt from scratch with modern platform framing, which is more expensive than a like-for-like replacement. Pre-1978 homes require lead paint disclosure per the U.S. Environmental Protection Agency (epa.gov/lead) regulations; post-fire demolition and rebuilding in pre-1978 structures triggers lead-safe renovation protocols under EPA 40 CFR Part 745.",
  },
  {
    question: 'Should I rebuild or sell my fire-damaged Bloomington home?',
    answer: "The rebuild-vs-sell decision depends on your insurance coverage, rebuild cost estimate vs. post-rebuild value, and your timeline. Per the Insurance Information Institute (iii.org), the average fire claim involves significant structural damage. For Founders' Grove balloon-frame Victorians and West Bloomington pre-war homes, rebuild costs frequently exceed post-rebuild market value — particularly after accounting for the City of Bloomington Historic Preservation Commission requirements for exterior reconstruction in historic districts. A direct as-is sale captures the land value and remaining structural value without rebuild risk, financing complexity, and the multi-year construction timeline.",
  },
];

export default function BloomingtonFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema("Selling a Fire-Damaged House in Bloomington IL — The Insurance-Capital Context", pageUrl, '2026-04-19'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <picture>
          <source media="(min-width: 1200px)" srcSet="/images/optimized/bloomington-il-hero-1200.jpg" />
          <source media="(min-width: 1080px)" srcSet="/images/optimized/bloomington-il-hero-1080.jpg" />
          <source media="(min-width: 828px)" srcSet="/images/optimized/bloomington-il-hero-828.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bloomington-il-hero-640.jpg"
            alt="Bloomington IL fire-damaged home — Sell As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
          </div>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged Bloomington IL House — As-Is, No Repairs, No Insurance Required
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Selling a fire-damaged home in Bloomington IL — the insurance capital of downstate Illinois — with full statutory context. Illinois requires disclosure under 765 ILCS 77/35; regulates insurer conduct under 215 ILCS 5/154.5 (Illinois Insurance Code); prohibits unfair claims practices under 215 ILCS 5/401 et seq. (Illinois Department of Insurance, insurance.illinois.gov). Founders&apos; Grove balloon-frame construction accelerates fire spread per NFPA guidance (nfpa.org). Pre-1978 lead paint protocols apply under EPA 40 CFR Part 745 (epa.gov/lead). USA Home Buyers purchases fire-damaged Bloomington properties as-is. Written offer in 24 hours. Call (888) 274-5006.
              </p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 (888) 274-5006 — 24/7
            </a>
          </div>

      <VideoEmbed
        src="/videos/bloomington-il/fire-damage.mp4"
        title="Sell a Fire-Damaged House in Bloomington IL"
        poster="/videos/bloomington-il/fire-damage-poster.jpg"
        subtitle="No restoration required — we buy fire-damaged homes as-is in McLean County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Fire damage on your Bloomington IL property? USA Home Buyers purchases fire-damaged homes in McLean County as-is. No contractor estimates, no delays. Cash offer on current condition. Call 888-274-5006.
        </div>
      </details>
          <CashOfferForm
            variant="hero"
            headline="Get Your Fire-Damage Cash Offer"
            subheadline="We buy fire-damaged Bloomington homes as-is. No insurance required before closing."
            sourcePage="/markets/bloomington-il/fire-damage"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Bloomington Is the Insurance Capital of Downstate Illinois — and That Changes How Fire-Damage Sales Work</h2>
          <p className="text-gray-700 mb-4">
            Bloomington, Illinois is where State Farm Insurance has operated its world headquarters since 1922. State Farm is the largest mutual insurer in the United States by premium volume per its corporate website (statefarm.com). Country Financial, another national property and casualty insurer, is also headquartered here. The practical implication for a Bloomington homeowner navigating a fire-damage claim: the adjusters, the actuaries, and the claims-processing infrastructure are headquartered in the same city as your house.
          </p>
          <p className="text-gray-700 mb-4">
            This creates an unusual dynamic. A Bloomington homeowner filing a fire insurance claim is, in many cases, doing business with an insurer whose claims department literally operates from the same city. State Farm's Bloomington claims operations, while restructured post-pandemic, remain a significant local presence. The local knowledge and technical resources State Farm brings to a Bloomington fire claim are more sophisticated than what you'll encounter from regional claims offices in smaller insurance markets.
          </p>
          <p className="text-gray-700 mb-4">
            For homeowners who prefer to sell rather than navigate a complex insurance claim and rebuild process, the insurance-capital context actually provides more options: Bloomington's insurance professional community means there are qualified adjusters, public adjusters, and insurance attorneys locally who can advise on claims values before a sale decision is made.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Insurance Law — Your Rights as a Fire-Damaged Property Owner</h2>
          <p className="text-gray-700 mb-4">
            Illinois property insurance claims are governed by the Illinois Insurance Code, 215 ILCS 5 et seq. Several specific provisions protect policyholders:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>215 ILCS 5/154.5 — Unfair Claims Settlement Practices:</strong> Prohibits insurers from failing to acknowledge claims promptly, conducting inadequate investigations, failing to pay valid claims within a reasonable time, and making lowball settlement offers without factual justification. Source: Illinois General Assembly (ilga.gov) — 215 ILCS 5/154.5.</li>
            <li><strong>215 ILCS 5/401 et seq. — Illinois Department of Insurance Regulatory Authority:</strong> The Illinois Department of Insurance (IDI) is the regulatory body for insurer conduct. Consumer complaints can be filed at insurance.illinois.gov. The IDI investigates unfair claims practices and can impose sanctions on insurers. Source: Illinois Department of Insurance (insurance.illinois.gov).</li>
            <li><strong>215 ILCS 5/155.04 — Replacement Cost Provisions:</strong> Illinois law requires insurers to pay replacement cost value (not just actual cash value) when replacement cost coverage is included in the policy and the insured actually repairs or replaces the damaged property. If you sell the property rather than rebuilding, your policy may pay only actual cash value for the damaged portion. Review your policy terms or consult an insurance attorney.</li>
            <li><strong>765 ILCS 77/35 — Mandatory Disclosure (Illinois Residential Real Property Disclosure Act):</strong> Sellers must disclose known fire damage on the mandatory PCDS form. The form specifically asks about prior casualty damage. Source: Illinois General Assembly (ilga.gov) — 765 ILCS 77/.</li>
            <li><strong>Lead Paint — EPA Regulation (40 CFR Part 745):</strong> Pre-1978 homes require a lead paint disclosure under federal EPA rules (epa.gov/lead). Post-fire demolition and renovation in pre-1978 homes must follow EPA's Renovation, Repair and Painting (RRP) Rule — lead-safe work practices, certified contractors. Source: U.S. Environmental Protection Agency (epa.gov).</li>
            <li><strong>Asbestos — OSHA 29 CFR 1926.1101:</strong> Pre-1980 homes may contain asbestos-containing materials. Demolition or renovation that disturbs asbestos requires compliance with OSHA standards (osha.gov) and EPA National Emission Standards for Hazardous Air Pollutants (NESHAP), 40 CFR Part 61, Subpart M. Source: Occupational Safety and Health Administration (osha.gov).</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Founders' Grove and West Bloomington — The Balloon-Frame Fire Risk</h2>
          <p className="text-gray-700 mb-4">
            Bloomington's historic neighborhoods contain a significant percentage of balloon-frame construction — a building method used in homes constructed before approximately 1910. In balloon framing, the exterior wall studs run continuously from the foundation sill plate to the roofline without horizontal blocking at the floor levels. This creates vertical open cavities within the wall structure that act as chimneys during a fire.
          </p>
          <p className="text-gray-700 mb-4">
            Per the National Fire Protection Association (nfpa.org), balloon-frame structures are particularly dangerous for fire spread because wall cavity fires travel from the basement to the attic in minutes. The NFPA has published extensively on the fire hazards of balloon-frame construction relative to modern platform framing. For Founders' Grove Victorians and West Bloomington pre-1910 homes, a fire that begins in the basement or first floor can be in the attic within 5-10 minutes — well before fire suppression arrives.
          </p>
          <p className="text-gray-700 mb-4">
            The rebuild economics for balloon-frame fire damage are unfavorable. A modern rebuild requires platform framing with full horizontal blocking and modern insulation standards per the International Residential Code (IRC), adopted by the City of Bloomington. Per the Insurance Information Institute (iii.org), average fire reconstruction costs for structures this size typically run $150-$200+ per square foot in the current construction market. A 1,800-square-foot Founders' Grove Victorian at full rebuild cost may approach $270,000-$360,000 in construction alone — before Historic Preservation Commission review, permit fees, and design professional costs.
          </p>
          <p className="text-gray-700 mb-4">
            Compared to a Bloomington ZHVI of $228,634, these rebuild costs can easily exceed the post-rebuild market value of the property. For many Founders' Grove fire-damage homeowners, the economic calculation points clearly toward selling the damaged property rather than managing a rebuild.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Pre-1978 Lead Paint and Pre-1980 Asbestos — The Post-Fire Hazard Layer</h2>
          <p className="text-gray-700 mb-4">
            Fire-damaged homes in Bloomington's older neighborhoods carry an additional hazard layer that affects both the sale and the rebuild decision.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Lead Paint (Pre-1978):</strong> Under the federal Residential Lead-Based Paint Hazard Reduction Act (42 U.S.C. § 4851 et seq.) and EPA regulations at 40 CFR Part 745 (epa.gov/lead), sellers of pre-1978 homes must provide buyers with a lead paint disclosure form and any known lead test results. Post-fire, disturbed lead paint in smoke, ash, and demolition debris creates additional exposure hazards. The EPA's Renovation, Repair and Painting (RRP) Rule requires contractors performing work on pre-1978 homes to be EPA-certified and to follow lead-safe work practices. Source: U.S. EPA, epa.gov/lead.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Asbestos (Pre-1980):</strong> Bloomington homes built before 1980 may contain asbestos in floor tiles, pipe insulation, popcorn ceilings, roofing materials, and joint compound. Per OSHA standards (29 CFR 1926.1101) and EPA NESHAP (40 CFR Part 61, Subpart M), renovation or demolition activities that disturb suspected asbestos-containing materials require an asbestos survey before work begins, and abatement by certified contractors if asbestos is present. Fire-damaged homes where structural elements have been compromised may require asbestos abatement before any demolition work can proceed. Source: Occupational Safety and Health Administration, osha.gov; U.S. EPA, epa.gov.
          </p>
          <p className="text-gray-700 mb-4">
            These hazard layers add cost and complexity to any rebuild or renovation in Bloomington's pre-1980 housing stock. For a seller managing a fire claim, a post-fire as-is cash sale transfers both the hazard abatement obligation and the rebuild complexity to a buyer equipped to handle them.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Historic District Reconstruction — The HPC Approval Layer</h2>
          <p className="text-gray-700 mb-4">
            For fire-damaged properties in the Founders' Grove Historic District or any of Bloomington's four other historic districts, post-fire reconstruction faces an additional approval layer. The Bloomington Historic Preservation Commission (HPC) must approve exterior modifications on historic-district properties. Per guidelines from the National Trust for Historic Preservation (savingplaces.org) and consistent with the U.S. Department of the Interior's Standards for Rehabilitation (nps.gov/subjects/historicpreservation), reconstruction must preserve or replicate the historic character of the structure.
          </p>
          <p className="text-gray-700 mb-4">
            This means a fire-damaged Founders' Grove Victorian cannot be rebuilt with vinyl siding, modern windows, and a simplified roofline — at least not without HPC review and potential denial. In-kind reconstruction with historically appropriate materials (wood siding, wood windows, period-appropriate details) costs significantly more than conventional post-fire reconstruction. The HPC process adds weeks to months to the permitting timeline. Some fire-damage homeowners in historic districts find the HPC process prohibitively complex and prefer to sell the damaged structure rather than navigate a multi-agency reconstruction process.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Fire Insurance and the Sell-vs-Rebuild Decision Framework</h2>
          <p className="text-gray-700 mb-4">
            Per the Insurance Information Institute (iii.org), the average homeowner fire insurance claim in the U.S. results in a payout significantly below the full rebuild cost in cases of total or major loss — particularly when the policy covers actual cash value (ACV) rather than replacement cost value (RCV). The distinction:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Coverage Type</th>
                  <th className="text-left p-3">What It Pays</th>
                  <th className="text-left p-3">Implication for Older Bloomington Homes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Actual Cash Value (ACV)</td><td className="p-3">Replacement cost minus depreciation</td><td className="p-3">For a 100-year-old Founders' Grove Victorian, ACV may be far below full rebuild cost due to high depreciation applied to aged materials</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Replacement Cost Value (RCV)</td><td className="p-3">Full cost to rebuild in kind — paid in stages (ACV first, remainder when rebuild begins)</td><td className="p-3">RCV payment requires actual rebuild to occur; if you sell rather than rebuild, you typically receive only ACV per 215 ILCS 5/155.04</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Extended Replacement Cost</td><td className="p-3">RCV plus a percentage buffer for cost overruns</td><td className="p-3">Best coverage for older homes where rebuild costs are unpredictable; not all policies include this</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            The Illinois Department of Insurance recommends reviewing your policy declaration page and consulting with a licensed insurance attorney or public adjuster before deciding to sell vs. rebuild. Source: Illinois Department of Insurance, insurance.illinois.gov.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">ISU-Area Rental Fire Damage — A Specific Bloomington Scenario</h2>
          <p className="text-gray-700 mb-4">
            Fire damage in Bloomington's ISU-adjacent rental corridors — Veterans Parkway, Indiana Ave, Eastview — creates a compound problem. A landlord whose rental property has fire damage from tenant-caused incident faces:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
            <li>The property is uninhabitable — rental income is lost during the claims and remediation period</li>
            <li>The tenant-caused damage may or may not be covered depending on whether the policy covers tenant negligence</li>
            <li>The landlord may have recourse against the tenant for damages under the lease, but recovering from a student tenant is often impractical</li>
            <li>The landlord is responsible for compliance with Illinois landlord-tenant law regarding notification to displaced tenants</li>
            <li>Rebuilding requires compliance with current building code — often a significant upgrade vs. the pre-fire condition of a 1960s rental property</li>
          </ol>
          <p className="text-gray-700 mb-4">
            For a tired landlord already contemplating exit, a tenant-caused fire is often the triggering event that makes a cash as-is sale the most rational outcome. USA Home Buyers purchases fire-damaged rental properties in the ISU area and throughout Bloomington without requiring any cleanup, repairs, or insurance claim resolution before closing.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Fire-Damaged Property in Bloomington IL — Frequently Asked Questions" />

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Key Citations — This Page</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 215 ILCS 5/154.5 — Illinois Insurance Code, unfair claims settlement practices (ilga.gov)</li>
            <li>• 215 ILCS 5/401 et seq. — Illinois Department of Insurance regulatory authority (insurance.illinois.gov)</li>
            <li>• 215 ILCS 5/155.04 — Replacement cost provisions (ilga.gov)</li>
            <li>• 765 ILCS 77/35 — IL Residential Real Property Disclosure Act (ilga.gov)</li>
            <li>• 40 CFR Part 745 — EPA Lead-Based Paint Renovation Rule (epa.gov/lead)</li>
            <li>• 40 CFR Part 61, Subpart M — EPA NESHAP Asbestos standards (epa.gov)</li>
            <li>• 29 CFR 1926.1101 — OSHA Asbestos Standard for Construction (osha.gov)</li>
            <li>• National Fire Protection Association — balloon-frame fire hazards (nfpa.org)</li>
            <li>• Insurance Information Institute — fire claim data (iii.org)</li>
            <li>• U.S. DOI Standards for Rehabilitation — historic district reconstruction (nps.gov/subjects/historicpreservation)</li>
            <li>• State Farm Insurance — HQ Bloomington (statefarm.com)</li>
            <li>• Illinois IDOR — transfer tax (tax.illinois.gov)</li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Sell Your Fire-Damaged Bloomington IL Property — As-Is" sourcePage="/markets/bloomington-il/fire-damage" />
      </div>
    </>
  );
}
