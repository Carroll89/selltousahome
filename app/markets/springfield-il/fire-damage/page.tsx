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

const pageUrl = `${SITE_URL}/markets/springfield-il/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Springfield IL',
  description:
    'Sell a fire-damaged house in Springfield IL as-is. We buy fire and smoke damaged properties without repairs or insurance requirements. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Springfield IL?',
    answer: 'Yes. We buy fire and smoke-damaged houses in Springfield and throughout Sangamon County in any condition - partial damage, total loss, smoke-only damage, water damage from fire suppression. You don\'t need to clean up, board up, or make any repairs. We assess the property and make a written cash offer within 24 hours. Call 888-274-5006.',
  },
  {
    question: 'Should I rebuild or sell my fire-damaged Springfield home?',
    answer: 'The rebuild-vs-sell decision depends on several factors: the estimated rebuild cost vs. post-rebuild value, whether you have adequate insurance coverage for the full replacement cost, your timeline and financial situation, and whether the pre-fire home had existing issues (aging systems, deferred maintenance) that would need addressing during the rebuild anyway. For many Springfield homeowners - particularly those with older Enos Park or Harvard Park homes where rebuild costs can exceed the post-rebuild value - selling the fire-damaged property as-is captures the land and remaining structure value without the rebuild complexity and timeline.',
  },
  {
    question: 'What happens to my insurance claim if I sell the fire-damaged property?',
    answer: 'If you sell the fire-damaged property before completing an insurance claim, the claim typically transfers with the assignment of proceeds. You should work with your insurance company to understand whether the claim can be assigned or whether you need to complete the claim process first. Some sellers accept the insurance payout, then sell the property to a cash buyer. Others sell the property and assign the insurance claim to the buyer. We can structure the transaction either way - call us to discuss your specific insurance situation.',
  },
  {
    question: 'How does Illinois handle insurance on a total-loss fire?',
    answer: 'Illinois insurance law requires insurers to pay the actual cash value of the property or the replacement cost value, depending on the policy. For a total-loss fire, the insurer pays out the policy limit minus any applicable deductible. If the mortgage balance exceeds the insurance payout, the mortgage lender may be a named loss payee and entitled to a portion of the insurance proceeds. Selling to a cash buyer in this situation requires coordinating with the insurance company and the mortgage lender to ensure all parties are properly handled at closing.',
  },
  {
    question: 'What Springfield permits are required to rebuild after a fire?',
    answer: 'All rebuilding and substantial repair work following a fire in Springfield requires permits from the City of Springfield Building and Zoning Department. A full rebuild requires a building permit, and depending on the scope, may also require electrical, plumbing, and HVAC permits. Springfield enforces the International Building Code and Illinois-specific amendments. For historic properties in Enos Park or Aristocracy Hill that may be designated as contributing structures, additional historic preservation review may be required before rebuilding. Permit timelines in Springfield typically run 4-8 weeks for residential projects.',
  },
];

export default function SpringfieldFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Fire-Damaged House in Springfield IL - What Homeowners Need to Know', pageUrl, '2026-04-18'),
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
            alt="Springfield IL fire-damaged house - sell as-is for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/springfield-il" className="hover:text-white">Springfield IL</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged House in Springfield IL - As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases fire-damaged properties in Springfield IL as-is - no cleanup, no repairs, no insurance requirements before closing. We make a written cash offer within 24 hours based on current market conditions. Springfield ZHVI $163,198 (Mar 2026). You decide: take the insurance money and sell as-is, or sell and assign the claim. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Fire-damaged, smoke-damaged, water-damaged from suppression - we buy as-is. No cleanup, no insurance hoops, no rebuild required.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now - 888-274-5006 (24/7)
            </a>
          </div>
          <div>

      <VideoEmbed
        src="/videos/springfield-il/fire-damage.mp4"
        title="Sell a Fire-Damaged House in Springfield IL"
        poster="/videos/springfield-il/fire-damage-poster.jpg"
        subtitle="No restoration required - we buy fire-damaged homes as-is"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Did your Springfield home suffer fire damage? USA Home Buyers purchases fire-damaged homes throughout Springfield and Sangamon County, exactly as they are. We make a cash offer based on current condition - no repairs, no cleanup required. If you have a fire-damaged property and want a fast, fair exit - call us at 888-274-5006.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Fire-damaged, smoke-damaged, any condition. Written offer in 24 hours." sourcePage="/markets/springfield-il/fire-damage" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling vs. Rebuilding a Fire-Damaged Springfield Home - The Real Math</h2>
          <p className="text-gray-700 mb-4">
            A fire is a forced decision point. You have roughly three options: (1) file the insurance claim, take the payout, and sell the damaged property as-is; (2) use insurance proceeds to rebuild and remain in the home; or (3) sell the damaged property to a cash buyer, potentially assigning the insurance claim as part of the transaction. The right path depends on numbers that are specific to your property and situation.
          </p>
          <p className="text-gray-700 mb-4">
            For Springfield homeowners, the rebuild math often doesn't favor full reconstruction - particularly for older Enos Park Victorians or Harvard Park bungalows. Construction costs in central Illinois have risen substantially since 2020. A full rebuild on a 1,400 sq ft Springfield bungalow can run $175,000-$225,000 in 2026 construction costs, not counting the land. If the pre-fire home was worth $130,000 and the post-rebuild value would be $185,000, the economic case for rebuilding is marginal even with full insurance coverage. If the insurance payout doesn't cover full replacement cost (under-insured policies are common in older homes), the rebuild gap can be unworkable.
          </p>
          <p className="text-gray-700 mb-4">
            Selling the damaged property as-is captures the land value (which persists regardless of structural condition) plus whatever value remains in the damaged structure. In Springfield’s current market — Per Redfin (March 2026), median sale price $187,000, up 23% year-over-year — land values in established neighborhoods are meaningful. A vacant fire-damaged lot in Harvard Park or Enos Park has real value to a builder or investor.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How We Price Fire-Damaged Springfield Properties</h2>
          <p className="text-gray-700 mb-4">
            Our offer on a fire-damaged Springfield property is based on several factors:
          </p>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex gap-3"><span className="text-brand-primary font-bold">1.</span><span><strong>Land value:</strong> The underlying lot value in the neighborhood, based on comparable vacant land sales and the current Springfield market.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">2.</span><span><strong>Remaining structure value:</strong> For partial-damage properties with salvageable framing, foundation, and structural elements, the remaining structure has value beyond the land. For total-loss structures, the offer primarily reflects land value.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">3.</span><span><strong>Remediation and demolition costs:</strong> If the structure requires demolition before rebuilding, we factor the cost of that work into the offer price.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">4.</span><span><strong>Outstanding liens:</strong> Insurance loss payee rights (if a mortgage is involved), property tax arrears, and any code violation liens from the fire are factored in and paid at closing.</span></li>
          </ul>
          <p className="text-gray-700 mb-4">
            We don't need to tour a fire-damaged property in person before making an offer. Photos and basic information about the extent of the damage are typically sufficient for an initial written offer. We'll do a brief walkthrough before closing to confirm condition.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield-Specific Fire Risks - Older Housing Stock</h2>
          <p className="text-gray-700 mb-4">
            Springfield's older housing stock carries specific fire risk characteristics that affect both the likelihood of fire and the severity of damage. Victorian-era frame construction in Enos Park - balloon-frame construction prevalent in homes built before 1940 - allows fire to travel rapidly from floor to floor through wall cavities without fire stops. A kitchen fire in a balloon-frame Victorian can become a total-loss event far faster than in post-war platform-frame construction.
          </p>
          <p className="text-gray-700 mb-4">
            Knob-and-tube electrical wiring - present in many Enos Park and Aristocracy Hill homes - poses an elevated fire risk from arc faults and overloaded circuits, particularly when the original wiring has been modified over the years by adding loads the system wasn't designed for. Galvanized gas pipe in older homes can corrode at connections over time, creating leak risk. These risk factors are why older Springfield neighborhoods see a disproportionate share of residential fire losses.
          </p>
          <p className="text-gray-700 mb-4">
            Post-fire, these same properties present specific remediation challenges. Smoke and soot from fires in older homes with historic building materials (horsehair plaster, old-growth lumber, oil-based paints) penetrate more deeply than in modern construction. Water damage from fire suppression can be extensive in balloon-frame homes. The complexity and cost of full remediation is often greater than the finished value warrants.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Insurance Claims and Property Sales - Key Points</h2>
          <p className="text-gray-700 mb-4">
            Illinois insurance law provides important protections for homeowners navigating fire claims. According to the Illinois Insurance Code (215 ILCS 5/154.5, 2026), your insurer must acknowledge a claim within 10 days and provide a coverage decision or request for more information within 30 days. For total-loss claims, the insurer typically provides an advance payment within a defined period to cover immediate needs.
          </p>
          <p className="text-gray-700 mb-4">
            Illinois sellers must also disclose known fire and smoke damage on the Illinois Residential Real Property Disclosure Report required at closing, under the Residential Real Property Disclosure Act (765 ILCS 77/). This applies to all residential sales - including as-is cash transactions. When you sell to USA Home Buyers, we handle this disclosure as part of the standard closing process.
          </p>
          <p className="text-gray-700 mb-4">
            If you have a mortgage, your lender is almost certainly listed as a loss payee on your homeowner's insurance policy. This means any insurance payout on a total or partial loss must be jointly endorsed by you and the lender. The lender may apply the insurance proceeds to the mortgage balance rather than releasing them for repair, depending on the mortgage agreement and the extent of damage. Understanding this dynamic before selling is important - work with your insurance agent and lender to clarify how proceeds will be handled in a sale scenario.
          </p>
          <p className="text-gray-700 mb-4">
            We have experience structuring fire-damage transactions that satisfy both the insurance company and the mortgage lender. Call 888-274-5006 to discuss your specific situation - the structure of the transaction can vary significantly based on your insurance coverage and mortgage balance.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Navigating the Insurance Company After a Springfield House Fire</h2>
          <p className="text-gray-700 mb-4">
            The insurance claim process after a house fire involves steps that happen on specific timelines - and the decisions you make in the first 30-60 days can significantly affect your options. Here's a practical sequence for Springfield homeowners:
          </p>
          <ol className="space-y-3 text-gray-700 mb-4">
            <li className="flex gap-3"><span className="text-brand-primary font-bold">1.</span><span><strong>File the claim immediately.</strong> Contact your insurance company or agent within 24-48 hours of the fire. Delayed claims can complicate coverage. Photograph everything before any cleanup or boarding up.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">2.</span><span><strong>Document the loss thoroughly.</strong> The insurance adjuster will inspect the property, but your own documentation - photos, video walkthroughs, lists of personal property lost - protects you if the adjuster's assessment is lower than the actual loss.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">3.</span><span><strong>Get the adjuster's estimate in writing.</strong> The insurer's estimate of loss and the replacement cost or actual cash value figure are the basis for your claim. Review it carefully before signing any agreement.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">4.</span><span><strong>Decide: rebuild or sell as-is.</strong> Once you have the insurance estimate, you have real numbers to work with. Compare the rebuild cost (contractor bids) against the post-rebuild value and any out-of-pocket gap between the insurance payout and actual rebuild cost. At the same time, call us at 888-274-5006 for a cash offer on the as-is property. Compare both numbers before committing.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">5.</span><span><strong>If selling as-is: coordinate the claim assignment at closing.</strong> The title company and your insurance company work together to ensure the mortgage lender (if any) is properly handled and the claim proceeds are correctly allocated.</span></li>
          </ol>

          <h3 className="text-xl font-semibold text-brand-dark mt-4 mb-3">Public Adjusters - Are They Worth It?</h3>
          <p className="text-gray-700 mb-4">
            A public adjuster is an independent professional who represents the policyholder (you) in negotiating with the insurance company - not the same as the insurer's adjuster who works for the insurance company. Public adjusters typically charge a percentage of the claim settlement (often 10-15%). For large claims - particularly total-loss fires on older Springfield homes where replacement cost calculations are complicated by historic construction methods - a public adjuster's expertise can recover more than their fee. For smaller partial-damage claims, the math may not favor it. Get referrals and compare fees before hiring one.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield Building Permit Process for Post-Fire Rebuild</h2>
          <p className="text-gray-700 mb-4">
            If you decide to rebuild rather than sell, the City of Springfield requires permits for all rebuilding work. A full rebuild after a total-loss fire requires a new building permit, which is reviewed against current building code requirements - not the code in effect when the original structure was built. This means that rebuilding a 1910 Enos Park Victorian to current code standards can be substantially more expensive than rebuilding to the original specification, since modern electrical, insulation, energy efficiency, and accessibility requirements apply.
          </p>
          <p className="text-gray-700 mb-4">
            For structures in Enos Park that may be designated contributing historic structures, additional review by the Springfield Historic Preservation Commission may be required. Historic districts have design guidelines that affect exterior materials and appearance, even when rebuilding after a fire. This adds timeline and cost to the rebuild process.
          </p>
          <p className="text-gray-700 mb-4">
            Springfield Building and Zoning Department permit intake: contact information and permit application procedures are available at springfield.il.us. Building permit review for residential projects typically takes 4-8 weeks. Construction can begin after permit approval. For a post-fire rebuild on a complex older structure, the permit-to-completion timeline is typically 6-18 months depending on scope.
          </p>
          <p className="text-gray-700 mb-4">
            For many Springfield homeowners - particularly older adults who've lived in the home for decades and don't want to manage an 18-month construction project, or out-of-state heirs who can't easily supervise Springfield contractors - selling the damaged property as-is is simply the more practical choice. We make it straightforward. Call 888-274-5006.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs - Fire-Damaged Property in Springfield IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/springfield-il/code-violations', label: 'Code Violations' },
              { href: '/markets/springfield-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/springfield-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/springfield-il/probate', label: 'Probate Sale' },
              { href: '/markets/springfield-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Seller Guide' },
              { href: '/markets/springfield-il', label: '← Back to Springfield IL' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Sell Your Fire-Damaged Springfield IL Property As-Is" sourcePage="/markets/springfield-il/fire-damage" />
      </div>
    </>
  );
}
