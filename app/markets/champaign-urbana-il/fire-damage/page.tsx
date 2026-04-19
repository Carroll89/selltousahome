/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Champaign-Urbana IL',
  description:
    'Sell a fire-damaged house in Champaign or Urbana IL as-is. Balloon-frame economics, IL insurance law (215 ILCS 5), UIUC rental fire risk, repair vs. sell decision. 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Champaign-Urbana?',
    answer: 'Yes. USA Home Buyers purchases fire and smoke-damaged houses in Champaign and Urbana in any condition — partial damage, total loss, smoke-only, water damage from fire suppression. You don\'t need to clean up, board up, or make any repairs. Written cash offer within 24 hours. Call (888) 440-5250.',
  },
  {
    question: 'Do I need to resolve the insurance claim before selling?',
    answer: 'No. You can sell before, during, or after the claim process. Options: (1) sell as-is and assign any pending insurance proceeds to the buyer at closing; (2) collect the settlement first, then sell the unrepaired property; (3) sell before filing any claim. Each approach has different financial implications depending on your coverage and damage extent.',
  },
  {
    question: 'What does Illinois law require me to disclose about fire damage?',
    answer: 'Under 765 ILCS 77/35 (Illinois Residential Real Property Disclosure Act), sellers must disclose known material defects including fire damage, smoke damage, and structural issues caused by fire. The form specifically asks about prior damage from fire and smoke. When selling to USA Home Buyers, you disclose what you know; we assess the damage ourselves and our offer reflects the as-is condition. No post-closing surprise claims from our side.',
  },
  {
    question: 'How does the Illinois Department of Insurance handle fire claim disputes?',
    answer: 'Under 215 ILCS 5/154.5, the Illinois Insurance Code prohibits unfair claims settlement practices including failure to acknowledge or investigate claims promptly. Per 215 ILCS 5/401, the Illinois Department of Insurance (insurance.illinois.gov) is the regulatory authority. If your insurer is delaying or disputing your fire damage claim, file a complaint at insurance.illinois.gov/consumer. Per 215 ILCS 5/357.2, policies generally require claims to be paid within 30 days of proof of loss.',
  },
  {
    question: 'Should I rebuild or sell my fire-damaged Champaign-Urbana home?',
    answer: 'The rebuild-vs-sell decision depends on insurance coverage, rebuild cost vs. post-rebuild value, and your timeline. For pre-1940 balloon-frame construction in the University District or Old West Urbana, rebuild costs frequently exceed post-rebuild value for partial-loss fires. UIUC-adjacent rental properties have additional complexity: post-fire code upgrades (sprinklers, electrical, egress windows) are required on rebuilds, adding to cost. Per NeighborhoodScout, approximately 11.29% of Champaign\'s housing stock pre-dates 1939 — this balloon-frame inventory is particularly vulnerable to total-loss economics.',
  },
];

