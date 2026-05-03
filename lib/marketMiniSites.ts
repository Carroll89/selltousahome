import type {
  ResourceLink,
  SituationLink,
} from "@/components/market/MarketResourcesPage";

export type MiniSiteMarket = {
  slug: string;
  cityName: string;
  regionName: string;
  guideSlug: string;
  intro: string;
  hasFaq?: boolean;
  hasNeighborhoods?: boolean;
  hasPropertyLiens?: boolean;
  resourceLinks?: ResourceLink[];
  situationOverrides?: Partial<Record<string, Partial<SituationLink> | false>>;
};

const BASE_SITUATIONS = [
  {
    key: "foreclosure",
    label: "Facing Foreclosure",
    icon: "🏚️",
    desc: "Sell before the sheriff sale timeline creates more pressure. We close in 7–14 days to protect your equity.",
  },
  {
    key: "inherited-property",
    label: "Inherited Property",
    icon: "🗝️",
    desc: "Estate sales, out-of-state heirs, and cleanout problems — we buy inherited houses as-is.",
  },
  {
    key: "probate",
    label: "Probate Property",
    icon: "⚖️",
    desc: "We work around estate timelines and coordinate with the title company when probate is involved.",
  },
  {
    key: "divorce-sale",
    label: "Divorce Sale",
    icon: "📋",
    desc: "A cash sale can close fast so both spouses can divide proceeds and move forward.",
  },
  {
    key: "code-violations",
    label: "Code Violations / Serious Disrepair",
    icon: "🔧",
    desc: "Open permits, citations, failed inspections, or major repairs — we buy the house as-is.",
  },
  {
    key: "tenant-occupied",
    label: "Tenant-Occupied Property",
    icon: "🏘️",
    desc: "No eviction required. We buy rental properties with tenants still in place.",
  },
  {
    key: "fire-damage",
    label: "Fire Damage",
    icon: "🔥",
    desc: "Fire or smoke damage does not stop a cash sale. We buy damaged properties as-is.",
  },
] as const;

const maStateResources: ResourceLink[] = [
  {
    href: "/blog/how-to-sell-house-fast-massachusetts",
    label: "How to Sell Your House Fast in Massachusetts",
    desc: "Massachusetts deed excise, right-of-first-refusal rules, and cash-sale timelines across the state.",
    badge: "Article",
  },
  {
    href: "/blog/selling-inherited-property-new-england",
    label: "Selling Inherited Property in New England",
    desc: "Estate sales, probate timing, out-of-state heirs, and as-is sales across Massachusetts and New England.",
    badge: "Article",
  },
  {
    href: "/blog/what-happens-after-accepting-cash-offer",
    label: "What Happens After You Accept a Cash Offer?",
    desc: "A plain-English walkthrough from accepted offer to title, closing day, and cash in hand.",
    badge: "Process",
  },
  {
    href: "/resources/cash-offer-vs-listing",
    label: "Cash Offer vs. Listing — Full Comparison",
    desc: "How cash sale certainty compares with listing, showings, inspections, financing, and repairs.",
    badge: "Comparison",
  },
  {
    href: "/resources/how-the-process-works",
    label: "How the Cash Home Sale Process Works",
    desc: "Step-by-step process from first contact to written offer, title company, and closing.",
    badge: "Process",
  },
];

const nhStateResources: ResourceLink[] = [
  {
    href: "/blog/selling-inherited-property-new-england",
    label: "Selling Inherited Property in New England",
    desc: "Estate sales, probate timing, out-of-state heirs, and as-is sales across New Hampshire and New England.",
    badge: "Article",
  },
  {
    href: "/blog/what-happens-after-accepting-cash-offer",
    label: "What Happens After You Accept a Cash Offer?",
    desc: "A plain-English walkthrough from accepted offer to title, closing day, and cash in hand.",
    badge: "Process",
  },
  {
    href: "/resources/cash-offer-vs-listing",
    label: "Cash Offer vs. Listing — Full Comparison",
    desc: "How cash sale certainty compares with listing, showings, inspections, financing, and repairs.",
    badge: "Comparison",
  },
  {
    href: "/resources/how-the-process-works",
    label: "How the Cash Home Sale Process Works",
    desc: "Step-by-step process from first contact to written offer, title company, and closing.",
    badge: "Process",
  },
];

