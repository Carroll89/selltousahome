# MG-010 Attribution Batch D — Non-PA Narrow Live Re-audit

Date: 2026-04-29
Repo: `/Users/agents/.openclaw/workspace-seo-commander/site`
Register row: `AIO-2026-04-28-011`

## Summary

MG-010 Attribution Batch D non-PA narrow fixes are live/pass.

Scope was exactly 14 situation pages:

- `/markets/boston-ma/foreclosure`
- `/markets/hartford-ct/code-violations`
- `/markets/hartford-ct/fire-damage`
- `/markets/hartford-ct/tenant-occupied`
- `/markets/racine-mount-pleasant-wi/fire-damage`
- `/markets/reading-pa/code-violations`
- `/markets/reading-pa/fire-damage`
- `/markets/wilmington-de/fire-damage`
- `/markets/wilmington-de/tenant-occupied`
- `/markets/youngstown-oh/code-violations`
- `/markets/youngstown-oh/divorce-sale`
- `/markets/youngstown-oh/fire-damage`
- `/markets/youngstown-oh/probate`
- `/markets/youngstown-oh/tenant-occupied`

## Commits / deploy

- Publish commit: `650ec4d` (`fix: soften mg010 attribution claims`)
- Render deploy: `dep-d7p7hofaqgkc73a2emeg`
- Render status: `live`
- Render finished: `2026-04-29T21:37:31Z`

## Gates before publish

- Independent review: `PASS_WITH_FIXES`
- Exact changed-file scope: PASS, 14/14 scoped files only
- `git diff --check`: PASS
- Forbidden phone grep: PASS; no `888-440-5250`, `+18884405250`, `717-576-8192`, `888-996-2096`
- `npm run lint`: PASS
- `npm run build`: PASS, 411/411 static pages generated

## Live re-audit

Live audit eventually passed after Render/cache lag. The first checks returned HTTP 200 and correct phone/no old phone but old page copy on 9/14 routes. Render API confirmed commit `650ec4d` deployed live as `dep-d7p7hofaqgkc73a2emeg`; a later cache-busted audit passed all markers.

Final live results:

| URL | HTTP | New marker present | Canonical phone | Old/fire phones |
|---|---:|---|---|---|
| `/markets/boston-ma/foreclosure` | 200 | PASS | present | absent |
| `/markets/hartford-ct/code-violations` | 200 | PASS | present | absent |
| `/markets/hartford-ct/fire-damage` | 200 | PASS | present | absent |
| `/markets/hartford-ct/tenant-occupied` | 200 | PASS | present | absent |
| `/markets/racine-mount-pleasant-wi/fire-damage` | 200 | PASS | present | absent |
| `/markets/reading-pa/code-violations` | 200 | PASS | present | absent |
| `/markets/reading-pa/fire-damage` | 200 | PASS | present | absent |
| `/markets/wilmington-de/fire-damage` | 200 | PASS | present | absent |
| `/markets/wilmington-de/tenant-occupied` | 200 | PASS | present | absent |
| `/markets/youngstown-oh/code-violations` | 200 | PASS | present | absent |
| `/markets/youngstown-oh/divorce-sale` | 200 | PASS | present | absent |
| `/markets/youngstown-oh/fire-damage` | 200 | PASS | present | absent |
| `/markets/youngstown-oh/probate` | 200 | PASS | present | absent |
| `/markets/youngstown-oh/tenant-occupied` | 200 | PASS | present | absent |

## Result

PASS. MG-010 is closed/live for this narrow attribution batch.

No market-data, data freshness, `dateModified`, schema helpers, sitemap, package/global files, market roots, reports, FAQ, neighborhoods, blogs, guides, or state hubs were changed. MG-013/data freshness remains MarketDataSteward-owned.
