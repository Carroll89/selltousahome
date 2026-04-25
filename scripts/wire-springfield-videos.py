#!/usr/bin/env python3
"""Wire VideoEmbed into Springfield IL situation pages."""
import re
import os

BASE = "/videos/springfield-il"

PAGES = {
    'app/markets/springfield-il/market-report/page.tsx': {
        'slug': 'market-report',
        'title': "Springfield IL Real Estate Market Report 2026",
        'subtitle': 'Why now is a strong time to sell in Sangamon County',
        'transcript': "As of early 2026, Springfield is one of the hottest small markets in the country — ranked #10 nationally. The median sale price hit $187,000 in March 2026, up 23% year-over-year. Homes are selling in just 27 days average. If you're thinking about selling in Springfield or anywhere in Sangamon County, this is a strong time to act. USA Home Buyers offers cash for homes in any condition. Call 888-274-5006.",
    },
    'app/markets/springfield-il/divorce-sale/page.tsx': {
        'slug': 'divorce-sale',
        'title': "Selling a House During Divorce in Springfield IL",
        'subtitle': 'One offer, one closing, clean split of proceeds in Sangamon County',
        'transcript': "Going through a divorce in Springfield? The family home doesn't have to become a battleground. At USA Home Buyers, we help couples in Sangamon County sell quickly and cleanly — so both parties can move on. We buy the house as-is, for cash, with no agents, no showings, and no delays. Call 888-274-5006 today for a free cash offer.",
    },
    'app/markets/springfield-il/probate/page.tsx': {
        'slug': 'probate',
        'title': "Selling Probate Property in Springfield IL",
        'subtitle': 'Working with executors and Sangamon County Circuit Court',
        'transcript': "Is a Springfield property tied up in probate? We can help. Once the court grants authority, USA Home Buyers can close fast. We work with estate attorneys, administrators, and heirs throughout the Springfield area. No repairs. No showings. No waiting for retail buyers. We buy as-is, for cash. Call us at 888-274-5006.",
    },
    'app/markets/springfield-il/tenant-occupied/page.tsx': {
        'slug': 'tenant-occupied',
        'title': "Sell a Rental Property in Springfield IL",
        'subtitle': 'Done with being a landlord? We buy tenant-occupied homes as-is',
        'transcript': "Trying to sell a rental property in Springfield with tenants still living there? At USA Home Buyers, we purchase tenant-occupied properties throughout Sangamon County, as-is. You don't have to evict anyone or wait for a lease to expire. Ready to exit your rental? Call us at 888-274-5006.",
    },
    'app/markets/springfield-il/code-violations/page.tsx': {
        'slug': 'code-violations',
        'title': "Sell a House With Code Violations in Springfield IL",
        'subtitle': 'Open violations, condemned notices — we buy as-is',
        'transcript': "Does your Springfield property have code violations? Don't let that stop you from selling. At USA Home Buyers, we buy properties with open violations — as-is, for cash. Whether it's structural issues, electrical problems, or a condemned notice — we've seen it all. Call us at 888-274-5006 for a free, no-obligation cash offer.",
    },
    'app/markets/springfield-il/fire-damage/page.tsx': {
        'slug': 'fire-damage',
        'title': "Sell a Fire-Damaged House in Springfield IL",
        'subtitle': 'No restoration required — we buy fire-damaged homes as-is',
        'transcript': "Did your Springfield home suffer fire damage? USA Home Buyers purchases fire-damaged homes throughout Springfield and Sangamon County, exactly as they are. We make a cash offer based on current condition — no repairs, no cleanup required. If you have a fire-damaged property and want a fast, fair exit — call us at 888-274-5006.",
    },
    'app/markets/springfield-il/faq/page.tsx': {
        'slug': 'faq',
        'title': "Springfield IL Home Selling FAQ",
        'subtitle': 'Transfer tax, probate, code violations, closing timeline — answered',
        'transcript': "Have questions about selling your house fast in Springfield? Illinois state transfer tax is 75 cents per $500, paid by the seller — and the City of Springfield charges zero municipal transfer tax. Can I sell with code violations? Yes, we buy as-is. What if my house is in probate? We work with executors throughout Sangamon County. How fast can you close? In some cases, seven days. Call 888-274-5006 — your question answered, your offer in 24 hours.",
    },
    'app/markets/springfield-il/neighborhoods/page.tsx': {
        'slug': 'neighborhoods',
        'title': "Springfield IL Neighborhoods — We Buy Houses Everywhere",
        'subtitle': 'Enos Park to Harvard Park to Aristocracy Hill — any neighborhood, any condition',
        'transcript': "Whether you're in Enos Park, Harvard Park, the West Side, Aristocracy Hill, or anywhere in Sangamon County — USA Home Buyers will make you a cash offer. We buy in all Springfield neighborhoods — any condition, any situation. You don't need to renovate, repaint, or even clean out. Ready for a cash offer? Call 888-274-5006.",
    },
    'app/markets/springfield-il/foreclosure/page.tsx': {
        'slug': 'foreclosure',
        'title': "Facing Foreclosure in Springfield IL?",
        'subtitle': 'Sell before the court date — keep your equity, protect your credit',
        'transcript': "Are you behind on your mortgage in Springfield, Illinois? Foreclosure doesn't have to be your ending. Illinois is a judicial foreclosure state — you may have more time than you think, but the clock is ticking. At USA Home Buyers, a fast cash sale can stop the process and protect your credit. Call us right now at 888-274-5006 for a free, confidential conversation.",
    },
    'app/markets/springfield-il/inherited-property/page.tsx': {
        'slug': 'inherited-property',
        'title': "Sell Inherited House in Springfield IL",
        'subtitle': 'We handle probate, as-is purchase, and fast close in Sangamon County',
        'transcript': "Did you inherit a property in Springfield or somewhere in Sangamon County? At USA Home Buyers, we specialize in helping families sell inherited properties quickly and without the headache. We handle the paperwork, buy the house exactly as it is, and close fast. You don't have to clean it out, fix anything, or pay any commissions. Call us at 888-274-5006.",
    },
}

