import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, readingLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Reading PA Neighborhoods — We Buy Houses in Every Area',
  description:
    'We buy houses in all Reading PA neighborhoods — College Heights, Hampden Heights, East Reading, Downtown, GoggleWorks, Mount Penn, and more. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa/neighborhoods` },
};

const NEIGHBORHOODS = [
  {
    name: 'College Heights',
    desc: 'Located near Albright College in northeast Reading. College Heights is one of Reading\'s more suburban-feeling neighborhoods with larger lots, established trees, and a mix of single-family and detached homes. More stable ownership, higher price point.',
    medianPrice: '~$290K–$300K',
    notes: 'Highest-value residential neighborhood in Reading proper. Homes here are more likely to appeal to traditional MLS buyers, but cash buyers are still active for estate sales and condition-related situations.',
  },
  {
    name: 'Hampden Heights',
    desc: 'Mixed neighborhood with row homes and semi-detached twins in the northeast. Close to Reading Hospital/Tower Health. Mix of owner-occupied and rentals. One of the city\'s more functional residential areas despite overall urban density.',
    medianPrice: '~$195K–$265K',
    notes: 'Active cash buyer market for rentals and inherited properties. Pre-war construction dominates.',
  },
  {
    name: 'Centre Park Historic District',
    desc: 'One of Reading\'s most architecturally significant neighborhoods. Well-preserved Victorian, Queen Anne, and Colonial Revival row homes on tree-lined streets. Listed on the National Register of Historic Places. Centre Park itself is a small formal park surrounded by notable residences.',
    medianPrice: '~$150K–$200K',
    notes: 'Historic designation can complicate exterior renovations. Cash buyers bypass the financing restrictions that apply to older historic properties.',
  },
  {
    name: 'Millmont',
    desc: 'Working-class brick row homes and semi-detached twins. Cozy, affordable, tight-knit community. A classic Reading neighborhood — practical, dense, with strong local identity.',
    medianPrice: '~$130K–$175K',
    notes: 'Strong cash buyer demand. Lots of deferred maintenance situations and estate sales.',
  },
  {
    name: 'Downtown Reading',
    desc: 'The urban core. Mix of residential above commercial, converted buildings, and traditional row homes. Higher vacancy and distress. Investment-territory price points. Penn Street is the main commercial spine.',
    medianPrice: '~$80K–$150K',
    notes: 'High volume of distressed inventory. Motivated sellers. Cash-only market in many cases — lenders avoid the most distressed Downtown properties.',
  },
  {
    name: 'East Reading',
    desc: 'Dense row home neighborhood east of downtown. Close to restaurants, shops, and neighborhood commercial. Active rental market. Majority-Hispanic neighborhood with strong community identity.',
    medianPrice: '~$100K–$160K',
    notes: '70%+ of area is renter-occupied. Strong acquisition opportunity for landlord exit situations and pre-foreclosure sales.',
  },
  {
    name: 'GoggleWorks / Callowhill',
    desc: 'Named after the GoggleWorks Center for the Arts (a former goggle factory now converted to artists\' studios). Arts district fringe — some gentrification pressure. Mix of traditional row homes and repurposed industrial buildings.',
    medianPrice: '~$100K–$160K',
    notes: 'Up-and-coming area by Reading standards. Cash buyers active in distress situations.',
  },
  {
    name: 'Mount Penn (adjacent borough)',
    desc: 'Mount Penn is a separate borough adjacent to Reading to the east, known for its hillside location and views of the Pagoda — Reading\'s famous Japanese-style tower landmark. More single-family detached homes than Reading proper. More suburban character.',
    medianPrice: '~$175K–$220K',
    notes: 'Higher ownership rate than Reading. We buy throughout Mount Penn for estate sales, divorce situations, and condition-related scenarios.',
  },
];

const pageUrl = `${SITE_URL}/markets/reading-pa/neighborhoods`;

export default function ReadingNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        readingLocalBusinessSchema,
        articleSchema('Reading PA Neighborhoods — Cash Home Buyers in Every Area', pageUrl),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Reading PA</Link> › Neighborhoods
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          We Buy Houses in Every Reading PA Neighborhood
        </h1>
        <p className="text-gray-600 mb-2">
          From College Heights to Downtown to Mount Penn — we buy row homes, twins, and single-family houses
          throughout Reading and surrounding Berks County. Cash offer in 24 hours.
          <span className="ml-2 text-sm font-medium text-brand-primary">🇵🇷 Hablamos español.</span>
        </p>

        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mb-8 text-sm">
          <p className="font-semibold text-brand-dark">⚠️ Remember: Reading&apos;s 5% Transfer Tax Applies Citywide</p>
          <p className="text-gray-700">Every Reading neighborhood has the 5% transfer tax (4% city + 1% state). We cover all closing costs including this tax when you sell to us — no matter which neighborhood your property is in.</p>
        </div>

        <div className="space-y-8">
          {NEIGHBORHOODS.map((n, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <h2 className="text-xl font-bold text-brand-dark">{n.name}</h2>
                <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">{n.medianPrice}</span>
              </div>
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">{n.desc}</p>
              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
                <span className="font-semibold">Cash buyer context:</span> {n.notes}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Berks County Service Area</h2>
          <p className="text-gray-700 mb-4">
            Beyond Reading proper, we buy throughout Berks County and surrounding areas. Surrounding municipalities
            pay a lower 2% transfer tax (vs. Reading&apos;s 5%), but we still cover all closing costs in these areas too.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Wyomissing', 'Shillington', 'Sinking Spring', 'Muhlenberg', 'Laureldale', 'Temple', 'Kenhorst', 'Mohnton', 'Exeter Township', 'Boyertown', 'Kutztown', 'Pottstown', 'Bern Township', 'Spring Township'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Why Cash Buyers Are Especially Relevant in Reading</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>Old housing stock:</strong> 56% of Reading homes were built before 1939. These properties have
              lead paint, aging electrical, old plumbing — conditions that traditional lenders often won&apos;t finance.
              Cash buyers are frequently the only realistic path to a sale.
            </p>
            <p>
              <strong>5% transfer tax:</strong> In addition to agent commissions, Reading sellers owe 4% city transfer tax.
              On a $185,000 home that&apos;s $7,400 to the city before anything else. We absorb this entirely.
            </p>
            <p>
              <strong>Bilingual service:</strong> Reading is 70.8% Hispanic. We handle the entire process in English or Spanish.
              Call <a href={`tel:${PHONE}`} className="text-brand-primary font-medium">{PHONE}</a>.
            </p>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Reading PA Property"
          subheadline="Any neighborhood. Any condition. Written offer in 24 hours. Hablamos español."
          sourcePage="/markets/reading-pa/neighborhoods"
        />

        <p className="mt-4 text-xs text-gray-400">Market data last updated: April 2026</p>

        <div className="mt-6 text-sm text-gray-500">
          Related:{' '}
          <Link href="/markets/reading-pa/market-report" className="text-brand-primary hover:underline">Reading PA Market Report</Link>{' '}
          ·{' '}
          <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Sell Your Reading House Fast</Link>
        </div>
      </div>
    </>
  );
}
