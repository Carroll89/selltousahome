/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { binghamtonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/binghamton-ny/neighborhoods`;

export const metadata: Metadata = {
  title: 'Binghamton NY Neighborhoods — Westside, South Side, North Side | Sell Fast',
  description:
    "We buy houses in all Binghamton NY neighborhoods — Westside, South Side, North Side, East Side. Cash offer in 24 hours. No repairs. Serving Broome County sellers.",
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  {
    name: 'Westside',
    character:
      "Historically the most desirable residential area in Binghamton, the Westside developed in the late 19th and early 20th centuries for the professional and managerial class that staffed the city's manufacturing and commercial enterprises. Victorian-era homes, 2-story Colonials, and Craftsman bungalows line tree-canopied streets near Recreation Park. The proximity to Binghamton University via the city's west side creates a student rental presence — particularly along Front Street and the Leroy Street corridor. Inherited Westside properties often come with beautiful bones and deferred maintenance.",
    investorAngle: 'Inherited Victorians, student rentals, older estate properties. Westside properties often have strong ARV potential — and significant updating costs.',
  },
  {
    name: 'South Side',
    character:
      "The South Side developed as Binghamton's working-class residential area, primarily south of downtown. Pennsylvania Avenue divides it into South Side East and South Side West — each with distinct character. South Side West is more solidly working-class residential with older single-family and 2-family frame homes on modest lots. South Side East has seen more distressed inventory and higher vacancy rates. Older 2-family homes in this area represent a significant share of Binghamton's rental stock outside the BU corridor.",
    investorAngle: 'Working-class rental stock, 2-family homes, distressed and vacant properties. Strong distressed-seller activity.',
  },
  {
    name: 'North Side',
    character:
      "Located north of the Susquehanna River, the North Side is primarily owner-occupied residential with a mix of older single-family homes and scattered rental properties. The neighborhood has a quieter, more settled character than the more transient-adjacent parts of the Westside or South Side. Homes here tend to be well-maintained by long-term owner-occupants — which means fewer distressed sales, but also means when estates come to market, they often represent solid older construction in reasonable condition.",
    investorAngle: 'Estate and long-hold properties from established owner-occupants. North Side properties often have cleaner title and better physical condition than parts of the South Side.',
  },
  {
    name: 'East Side',
    character:
      "The East Side is Binghamton's eastern residential section, with a mix of older and mid-century construction. Less dense than the Westside or South Side, the East Side has a range of property types from pre-war frame homes to post-war ranch-style construction. The area sits east of downtown and has historically had a mix of working-class and middle-class residential character.",
    investorAngle: 'Mixed-vintage residential. Mid-century construction is more likely to have updated mechanicals than the 1910s–1930s stock on the Westside.',
  },
  {
    name: 'Downtown Binghamton',
    character:
      "The civic and commercial core of Binghamton surrounds the Broome County Courthouse complex at 92 Court Street — which houses both the Surrogate's Court and other county offices. Downtown has seen some residential conversion activity in older commercial buildings. Energy from Binghamton University's academic and administrative population adds foot traffic. Residential inventory downtown is limited and tends toward converted units rather than traditional single-family homes.",
    investorAngle: 'Limited single-family inventory. Converted commercial-to-residential properties require careful title and zoning review.',
  },
];

export default function BinghamtonNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          binghamtonLocalBusinessSchema,
          articleSchema('Binghamton NY Neighborhoods Guide', pageUrl, '2026-05-01'),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/binghamton-ny" className="hover:text-white">Binghamton NY</Link>{' '}
            › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Binghamton NY Neighborhoods — Where We Buy Houses
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              USA Home Buyers purchases houses in all Binghamton residential neighborhoods:
              Westside, South Side (East and West), North Side, East Side, and Downtown. Each
              area has distinct housing stock, seller situations, and investor dynamics. We
              buy in any neighborhood, any condition. Written cash offer in 24 hours. Call 888-274-5006.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-green-600 text-white p-3 flex items-center justify-center gap-3 shadow-lg">
        <a href="tel:+18882745006" className="font-bold text-base">
          📞 Call 888-274-5006 — Get Cash Offer
        </a>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Binghamton's "Sides" — Understanding the Neighborhood Framework
          </h2>
          <p className="text-gray-700 mb-4">
            Binghamton's neighborhoods developed from the city's 19th-century ward system into
            what locals call the "Sides" — directional areas defined by geography and the
            city's industrial history. The Susquehanna and Chenango Rivers bisect parts of
            the city and historically shaped where different populations settled.
          </p>
          <p className="text-gray-700 mb-4">
            The housing stock across these neighborhoods varies significantly — from Victorian
            and Craftsman-era construction on the Westside to post-war single-family homes
            on the North Side to working-class 2-families on the South Side. For cash buyers,
            the Westside has the highest ARV potential; the South Side has the most distressed
            inventory. All of it is relevant to a seller trying to move quickly.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-amber-800">
              <strong>Important:</strong> Johnson City is a separate village — it is not part
              of the City of Binghamton. Legal requirements, municipal codes, and applicable
              city services differ. If your property address is in Johnson City, contact us
              directly at 888-274-5006 and we'll discuss your specific situation.
            </p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            Neighborhood-by-Neighborhood Overview
          </h2>
          <div className="space-y-8">
            {NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-3">{n.name}</h3>
                <p className="text-gray-700 text-sm mb-4">{n.character}</p>
                <div className="border-l-4 border-brand-primary pl-3">
                  <p className="text-xs font-semibold text-brand-primary mb-1">Investor / seller angle</p>
                  <p className="text-sm text-gray-600">{n.investorAngle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
          {[
            { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property' },
            { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure' },
            { href: '/markets/binghamton-ny/probate', label: 'Probate' },
            { href: '/markets/binghamton-ny/tenant-occupied', label: 'Tenant-Occupied' },
            { href: '/markets/binghamton-ny/market-report', label: 'Market Report' },
            { href: '/markets/binghamton-ny', label: '← Binghamton NY Home' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Binghamton NY Home?"
          subheadline="Any neighborhood. Any condition. Written cash offer in 24 hours."
          sourcePage="/markets/binghamton-ny/neighborhoods"
        />

        <p className="text-xs text-gray-400 mt-8">
          Neighborhood character descriptions based on Wikipedia Binghamton NY, Redfin neighborhood
          pages, and local research. No neighborhood-level pricing data is published — contact us
          for a property-specific offer. This information is for educational purposes only.
        </p>
      </div>
    </>
  );
}
