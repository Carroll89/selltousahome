/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire Damaged House Youngstown OH',
  description:
    'Selling a fire-damaged house in Youngstown OH? We buy fire and smoke-damaged properties as-is. No cleanup, no remediation. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a fire-damaged house in Youngstown OH?',
    answer: "Yes. We buy fire-damaged properties throughout Youngstown and Mahoning County — structure fires, kitchen fires, electrical fires, and smoke damage. You don't need to remediate, rebuild, or clean before selling. We assess the property as-is and make a written offer within 24 hours.",
  },
  {
    question: 'What happens with my homeowner\'s insurance claim?',
    answer: "You can sell a fire-damaged property before, during, or after an insurance claim. If you've already received an insurance payout for the damage, you keep that money — it's separate from the sale proceeds. If a claim is pending, we can structure the closing around the claim timeline. Consult your insurance adjuster and attorney about the specifics of your situation.",
  },
  {
    question: 'Will the city condemn my Youngstown house after a fire?',
    answer: "Significant structural fire damage often triggers a condemnation order from the City of Youngstown's Inspections Division. A condemn notice makes the property uninhabitable but doesn't prevent a sale. We buy condemned, fire-damaged properties. The condemnation transfers with the property and becomes the buyer's responsibility after closing.",
  },
  {
    question: 'Do I need to disclose fire damage when selling in Ohio?',
    answer: "Yes. Ohio's Residential Property Disclosure Form (ORC § 5302.30) requires sellers to disclose known material defects, including fire and smoke damage. When selling to us, the disclosure process is straightforward — we assess the damage directly during our walkthrough and factor it into our offer. No surprises at closing.",
  },
  {
    question: 'How quickly can you close on a fire-damaged Youngstown property?',
    answer: "Typically 7-14 days from accepted offer, assuming clear title. Fire-damaged properties may have insurance liens or outstanding claims that need coordination — we handle that as part of the process. Call us and we'll assess the specific situation.",
  },
];

export default function YoungstownFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('Selling a Fire-Damaged House in Youngstown OH', pageUrl, '2026-04-14'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/youngstown-oh-hero-640.jpg 640w, /images/optimized/youngstown-oh-hero-828.jpg 828w, /images/optimized/youngstown-oh-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-hero-1200.jpg"
            alt="Youngstown OH fire-damaged house — sell as-is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged Youngstown OH House — No Cleanup Required
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Fire damage, smoke damage, partial structure loss — we buy fire-damaged homes in
              Youngstown and Mahoning County as-is. No remediation, no demo, no repairs before
              closing. Written offer in 24 hours.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3"
            >
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/youngstown-oh" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Fire Damage in Youngstown — What You're Dealing With</h2>
          <p className="text-gray-700 mb-4">
            Fire damage in Youngstown often compounds existing structural issues. The pre-1950 wood-frame
            housing stock — knob-and-tube wiring, old insulation, balloon-frame construction — is
            particularly vulnerable to electrical fires and fast spread. When a fire hits a property
            that's already dealing with deferred maintenance and aging systems, the remediation math
            rarely works out.
          </p>
          <p className="text-gray-700 mb-4">
            The typical path: structure fire → insurance claim → condemnation order from the City of
            Youngstown → adjuster assessment → owner left trying to figure out what to do with a
            condemned property worth less than the remediation cost. We buy at every point in that
            process. If you have a fire-damaged property in Youngstown and need to move on, call us.
          </p>
          <p className="text-gray-700">
            Ohio law requires disclosure of fire damage under the{' '}
            <a href="https://codes.ohio.gov/ohio-revised-code/section-5302.30" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Ohio Residential Property Disclosure Form (ORC § 5302.30)</a>.
            When selling to a cash buyer like us, disclosure is straightforward — we see the property directly.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer on Your Fire-Damaged Youngstown Property"
          subheadline="Any damage level. No cleanup. Written offer in 24 hours."
          sourcePage="/markets/youngstown-oh"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Fire-Damaged Properties in Youngstown OH" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/code-violations" className="text-brand-primary hover:underline">Code Violations in Youngstown OH →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
