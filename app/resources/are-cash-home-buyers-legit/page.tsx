import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Are Cash Home Buyers Legit? How to Tell the Good from the Bad',
  description:
    'Cash home buyers are real — but not all of them operate the same way. Learn what questions to ask, what red flags to watch for, and how to verify a company before you sign anything.',
  alternates: { canonical: `${SITE_URL}/resources/are-cash-home-buyers-legit` },
};

const FAQ_ITEMS = [
  {
    question: 'Are cash home buying companies legit?',
    answer:
      'Most are. Cash home buyers — also called "we buy houses" companies or iBuyers — are real businesses that purchase properties directly from homeowners, usually below retail market value, in exchange for speed and convenience. They\'re not scams by nature, but quality varies widely. Some are local, reputable operators; others are predatory or simply incompetent. The key is knowing what to look for.',
  },
  {
    question: 'What is earnest money and why does it matter?',
    answer:
      'Earnest money (also called a good faith deposit or EMD) is money a buyer puts down to show they\'re serious. A legitimate cash buyer will put up $1,000–$5,000 in earnest money that\'s held in escrow by a title company — and that you\'d keep if they back out without cause. If a buyer refuses to put any earnest money down, that\'s a yellow flag.',
  },
  {
    question: 'How is a cash buyer\'s offer calculated?',
    answer:
      'Legitimate cash buyers calculate offers based on the property\'s after-repair value (what it would sell for in good condition), minus estimated repair costs, holding costs, and their profit margin. A fair operator will walk you through this math if you ask. If a company refuses to explain how they got to their number, walk away.',
  },
  {
    question: 'Can a cash buyer back out after I sign?',
    answer:
      'Yes, if the contract has inspection or financing contingencies. Cash buyers typically buy without a financing contingency (since they\'re paying cash), but some include inspection contingencies. Read your contract carefully. A reputable buyer will be upfront about what contingencies exist.',
  },
  {
    question: 'What happens at closing with a cash buyer?',
    answer:
      'Closing with a cash buyer is handled by a title company, just like a traditional sale. The title company verifies ownership, pays off any existing liens or mortgages, and distributes the remaining proceeds to you by wire transfer or check. No surprises at the closing table.',
  },
];

const pageUrl = `${SITE_URL}/resources/are-cash-home-buyers-legit`;

