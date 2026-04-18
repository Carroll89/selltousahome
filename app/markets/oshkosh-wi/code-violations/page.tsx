/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Oshkosh WI',
  description:
    'Sell a house with code violations in Oshkosh WI as-is. City of Oshkosh enforcement, Wis. Stat. § 66.0413 raze orders. Written offer 24 hours. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a house with open code violations in Oshkosh WI?',
    answer: 'Yes. USA Home Buyers purchases Oshkosh properties with open City of Oshkosh code violations — electrical, plumbing, structural, or exterior maintenance citations — without requiring you to resolve them first. Our offer reflects the as-is condition and the cost of bringing the property into compliance. Call 888-440-5250.',
  },
  {
    question: 'What types of code violations are common in Oshkosh WI homes?',
    answer: 'The most common code violations in Oshkosh\'s pre-war housing stock: (1) Electrical — knob-and-tube wiring in brick bungalows and Victorians, no GFCI protection in kitchens and baths, overloaded panels; (2) Plumbing — galvanized supply pipes corroded beyond acceptable flow, unvented fixtures, lead service lines in pre-1950 homes; (3) Structural — foundation cracks, failing sill plates, compromised floor systems; (4) Exterior maintenance — failed siding, missing or damaged roofing, open fascia and soffit; (5) Occupancy — property used for more units than permitted, unpermitted additions. City of Oshkosh Building Division cites all of these.',
  },
  {
    question: 'Can the City of Oshkosh force me to demolish my house?',
    answer: 'Yes — under Wis. Stat. § 66.0413, Wisconsin municipalities including the City of Oshkosh can order the razing (demolition) of structures determined to be dangerous or unfit for occupancy if the cost of repair exceeds the value of the structure, or if the owner fails to repair within a required timeframe. The raze order process requires notice and an opportunity to contest. USA Home Buyers has purchased properties under raze orders — we evaluate the cost, make an offer, and handle the municipal process after closing.',
  },
  {
    question: 'Do I have to disclose code violations when selling in Wisconsin?',
    answer: 'Wisconsin sellers must complete a Real Estate Condition Report (RECR) under Wis. Stat. Ch. 709 disclosing known material defects. Known code violations are material defects that should be disclosed. When selling to USA Home Buyers, you disclose what you know, we assess the property ourselves, and the offer reflects the as-is condition with known violations. We don\'t pursue post-closing claims for conditions we purchased knowingly.',
  },
  {
    question: 'What is the City of Oshkosh\'s code enforcement process?',
    answer: 'City of Oshkosh code enforcement is administered by the Building Division (oshkoshwi.gov/building). A citation is issued after an inspection — typically triggered by a complaint, a permit application, or a routine inspection. The citation specifies the violation and a compliance deadline. Non-compliance can lead to fines, court action, and in severe cases, a raze order under Wis. Stat. § 66.0413. Open citations are typically discoverable in a title search. USA Home Buyers can evaluate a property with open citations and make an offer within 24 hours.',
  },
];

