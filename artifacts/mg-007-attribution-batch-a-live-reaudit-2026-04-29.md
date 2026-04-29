# MG-007 Attribution Batch A live re-audit — 2026-04-29

Verdict: PASS

- Commit: `74aab76`
- Site: https://selltousahome.com
- Routes checked: 14/14 MG-007 Batch A situation pages
- Method: curl live HTML, HTTP status, canonical/old phone grep, source-framing marker grep, and visible-text risk-context inspection.
- Note: initial blunt risk grep matched pre-existing JSON-LD business description text containing `close in 7-14 days`; visible page-copy risk context was separately inspected and this JSON-LD/global snippet was not part of MG-007 scope.

## Results

- `/markets/erie-pa/divorce-sale` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `13`; title `Divorce Sale Erie PA — Cash Home Buyers | USA Home Buyers`
- `/markets/erie-pa/fire-damage` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `15`; title `Fire Damage Erie PA — Sell House Fast | USA Home Buyers`
- `/markets/erie-pa/foreclosure` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `95`; title `Stop Foreclosure Erie PA — Cash Sale | USA Home Buyers`
- `/markets/erie-pa/inherited-property` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `116`; title `Inherited Property Erie PA — Cash Buyers | USA Home Buyers`
- `/markets/erie-pa/probate` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `107`; title `Probate Property Erie PA — Cash Sale | USA Home Buyers`
- `/markets/erie-pa/property-liens` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `38`; title `Property Liens Erie PA — Cash Sale | USA Home Buyers`
- `/markets/erie-pa/tenant-occupied` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `4`; title `Sell Tenant-Occupied Rental Erie PA | USA Home Buyers`
- `/markets/harrisburg-pa/code-violations` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `32`; title `Sell with Code Violations — Harrisburg PA | USA Home Buyers`
- `/markets/harrisburg-pa/fire-damage` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `21`; title `Sell a Fire-Damaged House — Harrisburg PA | USA Home Buyers`
- `/markets/harrisburg-pa/foreclosure` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `87`; title `Sell Before Foreclosure in Harrisburg PA | Dauphin County | USA Home Buyers`
- `/markets/harrisburg-pa/inherited-property` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `74`; title `Sell Inherited Property in Harrisburg PA | USA Home Buyers`
- `/markets/harrisburg-pa/probate` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `98`; title `Probate Property Sale — Harrisburg PA | USA Home Buyers`
- `/markets/harrisburg-pa/property-liens` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `81`; title `Sell House with Liens in Harrisburg PA | USA Home Buyers`
- `/markets/harrisburg-pa/tenant-occupied` — HTTP `200`; canonical phone markers `1`; old-phone markers `0`; source markers `4`; title `Sell Tenant-Occupied Rental in Harrisburg PA | Cash Offer | USA Home Buyers`

## Gate summary

- 14/14 live URLs returned HTTP 200.
- Old phone variants absent from all live route HTML.
- Canonical authority phone present on all live route HTML.
- Source-framing markers present where expected; some pages have low marker count in raw HTML because source wording is embedded in prose/components, but implementation and independent review verified local page copy before publish.
- Out-of-scope JSON-LD/global description string with `7-14 days` remains unchanged and is not a blocker for MG-007; future global/schema cleanup should handle it if desired.

## Evidence files

- Implementation: /Users/agents/.openclaw/workspace-market-governance-foreman/evidence/mg-007-attribution-batch-a-implementation-2026-04-29.md
- Independent review: /Users/agents/.openclaw/workspace-market-governance-foreman/evidence/mg-007-attribution-batch-a-independent-review-2026-04-29.md
