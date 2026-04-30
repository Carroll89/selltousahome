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
  title: 'Fire Damage in Reading PA — Sell Your House Fast',
  description:
    'Selling a fire-damaged house in Reading PA? We buy fire-damaged homes as-is, no repairs, no restoration required. Cash offer in 24 hours. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/fire-damage` },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Reading PA?',
    answer:
      'Yes. We buy fire-damaged properties throughout Reading and Berks County in any condition — partial fire damage, full structure loss, smoke damage only, properties with fire code violations or city-issued vacation orders. We evaluate the property as-is and make a written cash offer within 24 hours.',
  },
  {
    question: 'Do I need to restore the property before selling?',
    answer:
      'No. You do not need to restore, repair, or remediate anything before selling to us. We buy fire-damaged Reading row homes and houses as-is. We account for the damage in our offer and manage all remediation after closing.',
  },
  {
    question: 'What happens to my insurance settlement if I sell a fire-damaged house?',
    answer:
      'If you have a mortgage, insurance proceeds may be controlled by your policy and loan documents. You should consult with your insurance company and lender before selling. We can work through this scenario with your attorney, insurance adjuster, and title company.',
  },
  {
    question: 'Reading row homes share walls — does fire damage affect neighboring properties?',
    answer:
      'In a row home fire, adjacent units can sustain structural and smoke damage. This creates complexity with party walls and potentially with neighboring property owners. We are experienced buying fire-damaged row homes in Reading and understand the structural considerations specific to attached housing.',
  },
  {
    question: 'Does the 5% Reading transfer tax apply to fire-damaged properties?',
    answer:
      'Yes, but we cover it. According to the Berks County Recorder of Deeds fee schedule and PA Department of Revenue guidance, Reading transfers include local and state transfer tax. When you sell to USA Home Buyers, we pay all closing costs including the transfer tax.',
  },
  {
    question: 'How fast can you close on a fire-damaged house in Reading?',
    answer:
      'Typically 7-14 days from accepted offer when title is clear. If there are insurance complications or mortgage-payoff coordination issues, timing may take longer — but we move as fast as the title work allows.',
  },
];

const pageUrl = `${SITE_URL}/markets/reading-pa/fire-damage`;

