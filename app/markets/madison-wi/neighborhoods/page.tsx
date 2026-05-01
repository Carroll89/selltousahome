/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { madisonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/madison-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Madison WI Neighborhoods — We Buy Houses Throughout Dane County',
  description: 'USA Home Buyers purchases houses in all Madison WI neighborhoods and throughout Dane County — Marquette, Tenney-Lapham, Vilas, Nakoma, South Madison, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Capitol / Isthmus', notes: 'Dense urban core. Condos, older frame homes, high walkability. Probate and estate situations common in older stock.' },
  { name: 'Marquette', notes: 'Near-east side. Craftsman bungalows, arts community, established character. Strong demand but older homes need work.' },
  { name: 'Tenney-Lapham', notes: 'Victorian-era and early 20th century stock near the Capitol. High demand. Common for long-held estate properties.' },
  { name: 'Vilas', notes: 'Near-west. Foursquares and bungalows, Vilas Park proximity. Character homes, often with deferred maintenance.' },
  { name: 'Nakoma', notes: 'Established west-side. 1930s–1950s period revival homes. Higher price tier, often estate situations.' },
  { name: 'Dudgeon-Monroe', notes: 'Monroe Street corridor. Tudor Revival and Colonial forms. Highest Madison price tier. Strong equity for sellers.' },
  { name: 'South Madison', notes: 'More affordable. Mid-century ranch and Cape Cod. Working-class character, often distressed situations.' },
  { name: 'Fitchburg', notes: 'South of Madison. Mix of suburban single-family and older stock. Separate city, same Dane County services.' },
  { name: 'Middleton', notes: 'West of Madison. Suburban character, higher median values. Estate and relocation situations.' },
  { name: 'Sun Prairie', notes: 'Northeast of Madison. Growing suburban area. Older stock mixed with newer development.' },
  { name: 'Monona', notes: "Lake Monona frontage. Older bungalows and ranches. Often estate properties from long-held ownership." },
  { name: 'Verona', notes: 'Southwest of Madison. Growing market. EPIC Systems campus influence. Mix of older and newer stock.' },
];

export default function MadisonNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, articleSchema('Madison WI Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/madison-wi" className="hover:text-white">Madison WI</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Madison WI Neighborhoods — We Buy Houses Everywhere in Dane County</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">USA Home Buyers purchases homes throughout Madison and the broader Dane County area. Whether your property is in a near-campus historic neighborhood or a suburban Dane County community, we make cash offers as-is in any condition. Call 888-274-5006.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-8">Don't see your neighborhood listed? Call us — we buy throughout Dane County. 888-274-5006.</p>
        <Link href="/markets/madison-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Madison WI Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Madison WI Home" sourcePage="/markets/madison-wi/neighborhoods" />
      </div>
    </>
  );
}
