/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/peoria-il/neighborhoods`;

export const metadata: Metadata = {
  title: 'Peoria IL Neighborhoods — Cash Home Buyers Serving All Areas',
  description:
    'We buy houses in all Peoria IL neighborhoods — Richwoods, South Peoria, East Bluff, Knoxville Ave, Bradley Park, Grand View Drive. Cash offer in 24 hours. Call (888) 440-5250.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  {
    name: 'Richwoods',
    description: 'North Peoria\'s premier neighborhood — safe, suburban, family-oriented; access to Forest Park Nature Center; highest-rated schools in Peoria Public Schools. Housing stock: 1960s–1980s ranch and colonial. Price range: $150,000–$275,000. Seller profile: motivated seller upgrading to more land, estate sale, or relocation.',
    priceRange: '$150,000–$275,000',
    housingEra: '1960s–1980s',
    cashBuyerActivity: 'Moderate',
  },
  {
    name: 'Kellar Heights',
    description: 'North Peoria between University and Knoxville Ave; established subdivision popular with OSF Saint Francis and Methodist Medical Center healthcare professionals. 1960s–1980s ranch-style. Stable, well-maintained. Seller profile: healthcare worker relocation or estate sale.',
    priceRange: '$120,000–$200,000',
    housingEra: '1960s–1980s',
    cashBuyerActivity: 'Moderate',
  },
  {
    name: 'Peoria Heights (Independent Village)',
    description: 'Independent municipality north of Peoria proper with a distinctive arts and restaurant district on Prospect Road. Per Redfin, Peoria Heights median is $126,000 (+13.1% YoY). 1920s–1940s Craftsman bungalows; strong heritage character. Rental and owner-occupied mix. Seller profile: inherited estate, tired landlord.',
    priceRange: '$100,000–$180,000',
    housingEra: '1920s–1940s',
    cashBuyerActivity: 'Moderate-High',
  },
  {
    name: 'Grand View Drive Area',
    description: 'Historic bluff corridor overlooking the Illinois River valley. Theodore Roosevelt called Grand View Drive "the world\'s most beautiful drive" in 1910. Prestigious historic homes with river views. Diverse price range depending on condition and river exposure. Seller profile: estate sale, divorce, motivated move-up seller.',
    priceRange: '$100,000–$300,000+',
    housingEra: '1900s–1940s',
    cashBuyerActivity: 'Moderate',
  },
  {
    name: 'North Peoria / Willow Knolls',
    description: 'Modern development (post-1980s); single-family subdivisions; upper-middle income; commuter profile. Vinyl-sided construction. Conventional sale territory but cash buyers active for estate and divorce sales. Price range reflects newer, better-maintained stock.',
    priceRange: '$160,000–$250,000',
    housingEra: 'Post-1980',
    cashBuyerActivity: 'Low-Moderate',
  },
  {
    name: 'Knoxville Avenue Corridor',
    description: 'Long residential spine running north from downtown to the Richwoods area. Mix of 1940s–1970s ranches and two-stories with rental conversions. Moderate prices. High landlord-seller activity. Seller profile: tired landlord, estate sale, code violation property.',
    priceRange: '$70,000–$140,000',
    housingEra: '1940s–1970s',
    cashBuyerActivity: 'High',
  },
  {
    name: 'Bradley Park / Northmoor',
    description: 'Near Bradley University\'s campus — strong rental demand from Bradley University students and staff. Investment property territory. Seller profile: tired landlord exiting student rental market. According to bradley.edu, approximately 5,000 students create sustained rental demand in this corridor.',
    priceRange: '$75,000–$140,000',
    housingEra: '1940s–1970s',
    cashBuyerActivity: 'High',
  },
  {
    name: 'South Peoria / Manual Area',
    description: 'South Side with the highest concentration of pre-1940 housing in the city. Source: biggestuscities.com confirms Peoria\'s overall 24.3% pre-1940 housing — the South Side skews far higher. Highest vacancy rates. Cash-buyer target market. Significant rehab required. Seller profile: inherited estate, foreclosure pre-sale, abandoned property.',
    priceRange: '$25,000–$90,000',
    housingEra: 'Pre-1940 (dominant)',
    cashBuyerActivity: 'Very High',
  },
  {
    name: 'East Bluff',
    description: 'Near downtown; older brick bungalows and row housing. Significant motivated-seller concentration reflecting post-industrial demographic shift. Many Caterpillar-era retiree estates in this neighborhood. Seller profile: inherited estate, pre-foreclosure, code violation.',
    priceRange: '$40,000–$100,000',
    housingEra: '1920s–1950s',
    cashBuyerActivity: 'Very High',
  },
  {
    name: 'Sheridan Village',
    description: 'West Peoria; 1950s–1970s ranch-style homes; moderate prices; stable working-class neighborhood. Homeownership-dominant. Seller profile: estate sale, divorce, relocation.',
    priceRange: '$80,000–$140,000',
    housingEra: '1950s–1970s',
    cashBuyerActivity: 'Moderate',
  },
];

export default function PeoriaNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Peoria IL Neighborhoods — Cash Home Buyers Serving All Areas', pageUrl, '2026-04-18'),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Peoria IL Neighborhoods — We Buy Houses in Every Area
          </h1>
          <p className="text-blue-100 text-lg mb-6">
            From Richwoods ranch homes to South Peoria pre-war bungalows to Grand View Drive historics — we buy in every Peoria neighborhood, any condition.
          </p>
          <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
            📞 Call Now — (888) 440-5250 (24/7)
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <p className="text-gray-700 mb-6">
            According to Zillow (February 2026), Peoria's Home Value Index is $115,649 — but that citywide number masks dramatic variation across neighborhoods. Richwoods homes regularly sell at $175,000–$250,000. South Peoria and East Bluff distressed inventory starts at $25,000. The neighborhood determines the price; the condition determines whether you can sell conventionally or need a cash buyer.
          </p>

          <div className="space-y-6">
            {NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-sm transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h2 className="text-xl font-bold text-brand-dark">{n.name}</h2>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${n.cashBuyerActivity === 'Very High' ? 'bg-red-100 text-red-700' : n.cashBuyerActivity === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-blue-50 text-brand-primary'}`}>
                    Cash Buyer Activity: {n.cashBuyerActivity}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                  <span><strong>Price range:</strong> {n.priceRange}</span>
                  <span><strong>Housing era:</strong> {n.housingEra}</span>
                </div>
                <p className="text-gray-700 text-sm">{n.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">We Cover All of Peoria County</h2>
          <p className="text-gray-700 text-sm mb-4">
            In addition to all Peoria city neighborhoods, we buy houses in Peoria County communities including Peoria Heights, Dunlap, Chillicothe, Washington, Morton, and all unincorporated areas.
          </p>
          <a href="tel:+18884405250" className="text-brand-primary hover:underline font-medium text-sm">Call (888) 440-5250 to confirm service for your specific address →</a>
        </section>

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/market-report', label: 'Market Report' },
              { href: '/markets/peoria-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/peoria-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/peoria-il/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Get Your Peoria IL Cash Offer?" sourcePage="/markets/peoria-il/neighborhoods" />
      </div>
    </>
  );
}
