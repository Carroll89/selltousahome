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

const pageUrl = `${SITE_URL}/markets/peoria-il/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House with Code Violations Peoria IL — Cash Buyer, As-Is',
  description:
    'Sell a Peoria IL house with code violations or condemned status as-is. City of Peoria Code Enforcement, IL demolition ordinance. Written offer in 24 hours. Call (888) 440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a house with open code violations in Peoria IL?',
    answer: 'Yes. USA Home Buyers purchases properties with open City of Peoria code violations, including structural, electrical, plumbing, and exterior violations. We buy as-is — the violations are factored into our offer price, not listed as conditions you must cure before closing. Call (888) 440-5250.',
  },
  {
    question: 'What happens if I don\'t address Peoria city code violations?',
    answer: 'The City of Peoria Code Enforcement Division issues violation notices with compliance deadlines. Non-compliance leads to escalating fines and, for properties deemed dangerous or unsafe under the Peoria City Code and 65 ILCS 5/11-31-1, can lead to demolition proceedings. Once a demolition order is issued and executed, the owner loses the asset entirely and may still face a lien for the demolition cost. Selling before that point captures whatever value the property retains.',
  },
  {
    question: 'Can I sell a condemned property in Peoria?',
    answer: 'Yes — unless the property has been acquired through eminent domain or the deed has been conveyed through an abandoned property proceeding, you can sell a condemned property. "Condemned" typically means the building has been posted as unfit for occupancy by the City of Peoria Building & Zoning Department. The posted status is a code enforcement action, not a title action — you still own the property and can sell it. USA Home Buyers buys condemned Peoria properties as-is.',
  },
  {
    question: 'Do I need to disclose code violations when selling in Peoria?',
    answer: 'Yes. Under the Illinois Residential Real Property Disclosure Act, 765 ILCS 77/35, sellers must disclose known material defects and any known violations of governmental codes, regulations, or ordinances. Willful concealment of known violations can expose the seller to post-closing liability. When selling to USA Home Buyers, you disclose what you know, we assess the violations ourselves, and the offer reflects the as-is condition.',
  },
  {
    question: 'What is the City of Peoria Code Enforcement process?',
    answer: 'The City of Peoria Code Enforcement Division (peoriagov.org) handles complaints about exterior property maintenance, structural deficiencies, unsafe buildings, and nuisance conditions. The Division issues violation notices, conducts re-inspections, and escalates non-compliant properties through the municipal hearing officer process. The Illinois Administrative Procedure Act (5 ILCS 100) governs the administrative hearing process for code violation appeals.',
  },
  {
    question: 'Do code violations prevent me from getting clear title?',
    answer: 'Open code violation fines and liens can attach to the property title in Illinois and must be resolved at closing. Municipal liens recorded with the Peoria County Recorder (324 Main St., Peoria, IL 61602) are disclosed in the title search and typically paid from sale proceeds. USA Home Buyers works with Peoria title companies experienced in clearing municipal liens — we handle this process as part of the transaction.',
  },
];

export default function PeoriaCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House with Code Violations in Peoria IL — What Owners Need to Know', pageUrl, '2026-04-18'),
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
            alt="Peoria IL property with code violations — Sell As-Is for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a House with Code Violations in Peoria IL — As-Is, Fast
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Open code violations in Peoria IL? According to 65 ILCS 5/11-31-1, Peoria can pursue demolition for dangerous structures. Per the City of Peoria Code Enforcement Division, unresolved violations lead to escalating fines, liens, and demolition proceedings. USA Home Buyers buys as-is, violations factored into offer, no cure required. Written offer in 24 hours. Call (888) 440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy Peoria homes with open code violations — structural, electrical, plumbing, exterior. No repairs required. Violations factored into price.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — (888) 440-5250 (24/7)
            </a>
          </div>

      <VideoEmbed
        src="/videos/peoria-il/code-violations.mp4"
        title="Sell a House With Code Violations in Peoria IL"
        poster="/videos/peoria-il/code-violations-poster.jpg"
        subtitle="Open violations, condemned properties — we buy as-is in Peoria County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Code violations on your Peoria IL property? USA Home Buyers purchases properties with open violations and condemnations as-is. No repairs, no permits. Fair cash offer, fast close. Call 888-440-5250.
        </div>
      </details>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer Now" subheadline="We buy with open violations. No repairs required. Written offer in 24 hours." sourcePage="/markets/peoria-il/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Peoria Has the Most Code Violation Activity in This IL Market Batch</h2>
          <p className="text-gray-700 mb-4">
            Peoria's code enforcement landscape is more active than comparable downstate Illinois cities for specific, documentable reasons rooted in the city's housing stock and economic profile. Per biggestuscities.com, 24.3% of all Peoria housing units were built before 1940 — the highest percentage of any Illinois market in USA Home Buyers' portfolio. Pre-war construction in South Peoria, East Bluff, and the Manual area means a disproportionate share of the city's housing inventory has reached or exceeded its useful structural life without adequate reinvestment.
          </p>
          <p className="text-gray-700 mb-4">
            When an owner dies, leaves the city, or can no longer afford maintenance, properties in these neighborhoods move from inhabited to vacant to distressed rapidly. According to the 2024 ACS Estimate, Peoria's family poverty rate is 14.1% — meaning a significant portion of owner-occupied households lack the financial resources to respond to code notices that might cost $10,000–$40,000 to cure. The result is a steady pipeline of code violation escalations in the city's southern and eastern neighborhoods.
          </p>
          <p className="text-gray-700 mb-4">
            The City of Peoria Code Enforcement Division operates as part of the Building and Zoning Department and actively targets properties in the city's identified blight remediation zones — particularly South Peoria and East Bluff. For owners of properties in these areas, receiving a code violation notice is not unusual. What matters is how quickly you respond.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">City of Peoria Code Enforcement — How the Process Works</h2>
          <p className="text-gray-700 mb-4">
            Peoria city code enforcement begins with either a complaint (neighbor, inspector, or city self-survey) or a proactive inspection by the Code Enforcement Division. The process typically follows this escalation path:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Phase 1 — Violation Notice</h3>
          <p className="text-gray-700 mb-4">
            The Code Enforcement Division issues a written violation notice to the property owner of record. The notice identifies the specific violations (exterior maintenance, structural, electrical, etc.), the applicable code sections, and a compliance deadline — typically 30-90 days for minor violations, shorter for dangerous conditions.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Phase 2 — Re-Inspection and Fine Assessment</h3>
          <p className="text-gray-700 mb-4">
            If violations are not corrected by the deadline, the city re-inspects and begins assessing fines. Under the Illinois Administrative Procedure Act (5 ILCS 100), property owners have the right to a hearing before a municipal hearing officer to contest violations or request additional time. Fines accumulate as municipal liens recorded against the property title at the Peoria County Recorder, 324 Main Street, Peoria, IL 61602.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Phase 3 — Dangerous/Unsafe Building Proceedings</h3>
          <p className="text-gray-700 mb-4">
            For properties deemed structurally unsafe or dangerous, the City can invoke 65 ILCS 5/11-31-1, which authorizes Illinois municipalities to take action on dangerous buildings — including demolition if the condition is not remediated. Once a demolition order is entered and carried out, the owner loses the building and the city places a lien for demolition costs (typically $15,000–$40,000) on the property title. The owner still technically owns the vacant lot, now encumbered by the demolition lien.
          </p>
          <p className="text-gray-700 mb-4">
            Selling before the demolition order is executed captures whatever building value remains. A pre-1940 Peoria house in code violation status may be worth $25,000–$60,000 to a cash buyer willing to remediate. After demolition, the vacant lot may be worth $5,000–$15,000.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Code Violations in Pre-1940 Peoria Housing</h2>
          <p className="text-gray-700 mb-4">
            The pre-1940 housing stock in South Peoria and East Bluff generates a distinctive set of code violations that differ from violations in newer construction:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Violation Type</th>
                  <th className="text-left p-3">Common in Pre-1940 Peoria</th>
                  <th className="text-left p-3">Typical Remediation Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Exterior deterioration (siding, paint, foundation)</td><td className="p-3">Very common — balloon-frame siding degrades without maintenance</td><td className="p-3">$8,000–$25,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Roof damage or failure</td><td className="p-3">Common — original roofing at or past end of life</td><td className="p-3">$6,000–$15,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Electrical (knob-and-tube, no GFCI)</td><td className="p-3">Endemic to pre-1940 stock</td><td className="p-3">$8,000–$20,000 for full rewire</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Plumbing (galvanized pipes, lead service line)</td><td className="p-3">Very common in pre-1950 construction</td><td className="p-3">$5,000–$18,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Structural (foundation, framing, floor system)</td><td className="p-3">Common in older balloon-frame; soil settling on river bluff</td><td className="p-3">$10,000–$50,000+</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Vacant building registration</td><td className="p-3">Required for vacant properties in City of Peoria</td><td className="p-3">Annual registration fee + inspection compliance</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Asbestos or lead paint (not disclosed)</td><td className="p-3">Nearly universal in pre-1980 construction</td><td className="p-3">$3,000–$15,000 (abatement)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            When remediation costs across multiple violation categories total $30,000–$80,000 on a property worth $50,000–$90,000 in as-is condition, the economics of remediation are clear: a cash sale as-is is almost always the better financial decision.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Municipal Liens — How They Affect the Title</h2>
          <p className="text-gray-700 mb-4">
            Municipal fine liens and code enforcement judgments recorded against a Peoria property title must be addressed at closing. The title company conducting the sale will perform a title search that identifies all recorded liens — including City of Peoria code enforcement liens, Peoria County property tax liens, and any other recorded judgments.
          </p>
          <p className="text-gray-700 mb-4">
            At closing, these liens are typically paid from the sale proceeds before the seller receives their net proceeds. If the total of all liens (mortgage, tax, municipal) exceeds the sale price, a short payoff negotiation may be required. USA Home Buyers works with experienced Peoria title companies who handle code violation lien clearance routinely.
          </p>
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), Peoria's ZHVI is $115,649. On a South Side property valued at $55,000 with a $12,000 accumulated code violation lien, a $50,000 cash offer would net $38,000 after lien clearance — still better than the alternative of facing a $30,000-$50,000 demolition cost on a property worth nothing to the city once demolished.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria Vacant Property Registration</h2>
          <p className="text-gray-700 mb-4">
            The City of Peoria requires owners of vacant residential buildings to register the property with the Code Enforcement Division and pay an annual registration fee. Failure to register generates additional violations on top of any underlying structural or maintenance issues. Vacant properties in South Peoria and East Bluff are actively monitored by city inspectors as part of the city's blight remediation initiative.
          </p>
          <p className="text-gray-700 mb-4">
            For owners of vacant Peoria properties — whether inherited, abandoned due to financial hardship, or left vacant after a tenant moved out — the registration requirement adds ongoing administrative burden and cost. A cash sale to USA Home Buyers eliminates the registration requirement by conveying ownership. We handle everything after closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Illinois Administrative Procedure Act — Your Rights in Code Enforcement</h2>
          <p className="text-gray-700 mb-4">
            Under the Illinois Administrative Procedure Act, 5 ILCS 100, property owners have procedural rights in any administrative enforcement action, including code violation proceedings. These rights include: notice of the alleged violation with specificity; the right to a hearing before a neutral hearing officer; the right to present evidence and cross-examine witnesses; and the right to appeal an adverse decision.
          </p>
          <p className="text-gray-700 mb-4">
            If you believe a Peoria code violation notice is incorrect or excessive, you can request a hearing. However, if the underlying violations are real — and in most cases they are — the hearing process delays but does not eliminate the compliance obligation. For owners who cannot fund remediation, selling to a cash buyer before fines escalate is the practical alternative to a protracted enforcement proceeding.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Peoria IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/fire-damage', label: 'Fire Damage' },
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

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria Property Tax and Code Violation Compounding</h2>
          <p className="text-gray-700 mb-4">
            Peoria County's median effective property tax rate is approximately 2.1–2.4% — above the national median. For an older South Side or East Bluff property assessed at $50,000, annual taxes may run $1,050–$1,200. When a property is also generating code violation fines, the combined annual carrying cost — taxes plus fines plus any deferred utility bills — can exceed $3,000–$5,000 per year on a property that is generating zero rental income.
          </p>
          <p className="text-gray-700 mb-4">
            Over three to five years of vacancy with open violations, the accumulated carrying cost can exceed the property's distressed-sale value. This creates a compounding problem: the longer the owner waits, the more the property's net equity erodes, and the fewer options remain. Selling to USA Home Buyers immediately stops the carrying cost clock and delivers whatever equity remains above the lien stack.
          </p>
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), the Peoria city ZHVI is $115,649. On a distressed South Side property worth $45,000 in as-is condition with $8,000 in accumulated code violation liens and $4,000 in delinquent property taxes, a $40,000 cash offer would deliver approximately $28,000 in net proceeds after clearing all encumbrances. That's $28,000 more than letting the property sit until the city demolishes it for $0 — or negative equity after the demolition cost lien is recorded.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood-Specific Code Enforcement Patterns</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">South Peoria and East Bluff — Active Blight Enforcement</h3>
          <p className="text-gray-700 mb-4">
            The City of Peoria's code enforcement activity is concentrated in South Peoria and East Bluff — the neighborhoods with the highest density of pre-1940 housing and the highest vacancy rates. These areas are part of the city's formal blight remediation initiatives, which means inspectors are more proactive in identifying and issuing violation notices than in other parts of the city.
          </p>
          <p className="text-gray-700 mb-4">
            For owners of South Side and East Bluff properties, the question is not whether enforcement activity will occur — it will — but how quickly they respond. A vacant property in these neighborhoods that is not registered with the City and shows signs of exterior deterioration will receive a violation notice within months of becoming vacant. Early action — selling before the fines escalate — preserves far more equity than waiting.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Bradley Park and Knoxville Corridor — Student Rental Damage</h3>
          <p className="text-gray-700 mb-4">
            The Bradley Park and Knoxville Avenue corridor neighborhoods are subject to a different code violation profile: student-rental damage complaints from neighbors and occasional interior-condition citations. These violations are typically less severe than structural issues but can accumulate if a landlord is managing multiple properties or has reduced involvement in the property.
          </p>
          <p className="text-gray-700 mb-4">
            For landlords in these areas with open violation notices and code-condition issues from years of student rental occupancy, USA Home Buyers purchases the property as-is. We factor the violation status into the offer and handle all post-closing compliance. Per Redfin (January 2026), the Peoria city median sale price is $139,000 — and for a code-impaired rental property, a cash sale at 65–75% of value in today's rising market may net more than waiting through a remediation and re-list cycle.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">How USA Home Buyers Handles Code Violation Properties</h2>
          <p className="text-gray-700 mb-4">
            Our process for code violation properties in Peoria is straightforward:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Call or submit:</strong> Provide the address and a summary of known violations. We don't need you to have a complete violation list — we conduct our own research.</li>
            <li><strong>Property assessment:</strong> We assess the property's condition and the scope of violations through our own evaluation process. No formal inspection contingency.</li>
            <li><strong>Written offer:</strong> We issue a written cash offer within 24 hours, with the violation status factored into the price. No conditions requiring cure.</li>
            <li><strong>Title search and lien resolution:</strong> The title company identifies all recorded code enforcement liens and other encumbrances. These are paid from sale proceeds at closing.</li>
            <li><strong>Closing:</strong> We close on the agreed timeline. You receive net proceeds after lien clearance. We assume all post-closing compliance obligations.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Call (888) 440-5250 today. We serve all of Peoria city and Peoria County, any violation status, any condition.
          </p>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Peoria IL Property with Code Violations?" sourcePage="/markets/peoria-il/code-violations" />
      </div>
    </>
  );
}