const ctStateResources: ResourceLink[] = [
  {
    href: "/blog/new-haven-ct-sell-house-fast-2026",
    label: "New Haven CT Seller\u2019s Guide 2026",
    desc: "Connecticut cash-buyer context, strict foreclosure vs. foreclosure-by-sale law, and local transfer tax.",
    badge: "Article",
  },
  {
    href: "/blog/connecticut-foreclosure-strict-vs-sale",
    label: "Connecticut Foreclosure: Strict vs. Foreclosure by Sale",
    desc: "How Connecticut\u2019s two foreclosure tracks work and what each means for sellers facing the timeline.",
    badge: "Article",
  },
  {
    href: "/blog/selling-inherited-property-new-england",
    label: "Selling Inherited Property in New England",
    desc: "Estate sales, probate timing, out-of-state heirs, and as-is sales across Connecticut and New England.",
    badge: "Article",
  },
  {
    href: "/resources/cash-offer-vs-listing",
    label: "Cash Offer vs. Listing — Full Comparison",
    desc: "How cash sale certainty compares with listing, showings, inspections, financing, and repairs.",
    badge: "Comparison",
  },
  {
    href: "/resources/how-the-process-works",
    label: "How the Cash Home Sale Process Works",
    desc: "Step-by-step process from first contact to written offer, title company, and closing.",
    badge: "Process",
  },
];

const wiStateResources: ResourceLink[] = [
  {
    href: "/blog/kenosha-vs-racine-housing-market-2026",
    label: "Kenosha vs. Racine Housing Market 2026",
    desc: "A market-by-market comparison for Wisconsin sellers weighing cash offers vs. traditional listings.",
    badge: "Market Data",
  },
  {
    href: "/blog/oshkosh-wi-sell-house-fast-2026",
    label: "Sell Your House Fast in Oshkosh WI 2026",
    desc: "Wisconsin transfer tax, Winnebago County context, and cash-sale options for Oshkosh and Wausau sellers.",
    badge: "Article",
  },
  {
    href: "/blog/what-happens-after-accepting-cash-offer",
    label: "What Happens After You Accept a Cash Offer?",
    desc: "A plain-English walkthrough from accepted offer to title, closing day, and cash in hand.",
    badge: "Process",
  },
  {
    href: "/resources/cash-offer-vs-listing",
    label: "Cash Offer vs. Listing — Full Comparison",
    desc: "How cash sale certainty compares with listing, showings, inspections, financing, and repairs.",
    badge: "Comparison",
  },
  {
    href: "/resources/how-the-process-works",
    label: "How the Cash Home Sale Process Works",
    desc: "Step-by-step process from first contact to written offer, title company, and closing.",
    badge: "Process",
  },
];

const nyStateResources: ResourceLink[] = [
  {
    href: "/blog/rochester-ny-sell-house-fast-2026",
    label: "Sell Your House Fast in Rochester NY 2026",
    desc: "Monroe County probate, Kodak-era estate sales, pre-foreclosure timelines, and cash-buyer options.",
    badge: "Article",
  },
  {
    href: "/blog/what-happens-after-accepting-cash-offer",
    label: "What Happens After You Accept a Cash Offer?",
    desc: "A plain-English walkthrough from accepted offer to title, closing day, and cash in hand.",
    badge: "Process",
  },
  {
    href: "/resources/cash-offer-vs-listing",
    label: "Cash Offer vs. Listing — Full Comparison",
    desc: "How cash sale certainty compares with listing, showings, inspections, financing, and repairs.",
    badge: "Comparison",
  },
  {
    href: "/resources/how-the-process-works",
    label: "How the Cash Home Sale Process Works",
    desc: "Step-by-step process from first contact to written offer, title company, and closing.",
    badge: "Process",
  },
];

const ohStateResources: ResourceLink[] = [
  {
    href: "/blog/youngstown-oh-housing-market-april-2026",
    label: "Youngstown OH Housing Market \u2014 April 2026",
    desc: "City vs. suburban market breakdown for Youngstown sellers \u2014 Boardman, Austintown, and Canfield context.",
    badge: "Market Data",
  },
  {
    href: "/blog/what-happens-after-accepting-cash-offer",
    label: "What Happens After You Accept a Cash Offer?",
    desc: "A plain-English walkthrough from accepted offer to title, closing day, and cash in hand.",
    badge: "Process",
  },
  {
    href: "/resources/cash-offer-vs-listing",
    label: "Cash Offer vs. Listing — Full Comparison",
    desc: "How cash sale certainty compares with listing, showings, inspections, financing, and repairs.",
    badge: "Comparison",
  },
  {
    href: "/resources/how-the-process-works",
    label: "How the Cash Home Sale Process Works",
    desc: "Step-by-step process from first contact to written offer, title company, and closing.",
    badge: "Process",
  },
];

