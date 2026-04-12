import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, readingLocalBusinessSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Foreclosure in Reading PA — Sell Your House Fast',
  description:
    'Facing foreclosure in Reading PA or Berks County? Sell before the sheriff sale and protect your equity. Cash offer in 24 hours. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/foreclosure` },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Berks County PA?',
    answer:
      'Pennsylvania is a judicial foreclosure state. In Berks County, the full process typically takes 12-18 months from first missed payment to sheriff sale at the Berks County Courthouse, 633 Court Street, Reading PA 19601. The lender must file a lawsuit in the Berks County Court of Common Pleas and the homeowner has the right to contest. Act 91 notice requirements also buy additional time.',
  },
  {
    question: 'Where are Berks County sheriff sales held?',
    answer:
      'Berks County sheriff sales are conducted at the Berks County Courthouse, 633 Court Street, Reading PA 19601. Sales are published in local legal journals and online. They typically occur monthly. Contact the Berks County Sheriff\'s Office for scheduled sale dates.',
  },
  {
    question: 'Can I stop a Berks County sheriff sale by selling the property?',
    answer:
      'Yes. If you close on a cash sale before the sheriff sale date, the mortgage is paid off at closing and the foreclosure is dismissed. We\'ve helped Reading homeowners close in 7 days to beat sheriff sale deadlines. Call us immediately if you have a sale date scheduled.',
  },
  {
    question: 'What is Pennsylvania\'s Act 91 notice?',
    answer:
      'Before filing foreclosure, your lender must send a state-mandated Act 91 notice. You have 33 days from receipt to apply for the Pennsylvania Housing Finance Agency\'s HEMAP (Homeowners Emergency Mortgage Assistance Program) assistance. The lender cannot file the foreclosure complaint until this 33-day period expires.',
  },
  {
    question: 'Do I have equity if I sell before foreclosure in Reading?',
    answer:
      'If your home is worth more than you owe (mortgage balance plus arrears), yes — you keep the difference after the mortgage is paid off. For example: home sells for $160,000, you owe $95,000 including back payments, you walk away with $65,000 minus closing costs (which we cover). Reading\'s 5% transfer tax normally comes out of proceeds — we absorb that cost entirely.',
  },
  {
    question: 'How does Reading\'s transfer tax affect a pre-foreclosure sale?',
    answer:
      'Reading PA has a 5% transfer tax (4% city + 1% state). In a traditional pre-foreclosure sale through an agent, the seller typically owes the 4% city portion out of proceeds — $7,400 on a $185,000 home. When you sell to USA Home Buyers, we cover all closing costs including the full 5% transfer tax. Your equity stays yours.',
  },
];

const pageUrl = `${SITE_URL}/markets/reading-pa/foreclosure`;

