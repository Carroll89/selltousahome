#!/usr/bin/env python3
"""
inject-tldr-v2.py — Injects GEO-optimized TL;DR "Quick Answer" blocks into all
remaining market pages, guide pages, and app-root pages missing them.

Extends inject-tldr.py to cover:
 - All 11 market hub pages (main /markets/{slug}/page.tsx)
 - code-violations, tenant-occupied, fire-damage, market-report pages across all markets
 - All guide / answer-hub pages
 - App-root state pages (sell-house-fast-pennsylvania/delaware/ohio)

Insertion logic (priority order):
 1. <article> tag — insert TL;DR after opening <article>
 2. max-w-4xl container — insert after the container opening
 3. max-w-7xl container (hub pages) — insert after the first bare max-w-7xl div

Only runs on pages that DON'T already have a TL;DR block.
"""

import os
import re

MARKETS_BASE = "/Users/agents/selltousahome/app/markets"
GUIDES_BASE  = "/Users/agents/selltousahome/app/guides"
APP_BASE     = "/Users/agents/selltousahome/app"

# ─────────────────────────────────────────────────────────────────────────────
# TL;DR CONTENT
# ─────────────────────────────────────────────────────────────────────────────

# Market hub pages — (market_slug,) → (heading, text)
HUB_TLDR = {
    "allentown-pa": (
        "Quick Answer: Sell Your House Fast in Allentown, PA",
        "USA Home Buyers purchases houses in Allentown, PA for cash — as-is, in any condition, "
        "with no repairs and no agent fees. According to the Zillow Home Value Index, the typical "
        "Allentown home value is $267,465 (February 2026); Redfin's median closed sale price is "
        "$245,000, with homes averaging 29 days to pending. We skip the market process entirely — "
        "written offer within 24 hours, closing in as few as 7 days. We serve all of Allentown, "
        "Bethlehem, Easton, and Lehigh and Northampton Counties."
    ),
    "harrisburg-pa": (
        "Quick Answer: Sell Your House Fast in Harrisburg, PA",
        "USA Home Buyers purchases houses in Harrisburg, PA for cash — as-is, in any condition, "
        "with no repairs and no agent fees. According to the Zillow Home Value Index, the Harrisburg "
        "area median home value is $234,569 (April 2026); within city limits, Redfin tracks a median "
        "closed sale price of approximately $145,000. The market goes pending in 5 days on average, "
        "but after that, financing and inspections add another 45–60 days. We close in 7–14 days — "
        "cash, no contingencies. We serve all of Harrisburg and Dauphin County."
    ),
    "king-of-prussia-pa": (
        "Quick Answer: Sell Your House Fast in King of Prussia, PA",
        "USA Home Buyers purchases houses in King of Prussia, PA for cash — no repairs, no fees, "
        "close in your timeline. According to the Zillow Home Value Index, the King of Prussia median "
        "home value is $453,560 (February 2026, +5.9% year-over-year); Redfin's median closed sale "
        "price is $549,350. The typical KOP home takes 34 days to go pending and another 45–60 days "
        "to close — roughly 80–95 days total. We close in 7–14 days. No inspections, no appraisals, "
        "no financing contingencies. Montgomery County's standard 2% transfer tax applies; we cover "
        "all closing costs."
    ),
    "reading-pa": (
        "Quick Answer: Sell Your House Fast in Reading, PA",
        "USA Home Buyers purchases houses in Reading, PA for cash — as-is, any condition, no repairs. "
        "According to the Zillow Home Value Index, the typical Reading home value is $227,041 (early 2026, "
        "+7.8% year-over-year); Redfin's median closed sale price is $185,000. Important: Reading has one "
        "of Pennsylvania's highest transfer tax rates — 5% total (4% City + 1% State). We cover all "
        "closing costs, including the full transfer tax. Written offer within 24 hours, closing in as "
        "few as 7 days. Hablamos español — 70.8% of Reading is Hispanic."
    ),
    "state-college-pa": (
        "Quick Answer: Sell Your House Fast in State College, PA",
        "USA Home Buyers purchases houses in State College, PA for cash — as-is, in any condition, "
        "with no repairs and no agent fees. According to the Zillow Home Value Index, the State College "
        "median home value is $408,500 (March 2026, +0.9% year-over-year); Redfin's median closed sale "
        "price is $450,000 with a Compete Score of 93/100 — among the most competitive in Pennsylvania. "
        "Homes go pending in 5 days on average. We close in 7–14 days, no inspections or financing "
        "contingencies. We serve all of State College and Centre County."
    ),
}

