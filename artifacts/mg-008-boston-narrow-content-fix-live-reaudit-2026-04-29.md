# MG-008 — Boston narrow content fix live re-audit — 2026-04-29

**Verdict:** PASS / LIVE

**Commit:** `28d09c7` — `fix: soften boston timeline source claims`

**Published scope:**
- `app/markets/boston-ma/page.tsx`
- `app/markets/boston-ma/foreclosure/page.tsx`
- `app/markets/boston-ma/inherited-property/page.tsx`
- `app/markets/boston-ma/probate/page.tsx`

**Pre-publish gates:**
- Independent review: PASS — `/Users/agents/.openclaw/workspace-market-governance-foreman/evidence/mg-008-boston-narrow-content-fix-independent-review-2026-04-29.md`
- Diff scope: PASS — exactly four Boston content files.
- `git diff --check`: PASS
- `npm run lint`: PASS — no ESLint warnings/errors.
- `npm run build`: PASS — Next.js build generated `411/411` static pages.

## Live URL checks

All checks used cache-busted fetches against `https://www.selltousahome.com` after commit `28d09c7` was live.

| URL | HTTP | Positive marker | Risky old timeline/source strings | Old phone | Canonical phone |
|---|---:|---|---|---|---|
| `/markets/boston-ma` | 200 | PASS: `timing can move quickly once notices and sale publication are underway` | PASS: none | PASS: none | PASS: `888-274-5006` |
| `/markets/boston-ma/foreclosure` | 200 | PASS: `Overall timing varies by notice, cure, publication, contest, and lender schedule` | PASS: none | PASS: none | PASS: `888-274-5006` |
| `/markets/boston-ma/inherited-property` | 200 | PASS: `Standard Suffolk County estates often take several months` | PASS: none | PASS: none | PASS: `888-274-5006` |
| `/markets/boston-ma/probate` | 200 | PASS: `Standard Suffolk County estates often take several months` | PASS: none | PASS: none | PASS: `888-274-5006` |

Negative strings checked live:
- `Total timeline:`
- `under four months`
- `4-7 months`
- `4–7 months`
- `Source: Suffolk County Probate Court`
- `Suffolk County Probate and Family Court typically takes`
- `According to the Massachusetts Trial Court`

Phone negative strings checked live:
- `888-440-5250`
- `8884405250`
- `+18884405250`
- `18884405250`

## Conclusion

MG-008 Boston narrow content cleanup is live and passes source-representation, phone-policy, route availability, and regression checks. `AIO-2026-04-28-012` may close.
