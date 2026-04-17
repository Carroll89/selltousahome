/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { racineWILocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Racine WI Neighborhoods — Cash Home Buyers',
  description:
    'Neighborhood-by-neighborhood price ranges in Racine and Mount Pleasant WI. We buy houses in every Racine County neighborhood — inherited, foreclosure, tenant-occupied, as-is.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Downtown Racine / Old Main Street', range: '$150,000-$280,000', note: 'Lakefront historic district, loft conversions, Victorian singles, active downtown revitalization.' },
  { name: 'Northside Historic District', range: '$90,000-$180,000', note: 'National Register of Historic Places — 1870s-1910s cream brick workers\' cottages. Often cash-only due to original wiring and plumbing.' },
  { name: 'Southside Historic District', range: '$120,000-$240,000', note: 'Victorian, Gothic Revival, and Mid-Century Modern mix. Pre-war systems common.' },
  { name: 'West Racine', range: '$140,000-$220,000', note: 'Early-1900s and mid-century homes, many already updated. Garden City adjacent.' },
  { name: 'Garden City', range: '$130,000-$200,000', note: 'Bungalows from the 1920s-1940s along the Washington Avenue corridor. Walkable, historic Danish bakery.' },
  { name: 'Historic Sixth Street District', range: '$160,000-$300,000', note: 'Victorian commercial and residential on the edge of downtown.' },
  { name: 'Melvin Avenue Historic District', range: '$170,000-$260,000', note: 'Mid-1900s residential, preserved historic overlay.' },
  { name: 'Mount Pleasant — Central', range: '$250,000-$400,000', note: 'Post-war ranches and split-levels on suburban cul-de-sacs. Most homes 1950s-1990s.' },
  { name: 'Mount Pleasant — I-94 / Microsoft Corridor', range: '$350,000-$550,000', note: 'New construction driven by the Microsoft data center development on former Foxconn land.' },
  { name: 'Racine Country Club area (Mount Pleasant)', range: '$400,000-$800,000', note: 'Larger older homes on the edge of the golf course, many custom.' },
  { name: 'Caledonia', range: '$260,000-$420,000', note: 'Suburban ranches and newer singles north of Racine.' },
  { name: 'Sturtevant', range: '$180,000-$275,000', note: 'Small village between Racine and Mount Pleasant, working-class singles.' },
  { name: 'Union Grove', range: '$200,000-$310,000', note: 'Village in western Racine County with small-town character.' },
  { name: 'Burlington', range: '$220,000-$360,000', note: 'Historic downtown, older singles, rural edges.' },
  { name: 'Wind Point', range: '$350,000-$700,000+', note: 'Lakefront village north of Racine with the 1880s Wind Point Lighthouse.' },
];

export default function RacineNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        racineWILocalBusinessSchema,
        articleSchema('Racine WI Neighborhood Guide — Where We Buy Houses', pageUrl, '2026-04-17'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/racine-mount-pleasant-wi" className="hover:underline">Racine WI</Link> › Neighborhoods
        </p>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">
          Racine &amp; Mount Pleasant WI Neighborhoods — We Buy Houses Throughout Racine County
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            USA Home Buyers purchases properties in every Racine-Mount Pleasant neighborhood. Below are price ranges by area based on Zillow ZHVI (Feb 2026) and Redfin sales data (Mar 2026). Call 888-440-5250 for a property-specific offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-brand-dark mb-2">{n.name}</h3>
              <p className="text-sm text-gray-700 mb-1">Typical price range: <strong>{n.range}</strong></p>
              <p className="text-sm text-gray-600">{n.note}</p>
            </div>
          ))}
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Areas We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {['Racine', 'Mount Pleasant', 'Caledonia', 'Sturtevant', 'Union Grove', 'Burlington', 'Wind Point', 'Raymond', 'Waterford', 'Rochester WI', 'Kenosha', 'Pleasant Prairie', 'Somers'].map(area => (
              <span key={area} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{area}</span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-sm">
            We buy houses throughout Racine County and overlapping Kenosha County. If you're in the Racine-Mount Pleasant metro area and need to sell fast, call us — if your property is in our service area, we can make a written offer within 24 hours.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Racine WI Property" subheadline="Any neighborhood, any condition. Written offer in 24 hours." sourcePage="/markets/racine-mount-pleasant-wi/neighborhoods" />
      </div>
    </>
  );
}
