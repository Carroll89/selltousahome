/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { concordLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/neighborhoods`;

export const metadata: Metadata = {
  title: 'Concord NH Neighborhoods — We Buy Houses Throughout Merrimack County',
  description: 'USA Home Buyers purchases houses in all Concord NH neighborhoods and throughout Merrimack County — Abbott-Downing, Penacook, South End, West Concord, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Abbott-Downing', notes: 'Central/south-central residential near schools and commuter routes. Older homes, fast DOM. Strong cash-buyer fit.' },
  { name: 'West Concord', notes: 'Older village/residential toward Penacook/Contoocook corridor. Smaller homes and rehab candidates. High investor interest.' },
  { name: 'Penacook', notes: 'Northern village along Contoocook/Merrimack. Former mill village. Mix of older singles, multifamily, and condos. Strong multifamily/tenant-occupied angle.' },
  { name: 'South End', notes: 'Established neighborhood near schools/parks/downtown. Many older single-family homes and multifamily pockets.' },
  { name: 'Concord Heights', notes: 'East-side commercial/residential. More attainable entry price. Strong cash-buyer interest.' },
  { name: 'Downtown Concord', notes: 'Walkable Main Street/state-government core. Thin inventory but strong rental/walkability demand.' },
  { name: 'East Concord', notes: 'More suburban/rural-residential edge. Larger lots, higher-ticket homes. Estate/large-lot situations.' },
  { name: 'North-West End', notes: 'Higher-price west/northwest area. Institutional and residential amenities. Estate/inherited focus.' },
  { name: 'Bow', notes: 'Adjacent town south of Concord. Residential. Full service area.' },
  { name: 'Pembroke', notes: 'Adjacent town. Older stock. Full service area.' },
  { name: 'Hooksett', notes: 'Southern Merrimack County. Growing suburb. Full service area.' },
  { name: 'Hopkinton', notes: 'Southwest Merrimack County. Older New England homes. Full service area.' },
];

export default function ConcordNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[concordLocalBusinessSchema, articleSchema('Concord NH Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Concord NH Neighborhoods — We Buy Houses Everywhere in Merrimack County</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">USA Home Buyers purchases homes throughout Concord and the broader Merrimack County area. Whether your property is in a historic Concord neighborhood or a nearby Merrimack County community, we make cash offers as-is in any condition. Call 888-274-5006.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-8">Don't see your neighborhood listed? Call us — we buy throughout Merrimack County. 888-274-5006.</p>
        <Link href="/markets/concord-nh" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Concord NH Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Concord NH Home" sourcePage="/markets/concord-nh/neighborhoods" />
      </div>
    </>
  );
}
