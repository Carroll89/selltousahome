/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bloomington-il/neighborhoods`;

export const metadata: Metadata = {
  title: 'Bloomington IL Neighborhoods — Cash Home Buyers 2026',
  description:
    "We buy houses in every Bloomington IL neighborhood — Founders' Grove, Downtown, Holiday Knolls, North Bloomington, West Bloomington, ISU-area, and all of McLean County.",
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  {
    name: "Founders' Grove Historic District",
    description: "East Monroe Street to North Street; Victorian and Craftsman homes from the 1880s-1920s; National Register of Historic Places. Two-story balloon-frame construction. Bloomington's most architecturally distinctive residential neighborhood. Properties here require Historic Preservation Commission approval for exterior modifications. Common seller profile: estate of a long-term owner who purchased in the 1960s-1980s and accumulated 40+ years of equity. Deferred maintenance common. Cash buyers are particularly attractive to sellers in this district due to the gap between as-is condition and what lenders require for financing.",
    priceContext: "Typical Founders' Grove home: higher-end Bloomington residential; Victorian-era character commands premium over city ZHVI in retail condition; deferred-maintenance examples sell below ZHVI.",
    sellerNote: "Historic district rules restrict exterior modifications without HPC approval — complicating renovation financing. Cash sale bypasses this entirely.",
  },
  {
    name: "Downtown Bloomington",
    description: "Washington/Monroe/Jefferson/Main Street core and adjacent residential. Older worker-class housing stock; some blocks below the Redfin $185K neighborhood median. Mix of residential and commercial. Alley-access properties, narrow lots, older construction dating to 1890s-1930s. Active investor interest.",
    priceContext: "Below-city-average pricing; highest distress concentration in the Bloomington market. Per Redfin neighborhood data, Downtown Bloomington median near $185K.",
    sellerNote: "Many properties have title complexity or code issues accumulated over decades of ownership. Cash buyers simplify the transaction.",
  },
  {
    name: "Alton-Oakland",
    description: "Centered on Oakland Avenue and Alton Avenue on the east side. Mix of late-Victorian workers' cottages and 1940s-1960s bungalows. One of five designated Bloomington historic districts (Alton-Oakland Historic District). Moderate price range; good bones for renovation. Active rental-to-sale conversion market.",
    priceContext: "Mid-range Bloomington neighborhood; below city ZHVI on average. Bungalow and cottage stock typical.",
    sellerNote: "Landlord exits common in this area. Tenant-occupied properties are routine here; we buy with tenants in place.",
  },
  {
    name: "Holiday Knolls / Holiday Acres",
    description: "Established mid-century subdivision near Veterans Pkwy/Hershey Road. 1960s-1970s ranch homes on modest lots. Family-oriented with good school proximity. Stable neighborhood with consistent demand from conventional buyers. Lower distress concentration than west or downtown areas.",
    priceContext: "Near or slightly above city ZHVI. Well-maintained examples sell retail quickly at the ~4-day pending pace per Zillow.",
    sellerNote: "Primary cash-buyer scenarios here: estate, divorce, or condition-issue (roof, HVAC) that deters conventional buyers.",
  },
  {
    name: "Sherwood Forest",
    description: "Northeast Bloomington. 1950s-1970s ranch-style homes. Suburban feel, stable neighborhood. Active rental market with student and young-professional tenants. Below-median price range.",
    priceContext: "Below city ZHVI in most sections. Rental-heavy portions trade at investor values.",
    sellerNote: "Tired-landlord exits are a common seller profile in Sherwood Forest. We purchase tenant-occupied properties.",
  },
  {
    name: "Sunset Hills / West Bloomington",
    description: "Southwest corridor. Bloomington's highest concentration of pre-1950 housing stock; older sections dating to 1920s-1940s. City's most active code-enforcement zone. West Bloomington also has the market's highest concentration of balloon-frame construction — fire-damage and structural-issue sales are more common here than any other Bloomington neighborhood.",
    priceContext: "Below-market pricing relative to city ZHVI due to condition issues. Entry-level investment territory.",
    sellerNote: "Code violations, fire damage, and significant deferred maintenance are common here. We buy it all as-is.",
  },
  {
    name: "Veterans Parkway Corridor / Eastview",
    description: "Eastern edge of Bloomington near ISU's campus perimeter. Rental-heavy corridor. Graduate student and young professional population. Mix of 1960s-1980s construction. High tenant-occupancy rates; one of the city's most active landlord-to-investor sale corridors.",
    priceContext: "Priced as rental income property; below city ZHVI for owner-occupant buyers. Cap-rate-driven transactions.",
    sellerNote: "This is Bloomington's primary tired-landlord exit market. ISU enrollment stability means rents hold, but management burden is real.",
  },
  {
    name: "North Bloomington (Country Club Area)",
    description: "Higher-end ranch and split-level homes from the 1960s-1980s. Executive commuter housing for State Farm and Country Financial employees. The neighborhood most directly affected by State Farm workforce restructuring — early-retirement package recipients who own $250K-$350K homes here sometimes need to liquidate quickly when transitioning to fixed retirement income.",
    priceContext: "At or above city ZHVI. Well-maintained examples command premium. Estate and restructuring-driven sales represent the primary cash-buyer opportunity.",
    sellerNote: "State Farm retiree turnover is real in this neighborhood. These are equity-rich sellers who want speed and certainty over maximum retail price.",
  },
  {
    name: "Pepper Ridge / Northbrook",
    description: "Newer northeastern subdivisions. Post-2000 construction; vinyl-sided suburban homes. Conventional sale territory for most properties. Lower distress; higher owner-occupancy. Primary cash-buyer opportunity: divorce, sudden relocation, or estate of a more recent purchaser.",
    priceContext: "At or above city ZHVI. Newer construction reduces condition-issue distress.",
    sellerNote: "Cash buyers here are primarily speed-of-close players — divorce, job relocation, estate.",
  },
  {
    name: "Indiana Ave Corridor",
    description: "Southeast Bloomington. Moderate price range. Active rental and investor market. Mix of 1950s-1970s housing with high investor ownership. Per Bloomington market data, Indiana Ave is among the higher-turnover corridors for investment property transactions.",
    priceContext: "Below city ZHVI; investor-priced transactions common.",
    sellerNote: "Landlord exits and tenant-occupied transactions are the norm here. We handle both.",
  },
];

export default function BloomingtonILNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema("Bloomington IL Neighborhoods — Cash Home Buyer Guide 2026", pageUrl, '2026-04-19'),
      ]} />

      <section className="relative text-white py-16 px-4 bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Bloomington IL Neighborhoods — We Buy Houses in All of Them
          </h1>
          <p className="text-blue-100 text-lg mb-4">
            From Founders&apos; Grove Victorians to ISU-area rentals to West Bloomington pre-war homes — we buy in every Bloomington neighborhood and throughout McLean County.
          </p>
          <a
            href="tel:+18882745006"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-2.5 rounded-xl text-base transition-colors"
          >
            📞 (888) 274-5006 — 24/7
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), the Bloomington Home Value Index (ZHVI) is $228,634 — but that city-wide figure masks meaningful variation across Bloomington's distinct neighborhoods. A home in Founders&apos; Grove Historic District commands a different value than a 1960s ranch in Holiday Knolls or a rental-conversion in the Veterans Parkway corridor. Per Redfin (March 2026), the city median sale price is $300,000, driven partly by high-value transactions in North Bloomington and newer-construction areas.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers evaluates each property based on its specific neighborhood, condition, and comps — not a single city-wide formula. Below is our neighborhood-by-neighborhood breakdown of what sellers in each area need to know.
          </p>
        </section>

        <section className="my-8 space-y-8">
          {NEIGHBORHOODS.map((n) => (
            <div key={n.name} className="border border-gray-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-brand-dark mb-2">{n.name}</h2>
              <p className="text-gray-700 mb-3">{n.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-blue-700 mb-1">Price Context</p>
                  <p className="text-sm text-gray-700">{n.priceContext}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-green-700 mb-1">Cash-Buyer Note</p>
                  <p className="text-sm text-gray-700">{n.sellerNote}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">McLean County Communities Beyond Bloomington</h2>
          <p className="text-gray-700 mb-4">
            Our service area extends to all of McLean County — the largest county by land area in Illinois. In addition to Bloomington, we purchase homes in:
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Normal', 'Heyworth', 'LeRoy', 'Lexington', 'Towanda', 'Hudson', 'Downs', 'Gridley', 'Chenoa', 'Pontiac (southern McLean)', 'Arrowsmith', 'Saybrook', 'Anchor'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            If you&apos;re unsure whether we serve your address, call (888) 274-5006. We cover all 1,183 square miles of McLean County.
          </p>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Historic Districts — Special Considerations</h2>
          <p className="text-gray-700 mb-3">Bloomington has five designated historic districts. Properties within these districts require approval from the Bloomington Historic Preservation Commission for exterior modifications — which can complicate renovation financing for retail buyers who need lender-required repairs. Cash buyers have no such constraint.</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal pl-5">
            <li>Bloomington Downtown Historic District</li>
            <li>Founders&apos; Grove Historic District (National Register)</li>
            <li>North Side Residential Historic District</li>
            <li>Alton-Oakland Historic District</li>
            <li>West Washington Street Historic District</li>
          </ol>
          <p className="text-sm text-gray-600 mt-3">Source: Old House Society Illinois historic district registry (oldhousesociety.org)</p>
        </section>


      <VideoEmbed
        src="/videos/bloomington-il/neighborhoods.mp4"
        title="Bloomington IL Neighborhoods — We Buy Houses Everywhere"
        poster="/videos/bloomington-il/neighborhoods-poster.jpg"
        subtitle="Eastside to Towanda to Normal — any neighborhood, any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Eastside Bloomington, Grove, Towanda, Normal — USA Home Buyers buys in every McLean County neighborhood. Bungalows, ranches, two-stories — any condition, any situation. Cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
        <CashOfferForm variant="footer" headline="Get Your Bloomington IL Cash Offer — Any Neighborhood" sourcePage="/markets/bloomington-il/neighborhoods" />
      </div>
    </>
  );
}
