"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback } from "react";
import { PHONE } from "@/lib/utils";

const marketsByState: {
  state: string;
  cities: { href: string; label: string }[];
}[] = [
  {
    state: "Pennsylvania",
    cities: [
      { href: "/markets/harrisburg-pa", label: "Harrisburg" },
      { href: "/markets/allentown-pa", label: "Allentown" },
      { href: "/markets/king-of-prussia-pa", label: "King of Prussia" },
      { href: "/markets/reading-pa", label: "Reading" },
      { href: "/markets/state-college-pa", label: "State College" },
      { href: "/markets/erie-pa", label: "Erie" },
      { href: "/markets/bethlehem-pa", label: "Bethlehem" },
      { href: "/markets/lancaster-pa", label: "Lancaster" },
      { href: "/markets/york-pa", label: "York" },
      { href: "/markets/chambersburg-pa", label: "Chambersburg" },
      { href: "/sell-my-house-fast-philadelphia-pa", label: "Philadelphia" },
      { href: "/markets/scranton-pa", label: "Scranton" },
    ],
  },
  {
    state: "Virginia",
    cities: [
      { href: "/markets/richmond-va", label: "Richmond" },
    ],
  },
  {
    state: "Missouri",
    cities: [
      { href: "/markets/st-louis-mo", label: "St. Louis" },
    ],
  },
  {
    state: "Indiana",
    cities: [
      { href: "/markets/fort-wayne-in", label: "Fort Wayne" },
    ],
  },
  {
    state: "Delaware",
    cities: [{ href: "/markets/wilmington-de", label: "Wilmington" }],
  },
  {
    state: "Ohio",
    cities: [
      { href: "/markets/youngstown-oh", label: "Youngstown" },
      { href: "/markets/canton-oh", label: "Canton" },
      { href: "/markets/akron-oh", label: "Akron" },
      { href: "/sell-my-house-fast-cleveland-oh", label: "Cleveland" },
      { href: "/sell-my-house-fast-toledo-oh", label: "Toledo" },
      { href: "/sell-my-house-fast-cincinnati-oh", label: "Cincinnati" },
      { href: "/markets/columbus-oh", label: "Columbus" },
      { href: "/markets/dayton-oh", label: "Dayton" },
    ],
  },
  {
    state: "Massachusetts",
    cities: [
      { href: "/markets/boston-ma", label: "Boston" },
      { href: "/markets/springfield-ma", label: "Springfield" },
      { href: "/markets/worcester-ma", label: "Worcester" },
      { href: "/markets/northampton-ma", label: "Northampton" },
    ],
  },
  {
    state: "Wisconsin",
    cities: [
      { href: "/markets/kenosha-wi", label: "Kenosha" },
      {
        href: "/markets/racine-mount-pleasant-wi",
        label: "Racine & Mount Pleasant",
      },
      { href: "/markets/oshkosh-wi", label: "Oshkosh" },
      { href: "/markets/wausau-wi", label: "Wausau" },
      { href: "/markets/madison-wi", label: "Madison" },
      { href: "/markets/green-bay-wi", label: "Green Bay" },
      { href: "/markets/appleton-wi", label: "Appleton" },
      { href: "/markets/milwaukee-wi", label: "Milwaukee" },
      { href: "/markets/eau-claire-wi", label: "Eau Claire" },
      { href: "/markets/janesville-wi", label: "Janesville" },
    ],
  },
  {
    state: "New Hampshire",
    cities: [
      { href: "/markets/manchester-nh", label: "Manchester" },
      { href: "/markets/concord-nh", label: "Concord" },
    ],
  },
  {
    state: "Connecticut",
    cities: [
      { href: "/markets/bridgeport-ct", label: "Bridgeport" },
      { href: "/markets/hartford-ct", label: "Hartford" },
      { href: "/markets/new-haven-ct", label: "New Haven" },
      { href: "/markets/waterbury-ct", label: "Waterbury" },
      { href: "/markets/norwich-ct", label: "Norwich" },
    ],
  },
  {
    state: "New York",
    cities: [
      { href: "/markets/rochester-ny", label: "Rochester" },
      { href: "/markets/binghamton-ny", label: "Binghamton" },
    ],
  },
  {
    state: "Illinois",
    cities: [
      { href: "/markets/springfield-il", label: "Springfield" },
      { href: "/markets/rockford-il", label: "Rockford" },
      { href: "/markets/peoria-il", label: "Peoria" },
      { href: "/markets/bloomington-il", label: "Bloomington" },
      { href: "/markets/champaign-urbana-il", label: "Champaign-Urbana" },
      { href: "/sell-my-house-fast-chicago-il", label: "Chicago" },
    ],
  },
];

