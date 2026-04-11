import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, harrisburgLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell a Fire-Damaged House in Harrisburg PA | Cash Offer As-Is',
  description:
    'Need to sell a fire-damaged home in Harrisburg or Dauphin County PA? We buy fire-damaged properties as-is, cash offer in 24 hours, no repairs required. Skip the insurance headaches.',
  alternates: { canonical: `${SITE_URL}/markets/harrisburg-pa/fire-damage` },
};

const FAQ_ITEMS = [
  {
    question: 'Can you sell a fire-damaged house in Pennsylvania?',
    answer:
      'Yes. There is no law in Pennsylvania preventing the sale of a fire-damaged property. You\'re required to disclose the fire damage under PA\'s seller disclosure requirements (Act 114 of 2000). A cash buyer — who buys as-is — will factor the damage into their offer and take the property in its current condition.',
  },
  {
    question: 'Should I repair the damage before selling?',
    answer:
      'Not necessarily. Fire restoration is expensive — typically $30,000 to $150,000+ depending on severity, structural involvement, smoke and water damage, and code compliance requirements. If the repair cost exceeds the value it adds to the sale, or if you simply can\'t finance the restoration, selling as-is to a cash buyer may net you more money with far less hassle.',
  },
  {
    question: 'What happens to the insurance claim if I sell?',
    answer:
      'You have several options. If you\'ve already received an insurance payout, you keep the funds and sell the damaged property as-is (the offer will reflect the damage). If a claim is pending, you can assign the claim to the buyer as part of the sale. If you haven\'t filed a claim yet, you should file before selling. Consult your insurance agent and a PA real estate attorney about the best approach for your specific policy.',
  },
  {
    question: 'Will a cash buyer still purchase if there\'s an open insurance claim?',
    answer:
      'Yes, often. Buyers experienced with fire-damaged properties understand insurance claim assignments. The mechanics of how the claim is handled can be structured as part of the purchase agreement. We can work with your insurance adjuster and attorney to structure the transaction appropriately.',
  },
  {
    question: 'Does Harrisburg require permits to sell a fire-damaged property?',
    answer:
      'You don\'t need to complete repairs or pull permits to sell the property — but if the city has issued an emergency condemnation or demolition order due to the fire, that affects the timeline and must be disclosed. We\'re experienced with Harrisburg Bureau of Codes Enforcement orders and can navigate these situations.',
  },
  {
    question: 'What is my fire-damaged house worth?',
    answer:
      'Value depends on: the extent of damage (cosmetic vs. structural), whether the structure is salvageable, lot value in the neighborhood, and current local market conditions. In Harrisburg, the land and location have value even for severely damaged properties. We assess every situation individually and provide a frank, written offer within 24 hours.',
  },
  {
    question: 'What if the city has condemned the property?',
    answer:
      'A city condemnation notice doesn\'t end your right to sell — it means the structure is currently deemed unsafe for occupancy. We buy condemned properties. The condemnation and any associated city orders are factored into our offer. We handle the city compliance side after closing.',
  },
];

const pageUrl = `${SITE_URL}/markets/harrisburg-pa/fire-damage`;