# Situation sub-pages — (market_slug, situation_slug) → (heading, text)
SITUATION_TLDR = {

    # ── CODE VIOLATIONS ───────────────────────────────────────────────────────
    ("allentown-pa", "code-violations"): (
        "Quick Answer",
        "Yes, USA Home Buyers purchases houses with code violations in Allentown, PA — as-is, "
        "with no repairs required before closing. Allentown's older housing stock (much of it "
        "pre-1950 row homes in Center City, Jordan Heights, and the South Side) commonly carries "
        "violations for deferred maintenance, electrical issues, or open permit work. When we buy "
        "your property, existing violations transfer with the deed — you don't have to fix them, "
        "remediate them, or delay closing to address them. Written cash offer in 24 hours."
    ),
    ("bethlehem-pa", "code-violations"): (
        "Quick Answer",
        "Yes, USA Home Buyers purchases houses with code violations in Bethlehem, PA — as-is, "
        "with no repairs required before closing. Bethlehem's South Side row home stock (most "
        "built for Bethlehem Steel workers between 1890 and 1930) frequently has deferred "
        "maintenance violations, open permit issues, or City of Bethlehem Notice of Violation "
        "letters. When we buy your property, existing violations transfer with the deed. You "
        "close on your timeline without touching a single violation. Written cash offer in 24 hours."
    ),
    ("erie-pa", "code-violations"): (
        "Quick Answer",
        "Yes, USA Home Buyers purchases houses with code violations in Erie, PA — as-is, with no "
        "repairs required before closing. Erie's older housing stock in neighborhoods like Little "
        "Italy, East Side, and the Bayfront District commonly carries City of Erie code enforcement "
        "violations from deferred maintenance, structural issues, or abandoned-property notices. "
        "When we buy, violations transfer with the deed. You don't need to fix anything to close. "
        "Written cash offer in 24 hours."
    ),
    ("lancaster-pa", "code-violations"): (
        "Quick Answer",
        "Yes, USA Home Buyers purchases houses with code violations in Lancaster, PA — as-is, with "
        "no repairs before closing. Lancaster City's older row home neighborhoods (Cabbage Hill, "
        "Southeast, Northwest Lancaster) frequently have City of Lancaster Bureau of Housing & "
        "Codes violations for deferred maintenance, exterior disrepair, or electrical updates. "
        "When we buy, violations transfer with the deed — you close without addressing them. "
        "Written cash offer in 24 hours."
    ),
    ("wilmington-de", "code-violations"): (
        "Quick Answer",
        "Yes, USA Home Buyers purchases houses with code violations in Wilmington, DE — as-is, "
        "with no repairs required before closing. Wilmington's older housing stock on the West Side, "
        "Hilltop, and East Side frequently carries City of Wilmington Inspections & Licensing "
        "violations. Delaware requires disclosure of known violations but does not require sellers "
        "to remediate them before closing. When we buy, violations transfer with the deed. "
        "Written cash offer in 24 hours."
    ),
    ("york-pa", "code-violations"): (
        "Quick Answer",
        "Yes, USA Home Buyers purchases houses with code violations in York, PA — as-is, with no "
        "repairs required before closing. York's historic row home neighborhoods (Northeast York, "
        "Southwest York, and South Penn) carry York City Bureau of Code Enforcement violations for "
        "deferred maintenance, exterior disrepair, or open permit work. When we buy, violations "
        "transfer with the deed — you close without addressing them. Written cash offer in 24 hours."
    ),
    ("youngstown-oh", "code-violations"): (
        "Quick Answer",
        "Yes, USA Home Buyers purchases houses with code violations in Youngstown, OH — as-is, "
        "with no repairs required before closing. Youngstown's housing stock (heavily concentrated "
        "in pre-1940 working-class homes) frequently carries City of Youngstown Property Maintenance "
        "Code violations, open permits, or exterior disrepair notices. When we buy, violations "
        "transfer with the deed. You close on your timeline without touching a single issue. "
        "Written cash offer in 24 hours."
    ),

    # ── TENANT-OCCUPIED ───────────────────────────────────────────────────────
    ("bethlehem-pa", "tenant-occupied"): (
        "Quick Answer",
        "Yes, USA Home Buyers buys tenant-occupied properties in Bethlehem, PA. Pennsylvania law "
        "(68 P.S. § 250.101 et seq.) requires existing leases to transfer with the property — the "
        "new owner becomes the landlord. Fixed-term leases must be honored until expiration; "
        "month-to-month tenancies can be terminated with 15–30 days notice depending on lease "
        "length. We buy with the tenant in place — no eviction required before closing. Written "
        "cash offer within 24 hours."
    ),
    ("lancaster-pa", "tenant-occupied"): (
        "Quick Answer",
        "Yes, USA Home Buyers buys tenant-occupied properties in Lancaster, PA. Pennsylvania law "
        "(68 P.S. § 250.101 et seq.) requires the lease to transfer with the property — the buyer "
        "becomes the new landlord at closing. Fixed-term leases transfer intact; month-to-month "
        "tenancies require 15–30 days written notice to terminate. We buy with the tenant in place — "
        "no eviction required before closing. Written cash offer within 24 hours. We serve all of "
        "Lancaster City and Lancaster County."
    ),
    ("york-pa", "tenant-occupied"): (
        "Quick Answer",
        "Yes, USA Home Buyers buys tenant-occupied properties in York, PA. Pennsylvania law "
        "(68 P.S. § 250.101 et seq.) requires existing leases to transfer to the new owner at "
        "closing — you don't need to evict the tenant before selling. Fixed-term leases transfer "
        "intact; month-to-month tenancies can be ended with 15–30 days written notice. We buy with "
        "the tenant in place — no eviction, no vacancy requirement. Written cash offer within 24 hours."
    ),
    ("youngstown-oh", "tenant-occupied"): (
        "Quick Answer",
        "Yes, USA Home Buyers buys tenant-occupied properties in Youngstown, OH. Under Ohio law "
        "(Ohio Revised Code § 5321), existing leases transfer with the property — the buyer assumes "
        "the landlord role at closing. Fixed-term leases must be honored through the lease term; "
        "month-to-month tenancies require 30 days written notice to terminate. We buy with the "
        "tenant in place — no eviction before closing. Written cash offer within 24 hours."
    ),

    # ── FIRE DAMAGE ───────────────────────────────────────────────────────────
    ("bethlehem-pa", "fire-damage"): (
        "Quick Answer",
        "Yes, USA Home Buyers buys fire-damaged houses in Bethlehem, PA — as-is, regardless of "
        "the extent of damage. Whether it's partial smoke damage, water damage from firefighting, "
        "or a complete structural loss, we buy the property in its current condition. You don't "
        "need to open an insurance claim, file a permit, or make any repairs before closing. "
        "We handle the assessment and restoration from there. Written cash offer within 24 hours."
    ),
    ("lancaster-pa", "fire-damage"): (
        "Quick Answer",
        "Yes, USA Home Buyers buys fire-damaged houses in Lancaster, PA — as-is, regardless of "
        "the extent of damage. Whether it's smoke damage, water damage from fire suppression, or "
        "a major structural loss, we assess and purchase in current condition. You don't need to "
        "coordinate with your insurance company, open a claim, or make any repairs before closing. "
        "We handle everything from acquisition forward. Written cash offer within 24 hours."
    ),
    ("york-pa", "fire-damage"): (
        "Quick Answer",
        "Yes, USA Home Buyers buys fire-damaged houses in York, PA — as-is, in any condition. "
        "Whether there's partial smoke damage to one room or the structure is a total loss, we "
        "assess and purchase in current condition. No repairs, no insurance coordination required "
        "from the seller. We close in as few as 7 days. Written cash offer within 24 hours."
    ),
    ("youngstown-oh", "fire-damage"): (
        "Quick Answer",
        "Yes, USA Home Buyers buys fire-damaged houses in Youngstown, OH — as-is, regardless of "
        "the extent of damage. Youngstown's older housing stock (much of it pre-1940) is "
        "particularly susceptible to fire damage, and many properties sit vacant after a fire "
        "without immediate buyers. We assess and purchase in current condition — no repairs, "
        "no insurance claim required from you. Written cash offer within 24 hours."
    ),

    # ── MARKET REPORT ─────────────────────────────────────────────────────────
    ("bethlehem-pa", "market-report"): (
        "Quick Answer: Bethlehem PA Housing Market 2026",
        "According to Redfin (February 2026), Bethlehem's median home sale price is $320,000, "
        "up 16.6% year-over-year. The Zillow Home Value Index (ZHVI) for Bethlehem is $350,600 "
        "(+2.9% annually). Homes go pending in ~10 days and sell above list price (100.5% "
        "sale-to-list ratio, per Redfin) — a very competitive seller's market. Cash buyers "
        "typically offer 70–80% of fair market value, closing in 7–14 days without repairs, "
        "showings, or agent commissions."
    ),
    ("erie-pa", "market-report"): (
        "Quick Answer: Erie PA Housing Market 2026",
        "Erie's city-limit home values average approximately $115,000–$120,000 based on Zillow "
        "ZHVI data and zip-code-level Redfin analysis (February 2026); suburban Erie (zip codes "
        "16505/16509) commands $250,000–$300,000. Despite low price points, Erie's market is "
        "competitive — Redfin rates it 'Very Competitive' across most zip codes. Erie County "
        "charges the standard Pennsylvania transfer tax of 2% (split 1%/1% buyer/seller). Cash "
        "buyers offer 70–80% of FMV, closing in 7–14 days as-is."
    ),
    ("lancaster-pa", "market-report"): (
        "Quick Answer: Lancaster PA Housing Market 2026",
        "According to the Zillow Home Value Index, Lancaster City's typical home value is $332,965 "
        "(+6.8% year-over-year, February 2026). Redfin tracks Lancaster County's median sale price "
        "at $347,838 (+3.8% YoY) — the city-only figure fluctuates due to small monthly sample "
        "size. The market is very tight: Redfin Compete Score is 84/100. Lancaster County charges "
        "the standard Pennsylvania 2% transfer tax. Cash buyers typically offer 70–80% of FMV, "
        "closing in 7–14 days without repairs or fees."
    ),
    ("reading-pa", "market-report"): (
        "Quick Answer: Reading PA Housing Market 2026",
        "According to Redfin (February 2026), Reading's median home sale price is $185,000 (-1.1% "
        "year-over-year); the Zillow Home Value Index puts the typical home value at $227,041 "
        "(+7.8%). Homes average 24 days on market. Critical note: Reading has a 5% total transfer "
        "tax (4% City of Reading + 1% PA State) — one of the highest in Pennsylvania. Cash buyers "
        "cover all closing costs including the full transfer tax, and close in 7–14 days as-is."
    ),
    ("state-college-pa", "market-report"): (
        "Quick Answer: State College PA Housing Market 2026",
        "According to Redfin (February 2026), State College's median home sale price is $450,000 "
        "(-0.22% year-over-year) with a Compete Score of 93/100 — one of the most competitive "
        "markets in Pennsylvania. The Zillow Home Value Index for State College is $408,500 "
        "(+0.9% annually, March 2026). Homes average 5 days to pending. Centre County charges "
        "the standard Pennsylvania 2% transfer tax. Cash buyers offer 70–80% of FMV, closing in "
        "7–14 days without repairs, contingencies, or agent commissions."
    ),
    ("wilmington-de", "market-report"): (
        "Quick Answer: Wilmington DE Housing Market 2026",
        "According to Redfin (February 2026), Wilmington's median home sale price is $210,000 "
        "(-6.7% year-over-year), with a median 72 days on market and a Redfin Compete Score of "
        "61/100 ('Somewhat Competitive'). The Zillow Home Value Index shows $326,763 (+3.0% "
        "year-over-year) — the gap between Redfin's sale price and Zillow's ZHVI reflects "
        "Wilmington's mix of city-limit and suburban New Castle County properties. Delaware's "
        "total transfer tax is 4% (2.5% state + 1.5% city of Wilmington). Cash buyers cover "
        "all closing costs and close in 7–14 days as-is."
    ),
    ("york-pa", "market-report"): (
        "Quick Answer: York PA Housing Market 2026",
        "According to Redfin (February 2026), York's Redfin Compete Score is 86/100 ('Very "
        "Competitive'). Per the U.S. Census Bureau ACS (via DataUSA), York City's homeownership "
        "rate is 43.7% — over half the city rents. York County charges the standard Pennsylvania "
        "2% transfer tax (1% buyer / 1% seller). Cash buyers typically offer 70–80% of fair "
        "market value and close in 7–14 days without repairs, showings, or agent commissions."
    ),
}

