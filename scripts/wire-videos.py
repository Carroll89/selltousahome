#!/usr/bin/env python3
"""Wire VideoEmbed into State College situation pages."""
import re

PAGES = {
    'app/markets/state-college-pa/foreclosure/page.tsx': {
        'slug': 'state-college-foreclosure',
        'title': 'Facing Foreclosure in State College PA?',
        'subtitle': 'How to sell before the sheriff sale in Centre County',
        'transcript': "If you're facing foreclosure in Centre County, time matters. We can make a cash offer and close before your sheriff sale date. No banks, no delays. You walk away with equity instead of losing the house. Call 888-274-5006 — we move fast when deadlines are tight.",
    },
    'app/markets/state-college-pa/divorce-sale/page.tsx': {
        'slug': 'state-college-divorce',
        'title': 'Selling a House During Divorce in State College',
        'subtitle': 'One offer, one closing, clean split of proceeds',
        'transcript': "Going through a divorce and need to sell the house in State College? We make one offer, both parties sign, and we close in 7 to 14 days. No agents, no open houses, no dragging it out. Proceeds get split at closing per your agreement.",
    },
    'app/markets/state-college-pa/probate/page.tsx': {
        'slug': 'state-college-probate',
        'title': 'Selling Probate Property in State College PA',
        'subtitle': 'Working with executors and Centre County Register of Wills',
        'transcript': "Handling a probate sale in Centre County? We work directly with executors and the Register of Wills office. We buy as-is, no repairs needed, and we close around probate timelines. Cash offer in 24 hours.",
    },
    'app/markets/state-college-pa/tenant-occupied/page.tsx': {
        'slug': 'state-college-tenant',
        'title': 'Sell a Rental Property in State College PA',
        'subtitle': 'Done with student rentals? We buy tenant-occupied homes as-is',
        'transcript': "Done with student rentals in State College? We buy tenant-occupied properties. No need to evict, no need to wait for leases to end. We take it off your hands as-is. Cash offer in 24 hours.",
    },
    'app/markets/state-college-pa/fire-damage/page.tsx': {
        'slug': 'state-college-fire-damage',
        'title': 'Sell a Fire-Damaged House in State College PA',
        'subtitle': 'No restoration required — we buy fire-damaged homes as-is',
        'transcript': "Fire damage doesn't mean you're stuck. We buy fire-damaged houses in State College and Centre County as-is. No restoration required, no insurance runaround. Fair cash offer in 24 hours.",
    },
    'app/markets/state-college-pa/code-violations/page.tsx': {
        'slug': 'state-college-code-violations',
        'title': 'Sell a House With Code Violations in State College',
        'subtitle': 'Open violations, failed inspections — we buy as-is',
        'transcript': "Got code violations on your State College property? We buy houses with open violations, failed inspections, and unpermitted work. No need to fix anything. We handle it all after closing.",
    },
}

for filepath, info in PAGES.items():
    with open(filepath, 'r') as f:
        content = f.read()

    # Add VideoEmbed import if not present
    if 'VideoEmbed' not in content:
        content = content.replace(
            "import { SchemaMarkup } from '@/components/SchemaMarkup';",
            "import { SchemaMarkup } from '@/components/SchemaMarkup';\nimport { VideoEmbed } from '@/components/VideoEmbed';"
        )

    # Build video block
    video_block = f'''
      <VideoEmbed
        src="/videos/{info['slug']}.mp4"
        title="{info['title']}"
        poster="/videos/{info['slug']}-poster.jpg"
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
'''

    # Insert before first CashOfferForm
    if '<CashOfferForm' in content and f'src="/videos/{info["slug"]}.mp4"' not in content:
        content = content.replace(
            '          <CashOfferForm',
            video_block + '          <CashOfferForm',
            1  # only first occurrence
        )

    with open(filepath, 'w') as f:
        f.write(content)

    print(f'✓ {filepath}')

print('Done!')
