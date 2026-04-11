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
  title: 'Sell My House in Harrisburg Neighborhoods',
  description:
    'We buy houses in every Harrisburg PA neighborhood — Allison Hill, Midtown, Uptown, Penbrook, Steelton, Paxtang, and more. Cash offer in 24 hours, close in 7-14 days.',
  alternates: { canonical: `${SITE_URL}/markets/harrisburg-pa/neighborhoods` },
};

const NEIGHBORHOODS = [
  {
    name: 'Allison Hill',
    zip: '17103',
    desc: 'One of Harrisburg\'s most investor-active neighborhoods. High renter-occupied rate. Older row homes, many with deferred maintenance. Strong cash buyer demand. We buy inherited properties, rentals, and distressed homes here regularly.',
    medianPrice: '~$75,000–$110,000',
  },
  {
    name: 'Midtown Harrisburg',
    zip: '17102',
    desc: 'Revitalizing neighborhood close to the Capitol complex. Victorian-era row homes with significant renovation potential. Mix of owner-occupied and rentals. Faster-appreciating than other city neighborhoods.',
    medianPrice: '~$120,000–$175,000',
  },
  {
    name: 'Uptown Harrisburg',
    zip: '17110',
    desc: 'North of downtown. Established residential blocks, some larger single-family homes. Mix of professional households and long-term residents. Solid demand from buyers.',
    medianPrice: '~$130,000–$185,000',
  },
  {
    name: 'Penbrook',
    zip: '17103',
    desc: 'Working-class row home neighborhood. Tight inventory, quick sales. Entry-level price point attracts first-time buyers and investors alike. Blue-collar community with strong neighborhood identity.',
    medianPrice: '~$100,000–$135,000',
  },
  {
    name: 'Steelton',
    zip: '17113',
    desc: 'Industrial-era borough adjacent to Harrisburg. Entry-level inventory with high cash buyer activity. Many properties have deferred maintenance. We actively buy in Steelton.',
    medianPrice: '~$90,000–$115,000',
  },
  {
    name: 'Paxtang',
    zip: '17111',
    desc: 'Quiet residential borough bordering Harrisburg. Bungalows and Cape Cods from the mid-20th century. Family-friendly with good school access. Moderate appreciation rate.',
    medianPrice: '~$140,000–$190,000',
  },
  {
    name: 'Swatara Township',
    zip: '17111',
    desc: 'Suburban township east of Harrisburg. Range of housing stock from post-WWII ranches to newer construction. Growing demand from buyers seeking more space at city-adjacent prices.',
    medianPrice: '~$155,000–$220,000',
  },
  {
    name: 'Camp Hill',
    zip: '17011',
    desc: 'Desirable Cumberland County suburb across the Susquehanna. Top-rated schools, well-maintained homes. Fast-moving inventory. Higher price point — homes go pending in 3-5 days.',
    medianPrice: '~$280,000–$380,000',
  },
  {
    name: 'Mechanicsburg',
    zip: '17050',
    desc: 'Cumberland County suburb with strong school district demand. Fastest-moving inventory in the metro area. Mix of established neighborhoods and newer developments.',
    medianPrice: '~$260,000–$340,000',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What Harrisburg neighborhoods do you buy houses in?',
    answer:
      'We buy houses throughout the Harrisburg metro area — all city neighborhoods including Allison Hill, Midtown, Uptown, Penbrook, and surrounding boroughs and townships including Steelton, Paxtang, Swatara Township, Camp Hill, and Mechanicsburg. If it\'s in Dauphin or Cumberland County, call us.',
  },
  {
    question: 'Which Harrisburg neighborhoods have the most cash buyer activity?',
    answer:
      'Allison Hill and Steelton see the highest cash buyer and investor activity, driven by lower price points and high renter-occupied rates. Penbrook also sees strong cash buyer interest. These neighborhoods have properties that benefit most from a fast as-is sale.',
  },
  {
    question: 'Is my neighborhood\'s house worth selling as-is?',
    answer:
      'It depends on the gap between current condition and market-ready condition. In Allison Hill or Steelton, where homes need significant work and the price ceiling is lower, as-is sales often make more sense than spending $15,000–$30,000 to renovate before listing. In Camp Hill or Mechanicsburg, well-maintained homes may net more through a traditional sale. We can tell you which makes sense for your specific property.',
  },
  {
    question: 'Do you pay different prices by neighborhood?',
    answer:
      'Yes, offers reflect local market conditions. A home in Mechanicsburg will receive a higher offer than a comparable home in Allison Hill — because the underlying market values are different. Our offer is always based on a realistic assessment of what the property is worth in its specific neighborhood.',
  },
  {
    question: 'How quickly do Harrisburg houses sell by neighborhood?',
    answer:
      'Varies significantly. Camp Hill and Mechanicsburg: 3-5 days to pending. Midtown and Uptown: 5-8 days. Allison Hill and Steelton: 7-12 days. The fastest-moving inventory is move-in ready homes in the suburbs. Properties needing significant work take longer on the MLS — cash buyers are often the faster path for those.',
  },
];