# Guide and answer-hub pages — path_key → (heading, text)
# path_key is relative to the app directory, e.g. "guides/probate"
GUIDE_TLDR = {
    "guides/probate": (
        "Quick Answer: Selling a House During Probate in Pennsylvania",
        "Yes, you can sell a house while it is in probate in Pennsylvania — once the executor or "
        "administrator has Letters Testamentary or Letters of Administration from the county "
        "Register of Wills. Pennsylvania probate typically takes 9–18 months for a simple estate. "
        "You do not need to wait for probate to complete: you can sign a purchase agreement during "
        "probate and close once the executor has legal authority to deed the property. USA Home "
        "Buyers works with estate executors throughout Pennsylvania and closes in as few as 7 days."
    ),
    "guides/tenant-occupied": (
        "Quick Answer: Selling a Tenant-Occupied House in Pennsylvania",
        "Yes, you can sell a tenant-occupied house in Pennsylvania without evicting the tenant "
        "first. Under the Pennsylvania Landlord and Tenant Act (68 P.S. § 250.101 et seq.), "
        "existing leases transfer with the property — the buyer becomes the new landlord at "
        "closing. Fixed-term leases must be honored through the lease end; month-to-month "
        "tenancies require 15–30 days written notice to terminate. USA Home Buyers purchases "
        "tenant-occupied properties as-is throughout Pennsylvania — no eviction required before "
        "we close."
    ),
    "guides/vacant-property": (
        "Quick Answer: Selling a Vacant or Abandoned Property in Pennsylvania",
        "Yes, you can sell a vacant or abandoned property in Pennsylvania — but timing matters. "
        "Vacant properties often accumulate code violations, property maintenance citations, and "
        "tax arrears that can cloud the title or trigger municipal fines. Pennsylvania municipalities "
        "have the authority to place liens on vacant properties for maintenance costs. USA Home "
        "Buyers purchases vacant properties as-is throughout Pennsylvania — any condition, any "
        "citation history. We close in as few as 7 days and handle title issues directly."
    ),
    "sell-house-fast-pennsylvania": (
        "Quick Answer: Sell Your House Fast in Pennsylvania",
        "USA Home Buyers purchases houses throughout Pennsylvania for cash — as-is, in any "
        "condition, with no repairs and no agent fees. We serve 11 markets across PA: Harrisburg, "
        "Allentown, Bethlehem, Lancaster, York, Reading, Erie, State College, and King of Prussia. "
        "According to the Zillow Home Value Index, Pennsylvania's statewide median home value is "
        "approximately $287,000 (early 2026). Pennsylvania charges a 2% transfer tax (1% state + "
        "1% local) — we cover all closing costs. Written offer within 24 hours, closing in 7–14 days."
    ),
    "sell-house-fast-delaware": (
        "Quick Answer: Sell Your House Fast in Delaware",
        "USA Home Buyers purchases houses in Delaware for cash — as-is, in any condition, with no "
        "repairs and no agent fees. We serve Wilmington and all of New Castle County. Delaware uses "
        "judicial foreclosure with a 170–210 day statutory process. Delaware's total real estate "
        "transfer tax is 4% (2.5% state + 1.5% city of Wilmington for city properties) — we cover "
        "all closing costs. According to Redfin (February 2026), Wilmington's median home sale "
        "price is $210,000. Written cash offer within 24 hours, closing in 7–14 days."
    ),
    "sell-house-fast-ohio": (
        "Quick Answer: Sell Your House Fast in Ohio",
        "USA Home Buyers purchases houses in Ohio for cash — as-is, in any condition, with no "
        "repairs and no agent fees. We serve Youngstown and all of Mahoning County. Ohio uses "
        "judicial foreclosure through county courts of common pleas, typically running 6–24 months. "
        "Ohio has no state real estate transfer tax; Mahoning County charges a conveyance fee of "
        "$4 per $1,000 of sale price. According to Redfin (February 2026), Youngstown's median "
        "home sale price is $129,200. Written cash offer within 24 hours, closing in 7–14 days."
    ),
}


