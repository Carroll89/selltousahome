/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { racineWILocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House with Code Violations Racine WI',
  description:
    'Open City of Racine building, housing, or health-code violations? We buy houses with code violations, orders to repair, and condemned properties. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a house in Racine WI with open code violations?',
    answer: 'Yes. Wisconsin does not have a state-level rule preventing the sale of property with open code violations, though the seller typically must disclose them. The City of Racine Department of City Development — Building Inspection Division tracks violations against the property address, and those violations transfer with the title until cured. We buy Racine properties with open violations — we factor the cost to cure into our offer, we handle the remediation after closing, and you walk away clean.',
  },
  {
    question: 'What triggers a code violation in Racine?',
    answer: 'The most common City of Racine residential code violations come from the International Property Maintenance Code (IPMC) adopted by reference in Chapter 106 of the Racine Municipal Code, combined with Wisconsin Uniform Dwelling Code (SPS 320-325) enforcement. Frequent citations: overgrown grass/weeds (Racine Municipal Code § 42-26), exterior paint/siding deterioration, missing/broken gutters and downspouts, sagging porches, broken windows, damaged roofing, and interior issues like broken plumbing, faulty electrical (common in Northside cream brick cottages with original knob-and-tube), missing smoke detectors, and inadequate egress. Racine\'s large pre-1940 housing stock makes lead paint notices under § 66.0801 and Wis. Stat. Ch. 254 another common citation category.',
  },
  {
    question: 'What\'s the enforcement process in Racine?',
    answer: 'The City of Racine Building Inspection Division issues a Notice of Violation with a compliance deadline — typically 30 days for exterior/cosmetic issues, longer for structural. If not cured, the city can issue a Raze Order under Wis. Stat. § 66.0413 (for structurally unsound buildings), record the violation against title, assess reinspection fees, file municipal court citations ($150-$1,000+ per violation under § 62.25), or in extreme cases bring an abatement action and perform the work itself and bill the cost to the property as a special charge. Open violations and unpaid municipal fines follow the property until cured and paid.',
  },
  {
    question: 'Do you buy condemned houses in Racine?',
    answer: 'Yes. We buy condemned and razed properties throughout Racine County, including properties under an active City of Racine Raze Order (Wis. Stat. § 66.0413). These properties are essentially unsellable on the MLS — conventional lenders will not finance them, FHA/VA certainly won\'t, and most retail buyers can\'t navigate the city\'s rehab compliance process. That\'s our specialty. Call us with the address and we can often have a written offer to you within a day.',
  },
  {
    question: 'Do I have to disclose Racine code violations to a buyer?',
    answer: 'Wisconsin\'s Real Estate Condition Report (RECR, Wis. Stat. § 709) requires residential sellers to disclose known material adverse facts, including pending code enforcement actions, violations, special assessments, and orders from any government authority. Code violations are material and must be disclosed on the RECR. When you sell to us, you disclose honestly, we factor it into our offer, and you are done.',
  },
  {
    question: 'What about unpaid water bills, taxes, or municipal fines in Racine?',
    answer: 'Unpaid water bills, delinquent property taxes, and unpaid municipal citation fines in the City of Racine are typically special charges against the property that must be paid at closing from the seller\'s proceeds. The Racine Water Utility and City Clerk coordinate with the title company to produce a closing statement showing all balances. We work with this regularly — it does not stop the sale, it just gets netted out of your proceeds.',
  },
];

