import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, harrisburgLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Selling Your Harrisburg PA House — FAQ',
  description:
    'Answers to the most common questions about selling a house fast in Harrisburg PA. Cash offers, timelines, as-is sales, closing costs, and Dauphin County specifics.',
  alternates: { canonical: `${SITE_URL}/markets/harrisburg-pa/faq` },
};

const FAQ_ITEMS = [
  {
    question: 'How does the cash home buying process work in Harrisburg?',
    answer:
      'It\'s a 4-step process: (1) You contact us with basic details about your property. (2) We do a brief walkthrough — typically 20-30 minutes. (3) We present a written cash offer within 24 hours. (4) If you accept, we open title and set a closing date — typically 7-14 days later. You don\'t pay any fees or commissions. We cover all closing costs.',
  },
  {
    question: 'How quickly can you close on a Harrisburg house?',
    answer:
      'Our standard timeline is 7-14 days from accepted offer to closing. If you need more time — for example, to move or sort through belongings — we can close on your schedule, up to 60 days. If you\'re facing a foreclosure deadline or need to close faster, call us — we\'ve closed in as few as 5 days when needed.',
  },
  {
    question: 'Do I need to make repairs before you buy my house?',
    answer:
      'No. We buy houses in as-is condition — foundation issues, roof problems, outdated systems, fire damage, water damage, code violations, full of belongings. You don\'t fix a single thing. Our offer reflects the property\'s current condition and factors in what it will cost us to bring it up to standard.',
  },
  {
    question: 'What will you actually pay for my Harrisburg house?',
    answer:
      'We typically pay 70-80% of fair market value for properties in as-is condition. For a Harrisburg home valued at $145,000 in market-ready condition, that means a cash offer of $100,000-$116,000. This reflects that we\'re taking on the repair costs, the holding costs, and the risk of a renovation project. The comparison that matters: what\'s your net after agent commissions (5-6%), transfer tax (1%), closing costs, repairs, and 60+ days of carrying costs? Often the gap is smaller than it looks.',
  },
  {
    question: 'What does "no fees or commissions" mean?',
    answer:
      'When we buy your house, there is no real estate agent involved on your side — which means no 3% seller\'s agent commission. We also cover all standard closing costs that a seller would normally pay: title insurance, transfer tax on our side, settlement fees. The number we offer you is the number you receive at closing. No deductions.',
  },
  {
    question: 'Do you buy houses in all Harrisburg neighborhoods?',
    answer:
      'Yes. We buy throughout Harrisburg city — Allison Hill, Midtown, Uptown, Penbrook — and throughout Dauphin County: Steelton, Paxtang, Swatara Township, Hummelstown, Hershey. We also buy in Cumberland County: Camp Hill, Mechanicsburg, Carlisle.',
  },
  {
    question: 'Can you buy my house if I\'m behind on the mortgage?',
    answer:
      'Yes. We buy pre-foreclosure properties regularly. If you\'re behind on payments, the mortgage gets paid off at closing from the sale proceeds. If your home has more equity than what you owe (including arrears), you walk away with the difference. If you\'re facing a Dauphin County sheriff sale, call us immediately — we can often close before the sale date.',
  },
  {
    question: 'Can you buy a house with tenants in it?',
    answer:
      'Yes. You don\'t need to evict the tenant before selling. The lease transfers to us at closing. We handle the tenant situation from that point forward. This is common in Harrisburg\'s rental-heavy market.',
  },
  {
    question: 'What if the house is in probate?',
    answer:
      'We buy probate properties. Once the Dauphin County Register of Wills issues Letters Testamentary, the executor can sign a purchase agreement. We work with estate attorneys regularly and know how to coordinate a closing around the estate administration process.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer:
      'Yes. We\'re a licensed real estate investment company operating in Pennsylvania. We use standard Pennsylvania real estate contracts and close through licensed Pennsylvania title companies. You can see our reviews and verify our standing. If you\'d like to speak with someone before proceeding, call us at any time.',
  },
  {
    question: 'What happens at closing?',
    answer:
      'Closing takes place at a local title company in Harrisburg. Both parties (or their representatives) sign documents, the title company pays off your mortgage (if any), and the remaining proceeds are paid to you — typically via wire transfer on the same day. The whole process takes 30-60 minutes. You hand over the keys and you\'re done.',
  },
  {
    question: 'Do I have to accept your offer?',
    answer:
      'No. Getting an offer costs you nothing and commits you to nothing. Many people get our offer to understand what the cash sale option looks like, then decide whether to list on the MLS or sell to us. We have no hard-sell approach — if a traditional sale makes more sense for you, we\'ll tell you.',
  },
];

