import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { articleSchema, faqSchema, stateCollegeLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Stop Foreclosure State College PA',
  description:
    'Facing foreclosure in State College PA? Sell before the sheriff sale and protect your equity. Cash offer in 24 hours, close before your deadline',
  alternates: { canonical: `${SITE_URL}/markets/state-college-pa/foreclosure` },
};

const FAQ_ITEMS = [
  {
    question: 'How long does the foreclosure process take in Centre County PA?',
    answer:
      "Pennsylvania is a strictly judicial foreclosure state — there's no non-judicial option. In Centre County, the full timeline from first missed payment to completed sheriff's sale typically runs 9-18 months. Federal law requires servicers to wait 120 days before filing. Then PA's Act 6 of 1974 requires a 30-day written notice of intent to foreclose. After filing in the Centre County Court of Common Pleas, there's a 20-day response period, then 45-90 days to default judgment if uncontested, plus sheriff's sale advertising requirements. Contested cases can stretch beyond 24 months.",
  },
  {
    question: 'Can I sell my house to stop a Centre County sheriff\'s sale?',
    answer:
      "Yes. If you close on a cash sale before the scheduled sheriff's sale date, the mortgage gets paid off at closing and the foreclosure case is dismissed. We've helped homeowners close in 7 days to beat sheriff's sale deadlines. If you have a sale date on the calendar, call us immediately — time is the one thing we can't create.",
  },
  {
    question: 'What is Pennsylvania Act 6 of 1974 and how does it affect me?',
    answer:
      "Act 6 of 1974 (41 P.S. § 101 et seq.) requires your lender to send a written notice of intent to foreclose at least 30 days before filing a complaint. That notice must inform you of your right to cure the default. It also requires notice of PA's Homeowner's Emergency Mortgage Assistance Program (HEMAP) under Act 91 of 1983, which may provide temporary assistance. If you received these notices, you still have time to act.",
  },
  {
    question: 'Do I have equity even if I\'m in foreclosure?',
    answer:
      "If your home is worth more than what you owe — including the mortgage balance, arrears, fees, and penalties — yes, there's equity to protect. For example: State College home worth $380,000, you owe $240,000 including back payments. You sell for $300,000 cash (approximately 79% of value). Mortgage gets paid off at closing, you walk away with roughly $60,000 (minus costs we cover). If you wait for the sheriff's sale, the outcome is less predictable and usually worse.",
  },
  {
    question: 'What is HEMAP and can it help me in Centre County?',
    answer:
      "The Pennsylvania Homeowner's Emergency Mortgage Assistance Program (HEMAP) provides temporary loans to homeowners facing foreclosure due to circumstances beyond their control — job loss, medical bills, divorce. Your lender is required to notify you of HEMAP before filing. The Pennsylvania Housing Finance Agency (phfa.org) administers the program. It's worth exploring if the foreclosure is recent and you expect your income to recover.",
  },
];

const pageUrl = `${SITE_URL}/markets/state-college-pa/foreclosure`;

