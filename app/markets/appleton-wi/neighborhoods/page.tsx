/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { appletonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/appleton-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Appleton WI Neighborhoods — We Buy Houses Throughout Outagamie County',
  description: 'USA Home Buyers purchases houses in all Appleton WI neighborhoods and throughout the Fox Cities — Erb Park, Old Third Ward, Northwood Park, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Erb Park', notes: 'Older north/central housing near park amenities. Strong as-is angle for roofs, mechanicals, estate cleanouts. Many pre-1940 homes.' },
  { name: 'Old Third Ward', notes: 'Historic/older homes in central Appleton. Strong angle for inherited houses, deferred maintenance, and buyers who understand older-home repairs.' },
  { name: 'Northwood Park', notes: 'North-side competitive subdivision-style stock. Good for move-up/downsize and dated-but-sound homes. Compete Score 70.' },
  { name: 'Downtown Appleton', notes: 'Walkable core near College Ave. Older homes, small multifamily, code/repair stories. Higher density, shorter DOM.' },
  { name: 'River Drive', notes: 'River-adjacent/established housing stock. Investor interest where condition, flood/maintenance, or estate complexity creates discount.' },
  { name: 'Alicia Park', notes: 'Higher-value central-west neighborhood. Cash offers competitive for cosmetic/light-repair homes.' },
  { name: 'City Park / Historic District', notes: '142 contributing properties in Appleton City Park Historic District. Significant older-home character, repair and preservation considerations.' },
  { name: 'Grand Chute', notes: 'Growing township/suburban area adjacent to Appleton. Mix of older and newer stock. Full service area.' },
  { name: 'Menasha', notes: 'Adjacent city in Winnebago County near the Fox River. Older manufacturing-era housing stock. Full service area.' },
  { name: 'Neenah', notes: 'Adjacent city in Winnebago County. Mix of established neighborhoods and older stock. Full service area.' },
  { name: 'Kimberly', notes: 'Village south of Appleton. Older working-class stock. Strong as-is buyer demand.' },
  { name: 'Little Chute', notes: 'Village near Kaukauna. Older homes, estate situations common. Full service area.' },
];

export default function AppletonNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[appletonLocalBusinessSchema, articleSchema('Appleton WI Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/appleton-wi" className="hover:text-white">Appleton WI</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Appleton WI Neighborhoods — We Buy Houses Everywhere in the Fox Cities</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">USA Home Buyers purchases homes throughout Appleton and the broader Fox Cities area. Whether your property is in a historic Appleton neighborhood or a nearby Outagamie, Calumet, or Winnebago County community, we make cash offers as-is in any condition. Call 888-274-5006.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-8">Don't see your neighborhood listed? Call us — we buy throughout Outagamie, Calumet, and Winnebago Counties. 888-274-5006.</p>
        <Link href="/markets/appleton-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Appleton WI Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Appleton WI Home" sourcePage="/markets/appleton-wi/neighborhoods" />
      </div>
    </>
  );
}
