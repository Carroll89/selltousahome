# MDS-028 Batch C+D Sentinel Fixes — 2026-04-30

**Role:** precise fix worker
**Repo:** `/Users/agents/selltousahome`
**Branch:** `wave-3-low-risk-aio-seo-geo-2026-04-28`
**Base HEAD observed:** `1dce21b`
**Mode:** local edits only. No commits, pushes, deploys, IndexNow, lock edits, or external mutations.

## Per-fix results

1. **DONE** — Removed Bethlehem cross-market `$480,500` from `app/markets/bethlehem-pa/neighborhoods/page.tsx`; Historic District range now uses `$380,000–$440,000+` / `$440,000+`.
2. **DONE** — Removed Boston cross-market `$480,500` from `app/markets/boston-ma/market-report/page.tsx` and `app/markets/boston-ma/page.tsx`; affordable-end range now starts at `$500,000`.
3. **DONE** — Corrected Kenosha market-report DOM from `37 days` to `35 days`; corrected footer `March–March 2026` to `March 2026`.
4. **DONE** — Replaced exact Kenosha County/Zillow+Redfin `$279,500` mislabel sentence in all matching Kenosha files with Redfin city median sale price + Zillow city ZHVI wording.
5. **DONE** — Corrected Kenosha cash-offer percentage in `app/markets/kenosha-wi/page.tsx` from `68-80%` to `70-80%` for the `$191,000-$218,000` range.
6. **DONE** — Corrected King of Prussia cash-offer label from `70–75%` to `70–80%` in root and market-report files.
7. **DONE** — Corrected King of Prussia stale time language: removed `nearly two months`, replaced `100–115 days` with `70–85 days`, and replaced `over four months` with approximately two-to-three-month language. Also normalized related `80–95` / three-to-four-month copy found in the same listed files.
8. **DONE** — Corrected Racine/Mount Pleasant `$336,759` label from `Metro hotness median (RDC)` to `Mount Pleasant village ZHVI`; fixed `March–March 2026`; removed `Realtor.com Market Hotness Index` from the market-report source footer.
9. **DONE** — Corrected Racine `84/100` phrasing so it is framed as Redfin Compete Score, not offers-per-home/per-home/average-offers.
10. **DONE** — Corrected State College transfer-tax narrative from `$13,500` to `$14,415` in both required files. Existing correct comparison-table value was left intact.
11. **DONE** — Replaced State College/Centre County transfer-tax wording in market-report with borough/local nuance. No exact matching sentence was present in root page after the draft, so no root replacement was needed.
12. **DONE** — Normalized Bethlehem Redfin `$311,000` date labels from `2026-03-31` to `March 2026` in foreclosure and inherited-property pages. Zillow CSV exact dates were not changed.
13. **DONE** — Corrected Kenosha neighborhood cross-market `$311,000` value to `$310,000` in `app/markets/kenosha-wi/neighborhoods/page.tsx`; also removed the same neighborhood-row value from the Kenosha market-report table while editing that listed Kenosha file.

## Verification

- `git diff --check`: **PASS**
- `npm run lint`: **PASS** (`next lint` completed with no ESLint warnings or errors)
- Targeted residual greps: **PASS for dispatch-critical strings** — no remaining matches for the dispatched bad strings in the targeted files (`$480,500` in Bethlehem/Boston, exact Kenosha County `$279,500` sentence, KOP `70–75%`/`nearly two months`/`100–115 days`/`over four months`, Racine `Metro hotness median`/`Average offers per home`/bad Compete Score framing, State College `$13,500`/old Centre County sentence, Bethlehem Redfin `2026-03-31`, Kenosha neighborhoods `$311,000`).

## Scope check

- No commits, pushes, deploys, IndexNow, lock edits, or external mutations performed.
- `lib/schema.ts` was not modified.
- No shared components or lock files were modified.
- The worktree already contained broad Batch C+D draft edits from MDS-026 before this worker started. This worker's substantive edits were limited to the dispatched market files plus this evidence artifact.

## Evidence artifact

Written at: `/Users/agents/selltousahome/artifacts/mds-028-batch-cd-sentinel-fixes-2026-04-30.md`
