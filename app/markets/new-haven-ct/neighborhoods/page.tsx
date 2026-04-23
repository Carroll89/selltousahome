/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/new-haven-ct/neighborhoods`;

export const metadata: Metadata = {
  title: 'New Haven CT Neighborhoods — Cash Home Buyers',
  description:
    'Neighborhood-by-neighborhood guide for selling your home fast in New Haven CT. Fair Haven, East Rock, Westville, The Hill, and surrounding New Haven County towns.',
  alternates: { canonical: pageUrl },
};

export default function NewHavenNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('New Haven CT Neighborhoods — Cash Home Buyer Price Ranges and Seller Guide', pageUrl, '2026-04-18'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/markets/new-haven-ct" className="text-brand-primary hover:underline">New Haven CT</Link> › Neighborhoods
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
          New Haven CT Neighborhoods — Sell Your House Fast for Cash
        </h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          New Haven's neighborhoods vary dramatically in price, housing character, and seller situation. Understanding where your property sits in this two-tier market — and what a realistic cash offer looks like in your specific neighborhood — matters before you decide how to sell. USA Home Buyers serves every neighborhood in New Haven city and every community in New Haven County.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-blue-700 text-sm font-medium">Hablamos español — We serve New Haven's Hispanic community (31% of the city, concentrated in Fair Haven and The Hill) in English and Spanish. Call 888-274-5006.</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">New Haven City Neighborhoods</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Fair Haven</h3>
              <p className="text-sm text-brand-primary font-medium mb-2">Approx. $200K–$300K | Triple-Deckers | Majority Hispanic</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Fair Haven stretches along the Quinnipiac River east of downtown. The neighborhood is majority Hispanic — Puerto Rican and Ecuadorian families have owned homes here for generations. The housing stock is dominated by three-family (triple-decker) wood-frame homes built between 1900 and 1940. Many have been passed down within families and carry deferred maintenance — original plumbing, aging electrical, and pre-1978 lead paint. The investor market in Fair Haven is active. Cash offers for a Fair Haven triple-decker in fair condition typically run $140,000–$210,000. Hablamos español — we serve Fair Haven's community in English and Spanish.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">East Rock</h3>
              <p className="text-sm text-brand-primary font-medium mb-2">$725K median (SF) | Victorian Single-Family | Yale-Adjacent</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                East Rock is New Haven's most desirable residential neighborhood — Victorian single-family homes on tree-lined streets leading up to East Rock Park, where a 110-foot basalt cliff overlooks the city. Yale faculty, physicians, and attorneys live here. The median single-family price is $725,000. This is not distressed-inventory territory; estate sales and divorce sales happen here, but typically involve well-maintained properties priced near or above retail. Cash buyers operate at the edges of East Rock — estate sales with probate complications, or properties that need capital investment beyond what a retail buyer will take on.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Westville</h3>
              <p className="text-sm text-brand-primary font-medium mb-2">$527K median (SF) | Large Victorians | Arts District</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Westville sits in New Haven's northwest corner — a walkable village feel with galleries, restaurants, and large late-Victorian homes built for New Haven's merchant class. Proximity to Yale West Campus and Southern Connecticut State University drives steady rental demand. Divorce and estate sales occur here with some regularity. Homes in Westville in need of renovation — they do exist — present acquisition opportunities in the $360,000–$420,000 range.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">The Hill</h3>
              <p className="text-sm text-brand-primary font-medium mb-2">Approx. $190K–$260K | Dense Urban | Multi-Family | High Investor Activity</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                The Hill is one of New Haven's densest neighborhoods — urban row homes, brick two-families, and multi-family buildings stacked close to Yale-New Haven Hospital and the Connecticut Children's Medical Center. The poverty rate is high, homeownership rates are low, and investor activity is constant. Pre-foreclosure and estate sales are common. The Hill's pre-war housing stock requires significant capital: lead abatement, boiler replacement, and structural remediation on many properties. Cash buyers are the primary exit for Hill neighborhood sellers with encumbered or distressed properties.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Newhallville</h3>
              <p className="text-sm text-brand-primary font-medium mb-2">Approx. $170K–$240K | Pre-War Wood-Frame | Former Winchester Arms District</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Newhallville was built to house workers at the Winchester Repeating Arms factory — the historic facility that made the "Gun That Won the West" and later produced M1 Garands during WWII. The factory closed decades ago; the neighborhood bears the legacy of that industrial anchor's departure. Homes are pre-war frame construction, many needing roof, electrical, and plumbing overhauls. Distressed inventory concentration is highest here. Cash offer ranges for Newhallville: $119,000–$168,000 for a fair-condition single-family; triple-deckers in distress lower.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Wooster Square</h3>
              <p className="text-sm text-brand-primary font-medium mb-2">$350K–$550K | Historic Brownstones | Italian-American Heritage | Near Downtown</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Wooster Square is New Haven's historic Italian-American neighborhood — brownstones and rowhouses surrounding a parklike green with blooming cherry trees every spring. Frank Pepe's and Sally's Apizza are cultural anchors. Properties here are among New Haven's most architecturally significant. Estate sales occur when longtime Italian-American families who've owned since the 1950s pass on; these situations often involve probate and properties that haven't been updated in decades despite their premium location.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Dixwell / Dwight / Edgewood</h3>
              <p className="text-sm text-brand-primary font-medium mb-2">$200K–$360K | Mixed Stock | Yale-Proximity Rentals</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                These three neighborhoods represent the Yale-adjacent rental corridor. Dwight's mix of apartments and multi-family homes serves graduate students and hospital staff. Dixwell's brick row homes and older two-families are working-class ownership. Edgewood, bordering Westville, is in active transition — gentrification pressure from Westville is moving prices upward. Landlords who bought in these neighborhoods for grad-student rental income in the 1990s and 2000s frequently sell after decades of tenant turnover leave properties in need of full renovations.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Beaver Hills</h3>
              <p className="text-sm text-brand-primary font-medium mb-2">$290K–$360K | Brick Colonials | Stable Middle-Class</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Beaver Hills offers New Haven's most conventionally suburban feel — brick Colonials, ranches, and Cape Cods on wider lots than the dense urban core. The neighborhood has historically served Black middle-class homeowners. Estate and divorce sales do occur here; the housing stock is generally in better condition than Fair Haven or Newhallville, making cash offers somewhat closer to retail.
              </p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding New Haven County — Towns We Buy In</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Town</th>
                  <th className="text-left p-3">Distance from New Haven</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">West Haven</td><td className="p-3">~3 miles west</td><td className="p-3 text-gray-500">Beach town; University of New Haven campus; coastal maintenance sellers</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hamden</td><td className="p-3">~5 miles north</td><td className="p-3 text-gray-500">Targeted Investment muni — 1.25% conveyance tax; Quinnipiac University</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">East Haven</td><td className="p-3">~5 miles east</td><td className="p-3 text-gray-500">Blue-collar suburb; affordable; active investor market</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Milford</td><td className="p-3">~10 miles west</td><td className="p-3 text-gray-500">Coastal suburb; Silver Sands Beach; waterfront estate sales</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Shelton</td><td className="p-3">~12 miles northwest</td><td className="p-3 text-gray-500">Manufacturing base; growing; affordable for CT</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Branford</td><td className="p-3">~8 miles east</td><td className="p-3 text-gray-500">Shoreline; seasonal homes; year-round cash close interest</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Derby / Ansonia</td><td className="p-3">~12 miles north</td><td className="p-3 text-gray-500">Lower Naugatuck Valley; former industrial; affordable; higher distress</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Naugatuck</td><td className="p-3">~18 miles north</td><td className="p-3 text-gray-500">Industrial borough; affordable; motivated sellers</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ready to Get a Cash Offer for Your New Haven Neighborhood Home?</h2>
          <p className="text-gray-700 mb-4">
            Whatever neighborhood you're in — Fair Haven triple-decker or East Rock Victorian, Newhallville frame home or Wooster Square brownstone — USA Home Buyers will evaluate your property and provide a written cash offer within 24 hours. No commitment, no pressure. We cover all closing costs including Connecticut's conveyance tax. Call 888-274-5006 or submit the form below. Hablamos español.
          </p>
        </section>

        <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
            { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
            { href: '/markets/new-haven-ct/foreclosure', label: 'Foreclosure Help' },
            { href: '/markets/new-haven-ct/probate', label: 'Probate Sale' },
            { href: '/sell-house-fast-connecticut', label: 'CT State Hub' },
            { href: '/markets/bridgeport-ct', label: 'Bridgeport CT' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
              {link.label}
            </Link>
          ))}
        </div>


      <VideoEmbed
        src="/videos/new-haven-ct/neighborhoods.mp4"
        title="New Haven CT Neighborhoods — We Buy Houses Everywhere"
        poster="/videos/new-haven-ct/neighborhoods-poster.jpg"
        subtitle="Fair Haven to East Rock to Westville — any neighborhood, any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Fair Haven, The Hill, East Rock, Westville — USA Home Buyers buys in every New Haven neighborhood. Triple-deckers, Victorians, Colonials, two-families — any condition, any situation. Cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
        <CashOfferForm variant="footer" headline="Get Your New Haven CT Cash Offer" sourcePage="/markets/new-haven-ct/neighborhoods" />
      </div>
    </>
  );
}
