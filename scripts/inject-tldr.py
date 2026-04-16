#!/usr/bin/env python3
"""
inject-tldr.py — Injects GEO-optimized TL;DR "Quick Answer" blocks into market
situation pages that are missing them.

Insertion point: right after the opening
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
which is the standard article wrapper on all market pages.

Only runs on pages that DON'T already have a TL;DR block.
"""

import os
import re

BASE = "/Users/agents/selltousahome/app/markets"

# ─────────────────────────────────────────────────────────
# TL;DR content: (market_slug, situation_slug) → text
# PA judicial foreclosure: 12–18 months typical
# DE judicial foreclosure: 170–210 day statutory / 6–9 months typical
# OH judicial foreclosure: 6–24 months typical (Mahoning County CoCP)
# PA probate: 9–18 months, Register of Wills
# DE probate: Delaware Court of Chancery / NCC Register of Wills
# OH probate: Mahoning County Probate Court
# ─────────────────────────────────────────────────────────

TLDR = {
    # ── FORECLOSURE ───────────────────────────────────────
    ("harrisburg-pa", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in Harrisburg, PA. "
        "Pennsylvania uses judicial foreclosure through the Dauphin County Court of Common Pleas — "
        "the process typically runs 12–18 months from first missed payment to sheriff sale, and "
        "Dauphin County requires a mandatory conciliation conference that often adds more time. "
        "USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and "
        "stopping the foreclosure before it completes."
    ),
    ("allentown-pa", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in Allentown, PA. "
        "Pennsylvania uses judicial foreclosure through the Lehigh County Court of Common Pleas — "
        "the process typically runs 12–18 months from first missed payment to sheriff sale, "
        "giving you a real window to sell before it's too late. "
        "USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and "
        "stopping the foreclosure before the sheriff sale date."
    ),
    ("bethlehem-pa", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in Bethlehem, PA. "
        "Pennsylvania uses judicial foreclosure through the Northampton County Court of Common Pleas — "
        "the process typically runs 12–18 months from first missed payment to sheriff sale. "
        "USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and "
        "stopping the foreclosure before the Northampton County sheriff sale."
    ),
    ("lancaster-pa", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in Lancaster, PA. "
        "Pennsylvania uses judicial foreclosure, and Lancaster County Courts operate a Foreclosure "
        "Diversion Program — Case Management Orders pause proceedings and require housing counseling, "
        "often extending your window to act. "
        "USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and "
        "stopping the foreclosure before the sheriff sale."
    ),
    ("york-pa", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in York, PA. "
        "Pennsylvania uses judicial foreclosure through the York County Court of Common Pleas — "
        "the process typically runs 12–18 months from first missed payment to sheriff sale, "
        "giving you time to sell and protect your equity. "
        "USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and "
        "stopping the foreclosure before it completes."
    ),
    ("reading-pa", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in Reading, PA. "
        "Pennsylvania uses judicial foreclosure through the Berks County Court of Common Pleas — "
        "the process typically runs 12–18 months from first missed payment to sheriff sale. "
        "Note: Reading has a 5% transfer tax (4% city + 1% state) — we cover all closing costs. "
        "USA Home Buyers can close in as few as 7 days with cash and stop the foreclosure."
    ),
    ("erie-pa", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in Erie, PA. "
        "Pennsylvania uses judicial foreclosure through the Erie County Court of Common Pleas — "
        "the process typically runs 12–18 months from first missed payment to sheriff sale. "
        "USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and "
        "stopping the Erie County foreclosure before the sheriff sale date."
    ),
    ("state-college-pa", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in State College, PA. "
        "Pennsylvania uses judicial foreclosure through the Centre County Court of Common Pleas — "
        "the process typically runs 12–18 months from first missed payment to sheriff sale. "
        "USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and "
        "stopping the foreclosure before the Centre County sheriff sale."
    ),
    ("king-of-prussia-pa", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in King of Prussia, PA. "
        "Pennsylvania uses judicial foreclosure through the Montgomery County Court of Common Pleas — "
        "one of the busiest dockets in PA, typically running 14–24 months from first missed payment. "
        "USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and "
        "stopping the Montgomery County foreclosure before the sheriff sale."
    ),
    ("wilmington-de", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in Wilmington, DE. "
        "Delaware uses judicial foreclosure with a 170–210 day statutory timeline — shorter than "
        "Pennsylvania but still giving you a real window to act before the sheriff sale. "
        "Delaware has no post-sale right of redemption, so acting before the sale is critical. "
        "USA Home Buyers can close in as few as 7 days with cash and stop the foreclosure."
    ),
    ("youngstown-oh", "foreclosure"): (
        "Quick Answer",
        "Yes, you can sell a house in foreclosure in Youngstown, OH. "
        "Ohio uses judicial foreclosure through the Mahoning County Court of Common Pleas — "
        "the process typically runs 6–24 months from first missed payment to sheriff sale. "
        "USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and "
        "stopping the Mahoning County foreclosure before the sheriff sale date."
    ),

    # ── PROBATE ───────────────────────────────────────────
    ("harrisburg-pa", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in Harrisburg, PA — once the executor has Letters "
        "Testamentary from the Dauphin County Register of Wills (2 South Second Street, Harrisburg PA 17101). "
        "Pennsylvania probate typically takes 9–18 months for a simple estate. You can sign a "
        "purchase agreement now and schedule closing around your probate timeline. "
        "USA Home Buyers works with Dauphin County estate executors regularly."
    ),
    ("allentown-pa", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in Allentown, PA — once the executor has Letters "
        "Testamentary from the Lehigh County Register of Wills. "
        "Pennsylvania probate typically takes 9–18 months for a simple estate; Lehigh County "
        "typically runs 10–16 months. You can sign a purchase agreement now and close once the "
        "executor has legal authority. USA Home Buyers works with Lehigh County estate executors."
    ),
    ("bethlehem-pa", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in Bethlehem, PA — once the executor has Letters "
        "Testamentary from the Northampton County Register of Wills. "
        "Pennsylvania probate typically takes 9–18 months; Northampton County typically runs "
        "9–14 months for a simple estate. You can accept a cash offer now and close once the "
        "executor has legal authority. USA Home Buyers works with Northampton County estate executors."
    ),
    ("lancaster-pa", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in Lancaster, PA — once the executor has Letters "
        "Testamentary from the Lancaster County Register of Wills. "
        "Pennsylvania probate typically takes 9–18 months; Lancaster County typically runs "
        "10–15 months due to higher volume. You can sign a purchase agreement now and close when "
        "ready. USA Home Buyers works with Lancaster County estate executors regularly."
    ),
    ("york-pa", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in York, PA — once the executor has Letters "
        "Testamentary from the York County Register of Wills. "
        "Pennsylvania probate typically takes 9–18 months; York County typically runs 9–14 months "
        "for straightforward estates. You can accept a cash offer now and schedule closing around "
        "your probate timeline. USA Home Buyers works with York County estate executors."
    ),
    ("reading-pa", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in Reading, PA — once the executor has Letters "
        "Testamentary from the Berks County Register of Wills. "
        "Pennsylvania probate typically takes 9–18 months; Berks County typically runs "
        "10–15 months. You can sign a purchase agreement during probate and close when the "
        "executor has legal authority. USA Home Buyers works with Berks County estate executors."
    ),
    ("erie-pa", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in Erie, PA — once the executor has Letters "
        "Testamentary from the Erie County Register of Wills. "
        "Pennsylvania probate typically takes 9–18 months for a simple estate. You can sign a "
        "purchase agreement now and close once the executor has legal authority to deed the property. "
        "USA Home Buyers works with Erie County estate executors regularly."
    ),
    ("state-college-pa", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in State College, PA — once the executor has Letters "
        "Testamentary from the Centre County Register of Wills. "
        "Pennsylvania probate typically takes 9–18 months for a simple estate. You can accept a "
        "cash offer now and structure the closing around your Centre County probate timeline. "
        "USA Home Buyers works with Centre County estate executors."
    ),
    ("king-of-prussia-pa", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in King of Prussia, PA — once the executor has Letters "
        "Testamentary from the Montgomery County Register of Wills. "
        "Pennsylvania probate typically takes 9–18 months; Montgomery County often runs "
        "12–20 months due to higher volume and more complex estates. You can accept a cash offer "
        "now and structure the closing around your probate timeline. USA Home Buyers works with "
        "Montgomery County estate executors regularly."
    ),
    ("wilmington-de", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in Wilmington, DE — once the executor has Letters "
        "Testamentary from the New Castle County Register of Wills (800 N. French Street, "
        "Wilmington DE 19801, Delaware Court of Chancery). "
        "You can sign a purchase agreement during probate and close once the executor has legal "
        "authority to deed the property. USA Home Buyers works with New Castle County estate executors."
    ),
    ("youngstown-oh", "probate"): (
        "Quick Answer",
        "You can sell a house in probate in Youngstown, OH — once the executor has Letters "
        "Testamentary from Mahoning County Probate Court (120 Market Street, Youngstown OH 44503, "
        "phone: 330-740-2310). Ohio probate typically runs 6–18 months for a simple estate. "
        "You can accept a cash offer now and structure the closing around your probate timeline. "
        "USA Home Buyers works with Mahoning County estate executors."
    ),

    # ── INHERITED PROPERTY ───────────────────────────────
    ("harrisburg-pa", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in Harrisburg, PA, you likely need to complete probate through "
        "the Dauphin County Register of Wills before selling — unless the property was held jointly "
        "or in a living trust. PA probate typically takes 9–18 months, but you can accept a cash "
        "offer and sign a purchase agreement before probate is complete. "
        "USA Home Buyers buys inherited properties in Harrisburg as-is — no repairs, no cleanout required."
    ),
    ("allentown-pa", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in Allentown, PA, you likely need to complete probate through "
        "the Lehigh County Register of Wills before selling — unless the property was held jointly "
        "or in a living trust. PA probate typically takes 9–18 months. You can accept a cash offer "
        "and sign a purchase agreement before probate is complete. "
        "USA Home Buyers buys inherited properties in Allentown as-is — no repairs or cleanout needed."
    ),
    ("bethlehem-pa", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in Bethlehem, PA, you likely need to complete probate through "
        "the Northampton County Register of Wills before selling — unless the property was held "
        "jointly or in a living trust. PA probate typically takes 9–14 months in Northampton County. "
        "USA Home Buyers buys inherited properties in Bethlehem as-is — no repairs or cleanout required."
    ),
    ("lancaster-pa", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in Lancaster, PA, you likely need to complete probate through "
        "the Lancaster County Register of Wills before selling — unless the property was held "
        "jointly or in a living trust. Lancaster County probate typically runs 10–15 months. "
        "USA Home Buyers buys inherited properties in Lancaster as-is — no repairs, no cleanout, "
        "and we work around your probate timeline."
    ),
    ("york-pa", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in York, PA, you likely need to complete probate through the "
        "York County Register of Wills before selling — unless the property was held jointly or "
        "in a living trust. York County probate typically runs 9–14 months. "
        "USA Home Buyers buys inherited properties in York as-is — no repairs or cleanout required, "
        "and we work around your probate timeline."
    ),
    ("reading-pa", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in Reading, PA, you likely need to complete probate through "
        "the Berks County Register of Wills before selling — unless the property was held jointly "
        "or in a living trust. Berks County probate typically runs 10–15 months. "
        "USA Home Buyers buys inherited properties in Reading as-is — no repairs or cleanout required. "
        "Note: Reading's 5% transfer tax applies; we cover all closing costs."
    ),
    ("erie-pa", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in Erie, PA, you likely need to complete probate through the "
        "Erie County Register of Wills before selling — unless the property was held jointly or "
        "in a living trust. PA probate typically takes 9–18 months. "
        "USA Home Buyers buys inherited properties in Erie as-is — no repairs or cleanout required, "
        "even in properties with deferred maintenance or weather damage."
    ),
    ("state-college-pa", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in State College, PA, you likely need to complete probate through "
        "the Centre County Register of Wills before selling — unless the property was held jointly "
        "or in a living trust. PA probate typically takes 9–18 months. "
        "USA Home Buyers buys inherited properties in the State College area as-is — no repairs "
        "or cleanout required, and we work around your Centre County probate timeline."
    ),
    ("king-of-prussia-pa", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in King of Prussia, PA, you likely need to complete probate "
        "through the Montgomery County Register of Wills before selling — unless the property "
        "was held jointly or in a living trust. Montgomery County probate typically runs "
        "12–20 months due to higher volume. "
        "USA Home Buyers buys inherited properties in Montgomery County as-is — no repairs or "
        "cleanout required, and we work around your probate timeline."
    ),
    ("wilmington-de", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in Wilmington, DE, you may need to complete probate through "
        "the New Castle County Register of Wills (Delaware Court of Chancery, 800 N. French Street, "
        "Wilmington DE 19801) before selling — unless the property was jointly held or in a trust. "
        "USA Home Buyers buys inherited properties in New Castle County as-is — no repairs or "
        "cleanout required."
    ),
    ("youngstown-oh", "inherited-property"): (
        "Quick Answer",
        "If you inherited a house in Youngstown, OH, you may need to complete probate through "
        "Mahoning County Probate Court (120 Market Street, Youngstown OH 44503) before selling — "
        "unless the property was jointly held or in a trust. Ohio probate typically runs 6–18 months. "
        "USA Home Buyers buys inherited properties in Youngstown as-is — no repairs or cleanout required."
    ),

    # ── DIVORCE SALE ──────────────────────────────────────
    ("bethlehem-pa", "divorce-sale"): (
        "Quick Answer",
        "Yes, you can sell a house during or after a divorce in Bethlehem, PA. Both spouses must "
        "agree to the sale, or a Northampton County Court of Common Pleas order can compel it. "
        "A cash sale eliminates the carrying costs and emotional friction of a long listing — "
        "you split the equity and close in 7–14 days. USA Home Buyers buys divorce-sale properties "
        "in the Bethlehem area as-is, with no repairs required."
    ),
    ("lancaster-pa", "divorce-sale"): (
        "Quick Answer",
        "Yes, you can sell a house during or after a divorce in Lancaster, PA. Both spouses must "
        "agree to the sale, or a Lancaster County Court of Common Pleas order can compel it. "
        "A cash sale removes the property from the divorce equation quickly — you split the equity "
        "and move on. USA Home Buyers buys divorce-sale properties in Lancaster as-is, closing in "
        "7–14 days."
    ),
    ("york-pa", "divorce-sale"): (
        "Quick Answer",
        "Yes, you can sell a house during or after a divorce in York, PA. Both spouses must "
        "agree to the sale, or a York County Court of Common Pleas order can require it. "
        "A cash sale cuts through the delays of a traditional listing when both parties need a "
        "clean break. USA Home Buyers buys divorce-sale properties in York as-is, closing in "
        "7–14 days with no repairs required."
    ),
    ("state-college-pa", "divorce-sale"): (
        "Quick Answer",
        "Yes, you can sell a house during or after a divorce in State College, PA. Both spouses "
        "must agree to the sale, or a Centre County Court of Common Pleas order can require it. "
        "A cash sale is the fastest way to divide the largest marital asset and move forward. "
        "USA Home Buyers buys divorce-sale properties in the State College area as-is, closing "
        "in 7–14 days."
    ),
    ("erie-pa", "divorce-sale"): (
        "Quick Answer",
        "Yes, you can sell a house during or after a divorce in Erie, PA. Both spouses must "
        "agree to the sale, or an Erie County Court of Common Pleas order can compel it. "
        "A cash sale eliminates mortgage carrying costs and lets both parties start fresh. "
        "USA Home Buyers buys divorce-sale properties in Erie as-is, closing in 7–14 days."
    ),
    ("king-of-prussia-pa", "divorce-sale"): (
        "Quick Answer",
        "Yes, you can sell a house during or after a divorce in King of Prussia, PA. Both spouses "
        "must agree to the sale, or a Montgomery County Court of Common Pleas order can require it. "
        "A cash sale removes the property from the divorce equation faster than a traditional listing "
        "in a high-priced Montgomery County market. USA Home Buyers closes in 7–14 days, as-is."
    ),
    ("wilmington-de", "divorce-sale"): (
        "Quick Answer",
        "Yes, you can sell a house during or after a divorce in Wilmington, DE. Both spouses must "
        "agree to the sale, or a New Castle County Family Court order can require it. "
        "Delaware's 4% total transfer tax (2.5% state + 1.5% city) applies — we cover all closing "
        "costs. USA Home Buyers buys divorce-sale properties in Wilmington as-is, closing in 7–14 days."
    ),
    ("youngstown-oh", "divorce-sale"): (
        "Quick Answer",
        "Yes, you can sell a house during or after a divorce in Youngstown, OH. Both spouses must "
        "agree to the sale, or a Mahoning County Domestic Relations Court order can compel it. "
        "A cash sale is often the fastest way to divide the home and finalize the settlement. "
        "USA Home Buyers buys divorce-sale properties in Youngstown as-is, closing in 7–14 days."
    ),
}


