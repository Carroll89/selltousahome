#!/usr/bin/env python3
"""Fix unescaped apostrophes in transcript <p> tags across all modified TSX files."""

import re
import os
import glob

BASE = "/Users/agents/selltousahome"

files = glob.glob(os.path.join(BASE, "app/**/*.tsx"), recursive=True)

# Pattern: only escape apostrophes inside <p ...>...</p> blocks that are in our transcript sections
# More precisely, replace ' with &apos; inside p tag content within our <details> transcript block

def escape_apostrophes_in_p_tags(content):
    """Replace ' with &apos; inside <p className="mb-3">...</p> tags."""
    def replacer(m):
        text = m.group(2)
        # Only escape bare apostrophes, not already-escaped ones
        text = text.replace("'", "&apos;")
        return m.group(1) + text + m.group(3)
    
    # Match <p className="mb-3">content</p>
    pattern = r'(<p className="mb-3">)(.*?)(</p>)'
    return re.sub(pattern, replacer, content, flags=re.DOTALL)

fixed = 0
for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'Video Transcript' not in content:
        continue
    
    new_content = escape_apostrophes_in_p_tags(content)
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed: {filepath.replace(BASE + '/', '')}")
        fixed += 1

print(f"\nTotal files fixed: {fixed}")
