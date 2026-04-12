import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, readingLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Probate Property in Reading PA — Sell Your House Fast',
  description:
    'Selling a probate property in Reading PA or Berks County? We work with executors and attorneys to close fast. Cash offer in 24 hours. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/probate` },
};

const FAQ_ITEMS = [
  {
    question: 'Where is the Berks County probate court located?',
    answer:
      'Probate in Berks County is handled by the Berks County Register of Wills, located at 633 Court Street, Suite 2C, Reading PA 19601. Phone: (610) 478-6600. The Orphans\' Court / Clerk line is (610) 478-6550. The Bar Association referral line for legal advice is (610) 375-4591. Online estate search is available at rwills.co.berks.pa.us.',
  },
  {
    question: 'What is the process for selling a Reading PA probate property?',
    answer:
      'Once Letters Testamentary (or Letters of Administration if no will exists) are issued by the Berks County Register of Wills, the personal representative has legal authority to sell the estate\'s real estate. They can sign a purchase agreement, and a qualified title company can handle the closing. The sale proceeds go to the estate for distribution to beneficiaries per the will or PA intestate law.',
  },
  {
    question: 'Can I sell a Reading PA probate property before probate is complete?',
    answer:
      'Often yes. Once Letters Testamentary are issued, the executor can sign a contract. You don\'t need to wait for the entire estate to be settled. A cash buyer can enter a purchase agreement and close once those letters are in hand. We\'ve worked through this process many times with Berks County estates.',
  },
  {
    question: 'How does Reading\'s 5% transfer tax affect a probate sale?',
    answer:
      'Reading PA has a 5% transfer tax (4% city + 1% state) — among the highest in Pennsylvania. In a traditional probate sale, this comes out of estate proceeds. When you sell to USA Home Buyers, we cover 100% of closing costs including the transfer tax. The estate keeps more money for the heirs.',
  },
  {
    question: 'What if the probate property is a Reading row home in bad condition?',
    answer:
      'That is exactly what we buy. Over 56% of Reading\'s housing stock is pre-1939 construction — lead paint, old electrical, aging plumbing, deferred maintenance. Traditional buyers require inspections and repairs. We make a written cash offer as-is. No repairs, no cleanout, no staging.',
  },
  {
    question: 'Does the whole estate need to be settled before we can close?',
    answer:
      'No. Real estate can be sold separately from the rest of the estate. Once the executor has Letters Testamentary, the property sale can close. Remaining estate assets (personal property, bank accounts, etc.) are dealt with separately on the estate\'s timeline.',
  },
];

const pageUrl = `${SITE_URL}/markets/reading-pa/probate`;

export default function ReadingProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Selling a Probate Property in Reading PA — Berks County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/reading-landmark-hero.jpg"
          alt="Reading PA probate property sale"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/reading-pa" className="hover:text-white">Reading PA</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Probate Property in Reading PA — Berks County
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Navigating probate while also managing a Reading row home? We work with executors, personal
              representatives, and estate attorneys to close fast. No repairs. No cleanout. We cover all
              closing costs — including Reading&apos;s 5% transfer tax. Hablamos español.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/reading-pa/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Version</h2>
            <p className="text-gray-700 text-sm">
              You don&apos;t need to finish probate to sell the real estate. Once the Berks County Register of Wills
              issues Letters Testamentary, the executor can sign a real estate contract. We can close in 7-14 days
              from that point. Reading&apos;s 5% transfer tax? We cover it. The pre-1939 row home needs work? We buy it as-is.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Berks County Register of Wills — Key Information</h2>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {[
                  { label: 'Office', value: 'Berks County Register of Wills' },
                  { label: 'Address', value: '633 Court Street, Suite 2C, Reading PA 19601' },
                  { label: 'Main Phone', value: '(610) 478-6600' },
                  { label: "Orphans' Court / Clerk", value: '(610) 478-6550' },
                  { label: 'Bar Association Referral', value: '(610) 375-4591' },
                  { label: 'Website', value: 'berkspa.gov/departments/register-of-wills' },
                  { label: 'Online Estate Search', value: 'rwills.co.berks.pa.us' },
                ].map((row, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-500">{row.label}</p>
                    <p className="font-medium text-brand-dark">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Probate Sale Process in Berks County</h2>
            <div className="space-y-3">
              {[
                { step: '1', label: 'File for probate at Berks County Register of Wills', detail: 'File the will (or petition for administration if no will). The Register of Wills issues Letters Testamentary (with will) or Letters of Administration (without will) to the personal representative.' },
                { step: '2', label: 'Letters Testamentary issued', detail: 'The personal representative now has legal authority to sell estate property. This is typically issued within days to a few weeks of filing.' },
                { step: '3', label: 'Personal representative signs purchase agreement', detail: 'With Letters in hand, the executor signs a real estate contract with us. We\'ve done this many times and understand the documentation needed.' },
                { step: '4', label: 'Title company coordinates closing', detail: 'A PA-licensed title company handles the closing, pays off any mortgages or liens, and distributes remaining proceeds to the estate. We cover all closing costs including Reading\'s 5% transfer tax.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Reading Probate Properties: The Real Situation</h2>
            <p className="text-gray-700 mb-4">
              Reading is a city of 95,000 people where over 56% of homes were built before 1939. Most probate
              properties we see in Reading are brick row homes or semi-detached twins with decades of deferred
              maintenance — the kind of property that requires significant investment before it can compete on the MLS.
            </p>
            <p className="text-gray-700 mb-4">
              Traditional buyers want move-in ready. They want inspections. They want repair credits. Executors
              dealing with estates in Reading often don&apos;t have the time, capital, or authority to manage a renovation.
              A cash sale is often the most practical solution — and it gets proceeds into the estate faster.
            </p>
            <p className="text-gray-700">
              Add in Reading&apos;s 5% transfer tax — the seller&apos;s portion is typically 4%, or $7,400 on a $185K sale —
              and the cost of a traditional sale in Reading is significantly higher than in surrounding Berks County towns.
              When we buy, we absorb those costs entirely.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Probate Property"
            subheadline="We work around Berks County estate timelines. We cover all closing costs. Hablamos español."
            sourcePage="/markets/reading-pa/probate"
          />

          <FAQSection items={FAQ_ITEMS} heading="Berks County Probate Property — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-1">
              Sources:{' '}
              <a href="https://www.berkspa.gov/departments/register-of-wills" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Berks County Register of Wills</a>
              {' · '}
              <a href="https://www.weareatticus.com/probate-clerk/berks-county-register-of-wills-probate" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">WeAreAtticus — Berks County Probate</a>
            </p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/markets/reading-pa/inherited-property" className="text-brand-primary hover:underline">Inherited Property in Reading</Link>{' '}
              ·{' '}
              <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