# ─────────────────────────────────────────────────────────────────────────────
# INJECTION LOGIC
# ─────────────────────────────────────────────────────────────────────────────

def make_tldr_block(heading: str, text: str) -> str:
    """Return the JSX TL;DR block (simple blue box variant)."""
    return (
        "\n        {/* TL;DR — GEO/AEO Quick Answer */}\n"
        "        <div className=\"bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10\">\n"
        f"          <h2 className=\"text-lg font-bold text-brand-dark mb-2\">{heading}</h2>\n"
        f"          <p className=\"text-gray-700 text-sm leading-relaxed\">{text}</p>\n"
        "        </div>\n"
    )


def make_hub_tldr_block(heading: str, text: str) -> str:
    """Return the JSX TL;DR block for hub pages (inserted as a <section>)."""
    return (
        "\n        {/* TL;DR — GEO/AEO Quick Answer */}\n"
        "        <section className=\"my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8\">\n"
        f"          <h2 className=\"text-xl md:text-2xl font-bold text-brand-dark mb-3\">{heading}</h2>\n"
        f"          <p className=\"text-gray-700 leading-relaxed\">{text}</p>\n"
        "        </section>\n"
    )


ALREADY_HAS_TLDR = [
    "bg-blue-50 border-l-4",
    "Quick Answer",
    "TL;DR",
    "What You Need to Know",
]

