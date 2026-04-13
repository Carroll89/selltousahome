import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, erieLocalBusinessSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Foreclosure in Erie PA — Sell Your House Fast',
  description:
    'Facing foreclosure in Erie PA or Erie County? Sell before the sheriff sale and protect your equity. Cash offer in 24 hours, close in 7-14 days.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/foreclosure` },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Erie County PA?',
    answer:
      "Pennsylvania is a judicial foreclosure state. In Erie County, the full process typically takes 9-18 months from first missed payment to sheriff sale at the Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. Erie County Sheriff Chris Campanelli's office handles sheriff sales. The lender must file a lawsuit in the Erie County Court of Common Pleas (President Judge: John J. Mead) and the homeowner has the right to contest.",
  },
  {
    question: 'Where are Erie County sheriff sales held?',
    answer:
      "Erie County sheriff sales are conducted through the Erie County Sheriff's office (Sheriff Chris Campanelli) at the Erie County Courthouse, 140 West Sixth Street, Erie PA 16501. Sales are listed at eriecountypa.gov/sheriff/sheriff-sales/.",
  },
  {
    question: 'Can I stop an Erie County sheriff sale by selling the property?',
    answer:
      "Yes. If you close on a cash sale before the sheriff sale date, the mortgage is paid off at closing and the foreclosure is dismissed. We've helped Erie homeowners close in 7 days to beat sheriff sale deadlines. Call us immediately if you have a sale date scheduled.",
  },
  {
    question: "What is Pennsylvania's Act 91 notice?",
    answer:
      "Before filing foreclosure, your lender must send a state-mandated Act 91 notice. You have 30 days from receipt to apply for the Pennsylvania Housing Finance Agency's HEMAP (Homeowners Emergency Mortgage Assistance Program) assistance. The lender cannot file the foreclosure complaint until this period expires.",
  },
  {
    question: 'Do I have equity if I sell before foreclosure in Erie?',
    answer:
      "If your home is worth more than you owe (mortgage balance plus arrears), yes — you keep the difference after the mortgage is paid off. For example: home sells for $100,000, you owe $65,000 including back payments, you walk away with $35,000 minus closing costs (which we cover). We absorb the 2% transfer tax entirely.",
  },
  {
    question: 'Is there a right of redemption after a sheriff sale in Pennsylvania?',
    answer:
      "No. Pennsylvania has no statutory right of redemption after a sheriff sale. Once the sale occurs and the upset bid period (10 days) passes, the deed transfers to the buyer and the prior owner has no right to reclaim the property. Selling before the sale is the only way to protect your equity.",
  },
];

const pageUrl = `${SITE_URL}/markets/erie-pa/foreclosure`;

