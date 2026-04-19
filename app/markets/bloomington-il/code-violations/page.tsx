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

const pageUrl = `${SITE_URL}/markets/bloomington-il/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House with Code Violations Bloomington IL',
  description:
    'Selling a Bloomington IL house with code violations? City of Bloomington Code Enforcement, 765 ILCS 77 disclosure, as-is cash sale. No repairs required. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a Bloomington IL house with open code violations?',
    answer: "Yes. Open code violations do not legally prevent the sale of a property in Illinois. You are required under the Illinois Residential Real Property Disclosure Act (765 ILCS 77/) to disclose known material defects and any known code violations on the mandatory disclosure form — but disclosure is not the same as remediation. An as-is cash sale allows you to sell the property without making any repairs. The buyer takes the property knowing about the violations and prices accordingly. USA Home Buyers purchases Bloomington homes with open code violations as-is — no repairs, no remediation, no compliance timeline required from you. Call (888) 440-5250.",
  },
  {
    question: 'What is the City of Bloomington Code Enforcement process?',
    answer: "The City of Bloomington Code Enforcement Division, part of the Neighborhood Services Division (bloomingtonil.gov), enforces the International Property Maintenance Code as adopted locally. Violations are typically reported by neighbors, identified by city inspectors during sweeps, or discovered during routine property review. After a violation notice is issued, the property owner receives a compliance period — typically 30-60 days for minor violations, shorter for safety-critical issues (structural instability, active rodent infestation, utilities disconnected). Non-compliance leads to re-inspection, potential fines, and possible condemnation proceedings. Selling to a cash buyer with no repair contingency removes the compliance burden from the seller.",
  },
  {
    question: 'Do I have to disclose code violations when selling in Illinois?',
    answer: "Yes. Under the Illinois Residential Real Property Disclosure Act, 765 ILCS 77/, sellers must disclose known material defects including any governmental agency orders or requirements that have not been satisfied and any conditions that materially affect the property's physical condition. Active code violations must be disclosed on the mandatory Property Condition Disclosure Statement (PCDS). Willful concealment of known violations can expose a seller to post-closing liability. Selling as-is to USA Home Buyers satisfies the disclosure requirement — you disclose what you know; our offer price reflects the as-is condition including violations.",
  },
  {
    question: 'What neighborhoods in Bloomington have the most code violations?',
    answer: "Per Bloomington market data and Forge's research on Bloomington housing stock, the highest concentration of code violations is in West Bloomington / Sunset Hills (pre-1950 housing stock, the city's oldest sections), Downtown Bloomington (late 19th and early 20th century worker-class housing), and the Alton-Oakland area (older bungalow stock). These neighborhoods have the highest share of pre-1940 construction — balloon-frame homes with original electrical and plumbing systems that no longer meet current code. Founders' Grove Historic District properties also carry code issues but are more likely to be retained and renovated due to higher intrinsic value.",
  },
  {
    question: 'Can a house with code violations qualify for conventional financing?',
    answer: "Often not. Conventional lenders (Fannie Mae/Freddie Mac guidelines) typically require properties to be in habitable condition and free of active code violations before approving financing. FHA and VA loans impose similar requirements through their appraisal standards. A property with active City of Bloomington code violations — electrical hazards, structural issues, rodent infestation, disconnected utilities — is unlikely to pass a lender's appraisal as-is. This is why the retail buyer pool for code-violation properties is narrow: only cash buyers or hard-money lenders who don't require conventional appraisal standards can purchase them. USA Home Buyers is exactly that buyer.",
  },
  {
    question: 'What happens to code violation fines and liens at closing?',
    answer: "Municipal code violation fines that have been reduced to liens against the property must be addressed at closing — they appear in the title search and encumber the title. The title company will require payoff of recorded code-violation liens as part of the closing. Unrecorded violation notices that have not yet been adjudicated may not appear in the title search; these become the new owner's responsibility after closing. USA Home Buyers factors all known code violations and potential liens into our offer price. We handle lien payoffs at closing from the proceeds — you receive the net offer amount without separately arranging lien payoffs.",
  },
];

export default function BloomingtonCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema("Selling a House with Code Violations in Bloomington IL — What Owners Need to Know", pageUrl, '2026-04-19'),
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
            alt="Bloomington IL home with code violations — Sell As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
          </div>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Bloomington IL Home With Code Violations — As-Is, No Repairs
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Selling a Bloomington IL house with open code violations is legal. Per 765 ILCS 77/ (Illinois Residential Real Property Disclosure Act), you must disclose known violations — but disclosure is not remediation. City of Bloomington Code Enforcement and Neighborhood Services Division issue violations primarily in West Bloomington, Downtown, and Alton-Oakland pre-1950 stock. USA Home Buyers purchases code-violation properties as-is, handles lien payoffs at closing. Written offer in 24 hours. Call (888) 440-5250.
              </p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 (888) 440-5250 — 24/7
            </a>
          </div>

      <VideoEmbed
        src="/videos/bloomington-il/code-violations.mp4"
        title="Sell a House With Code Violations in Bloomington IL"
        poster="/videos/bloomington-il/code-violations-poster.jpg"
        subtitle="Open violations, failed inspections — we buy as-is in McLean County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Code violations on your Bloomington IL property? USA Home Buyers purchases properties with open violations as-is. No repairs, no permits on your end. Cash offer in 24 hours. Call 888-440-5250.
        </div>
      </details>
          <CashOfferForm
            variant="hero"
            headline="Get Your Cash Offer — Code Violations Welcome"
            subheadline="We buy Bloomington homes with open violations as-is. No repairs. No compliance timeline."
            sourcePage="/markets/bloomington-il/code-violations"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Bloomington — Why They're More Common Than You Think</h2>
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), the Bloomington Home Value Index stands at $228,634 — but underlying that figure is a housing stock with a significant share of pre-1950 construction concentrated in the western and downtown portions of the city. West Bloomington, Sunset Hills, Downtown Bloomington, and the Alton-Oakland area contain homes built in the 1920s-1940s with electrical systems, plumbing, and structural elements that were code-compliant at the time of construction but are decades behind current standards.
          </p>
          <p className="text-gray-700 mb-4">
            The City of Bloomington's Code Enforcement Division, operating through the Neighborhood Services Division (bloomingtonil.gov), actively enforces the International Property Maintenance Code in these neighborhoods. Common code violations in Bloomington's older housing stock:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Deteriorated or absent exterior materials (siding, fascia, soffit)</li>
            <li>Roof deficiencies visible from street</li>
            <li>Inoperable vehicles on property</li>
            <li>Overgrown vegetation or debris accumulation</li>
            <li>Structural deficiencies (sagging porches, unstable stairs)</li>
            <li>Broken or boarded windows</li>
            <li>Disconnected utilities (chronic vacancy)</li>
            <li>Rodent or pest infestation (particularly in chronically vacant pre-war homes)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            For an owner facing a City of Bloomington code enforcement order with a 30-60 day compliance deadline and no capacity to fund the repairs, a cash sale before the deadline is the cleanest exit. The sale eliminates the compliance burden entirely — the new owner takes responsibility for all violations post-closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Disclosure Law — What You Must Tell Buyers</h2>
          <p className="text-gray-700 mb-4">
            Per Redfin (March 2026), the Bloomington city median sale price is $300,000. The Illinois Residential Real Property Disclosure Act (765 ILCS 77/) requires sellers of residential real property (1-4 units) to complete and deliver a mandatory Property Condition Disclosure Statement (PCDS) to the buyer before the contract is signed. The PCDS specifically asks about:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Any governmental agency order, judgment, citation, or requirement relating to the property that has not been satisfied</li>
            <li>Any structural or mechanical defects of which the seller is aware</li>
            <li>Any conditions affecting the electrical, plumbing, or HVAC systems</li>
            <li>Any environmental conditions (lead paint pre-1978, asbestos, radon)</li>
            <li>Any flooding history</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Key point: Illinois does not permit a "cash credit in lieu of disclosure." The PCDS is mandatory regardless of whether the sale is as-is or conventional. An as-is sale does not waive the disclosure obligation — it means only that the seller will not make repairs.
          </p>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, you complete the PCDS disclosing what you know about the property's condition and any known code violations. Our offer already reflects the as-is condition — we don't use the disclosure to renegotiate the price. Contrast this with a retail buyer who receives the PCDS and typically uses any disclosed deficiency as leverage for repair credits or price reductions.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Historic District Properties and Code Compliance — A Special Challenge</h2>
          <p className="text-gray-700 mb-4">
            Bloomington's five historic districts present a unique complication for code-violation sellers. Properties within the Founders' Grove Historic District, Downtown Bloomington Historic District, or the other three designated districts require Bloomington Historic Preservation Commission (HPC) approval for exterior modifications. This creates a potential conflict between:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Code Enforcement's requirement:</strong> Replace deteriorated siding with vinyl or fiber cement (lower cost)</li>
            <li><strong>HPC's requirement:</strong> Replace in kind with historically appropriate materials (often wood, at higher cost)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            When code enforcement and historic preservation requirements point in different directions, the owner faces a more complex and expensive compliance path than would exist for a non-historic-district property. This conflict is particularly acute in Founders' Grove, where Victorian-era homes with balloon-frame construction and original materials may need repairs that HPC requires be done at premium cost.
          </p>
          <p className="text-gray-700 mb-4">
            Cash buyers like USA Home Buyers don't require lender-mandated repairs, don't need conventional appraisal approval, and can work with historic district requirements post-closing. Selling as-is to a cash buyer transfers the HPC compliance challenge to a buyer who is equipped to navigate it.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violation Liens — How They're Handled at Closing</h2>
          <p className="text-gray-700 mb-4">
            Code violation fines that have been formally adjudicated and recorded against the property title appear in the title search. The title company will require payoff of all recorded liens as a condition of issuing a clear title policy. When selling to USA Home Buyers:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
            <li>We receive the preliminary title report during the inspection period</li>
            <li>Any recorded code-violation liens are identified</li>
            <li>Payoff amounts are included in our closing cost assumption</li>
            <li>At closing, the title company pays off recorded liens from the gross sale proceeds</li>
            <li>You receive the net agreed amount — the lien payoffs come out of our proceeds, not as an additional cost to you beyond the agreed price</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Unrecorded violation notices — those not yet adjudicated or reduced to a lien — may not appear in the title search. We factor these into our pricing based on the violation notices you share with us. The new owner takes responsibility for unrecorded violations after closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Condemnation and Vacant Property Orders — The End of the Enforcement Spectrum</h2>
          <p className="text-gray-700 mb-4">
            Most City of Bloomington code violations are remediation orders — the owner is required to repair or remove a specific condition. At the far end of the enforcement spectrum, the City can issue a condemnation or dangerous building order when a structure is unsafe for occupancy. A condemnation order typically requires the building to be vacated and prohibits re-occupancy until a licensed contractor certifies the condition has been remediated to current code.
          </p>
          <p className="text-gray-700 mb-4">
            Condemned properties are among the most difficult to sell through retail channels. Conventional lenders will not finance the purchase of a condemned structure. The buyer pool narrows to cash buyers and hard-money investors. In a city with Bloomington&apos;s relatively high median income ($77,384 per ACS 2024), condemned properties are concentrated in the west side and downtown neighborhoods where older pre-1940 construction is most prevalent.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases condemned and severely code-violating properties. We evaluate the structure&apos;s land value, salvageable components, and rehabilitation cost to determine a cash offer. In some cases, the optimal buyer outcome on a condemned West Bloomington pre-war home is a land-value-plus acquisition where the structure is demolished and the lot redeveloped — and the offer reflects that use case. We are transparent about our analysis when that is the situation.
          </p>
          <p className="text-gray-700 mb-4">
            If your Bloomington property has received a condemnation order or dangerous building notice from the City of Bloomington Building and Inspection Division, do not assume you cannot sell it. Call (888) 440-5250 for a no-obligation assessment. The condemnation order does not prevent a voluntary sale between willing parties; it restricts occupancy and use until the building department certifies remediation is complete. Selling as-is to USA Home Buyers transfers the remediation obligation, the compliance timeline, and the ongoing enforcement correspondence to a buyer who is equipped and willing to manage it. You receive your proceeds at closing and exit the property and the enforcement process simultaneously. We can close the transaction with violations in place and handle remediation or demolition as the new owner, entirely independent of the seller after closing.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Code Violations in Bloomington IL — Frequently Asked Questions" />

        <section className="my-6 bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="text-gray-700 text-sm">
            <strong>Contact:</strong> City of Bloomington Neighborhood Services Division — for code enforcement status inquiries: <strong>bloomingtonil.gov</strong>. McLean County Recorder of Deeds for lien searches: 104 W. Front Street, Bloomington, IL 61701. USA Home Buyers for as-is cash offers on code-violation properties: <a href="tel:+18884405250" className="text-brand-primary font-medium">(888) 440-5250</a>.
          </p>
        </section>

        <CashOfferForm variant="footer" headline="Sell Your Bloomington IL Code-Violation Home — As-Is" sourcePage="/markets/bloomington-il/code-violations" />
      </div>
    </>
  );
}
