#!/usr/bin/env python3
"""Wire VideoEmbed into Bloomington IL, Peoria IL, and Champaign-Urbana IL situation pages + landing pages."""
import os
import sys

ROOT = "/Users/agents/selltousahome"

PHONE = "888-274-5006"

PAGES = {
    # ── BLOOMINGTON IL SITUATION PAGES ──────────────────────────────────────
    "app/markets/bloomington-il/code-violations/page.tsx": {
        "slug": "code-violations", "market": "bloomington-il",
        "title": "Sell a House With Code Violations in Bloomington IL",
        "subtitle": "Open violations, failed inspections — we buy as-is in McLean County",
        "transcript": f"Code violations on your Bloomington IL property? USA Home Buyers purchases properties with open violations as-is. No repairs, no permits on your end. Cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/bloomington-il/divorce-sale/page.tsx": {
        "slug": "divorce-sale", "market": "bloomington-il",
        "title": "Selling a House During Divorce in Bloomington IL",
        "subtitle": "One offer, one closing, clean split of proceeds in McLean County",
        "transcript": f"Divorce in Bloomington IL and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call {PHONE}.",
    },
    "app/markets/bloomington-il/faq/page.tsx": {
        "slug": "faq", "market": "bloomington-il",
        "title": "Bloomington IL Home Selling FAQ",
        "subtitle": "Foreclosure timelines, probate, code violations, closing speed — answered",
        "transcript": f"Questions about selling in Bloomington IL? Illinois judicial foreclosure runs 12-16 months in McLean County. Inherited property needs probate. We buy with code violations, tenant-occupied, any condition. Close in 7 days. Call {PHONE}.",
    },
    "app/markets/bloomington-il/fire-damage/page.tsx": {
        "slug": "fire-damage", "market": "bloomington-il",
        "title": "Sell a Fire-Damaged House in Bloomington IL",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in McLean County",
        "transcript": f"Fire damage on your Bloomington IL property? USA Home Buyers purchases fire-damaged homes in McLean County as-is. No contractor estimates, no delays. Cash offer on current condition. Call {PHONE}.",
    },
    "app/markets/bloomington-il/foreclosure/page.tsx": {
        "slug": "foreclosure", "market": "bloomington-il",
        "title": "Facing Foreclosure in Bloomington IL?",
        "subtitle": "Sell before the McLean County auction — protect your equity and credit",
        "transcript": f"Facing foreclosure in Bloomington IL? Illinois judicial foreclosure — once judgment enters, the clock runs. USA Home Buyers closes in 7 days, stops the process, protects your credit. Call {PHONE} right now.",
    },
    "app/markets/bloomington-il/inherited-property/page.tsx": {
        "slug": "inherited-property", "market": "bloomington-il",
        "title": "Sell Inherited House in Bloomington IL",
        "subtitle": "We work with McLean County probate timelines — as-is, any condition",
        "transcript": f"Inherit a property in Bloomington or McLean County? USA Home Buyers specializes in estate sales and works with Illinois probate timelines. Buy as-is, any condition. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/bloomington-il/market-report/page.tsx": {
        "slug": "market-report", "market": "bloomington-il",
        "title": "Bloomington IL Real Estate Market Report 2026",
        "subtitle": "State Farm headquarters, Illinois State University, steady appreciation in McLean County",
        "transcript": f"Bloomington IL market 2026: State Farm headquarters and Illinois State University anchor steady demand. Strong appreciation, affordable vs. Chicago. USA Home Buyers gives you a cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/bloomington-il/neighborhoods/page.tsx": {
        "slug": "neighborhoods", "market": "bloomington-il",
        "title": "Bloomington IL Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Eastside to Towanda to Normal — any neighborhood, any condition",
        "transcript": f"Eastside Bloomington, Grove, Towanda, Normal — USA Home Buyers buys in every McLean County neighborhood. Bungalows, ranches, two-stories — any condition, any situation. Cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/bloomington-il/probate/page.tsx": {
        "slug": "probate", "market": "bloomington-il",
        "title": "Selling Probate Property in Bloomington IL",
        "subtitle": "Working with personal representatives and McLean County Circuit Court",
        "transcript": f"Bloomington property in Illinois probate? USA Home Buyers works with personal representatives through McLean County Circuit Court. We buy as-is once the court grants authority. Cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/bloomington-il/tenant-occupied/page.tsx": {
        "slug": "tenant-occupied", "market": "bloomington-il",
        "title": "Sell a Rental Property in Bloomington IL",
        "subtitle": "Done with landlording? We buy tenant-occupied homes as-is in McLean County",
        "transcript": f"Done being a landlord in Bloomington or Normal? USA Home Buyers buys tenant-occupied properties — student rentals, long-term leases, Section 8. No eviction needed. We handle everything after closing. Call {PHONE}.",
    },

    # ── PEORIA IL SITUATION PAGES ─────────────────────────────────────────────
    "app/markets/peoria-il/code-violations/page.tsx": {
        "slug": "code-violations", "market": "peoria-il",
        "title": "Sell a House With Code Violations in Peoria IL",
        "subtitle": "Open violations, condemned properties — we buy as-is in Peoria County",
        "transcript": f"Code violations on your Peoria IL property? USA Home Buyers purchases properties with open violations and condemnations as-is. No repairs, no permits. Fair cash offer, fast close. Call {PHONE}.",
    },
    "app/markets/peoria-il/divorce-sale/page.tsx": {
        "slug": "divorce-sale", "market": "peoria-il",
        "title": "Selling a House During Divorce in Peoria IL",
        "subtitle": "One offer, one closing, clean split of proceeds in Peoria County",
        "transcript": f"Divorce in Peoria and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call {PHONE}.",
    },
    "app/markets/peoria-il/faq/page.tsx": {
        "slug": "faq", "market": "peoria-il",
        "title": "Peoria IL Home Selling FAQ",
        "subtitle": "Foreclosure timelines, probate, code violations, city transfer tax — answered",
        "transcript": f"Questions about selling in Peoria IL? Illinois judicial foreclosure runs 12-16 months. City transfer tax — we handle it. Inherited property needs probate. We buy with code violations, any condition. Close in 7 days. Call {PHONE}.",
    },
    "app/markets/peoria-il/fire-damage/page.tsx": {
        "slug": "fire-damage", "market": "peoria-il",
        "title": "Sell a Fire-Damaged House in Peoria IL",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in Peoria County",
        "transcript": f"Fire damage on your Peoria IL property? USA Home Buyers purchases fire-damaged homes in Peoria County as-is. No contractor bids, no delays. Fair cash offer on current condition. Call {PHONE}.",
    },
    "app/markets/peoria-il/foreclosure/page.tsx": {
        "slug": "foreclosure", "market": "peoria-il",
        "title": "Facing Foreclosure in Peoria IL?",
        "subtitle": "Sell before the Peoria County auction — protect your equity and credit",
        "transcript": f"Facing foreclosure in Peoria IL? Illinois judicial foreclosure — the clock starts at judgment. USA Home Buyers closes in 7 days, stops the process, protects your credit. Call {PHONE} right now.",
    },
    "app/markets/peoria-il/inherited-property/page.tsx": {
        "slug": "inherited-property", "market": "peoria-il",
        "title": "Sell Inherited House in Peoria IL",
        "subtitle": "We work with Peoria County probate timelines — as-is, any condition",
        "transcript": f"Inherit a property in Peoria or Peoria County? USA Home Buyers specializes in estate sales — we work with Illinois probate timelines through Peoria County Circuit Court. Buy as-is, any condition. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/peoria-il/market-report/page.tsx": {
        "slug": "market-report", "market": "peoria-il",
        "title": "Peoria IL Real Estate Market Report 2026",
        "subtitle": "Caterpillar headquarters, healthcare anchor, steady appreciation in Peoria County",
        "transcript": f"Peoria IL market 2026: Caterpillar headquarters and OSF HealthCare anchor steady demand. Illinois River waterfront appeal. Steady appreciation. USA Home Buyers gives you a cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/peoria-il/neighborhoods/page.tsx": {
        "slug": "neighborhoods", "market": "peoria-il",
        "title": "Peoria IL Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Richwoods to Riverdale to Peoria Heights — any neighborhood, any condition",
        "transcript": f"Richwoods, Northwoods, Riverdale, Peoria Heights — USA Home Buyers buys in every Peoria IL neighborhood. Bungalows, Victorians, ranches — any condition, any situation. Cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/peoria-il/probate/page.tsx": {
        "slug": "probate", "market": "peoria-il",
        "title": "Selling Probate Property in Peoria IL",
        "subtitle": "Working with personal representatives and Peoria County Circuit Court",
        "transcript": f"Peoria property in Illinois probate? USA Home Buyers works with personal representatives through Peoria County Circuit Court. We buy as-is once the court grants authority. Cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/peoria-il/tenant-occupied/page.tsx": {
        "slug": "tenant-occupied", "market": "peoria-il",
        "title": "Sell a Rental Property in Peoria IL",
        "subtitle": "Done with landlording? We buy tenant-occupied homes as-is in Peoria County",
        "transcript": f"Done being a landlord in Peoria? USA Home Buyers buys tenant-occupied properties — no eviction needed, no waiting for leases. We handle everything after closing. Call {PHONE} for a fast cash offer.",
    },

    # ── CHAMPAIGN-URBANA IL SITUATION PAGES ───────────────────────────────────
    "app/markets/champaign-urbana-il/code-violations/page.tsx": {
        "slug": "code-violations", "market": "champaign-urbana-il",
        "title": "Sell a House With Code Violations in Champaign-Urbana IL",
        "subtitle": "Open violations, failed inspections — we buy as-is in Champaign County",
        "transcript": f"Code violations on your Champaign-Urbana property? USA Home Buyers purchases properties with open violations as-is. No repairs, no permits. Cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/champaign-urbana-il/divorce-sale/page.tsx": {
        "slug": "divorce-sale", "market": "champaign-urbana-il",
        "title": "Selling a House During Divorce in Champaign-Urbana IL",
        "subtitle": "One offer, one closing, clean split of proceeds in Champaign County",
        "transcript": f"Divorce in Champaign-Urbana and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call {PHONE}.",
    },
    "app/markets/champaign-urbana-il/faq/page.tsx": {
        "slug": "faq", "market": "champaign-urbana-il",
        "title": "Champaign-Urbana IL Home Selling FAQ",
        "subtitle": "Foreclosure timelines, probate, University of Illinois market — answered",
        "transcript": f"Questions about selling in Champaign-Urbana? Illinois judicial foreclosure runs 12-16 months. We buy student rentals with tenants in place. Inherited property needs Champaign County probate. We buy as-is. Close in 7 days. Call {PHONE}.",
    },
    "app/markets/champaign-urbana-il/fire-damage/page.tsx": {
        "slug": "fire-damage", "market": "champaign-urbana-il",
        "title": "Sell a Fire-Damaged House in Champaign-Urbana IL",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in Champaign County",
        "transcript": f"Fire damage on your Champaign-Urbana property? USA Home Buyers purchases fire-damaged homes in Champaign County as-is. No contractor estimates, no delays. Cash offer on current condition. Call {PHONE}.",
    },
    "app/markets/champaign-urbana-il/foreclosure/page.tsx": {
        "slug": "foreclosure", "market": "champaign-urbana-il",
        "title": "Facing Foreclosure in Champaign-Urbana IL?",
        "subtitle": "Sell before the Champaign County auction — protect your equity and credit",
        "transcript": f"Facing foreclosure in Champaign-Urbana? Illinois judicial foreclosure — the clock starts at judgment. USA Home Buyers closes in 7 days, stops the process, protects your credit. Call {PHONE} right now.",
    },
    "app/markets/champaign-urbana-il/inherited-property/page.tsx": {
        "slug": "inherited-property", "market": "champaign-urbana-il",
        "title": "Sell Inherited House in Champaign-Urbana IL",
        "subtitle": "We work with Champaign County probate timelines — as-is, any condition",
        "transcript": f"Inherit a property in Champaign-Urbana? USA Home Buyers specializes in estate sales — we work with Illinois probate through Champaign County's 6th Judicial Circuit. Buy as-is, any condition. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/champaign-urbana-il/market-report/page.tsx": {
        "slug": "market-report", "market": "champaign-urbana-il",
        "title": "Champaign-Urbana IL Real Estate Market Report 2026",
        "subtitle": "University of Illinois anchor, tech sector growth, steady appreciation in Champaign County",
        "transcript": f"Champaign-Urbana IL market 2026: University of Illinois drives consistent demand and a strong rental market. Tech sector growth in Research Park. Steady appreciation while remaining affordable. USA Home Buyers gives you a cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/champaign-urbana-il/neighborhoods/page.tsx": {
        "slug": "neighborhoods", "market": "champaign-urbana-il",
        "title": "Champaign-Urbana IL Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Campustown to Savoy to Philo Road — any neighborhood, any condition",
        "transcript": f"Campustown, east Champaign, Urbana, Savoy — USA Home Buyers buys in every Champaign County neighborhood. Student rentals, brick ranches, Victorians — any condition, any situation. Cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/champaign-urbana-il/probate/page.tsx": {
        "slug": "probate", "market": "champaign-urbana-il",
        "title": "Selling Probate Property in Champaign-Urbana IL",
        "subtitle": "Working with personal representatives and Champaign County Circuit Court",
        "transcript": f"Champaign-Urbana property in Illinois probate? USA Home Buyers works with personal representatives through Champaign County's 6th Judicial Circuit. We buy as-is once the court grants authority. Cash offer in 24 hours. Call {PHONE}.",
    },
    "app/markets/champaign-urbana-il/tenant-occupied/page.tsx": {
        "slug": "tenant-occupied", "market": "champaign-urbana-il",
        "title": "Sell a Rental Property in Champaign-Urbana IL",
        "subtitle": "Done with landlording? We buy tenant-occupied homes as-is in Champaign County",
        "transcript": f"Done being a landlord near U of I? USA Home Buyers buys student rentals, duplexes, and single-families in Champaign-Urbana with tenants in place — no eviction, no waiting. We handle everything after closing. Call {PHONE}.",
    },
}

# Landing page VideoEmbed data
LANDING_PAGES = {
    "app/markets/bloomington-il/page.tsx": {
        "market": "bloomington-il",
        "slug": "landing",
        "title": "Sell My House Fast Bloomington IL — USA Home Buyers",
        "subtitle": "Cash offers for Bloomington, Normal, and McLean County homes — any condition",
        "transcript": f"Need to sell your house fast in Bloomington, Illinois? USA Home Buyers purchases homes as-is for cash throughout McLean County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call {PHONE}.",
        # What to insert before (the <div> containing CashOfferForm variant="hero")
        "insert_before": '            <CashOfferForm\n              variant="hero"\n              headline="Get Your Bloomington IL Cash Offer"',
    },
    "app/markets/peoria-il/page.tsx": {
        "market": "peoria-il",
        "slug": "landing",
        "title": "Sell My House Fast Peoria IL — USA Home Buyers",
        "subtitle": "Cash offers for Peoria and Peoria County homes — any condition",
        "transcript": f"Need to sell your house fast in Peoria, Illinois? USA Home Buyers purchases homes as-is for cash throughout Peoria County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call {PHONE}.",
        "insert_before": '            <CashOfferForm\n              variant="hero"\n              headline="Get Your Peoria IL Cash Offer"',
    },
    "app/markets/champaign-urbana-il/page.tsx": {
        "market": "champaign-urbana-il",
        "slug": "landing",
        "title": "Sell My House Fast Champaign-Urbana IL — USA Home Buyers",
        "subtitle": "Cash offers for Champaign, Urbana, and Champaign County homes — any condition",
        "transcript": f"Need to sell your house fast in Champaign-Urbana, Illinois? USA Home Buyers purchases homes as-is for cash throughout Champaign County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call {PHONE}.",
        "insert_before": None,  # Will try to find CashOfferForm variant="hero"
    },
}


def wire_situation_page(filepath, info):
    full_path = os.path.join(ROOT, filepath)
    if not os.path.exists(full_path):
        print(f"  SKIP (not found): {filepath}")
        return "missing"

    with open(full_path, "r") as f:
        content = f.read()

    slug = info["slug"]
    market = info["market"]
    video_src = f"/videos/{market}/{slug}.mp4"
    poster_src = f"/videos/{market}/{slug}-poster.jpg"

    # Skip if already wired
    if f'src="{video_src}"' in content:
        print(f"  ✓ Already wired: {market}/{slug}")
        return "already_wired"

    # Check video file exists
    mp4_path = os.path.join(ROOT, "public", "videos", market, f"{slug}.mp4")
    if not os.path.exists(mp4_path):
        print(f"  ✗ MP4 not found, skipping wire: {mp4_path}")
        return "mp4_missing"

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

    # Build video block — matches Springfield / Rockford pattern exactly
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
            1
        )
    elif "<FAQSection" in content:
        content = content.replace(
            "        <FAQSection",
            video_block + "        <FAQSection",
            1
        )
    else:
        print(f"  WARN: no insertion point found for {market}/{slug}")
        return "no_insertion_point"

    with open(full_path, "w") as f:
        f.write(content)

    print(f"  ✓ Wired: {market}/{slug}")
    return "wired"


def wire_landing_page(filepath, info):
    """Wire VideoEmbed into a landing page before the hero CashOfferForm."""
    full_path = os.path.join(ROOT, filepath)
    if not os.path.exists(full_path):
        print(f"  SKIP landing (not found): {filepath}")
        return "missing"

    with open(full_path, "r") as f:
        content = f.read()

    market = info["market"]
    slug = info["slug"]
    video_src = f"/videos/{market}/{slug}.mp4"
    poster_src = f"/videos/{market}/{slug}-poster.jpg"

    # Skip if already wired
    if f'src="{video_src}"' in content:
        print(f"  ✓ Already wired landing: {market}")
        return "already_wired"

    # Check video file exists
    mp4_path = os.path.join(ROOT, "public", "videos", market, f"{slug}.mp4")
    if not os.path.exists(mp4_path):
        print(f"  ✗ Landing MP4 not found: {mp4_path}")
        return "mp4_missing"

    # Add VideoEmbed import if not present
    if "VideoEmbed" not in content:
        # Insert after first import line
        first_import = content.find("import ")
        first_newline = content.find("\n", first_import)
        content = content[:first_newline+1] + "import { VideoEmbed } from '@/components/VideoEmbed';\n" + content[first_newline+1:]

    # Build the video block for landing page (matches Rockford pattern)
    video_block = f"""      <VideoEmbed
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

    # Try the specific insert_before anchor first
    anchor = info.get("insert_before")
    if anchor and anchor in content:
        content = content.replace(anchor, video_block + "      " + anchor.lstrip(), 1)
        with open(full_path, "w") as f:
            f.write(content)
        print(f"  ✓ Wired landing: {market}")
        return "wired"

    # Fallback: find variant="hero" CashOfferForm
    hero_marker = 'variant="hero"'
    if hero_marker in content:
        # Find the <CashOfferForm before variant="hero"
        idx = content.find(hero_marker)
        # Walk back to find <CashOfferForm
        start = content.rfind("<CashOfferForm", 0, idx)
        if start != -1:
            # Find the indentation
            line_start = content.rfind("\n", 0, start) + 1
            indent = content[line_start:start]
            insert_point = line_start
            content = content[:insert_point] + video_block + content[insert_point:]
            with open(full_path, "w") as f:
                f.write(content)
            print(f"  ✓ Wired landing (fallback): {market}")
            return "wired"

    print(f"  WARN: no hero CashOfferForm insertion point found for landing: {market}")
    return "no_insertion_point"


print("=== Wiring IL situation pages ===")
situation_results = {"wired": 0, "already_wired": 0, "mp4_missing": 0, "missing": 0, "no_insertion_point": 0}
for filepath, info in PAGES.items():
    r = wire_situation_page(filepath, info)
    situation_results[r] = situation_results.get(r, 0) + 1

print(f"\nSituation pages: {situation_results}")

print("\n=== Wiring IL landing pages ===")
landing_results = {"wired": 0, "already_wired": 0, "mp4_missing": 0, "missing": 0, "no_insertion_point": 0}
for filepath, info in LANDING_PAGES.items():
    r = wire_landing_page(filepath, info)
    landing_results[r] = landing_results.get(r, 0) + 1

print(f"\nLanding pages: {landing_results}")
print(f"\nTotal wired: {situation_results.get('wired', 0) + landing_results.get('wired', 0)}")
