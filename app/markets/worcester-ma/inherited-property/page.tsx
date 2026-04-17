/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { worcesterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/worcester-ma/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Worcester MA',
  description:
    'Inherited a house in Worcester MA? We buy inherited properties as-is through Worcester County Probate and Family Court. Written offer in 24 hours, close after probate clears.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does inheriting a house work in Massachusetts?',
    answer: 'When someone dies owning real estate in Worcester County, the property typically goes through Worcester County Probate and Family Court, 225 Main Street, Worcester MA 01608, (508) 770-0825 before it can be sold. The personal representative (executor or administrator) receives court authority to sell the property. The timeline depends on whether the estate qualifies for informal or formal probate proceedings.',
  },
  {
    question: 'Can I sell an inherited Worcester house before probate is complete?',
    answer: 'You can sign a purchase agreement with closing contingent on receiving court authority. This is common practice and allows you to have a buyer lined up so you can close quickly once probate grants the personal representative authority to deed the property.',
  },
  {
    question: 'Do I need to make repairs on an inherited Worcester property?',
    answer: 'No. We buy inherited properties in Worcester in any condition — decades of deferred maintenance, belongings left behind, outdated systems, structural issues. You leave what you don\'t want. We handle the rest after closing.',
  },
  {
    question: 'What are the tax implications of selling an inherited house in Massachusetts?',
    answer: 'Inherited property receives a stepped-up cost basis to fair market value at the date of death for federal income tax purposes. This significantly reduces capital gains tax exposure. Massachusetts tax rules vary — consult a tax professional for your specific situation. Source: IRS Publication 551.',
  },
  {
    question: 'What if there are multiple heirs on a Worcester inherited property?',
    answer: 'All heirs with an ownership interest must agree to the sale. If heirs disagree, the court can authorize a partition. We have closed multi-heir transactions across Massachusetts — it requires coordination but it works.',
  },
];

export default function WorcesterInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        worcesterLocalBusinessSchema,
        articleSchema('Selling an Inherited House in Worcester MA — Worcester County Probate Guide', pageUrl, '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/worcester-ma-hero-640.jpg 640w, /images/optimized/worcester-ma-hero-828.jpg 828w, /images/optimized/worcester-ma-hero-1080.jpg 1080w, /images/optimized/worcester-ma-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/worcester-ma-hero-1200.jpg"
            alt="Worcester MA inherited property — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/worcester-ma" className="hover:text-white">Worcester MA</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Inherited Worcester MA House — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases inherited properties in Worcester MA through Worcester County Probate and Family Court. Written cash offer in 24 hours, close after probate grants authority. Any condition, no repairs, no cleanout. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Inherited a property through Worcester County Probate and Family Court? We buy inherited houses in any condition. We work around probate timelines.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="We work with estates and probate timelines. Written offer in 24 hours." sourcePage="/markets/worcester-ma/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Worcester County Probate and Family Court — What You Need to Know</h2>
          <p className="text-gray-700 mb-4">
            The probate court for Worcester County is located at Worcester County Probate and Family Court, 225 Main Street, Worcester MA 01608, (508) 770-0825. This court handles all probate proceedings for decedents who owned property in Worcester County. Once the personal representative receives their Letters of Authority (or equivalent in Massachusetts), they can execute a deed and complete the sale.
          </p>
          <p className="text-gray-700 mb-4">
            We frequently work with estates throughout Worcester County. We can have a written offer ready before you even file for probate, so you can close quickly once authority is granted. Transfer tax: Massachusetts deed excise stamps — $4.56 per $1,000 of consideration, paid by seller. On a $315,000 sale: ~$1,436. Source: Massachusetts DOR (mass.gov).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Worcester MA" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/worcester-ma/probate', label: 'Probate Sale' },
              { href: '/markets/worcester-ma/foreclosure', label: 'Foreclosure' },
              { href: '/markets/worcester-ma/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/worcester-ma/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/worcester-ma/code-violations', label: 'Code Violations' },
              { href: '/markets/worcester-ma', label: '← Back to Worcester' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Worcester MA Property?" sourcePage="/markets/worcester-ma/inherited-property" />
      </div>
    </>
  );
}
