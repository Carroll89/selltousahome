/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/peoria-il/faq`;

export const metadata: Metadata = {
  title: 'Peoria IL Cash Home Buyer FAQ — Common Questions Answered',
  description:
    'Frequently asked questions about selling a house fast for cash in Peoria IL. Transfer tax, probate, foreclosure, sheriff sales. Call (888) 440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is Peoria\'s real estate transfer tax when I sell my house?',
    answer: 'Peoria has one of the highest transfer tax stacks in downstate Illinois. Three layers apply: (1) Illinois state tax at $0.50/$500 (0.10%) under 35 ILCS 200/31-10 — $200 on a $200,000 sale; (2) Peoria County tax at $0.25/$500 (0.05%) — $100 on $200,000; (3) Peoria City municipal RETT at $2.50/$1,000 (0.25%) under Peoria City Code, Article X, Section 27-226 (effective March 4, 2025) — $500 on $200,000. Total: $800 (0.40%). Per peoriagov.org, the city stamp must be purchased at Peoria City Hall, 419 Fulton St. The county and state stamps are purchased at the Peoria County Clerk, 324 Main St., Room G4. Two-stop process. When you sell to USA Home Buyers, we cover all three layers.',
  },
  {
    question: 'Where is the Peoria County Courthouse for real estate matters?',
    answer: 'The Peoria County Courthouse is at 324 Main Street, Peoria, IL 61602. The Circuit Court Civil Division (probate, foreclosure, divorce/family) is in Room G-04 at this address. Phone: (309) 672-6000. Hours: Monday–Friday, 8:30 AM–5:00 PM. Source: peoriacounty.gov/738/CIVIL-DIVISION. The Peoria County Recorder of Deeds, where deeds are recorded at closing, is also at 324 Main Street.',
  },
  {
    question: 'How do foreclosure sales work at the Peoria County Courthouse?',
    answer: 'According to the Peoria County Sheriff\'s Office (peoriacounty.gov/890/Foreclosure-Sales), foreclosure sales in Peoria County are held on Mondays at 8:30 AM and Wednesdays at 1:00 PM in Courtroom 203 at the Peoria County Courthouse, 324 Main Street, Peoria, IL 61602. Illinois uses a 100% judicial foreclosure process under 735 ILCS 5/15-1101. Peoria County\'s typical foreclosure timeline is 12-18 months from first missed payment to completed sale. Sellers who contact USA Home Buyers before the sheriff\'s sale can exit with their remaining equity intact.',
  },
  {
    question: 'What is Peoria\'s housing market like in 2026?',
    answer: 'According to Zillow (February 2026), Peoria\'s Home Value Index (ZHVI) is $115,649 (+3.7% YoY) — the lowest of any major Illinois metro and less than half the state median. Per Redfin (January 2026), the city median sale price is $139,000 (+8.2% YoY). The Peoria MSA has a Realtor.com hotness rank of #29 nationally. Per biggestuscities.com, 24.3% of Peoria homes were built before 1940 — creating high cash-buyer activity for distressed and pre-war properties. Entry-level homes in South Peoria and East Bluff are the most active segment for cash buyers.',
  },
  {
    question: 'Do I need to probate a Peoria IL house before selling it?',
    answer: 'Yes, if the property was titled in the decedent\'s name alone. Under 755 ILCS 5 (Illinois Probate Act), real property always requires formal probate — the small estate affidavit (755 ILCS 5/25-1) does not apply to real estate regardless of value. Probate is filed at the Peoria County Circuit Court, Civil Division, 324 Main Street, Room G-04, phone (309) 672-6000. Under independent administration (755 ILCS 5/28-1), letters of office are typically issued 2-6 weeks after filing, and the executor can then sign a real estate contract. USA Home Buyers provides written offers before you file the petition.',
  },
  {
    question: 'How fast can USA Home Buyers close on a Peoria IL house?',
    answer: 'As fast as 7 days from accepted offer. For standard transactions — clear title, cooperative seller, no outstanding liens requiring payoff negotiation — we close in 7-14 days. Probate sales close within our 7-14 day window after the executor receives their letters of authority. Foreclosure sales can close in 7 days as long as we act before the redemption period expires. Call (888) 440-5250 for your specific timeline.',
  },
];

export default function PeoriaFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Peoria IL Cash Home Buyer FAQ — Selling Your House Fast', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Peoria IL Home Seller FAQ
          </h1>
          <p className="text-blue-100 text-lg mb-6">
            Common questions about selling a house fast for cash in Peoria IL and Peoria County.
          </p>
          <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
            📞 Call Now — (888) 440-5250 (24/7)
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

      <VideoEmbed
        src="/videos/peoria-il/faq.mp4"
        title="Peoria IL Home Selling FAQ"
        poster="/videos/peoria-il/faq-poster.jpg"
        subtitle="Foreclosure timelines, probate, code violations, city transfer tax — answered"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Questions about selling in Peoria IL? Illinois judicial foreclosure runs 12-16 months. City transfer tax — we handle it. Inherited property needs probate. We buy with code violations, any condition. Close in 7 days. Call 888-440-5250.
        </div>
      </details>
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Peoria IL" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">More Questions? Contact Us.</h2>
          <p className="text-gray-700 mb-4">
            Call (888) 440-5250 any time — 24 hours a day, 7 days a week. We serve all of Peoria city and Peoria County. Written cash offer in 24 hours. Close in 7-14 days.
          </p>
        </section>

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/market-report', label: 'Market Report' },
              { href: '/markets/peoria-il/foreclosure', label: 'Foreclosure Info' },
              { href: '/markets/peoria-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/peoria-il/probate', label: 'Probate Sale' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Get Your Peoria IL Cash Offer?" sourcePage="/markets/peoria-il/faq" />
      </div>
    </>
  );
}
