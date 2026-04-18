/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/new-haven-ct/faq`;

export const metadata: Metadata = {
  title: 'New Haven CT Cash Home Buyers FAQ',
  description:
    'Answers to common questions about selling your New Haven CT house for cash. CT strict foreclosure, conveyance tax, probate, and more. Hablamos español.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in New Haven CT?',
    answer: 'USA Home Buyers closes in as few as 7 days in New Haven CT. Once you accept a written offer, we coordinate with a New Haven real estate attorney (Connecticut requires attorney-conducted closings), and we can close on your timeline. We send the written cash offer within 24 hours of your inquiry. Call 888-440-5250.',
  },
  {
    question: 'How much do cash home buyers pay for houses in New Haven CT?',
    answer: "Cash offers for New Haven homes typically range from 65–80% of fair market value. Zillow's typical home value for New Haven is $323,843 (Feb 2026); Redfin's median sale price is $365,000 (Mar 2026). A typical cash offer on a Fair Haven triple-decker or Hill neighborhood property runs $208,000–$259,000. We cover all closing costs including Connecticut's conveyance tax of 1.25% for New Haven (state 0.75% + municipal 0.50% Targeted Investment rate). On a $365,000 home that's $4,563 in taxes we absorb.",
  },
  {
    question: 'What is Connecticut strict foreclosure and how does it affect New Haven sellers?',
    answer: 'Connecticut uses strict foreclosure — a unique process where the lender petitions Superior Court and the judge sets a "Law Day." If you don\'t pay off the full mortgage by Law Day, title transfers directly to the lender. No auction, no bidding, no second chance. The total timeline from first missed payment to Law Day in New Haven County is 5–9 months — faster than most states. Source: CT Gen Stat §§49-1 through 49-31; CT Judicial Branch (jud.ct.gov). Selling to a cash buyer before Law Day is typically the only way to recover any equity.',
  },
  {
    question: 'What is New Haven\'s conveyance tax?',
    answer: "New Haven is one of 18 Connecticut Targeted Investment municipalities, so sellers pay 1.25% total conveyance tax — higher than the 1.0% standard CT rate. Breakdown: CT state 0.75% + New Haven municipal 0.25% base + New Haven Targeted Investment 0.25% additional. All seller-paid. On a $365,000 sale: $4,563. Source: CT Gen Stat Chapter 223 (cga.ct.gov). When you sell to USA Home Buyers, we cover all closing costs including this tax.",
  },
  {
    question: 'How does probate work in New Haven CT?',
    answer: 'Connecticut uses a unique Probate Court system — separate from Superior Court and separate from other states\' surrogate or circuit courts. New Haven Probate Court is located at 200 Orange Street, 1st Floor, New Haven CT 06504, phone (203) 946-4880. Real property owned by a deceased person must be transferred through the Probate Court before it can be sold. We work with New Haven Probate Court cases regularly. Source: ctprobate.gov/courts/new-haven-probate-court.',
  },
  {
    question: 'Do you buy houses with tenants in New Haven CT?',
    answer: 'Yes — we buy tenant-occupied properties in New Haven with tenants in place. Connecticut landlord-tenant law (CT Gen Stat Title 47a) provides tenant protections, including the right to continue in possession through the end of their lease after a sale. We understand New Haven\'s rental market and can close without requiring you to go through summary-process eviction first.',
  },
  {
    question: 'Do you buy houses with code violations in New Haven CT?',
    answer: "Yes. New Haven's Livable City Initiative (LCI) actively enforces code violations on the city's pre-war housing stock. Lead paint, knob-and-tube wiring, structural issues, and deferred maintenance are common — and can trigger LCI notices. We buy properties with open violations as-is. You don't need to fix anything before we close.",
  },
  {
    question: 'What if my New Haven house has fire damage?',
    answer: 'We buy fire-damaged properties in New Haven as-is. There is no cleanup, no repair requirement. We will account for the fire damage in our offer, but you walk away from the property in whatever condition it is in. Call 888-440-5250.',
  },
  {
    question: 'What areas in New Haven County do you serve?',
    answer: 'All of New Haven County: New Haven city (Fair Haven, East Rock, Westville, The Hill, Newhallville, Wooster Square, Dixwell, Dwight, Edgewood, Beaver Hills), West Haven, Hamden, East Haven, Milford, Shelton, Branford, North Haven, Orange, Guilford, Derby, Ansonia, Naugatuck, and Wallingford. If you\'re not sure, call 888-440-5250.',
  },
  {
    question: '¿Hablan español? / Do you work with Spanish-speaking sellers?',
    answer: 'Sí, hablamos español. New Haven tiene una comunidad hispana del 31% — una de las más altas en Connecticut. Podemos manejar todo el proceso de venta en español o inglés, desde la oferta inicial hasta el cierre. Sí hablamos español, podemos ayudar a su familia a vender su casa en New Haven. Llámenos: 888-440-5250. / We serve New Haven\'s majority-Hispanic community and can handle the entire process in English or Spanish — from the initial call through closing with the real estate attorney. Call us at 888-440-5250.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. New Haven's housing stock is predominantly pre-WWII — Victorian wood-frames, triple-deckers, brick row homes. Lead paint, aging boilers, knob-and-tube wiring, and deferred maintenance are normal. We buy in any condition. No repairs, no cleaning, no staging required.",
  },
  {
    question: 'Is Connecticut an attorney-close state?',
    answer: 'Yes. Connecticut requires that real estate closings be conducted by a licensed CT real estate attorney. Both buyers and sellers typically have their own attorney. Closings are not handled by title companies like in Illinois or Wisconsin. As a cash buyer, USA Home Buyers coordinates with an experienced New Haven real estate attorney. Budget $750–$1,500 for your attorney fee; we cover all other closing costs.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours (English or Spanish). We\'ll ask 5–10 questions about the property — condition, situation, timeline. Within 24 hours, you receive a written cash offer. No pressure. The offer stands on its own. You pick the closing date.',
  },
];

export default function NewHavenFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/markets/new-haven-ct" className="text-brand-primary hover:underline">New Haven CT</Link> › FAQ
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
          New Haven CT Cash Home Buyers — Frequently Asked Questions
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm font-medium mb-1">TL;DR — Quick Answer</p>
          <p className="text-blue-900 text-sm leading-relaxed">
            USA Home Buyers buys houses in New Haven CT and New Haven County for cash — as-is, any condition, no repairs. Written offer in 24 hours, close in 7–14 days. CT strict foreclosure has no auction — Law Day 5-9 months. New Haven conveyance tax is 1.25% (we cover it). New Haven Probate Court: (203) 946-4880. Hablamos español — 31% of New Haven is Hispanic. Call 888-440-5250.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <h2 className="text-lg font-bold text-brand-dark mb-2">🇵🇷 ¿Tiene preguntas en español?</h2>
          <p className="text-gray-700 text-sm">
            Hablamos español. Podemos responder todas sus preguntas sobre la venta de su casa en New Haven CT en español. Llámenos al <strong>888-440-5250</strong> para hablar con alguien en español.
            <br /><br />
            <em>We speak Spanish. Call 888-440-5250 for Spanish-language service.</em>
          </p>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="All Questions — Selling Your New Haven CT Home for Cash" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Related New Haven CT Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
              { href: '/markets/new-haven-ct/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/new-haven-ct/probate', label: 'Probate Sale' },
              { href: '/markets/new-haven-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/new-haven-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/new-haven-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/new-haven-ct/fire-damage', label: 'Fire Damage' },
              { href: '/sell-house-fast-connecticut', label: 'Connecticut Hub' },
              { href: '/markets/bridgeport-ct', label: 'Bridgeport CT' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your New Haven CT Home?" sourcePage="/markets/new-haven-ct/faq" />
      </div>
    </>
  );
}
