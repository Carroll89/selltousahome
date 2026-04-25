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

const pageUrl = `${SITE_URL}/markets/peoria-il/probate`;

export const metadata: Metadata = {
  title: 'Sell Probate House Peoria IL — Cash Buyer, Fast Close',
  description:
    'Selling a house in Peoria IL probate? We buy probate properties as-is. IL Probate Act (755 ILCS 5), Peoria County Circuit Court. Written offer in 24 hours. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a house in Peoria while probate is still open?',
    answer: 'Yes. Under independent administration (755 ILCS 5/28-1), the executor can sign a real estate contract and close a sale once letters of office are issued by the Peoria County Circuit Court. The sale proceeds become estate assets pending distribution. You do not need to wait until probate is fully closed before selling — you can close the real estate sale while the creditor claim period is running, as long as letters of office have been issued.',
  },
  {
    question: 'Where is Peoria County probate court?',
    answer: 'Peoria County probate is handled at the Peoria County Circuit Court, Civil Division, 324 Main Street, Room G-04, Peoria, IL 61602. Phone: 309-672-6000. Hours: Monday through Friday, 8:30 AM to 5:00 PM. The 10th Judicial Circuit handles all Peoria County probate matters. Ask for the Civil Division when you call.',
  },
  {
    question: 'Does Illinois small estate affidavit apply to a Peoria house?',
    answer: 'No. The Illinois small estate affidavit under 755 ILCS 5/25-1 applies only to personal property — bank accounts, vehicles, personal belongings — not real estate. The $150,000 threshold (raised by 2025 amendment) refers only to the personal property value. Even a Peoria home worth $60,000 requires formal probate if it was titled in the decedent\'s name alone. This is not negotiable — a title company will not insure a conveyance that bypasses the probate requirement for real property.',
  },
  {
    question: 'What if the Peoria estate has multiple heirs?',
    answer: 'All heirs with a beneficial interest must be notified of the estate proceeding (755 ILCS 5/6-10) and typically must consent to a sale under independent administration or receive their proportionate share at distribution. If heirs disagree on the sale, the executor under independent administration can proceed over objections in most cases, or the matter can be brought before the Peoria County Circuit Court for resolution. A partition action is also available. A concrete written cash offer from USA Home Buyers often breaks multi-heir impasses.',
  },
  {
    question: 'How long does it take to get the executor authority to sell in Peoria?',
    answer: 'In an uncontested Peoria County probate, letters of office are typically issued within 2-6 weeks of filing the petition. The petition is filed at the Peoria County Circuit Court Civil Division (324 Main St., Room G-04), along with the original will (if one exists), a death certificate, and the filing fee. USA Home Buyers can have your written offer ready before you receive letters — so the moment authority is issued, you can act immediately.',
  },
  {
    question: 'What is the creditor notice period in Illinois probate?',
    answer: 'Under 755 ILCS 5/18-3, the executor must publish notice to creditors in a newspaper of general circulation in Peoria County. Creditors have 2.5 months from the publication date to file claims against the estate. This period is the primary time limiter in most uncontested probate proceedings. Real estate can be sold during this period — the sale proceeds are held as estate assets until the creditor claim period closes and all valid claims are paid.',
  },
];