export default function HarrisburgFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        harrisburgLocalBusinessSchema,
        articleSchema('Selling a Fire-Damaged House in Harrisburg, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/harrisburg-pa" className="hover:text-white">Harrisburg</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged Home in Harrisburg, PA — As-Is, for Cash
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Dealing with fire damage is already exhausting. Don&apos;t add months of restoration work and
              contractor negotiations on top of it. We buy fire-damaged properties throughout Harrisburg
              and Dauphin County — in any condition, no repairs required.
            </p>
            <div className="bg-orange-900/50 border border-orange-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-orange-200 mb-1">Recently had a fire?</p>
              <p className="text-orange-100">
                Call <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a>{' '}
                — we can walk the property and give you a same-day cash offer.
              </p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/harrisburg-pa/fire-damage" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0fb/ujkumlRycp1KcN9eUOueo_harrisburg-fire-damage.mp4"
        title="Selling a Fire-Damaged Home in Harrisburg"
        poster="/images/video-posters/harrisburg-fire-damage.jpg"
        subtitle="Learn about selling your fire-damaged property in Harrisburg"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-1">TL;DR</p>
            <h2 className="text-lg font-bold text-brand-dark mb-2">What You Need to Know</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ You can sell a fire-damaged home in PA — disclosure required, but no repairs required</li>
              <li>✓ Cash buyers buy as-is; you skip the $50K–$150K+ restoration process</li>
              <li>✓ Insurance payouts are yours to keep; pending claims can often be assigned to the buyer</li>
              <li>✓ City condemnation orders don&apos;t prevent a sale — they factor into the offer</li>
              <li>✓ We close in 7–14 days from accepted offer</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">Your Options After a House Fire</h2>
            <p className="text-gray-700 mb-4">
              After a residential fire, homeowners typically face three paths. Understanding each helps you
              make the right decision for your situation.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Restore and keep',
                  pros: 'You keep the property and may recover most of its value.',
                  cons: 'Expensive ($30K–$150K+), time-consuming (6–18 months), requires managing contractors, ongoing insurance complications.',
                  best: 'If restoration cost is well-covered by insurance and you want to stay.',
                },
                {
                  title: 'Restore and sell',
                  pros: 'Maximizes market price for a move-in-ready buyer.',
                  cons: 'Same cost and complexity as above, plus you still end up selling. Net gain over as-is sale is often smaller than expected after contractor costs.',
                  best: 'If you have full insurance coverage and strong equity.',
                },
                {
                  title: 'Sell as-is to cash buyer',
                  pros: 'No repairs, no contractors, close in 7–14 days. You get the insurance money AND the sale proceeds (minus fire damage discount).',
                  cons: 'Lower sale price than restored property.',
                  best: 'If you want certainty, speed, and to move on without months of rebuilding.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-3 text-sm">{item.title}</h3>
                  <div className="space-y-2 text-xs">
                    <div>
                      <p className="font-semibold text-green-700 mb-1">Pros</p>
                      <p className="text-gray-600">{item.pros}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 mb-1">Cons</p>
                      <p className="text-gray-600">{item.cons}</p>
                    </div>
                    <div className="bg-blue-50 rounded px-3 py-2">
                      <p className="font-semibold text-blue-800 mb-0.5">Best when:</p>
                      <p className="text-blue-700">{item.best}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Fire Damage We Buy</h2>
            <p className="text-gray-700 mb-4">
              We buy fire-damaged properties at every level of damage severity:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Cosmetic fire damage',
                  desc: 'Smoke and soot damage, charred surfaces, water damage from fire suppression. Structure intact. These properties still need significant cleaning and remediation — but are highly rebuildable.',
                },
                {
                  title: 'Partial structural damage',
                  desc: 'One or more rooms or a section of the structure destroyed. Kitchen or living areas affected. Structural members may need replacement. Still a viable rebuild for the right investor.',
                },
                {
                  title: 'Major structural fire',
                  desc: 'Roof collapse, floor system compromise, major structural framing damage. Extensive damage that may border on total loss — but the lot and foundation still have value.',
                },
                {
                  title: 'Total loss / condemned',
                  desc: 'Harrisburg Bureau of Codes Enforcement has issued a condemnation or demolition order. We still buy — land value, demolition, and rebuild potential are factored into our offer.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Navigating Insurance When Selling Fire-Damaged Property</h2>
            <p className="text-gray-700 mb-4">
              The insurance question is the most complex part of selling a fire-damaged property.
              Here&apos;s how it typically plays out:
            </p>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">You received an insurance payout already</h3>
                <p className="text-sm text-gray-700">
                  You keep the insurance money. You then sell the property as-is for its damaged value.
                  The buyer knows about the damage (you disclose it). Net result: insurance proceeds + sale
                  proceeds = your total recovery.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Insurance claim is still pending</h3>
                <p className="text-sm text-gray-700">
                  This is more complex but manageable. Options include: waiting to close until the claim
                  resolves, assigning the claim proceeds to the buyer as part of the deal, or structuring
                  a delayed closing. We work with your insurance adjuster and attorney to find the right
                  structure.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">You haven&apos;t filed a claim yet</h3>
                <p className="text-sm text-gray-700">
                  File your claim before selling. The proceeds are yours. PA homeowner policies have time
                  limits for filing — act promptly. After receiving the payout, you can sell the damaged
                  property as-is and keep both the insurance money and the sale proceeds.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">No insurance / underinsured</h3>
                <p className="text-sm text-gray-700">
                  This is a difficult situation but selling as-is may be your best path. You won&apos;t recover
                  the full pre-fire value, but you avoid ongoing carrying costs, city fines, and the risk of
                  further deterioration. We can still make a fair offer for the land and salvageable structure.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Harrisburg Neighborhoods We Buy Fire-Damaged Homes In</h2>
            <p className="text-gray-700 mb-4">
              We purchase fire-damaged properties throughout Harrisburg city and greater Dauphin County —
              Allison Hill, Uptown, Midtown, Downtown, South Harrisburg, Penbrook, Steelton, Swatara
              Township, Lower Paxton, and surrounding communities.
            </p>
            <p className="text-gray-700">
              Harrisburg&apos;s older row home neighborhoods — where homes share party walls — sometimes see
              fires spread to adjacent properties. If you&apos;re a neighbor affected by a fire that started
              elsewhere, or if your multi-unit property had a fire in one unit, we can assess and make
              an offer on the full property.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Fire-Damaged Property"
            subheadline="No repairs. No contractors. No hassle. Close in 7–14 days."
            sourcePage="/markets/harrisburg-pa/fire-damage"
          />

          <FAQSection items={FAQ_ITEMS} heading="Selling a Fire-Damaged House — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Resources for Harrisburg Fire-Damage Sellers</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">City of Harrisburg Bureau of Codes Enforcement</p>
                <p className="text-gray-600">
                  <a href="https://www.harrisburgpa.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">harrisburgpa.gov</a>{' '}
                  — Condemnation orders, fire damage inspection records, permit requirements for reconstruction
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Pennsylvania Insurance Department</p>
                <p className="text-gray-600">
                  <a href="https://www.insurance.pa.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">insurance.pa.gov</a>{' '}
                  — Guidance on homeowner claims, dispute resolution, and PA insurance regulations
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">American Red Cross — Central PA Chapter</p>
                <p className="text-gray-600">Immediate disaster assistance for fire victims, temporary housing, and recovery resources in the Harrisburg region</p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Sell Your Harrisburg House</Link>{' '}
              ·{' '}
              <Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Selling As-Is in PA</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/code-violations" className="text-brand-primary hover:underline">Code Violations</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