export default function ReadingFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Selling a Fire-Damaged House in Reading PA', pageUrl),
        faqSchema(FAQ_ITEMS),
        videoObjectSchema({ name: 'Sell Your Fire-Damaged Home in Reading PA', description: 'USA Home Buyers buys fire-damaged properties across Berks County as-is for cash — no insurance claims to finalize, no contractor estimates needed.', contentUrl: `${SITE_URL}/videos/reading-pa-fire-damage.mp4`, thumbnailUrl: `${SITE_URL}/videos/reading-pa-fire-damage-poster.jpg`, uploadDate: '2026-04-12' }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/reading-landmark-hero.jpg"
          alt="Reading PA fire damaged house — sell as-is for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/reading-pa" className="hover:text-white">Reading PA</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged House in Reading PA — Cash Offer As-Is
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Fire damage doesn&apos;t have to mean months of restoration before you can sell. We buy fire-damaged
              homes throughout Reading and Berks County exactly as they are. No restoration required.
              Written cash offer within 24 hours. Per Berks County and PA Department of Revenue transfer-tax guidance, we cover applicable transfer tax and other closing costs.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We Buy Fire-Damaged Homes
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/reading-pa/fire-damage" />
          </div>
        </div>
      </section>

      {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
      <VideoEmbed
        src="/videos/reading-pa-fire-damage.mp4"
        title="Sell Your Fire-Damaged Home in Reading PA"
        poster="/videos/reading-pa-fire-damage-poster.jpg"
        subtitle="No restoration required — cash offer in 24 hours"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">If your Reading home has fire damage, you might think it&apos;s unsellable. It&apos;s not. We buy fire-damaged properties across Berks County, as-is, for cash. We can review open insurance-claim or contractor-estimate issues with the title company.</p>
          <p>Just a fair offer and a fast close.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• We buy <strong>fire-damaged Reading row homes as-is</strong> — no restoration or remediation required before the sale</li>
              <li>• Reading&apos;s attached row home stock can create shared-wall fire complications traditional buyers may struggle to finance</li>
              <li>• Fire restoration in an older Reading row home can become expensive and scope-dependent — a cash sale avoids that repair project</li>
              <li>• Per Berks County and PA Department of Revenue transfer-tax guidance, we cover applicable transfer tax and closing costs</li>
              <li><Link href="/blog/destroyed-rental-property-case-study" className="text-brand-primary hover:underline">Case Study: He Sold His Destroyed Rental for $50K →</Link></li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Fire Damage in Reading Row Homes</h2>
            <p className="text-gray-700 text-sm">
              Reading&apos;s dense brick row homes can create unique fire risk.
              When one unit burns, adjacent units may be affected through shared walls, the roof, and utility chases.
              Old wood framing, lead paint, and aging electrical in pre-1940 construction can make fires
              destructive and remediation more complex. Traditional buyers may struggle to finance fire-damaged properties.
              Cash buyers are the practical path forward. According to the{' '}
              <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">Berks County Recorder of Deeds (berkspa.gov)</a>,
              Reading&apos;s 5% transfer tax (4% city + 1% state) applies to all transfers including fire-damaged properties —
              we cover this and all other closing costs when you sell to us.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">We Buy All Types of Fire Damage</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Partial fire damage', desc: 'One room or floor affected — kitchen fires, bedroom fires, attic fires. We buy with the damage in place.' },
                { title: 'Extensive structural damage', desc: 'Roof collapse, burned floor joists, compromised walls. We have experience evaluating structurally compromised row homes.' },
                { title: 'Smoke and soot damage only', desc: 'The fire was contained but smoke permeated every surface. Smoke remediation is expensive and hard to finance traditionally. We buy it.' },
                { title: 'City-issued vacation orders', desc: 'Reading code enforcement has issued a notice making the property uninhabitable. This doesn\'t prevent a sale to a cash buyer.' },
                { title: 'Insurance-involved properties', desc: 'We work alongside insurance adjusters and coordinate with your lender if there\'s a mortgage. We\'ve navigated these situations many times.' },
                { title: 'Row home shared-wall fires', desc: 'Adjacent unit damage, party wall issues, potential neighbor claims. We understand the complexities specific to Reading\'s attached housing.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-brand-dark text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Sell vs. Restore: The Calculation in Reading</h2>
            <p className="text-gray-700 mb-4">
              Fire damage restoration in an older Reading row home is not the same as in a newer suburban house.
              Lead paint, old framing, and legacy materials can add compliance and permitting issues when repairs are made.
              A partial renovation may trigger broader code review depending on the permit scope and city requirements.
            </p>
            <p className="text-gray-700 mb-4">
              A full gut-rehab on a Reading row home after fire damage can be expensive and scope-dependent. If the home&apos;s
              after-repair value is limited, the restoration economics can be marginal — especially for
              an owner who has already experienced a traumatic loss.
            </p>
            <p className="text-gray-700">
              Selling as-is to a cash buyer lets you move on immediately. No contractor coordination, no permit
              fights with the city, no months-long construction project. The offer is lower than ARV — that&apos;s the tradeoff.
              But you get certainty, speed, and zero out-of-pocket cost.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Fire-Damaged Reading Property"
            subheadline="Written offer in 24 hours. We buy as-is. We cover all closing costs. Hablamos español."
            sourcePage="/markets/reading-pa/fire-damage"
          />

          <FAQSection items={FAQ_ITEMS} heading="Fire-Damaged House in Reading PA — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Provider data: Redfin city March 2026; Zillow Research city ZHVI 2026-03-31</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/markets/reading-pa/code-violations" className="text-brand-primary hover:underline">Code Violations in Reading</Link>{' '}
              ·{' '}
              <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
