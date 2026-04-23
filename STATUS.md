# selltousahome.com — AIO Phone Number Swap Prep Status

**Updated:** 2026-04-22T16:34:00-0400  
**Owner:** Atlas  
**Scope:** Public AIO website number prep for attribution split

## Goal
Prepare public AIO-facing website surfaces to swap from **888-440-5250** to **888-274-5006** without shipping a broken number before voice routing is confirmed live.

## Current ship state
**READY-WAITING-ON-VOICE**

The public AIO site (`/Users/agents/selltousahome`) has been updated in the working tree and verified with a successful production build, but it has **not** been treated as safe to ship yet because voice readiness/routing confirmation is still not evidenced in source-of-truth status.

## Source-of-truth gate
`/Users/agents/.openclaw/workspace/OPERATOR_STATUS.md` says Dan bought **+1 888 274 5006** and that import into ElevenLabs / final routing decision is still pending. That means the site-side swap can be prepared, but should not go live until routing is confirmed.

## Inventory conclusion
### AIO/public site to swap
- `selltousahome` (Next.js public GEO/AIO site)
- AIO-facing placements found across homepage, state hubs, market pages, guides, blogs, FAQs, neighborhood pages, market-report pages, and shared utility references.

### PPC/public site to preserve on old number
- `fire-damage-site` stays on **888-440-5250** for now.
- This matches operator status: fire-damage site is tied to PPC launch prep and is not the AIO swap target.

## What was prepared in working tree
Changed `selltousahome` public AIO-facing phone placements from:
- display: `888-440-5250` → `888-274-5006`
- href: `+18884405250` → `+18882745006`

Prepared surfaces include:
- `app/page.tsx`
- state hubs under `app/sell-house-fast-*/page.tsx`
- market pages under `app/markets/**`
- guides under `app/guides/**`
- selected blog pages under `app/blog/**`
- shared phone utility in `lib/utils.ts`
- public trust/reference data in `public/.well-known/brand-facts.json`

## Explicit non-changes
- `fire-damage-site` was **not** changed and still uses **888-440-5250**
- No evidence of outbound/internal-only number files was intentionally edited in this pass
- Internal video script JSON files that were accidentally touched during bulk replacement were reverted immediately and left unchanged

## Verification
- `selltousahome`: old public number references in app/components/lib/public `.well-known` were replaced with the new AIO number in working tree
- `fire-damage-site`: old PPC number remains intact; new number does not appear there
- `npx next build` on `selltousahome` exited `0`

## Evidence anchors
- Shared phone utility: `lib/utils.ts`
- Homepage: `app/page.tsx`
- Representative market pages: `app/markets/springfield-ma/page.tsx`, `app/markets/rockford-il/page.tsx`, `app/markets/bridgeport-ct/page.tsx`
- Representative hub pages: `app/sell-house-fast-illinois/page.tsx`, `app/sell-house-fast-new-york/page.tsx`
- PPC-preserved site: `/Users/agents/fire-damage-site/lib/site.ts`

## Blocking condition before ship
Do **not** ship until there is positive evidence that **888-274-5006** is imported/routed live in the voice lane (ElevenLabs / routing path confirmed). Once that evidence exists, this working-tree prep is ready for commit/deploy.

---

## 2026-04-22 20:44 EDT — AIO number rollout chunk 1 completed (bounded batch)

**Result: selltousahome is not fully centralized for phone rollout; chunk 1 was completed as a bounded batch instead of a repo-wide sweep.**

### Decision
- Shared/default phone handling already exists in `lib/utils.ts` and already points to `888-274-5006`.
- But repo truth shows many **page-local hardcoded** old-number literals still scattered through `app/**`.
- So this rollout is **batched**, not a single centralized flip.

### What changed in chunk 1
- Updated `app/markets/peoria-il/page.tsx`
  - old number removed from metadata, FAQ copy, hero TL;DR, CTA text/href, transcript, and local schema telephone.
- Updated `app/guides/sell-house-fast-peoria-il-2026/page.tsx`
  - old number removed from metadata, FAQ, TL;DR, and closing CTA copy.
- Updated `app/markets/champaign-urbana-il/content.ts`
  - aligned market-local shared display constant from `(888) 440-5250` to `(888) 274-5006`.

