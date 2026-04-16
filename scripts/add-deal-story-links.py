#!/usr/bin/env python3
"""
Add internal links to the deal story blog post on all relevant situation pages.
Target: tenant-occupied and fire-damage pages across all 11 markets.
"""

import os
import re

SITE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MARKETS_DIR = os.path.join(SITE_ROOT, 'app', 'markets')

DEAL_STORY_LINK = (
    '<li><Link href="/blog/destroyed-rental-property-case-study" '
    'className="text-brand-primary hover:underline">'
    'Case Study: He Sold His Destroyed Rental for $50K →</Link></li>'
)

DEAL_STORY_INLINE = (
    ' ·{\'\\n                \'}'
    '<Link href="/blog/destroyed-rental-property-case-study" '
    'className="text-brand-primary hover:underline">'
    'Case Study: Destroyed Rental, $50K Cash Out</Link>'
)

# Target situation pages
PAGE_TYPES = ['tenant-occupied', 'fire-damage']

markets = [
    'harrisburg-pa', 'allentown-pa', 'lancaster-pa', 'reading-pa',
    'state-college-pa', 'erie-pa', 'bethlehem-pa', 'york-pa',
    'king-of-prussia-pa', 'wilmington-de', 'youngstown-oh'
]

modified = []
skipped = []

for market in markets:
    for page_type in PAGE_TYPES:
        page_path = os.path.join(MARKETS_DIR, market, page_type, 'page.tsx')
        if not os.path.exists(page_path):
            skipped.append(f"{market}/{page_type} (not found)")
            continue

        with open(page_path, 'r') as f:
            content = f.read()

        # Skip if already linked
        if 'destroyed-rental-property-case-study' in content:
            skipped.append(f"{market}/{page_type} (already linked)")
            continue

        original = content

        # Pattern B/C: <ul> list with <li> links ("Related Resources" / "Related Pages")
        # Find the last <li> in the related section and append after it
        ul_match = re.search(
            r'(<ul[^>]*class[^>]*space-y[^>]*>)(.*?)(</ul>)',
            content, re.DOTALL
        )
        if ul_match:
            # Find the last </li> before </ul>
            ul_start = ul_match.start()
            ul_end = ul_match.end()
            ul_content = content[ul_start:ul_end]
            # Insert the new <li> before the closing </ul>
            new_ul = ul_content.replace('</ul>', f'\n            {DEAL_STORY_LINK}\n          </ul>', 1)
            content = content[:ul_start] + new_ul + content[ul_end:]
            modified.append(f"{market}/{page_type} (ul-list pattern)")
        else:
            # Pattern A: Simple "Related:" inline links
            # Look for the Related: text pattern
            related_match = re.search(
                r'(Related:\{.*?\})(.*?)(</p>\s*</div>)',
                content, re.DOTALL
            )
            if related_match:
                # Insert before the closing </p>
                insert_pos = related_match.end(2)
                case_link = (
                    "\n              {'·'}{' '}\n"
                    "              <Link href=\"/blog/destroyed-rental-property-case-study\" "
                    "className=\"text-brand-primary hover:underline\">"
                    "Case Study: Destroyed Rental, $50K Cash Out</Link>"
                )
                content = content[:insert_pos] + case_link + content[insert_pos:]
                modified.append(f"{market}/{page_type} (inline-related pattern)")
            else:
                # Pattern D: Lancaster flex gap div
                # Look for flex gap div with links
                flex_match = re.search(
                    r'(<div[^>]*flex[^>]*gap[^>]*text-sm[^>]*>)(.*?)(</div>)',
                    content, re.DOTALL
                )
                if flex_match:
                    flex_start = flex_match.start()
                    flex_end = flex_match.end()
                    flex_content = content[flex_start:flex_end]
                    case_link_inline = (
                        '\n          <Link href="/blog/destroyed-rental-property-case-study" '
                        'className="text-brand-primary hover:underline">'
                        'Case Study: Destroyed Rental → $50K →</Link>'
                    )
                    new_flex = flex_content.replace('</div>', case_link_inline + '\n        </div>', 1)
                    content = content[:flex_start] + new_flex + content[flex_end:]
                    modified.append(f"{market}/{page_type} (flex-gap pattern)")
                else:
                    skipped.append(f"{market}/{page_type} (no matching pattern found)")
                    continue

        if content != original:
            with open(page_path, 'w') as f:
                f.write(content)

print("=== MODIFIED ===")
for m in modified:
    print(f"  ✅ {m}")

print(f"\n=== SKIPPED ===")
for s in skipped:
    print(f"  ⚠️  {s}")

print(f"\nTotal modified: {len(modified)}")
print(f"Total skipped: {len(skipped)}")
