/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { eauClaireLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/eau-claire-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Eau Claire WI Neighborhoods — We Buy Houses Throughout Eau Claire County',
  description: 'USA Home Buyers purchases houses in all Eau Claire WI neighborhoods and throughout the Eau Claire — Randall Park, Third Ward, East Hill, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Randall Park', notes: 'Older north/central housing near park amenities. Strong as-is angle for roofs, mechanicals, estate cleanouts. Many pre-1940 homes.' },
  { name: 'Third Ward', notes: 'Historic/older homes in central Eau Claire. Strong angle for inherited houses, deferred maintenance, and buyers who understand older-home repairs.' },
  { name: 'East Hill', notes: 'North-side competitive subdivision-style stock. Good for move-up/downsize and dated-but-sound homes. Compete Score 70.' },
  { name: 'Downtown Eau Claire', notes: 'Walkable core near College Ave. Older homes, small multifamily, code/repair stories. Higher density, shorter DOM.' },
  { name: 'North Side', notes: 'River-adjacent/established housing stock. Investor interest where condition, flood/maintenance, or estate complexity creates discount.' },
  { name: 'Putnam Heights', notes: 'Higher-value central-west neighborhood. Cash offers competitive for cosmetic/light-repair homes.' },
  { name: 'Randall Park / Third Ward', notes: '142 contributing properties in Eau Claire Randall Park area. Significant older-home character, repair and preservation considerations.' },
  { name: 'Grand Chute', notes: 'Growing township/suburban area adjacent to Eau Claire. Mix of older and newer stock. Full service area.' },
  { name: 'Randall Park', notes: 'Established Eau Claire neighborhood; local condition and title review determine offer structure.' },
  { name: 'Third Ward', notes: 'Confirmed local service area; older-home and as-is situations considered.' },
  { name: 'Kimberly', notes: 'Village south of Eau Claire. Older working-class stock. Strong as-is buyer demand.' },
  { name: 'Little Chute', notes: 'Village near Kaukauna. Older homes, estate situations common. Full service area.' },
];

export default function EauClaireNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[eauClaireLocalBusinessSchema, articleSchema('Eau Claire WI Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/eau-claire-wi" className="hover:text-white">Eau Claire WI</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Eau Claire WI Neighborhoods — We Buy Houses Everywhere in the Eau Claire</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">USA Home Buyers purchases homes throughout Eau Claire and the broader Eau Claire area. Whether your property is in a historic Eau Claire neighborhood or a Chippewa County, we make cash offers as-is in any condition. Call 888-274-5006.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-8">Don't see your neighborhood listed? Call us — we buy throughout Eau Claire County and nearby areas. 888-274-5006.</p>
        <Link href="/markets/eau-claire-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Eau Claire WI Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Eau Claire WI Home" sourcePage="/markets/eau-claire-wi/neighborhoods" />
      </div>
    </>
  );
}
