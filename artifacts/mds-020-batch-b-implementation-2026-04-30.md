# MDS-020 Batch B Implementation Draft Evidence — 2026-04-30

## Scope / Authorization
- Lock lane: MDS-020 Batch B market-data implementation draft only.
- Markets updated: `bridgeport-ct`, `manchester-nh`, `springfield-ma`, `allentown-pa`, `harrisburg-pa`, `reading-pa`, `york-pa`.
- Local draft only. No commit, push, deploy, IndexNow, GSC, or external service mutation performed.
- Shared schema/imports: not touched.

## What changed
- Refreshed stale Batch B market metrics to March 2026 provider data:
  - Redfin city March 2026 market metrics.
  - Zillow Research city ZHVI dated 2026-03-31.
  - County/metro values retained only where explicitly labeled as county/metro context.
- Replaced unsupported broad `March–April 2026`, `as of April 2026`, `Updated April 2026`, and `temporalCoverage: 2026-04` freshness language where it implied April market-data vintage.
- Left neighborhood price ranges intact where they were neighborhood-specific ranges rather than stale citywide metrics.
- Left legal/timeline phrases intact where they were not market DOM, e.g. NH foreclosure notice timing.

## Files changed
```text
app/markets/allentown-pa/market-report/page.tsx
app/markets/allentown-pa/page.tsx
app/markets/bridgeport-ct/code-violations/page.tsx
app/markets/bridgeport-ct/divorce-sale/page.tsx
app/markets/bridgeport-ct/faq/page.tsx
app/markets/bridgeport-ct/fire-damage/page.tsx
app/markets/bridgeport-ct/foreclosure/page.tsx
app/markets/bridgeport-ct/inherited-property/page.tsx
app/markets/bridgeport-ct/market-report/page.tsx
app/markets/bridgeport-ct/page.tsx
app/markets/bridgeport-ct/probate/page.tsx
app/markets/bridgeport-ct/tenant-occupied/page.tsx
app/markets/harrisburg-pa/market-report/page.tsx
app/markets/harrisburg-pa/page.tsx
app/markets/manchester-nh/code-violations/page.tsx
app/markets/manchester-nh/divorce-sale/page.tsx
app/markets/manchester-nh/faq/page.tsx
app/markets/manchester-nh/fire-damage/page.tsx
app/markets/manchester-nh/foreclosure/page.tsx
app/markets/manchester-nh/inherited-property/page.tsx
app/markets/manchester-nh/market-report/page.tsx
app/markets/manchester-nh/page.tsx
app/markets/manchester-nh/probate/page.tsx
app/markets/manchester-nh/tenant-occupied/page.tsx
app/markets/reading-pa/code-violations/page.tsx
app/markets/reading-pa/divorce-sale/page.tsx
app/markets/reading-pa/faq/page.tsx
app/markets/reading-pa/fire-damage/page.tsx
app/markets/reading-pa/foreclosure/page.tsx
app/markets/reading-pa/inherited-property/page.tsx
app/markets/reading-pa/market-report/page.tsx
app/markets/reading-pa/neighborhoods/page.tsx
app/markets/reading-pa/page.tsx
app/markets/reading-pa/probate/page.tsx
app/markets/reading-pa/property-liens/page.tsx
app/markets/reading-pa/tenant-occupied/page.tsx
app/markets/springfield-ma/code-violations/page.tsx
app/markets/springfield-ma/divorce-sale/page.tsx
app/markets/springfield-ma/faq/page.tsx
app/markets/springfield-ma/fire-damage/page.tsx
app/markets/springfield-ma/foreclosure/page.tsx
app/markets/springfield-ma/market-report/page.tsx
app/markets/springfield-ma/page.tsx
app/markets/springfield-ma/probate/page.tsx
app/markets/springfield-ma/tenant-occupied/page.tsx
app/markets/york-pa/faq/page.tsx
app/markets/york-pa/fire-damage/page.tsx
app/markets/york-pa/foreclosure/page.tsx
app/markets/york-pa/inherited-property/page.tsx
app/markets/york-pa/market-report/page.tsx
app/markets/york-pa/neighborhoods/page.tsx
app/markets/york-pa/page.tsx
```