const deStateResources: ResourceLink[] = [
  {
    href: "/blog/wilmington-de-sell-house-fast-2026",
    label: "Sell Your House Fast in Wilmington DE 2026",
    desc: "New Castle County neighborhoods, Delaware probate, pre-foreclosure sheriff sale timelines, and cash-buyer options.",
    badge: "Article",
  },
  {
    href: "/blog/what-happens-after-accepting-cash-offer",
    label: "What Happens After You Accept a Cash Offer?",
    desc: "A plain-English walkthrough from accepted offer to title, closing day, and cash in hand.",
    badge: "Process",
  },
  {
    href: "/resources/cash-offer-vs-listing",
    label: "Cash Offer vs. Listing — Full Comparison",
    desc: "How cash sale certainty compares with listing, showings, inspections, financing, and repairs.",
    badge: "Comparison",
  },
  {
    href: "/resources/how-the-process-works",
    label: "How the Cash Home Sale Process Works",
    desc: "Step-by-step process from first contact to written offer, title company, and closing.",
    badge: "Process",
  },
];

const paStateResources: ResourceLink[] = [
  {
    href: "/blog/sell-inherited-house-pennsylvania",
    label: "How to Sell an Inherited House in Pennsylvania",
    desc: "Probate, taxes, multiple heirs, and selling as-is when you inherit a Pennsylvania property.",
    badge: "Article",
  },
  {
    href: "/blog/sell-house-with-code-violations-pa",
    label: "Selling a House With Code Violations in Pennsylvania",
    desc: "Open permits and property-maintenance issues do not have to stop an as-is cash sale.",
    badge: "Article",
  },
  {
    href: "/blog/cash-buyer-vs-realtor-pennsylvania",
    label: "Cash Buyer vs. Realtor in Pennsylvania",
    desc: "A practical comparison of speed, certainty, repairs, commissions, and net proceeds.",
    badge: "Comparison",
  },
  {
    href: "/blog/probate-timeline-pennsylvania",
    label: "Pennsylvania Probate Timeline",
    desc: "What affects probate timing and how a property sale can fit around the estate process.",
    badge: "Article",
  },
  {
    href: "/blog/closing-costs-selling-house-pennsylvania",
    label: "Pennsylvania Seller Closing Costs",
    desc: "Transfer tax, commissions, title fees, and what comes out of a seller check in PA.",
    badge: "Guide",
  },
  {
    href: "/blog/sell-house-foreclosure-pennsylvania",
    label: "Selling Before Foreclosure in Pennsylvania",
    desc: "How Pennsylvania foreclosure timelines work and when a fast sale can still help.",
    badge: "Article",
  },
  {
    href: "/blog/sell-house-divorce-pennsylvania",
    label: "Selling a House in Divorce in Pennsylvania",
    desc: "Equitable distribution, buyouts, title issues, and why a clean cash sale can simplify the split.",
    badge: "Article",
  },
  {
    href: "/blog/selling-tenant-occupied-property-pa",
    label: "Selling Tenant-Occupied Property in Pennsylvania",
    desc: "What landlords need to know when a lease, tenant issue, or rental exit is part of the sale.",
    badge: "Landlord",
  },
];

const ilStateResources: ResourceLink[] = [
  {
    href: "/blog/sell-inherited-house-illinois",
    label: "Selling an Inherited House in Illinois",
    desc: "Illinois probate basics, estate-sale timing, and how an as-is cash sale can simplify an inherited property.",
    badge: "Article",
  },
  {
    href: "/blog/what-happens-after-accepting-cash-offer",
    label: "What Happens After You Accept a Cash Offer?",
    desc: "A plain-English walkthrough from accepted offer to title, closing day, and cash in hand.",
    badge: "Process",
  },
  {
    href: "/resources/cash-offer-vs-listing",
    label: "Cash Offer vs. Listing — Full Comparison",
    desc: "How cash sale certainty compares with listing, showings, inspections, financing, and repairs.",
    badge: "Comparison",
  },
  {
    href: "/resources/how-the-process-works",
    label: "How the Cash Home Sale Process Works",
    desc: "Step-by-step process from first contact to written offer, title company, and closing.",
    badge: "Process",
  },
];