### Verification evidence
- `lib/utils.ts` still confirms the shared default is `888-274-5006`.
- Post-change per-file verification:
  - `app/markets/champaign-urbana-il/content.ts` → old matches `0`, new matches `2`
  - `app/markets/peoria-il/page.tsx` → old matches `0`, new matches `10`
  - `app/guides/sell-house-fast-peoria-il-2026/page.tsx` → old matches `0`, new matches `4`
- Remaining old-number literals still exist elsewhere in `app/**`, confirming batch follow-up is required.

### Remaining scope map
- Peoria remaining market subpages: 10 files
- Bloomington market cluster: 11 files
- Champaign-Urbana page cluster: 10 files
- Blog stragglers: 5 files
- Single-page stragglers: 4 files
- PA guide stragglers: 2 files

### Audit artifact
- `/Users/agents/.openclaw/workspace-seo-commander/audits/2026-04-22-selltousahome-number-rollout-chunk1.md`

---

## 2026-04-22 22:49 EDT — Harrisburg phone rollout proof batch pushed, not live yet

**Production truth:** local/source and `origin/main` now include the Harrisburg phone swap batch, but the public site is still serving the old number on the checked Harrisburg URLs as of the timestamps below. This batch is **not shipped-live yet**.

### Repo/deploy path evidence
- Repo remote: `origin https://github.com/Carroll89/selltousahome.git`
- Branch pushed: `main`
- Hosting config present in repo: `render.yaml` (`services[0].name = selltousahome`)
- Live response header on `https://www.selltousahome.com/markets/harrisburg-pa` includes `server: cloudflare` and `rndr-id`, confirming Render-backed production.

### Batch commit pushed
- `c376df33` — `fix: ship Harrisburg phone rollout batch`

### Files in this batch
- `app/markets/harrisburg-pa/page.tsx`
- `app/guides/sell-house-fast-harrisburg-pa-2026/page.tsx`
- `app/blog/harrisburg-pa-sell-house-fast-2026/page.tsx`
- `lib/utils.ts`

### Live verification after push (direct fetch, not source-only)
Checked repeatedly from **2026-04-22 22:44 EDT** through **22:48 EDT**:
- `/markets/harrisburg-pa` → only `888-440-5250` found (17 matches), `888-274-5006` not found
- `/guides/sell-house-fast-harrisburg-pa-2026` → only `888-440-5250` found (13 matches), `888-274-5006` not found
- `/blog/harrisburg-pa-sell-house-fast-2026` → only `888-440-5250` found (11 matches), `888-274-5006` not found

### Blocker status
- No live deploy was observable from the push during the verification window.
- Treat this as **deploy pending or manual deploy required** until Render production visibly updates.

---

## 2026-04-22 23:00 EDT — Harrisburg proof batch is now live on production

**Production truth:** the Harrisburg proof batch that was pushed in commit `c376df33` is now live on the public site. The earlier failure state was a **deploy-lag / pending-deploy window**, not a content mismatch in `origin/main`.

### Current repo truth
- Current branch: `main`
- Current HEAD: `c376df33bd59efb38ad747ccb267804d8e4b5896`
- Remote: `origin https://github.com/Carroll89/selltousahome.git`
- `git ls-remote origin refs/heads/main` returns `c376df33bd59efb38ad747ccb267804d8e4b5896 refs/heads/main`
- `git merge-base --is-ancestor c376df33 origin/main` returned success (`0`), confirming `c376df33` is on `origin/main`

### Deploy-path truth
- Repo hosting config is `render.yaml` with service `selltousahome`
- `render.yaml` sets `NEXT_PUBLIC_PHONE` with `sync: false`, meaning production uses the Render environment value rather than a committed default for shared phone surfaces
- Public site responses are Render-backed behind Cloudflare (`server: cloudflare`; earlier live checks also saw Render-origin headers)
- Best repo-supported production path remains: GitHub `origin/main` -> Render web service `selltousahome` -> Cloudflare edge
- No repo evidence of a required manual deploy script or alternate production target was found locally

