# MG-008 Attribution Batch B — Allentown PA live re-audit

Date: 2026-04-29 16:32 ET  
Deploy: Render `dep-d7p6ib8js32c73fg1880` live 2026-04-29T20:30:11Z  
Commit: `52901e7` (`Fix Allentown attribution framing`)

## Scope

Five Allentown situation pages only:

- `/markets/allentown-pa/code-violations`
- `/markets/allentown-pa/foreclosure`
- `/markets/allentown-pa/inherited-property`
- `/markets/allentown-pa/probate`
- `/markets/allentown-pa/tenant-occupied`

No market-data, dateModified, schema/sitemap/global/package, market-root, report, FAQ, neighborhood, blog, guide, or state-hub files were changed in the implementation commit.

## Pre-live/source gates

- Independent review verdict: `PASS_WITH_FIXES`
- Scoped files changed: exactly five Allentown situation pages
- `git diff --check`: PASS
- Scoped residual-risk grep against source files: PASS
- `npm run lint`: PASS
- `npm run build`: PASS (`411/411` static pages)
- Repo after push: `HEAD=origin/main=52901e7`, ahead/behind `0/0`

## Live verification

Final live verification stripped `<script>` and `<style>` before scanning visible page copy. Raw HTML still contains pre-existing global JSON-LD / service-offer `close in 7-14 days` text; that is not page-visible copy and is outside MG-008 Batch B scope.

| URL | HTTP | Canonical phone | Old phone | Visible residual-risk hits |
|---|---:|---:|---:|---:|
| `/markets/allentown-pa/code-violations` | 200 | 17 | 0 | 0 |
| `/markets/allentown-pa/foreclosure` | 200 | 21 | 0 | 0 |
| `/markets/allentown-pa/inherited-property` | 200 | 17 | 0 | 0 |
| `/markets/allentown-pa/probate` | 200 | 17 | 0 | 0 |
| `/markets/allentown-pa/tenant-occupied` | 200 | 17 | 0 | 0 |

Visible-copy residual-risk patterns checked:

`over 56%`, `56% Hispanic`, `12-18`, `7-14`, `7 days`, `mandatory conference`, `requires written notice`, `15-30`, `one hour`, `daily fines`, `guarantee`, `guaranteed`, `will dismiss`, `must dismiss`, `must agree`, `proceeds go into`.

## Verdict

PASS / CLOSED for MG-008 Attribution Batch B Allentown PA.

Caveat preserved for future global/schema cleanup: raw HTML blunt grep still finds pre-existing global JSON-LD/service-offer `close in 7-14 days`; visible page copy for the five scoped URLs is clean.
