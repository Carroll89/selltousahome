#!/usr/bin/env python3
"""Wire VideoEmbed into Oshkosh WI + New Haven CT situation pages."""
import os
import sys

ROOT = "/Users/agents/selltousahome"

PAGES = {
    # ── OSHKOSH WI ──────────────────────────────────────────────────────────
    "app/markets/oshkosh-wi/code-violations/page.tsx": {
        "slug": "code-violations",
        "market": "oshkosh-wi",
        "title": "Sell a House With Code Violations in Oshkosh WI",
        "subtitle": "Open violations, failed inspections — we buy as-is in Winnebago County",
        "transcript": "Got code violations on your Oshkosh property? Don't let the violation notices stop you. At USA Home Buyers, we purchase properties with open violations exactly as they are — no repairs, no permits. We handle it all after closing. Cash offer in 24 hours. Call 888-274-5006.",
    },
    "app/markets/oshkosh-wi/divorce-sale/page.tsx": {
        "slug": "divorce-sale",
        "market": "oshkosh-wi",
        "title": "Selling a House During Divorce in Oshkosh WI",
        "subtitle": "One offer, one closing, clean split of proceeds in Winnebago County",
        "transcript": "Going through a divorce in Oshkosh and need to sell the house? One cash offer, both parties sign, we close in 7 to 14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call 888-274-5006.",
    },
    "app/markets/oshkosh-wi/faq/page.tsx": {
        "slug": "faq",
        "market": "oshkosh-wi",
        "title": "Oshkosh WI Home Selling FAQ",
        "subtitle": "Foreclosure timelines, probate, code violations, closing speed — answered",
        "transcript": "Questions about selling in Oshkosh WI? Wisconsin judicial foreclosure gives you a redemption period. Inherited property requires Winnebago County probate. We buy with code violations, tenant-occupied, any condition. Close in as little as 7 days. Call 888-274-5006.",
    },
    "app/markets/oshkosh-wi/fire-damage/page.tsx": {
        "slug": "fire-damage",
        "market": "oshkosh-wi",
        "title": "Sell a Fire-Damaged House in Oshkosh WI",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in Winnebago County",
        "transcript": "Fire damage on your Oshkosh property? USA Home Buyers purchases fire-damaged homes in Winnebago County as-is. No contractor bids, no delays. Fair cash offer based on current condition. Call 888-274-5006.",
    },
    "app/markets/oshkosh-wi/foreclosure/page.tsx": {
        "slug": "foreclosure",
        "market": "oshkosh-wi",
        "title": "Facing Foreclosure in Oshkosh WI?",
        "subtitle": "Sell before the sheriff's sale — protect your equity and credit in Winnebago County",
        "transcript": "Facing foreclosure in Oshkosh? Wisconsin gives you a redemption period under Chapter 846, but don't wait. USA Home Buyers closes in 7 days, stops the process, and protects your credit. Call 888-274-5006 right now.",
    },
    "app/markets/oshkosh-wi/inherited-property/page.tsx": {
        "slug": "inherited-property",
        "market": "oshkosh-wi",
        "title": "Sell Inherited House in Oshkosh WI",
        "subtitle": "We work with Winnebago County probate timelines — as-is, any condition",
        "transcript": "Inherit a property in Oshkosh or Winnebago County? USA Home Buyers specializes in estate sales — we work with Wisconsin probate timelines. Buy as-is, any condition. Written cash offer in 24 hours. Call 888-274-5006.",
    },
    "app/markets/oshkosh-wi/market-report/page.tsx": {
        "slug": "market-report",
        "market": "oshkosh-wi",
        "title": "Oshkosh WI Real Estate Market Report 2026",
        "subtitle": "Fox Valley affordability, Lake Winnebago waterfront, steady appreciation",
        "transcript": "The Oshkosh WI market in 2026 — steady appreciation, Lake Winnebago waterfront appeal, Fox Valley affordability. Strong manufacturing employment base. If you're thinking about selling, USA Home Buyers gives you a cash offer in 24 hours. Call 888-274-5006.",
    },
    "app/markets/oshkosh-wi/neighborhoods/page.tsx": {
        "slug": "neighborhoods",
        "market": "oshkosh-wi",
        "title": "Oshkosh WI Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Lake Shore to Merritt to Algoma — any neighborhood, any condition",
        "transcript": "Lake Shore, Merritt, Algoma, Fair Acres — USA Home Buyers buys in every Oshkosh neighborhood. Brick bungalows, lakefront Victorians, ranch homes — any condition, any situation. Cash offer in 24 hours. Call 888-274-5006.",
    },
    "app/markets/oshkosh-wi/probate/page.tsx": {
        "slug": "probate",
        "market": "oshkosh-wi",
        "title": "Selling Probate Property in Oshkosh WI",
        "subtitle": "Working with personal representatives and Winnebago County Circuit Court",
        "transcript": "Oshkosh property in Wisconsin probate? USA Home Buyers works with personal representatives and estate attorneys in Winnebago County. We buy as-is once the court grants authority. Written cash offer in 24 hours. Call 888-274-5006.",
    },
    "app/markets/oshkosh-wi/tenant-occupied/page.tsx": {
        "slug": "tenant-occupied",
        "market": "oshkosh-wi",
        "title": "Sell a Rental Property in Oshkosh WI",
        "subtitle": "Done with landlording? We buy tenant-occupied homes as-is in Winnebago County",
        "transcript": "Done being a landlord in Oshkosh? USA Home Buyers buys tenant-occupied properties — no eviction needed, no waiting for leases. We handle everything after closing. Call 888-274-5006 for a fast cash offer.",
    },

    # ── NEW HAVEN CT ─────────────────────────────────────────────────────────
    "app/markets/new-haven-ct/code-violations/page.tsx": {
        "slug": "code-violations",
        "market": "new-haven-ct",
        "title": "Sell a House With Code Violations in New Haven CT",
        "subtitle": "Open violations, condemnation notices — we buy as-is in New Haven County",
        "transcript": "Code violations on your New Haven property? USA Home Buyers purchases properties with open violations and condemnation notices as-is. No repairs, no permits. Fair cash offer and fast close. Call 888-274-5006.",
    },
    "app/markets/new-haven-ct/divorce-sale/page.tsx": {
        "slug": "divorce-sale",
        "market": "new-haven-ct",
        "title": "Selling a House During Divorce in New Haven CT",
        "subtitle": "One offer, one closing, clean split of proceeds in New Haven County",
        "transcript": "Divorce in New Haven and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call 888-274-5006.",
    },
    "app/markets/new-haven-ct/faq/page.tsx": {
        "slug": "faq",
        "market": "new-haven-ct",
        "title": "New Haven CT Home Selling FAQ",
        "subtitle": "Transfer tax, probate, code violations, closing speed — answered",
        "transcript": "Questions about selling in New Haven CT? Connecticut transfer tax is 0.75% on most sales. Inherited property needs Probate Court approval. We buy with code violations, any neighborhood including Fair Haven and The Hill. Close in 7 days. Call 888-274-5006.",
    },
    "app/markets/new-haven-ct/fire-damage/page.tsx": {
        "slug": "fire-damage",
        "market": "new-haven-ct",
        "title": "Sell a Fire-Damaged House in New Haven CT",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in New Haven County",
        "transcript": "Fire damage on your New Haven property? USA Home Buyers buys fire-damaged homes in New Haven County as-is. No contractor estimates, no insurance delays. Fair cash offer on current condition. Call 888-274-5006.",
    },
    "app/markets/new-haven-ct/foreclosure/page.tsx": {
        "slug": "foreclosure",
        "market": "new-haven-ct",
        "title": "Facing Foreclosure in New Haven CT?",
        "subtitle": "Sell before the auction — protect your equity and credit in New Haven County",
        "transcript": "Foreclosure in New Haven? Connecticut is a judicial foreclosure state — you may have time, but don't wait. USA Home Buyers closes in 7 days, stops the process, and protects your credit. Call 888-274-5006 right now.",
    },
    "app/markets/new-haven-ct/inherited-property/page.tsx": {
        "slug": "inherited-property",
        "market": "new-haven-ct",
        "title": "Sell Inherited House in New Haven CT",
        "subtitle": "We work with New Haven Probate Court — as-is, any condition",
        "transcript": "Inherit a property in New Haven? USA Home Buyers works with executors through New Haven Probate Court at 200 Orange Street. We buy triple-deckers, Victorians, Cape Cods — as-is, any condition. Written cash offer in 24 hours. Call 888-274-5006.",
    },
    "app/markets/new-haven-ct/market-report/page.tsx": {
        "slug": "market-report",
        "market": "new-haven-ct",
        "title": "New Haven CT Real Estate Market Report 2026",
        "subtitle": "Yale University anchor, healthcare growth, steady appreciation in New Haven County",
        "transcript": "New Haven CT market 2026: Yale University and Yale New Haven Health anchor steady demand. Buyers priced out of Fairfield County discover New Haven affordability. Consistent appreciation. USA Home Buyers gives you a cash offer in 24 hours. Call 888-274-5006.",
    },
    "app/markets/new-haven-ct/neighborhoods/page.tsx": {
        "slug": "neighborhoods",
        "market": "new-haven-ct",
        "title": "New Haven CT Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Fair Haven to East Rock to Westville — any neighborhood, any condition",
        "transcript": "Fair Haven, The Hill, East Rock, Westville — USA Home Buyers buys in every New Haven neighborhood. Triple-deckers, Victorians, Colonials, two-families — any condition, any situation. Cash offer in 24 hours. Call 888-274-5006.",
    },
    "app/markets/new-haven-ct/probate/page.tsx": {
        "slug": "probate",
        "market": "new-haven-ct",
        "title": "Selling Probate Property in New Haven CT",
        "subtitle": "Working with executors and New Haven Probate Court — as-is, fast close",
        "transcript": "New Haven property in Connecticut probate? USA Home Buyers works with executors through New Haven Probate Court at 200 Orange Street. We close once the court approves. As-is, any condition. Written cash offer in 24 hours. Call 888-274-5006.",
    },
    "app/markets/new-haven-ct/tenant-occupied/page.tsx": {
        "slug": "tenant-occupied",
        "market": "new-haven-ct",
        "title": "Sell a Rental Property in New Haven CT",
        "subtitle": "Done with being a landlord? We buy tenant-occupied homes as-is in New Haven",
        "transcript": "Done being a landlord in New Haven? USA Home Buyers buys triple-deckers, duplexes, and single-families with tenants in place — no eviction, no waiting. We handle everything after closing. Call 888-274-5006.",
    },
}


