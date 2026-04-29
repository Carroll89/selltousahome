# GTM Install Live Verification — 2026-04-29

## Scope
- `selltousahome.com` / authority site: add Google Tag Manager container `GTM-W6ZH7MJF` sitewide.
- `sellfirehome.com` / Fire PPC site: add Google Tag Manager container `GTM-KR2FX9VG` sitewide.

## Implementation
- Authority site repo: `/Users/agents/.openclaw/workspace-seo-commander/site`
  - Commit: `4d44293` (`Add GTM container to authority site`)
  - File changed: `app/layout.tsx`
  - Added Next.js `Script` GTM loader and noscript fallback.
- Fire site clean clone: `/tmp/fire-gtm.SldTO9/repo`
  - Commit: `a1712c9` (`Add GTM container to fire site`)
  - File changed: `app/layout.tsx`
  - Added Next.js `Script` GTM loader and noscript fallback alongside existing Google Ads base tag.

## Gates
- Authority site: `npm run lint` PASS; `npm run build` PASS; `git diff --check` PASS.
- Fire site: `npm run lint` PASS; `npm run build` PASS; `git diff --check` PASS.

## Deploy verification
- Authority Render service `srv-d7ap58450q8c73efq9b0`: deploy `dep-d7p584vaqgkc73a0s6ag` live at commit `4d44293291a284369cd2a1ae76b532edb1d8c29f`, finished `2026-04-29T19:00:28.171198Z`.
- Fire Render service `srv-d7jpmud7vvec73a62g8g`: deploy `dep-d7p58c67r5hc73am1ts0` live at commit `a1712c98a0e5ee4b191d0bcc754c07b214fb13c3`, finished `2026-04-29T18:57:37.570709Z`.

## Live public checks
- `https://www.selltousahome.com/`: fetched live page after deploy; `GTM-W6ZH7MJF` present in HTML on retry after deploy propagation.
- `https://sellfirehome.com/`: fetched live page after deploy; `GTM-KR2FX9VG` present in HTML.

## Notes
- Did not add or change lead-form conversion events yet. Current change is base/sitewide GTM installation only.
- Fire local checkout `/Users/agents/fire-damage-site` had unrelated uncommitted work and was not mutated for this GTM change; Fire GTM was applied via a clean clone from `origin/main` to avoid mixing lanes.