export default function RacineCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        racineWILocalBusinessSchema,
        articleSchema('Sell a Racine WI House with Code Violations — As-Is, No Repairs', pageUrl, '2026-04-17'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/racine-mount-pleasant-wi-hero-640.jpg 640w, /images/optimized/racine-mount-pleasant-wi-hero-828.jpg 828w, /images/optimized/racine-mount-pleasant-wi-hero-1080.jpg 1080w, /images/optimized/racine-mount-pleasant-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/racine-mount-pleasant-wi-hero-1200.jpg"
            alt="Racine WI code-violation property — sell as-is for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/racine-mount-pleasant-wi" className="hover:text-white">Racine WI</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Racine WI House with Code Violations — As-Is, No Repairs
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases Racine houses with open City of Racine building, housing, and health-code violations, with Raze Orders under Wis. Stat. § 66.0413, and with unpaid municipal charges. We factor the cost to cure into our written offer and handle remediation after closing. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Open violations, Raze Orders, condemned properties — we buy them all. Written cash offer in 24 hours. Close in 7–14 days.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We handle the violations." sourcePage="/markets/racine-mount-pleasant-wi/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">City of Racine Code Enforcement — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            The City of Racine Department of City Development — Building Inspection Division enforces property maintenance standards through a combination of the International Property Maintenance Code (IPMC, adopted by reference in Chapter 106 of the Racine Municipal Code), the Wisconsin Uniform Dwelling Code (Wis. Admin. Code SPS 320-325), and local ordinances on nuisance property, chronic nuisance (Racine Municipal Code Ch. 90), and housing habitability. Racine\'s housing stock is older than most of Wisconsin — roughly 45% of the City of Racine\'s housing was built before 1939, per U.S. Census American Community Survey data — which naturally produces more enforcement activity than in a newer suburb.
          </p>
          <p className="text-gray-700 mb-4">
            Common violation categories we see on Racine properties:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Exterior maintenance:</strong> peeling paint (especially lead-paint surfaces flagged under Wis. Stat. Ch. 254), sagging porches on cream brick cottages, missing gutters, damaged siding, overgrown yards (Racine Municipal Code § 42-26 requires grass ≤ 8 inches)</li>
            <li><strong>Structural:</strong> failing roofs on 1890s-1920s Northside workers\' housing, rotten porch columns, compromised foundations</li>
            <li><strong>Electrical:</strong> original knob-and-tube wiring, under-sized panels, DIY additions — often flagged when a tenant complaint triggers a rental license inspection</li>
            <li><strong>Plumbing:</strong> galvanized supply lines, lead service lines scheduled for replacement under Racine\'s lead-service-line replacement program</li>
            <li><strong>Health / habitability:</strong> missing smoke and CO detectors, inadequate egress from sleeping rooms, pest infestations, lack of heat</li>
            <li><strong>Zoning:</strong> unpermitted conversions (1-family to 2-family, accessory dwellings), unpermitted decks/additions</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Enforcement Escalation Path</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Complaint or drive-by observation.</strong> A neighbor complaint, a tenant complaint, or an inspector\'s drive-by triggers a site visit.</li>
            <li><strong>Notice of Violation issued.</strong> Written notice to the owner at the address on record with the Racine County Register of Deeds — so if you\'ve moved, be sure your deed address is updated. Compliance deadline typically 30 days.</li>
            <li><strong>Reinspection and extension.</strong> One extension is common. After that, the city\'s patience thins.</li>
            <li><strong>Municipal court citation.</strong> Under Racine Municipal Code § 1-14, fines run $150-$1,000+ per violation per day of continued non-compliance.</li>
            <li><strong>Raze Order under Wis. Stat. § 66.0413.</strong> For structurally unsound buildings, the city can order the owner to raze within 30 days, or perform the razing itself and bill the cost back as a special charge on the tax bill.</li>
            <li><strong>Special charge / tax bill.</strong> Unpaid fines, abatement costs, and razing costs are added to the property tax bill as special charges under Wis. Stat. § 66.0627, and the city eventually forecloses for unpaid taxes like any other delinquent property.</li>
          </ol>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Racine Market Context for Code-Violation Sales</h2>
          <p className="text-gray-700 mb-4">
            Per Zillow ZHVI (February 2026), the Racine typical home value is $171,496, up 4.4% YoY. Per Redfin (March 2026), the Racine median sale price is $205,000 with a 35-day median time on market. Those numbers describe market-rate sales of homes without violations. A Racine property with open violations, a Raze Order, or a history of municipal court judgments typically transacts well below those levels because the retail buyer pool disappears — conventional and FHA lenders will not finance a property under a Notice of Violation in most cases, and retail cash buyers don\'t want to navigate Racine\'s rehab compliance process.
          </p>
          <p className="text-gray-700 mb-4">
            We\'ve closed Racine violation deals on cream brick cottages with raze orders, two-family Northside flats with multiple chronic-nuisance citations, and Southside Victorians with electrical, plumbing, and lead-paint notices stacked on the same address. Our underwriting accounts for the violation cure cost, and we close at a Racine title company once diligence is complete.
          </p>
          <p className="text-gray-700 mb-4">
            Transfer fee: Wisconsin realty transfer fee — $3.00 per $1,000 of consideration, paid by seller, under Wis. Stat. § 77.22. On a $120,000 Racine distressed-property sale: $360. No Racine County surcharge. Unpaid water bills, delinquent taxes, and municipal fines are netted out of seller proceeds at closing. Source: Wisconsin Department of Revenue (revenue.wi.gov); City of Racine Building Inspection, (262) 636-9161.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Racine WI Code Violations" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Racine WI</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/racine-mount-pleasant-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/racine-mount-pleasant-wi/foreclosure', label: 'Foreclosure' },
              { href: '/markets/racine-mount-pleasant-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/racine-mount-pleasant-wi/probate', label: 'Probate' },
              { href: '/markets/racine-mount-pleasant-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/racine-mount-pleasant-wi/fire-damage', label: 'Fire Damage' },
              { href: '/markets/racine-mount-pleasant-wi', label: '← Back to Racine' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Racine WI Code-Violation Property?" sourcePage="/markets/racine-mount-pleasant-wi/code-violations" />
      </div>
    </>
  );
}