def make_tldr_block(heading: str, text: str) -> str:
    """Return the JSX TL;DR block with proper indentation."""
    return (
        "\n        {/* TL;DR — GEO/AEO Quick Answer */}\n"
        "        <div className=\"bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10\">\n"
        f"          <h2 className=\"text-lg font-bold text-brand-dark mb-2\">{heading}</h2>\n"
        f"          <p className=\"text-gray-700 text-sm leading-relaxed\">{text}</p>\n"
        "        </div>\n"
    )


CONTAINER_PATTERN = re.compile(
    r'(<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">)'
)

ARTICLE_PATTERN = re.compile(
    r'(<article>)'
)

ALREADY_HAS_TLDR = [
    "bg-blue-50 border-l-4",
    "Quick Answer",
    "TL;DR",
    "What You Need to Know",
]


def already_has_tldr(content: str) -> bool:
    return any(marker in content for marker in ALREADY_HAS_TLDR)


def inject_tldr(file_path: str, heading: str, text: str) -> bool:
    """
    Inject TL;DR into file_path if it doesn't already have one.
    Returns True if file was modified.
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if already_has_tldr(content):
        print(f"  ↩ SKIP (already has TL;DR): {file_path}")
        return False

    tldr_block = make_tldr_block(heading, text)

    # Try inserting after <article> first
    if "<article>" in content:
        new_content = content.replace("<article>", "<article>" + tldr_block, 1)
    elif CONTAINER_PATTERN.search(content):
        # No <article> tag — insert right after the container div opening
        new_content = CONTAINER_PATTERN.sub(
            r'\1' + "\n" + tldr_block,
            content,
            count=1
        )
    else:
        print(f"  ✗ CANNOT INSERT (no article or container found): {file_path}")
        return False

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"  ✓ INJECTED: {file_path}")
    return True


def main():
    modified = 0
    skipped = 0
    errors = 0

    for (market, situation), (heading, text) in TLDR.items():
        page_path = os.path.join(BASE, market, situation, "page.tsx")
        if not os.path.exists(page_path):
            print(f"  ✗ NOT FOUND: {page_path}")
            errors += 1
            continue

        result = inject_tldr(page_path, heading, text)
        if result:
            modified += 1
        else:
            skipped += 1

    print(f"\n{'='*60}")
    print(f"Done. Modified: {modified} | Skipped: {skipped} | Errors: {errors}")


if __name__ == "__main__":
    main()
