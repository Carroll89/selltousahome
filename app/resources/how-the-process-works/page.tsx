import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'How the Cash Home Sale Process Works — Step by Step',
  description:
    'What actually happens when you sell your house to a cash buyer. Step-by-step process from first contact to cash in hand — no surprises.',
  alternates: { canonical: `${SITE_URL}/resources/how-the-process-works` },
};

const FAQ_ITEMS = [
  {
    question: 'Is there any obligation when I request a cash offer?',
    answer:
      'None. Requesting an offer is just that — a request. You can review it, ask questions, consult an attorney or family member, and take whatever time you need. There\'s no pressure to sign anything, and no fee for getting an offer.',
  },
  {
    question: 'Who handles the closing?',
    answer:
      'A licensed title company handles all closings. They verify ownership, search for liens, prepare the deed and closing documents, and distribute funds. You\'re not relying on us to handle money — it goes through a neutral third party.',
  },
  {
    question: 'Can I back out after signing the purchase agreement?',
    answer:
      'The purchase agreement is a binding contract. It will specify any contingencies (like an inspection period) during which either party can exit. Once those contingency periods expire and you proceed to closing, the contract is binding. Review the contract carefully and have an attorney look it over if you have any questions.',
  },
  {
    question: 'How do I receive my money at closing?',
    answer:
      'You can receive funds by wire transfer (fastest — same day) or by check from the title company. The title company collects the full purchase price from the buyer and distributes it to you after paying off any existing mortgage, liens, or taxes.',
  },
  {
    question: 'Do I need a real estate attorney?',
    answer:
      'Pennsylvania doesn\'t require sellers to have an attorney. But if you have questions about the contract, estate complications, or any unusual circumstances, consulting a real estate attorney is always a good idea. We\'re happy to give you time to do that.',
  },
  {
    question: 'What if I have a mortgage?',
    answer:
      'The title company pays off your mortgage at closing from the sale proceeds. You receive whatever\'s left. You don\'t need to arrange this separately — it\'s a standard part of the closing process.',
  },
];

const pageUrl = `${SITE_URL}/resources/how-the-process-works`;

export default function HowProcessWorksPage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema('How the Cash Home Sale Process Works', pageUrl), faqSchema(FAQ_ITEMS)]} />

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
              <Link href="/resources" className="hover:text-white">Resources</Link> › How the Process Works
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              How the Cash Home Sale Process Works
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              From first contact to cash in hand — here&apos;s exactly what happens at each step, who handles what,
              and how long it takes.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Questions? Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/resources/how-the-process-works" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Version</h2>
            <p className="text-gray-700 text-sm">
              You tell us about the property. We research it and send a written offer within 24 hours.
              If you accept, we open escrow with a local title company. Title does a search, prepares documents,
              and you close on a date you choose — typically 7-14 days after signing. You walk away with cash.
              No repairs, no cleanup, no agent commissions.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-8">Step by Step</h2>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Tell Us About the Property',
                  time: '10-15 minutes',
                  detail: [
                    'Fill out the form on this site or call us directly.',
                    'We\'ll ask: the property address, approximate condition, any known issues, and your situation.',
                    'No inspection required at this stage — just a basic overview.',
                    'No obligation. No fee. Just a conversation.',
                  ],
                  who: 'You → Us',
                },
                {
                  step: '02',
                  title: 'We Research the Property',
                  time: 'Same day or next day',
                  detail: [
                    'We pull public records: ownership history, tax status, comparable sales.',
                    'If we need to see the inside, we schedule a quick 20-30 minute walkthrough.',
                    'We calculate an offer based on after-repair value, minus estimated repair costs and our margin.',
                  ],
                  who: 'Us',
                },
                {
                  step: '03',
                  title: 'You Receive a Written Cash Offer',
                  time: 'Within 24 hours of first contact',
                  detail: [
                    'We send you a written offer with our price and terms.',
                    'We explain how we got to the number. Ask us to walk through the math — we will.',
                    'No pressure. Take time to review it with family or an attorney.',
                    'You can accept, counter, or decline. All three are fine.',
                  ],
                  who: 'Us → You',
                },
                {
                  step: '04',
                  title: 'Sign the Purchase Agreement',
                  time: '1-2 days after offer acceptance',
                  detail: [
                    'We send a standard PA purchase agreement.',
                    'You have time to review it. We recommend having an attorney look it over if you have any questions.',
                    'Once both parties sign, the title company opens escrow.',
                    'We put our earnest money deposit into escrow at this point.',
                  ],
                  who: 'You + Us → Title Company',
                },
                {
                  step: '05',
                  title: 'Title Search & Due Diligence',
                  time: '3-7 days',
                  detail: [
                    'The title company searches public records to confirm you own the property free and clear (or notes any liens, judgments, or tax issues that will be resolved at closing).',
                    'We may do a brief walkthrough during this period to confirm the property condition matches what we were told.',
                    'Most title searches come back clean in 3-5 business days.',
                  ],
                  who: 'Title Company + Us',
                },
                {
                  step: '06',
                  title: 'Pick Your Closing Date',
                  time: 'Your choice',
                  detail: [
                    'Once due diligence is complete, we schedule a closing date.',
                    'You pick the date — as fast as 7 days or further out if you need time to move.',
                    'Closing takes place at the title company\'s office (or remotely in many cases).',
                  ],
                  who: 'You',
                },
                {
                  step: '07',
                  title: 'Closing Day — Sign and Get Paid',
                  time: '30-60 minutes at the title office',
                  detail: [
                    'You sign the deed and closing documents.',
                    'The title company pays off any existing mortgage, back taxes, or liens from the proceeds.',
                    'Remaining funds go to you by wire transfer (same day) or check.',
                    'Done. The property is no longer yours.',
                  ],
                  who: 'You + Title Company',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1 border border-gray-200 rounded-xl p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="font-bold text-brand-dark">{item.title}</h3>
                      <div className="flex gap-2">
                        <span className="text-xs bg-blue-50 text-brand-primary border border-blue-100 rounded px-2 py-0.5">{item.time}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-0.5">{item.who}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {item.detail.map((d, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-gray-400 shrink-0 mt-0.5">→</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What You Don&apos;t Have to Do</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Make any repairs or improvements',
                'Clean out or remove belongings',
                'Stage the property for showings',
                'Host open houses or buyer walkthroughs',
                'Negotiate with multiple buyers',
                'Wait for a buyer\'s financing to clear',
                'Pay agent commissions',
                'Cover closing costs',
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center bg-green-50 border border-green-100 rounded-lg p-3 text-sm">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Ready to Start?"
            subheadline="Tell us about the property. Written offer in 24 hours. No obligation."
            sourcePage="/resources/how-the-process-works"
          />

          <FAQSection items={FAQ_ITEMS} heading="Common Questions About the Process" />
        </article>
      </div>
    </>
  );
}
