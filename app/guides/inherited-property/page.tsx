import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ComparisonTable } from '@/components/ComparisonTable';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Selling an Inherited Property in Pennsylvania — Complete Guide',
  description:
    'Inherited a house in Pennsylvania? Learn your options for selling quickly, navigating probate, and maximizing your proceeds. PA-specific legal context included.',
  alternates: { canonical: 'https://selltousahome.com/guides/inherited-property' },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to go through probate to sell an inherited house in PA?',
    answer:
      'In most cases, yes. If the property was titled solely in the deceased\'s name, it must go through the estate administration process through the Register of Wills in the county where the deceased lived. However, if the property was jointly titled with right of survivorship, it transfers automatically to the surviving owner without probate.',
  },
  {
    question: 'Can I sell an inherited property before probate is complete?',
    answer:
      'Yes, in many cases. Cash sales can often close while probate is ongoing, with proper legal coordination. The estate\'s personal representative (executor or administrator) can enter a purchase agreement, and closing can occur once Letters Testamentary or Letters of Administration are issued. A qualified real estate attorney and experienced title company can facilitate this.',
  },
  {
    question: 'What if there are multiple heirs who disagree?',
    answer:
      'If heirs cannot agree, any party can petition the Orphans\' Court for a partition action — essentially forcing a sale. However, court-ordered sales are slower and more expensive than voluntary sales. When possible, a voluntary agreement among heirs to accept a cash offer is far more efficient.',
  },
  {
    question: 'Do I owe inheritance tax in Pennsylvania?',
    answer:
      'Pennsylvania charges inheritance tax on most inherited property. The rate depends on your relationship to the deceased: 0% for spouses and charity, 4.5% for direct descendants (children, grandchildren), 12% for siblings, and 15% for all other heirs. The tax is calculated on the fair market value of the property at the time of death. Consult a PA estate attorney for your specific situation.',
  },
  {
    question: 'What if the inherited property needs major repairs?',
    answer:
      'This is one of the primary reasons heirs choose cash buyers. Cash buyers purchase inherited properties in any condition — deferred maintenance, full cleanout required, structural issues, outdated systems. You are not required to make any repairs or even clean the property before selling.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Timeline', cashBuyer: '7-14 days after probate authority', traditional: '60-90+ days + probate coordination' },
  { label: 'Repairs required', cashBuyer: 'None — purchase as-is', traditional: 'Usually required for lender financing' },
  { label: 'Cleanup required', cashBuyer: 'No — leave what you want', traditional: 'Full cleanout typically needed' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% of sale price' },
  { label: 'Multiple heir coordination', cashBuyer: 'Simple — one decision', traditional: 'All heirs must cooperate at every stage' },
  { label: 'Net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% FMV (before repairs, cleanup, carrying)' },
];

const pageUrl = `${SITE_URL}/guides/inherited-property`;

