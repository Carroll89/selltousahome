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

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Champaign-Urbana IL',
  description:
    'Inherited a house in Champaign or Urbana IL? We buy inherited properties as-is through Champaign County Circuit Court Probate. Written offer in 24 hours. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does inheriting a house work in Champaign County IL?',
    answer: 'When someone dies owning real estate in Champaign County, the property must go through the Champaign County Circuit Court — Probate Division, 6th Judicial Circuit, located at 101 E. Main Street, Urbana IL 61802 (phone 217-384-3725). The court issues Letters of Office giving the executor or administrator legal authority to deed the property. The small estate affidavit under 755 ILCS 5/25-1 — threshold raised to $150,000 by 2025 amendment — covers only personal property. Real estate in Champaign County always requires formal probate regardless of estate size. This means all inherited property filings go to Urbana, not Champaign, since Urbana is the county seat.',
  },
  {
    question: 'Can I sell an inherited Champaign-Urbana house before probate is complete?',
    answer: 'You can sign a purchase agreement contingent on the executor receiving Letters of Office from Champaign County Circuit Court. This is standard practice and lets you lock in a buyer and price now, closing quickly once the court grants authority. Under independent administration (755 ILCS 5/28-1 et seq.), the executor can sell real property without seeking additional court approval on each transaction — significantly faster than supervised administration. We can draft a written contract today and adjust the closing date as probate progresses.',
  },
  {
    question: 'What is the Illinois small estate affidavit and does it cover an inherited house?',
    answer: 'The Illinois small estate affidavit under 755 ILCS 5/25-1 allows heirs to collect personal property — bank accounts, securities, household goods — without formal probate when total personal property value is $150,000 or less. The 2025 amendment raised this threshold from $100,000 to $150,000 and clarified motor vehicle transfers. However, real property — houses, condos, land — is completely excluded regardless of estate size. If the decedent owned a house in Champaign or Urbana, formal probate at Champaign County Circuit Court (101 E. Main St., Urbana) is required.',
  },
  {
    question: 'Do I need to make repairs on an inherited Champaign-Urbana property?',
    answer: 'No. Inherited properties in Champaign-Urbana range from 1920s Old West Urbana Prairie Style homes with decades of deferred maintenance to 1960s ranches in Crystal Lake Park with original mechanicals to UIUC-adjacent Campustown rentals with annual student-damage cycles. We buy all of it as-is. Leave belongings behind if needed — we handle the cleanout after closing.',
  },
  {
    question: 'What are the tax implications of selling an inherited Champaign-Urbana house?',
    answer: 'Inherited property receives a stepped-up cost basis to fair market value at the date of death under IRC § 1014. This generally eliminates or dramatically reduces capital gains tax on a near-term sale. Illinois does not impose a state inheritance tax or estate tax. Transfer tax at closing: IL state $0.50/$500 + Champaign County $0.25/$500 = $0.75/$500 combined (0.15%), seller pays. On a $200,000 sale that is $300 total — not 1.5% as incorrectly stated on the Champaign County Clerk website. When you sell to USA Home Buyers, we cover all closing costs. Consult a CPA for your specific federal situation.',
  },
  {
    question: 'What if there are multiple heirs on the Champaign-Urbana inherited property?',
    answer: 'All heirs with an ownership interest must agree to the sale and sign the deed, or the executor must have Letters of Office authorizing the sale. If heirs can\'t agree, a partition action can be filed in Champaign County Circuit Court. A single written cash offer often resolves multi-heir impasses because every person sees the same specific number. We\'ve worked with estates where heirs are scattered across multiple states and countries — common with UIUC faculty estates whose families have dispersed globally. Call (888) 440-5250 to discuss your specific situation.',
  },
];