type MiniSiteMarket = {
  slug: string;
  label: string;
  guideSlug: string;
  blogSlugs?: string[];
  rootHref?: string;
};

const miniSiteMarkets: MiniSiteMarket[] = [
  {
    slug: "allentown-pa",
    label: "Allentown",
    guideSlug: "sell-house-fast-allentown-pa-2026",
    blogSlugs: [
      "allentown-pa-sell-house-fast-2026",
      "sell-flood-damaged-house-allentown-pa",
      "sell-house-code-violations-allentown-pa",
      "allentown-pa-cash-buyers-by-neighborhood",
    ],
  },
  {
    slug: "bethlehem-pa",
    label: "Bethlehem",
    guideSlug: "sell-house-fast-bethlehem-pa-2026",
    blogSlugs: ["allentown-pa-sell-house-fast-2026"],
  },
  {
    slug: "harrisburg-pa",
    label: "Harrisburg",
    guideSlug: "sell-house-fast-harrisburg-pa-2026",
    blogSlugs: ["harrisburg-pa-sell-house-fast-2026"],
  },
  {
    slug: "king-of-prussia-pa",
    label: "King of Prussia",
    guideSlug: "sell-house-fast-king-of-prussia-pa-2026",
  },
  {
    slug: "reading-pa",
    label: "Reading",
    guideSlug: "sell-house-fast-reading-pa-2026",
  },
  {
    slug: "lancaster-pa",
    label: "Lancaster",
    guideSlug: "sell-house-fast-lancaster-pa-2026",
    blogSlugs: ["selling-house-during-divorce-pennsylvania"],
  },
  {
    slug: "state-college-pa",
    label: "State College",
    guideSlug: "sell-house-fast-state-college-pa-2026",
  },
  { slug: "erie-pa", label: "Erie", guideSlug: "sell-house-fast-erie-pa-2026" },
  {
    slug: "york-pa",
    label: "York",
    guideSlug: "sell-house-fast-york-pa-2026",
    blogSlugs: ["selling-house-during-divorce-pennsylvania"],
  },

  {
    slug: "appleton-wi",
    label: "Appleton",
    guideSlug: "sell-house-fast-appleton-wi-2026",
    blogSlugs: ["appleton-wi-sell-house-fast-2026"],
  },
  {
    slug: "canton-oh",
    label: "Canton",
    guideSlug: "sell-house-fast-canton-oh-2026",
  },
  {
    slug: "milwaukee-wi",
    label: "Milwaukee",
    guideSlug: "sell-house-fast-milwaukee-wi-2026",
  },
  {
    slug: "akron-oh",
    label: "Akron",
    guideSlug: "sell-house-fast-akron-oh-2026",
  },
  {
    slug: "concord-nh",
    label: "Concord",
    guideSlug: "sell-house-fast-concord-nh-2026",
  },
  {
    slug: "norwich-ct",
    label: "Norwich",
    guideSlug: "sell-house-fast-norwich-ct-2026",
    blogSlugs: ["norwich-ct-sell-house-fast-2026"],
  },
  {
    slug: "northampton-ma",
    label: "Northampton",
    guideSlug: "sell-house-fast-northampton-ma-2026",
  },
  {
    slug: "eau-claire-wi",
    label: "Eau Claire",
    guideSlug: "sell-house-fast-eau-claire-wi-2026",
  },
  {
    slug: "janesville-wi",
    label: "Janesville",
    guideSlug: "sell-house-fast-janesville-wi-2026",
  },
  {
    slug: "columbus-oh",
    label: "Columbus",
    guideSlug: "sell-house-fast-columbus-oh-2026",
  },
  {
    slug: "madison-wi",
    label: "Madison",
    guideSlug: "sell-house-fast-madison-wi-2026",
    blogSlugs: ["madison-wi-sell-house-fast-2026"],
  },
  {
    slug: "chambersburg-pa",
    label: "Chambersburg",
    guideSlug: "sell-house-fast-chambersburg-pa-2026",
    blogSlugs: ["chambersburg-pa-sell-house-fast-2026"],
  },
  {
    slug: "waterbury-ct",
    label: "Waterbury",
    guideSlug: "sell-house-fast-waterbury-ct-2026",
    blogSlugs: ["waterbury-ct-sell-house-fast-2026"],
  },
  {
    slug: "green-bay-wi",
    label: "Green Bay",
    guideSlug: "sell-house-fast-green-bay-wi-2026",
    blogSlugs: ["green-bay-wi-sell-house-fast-2026"],
  },
  {
    slug: "binghamton-ny",
    label: "Binghamton",
    guideSlug: "sell-house-fast-binghamton-ny-2026",
  },
  {
    slug: "bloomington-il",
    label: "Bloomington",
    guideSlug: "sell-house-fast-bloomington-il-2026",
    blogSlugs: ["bloomington-il-sell-house-fast-2026"],
  },
  {
    slug: "chicago-il",
    label: "Chicago",
    guideSlug: "sell-house-fast-chicago-il-2026",
    blogSlugs: ["chicago-il-sell-house-fast-2026"],
    rootHref: "/sell-my-house-fast-chicago-il",
  },
  {
    slug: "cleveland-oh",
    label: "Cleveland",
    guideSlug: "sell-house-fast-cleveland-oh-2026",
    blogSlugs: ["cleveland-oh-sell-house-fast-2026"],
    rootHref: "/sell-my-house-fast-cleveland-oh",
  },
  {
    slug: "toledo-oh",
    label: "Toledo",
    guideSlug: "sell-house-fast-toledo-oh-2026",
    rootHref: "/sell-my-house-fast-toledo-oh",
  },
  {
    slug: "philadelphia-pa",
    label: "Philadelphia",
    guideSlug: "sell-house-fast-philadelphia-pa-2026",
    blogSlugs: ["philadelphia-pa-sell-house-fast-2026"],
    rootHref: "/sell-my-house-fast-philadelphia-pa",
  },
  {
    slug: "cincinnati-oh",
    label: "Cincinnati",
    guideSlug: "sell-house-fast-cincinnati-oh-2026",
    rootHref: "/sell-my-house-fast-cincinnati-oh",
  },
  {
    slug: "champaign-urbana-il",
    label: "Champaign-Urbana",
    guideSlug: "sell-house-fast-champaign-urbana-il-2026",
    blogSlugs: ["champaign-urbana-il-sell-house-fast-2026"],
  },
  {
    slug: "peoria-il",
    label: "Peoria",
    guideSlug: "sell-house-fast-peoria-il-2026",
    blogSlugs: ["peoria-il-sell-house-fast-2026"],
  },
  {
    slug: "rockford-il",
    label: "Rockford",
    guideSlug: "sell-house-fast-rockford-il-2026",
    blogSlugs: ["rockford-il-sell-house-fast-2026"],
  },
  {
    slug: "springfield-il",
    label: "Springfield IL",
    guideSlug: "sell-house-fast-springfield-il-2026",
    blogSlugs: ["springfield-il-sell-house-fast-2026"],
  },
];

