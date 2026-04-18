/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/new-haven-ct/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure New Haven CT — Sell Fast',
  description:
    'Facing foreclosure in New Haven CT? CT uses strict foreclosure — no auction, Law Day, 5-9 months. Sell before Law Day. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in New Haven CT?',
    answer: 'USA Home Buyers closes in as few as 7 days once you accept an offer. Connecticut uses strict foreclosure — the lender files in New Haven Superior Court (235 Church Street), and if the court grants foreclosure, it sets a "Law Day" by which you must pay the full debt or lose title directly to the lender. There is no auction. Once a Law Day is set, speed is critical. Total timeline from first missed payment to Law Day: 5–9 months. Source: CT Gen Stat §§49-1 through 49-31; CT Judicial Branch (jud.ct.gov). Call 888-440-5250 immediately.',
  },
  {
    question: 'What is Connecticut strict foreclosure?',
    answer: 'Connecticut strict foreclosure is a unique legal process where the lender takes title to your property directly — without a public auction — if you fail to pay off the full mortgage by the court-set "Law Day." Most states (including Illinois and Wisconsin) use a judicial auction where your home is sold to the highest bidder; Connecticut skips the auction entirely. Title passes directly from you to the lender on Law Day. This is governed by CT Gen Stat §§49-1 through 49-31.',
  },
  {
    question: 'Will selling stop the foreclosure proceeding in New Haven?',
    answer: 'Yes — a completed sale satisfies the mortgage and terminates the foreclosure action. The sale proceeds pay off the outstanding mortgage balance; any surplus goes to you. Once we close with a CT real estate attorney, the lender files a satisfaction of mortgage with the New Haven City Clerk and the foreclosure action is dismissed. The critical requirement: close before the Law Day is set, or at minimum before the Law Day passes.',
  },
  {
    question: 'What is the mediation program in Connecticut foreclosure?',
    answer: 'Connecticut has a mandatory foreclosure mediation program for owner-occupied primary residences (CT Gen Stat § 49-31l). If you live in the home being foreclosed, you can invoke the mediation program, which adds 60–90 days and requires the lender to participate in structured negotiations. This creates a window to explore loan modification, short sale, or cash sale options. Mediation does not stop the foreclosure — it delays it and provides structured negotiation time.',
  },
  {
    question: 'What if I owe more than my New Haven house is worth?',
    answer: 'A short sale may be possible — the lender agrees to accept less than the full payoff to release the mortgage lien. Short sales require lender approval and typically take 60–120 days of negotiation, longer than a standard cash sale. We have experience with short sale situations in New Haven County. Call 888-440-5250 to discuss your specific situation.',
  },
  {
    question: '¿Pueden ayudarme con la ejecución hipotecaria en New Haven? / Can you help with foreclosure in Spanish?',
    answer: 'Sí, hablamos español. Si está enfrentando una ejecución hipotecaria en New Haven — el proceso de strict foreclosure de Connecticut puede ser confuso — podemos explicarle todo en español y ayudarle a vender su casa antes del Law Day. Llámenos: 888-440-5250.',
  },
];