# Pattern for situation/guide pages: max-w-4xl container
CONTAINER_PATTERN = re.compile(
    r'(<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">)'
)
# Pattern for hub pages: main content max-w-7xl container (not the hero grid)
HUB_CONTAINER_PATTERN = re.compile(
    r'(<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">)'
)


def already_has_tldr(content: str) -> bool:
    return any(marker in content for marker in ALREADY_HAS_TLDR)


def inject_tldr(file_path: str, heading: str, text: str, is_hub: bool = False) -> bool:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if already_has_tldr(content):
        print(f"  ↩ SKIP (already has TL;DR): {file_path}")
        return False

    if is_hub:
        tldr_block = make_hub_tldr_block(heading, text)
        # For hub pages, insert after first bare max-w-7xl content div
        if HUB_CONTAINER_PATTERN.search(content):
            new_content = HUB_CONTAINER_PATTERN.sub(
                r'\1' + "\n" + tldr_block,
                content,
                count=1
            )
        else:
            print(f"  ✗ CANNOT INSERT (no max-w-7xl container found): {file_path}")
            return False
    else:
        tldr_block = make_tldr_block(heading, text)
        # Try <article> first, then max-w-4xl container
        if "<article>" in content:
            new_content = content.replace("<article>", "<article>" + tldr_block, 1)
        elif CONTAINER_PATTERN.search(content):
            new_content = CONTAINER_PATTERN.sub(
                r'\1' + "\n" + tldr_block,
                content,
                count=1
            )
        else:
            print(f"  ✗ CANNOT INSERT (no article or container found): {file_path}")
            return False

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"  ✓ INJECTED: {file_path}")
    return True


