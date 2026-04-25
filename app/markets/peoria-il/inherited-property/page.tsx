/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/peoria-il/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Peoria IL — Estate & Probate Cash Buyer',
  description:
    'Inherited a house in Peoria IL? We buy inherited and estate properties as-is. IL probate (755 ILCS 5), Peoria County Circuit Court. Written offer in 24 hours. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to go through probate before selling an inherited Peoria property?',
    answer: 'If the deceased owned the property in their name alone, formal probate is required before the estate can convey clear title. Illinois real property always requires formal probate under 755 ILCS 5 — the small estate affidavit (755 ILCS 5/25-1) only applies to personal property under $150,000, not real estate. Probate is filed at the Peoria County Circuit Court, Civil Division, 324 Main Street, Room G-04, Peoria, IL 61602, phone 309-672-6000. We can have a written offer ready before you file.',
  },
  {
    question: 'How long does Peoria County probate take?',
    answer: 'Under independent administration (755 ILCS 5/28-1), an uncontested Peoria County estate typically moves from petition to letters in 6-12 weeks, then a total of 6-9 months to complete. The rate-limiting step is the creditor notice publication period under 755 ILCS 5/18-3: creditors have 2.5 months to file claims after publication notice. Once letters are issued, the executor can sell real estate under independent administration without court approval on each transaction.',
  },
  {
    question: 'What if siblings disagree about selling the inherited Peoria house?',
    answer: 'All heirs with an ownership interest must agree on the sale. If co-heirs cannot reach agreement, a partition action can be filed in Peoria County Circuit Court (10th Judicial Circuit, 324 Main Street). Partition actions are time-consuming and expensive. More commonly, a written cash offer from a third party — a concrete number that each heir can evaluate independently — breaks the impasse. We provide written offers that heirs can review simultaneously.',
  },
  {
    question: 'Can I sell an inherited Peoria house in as-is condition?',
    answer: 'Yes — and most inherited Peoria properties require it. Peoria\'s pre-1940 housing stock percentage (24.3% per biggestuscities.com) is the highest of any major downstate Illinois market. Inherited homes in South Peoria, East Bluff, and the Manual area frequently have balloon-frame construction, deferred maintenance from decades of aging-owner occupancy, and original systems that conventional lenders will not finance. USA Home Buyers purchases as-is with no repairs, no cleanout required.',
  },
  {
    question: 'Do I need to disclose known problems with the inherited property?',
    answer: 'Yes. Under the Illinois Residential Real Property Disclosure Act (765 ILCS 77), sellers must disclose known material defects. If you inherited the property and have no knowledge of specific defects, you disclose what you know. When selling to USA Home Buyers, you disclose what you know, we inspect and assess the property ourselves, and the offer reflects the as-is condition. There are no post-closing surprise claims from us.',
  },
  {
    question: 'What is the small estate affidavit threshold in Illinois?',
    answer: 'The Illinois small estate affidavit under 755 ILCS 5/25-1 applies only to personal property with a threshold of $150,000 (raised by 2025 amendment). It does NOT apply to real estate under any circumstances. A Peoria home worth $80,000 — below the $150,000 threshold — still requires formal probate if it was held in the decedent\'s name alone. The small estate procedure is useful for clearing bank accounts and personal property, not for conveying real property title.',
  },
];

