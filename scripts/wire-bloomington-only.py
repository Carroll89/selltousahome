#!/usr/bin/env python3
"""Wire VideoEmbed into Bloomington IL pages ONLY (11 pages: 10 situation + 1 landing)."""
import os

ROOT = "/Users/agents/selltousahome"
PHONE = "888-274-5006"

SITUATION_PAGES = {
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
}

LANDING_PAGE = {
    "app/markets/bloomington-il/page.tsx": {
        "market": "bloomington-il",
        "slug": "landing",
        "title": "Sell My House Fast Bloomington IL — USA Home Buyers",
        "subtitle": "Cash offers for Bloomington, Normal, and McLean County homes — any condition",
        "transcript": f"Need to sell your house fast in Bloomington, Illinois? USA Home Buyers purchases homes as-is for cash throughout McLean County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call {PHONE}.",
        "insert_before": '            <CashOfferForm\n              variant="hero"\n              headline="Get Your Bloomington IL Cash Offer"',
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

    if f'src="{video_src}"' in content:
        print(f"  ✓ Already wired: {market}/{slug}")
        return "already_wired"

    mp4_path = os.path.join(ROOT, "public", "videos", market, f"{slug}.mp4")
    if not os.path.exists(mp4_path):
        print(f"  ✗ MP4 not found: {mp4_path}")
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

    if f'src="{video_src}"' in content:
        print(f"  ✓ Already wired landing: {market}")
        return "already_wired"

    mp4_path = os.path.join(ROOT, "public", "videos", market, f"{slug}.mp4")
    if not os.path.exists(mp4_path):
        print(f"  ✗ Landing MP4 not found: {mp4_path}")
        return "mp4_missing"

    if "VideoEmbed" not in content:
        first_import = content.find("import ")
        first_newline = content.find("\n", first_import)
        content = content[:first_newline+1] + "import { VideoEmbed } from '@/components/VideoEmbed';\n" + content[first_newline+1:]

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
        idx = content.find(hero_marker)
        start = content.rfind("<CashOfferForm", 0, idx)
        if start != -1:
            line_start = content.rfind("\n", 0, start) + 1
            content = content[:line_start] + video_block + content[line_start:]
            with open(full_path, "w") as f:
                f.write(content)
            print(f"  ✓ Wired landing (fallback): {market}")
            return "wired"

    print(f"  WARN: no insertion point found for landing: {market}")
    return "no_insertion_point"


print("=== Wiring Bloomington IL situation pages (10 pages) ===")
results = {}
for filepath, info in SITUATION_PAGES.items():
    r = wire_situation_page(filepath, info)
    results[r] = results.get(r, 0) + 1

print(f"\nSituation page results: {results}")

print("\n=== Wiring Bloomington IL landing page ===")
landing_results = {}
for filepath, info in LANDING_PAGE.items():
    r = wire_landing_page(filepath, info)
    landing_results[r] = landing_results.get(r, 0) + 1

print(f"\nLanding page results: {landing_results}")
total = results.get('wired', 0) + landing_results.get('wired', 0)
already = results.get('already_wired', 0) + landing_results.get('already_wired', 0)
print(f"\nTotal wired: {total} | Already wired: {already}")
