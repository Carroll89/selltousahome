/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/new-haven-ct/probate`;

export const metadata: Metadata = {
  title: 'Probate Property Sale New Haven CT — Cash Offer',
  description:
    'Selling a probate property in New Haven CT? We buy through New Haven Probate Court (200 Orange St). Cash offer in 24 hrs. CT probate explained.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What makes Connecticut\'s Probate Court system unique?',
    answer: 'Connecticut has 54 dedicated Probate Districts — separate courts staffed by elected probate judges that handle decedents\' estates, trusts, conservatorships, and guardianships. This is unlike New York\'s Surrogate\'s Court system, Illinois\'s Circuit Court probate division, or Pennsylvania\'s Register of Wills. Every New Haven decedent with real property must file in the New Haven Probate District, not Superior Court. Source: CT Secretary of State (portal.ct.gov); ctprobate.gov.',
  },
  {
    question: 'How long does New Haven probate take?',
    answer: 'A testate estate (with a valid will) in New Haven typically takes 6–12 months from filing to final distribution. An intestate estate (no will) follows CT Gen Stat §45a-437 intestacy statutes and often runs 6–18 months due to the additional steps of establishing heirs. Real property cannot transfer until the Probate Court issues appropriate authorization — either an order approving the sale, or a Certificate of Devise/Distribution filed with the New Haven City Clerk.',
  },
  {
    question: 'Can USA Home Buyers purchase during the probate process?',
    answer: 'Yes. We buy New Haven probate properties after the court authorizes the sale. The executor or administrator files a motion to sell real property; the Probate Court schedules a hearing and issues an order. Once we have court authorization, we close quickly — typically within 7–14 days of the order. We\'ve worked with New Haven Probate Court cases in Fair Haven, The Hill, Newhallville, Westville, and throughout New Haven County.',
  },
  {
    question: 'What happens to the deed when a New Haven property is transferred through probate?',
    answer: 'The executor or administrator files a Certificate of Devise or Distribution with the New Haven City Clerk at 165 Church Street, New Haven CT 06510. This document functions as the probate deed and is recorded in the land records along with the regular recording fee ($53 first page + $5 per additional page per CT Gen Stat § 7-34a). The conveyance tax (1.25% for New Haven) is also paid at recording when the property is subsequently sold to a cash buyer.',
  },
  {
    question: '¿Pueden comprar una propiedad en probate en New Haven? / Probate property in Spanish?',
    answer: 'Sí, hablamos español. Trabajamos con familias hispanas en New Haven que están pasando por el proceso de Tribunal de Sucesiones. Podemos explicar el proceso de probate de Connecticut en español y coordinar con el abogado del patrimonio. Llámenos: 888-440-5250.',
  },
];

export default function NewHavenProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell a Probate Property in New Haven CT — Cash Offer Through CT Probate Court', pageUrl, '2026-04-18'),
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
            alt="New Haven CT homes — Sell Probate Property Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/new-haven-ct" className="hover:text-white">New Haven CT</Link> › Probate Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Probate Property in New Haven CT — Cash Offer Through CT Probate Court
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Selling a New Haven probate property? Connecticut's unique Probate Court system requires court authorization before selling real estate. New Haven Probate Court: 200 Orange Street, (203) 946-4880, ctprobate.gov. USA Home Buyers closes after court approval — written offer in 24 hours, close in 7–14 days once authorized. As-is, any condition. Hablamos español. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              We buy New Haven probate properties as-is — we work within the CT Probate Court process.
            </p>
            <p className="text-blue-100 text-sm mb-4">Hablamos español — llamar para ayuda en español. 888-440-5250.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Probate Cash Offer" subheadline="We work with New Haven Probate Court cases. Written offer in 24 hours." sourcePage="/markets/new-haven-ct/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New Haven Probate Court — Connecticut's Unique System</h2>
          <p className="text-gray-700 mb-4">
            Connecticut's Probate Court system is unlike any other state's. While New York uses Surrogate's Court, Illinois uses Circuit Court probate divisions, and Pennsylvania uses Register of Wills, Connecticut created 54 dedicated Probate Districts — standalone courts with elected probate judges. New Haven has its own Probate District, serving the City of New Haven.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
            <p className="font-semibold text-brand-dark mb-1">New Haven Probate Court</p>
            <p className="text-gray-700 text-sm">200 Orange Street, 1st Floor</p>
            <p className="text-gray-700 text-sm">P.O. Box 905, New Haven, CT 06504-0905</p>
            <p className="text-gray-700 text-sm">Phone: (203) 946-4880</p>
            <p className="text-gray-700 text-sm">Website: ctprobate.gov/courts/new-haven-probate-court</p>
          </div>
          <p className="text-gray-700 mb-4">
            The New Haven Probate District covers the City of New Haven. Its jurisdiction includes all decedents' estates with New Haven city addresses, regardless of whether there is a will. Any New Haven homeowner who dies without a trust leaves their real property to be administered through the New Haven Probate Court before any deed transfer can occur.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Why Real Property Requires Probate Court Authorization in CT</h2>
          <p className="text-gray-700 mb-4">
            In some states, relatively informal processes allow estate administrators to sell real property without court involvement for smaller estates. Connecticut is more formalized. The Probate Court supervises the administration of estates that include real property from start to finish. The executor or administrator cannot simply list a New Haven house for sale and close without Probate Court involvement — they must file a motion to sell, obtain a hearing date, present the sale to the court for approval, and receive a signed court order before the sale can proceed.
          </p>
          <p className="text-gray-700 mb-4">
            This court-supervised structure provides accountability — no executor can sell a family home without the beneficiaries' interests being represented before the Probate judge. But it adds time. The motion-to-sell process typically takes 3–6 weeks from filing to order. A cash buyer who has already submitted a written offer can be presented to the court at the hearing, giving the judge confidence that a market-price offer is on the table.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">CT Intestate Succession — No Will in New Haven</h2>
          <p className="text-gray-700 mb-4">
            When a New Haven homeowner dies without a will, Connecticut's intestacy statutes (CT Gen Stat §45a-437 et seq.) determine who inherits. The surviving spouse, children, parents, and siblings inherit in a defined priority order. In many New Haven estate situations — particularly in Fair Haven and The Hill, where homeownership passed through immigrant families without formal estate planning — there is no will, and the intestate process applies.
          </p>
          <p className="text-gray-700 mb-4">
            Intestate administration involves appointing an administrator (rather than an executor named by a will), notifying all potential heirs, and managing the estate under court supervision. When multiple heirs are identified — children spread across multiple states, siblings who have lost touch — reaching consensus on selling the property can add months. A cash buyer's offer gives all parties a concrete, fair-market option that simplifies those family conversations.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Estate Administration Timeline — New Haven Probate District</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Phase</th>
                  <th className="text-left p-3">Testate (With Will)</th>
                  <th className="text-left p-3">Intestate (No Will)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">File for Probate jurisdiction</td><td className="p-3">2–4 weeks</td><td className="p-3">2–4 weeks</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Establish executor/administrator</td><td className="p-3">1–2 weeks</td><td className="p-3">2–4 weeks (court appoints)</td></tr>
                <tr className="bg-white"><td className="p-3">Inventory &amp; appraisal filed</td><td className="p-3">4–8 weeks</td><td className="p-3">4–8 weeks</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Creditor notice period</td><td className="p-3">6–8 weeks</td><td className="p-3">6–8 weeks</td></tr>
                <tr className="bg-white"><td className="p-3">Motion to sell real property</td><td className="p-3">3–6 weeks</td><td className="p-3">3–6 weeks</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Closing after court order</td><td className="p-3">1–2 weeks</td><td className="p-3">1–2 weeks</td></tr>
                <tr className="bg-white font-semibold"><td className="p-3">Typical total</td><td className="p-3 text-amber-700">6–12 months</td><td className="p-3 text-red-700">6–18 months</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Why New Haven Probate Sellers Choose Cash Buyers</h2>
          <p className="text-gray-700 mb-4">
            A New Haven probate estate often involves a property that has been in a family for 40–60 years. The home has accumulated deferred maintenance across decades — on pre-1950 New Haven housing stock, that means lead paint, outdated electrical, aging oil or gas-fired boilers, and roof systems past their service life. The beneficiaries typically live elsewhere (New York, Hartford, Puerto Rico), have no resources to fund renovations, and no interest in managing a New Haven rental property.
          </p>
          <p className="text-gray-700 mb-4">
            Listing on the MLS requires the estate to either fund repairs to make the home lender-financeable, or price it low enough that an investor will buy it conventionally — and then wait 65+ days for the listing to sell. A cash buyer eliminates the renovation cost, eliminates the agent commission, eliminates the carrying cost during the listing period, and closes in 7–14 days after court authorization. The estate's net proceeds are often comparable to a listed sale after costs.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers has a clear process for New Haven probate sales: we meet with the executor (in person or by phone), assess the property, submit a written offer, and coordinate with the estate attorney for the motion to sell hearing. Once the court issues its order, we close quickly. The estate is settled; the beneficiaries receive distributions. Call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Recording the Estate Transfer — New Haven City Clerk</h2>
          <p className="text-gray-700 mb-4">
            Connecticut records land at the city/town clerk level — not at a county recorder. New Haven deeds are recorded at the New Haven City Clerk, 165 Church Street, New Haven CT 06510, phone (203) 946-8347. The executor files a Certificate of Devise or Distribution after Probate Court authorization. According to CT Gen Stat §7-34a (Connecticut General Assembly), the recording fee is $53 for the first page + $5 per additional page. The conveyance tax (1.25%) is paid at the time the buyer's deed records. USA Home Buyers covers all recording fees and conveyance tax.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">CT Probate Fees — What Estates Pay</h2>
          <p className="text-gray-700 mb-4">
            Connecticut Probate Courts charge fees based on estate value, set by the state legislature and published on ctprobate.gov. The fee schedule is tiered — larger estates pay more. For a typical New Haven triple-decker estate worth $200,000–$250,000, Probate Court fees run $900–$1,500 depending on the exact value and services required. These are estate expenses paid before distributions to beneficiaries. Attorney fees for the estate attorney add to this cost; a complex New Haven probate matter with multiple heirs and a real estate sale might involve $3,000–$6,000 in total attorney and probate fees.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding the full cost structure of a New Haven probate sale is important for executors who are comparing a cash sale against a retail MLS listing. After Probate Court fees, estate attorney fees, agent commission (if listed), carrying costs during the administration period, and any repairs — the cash sale's lower headline number often produces comparable or better net distributions to beneficiaries.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Out-of-State Executors — New Haven Probate Without Being Local</h2>
          <p className="text-gray-700 mb-4">
            Many New Haven probate situations involve executors who don't live in Connecticut. A daughter in New York City named executor of her mother's Fair Haven triple-decker. A son in Florida handling his father's Newhallville estate. A Puerto Rico-based family managing a Hill neighborhood property inherited from grandparents who settled in New Haven in the 1960s.
          </p>
          <p className="text-gray-700 mb-4">
            Connecticut law requires that the executor be bondable (or waive the bond requirement in the will) and cooperate with the Probate Court. Out-of-state executors can manage the New Haven Probate process remotely with a good local real estate attorney — appearances at hearings can sometimes be handled by the attorney with Power of Attorney. USA Home Buyers works with out-of-state executors regularly. We handle the property assessment, coordinate with your local CT attorney, and keep the process moving without requiring you to fly to New Haven for every step. Call 888-440-5250 — hablamos español.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Probate Real Estate — Market Value Context</h2>
          <p className="text-gray-700 mb-4">
            When an estate includes a New Haven property, the Probate Court requires an inventory value for the asset. The executor typically obtains a broker price opinion or certified appraisal to establish fair market value. For a Fair Haven triple-decker, that might come in at $210,000–$240,000 in as-is condition. For a Westville Victorian, $480,000–$540,000. These values inform the Probate Court's approval of any sale — the court will expect that a cash offer reasonably reflects market conditions.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers provides written offers that are defensible to the Probate Court. We're not offering $0.50 on the dollar with no explanation — we price based on the property's actual as-is market value, the cost of renovation required to bring the property to retail condition, and the risk we're absorbing. Many New Haven Probate Court judges have seen cash buyer offers before and understand this pricing framework. An offer in the 65–78% of appraised-value range with full written documentation is routinely approved. Call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Probate vs. Trust — Does Your New Haven Property Have a Trust?</h2>
          <p className="text-gray-700 mb-4">
            Some New Haven homeowners — particularly in higher-value neighborhoods like East Rock and Westville — placed their property in a revocable living trust before death. Property held in a trust at death avoids probate entirely: the successor trustee can sell the property without Probate Court involvement, typically closing much faster. If you're unsure whether the New Haven property you're dealing with is in a trust or in the decedent's name directly, the answer lies in the New Haven City Clerk's land records — if the deed shows the trust as owner, it's in the trust; if it shows the individual, it's a probate estate.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate Property Sale in New Haven CT" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
              { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
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

        <CashOfferForm variant="footer" headline="Ready to Sell Your New Haven CT Probate Property?" sourcePage="/markets/new-haven-ct/probate" />
      </div>
    </>
  );
}
