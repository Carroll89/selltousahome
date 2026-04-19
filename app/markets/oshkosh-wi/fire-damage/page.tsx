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

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Oshkosh WI',
  description:
    'Sell a fire-damaged house in Oshkosh WI as-is. Wis. Stat. Ch. 709 disclosure, WI insurance law, Oshkosh balloon-frame fire risk. Written offer 24 hours. 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Oshkosh WI?',
    answer: 'Yes. USA Home Buyers purchases fire and smoke-damaged houses in Oshkosh and throughout Winnebago County in any condition — partial damage, total loss, smoke-only damage, water damage from fire suppression. You don\'t need to clean up, board up, or make any repairs. We assess the property and make a written cash offer within 24 hours. Call 888-440-5250.',
  },
  {
    question: 'What does Wisconsin law require me to disclose about fire damage when selling?',
    answer: 'Under Wis. Stat. Ch. 709, Wisconsin sellers must complete a Real Estate Condition Report (RECR) disclosing known material defects. The RECR specifically asks about structural defects, mechanical systems, and any prior damage from fire or other casualty. Sellers must disclose known fire damage regardless of whether repairs were made — if you know it happened, it must be disclosed. Willful concealment of known fire damage can expose you to post-closing liability. Selling to USA Home Buyers: you disclose what you know, we assess the condition, the offer reflects as-is state, and we make no post-closing claims for conditions we purchased knowingly.',
  },
  {
    question: 'Do I need to resolve my Wisconsin insurance claim before selling?',
    answer: 'No. You can sell before, during, or after the insurance claim process. Options: (1) Sell as-is and assign any pending insurance proceeds to us at closing; (2) Collect the insurance settlement first, then sell the unrepaired property to us; (3) Sell before filing a claim. Each has different financial implications. The Wisconsin Office of the Commissioner of Insurance (oci.wi.gov) handles insurer disputes — call 1-800-236-8517. We can structure the transaction around your insurance situation. Call 888-440-5250.',
  },
  {
    question: 'Should I rebuild or sell my fire-damaged Oshkosh house?',
    answer: 'The decision depends on your insurance coverage, estimated rebuild cost vs. post-rebuild value, and timeline. For Oshkosh homes — particularly the pre-war balloon-frame and brick bungalow construction in Merritt, Algoma, and Lake Shore — rebuild costs after a fire frequently approach or exceed post-rebuild value, especially for older Victorians with historic architectural elements. The U.S. Fire Administration (usfa.fema.gov) notes that fire damage in pre-war wood-frame construction typically extends well beyond the visible burn zone. A cash sale captures land value and any recoverable structure without rebuild risk or timeline.',
  },
  {
    question: 'What permits does Oshkosh require to rebuild after a fire?',
    answer: 'Any significant fire damage repair or reconstruction in Oshkosh requires permits from the City of Oshkosh Building Division (oshkoshwi.gov/building). Structural rebuilding requires a building permit; separate electrical, plumbing, and HVAC permits are typically required for those systems. Permit timelines in Oshkosh run 4-8 weeks for residential projects; contractor availability for fire restoration adds additional time. Total rebuild timeline from fire event to re-occupancy: commonly 12-24 months. A cash sale to USA Home Buyers eliminates all of this.',
  },
];

