/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/new-haven-ct/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House New Haven CT — Fast Cash',
  description:
    'Inherited a house in New Haven CT? We buy estate properties through New Haven Probate Court — as-is, cash offer in 24 hours. CT probate explained.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does Connecticut probate work for inherited property in New Haven?',
    answer: 'Connecticut uses a unique Probate Court system — distinct from Superior Court, Surrogate\'s Court (NY), or Circuit Court (IL). New Haven Probate Court is at 200 Orange Street, 1st Floor, New Haven CT 06504, phone (203) 946-4880 (ctprobate.gov). The executor or administrator must file a petition, inventory and appraise assets, pay debts, and obtain court approval before distributing real property. Real estate cannot be sold until the Probate Court authorizes the sale or issues a Certificate of Devise or Distribution filed with the New Haven City Clerk. Typical timeline: 6–12 months for a testate estate (with will); 6–18 months for intestate (no will).',
  },
  {
    question: 'Can I sell an inherited New Haven property while it\'s still in probate?',
    answer: 'Yes — but the sale requires Probate Court authorization. The executor or administrator files a motion to sell real property; the court can approve the sale before the estate is fully closed. USA Home Buyers has worked with many New Haven Probate Court cases. We can close after the court approves the sale, which typically adds 30–60 days to the timeline. Call 888-440-5250 to discuss your specific stage.',
  },
  {
    question: 'What is CT\'s small estate threshold?',
    answer: 'Connecticut allows simplified procedures for estates with no real property and personal property below $40,000 (CT Gen Stat §45a-273). If the estate includes real estate — a house, a condo, land — the simplified small-estate procedure does not apply. The property must go through standard Probate Court administration regardless of total estate value.',
  },
  {
    question: 'Do I need to repair an inherited house before selling?',
    answer: 'No. Inherited New Haven homes often carry decades of deferred maintenance — lead paint common in pre-1978 construction, aging plumbing, old electrical systems, deteriorating roofs. We buy inherited properties as-is. No cleaning, no repairs, no staging. Take what you want, leave the rest.',
  },
  {
    question: '¿Compran propiedades heredadas en New Haven? / Do you buy inherited properties in Spanish-speaking households?',
    answer: 'Sí, hablamos español. Trabajamos con familias hispanas en Fair Haven y The Hill que heredaron propiedades de sus abuelos y padres. Podemos explicar el proceso de probate del Tribunal de Sucesiones en español. Llámenos al 888-440-5250.',
  },
];