export default function ReadingForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Sell Before Foreclosure in Reading PA — Berks County', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({ name: 'Facing Foreclosure in Reading PA? Sell Before the Sheriff Sale', description: 'USA Home Buyers explains how Pennsylvania homeowners in pre-foreclosure can sell fast for cash before the Berks County sheriff sale.', contentUrl: `${SITE_URL}/videos/reading-pa-foreclosure.mp4`, thumbnailUrl: `${SITE_URL}/videos/reading-pa-foreclosure-poster.jpg`, uploadDate: '2026-04-12' }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/reading-landmark-hero.jpg"
          alt="Reading PA row home — sell before foreclosure"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/reading-pa" className="hover:text-white">Reading PA</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Facing Foreclosure in Reading PA? Sell Before the Berks County Sheriff Sale
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Pennsylvania gives you more time and more options than most states. If you have equity in your
              Reading home, selling before the sheriff sale protects it. We can close in 7 days.
              Hablamos español — llamenos si prefiere hablar en español.
            </p>
            <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-red-200 mb-1">Sheriff sale date scheduled?</p>
              <p className="text-red-100">
                Call immediately at <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a>{' '}
                — we may be able to close before the sale date. Hablamos español.
              </p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/reading-pa/foreclosure" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/reading-pa-foreclosure.mp4"
        title="Facing Foreclosure in Reading PA?"
        poster="/videos/reading-pa-foreclosure-poster.jpg"
        subtitle="Sell before the Berks County sheriff sale and protect your equity"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">Facing foreclosure in Reading? Pennsylvania&apos;s judicial foreclosure process can take six to eighteen months, which means you have time to act. We work with homeowners in pre-foreclosure across Berks County to provide a fast cash sale before the sheriff&apos;s sale.</p>
          <p>You avoid the court process, protect your credit, and walk away with cash in hand.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Pennsylvania&apos;s judicial foreclosure takes <strong>6–18 months</strong> — you have more time to act than most homeowners realize</li>
              <li>• Selling before the <strong>Berks County sheriff sale</strong> at 633 Court St, Reading PA 19601 stops the foreclosure and protects your equity</li>
              <li>• Reading&apos;s <strong>5% transfer tax = $9,250</strong> on a $185K sale — we absorb it entirely so your equity stays yours</li>
              <li>• We can <strong>close in 7 days</strong> — fast enough to beat most sheriff sale deadlines</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What You Need to Know Right Now</h2>
            <p className="text-gray-700 text-sm">
              According to{' '}
              <a href="https://www.nolo.com/legal-encyclopedia/pennsylvania-foreclosure-laws-procedures.html" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">Nolo.com</a>,
              Pennsylvania&apos;s judicial foreclosure process averages 12–18 months from first missed payment to sheriff&apos;s sale.
              You have more time than you think.
              If your Reading home is worth more than you owe, a cash sale pays off the mortgage, stops the foreclosure,
              and puts money in your pocket. According to the{' '}
              <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">Berks County Recorder of Deeds (berkspa.gov)</a>,
              Reading&apos;s 5% transfer tax (4% city + 1% state) is among the highest in Pennsylvania — we cover it entirely.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">PA Foreclosure in Berks County: What Happens</h2>
            <div className="space-y-3">
              {[
                { step: '1', label: 'Missed payments → Act 91 Notice', detail: 'After 3-4 missed payments, lender sends a state-mandated Act 91 notice. You have 33 days to apply for PHFA HEMAP assistance. Lender cannot file until this period expires.' },
                { step: '2', label: 'Foreclosure complaint filed in Berks County Court', detail: 'Lender files in the Berks County Court of Common Pleas. You are served and have 30 days to respond.' },
                { step: '3', label: 'Judgment if no response or contest', detail: 'If you don\'t respond or the court rules for the lender, judgment is entered and a sheriff sale is scheduled.' },
                { step: '4', label: 'Sheriff sale at Berks County Courthouse', detail: '633 Court Street, Reading PA 19601. No right of redemption in PA after the sheriff sale — once it happens, it\'s done.' },
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Selling Before the Sheriff Sale Makes Sense</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'You keep your equity',
                  desc: 'Any amount above your mortgage payoff comes directly to you at closing. Reading\'s median home value is $227,041 (Zillow). If you owe $130,000, a cash sale can put $90,000+ in your pocket instead of losing it at auction.',
                },
                {
                  title: 'Credit damage is limited',
                  desc: 'A completed foreclosure stays on your credit report for 7 years and affects housing, employment, and financing. A pre-foreclosure sale is significantly less damaging. The process stops completely once the mortgage is paid off at closing.',
                },
                {
                  title: 'We absorb the 5% transfer tax',
                  desc: 'Reading\'s 5% transfer tax would normally cost a seller $9,250+ on a $185,000 home. When you sell to us, we cover all closing costs — your equity is fully protected.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Reading PA Foreclosure — Local Context</h2>
            <p className="text-gray-700 mb-4">
              Reading has a poverty rate of 25% and a median household income of $44,091. Pre-foreclosure seller
              motivation here is consistent and real — this isn&apos;t a market where distress is unusual. We buy
              pre-war row homes throughout Reading&apos;s neighborhoods: East Reading, Millmont, GoggleWorks, College Heights,
              Hampden Heights, and Downtown.
            </p>
            <p className="text-gray-700 mb-4">
              With 70.8% of Reading being Hispanic, many sellers in pre-foreclosure situations are more comfortable
              discussing their options in Spanish. We are fully bilingual. Call us at{' '}
              <a href={`tel:${PHONE}`} className="text-brand-primary">{PHONE}</a> — English or Spanish.
            </p>
            <p className="text-gray-700">
              We work with experienced local Berks County title companies who understand PA foreclosure law and can
              coordinate with your lender to close before a scheduled sheriff sale date.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer Before Your Berks County Sheriff Sale"
            subheadline="Written offer in 24 hours. Close in 7-14 days. We cover all costs including the 5% transfer tax. Hablamos español."
            sourcePage="/markets/reading-pa/foreclosure"
          />

          <FAQSection items={FAQ_ITEMS} heading="Berks County Foreclosure — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">PA Foreclosure Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Housing Finance Agency (PHFA) — HEMAP</p>
                <p className="text-gray-600">
                  <a href="https://www.phfa.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">phfa.org</a>{' '}
                  — Emergency mortgage assistance for PA homeowners facing foreclosure
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Berks County Courthouse</p>
                <p className="text-gray-600">633 Court Street, Reading PA 19601 — Court of Common Pleas, Sheriff Sales</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Legal Aid / MidPenn Legal Services</p>
                <p className="text-gray-600">
                  Free legal help for qualifying homeowners in PA.{' '}
                  <a href="https://www.midpennlegal.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">midpennlegal.org</a>
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Sources:{' '}
              <a href="https://www.nolo.com/legal-encyclopedia/pennsylvania-foreclosure-laws-procedures.html" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Nolo.com — PA Foreclosure Laws</a>
              {' · '}
              <a href="https://www.phfa.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PHFA HEMAP</a>
            </p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/guides/foreclosure" className="text-brand-primary hover:underline">PA Foreclosure Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
