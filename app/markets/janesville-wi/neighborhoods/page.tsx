/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { janesvilleLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/janesville-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Janesville WI Neighborhoods — We Buy Houses Throughout Rock County',
  description: 'USA Home Buyers purchases houses in all Janesville WI neighborhoods and throughout the Janesville — Courthouse Hill, Old Fourth Ward, Rockport, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Courthouse Hill', notes: 'Older north/central housing near park amenities. Strong as-is angle for roofs, mechanicals, estate cleanouts. Many pre-1940 homes.' },
  { name: 'Old Fourth Ward', notes: 'Historic/older homes in central Janesville. Strong angle for inherited houses, deferred maintenance, and buyers who understand older-home repairs.' },
  { name: 'Rockport', notes: 'North-side competitive subdivision-style stock. Good for move-up/downsize and dated-but-sound homes. Compete Score 70.' },
  { name: 'Downtown Janesville', notes: 'Walkable core near College Ave. Older homes, small multifamily, code/repair stories. Higher density, shorter DOM.' },
  { name: 'Downtown Janesville', notes: 'River-adjacent/established housing stock. Investor interest where condition, flood/maintenance, or estate complexity creates discount.' },
  { name: 'Monterey', notes: 'Higher-value central-west neighborhood. Cash offers competitive for cosmetic/light-repair homes.' },
  { name: 'Courthouse Hill / Old Fourth Ward', notes: '142 contributing properties in Janesville Courthouse Hill Historic District. Significant older-home character, repair and preservation considerations.' },
  { name: 'Grand Chute', notes: 'Growing township/suburban area adjacent to Janesville. Mix of older and newer stock. Full service area.' },
  { name: 'Courthouse Hill', notes: 'Established Janesville neighborhood; local condition and title review determine offer structure.' },
  { name: 'Old Fourth Ward', notes: 'Confirmed local service area; older-home and as-is situations considered.' },
  { name: 'Kimberly', notes: 'Village south of Janesville. Older working-class stock. Strong as-is buyer demand.' },
  { name: 'Little Chute', notes: 'Village near Kaukauna. Older homes, estate situations common. Full service area.' },
];

export default function JanesvilleNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[janesvilleLocalBusinessSchema, articleSchema('Janesville WI Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/janesville-wi" className="hover:text-white">Janesville WI</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Janesville WI Neighborhoods — We Buy Houses Everywhere in the Janesville</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">USA Home Buyers purchases homes throughout Janesville and the broader Janesville area. Whether your property is in a historic Janesville neighborhood or a nearby Rock County communities, we make cash offers as-is in any condition. Call 888-274-5006.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-8">Don't see your neighborhood listed? Call us — we buy throughout Rock County and nearby areas. 888-274-5006.</p>
        <Link href="/markets/janesville-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Janesville WI Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Janesville WI Home" sourcePage="/markets/janesville-wi/neighborhoods" />
      </div>
    </>
  );
}