export default function CashBuyersLegitPage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema('Are Cash Home Buyers Legit?', pageUrl), faqSchema(FAQ_ITEMS)]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/resources" className="hover:text-white">Resources</Link> › Are Cash Buyers Legit?
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Are Cash Home Buyers Legit?
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              The short answer: yes — but not all of them. Here&apos;s how to tell the real ones from the ones
              you should avoid, and what to look for before you sign anything.
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/resources/are-cash-home-buyers-legit" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer</h2>
            <p className="text-gray-700 text-sm">
              Cash home buyers are real businesses that buy houses directly from homeowners. They&apos;re not
              inherently scams — many are legitimate local or national companies that provide a genuine
              service. But the &quot;we buy houses&quot; space also attracts people who want to exploit homeowners
              in difficult situations. This guide helps you tell them apart.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What Cash Home Buyers Actually Do</h2>
            <p className="text-gray-700 mb-4">
              Cash home buyers purchase properties directly from homeowners — skipping the MLS, real estate
              agents, and the traditional listing process. In exchange for a faster, simpler sale, they typically
              pay below retail market value.
            </p>
            <p className="text-gray-700 mb-4">
              Their business model works because they can move fast, take on properties that need repair, and
              eliminate the uncertainty of a retail sale falling through. For homeowners in distressed situations —
              foreclosure, inheritance, divorce, problem tenants — that speed and certainty has real value.
            </p>
            <p className="text-gray-700">
              The offer below market value isn&apos;t predatory by itself. It&apos;s the trade-off for a guaranteed,
              fast, as-is sale. The question is whether the company is being honest about their offer and
              process — and whether they&apos;ll actually follow through.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Green Flags — Signs of a Legitimate Cash Buyer</h2>
            <div className="space-y-3">
              {[
                {
                  flag: 'They explain how they calculated the offer',
                  detail: 'A legitimate buyer can walk you through their math: after-repair value, minus estimated repairs, minus holding costs and margin. If they can\'t explain it, that\'s a problem.',
                },
                {
                  flag: 'They use a licensed title company',
                  detail: 'Closing should happen through a third-party title company — not through the buyer directly. The title company holds funds in escrow, verifies ownership, and ensures a clean transfer.',
                },
                {
                  flag: 'They put up earnest money',
                  detail: 'A serious buyer deposits $1,000–$5,000 (or more) into escrow as a good-faith deposit. This is money you keep if they walk away without cause.',
                },
                {
                  flag: 'They\'re transparent about contingencies',
                  detail: 'Most cash buyers include an inspection period — typically 7-14 days. They should be upfront about what could change the offer and what can\'t.',
                },
                {
                  flag: 'They\'re verifiable',
                  detail: 'You can find them online, read actual reviews, look them up with the Better Business Bureau, and verify they\'re a registered LLC or corporation.',
                },
                {
                  flag: 'They don\'t pressure you',
                  detail: 'A legitimate buyer will give you time to consult an attorney or trusted family member before signing. If someone is pushing you to sign immediately, walk away.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start border border-green-200 bg-green-50 rounded-lg p-4">
                  <span className="text-green-500 text-lg mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.flag}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Red Flags — Signs to Be Cautious</h2>
            <div className="space-y-3">
              {[
                {
                  flag: 'No earnest money deposit',
                  detail: 'If a buyer won\'t put any money in escrow, they have nothing at risk if they back out. This is a common tactic for locking up deals with no intention of closing.',
                },
                {
                  flag: 'Extreme pressure to sign today',
                  detail: 'Creating urgency is a manipulation tactic. A real offer doesn\'t expire in 24 hours.',
                },
                {
                  flag: 'No verifiable business presence',
                  detail: 'You can\'t find them on Google, there are no reviews, no business registration, no real address. Walk away.',
                },
                {
                  flag: 'They want you to sign a deed before closing',
                  detail: 'Never sign a deed or transfer ownership before receiving funds at a title company. This is a classic real estate fraud tactic.',
                },
                {
                  flag: 'The offer keeps dropping',
                  detail: 'Some operators give a high offer to get you under contract, then lower the price during the inspection period when you\'re emotionally committed. Ask upfront: what would cause your offer to change?',
                },
                {
                  flag: 'They want you to pay fees',
                  detail: 'Legitimate cash buyers cover standard closing costs. If someone is asking you to pay processing fees, application fees, or upfront costs of any kind, that\'s a scam.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start border border-red-200 bg-red-50 rounded-lg p-4">
                  <span className="text-red-500 text-lg mt-0.5">✗</span>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.flag}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Questions to Ask Before You Sign</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'How did you arrive at this offer price? Walk me through the math.',
                  'Will you put earnest money in escrow? How much?',
                  'Which title company will you use?',
                  'What contingencies does the contract include?',
                  'What would cause your offer to change after signing?',
                  'How many houses have you bought in this area in the past year?',
                  'Can you give me references from past sellers?',
                  'Are you the actual buyer or are you assigning this contract to someone else?',
                ].map((q, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-brand-primary font-bold shrink-0">Q:</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How USA Home Buyers Operates</h2>
            <p className="text-gray-700 mb-4">
              We&apos;re a local cash home buying company based in Central PA. Here&apos;s exactly how we operate:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Title company', value: 'We always close through a licensed PA title company. Funds go through escrow.' },
                { label: 'Earnest money', value: 'We put earnest money in escrow when we go under contract.' },
                { label: 'Offer transparency', value: 'We explain how we got to our number. You can ask, and we\'ll walk through it.' },
                { label: 'No fees', value: 'No commissions, processing fees, or closing costs to you. Zero.' },
                { label: 'No pressure', value: 'You have time to review with an attorney or family. Our offers don\'t come with a 24-hour gun to your head.' },
                { label: 'Verifiable', value: `Search us online. Read our reviews. Call ${PHONE} and talk to a real person.` },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-brand-dark text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-gray-600">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a No-Obligation Cash Offer"
            subheadline="We explain our math. We use a title company. We close when we say we will."
            sourcePage="/resources/are-cash-home-buyers-legit"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions"
          />
        </article>
      </div>
    </>
  );
}
