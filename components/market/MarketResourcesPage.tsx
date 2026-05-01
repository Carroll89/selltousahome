import Link from "next/link";
import { CashOfferForm } from "@/components/CashOfferForm";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { articleSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export type ResourceLink = {
  href: string;
  label: string;
  desc: string;
  badge: string;
};

export type SituationLink = {
  href: string;
  label: string;
  desc: string;
  icon: string;
};

export type MarketResourcesPageProps = {
  marketSlug: string;
  cityName: string;
  regionName: string;
  intro: string;
  resources: ResourceLink[];
  situations: SituationLink[];
};

export function MarketResourcesPage({
  marketSlug,
  cityName,
  regionName,
  intro,
  resources,
  situations,
}: MarketResourcesPageProps) {
  const schema = articleSchema(
    `${cityName} Seller Resources — Guides, Market Data & Situation Help`,
    `${SITE_URL}/markets/${marketSlug}/resources`,
    "2026-04-30",
    "2026-04-30",
  );

  return (
    <>
      <SchemaMarkup schema={[schema]} />

      <section className="bg-brand-dark text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link
              href={`/markets/${marketSlug}`}
              className="hover:text-white transition-colors"
            >
              ← Back to {cityName}
            </Link>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {cityName} Seller Resources
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">{intro}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            {cityName} Market Guides &amp; Reports
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-white border border-gray-200 hover:border-brand-primary hover:shadow-md rounded-xl p-5 transition group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-brand-primary group-hover:underline leading-snug">
                    {item.label}
                  </p>
                  <span className="shrink-0 text-xs font-medium bg-blue-50 text-brand-primary px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-2">
            Your Situation in {cityName}
          </h2>
          <p className="text-gray-600 mb-6">
            Select the page that matches your situation for {cityName}-specific
            information, timelines, and options.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {situations.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition"
              >
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="font-semibold text-brand-primary mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-2 text-center">
            Ready to Get Your {cityName} Cash Offer?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            No obligation. Written offer in 24 hours. Close in as few as 7 days.
          </p>
          <CashOfferForm
            variant="inline"
            sourcePage={`/markets/${marketSlug}/resources`}
          />
        </section>

        <nav className="text-sm text-gray-500 border-t pt-6">
          <Link
            href={`/markets/${marketSlug}`}
            className="text-brand-primary hover:underline"
          >
            {cityName}
          </Link>
          <span className="mx-2">›</span>
          <span>{regionName} Seller Resources</span>
        </nav>
      </div>
    </>
  );
}
