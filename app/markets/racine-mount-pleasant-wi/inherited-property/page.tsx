/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { racineWILocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Racine WI',
  description:
    'Inherited a house in Racine or Mount Pleasant WI? We buy inherited properties as-is through Racine County Circuit Court Probate Division. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does inheriting a house work in Racine County WI?',
    answer: 'When someone dies owning real estate in Racine County, the property typically goes through the Racine County Circuit Court — Probate Division, located at 730 Wisconsin Avenue, 6th Floor, Racine WI 53403, (262) 636-3868. The personal representative (executor or administrator) receives Domiciliary Letters (Wisconsin\'s equivalent of Letters Testamentary) giving them authority to execute a deed. The timeline depends on whether the estate qualifies for informal or formal administration under Wis. Stat. Ch. 865 and 867.',
  },
  {
    question: 'Can I sell an inherited Racine house before probate is complete?',
    answer: 'You can sign a purchase agreement contingent on the personal representative receiving authority to sell. This is common practice in Racine County and lets you line up a buyer so closing can happen quickly — sometimes the same week — once the court grants authority. We can draft the contract now and adjust the closing date as probate progresses.',
  },
  {
    question: 'Do I need to make repairs on an inherited Racine property?',
    answer: 'No. A lot of the inherited properties we buy in Racine are the family cream brick cottage on the Northside, a Southside Victorian, or a mid-century West Racine bungalow — typically with decades of deferred maintenance, original galvanized plumbing, knob-and-tube wiring, or lead paint. We buy in any condition. Belongings left behind are fine. We handle the rest after closing.',
  },
  {
    question: 'What are the tax implications of selling an inherited house in Wisconsin?',
    answer: 'Inherited property receives a stepped-up cost basis to fair market value at the date of death for federal income tax purposes (IRC § 1014). That generally eliminates or dramatically reduces capital gains tax on a near-term sale. Wisconsin does not impose a state-level estate or inheritance tax. Consult a CPA for your specific situation. Source: IRS Publication 551 (irs.gov); Wisconsin Department of Revenue (revenue.wi.gov).',
  },
  {
    question: 'What if there are multiple heirs on a Racine inherited property?',
    answer: 'All heirs with an ownership interest must agree to the sale and sign the deed. If heirs can\'t agree, a partition action can be filed in Racine County Circuit Court under Wis. Stat. Ch. 842. We have closed multi-heir transactions in Racine County before. It takes coordination, but it works — and a single written cash offer often breaks the deadlock because every heir sees the same number.',
  },
];

export default function RacineInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        racineWILocalBusinessSchema,
        articleSchema('Selling an Inherited House in Racine WI — Racine County Probate Guide', pageUrl, '2026-04-17'),
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
            alt="Racine WI inherited property — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/racine-mount-pleasant-wi" className="hover:text-white">Racine-Mount Pleasant WI</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Inherited Racine WI House — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases inherited properties in Racine and Mount Pleasant WI through Racine County Circuit Court Probate Division (730 Wisconsin Ave, 6th Floor). Written cash offer in 24 hours, close after the personal representative has authority to deed the property. Any condition, no repairs, no cleanout. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Inherited a property through Racine County Circuit Court — Probate Division? We buy inherited houses in any condition. We work around probate timelines.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="We work with estates and probate timelines. Written offer in 24 hours." sourcePage="/markets/racine-mount-pleasant-wi/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Racine County Circuit Court — Probate Division — What You Need to Know</h2>
          <p className="text-gray-700 mb-4">
            The probate court for Racine County is the Racine County Circuit Court, Probate Division, located at 730 Wisconsin Avenue, 6th Floor, Racine WI 53403. Main number is (262) 636-3333; the Register in Probate direct line is (262) 636-3868. This court handles all probate proceedings for decedents who owned property in Racine County — whether the home was a Northside cream brick cottage in the City of Racine, a split-level in Mount Pleasant, a farmhouse in Burlington, or a ranch in Caledonia. Once the personal representative receives Domiciliary Letters, they can execute a deed and complete the sale.
          </p>
          <p className="text-gray-700 mb-4">
            We regularly work with estates throughout Racine County. We can have a written offer ready before you even file for probate, so you close quickly once authority is granted. Transfer tax: Wisconsin realty transfer fee — $3.00 per $1,000 of consideration, paid by seller (Wis. Stat. § 77.22). On a $205,000 Racine sale: $615. No county or city surcharge. Source: Wisconsin Department of Revenue (revenue.wi.gov).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Racine WI" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/racine-mount-pleasant-wi/probate', label: 'Probate Sale' },
              { href: '/markets/racine-mount-pleasant-wi/foreclosure', label: 'Foreclosure' },
              { href: '/markets/racine-mount-pleasant-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/racine-mount-pleasant-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/racine-mount-pleasant-wi/code-violations', label: 'Code Violations' },
              { href: '/markets/racine-mount-pleasant-wi', label: '← Back to Racine' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Racine WI Property?" sourcePage="/markets/racine-mount-pleasant-wi/inherited-property" />
      </div>
    </>
  );
}
