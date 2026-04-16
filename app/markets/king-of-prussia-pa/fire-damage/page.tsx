import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { VideoEmbed } from '@/components/VideoEmbed';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, kingOfPrussiaLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House King of Prussia PA',
  description:
    'Selling a fire-damaged property in King of Prussia PA? We buy fire-damaged homes as-is for cash. No repairs, no restoration required. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/markets/king-of-prussia-pa/fire-damage` },
  openGraph: { images: [{ url: '/images/king-of-prussia-hero.jpg', width: 1200, height: 630, alt: 'Sell a Fire-Damaged House in King of Prussia PA' }] },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a fire-damaged house in King of Prussia PA?',
    answer:
      "Yes. You can sell a fire-damaged property in Pennsylvania — even one that is uninhabitable or has significant structural damage. The key is full disclosure to the buyer. Cash buyers specifically seek fire-damaged properties that traditional buyers and lenders can't or won't finance. We buy fire-damaged homes in any condition in King of Prussia and Montgomery County.",
  },
  {
    question: 'Do I need to make repairs before selling a fire-damaged home?',
    answer:
      "No. We buy fire-damaged properties as-is — no cleanup, no demolition, no structural repairs required. Leave the property as it is. We assess the damage, account for remediation costs in our offer, and make you a written cash offer. You take whatever you want and leave the rest.",
  },
  {
    question: 'What if the insurance company is still processing my claim?',
    answer:
      "You can begin the sale process while an insurance claim is pending. The proceeds from the insurance claim typically belong to you and your mortgage lender (if there is one) — separate from the sale proceeds. We can work with your timeline and your insurance company's process. Having an accepted offer in place may actually help move the insurance process forward.",
  },
  {
    question: 'Does fire damage affect what I owe at closing?',
    answer:
      "No. If you have a mortgage, it gets paid off from the sale proceeds at closing regardless of the property's condition. If the sale price exceeds the mortgage payoff, you receive the difference. If the home is significantly damaged and the value has dropped below the mortgage balance, a short sale may be necessary. We can walk through both scenarios with you.",
  },
  {
    question: 'What if the property has been condemned after the fire?',
    answer:
      "A condemned property can still be sold — and cash buyers specifically look for them. Condemnation means the property has been declared unfit for occupancy; it doesn't prevent ownership transfer. We buy condemned fire-damaged properties in King of Prussia and Upper Merion Township. The offer reflects the condition, but you can sell and move forward.",
  },
];

const pageUrl = `${SITE_URL}/markets/king-of-prussia-pa/fire-damage`;

export default function KopFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        kingOfPrussiaLocalBusinessSchema,
        articleSchema('Selling a Fire-Damaged Home in King of Prussia, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/king-of-prussia-hero.jpg"
          alt="King of Prussia PA — sell fire-damaged house for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/king-of-prussia-pa" className="hover:text-white">King of Prussia</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Fire-Damaged House in King of Prussia, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              A house fire is already enough to deal with. You shouldn&apos;t have to manage a renovation
              project on top of it. We buy fire-damaged homes in King of Prussia and Montgomery County
              in any condition — no cleanup, no restoration, no repairs. Cash offer in 24 hours.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We Buy Regardless of Fire Damage
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/king-of-prussia-pa" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/kop/kop-fire-damage.mp4"
        title="Selling a Fire-Damaged Home in King of Prussia"
        poster="/images/video-posters/kop-fire-damage.jpg"
        subtitle="Cash offer in 24 hours — we buy fire damage as-is"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you have a fire-damaged property in King of Prussia or Montgomery County, you&apos;re dealing with a situation that most real estate professionals aren&apos;t equipped to handle. I&apos;m with USA Home Buyers, and we buy fire-damaged properties for cash, as-is.</p>
            <p className="mb-3">Fire-damaged homes are effectively unmarketable through conventional channels. Conventional financing won&apos;t appraise a structurally compromised or gutted property. The longer a fire-damaged home sits — open to weather, at risk of further structural deterioration, creating liability — the worse the situation gets.</p>
            <p className="mb-3">We buy fire-damaged King of Prussia and Montgomery County properties for cash in their current condition. No remediation required. No structural repairs before closing. No smoke or water damage cleanup on your end. We assess the property in its current state and make a written cash offer within 24 hours.</p>
            <p className="mb-3">With King of Prussia median home values in the $453,000 to $549,000 range, there&apos;s often significant value in the land and structure even after fire damage.</p>
            <p className="mb-3">Once you accept, we can close in as few as 7 days. We handle all closing costs. No agent commissions. We take on full responsibility for the property at closing — including all the cleanup and remediation that comes after.</p>
            <p className="mb-3">Call us right now at 888-440-5250. We&apos;ll get you a fair cash offer fast so you can move forward.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Why Most Buyers Won&apos;t Touch Fire Damage (But We Will)</h2>
            <p className="text-gray-700 text-sm">
              Mortgage lenders require the property to be habitable and free of significant structural damage
              before funding a loan. A fire-damaged home fails that test immediately. That eliminates the vast
              majority of retail buyers. Cash buyers don&apos;t have that constraint. We evaluate the property in
              its current state, account for the cost of remediation and repair in our offer, and close without
              a lender involved.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Fire Damage Scenarios We Handle in Montgomery County
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Kitchen or single-room fire — partial damage',
                  desc: "Even a contained fire can cause enough smoke, soot, and water damage from firefighting efforts to make a traditional sale difficult. We buy as-is, any level of damage.",
                },
                {
                  title: 'Structural fire damage throughout the home',
                  desc: "Significant structural damage that requires major rebuilding is exactly what we look for. These are the properties most buyers won't touch — and where we can close fastest.",
                },
                {
                  title: 'Condemned after fire',
                  desc: "Upper Merion Township or the county may have condemned the property after the fire. That doesn't prevent a sale. We buy condemned properties and handle the code process after closing.",
                },
                {
                  title: 'Insurance claim in process',
                  desc: "You can sell while an insurance claim is pending. Insurance proceeds and sale proceeds are handled separately. We work around your claim timeline.",
                },
                {
                  title: 'Inherited fire-damaged property',
                  desc: "You inherited a King of Prussia property that was damaged in a fire. You don't live nearby, you don't want to manage a renovation, and you just want to close. We can do that.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Fire-Damaged Property"
            subheadline="No cleanup, no repairs. We assess it as-is and close in 7–14 days."
            sourcePage="/markets/king-of-prussia-pa"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Fire-Damaged Homes in King of Prussia" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Fire Damage Resources — Montgomery County</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">HUD — Housing and Urban Development</p>
                <p className="text-gray-600">
                  <a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">hud.gov</a>{' '}
                  — Federal housing standards and resources for distressed and fire-damaged properties.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Penn State Extension — Housing Resources</p>
                <p className="text-gray-600">
                  <a href="https://extension.psu.edu" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">extension.psu.edu</a>{' '}
                  — Pennsylvania residential property resources, including post-disaster housing guidance.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/king-of-prussia-pa/code-violations" className="text-brand-primary hover:underline">
                Code Violations
              </Link>{' '}
              ·{' '}
              <Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">
                Sell As-Is Guide
              </Link>{' '}
              ·{' '}
              <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">
                Sell Your King of Prussia House
              </Link>
            
              {'·'}{' '}
              <Link href="/blog/destroyed-rental-property-case-study" className="text-brand-primary hover:underline">Case Study: Destroyed Rental, $50K Cash Out</Link></p>
          </div>
        </article>
      </div>
    </>
  );
}
