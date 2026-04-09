import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Us vs. HomeVestors (We Buy Ugly Houses) — Which Is Better?',
  description:
    'Comparing USA Home Buyers vs. HomeVestors / We Buy Ugly Houses. Local direct buyer vs. franchise model — fees, offers, service, and who actually serves Central PA.',
  alternates: { canonical: `${SITE_URL}/compare/usa-home-buyers-vs-homevestors` },
};

const COMPARISON_ROWS = [
  { label: 'Business model', cashBuyer: 'Direct local buyer — one company', traditional: 'Franchise system — you deal with a local franchisee' },
  { label: 'Who makes decisions', cashBuyer: 'Decision-maker is in the room', traditional: 'Franchisee may need corporate approval' },
  { label: 'Brand consistency', cashBuyer: 'Direct accountability to you', traditional: 'Quality varies by franchisee' },
  { label: 'Fees to seller', cashBuyer: 'Zero — no fees or commissions', traditional: 'Varies by franchisee — some charge fees' },
  { label: 'Offer process', cashBuyer: 'Single walkthrough, 24-hour offer', traditional: 'Similar — in-person walkthrough' },
  { label: 'Home condition', cashBuyer: 'Any condition — as-is', traditional: 'As-is — similar positioning' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '7-30 days — varies by franchisee' },
  { label: 'Transparency', cashBuyer: 'Local, accountable, direct', traditional: 'Franchise layer adds distance' },
  { label: 'Service area', cashBuyer: 'Harrisburg PA, Allentown PA, Central PA', traditional: 'Varies — franchise coverage inconsistent' },
];

const FAQ_ITEMS = [
  {
    question: 'What is HomeVestors / We Buy Ugly Houses?',
    answer:
      'HomeVestors is a franchise system that licenses the "We Buy Ugly Houses" brand to independently-owned franchise operators. When you call HomeVestors, you\'re actually dealing with a local franchisee who purchased the rights to use the brand. Quality, offers, and service vary significantly from franchisee to franchisee.',
  },
  {
    question: 'Does HomeVestors serve Harrisburg PA and Allentown PA?',
    answer:
      'HomeVestors has franchise operations in some Pennsylvania markets, but coverage and active buyers in specific areas like Harrisburg and Allentown varies. The franchise model means there may or may not be an active local franchisee in your specific area at any given time.',
  },
  {
    question: 'Are HomeVestors offers lower than other cash buyers?',
    answer:
      'HomeVestors is generally known as a deeply discounted buyer — the "Ugly Houses" brand signals they\'re buying heavily distressed properties at significant discounts. Their franchise model also means the franchisee must generate profit after paying franchise royalties, which can affect offers. We encourage you to get multiple offers and compare.',
  },
  {
    question: 'What\'s the difference between a franchise cash buyer and a direct buyer?',
    answer:
      'A franchise buyer (like HomeVestors) operates under a national brand with standardized processes, royalty payments to the franchisor, and variable quality by location. A direct local buyer (like USA Home Buyers) is accountable only to you — no franchisor overhead, no royalties, and direct decision-making authority on the spot.',
  },
  {
    question: 'Why does the franchise model matter to me as a seller?',
    answer:
      'When you deal with a direct buyer, the person who walks through your home has the authority to make you an offer and commit to closing. With a franchise model, that person may need to seek approval from corporate guidelines, which can add delay or reduce offer flexibility. You also have a clearer picture of who you\'re dealing with.',
  },
  {
    question: 'Should I get multiple cash offers?',
    answer:
      'Yes, always. Getting offers from multiple buyers — whether franchise or direct — gives you a baseline for comparison. We encourage you to get our offer alongside any others you\'re considering. We don\'t ask for exclusivity before you decide, and we don\'t use high-pressure tactics to rush your decision.',
  },
];

const pageUrl = `${SITE_URL}/compare/usa-home-buyers-vs-homevestors`;

export default function VsHomeVestorsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        articleSchema('USA Home Buyers vs. HomeVestors (We Buy Ugly Houses) — Direct Comparison', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/" className="hover:text-white">USA Home Buyers</Link> › Compare
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              USA Home Buyers vs. HomeVestors (We Buy Ugly Houses)
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Both are cash buyers. But a local direct buyer and a national franchise model are fundamentally
              different in how they operate, who you deal with, and what you can expect.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Get a Direct Offer: {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/compare/usa-home-buyers-vs-homevestors" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Key Difference</h2>
            <p className="text-gray-700 text-sm">
              HomeVestors is a franchise. The person you deal with is an independent business owner who
              paid for the right to use the &quot;We Buy Ugly Houses&quot; brand. Quality, offers, and service
              vary significantly by location and franchisee. USA Home Buyers is a direct buyer —
              the decision-maker is the person who walks through your home. No franchise overhead,
              no corporate approval chain, direct accountability to you.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Understanding the Franchise Model</h2>
            <p className="text-gray-700 mb-4">
              HomeVestors has grown to hundreds of franchise locations nationally by licensing the &quot;We Buy Ugly
              Houses&quot; brand to local investors. The model works like this:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">What the franchise model means</h3>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• The local franchisee pays royalties to HomeVestors corporate</li>
                  <li>• Those costs are factored into their offer math</li>
                  <li>• Quality and reliability vary by franchisee</li>
                  <li>• The brand is national; the operator is local — and may be new</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">What direct buying means</h3>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• No franchise royalties built into our cost structure</li>
                  <li>• The person making the offer has full decision authority</li>
                  <li>• We&apos;re accountable directly to every seller we work with</li>
                  <li>• Our reputation in Harrisburg and Allentown is our only brand</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Side-by-Side Comparison</h2>
            <ComparisonTable rows={COMPARISON_ROWS} />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">When Does Each Option Make Sense?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-brand-light rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-3 text-sm">USA Home Buyers makes sense when:</h3>
                <ul className="text-xs text-gray-700 space-y-2">
                  <li>✓ You want to deal with one person who can make a decision</li>
                  <li>✓ Your property is in Harrisburg, Allentown, or Central PA</li>
                  <li>✓ You want zero fees and full closing cost coverage</li>
                  <li>✓ You need speed — 7 days or fewer</li>
                  <li>✓ Your property has significant issues (violations, probate, tenants)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-600 mb-3 text-sm">HomeVestors might make sense when:</h3>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• You&apos;re outside our current service area</li>
                  <li>• You want to compare multiple offers from different buyers</li>
                  <li>• A HomeVestors franchisee has strong local reviews in your specific market</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">We always recommend getting multiple offers — including ours — and comparing net proceeds.</p>
              </div>
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Direct Cash Offer — No Franchise, No Middleman"
            subheadline="We serve Harrisburg and Allentown directly. Written offer in 24 hours."
            sourcePage="/compare/usa-home-buyers-vs-homevestors"
          />

          <FAQSection items={FAQ_ITEMS} heading="USA Home Buyers vs. HomeVestors — Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/compare/usa-home-buyers-vs-opendoor" className="text-brand-primary hover:underline">USA Home Buyers vs. Opendoor</Link>{' '}
              ·{' '}
              <Link href="/compare/usa-home-buyers-vs-listing-with-agent" className="text-brand-primary hover:underline">Cash Offer vs. Listing with an Agent</Link>{' '}
              ·{' '}
              <Link href="/resources/are-cash-home-buyers-legit" className="text-brand-primary hover:underline">Are Cash Buyers Legit?</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
