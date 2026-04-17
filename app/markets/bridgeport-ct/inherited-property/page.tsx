/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bridgeportLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bridgeport-ct/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Bridgeport CT',
  description:
    'Inherited a house in Bridgeport CT? We buy inherited properties as-is through Bridgeport Probate Court. Written offer in 24 hours, close after probate clears.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does inheriting a house work in Connecticut?',
    answer: 'When someone dies owning real estate in Fairfield County, the property typically goes through Bridgeport Probate Court, 45 Lyon Terrace Room 121, Bridgeport CT 06604, (203) 576-7957 before it can be sold. The personal representative (executor or administrator) receives court authority to sell the property. The timeline depends on whether the estate qualifies for informal or formal probate proceedings.',
  },
  {
    question: 'Can I sell an inherited Bridgeport house before probate is complete?',
    answer: 'You can sign a purchase agreement with closing contingent on receiving court authority. This is common practice and allows you to have a buyer lined up so you can close quickly once probate grants the personal representative authority to deed the property.',
  },
  {
    question: 'Do I need to make repairs on an inherited Bridgeport property?',
    answer: 'No. We buy inherited properties in Bridgeport in any condition — decades of deferred maintenance, belongings left behind, outdated systems, structural issues. You leave what you don\'t want. We handle the rest after closing.',
  },
  {
    question: 'What are the tax implications of selling an inherited house in Connecticut?',
    answer: 'Inherited property receives a stepped-up cost basis to fair market value at the date of death for federal income tax purposes. This significantly reduces capital gains tax exposure. Connecticut tax rules vary — consult a tax professional for your specific situation. Source: IRS Publication 551.',
  },
  {
    question: 'What if there are multiple heirs on a Bridgeport inherited property?',
    answer: 'All heirs with an ownership interest must agree to the sale. If heirs disagree, the court can authorize a partition. We have closed multi-heir transactions across Connecticut — it requires coordination but it works.',
  },
];

export default function BridgeportInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        bridgeportLocalBusinessSchema,
        articleSchema('Selling an Inherited House in Bridgeport CT — Fairfield County Probate Guide', pageUrl, '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/bridgeport-ct-hero-640.jpg 640w, /images/optimized/bridgeport-ct-hero-828.jpg 828w, /images/optimized/bridgeport-ct-hero-1080.jpg 1080w, /images/optimized/bridgeport-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bridgeport-ct-hero-1200.jpg"
            alt="Bridgeport CT inherited property — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bridgeport-ct" className="hover:text-white">Bridgeport CT</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Inherited Bridgeport CT House — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases inherited properties in Bridgeport CT through Bridgeport Probate Court. Written cash offer in 24 hours, close after probate grants authority. Any condition, no repairs, no cleanout. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Inherited a property through Bridgeport Probate Court? We buy inherited houses in any condition. We work around probate timelines.
            </p>
            <p className="text-blue-100 text-sm">Hablamos español — servimos a la comunidad de habla hispana.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="We work with estates and probate timelines. Written offer in 24 hours." sourcePage="/markets/bridgeport-ct/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Bridgeport Probate Court — What You Need to Know</h2>
          <p className="text-gray-700 mb-4">
            The probate court for Fairfield County is located at Bridgeport Probate Court, 45 Lyon Terrace Room 121, Bridgeport CT 06604, (203) 576-7957. This court handles all probate proceedings for decedents who owned property in Fairfield County. Once the personal representative receives their Letters of Authority (or equivalent in Connecticut), they can execute a deed and complete the sale.
          </p>
          <p className="text-gray-700 mb-4">
            We frequently work with estates throughout Fairfield County. We can have a written offer ready before you even file for probate, so you can close quickly once authority is granted. Transfer tax: Connecticut real estate conveyance tax — 0.75% state + 0.25% municipal (City of Bridgeport) = 1.0% total for properties under $800,000. Seller pays both portions. On a $252,000 sale: $2,520. Source: Connecticut Department of Revenue Services (ct.gov/drs).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Bridgeport CT" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/bridgeport-ct/probate', label: 'Probate Sale' },
              { href: '/markets/bridgeport-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/bridgeport-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/bridgeport-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/bridgeport-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/bridgeport-ct', label: '← Back to Bridgeport' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Bridgeport CT Property?" sourcePage="/markets/bridgeport-ct/inherited-property" />
      </div>
    </>
  );
}