export default function ErieForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Sell Before Foreclosure in Erie PA — Erie County', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({ name: 'Facing Foreclosure in Erie PA? Sell Before the Sheriff Sale', description: "USA Home Buyers explains how Pennsylvania homeowners in pre-foreclosure can sell fast for cash before the Erie County sheriff sale.", contentUrl: `${SITE_URL}/videos/erie-pa-foreclosure.mp4`, thumbnailUrl: `${SITE_URL}/videos/erie-pa-foreclosure-poster.jpg`, uploadDate: '2026-04-12' }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/erie-pa-hero.jpg"
          alt="Erie PA home — sell before foreclosure"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/erie-pa" className="hover:text-white">Erie PA</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Facing Foreclosure in Erie PA? Sell Before the Erie County Sheriff Sale
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Pennsylvania gives you more time and more options than most states. If you have equity in your
              Erie home, selling before the sheriff sale protects it. We can close in 7 days.
            </p>
            <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-red-200 mb-1">Sheriff sale date scheduled?</p>
              <p className="text-red-100">
                Call immediately at <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a>{' '}
                — we may be able to close before the sale date.
              </p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/erie-pa/foreclosure" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/erie-pa-foreclosure.mp4"
        title="Facing Foreclosure in Erie PA?"
        poster="/videos/erie-pa-foreclosure-poster.jpg"
        subtitle="Sell before the Erie County sheriff sale and protect your equity"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">Facing foreclosure in Erie? Pennsylvania&apos;s judicial foreclosure process can take nine to eighteen months, which means you have time to act. We work with homeowners in pre-foreclosure across Erie County to provide a fast cash sale before the sheriff&apos;s sale.</p>
          <p>You avoid the court process, protect your credit, and walk away with cash if you have equity.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Pennsylvania&apos;s judicial foreclosure takes <strong>9–18 months</strong> — you have more time to act than most homeowners realize</li>
              <li>• Selling before the <strong>Erie County sheriff sale</strong> at 140 West Sixth Street, Erie PA 16501 stops the foreclosure and protects your equity</li>
              <li>• <strong>No right of redemption</strong> after the sheriff sale in PA — once it happens, the property is gone</li>
              <li>• We can <strong>close in 7 days</strong> — fast enough to beat most sheriff sale deadlines</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What You Need to Know Right Now</h2>
            <p className="text-gray-700 text-sm">
              Pennsylvania&apos;s judicial foreclosure process averages 9–18 months from first missed payment to
              sheriff&apos;s sale. You have more time than you think. If your Erie home is worth more than you owe,
              a cash sale pays off the mortgage, stops the foreclosure, and puts money in your pocket.
              Erie&apos;s 23% poverty rate means foreclosure situations here are common — and we&apos;ve closed many of them.
              Erie County sheriff sales are listed at{' '}
              <a href="https://eriecountypa.gov/sheriff/sheriff-sales/" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">eriecountypa.gov/sheriff/sheriff-sales/</a>.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">PA Foreclosure in Erie County: What Happens</h2>
            <div className="space-y-3">
              {[
                { step: '1', label: 'Missed payments → Act 91 Notice', detail: "After missed payments, lender sends a state-mandated Act 91 notice. You have 30 days to apply for PHFA HEMAP assistance. Lender cannot file until this period expires." },
                { step: '2', label: 'Foreclosure complaint filed in Erie County Court', detail: "Lender files in the Erie County Court of Common Pleas (President Judge: John J. Mead). You are served and have 20 days to respond." },
                { step: '3', label: 'Judgment if no response or contest', detail: "If you don't respond or the court rules for the lender, a writ of execution is entered and a sheriff sale is scheduled by Sheriff Chris Campanelli's office." },
                { step: '4', label: 'Sheriff sale at Erie County Courthouse', detail: "140 West Sixth Street, Erie PA 16501. 10-day upset bid period follows. No right of redemption in PA after the sheriff sale — once it happens, it's done." },
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
                  desc: "Any amount above your mortgage payoff comes directly to you at closing. If your Erie home is worth $115,000 and you owe $70,000, a cash sale can put $40,000+ in your pocket instead of losing it at auction.",
                },
                {
                  title: 'Credit damage is limited',
                  desc: "A completed foreclosure stays on your credit report for 7 years and affects housing, employment, and financing. A pre-foreclosure sale is significantly less damaging. The process stops completely once the mortgage is paid off at closing.",
                },
                {
                  title: "We cover all closing costs",
                  desc: "Erie's standard 2% transfer tax and all other closing costs are covered by us. The offer we make is the number you walk away with — your equity is fully protected.",
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Erie PA Foreclosure — Local Context</h2>
            <p className="text-gray-700 mb-4">
              Erie has a poverty rate of 23% and a median household income of $46,000-$48,000. Pre-foreclosure
              seller motivation here is consistent and real — this isn&apos;t a market where financial distress is
              unusual. We buy Erie&apos;s aging Cape Cods and bungalows throughout the city: Little Italy, West
              Bayfront, Glenwood, Southeast Erie, Downtown, and the Central Eastside.
            </p>
            <p className="text-gray-700">
              We work with experienced local Erie County title companies who understand PA foreclosure law and can
              coordinate with your lender to close before a scheduled sheriff sale date. Call us at{' '}
              <a href={`tel:${PHONE}`} className="text-brand-primary">{PHONE}</a> — the sooner you reach out, the more options you have.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer Before Your Erie County Sheriff Sale"
            subheadline="Written offer in 24 hours. Close in 7-14 days. We cover all closing costs."
            sourcePage="/markets/erie-pa/foreclosure"
          />

          <FAQSection items={FAQ_ITEMS} heading="Erie County Foreclosure — Common Questions" />

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
                <p className="font-semibold text-brand-dark">Erie County Courthouse</p>
                <p className="text-gray-600">140 West Sixth Street, Erie PA 16501 — Court of Common Pleas, Sheriff Sales</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Erie County Sheriff Sales</p>
                <p className="text-gray-600">
                  <a href="https://eriecountypa.gov/sheriff/sheriff-sales/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">eriecountypa.gov/sheriff/sheriff-sales/</a>
                  {' '}— Sheriff Chris Campanelli
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
              <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
