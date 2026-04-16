/**
 * Blog Post: What Happens If You Don't Pay Property Taxes in Pennsylvania?
 * Slug: property-taxes-pennsylvania-what-happens
 * Published: 2026-04-16
 * Primary keyword: what happens if you don't pay property taxes in Pennsylvania
 */

import type { BlogPostContent } from './probate-timeline-pennsylvania';

const content: BlogPostContent = {
  tldr: `In Pennsylvania, unpaid property taxes follow a multi-year escalation process before you lose your home. Year 1: taxes go delinquent, penalties accrue. Year 2: the county Tax Claim Bureau takes over. After 2 years delinquent: the property can be sold at an Upset Sale. After Upset Sale with no redemption: the property can proceed to Judicial Sale and title clears. The good news: you can sell your home at any point in this process — right up until the judicial sale — and use the proceeds to satisfy the tax lien. A cash buyer can close in 7-14 days.`,

  sections: [
    {
      heading: 'Pennsylvania\'s Tax Collection System — How It Actually Works',
      paragraphs: [
        'Pennsylvania property taxes are collected at three levels: county, municipal (township or borough), and school district. Each level has its own tax year and billing cycle. Most Pennsylvania municipalities bill school taxes in the fall and county/local taxes in the spring — though the specifics vary by county.',
        'The first-year collection is handled by your local elected tax collector (a separate position from county government in most of PA). If taxes go unpaid, they\'re returned to the county Tax Claim Bureau at the end of the collection year. Once a tax is "returned," the Tax Claim Bureau is legally responsible for collection — and the process gets more formal.',
        'According to the Pennsylvania Real Estate Tax Sale Law (72 P.S. § 5860.101 et seq.), counties have a structured multi-year process with specific notice requirements and sale procedures. This law governs what happens to delinquent properties — and it gives homeowners significant time and notice before the final step.',
      ],
    },
    {
      heading: 'Year by Year: What Happens When You Stop Paying PA Property Taxes',
      paragraphs: [
        'The timeline isn\'t arbitrary — Pennsylvania law dictates specific steps and timelines. Here\'s how it plays out:',
      ],
      table: {
        headers: ['Stage', 'Timing', 'What Happens', 'Interest/Penalty'],
        rows: [
          ['Taxes due', 'Year 1', 'Local tax collector sends bill. Discount period typically first few months.', 'None (discount period)'],
          ['Taxes become delinquent', 'Year 1 (after due date)', 'Penalties and interest begin accruing. Local collector pursues payment.', '10% penalty + 9% annual interest (varies by county)'],
          ['Returned to Tax Claim Bureau', 'December 31, Year 1', 'Unpaid taxes officially transferred to county Tax Claim Bureau.', 'Continuing interest + fees'],
          ['Tax Claim Bureau notice', 'Year 2', 'Bureau sends certified mail notice. You can still pay and clear the lien.', 'Additional bureau fees added'],
          ['Upset Sale listing', 'Year 2-3', 'Property listed for Upset Sale. Publication notice required. You must be personally notified.', 'Interest + all costs'],
          ['Upset Sale', 'September (most counties)', 'Public auction. Buyer takes property subject to existing mortgages and liens. Winning bid must cover all taxes.', 'Sale proceeds clear tax lien only'],
          ['Post-Upset Sale period', '1 year after Upset Sale (if unsold or redeemed)', 'If property didn\'t sell or was redeemed, it can proceed to Judicial Sale.', 'Continuing interest'],
          ['Judicial Sale / Repository Sale', 'Following year', 'Property sold free and clear of all liens (including mortgages). This is the end of the line.', 'Final — all liens extinguished'],
        ],
      },
      callout: {
        type: 'blue',
        title: 'The Critical Difference: Upset Sale vs. Judicial Sale',
        text: 'At an Upset Sale, a buyer takes the property subject to existing mortgages — the tax lien is cleared, but the mortgage follows the property. Most banks won\'t let this happen without their consent, so Upset Sales rarely transfer occupied properties with mortgages. At a Judicial Sale, a judge orders the sale free and clear of ALL liens — taxes, mortgages, everything. This is where you truly lose everything. The Judicial Sale is where you cannot come back from.',
      },
    },
    {
      heading: 'Pennsylvania\'s Right of Redemption',
      paragraphs: [
        'Pennsylvania provides a right of redemption after the Upset Sale. If your property is sold at Upset Sale, you have one year from the date of sale to redeem it — pay the full sale price plus interest and costs — and get your property back. This is a meaningful protection.',
        'However, there is no right of redemption after a Judicial Sale. Once a Judicial Sale is confirmed, title passes permanently to the buyer, free and clear of all prior liens. You cannot buy it back.',
        'The practical implication: the window to act is between delinquency and the Judicial Sale. Given the multi-year process, most homeowners have 3-5 years from first missing a payment before reaching the Judicial Sale stage. That\'s a long time — but it passes faster than people expect, especially when penalties and interest are compounding.',
      ],
    },
    {
      heading: 'What a Tax Lien Does to a Property Sale',
      paragraphs: [
        'A property tax lien doesn\'t stop you from selling — it just means the lien has to be paid off at closing. This is handled by the title company in the settlement statement.',
        'The process: the seller\'s attorney or title company orders a tax certification from the Tax Claim Bureau. The certification shows exactly how much is owed (base taxes, penalties, interest, and bureau fees). That amount is deducted from the seller\'s proceeds at closing, paid directly to the Tax Claim Bureau, and the lien is satisfied. The buyer gets clean title.',
        'Tax liens are "senior liens" in Pennsylvania — they take priority over mortgages and most other liens. At closing, they\'re paid first, before the mortgage lender gets their payoff. This is good for buyers (it means tax liens don\'t surprise them after closing); less exciting for sellers with large accumulated tax debts.',
        'According to the Pennsylvania Tax Claim Bureau Association, the full amount owed including penalties and interest must be paid to clear the lien — there is generally no "settling for less" with county tax authorities the way you might negotiate with other creditors.',
      ],
      callout: {
        type: 'amber',
        title: 'Owners Often Don\'t Know How Much They Owe',
        text: 'Tax lien balances grow faster than most people realize. A $3,000 annual tax bill that goes unpaid for 3 years becomes a lien of $9,000+ in base taxes, plus 10% penalties, plus 9% annual interest, plus bureau fees. By the time you\'re in the 3rd year, you may owe $13,000-$15,000 on what started as a $3,000 annual tax. Get a current payoff figure from your county Tax Claim Bureau before assuming you know what you owe.',
      },
    },
    {
      heading: 'Available Assistance Programs — Before You Lose the Property',
      paragraphs: [
        'Pennsylvania has two significant programs for homeowners struggling with property taxes:',
        'Property Tax/Rent Rebate Program (PTRR): Run by the PA Department of Revenue, this program provides rebates of up to $1,000 for homeowners 65+ or widows/widowers 50+ or permanently disabled, with income limits. According to revenue.pa.gov, the income threshold for 2026 eligibility is $35,000 for homeowners. This doesn\'t eliminate delinquent taxes, but reduces the ongoing burden.',
        'Homeowner Assistance Fund (HAF): Pennsylvania received federal HAF funding to help homeowners affected by COVID-19 hardship catch up on property taxes, mortgage payments, and utilities. As of 2026, check PHFA.org (Pennsylvania Housing Finance Agency) for current availability and eligibility.',
        'County Installment Plans: Most Pennsylvania county Tax Claim Bureaus will negotiate installment plans for delinquent taxes. Call your county bureau directly. Getting on a plan stops the escalation to sale and can freeze additional penalties while you pay down the balance.',
        'Senior Freeze (Act 1): For qualifying senior homeowners, Pennsylvania\'s Act 1 program freezes property assessments (and thus tax bills) at a set level, preventing increases. This doesn\'t help with existing delinquencies but can help prevent future ones from accumulating.',
      ],
    },
    {
      heading: 'Selling a House with Delinquent Taxes — The Cash Buyer Option',
      paragraphs: [
        'If you\'ve fallen behind on property taxes and need to sell — but you\'re worried the taxes owed will eat your equity — know that a cash buyer can often make this work.',
        'Cash buyers evaluate the property\'s as-is value, then factor in the payoff of all liens (including tax liens). The offer you receive reflects your actual equity: the cash offer minus the tax lien payoff minus any mortgage balance. If there\'s positive equity remaining, you walk away with it.',
        'If the tax liens and mortgage balance together exceed the property\'s value — negative equity — a cash buyer still may be able to help if you\'re pre-Judicial Sale. A short sale arrangement, where the tax authority and/or mortgage lender agree to accept less than full payoff, is sometimes an option. This requires negotiation and specialized help.',
        'We handle properties with delinquent taxes regularly across our Pennsylvania markets — Harrisburg, Allentown, Reading, Erie, Bethlehem, Lancaster, York. A tax lien is a payoff problem, not a "can\'t sell" problem, in most cases. Call us and we can walk through the actual numbers for your property.',
      ],
    },
  ],

  faq: [
    {
      question: 'How many years can you go without paying property taxes in Pennsylvania before losing your home?',
      answer: 'The timeline varies by county, but the typical sequence takes 3-5 years from first missing a payment to reaching a Judicial Sale (where you can permanently lose the property). Year 1: local collection. Year 2: Tax Claim Bureau. Year 2-3: listed for Upset Sale. If unsold at Upset Sale: eventually proceeds to Judicial Sale. There is a one-year redemption period after Upset Sale, but no redemption after Judicial Sale.',
    },
    {
      question: 'Will I get notice before my house is sold for back taxes?',
      answer: 'Yes. Pennsylvania law (72 P.S. § 5860.601) requires personal notice to the owner before an Upset Sale — typically by certified mail to the property address and any other known address. The sale must also be publicly advertised in local newspapers for a set period. Most counties notify owners multiple times before a sale. If you\'re not receiving mail at the property, notices may be going unread — which is how people miss the deadlines.',
    },
    {
      question: 'Can I sell my house if I have unpaid property taxes in Pennsylvania?',
      answer: 'Yes. A property tax lien doesn\'t prevent a sale — it just means the lien must be paid off from the proceeds at closing. The title company handles this: they get a payoff figure from the Tax Claim Bureau, deduct it from your proceeds, and pay it at closing. You receive whatever equity remains after the lien and any mortgage are paid.',
    },
    {
      question: 'What is the difference between an Upset Sale and a Judicial Sale in Pennsylvania?',
      answer: 'An Upset Sale transfers the property subject to existing mortgages and other liens — only the tax lien is cleared. If the property doesn\'t sell at Upset Sale (because the minimum bid must cover all taxes and few buyers want to assume an existing mortgage), it may proceed to Judicial Sale. A Judicial Sale, approved by a judge, sells the property free and clear of ALL liens — taxes, mortgages, everything. After a Judicial Sale is confirmed, you cannot get the property back.',
    },
    {
      question: 'Does Pennsylvania have any senior citizen property tax help?',
      answer: 'Yes. Pennsylvania offers the Property Tax/Rent Rebate Program for homeowners 65+ (or widows/widowers 50+, or permanently disabled) with income under $35,000. Rebates up to $1,000. Apply through the PA Department of Revenue. Pennsylvania also has the Senior Tax Freeze (Act 1) which can prevent assessment increases for qualifying seniors. Contact your county assessment office for local programs.',
    },
  ],

  relatedLinks: [
    { href: '/markets/harrisburg-pa/foreclosure', label: 'Avoiding foreclosure in Harrisburg' },
    { href: '/markets/allentown-pa/foreclosure', label: 'Foreclosure sale in Allentown' },
    { href: '/markets/reading-pa/foreclosure', label: 'Foreclosure sale in Reading' },
    { href: '/blog/sell-house-tax-lien-pennsylvania', label: 'Selling a PA Home with Tax Liens' },
    { href: '/blog/sell-house-foreclosure-pennsylvania', label: 'Selling in PA Foreclosure' },
  ],

  ctaHeadline: 'Delinquent Taxes on Your Pennsylvania Home?',
  ctaSubheadline: 'Tax liens are paid off at closing — you keep whatever equity remains. Written offer in 24 hours.',
};

export default content;
