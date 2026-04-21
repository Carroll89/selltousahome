/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { hartfordLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/neighborhoods`;

export const metadata: Metadata = {
  title: 'Hartford CT Neighborhoods — We Buy Houses in Every Area',
  description:
    'We buy houses in every Hartford CT neighborhood — West End, Frog Hollow, Barry Square, Blue Hills, Asylum Hill, Parkville, and the full Hartford metro.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'West End', description: 'Tree-lined streets with larger Victorians and colonials near Elizabeth Park. Higher values for the city ($250K-$400K). Many estate and inheritance sales.' },
  { name: 'Asylum Hill', description: 'Brownstones and apartments near the Mark Twain House and Hartford Seminary. Dense, walkable neighborhood with a mix of multi-family and institutional properties.' },
  { name: 'Frog Hollow', description: 'Hartford\'s most densely populated neighborhood southwest of downtown. Triple-deckers and multi-families built 1890-1920. High tenant-occupied rate. Strong cash buyer market.' },
  { name: 'Barry Square', description: 'Mixed residential neighborhood with Victorian singles and two-families. Active code enforcement area. Properties range $150K-$250K. Common situations: estate sales, landlord fatigue.' },
  { name: 'South End', description: 'South of downtown along Wethersfield Avenue. Mix of housing types from triple-deckers to post-war ranch homes. Close to Wethersfield town line.' },
  { name: 'Parkville', description: 'Working-class neighborhood west of downtown near the Park River. Smaller single-families and duplexes. Affordable price points ($140K-$220K).' },
  { name: 'Blue Hills', description: 'North Hartford residential area with post-war colonials, capes, and ranch homes. More suburban feel than downtown neighborhoods. Properties $180K-$300K.' },
  { name: 'Behind the Rocks', description: 'Between New Britain Avenue and the rail corridor near Trinity College. Two-families and triple-deckers. Student rental market creates unique landlord situations.' },
  { name: 'North Meadows', description: 'Industrial-residential mixed zone north of downtown along the Connecticut River. Smaller residential pockets among commercial properties.' },
  { name: 'South Green', description: 'Downtown-adjacent neighborhood. Older multi-family buildings, some converted from single-family. Close to Bushnell Park and the state capitol.' },
  { name: 'Sheldon/Charter Oak', description: 'Southeast Hartford near Charter Oak Landing. Mix of public housing, multi-family, and scattered single-family homes. Active redevelopment area.' },
  { name: 'Clay Arsenal', description: 'North End neighborhood between Albany Avenue and Main Street. Dense multi-family housing. Some of the most affordable properties in Hartford.' },
];

export default function HartfordNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[hartfordLocalBusinessSchema]} />

      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hartford CT Neighborhoods — We Buy Houses in Every Area
          </h1>
          <p className="text-blue-100 text-lg">From West End Victorians to Frog Hollow triple-deckers — we buy in every Hartford neighborhood.</p>
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
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Hartford Metro Communities</h2>
          <p className="text-gray-700 mb-4">
            Beyond the city limits, we buy houses throughout the Hartford metro area. West Hartford has significantly higher home values ($400K+) but the same seller situations — divorce, estate, relocation. East Hartford across the river has more affordable housing stock. New Britain to the south, Manchester to the east, and Glastonbury's suburban market all have homeowners who need a fast, certain sale.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['West Hartford', 'East Hartford', 'New Britain', 'Manchester', 'Glastonbury', 'Wethersfield', 'Newington', 'Rocky Hill', 'Cromwell', 'Bristol', 'Enfield', 'Windsor', 'South Windsor', 'Farmington'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8">
          <Link href="/markets/hartford-ct" className="text-brand-primary hover:underline font-medium">← Back to Hartford CT</Link>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Hartford CT Home?" sourcePage="/markets/hartford-ct/neighborhoods" />
      </div>
    </>
  );
}