export default function StateCollegeForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        stateCollegeLocalBusinessSchema,
        articleSchema('Stop Foreclosure in State College, PA — Centre County', pageUrl, '2026-04-12'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA home — sell before foreclosure"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/state-college-pa" className="hover:text-white">State College</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Facing Foreclosure in State College? Sell Before the Centre County Sheriff&apos;s Sale
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Pennsylvania&apos;s judicial foreclosure process takes 9-18 months — you have more time than
              you think. If your home is worth more than you owe, selling before the sheriff&apos;s sale
              lets you walk away with equity instead of losing it. We close in 7 days.
            </p>
            <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-red-200 mb-1">Sheriff&apos;s sale date already scheduled?</p>
              <p className="text-red-100">
                Call us now — <a href={`tel:${PHONE}`} className="underline font-bold">{PHONE}</a> — we can sometimes close in 5-7 days.
              </p>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Confidential, No Pressure
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/state-college-foreclosure.mp4"
        title="Facing Foreclosure in State College PA?"
        poster="/videos/state-college-foreclosure-poster.jpg"
        subtitle="How to sell before the sheriff sale in Centre County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          If you&apos;re facing foreclosure in Centre County, time matters. We can make a cash offer and close before your sheriff sale date. No banks, no delays. You walk away with equity instead of losing the house. Call 888-440-5250 — we move fast when deadlines are tight.
        </div>
      </details>
          <CashOfferForm variant="hero" sourcePage="/markets/state-college-pa/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-base font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Pennsylvania is a judicial foreclosure state — the Centre County process takes 9–18 months from
              first missed payment to sheriff&apos;s sale. If your home is worth more than you owe, selling before
              that date lets you keep your equity instead of losing it. We close in 7–14 days. Call as soon as
              you receive your Act 6 notice. There&apos;s no redemption period in Pennsylvania — once the
              sheriff&apos;s sale happens, you can&apos;t get the home back.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              PA Judicial Foreclosure — What the Timeline Looks Like
            </h2>
            <p className="text-gray-700 mb-4">
              Pennsylvania only allows judicial foreclosure — every case goes through the Centre County
              Court of Common Pleas. According to{' '}
              <a href="https://www.legis.state.pa.us/cfdocs/legis/LI/uconsCheck.cfm?yr=1974&sessInd=0&act=6" target="_blank" rel="noopener noreferrer" className="text-brand underline">Pennsylvania Act 6 of 1974</a>{' '}
              (41 P.S. § 101 et seq.), your
              lender must send a written 30-day notice of intent to foreclose before filing, and must also
              notify you of{' '}
              <a href="https://www.phfa.org/programs/hemap.aspx" target="_blank" rel="noopener noreferrer" className="text-brand underline">HEMAP assistance (PA Housing Finance Agency)</a>.
              Here&apos;s the full sequence:
            </p>
            <div className="space-y-3">
              {[
                { stage: 'First missed payment', time: 'Day 0' },
                { stage: 'Federal 120-day waiting period (servicer cannot file during this time)', time: 'Days 1–120' },
                { stage: 'Act 6 of 1974 notice: lender sends written 30-day notice of intent to foreclose', time: '~Day 121' },
                { stage: 'Complaint filed in Centre County Court of Common Pleas', time: '~Day 151+' },
                { stage: 'You have 20 days to respond after being served', time: 'After service' },
                { stage: 'Default judgment (if uncontested)', time: '45–90 days after filing' },
                { stage: 'Writ of Execution / Sheriff\'s Sale order', time: '~30 days after judgment' },
                { stage: 'Sheriff\'s Sale (advertised 30+ days in advance)', time: 'Variable' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-gray-50 rounded-lg p-3">
                  <span className="text-brand-primary font-bold text-xs shrink-0 w-28">{item.time}</span>
                  <span className="text-sm text-gray-700">{item.stage}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Total estimated timeline: <strong>9–18 months</strong> from first missed payment.
              Contested cases can exceed 24 months. There is <strong>no redemption period</strong> in
              Pennsylvania after the sheriff&apos;s sale.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              According to the{' '}
              <a href="https://www.consumerfinance.gov/housing/housing-insecurity/help-for-homeowners/foreclosure/" target="_blank" rel="noopener noreferrer" className="underline">CFPB foreclosure guide</a>,{' '}
              <a href="https://www.legis.state.pa.us/cfdocs/legis/LI/uconsCheck.cfm?yr=1974&sessInd=0&act=6" target="_blank" rel="noopener noreferrer" className="underline">PA Act 6 (legis.state.pa.us)</a>,
              and the{' '}
              <a href="https://www.phfa.org/mhp/hemap/" target="_blank" rel="noopener noreferrer" className="underline">PA Housing Finance Agency</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Options Right Now
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Sell before the sheriff\'s sale',
                  badge: 'Most common',
                  desc: "If you have equity, this is the cleanest exit. You sell the home, the mortgage is paid off at closing, and you walk away with whatever's left. We close in 7-14 days — fast enough to beat most sheriff's sale dates if you act when you first see them.",
                },
                {
                  title: 'Loan modification / repayment plan',
                  badge: 'If you want to keep the house',
                  desc: "Contact your servicer directly or through a HUD-approved housing counselor. Many lenders negotiate repayment plans if you can show ability to pay going forward. According to the Pennsylvania Housing Finance Agency (phfa.org), HEMAP provides temporary mortgage loans to homeowners facing foreclosure due to circumstances beyond their control — job loss, medical bills, or divorce.",
                },
                {
                  title: 'Short sale',
                  badge: 'If you\'re underwater',
                  desc: "If the mortgage balance exceeds the home's value, the lender may accept a short sale — taking less than the full balance. This requires lender approval and takes longer than a standard sale. We can discuss whether this is realistic in your situation.",
                },
                {
                  title: 'Do nothing and lose the home',
                  badge: 'Last resort',
                  desc: "The sheriff's sale doesn't necessarily mean you get nothing — there's sometimes surplus after liens are paid. But the outcome is unpredictable and you lose control. Selling proactively is almost always the better option when equity exists.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-brand-dark">{item.title}</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{item.badge}</span>
                  </div>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Confidential Cash Offer — State College"
            subheadline="No obligation. We call within hours. If you have a deadline, tell us."
            sourcePage="/markets/state-college-pa/foreclosure"
          />

          <FAQSection items={FAQ_ITEMS} heading="Foreclosure in Centre County PA — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/foreclosure" className="text-brand-primary hover:underline">PA Foreclosure Guide</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">Sell Your State College House for Cash</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa/probate" className="text-brand-primary hover:underline">Probate Sales in Centre County</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