const pageUrl = `${SITE_URL}/markets/harrisburg-pa/faq`;

export default function HarrisburgFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[
        harrisburgLocalBusinessSchema,
        articleSchema('Selling Your Harrisburg PA House — Frequently Asked Questions', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/harrisburg-pa" className="hover:text-white">Harrisburg</Link> › FAQ
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your Harrisburg House — Common Questions Answered
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Everything you want to know before getting a cash offer on your Harrisburg or Dauphin County home.
              No fluff, just straight answers.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Still have questions? Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/harrisburg-pa/faq" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0fa/ez3GzE01xhle-dHlM87zy_harrisburg-faq.mp4"
        title="Frequently Asked Questions — Harrisburg Home Sales"
        poster="/images/video-posters/harrisburg-faq-poster.jpg"
        subtitle="Hear answers to the most common questions about selling your Harrisburg home for cash"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">I get a lot of the same questions from Harrisburg homeowners thinking about selling to a cash buyer, so let me answer the most common ones right here. I&apos;m with USA Home Buyers.</p>
            <p className="mb-3">How fast do we close? Our standard is 7 to 14 days after you accept the offer. Our fastest close in the Harrisburg area was 5 days. If you need more time, we work with your timeline.</p>
            <p className="mb-3">What do we pay? We pay 70 to 80 percent of fair market value. No agent commissions — that&apos;s typically 5 to 6 percent saved. No closing costs — we cover them. No repair expenses.</p>
            <p className="mb-3">Do we buy houses in bad condition? Yes. We buy as-is in any condition — fire-damaged, mold, structural issues, hoarding situations, tenant damage. Whatever condition your Harrisburg property is in, we&apos;ll make you an offer.</p>
            <p className="mb-3">What about liens or back taxes? Those get paid at closing from proceeds. You don&apos;t need cash upfront in most cases. The title company handles it.</p>
            <p className="mb-3">What areas do we serve? All of Harrisburg and Dauphin County — Camp Hill, Mechanicsburg, Carlisle, Steelton, Lower Paxton Township, Swatara Township, and surrounding communities.</p>
            <p className="mb-3">Any other questions? Call us at 888-440-5250. We&apos;re real people, we answer the phone, and we&apos;ll give you straight answers.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Version</h2>
            <p className="text-gray-700 text-sm">
              We buy houses in Harrisburg as-is, for cash, close in 7-14 days, with no fees or commissions.
              You don&apos;t fix anything. You don&apos;t pay anything. We cover all closing costs.
              The only question is whether our offer is worth more to you than what you&apos;d net from
              a traditional sale after commissions, repairs, and time.
            </p>
          </div>

          <FAQSection items={FAQ_ITEMS} heading="All Your Questions — Selling a Harrisburg House" />

          <CashOfferForm
            variant="inline"
            headline="Ready for a No-Obligation Cash Offer?"
            subheadline="Written offer in 24 hours. You decide if it works for you."
            sourcePage="/markets/harrisburg-pa/faq"
          />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Sell Your Harrisburg House</Link>{' '}
              ·{' '}
              <Link href="/resources/how-the-process-works" className="text-brand-primary hover:underline">How the Process Works</Link>{' '}
              ·{' '}
              <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">Cash Offer vs. MLS Listing</Link>{' '}
              ·{' '}
              <Link href="/resources/are-cash-home-buyers-legit" className="text-brand-primary hover:underline">Are Cash Buyers Legit?</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