export default function PeoriaInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling an Inherited House in Peoria IL — Estate & Probate Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/peoria-il-hero-640.jpg 640w, /images/optimized/peoria-il-hero-828.jpg 828w, /images/optimized/peoria-il-hero-1080.jpg 1080w, /images/optimized/peoria-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/peoria-il-hero-1200.jpg"
            alt="Peoria IL inherited property — Sell Inherited House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in Peoria IL — Any Condition, Any Estate Status
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Inherited a Peoria IL property? According to Illinois law (755 ILCS 5), real property always requires formal probate — the $150K small-estate affidavit does not apply to real estate. Per the Peoria County Circuit Court (324 Main St., Room G-04, 309-672-6000), independent administration takes 6-9 months total. We buy as-is, any condition. Written offer in 24 hours. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy inherited Peoria homes as-is — Caterpillar-era estates, South Side bungalows, East Bluff two-stories. No repairs, no cleanout. We work with your probate timeline.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>

      <VideoEmbed
        src="/videos/peoria-il/inherited-property.mp4"
        title="Sell Inherited House in Peoria IL"
        poster="/videos/peoria-il/inherited-property-poster.jpg"
        subtitle="We work with Peoria County probate timelines — as-is, any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Inherit a property in Peoria or Peoria County? USA Home Buyers specializes in estate sales — we work with Illinois probate timelines through Peoria County Circuit Court. Buy as-is, any condition. Written cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer Now" subheadline="We buy inherited Peoria properties in any condition. Written offer in 24 hours." sourcePage="/markets/peoria-il/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Peoria Inherited Property Landscape</h2>
          <p className="text-gray-700 mb-4">
            Peoria's inherited property market is shaped by the city's distinctive economic and demographic history in ways that are unlike most other Illinois markets. The city's manufacturing heritage — decades of employment at Caterpillar, supporting suppliers, and related industries — created a generation of working-class homeowners who bought modest bungalows and two-stories in South Peoria, East Bluff, and the Manual area during the 1940s through 1970s. Many of those homes were paid off outright. Many sit in estates today.
          </p>
          <p className="text-gray-700 mb-4">
            According to the 2024 ACS Estimate, Peoria city's population is 112,169 — declining at approximately 1.2% per year as younger residents leave for employment elsewhere and the manufacturing generation ages. The consequence: heirs who left Peoria for jobs in Chicago, Indianapolis, or elsewhere now hold ownership interests in homes they may not have visited in years, sitting vacant in neighborhoods with active blight enforcement, accumulating property taxes, and requiring deferred maintenance that the estate cannot fund.
          </p>
          <p className="text-gray-700 mb-4">
            Per biggestuscities.com, 24.3% of all Peoria housing units were built before 1940 — the highest percentage among the Illinois markets USA Home Buyers serves. Pre-1940 construction means balloon-frame walls, knob-and-tube wiring, galvanized steel plumbing, and frequently asbestos in pipe insulation and floor tiles. These aren't cosmetic issues — they're structural characteristics that prevent conventional or FHA financing and reduce the retail buyer pool to investors who can pay cash.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers is exactly that buyer. We purchase Peoria inherited properties as-is — regardless of condition, regardless of deferred maintenance, regardless of what's been left behind. We work within your probate timeline, provide written offers before you've filed your first petition, and close when the court has issued letters of authority.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate Law and Peoria County Practice</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">The Governing Statute: 755 ILCS 5 (Illinois Probate Act)</h3>
          <p className="text-gray-700 mb-4">
            All Illinois probate proceedings are governed by Chapter 755 ILCS 5, the Illinois Probate Act. Under this statute, real property owned in the decedent's name alone cannot be transferred by the estate until formal probate is opened and letters of office are issued. There is no shortcut for real estate — the small estate affidavit procedure under 755 ILCS 5/25-1 (for estates under $150,000) applies exclusively to personal property and cannot be used to convey real property title.
          </p>
          <p className="text-gray-700 mb-4">
            Even a Peoria home worth $70,000 — below the $150,000 personal property threshold — requires formal probate if it was titled in the decedent's name alone. This is one of the most common misconceptions heirs carry into the process, and it has cost many families months of confusion when a title company returns a contract with a note that the seller lacks authority to convey.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Independent vs. Supervised Administration</h3>
          <p className="text-gray-700 mb-4">
            Illinois offers two administration paths under 755 ILCS 5. Independent administration (755 ILCS 5/28-1) is the preferred path for most Peoria estate sales: the executor or administrator can manage estate assets — including selling real property — without court approval on each individual transaction. The executor files an inventory, provides notice to creditors, and files an accounting at the close of administration, but does not need to seek court approval each time they sign a real estate contract.
          </p>
          <p className="text-gray-700 mb-4">
            Supervised administration requires court approval for each significant action, including property sales. It's used when heirs are contesting the estate, when the decedent's will mandates it, or when a creditor or beneficiary objects to independent administration. Supervised administration adds 3-6 months to the typical timeline but provides court oversight that can help resolve disputes among heirs.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Peoria County Probate Court — Contact and Process</h3>
          <p className="text-gray-700 mb-4">
            Peoria County probate proceedings are filed at the Peoria County Circuit Court, Civil Division, 324 Main Street, Room G-04, Peoria, IL 61602. Phone: 309-672-6000. Hours: Monday through Friday, 8:30 AM to 5:00 PM. The 10th Judicial Circuit handles all Peoria County probate matters.
          </p>
          <p className="text-gray-700 mb-4">
            According to the Peoria County Circuit Court's Civil Division page, the Division handles adoption, chancery, divorce, eminent domain, family, juvenile, law, law magistrate, mental health, misc. remedy, order of protection, probate, small claims, tax, and wills. Probate filings go through the Civil Division clerk at the same address.
          </p>
          <p className="text-gray-700 mb-4">
            Probate petition filing fees for Peoria County were unavailable at the time of this page's preparation due to a county website access issue — Atlas is confirming via (309) 672-6000. Typical downstate Illinois probate petition fees run $200–$400. The filing fee is a one-time cost relative to the administrative timeline.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Creditor Notice Publication — The Rate-Limiting Step</h3>
          <p className="text-gray-700 mb-4">
            Under 755 ILCS 5/18-3, the estate must publish notice to creditors in a newspaper of general circulation in Peoria County. Creditors then have 2.5 months from the publication date to file claims against the estate. This creditor notice period is the primary rate-limiting step in most Peoria County probate proceedings — the estate cannot distribute assets (including real estate sale proceeds) until after the creditor claim period closes and all valid claims are addressed.
          </p>
          <p className="text-gray-700 mb-4">
            Strategically, an executor can sign a real estate contract — and even close the sale — during the creditor notice period. The sale proceeds become estate assets held pending distribution. This means you can list the property (or accept a cash offer from USA Home Buyers) while the creditor notice period is running, effectively compressing the overall timeline.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Caterpillar Generation — Peoria's Dominant Inherited Property Profile</h2>
          <p className="text-gray-700 mb-4">
            The most common Peoria inherited property profile is what local real estate professionals call the "Caterpillar generation" estate: a working-class homeowner who bought in the 1950s–1970s when manufacturing employment was at its peak, lived in the same home for 40-50 years, paid it off entirely, and left it to heirs who are now geographically dispersed and professionally employed elsewhere.
          </p>
          <p className="text-gray-700 mb-4">
            These homes share common characteristics:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Original construction from the 1920s–1960s; frequently pre-1940 balloon-frame in South Peoria and East Bluff</li>
            <li>Deferred maintenance accumulated over 30-50 years of aging-owner occupancy — the owner kept it livable but stopped investing in major systems updates</li>
            <li>Original or outdated electrical (knob-and-tube or early panel upgrades), galvanized or early copper plumbing, older HVAC or no central air</li>
            <li>Personal property accumulated over decades — furniture, tools, paperwork, clothing — that the estate must clear</li>
            <li>Market value typically in the $50,000–$120,000 range depending on location within the city</li>
            <li>Multiple heirs with different financial needs and timelines</li>
          </ul>
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), Peoria's ZHVI is $115,649. A well-maintained Kellar Heights ranch from the 1960s might be worth $130,000–$150,000. A deferred-maintenance East Bluff bungalow from the 1930s might be worth $55,000–$80,000 in as-is condition. USA Home Buyers will give you a written offer for exactly what we'll pay — no range, no hedging.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Typical Peoria Probate Timeline — What to Expect</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Phase</th>
                  <th className="text-left p-3">Timeline</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">File probate petition + fee at Peoria County Circuit Court</td><td className="p-3">Day 1</td><td className="p-3">324 Main St., Room G-04, 309-672-6000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Notice to heirs / beneficiaries</td><td className="p-3">Days 1-30</td><td className="p-3">Certified mail or personal service required</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Court issues Letters of Office (executor authority)</td><td className="p-3">Weeks 2-6 (uncontested)</td><td className="p-3">Letters authorize executor to act on behalf of estate</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Publication notice to creditors</td><td className="p-3">Week 1-2 (published); 2.5-month claim period begins</td><td className="p-3">755 ILCS 5/18-3 — creditors have 2.5 months to file claims</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Inventory filed with court</td><td className="p-3">Within 60 days of letters</td><td className="p-3">Lists all estate assets including real property</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Real estate can be sold (independent administration)</td><td className="p-3">Once letters are issued</td><td className="p-3">Executor signs contract; sale proceeds become estate asset</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Creditor claim period closes</td><td className="p-3">~Month 4 from petition</td><td className="p-3">Valid claims are paid from estate assets</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Final accounting and distribution</td><td className="p-3">Months 6-9 (uncontested)</td><td className="p-3">Estate assets distributed to beneficiaries after all claims paid</td></tr>
                <tr className="bg-white font-medium"><td className="p-3">Total timeline (uncontested, independent)</td><td className="p-3 text-blue-700">6-9 months</td><td className="p-3">Contested or supervised: add 3-6 months</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Title Insurance and Transfer Tax on Inherited Peoria Properties</h2>
          <p className="text-gray-700 mb-4">
            Estate sales in Illinois require the same transfer tax compliance as any other sale. On an inherited Peoria property, the estate (as seller) must pay all three layers of the transfer tax: the Illinois state tax, the Peoria County tax, and the Peoria City municipal RETT. Per ATG (Attorneys' Title Guaranty Fund) and peoriagov.org, on a $139,000 sale (city median per Redfin, January 2026), the transfer tax stack totals approximately $556 — $139 state + $69.50 county + $347.50 city. When USA Home Buyers purchases an inherited Peoria property, we cover all three layers of the transfer tax.
          </p>
          <p className="text-gray-700 mb-4">
            Title insurance is standard on all Illinois real estate transactions, including estate sales. An estate sale requires a thorough title search to identify any liens that may have attached during the decedent's lifetime: unpaid property taxes, IRS tax liens, mechanics liens, judgment liens from creditors. The title company's job in a probate sale is to clear all these items from the proceeds at closing. USA Home Buyers works with experienced Peoria title companies who handle estate sales efficiently.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">We Can Act Before Probate Is Complete</h2>
          <p className="text-gray-700 mb-4">
            You don't need to wait until probate is finalized before contacting USA Home Buyers. We can provide a written cash offer the moment you call — before you've filed the petition, before letters have been issued, before the creditor claim period has run. The offer is valid and waiting when your executor authority is in place.
          </p>
          <p className="text-gray-700 mb-4">
            This is particularly valuable for heirs with multiple properties, out-of-state heirs managing a Peoria estate remotely, and estates where disagreement among heirs makes a concrete offer number useful for breaking the impasse. A written offer from USA Home Buyers gives every heir a specific number to evaluate — not a range, not a "we'd need to inspect first," but a number in writing.
          </p>
          <p className="text-gray-700 mb-4">
            Call 888-274-5006 today. We serve Peoria city, Peoria Heights, and all of Peoria County. Any condition, any estate status, no repairs required.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Peoria IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/probate', label: 'Probate Sale' },
              { href: '/markets/peoria-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/peoria-il/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/peoria-il/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Peoria IL Home?" sourcePage="/markets/peoria-il/inherited-property" />
      </div>
    </>
  );
}