export default function InheritedPropertyGuidePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling an Inherited Property in Pennsylvania: What You Need to Know', pageUrl),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/guides" className="hover:text-white">Guides</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Inherited Property in Pennsylvania: What You Need to Know
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              When you inherit a home in Pennsylvania, you have several options for selling — regardless of the
              property&apos;s condition, location, or whether probate is complete. Many heirs sell to a cash buyer
              like USA Home Buyers to avoid repairs, estate management, and the delays of a traditional listing.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Call {PHONE} — We work with estates
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Pennsylvania Probate Basics — Does the Property Need to Go Through Probate?
            </h2>
            <p className="text-gray-700 mb-4">
              In most cases, yes. Pennsylvania requires estate administration through the <strong>Register of Wills</strong> in
              the county where the deceased lived. The process appoints a personal representative (executor or
              administrator) who has legal authority to manage and sell estate assets — including real property.
            </p>
            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-4">
              <p className="font-semibold text-brand-dark mb-1">Key Point:</p>
              <p className="text-gray-700 text-sm">
                Cash sales can often close while probate is ongoing with proper legal coordination. The personal
                representative enters the purchase agreement once they have Letters Testamentary or Letters of
                Administration. Closing can occur shortly after. An experienced title company handles the
                coordination — you don&apos;t need to wait for the estate to fully close before selling the property.
              </p>
            </div>
            <p className="text-gray-700 mb-3">
              <strong>Exceptions to probate:</strong> Property held jointly with right of survivorship transfers
              automatically. Property in a living trust transfers through the trust, not probate. Small estates
              under $50,000 in PA may qualify for a simplified process.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
              <p className="font-semibold text-brand-dark mb-1">PA Probate Resources:</p>
              <p className="text-gray-700">Each county has its own Register of Wills. For Dauphin County: <strong>dauphincounty.gov/register-of-wills</strong> | 717-780-6510</p>
              <p className="text-gray-600 mt-2 text-xs">This is general information, not legal advice. Consult a PA estate attorney for guidance specific to your situation.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Options for Selling an Inherited Home in PA
            </h2>
            <div className="space-y-4 mb-6">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-2">Option 1: Sell to a Cash Buyer (Most Common for Inherited)</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Cash buyers specialize in inherited and estate properties. They buy as-is — no repairs, no cleaning,
                  no staging. Heirs who live out of state, disagree on condition improvements, or need speed and
                  certainty choose this route. USA Home Buyers can make a written offer within 24 hours of learning
                  about the property.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Timeline:</strong> 7-14 days after the personal representative has authority to sell.
                  <strong className="ml-2">Net proceeds:</strong> 70-80% of FMV.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-2">Option 2: List with a Real Estate Agent</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Traditional listing gets a higher gross price but requires the property to be in condition for
                  showings, repairs often requested after inspection, 60-90 day timeline, and coordination among
                  all heirs at every decision point.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Best for:</strong> Properties in good condition, cooperative heirs, no financial urgency.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-2">Option 3: Heir Buyout</h3>
                <p className="text-gray-700 text-sm mb-2">
                  One heir buys out the others at appraised value. Requires financing and agreement on value.
                  Practical when one heir wants to keep the property and has the financial means to do so.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-brand-dark mb-4">Comparison: Selling Options for Inherited Properties</h3>
            <ComparisonTable rows={COMPARISON_ROWS} />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              What to Expect From a Cash Sale on an Inherited Property
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Contact us — we\'ll ask about the property and the estate status',
                  desc: 'We ask about the property condition, your role (executor, heir, attorney), and where probate stands. We\'ve worked with estates at every stage — before probate opens, during probate, and after it closes.',
                },
                {
                  step: '2',
                  title: 'Receive a written cash offer within 24 hours',
                  desc: 'We research the property (tax records, deed, comparable sales) and make a written offer. No pressure — you can share the offer with your attorney or co-heirs.',
                },
                {
                  step: '3',
                  title: 'The personal representative signs the purchase agreement',
                  desc: 'Once you decide to proceed, the executor or administrator signs the purchase agreement on behalf of the estate. Co-heirs may also need to consent depending on the will and estate structure.',
                },
                {
                  step: '4',
                  title: 'Close through a licensed PA title company',
                  desc: 'We always close through a licensed title company. They handle the deed transfer, lien payoffs, and distribution of proceeds. Closing can often happen in as little as 7 days from signing.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
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
              How Much Will You Net From the Sale?
            </h2>
            <p className="text-gray-700 mb-4">
              The net proceeds from selling an inherited property depend on the sale method, property condition,
              existing liens (mortgage, tax liens), and Pennsylvania inheritance tax owed.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-light rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-3">Cash Sale — $150,000 FMV Home</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Cash offer (75%)</span><span className="font-bold">$112,500</span></div>
                  <div className="flex justify-between text-gray-500"><span>Commissions</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Closing costs</span><span>$0 (we pay)</span></div>
                  <div className="flex justify-between text-gray-500"><span>Repairs/cleanup</span><span>$0</span></div>
                  <div className="flex justify-between text-red-500"><span>PA inheritance tax (4.5%)</span><span>-$5,063</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold"><span>Net (before mortgage payoff)</span><span>$107,437</span></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-700 mb-3">Traditional Sale — $150,000 FMV Home</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Sale price</span><span className="font-bold">$150,000</span></div>
                  <div className="flex justify-between text-red-500"><span>Agent commission (5.5%)</span><span>-$8,250</span></div>
                  <div className="flex justify-between text-red-500"><span>Closing/transfer costs</span><span>-$3,500</span></div>
                  <div className="flex justify-between text-red-500"><span>Repairs/cleanup</span><span>-$8,000</span></div>
                  <div className="flex justify-between text-red-500"><span>Carrying (90 days)</span><span>-$3,000</span></div>
                  <div className="flex justify-between text-red-500"><span>PA inheritance tax (4.5%)</span><span>-$6,750</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold"><span>Net (before mortgage payoff)</span><span>$120,500</span></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Example only. Actual numbers vary by property condition, location, and estate specifics. Inheritance tax example assumes direct descendant rate (4.5%).
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Inherited Property"
            subheadline="We work with executors, administrators, and attorneys. Written offer in 24 hours."
            sourcePage="/guides/inherited-property"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions — Selling Inherited Property in PA"
          />

          <section className="mt-10 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/harrisburg-pa/inherited-property" className="text-brand-primary hover:underline">Harrisburg-Specific Inherited Property Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/probate" className="text-brand-primary hover:underline">Probate Guide</Link>{' '}
              ·{' '}
              <Link href="/resources/are-cash-home-buyers-legit" className="text-brand-primary hover:underline">Are Cash Buyers Legit?</Link>
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
