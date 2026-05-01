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
];

export function getMiniSiteMarket(slug: string): MiniSiteMarket {
  const market = MINI_SITE_MARKETS.find((item) => item.slug === slug);
  if (!market) throw new Error(`Unknown mini-site market: ${slug}`);
  return market;
}

export function buildResourceLinks(market: MiniSiteMarket): ResourceLink[] {
  const stateResources = market.slug.endsWith("-il")
    ? ilStateResources
    : paStateResources;
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
