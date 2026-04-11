import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, kingOfPrussiaLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Inherited House King of Prussia PA',
  description:
    'Inherited a property in King of Prussia or Montgomery County PA? We buy inherited homes as-is, work around estate timelines, and close in 7-14 days. No repairs, no cleanout.',
  alternates: { canonical: `${SITE_URL}/markets/king-of-prussia-pa/inherited-property` },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to complete probate before selling an inherited King of Prussia property?',
    answer:
      "In most cases, yes. If the property was titled solely in the deceased's name, it passes through the estate administration process at the Montgomery County Register of Wills, located at One Montgomery Plaza, 4th Floor, 425 Swede Street, Norristown PA 19401. Phone: 610-278-3400. If the property was jointly titled with right of survivorship, it transfers automatically without probate. A PA real estate attorney can clarify your specific situation quickly.",
  },
  {
    question: 'Where do I file for probate in Montgomery County PA?',
    answer:
      'Probate for King of Prussia and all of Montgomery County is handled by the Montgomery County Register of Wills and Clerk of Orphans\' Court, One Montgomery Plaza (4th Floor), 425 Swede Street, Norristown PA 19401. Hours are Monday through Friday, 8:30 AM to 4:15 PM (no walk-ins after 3:30 PM). Phone: 610-278-3400. Email: ROWSupport@montgomerycountypa.gov.',
  },
  {
    question: 'Can I enter a purchase agreement before probate is finished?',
    answer:
      "Yes. Once Letters Testamentary or Letters of Administration are issued by the Montgomery County Register of Wills, the executor has legal authority to sign a real estate purchase agreement. We can enter a contract and then close once those letters are in hand — you don't need to wait for the entire estate to settle. For families with no other disputes, this process often takes weeks, not months.",
  },
  {
    question: 'What if multiple heirs need to agree on the sale?',
    answer:
      "All beneficiaries with ownership interest must consent. If heirs can't agree, the executor may need to petition the Orphans' Court. In practice, most families reach agreement when the alternative is ongoing property taxes, insurance, and maintenance on a home nobody wants to keep — especially on an older KOP split-level that needs work.",
  },
  {
    question: 'Do we have to clean out the house before selling?',
    answer:
      "No. Leave whatever you don't want. We purchase properties in as-is condition, contents included. Inherited King of Prussia homes often have decades of belongings — we handle the cleanout after closing. Take what matters and leave the rest.",
  },
  {
    question: 'Can I sell remotely if I live outside Pennsylvania?',
    answer:
      'Yes. Many of our inherited property transactions involve out-of-state heirs. Closing can be handled through a title company, and you can sign documents remotely. We coordinate with your PA title company and estate attorney to make the process straightforward regardless of where you live.',
  },
];

const pageUrl = `${SITE_URL}/markets/king-of-prussia-pa/inherited-property`;

export default function KopInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        kingOfPrussiaLocalBusinessSchema,
        articleSchema('Selling an Inherited Property in King of Prussia, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/king-of-prussia-hero.jpg"
          alt="King of Prussia PA home — sell inherited property for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/king-of-prussia-pa" className="hover:text-white">King of Prussia</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Inherited House in King of Prussia, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You inherited a property in King of Prussia or Montgomery County. Whether you live nearby or
              across the country, you don&apos;t have to deal with repairs, cleanouts, or months of showings.
              We buy inherited properties as-is and close in 7–14 days.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/king-of-prussia-pa" />
          </div>
        </div>
      </section>

      {/* VIDEO PLACEHOLDER */}
      {/* <VideoEmbed src="..." title="Selling an Inherited Property in King of Prussia" poster="..." subtitle="..." /> */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">What Most Families Want to Know First</h2>
            <p className="text-gray-700 text-sm">
              You don&apos;t have to clean it out. You don&apos;t have to repair anything. You don&apos;t have to be in
              King of Prussia to close. The biggest questions are usually about probate — and most estates in
              Montgomery County move faster than families expect once Letters Testamentary are issued.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              King of Prussia Inherited Property — Common Situations We Handle
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Aging split-level or colonial that needs work',
                  desc: "KOP's established neighborhoods have significant 1950s–1970s housing stock. These homes often need a new roof, updated HVAC, kitchen and bath work — sometimes $60,000–$100,000 before they compete at retail prices. We buy as-is. No renovation required.",
                },
                {
                  title: 'Out-of-state heirs',
                  desc: "You live in another state and inherited a King of Prussia property. Managing a traditional sale from a distance — contractors, cleanouts, showings, open houses — is a logistical challenge on top of an already difficult situation. We handle the property from here. You can close remotely.",
                },
                {
                  title: 'Multiple heirs who need to agree',
                  desc: "You and siblings or other family members inherited the house together. Everyone has to sign off. We're experienced with multi-heir situations and work with estate attorneys to get everyone to the closing table efficiently.",
                },
                {
                  title: 'Estate still in probate',
                  desc: 'We can enter a purchase agreement now and close once Letters Testamentary are issued by the Montgomery County Register of Wills. No need to wait for the full estate settlement — just the authority to sell.',
                },
                {
                  title: 'Back taxes or liens on the property',
                  desc: 'Back taxes and liens are paid at closing from proceeds. They don\'t prevent the sale. We work through the title company to clear any encumbrances before transfer.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Montgomery County Probate — The Basics</h2>
            <p className="text-gray-700 mb-4">
              If the property was titled solely in the deceased&apos;s name, it goes through probate at the
              Montgomery County Register of Wills. Here&apos;s what the process typically looks like for
              a King of Prussia estate:
            </p>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  label: 'File for probate at Montgomery County Register of Wills',
                  detail: 'One Montgomery Plaza, 4th Floor, 425 Swede Street, Norristown PA 19401. Phone: 610-278-3400. The executor named in the will files for Letters Testamentary. An E-Filing portal is available at webapp.montcopa.org/ROWEFiling.',
                },
                {
                  step: '2',
                  label: 'Letters Testamentary are issued',
                  detail: 'Once issued, the executor has legal authority to manage and sell estate property. This can happen in days to a few weeks depending on the complexity of the estate and court scheduling.',
                },
                {
                  step: '3',
                  label: 'Executor signs the purchase agreement',
                  detail: 'With Letters Testamentary in hand, the executor signs the real estate contract on behalf of the estate. The estate sells the property — not individual heirs.',
                },
                {
                  step: '4',
                  label: 'Close with a PA title company',
                  detail: 'Closing is handled by a licensed Pennsylvania title company. Proceeds go to the estate account for distribution according to the will or PA intestate succession law.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-gray-500">
              <strong>Source:</strong>{' '}
              <a
                href="https://www.montgomerycountypa.gov/202/Register-of-Wills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Montgomery County Register of Wills — montgomerycountypa.gov/202/Register-of-Wills
              </a>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on the Inherited Property"
            subheadline="No cleanup, no repairs, no showings. We work around estate timelines."
            sourcePage="/markets/king-of-prussia-pa"
          />

          <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Property in Montgomery County" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/king-of-prussia-pa/probate" className="text-brand-primary hover:underline">
                Probate Sales in King of Prussia
              </Link>{' '}
              ·{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">
                Inherited Property Guide (PA)
              </Link>{' '}
              ·{' '}
              <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">
                Sell Your King of Prussia House
              </Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
