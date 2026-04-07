import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Your House Without Making Repairs — As-Is Cash Sale Guide',
  description:
    'You can sell a house as-is without repairs, cleanouts, or updates. Here\'s how it works, what "as-is" actually means legally, and what you can expect from the offer.',
  alternates: { canonical: `${SITE_URL}/resources/sell-house-without-repairs` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I really sell my house without making any repairs?',
    answer:
      'Yes. A cash buyer purchases the property in its current condition — no repairs required before or after the sale. You don\'t fix anything, clean anything, or remove anything you don\'t want to. That\'s the point.',
  },
  {
    question: 'What does "as-is" mean legally in Pennsylvania?',
    answer:
      'An as-is sale means the buyer accepts the property in its current condition. In Pennsylvania, sellers are still required to disclose known material defects on the state-mandated seller disclosure form (required for most residential sales). Selling as-is doesn\'t eliminate this disclosure obligation — but it does mean you won\'t be asked to repair anything.',
  },
  {
    question: 'Does selling as-is lower the price?',
    answer:
      'It changes how the price is calculated. A cash buyer factors in repair costs when making their offer — the worse the condition, the lower the offer. But you save the cost of doing those repairs yourself, plus the time and stress of managing contractors.',
  },
  {
    question: 'What types of damage can I sell as-is?',
    answer:
      'Most types: roof damage, foundation issues, mold, fire damage, water damage, outdated systems, structural problems, hoarding conditions, pest infestations. Cash buyers are experienced with distressed properties and have contractor relationships to handle the work after closing.',
  },
  {
    question: 'Do I need to clean out the house before selling?',
    answer:
      'No. You can leave furniture, personal belongings, debris, junk — whatever you don\'t want. Cash buyers handle cleanouts after closing as part of their renovation process.',
  },
];

const pageUrl = `${SITE_URL}/resources/sell-house-without-repairs`;

export default function SellWithoutRepairsPage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema('Sell Your House Without Making Repairs', pageUrl), faqSchema(FAQ_ITEMS)]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/resources" className="hover:text-white">Resources</Link> › Sell Without Repairs
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Without Making Any Repairs
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You don&apos;t have to fix anything. A cash buyer purchases the house exactly as it sits — roof problems,
              foundation issues, mold, whatever. Here&apos;s how it works.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Get a No-Repair Offer
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/resources/sell-house-without-repairs" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer</h2>
            <p className="text-gray-700 text-sm">
              Yes, you can sell without repairs. A cash buyer buys the property as-is — meaning you leave
              everything exactly as it is. No repairs, no cleanout, no contractor bids. The condition affects
              the offer price, but it doesn&apos;t prevent the sale. We&apos;ve bought houses with roof collapse, black
              mold, foundation cracks, fire damage, and decades of accumulated belongings.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">What &quot;As-Is&quot; Actually Means</h2>
            <p className="text-gray-700 mb-4">
              &quot;As-is&quot; has a specific meaning in real estate. It means:
            </p>
            <div className="space-y-3">
              {[
                {
                  label: '✓ The buyer accepts the property in its current condition',
                  detail: 'Whatever defects, damage, or issues exist at closing are the buyer\'s responsibility to address. You\'re not promising anything works perfectly.',
                },
                {
                  label: '✓ The buyer cannot ask you to make repairs after inspection',
                  detail: 'In a traditional sale, buyers use the inspection to negotiate repairs or price reductions. In a cash as-is sale, the buyer absorbs that risk.',
                },
                {
                  label: '✗ It does NOT eliminate seller disclosure obligations',
                  detail: 'Pennsylvania requires sellers to complete a disclosure form listing known material defects. Selling as-is doesn\'t waive this. You\'re required to disclose what you know — you\'re just not required to fix it.',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-lg p-4 ${item.label.startsWith('✗') ? 'border-orange-200 bg-orange-50' : 'border-green-200 bg-green-50'}`}>
                  <p className="font-semibold text-brand-dark text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What Conditions Can Be Sold As-Is?</h2>
            <p className="text-gray-700 mb-4">
              Most conditions that would scare off a traditional buyer are routine for cash buyers. We see these
              regularly:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Roof damage or full failure',
                'Foundation cracks or movement',
                'Mold or moisture damage',
                'Fire or smoke damage',
                'Water damage from flooding or leaks',
                'Outdated electrical (knob & tube, fuse boxes)',
                'Outdated or failing HVAC / plumbing',
                'Structural damage',
                'Pest infestation (termites, rodents)',
                'Hoarding conditions',
                'Vandalism or break-in damage',
                'Code violations and permit issues',
                'Back taxes and liens (handled at closing)',
                'Tenant damage',
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center text-sm text-gray-700">
                  <span className="text-brand-primary font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How Condition Affects the Offer</h2>
            <p className="text-gray-700 mb-4">
              Selling as-is means the cash buyer prices in the repair costs. The offer isn&apos;t arbitrary —
              it&apos;s calculated based on what the property would be worth after repairs, minus the cost of
              those repairs.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 text-sm">
              <p className="font-bold text-brand-dark mb-3">Example: Two identical houses, different conditions</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="font-semibold text-brand-dark mb-2">House A — Minimal repairs</p>
                  <div className="space-y-1 text-gray-700">
                    <div className="flex justify-between"><span>ARV</span><span>$150,000</span></div>
                    <div className="flex justify-between"><span>Estimated repairs</span><span>–$15,000</span></div>
                    <div className="flex justify-between"><span>Holding + costs</span><span>–$12,000</span></div>
                    <div className="flex justify-between font-bold text-brand-primary border-t pt-1"><span>Cash offer</span><span>~$97,000</span></div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="font-semibold text-brand-dark mb-2">House B — Significant repairs</p>
                  <div className="space-y-1 text-gray-700">
                    <div className="flex justify-between"><span>ARV</span><span>$150,000</span></div>
                    <div className="flex justify-between"><span>Estimated repairs</span><span>–$45,000</span></div>
                    <div className="flex justify-between"><span>Holding + costs</span><span>–$12,000</span></div>
                    <div className="flex justify-between font-bold text-brand-primary border-t pt-1"><span>Cash offer</span><span>~$67,000</span></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-3 text-xs">
                The difference in offers reflects the difference in repair costs — not arbitrary discounting.
                A legitimate buyer walks you through this math.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What You Don&apos;t Have to Do</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'No repairs', desc: 'Don\'t fix a thing. Not the roof, not the furnace, not the broken windows.' },
                { title: 'No cleanout', desc: 'Leave furniture, junk, boxes, whatever. We handle it after closing.' },
                { title: 'No staging', desc: 'No cleaning, painting, or making it "show ready." We see it as-is.' },
                { title: 'No open houses', desc: 'No strangers walking through your property on weekends.' },
                { title: 'No agent negotiations', desc: 'No back-and-forth over inspection findings.' },
                { title: 'No waiting', desc: 'Don\'t carry the property for 90+ days while it sits on the MLS.' },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <p className="font-semibold text-brand-dark text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your As-Is Property"
            subheadline="No repairs required. No cleanup. Written offer in 24 hours."
            sourcePage="/resources/sell-house-without-repairs"
          />

          <FAQSection items={FAQ_ITEMS} heading="Common Questions About As-Is Sales" />
        </article>
      </div>
    </>
  );
}
