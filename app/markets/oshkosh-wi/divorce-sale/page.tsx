/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Oshkosh WI',
  description:
    'Sell your Oshkosh WI house fast during divorce. WI marital property (Wis. Stat. Ch. 766), equal-division (§ 767.61), Winnebago County Family Court. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Oshkosh house while divorce is pending?',
    answer: 'Yes, with both spouses\' agreement or a Winnebago County Family Court order authorizing the sale. Wisconsin is a marital property state (Wis. Stat. Ch. 766) — in most cases, the family home is marital property requiring both spouses to sign at closing. A voluntary sale agreement between both parties is the fastest path. If your spouse is refusing to cooperate, a Winnebago County Family Court judge can issue an order compelling the sale or authorizing one spouse to execute the transaction. Call 888-440-5250.',
  },
  {
    question: 'How does Wisconsin\'s marital property law affect a home sale during divorce?',
    answer: 'Wisconsin is a marital property state under Wis. Stat. Ch. 766 — it operates similarly to community property states in that property acquired during marriage is presumptively marital property owned equally by both spouses. Real estate purchased during marriage is marital property regardless of which spouse\'s name is on the deed. Under § 767.61, the court begins with an equal-division presumption for marital property division, though factors like length of marriage, each spouse\'s contribution, and the needs of any children can alter the division. A cash sale at an agreed price gives both parties a concrete number and eliminates the uncertainty of a retail sale that might fall through.',
  },
  {
    question: 'What if we disagree on the sale price during divorce?',
    answer: 'A third-party cash offer from USA Home Buyers removes the subjectivity from the negotiation. Both parties receive a written offer with a specific number — there\'s no dispute about what the home "should" sell for. Both spouses can independently evaluate the offer, consult their attorneys, and accept it or not. Many Oshkosh divorce attorneys find that a concrete cash offer shortens negotiations that might otherwise drag on for months over listing price, repair requests, or market conditions.',
  },
  {
    question: 'How long does Winnebago County Family Court divorce take?',
    answer: 'Wisconsin has a 120-day mandatory waiting period from the date the divorce petition is served on the respondent before a final divorce judgment can be entered — this is a statutory requirement and cannot be waived. Uncontested divorces in Winnebago County often resolve within 3-6 months. Contested divorces, particularly those involving property division disputes, can run 12-24 months or longer. A cash sale completed before the divorce is final typically requires both spouses\' signatures at closing, which a cooperative agreement can facilitate quickly.',
  },
  {
    question: 'Do both spouses need to sign to sell the Oshkosh house?',
    answer: 'In virtually all cases, yes — both spouses must sign the deed to transfer title to a buyer if the property is marital property. Even if only one spouse is on the mortgage or deed, Wisconsin\'s marital property law under Wis. Stat. Ch. 766 may give the other spouse a legal interest requiring their signature. A title company in Oshkosh will require both signatures or a court order specifically authorizing one spouse to act alone. USA Home Buyers handles these coordinated closings regularly — both spouses can sign at their convenience, even separately.',
  },
];