export const MINI_SITE_MARKETS: MiniSiteMarket[] = [
  {
    slug: "bethlehem-pa",
    cityName: "Bethlehem PA",
    regionName: "Northampton County",
    guideSlug: "sell-house-fast-bethlehem-pa-2026",
    intro:
      "Everything you need if you are selling a home in Bethlehem or Northampton County — local market data, situation-specific pages, and Lehigh Valley seller guides.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/allentown-pa-sell-house-fast-2026",
        label: "Lehigh Valley Seller Guide 2026",
        desc: "A nearby Lehigh Valley market guide covering fast-sale tradeoffs, older housing stock, and local cash-buyer context.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "harrisburg-pa",
    cityName: "Harrisburg PA",
    regionName: "Dauphin County",
    guideSlug: "sell-house-fast-harrisburg-pa-2026",
    intro:
      "Harrisburg seller resources for fast cash sales, market data, foreclosure, inherited property, tenants, repairs, and Central PA closing questions.",
    hasFaq: true,
    hasNeighborhoods: true,
    hasPropertyLiens: true,
    resourceLinks: [
      {
        href: "/blog/harrisburg-pa-sell-house-fast-2026",
        label: "Harrisburg PA: Sell Your House Fast in 2026",
        desc: "Harrisburg-specific market guide for cash buyers, PA transfer taxes, judicial foreclosure, and Dauphin County probate.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "king-of-prussia-pa",
    cityName: "King of Prussia PA",
    regionName: "Montgomery County",
    guideSlug: "sell-house-fast-king-of-prussia-pa-2026",
    intro:
      "King of Prussia and Montgomery County seller resources for as-is cash sales, local market context, inherited property, divorce, tenants, and repair-heavy homes.",
    resourceLinks: [],
  },
  {
    slug: "reading-pa",
    cityName: "Reading PA",
    regionName: "Berks County",
    guideSlug: "sell-house-fast-reading-pa-2026",
    intro:
      "Reading seller resources for Berks County homeowners who need speed, certainty, as-is sale options, and local guidance by situation.",
    hasFaq: true,
    hasNeighborhoods: true,
    hasPropertyLiens: true,
    resourceLinks: [],
  },
  {
    slug: "lancaster-pa",
    cityName: "Lancaster PA",
    regionName: "Lancaster County",
    guideSlug: "sell-house-fast-lancaster-pa-2026",
    intro:
      "Lancaster seller resources for inherited homes, foreclosure pressure, tenant issues, divorce, repairs, and market data in Lancaster County.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/selling-house-during-divorce-pennsylvania",
        label: "Selling a House During Divorce in Pennsylvania",
        desc: "Pennsylvania divorce-sale basics with relevance for Lancaster sellers who need a clean, faster sale.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "state-college-pa",
    cityName: "State College PA",
    regionName: "Centre County",
    guideSlug: "sell-house-fast-state-college-pa-2026",
    intro:
      "State College seller resources for Centre County homeowners, student-rental exits, inherited properties, foreclosure pressure, and as-is sale situations.",
    resourceLinks: [],
  },
  {
    slug: "erie-pa",
    cityName: "Erie PA",
    regionName: "Erie County",
    guideSlug: "sell-house-fast-erie-pa-2026",
    intro:
      "Erie seller resources for as-is cash sales, market data, inherited houses, code violations, tenants, foreclosure, and lake-effect property issues.",
    hasFaq: true,
    hasNeighborhoods: true,
    hasPropertyLiens: true,
    resourceLinks: [],
  },
  {
    slug: "york-pa",
    cityName: "York PA",
    regionName: "York County",
    guideSlug: "sell-house-fast-york-pa-2026",
    intro:
      "York seller resources for fast cash sales, market data, repairs, tenants, inherited property, divorce, and local York County sale timelines.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/selling-house-during-divorce-pennsylvania",
        label: "Selling a House During Divorce in Pennsylvania",
        desc: "Pennsylvania divorce-sale basics with relevance for York sellers who need certainty and a clean closing.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "bloomington-il",
    cityName: "Bloomington IL",
    regionName: "McLean County",
    guideSlug: "sell-house-fast-bloomington-il-2026",
    intro:
      "Bloomington and McLean County seller resources for as-is cash sales, local market data, inherited homes, rentals, foreclosure, repairs, and fast closing options.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/bloomington-il-sell-house-fast-2026",
        label: "Bloomington IL: Sell House Fast in 2026",
        desc: "Bloomington-specific guide covering State Farm context, local transfer taxes, and fast-sale options.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "champaign-urbana-il",
    cityName: "Champaign-Urbana IL",
    regionName: "Champaign County",
    guideSlug: "sell-house-fast-champaign-urbana-il-2026",
    intro:
      "Champaign-Urbana seller resources for UIUC-area landlords, faculty relocations, inherited properties, foreclosure pressure, and as-is sales.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/champaign-urbana-il-sell-house-fast-2026",
        label: "Selling Fast in Champaign-Urbana IL in 2026",
        desc: "UIUC relocations, student-rental landlords, transfer-tax context, and cash-buyer options.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "peoria-il",
    cityName: "Peoria IL",
    regionName: "Peoria County",
    guideSlug: "sell-house-fast-peoria-il-2026",
    intro:
      "Peoria seller resources for entry-level homes, inherited houses, foreclosures, repair-heavy properties, tenants, and cash-sale timelines.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/peoria-il-sell-house-fast-2026",
        label: "Peoria IL: Why Cash Buyers Are Winning the Entry-Level Market",
        desc: "Peoria-specific market guide for 2026 cash buyers, older homes, and local transfer-tax context.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "rockford-il",
    cityName: "Rockford IL",
    regionName: "Winnebago County",
    guideSlug: "sell-house-fast-rockford-il-2026",
    intro:
      "Rockford seller resources for Winnebago County homeowners dealing with repairs, inherited property, tenants, foreclosure, divorce, or fast relocation.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/rockford-il-sell-house-fast-2026",
        label: "Rockford IL: Sell House Fast in 2026",
        desc: "Rockford-specific 2026 seller guide covering market data, older homes, foreclosure timelines, and cash-sale options.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "springfield-il",
    cityName: "Springfield IL",
    regionName: "Sangamon County",
    guideSlug: "sell-house-fast-springfield-il-2026",
    intro:
      "Springfield and Sangamon County seller resources for as-is cash sales, inherited homes, foreclosure pressure, repairs, tenants, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/springfield-il-sell-house-fast-2026",
        label: "Why Springfield IL Is a Hot Market in 2026",
        desc: "Springfield-specific guide for market heat, older homes, transfer taxes, and when a cash sale makes sense.",
        badge: "Article",
      },
    ],
  },
  // Wave A — Northeast / highest-value
  {
    slug: "springfield-ma",
    cityName: "Springfield MA",
    regionName: "Hampden County",
    guideSlug: "sell-house-fast-springfield-ma-2026",
    intro:
      "Springfield and Hampden County seller resources for triple-deckers, two-families, inherited property, foreclosure, tenant issues, code violations, and fast cash sale options.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/how-to-sell-house-fast-massachusetts",
        label: "How to Sell Your House Fast in Massachusetts",
        desc: "Massachusetts deed excise, right-of-first-refusal rules, and cash-sale timelines across the state.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "worcester-ma",
    cityName: "Worcester MA",
    regionName: "Worcester County",
    guideSlug: "sell-house-fast-worcester-ma-2026",
    intro:
      "Worcester and Worcester County seller resources for as-is cash sales, inherited property, foreclosure, tenant exits, repairs, and fast closing timelines.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/how-to-sell-house-fast-massachusetts",
        label: "How to Sell Your House Fast in Massachusetts",
        desc: "Massachusetts deed excise, right-of-first-refusal rules, and cash-sale timelines across the state.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "boston-ma",
    cityName: "Boston MA",
    regionName: "Suffolk County",
    guideSlug: "sell-house-fast-boston-ma-2026",
    intro:
      "Boston and Suffolk County seller resources for condos, triple-deckers, inherited property, probate, tenant situations, and fast as-is cash sales.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/how-to-sell-house-fast-massachusetts",
        label: "How to Sell Your House Fast in Massachusetts",
        desc: "Massachusetts deed excise, right-of-first-refusal rules, and cash-sale timelines across the state.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "manchester-nh",
    cityName: "Manchester NH",
    regionName: "Hillsborough County",
    guideSlug: "sell-house-fast-manchester-nh-2026",
    intro:
      "Manchester and Hillsborough County seller resources for as-is cash sales, inherited property, probate, tenant situations, code violations, and fast closing options.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/selling-inherited-property-new-england",
        label: "Selling Inherited Property in New England",
        desc: "Estate sales, probate timing, out-of-state heirs, and as-is sales across New Hampshire and New England.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "bridgeport-ct",
    cityName: "Bridgeport CT",
    regionName: "Fairfield County",
    guideSlug: "sell-house-fast-bridgeport-ct-2026",
    intro:
      "Bridgeport and Fairfield County seller resources for as-is cash sales, Connecticut foreclosure law, inherited property, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/new-haven-ct-sell-house-fast-2026",
        label: "New Haven CT Seller\u2019s Guide 2026",
        desc: "Connecticut cash-buyer context, strict foreclosure law, and local transfer tax \u2014 same state framework as Bridgeport.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "new-haven-ct",
    cityName: "New Haven CT",
    regionName: "New Haven County",
    guideSlug: "sell-house-fast-new-haven-ct-2026",
    intro:
      "New Haven and New Haven County seller resources for as-is cash sales, Connecticut foreclosure law, probate, inherited property, tenants, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/new-haven-ct-sell-house-fast-2026",
        label: "New Haven CT Seller\u2019s Guide 2026",
        desc: "New Haven-specific guide: cash buyers vs. agents, Connecticut strict foreclosure, transfer tax, and what to expect at closing.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "hartford-ct",
    cityName: "Hartford CT",
    regionName: "Hartford County",
    guideSlug: "sell-house-fast-hartford-ct-2026",
    intro:
      "Hartford and Hartford County seller resources for cash sales, Connecticut foreclosure law, inherited property, tenant-occupied properties, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [],
  },
  // Wave B — Wisconsin cluster
  {
    slug: "kenosha-wi",
    cityName: "Kenosha WI",
    regionName: "Kenosha County",
    guideSlug: "sell-house-fast-kenosha-wi-2026",
    intro:
      "Kenosha and Kenosha County seller resources for as-is cash sales, Wisconsin transfer tax, inherited property, foreclosure, tenants, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/kenosha-vs-racine-housing-market-2026",
        label: "Kenosha vs. Racine Housing Market 2026",
        desc: "A market-by-market comparison for Wisconsin sellers weighing cash offers vs. traditional listings.",
        badge: "Market Data",
      },
    ],
  },
  {
    slug: "racine-mount-pleasant-wi",
    cityName: "Racine / Mount Pleasant WI",
    regionName: "Racine County",
    guideSlug: "sell-house-fast-racine-mount-pleasant-wi-2026",
    intro:
      "Racine and Mount Pleasant seller resources for as-is cash sales, Wisconsin transfer tax, inherited property, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/kenosha-vs-racine-housing-market-2026",
        label: "Kenosha vs. Racine Housing Market 2026",
        desc: "A market-by-market comparison for Wisconsin sellers weighing cash offers vs. traditional listings.",
        badge: "Market Data",
      },
    ],
  },
  {
    slug: "oshkosh-wi",
    cityName: "Oshkosh WI",
    regionName: "Winnebago County",
    guideSlug: "sell-house-fast-oshkosh-wi-2026",
    intro:
      "Oshkosh and Winnebago County seller resources for as-is cash sales, Wisconsin transfer tax, inherited property, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/oshkosh-wi-sell-house-fast-2026",
        label: "Sell Your House Fast in Oshkosh WI 2026",
        desc: "Oshkosh-specific guide covering Wisconsin transfer tax, cash-buyer advantages, and local sale timelines.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "wausau-wi",
    cityName: "Wausau WI",
    regionName: "Marathon County",
    guideSlug: "sell-house-fast-wausau-wi-2026",
    intro:
      "Wausau and Marathon County seller resources for as-is cash sales, Wisconsin transfer tax, inherited property, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/oshkosh-wi-sell-house-fast-2026",
        label: "Sell Your House Fast in Oshkosh / Winnebago WI 2026",
        desc: "Wisconsin cash-buyer context for the Oshkosh/Wausau corridor \u2014 same state legal framework.",
        badge: "Article",
      },
    ],
  },
  // Wave C — Remaining strategic
  {
    slug: "rochester-ny",
    cityName: "Rochester NY",
    regionName: "Monroe County",
    guideSlug: "sell-house-fast-rochester-ny-2026",
    intro:
      "Rochester and Monroe County seller resources for as-is cash sales, inherited property, Monroe County Surrogate\u2019s Court probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/rochester-ny-sell-house-fast-2026",
        label: "Sell Your House Fast in Rochester NY 2026",
        desc: "Monroe County probate, Kodak-era estate sales, pre-foreclosure timelines, and cash-buyer options.",
        badge: "Article",
      },
    ],
  },
  {
    slug: "youngstown-oh",
    cityName: "Youngstown OH",
    regionName: "Mahoning County",
    guideSlug: "sell-house-fast-youngstown-oh-2026",
    intro:
      "Youngstown and Mahoning County seller resources for cash sales, city-to-suburb market context, inherited property, foreclosure, and as-is sale options.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/youngstown-oh-housing-market-april-2026",
        label: "Youngstown OH Housing Market \u2014 April 2026",
        desc: "City vs. suburban market breakdown for Youngstown sellers \u2014 Boardman, Austintown, and Canfield context.",
        badge: "Market Data",
      },
    ],
  },
  {
    slug: "wilmington-de",
    cityName: "Wilmington DE",
    regionName: "New Castle County",
    guideSlug: "sell-house-fast-wilmington-de-2026",
    intro:
      "Wilmington and New Castle County seller resources for as-is cash sales, inherited property, Delaware probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
    resourceLinks: [
      {
        href: "/blog/wilmington-de-sell-house-fast-2026",
        label: "Sell Your House Fast in Wilmington DE 2026",
        desc: "New Castle County neighborhoods, Delaware probate, pre-foreclosure sheriff sale timelines, and cash-buyer options.",
        badge: "Article",
      },
    ],
  },
  // LCF-007 — May 1 Tron-built markets
  {
    slug: "madison-wi",
    cityName: "Madison WI",
    regionName: "Dane County",
    guideSlug: "sell-house-fast-madison-wi-2026",
    intro:
      "Madison and Dane County seller resources for as-is cash sales, inherited property, Wisconsin probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "chambersburg-pa",
    cityName: "Chambersburg PA",
    regionName: "Franklin County",
    guideSlug: "sell-house-fast-chambersburg-pa-2026",
    intro:
      "Chambersburg and Franklin County seller resources for as-is cash sales, inherited property, Pennsylvania probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "waterbury-ct",
    cityName: "Waterbury CT",
    regionName: "New Haven County",
    guideSlug: "sell-house-fast-waterbury-ct-2026",
    intro:
      "Waterbury and New Haven County seller resources for as-is cash sales, Connecticut strict foreclosure, inherited property, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: false,
  },
  {
    slug: "green-bay-wi",
    cityName: "Green Bay WI",
    regionName: "Brown County",
    guideSlug: "sell-house-fast-green-bay-wi-2026",
    intro:
      "Green Bay and Brown County seller resources for as-is cash sales, inherited property, Wisconsin probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "binghamton-ny",
    cityName: "Binghamton NY",
    regionName: "Broome County",
    guideSlug: "sell-house-fast-binghamton-ny-2026",
    intro:
      "Binghamton and Broome County seller resources for as-is cash sales, inherited property, New York probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "appleton-wi",
    cityName: "Appleton WI",
    regionName: "Outagamie County",
    guideSlug: "sell-house-fast-appleton-wi-2026",
    intro:
      "Appleton and Outagamie County seller resources for as-is cash sales, inherited property, Wisconsin probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "canton-oh",
    cityName: "Canton OH",
    regionName: "Stark County",
    guideSlug: "sell-house-fast-canton-oh-2026",
    intro:
      "Canton and Stark County seller resources for as-is cash sales, inherited property, Ohio probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "milwaukee-wi",
    cityName: "Milwaukee WI",
    regionName: "Milwaukee County",
    guideSlug: "sell-house-fast-milwaukee-wi-2026",
    intro:
      "Milwaukee and Milwaukee County seller resources for as-is cash sales, inherited property, Wisconsin probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "akron-oh",
    cityName: "Akron OH",
    regionName: "Summit County",
    guideSlug: "sell-house-fast-akron-oh-2026",
    intro:
      "Akron and Summit County seller resources for as-is cash sales, inherited property, Ohio probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "concord-nh",
    cityName: "Concord NH",
    regionName: "Merrimack County",
    guideSlug: "sell-house-fast-concord-nh-2026",
    intro:
      "Concord and Merrimack County seller resources for as-is cash sales, inherited property, New Hampshire probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "norwich-ct",
    cityName: "Norwich CT",
    regionName: "New London County",
    guideSlug: "sell-house-fast-norwich-ct-2026",
    intro:
      "Norwich and New London County seller resources for as-is cash sales, Connecticut strict foreclosure, inherited property, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "northampton-ma",
    cityName: "Northampton MA",
    regionName: "Hampshire County",
    guideSlug: "sell-house-fast-northampton-ma-2026",
    intro:
      "Northampton and Hampshire County seller resources for as-is cash sales, inherited property, Massachusetts probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "eau-claire-wi",
    cityName: "Eau Claire WI",
    regionName: "Eau Claire County",
    guideSlug: "sell-house-fast-eau-claire-wi-2026",
    intro:
      "Eau Claire and Eau Claire County seller resources for as-is cash sales, inherited property, Wisconsin probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "janesville-wi",
    cityName: "Janesville WI",
    regionName: "Rock County",
    guideSlug: "sell-house-fast-janesville-wi-2026",
    intro:
      "Janesville and Rock County seller resources for as-is cash sales, inherited property, Wisconsin probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "columbus-oh",
    cityName: "Columbus OH",
    regionName: "Franklin County",
    guideSlug: "sell-house-fast-columbus-oh-2026",
    intro:
      "Columbus and Franklin County seller resources for as-is cash sales, inherited property, Ohio probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  // ── Batch 005 (authorized 2026-05-03) ──────────────────────────────
  {
    slug: "dayton-oh",
    cityName: "Dayton OH",
    regionName: "Montgomery County",
    guideSlug: "sell-house-fast-dayton-oh-2026",
    intro:
      "Dayton and Montgomery County seller resources for as-is cash sales, inherited property, Ohio probate, foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "richmond-va",
    cityName: "Richmond VA",
    regionName: "Richmond City (independent city)",
    guideSlug: "sell-house-fast-richmond-va-2026",
    intro:
      "Richmond City seller resources for as-is cash sales, inherited property, Virginia Circuit Court probate, non-judicial foreclosure, tenant situations, and fast closings.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "st-louis-mo",
    cityName: "St. Louis MO",
    regionName: "St. Louis City (independent city)",
    guideSlug: "sell-house-fast-st-louis-mo-2026",
    intro:
      "St. Louis City seller resources for as-is cash sales, inherited property, Missouri Circuit Court probate, non-judicial foreclosure, tenant situations, and fast closings. No transfer tax.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "scranton-pa",
    cityName: "Scranton PA",
    regionName: "Lackawanna County",
    guideSlug: "sell-house-fast-scranton-pa-2026",
    intro:
      "Scranton and Lackawanna County seller resources for as-is cash sales, inherited property, Pennsylvania Register of Wills probate, judicial foreclosure, tenant situations, and fast closings. 3.7% transfer tax explained.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
  {
    slug: "fort-wayne-in",
    cityName: "Fort Wayne IN",
    regionName: "Allen County",
    guideSlug: "sell-house-fast-fort-wayne-in-2026",
    intro:
      "Fort Wayne and Allen County seller resources for as-is cash sales, inherited property, Indiana Circuit Court probate, judicial foreclosure, tenant situations, and fast closings. No transfer tax.",
    hasFaq: true,
    hasNeighborhoods: true,
  },
];

export function getMiniSiteMarket(slug: string): MiniSiteMarket {
  const market = MINI_SITE_MARKETS.find((item) => item.slug === slug);
  if (!market) throw new Error(`Unknown mini-site market: ${slug}`);
  return market;
}

function getStateResources(slug: string): ResourceLink[] {
  if (slug.endsWith("-il")) return ilStateResources;
  if (slug.endsWith("-pa")) return paStateResources;
  if (slug.endsWith("-ma")) return maStateResources;
  if (slug.endsWith("-nh")) return nhStateResources;
  if (slug.endsWith("-ct")) return ctStateResources;
  if (slug.endsWith("-wi")) return wiStateResources;
  if (slug.endsWith("-ny")) return nyStateResources;
  if (slug.endsWith("-oh")) return ohStateResources;
  if (slug.endsWith("-de")) return deStateResources;
  return [];
}

export function buildResourceLinks(market: MiniSiteMarket): ResourceLink[] {
  const stateResources = getStateResources(market.slug);
  return [
    {
      href: `/guides/${market.guideSlug}`,
      label: `${market.cityName} Seller Guide 2026`,
      desc: `Complete local guide to selling fast in ${market.cityName} — cash buyers vs. agents, local numbers, timelines, and your options.`,
      badge: "Guide",
    },
    {
      href: `/markets/${market.slug}/market-report`,
      label: `${market.cityName} Monthly Market Report`,
      desc: `Current local market data, days on market, price context, and cash-offer range framing for ${market.regionName}.`,
      badge: "Market Data",
    },
    ...(market.resourceLinks ?? []),
    ...stateResources,
  ];
}

export function buildSituationLinks(market: MiniSiteMarket): SituationLink[] {
  return BASE_SITUATIONS.flatMap((item) => {
    const override = market.situationOverrides?.[item.key];
    if (override === false) return [];
    return [
      {
        href: `/markets/${market.slug}/${item.key}`,
        label: item.label,
        icon: item.icon,
        desc: item.desc,
        ...override,
      },
    ];
  }).concat([
    ...(market.hasPropertyLiens
      ? [
          {
            href: `/markets/${market.slug}/property-liens`,
            label: "Back Taxes or Property Liens",
            icon: "🏷️",
            desc: "Unpaid taxes, liens, and payoff issues can usually be handled through closing.",
          },
        ]
      : []),
    ...(market.hasNeighborhoods
      ? [
          {
            href: `/markets/${market.slug}/neighborhoods`,
            label: "Neighborhoods",
            icon: "🗺️",
            desc: `See neighborhood-by-neighborhood context for ${market.cityName} sellers.`,
          },
        ]
      : []),
    ...(market.hasFaq
      ? [
          {
            href: `/markets/${market.slug}/faq`,
            label: "Local FAQ",
            icon: "❓",
            desc: `Common questions about selling a house fast in ${market.cityName}.`,
          },
        ]
      : []),
  ]);
}
