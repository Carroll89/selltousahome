/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/neighborhoods`;

export const metadata: Metadata = {
  title: 'Champaign-Urbana IL Neighborhoods — Cash Home Buyers',
  description:
    'Champaign and Urbana IL neighborhood guide for sellers: Campustown, Old West Urbana, Southwest Champaign, University District, Crystal Lake Park and more. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const CHAMPAIGN_NEIGHBORHOODS = [
  {
    name: 'Campustown',
    description: 'The Green Street commercial and residential corridor immediately adjacent to the UIUC campus. Highest-density rental housing in the metro. Properties here are overwhelmingly investor-owned — purpose-built student apartments, converted houses, and mixed-use buildings with ground-floor retail. Annual August tenant turnover is the defining feature of Campustown real estate. Individual single-family homes are rare; when they exist, they\'re typically landlord-owned and priced on rental yield. Seller profile: tired landlords who bought in the 1990s-2000s and are ready to exit the student-housing business.',
    priceContext: 'Priced on yield; typical single-family homes $150K-$250K depending on unit count and condition.',
    sellerHook: 'Annual turnover fatigue. August damage cycles. Tired of the 11-month lease game.',
  },
  {
    name: 'Southwest Champaign / Research Park Area',
    description: 'Champaign\'s fastest-growing and most professionally-oriented neighborhood cluster. Stone Creek, the neighborhoods south of Windsor Road, and Savoy-adjacent streets are where Research Park tech workers and UIUC professional staff buy their homes. Post-2000 construction dominates — vinyl-sided 3-4BR homes on curvilinear streets, newer HVAC, minimal deferred maintenance. This is the closest thing Champaign-Urbana has to a conventional suburban buyer market. According to the University of Illinois Research Park (researchpark.illinois.edu), 3,000+ employees work in the 100+ tech companies on site.',
    priceContext: 'Median range $220K-$350K; newer construction supports conventional financing.',
    sellerHook: 'Tech-worker relocation when startup funding ends. UIUC tenure-offer relocation. Dual-career academic moves.',
  },
  {
    name: 'Robeson Woods / Presidents Neighborhoods',
    description: 'Central Champaign\'s workhorse residential corridors — streets named after US presidents, modest 1950s-1970s brick ranch homes on standard lots. Mixed owner-occupant and investor presence. This is the backbone of Champaign\'s working-to-middle-class housing market: affordable entry points, solid build quality from the postwar era, and a buyer pool that includes both families and investors who rent to UIUC grad students and University staff. Not as glamorous as Southwest Champaign but more stable than Campustown.',
    priceContext: 'Median range $160K-$220K; FHA-eligible in most cases if mechanicals are functional.',
    sellerHook: 'Aging owner-occupants on fixed incomes. Deferred maintenance on 1960s brick homes. Estate situations.',
  },
  {
    name: 'Country Fair / Neil Street Corridor',
    description: 'West Champaign\'s commercial-adjacent residential neighborhoods along the Neil Street spine. Working-class to lower-middle-class housing in the $120K-$175K range. Country Fair is a mid-century neighborhood of ranch and split-level homes that has seen significant renter conversion over the decades. Investor activity is high relative to the city average. Proximity to Illinois Terminal, Parkland College, and the commercial services on Neil Street creates a renter demand base independent of UIUC.',
    priceContext: 'Entry-level Champaign: $120K-$175K. High investor activity.',
    sellerHook: 'Inherited properties with deferred maintenance. Distressed sales. Landlord fatigue on low-rent rentals.',
  },
  {
    name: 'Lincolnshire / Pheasant Ridge (Northeast Champaign)',
    description: 'Northeast Champaign\'s established family-oriented subdivisions, developed in the 1970s-1980s. Split-levels, colonials, and larger ranches on generous lots. Good school district draws. Lower investor penetration than central or west Champaign. Homeowners here are typically long-term owner-occupants — faculty families, healthcare professionals, and UIUC administrators who bought in the 1980s-1990s. Estate sales from this cohort are a meaningful part of the motivated-seller pipeline.',
    priceContext: '$200K-$280K range; conventional-financing friendly.',
    sellerHook: 'Faculty estate sales. Retiring homeowners moving to active adult communities. Relocation situations.',
  },
];

const URBANA_NEIGHBORHOODS = [
  {
    name: 'University District (East Campus / UIUC-Adjacent)',
    description: 'Urbana\'s most historically significant residential neighborhood, directly adjacent to the UIUC main quad on the east side. Pre-war housing — 1900s-1940s Victorian, Craftsman, and brick apartment buildings — predominates. Urbana Historic District designations apply to parts of this area, creating preservation obligations for owners. High grad-student density; rental-dominated. The University District is where you find Urbana\'s oldest housing stock, highest renter concentration, and most active code enforcement. Per the City of Urbana (urbanaillinois.us), the residential rental inspection program specifically covers this area.',
    priceContext: 'Wide range based on condition and unit count: $100K-$200K single-family; higher for multi-family.',
    sellerHook: 'Aging landlord-investor exits. Historic preservation fatigue. Multi-unit buildings with deferred maintenance.',
  },
  {
    name: 'Old West Urbana',
    description: 'A neighborhood of particular character: tree-lined streets, 1920s-1940s Prairie Style and Tudor Revival homes, walkable distance to the UIUC campus but on the Urbana city side. Long-term owner-occupants who have held these homes for decades. The UIUC faculty who bought in Old West Urbana in the 1970s-1990s have created a distinctive estate-sale pipeline — these homes carry 30-50 years of deferred maintenance and the emotional weight of long ownership. Heirs are often former graduate students or faculty children who have relocated nationally. According to data from chambanamoms.com, Old West Urbana is consistently cited as one of the most desirable walkable neighborhoods in the metro.',
    priceContext: '$160K-$260K depending on size and condition; pre-war condition issues often prevent FHA financing.',
    sellerHook: 'UIUC faculty estate sales. Out-of-state heirs. Homes held 20-40 years with deferred maintenance.',
  },
  {
    name: 'Downtown Urbana / Lincoln Square',
    description: 'Urbana\'s historic commercial core around Lincoln Square, with adjacent residential blocks of older housing. Lincoln Square itself is a redbrick mixed-use district with a distinctly different character from Champaign\'s more commercial Illinois Street corridor. The residential blocks immediately surrounding Downtown Urbana contain a mix of older single-family homes and small multi-family buildings. Urbana\'s walkability and the Lincoln Square farmers market create genuine livability that distinguishes Urbana\'s urban core from many downstate Illinois downtowns.',
    priceContext: '$120K-$190K; mixed condition across the stock.',
    sellerHook: 'Long-owned properties with deferred maintenance. Small landlord exits.',
  },
  {
    name: 'Crystal Lake Park (North Urbana)',
    description: 'North Urbana\'s family-oriented neighborhood cluster around Crystal Lake Park. The housing stock dates primarily to the 1940s-1960s: single-story ranch homes on modest lots, brick construction common. Carle Foundation Hospital is nearby, creating a healthcare-worker buyer pool. Lower investor penetration relative to University District and Downtown Urbana — this is more of an owner-occupant neighborhood. Modest but stable pricing in Urbana\'s lower quartile.',
    priceContext: '$130K-$180K; ranch-style homes in moderate condition.',
    sellerHook: 'Long-held ranches with aging mechanicals. Healthcare worker relocation. Estate situations.',
  },
  {
    name: 'Dodds Park / South Urbana',
    description: 'South Urbana\'s working-class residential neighborhoods. Older housing stock, lower income levels, and a higher concentration of distressed properties than the UIUC-adjacent parts of the market. This is the area of the C-U market most similar to other downstate Illinois distress markets. Investor activity is elevated. According to Illinois Demographics data (illinois-demographics.com), Urbana\'s poverty rate is higher than Champaign\'s city average, with South Urbana driving much of that gap. Sellers here are often in financial distress or dealing with inherited properties with significant deferred maintenance.',
    priceContext: 'Entry level: $70K-$140K. Higher distress concentration.',
    sellerHook: 'Financial distress. Inherited properties. Code violations. Deferred maintenance.',
  },
];

export default function ChampaignUrbanaNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Champaign-Urbana IL Neighborhoods — Cash Buyer Price Guide', pageUrl, '2026-04-18'),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Champaign-Urbana IL Neighborhoods — What Your Area Is Worth in 2026
          </h1>
          <p className="text-blue-100 text-lg mb-6">
            From Campustown student rentals to Southwest Champaign Research Park homes to Old West Urbana faculty estates — every neighborhood has its own price range and seller profile. We buy in all of them.
          </p>
          <a
            href="tel:+18884405250"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg transition-colors"
          >
            📞 (888) 440-5250 — Get Your Neighborhood Offer
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Champaign Neighborhoods</h2>
          <p className="text-gray-700 mb-6">
            Champaign is the larger of the two cities — 89,996 residents per 2024 ACS estimates — with a more diverse housing stock ranging from dense student-rental corridors to Research Park-adjacent newer construction. The UIUC campus sits on the boundary between Champaign and Urbana; the neighborhoods on Champaign's side tend to be newer and more commercially oriented.
          </p>
          <div className="space-y-6">
            {CHAMPAIGN_NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="border border-gray-200 rounded-xl p-5">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{n.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{n.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-800 mb-1">Price Context</p>
                    <p className="text-sm text-blue-900">{n.priceContext}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-green-800 mb-1">Motivated-Seller Profile</p>
                    <p className="text-sm text-green-900">{n.sellerHook}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Urbana Neighborhoods</h2>
          <p className="text-gray-700 mb-6">
            Urbana is the county seat of Champaign County — smaller in population (~39,831 per 2024 ACS) but carrying the full weight of county legal infrastructure at 101 E. Main Street. Urbana's housing stock is older on average than Champaign's, concentrated in the University District pre-war inventory and working-class South Urbana. The UIUC campus straddles the city line; Urbana's east-campus neighborhoods carry both historic character and deferred-maintenance challenges.
          </p>
          <div className="space-y-6">
            {URBANA_NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="border border-gray-200 rounded-xl p-5">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{n.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{n.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-800 mb-1">Price Context</p>
                    <p className="text-sm text-blue-900">{n.priceContext}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-green-800 mb-1">Motivated-Seller Profile</p>
                    <p className="text-sm text-green-900">{n.sellerHook}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-amber-900 mb-2">County Seat Is Urbana — Why This Matters</h2>
          <p className="text-amber-800 text-sm">
            Regardless of whether your property is in Champaign or Urbana, all county legal proceedings — probate, foreclosure, deed recording — are filed in Urbana at the Champaign County Courthouse (101 E. Main Street, Urbana IL 61802) and County Clerk/Recorder (1776 E. Washington Street, Urbana IL 61802). Don't drive to a Champaign city hall expecting county services — they're in Urbana.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How to Get a Cash Offer for Your Champaign-Urbana Home</h2>
          <p className="text-gray-700 mb-4">
            Call (888) 440-5250 or fill out the form below. Tell us the address, the condition (be honest — we buy as-is), and your timeline. We'll send a written offer within 24 hours. No obligation, no games, no bait-and-switch.
          </p>
        </section>

      <VideoEmbed
        src="/videos/champaign-urbana-il/neighborhoods.mp4"
        title="Champaign-Urbana IL Neighborhoods — We Buy Houses Everywhere"
        poster="/videos/champaign-urbana-il/neighborhoods-poster.jpg"
        subtitle="Campustown to Savoy to Philo Road — any neighborhood, any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Campustown, east Champaign, Urbana, Savoy — USA Home Buyers buys in every Champaign County neighborhood. Student rentals, brick ranches, Victorians — any condition, any situation. Cash offer in 24 hours. Call 888-440-5250.
        </div>
      </details>
        <CashOfferForm variant="footer" headline="Get Your Champaign-Urbana Neighborhood Cash Offer" sourcePage="/markets/champaign-urbana-il/neighborhoods" />
      </div>
    </>
  );
}