export default function OshkoshDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House During Divorce in Oshkosh WI — Winnebago County Marital Property Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/oshkosh-wi-hero-640.jpg 640w, /images/optimized/oshkosh-wi-hero-828.jpg 828w, /images/optimized/oshkosh-wi-hero-1080.jpg 1080w, /images/optimized/oshkosh-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/oshkosh-wi-hero-1200.jpg"
            alt="Oshkosh WI home — Sell During Divorce"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Oshkosh WI House During Divorce — Fast, Clean, Certain
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Sell an Oshkosh WI home during divorce — both spouses must agree or Winnebago County Family Court orders the sale. Wisconsin is a marital property state (Wis. Stat. Ch. 766); equal-division presumption under § 767.61. One cash offer gives both parties a concrete number, cuts negotiation, and closes in 7-14 days. No repairs, no agent fees. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Dividing a Winnebago County home during divorce is cleaner with one cash offer, one closing, and proceeds split per your agreement or court order.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Oshkosh Divorce Sale Cash Offer" subheadline="Written offer in 24 hours. We coordinate both-spouse closings." sourcePage="/markets/oshkosh-wi/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Marital Property Law — What Oshkosh Divorce Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin is one of a handful of states that operates a marital property system — codified in Wis. Stat. Ch. 766 — that functions similarly to community property regimes in states like California and Arizona. The foundational rule: property acquired during marriage is marital property, owned equally by both spouses regardless of title. An Oshkosh home purchased during the marriage is marital property whether the deed says both names or only one.
          </p>
          <p className="text-gray-700 mb-4">
            For sellers navigating divorce, this means both spouses have a legal interest in the family home — and both must participate in any sale. Wisconsin law does not allow one spouse to unilaterally sell marital real property without the other's consent or a court order. This applies equally to the Sawyer Creek suburban ranch, the Algoma mid-century colonial, the Lake Shore Victorian, and every other residential property in Winnebago County.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Equal-Division Presumption — Wis. Stat. § 767.61</h3>
          <p className="text-gray-700 mb-4">
            Section 767.61 of Wisconsin Statutes establishes the equal-division presumption for marital property in divorce. The court begins with a 50/50 split of marital assets and debts. Either spouse can request a deviation from equal division by demonstrating specific factors — length of the marriage, each spouse's contribution to the marital estate, the economic circumstances of each spouse at the time of divorce, any agreements between the parties (including prenuptial or marital property agreements), and the tax consequences of the proposed division.
          </p>
          <p className="text-gray-700 mb-4">
            In practice, most Winnebago County divorce property settlements fall close to the equal-division starting point — particularly for the family home, which is typically the largest single marital asset. A cash sale at an agreed price makes the math straightforward: both parties know the net proceeds, subtract any mortgage payoff and closing costs, and divide the remainder per their agreement or the Winnebago County Family Court order.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Winnebago County Family Court — Divorce Timelines</h3>
          <p className="text-gray-700 mb-4">
            Divorce petitions in Winnebago County are filed with the Winnebago County Circuit Court, Family Court Division — 415 Jackson Street, Oshkosh WI 54901. Wisconsin imposes a mandatory 120-day waiting period from service of the divorce petition before a final judgment can be entered (Wis. Stat. § 767.335). This minimum is non-waivable.
          </p>
          <p className="text-gray-700 mb-4">
            Uncontested divorces — where both parties agree on all issues including property division — can often be finalized within 4-6 months total (120-day wait plus processing time). Contested divorces in Winnebago County, especially those involving property division disputes, guardian ad litem appointments for children, or complex asset valuation, routinely run 12-24 months. The longer the divorce proceedings, the longer both parties carry the costs of maintaining the family home — mortgage, property taxes, insurance, utilities.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale that both parties agree to, executed before or during the divorce proceedings, can eliminate the ongoing house-carrying cost dispute and give both parties proceeds to establish separate housing sooner. Many Winnebago County divorce attorneys recommend early resolution of the family home as a way to simplify the remaining divorce proceedings.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How a Cash Sale Simplifies an Oshkosh Divorce Property</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">One Number Cuts the Negotiation</h3>
          <p className="text-gray-700 mb-4">
            Divorce property negotiations often stall on a fundamental problem: spouses have wildly different views on what the house is worth. One wants to list at $270,000, the other at $240,000. One wants to make repairs first, the other wants to sell as-is. One wants to stay in the house until the market improves, the other needs proceeds immediately. A written cash offer from USA Home Buyers replaces all of that with one number, in writing, available in 24 hours.
          </p>
          <p className="text-gray-700 mb-4">
            Both spouses — and their attorneys — can evaluate the same concrete offer. There's no dispute about what the home would sell for if properly marketed: USA Home Buyers is a real buyer with a real number. Many Winnebago County divorcing couples find that a firm cash offer resolves the property negotiation in a single conversation that months of back-and-forth couldn't close.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">No Repair Fights Before Listing</h3>
          <p className="text-gray-700 mb-4">
            A retail listing requires a unified decision from both parties about what repairs to make before listing, who pays for them, and whether either spouse has the cash or credit to fund them during divorce proceedings when finances are often constrained. A cash sale to USA Home Buyers eliminates this entirely — we buy as-is, and the offer already prices in any condition issues. No joint repair decisions, no joint contractor coordination, no joint expenditure of marital funds.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Both Spouses Can Sign Separately</h3>
          <p className="text-gray-700 mb-4">
            USA Home Buyers can accommodate signings where both spouses aren't in the same room — or even in the same city. We work with Oshkosh title companies that can coordinate split closings, separate notarizations, or remote signing arrangements. If one spouse has already moved out of Oshkosh (common when one party relocates to another Fox Cities community or out of state during proceedings), we can structure the closing to minimize coordination friction.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Oshkosh Divorce Property Scenarios</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Algoma or Fair Acres Family Home</h3>
          <p className="text-gray-700 mb-4">
            Established Oshkosh residential neighborhoods in Algoma and Fair Acres — mid-century ranches and colonials in the $190K-$260K range — are where many Oshkosh family homes sit. These properties typically have clean title, moderate condition, and equity above the mortgage. In a divorce, the equity needs to be liquidated and divided. A cash sale at 70-80% of FMV delivers net proceeds faster than a retail listing's 61-day median DOM plus closing contingencies.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">EAA Area Rental or STR Property</h3>
          <p className="text-gray-700 mb-4">
            Some Oshkosh divorcing couples own investment properties — EAA AirVenture-area short-term rentals, near-campus Merritt rentals — that complicate the divorce property division. Occupied investment properties require tenant handling and often generate income that both parties want to claim. We buy tenant-occupied Oshkosh investment properties in divorce situations, stepping into the landlord role so both parties can access sale proceeds rather than continuing to co-manage a rental through divorce proceedings.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Lake Shore Victorian in Estate-Sale Condition</h3>
          <p className="text-gray-700 mb-4">
            A high-value Lake Shore Victorian in deferred-maintenance condition presents a specific challenge in divorce: one party may want to fund a renovation to maximize sale proceeds; the other may not have the resources or inclination to do so. A cash sale resolves this immediately — we buy as-is, and neither party has to invest additional money or time into the property. The offer reflects the current condition, not a hypothetical renovated value.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Divorce Property Timeline and What It Costs</h2>
          <p className="text-gray-700 mb-4">
            Every day a jointly-owned Oshkosh home sits unsold during divorce proceedings is a day both parties continue sharing a financial obligation — mortgage, property taxes, homeowner's insurance, and utility bills. On a $211,000 median Oshkosh home with a $150,000 mortgage balance at 6.5% interest, the monthly carrying cost is roughly $1,800-$2,200 in principal, interest, taxes, and insurance. Over a contested 18-month divorce, that's $27,000-$39,600 in joint carrying costs that both parties are effectively splitting while arguing about the property.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale that closes in 7-14 days stops that clock. The net proceeds are distributed per the Winnebago County Family Court order or mutual agreement. Both parties can move forward financially rather than treading water while the litigation runs.
          </p>
          <p className="text-gray-700 mb-4">
            Attorney fees also accumulate during property disputes. Oshkosh-area family law attorneys charge $200-$400 per hour for contested proceedings. A property negotiation that could have resolved in one conversation with a concrete cash offer instead running through months of attorney back-and-forth can easily generate $5,000-$15,000 in combined attorney fees — money that comes directly out of the marital estate that both parties were trying to maximize.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Wisconsin Marital Property Agreements and Prenuptials</h2>
          <p className="text-gray-700 mb-4">
            Some Oshkosh couples entered the marriage with a marital property agreement (sometimes called a prenuptial agreement) that alters the default Wisconsin marital property rules under Wis. Stat. Ch. 766. A valid marital property agreement can designate certain properties as individual rather than marital, allocate specific assets to one spouse, or establish a different division mechanism than the § 767.61 equal-division default.
          </p>
          <p className="text-gray-700 mb-4">
            If a marital property agreement exists, its terms govern the home sale before the statutory default rules apply. USA Home Buyers can work within whatever ownership structure your agreement establishes — if the home is legally one spouse's individual property, only that spouse signs at closing. If it's joint marital property per the agreement, both sign. The transaction follows the legal reality of your specific situation.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">What If One Spouse Wants to Keep the Oshkosh House?</h2>
          <p className="text-gray-700 mb-4">
            Under Wisconsin marital property law and § 767.61, the court can award the family home to one spouse in lieu of selling it — typically when there are minor children and continuity of school and community is a factor in the court's best-interest determination. If one spouse is awarded the home, they typically must refinance the mortgage to remove the other spouse from liability, and provide the other spouse with their share of equity through other marital assets or a cash payment.
          </p>
          <p className="text-gray-700 mb-4">
            For couples where one party wants to keep the home but can't refinance at current rates — particularly common when the original mortgage was obtained at historically low rates and refinancing would significantly increase the monthly payment — a buyout may not be financially viable. In those situations, a cash sale becomes the default resolution. USA Home Buyers makes this process efficient: one offer, one closing, clear proceeds for division.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Oshkosh Divorce Sale After the Final Decree</h2>
          <p className="text-gray-700 mb-4">
            Some couples complete their divorce before the family home is sold — particularly when one spouse lived in the home through the proceedings and the other relocated. After the final divorce decree, both ex-spouses technically remain on the title and must cooperate to sell. If the decree ordered the property sold within a certain time frame and one party is not cooperating, the other can return to Winnebago County Family Court to enforce the sale order.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers handles post-decree Oshkosh property sales regularly. Both ex-spouses can sign at different times and locations — we accommodate split closings, remote signings, and any arrangement that keeps the transaction moving. We've seen every variation of the two-spouse coordination challenge and know how to close through them.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Property Sale in Oshkosh WI" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Back to Oshkosh WI' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/oshkosh-wi/probate', label: 'Probate Sale' },
              { href: '/markets/oshkosh-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/sell-house-fast-wisconsin', label: 'WI Legal Guide' },
              { href: '/markets/kenosha-wi', label: 'Kenosha WI Market' },
              { href: '/markets/racine-mount-pleasant-wi', label: 'Racine WI Market' },
              { href: '/markets/oshkosh-wi/faq', label: 'Oshkosh WI FAQ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Oshkosh WI Home During Divorce?" sourcePage="/markets/oshkosh-wi/divorce-sale" />
      </div>
    </>
  );
}
