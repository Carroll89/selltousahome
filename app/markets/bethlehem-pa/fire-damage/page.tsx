import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/fire-damage`;

export const metadata: Metadata = {
  title: 'Fire Damage Home Bethlehem PA',
  description:
    'Selling a fire-damaged house in Bethlehem PA? We buy fire and smoke damaged properties as-is — no repairs, no cleanup required. Cash offer in 24 hours, Northampton County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Bethlehem PA?',
    answer: "Yes. We buy fire and smoke damaged properties throughout Northampton County — from minor smoke damage to total structural losses. Fire damage doesn't stop a cash sale. We assess the property in current condition and make an offer that reflects the as-is value after the damage.",
  },
  {
    question: 'Should I work with my insurance company before selling?',
    answer: "That's a personal decision. If you have a homeowner's insurance claim outstanding, you typically have the right to settle the claim and then sell — or assign the insurance claim to the buyer as part of the transaction. We can purchase fire-damaged homes before or after insurance settlement. Discuss the specifics with your insurer and a PA real estate attorney.",
  },
  {
    question: 'Do I need to disclose fire damage when selling in Pennsylvania?',
    answer: "Yes. Pennsylvania's Real Estate Seller Disclosure Act requires sellers to disclose known material defects, including prior fire and smoke damage. This applies even to as-is sales. When selling to us, you disclose what you know — we factor it into the offer and take on the property in its current state.",
  },
  {
    question: 'What if the Bethlehem fire department has a condemnation order on the property?',
    answer: "A condemnation order doesn't prevent a sale — it restricts occupancy. We purchase condemned fire-damaged properties and handle the remediation or demolition after closing. Bethlehem row homes with fire damage that spreads to adjoining units require careful handling — we have experience with attached structures.",
  },
  {
    question: 'How do you calculate the cash offer on a fire-damaged Bethlehem home?',
    answer: "We estimate the after-repair value (ARV) — what the property would be worth fully restored — and subtract the cost of remediation and repair. On a $320,000 Bethlehem median home with significant fire damage, restoration might cost $80,000-$150,000. Our offer reflects a realistic investor return after those costs. According to Redfin, Bethlehem's market is active and well-priced, which helps even damaged properties hold underlying value.",
  },
  {
    question: 'How fast can you close on a fire-damaged Bethlehem property?',
    answer: "We close in 7-14 days from the signed purchase agreement. There are no inspection contingencies or financing delays. If you have insurance negotiation underway, we can also structure a longer close window to let that process finish first.",
  },
];

export default function BethlehemFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('Selling a Fire-Damaged House in Bethlehem PA — Northampton County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/bethlehem-pa-hero-640.jpg 640w, /images/optimized/bethlehem-pa-hero-828.jpg 828w, /images/optimized/bethlehem-pa-hero-1080.jpg 1080w, /images/optimized/bethlehem-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bethlehem-pa-hero-1200.jpg"
            alt="Bethlehem PA fire damaged home — cash buyer"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bethlehem-pa" className="hover:text-white">Bethlehem PA</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Fire-Damaged House in Bethlehem PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Fire or smoke damage? We buy fire-damaged properties throughout Bethlehem PA and Northampton County —
              no cleanup, no repairs, no restoration required before closing.
              Written cash offer in 24 hours.
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
            <CashOfferForm variant="hero" sourcePage="/markets/bethlehem-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Fire Damage in Bethlehem&apos;s Row Home Stock
          </h2>
          <p className="text-gray-700 mb-3">
            Bethlehem&apos;s South Side row homes are attached — a fire in one unit commonly spreads to adjoining
            structures. The 1890s-1930s construction uses original wood framing, lathe-and-plaster walls, and
            in some cases, older wiring that wasn&apos;t designed for modern electrical loads. When fires happen,
            the damage pattern in attached row homes is different from isolated single-family structures.
          </p>
          <p className="text-gray-700 mb-3">
            Retail buyers avoid fire-damaged homes — insurance requirements, lender requirements, and the
            complexity of restoration make conventional sales impractical. Cash buyers operate differently:
            we assess the current state, price accordingly, and handle the remediation as part of our investment.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/RealEstate/Pages/default.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">PA Real Estate Commission — Seller Disclosure Act (dos.pa.gov)</a>,
            fire and smoke damage is a material defect requiring disclosure in Pennsylvania property sales.
            That disclosure happens to us — we factor it into the offer and take responsibility for the condition.
            You&apos;re not hiding anything from buyers who then back out. We know exactly what we&apos;re purchasing.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.bethlehem-pa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">City of Bethlehem (bethlehem-pa.gov)</a>,
            properties under an active condemnation or unsafe structure order must resolve their status before
            they can be re-occupied — but they can be sold. We purchase condemned fire-damaged properties and
            manage the remediation or demolition process after closing, including navigating city re-inspection
            requirements.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Fire-Damaged Bethlehem Property"
          subheadline="No cleanup required. We buy as-is. Written offer in 24 hours."
          sourcePage="/markets/bethlehem-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Fire Damage Home Sales in Bethlehem PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/bethlehem-pa/code-violations" className="text-brand-primary hover:underline">Code violations in Bethlehem PA →</Link></li>
            <li><Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline">Bethlehem PA market overview →</Link></li>
            <li><Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Selling a house as-is in Pennsylvania →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell the Fire-Damaged Bethlehem Property?" sourcePage="/markets/bethlehem-pa" />
      </div>
    </>
  );
}