export default function ChampaignUrbanaInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling an Inherited House in Champaign-Urbana IL — Champaign County Probate Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1200px)" srcSet="/images/optimized/champaign-urbana-il-hero-1200.jpg" />
          <source media="(min-width: 1080px)" srcSet="/images/optimized/champaign-urbana-il-hero-1080.jpg" />
          <source media="(min-width: 828px)" srcSet="/images/optimized/champaign-urbana-il-hero-828.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/champaign-urbana-il-hero-640.jpg"
            alt="Champaign-Urbana IL home — Sell Inherited Property Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Inherited Champaign-Urbana IL House — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases inherited properties in Champaign and Urbana IL through Champaign County Circuit Court Probate — 101 E. Main Street, Urbana IL 61802. Written offer in 24 hours, close as fast as probate allows. Under 755 ILCS 5, real estate always requires formal probate (small estate affidavit only covers personal property under $150K). We buy as-is — no repairs, no cleanout. Call (888) 440-5250.
              </p>
            </div>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call (888) 440-5250 — 24/7
            </a>
          </div>
      <VideoEmbed
        src="/videos/champaign-urbana-il/inherited-property.mp4"
        title="Sell Inherited House in Champaign-Urbana IL"
        poster="/videos/champaign-urbana-il/inherited-property-poster.jpg"
        subtitle="We work with Champaign County probate timelines — as-is, any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Inherit a property in Champaign-Urbana? USA Home Buyers specializes in estate sales — we work with Illinois probate through Champaign County's 6th Judicial Circuit. Buy as-is, any condition. Written cash offer in 24 hours. Call 888-440-5250.
        </div>
      </details>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Inherited Property Cash Offer"
              subheadline="Written offer in 24 hours. We work with Champaign County probate timelines."
              sourcePage="/markets/champaign-urbana-il/inherited-property"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The UIUC Faculty Estate — Why Champaign-Urbana Is Different</h2>
          <p className="text-gray-700 mb-4">
            Most inherited property situations involve a family home that was simply a place to live. Champaign-Urbana inherited properties are different in a specific and recurring way: UIUC faculty who arrived in Champaign in the 1970s, 1980s, or 1990s, bought homes in Old West Urbana or Southwest Champaign, raised families, and spent 30-40 years in the same house. Their children grew up, pursued their own academic careers at universities across the country and around the world. When a parent passes, the heirs are in Boston, San Francisco, Berlin, or Tokyo — not in Champaign.
          </p>
          <p className="text-gray-700 mb-4">
            According to UIUC (illinois.edu), the university employs 6,000-7,000 faculty and academic staff. Across 40+ years of academic hiring, that's a substantial cohort of long-tenure homeowners whose estates flow through Champaign County Circuit Court's probate division. These estates have distinctive characteristics: homes purchased for $60,000-$80,000 in 1985 that are now worth $180,000-$280,000 carrying 30+ years of deferred maintenance. Heirs who have no local connection and no desire to manage a rental or oversee renovations from 1,500 miles away.
          </p>
          <p className="text-gray-700 mb-4">
            This is where a cash buyer creates real value. USA Home Buyers can have a written offer on the table before probate is even filed — giving out-of-state heirs a concrete number to work with as they navigate the legal process. We understand the Champaign County Probate Division's timeline and work around it.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate Law — What Governs Your Inherited Champaign-Urbana Property</h2>
          <p className="text-gray-700 mb-4">
            Illinois probate is governed by the Illinois Probate Act of 1975, codified at 755 ILCS 5. Every residential property in Illinois — regardless of county, regardless of estate value — requires formal probate before title can be conveyed. There is no exception for "small" estates when real property is involved.
          </p>
          <p className="text-gray-700 mb-4">
            According to Illinois Legal Aid Online (illinoislegalaid.org), probate must be filed in the Circuit Court of the county where the decedent resided at death. For Champaign County properties — whether the decedent lived in Champaign city, Urbana, Savoy, or elsewhere in the county — that means Champaign County Circuit Court, 101 E. Main Street, Urbana IL 61802 (phone 217-384-3725). This is the county seat, and all filings go here. Not Champaign city. Not a satellite office. Urbana.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Small Estate Affidavit — What It Covers and What It Doesn't</h3>
          <p className="text-gray-700 mb-4">
            The Illinois small estate affidavit procedure under 755 ILCS 5/25-1 allows heirs to collect personal property — bank accounts, investment accounts, household goods, personal effects — without formal probate when the total personal property value is $150,000 or less. The 2025 amendment to this statute raised the threshold from $100,000 to $150,000. This is a meaningful simplification for many Illinois estates.
          </p>
          <p className="text-gray-700 mb-4">
            However, real estate is explicitly excluded from the small estate affidavit procedure regardless of estate size. A house worth $150,000 in Urbana cannot be transferred by small estate affidavit, even if all other estate assets are minimal. The house requires formal probate, Letters of Office, and a deed properly executed by the authorized executor or administrator. There is no shortcut.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Independent vs. Supervised Administration</h3>
          <p className="text-gray-700 mb-4">
            Illinois law offers two forms of probate administration with very different practical timelines. Under supervised administration, the executor must seek court approval for significant actions — including selling real estate. This adds time and cost. Under independent administration (755 ILCS 5/28-1 et seq.), the executor is authorized to sell real estate, pay debts, and distribute assets without returning to court for each transaction. The vast majority of uncontested Illinois estates proceed under independent administration.
          </p>
          <p className="text-gray-700 mb-4">
            The practical difference: independent administration allows us to close a property sale quickly once Letters of Office are issued — often within a few weeks of the court grant. Supervised administration requires an additional court hearing to authorize the sale. If you're filing probate on a Champaign-Urbana estate and you intend to sell the real estate, specifically request independent administration unless your attorney advises otherwise.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Notice to Creditors</h3>
          <p className="text-gray-700 mb-4">
            Under 755 ILCS 5/18-3, the executor must publish a notice to creditors, giving creditors 2.5 months to file claims. This is a fixed statutory waiting period that cannot be shortened by agreement or court order. It runs from the date of first publication. When planning the sale timeline, the creditor notice period is typically the binding constraint on how quickly you can close.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Champaign-Urbana Inherited Property Situations</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">UIUC Faculty Estate in Old West Urbana or Southwest Champaign</h3>
          <p className="text-gray-700 mb-4">
            The pattern: a UIUC professor — engineering, law, medicine, agriculture — bought a home in the 1970s-1990s. Spent 30+ years in the house. Children moved to New York, California, or abroad. Parent passes; children are named co-executors in a will they haven't thought about in years. The house has a new roof from 2015, an original 1970s HVAC system, and a basement that floods during heavy rain. The children want to honor their parent's memory, sell as quickly and cleanly as possible, and move on with their lives.
          </p>
          <p className="text-gray-700 mb-4">
            This is exactly the situation USA Home Buyers handles best. We can work with out-of-state co-executors remotely. We don't need inspections, repair contingencies, or traditional financing. We buy the house in whatever condition it's in. The executor authorizes the deed; we handle everything else.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Campustown Landlord Estate</h3>
          <p className="text-gray-700 mb-4">
            A second pattern: a local investor who bought rental properties in Campustown during the 1990s-2000s UIUC expansion years. Built a small portfolio of 3-5 rental units near campus. Has now passed, leaving behind active leases, tenant security deposits held in trust, and a code compliance history with the City of Champaign's rental licensing system. Heirs are not landlords and have no interest in becoming landlords.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases tenant-occupied properties. The existing leases stay in place through closing — we take the landlord position, not the heirs. This is often the cleanest exit for Campustown estate situations.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">South Urbana Working-Class Estate</h3>
          <p className="text-gray-700 mb-4">
            Dodds Park and South Urbana properties inherited from working-class homeowners present a different profile: lower purchase prices (often $75K-$140K), more significant deferred maintenance, and heirs with limited financial resources who can't afford to carry the property through a lengthy retail listing process. The UIUC-connected probate network doesn't apply here, but the IL Probate Act requirements are identical.
          </p>
          <p className="text-gray-700 mb-4">
            For South Urbana inherited properties, speed and simplicity are the key values. We provide a written offer within 24 hours — a concrete number that lets the executor make a decision without paying months of utilities, insurance, and taxes on a vacant property.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Illinois Disclosure Requirement Still Applies</h2>
          <p className="text-gray-700 mb-4">
            Under the Illinois Residential Real Property Disclosure Act (765 ILCS 77), even inherited properties sold "as-is" require the seller to complete and deliver a disclosure form to the buyer before the contract is signed. The disclosure covers: structural issues, roof condition, electrical and plumbing systems, HVAC, flooding, environmental conditions (radon, lead), and other known defects.
          </p>
          <p className="text-gray-700 mb-4">
            Critically: the disclosure only covers what the seller knows. If the executor inherited a house they've never lived in and has limited knowledge of its systems, that can be reflected in the disclosure form. "Selling as-is" means you won't make repairs — it does not mean you can skip the form. When you sell to USA Home Buyers, we receive your completed disclosure, assess the property ourselves, and our offer price reflects the as-is condition. No post-closing surprise claims from our side.
          </p>
          <p className="text-gray-700 mb-4">
            Champaign County is a moderate radon risk zone. Per standard IL practice, a radon disclosure (separate from the PCDS form) is also typical for Champaign-Urbana transactions. Again — disclosure, not remediation, is the requirement in a cash sale.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What to Expect When You Call USA Home Buyers</h2>
          <p className="text-gray-700 mb-4">
            Call (888) 440-5250. Tell us the property address, your relationship to the estate (executor, heir, or attorney), and the current probate status. We'll tell you what we need and how the process works. We send a written offer within 24 hours. The offer is not contingent on inspections, financing, or repairs.
          </p>
          <p className="text-gray-700 mb-4">
            If probate hasn't been filed yet, we can give you a cash offer now that you can use as a reference point when you do file. Having a buyer committed at a specific price often makes the probate process more straightforward — the court sees a concrete transaction rather than an estate in limbo.
          </p>
          <p className="text-gray-700 mb-4">
            Closing happens at a Champaign County title company of your choosing — or we can recommend one that handles estate transactions regularly. The executor signs at closing; heirs receive their distributions as directed by the will or court order. We handle everything on the buyer side.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Properties in Champaign-Urbana IL" />

        <section className="my-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-brand-light rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Champaign County Probate</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Champaign County Circuit Court — Probate</li>
                <li>101 E. Main Street, Urbana IL 61802</li>
                <li>Phone: 217-384-3725</li>
                <li>6th Judicial Circuit</li>
                <li>Statute: 755 ILCS 5 (Illinois Probate Act)</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Related Pages</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="/markets/champaign-urbana-il/probate" className="text-brand-primary hover:underline">Probate Sale Guide →</Link></li>
                <li><Link href="/markets/champaign-urbana-il/tenant-occupied" className="text-brand-primary hover:underline">Tenant-Occupied Properties →</Link></li>
                <li><Link href="/markets/champaign-urbana-il/market-report" className="text-brand-primary hover:underline">Market Report →</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Champaign-Urbana Property?" sourcePage="/markets/champaign-urbana-il/inherited-property" />
      </div>
    </>
  );
}
