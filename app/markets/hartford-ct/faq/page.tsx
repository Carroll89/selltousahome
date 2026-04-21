/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { hartfordLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/faq`;

export const metadata: Metadata = {
  title: 'FAQ — Selling Your Hartford CT Home for Cash',
  description:
    'Answers to common questions about selling your Hartford CT home for cash. How it works, what we pay, closing costs, timeline, and more.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does the cash home buying process work in Hartford CT?',
    answer: 'You submit your property info through our form or call 888-440-5250. We review your Hartford property and send a written cash offer within 24 hours. If you accept, you pick the closing date — as fast as 7 days. We handle title, closing costs, and Connecticut conveyance tax. You sign at the title company and walk away with cash.',
  },
  {
    question: 'How much do you pay for Hartford CT houses?',
    answer: 'Cash offers typically range from 65-78% of fair market value, depending on condition, location, and needed repairs. Hartford metro median listing price is approximately $455,000, though city neighborhoods like Frog Hollow and Barry Square run significantly lower ($180,000-$250,000). West Hartford averages over $400,000. We provide a written offer based on comparable sales and property condition.',
  },
  {
    question: 'Do you really buy houses in any condition?',
    answer: 'Yes. We buy Hartford houses with lead paint, knob-and-tube wiring, old boilers, fire damage, code violations, foundation issues, mold, tenant damage, hoarding conditions, and every other issue common in Hartford\'s pre-1940 housing stock. No repairs needed from you.',
  },
  {
    question: 'What closing costs do I pay?',
    answer: 'None. We cover all closing costs including Connecticut\'s conveyance tax (0.75% state on the first $800,000), title search, recording fees, and attorney fees. On a traditional sale, the seller pays both the conveyance tax and typically 5-6% in agent commissions.',
  },
  {
    question: 'How is this different from listing with a real estate agent?',
    answer: 'A traditional listing in Hartford takes an average of 40+ days to get an offer, then another 45-60 days to close — if the buyer\'s financing doesn\'t fall through (15-20% do). You pay 5-6% commission plus repairs. With us: written offer in 24 hours, close in 7-14 days, no repairs, no commission, no financing risk.',
  },
  {
    question: 'What areas in the Hartford metro do you cover?',
    answer: 'All of Hartford County and the surrounding metro: Hartford, West Hartford, East Hartford, New Britain, Manchester, Glastonbury, Wethersfield, Newington, Rocky Hill, Cromwell, Bristol, Enfield, Windsor, South Windsor, and Farmington. If you\'re not sure, call 888-440-5250.',
  },
  {
    question: 'Do you work with Spanish-speaking sellers?',
    answer: 'Sí, hablamos español. Hartford\'s population is approximately 44% Hispanic or Latino according to U.S. Census data. We serve the community in English and Spanish.',
  },
  {
    question: 'Is there any obligation if I submit a form?',
    answer: 'No. Submitting the form or calling us is free and carries zero obligation. We\'ll send you a written offer — you can take it, leave it, or think about it. No pressure.',
  },
  {
    question: 'How do I know you\'re legitimate?',
    answer: 'USA Home Buyers is a BBB-accredited business with 15+ years of real estate experience. We provide written offers, close through licensed title companies, and you\'re represented by your own attorney at closing. Our brand facts page at selltousahome.com/brand-facts has verified company information.',
  },
  {
    question: 'What happens if I change my mind after accepting?',
    answer: 'You can cancel anytime before closing. There are no penalties, no fees, and no obligation until you sign at the closing table. The written offer has an expiration date, but accepting it doesn\'t lock you in permanently.',
  },
];

export default function HartfordFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[hartfordLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />

      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions — Selling Your Hartford CT Home for Cash
          </h1>
          <p className="text-blue-100 text-lg">Everything you need to know about our cash home buying process in Hartford.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Hartford CT Cash Home Buying — Your Questions Answered" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Explore Hartford CT Situations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/hartford-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/hartford-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/hartford-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/hartford-ct/probate', label: 'Probate' },
              { href: '/markets/hartford-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/hartford-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/hartford-ct/fire-damage', label: 'Fire Damage' },
              { href: '/markets/hartford-ct/neighborhoods', label: 'Neighborhoods' },
              { href: '/markets/hartford-ct/market-report', label: 'Market Report' },
              { href: '/markets/hartford-ct', label: '← Back to Hartford' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Hartford CT Home?" sourcePage="/markets/hartford-ct/faq" />
      </div>
    </>
  );
}