def wire_page(filepath, info):
    full_path = os.path.join(ROOT, filepath)
    if not os.path.exists(full_path):
        print(f"  SKIP (not found): {filepath}")
        return False

    with open(full_path, "r") as f:
        content = f.read()

    slug = info["slug"]
    market = info["market"]
    video_src = f"/videos/{market}/{slug}.mp4"
    poster_src = f"/videos/{market}/{slug}-poster.jpg"

    # Skip if already wired
    if f'src="{video_src}"' in content:
        print(f"  ✓ Already wired: {market}/{slug}")
        return False

    # Check video file exists
    mp4_path = os.path.join(ROOT, "public", "videos", market, f"{slug}.mp4")
    if not os.path.exists(mp4_path):
        print(f"  ✗ MP4 not found, skipping wire: {mp4_path}")
        return False

    # Add VideoEmbed import if not present
    if "VideoEmbed" not in content:
        if "import { SchemaMarkup } from '@/components/SchemaMarkup';" in content:
            content = content.replace(
                "import { SchemaMarkup } from '@/components/SchemaMarkup';",
                "import { SchemaMarkup } from '@/components/SchemaMarkup';\nimport { VideoEmbed } from '@/components/VideoEmbed';"
            )
        elif "import type { Metadata } from 'next';" in content:
            content = content.replace(
                "import type { Metadata } from 'next';",
                "import type { Metadata } from 'next';\nimport { VideoEmbed } from '@/components/VideoEmbed';"
            )

    # Build video block — matches Springfield pattern exactly
    video_block = f"""
      <VideoEmbed
        src="{video_src}"
        title="{info['title']}"
        poster="{poster_src}"
        subtitle="{info['subtitle']}"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          {info['transcript']}
        </div>
      </details>
"""

    # Insert before first CashOfferForm
    if "<CashOfferForm" in content:
        content = content.replace(
            "          <CashOfferForm",
            video_block + "          <CashOfferForm",
            1  # only first occurrence
        )
    elif "<FAQSection" in content:
        content = content.replace(
            "        <FAQSection",
            video_block + "        <FAQSection",
            1
        )
    else:
        print(f"  WARN: no insertion point found for {market}/{slug}")
        return False

    with open(full_path, "w") as f:
        f.write(content)

    print(f"  ✓ Wired: {market}/{slug}")
    return True


wired = 0
skipped = 0
failed = 0

for filepath, info in PAGES.items():
    result = wire_page(filepath, info)
    if result is True:
        wired += 1
    elif result is False:
        # Could be skip or fail — distinguish by checking if mp4 exists
        market = info["market"]
        slug = info["slug"]
        mp4_path = os.path.join(ROOT, "public", "videos", market, f"{slug}.mp4")
        if os.path.exists(mp4_path):
            skipped += 1
        else:
            failed += 1

print(f"\nWiring complete: {wired} wired | {skipped} skipped | {failed} skipped (mp4 missing)")
