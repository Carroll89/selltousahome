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

const pageUrl = `${SITE_URL}/markets/new-haven-ct/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House New Haven CT — Cash As-Is',
  description:
    'Selling a fire-damaged home in New Haven CT? We buy as-is — no cleanup, no repairs, no insurance claim required. Written cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Do you buy fire-damaged houses in New Haven CT?',
    answer: 'Yes — USA Home Buyers purchases fire-damaged properties in New Haven CT as-is. No cleanup, no repair requirement, no insurance claim required. We assess the property in its current condition, account for the fire damage in our offer, and close in 7–14 days. Call 888-440-5250.',
  },
  {
    question: 'Do I have to disclose fire damage when selling a New Haven home?',
    answer: 'Yes. Connecticut has a residential property disclosure statute (CT Gen Stat §20-327b) that requires sellers to disclose known material defects, including fire damage, smoke damage, and structural damage resulting from fire. This disclosure obligation applies to all residential property sales. A cash buyer like USA Home Buyers already accounts for the fire damage in our offer — the disclosure doesn\'t prevent a sale, it just confirms what both parties already know about the property condition.',
  },
  {
    question: 'What happens to my homeowner\'s insurance claim after a fire in New Haven?',
    answer: 'Under CT Gen Stat §38a-307, Connecticut insurers must acknowledge receipt of a claim promptly and must complete their investigation within a reasonable time. You are not required to complete an insurance claim before selling the property — you can sell as-is to a cash buyer and assign any outstanding insurance claim proceeds to the buyer, or retain the claim proceeds yourself if the insurer pays them directly to you. Discuss this with your insurance adjuster and attorney before closing.',
  },
  {
    question: 'Can I sell a fire-damaged house that\'s been condemned by the City of New Haven?',
    answer: "Yes. A condemnation order from the City of New Haven means the property has been declared unfit for occupancy — it doesn't mean the property can't be sold. USA Home Buyers purchases condemned, uninhabitable properties in New Haven. We assume all remediation obligations. The condemnation order is disclosed in the title search and accounted for in our offer.",
  },
  {
    question: 'What are the most common fire risks in New Haven\'s pre-war housing stock?',
    answer: "New Haven's pre-war wood-frame homes have specific fire risk factors: knob-and-tube wiring (overloaded circuits, no grounding); old oil-fired boilers with deteriorating flue pipes; wood-frame construction with balloon framing (no fire stops between floors — fire travels rapidly); and accumulated deferred maintenance on chimneys and fireplaces. The CT State Fire Marshal's office (portal.ct.gov/DPS) maintains fire safety resources and data.",
  },
  {
    question: '¿Compran casas con daños de fuego en New Haven? / Fire damage in Spanish?',
    answer: 'Sí, hablamos español. Compramos casas con daños de fuego en New Haven — sin reparaciones, sin limpieza. Podemos ayudar en español. Llámenos: 888-440-5250.',
  },
];

export default function NewHavenFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell a Fire-Damaged House in New Haven CT — Cash Offer, No Cleanup Required', pageUrl, '2026-04-18'),
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
            alt="New Haven CT homes — Sell Fire-Damaged House Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/new-haven-ct" className="hover:text-white">New Haven CT</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged House in New Haven CT — Cash As-Is, No Cleanup
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Own a fire-damaged property in New Haven CT? USA Home Buyers purchases fire and smoke-damaged homes as-is — no cleanup, no repairs. CT disclosure law (CT Gen Stat §20-327b) requires disclosing fire history; cash buyers price accordingly. CT insurer claim timing: CT Gen Stat §38a-307. Written offer in 24 hours. Call 888-440-5250. Hablamos español.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              Fire damage, smoke damage, water damage from firefighting — we buy the property as-is.
            </p>
            <p className="text-blue-100 text-sm mb-4">Hablamos español — llamar para ayuda en español. 888-440-5250.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/new-haven-ct/fire-damage.mp4"
        title="Sell a Fire-Damaged House in New Haven CT"
        poster="/videos/new-haven-ct/fire-damage-poster.jpg"
        subtitle="No restoration required — we buy fire-damaged homes as-is in New Haven County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Fire damage on your New Haven property? USA Home Buyers buys fire-damaged homes in New Haven County as-is. No contractor estimates, no insurance delays. Fair cash offer on current condition. Call 888-440-5250.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Cash Offer — Fire Damage OK" subheadline="No cleanup. No repairs. We buy fire-damaged properties as-is." sourcePage="/markets/new-haven-ct/fire-damage" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">CT Seller Disclosure Obligation for Fire Damage</h2>
          <p className="text-gray-700 mb-4">
            Connecticut's residential property disclosure statute — CT Gen Stat §20-327b — requires sellers of residential real property to disclose known material defects to buyers. Fire damage is a material defect. Smoke damage is a material defect. Structural damage resulting from a fire — charred joists, compromised framing, failed roof structure — is a material defect. These must be disclosed on the CT Residential Property Condition Disclosure Report that accompanies every residential sale.
          </p>
          <p className="text-gray-700 mb-4">
            The disclosure obligation doesn't create a barrier to selling — it creates clarity. USA Home Buyers is a cash buyer who specifically purchases fire-damaged properties; we are already accounting for the fire damage in our offer. The disclosure confirms what we both know. There's no surprise, no negotiation after inspection, no contingency based on findings. We see the damage, we price for it, we close. Source: CT Gen Stat §20-327b; Connecticut Department of Consumer Protection (portal.ct.gov/DCP).
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Connecticut Insurance Law — CT Gen Stat §38a-307</h2>
          <p className="text-gray-700 mb-4">
            After a residential fire, most homeowners have an active insurance claim in progress. Connecticut insurance law (CT Gen Stat §38a-307) governs claim handling timing — insurers must acknowledge receipt of a claim and begin their investigation promptly. The insurer's failure to pay a valid claim within the statutory timeframe creates additional rights for the policyholder.
          </p>
          <p className="text-gray-700 mb-4">
            Selling a fire-damaged home while an insurance claim is pending is legally permissible — but the interaction between the sale and the claim requires attention. Options include: (1) settling the insurance claim before closing and retaining the proceeds, then selling the unrepaired property for a lower cash price; (2) assigning the insurance claim to the buyer as part of the sale, allowing the buyer to pursue the claim while you receive an agreed cash amount at closing; or (3) selling only after the claim is fully settled.
          </p>
          <p className="text-gray-700 mb-4">
            Each path has different tax and financial implications. We recommend discussing with a CT real estate attorney before choosing. USA Home Buyers can work within any of these structures. Call 888-440-5250 to discuss your specific insurance situation. Source: CT Gen Stat §38a-307; Connecticut Insurance Department (portal.ct.gov/CID).
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Why New Haven's Pre-War Housing Stock Is Fire-Vulnerable</h2>
          <p className="text-gray-700 mb-4">
            New Haven's triple-deckers and Victorian wood-frame homes carry fire risk characteristics that are specific to their age and construction type. Understanding these risks helps explain why fire damage in New Haven can be more extensive than in newer construction — and why a cash buyer is often the only viable exit.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Balloon framing.</strong> Homes built before 1940 often used balloon framing — a construction method where wall studs run continuously from foundation to roof without the fire-blocking that platform framing (post-WWII standard) provides. In balloon-framed homes, fire can travel vertically through wall cavities from basement to attic in minutes. This is why old New Haven triple-deckers can sustain such severe fire damage from what initially appears to be a limited kitchen or basement fire.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Knob-and-tube wiring.</strong> Original early-20th-century electrical systems — two-conductor wiring with no grounding — are documented fire hazards when overloaded. The CT State Fire Marshal's Office (portal.ct.gov/DPS/Fire-Prevention) tracks electrical fire causes; older wiring is a consistent contributor. Many New Haven pre-war homes that haven't had complete rewires still have knob-and-tube in some portions of the house, creating ongoing fire risk.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Oil-fired heating systems.</strong> New Haven's older housing stock frequently uses oil-fired boilers or furnaces — heating systems that can fail catastrophically if flue pipes deteriorate or if oil supply lines leak. Oil fires spread rapidly and generate significant smoke and soot contamination throughout the structure even when the fire itself is contained. Source: National Fire Protection Association (nfpa.org) — home heating equipment fire statistics.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Wood-frame construction.</strong> Unlike masonry construction, wood-frame buildings burn. A fire that would be contained by masonry walls spreads through wood-frame structures with speed. New Haven's dominant residential construction type — wood-frame three- and two-family homes — is maximally vulnerable to fire spread.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">What Fire Damage Looks Like in New Haven Triple-Deckers</h2>
          <p className="text-gray-700 mb-4">
            A typical New Haven triple-decker fire starts in a kitchen, laundry area, or basement and spreads upward through the structure. The fire damage is often concentrated in one or two units; smoke and water damage from firefighting extend to all three floors. After the fire department clears the scene, the building typically has: charred framing in the affected units; water-saturated floors and ceilings throughout; soot and smoke contamination on all surfaces; potential structural compromise if the fire burned into load-bearing members; and open exterior from firefighting access — broken windows, holes cut in the roof for ventilation.
          </p>
          <p className="text-gray-700 mb-4">
            Remediation of a fully-involved triple-decker fire typically costs $150,000–$300,000 or more depending on structural damage extent. Insurance often covers this, but the process takes months — adjusters, contractors, permits, inspections. Many owners decide that selling the damaged structure as-is is a faster, simpler exit than managing an 8-12 month reconstruction project. That's where USA Home Buyers comes in.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven City Hall — Post-Fire Permit and Inspection Process</h2>
          <p className="text-gray-700 mb-4">
            After a residential fire in New Haven, the city's Building Official (Office of Building Inspection and Enforcement) issues a Notice of Unsafe Structure if the fire caused significant structural damage. This notice may prohibit re-occupancy until inspections and repairs are completed and permits are issued. The property may be red-tagged (unsafe to enter), yellow-tagged (limited access), or cleared.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers can purchase a property regardless of its tag status. We conduct our own structural assessment and account for all required remediation in our offer. The post-fire permit process becomes the new buyer's responsibility after closing. Source: City of New Haven Building Official; newhavenct.gov.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Selling a Fire-Damaged New Haven Home — Your Options</h2>
          <p className="text-gray-700 mb-4">
            After a fire, New Haven homeowners typically face three options: (1) rebuild using insurance proceeds, stay in the home or repair and sell at full retail; (2) sell the damaged property to a cash buyer as-is, retaining or assigning insurance proceeds; or (3) do nothing, lose the property to city condemnation proceedings, and receive nothing.
          </p>
          <p className="text-gray-700 mb-4">
            For homeowners who are ready to move on, option 2 is the cleanest exit. A written cash offer in 24 hours. Closing in 7–14 days. No reconstruction project, no managing contractors, no multi-month insurance adjustment process while paying mortgage on an uninhabitable property. You walk away with cash; we take on the rehabilitation.
          </p>
          <p className="text-gray-700 mb-4">
            We buy fire-damaged properties throughout New Haven: Fair Haven triple-deckers, Hill neighborhood row homes, Newhallville frame houses, Wooster Square brownstones, East Rock and Westville Victorians. Any neighborhood, any level of damage. Call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Smoke and Water Damage — Often Worse Than the Fire Itself</h2>
          <p className="text-gray-700 mb-4">
            In New Haven's triple-decker and multi-family stock, smoke and water damage from firefighting can be as extensive as the fire damage itself — sometimes more so. A kitchen fire in a second-floor unit produces smoke that travels through the balloon-framed walls and floors to all three levels. Firefighters pump 500–1,000 gallons of water per minute during active suppression; that water saturates every floor and fills the basement. Hardwood floors buckle. Plaster ceilings fail. Drywall becomes mold habitat within 24–48 hours of saturation.
          </p>
          <p className="text-gray-700 mb-4">
            Smoke odor penetrates every porous surface in the structure — insulation, framing, drywall, wood trim — and is among the most difficult restoration challenges. Even in units that weren't directly involved in the fire, smoke contamination at tenant-occupancy levels typically requires complete demolition and rebuild of interior finishes. For an inherited or already-burdened New Haven property, this is an insurmountable renovation cost for the owner. USA Home Buyers purchases these properties as-is, regardless of smoke contamination extent.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Fire Department and Post-Fire Permits</h2>
          <p className="text-gray-700 mb-4">
            After a residential fire in New Haven, the New Haven Fire Department investigates origin and cause. If arson is suspected, the investigation can delay any property disposition for months. For accidental fires — the majority — the fire department clears the scene, and the city's Building Official assesses structural safety. The Building Inspection Division (City of New Haven, newhavenct.gov) issues occupancy status on fire-damaged structures.
          </p>
          <p className="text-gray-700 mb-4">
            Before any repair or renovation work can begin, building permits must be pulled through the New Haven Building Official. Permits require licensed contractors; inspections at each stage. For a seller who has no intention of rehabbing the property, this permitting process is irrelevant — it becomes the cash buyer's responsibility after closing. USA Home Buyers manages all permit and inspection obligations post-purchase. You sell the property in whatever condition it's in on the day of closing. Call 888-440-5250 — hablamos español.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire-Damaged Property in New Haven CT" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
              { href: '/markets/new-haven-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/new-haven-ct/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/new-haven-ct/tenant-occupied', label: 'Tenant-Occupied' },
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

        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged New Haven CT Property?" sourcePage="/markets/new-haven-ct/fire-damage" />
      </div>
    </>
  );
}
