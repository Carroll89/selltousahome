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

const pageUrl = `${SITE_URL}/markets/springfield-il/probate`;

export const metadata: Metadata = {
  title: 'Sell Probate House Springfield IL',
  description:
    'Selling a probate property in Springfield IL? We work with Sangamon County Circuit Court Probate Division timelines. Written offer in 24 hours. 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What court handles probate in Sangamon County Illinois?',
    answer: 'Sangamon County probate is handled by the Sangamon County Circuit Court, Probate Division — 7th Judicial Circuit. Address: 200 South 9th Street, 7th Floor, Springfield IL 62701. Phone: (217) 753-6674. Hours: Monday-Friday 8:30 AM – 4:30 PM. This court handles all estates for decedents who owned real property in Sangamon County — whether in Springfield, Chatham, Rochester, Sherman, or any other Sangamon County community. Illinois probate is governed by the Probate Act of 1975 (755 ILCS 5/).',
  },
  {
    question: 'How long does probate take in Illinois when there is real estate?',
    answer: 'With independent administration (755 ILCS 5/28-1), an uncontested Illinois estate typically closes in 6-9 months from filing. Under supervised administration, uncontested estates run 12-18 months. Contested estates with disputed assets or disputed will validity can extend to 24-36+ months. The probate timeline itself doesn\'t have to delay the property sale — under independent administration, the executor can list and sell real estate as soon as Letters of Office are issued, which typically happens at or shortly after the initial court hearing.',
  },
  {
    question: 'Can I sell a Springfield probate house before the estate is closed?',
    answer: 'Yes — this is standard practice in Illinois. Under independent administration, the executor can sell estate real property after receiving Letters of Office, without waiting for the estate to close. The property sale proceeds are held as part of the estate until the final accounting and distribution. Creditors are paid from estate assets before distribution to heirs — Illinois law requires the executor to publish a "Notice to Creditors" and allow a claims period before final distribution, but the property itself can be sold long before that process concludes.',
  },
  {
    question: 'What happens if the will is contested in Sangamon County?',
    answer: 'Will contests are litigated in the Sangamon County Circuit Court. A contestant has 6 months from the admission of the will to probate to file an action contesting its validity (755 ILCS 5/8-1). During an active will contest, selling real property typically requires court authorization, since the ultimate distribution of proceeds is disputed. We\'ve worked through contested estate transactions in situations where both the contesting party and the named executor have agreed to accept a cash sale, with proceeds held in escrow pending the outcome of the contest.',
  },
  {
    question: 'What is independent administration and how does it help Springfield sellers?',
    answer: 'Independent administration under 755 ILCS 5/28-1 et seq. gives the executor or administrator broad authority to manage and sell estate assets without court approval for each transaction. This is the primary advantage of independent administration for a seller: the executor can accept an offer and close on estate real property on the same timeline as a regular sale, once Letters of Office are issued. No separate court petition is required for each sale. Under supervised administration, the executor would need to petition the court before accepting any offer, which adds 4-8+ weeks to the process.',
  },
];

