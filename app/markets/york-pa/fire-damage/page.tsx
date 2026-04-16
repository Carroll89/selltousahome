/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/fire-damage`;

export const metadata: Metadata = {
  title: 'Fire Damage Home York PA',
  description:
    'Selling a fire-damaged house in York PA? We buy fire and smoke damaged properties as-is — no repairs, no cleanup required. Cash offer in 24 hours, York County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in York PA?',
    answer: "Yes. We buy fire and smoke damaged properties throughout York County — from minor smoke damage to total structural losses. Fire damage doesn't stop a cash sale. We assess the property in current condition and make an offer that reflects the as-is value after the damage.",
  },
  {
    question: 'Should I work with my insurance company before selling?',
    answer: "That's a personal decision. If you have an outstanding homeowner's insurance claim, you can settle the claim and then sell — or assign the insurance claim to the buyer as part of the transaction. We can purchase fire-damaged York homes before or after insurance settlement. Discuss specifics with your insurer and a PA real estate attorney.",
  },
  {
    question: 'Do I need to disclose fire damage when selling in Pennsylvania?',
    answer: "Yes. According to the PA Real Estate Seller Disclosure Act, sellers must disclose known material defects including prior fire and smoke damage. This applies even to as-is sales. When selling to us, you disclose what you know — we factor it into the offer and take on the property in its current state.",
  },
  {
    question: 'What if the City of York has a condemnation order on the property?',
    answer: "A condemnation order doesn't prevent a sale — it restricts occupancy. We purchase condemned fire-damaged York properties and handle the remediation or demolition after closing. York's attached row homes require careful handling when fire spreads to adjoining units — we have experience with these attached-structure situations.",
  },
  {
    question: 'How do you calculate the cash offer on a fire-damaged York home?',
    answer: "We estimate the after-repair value (ARV) — what the property would be worth fully restored — and subtract the cost of remediation and repair. On a York City property with significant fire damage, restoration costs vary widely depending on structural integrity. According to Redfin, York City's median sale price is $165,850, which helps establish the ARV baseline even for damaged properties.",
  },
];

export default function YorkFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('Selling a Fire-Damaged House in York PA — York County', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/york-pa-hero-640.jpg 640w, /images/optimized/york-pa-hero-828.jpg 828w, /images/optimized/york-pa-hero-1080.jpg 1080w, /images/optimized/york-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/york-pa-hero-1200.jpg"
            alt="York PA fire damaged home — cash buyer"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/york-pa" className="hover:text-white">York PA</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Fire-Damaged House in York PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Fire or smoke damage? We buy fire-damaged properties throughout York PA and York County —
              no cleanup, no repairs, no restoration required before closing.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ No cleanup required</span>
              <span>✓ Condemned properties OK</span>
              <span>✓ Insurance claim in progress — fine</span>
              <span>✓ Close in 7-14 days</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/york-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, USA Home Buyers buys fire-damaged houses in York, PA — as-is, in any condition. Whether there's partial smoke damage to one room or the structure is a total loss, we assess and purchase in current condition. No repairs, no insurance coordination required from the seller. We close in as few as 7 days. Written cash offer within 24 hours.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Fire Damage in York's Row Home Stock
          </h2>
          <p className="text-gray-700 mb-3">
            York City's attached row homes are part of what makes the city distinctive — and part of what
            makes fire damage more complex. The 1890s-1930s construction uses original wood framing and
            lathe-and-plaster walls. When fires happen in attached structures, damage commonly spreads
            to adjoining units, and remediation involves navigating shared wall and structural responsibility.
          </p>
          <p className="text-gray-700 mb-3">
            Retail buyers avoid fire-damaged homes — insurance requirements, lender restrictions, and
            restoration complexity make conventional sales impractical. Cash buyers operate differently:
            we assess the current state, price accordingly, and handle the remediation as part of the
            investment plan.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/RealEstate/Pages/default.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">PA Real Estate Commission — Seller Disclosure Act (dos.pa.gov)</a>,
            fire and smoke damage is a material defect requiring disclosure in Pennsylvania property sales.
            That disclosure happens to us — we factor it into the offer and take responsibility for the condition.
            You're not hiding anything from buyers who then back out.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://yorkcity.org/government/authorities-boards-and-commissions/codified-ordinances/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">City of York Codified Ordinances (yorkcity.org)</a>,
            properties under an active condemnation or unsafe structure order must resolve their status
            before re-occupancy — but they can be sold. We purchase condemned fire-damaged properties and
            manage the remediation or demolition process after closing, including navigating York City's
            re-inspection requirements.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Fire-Damaged York Property"
          subheadline="No cleanup required. We buy as-is. Written offer in 24 hours."
          sourcePage="/markets/york-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Fire Damage Home Sales in York PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/york-pa/code-violations" className="text-brand-primary hover:underline">Code violations in York PA →</Link></li>
            <li><Link href="/markets/york-pa" className="text-brand-primary hover:underline">York PA market overview →</Link></li>
            <li><Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Selling a house as-is in Pennsylvania →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell the Fire-Damaged York Property?" sourcePage="/markets/york-pa" />
      </div>
    </>
  );
}
