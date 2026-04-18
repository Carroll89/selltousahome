/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Rockford IL',
  description:
    'Sell a fire-damaged house in Rockford IL as-is. We buy fire and smoke damaged properties without repairs or insurance settlements. IL 765 ILCS 77 disclosure. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Rockford IL?',
    answer: 'Yes. USA Home Buyers purchases fire and smoke-damaged houses in Rockford and throughout Winnebago County in any condition — partial damage, total loss, smoke-only damage, water damage from fire suppression. You don\'t need to clean up, board up, or make any repairs. We assess the property and make a written cash offer within 24 hours. Call 888-440-5250.',
  },
  {
    question: 'Do I need to resolve my insurance claim before selling the fire-damaged property?',
    answer: 'No. You can sell the fire-damaged property before, during, or after the insurance claim process. Common approaches: (1) Sell the property as-is and assign any pending insurance proceeds to the buyer at closing — we can structure the transaction to accommodate an open claim. (2) Collect the insurance settlement first, then sell the partially or fully unrepaired property to a cash buyer. (3) Sell before any insurance claim is filed. Each approach has different financial implications depending on your coverage and the extent of damage. Call 888-440-5250 to discuss your specific situation.',
  },
  {
    question: 'What does Illinois law require me to disclose about fire damage when selling?',
    answer: 'Under the Illinois Residential Real Estate Disclosure Act, 765 ILCS 77/35, sellers must disclose known material defects, including fire damage. The disclosure form specifically asks about structural or mechanical defects, prior damage from fire, and any known environmental conditions. Willful concealment of known fire damage can expose the seller to post-closing liability. When selling to USA Home Buyers, you disclose what you know about the fire, we assess the property ourselves, and the offer price reflects the as-is condition. There are no after-closing surprise claims from us.',
  },
  {
    question: 'How does Illinois insurance law apply to a fire-damage claim?',
    answer: 'Illinois insurance law under 215 ILCS 5/154.5 prohibits unfair claims settlement practices by insurers, including failure to acknowledge claims promptly, failure to investigate claims adequately, and failure to pay valid claims within a reasonable time. If your insurer is delaying or disputing your fire damage claim, the Illinois Department of Insurance (insurance.illinois.gov) handles consumer complaints. File a complaint at insurance.illinois.gov/consumer. Illinois law also requires the insurer to pay the greater of actual cash value or replacement cost (depending on policy type) for a total-loss fire. The Illinois Department of Insurance is the regulatory authority under 215 ILCS 5/401 et seq.',
  },
  {
    question: 'Should I rebuild or sell my fire-damaged Rockford home?',
    answer: 'The rebuild-vs-sell decision depends on your insurance coverage, the estimated rebuild cost relative to post-rebuild value, your timeline, and whether the pre-fire home had existing issues that would need addressing during rebuilding. For Rockford homes — particularly the pre-war balloon-frame construction common in Churchill Grove, Midtown, and Haight Historic District — rebuild costs for fire-damaged structures frequently exceed the post-rebuild value. A direct as-is sale captures the land value and remaining structure without the rebuild risk, timeline, and complexity.',
  },
];