export default function SpringfieldProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Probate Property in Springfield IL — Sangamon County Circuit Court Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/springfield-il-hero-640.jpg 640w, /images/optimized/springfield-il-hero-828.jpg 828w, /images/optimized/springfield-il-hero-1080.jpg 1080w, /images/optimized/springfield-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/springfield-il-hero-1200.jpg"
            alt="Springfield IL probate property sale"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/springfield-il" className="hover:text-white">Springfield IL</Link> › Probate Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Springfield IL Probate Property — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases probate properties in Springfield through Sangamon County Circuit Court Probate Division. Written cash offer in 24 hours, close after Letters of Office are issued. Under independent administration, the executor can sell without separate court approval. Real property always requires formal probate in IL — the small estate affidavit covers personal property only. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We work with Sangamon County Circuit Court Probate Division cases — formal administration, independent administration, contested and uncontested estates.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/springfield-il/probate.mp4"
        title="Selling Probate Property in Springfield IL"
        poster="/videos/springfield-il/probate-poster.jpg"
        subtitle="Working with executors and Sangamon County Circuit Court"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Is a Springfield property tied up in probate? We can help. Once the court grants authority, USA Home Buyers can close fast. We work with estate attorneys, administrators, and heirs throughout the Springfield area. No repairs. No showings. No waiting for retail buyers. We buy as-is, for cash. Call us at 888-440-5250.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="We work around Sangamon County Circuit Court timelines. Written offer in 24 hours." sourcePage="/markets/springfield-il/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Sangamon County Circuit Court Probate Division — Essential Facts</h2>
          <p className="text-gray-700 mb-4">
            Illinois uses Circuit Courts for probate — there's no separate "Probate Court" as a standalone judicial body, and no "Register of Wills" or "Surrogate's Court" as in Pennsylvania or New York. The Sangamon County Circuit Court, Probate Division handles all estates for decedents who owned real property in Sangamon County. The court sits at 200 South 9th Street, 7th Floor, Springfield IL 62701, phone (217) 753-6674, hours Monday through Friday 8:30 AM to 4:30 PM.
          </p>
          <p className="text-gray-700 mb-4">
            The 7th Judicial Circuit covers six counties: Greene, Jersey, Macoupin, Morgan, Sangamon, and Scott. Springfield is the circuit headquarters. All Sangamon County probate matters — including real estate sales requiring court authority — are handled at this address.
          </p>
          <p className="text-gray-700 mb-4">
            Illinois probate is governed by the Probate Act of 1975 (755 ILCS 5/), which covers everything from filing procedures and appointment of executors to the authority to sell real property, the claims period for creditors, and the final distribution to heirs. Understanding the key provisions of this statute is essential to understanding the timeline and mechanics of selling an estate property in Springfield.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Two Probate Paths in Illinois — Independent vs. Supervised</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">Independent Administration (755 ILCS 5/28-1)</h3>
              <p className="text-sm text-green-900 mb-3">The faster, more flexible path for uncontested estates.</p>
              <ul className="text-sm text-green-900 space-y-2">
                <li>✓ Executor has authority to sell real property without court approval per transaction</li>
                <li>✓ Typical timeline: 6-9 months (uncontested)</li>
                <li>✓ Court supervision only at final accounting</li>
                <li>✓ Can sell estate property as soon as Letters of Office are issued</li>
                <li>✓ Significantly less expensive in legal fees than supervised administration</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-800 mb-2">Supervised Administration</h3>
              <p className="text-sm text-amber-900 mb-3">Required for contested estates or when ordered by court.</p>
              <ul className="text-sm text-amber-900 space-y-2">
                <li>⚠ Each real property sale requires a separate court petition</li>
                <li>⚠ Typical timeline: 12-18 months (uncontested)</li>
                <li>⚠ Court reviews sale terms and may require notice to heirs</li>
                <li>⚠ Additional legal costs for each court approval</li>
                <li>⚠ 4-8 additional weeks per property sale transaction</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            For most uncontested Sangamon County estates, petitioning for independent administration at the time the estate is opened is the right choice. An experienced Illinois probate attorney will typically recommend this path unless there's a specific reason for supervised administration (a disputed will, minor heirs requiring court protection, creditor claims that need court adjudication).
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Real Estate During Probate — Two Legal Paths</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Path 1: Letters of Office (Independent Administration)</h3>
          <p className="text-gray-700 mb-4">
            Under independent administration, once the Sangamon County Circuit Court issues Letters Testamentary (if there's a will) or Letters of Administration (for intestate estates), the executor has authority to sell estate real property. No additional court petition or order is required for the sale itself. The executor signs the deed as "Executor of the Estate of [Decedent]" at the title company closing. The title company verifies the Letters, conducts a title search, and insures the conveyance. We close in 7-14 days from the date the contract is signed.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Path 2: Court-Authorized Sale (Supervised Administration)</h3>
          <p className="text-gray-700 mb-4">
            Under supervised administration, the executor must file a petition with the Sangamon County Circuit Court seeking authority to sell the real property. The petition identifies the property, the proposed sale terms, and the proposed distribution of proceeds. The court schedules a hearing (typically within 4-6 weeks), reviews the sale terms, and enters an order authorizing the sale. With a court order in hand, the executor can proceed to close on the same timeline as an independent administration sale. This path adds roughly 4-8 weeks to the overall process.
          </p>

          <p className="text-gray-700 mb-4">
            In either case, we can have a written offer ready before the petition is filed — so the court has a specific price and terms to review, and you can close the week the order is entered.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Title Transfer and Closing on a Springfield Probate Property</h2>
          <p className="text-gray-700 mb-4">
            Illinois is not an attorney state — title companies handle the closing mechanics without attorney involvement required. The closing for a Springfield probate property works as follows:
          </p>
          <ol className="space-y-3 text-gray-700 mb-4">
            <li><strong>1. Title search:</strong> The title company conducts a full search of the Sangamon County title records to confirm the estate has clear title and identify any outstanding liens, judgments, or encumbrances on the property.</li>
            <li><strong>2. Lien payoffs:</strong> Outstanding mortgage balances, property tax arrears, and any estate-related liens are paid from the sale proceeds at closing.</li>
            <li><strong>3. Transfer tax and recording:</strong> The executor signs the deed. Transfer tax stamps are purchased (state $0.50/$500 + Sangamon County $0.25/$500). Form PTAX-203 is filed with the Sangamon County Recorder (Frank J. Lesko, 217-535-3150). Recording fee: $64 for a standard document — Source: Sangamon County Recorder, 2026.</li>
            <li><strong>4. Distribution:</strong> Net proceeds (after payoffs and closing costs) are held by the executor as estate assets and distributed to heirs per the will or Illinois intestacy law after the creditor claims period concludes.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            We cover all closing costs — transfer taxes, recording fees, title insurance, and settlement fees. The estate receives the full agreed purchase price with no deductions.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Springfield Probate Property Situations</h2>
          <p className="text-gray-700 mb-4">
            Springfield's older residential neighborhoods generate a significant volume of probate properties each year. The city's state-government employment history means many long-term homeowners are older adults whose children have moved to Chicago or other cities — creating estates where remote heirs must manage a Springfield property they have no capacity to maintain or renovate.
          </p>
          <p className="text-gray-700 mb-4">
            Enos Park and Aristocracy Hill properties are particularly common probate inventory — Victorian-era homes built between 1880 and 1920 that have been in the same family for multiple generations, often with significant deferred maintenance. According to NeighborhoodScout (2026), the Enos Park median is $118,495, reflecting both the historic character and the renovation cost burden on buyers. Harvard Park bungalows (median $92,550) are similarly common probate transactions.
          </p>
          <p className="text-gray-700 mb-4">
            These properties typically don't qualify for conventional or FHA financing in their current condition. The buyer pool is almost entirely cash investors. That's exactly who we are. We buy in any condition — no cleanout required, no repairs needed, no inspections that result in repair demands. You close, we handle everything after.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Creditor Claims and the Illinois Claims Period</h2>
          <p className="text-gray-700 mb-4">
            One of the reasons Illinois probate takes several months even for routine estates is the creditor claims period. Under the Illinois Probate Act, the executor must publish a "Notice to Creditors" in a newspaper of general circulation in the county where the estate is pending. Creditors then have a specified period (currently 6 months from the date of first publication, or 2 years from the date of death — whichever is first — under 755 ILCS 5/18-12) to file claims against the estate. Only after the claims period has run and claims have been adjudicated can the executor make final distributions to heirs.
          </p>
          <p className="text-gray-700 mb-4">
            The sale of real property doesn't have to wait for the claims period to expire. Under independent administration, the executor can sell the property, receive the proceeds, and hold them as estate assets while the claims period runs out and creditors are paid. This means the property transaction itself can close in 7-14 days once Letters of Office are issued — the legal process of paying creditors and distributing to heirs continues in parallel, but doesn't block the sale.
          </p>
          <p className="text-gray-700 mb-4">
            This is an important nuance that sometimes causes confusion. "When can we close?" and "When do the heirs receive their money?" are two different questions in an Illinois probate sale. The closing can happen quickly. The final distribution to heirs happens after the claims period and final accounting. Both are legitimate timelines; they just run on different tracks.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Property Tax Proration — A Springfield-Specific Issue</h2>
          <p className="text-gray-700 mb-4">
            Illinois property taxes are assessed in arrears and paid in the following calendar year. At closing, the seller (or in a probate sale, the estate) provides a prorated credit to the buyer for the current year's property taxes accrued but not yet due. This is standard in all Illinois sales — but it carries particular importance in Springfield and Sangamon County, where effective property tax rates are among the highest in Illinois.
          </p>
          <p className="text-gray-700 mb-4">
            The Illinois Policy Institute has noted that Springfield-area residents pay some of the nation's highest property tax rates relative to home values. For a probate estate, the property tax proration can be a meaningful item in the closing statement. The title company calculates this based on the most recent tax bill prorated to the closing date. Executors should confirm the most recent property tax bill amount before closing to ensure the proration calculation is accurate.
          </p>
          <p className="text-gray-700 mb-4">
            When we purchase an estate property, we handle the property tax proration as part of our all-in pricing — we account for outstanding and accrued taxes in our offer, so there are no surprises at the closing table.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate Property Sale in Springfield IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/springfield-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/springfield-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/springfield-il/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/springfield-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/springfield-il/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Seller Guide' },
              { href: '/markets/springfield-il', label: '← Back to Springfield IL' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Springfield IL Probate Property?" sourcePage="/markets/springfield-il/probate" />
      </div>
    </>
  );
}