ROOT = '/Users/agents/selltousahome'

for filepath, info in PAGES.items():
    full_path = os.path.join(ROOT, filepath)
    if not os.path.exists(full_path):
        print(f'SKIP (not found): {filepath}')
        continue

    with open(full_path, 'r') as f:
        content = f.read()

    slug = info['slug']
    video_src = f"{BASE}/{slug}.mp4"

    # Skip if already wired
    if f'src="{video_src}"' in content:
        print(f'✓ {slug} — already wired')
        continue

    # Add VideoEmbed import if not present
    if 'VideoEmbed' not in content:
        content = content.replace(
            "import { SchemaMarkup } from '@/components/SchemaMarkup';",
            "import { SchemaMarkup } from '@/components/SchemaMarkup';\nimport { VideoEmbed } from '@/components/VideoEmbed';"
        )
        # fallback if SchemaMarkup not found
        if 'VideoEmbed' not in content:
            content = content.replace(
                "import type { Metadata } from 'next';",
                "import type { Metadata } from 'next';\nimport { VideoEmbed } from '@/components/VideoEmbed';"
            )

    # Build video block
    video_block = f'''
      <VideoEmbed
        src="{video_src}"
        title="{info['title']}"
        poster="{BASE}/{slug}-poster.jpg"
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

    # Insert before first CashOfferForm (or FAQSection if no form)
    if '<CashOfferForm' in content:
        content = content.replace(
            '          <CashOfferForm',
            video_block + '          <CashOfferForm',
            1
        )
    elif '<FAQSection' in content:
        content = content.replace(
            '        <FAQSection',
            video_block + '        <FAQSection',
            1
        )
    else:
        print(f'  WARN: no insertion point found for {slug}')
        continue

    with open(full_path, 'w') as f:
        f.write(content)

    print(f'✓ Wired: {slug}')

print('Done!')