export default function PeoriaProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Probate Property in Peoria IL — Illinois Probate Act Guide', pageUrl, '2026-04-18'),
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
            alt="Peoria IL probate property — Sell Probate House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › Probate Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Probate Property in Peoria IL
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
Peoria IL probate sale? According to 755 ILCS 5, real property always requires formal probate. Per the Peoria County Circuit Court (324 Main St., Room G-04, 309-672-6000), independent administration allows sale once letters are issued. 2.5-month creditor notice period under 755 ILCS 5/18-3. We close when you have authority. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy Peoria probate properties as-is — any condition, any estate status, any number of heirs.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>

      <VideoEmbed
        src="/videos/peoria-il/probate.mp4"
        title="Selling Probate Property in Peoria IL"
        poster="/videos/peoria-il/probate-poster.jpg"
        subtitle="Working with personal representatives and Peoria County Circuit Court"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Peoria property in Illinois probate? USA Home Buyers works with personal representatives through Peoria County Circuit Court. We buy as-is once the court grants authority. Cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer Now" subheadline="We work with Peoria County Circuit Court probate timelines. Written offer in 24 hours." sourcePage="/markets/peoria-il/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate Law — The Foundation</h2>
          <p className="text-gray-700 mb-4">
            Illinois probate is governed by Chapter 755 ILCS 5, the Illinois Probate Act. The statute is comprehensive and mandatory: any real property owned in a decedent's name alone cannot be transferred by the estate until formal probate proceedings are opened in the appropriate circuit court and letters of office are issued to an executor or administrator.
          </p>
          <p className="text-gray-700 mb-4">
            This requirement applies regardless of the property's value. According to 755 ILCS 5, the small estate affidavit procedure (755 ILCS 5/25-1) — which allows simpler transfer of assets up to $150,000 — expressly applies only to personal property. Real property is categorically excluded. A Peoria house worth $55,000 requires the same formal probate process as one worth $500,000. Title companies will not insure any conveyance that attempts to bypass this requirement.
          </p>
          <p className="text-gray-700 mb-4">
            The distinction matters because many heirs arrive with the incorrect assumption that a small estate — one below the $150,000 threshold — can be transferred without probate. It cannot, if the asset is real property. The first step for any heir intending to sell a Peoria home from an estate is to open a probate proceeding at the Peoria County Circuit Court.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria County Probate Court — Location and Process</h2>
          <p className="text-gray-700 mb-4">
            Peoria County probate proceedings are filed at the Peoria County Circuit Court, Civil Division, 10th Judicial Circuit:
          </p>
          <div className="bg-brand-light rounded-xl p-4 mb-6">
            <p className="font-semibold text-brand-dark mb-1">Peoria County Circuit Court — Civil Division (Probate)</p>
            <p className="text-gray-700">324 Main Street, Room G-04, Peoria, IL 61602</p>
            <p className="text-gray-700">Phone: (309) 672-6000</p>
            <p className="text-gray-700">Hours: Monday–Friday, 8:30 AM – 5:00 PM</p>
            <p className="text-gray-700 text-sm mt-2">Source: peoriacounty.gov/738/CIVIL-DIVISION (10th Judicial Circuit)</p>
          </div>
          <p className="text-gray-700 mb-4">
            The Civil Division handles all probate matters for Peoria County. According to the Peoria County Circuit Court's Civil Division page, the Division processes adoptions, chancery, divorce, eminent domain, family, juvenile, law, mental health, miscellaneous remedy, orders of protection, probate, small claims, tax, and wills. Probate filings go to the Civil Division clerk at Room G-04.
          </p>
          <p className="text-gray-700 mb-4">
            When filing a probate petition, the petitioner must provide the death certificate, the original will (if one exists and can be located), a list of known heirs, and the filing fee. Probate petition filing fees for Peoria County were unavailable at the time of this page's preparation due to a county website access issue — contact the court directly at (309) 672-6000 to confirm current fees. Typical downstate Illinois probate petition fees run $200–$400.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Independent vs. Supervised Administration in Peoria County</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Independent Administration (755 ILCS 5/28-1) — The Preferred Path</h3>
          <p className="text-gray-700 mb-4">
            Independent administration is the standard path for uncontested Peoria County probate proceedings. Under 755 ILCS 5/28-1, the executor or administrator can manage estate assets — including selling real property — without seeking court approval on each individual transaction. The executor files an inventory within 60 days of receiving letters, publishes creditor notice, pays valid claims, and files a final accounting at the close of administration.
          </p>
          <p className="text-gray-700 mb-4">
            For the real estate sale, independent administration means the executor can sign a purchase contract with USA Home Buyers, proceed to closing, and hold the net proceeds as estate assets — all without returning to the Peoria County Circuit Court for approval of the specific transaction. This significantly compresses the real estate sale timeline within the overall probate proceeding.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Supervised Administration — When It Applies</h3>
          <p className="text-gray-700 mb-4">
            Supervised administration requires court approval for each significant action, including real estate sales. It's used when: (1) the decedent's will mandates supervised administration; (2) an heir or creditor files an objection and the court orders supervision; (3) the estate involves a minor beneficiary; or (4) the estate involves contested claims or suspected mismanagement.
          </p>
          <p className="text-gray-700 mb-4">
            Under supervised administration, the executor must petition the Peoria County Circuit Court for authorization to sell the real property, describing the proposed sale terms and the buyer. The court may hold a hearing before approving the sale. This process adds 4-8 weeks to the real estate sale timeline but provides judicial oversight of the transaction.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers has worked with both independent and supervised estate sales in Illinois. We accommodate whichever administration path your Peoria County proceeding requires.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Creditor Notice Period — Rate-Limiting Step</h2>
          <p className="text-gray-700 mb-4">
            Under 755 ILCS 5/18-3, the executor must publish notice to creditors in a newspaper of general circulation in Peoria County. From the date of publication, creditors have 2.5 months to file claims against the estate. This 2.5-month window is the primary rate-limiting step in most uncontested Peoria County probate proceedings — the estate cannot make final distributions to heirs until after the claim period closes and all valid claims are addressed.
          </p>
          <p className="text-gray-700 mb-4">
            Critically, the real estate can be sold during the creditor notice period. The executor can sign a contract and close the sale with USA Home Buyers while the 2.5-month creditor window is still running. The sale proceeds become estate assets held in the estate account. At the close of the creditor period, the executor pays valid claims from estate assets and distributes the remainder to beneficiaries.
          </p>
          <p className="text-gray-700 mb-4">
            This parallel processing — selling the real estate while the creditor notice period runs — is one of the key efficiency opportunities in Peoria County probate. By closing the real estate sale within weeks of letters being issued, rather than waiting until probate closes, the estate can be administered significantly faster.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria Probate Properties — Common Characteristics</h2>
          <p className="text-gray-700 mb-4">
            Peoria County probate properties reflect the city's Rustbelt-transition profile. The most common scenarios USA Home Buyers encounters:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Caterpillar-Era Manufacturing Worker Estates</h3>
          <p className="text-gray-700 mb-4">
            The classic Peoria probate property: a home bought in the 1950s–1970s during peak Caterpillar employment, paid off in full, left to multiple adult children who are now geographically dispersed. According to Zillow (February 2026), the Peoria ZHVI is $115,649 — but many of these estates involve homes in South Peoria and East Bluff worth $50,000–$90,000 in as-is condition after 30-50 years of aging-owner maintenance.
          </p>
          <p className="text-gray-700 mb-4">
            The heirs typically include 2-5 adult children spread across Illinois, Indiana, and other states — people who left Peoria as manufacturing employment contracted. None wants to inherit the property, maintain it, or pay property taxes on it. The consensus is to sell, but coordinating multiple out-of-state heirs adds friction. A written cash offer from USA Home Buyers — a single specific number — often resolves the coordination problem faster than any alternative.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">South Side and East Bluff Probate Stock</h3>
          <p className="text-gray-700 mb-4">
            Per biggestuscities.com, 24.3% of Peoria's housing units were built before 1940. The South Side, East Bluff, and Manual area have the densest concentration of this pre-war stock. These homes — balloon-frame bungalows and two-stories from the 1910s–1930s — require updates to electrical, plumbing, and structural systems that estates cannot typically fund. They don't qualify for conventional or FHA financing. They need a cash buyer.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Richwoods and Kellar Heights Estates (Higher Value)</h3>
          <p className="text-gray-700 mb-4">
            Not all Peoria probate properties are distressed. In Richwoods (North Peoria) and Kellar Heights, estates involving 1960s–1980s ranch homes in good condition represent a different profile — homes worth $140,000–$200,000 that could list conventionally but where the executor prefers a fast, certain cash close over a 45-60 day financed sale process. USA Home Buyers serves this segment as well.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Typical Peoria County Probate Timeline</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Step</th>
                  <th className="text-left p-3">Timeline</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">File petition + will at Peoria County Circuit Court</td><td className="p-3">Day 1</td><td className="p-3">Room G-04, 324 Main St., 309-672-6000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Court issues Letters of Office</td><td className="p-3">Weeks 2-6 (uncontested)</td><td className="p-3">Executor/administrator authority begins here</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Publish creditor notice</td><td className="p-3">Immediately after letters</td><td className="p-3">755 ILCS 5/18-3; 2.5-month claim period begins</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">File inventory with court</td><td className="p-3">Within 60 days of letters</td><td className="p-3">Lists all estate assets and valuations</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Real estate sale can close</td><td className="p-3">Once letters are issued (same period as creditor notice)</td><td className="p-3">Proceeds held as estate assets; no need to wait for probate close</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Creditor claim period closes</td><td className="p-3">~Month 4 from petition filing</td><td className="p-3">Valid claims paid from estate assets</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Final accounting + distribution</td><td className="p-3">Months 6-9 (uncontested)</td><td className="p-3">Heirs receive their shares from estate account</td></tr>
                <tr className="bg-gray-50 font-medium"><td className="p-3">Total (uncontested, independent admin)</td><td className="p-3 text-blue-700">6-9 months</td><td className="p-3">Contested cases: 9-18 months or longer</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Getting an Offer Before You File</h2>
          <p className="text-gray-700 mb-4">
            USA Home Buyers can issue a written cash offer for a Peoria probate property before you file the petition, before letters are issued, and before any heir has signed anything. The offer is in writing and waiting when your legal authority is in place. This approach is particularly valuable when:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Multiple heirs need to agree on selling and a concrete number helps reach consensus</li>
            <li>The executor is managing the estate from out of state and wants to have the sale lined up before traveling to Peoria to sign papers</li>
            <li>Property taxes, utilities, and maintenance costs are accumulating and the estate wants to move quickly once authority is granted</li>
            <li>The property is in a neighborhood with active blight enforcement and the estate wants to avoid code violation citations</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Call 888-274-5006 today. We serve all of Peoria city and Peoria County, any property condition, any probate status.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate Sale in Peoria IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/inherited-property', label: 'Inherited Property' },
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

        <CashOfferForm variant="footer" headline="Ready to Sell Your Peoria IL Probate Property?" sourcePage="/markets/peoria-il/probate" />
      </div>
    </>
  );
}
