/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Champaign-Urbana IL',
  description:
    'Sell a Champaign or Urbana IL house with code violations as-is. Separate City of Champaign + City of Urbana enforcement. Historic district overlays. 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Do I have to fix code violations before selling?',
    answer: 'No. USA Home Buyers purchases properties with open code violations in both Champaign and Urbana. We buy as-is. The violations become our responsibility after closing. You do need to disclose known violations under the Illinois Residential Real Property Disclosure Act (765 ILCS 77) — "as-is" means no repairs, not no disclosure.',
  },
  {
    question: 'Which city\'s code enforcement applies to my property?',
    answer: 'Champaign and Urbana are separate incorporated cities with separate code enforcement departments. If your property is in Champaign city limits, the City of Champaign Building Safety Division (champaignil.gov) handles code enforcement. If it\'s in Urbana, the City of Urbana Community Development Department (urbanaillinois.us) handles it. They have different ordinances, different violation procedures, and different fine schedules. Do not confuse the two — a violation notice from one city does not apply in the other.',
  },
  {
    question: 'What if I\'m in a historic district near campus?',
    answer: 'Parts of Urbana\'s University District and some Old West Urbana blocks have Historic District designation. Historic district properties face additional requirements for exterior alterations — the city\'s Historic Preservation Commission may need to approve certain types of work. Code violations in historic district properties can be particularly complex because some repairs must use specific materials or methods. A cash buyer purchases the property with these constraints factored into the offer rather than requiring you to navigate historic district compliance first.',
  },
  {
    question: 'Does Illinois require disclosure of code violations at sale?',
    answer: 'Yes. Under the Illinois Residential Real Property Disclosure Act (765 ILCS 77/35), sellers must disclose known material defects and conditions — including open code violations and citations. Willful concealment creates post-closing liability. When you sell to USA Home Buyers, you complete the standard IL disclosure form reflecting what you know; we assess the violations ourselves and factor them into our offer price.',
  },
  {
    question: 'What types of code violations are most common in Champaign-Urbana?',
    answer: 'In Champaign: rental property licensing violations (failure to register under Champaign\'s rental registration program), occupancy limit violations in student-rental properties near campus, deferred egress window requirements, and mechanical code issues in aging HVAC systems. In Urbana: residential rental inspection program findings in University District pre-war housing (wiring, plumbing, structural issues), Urbana Historic District exterior compliance issues, and minimum habitability standard violations in South Urbana working-class properties.',
  },
];

