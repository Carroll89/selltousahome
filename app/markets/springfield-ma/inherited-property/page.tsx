/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { springfieldLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/springfield-ma/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Springfield MA',
  description:
    'Inherited a house in Springfield MA? We buy inherited properties as-is through Hampden County Probate Court. Written offer in 24 hours, close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does inheriting a house work in Massachusetts?',
    answer: 'When someone dies owning real estate in Massachusetts, the property typically goes through Hampden County Probate and Family Court before it can be sold. The court is located at 50 State Street, Springfield MA 01103. Massachusetts allows both informal and formal probate proceedings. Informal probate is available for most estates and moves faster — typically 2-4 months. The personal representative (executor) receives authority to sell the property through a License to Sell from the court. Source: Massachusetts Probate and Family Courts (mass.gov/orgs/probate-and-family-court).',
  },
  {
    question: 'Can I sell an inherited Springfield house before probate is complete?',
    answer: 'Generally no — the personal representative needs court authority to execute the deed. However, you can accept a cash offer and sign a purchase agreement with closing contingent on probate completion. Many sellers do this so they have a buyer lined up and can close quickly once the court issues the License to Sell. We work with estates regularly and can structure around your timeline.',
  },
  {
    question: 'Do I need to make repairs on an inherited Springfield house?',
    answer: "No. Inherited properties in Springfield are often pre-WWII triple-deckers and two-families with decades of deferred maintenance — lead paint, aging plumbing, knob-and-tube wiring. Under Massachusetts lead paint law (MGL Ch. 111 §197A), properties with children under 6 require compliance testing in traditional sales — adding real cost and time. We buy as-is with none of those requirements.",
  },
  {
    question: 'What are the tax implications of selling an inherited house in Massachusetts?',
    answer: "Inherited property receives a stepped-up cost basis to fair market value at the date of death for federal income tax purposes. Massachusetts also has an estate tax for estates over $2 million (Mass. Gen. Laws Ch. 65C). Capital gains on inherited property are calculated from the stepped-up basis, not the original purchase price. Consult a tax professional for your specific situation. Source: IRS Publication 551; Massachusetts DOR (mass.gov).",
  },
  {
    question: 'What if there are multiple heirs on a Springfield inherited property?',
    answer: 'All heirs with an ownership interest must agree to the sale. In Massachusetts, if heirs disagree, the court can authorize a partition — including forcing a sale through a petition in Hampden County Probate Court. We have closed multi-heir transactions where some heirs lived out of state. It requires coordination but it works.',
  },
];

export default function SpringfieldInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        springfieldLocalBusinessSchema,
        articleSchema('Selling an Inherited House in Springfield MA — Hampden County Probate Guide', pageUrl, '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/springfield-ma" className="hover:text-white">Springfield MA</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Inherited Springfield MA House — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Inherited a house in Springfield MA? USA Home Buyers purchases inherited properties through Hampden County Probate Court — triple-deckers, two-families, single-family homes in Forest Park, Pine Point, Six Corners, or anywhere in Hampden County. Written cash offer in 24 hours, close in 7–14 days after probate clears. No repairs, no cleanout. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Inherited a property through Hampden County Probate Court? We buy inherited houses in Springfield MA in any condition — no repairs, no cleanout, no agent fees. We work around the probate timeline.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="We work with estates and probate timelines. Written offer in 24 hours." sourcePage="/markets/springfield-ma/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Hampden County Probate Court — What You Need to Know</h2>
          <p className="text-gray-700 mb-4">
            The Hampden County Probate and Family Court handles all probate proceedings for decedents who owned property in Hampden County. The court is located at 50 State Street, Springfield MA 01103, phone (413) 748-7776. Massachusetts offers informal probate for most straightforward estates — a faster administrative process that doesn't require a court hearing. If the estate is contested or complex, formal probate is required with court supervision.
          </p>
          <p className="text-gray-700 mb-4">
            According to the Massachusetts Probate and Family Courts, informal probate typically resolves in 2-4 months for uncontested estates. Once the personal representative receives their Letters of Authority, they can execute a purchase and sale agreement and proceed to closing. We frequently work with estates in this process and can have a written offer ready before probate even begins, so you can close quickly once authority is granted.
          </p>
          <p className="text-gray-700 mb-4">
            Springfield's housing stock presents specific challenges for traditional sales: lead paint compliance (MGL Ch. 111 §197A), old triple-decker electrical systems, and aging plumbing. These issues add cost and time to conventional sales. A direct cash sale eliminates all of them.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Springfield MA" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Springfield MA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/springfield-ma/probate', label: 'Probate Sale' },
              { href: '/markets/springfield-ma/foreclosure', label: 'Foreclosure' },
              { href: '/markets/springfield-ma/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/springfield-ma/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/springfield-ma/code-violations', label: 'Code Violations' },
              { href: '/markets/springfield-ma', label: '← Back to Springfield' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Springfield MA Property?" sourcePage="/markets/springfield-ma/inherited-property" />
      </div>
    </>
  );
}
