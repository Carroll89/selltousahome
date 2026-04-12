#!/usr/bin/env python3
"""Fix unescaped apostrophes ONLY within our transcript <details> blocks."""

import re
import os
import glob

BASE = "/Users/agents/selltousahome"

files = glob.glob(os.path.join(BASE, "app/**/*.tsx"), recursive=True)

def fix_transcript_block(match):
    """Fix apostrophes inside our transcript block only."""
    block = match.group(0)
    
    # Only fix ' inside <p className="mb-3">...</p> within this block
    def fix_p_tag(p_match):
        open_tag = p_match.group(1)
        inner = p_match.group(2)
        close_tag = p_match.group(3)
        # Replace bare apostrophes with &apos; — but only literal text, not inside {}
        # Split by JSX expressions
        parts = re.split(r'(\{[^}]*\})', inner)
        fixed_parts = []
        for i, part in enumerate(parts):
            if part.startswith('{') and part.endswith('}'):
                # JSX expression — don't touch
                fixed_parts.append(part)
            else:
                # Plain text — escape apostrophes
                fixed_parts.append(part.replace("'", "&apos;"))
        return open_tag + ''.join(fixed_parts) + close_tag
    
    fixed = re.sub(
        r'(<p className="mb-3">)(.*?)(</p>)',
        fix_p_tag,
        block,
        flags=re.DOTALL
    )
    return fixed

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'Video Transcript' not in content:
        return False
    
    # First: UNDO any bad escaping that may have happened in non-transcript p tags
    # Then redo only within transcript blocks
    
    # Restore any {&apos; &apos;} back to {' '}
    content = content.replace("{&apos; &apos;}", "{\u2018 '}")  # temp placeholder
    # Actually just replace all {&apos; ...} patterns back
    # More precisely: restore &apos; inside {} expressions
    def restore_jsx_expr(m):
        return m.group(0).replace("&apos;", "'")
    content = re.sub(r'\{[^}]*&apos;[^}]*\}', restore_jsx_expr, content)
    
    # Also restore &apos; in non-transcript p tags
    # Strategy: find transcript block, fix only within it
    
    # Split content into: before transcript, transcript block, after transcript
    transcript_start = '<details className="mt-4 mb-8 border border-gray-200 rounded-lg'
    transcript_end = '</details>'
    
    idx_start = content.find(transcript_start)
    if idx_start == -1:
        return False
    
    idx_end = content.find(transcript_end, idx_start)
    if idx_end == -1:
        return False
    
    idx_end += len(transcript_end)
    
    before = content[:idx_start]
    transcript_block = content[idx_start:idx_end]
    after = content[idx_end:]
    
    # In before and after: restore any &apos; that got into p tags
    def restore_p_apos(m):
        return m.group(0).replace("&apos;", "'")
    before = re.sub(r'<p[^>]*>.*?</p>', restore_p_apos, before, flags=re.DOTALL)
    after = re.sub(r'<p[^>]*>.*?</p>', restore_p_apos, after, flags=re.DOTALL)
    
    # In transcript block: escape apostrophes in p tags (text only, not JSX expressions)
    def fix_p_in_transcript(m):
        open_tag = m.group(1)
        inner = m.group(2)
        close_tag = m.group(3)
        # Split by JSX {} expressions
        parts = re.split(r'(\{[^}]*\})', inner)
        fixed_parts = []
        for part in parts:
            if part.startswith('{') and part.endswith('}'):
                fixed_parts.append(part)
            else:
                fixed_parts.append(part.replace("'", "&apos;"))
        return open_tag + ''.join(fixed_parts) + close_tag
    
    transcript_block = re.sub(
        r'(<p className="mb-3">)(.*?)(</p>)',
        fix_p_in_transcript,
        transcript_block,
        flags=re.DOTALL
    )
    
    new_content = before + transcript_block + after
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

fixed = 0
for filepath in sorted(files):
    result = process_file(filepath)
    if result:
        rel = filepath.replace(BASE + '/', '')
        print(f"Fixed: {rel}")
        fixed += 1

print(f"\nTotal: {fixed}")
