import type { Metadata } from "next";
import { MarketResourcesPage } from "@/components/market/MarketResourcesPage";
import {
  buildResourceLinks,
  buildSituationLinks,
  getMiniSiteMarket,
} from "@/lib/marketMiniSites";
import { SITE_URL } from "@/lib/utils";

const market = getMiniSiteMarket("state-college-pa");

export const revalidate = 86400;

export const metadata: Metadata = {
  title: `${market.cityName} Seller Resources — Guides, Market Data & Situation Help`,
  description: market.intro,
  alternates: { canonical: `${SITE_URL}/markets/state-college-pa/resources` },
};

export default function ResourcesPage() {
  return (
    <MarketResourcesPage
      marketSlug={"state-college-pa"}
      cityName={market.cityName}
      regionName={market.regionName}
      intro={market.intro}
      resources={buildResourceLinks(market)}
      situations={buildSituationLinks(market)}
    />
  );
}