function getMiniSiteContext(pathname: string | null) {
  if (!pathname) return null;

  return (
    miniSiteMarkets.find((market) => {
      if (pathname.startsWith(`/markets/${market.slug}`)) return true;
      if (market.rootHref && pathname === market.rootHref) return true;
      if (pathname === `/guides/${market.guideSlug}`) return true;
      if (pathname === `/resources/how-the-process-works/${market.slug}`)
        return true;
      if (pathname === `/reviews/${market.slug}`) return true;
      if (pathname === `/about/${market.slug}`) return true;
      return (
        market.blogSlugs?.some((slug) => pathname === `/blog/${slug}`) ?? false
      );
    }) ?? null
  );
}

export function Header() {
  const pathname = usePathname();
  const miniSiteContext = getMiniSiteContext(pathname);
  const homeHref = miniSiteContext
    ? miniSiteContext.rootHref ?? `/markets/${miniSiteContext.slug}`
    : "/";
  const sellerGuidesHref = miniSiteContext
    ? `/guides/${miniSiteContext.guideSlug}`
    : "/guides";
  const sellerGuidesLabel = miniSiteContext
    ? `${miniSiteContext.label} Guide`
    : "Seller Guides";
  const blogHref = miniSiteContext
    ? `/markets/${miniSiteContext.slug}/resources`
    : "/blog";
  const blogLabel = miniSiteContext ? `${miniSiteContext.label} Blog` : "Blog";
  const howItWorksHref = miniSiteContext
    ? `/resources/how-the-process-works/${miniSiteContext.slug}`
    : "/resources/how-the-process-works";
  const reviewsHref = miniSiteContext
    ? `/reviews/${miniSiteContext.slug}`
    : "/reviews";
  const aboutHref = miniSiteContext
    ? `/about/${miniSiteContext.slug}`
    : "/about";
  const cashOfferHref = miniSiteContext
    ? `${miniSiteContext.rootHref ?? `/markets/${miniSiteContext.slug}`}#lead-form`
    : "/#lead-form";

  const [menuOpen, setMenuOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMarkets = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMarketsOpen(true);
  }, []);

  const closeMarkets = useCallback(() => {
    closeTimer.current = setTimeout(() => setMarketsOpen(false), 150);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={homeHref}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <Image
              src="/logo.png"
              alt="USA Home Buyers"
              width={240}
              height={64}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            {/* Markets dropdown */}
            <div
              className="relative"
              onMouseEnter={openMarkets}
              onMouseLeave={closeMarkets}
            >
              <button
                onClick={() => setMarketsOpen(!marketsOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-brand-primary focus:outline-none"
                aria-expanded={marketsOpen}
                aria-haspopup="true"
              >
                Markets <span className="text-xs">▾</span>
              </button>
              {marketsOpen && (
                <div className="absolute top-full left-0 pt-3 w-72 z-50">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-5">
                    {marketsByState.map(({ state, cities }) => (
                      <div key={state} className="mb-4 last:mb-0">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                          {state}
                        </p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                          {cities.map((city) => (
                            <Link
                              key={city.href}
                              href={city.href}
                              className="text-sm text-gray-600 hover:text-brand-primary transition-colors"
                              onClick={() => setMarketsOpen(false)}
                            >
                              {city.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href={sellerGuidesHref}
              className="text-gray-600 hover:text-brand-primary whitespace-nowrap"
            >
              {sellerGuidesLabel}
            </Link>
            <Link
              href={blogHref}
              className="text-gray-600 hover:text-brand-primary whitespace-nowrap"
            >
              {blogLabel}
            </Link>
            <Link
              href={howItWorksHref}
              className="text-gray-600 hover:text-brand-primary whitespace-nowrap"
            >
              How It Works
            </Link>
            <Link
              href={reviewsHref}
              className="text-gray-600 hover:text-brand-primary"
            >
              Reviews
            </Link>
            <Link
              href={aboutHref}
              className="text-gray-600 hover:text-brand-primary"
            >
              About
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="flex flex-col items-end text-brand-primary hover:text-blue-700 transition-colors whitespace-nowrap"
            >
              <span className="font-semibold">{PHONE}</span>
              <span className="text-xs text-gray-500 font-normal">
                We Answer 24/7
              </span>
            </a>
            <Link
              href={cashOfferHref}
              className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Get Cash Offer
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Mobile Markets accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:text-brand-primary hover:bg-gray-50 rounded-lg font-medium"
                onClick={() => setMobileMarketsOpen(!mobileMarketsOpen)}
              >
                <span>Markets</span>
                <span className="text-xs">{mobileMarketsOpen ? "▴" : "▾"}</span>
              </button>
              {mobileMarketsOpen && (
                <div className="ml-4 mt-1 space-y-3 pb-2">
                  {marketsByState.map(({ state, cities }) => (
                    <div key={state}>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-1">
                        {state}
                      </p>
                      {cities.map((city) => (
                        <Link
                          key={city.href}
                          href={city.href}
                          className="block px-3 py-1.5 text-sm text-gray-600 hover:text-brand-primary hover:bg-gray-50 rounded-lg"
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileMarketsOpen(false);
                          }}
                        >
                          {city.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {[
              { href: sellerGuidesHref, label: sellerGuidesLabel },
              { href: blogHref, label: blogLabel },
              { href: howItWorksHref, label: "How It Works" },
              { href: reviewsHref, label: "Reviews" },
              { href: aboutHref, label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-600 hover:text-brand-primary hover:bg-gray-50 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="block px-3 py-2 text-brand-primary font-semibold"
            >
              📞 {PHONE}
            </a>
            <Link
              href={cashOfferHref}
              className="block text-center bg-brand-primary text-white px-4 py-3 rounded-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Get Cash Offer →
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
