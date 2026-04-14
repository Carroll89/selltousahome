/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wilmingtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/fire-damage`;

export const metadata: Metadata = {
  title: 'Fire Damage Home Wilmington DE',
  description:
    'Sell a fire-damaged house in Wilmington DE. We buy fire and smoke damaged properties as-is — no cleanup, no repairs. Cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a fire-damaged house in Wilmington DE?',
    answer: "Yes. We purchase fire-damaged, smoke-damaged, and water-damaged properties throughout Wilmington and New Castle County. You don't need to clean up, make repairs, or restore anything. We buy the property exactly as it stands and handle all remediation after closing.",
  },
  {
    question: 'What if my insurance company already issued a settlement for the fire damage?',
    answer: "A fire insurance settlement complicates the title picture — the settlement proceeds may need to be factored into the sale, particularly if there's a mortgage. We work through these situations with title companies and mortgage servicers. Call us to discuss your specific circumstances; these are solvable but require coordination.",
  },
  {
    question: 'Do I need to disclose fire damage when selling in Delaware?',
    answer: "Delaware Code Title 6, §2572 requires sellers to complete a Seller's Disclosure of Real Property Condition form when selling to retail buyers. Known fire damage is a material fact that must be disclosed. However, in a cash as-is sale to an investor like USA Home Buyers, sellers typically execute a waiver acknowledging the as-is condition, and full disclosure is built into the purchase agreement structure.",
  },
  {
    question: 'What about smoke damage — do you buy smoke-only damage?',
    answer: "Yes. Smoke damage affects structural materials, HVAC systems, insulation, and finishes throughout a row home. Even 'minor' smoke damage from a neighboring unit (Wilmington's attached row homes share party walls) can spread odors and deposits throughout. We buy regardless of the extent of smoke or fire damage.",
  },
  {
    question: 'How quickly can you close on a fire-damaged Wilmington property?',
    answer: "We close in 7-14 days on fire-damaged properties, subject to clear title. If insurance claims are open or there are outstanding liens related to the damage, timeline may vary. We work through title complexities efficiently — call us to get a written offer and timeline specific to your property.",
  },
];

export default function WilmingtonFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        wilmingtonLocalBusinessSchema,
        articleSchema('Selling a Fire-Damaged House in Wilmington DE', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/wilmington-de-hero-640.jpg 640w, /images/optimized/wilmington-de-hero-828.jpg 828w, /images/optimized/wilmington-de-hero-1080.jpg 1080w, /images/optimized/wilmington-de-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/wilmington-de-hero-1200.jpg"
            alt="Wilmington DE fire damaged house — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/wilmington-de" className="hover:text-white">Wilmington DE</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Fire-Damaged House in Wilmington DE — No Cleanup Required
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Fire or smoke damage in a Wilmington row home doesn't have to mean months of cleanup, contractor
              negotiations, and uncertainty. We purchase fire-damaged properties as-is, as-found.
              Written cash offer in 24 hours.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors"
            >
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/wilmington-de" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Fire Damage in Wilmington's Row Home Stock</h2>
          <p className="text-gray-700 mb-4">
            Wilmington's attached row homes create specific fire risk patterns. When one unit in a row burns,
            smoke, water (from firefighting), and structural damage can spread to neighboring units through
            shared party walls, attic spaces, and basement connections. The City of Wilmington Fire Department
            responds to residential fires throughout Southbridge, West Center City, and Brandywine Village regularly.
          </p>
          <p className="text-gray-700 mb-4">
            Owners of fire-damaged row homes face compounding challenges: the property may be uninhabitable,
            the insurance claim may not cover full restoration, contractors may be unavailable or expensive,
            and the City's code enforcement may issue condemnation notices on severely damaged structures.
          </p>
          <p className="text-gray-700 mb-4">
            We've purchased fire-damaged properties at every severity level — from kitchen fires with cosmetic
            damage to total-loss structural fires. We handle all assessment, remediation planning, and code
            compliance after closing. You receive a written cash offer based on the property's as-damaged
            condition.
          </p>
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-6">
            <h3 className="font-bold text-brand-dark mb-2">Delaware Disclosure Note</h3>
            <p className="text-gray-700 text-sm">
              Per Delaware Code Title 6, §2572, sellers must complete a Seller's Disclosure of Real Property
              Condition form for retail sales. In an as-is cash sale to an investor, the purchase agreement
              explicitly acknowledges the property's damaged condition — no retail-style disclosure form is
              required. Our title company handles all required documentation.
            </p>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Fire-Damaged Wilmington Property"
          subheadline="No cleanup, no repairs, no obligation. Written offer in 24 hours."
          sourcePage="/markets/wilmington-de"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Fire Damage in Wilmington DE" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/wilmington-de/code-violations" className="text-brand-primary hover:underline">Code Violations Property in Wilmington DE →</Link></li>
            <li><Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">Wilmington DE Cash Home Buyers →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