export default function OshkoshFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Fire-Damaged House in Oshkosh WI — What Homeowners Need to Know', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/oshkosh-wi-hero-640.jpg 640w, /images/optimized/oshkosh-wi-hero-828.jpg 828w, /images/optimized/oshkosh-wi-hero-1080.jpg 1080w, /images/optimized/oshkosh-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/oshkosh-wi-hero-1200.jpg"
            alt="Oshkosh WI fire-damaged home — Sell As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged Oshkosh WI House — As-Is, No Repairs
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Sell a fire-damaged house in Oshkosh WI as-is. Wisconsin law requires disclosure under Wis. Stat. Ch. 709 Real Estate Condition Report. Wisconsin Office of the Commissioner of Insurance (oci.wi.gov, 1-800-236-8517) regulates insurer conduct. USA Home Buyers purchases fire and smoke-damaged Oshkosh properties — balloon-frame Victorians, brick bungalows — without cleanup or repairs. Written offer in 24 hours. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Fire or smoke damage in your Oshkosh WI home? We buy as-is — pre-war balloon-frame, Lake Shore Victorian, brick bungalow, partial or total loss. No cleanup required.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/oshkosh-wi/fire-damage.mp4"
        title="Sell a Fire-Damaged House in Oshkosh WI"
        poster="/videos/oshkosh-wi/fire-damage-poster.jpg"
        subtitle="No restoration required — we buy fire-damaged homes as-is in Winnebago County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Fire damage on your Oshkosh property? USA Home Buyers purchases fire-damaged homes in Winnebago County as-is. No contractor bids, no delays. Fair cash offer based on current condition. Call 888-440-5250.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Fire-Damage Cash Offer" subheadline="Written offer in 24 hours. No repairs or cleanup required. Any condition." sourcePage="/markets/oshkosh-wi/fire-damage" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh's Fire Risk Profile — Pre-War and Balloon-Frame Construction</h2>
          <p className="text-gray-700 mb-4">
            Oshkosh has a specific fire risk profile rooted in its housing stock's age and construction method. The majority of the city's residential buildings were constructed before 1960, and a substantial portion of the Lake Shore, Merritt, Center City, and Algoma neighborhoods dates to the 1880s-1940s — the era of Oshkosh's peak industrial and commercial growth. That era of construction used methods that, by current fire codes, represent elevated fire propagation risk.
          </p>
          <p className="text-gray-700 mb-4">
            Balloon-frame construction — the dominant method for wood-framed homes from the 1830s through the 1940s — creates continuous vertical air channels in wall cavities that run uninterrupted from the foundation sill plate to the roof. Unlike modern platform framing, balloon-frame construction lacks fire-stop blocking at each floor level. A fire starting in a basement or on the first floor can travel through these continuous wall cavities to the attic — and become structurally catastrophic — before firefighters can access the fire with water. According to the U.S. Fire Administration (usfa.fema.gov), balloon-frame construction is a structural firefighting hazard because of this cavity travel characteristic.
          </p>
          <p className="text-gray-700 mb-4">
            Oshkosh's Lake Shore Victorians, Center City two-stories, and Merritt brick bungalows were largely built using balloon-frame or early platform-frame construction that lacks modern fire-stop blocking. When these homes experience fire damage, the structural consequence is routinely more extensive than a superficial inspection would suggest — fire travels in cavities, smoke permeates throughout the structure, and water from fire suppression causes its own secondary damage to aging plaster walls and wood framing.
          </p>
          <p className="text-gray-700 mb-4">
            Additionally, many Oshkosh pre-war homes retain original knob-and-tube wiring — an electrical system that was installed when electrical loads in homes were a fraction of current demand. Knob-and-tube systems are a recognized fire hazard under modern electrical standards and are uninsurable under many homeowners' policies. According to the National Fire Protection Association (nfpa.org), electrical distribution equipment is a leading cause of residential structure fires — a risk that is disproportionately elevated in housing stock with aging wiring systems.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Disclosure Requirements for Fire-Damaged Oshkosh Properties</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin sellers of residential property must complete a Real Estate Condition Report (RECR) under Wis. Stat. Ch. 709. The RECR is a mandatory disclosure form that asks sellers to disclose known material defects — and prior fire damage is explicitly a material defect requiring disclosure. The disclosure obligation applies regardless of whether repairs were made to the fire damage: if you know it happened, it must be disclosed.
          </p>
          <p className="text-gray-700 mb-4">
            The RECR covers: structural defects, prior damage from fire or flood, known environmental conditions, defects in electrical/plumbing/mechanical systems, zoning violations, and any outstanding municipal orders. A seller who completes the RECR and affirmatively misrepresents or willfully conceals known fire damage can face rescission claims or damages from buyers post-closing under Wisconsin seller disclosure law.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin's disclosure framework is similar in purpose to Illinois' Residential Real Estate Disclosure Act (765 ILCS 77/35) — both require good-faith disclosure of known defects. The Wisconsin RECR requirement applies to all residential real estate sales, including cash sales to investors. When you sell to USA Home Buyers, you complete the RECR disclosing what you know; we assess the condition ourselves; the offer price reflects the as-is state; and we don't make post-closing claims for conditions we purchased knowingly.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Insurance Law — Your Rights as an Oshkosh Fire Victim</h2>
          <p className="text-gray-700 mb-4">
            The Wisconsin Office of the Commissioner of Insurance (OCI) regulates all insurance companies doing business in Wisconsin, including homeowners' insurers covering Oshkosh properties. OCI's consumer protection role includes receiving and investigating complaints from policyholders who believe their insurer has acted unfairly in handling a fire damage claim.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Wisconsin Office of the Commissioner of Insurance — Consumer Resources</h3>
          <p className="text-gray-700 mb-4">
            The OCI accepts fire damage claim complaints from Oshkosh homeowners online at oci.wi.gov or by phone at 1-800-236-8517. OCI Consumer Services can intervene in cases where insurers are unreasonably delaying, underpaying, or disputing valid fire damage claims. Wisconsin insurance regulations require insurers to handle claims fairly and in good faith — persistent delays, inadequate investigation, or offers substantially below actual loss may constitute improper claims practices.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Wisconsin Insurance Claims Practices — Wis. Stat. Ch. 628</h3>
          <p className="text-gray-700 mb-4">
            Wisconsin's insurance trade practices are governed by Wis. Stat. Ch. 628, which prohibits unfair claims settlement practices by insurers. The framework is comparable to Illinois' 215 ILCS 5/154.5 provisions — both states prohibit: failure to acknowledge claims promptly, failure to conduct reasonable investigation, failure to affirm or deny coverage within a reasonable time, and offers substantially below what is owed on valid claims. If your insurer is engaging in these practices on your Oshkosh fire damage claim, the OCI is your regulatory recourse.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Actual Cash Value vs. Replacement Cost on Oshkosh Fire Claims</h3>
          <p className="text-gray-700 mb-4">
            Wisconsin homeowner policies typically offer Actual Cash Value (ACV) or Replacement Cost Value (RCV) coverage. ACV pays the depreciated value — for a 1920s brick bungalow with original systems, depreciation on those systems can be substantial. RCV pays what it costs to replace damaged property with new materials of like kind and quality. The difference between an ACV and RCV payout on an Oshkosh pre-war home can run tens of thousands of dollars. Review your policy declarations before making a rebuild-vs-sell decision — the coverage type significantly affects your financial outcome.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Three Ways to Handle a Fire-Damaged Oshkosh Property</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 1: Collect the Insurance Settlement, Then Sell As-Is</h3>
          <p className="text-gray-700 mb-4">
            If your policy covers the damage, complete the claim, receive the settlement, and then sell the Oshkosh property to USA Home Buyers in its unrepaired post-fire state. You keep the insurance proceeds; we buy the property as-is. This works when the insurance process is straightforward and you want to exit the property without managing a rebuild.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 2: Sell With an Open Insurance Claim</h3>
          <p className="text-gray-700 mb-4">
            You can sell while the insurance claim is still pending. The claim can be assigned to USA Home Buyers at closing — we take ownership of the property and the right to continue the claim process. This is useful when the claim is taking longer than you want to wait, or when dealing with the insurer is causing additional stress you'd rather transfer. The offer price reflects that we're absorbing the claim process risk.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 3: Sell Before Filing a Claim</h3>
          <p className="text-gray-700 mb-4">
            In some cases — high deductible, minimal coverage, concern about premium increases — selling before filing is the right path. We buy the property based on its as-is physical condition. The offer doesn't depend on the insurance situation. This works when the insurance route doesn't make financial sense given your specific policy and the damage extent.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What We Assess in a Fire-Damaged Oshkosh Home</h2>
          <p className="text-gray-700 mb-4">
            When evaluating a fire-damaged Oshkosh property, USA Home Buyers assesses:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Structural integrity:</strong> In balloon-frame construction, fire in wall cavities can compromise structural members before becoming visible. We evaluate load-bearing walls, roof structure, and floor systems.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Smoke and water penetration:</strong> Oshkosh pre-war balloon-frame homes spread smoke and fire suppression water well beyond the visible burn zone through continuous wall cavities.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Electrical system status:</strong> Knob-and-tube wiring damaged by fire or water is a safety hazard requiring full replacement before re-occupancy.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Remediation cost estimate:</strong> We develop our own estimate for bringing the property to habitable/resalable condition, then price our offer to reflect that cost.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Insurance claim status:</strong> Open, settled, or none — affects transaction structure. We work with any of these.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Wisconsin RECR disclosure:</strong> We review what you've disclosed on the RECR and incorporate it into our assessment.</div></li>
          </ul>
          <p className="text-gray-700 mb-4">
            We don't require a separate inspection or appraisal. We assess the condition ourselves and provide a written offer within 24 hours. Call 888-440-5250 to start.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh Fire Damage Permitting and City Process</h2>
          <p className="text-gray-700 mb-4">
            Any significant fire damage repair or reconstruction in Oshkosh requires permits from the City of Oshkosh Building Division (oshkoshwi.gov/building, 215 Church Avenue, Oshkosh WI 54901). A full structural rebuild requires a building permit; separate electrical, plumbing, and HVAC permits are typically required for those systems. Permit review timelines in Oshkosh run 4-8 weeks for residential projects; contractor availability for fire restoration work in the Fox Cities adds additional time.
          </p>
          <p className="text-gray-700 mb-4">
            Lake Shore Victorian homes in historically significant areas may be subject to additional review — the City of Oshkosh has architectural character standards that affect reconstruction requirements for contributing structures. A balloon-frame Victorian from the 1890s may have architectural features that must be preserved or replicated in any reconstruction under applicable historic preservation standards.
          </p>
          <p className="text-gray-700 mb-4">
            For sellers who want to exit the property rather than manage a 12-24 month rebuild process, a cash sale to USA Home Buyers is typically faster, lower-stress, and more certain in outcome. We close in 7-14 days; you walk away at closing; we handle all permit and reconstruction matters from that point.
          </p>
          <p className="text-gray-700 mb-4">
            Additional resources: Wisconsin Office of the Commissioner of Insurance (oci.wi.gov); U.S. Fire Administration (usfa.fema.gov) — fire safety resources for homeowners; National Fire Protection Association (nfpa.org) — electrical fire risk information; City of Oshkosh Building Division (oshkoshwi.gov/building) — permit requirements.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a Fire-Damaged House in Oshkosh WI" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Back to Oshkosh WI' },
              { href: '/markets/oshkosh-wi/code-violations', label: 'Code Violations' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/sell-house-fast-wisconsin', label: 'WI Legal Guide' },
              { href: '/markets/kenosha-wi', label: 'Kenosha WI Market' },
              { href: '/markets/racine-mount-pleasant-wi', label: 'Racine WI Market' },
              { href: '/markets/oshkosh-wi/faq', label: 'Oshkosh WI FAQ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Oshkosh WI Property?" sourcePage="/markets/oshkosh-wi/fire-damage" />
      </div>
    </>
  );
}
