import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Selling a Vacant Property in Pennsylvania — Cash Buyers',
  description:
    'Selling a vacant or abandoned property in PA? Cash buyers purchase vacant homes as-is with no cleanup, no repairs. Close in 7-14 days.',
  alternates: { canonical: 'https://selltousahome.com/guides/vacant-property' },
};

const FAQ_ITEMS = [
  {
    question: 'How do I sell a vacant house that needs work?',
    answer:
      'The easiest path is selling to a cash buyer as-is. Cash buyers purchase vacant properties in any condition — no repairs, no cleanup required. They can close in 7-14 days, eliminating the ongoing costs of maintaining a vacant property.',
  },
  {
    question: 'Are there extra costs associated with vacant properties?',
    answer:
      'Yes. Vacant homes typically cost $500-$1,500/month or more in ongoing expenses: property taxes, insurance (vacant home insurance is more expensive than standard homeowners insurance), utilities to prevent damage, lawn/snow maintenance, and security monitoring. Every month the property sits vacant reduces your net proceeds.',
  },
  {
    question: 'Can I sell an abandoned property in Pennsylvania?',
    answer:
      'If you are the title owner, you can sell the property regardless of its abandoned condition. If you\'ve inherited an abandoned property or aren\'t sure about the title, a real estate attorney and title company can help clear the title before or during the sale.',
  },
  {
    question: 'Do I need to clean out a vacant property before selling?',
    answer:
      'Not when selling to a cash buyer. Leave whatever you don\'t want — furniture, personal property, debris, whatever. We take the property as-is and handle all cleanout after closing.',
  },
  {
    question: 'What if my vacant property has been vandalized or has squatters?',
    answer:
      'We purchase vandalized properties and can advise on the squatter situation. If there are unauthorized occupants, Pennsylvania law requires a formal eviction process before you can legally remove them — you cannot simply remove their belongings. A cash buyer can take over the property situation at closing.',
  },
];

const pageUrl = `${SITE_URL}/guides/vacant-property`;

export default function VacantPropertyGuidePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling a Vacant Property in Pennsylvania', pageUrl),
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
              <Link href="/guides" className="hover:text-white">Guides</Link> › Vacant Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Vacant Property in Pennsylvania
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Every month a property sits vacant costs money — insurance, taxes, utilities, maintenance. Cash buyers
              purchase vacant and abandoned properties as-is, with no cleanup required. Close in 7-14 days.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/vacant-property" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer: Selling a Vacant or Abandoned Property in Pennsylvania</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, you can sell a vacant or abandoned property in Pennsylvania — but timing matters. Vacant properties often accumulate code violations, property maintenance citations, and tax arrears that can cloud the title or trigger municipal fines. Pennsylvania municipalities have the authority to place liens on vacant properties for maintenance costs. USA Home Buyers purchases vacant properties as-is throughout Pennsylvania — any condition, any citation history. We close in as few as 7 days and handle title issues directly.</p>
        </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              The Real Cost of a Vacant Property
            </h2>
            <p className="text-gray-700 mb-4">
              Owning a vacant property isn&apos;t free — even if there&apos;s no mortgage. The carrying costs add up quickly:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="px-4 py-3 text-left">Expense</th>
                    <th className="px-4 py-3 text-left">Monthly Estimate (PA)</th>
                    <th className="px-4 py-3 text-left">Annual Estimate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Property taxes', '$150-$400', '$1,800-$4,800'],
                    ['Vacant home insurance', '$100-$200', '$1,200-$2,400'],
                    ['Minimal utilities (heat to prevent pipes)', '$80-$150', '$960-$1,800'],
                    ['Lawn/snow maintenance', '$50-$150', '$600-$1,800'],
                    ['Security monitoring', '$25-$75', '$300-$900'],
                    ['Estimated total', '$405-$975/month', '$4,860-$11,700/year'],
                  ].map(([expense, monthly, annual], i) => (
                    <tr key={i} className={i === 5 ? 'bg-brand-dark text-white font-bold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 border-b border-gray-100">{expense}</td>
                      <td className="py-3 px-4 border-b border-gray-100">{monthly}</td>
                      <td className="py-3 px-4 border-b border-gray-100">{annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Every month the property sits vacant is money out of your pocket — and time during which condition
              can deteriorate (water leaks, pest intrusion, vandalism).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Common Vacant Property Situations
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Inherited vacant home',
                  desc: 'A family member has passed and left a vacant property. You\'re managing it from out of state, paying for insurance and taxes on a home you don\'t use. Cash buyers are the most efficient path to closure.',
                },
                {
                  title: 'Relocated but couldn\'t sell',
                  desc: 'You moved for work and left the property behind. Now you\'re paying two sets of housing costs. A cash sale eliminates the ongoing drain.',
                },
                {
                  title: 'Former rental with vacancy',
                  desc: 'Your rental tenant has moved out and the property needs work before it\'s rentable again. You\'re weighing repair costs against the property\'s value.',
                },
                {
                  title: 'Property with deferred maintenance',
                  desc: 'Long-vacant with years of deferred maintenance. Traditional buyers can\'t get financing on it. Cash buyers assess the condition and make an offer.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why Cash Buyers Are the Right Fit for Vacant Properties
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'No repairs or cleanup required', desc: 'Leave everything. Take what you want. We handle the rest after closing.' },
                { title: 'No showings needed', desc: 'Traditional sales require staged, accessible showings. Cash buyers do one walkthrough assessment.' },
                { title: 'Fast close ends carrying costs', desc: 'Closing in 7-14 days stops the monthly drain of taxes, insurance, and maintenance.' },
                { title: 'No lender condition requirements', desc: 'Vacant homes with deferred maintenance often can\'t be financed. Cash buyers have no lender requirements.' },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Vacant Property"
            subheadline="Stop the carrying costs. Written offer in 24 hours, close in 7-14 days."
            sourcePage="/guides/vacant-property"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions — Vacant Properties in Pennsylvania"
          />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Sell As-Is Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/hoarding-property" className="text-brand-primary hover:underline">Hoarding Property Guide</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