export default function RockfordFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Fire-Damaged House in Rockford IL — What Homeowners Need to Know', pageUrl, '2026-04-18'),
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
            alt="Rockford IL fire-damaged home — Sell As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged Rockford IL House — As-Is, No Repairs
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Sell a fire-damaged house in Rockford IL as-is. Illinois law requires disclosure under 765 ILCS 77/35 and regulates insurer conduct under 215 ILCS 5/154.5. USA Home Buyers purchases fire and smoke-damaged Rockford properties — balloon-frame and pre-war housing stock included — without cleanup or repairs. Written offer in 24 hours. No insurance settlement required before close. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Fire or smoke damage in your Rockford home? We buy as-is — balloon-frame, pre-war, partial or total loss. No cleanup, no repairs, no insurance settlement required first.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Fire-Damage Cash Offer" subheadline="Written offer in 24 hours. No repairs or cleanup required. Any condition." sourcePage="/markets/rockford-il/fire-damage" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford's Fire Risk Profile — Pre-War and Balloon-Frame Construction</h2>
          <p className="text-gray-700 mb-4">
            Rockford has a specific fire risk profile that distinguishes it from newer Midwest suburbs. The majority of the city's housing stock was built before 1970, and a substantial share dates to the 1880s-1940s — the peak of Rockford's industrial and residential development. That era of construction used building methods that, by current fire codes, represent elevated fire risk.
          </p>
          <p className="text-gray-700 mb-4">
            Balloon-frame construction — the dominant method for wood-framed homes from roughly 1833 through the 1940s — creates continuous air channels in the wall cavities that run from foundation to roof without fire stops at each floor. When a fire starts in a balloon-frame house, it can travel through wall cavities to upper floors and the attic before becoming visible to occupants or firefighters. Rockford's Craftsman bungalows, Victorian homes in the Haight Historic District, and working-class two-flats in Midtown and Churchill Grove were largely built using balloon-frame or early platform-frame construction that lacks modern fire-stop blocking.
          </p>
          <p className="text-gray-700 mb-4">
            When these homes experience fire damage, the structural consequence is often more extensive than a superficial view would suggest. Fire travels in wall cavities. Smoke permeates throughout the structure. Water from fire suppression causes its own secondary damage to aging plaster, wood framing, and mechanical systems. The result: a Rockford fire-damaged home typically has damage that extends significantly beyond the visible burn zone.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Disclosure Requirements for Fire-Damaged Properties</h2>
          <p className="text-gray-700 mb-4">
            Illinois law requires disclosure of fire damage under the Illinois Residential Real Estate Disclosure Act, 765 ILCS 77/35. The standard Illinois disclosure form (IL-1065) includes a direct question about prior damage from fire, flood, or other casualty. Sellers must disclose what they know — there is no requirement to investigate unknown conditions, but there is a legal obligation not to willfully conceal known defects.
          </p>
          <p className="text-gray-700 mb-4">
            The disclosure requirement applies whether the fire was last year or ten years ago. Fully repaired fire damage that leaves no observable evidence still requires disclosure if the seller is aware of it. Sellers who fail to disclose known fire damage can face rescission claims or damages from buyers post-closing. The Illinois Department of Financial and Professional Regulation (idfpr.illinois.gov) regulates real estate licensees and has authority over disclosure violations involving licensed agents.
          </p>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, the disclosure obligation is straightforward: you tell us what you know about the fire, we assess the condition ourselves, and the offer reflects the as-is state. We don't pursue post-closing claims based on conditions we purchased knowingly.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Insurance Law — Your Rights as a Rockford Fire Victim</h2>
          <p className="text-gray-700 mb-4">
            The Illinois Insurance Code, 215 ILCS 5/et seq., governs insurer conduct in fire damage claims. Key provisions for Rockford homeowners:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Unfair Claims Settlement — 215 ILCS 5/154.5</h3>
          <p className="text-gray-700 mb-4">
            According to the Illinois Insurance Code (215 ILCS 5/154.5, 2026), Illinois law prohibits insurers from engaging in unfair claims settlement practices, including: (1) failure to acknowledge and act promptly on claims; (2) failure to conduct reasonable investigation; (3) failure to affirm or deny coverage within a reasonable time; (4) not attempting to make a fair settlement when liability is reasonably clear; and (5) compelling policyholders to litigate valid claims by offering substantially less than due. If your insurer is engaging in any of these practices on your Rockford fire damage claim, you have the right to file a complaint with the Illinois Department of Insurance.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Illinois Department of Insurance — Consumer Resources</h3>
          <p className="text-gray-700 mb-4">
            The Illinois Department of Insurance (insurance.illinois.gov) is the state regulator for all insurance companies operating in Illinois. For fire damage claim disputes, the DOI accepts consumer complaints online at insurance.illinois.gov/consumer and by phone. The DOI can intervene in cases where insurers are unreasonably delaying or underpaying claims. Illinois DOI Consumer Hotline: 1-866-445-5364. This is a free, state-operated resource.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Actual Cash Value vs. Replacement Cost Coverage</h3>
          <p className="text-gray-700 mb-4">
            Illinois homeowner's policies typically offer two coverage options: actual cash value (ACV) and replacement cost value (RCV). ACV pays the depreciated value of damaged property — for older Rockford homes with pre-1970 systems and materials, depreciation is significant. RCV pays what it costs to replace damaged items with new materials of like kind and quality, without a depreciation deduction. The difference between ACV and RCV payouts on a Rockford balloon-frame house fire can be substantial — sometimes tens of thousands of dollars. Review your policy declarations page to confirm which coverage type you carry before making a rebuild-vs-sell decision.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Three Ways to Handle a Rockford Fire-Damaged Property</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 1: Collect the Insurance Payout, Then Sell</h3>
          <p className="text-gray-700 mb-4">
            If your policy covers the damage adequately, you can complete the insurance claim, receive the settlement, and then sell the property to USA Home Buyers in its post-fire, unrepaired state. The insurance proceeds are yours — we're buying the property, not the insurance claim. This is the right path when the insurance payout is straightforward and you want to move on without managing a rebuild.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 2: Sell With an Open Insurance Claim</h3>
          <p className="text-gray-700 mb-4">
            You can sell the property while an insurance claim is pending. The insurance claim can be assigned to the buyer at closing — USA Home Buyers takes ownership of the property and the right to continue the claim. This is useful when the claim process is taking longer than you want to wait, or when dealing with the insurer is causing additional stress you'd rather hand off to someone with more leverage. The offer price reflects that we're absorbing the claim process risk.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 3: Sell Before Filing an Insurance Claim</h3>
          <p className="text-gray-700 mb-4">
            In some situations — particularly when coverage is minimal, the deductible is high relative to damage, or the policyholder is concerned about premium increases after a claim — selling before filing is the right approach. We buy the property based on its as-is condition without regard to what the insurance coverage situation is. The offer reflects the physical reality of the property, not the insurance paperwork. This is appropriate when the insurance route doesn't make financial sense.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford Fire Damage Permitting — What's Required to Rebuild</h2>
          <p className="text-gray-700 mb-4">
            Any significant repair or rebuilding following a fire in Rockford requires permits from the City of Rockford Building Division. A full rebuild requires a building permit, and depending on scope, may also require separate electrical, plumbing, HVAC, and structural permits. Rockford enforces the International Building Code and Illinois-specific amendments.
          </p>
          <p className="text-gray-700 mb-4">
            For properties in the Haight Village Historic District or other historic-district-designated areas of Rockford, additional historic preservation review may be required before rebuilding — the City of Rockford has preservation standards that apply to contributing structures in designated districts. Balloon-frame homes that were built in the late 19th century may have architectural features that must be preserved or replicated in any reconstruction.
          </p>
          <p className="text-gray-700 mb-4">
            According to City of Rockford (2026), permit timelines typically run 4-8 weeks for residential projects, and contractor availability for fire restoration work adds additional time. For homeowners who want to exit the property rather than manage a 12-18 month rebuild, selling to USA Home Buyers is typically the faster and lower-stress path.
          </p>
          <p className="text-gray-700 mb-4">
            For City of Rockford permit information, contact the Community Development Department at rockfordil.gov or by phone. The U.S. Fire Administration (usfa.fema.gov) maintains resources on fire-damaged structure assessment and rebuilding considerations that are applicable to residential properties in Illinois.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What We Assess in a Rockford Fire-Damaged Property</h2>
          <p className="text-gray-700 mb-4">
            When we evaluate a fire-damaged Rockford home, we assess:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong className="text-brand-dark">Structural integrity:</strong> Foundation, load-bearing walls, roof structure, floor systems — did the fire compromise structural members or is the damage primarily finishes and systems?</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong className="text-brand-dark">Smoke and water penetration:</strong> In balloon-frame construction, smoke and water often spread well beyond the visible burn area through wall cavities and floor systems.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong className="text-brand-dark">Electrical system status:</strong> Wiring damaged by fire or water is a safety hazard that must be evaluated before any electrical system is energized.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong className="text-brand-dark">Remediation cost estimate:</strong> We develop our own estimate for what it would cost to bring the property to a habitable or resalable condition, then price our offer accordingly.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong className="text-brand-dark">Insurance claim status:</strong> Open claim, settled claim, or no claim — this affects how we structure the transaction.</div></li>
          </ul>
          <p className="text-gray-700 mb-4">
            We don't require an inspection or appraisal to make an offer — we assess the condition ourselves and make a written offer based on what we see. Call 888-440-5250 to start.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a Fire-Damaged House in Rockford IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/rockford-il', label: '← Back to Rockford IL' },
              { href: '/markets/rockford-il/code-violations', label: 'Code Violations' },
              { href: '/markets/rockford-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/rockford-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/rockford-il/foreclosure', label: 'Foreclosure Help' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
              { href: '/markets/springfield-il/fire-damage', label: 'Springfield IL Fire Damage' },
              { href: '/markets/rockford-il/faq', label: 'Rockford IL FAQ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Rockford IL Property?" sourcePage="/markets/rockford-il/fire-damage" />
      </div>
    </>
  );
}