## Diffstat
```text
 app/markets/allentown-pa/market-report/page.tsx    | 44 ++++++++--------
 app/markets/allentown-pa/page.tsx                  | 18 +++----
 app/markets/bridgeport-ct/code-violations/page.tsx |  4 +-
 app/markets/bridgeport-ct/divorce-sale/page.tsx    |  4 +-
 app/markets/bridgeport-ct/faq/page.tsx             |  2 +-
 app/markets/bridgeport-ct/fire-damage/page.tsx     |  4 +-
 app/markets/bridgeport-ct/foreclosure/page.tsx     |  4 +-
 .../bridgeport-ct/inherited-property/page.tsx      |  2 +-
 app/markets/bridgeport-ct/market-report/page.tsx   | 14 ++---
 app/markets/bridgeport-ct/page.tsx                 |  6 +--
 app/markets/bridgeport-ct/probate/page.tsx         |  2 +-
 app/markets/bridgeport-ct/tenant-occupied/page.tsx |  4 +-
 app/markets/harrisburg-pa/market-report/page.tsx   | 59 +++++++++++-----------
 app/markets/harrisburg-pa/page.tsx                 | 12 ++---
 app/markets/manchester-nh/code-violations/page.tsx |  4 +-
 app/markets/manchester-nh/divorce-sale/page.tsx    |  4 +-
 app/markets/manchester-nh/faq/page.tsx             |  2 +-
 app/markets/manchester-nh/fire-damage/page.tsx     |  4 +-
 app/markets/manchester-nh/foreclosure/page.tsx     |  4 +-
 .../manchester-nh/inherited-property/page.tsx      |  2 +-
 app/markets/manchester-nh/market-report/page.tsx   | 14 ++---
 app/markets/manchester-nh/page.tsx                 | 10 ++--
 app/markets/manchester-nh/probate/page.tsx         |  4 +-
 app/markets/manchester-nh/tenant-occupied/page.tsx |  4 +-
 app/markets/reading-pa/code-violations/page.tsx    |  2 +-
 app/markets/reading-pa/divorce-sale/page.tsx       |  4 +-
 app/markets/reading-pa/faq/page.tsx                |  4 +-
 app/markets/reading-pa/fire-damage/page.tsx        |  2 +-
 app/markets/reading-pa/foreclosure/page.tsx        |  4 +-
 app/markets/reading-pa/inherited-property/page.tsx |  4 +-
 app/markets/reading-pa/market-report/page.tsx      | 26 +++++-----
 app/markets/reading-pa/neighborhoods/page.tsx      |  2 +-
 app/markets/reading-pa/page.tsx                    | 18 +++----
 app/markets/reading-pa/probate/page.tsx            |  2 +-
 app/markets/reading-pa/property-liens/page.tsx     |  2 +-
 app/markets/reading-pa/tenant-occupied/page.tsx    |  2 +-
 .../springfield-ma/code-violations/page.tsx        |  4 +-
 app/markets/springfield-ma/divorce-sale/page.tsx   |  4 +-
 app/markets/springfield-ma/faq/page.tsx            |  2 +-
 app/markets/springfield-ma/fire-damage/page.tsx    |  4 +-
 app/markets/springfield-ma/foreclosure/page.tsx    |  4 +-
 app/markets/springfield-ma/market-report/page.tsx  | 14 ++---
 app/markets/springfield-ma/page.tsx                | 14 ++---
 app/markets/springfield-ma/probate/page.tsx        |  4 +-
 .../springfield-ma/tenant-occupied/page.tsx        |  4 +-
 app/markets/york-pa/faq/page.tsx                   |  2 +-
 app/markets/york-pa/fire-damage/page.tsx           |  2 +-
 app/markets/york-pa/foreclosure/page.tsx           |  2 +-
 app/markets/york-pa/inherited-property/page.tsx    |  2 +-
 app/markets/york-pa/market-report/page.tsx         | 26 +++++-----
 app/markets/york-pa/neighborhoods/page.tsx         |  2 +-
 app/markets/york-pa/page.tsx                       | 34 ++++++-------
 52 files changed, 213 insertions(+), 214 deletions(-)
```

## Gates

### `git diff --check`
```text
PASS
```

### Scoped conflict-marker grep
Markets scanned: bridgeport-ct, manchester-nh, springfield-ma, allentown-pa, harrisburg-pa, reading-pa, york-pa.
Patterns: `<<<<<<<`, `=======`, `>>>>>>>`.
```text
PASS
```

### Scoped unsupported April freshness grep
Markets scanned: bridgeport-ct, manchester-nh, springfield-ma, allentown-pa, harrisburg-pa, reading-pa, york-pa.
Patterns: `March–April 2026`, `temporalCoverage: '2026-04'`, `as of April 2026`, `Updated April 2026`, `Market data last updated: April 2026`.
```text
PASS
```

### Scoped stale-value grep
Markets scanned: bridgeport-ct, manchester-nh, springfield-ma, allentown-pa, harrisburg-pa, reading-pa, york-pa.
Patterns: `252,000`, `315,000`, `178,000`, `265,192`, `234,569`, `227,041`, `246,248`, `303,399`, `165,850`, `86/100`, `March–April 2026`.
```text
PASS
```

### `npm run lint`
```text
> site@0.1.0 lint
> next lint

✔ No ESLint warnings or errors
```

## Unresolved cautions
- The scoped grep intentionally does not flag valid neighborhood ranges such as Bridgeport `North End $190,000-$240,000`, because those are neighborhood-specific values rather than stale citywide market metrics.
- Some pages still include April 2026 only where source-specific and qualified, e.g. Allentown distress listing count from ForeclosureListings.com April 2026. This was not treated as unsupported market-data freshness.
- No publication steps were taken; this remains an uncommitted local draft.