const pageUrl = `${SITE_URL}/markets/harrisburg-pa/neighborhoods`;

export default function HarrisburgNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        harrisburgLocalBusinessSchema,
        articleSchema('Sell Your House in Any Harrisburg, PA Neighborhood', pageUrl),
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
              <Link href="/markets/harrisburg-pa" className="hover:text-white">Harrisburg</Link> › Neighborhoods
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              We Buy Houses in Every Harrisburg, PA Neighborhood
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Allison Hill to Camp Hill, Midtown to Mechanicsburg — we know Harrisburg and Dauphin County.
              Cash offer in 24 hours, close in 7-14 days, in any condition.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Any Neighborhood, Any Condition
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/harrisburg-pa/neighborhoods" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0fd/Qd9Kj8btMSOYmTT1Hwvjy_harrisburg-neighborhoods.mp4"
        title="Harrisburg, PA Neighborhoods Guide"
        poster="/images/video-posters/harrisburg-neighborhoods.jpg"
        subtitle="See how we help homeowners in Harrisburg neighborhoods sell fast"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              Harrisburg Area Neighborhoods — Prices & Market Conditions
            </h2>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-brand-dark text-lg">{n.name}</h3>
                    <span className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-1">ZIP {n.zip}</span>
                  </div>
                  <p className="text-sm font-semibold text-brand-primary mb-2">{n.medianPrice}</p>
                  <p className="text-sm text-gray-700">{n.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Why Neighborhood Matters for Your Sale
            </h2>
            <p className="text-gray-700 mb-4">
              In a market as varied as Harrisburg&apos;s, the right selling strategy depends heavily on where your
              property is. A row home in Allison Hill and a colonial in Mechanicsburg are in completely different
              markets — different buyers, different price points, different optimal paths to sale.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">Entry-level neighborhoods (Allison Hill, Steelton, Penbrook)</h3>
                <p className="text-xs text-gray-600">
                  High investor demand. Properties often need work. Cash buyers are frequently the fastest and
                  most reliable path — avoiding the inspection-repair cycle that stalls traditional sales
                  on older, higher-maintenance homes.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">Mid-range neighborhoods (Midtown, Uptown, Paxtang)</h3>
                <p className="text-xs text-gray-600">
                  Balanced market. Move-in ready homes do well on the MLS. Properties with condition issues
                  benefit from a cash sale. We can tell you which category yours falls into.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">Suburban markets (Camp Hill, Mechanicsburg)</h3>
                <p className="text-xs text-gray-600">
                  Strong traditional sale market. Well-maintained homes move fast with multiple offers.
                  Cash buyers still make sense for estate sales, inherited properties, or homes that need
                  major work even in these markets.
                </p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">We buy in all of them</h3>
                <p className="text-xs text-gray-600">
                  Regardless of neighborhood, we provide honest offers and close fast. Tell us where your
                  property is and we&apos;ll tell you what we can offer and whether a traditional sale
                  might net you more.
                </p>
              </div>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — Any Harrisburg Neighborhood"
            subheadline="We buy throughout Dauphin and Cumberland County. No repairs, no fees."
            sourcePage="/markets/harrisburg-pa/neighborhoods"
          />

          <FAQSection items={FAQ_ITEMS} heading="Harrisburg Neighborhoods — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Sell Your Harrisburg House</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/market-report" className="text-brand-primary hover:underline">Harrisburg Market Report</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/faq" className="text-brand-primary hover:underline">Harrisburg FAQ</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
