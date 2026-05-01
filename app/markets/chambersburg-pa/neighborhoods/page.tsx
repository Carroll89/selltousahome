/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { chambersburgLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/chambersburg-pa/neighborhoods`;

export const metadata: Metadata = {
  title: 'Chambersburg PA Neighborhoods — We Buy Houses Throughout Franklin County',
  description: 'USA Home Buyers purchases houses in all Chambersburg PA neighborhoods and throughout Franklin County — the Borough, Waynesboro, Greencastle, Mercersburg, and more.',
  alternates: { canonical: pageUrl },
};

const AREAS = [
  { name: 'Chambersburg Borough', notes: 'Historic district, brick Colonials and Federal-style homes, compact Borough lots, active code enforcement for older stock.' },
  { name: 'Waynesboro', notes: 'South Franklin County, 12 miles from Chambersburg. Older manufacturing-heritage housing stock. Strong seller demand.' },
  { name: 'Greencastle', notes: 'Southwest Borough. Established small-town residential, older frame and brick homes on tree-lined streets.' },
  { name: 'Mercersburg', notes: 'Western Franklin County. Rural-adjacent, older housing stock, estate situations common.' },
  { name: 'Shippensburg', notes: 'Northern Franklin County/Cumberland County border. College town (Shippensburg University), mix of older homes and student rentals.' },
  { name: 'Fayetteville', notes: 'East of Chambersburg Borough. Suburban character, mix of mid-century ranch and newer stock.' },
  { name: 'Greene Township', notes: 'East of Chambersburg. Rural-adjacent residential, larger lots, agricultural character near Borough edge.' },
  { name: 'Guilford Township', notes: 'South of Chambersburg. Rural-residential, larger lots, some subdivision development.' },
  { name: 'Antrim Township', notes: 'Northeast of Chambersburg, Greencastle area. Rural-residential character.' },
  { name: 'St. Thomas Township', notes: 'West of Chambersburg, rural character. Older farm-adjacent residential.' },
];

export default function ChambersburgNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, articleSchema('Chambersburg PA Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Chambersburg PA — We Buy Houses Everywhere in Franklin County</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">USA Home Buyers purchases homes throughout Chambersburg and Franklin County. Whether your property is in the Borough's historic district or a rural township, we make cash offers as-is in any condition. Call 888-274-5006.</p>
        <p className="text-sm text-gray-500 mb-6">Note: Wayne Heights is a community in Washington Township near Waynesboro — separate from Chambersburg Borough. We serve the broader Franklin County area including surrounding communities.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {AREAS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <Link href="/markets/chambersburg-pa" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Chambersburg PA Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Chambersburg PA Home" sourcePage="/markets/chambersburg-pa/neighborhoods" />
      </div>
    </>
  );
}