### Live verification
Direct fetches at about **2026-04-22 22:58-23:00 EDT** showed the updated Harrisburg pages live:
- `/markets/harrisburg-pa` -> `200`, `888-440-5250` absent, `888-274-5006` present, `last-modified: Thu, 23 Apr 2026 02:49:51 UTC`
- `/guides/sell-house-fast-harrisburg-pa-2026` -> `200`, `888-440-5250` absent, `888-274-5006` present, `last-modified: Thu, 23 Apr 2026 02:49:48 UTC`
- `/blog/harrisburg-pa-sell-house-fast-2026` -> `200`, `888-440-5250` absent, `888-274-5006` present, `last-modified: Thu, 23 Apr 2026 02:49:47 UTC`

### Conclusion
- Exact issue: **the push was real, but production had not finished serving the new build during the earlier verification window**
- Exact resolution observed: production has now flipped to the `c376df33` Harrisburg batch on the live site
- This specific Harrisburg proof-batch blocker is cleared


## 2026-04-22 23:07 EDT — PA phone rollout batch 2 pushed, not live yet

**Production truth:** commit `8157b3dc` for the next four-site PA batch is on `origin/main`, but direct live checks still show the old number on every checked Allentown, Reading, Lancaster, and York URL during the verification window below. This batch is **pushed, not shipped-live yet**.

### Batch commit pushed
- `8157b3dc` — `fix: ship PA phone rollout batch 2`

### Files in this batch
- `app/guides/sell-house-fast-allentown-pa-2026/page.tsx`
- `app/markets/allentown-pa/page.tsx`
- `app/markets/allentown-pa/code-violations/page.tsx`
- `app/markets/allentown-pa/divorce-sale/page.tsx`
- `app/markets/allentown-pa/foreclosure/page.tsx`
- `app/markets/allentown-pa/inherited-property/page.tsx`
- `app/markets/allentown-pa/market-report/page.tsx`
- `app/markets/allentown-pa/probate/page.tsx`
- `app/markets/allentown-pa/tenant-occupied/page.tsx`
- `app/markets/reading-pa/page.tsx`
- `app/guides/sell-house-fast-lancaster-pa-2026/page.tsx`
- `app/markets/lancaster-pa/page.tsx`
- `app/markets/lancaster-pa/faq/page.tsx`
- `app/guides/sell-house-fast-york-pa-2026/page.tsx`
- `app/markets/york-pa/page.tsx`

### Live verification after push
Checked twice from about **2026-04-22 23:04-23:06 EDT**:
- Allentown guide `/guides/sell-house-fast-allentown-pa-2026` -> `200`, old present (`21`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:48 UTC`
- Allentown market `/markets/allentown-pa` -> `200`, old present (`20`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:50 UTC`
- Allentown code violations `/markets/allentown-pa/code-violations` -> `200`, old present (`17`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:50 UTC`
- Allentown divorce sale `/markets/allentown-pa/divorce-sale` -> `200`, old present (`13`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:50 UTC`
- Allentown foreclosure `/markets/allentown-pa/foreclosure` -> `200`, old present (`21`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:50 UTC`
- Allentown inherited `/markets/allentown-pa/inherited-property` -> `200`, old present (`17`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:50 UTC`
- Allentown market report `/markets/allentown-pa/market-report` -> `200`, old present (`17`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:50 UTC`
- Allentown probate `/markets/allentown-pa/probate` -> `200`, old present (`17`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:50 UTC`
- Allentown tenant `/markets/allentown-pa/tenant-occupied` -> `200`, old present (`17`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:50 UTC`
- Reading market `/markets/reading-pa` -> `200`, old present (`20`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:52 UTC`
- Lancaster guide `/guides/sell-house-fast-lancaster-pa-2026` -> `200`, old present (`17`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:48 UTC`
- Lancaster market `/markets/lancaster-pa` -> `200`, old present (`23`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:52 UTC`
- Lancaster FAQ `/markets/lancaster-pa/faq` -> `200`, old present (`18`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:52 UTC`
- York guide `/guides/sell-house-fast-york-pa-2026` -> `200`, old present (`15`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:48 UTC`
- York market `/markets/york-pa` -> `200`, old present (`23`), new absent (`0`), `last-modified: Thu, 23 Apr 2026 02:49:53 UTC`

### Blocker status
- Push to `origin/main` succeeded, but no live deploy was observable yet for this batch.
- Treat this batch as **deploy pending / production not updated yet** until the public URLs flip to `888-274-5006` and fully drop `888-440-5250`.