export default function NewHavenForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Stop Foreclosure in New Haven CT — Sell Before the Law Day', pageUrl, '2026-04-18'),
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
            alt="New Haven CT homes — Stop Foreclosure — Sell Before Law Day"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/new-haven-ct" className="hover:text-white">New Haven CT</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in New Haven CT — Sell Before the Law Day
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Facing foreclosure in New Haven? CT strict foreclosure has no auction — title transfers directly to the lender on Law Day. Total timeline: 5–9 months. USA Home Buyers closes in 7–14 days, well within the window to protect your equity. Written offer in 24 hours. CT Gen Stat §§49-1 to 49-31. Call 888-440-5250. Hablamos español.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <p className="text-blue-100 text-sm mb-4">Hablamos español — llamar para ayuda en español.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Stop Foreclosure — Get Your Cash Offer" subheadline="Written offer in 24 hours. Close before the Law Day." sourcePage="/markets/new-haven-ct/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Connecticut Strict Foreclosure — How It Works in New Haven County</h2>
          <p className="text-gray-700 mb-4">
            Connecticut uses a strict foreclosure process that is fundamentally different from the foreclosure system in most other states. Understanding this difference is critical for New Haven homeowners in pre-foreclosure — because the "no auction" reality means you either sell or lose the property entirely, with no bidding process that might produce a surplus for you.
          </p>
          <p className="text-gray-700 mb-4">
            In most states — Illinois, Wisconsin, Ohio, Michigan — a lender who forecloses must eventually hold a public auction (sheriff's sale) where third-party buyers bid on the property. If the auction price exceeds what you owe, you receive the surplus. You also have a redemption period after the auction in many states. Connecticut eliminated this process through its strict foreclosure statutes (CT Gen Stat §§49-1 through 49-31). Here's what happens instead:
          </p>
          <p className="text-gray-700 mb-4">
            The lender files a foreclosure complaint in CT Superior Court — in New Haven County, that's at 235 Church Street, New Haven CT 06510, phone (203) 503-6800. The court evaluates whether the mortgage debt exceeds the property value. If it does (and in distressed New Haven neighborhoods, it often does), the court enters a Judgment of Strict Foreclosure. Then it sets a "Law Day."
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">What Is a Law Day?</h2>
          <p className="text-gray-700 mb-4">
            A Law Day is a court-set deadline by which the borrower must pay off the entire mortgage debt in full. Not just catch up on missed payments — the full outstanding balance plus accrued interest, fees, and attorney costs. If you pay in full by the Law Day, you redeem the mortgage and keep the house. If you don't pay in full by the Law Day, title passes automatically and directly to the lender. No sale, no auction, no surplus calculation. The lender becomes the owner at midnight on the Law Day.
          </p>
          <p className="text-gray-700 mb-4">
            Law Days are typically set 45–90 days after the Judgment of Strict Foreclosure. The court may set multiple Law Days for multiple lienholders, each with their own redemption opportunity. When the senior lienholder's Law Day passes, all junior interests are extinguished.
          </p>
          <p className="text-gray-700 mb-4">
            The practical implication for New Haven homeowners: there is no "second chance at the courthouse steps." Once the Law Day passes without full payoff, the property is gone. The window to sell — and recover any equity — is the period between the filing of the foreclosure complaint and the Law Day.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven County Strict Foreclosure Timeline</h2>
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
                <tr className="bg-white"><td className="p-3 font-medium">First missed payment / default</td><td className="p-3">Day 0</td><td className="p-3">Start counting here</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Lender notice of default</td><td className="p-3">30–90 days after default</td><td className="p-3">CT does not have a statutory pre-suit waiting period for most mortgages</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Complaint filed at New Haven Superior Court</td><td className="p-3">90–180 days after default</td><td className="p-3">235 Church Street, New Haven; lender files under CT Gen Stat §49-26</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Mediation program (owner-occupied)</td><td className="p-3">Adds 60–90 days</td><td className="p-3">Mandatory if invoked; structured negotiation window (CT Gen Stat § 49-31l)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Judgment of Strict Foreclosure</td><td className="p-3">3–5 months after complaint filed</td><td className="p-3">Court enters judgment; determines whether strict foreclosure or decree of sale applies</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Law Day set (45–90 days post-judgment)</td><td className="p-3">45–90 days after judgment</td><td className="p-3">Final deadline to pay off full debt or lose title</td></tr>
                <tr className="bg-white font-medium"><td className="p-3">Title transfer to lender (Law Day)</td><td className="p-3 text-red-700">45–90 days post-judgment</td><td className="p-3">No auction. Title vests in lender automatically.</td></tr>
                <tr className="bg-gray-50 font-bold"><td className="p-3">Total: First missed payment → title transfer</td><td className="p-3 text-red-700">5–9 months</td><td className="p-3">Much faster than WI (12–15 mo) or IL (12–18 mo)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            The 5–9 month total timeline is significantly compressed compared to other states. Wisconsin's judicial foreclosure with redemption typically runs 12–15 months. Illinois runs 12–18 months in many counties. Connecticut's strict foreclosure system is one of the fastest in the country for lenders — which means the window for sellers to act is correspondingly narrow.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Connecticut's Mandatory Mediation Program</h2>
          <p className="text-gray-700 mb-4">
            Under CT Gen Stat § 49-31l, Connecticut has a mandatory foreclosure mediation program for owner-occupied primary residences. If you live in the home being foreclosed, you can invoke the mediation program by filing the appropriate paperwork when you receive the foreclosure complaint. The program requires the lender to participate in structured mediation with a state-certified mediator.
          </p>
          <p className="text-gray-700 mb-4">
            Mediation adds 60–90 days to the foreclosure timeline and creates a formal window for negotiating alternatives: loan modification, repayment plan, short sale, or deed-in-lieu of foreclosure. This structured time is also when cash buyers like USA Home Buyers can present offers — giving the seller a documented path to closing that can be presented to the mediator as a viable resolution.
          </p>
          <p className="text-gray-700 mb-4">
            Mediation does not stop the foreclosure permanently. If no agreement is reached, the case proceeds to judgment and Law Day. But it provides New Haven homeowners with one of the few structured pauses in an otherwise fast-moving process. Call 888-440-5250 — we can present an offer during mediation.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Decree of Sale vs. Strict Foreclosure</h2>
          <p className="text-gray-700 mb-4">
            Connecticut courts have discretion to order either a strict foreclosure (direct title transfer to lender) or a Decree of Sale (public auction) depending on the equity situation. If the court determines that the property value significantly exceeds the debt, a Decree of Sale is more likely — the court wants an auction to capture that excess value for junior lienholders or the homeowner.
          </p>
          <p className="text-gray-700 mb-4">
            In practice, most New Haven foreclosures on distressed properties — particularly in The Hill, Newhallville, and portions of Fair Haven — result in strict foreclosure, because the debt often equals or exceeds the property's as-is value. Homeowners in equity-positive situations (East Rock, Westville, Wooster Square) may face a Decree of Sale with an auction.
          </p>
          <p className="text-gray-700 mb-4">
            Either way, selling before the court process reaches its conclusion preserves your options. A cash offer accepted before judgment is issued gives you control over the timeline, the terms, and the net proceeds. After judgment and Law Day, you have no options. Call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Pre-Foreclosure Context — The Hill, Fair Haven, Newhallville</h2>
          <p className="text-gray-700 mb-4">
            New Haven's pre-foreclosure pipeline is concentrated in three neighborhoods: The Hill, Fair Haven, and Newhallville. These areas have the city's highest poverty rates, highest renter concentration, and deepest inventory of deferred-maintenance properties. Homeowners here — often with jobs in the service sector, healthcare support, or manufacturing — face the combination of reduced income, rising maintenance costs, and mortgage obligations from purchases made when times were better.
          </p>
          <p className="text-gray-700 mb-4">
            The pre-war housing stock in these neighborhoods — triple-deckers in Fair Haven, brick row homes in The Hill, pre-1940 wood-frames throughout Newhallville — carries systemic maintenance challenges: lead paint common in all pre-1978 buildings, knob-and-tube wiring still present in some homes, aging oil-fired boilers, and foundation conditions from the 1920s and 1930s. A lender appraisal on one of these properties typically produces values well below what the owner might hope, making strict foreclosure (rather than an equity-preserving Decree of Sale) the likely court outcome.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers operates in these neighborhoods. We've purchased properties in every condition — active roof leaks, failed boilers, open LCI violations, properties with tenants in place. We're not looking for perfect houses. We're looking for situations where a cash sale solves a real problem quickly. If that's your situation, call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Connecticut Foreclosure Resources for New Haven Homeowners</h2>
          <p className="text-gray-700 mb-4">
            Connecticut has several resources for homeowners facing foreclosure. CT Housing Finance Authority (CHFA) administers the Connecticut Homeowner Assistance Fund — federal assistance for homeowners who fell behind due to pandemic-related hardship (chfa.org). Connecticut Fair Housing Center (ctfairhousing.org) provides housing counseling. Connecticut Legal Services (ctlegalservices.org) offers free legal help to income-qualifying homeowners facing foreclosure.
          </p>
          <p className="text-gray-700 mb-4">
            These resources are worth pursuing if your goal is to keep the home. For homeowners who have decided to sell — or who have equity to preserve before Law Day — USA Home Buyers provides a direct alternative: written cash offer in 24 hours, closing in 7–14 days, all closing costs covered. Both paths are available. The key is acting before the Law Day. Call 888-440-5250.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in New Haven CT" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
              { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/new-haven-ct/probate', label: 'Probate Sale' },
              { href: '/markets/new-haven-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/new-haven-ct/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-connecticut', label: 'CT State Hub' },
              { href: '/markets/bridgeport-ct/foreclosure', label: 'Bridgeport CT Foreclosure' },
              { href: '/guides/sell-house-fast-new-haven-ct-2026', label: 'New Haven Seller Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Before the Law Day in New Haven CT?" sourcePage="/markets/new-haven-ct/foreclosure" />
      </div>
    </>
  );
}