def main():
    modified = 0
    skipped = 0
    errors = 0

    # ── 1. Market hub pages ─────────────────────────────────────────────────
    print("\n=== Market Hub Pages ===")
    for market_slug, (heading, text) in HUB_TLDR.items():
        page_path = os.path.join(MARKETS_BASE, market_slug, "page.tsx")
        if not os.path.exists(page_path):
            print(f"  ✗ NOT FOUND: {page_path}")
            errors += 1
            continue
        result = inject_tldr(page_path, heading, text, is_hub=True)
        if result:
            modified += 1
        else:
            skipped += 1

    # ── 2. Market situation sub-pages ───────────────────────────────────────
    print("\n=== Market Situation Pages ===")
    for (market, situation), (heading, text) in SITUATION_TLDR.items():
        page_path = os.path.join(MARKETS_BASE, market, situation, "page.tsx")
        if not os.path.exists(page_path):
            print(f"  ✗ NOT FOUND: {page_path}")
            errors += 1
            continue
        result = inject_tldr(page_path, heading, text, is_hub=False)
        if result:
            modified += 1
        else:
            skipped += 1

    # ── 3. Guide and app-root pages ─────────────────────────────────────────
    print("\n=== Guide / App Pages ===")
    for path_key, (heading, text) in GUIDE_TLDR.items():
        page_path = os.path.join(APP_BASE, path_key, "page.tsx")
        if not os.path.exists(page_path):
            print(f"  ✗ NOT FOUND: {page_path}")
            errors += 1
            continue
        result = inject_tldr(page_path, heading, text, is_hub=False)
        if result:
            modified += 1
        else:
            skipped += 1

    print(f"\n{'='*60}")
    print(f"Done. Modified: {modified} | Skipped: {skipped} | Errors: {errors}")


if __name__ == "__main__":
    main()