export default function ChampaignUrbanaFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Fire-Damaged House in Champaign-Urbana IL — What Homeowners Need to Know', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1200px)" srcSet="/images/optimized/champaign-urbana-il-hero-1200.jpg" />
          <source media="(min-width: 1080px)" srcSet="/images/optimized/champaign-urbana-il-hero-1080.jpg" />
          <source media="(min-width: 828px)" srcSet="/images/optimized/champaign-urbana-il-hero-828.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/champaign-urbana-il-hero-640.jpg"
            alt="Champaign-Urbana IL home — Sell Fire-Damaged Property As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged Champaign-Urbana Home — As-Is, No Cleanup Required
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases fire-damaged houses in Champaign and Urbana IL — partial loss, total loss, smoke damage, water damage from suppression. IL insurance law: 215 ILCS 5/154.5 (unfair claims practices), IL DOI at insurance.illinois.gov. Disclosure required under 765 ILCS 77. Pre-1940 balloon-frame near UIUC campus: rebuild often exceeds post-rebuild value. No cleanup, no repairs, no insurance settlement required. Written offer in 24 hours. Call (888) 440-5250.
              </p>
            </div>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call (888) 440-5250 — 24/7
            </a>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Fire-Damaged Property Cash Offer"
              subheadline="Any condition, any damage level. Written offer in 24 hours."
              sourcePage="/markets/champaign-urbana-il/fire-damage"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Champaign-Urbana Fire Risk — Why UIUC-Area Housing Is Vulnerable</h2>
          <p className="text-gray-700 mb-4">
            Champaign-Urbana's proximity to UIUC creates a specific fire risk profile that other downstate Illinois markets don't have. The concentration of student housing — dense, wood-frame buildings with high occupant loads, frequent cooking fires, electrical issues from over-loaded circuits, and limited fire prevention investment by investor-landlords — makes Campustown and University District Urbana areas where fire incidents are a documented recurring pattern.
          </p>
          <p className="text-gray-700 mb-4">
            According to NeighborhoodScout (neighborhoodscout.com), approximately 11.29% of Champaign's housing stock pre-dates 1939. These are balloon-frame structures — a 19th and early 20th century construction technique where vertical wall studs run continuously from foundation to roof without fire blocking between floors. In a balloon-frame building, a fire that starts in the wall cavity can spread vertically through the entire structure in minutes, unrestricted by the fire blocking that modern platform-frame construction includes. This is why fire investigators describe balloon-frame fires as having a "chimney effect."
          </p>
          <p className="text-gray-700 mb-4">
            Urbana's University District has a higher concentration of pre-1940 construction than the Champaign city average — the streets immediately adjacent to the UIUC campus on the Urbana side are among the oldest residential blocks in the metro. UIUC itself has published fire safety guidance for students in off-campus housing; the University of Illinois has acknowledged (illinois.edu) the fire risk in older off-campus student housing in its safety communications. Old West Urbana and the University District both have inventory where a partial-loss fire can quickly become a total loss due to the balloon-frame construction method.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Fire Insurance Law — Your Rights and the Claims Process</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">215 ILCS 5 — The Illinois Insurance Code</h3>
          <p className="text-gray-700 mb-4">
            The primary statute governing your insurance rights after a fire is the Illinois Insurance Code, 215 ILCS 5. Relevant provisions for fire damage claimants:
          According to the Illinois Department of Insurance (insurance.illinois.gov), insurers must acknowledge claims promptly and conduct reasonable investigations under 215 ILCS 5/154.5.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>215 ILCS 5/154.5</strong> — Unfair Claims Settlement Practices Act. Prohibits insurers from failing to acknowledge and act reasonably promptly on claims, failing to adopt reasonable standards for investigation, and refusing to pay claims without reasonable investigation. If your insurer is stalling on a fire claim, this statute is the basis for a complaint.</li>
            <li><strong>215 ILCS 5/357.2</strong> — Time for payment of claims. Insurers are generally required to pay valid claims within 30 days of receiving proof of loss, subject to reasonable investigation needs.</li>
            <li><strong>215 ILCS 5/401 et seq.</strong> — The Illinois Department of Insurance (insurance.illinois.gov) is the regulatory authority. The Department handles consumer complaints, investigates unfair claims practices, and can mandate corrective action against insurers.</li>
            <li><strong>215 ILCS 5/143.13</strong> — Replacement cost coverage. Policies providing replacement cost coverage must pay the replacement cost, not just actual cash value, when the policyholder rebuilds or replaces the damaged property. Actual cash value = replacement cost minus depreciation.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Per the Illinois Department of Insurance (insurance.illinois.gov/consumer), if you believe your insurer is handling your fire claim improperly, file a complaint at insurance.illinois.gov. The Department investigates complaints and has authority to require corrective action.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">765 ILCS 77 — Mandatory Disclosure of Fire Damage</h3>
          <p className="text-gray-700 mb-4">
            Under the Illinois Residential Real Property Disclosure Act (765 ILCS 77/35), sellers must disclose known material defects on the Illinois Property Condition Disclosure Statement. The form specifically asks about prior damage from fire, smoke, or water. Failure to disclose known fire damage creates post-closing liability under 765 ILCS 77/55, which provides for rescission and damages for willful concealment.
          </p>
          <p className="text-gray-700 mb-4">
            When selling to USA Home Buyers, the disclosure obligation is straightforward: you tell us what you know about the fire, and we assess the damage ourselves. Our offer price reflects the as-is condition including all fire and smoke damage. We do not bring post-closing claims for conditions disclosed on the PCDS form.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">40 ILCS 5 — IL Fire Insurance Lien on Proceeds</h3>
          <p className="text-gray-700 mb-4">
            Under Illinois law (40 ILCS 5/22-310), if you have an outstanding mortgage, the lender typically has a claim on fire insurance proceeds under the mortgage's standard mortgage clause (also called the "mortgagee clause"). The mortgage requires the borrower to maintain property insurance and grants the lender rights in insurance proceeds. This means your insurer may be required to make the insurance check payable jointly to you and your mortgage servicer. Coordinate with your servicer about how proceeds will be handled.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Balloon-Frame Economics — The Rebuild Decision in Champaign-Urbana</h2>
          <p className="text-gray-700 mb-4">
            The economic analysis of "rebuild vs. sell as-is" for a Champaign-Urbana fire-damaged property depends heavily on whether the structure uses balloon-frame or modern platform-frame construction. For pre-1940 University District Urbana or Old West Urbana homes, the analysis almost always favors selling.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Rebuild Cost Drivers for Pre-1940 C-U Homes</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Fire blocking and modern code compliance:</strong> When rebuilding a fire-damaged pre-1940 structure, the International Residential Code (IRC), as adopted by both the City of Champaign (champaignil.gov) and the City of Urbana (urbanaillinois.us), requires bringing the rebuilt portions into compliance with current code — including fire blocking between floors, which was absent in balloon-frame construction.</li>
            <li><strong>Electrical upgrade requirement:</strong> Per the National Electrical Code (NFPA 70) as adopted in Illinois, rebuilding fire-damaged spaces requires bringing electrical systems to current NEC standards — not just replacing what was there. In pre-1940 homes with knob-and-tube wiring, this means full electrical replacement.</li>
            <li><strong>Lead paint and asbestos disturbance:</strong> Pre-1978 buildings may have lead-based paint; pre-1980 buildings may have asbestos-containing materials. Per the U.S. EPA's Renovation, Repair and Painting Rule (40 CFR Part 745) and Illinois EPA asbestos regulations (415 ILCS 5), disturbing these materials during fire restoration triggers specific handling and disposal requirements that significantly increase contractor costs.</li>
            <li><strong>Historic district requirements in Urbana:</strong> If the fire-damaged property is in Urbana's Historic District, the rebuilt exterior must conform to historic design guidelines — prescriptive material requirements that increase costs beyond standard code-compliant reconstruction.</li>
            <li><strong>Rental property sprinkler requirements:</strong> In Champaign-Urbana student housing areas, UIUC and local fire marshals have increasingly pushed for automatic fire sprinkler systems in rental properties. Per the Illinois State Fire Marshal (sfm.illinois.gov), certain occupancy types in Illinois require sprinkler systems in new or substantially rebuilt structures — adding $8,000-$15,000 to a typical house rebuild cost.</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">The Post-Fire Repair vs. Sell Decision Matrix</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Situation</th>
                  <th className="text-left p-3">Rebuild Recommendation</th>
                  <th className="text-left p-3">Sell As-Is Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Pre-1940 balloon-frame, partial loss (&gt;30% of structure)</td><td className="p-3 text-red-700">Usually not recommended — cost overruns, code upgrades</td><td className="p-3 text-green-700">Strong — land value + salvage often exceeds rebuild economics</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Post-1970 platform frame, partial loss (&lt;30%)</td><td className="p-3 text-green-700">May be viable — simpler code compliance</td><td className="p-3 text-green-700">Also viable — depends on coverage and market</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Total loss (foundation viable)</td><td className="p-3 text-yellow-700">Consider carefully — full replacement cost required</td><td className="p-3 text-green-700">Cash sale of lot + salvage; insurance proceeds kept by seller</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">UIUC rental, Campustown location</td><td className="p-3 text-yellow-700">Viable if strong rental cash flow supports rebuild debt</td><td className="p-3 text-green-700">Cash sale often simplest; investor buyer knows rental value</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">South Urbana working-class, total loss</td><td className="p-3 text-red-700">Not recommended — land value may not support new construction</td><td className="p-3 text-green-700">Strong — land + insurance proceeds, move forward</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Fire Marshal and Local Authority Obligations</h2>
          <p className="text-gray-700 mb-4">
            After a residential fire in Champaign or Urbana, you will typically deal with multiple government entities:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Illinois State Fire Marshal (sfm.illinois.gov):</strong> Under 20 ILCS 2905 (Office of State Fire Marshal Act), the State Fire Marshal oversees fire safety standards and investigation. For Champaign-Urbana residential properties, local fire marshals (Champaign Fire Department or Urbana Fire Department) are the primary investigators, with state involvement in cases with fatalities or suspicious origin.</li>
            <li><strong>City of Champaign Fire Department / City of Urbana Fire Department:</strong> Investigate fires; may issue orders to secure or demolish structurally unsafe buildings post-fire. Both are the local authority having jurisdiction (AHJ) for fire code compliance under the International Fire Code adopted in Illinois.</li>
            <li><strong>City of Champaign Building Safety Division / City of Urbana Community Development:</strong> After a fire, the building department will typically issue a placard (yellow or red) indicating whether the structure is safe to occupy, restricted, or unsafe. A red-tagged structure cannot legally be occupied; a yellow tag means restricted access. Per the International Building Code (IBC) as adopted (champaignil.gov for Champaign; urbanaillinois.us for Urbana), demolition or rehabilitation permits are required for significant post-fire work.</li>
            <li><strong>Illinois EPA (iepa.illinois.gov):</strong> Under 415 ILCS 5 (Illinois Environmental Protection Act), demolition or renovation of pre-1980 structures may require asbestos surveys and abatement under NESHAP (National Emission Standards for Hazardous Air Pollutants). Asbestos-containing materials (ACM) disturbed during fire restoration must be handled by licensed Illinois EPA contractors.</li>
            <li><strong>U.S. EPA Lead Paint Rule (40 CFR Part 745):</strong> Renovation of pre-1978 residential properties, including fire restoration, requires compliance with the Lead Renovation, Repair and Painting Rule. Licensed renovation contractors must use lead-safe work practices.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a Fire-Damaged Champaign-Urbana Home — Your Options</h2>
          <p className="text-gray-700 mb-4">
            You have three realistic paths after a fire-damaged property in Champaign or Urbana:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-3">
            <li><strong>Sell as-is to a cash buyer (USA Home Buyers).</strong> We make a written offer within 24 hours. The offer accounts for the fire damage, the market value of the land, and the value of any salvageable structure. No insurance settlement required first. No cleanup, no boarding up, no permits. You keep any insurance proceeds; we buy what the property is worth in current condition. Fastest resolution.</li>
            <li><strong>Collect insurance, then sell.</strong> Let the insurance claim run its course, collect actual cash value or replacement cost per your policy (215 ILCS 5/143.13), then sell the property in its post-fire unrepaired state. The insurance proceeds are yours; the cash buyer's offer reflects the actual physical condition. This approach works well if the insurance process is moving quickly and you don't need immediate resolution.</li>
            <li><strong>Rebuild.</strong> Use insurance proceeds plus personal funds to rebuild. Pre-1940 balloon-frame structures in Urbana's University District and Old West Urbana make this the most expensive and risky option — code upgrades, historic district requirements, lead and asbestos abatement, and sprinkler system requirements often push rebuild costs well above post-rebuild value.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            For the overwhelming majority of Champaign-Urbana fire-damage situations — particularly pre-1940 construction near the UIUC campus — a cash sale is the fastest, most financially rational resolution.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Fire-Damaged Properties in Champaign-Urbana IL" />

        <section className="my-8">
          <div className="bg-brand-light rounded-xl p-5">
            <h3 className="font-semibold text-brand-dark mb-3">Key Legal and Regulatory References — Champaign-Urbana Fire Damage</h3>
            <ul className="text-sm text-gray-700 space-y-1 columns-2">
              <li>• 215 ILCS 5/154.5 — Unfair claims practices (illinois.gov)</li>
              <li>• 215 ILCS 5/401 — IL Dept. of Insurance authority (insurance.illinois.gov)</li>
              <li>• 215 ILCS 5/357.2 — 30-day claims payment requirement</li>
              <li>• 215 ILCS 5/143.13 — Replacement cost coverage</li>
              <li>• 765 ILCS 77/35 — IL Property Condition Disclosure (ilga.gov)</li>
              <li>• 40 ILCS 5 — Insurance proceeds / mortgage lien</li>
              <li>• 20 ILCS 2905 — IL State Fire Marshal (sfm.illinois.gov)</li>
              <li>• 415 ILCS 5 — IL Environmental Protection Act (iepa.illinois.gov)</li>
              <li>• 40 CFR Part 745 — EPA Lead RRP Rule (epa.gov)</li>
              <li>• champaignil.gov — City of Champaign Building Safety Division</li>
              <li>• urbanaillinois.us — City of Urbana Community Development</li>
              <li>• illinois.edu — UIUC off-campus fire safety guidance</li>
              <li>• neighborhoodscout.com — 11.29% pre-1939 housing stock (Champaign)</li>
              <li>• sfm.illinois.gov — IL State Fire Marshal sprinkler standards</li>
            </ul>
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Champaign-Urbana Property?" sourcePage="/markets/champaign-urbana-il/fire-damage" />
      </div>
    </>
  );
}
