/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { bostonLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/neighborhoods`;

export const metadata: Metadata = {
  title: 'Boston MA Neighborhoods — We Buy Houses in Every Area',
  description: 'We buy houses in every Boston neighborhood — Dorchester, Roxbury, Mattapan, East Boston, South Boston, Jamaica Plain, and Greater Boston.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Dorchester', description: 'Boston\'s largest neighborhood. Dense triple-decker grid, diverse communities. Median $500K-$650K. High volume of estate sales, tenant-occupied properties, and multi-family investment exits.' },
  { name: 'Roxbury', description: 'Historic Victorian and multi-family housing. Active ISD enforcement area. Properties $400K-$600K. Common situations: inherited property, code violations, landlord fatigue.' },
  { name: 'Mattapan', description: 'Residential neighborhood along Blue Hill Avenue. Mix of single-families and multi-families. $400K-$550K. Strong cash buyer market for properties needing lead paint compliance.' },
  { name: 'East Boston', description: 'Across the harbor from downtown. Growing market with older housing stock being renovated. $500K-$700K. Airport proximity affects some properties.' },
  { name: 'South Boston', description: 'Row houses and newer condos. One of Boston\'s hottest neighborhoods. $600K-$900K+. Divorce sales and estate sales common due to high equity values.' },
  { name: 'Jamaica Plain', description: 'Diverse housing from Victorians to multi-families to condos. $550K-$800K. Mix of owner-occupied and rental. Active investment market.' },
  { name: 'Charlestown', description: 'Historic row houses near the Navy Yard. Tight supply, high demand. $700K-$1M+. Estate and downsizing sales dominate the cash buyer market.' },
  { name: 'Brighton', description: 'Student-heavy rental market near Boston College. Two-families and triple-deckers. $550K-$750K. Landlord fatigue and tenant issues common.' },
  { name: 'Allston', description: 'Adjacent to Brighton with similar housing stock. Heavy student rental presence. $500K-$700K. Multi-family investor exits.' },
  { name: 'Hyde Park', description: 'Southern Boston, more suburban feel. Single-families and two-families. $450K-$600K. Estate sales and foreclosure situations.' },
  { name: 'Roslindale', description: 'Residential neighborhood between Jamaica Plain and Hyde Park. $500K-$700K. Growing market with older housing needing updates.' },
  { name: 'West Roxbury', description: 'Suburban-feeling Boston neighborhood. Single-families dominate. $600K-$800K. Estate and downsizing sales.' },
];

export default function BostonNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Boston MA Neighborhoods — We Buy Houses in Every Area</h1>
          <p className="text-blue-100 text-lg">From Dorchester triple-deckers to Charlestown row houses — we buy in every Boston neighborhood.</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6 my-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">{n.name}</h3>
              <p className="text-gray-600 text-sm">{n.description}</p>
            </div>
          ))}
        </div>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Greater Boston Communities</h2>
          <p className="text-gray-700 mb-4">Beyond Boston city limits, we buy throughout the metro. Cambridge and Somerville ($700K-$1M+) to the north. Quincy ($400K-$600K) to the south. Brookline ($800K+), Chelsea ($400K-$550K), Revere ($450K-$600K), and Winthrop ($500K-$650K) in the inner ring.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Cambridge', 'Somerville', 'Quincy', 'Brookline', 'Chelsea', 'Revere', 'Winthrop', 'Medford', 'Malden', 'Everett', 'Newton', 'Watertown', 'Arlington', 'Belmont'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>
        <Link href="/markets/boston-ma" className="text-brand-primary hover:underline font-medium">← Back to Boston MA</Link>
        <div className="mt-8"><CashOfferForm variant="footer" headline="Ready to Sell Your Boston Home?" sourcePage="/markets/boston-ma/neighborhoods" /></div>
      </div>
    </>
  );
}