export default function OshkoshCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House With Code Violations in Oshkosh WI — City of Oshkosh Enforcement Guide', pageUrl, '2026-04-18'),
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
            alt="Oshkosh WI house with code violations — Sell As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Oshkosh WI House With Code Violations — As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Sell an Oshkosh WI home with open City of Oshkosh code violations as-is. Wisconsin IPMC standards enforced; raze orders possible under Wis. Stat. § 66.0413. WI seller disclosure (Wis. Stat. Ch. 709 Real Estate Condition Report) required for known defects. USA Home Buyers buys regardless — no repairs, written offer in 24 hours. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Open citations from City of Oshkosh Building Division? Raze order risk? We buy Oshkosh houses with code violations — as-is, no remediation required before closing.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Oshkosh Code-Violation Property Offer" subheadline="Written offer in 24 hours. No repairs required before closing." sourcePage="/markets/oshkosh-wi/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">City of Oshkosh Code Enforcement — How Violations Happen</h2>
          <p className="text-gray-700 mb-4">
            The City of Oshkosh Building Division enforces the municipal property maintenance code, which incorporates the International Property Maintenance Code (IPMC) with Wisconsin-specific amendments. Code violations in Oshkosh are issued by the Building Division following inspections triggered by: neighbor complaints, routine neighborhood sweeps, permit applications that reveal unpermitted prior work, utility service issues, or foreclosure-related property inspections.
          </p>
          <p className="text-gray-700 mb-4">
            Oshkosh's pre-war housing stock creates a predictable violation profile. The brick bungalows and Victorian homes that define the city's character were built to codes that bear no resemblance to current standards — and decades of deferred maintenance compound the gap. An original 1920s brick bungalow in Merritt or Fair Acres might carry open violations for: knob-and-tube wiring that predates grounded electrical requirements, galvanized supply piping below minimum flow standards, failing exterior masonry, inadequate bathroom ventilation, and missing smoke/carbon monoxide detection in required locations.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Common City of Oshkosh Code Violations</h3>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Electrical:</strong> Knob-and-tube wiring (fire hazard, not insurable under many policies), aluminum wiring in 1960s-70s construction, no GFCI protection in kitchens/baths/garages, overloaded service panels, open junction boxes in basements and attics.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Plumbing:</strong> Galvanized supply pipes corroded to reduced flow, unvented waste fixtures, lead service lines in pre-1950 homes, sump pump discharge violations near Lake Winnebago drainage zones.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Structural:</strong> Foundation cracks, failing sill plates from moisture intrusion, deteriorated floor systems, sagging roof decking, compromised load-bearing walls.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Exterior maintenance:</strong> Failed wood siding on Lake Shore Victorians and craftsman bungalows, missing or damaged roofing, open fascia and soffit, broken or missing windows, deteriorated stairs and porches.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Occupancy violations:</strong> Properties used as more units than permitted (duplex without permit), unpermitted basement apartments, illegal accessory dwelling units.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Yard and exterior premises:</strong> Overgrown vegetation, inoperable vehicles, accumulated refuse — common in vacant estate properties or properties with absentee landlords.</div></li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Raze Orders in Oshkosh — Wis. Stat. § 66.0413</h2>
          <p className="text-gray-700 mb-4">
            According to Wis. Stat. § 66.0413 (Wisconsin Legislature), municipalities including Oshkosh have statutory authority to order the razing (demolition) of buildings determined to be dangerous or an unreasonable hazard to the public. A raze order is the most serious code enforcement action and is typically reserved for structures where the cost of repair would exceed the post-repair value of the property, or where the owner has failed to remediate after multiple citations.
          </p>
          <p className="text-gray-700 mb-4">
            The raze order process under § 66.0413 requires: written notice to the property owner specifying the violations and the municipality's intention to raze; an opportunity for the owner to appeal to the circuit court; and a reasonable time period for the owner to voluntarily raze or repair. If the owner doesn't act, the municipality can raze the structure and place the cost as a special assessment against the property.
          </p>
          <p className="text-gray-700 mb-4">
            This pattern is the same across Wisconsin — Racine, Kenosha, and other WI markets where USA Home Buyers operates use the same § 66.0413 framework. Properties facing raze orders in Oshkosh have fewer options than other distressed properties: no retail buyer will purchase under a raze order, and financing is impossible. Cash buyers are often the only viable exit. USA Home Buyers has evaluated and purchased properties under raze orders or facing imminent raze action in Wisconsin markets.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Seller Disclosure for Code Violations — Wis. Stat. Ch. 709</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin requires sellers of residential real property to complete a Real Estate Condition Report (RECR) under Wis. Stat. Ch. 709 — a statutory disclosure form that asks sellers to disclose known defects across a range of property conditions. The RECR specifically addresses: structural defects, mechanical systems, electrical and plumbing, environmental conditions, and any outstanding municipal orders or violations.
          </p>
          <p className="text-gray-700 mb-4">
            Open code violations — citations on file with the City of Oshkosh Building Division — are material defects that must be disclosed on the RECR if known to the seller. Sellers who knowingly conceal open violations on the RECR can face post-closing liability for damages resulting from the undisclosed condition.
          </p>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, the disclosure obligation is straightforward: disclose what you know on the RECR, we assess the property ourselves, and the offer price reflects the as-is condition including known violations. We don't pursue post-closing claims for conditions we purchased knowingly. The RECR requirement applies to all Wisconsin residential sales, including cash sales to investors.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Happens to Open Citations After the Sale</h2>
          <p className="text-gray-700 mb-4">
            When USA Home Buyers purchases your Oshkosh property, we take on responsibility for the property in its current condition. We work with the City of Oshkosh Building Division on any open citations post-closing. Our renovation and compliance process is funded by our own capital — you don't continue to receive citation notices or fines after the closing date.
          </p>
          <p className="text-gray-700 mb-4">
            For sellers facing escalating fines on open citations or a raze order timeline, the clock matters. Every month of non-compliance adds to the fine exposure. USA Home Buyers can close in 7-14 days — stopping the fine clock and transferring all code responsibility to a new owner who has the capital and expertise to resolve the violations.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh Code Violation Fines — How Fast They Accumulate</h2>
          <p className="text-gray-700 mb-4">
            City of Oshkosh code violation fines are assessed per violation per day after the compliance deadline. A typical citation for exterior maintenance violations — failed siding, damaged roofing, unsafe porch — might carry a daily fine of $25-$100 per day after the cure deadline. A property with three separate open violations accumulating at $50/day each generates $150/day in fines — $4,500/month. Over three months of non-compliance while an owner tries to arrange contractor work, the fines alone can reach $13,500 or more.
          </p>
          <p className="text-gray-700 mb-4">
            Oshkosh can pursue unpaid code violation fines as a special assessment against the property, creating a lien that must be paid before clear title can transfer. These special assessments rank similarly to property taxes in priority — they're among the first obligations satisfied from sale proceeds. Selling to USA Home Buyers stops the daily fine accumulation immediately at closing and transfers the code compliance obligation to a new owner with the resources to address it.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">International Property Maintenance Code in Oshkosh — What's Required</h2>
          <p className="text-gray-700 mb-4">
            According to the City of Oshkosh Building Division (oshkoshwi.gov/building, 2026), Wisconsin municipalities including Oshkosh adopt the International Property Maintenance Code (IPMC) as the baseline standard for residential property maintenance. The IPMC establishes minimum standards for: structural soundness (foundations, walls, roofs, floors); mechanical systems (plumbing, heating, electrical); interior spaces (ventilation, lighting, sanitation); and exterior premises (grounds, accessory structures, drainage).
          </p>
          <p className="text-gray-700 mb-4">
            For Oshkosh's pre-war housing stock, the IPMC's structural and mechanical requirements are frequently problematic. The code requires plumbing systems to be maintained in good working condition and free from leaks — a galvanized pipe standard that fails on any corroded galvanized supply line. The code requires heating systems capable of maintaining 68°F at 3 feet above floor level — a failing oil-to-gas conversion furnace from the 1970s may not meet this threshold in Wisconsin's sub-zero winters. The code requires electrical systems to be maintained in safe working condition — a standard that triggers knob-and-tube wiring violations when the system is actively used in ways that create overload risk.
          </p>
          <p className="text-gray-700 mb-4">
            When a City of Oshkosh building inspector cites IPMC violations, the property owner has a specific deadline to bring the property into compliance or demonstrate a compliance plan. Failure to comply triggers escalating fines and, in severe cases, the raze order process under Wis. Stat. § 66.0413. USA Home Buyers purchases properties with open IPMC citations, taking on the compliance obligation at closing.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Title Insurance and Code Violations — What Buyers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Properties with open code violations or building code liens present title insurance challenges. Standard owner's title insurance policies typically exclude coverage for code violations known to the insured — meaning if you purchase an Oshkosh property with known open violations and don't disclose them to the title company, you may have coverage issues. Title companies conducting closing on properties with known open violations will typically require the violations to appear in the commitment as exceptions and may require escrow holdbacks for remediation.
          </p>
          <p className="text-gray-700 mb-4">
            When USA Home Buyers purchases an Oshkosh property with code violations, we work with Winnebago County WI title companies experienced in handling these situations. Our purchase is a cash transaction without financing contingencies — we don't need a mortgage lender's approval or a standard owner's policy approval before closing. We accept the title with the code violation exceptions disclosed and address the violations post-closing with our own capital.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">City of Oshkosh Building Division — Contact and Resources</h2>
          <p className="text-gray-700 mb-4">
            The City of Oshkosh Building Division handles permit applications, inspections, and code enforcement for residential properties in the city limits.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Address:</strong> 215 Church Avenue, Oshkosh, WI 54901 (City Hall)</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Phone:</strong> (920) 236-5050 (Building Division)</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Website:</strong> oshkoshwi.gov/building</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Online permit lookup:</strong> Available at oshkoshwi.gov for checking open permits and code enforcement status on a specific address</div></li>
          </ul>
          <p className="text-gray-700 mb-4">
            For unincorporated Winnebago County areas (townships, Town of Black Wolf), code enforcement is administered by Winnebago County rather than the City of Oshkosh. USA Home Buyers buys in both city and unincorporated Winnebago County properties regardless of which regulatory authority issued the citations.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a Code-Violation Property in Oshkosh WI" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Back to Oshkosh WI' },
              { href: '/markets/oshkosh-wi/fire-damage', label: 'Fire Damage' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/oshkosh-wi/tenant-occupied', label: 'Tenant-Occupied' },
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

        <CashOfferForm variant="footer" headline="Ready to Sell Your Oshkosh WI Code-Violation Property?" sourcePage="/markets/oshkosh-wi/code-violations" />
      </div>
    </>
  );
}
