#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const data = require('./testimonials-data.json');
const ROOT = '/Users/agents/selltousahome';

let updated = 0, failed = [];
for (const [rel, testimonials] of Object.entries(data)) {
  const fullPath = path.join(ROOT, rel);
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    // Find the TESTIMONIALS block
    const startIdx = content.indexOf('const TESTIMONIALS = [');
    if (startIdx === -1) { failed.push(rel + ' (no TESTIMONIALS found)'); continue; }
    // Find the closing ]; for this array
    let depth = 0, i = startIdx + 'const TESTIMONIALS = ['.length;
    // Walk from the [ to find matching ]
    const arrStart = content.indexOf('[', startIdx);
    let j = arrStart;
    depth = 0;
    while (j < content.length) {
      if (content[j] === '[') depth++;
      else if (content[j] === ']') {
        depth--;
        if (depth === 0) break;
      }
      j++;
    }
    // j is now at the closing ]
    // Find the ; after it
    let endIdx = j + 1;
    while (endIdx < content.length && content[endIdx] !== ';') endIdx++;
    endIdx++; // include the ;

    const newBlock = 'const TESTIMONIALS = ' + JSON.stringify(testimonials, null, 2) + ';';
    content = content.slice(0, startIdx) + newBlock + content.slice(endIdx);
    fs.writeFileSync(fullPath, content, 'utf8');
    const mtime = fs.statSync(fullPath).mtimeMs;
    console.log(`OK  file:${rel}, mtime:${mtime}`);
    updated++;
  } catch(e) {
    failed.push(rel + ': ' + e.message);
  }
}
console.log(`\nDone. Updated ${updated} files.`);
if (failed.length) { console.error('FAILED:', failed); process.exit(1); }