export default function NewHavenInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell an Inherited House in New Haven CT — Cash Offer, Any Condition', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/new-haven-ct-hero-640.jpg 640w, /images/optimized/new-haven-ct-hero-828.jpg 828w, /images/optimized/new-haven-ct-hero-1080.jpg 1080w, /images/optimized/new-haven-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/new-haven-ct-hero-1200.jpg"
            alt="New Haven CT Victorian homes — Sell Inherited Property Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/new-haven-ct" className="hover:text-white">New Haven CT</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in New Haven CT — Cash Offer, Any Condition
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Inherited a New Haven CT home? Connecticut Probate Court requires court authorization before selling — New Haven Probate Court is at 200 Orange St, (203) 946-4880. USA Home Buyers purchases inherited properties as-is, works within the CT Probate Court process, and closes after court authorization. Written offer in 24 hours. Call 888-440-5250. Hablamos español.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              We buy inherited New Haven homes through the CT Probate process — as-is, no repairs, no cleanout.
            </p>
            <p className="text-blue-100 text-sm mb-4">Hablamos español — servimos a familias hispanas en Fair Haven y The Hill. Call 888-440-5250.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We work within the CT Probate Court process." sourcePage="/markets/new-haven-ct/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Connecticut Probate Court — New Haven's Unique System</h2>
          <p className="text-gray-700 mb-4">
            Connecticut operates a Probate Court system that differs from every other state in the country. This isn't Superior Court, it's not the Surrogate's Court you'd encounter in New York, and it's not a Circuit Court like Illinois. Connecticut has 54 Probate Districts statewide — each a separate court with its own judge, its own docket, and its own procedures. New Haven has its own Probate District.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>New Haven Probate Court</strong><br />
            200 Orange Street, 1st Floor<br />
            P.O. Box 905, New Haven, CT 06504-0905<br />
            Phone: (203) 946-4880<br />
            Website: ctprobate.gov/courts/new-haven-probate-court
          </p>
          <p className="text-gray-700 mb-4">
            The New Haven Probate Court has jurisdiction over decedents' estates (both testate and intestate), trusts, conservatorships, guardianships, and adoptions for the City of New Haven. If a New Haven homeowner dies with real property in the city, that property must pass through the New Haven Probate District before a new deed can be recorded — regardless of whether there's a will, regardless of whether the estate is large or small (when real property is involved).
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">CT Probate Process for New Haven Real Property</h2>
          <p className="text-gray-700 mb-4">
            The process for selling an inherited New Haven home runs through distinct phases. Understanding each phase helps beneficiaries and executors make realistic decisions about timing and options.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Phase</th>
                  <th className="text-left p-3">What Happens</th>
                  <th className="text-left p-3">Typical Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Filing for Probate</td><td className="p-3">Executor/administrator files petition at New Haven Probate Court; Court accepts the will (testate) or appoints administrator (intestate)</td><td className="p-3 text-gray-500">2–4 weeks</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Inventory &amp; Appraisal</td><td className="p-3">All assets including real property are inventoried and appraised; filed with court</td><td className="p-3 text-gray-500">4–8 weeks</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Creditor Notice Period</td><td className="p-3">Notice published to creditors; creditors have limited time to file claims</td><td className="p-3 text-gray-500">6–8 weeks</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Motion to Sell Real Property</td><td className="p-3">Executor files motion to sell the real estate; court schedules hearing; court approves sale</td><td className="p-3 text-gray-500">3–6 weeks after motion filed</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Closing</td><td className="p-3">Sale closes; deed recorded at New Haven City Clerk with Certificate of Devise/Distribution</td><td className="p-3 text-gray-500">1–2 weeks after court approval</td></tr>
                <tr className="bg-gray-50 font-medium"><td className="p-3">Total (testate)</td><td className="p-3">—</td><td className="p-3">6–12 months typical</td></tr>
                <tr className="bg-white font-medium"><td className="p-3">Total (intestate)</td><td className="p-3">—</td><td className="p-3">6–18 months typical</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">CT Small Estate Threshold — When It Applies (and When It Doesn't)</h2>
          <p className="text-gray-700 mb-4">
            According to CT Gen Stat §45a-273 (Connecticut General Assembly), Connecticut allows a simplified procedure for small estates — but this only applies to estates with personal property below $40,000 and <strong>no real property</strong>. If the decedent owned a house, condo, or any real estate in Connecticut, the simplified small-estate procedure is unavailable. The property must go through full Probate Court administration.
          </p>
          <p className="text-gray-700 mb-4">
            This surprises many families who assume a relatively modest estate — say, a Fair Haven triple-decker worth $220,000 — might qualify for streamlined administration. It doesn't. Any real estate triggers full probate, regardless of total value. The New Haven Probate Court filing fees vary by estate size (published at ctprobate.gov).
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Why New Haven Inherited Homes Often Need Cash Buyers</h2>
          <p className="text-gray-700 mb-4">
            New Haven's pre-war housing stock — triple-deckers in Fair Haven, brick row homes in Dixwell, Victorian frames in East Rock and Westville — tends to accumulate deferred maintenance over decades of family ownership. The generation that bought these homes in the 1950s and 1960s maintained them within their means; the homes now carry their age. When an estate opens in Fair Haven for a triple-decker that hasn't had a major systems overhaul in 30 years, beneficiaries face a choice: invest $40,000–$80,000 in renovations to list on the MLS, manage a rental property from wherever they live, or sell as-is to a cash buyer.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers is designed for exactly that situation. We buy inherited New Haven properties in any condition — no cleanup, no repair requirement. We work within the New Haven Probate Court process, coordinate with the estate's attorney, and close after the court authorizes the sale. The executor gets a clean exit; the estate gets cash without the carrying cost of a renovation or an extended listing period.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Fair Haven and The Hill — Multigenerational Hispanic Estate Sales</h2>
          <p className="text-gray-700 mb-4">
            Fair Haven and The Hill have New Haven's highest concentrations of Puerto Rican and Ecuadorian homeowners — families who arrived in New Haven beginning in the 1950s and 1960s to work in manufacturing and service industries, bought modest triple-deckers and row homes, and built generational wealth in those properties. As the founding generation passes, their homes enter probate.
          </p>
          <p className="text-gray-700 mb-4">
            These estate situations often involve multiple beneficiaries scattered across Connecticut, New York, and Puerto Rico. Coordination across time zones, language barriers in dealing with the Probate Court, and properties in need of significant renovation after decades of light maintenance — these are the characteristics of Fair Haven and Hill estate sales. USA Home Buyers handles the entire process in English or Spanish, coordinates with the estate attorney, and closes on the timeline the Probate Court sets. Hablamos español — call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Recording the Inherited Property — New Haven City Clerk</h2>
          <p className="text-gray-700 mb-4">
            Connecticut records land records at the city/town clerk level — not at a county recorder, because Connecticut abolished county government functions in 1960. New Haven deeds, mortgages, and estate distributions are recorded at the <strong>New Haven City Clerk</strong>, 165 Church Street, New Haven CT 06510, phone (203) 946-8347. The executor files a Certificate of Devise or Distribution (essentially a probate deed) with the City Clerk after the Probate Court has authorized the transfer. Recording fees: $53 for the first page + $5 per additional page (per CT Gen Stat § 7-34a).
          </p>
          <p className="text-gray-700 mb-4">
            For a sale to a cash buyer, According to CT General Statutes Chapter 223 (cga.ct.gov), the conveyance tax (1.25% for New Haven as a Targeted Investment municipality) is paid to the City Clerk at the time the deed is recorded. The OP-236 conveyance tax return form accompanies every deed recording. USA Home Buyers covers all closing costs including this tax.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">What the Cash Offer Process Looks Like on an Inherited New Haven Property</h2>
          <p className="text-gray-700 mb-4">
            When a family contacts us about an inherited New Haven home, the conversation starts with the property's current state and probate status. We assess the property — either through a brief walk-through or photos and description — and provide a written cash offer within 24 hours. That offer accounts for the property's condition and location, not its retail potential after renovation.
          </p>
          <p className="text-gray-700 mb-4">
            The offer is contingent on Probate Court authorization to sell (which the executor obtains). Once the court approves, we close quickly. The estate receives the net proceeds; the beneficiaries receive their distributions per the will or CT intestacy statute. No repairs, no staging, no MLS listing, no waiting for a retail buyer to get mortgage approval.
          </p>
          <p className="text-gray-700 mb-4">
            We've worked with New Haven Probate Court cases in Fair Haven, Westville, East Rock, The Hill, Newhallville, Wooster Square, and throughout New Haven County. Call 888-440-5250 to start the conversation.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Taxes on an Inherited New Haven Home — Step-Up in Basis</h2>
          <p className="text-gray-700 mb-4">
            When you inherit a New Haven home, federal tax law provides a significant benefit: the step-up in basis. Your cost basis in the property is "stepped up" to the fair market value at the date of the decedent's death, not the original purchase price. If your grandmother bought her Fair Haven triple-decker in 1962 for $18,000, and its fair market value at her death is $225,000, your basis is $225,000 — not $18,000. Selling at $225,000 produces no capital gains tax for you.
          </p>
          <p className="text-gray-700 mb-4">
            This step-up benefit makes a timely sale advantageous. As long as you sell within a reasonable period after the date of death, any appreciation from the estate's date of death to your sale date is typically modest — and may qualify for favorable capital gains rates regardless. Discuss the specific tax implications with a CPA or tax attorney familiar with CT estate matters before closing. This is one reason families who inherit New Haven properties should not wait years before deciding to sell.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven County Market Value for Inherited Properties — Setting Realistic Expectations</h2>
          <p className="text-gray-700 mb-4">
            Beneficiaries who inherit New Haven properties sometimes have expectations anchored to Zillow estimates, neighbor opinions, or what the property might have sold for in 2021's market peak. The 2026 market reality is different. New Haven's Zillow ZHVI is $323,843 — representing the typical home across all neighborhoods. But in The Hill, Newhallville, and lower Fair Haven — where many inherited properties are concentrated — market values for distressed properties with deferred maintenance run substantially lower than the citywide average.
          </p>
          <p className="text-gray-700 mb-4">
            A Fair Haven triple-decker in distressed condition might appraise at $180,000–$220,000 in its as-is state. After the cost of renovation needed to list on the MLS — lead abatement alone can run $10,000–$25,000; add roof, electrical, and plumbing — the renovation investment may not be fully recovered in the sale price. A cash offer at 70–75% of the as-is value ($126,000–$165,000) compared against the net proceeds after renovation and MLS listing costs is often a close comparison — or the cash sale wins after accounting for the time value of carrying the property through a 12-month renovation and listing process.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers provides a written cash offer with full transparency about our assessment. You can compare it against a retail listing estimate from a local real estate agent. Many families find the comparison much closer than they expected — and the cash sale's speed and certainty tips the decision.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in New Haven CT" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
              { href: '/markets/new-haven-ct/probate', label: 'Probate Sale' },
              { href: '/markets/new-haven-ct/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/new-haven-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/new-haven-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/sell-house-fast-connecticut', label: 'CT State Hub' },
              { href: '/markets/bridgeport-ct', label: 'Bridgeport CT' },
              { href: '/guides/sell-house-fast-new-haven-ct-2026', label: 'New Haven Seller Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited New Haven CT Property?" sourcePage="/markets/new-haven-ct/inherited-property" />
      </div>
    </>
  );
}
