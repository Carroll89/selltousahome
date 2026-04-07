import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Selling a Hoarding Property in Pennsylvania — Cash Buyers',
  description:
    'Need to sell a severely cluttered or hoarding property in PA? Cash buyers purchase hoarding homes as-is with no cleanup required.',
  alternates: { canonical: 'https://selltousahome.com/guides/hoarding-property' },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to clean out a hoarding property before selling?',
    answer:
      'No — not when selling to a cash buyer. We purchase hoarding properties as-is. Leave everything. Take what you want, leave everything else. We handle the cleanout after closing.',
  },
  {
    question: 'Will you still make an offer if you can\'t fully inspect the property?',
    answer:
      'Yes. We\'re experienced evaluating hoarding and cluttered properties where full access may be limited. We factor in condition uncertainty into our offer and proceed. We do not require a pristine property or open access to every room.',
  },
  {
    question: 'How do you determine the value of a hoarding property?',
    answer:
      'We use county tax records, comparable sales in the area, aerial/external assessment, and what we can observe. We factor in the cost of cleanout, potential hidden damage (structural, pest, mold, water), and repairs needed to bring the property to market condition. Our offer reflects these unknowns with appropriate margin built in.',
  },
  {
    question: 'What if there are biohazard or pest issues?',
    answer:
      'We purchase properties with pest infestations, animal hoarding situations, and biohazard conditions. These are specialized cleanup situations that we coordinate after purchase. You are not expected to manage remediation before the sale.',
  },
  {
    question: 'Can I sell a hoarding property that I inherited?',
    answer:
      'Yes — this is one of the most common situations we see. An adult child inherits a severely cluttered parent\'s home and has no practical way to clean it out, especially from out of state. Cash buyers are purpose-built for exactly this situation.',
  },
];

const pageUrl = `${SITE_URL}/guides/hoarding-property`;

export default function HoardingPropertyGuidePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling a Hoarding Property in Pennsylvania', pageUrl),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/guides" className="hover:text-white">Guides</Link> › Hoarding Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Hoarding Property in Pennsylvania
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You don&apos;t have to clean it out, fix it up, or make it presentable. Cash buyers purchase severely
              cluttered and hoarding properties as-is — take what you want, leave everything else. Written offer
              in 24 hours.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Call {PHONE} — No judgment, no pressure
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/hoarding-property" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer</h2>
            <p className="text-gray-700 text-sm">
              We purchase hoarding properties throughout Pennsylvania in any condition — no cleanup required.
              You take what you want and leave everything else. We handle all cleanout, remediation, and repairs
              after closing. Cash offer in 24 hours, close in 7-14 days.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why Traditional Sales Don&apos;t Work for Hoarding Properties
            </h2>
            <p className="text-gray-700 mb-4">
              Selling a hoarding property on the MLS is almost never practical:
            </p>
            <ul className="space-y-3 text-gray-700 text-sm mb-4">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✗</span>
                <span><strong>Lenders won&apos;t finance it.</strong> FHA, VA, and conventional lenders require habitable, accessible properties. A hoarding home typically fails minimum property standards.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✗</span>
                <span><strong>Buyers can&apos;t do a proper inspection.</strong> Inspectors need access to all areas. In a hoarding property, they can&apos;t reach walls, floors, ceilings, or mechanicals — so they decline to inspect or note severe limitations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✗</span>
                <span><strong>Cleanout is expensive and difficult.</strong> Professional estate cleanouts run $3,000-$15,000+ for severe hoarding situations. Coordinating this from out of state — often the case for inherited properties — adds time and complexity.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✗</span>
                <span><strong>Photos can&apos;t be taken for MLS.</strong> No presentable photos means no online marketing, which means no buyer interest.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              How We Handle Hoarding Property Purchases
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'You contact us — no obligation',
                  desc: 'Tell us about the property location and what you know about its condition. We have no judgment about the situation — we\'ve seen everything. You do not need to send photos or provide detailed descriptions.',
                },
                {
                  step: '2',
                  title: 'We research the property and schedule a visit if helpful',
                  desc: 'We look at county records, aerial views, and exterior condition. If helpful, we can do a brief walkthrough — we don\'t need to fully inspect every room to make an offer on a hoarding property.',
                },
                {
                  step: '3',
                  title: 'Written cash offer within 24 hours',
                  desc: 'We make a written offer that accounts for cleanout costs, potential hidden damage, and the as-is condition. The offer is our best assessment of what we can pay given the unknowns involved.',
                },
                {
                  step: '4',
                  title: 'Close in 7-14 days — take what you want before closing',
                  desc: 'You take anything of value or sentimental importance before we close. Everything left in the property becomes ours at closing. We manage all cleanout, disposal, and remediation after.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5">
                  <span className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0 mt-1">{item.step}</span>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Common Situations — We&apos;ve Seen Them All
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Inherited hoarding property', desc: 'You\'ve inherited a parent\'s home packed floor-to-ceiling. You live out of state. You don\'t know where to start. We\'ve handled dozens of these.' },
                { title: 'Animal hoarding', desc: 'Properties with large numbers of animals often have extensive damage — flooring, drywall, odor remediation required. We purchase these as-is.' },
                { title: 'Collector estates', desc: 'Sometimes the "clutter" is a lifetime of collections, antiques, or materials with unknown value. We give you time to remove whatever you want before closing.' },
                { title: 'Long-vacant accumulated property', desc: 'A home that sat empty for years while accumulating contents and deferred maintenance. We purchase long-vacant properties in any state.' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Property — As-Is"
            subheadline="No cleanup needed. No judgment. Written offer in 24 hours."
            sourcePage="/guides/hoarding-property"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions — Hoarding Properties"
          />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Sell As-Is Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/vacant-property" className="text-brand-primary hover:underline">Vacant Property Guide</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