export default function ChampaignUrbanaCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House With Code Violations in Champaign-Urbana IL', pageUrl, '2026-04-18'),
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
            alt="Champaign-Urbana IL home — Sell With Code Violations As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Champaign or Urbana IL House With Code Violations — As-Is, No Repairs
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases Champaign and Urbana IL properties with open code violations. Champaign and Urbana have separate code enforcement departments — not one city code. Per 765 ILCS 77, disclosure is required but repairs are not. We buy as-is; violations become our responsibility at closing. Written offer in 24 hours. Call (888) 440-5250.
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
              headline="Get Your Code Violation Property Cash Offer"
              subheadline="Open violations in Champaign or Urbana — we buy as-is."
              sourcePage="/markets/champaign-urbana-il/code-violations"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Two Cities, Two Code Enforcement Systems — The Critical Distinction</h2>
          <p className="text-gray-700 mb-4">
            Champaign and Urbana are separate incorporated municipalities. This is the most important thing to understand about code violations in the C-U market: the City of Champaign's Building Safety Division and the City of Urbana's Community Development Department are entirely separate governmental entities with separate ordinances, separate violation procedures, separate fine schedules, and separate appeal processes.
          </p>
          <p className="text-gray-700 mb-4">
            A violation notice from the City of Champaign applies only to properties within Champaign's city limits. A notice from the City of Urbana applies only within Urbana's limits. Many property owners — especially those who own rentals in both cities — incorrectly assume there is a unified "Champaign-Urbana" code enforcement office. There isn't.
          </p>
          <p className="text-gray-700 mb-4">
            According to the City of Champaign (champaignil.gov), Champaign's Building Safety Division handles permits, inspections, and code enforcement for all properties within Champaign city limits.
          According to the City of Urbana (urbanaillinois.us), Urbana's Community Development Department manages code enforcement, the residential rental inspection program, and historic district compliance within Urbana's limits.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">City of Champaign Code Enforcement — Rental Housing Focus</h2>
          <p className="text-gray-700 mb-4">
            Champaign's code enforcement has a heavy focus on rental housing compliance, driven by the UIUC-adjacent rental market's size and the persistent issues that come with high-density student occupancy. The City of Champaign requires all rental properties to be registered through its rental property registration program. Failure to register, lapses in registration renewal, or having an active violation record can trigger enhanced inspections.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Common Champaign Violation Categories</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Rental registration violations:</strong> Operating a rental property without current Champaign registration; common among landlords who inherited properties or let registrations lapse.</li>
            <li><strong>Occupancy limit violations:</strong> In Campustown and adjacent neighborhoods, student-rental properties often exceed permitted occupancy. Champaign's local ordinances establish occupancy limits based on dwelling square footage and bedroom count.</li>
            <li><strong>Egress violations:</strong> Basement bedrooms and converted spaces near campus frequently lack required egress windows (24" x 20" minimum clear opening per International Residential Code adopted by Champaign).</li>
            <li><strong>HVAC and mechanical code issues:</strong> Older Champaign properties with original 1960s-1970s forced-air systems; window units substituted for central air in student rentals without proper permits.</li>
            <li><strong>Exterior maintenance:</strong> Peeling paint, damaged siding, broken gutters — common in aged student rentals where deferred maintenance has accumulated.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">City of Urbana Code Enforcement — Rental Inspection and Historic District</h2>
          <p className="text-gray-700 mb-4">
            Urbana operates a Residential Rental Inspection Program that applies to most rental units within city limits. Under this program, rental properties are subject to periodic inspections to verify compliance with habitability standards, electrical systems, plumbing, heating, and structural integrity. The University District — with its concentrated pre-war housing — is a high-inspection-activity area.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Historic District Overlay — University District and Old West Urbana</h3>
          <p className="text-gray-700 mb-4">
            Parts of Urbana's University District and Old West Urbana carry Historic District designation. Historic district designation in Urbana means the city's Historic Preservation Commission (or equivalent body) reviews certain exterior alterations — windows, doors, siding, roofing in some cases — before permits are issued. A violation in a historic district property can involve both standard code enforcement and historic preservation compliance.
          </p>
          <p className="text-gray-700 mb-4">
            For property owners who have been cited for violations in an Urbana historic district property, the path to compliance can be expensive and prescriptive — you may not be able to simply install the cheapest available replacement materials. Some historic district window violations, for example, require historically appropriate replacements rather than standard vinyl.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases Urbana historic district properties with open violations. We understand the compliance requirements and factor them into our offer. You don't have to resolve the violations before selling.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Property Condition Disclosure — Violations Must Be Disclosed</h2>
          <p className="text-gray-700 mb-4">
            Under the Illinois Residential Real Property Disclosure Act (765 ILCS 77), sellers are required to disclose known material conditions including open code violations, citations, and notices from local authorities. Selling "as-is" does not waive the disclosure obligation — it only means you won't make repairs. The disclosure form must be delivered to the buyer before the contract is signed.
          </p>
          <p className="text-gray-700 mb-4">
            Additionally, Illinois's Property Condition Disclosure Statement (765 ILCS 77) specifically asks about: (a) whether any city or county citations have been issued for the property; (b) whether any code enforcement actions are pending; and (c) whether any improvements were made without required permits. All of these are yes-or-no questions that must be answered accurately.
          </p>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, you complete the standard Illinois disclosure form honestly. We review it, inspect the property, and incorporate the violation status into our offer price. There are no post-closing disputes from our side about conditions you disclosed.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Code Violations Kill Conventional Sales in C-U</h2>
          <p className="text-gray-700 mb-4">
            A Champaign or Urbana property with open code violations faces a difficult conventional sale path for several reasons:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>FHA appraisal requirements.</strong> FHA loans require properties to meet minimum property standards. An open code violation — especially for structural, electrical, or egress issues — will typically cause an FHA appraisal to flag the property, requiring repairs before the loan can fund.</li>
            <li><strong>Conventional lender inspection contingencies.</strong> Conventional buyers may include inspection contingencies that allow them to withdraw if violations are discovered during due diligence — and their lenders may require repairs before closing regardless.</li>
            <li><strong>Buyer negotiating leverage.</strong> An open violation gives a conventional buyer significant leverage to negotiate price reductions that may exceed the cost of the violation itself.</li>
            <li><strong>Title insurance issues.</strong> In some cases, title companies will note open municipal liens (fines, demolition orders) as exceptions or require escrow holdbacks until violations are cleared. This complicates and delays closing.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            A cash buyer eliminates all of these friction points. We don't use FHA financing. We don't have lender inspection requirements. We make an offer that reflects the as-is condition including violations, and we close on the agreed date.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Municipal Liens and Title — What Happens to Open Violations at Closing</h2>
          <p className="text-gray-700 mb-4">
            Open code violations in Champaign or Urbana become liens against the property if the city has filed the violation in a way that creates a recorded lien. Not all violations create liens — some are notices pending compliance that don't attach to title until escalated. When a violation does become a lien, it must be addressed at closing: either paid off from sale proceeds, negotiated with the city for a reduction, or agreed by the buyer to assume post-closing.
          </p>
          <p className="text-gray-700 mb-4">
            The title company handling the Champaign County closing will search for municipal liens as part of the title commitment process. Any liens discovered are shown as exceptions in the title commitment. USA Home Buyers works with the title company to identify and resolve open municipal liens as part of our standard purchase transaction. You don't need to clear violations before calling us — we handle that as part of the closing process.
          </p>
          <p className="text-gray-700 mb-4">
            Demolition orders are a special case. If the City of Champaign or City of Urbana has issued a demolition order on a property — typically for structures deemed imminently dangerous — the timeline is more urgent. Demolition orders must be complied with within the stated deadline or the city may proceed with forced demolition and bill the property owner. If you've received a demolition order, call (888) 440-5250 immediately.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">UIUC Campus Expansion — Code Compliance and Adjacent Properties</h2>
          <p className="text-gray-700 mb-4">
            UIUC's ongoing campus expansion — new research facilities, athletics improvements, and student housing construction — sometimes creates compliance pressure on adjacent residential properties. Properties directly adjoining construction zones may face noise complaints that trigger code enforcement if renters file with the city, or may be affected by soil movement from adjacent excavation that creates foundation issues requiring permit and inspection.
          </p>
          <p className="text-gray-700 mb-4">
            If you own property near an active UIUC construction zone and are facing code compliance issues that are partly caused by adjacent university activity, document the timeline and contact both your city's code enforcement office and UIUC's facilities management. UIUC has an obligation to remediate damage caused by its construction activities to adjacent private properties.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Disclosure Requirement — Violations Must Be Reported</h2>
          <p className="text-gray-700 mb-4">
            Under the Illinois Residential Real Property Disclosure Act (765 ILCS 77), sellers must disclose known material conditions including open code violations, city citations, and any known unpermitted improvements. The disclosure obligation exists regardless of whether you sell as-is or are willing to make repairs.
          </p>
          <p className="text-gray-700 mb-4">
            Practically: disclose every violation you know about. A citation letter from the City of Champaign Building Safety Division sitting in a drawer is a material condition — disclose it. An Urbana rental inspection finding from three years ago that was never addressed — disclose it. The risk of non-disclosure (post-closing claims under 765 ILCS 77/55 for willful concealment) vastly exceeds the benefit of hoping the buyer doesn't find out.
          </p>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, you complete the standard IL disclosure form, we assess the violations ourselves, and our offer reflects the as-is condition. You disclose; we buy anyway.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Code Violations in Champaign-Urbana IL" />

        <CashOfferForm variant="footer" headline="Ready to Sell Your Champaign-Urbana Property With Code Violations?" sourcePage="/markets/champaign-urbana-il/code-violations" />
      </div>
    </>
  );
}
