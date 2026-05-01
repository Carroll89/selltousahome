# Atlas-001 Blog Pilot Publish Evidence — 2026-05-01

## Summary
Published three Blog Factory pilot market guides to selltousahome.com and connected them through the blog registry, blog index, sitemap/image-sitemap registry, and market BlogClusterLinks discovery.

## Editorial decision
Per dispatch, did not block solely on the 1,500–1,850-ish source draft lengths because the content was substantive and non-repetitive. Integrated as concise TSX pages while preserving core claims, legal caveats, FAQs, and internal links. Future Blog Factory target recorded by dispatch: 800–1,500 unless Atlas/Max overrides.

## Commit / deploy
- Commit: `30f3a61930ceb4393f73f7a73406a01e8572394d`
- Render service: `selltousahome` / `srv-d7ap58450q8c73efq9b0`
- Render deploy: `dep-d7qfogpo3t8c73afc7f0`
- Deploy status: `live`
- Deploy finished: `2026-05-01T19:22:15.25401Z`

## Changed file stubs
- file:/Users/agents/.openclaw/workspace-seo-commander/site/app/blog/madison-wi-sell-house-fast-2026/page.tsx, mtime:2026-05-01T15:14:33-0400, diff:+71/-0
- file:/Users/agents/.openclaw/workspace-seo-commander/site/app/blog/appleton-wi-sell-house-fast-2026/page.tsx, mtime:2026-05-01T15:14:33-0400, diff:+63/-0
- file:/Users/agents/.openclaw/workspace-seo-commander/site/app/blog/norwich-ct-sell-house-fast-2026/page.tsx, mtime:2026-05-01T15:15:04-0400, diff:+74/-0
- file:/Users/agents/.openclaw/workspace-seo-commander/site/lib/blog.ts, mtime:2026-05-01T15:15:43-0400, diff:+46/-0
- file:/Users/agents/.openclaw/workspace-seo-commander/site/artifacts/atlas-001-blog-pilot-publish-evidence-2026-05-01.md, mtime:2026-05-01T15:24:00-0400, diff:new evidence artifact

## Gates
- Repo preflight clean/synced before lock: PASS (`main...origin/main`, no dirty files)
- Shared publish lock acquired: PASS (`/Users/agents/.openclaw/workspace-seo-commander/selltousahome-publish.lock`)
- Route files created: PASS (3 static `app/blog/*/page.tsx` files)
- Registry/discovery updated: PASS (`lib/blog.ts` entries drive `/blog`, sitemap, image sitemap, and market BlogClusterLinks)
- Market links connected: PASS (Madison, Appleton, Norwich market pages generated with new blog URLs)
- Sentinel must-fix edits: PASS
  - Madison broken `/sell-inherited-house-wisconsin`: removed/replaced with `/markets/madison-wi/inherited-property`
  - Appleton body brand phrase "companies like Sell To USA Home": removed; brand remains only CTA-style market/team/form context
  - Appleton misleading "explore other Wisconsin markets we serve": replaced with Appleton seller resources / market information wording
  - Norwich municipal conveyance-tax caveat preserved; no Norwich municipal rate inserted
- `git diff --check`: PASS
- `npx tsc --noEmit`: PASS
- `npm run lint`: PASS — no warnings/errors
- `npm run build`: PASS — static generation completed
- Commit pushed to `origin/main`: PASS (`HEAD=origin/main=30f3a61930ceb4393f73f7a73406a01e8572394d`)

## Local generated-output checks
- `.next/server/app/blog/madison-wi-sell-house-fast-2026.html`: PASS; inherited link present twice; `sell-inherited-house-wisconsin` count 0
- `.next/server/app/blog/appleton-wi-sell-house-fast-2026.html`: PASS; Appleton resources anchor present twice; `companies like` count 0; `explore other Wisconsin markets` count 0
- `.next/server/app/blog/norwich-ct-sell-house-fast-2026.html`: PASS; Norwich municipal-rate caveat present; no specific Norwich municipal rate inserted
- `.next/server/app/blog.html`: PASS; all three new slugs present
- `.next/server/app/markets/madison-wi.html`: PASS; Madison slug present
- `.next/server/app/markets/appleton-wi.html`: PASS; Appleton slug present
- `.next/server/app/markets/norwich-ct.html`: PASS; Norwich slug present

## Live URLs / verification
- https://www.selltousahome.com/blog/madison-wi-sell-house-fast-2026 — PASS HTTP 200; title marker count 2; `/markets/madison-wi/inherited-property` count 2; `sell-inherited-house-wisconsin` count 0
- https://www.selltousahome.com/blog/appleton-wi-sell-house-fast-2026 — PASS HTTP 200; title marker count 2; `Appleton seller resources and market information` count 2; `companies like` count 0; `explore other Wisconsin markets` count 0
- https://www.selltousahome.com/blog/norwich-ct-sell-house-fast-2026 — PASS HTTP 200; title marker count 2; `Norwich's municipal rate has not been confirmed` count 1; `0.25% applies to Norwich without verifying` count 2
- https://www.selltousahome.com/blog — PASS HTTP 200; all three new slugs present
- https://www.selltousahome.com/markets/madison-wi — PASS HTTP 200; Madison blog slug present count 3
- https://www.selltousahome.com/markets/appleton-wi — PASS HTTP 200; Appleton blog slug present count 3
- https://www.selltousahome.com/markets/norwich-ct — PASS HTTP 200; Norwich blog slug present count 3

## Caveats for Dan review
- Government contact details are intentionally caveated in copy; no new unverified addresses/phones were added beyond draft-supported/caveated details.
- Norwich municipal conveyance tax remains explicitly unconfirmed; readers are told to verify with a closing attorney / Norwich City Clerk.
- Existing apex-domain caveat still applies from prior work: verified live URLs are `www.selltousahome.com`.

## Lock release
Publish lock released after live verification with result `COMPLETE_LOCAL_GATES_PUSHED_LIVE_VERIFIED`, final commit `30f3a61930ceb4393f73f7a73406a01e8572394d`.
