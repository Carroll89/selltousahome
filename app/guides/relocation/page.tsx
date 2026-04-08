import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Selling Your House for Relocation in PA | Fast Cash Sale | USA Home Buyers',
  description:
    'Relocating and need to sell your Pennsylvania house fast? We buy homes in any condition for cash, close in 7-14 days, and let you move on your timeline. No showings, no repairs.',
  alternates: { canonical: `${SITE_URL}/guides/relocation` },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house if I\'m relocating?',
    answer:
      'With a cash buyer, you can close in as few as 7-14 days from accepted offer. This is the fastest realistic option for sellers who need to move quickly. Traditional MLS listings take 60-90+ days — too slow for most relocation timelines.',
  },
  {
    question: 'Can I sell my house before I relocate to my new location?',
    answer:
      'Yes, and that\'s usually the best approach. A cash sale closes quickly, puts money in your hands before your move, and eliminates the stress of managing a property listing from another state or country. You sign the deed, collect the proceeds, and focus on your move.',
  },
  {
    question: 'What if I need to close before a specific date for my relocation?',
    answer:
      'We can accommodate specific closing deadlines. If you have a job start date, a school enrollment deadline, or a move-in date at your new location, tell us — we\'ll build the timeline around your needs. We\'ve closed in 5 days when the situation required it.',
  },
  {
    question: 'Do I need to be present in Pennsylvania to close?',
    answer:
      'Not necessarily. Pennsylvania allows for remote closings via mail-away packages or power of attorney arrangements. If you\'ve already relocated or can\'t be in PA for closing, we can coordinate with the title company to handle documents remotely.',
  },
  {
    question: 'What happens if my house doesn\'t sell before I relocate?',
    answer:
      'This is the core risk of listing on the MLS. If you relocate before closing, you\'re managing a vacant property, paying two housing costs, and coordinating showings and inspections from a distance. A cash sale before you leave eliminates this entirely. The certainty of a cash close is its own form of value.',
  },
  {
    question: 'Can you help if my company is paying relocation assistance?',
    answer:
      'Yes. Many corporate relocation packages have timelines and requirements that align well with a cash sale. If your employer\'s relocation package has a buyout provision or home sale guarantee, coordinate with your HR/relocation team — a cash offer on record can help establish your home\'s value or trigger their assistance program.',
  },
];

const pageUrl = `${SITE_URL}/guides/relocation`;

export default function RelocationGuidePage() {
  return (
    <>
      <SchemaMarkup schema={[
        articleSchema('Selling Your Pennsylvania House for Relocation', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/" className="hover:text-white">USA Home Buyers</Link> › Guides › Relocation
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your Pennsylvania House When You&apos;re Relocating
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Job transfer. New city. Family reasons. Whatever the cause, you need to sell fast and move on.
              We buy houses in Harrisburg, Allentown, and throughout PA — close in 7-14 days, on your timeline.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Let&apos;s Work Around Your Timeline
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/relocation" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Relocation Seller&apos;s Core Problem</h2>
            <p className="text-gray-700 text-sm">
              You have a deadline — a job start date, a school enrollment cutoff, a move-in date at your
              new location. The traditional real estate process doesn&apos;t care about your deadline.
              A listing takes 60+ days, and 15-20% of deals fall through. A cash sale closes in 7-14 days
              with near-100% certainty. For relocation sellers, speed and certainty aren&apos;t nice-to-haves —
              they&apos;re the point.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why the Traditional Process Fails Relocation Sellers</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'The timeline doesn\'t align',
                  desc: 'Traditional listings take 60-90+ days. By the time you accept an offer, get through inspection, appraisal, and mortgage underwriting, you\'ve already been in your new city for months — while still owning your old house.',
                },
                {
                  title: 'Managing from a distance is brutal',
                  desc: 'If you relocate before the house closes, you\'re coordinating contractors, showings, and inspections remotely. Urgent issues — a buyer wants access, a pipe bursts, the inspector flags something — require someone on the ground.',
                },
                {
                  title: 'Two housing payments',
                  desc: 'Until your old house closes, you\'re paying the mortgage on it plus rent or a new mortgage in your new location. For most families, this is $2,500-$4,500/month in double housing costs.',
                },
                {
                  title: 'Deals fall through',
                  desc: '15-20% of MLS listings fall through before closing. For a relocation seller, a failed deal means restarting the process while already living elsewhere.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How a Cash Sale Solves Relocation Problems</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Close before you leave', desc: 'Get your money in hand before your move date. No trailing property to manage from your new city.' },
                { title: 'Zero double-payment risk', desc: 'A fast close means overlap between your old mortgage and new housing costs is days, not months.' },
                { title: 'No showings to coordinate', desc: 'We do one brief walkthrough. Then we make an offer. No parade of strangers through your home while you\'re packing.' },
                { title: 'No repairs before you move', desc: 'You\'re moving — you don\'t have time to manage contractors. We buy as-is. Pack up and leave.' },
                { title: 'Remote closing available', desc: 'If you need to leave before closing day, Pennsylvania allows mail-away closings and power of attorney arrangements.' },
                { title: 'Certainty you can plan around', desc: 'A written cash contract with a specific closing date is something you can build your relocation schedule around.' },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">✓ {item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Corporate Relocation Packages — How Cash Offers Help</h2>
            <p className="text-gray-700 mb-4">
              Many employers offer relocation assistance that includes a home sale benefit. Here&apos;s how a
              cash offer fits in:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-brand-dark text-sm mb-2">Home sale assistance programs</h3>
                <p className="text-xs text-gray-600">
                  Some relocation packages include a guaranteed home sale — where the employer buys
                  your home if it doesn&apos;t sell within a set timeframe. A cash offer establishes fair market
                  value and can sometimes trigger or satisfy these programs faster.
                </p>
              </div>
              <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-brand-dark text-sm mb-2">Bonus-based home sale assistance</h3>
                <p className="text-xs text-gray-600">
                  Some packages offer a lump-sum moving allowance or a bonus tied to completing your
                  home sale. A fast cash close can help you qualify for or maximize these benefits
                  by getting your sale completed within the package window.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mt-4">
              Coordinate with your company&apos;s HR or relocation management company before deciding.
              We can work around most corporate relocation program requirements.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer Before You Move"
            subheadline="Close in 7-14 days on your timeline. No repairs, no showings."
            sourcePage="/guides/relocation"
          />

          <FAQSection items={FAQ_ITEMS} heading="Relocation Home Sale — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Sell Your Harrisburg House</Link>{' '}
              ·{' '}
              <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Sell Your Allentown House</Link>{' '}
              ·{' '}
              <Link href="/resources/how-fast-can-i-sell-for-cash" className="text-brand-primary hover:underline">How Fast Can I Sell for Cash?</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
