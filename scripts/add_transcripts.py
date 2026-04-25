#!/usr/bin/env python3
"""Add video transcripts to all pages with VideoEmbed components."""

import re
import os

BASE = "/Users/agents/selltousahome"

# Each entry: (file_path_relative, old_snippet_to_match, transcript_text)
# We find the VideoEmbed closing /> and insert the <details> block after it.

TRANSCRIPTS = {
    "app/markets/harrisburg-pa/page.tsx": """Hey, if you're looking to sell your house fast in Harrisburg, PA, we can help. I'm with USA Home Buyers — we buy houses right here in Harrisburg and all of Dauphin County, and we do it fast.

Here's how it works. You call us or fill out our form online. We ask you maybe five or ten questions about the property — the condition, your situation, what kind of timeline you need. Within 24 hours, you get a written cash offer. No pressure, no obligation. If you accept, we set a closing date that works for you. We've closed in as few as five days in the Harrisburg area.

Why go the cash route? The Harrisburg market has a median home value around $234,000, and the average days to pending is just five days — so it's a fast market. But once you go pending on the MLS, you're still looking at 45 to 60 more days for inspections, appraisals, and mortgage underwriting. That's two months of uncertainty. If the financing falls through, you start over.

We don't use financing. We pay cash. There's no appraisal contingency, no mortgage approval, no deal falling through at the last minute. No repairs, no cleaning, no agent commissions. We cover all closing costs.

We serve all of Harrisburg — Camp Hill, Mechanicsburg, Carlisle, Steelton, and surrounding Dauphin County communities. Whether your house needs work or you're dealing with a difficult situation, we've handled it before.

Give us a call at 888-274-5006. We're here to make this as simple as possible.""",

    "app/markets/harrisburg-pa/foreclosure/page.tsx": """If you're facing foreclosure in Harrisburg or Dauphin County, time matters more than almost anything right now. I'm with USA Home Buyers, and I want to walk you through what's actually happening and what you can do about it.

Pennsylvania is a judicial foreclosure state. In Dauphin County, the foreclosure process typically takes 12 to 18 months from your first missed payment to the sheriff sale. There's also a mandatory conciliation conference — that's a court-supervised meeting where the lender and borrower try to work something out. It often adds several months. That sounds like a long time, but that window closes fast, especially once a sheriff sale date is scheduled.

Here's what most people don't know: if you sell your house before the sheriff sale, the foreclosure stops. The mortgage gets paid off at closing, the case gets dismissed, and you walk away with whatever equity you have left. That equity doesn't disappear into the bank's pocket — it goes to you.

We've helped homeowners in Harrisburg close in seven days to beat sheriff sale deadlines. Once you accept our written cash offer, we move fast. No financing contingencies, no waiting on a bank.

You also have options like PHFA's HEMAP assistance — you have 33 days from receiving the notice to apply. And Dauphin County's conciliation conference is actually an opportunity to buy time while you figure out your best path.

If you're in foreclosure or think you might be headed there, call us now at 888-274-5006. We'll give you a cash offer within 24 hours and help you understand all your options. Protecting your equity starts with a phone call.""",

    "app/markets/harrisburg-pa/inherited-property/page.tsx": """Inheriting a house in Harrisburg can feel overwhelming, especially when you don't live nearby, the property needs work, or there are multiple family members involved. I'm with USA Home Buyers, and we help families in exactly this situation every day.

Here's what we see a lot: someone passes away, leaves behind a home in Dauphin County, and the heirs are scattered. Nobody wants to deal with repairs, cleaning out decades of belongings, or managing showings from out of town. The thought of going through a traditional listing — finding an agent, fixing things up, waiting 60 or 90 days to close — it's exhausting on top of already grieving.

We buy inherited properties as-is. That means you don't touch a thing. Don't clean it out, don't make repairs, don't even sweep the floor. We'll handle all of that. We make you a written cash offer within 24 hours of your call, and we can close in as few as seven days — or on whatever timeline works for the estate.

If the property is in probate, that's okay too. We work around estate timelines and can coordinate directly with executors and attorneys. The personal representative can sign for the sale once the Dauphin County Register of Wills issues Letters Testamentary — you don't have to wait for the entire estate to settle.

We serve all of Harrisburg and Dauphin County. No repairs. No cleanout. No agent fees. Just a fair cash offer and a simple process.

Call USA Home Buyers at 888-274-5006. We'll answer your questions and get you an offer fast.""",

    "app/markets/harrisburg-pa/probate/page.tsx": """If you're an executor or administrator handling an estate with property in Harrisburg, this video is for you. Probate real estate sales have their own rules, and I want to make sure you understand them.

First, where does probate happen in Harrisburg? The Dauphin County Register of Wills, located at the county courthouse on Market Street. That's where Letters Testamentary or Letters of Administration get issued — and once you have those, you have the legal authority to sell the estate's real property.

Here's something that surprises a lot of executors: you don't have to wait until the entire estate is closed to sell the house. Once you have your Letters, you can move on the property. Simple estates in Dauphin County can move through the opening process in a few weeks. More complex situations with multiple heirs or complications take longer, but the property sale itself can happen independently.

We buy probate properties in Harrisburg and Dauphin County as-is. No repairs, no cleanout. We work around your timeline. If you need to close fast, we can do it in 7 to 14 days. If the estate needs more time to sort other details, we can accommodate that too.

The executor signs the deed — not individual heirs — and the proceeds go into the estate account for distribution. A title company experienced with estate sales handles all the paperwork.

If you're the personal representative of a Harrisburg estate and need to sell the home, call USA Home Buyers at 888-274-5006. We'll walk you through the process and get you a written cash offer within 24 hours.""",

    "app/markets/harrisburg-pa/divorce-sale/page.tsx": """Selling a house during a divorce is one of the most stressful financial situations a homeowner can face. I'm with USA Home Buyers, and we've helped couples in Harrisburg and Dauphin County navigate this more times than I can count.

Here's the core problem with a traditional sale during divorce: it takes too long. You're looking at finding an agent both parties can agree on, making repairs both parties agree on, accepting an offer both parties agree on — and then waiting 45 to 60 days to close while a divorce case is potentially still active. Every month of carrying costs means more money tied up in a house, not in each person's separate accounts.

A cash sale cuts through all of that. We make one written offer to both parties within 24 hours. You both review it. If you accept, we close in 7 to 14 days. The proceeds come out of closing and get divided per your divorce agreement or court order. Done.

We're a neutral third party — we're not aligned with either spouse. Our only job is to make the transaction as fast and smooth as possible so both parties can move forward.

In Harrisburg, the Dauphin County Court of Common Pleas handles divorce proceedings. Whether you're early in the process or the court has already ordered a sale, we can work with your attorneys and timeline.

No repairs. No showings. No open houses. Just a fair cash offer and a fast close.

Call USA Home Buyers at 888-274-5006. We'll get you an offer within 24 hours and help you both move on.""",

    "app/markets/harrisburg-pa/tenant-occupied/page.tsx": """Selling a tenant-occupied rental property in Harrisburg comes with its own set of complications. I'm with USA Home Buyers, and I want to be straight with you about how we handle this.

First, the basics. Pennsylvania landlord-tenant law gives tenants specific rights when a property is sold. You generally can't just show up and show the house — you need proper notice, and in most cases, you need to honor the lease term. If your tenant has a fixed-term lease, a buyer using conventional financing typically won't be interested. Banks don't want to lend on tenant-occupied properties with active leases. That's where cash buyers are different.

We buy tenant-occupied properties in Harrisburg as-is, lease and all. We don't require you to evict your tenant before closing. We'll take the property with the tenant in place and work out the transition ourselves.

This matters a lot if you have a difficult tenant situation — non-payment, a lease you can't easily break, a tenant who's simply not cooperating with showings. A traditional listing in that situation can drag on for months. We skip all of that.

The Harrisburg rental market has strong demand, particularly in the city core and neighborhoods near Penn State Harrisburg. We understand the local rental landscape and price accordingly.

If you're a Harrisburg landlord ready to exit a property — whether you have a great tenant or a problem tenant — call USA Home Buyers at 888-274-5006. Written cash offer in 24 hours, close in 7 to 14 days. No eviction required.""",

    "app/markets/harrisburg-pa/code-violations/page.tsx": """If your Harrisburg property has code violations — outstanding city citations, failed inspections, unpermitted work — selling it the traditional way is a real challenge. Most buyers using financing can't touch it. I'm with USA Home Buyers, and this is exactly the kind of property we buy.

The City of Harrisburg Bureau of Codes Enforcement is active. Violations accumulate fines. Unpermitted additions or structural issues can make a property unmortgageable from a lender's perspective, which cuts out 80 to 90 percent of your buyer pool immediately.

We're not one of those buyers. We pay cash, so there's no lender review, no appraisal flagging issues, no financing contingency that falls apart when the inspector finds the unpermitted garage addition. We buy the property in its current condition — violations, fines, and all.

Here's how it actually works at closing: the code violation fines are identified during the title search. They get paid from closing proceeds, just like a lien or back taxes would. In most cases, you don't need cash upfront to resolve them. The title company handles the payoffs.

We've bought Harrisburg properties with municipal liens, outstanding violations, structural issues, properties that failed city inspection — all of it. The condition doesn't disqualify you.

If you have a property in Harrisburg or Dauphin County with code violations and you're not sure what to do with it, call USA Home Buyers at 888-274-5006. We'll give you a written cash offer within 24 hours and explain exactly how the violations get resolved at closing. No surprises.""",

    "app/markets/harrisburg-pa/property-liens/page.tsx": """One of the biggest misconceptions I hear from Harrisburg homeowners is that liens mean they can't sell. That's not true. I'm with USA Home Buyers, and I want to explain how property liens actually work in a sale.

In Harrisburg and Dauphin County, the most common liens are delinquent property tax liens filed by the Tax Claim Bureau, city municipal liens for unpaid water, sewer, or code fines from the Bureau of Codes Enforcement, judgment liens from court cases filed in the Dauphin County Court of Common Pleas, mechanic's liens from unpaid contractors, and IRS or PA Department of Revenue tax liens.

Here's the key thing to understand: liens don't block a sale. They have to be resolved at or before closing, but in almost all cases, they're paid directly from your sale proceeds. You typically don't need cash upfront. The title company runs a title search, finds all the liens, and pays them off at closing before passing the remaining proceeds to you.

The problem with traditional buyers is that conventional financing lenders require clear title. That means a buyer using a mortgage can't close until liens are resolved, which creates a chicken-and-egg problem. Cash buyers don't have that constraint.

We've bought Harrisburg properties with tax liens, municipal liens, judgment liens, and mechanic's liens. As long as there's enough equity to cover the liens and our offer, we can close. If the liens exceed the home's value, we can help you understand your options, including negotiating reduced payoffs.

Don't assume a lien means you're stuck. Call USA Home Buyers at 888-274-5006. We'll give you a cash offer within 24 hours and walk you through exactly how your specific liens get resolved.""",

    "app/markets/harrisburg-pa/fire-damage/page.tsx": """Selling a fire-damaged home in Harrisburg is not something most real estate agents know how to handle. Insurance claims, structural damage, smoke and water remediation — it's a complicated situation. I'm with USA Home Buyers, and we buy fire-damaged properties in Harrisburg and Dauphin County as-is, for cash.

Here's what that means in practice. You don't need to repair anything. You don't need to remediate smoke or water damage. You don't need to bring the structure up to code before selling. We buy the property in whatever condition it's in right now.

Fire-damaged homes are essentially unmarketable through traditional channels. Conventional financing won't appraise a structurally compromised home, and getting a mortgage on a gutted property isn't possible. Your buyer pool shrinks to all-cash investors — which is exactly what we are.

We move fast because we have to. Fire-damaged homes are often open to weather, at risk of further deterioration, and creating ongoing insurance and liability headaches. The faster you can close and hand off responsibility, the better for you.

We make written cash offers within 24 hours. Once you accept, we can close in as few as 7 days. We handle all closing costs. No agent commissions, no repairs, no remediation required on your end.

Whether it was a kitchen fire, electrical fire, or total loss, we've seen it and bought it. If you have a fire-damaged property anywhere in Harrisburg, Dauphin County, or surrounding areas, call USA Home Buyers right now at 888-274-5006. We'll get you an offer fast so you can move forward.""",

    "app/markets/harrisburg-pa/neighborhoods/page.tsx": """Harrisburg has a lot of distinct neighborhoods, and where your house is located matters — whether you're selling traditionally or going the cash route. I'm with USA Home Buyers, and I want to give you a quick lay of the land.

The city itself sits in Dauphin County, right on the Susquehanna River. You've got established residential neighborhoods like Bellevue Park, Allison Hill, and Midtown — each with its own price range and character. The suburbs like Camp Hill, Mechanicsburg, and Carlisle attract buyers who want the Harrisburg metro area without the city core.

Here's what we see in terms of market data for 2026: the Harrisburg metro area has a median home value around $234,000 per Zillow, though city-limit sale prices median closer to $145,000 — that gap reflects the mix of urban and suburban properties. Average days to pending for the area is just five days, which is fast. But fast to pending doesn't mean fast to close. After an accepted offer on the MLS, you're still 45 to 60 days away from a closing date.

We buy houses in every Harrisburg neighborhood — whether it's a row home on Derry Street, a split-level in Lawnton, or a Colonial in Paxtang. Condition doesn't matter. Neighborhood doesn't disqualify you.

If you're a homeowner anywhere in the Harrisburg area looking for a fast, certain sale, call USA Home Buyers at 888-274-5006. Written offer within 24 hours, close in 7 to 14 days.""",

    "app/markets/harrisburg-pa/faq/page.tsx": """I get a lot of the same questions from Harrisburg homeowners thinking about selling to a cash buyer, so let me just answer the most common ones right here. I'm with USA Home Buyers.

How fast do we actually close? Our standard is 7 to 14 days after you accept the offer. Our fastest close in the Harrisburg area was 5 days. If you need more time, we work with your timeline.

What do we pay? We pay 70 to 80 percent of fair market value. No agent commissions — that's typically 5 to 6 percent saved. No closing costs — we cover them. No repair expenses. When you add it all up, the net proceeds are often closer than you'd think to a traditional sale.

Do we buy houses in bad condition? Yes. We buy houses as-is in any condition. We've bought homes that were fire-damaged, had mold, had structural issues, had hoarding situations, had tenant damage. Whatever condition your Harrisburg property is in, we'll make you an offer.

What about liens or back taxes? Those get paid at closing from proceeds. You don't need cash upfront in most cases. The title company handles it.

Is the offer pressure-free? Yes. We send a written offer. It stands on its own. No pressure to accept. If you want to think about it, think about it.

What areas do we serve? All of Harrisburg and Dauphin County — Camp Hill, Mechanicsburg, Carlisle, Steelton, Lower Paxton Township, Swatara Township, and surrounding communities.

Any other questions? Call us at 888-274-5006. We're real people, we answer the phone, and we'll give you straight answers.""",

    "app/markets/harrisburg-pa/market-report/page.tsx": """Let me give you the real numbers on the Harrisburg PA housing market in 2026. I'm with USA Home Buyers, and we look at this data every day.

Zillow's Home Value Index for the Harrisburg area puts the median home value at $234,569 as of early 2026. Redfin's median sale price for city-limit properties is around $145,000 — that gap tells you something about the mix of urban row homes and suburban single-family houses in the metro area.

Average days to pending in Harrisburg is five days. That's fast — it means when a well-priced home hits the MLS, it's going under contract quickly. But here's what that number doesn't tell you: after going pending, you're still 45 to 60 days from closing. Inspections, appraisals, mortgage underwriting — all of that happens after the offer is accepted. The actual close-to-list timeline is closer to two months.

That's why some sellers in Harrisburg choose a cash sale instead. We close in 7 to 14 days. There's no appraisal contingency, no financing that can fall through, no buyer getting cold feet after inspection. The certainty of a cash close has real value — especially if you're relocating, dealing with an estate, or in a time-sensitive situation.

Harrisburg is also seeing year-over-year appreciation, driven by its status as the state capital, Penn State Harrisburg's presence, and relative affordability compared to Philadelphia and Pittsburgh.

Whether you decide to list traditionally or call us, understanding the market helps you make a better decision. If you'd like a cash offer on your Harrisburg property, call USA Home Buyers at 888-274-5006. Written offer in 24 hours.""",

    # ALLENTOWN
    "app/markets/allentown-pa/page.tsx": """Hey, if you need to sell your house fast in Allentown, PA, I want to tell you exactly how we work. I'm with USA Home Buyers. We buy houses in Allentown and all of Lehigh County and Northampton County for cash, as-is, with no repairs and no agent fees.

Here's the Allentown market right now in 2026. Median home value is around $267,000 per Zillow, with median sale prices on Redfin coming in around $245,000. Average days to pending is 29 days — so it's an active market. But after you go pending, you're still 45 to 60 days from closing. That's two to three months from listing to keys changing hands.

We short-circuit all of that. You contact us, we ask a few questions about your property and situation, and within 24 hours you have a written cash offer. If you accept, you choose the closing date. Our fastest close in the Lehigh Valley was six days.

No repairs. No cleaning. No staging. No open houses. No agent commissions eating 5 to 6 percent of your sale price. We cover all closing costs.

We serve all of Allentown — the South Side, West End, Fountain Hill, Whitehall, Bethlehem, Easton, Northampton Borough, Emmaus, Catasauqua, and every corner of Lehigh and Northampton County. Whatever your situation — estate, divorce, foreclosure, bad condition, problem tenant — we've handled it before.

We pay 70 to 80 percent of fair market value. With Allentown median prices around $245,000, that's typically a cash offer of $172,000 to $196,000 for a median-priced home, minus zero agent fees and zero repair costs.

Call 888-274-5006 to get your offer started. We're ready today.""",

    "app/markets/allentown-pa/foreclosure/page.tsx": """If you're facing foreclosure in Allentown or anywhere in Lehigh County, I want to give you a clear picture of what's happening and what your options are. I'm with USA Home Buyers.

Pennsylvania runs judicial foreclosures — that means the lender has to go through the courts to foreclose. The process typically takes 12 to 18 months from your first missed payment to the Lehigh County sheriff sale. That sounds like a long time, but once a sale date is scheduled, things move fast and the pressure is intense.

Here's the option most people don't fully understand: sell before the sheriff sale. If you close on a cash sale before the scheduled sheriff sale date, the mortgage gets paid off at closing and the foreclosure case is dismissed. Whatever equity you have left — that's yours. It doesn't disappear into the bank.

We've helped Allentown and Lehigh County homeowners close in seven days to beat sheriff sale deadlines. We move fast because we pay cash — no financing contingency, no lender approval process, no waiting on an appraisal. You accept the offer, we schedule closing, it happens.

There's also PHFA's HEMAP assistance program — if you haven't applied, you have 33 days from receiving the notice of intention to foreclose to do so. And Lehigh County has its own court process that may offer a conciliation opportunity. Understanding your timeline is critical.

The worst thing you can do right now is wait. Every day that passes is a day closer to losing any remaining equity. Call USA Home Buyers at 888-274-5006. We'll give you a written cash offer within 24 hours and help you understand exactly where you stand.""",

    "app/markets/allentown-pa/inherited-property/page.tsx": """Inheriting a house in Allentown is rarely straightforward. There's the emotional weight of it, the logistics of a property you may not live near, and often family members in different places with different opinions. I'm with USA Home Buyers, and we handle inherited properties in Allentown and Lehigh County every week.

The most common thing we hear from people in your situation: they don't want to deal with it. The property needs work. There's furniture and belongings that need to go somewhere. Nobody wants to manage a Lehigh Valley property from another state. A traditional listing means repairs, cleanout, showings, waiting — on top of everything else you're already dealing with.

We buy inherited Allentown properties as-is. Don't touch a thing. No cleanout, no repairs, no painting, no landscaping. We make a written cash offer within 24 hours and close in as few as seven days — or on whatever timeline the estate needs.

If the property is going through probate, that's fine. Once the Lehigh County Register of Wills issues Letters Testamentary or Letters of Administration, the personal representative can authorize the sale. We're experienced working alongside estate attorneys and executors. The house can be sold while other estate matters are still being wrapped up.

If there are multiple heirs, we work with whatever process you have in place. All parties review and sign — the title company handles the documentation correctly.

You don't have to spend months managing an Allentown property you didn't ask for. Call USA Home Buyers at 888-274-5006. Fair offer, fast close, no hassle.""",

    "app/markets/allentown-pa/probate/page.tsx": """If you're the executor or personal representative of an estate with property in Allentown or Lehigh County, here's what you need to know about selling it. I'm with USA Home Buyers.

Probate in Allentown is handled through the Lehigh County Register of Wills. Once Letters Testamentary or Letters of Administration are issued, the personal representative has legal authority to sell estate real property. You don't have to wait for the entire estate to close — the house can be sold as soon as you have your Letters.

Simple estates in Lehigh County can open and get Letters issued in a matter of weeks. More complex situations — contested wills, multiple heirs, outstanding debts — can take longer. But regardless of how long the estate takes overall, selling the property can often happen independently.

We buy probate properties in Allentown and throughout Lehigh and Northampton County as-is. The executor signs the deed on behalf of the estate. Proceeds go into the estate account for distribution to heirs. The title company prepares all estate-specific documentation.

Why sell to us instead of listing? No repairs. No cleanout. No open houses or showings that need to be coordinated. We close in 7 to 14 days. The estate can move forward without a property sitting on the Allentown MLS for months waiting for a buyer.

If there's a mortgage outstanding, unpaid taxes, or other liens, those typically get resolved at closing from proceeds. The process is cleaner than most executors expect.

Call USA Home Buyers at 888-274-5006. We'll give you a written cash offer within 24 hours and walk you through exactly how a probate sale works in Lehigh County.""",

    "app/markets/allentown-pa/market-report/page.tsx": """Here's a real look at the Allentown PA housing market in 2026. I'm with USA Home Buyers, and we track these numbers closely because they affect every offer we make.

Median home value in the Allentown area per Zillow is $267,465. Redfin's median sale price for the city is around $245,000. Days to pending is running about 29 days — the Lehigh Valley market is active, but it's not as fast as some of the Philadelphia suburbs.

After those 29 days on market, you're still 45 to 60 days from closing after going pending. So the realistic timeline from listing to close is two to three months, assuming nothing goes wrong. If an inspection comes back with issues, or a buyer's financing falls through, you start over.

Allentown sits at an interesting price point. It's more affordable than the Philadelphia metro while still being within commuting distance. That drives demand from buyers who've been priced out of Montgomery and Delaware County. It also means properties that are in good condition move quickly, but properties with issues — deferred maintenance, bad tenants, code problems — sit.

If your Allentown property is in great shape and you're in no rush, a traditional listing might serve you well. If you need speed, certainty, or if the property has any complications, a cash sale makes more sense.

We pay 70 to 80 percent of fair market value — with Allentown medians around $245,000, that's typically $172,000 to $196,000 for a median-priced home, with zero agent commissions and zero repair costs deducted.

Want to know what we'd offer for your specific property? Call 888-274-5006 or fill out the form. Written offer in 24 hours.""",

    "app/markets/allentown-pa/divorce-sale/page.tsx": """Selling a house during a divorce in Allentown is hard — not just logistically, but emotionally. I'm with USA Home Buyers, and I want to make the real estate part of this as simple as it can be.

The traditional listing route during a divorce is full of friction. You need both parties to agree on an agent, agree on a list price, agree on what repairs to make, agree on which offer to accept — and then wait 45 to 60 days to close while a divorce case may still be active. Every month the house sits is another month of shared financial exposure and shared stress.

A cash sale eliminates most of that. We make one written offer. Both parties review it. If you both accept, we set a closing date — as fast as 7 to 14 days. The proceeds come out of closing and get divided according to your divorce agreement or court order. There's no back and forth on repairs, no price negotiations mid-process, no deal falling through at the last minute.

We're a neutral third party. We have no relationship with either spouse. Our job is just to close the transaction efficiently so both of you can move on.

Lehigh County Court of Common Pleas handles divorce proceedings in the Allentown area. Whether you're early in the process or have a court-ordered sale, we can work with your attorneys and timeline.

No repairs, no showings, no open houses. Just a fast, clean closing.

If you and your spouse need to sell a house in Allentown and want to get through it with as little friction as possible, call USA Home Buyers at 888-274-5006. We'll have a written offer to you within 24 hours.""",

    "app/markets/allentown-pa/tenant-occupied/page.tsx": """Selling a rental property in Allentown with tenants in place is one of the trickier real estate situations you can be in. I'm with USA Home Buyers, and we handle tenant-occupied properties all the time.

Here's the core problem with a traditional sale when you have tenants: most retail buyers using conventional financing don't want to buy a tenant-occupied property, especially with an active lease. Lenders get nervous. Buyers want to move in, not inherit a landlord relationship. That cuts your buyer pool dramatically right from the start.

Pennsylvania landlord-tenant law also gives your tenants specific rights around showings and access. You can't just schedule open houses without proper notice. If your tenant isn't cooperative — which happens a lot when they know the property is being sold — getting the house shown and sold through the MLS can be a months-long ordeal.

We buy tenant-occupied properties in Allentown as-is, with tenants in place. We don't require you to evict before closing. We don't need showings that your tenant has to allow. We make our offer based on the property and the situation, and we handle the tenant transition after closing.

Allentown and the Lehigh Valley have a strong rental market. Whether you have a long-term tenant with a great track record or a problem tenant situation you need to exit, we've seen it.

If you're a Lehigh Valley landlord ready to sell — call USA Home Buyers at 888-274-5006. Cash offer in 24 hours, close in 7 to 14 days. No eviction required.""",

    "app/markets/allentown-pa/code-violations/page.tsx": """If your Allentown property has code violations — city citations, failed inspections, unpermitted additions, structural deficiencies — you've got a real problem selling it the traditional way. I'm with USA Home Buyers, and this is exactly what we buy.

Allentown's Bureau of Housing Inspection and Neighborhood Services is active in enforcing code compliance, particularly in the city's older housing stock. If you've got open violations, accumulating fines, or a property that would fail an inspection, conventional buyers using financing can't close on it. Lenders won't approve a mortgage on a property with material code violations. That takes out 80 to 90 percent of your potential buyer pool.

We pay cash. No lender review, no appraiser flagging structural issues, no financing contingency that collapses when the buyer's bank finds out about the violations. We buy the property in its current condition.

Here's how violations get handled at closing: the title search identifies all outstanding municipal liens and fines. They get paid directly from your closing proceeds — in most cases, you don't need to come up with that money upfront. The title company handles the payoffs.

We've bought Allentown properties with multiple outstanding violations, properties that failed city inspection, properties with unpermitted work, and properties where the violations had been accumulating for years. The condition doesn't disqualify you — it just affects the offer price.

If you have a code violation property in Allentown or anywhere in Lehigh County, call USA Home Buyers at 888-274-5006. Written cash offer within 24 hours. We'll explain exactly what the violations mean for the closing process before you decide anything.""",

    # KING OF PRUSSIA
    "app/markets/king-of-prussia-pa/page.tsx": """If you're looking to sell your house fast in King of Prussia, PA, here's how we work. I'm with USA Home Buyers. We buy homes in King of Prussia and throughout Montgomery County for cash, as-is, in any condition.

Here's the 2026 market reality in King of Prussia. Zillow puts the median home value at $453,560. Redfin's median sale price is $549,350. King of Prussia has a Redfin Compete Score of 82 out of 100 — it's a strong seller's market. But here's the number that matters: the median home takes 34 days to go pending, then another 45 to 60 days to close. You're looking at three to four months from listing to cash in hand. And that's if nothing goes wrong — no failed inspections, no financing falling through, no buyer getting cold feet.

We close in 7 to 14 days. Written offer within 24 hours of your call. No repairs, no cleaning, no agent commissions. We cover all closing costs.

We serve all of Upper Merion Township and Montgomery County: Norristown, Conshohocken, Plymouth Meeting, Wayne, Collegeville, Valley Forge, Bryn Mawr, Bridgeport, and surrounding communities. Whether you're relocating for work, dealing with an inherited property, facing a time-sensitive situation, or just need certainty over the highest possible price — we're the call to make.

One of our recent Harrisburg-area clients closed in 11 days on an estate property that needed a new roof and updated plumbing. No repairs. No hassle.

Call USA Home Buyers at 888-274-5006. We'll ask a few questions, make a fair written offer within 24 hours, and close on your schedule.""",

    "app/markets/king-of-prussia-pa/foreclosure/page.tsx": """Facing foreclosure in Montgomery County is a stressful situation, but you have more options than you might think. I'm with USA Home Buyers, and I want to walk you through the most important one.

Pennsylvania requires judicial foreclosure — the lender goes through the courts. In Montgomery County, that process typically runs 12 to 18 months from first missed payment to sheriff sale. But once a sheriff sale date is scheduled, the pressure becomes intense and the window for action narrows fast.

Here's what most people don't realize: if you sell your home before the sheriff sale, the foreclosure stops. The mortgage gets paid off at closing. The case gets dismissed. Any remaining equity — after the mortgage and closing costs — goes to you. Not to the bank.

We've helped Montgomery County homeowners close in seven days to beat sheriff sale deadlines. Cash purchase means no lender approval, no appraisal contingency, no financing that can fall through. We move when you need to move.

Montgomery County properties carry significant value — with median home prices in the $453,000 to $549,000 range across King of Prussia, there's often meaningful equity worth protecting. Don't let the sheriff sale take that.

PHFA's HEMAP program offers mortgage assistance — you have 33 days from receiving the foreclosure notice to apply. And there may be other conciliation opportunities through the Montgomery County Court of Common Pleas.

But if your situation calls for a clean exit — sell before the sale, protect your equity, start fresh — call USA Home Buyers right now at 888-274-5006. We'll give you a written offer within 24 hours and get you to closing before the deadline.""",

    "app/markets/king-of-prussia-pa/inherited-property/page.tsx": """Inheriting a home in King of Prussia or Montgomery County comes with complexity — and often, some real emotional weight. I'm with USA Home Buyers, and we handle estate properties in this area regularly.

What we see most often: the family home has been in the family for decades. It needs work — maybe a new roof, outdated bathrooms, deferred maintenance that piled up over the years. The heirs don't live nearby. Nobody wants to coordinate repairs, manage showings, or deal with the logistics of a traditional listing from out of state while also handling everything else that comes with losing someone.

We buy inherited Montgomery County properties as-is. You don't need to clean it out. Don't repair anything. Don't even take furniture you don't want — we'll handle all of it. We make a written cash offer within 24 hours and close in as few as 7 days.

With King of Prussia median home values at $453,000 to $549,000, there's often significant equity in estate properties even after our offer. And what we save you in carrying costs, repairs, agent commissions, and the months of waiting more than offsets the difference from a retail listing price.

If the property is in probate, we work with executors and the Montgomery County Register of Wills process. The personal representative signs for the sale once Letters Testamentary are issued — you don't have to wait for the full estate to close.

No cleanout. No repairs. No agent fees. Fast, clean close.

Call USA Home Buyers at 888-274-5006. We'll give you a fair offer and make the real estate part of this as easy as it can be.""",

    "app/markets/king-of-prussia-pa/probate/page.tsx": """If you're the executor of an estate with real property in King of Prussia or Montgomery County, here's what you need to know. I'm with USA Home Buyers.

Probate in Montgomery County goes through the Montgomery County Register of Wills, located in Norristown. Once you have Letters Testamentary or Letters of Administration, you have the legal authority to sell estate real property on behalf of the estate. You typically don't need to wait for the entire estate to settle — the house can be sold once your Letters are issued.

Montgomery County estates vary widely in complexity. A straightforward estate with a single heir and no disputes can move through the opening process in weeks. Multi-heir situations or contested estates take longer. But in either case, the sale of the property itself can often proceed independently while other estate matters continue.

We buy probate properties in King of Prussia and throughout Montgomery County as-is. No repairs, no cleanout. The executor signs the deed on behalf of the estate. Closing proceeds go into the estate account. A title company with estate experience handles all documentation — the correct deed form, the references to the estate and Letters Testamentary.

With King of Prussia homes valued in the $453,000 to $549,000 range, estate properties here often carry significant equity. Getting a fast, clean sale can accelerate the estate's distribution to heirs significantly compared to sitting on the MLS for months.

If there are outstanding liens, back taxes, or other encumbrances, those get resolved at closing from proceeds — typically no cash upfront required.

Call USA Home Buyers at 888-274-5006. Written cash offer in 24 hours. We work with executors and estate attorneys and understand the Montgomery County probate process.""",

    "app/markets/king-of-prussia-pa/market-report/page.tsx": """Let's look at the King of Prussia PA real estate market in 2026 — actual numbers, not hype. I'm with USA Home Buyers.

The Zillow Home Value Index for King of Prussia is $453,560 as of February 2026, up 5.9 percent year-over-year. Redfin reports the median sale price at $549,350 — the gap between those numbers reflects the mix of condos and apartments versus detached single-family homes in the 19406 market.

King of Prussia has a Redfin Compete Score of 82 out of 100, classified as Very Competitive. The sale-to-list ratio is 97.6 percent — sellers are getting close to asking price. Hot homes go pending in about 14 days.

But here's the number that doesn't get enough attention: the median home takes 34 days to go pending. After that, inspections, appraisals, and mortgage processing add another 45 to 60 days. Total time from listing to close is roughly 80 to 95 days — over three months. And that assumes no complications.

We close in 7 to 14 days. No appraisal contingency. No financing that can fall through. No buyer getting cold feet after inspection.

Year-over-year appreciation is up 5.9 percent on ZHVI and 3.7 percent per Redfin. Both signal continued strength, driven by suburban Philadelphia demand and limited new inventory in established neighborhoods near Valley Forge and Upper Merion Township.

If you're trying to decide between listing and a cash sale in King of Prussia, the math depends on your timeline, your property's condition, and how much certainty matters to you. We're happy to talk it through — no pressure.

Call USA Home Buyers at 888-274-5006 or fill out the form for a written offer within 24 hours.""",

    "app/markets/king-of-prussia-pa/divorce-sale/page.tsx": """Selling a house during a divorce in King of Prussia is stressful under the best circumstances. I'm with USA Home Buyers, and I want to explain why a cash sale often makes the most sense in this situation.

The traditional listing route requires agreement at every step — agent selection, list price, repairs and updates, which offers to accept. When two people in a divorce have to agree on all of that, it often drags on for months. Meanwhile, you're both carrying a shared asset, paying joint expenses, and dealing with a house that neither of you wants to be tied to anymore.

A cash sale cuts through that. We make one written offer to both parties within 24 hours. You both review it. If you accept, we close in 7 to 14 days. The proceeds come out at closing and get divided per your divorce agreement or court order. No ongoing negotiations, no repair projects to coordinate, no open houses.

With King of Prussia median home values in the $453,000 to $549,000 range, there's often significant equity at stake. Our goal is to get both parties a fair, fast outcome — not the maximum retail price, but a clean transaction that moves quickly and removes the shared financial obligation.

We're a neutral third party. We don't have a stake in either side of the divorce. Our job is just to close the deal efficiently.

Montgomery County Court of Common Pleas handles divorce proceedings. Whether you're early in the process or have a court-ordered sale, we can work with your attorneys and the court's timeline.

Call USA Home Buyers at 888-274-5006. Fair offer, 24 hours, close in 7 to 14 days. Done.""",

    "app/markets/king-of-prussia-pa/tenant-occupied/page.tsx": """Selling a rental property in King of Prussia or Montgomery County with tenants in place is one of the situations where a cash buyer makes the most sense. I'm with USA Home Buyers, and we buy tenant-occupied properties regularly.

Here's the problem with a traditional listing when you have tenants: most buyers using conventional financing don't want to purchase a tenant-occupied property. They either want to move in themselves or they're not set up to be landlords. Financing lenders get cautious about occupied properties. Your buyer pool shrinks significantly before you even list.

On top of that, Pennsylvania landlord-tenant law gives your tenants rights around showings and access. If your tenant isn't cooperative — which often happens when they realize the property is being sold and their situation is changing — coordinating showings through the MLS can be a nightmare.

We don't need showings. We buy tenant-occupied properties in King of Prussia as-is, with tenants in place. We take the property with the existing lease and handle the tenant transition ourselves after closing. You're not responsible for what happens with the tenant after you close.

Montgomery County's rental market is strong, particularly near the King of Prussia business corridor, Valley Forge, and communities along Route 202. We understand rental economics in this market.

Whether you have a great long-term tenant you're happy to sell with or a problem tenant you desperately need to get out from under — we can close in 7 to 14 days without you having to evict anyone first.

Call USA Home Buyers at 888-274-5006. Written cash offer in 24 hours. No eviction required.""",

    "app/markets/king-of-prussia-pa/code-violations/page.tsx": """If your King of Prussia or Montgomery County property has open code violations, you're in a situation where most traditional buyers can't help you. I'm with USA Home Buyers, and code violation properties are something we buy regularly.

Montgomery County has active code enforcement, and violations — whether they're from unpermitted additions, structural deficiencies, health and safety citations, or deferred maintenance — make it nearly impossible to sell to a buyer using conventional financing. The lender's appraisal or underwriting process will flag material violations, and the deal will fall apart.

We don't use financing. We pay cash. There's no appraiser, no lender underwriting, no appraisal contingency. We buy the property in its current condition — violations, citations, and all.

How do violations get resolved at closing? They're treated like any other lien or encumbrance. The title search identifies all outstanding fines and municipal liens. At closing, those get paid from your proceeds before the remainder goes to you. In most cases, you don't need upfront cash to resolve them.

We've bought Montgomery County properties with multiple open violations, properties cited for structural issues, properties with unpermitted construction, and properties where code enforcement had been active for years. It's not a disqualifier — it just affects the offer price.

If you have a property in King of Prussia or anywhere in Montgomery County with code violations and you're not sure what to do with it, call USA Home Buyers at 888-274-5006. We'll make a written cash offer within 24 hours and explain exactly how the violation resolution works at closing. No surprises.""",

    "app/markets/king-of-prussia-pa/fire-damage/page.tsx": """If you have a fire-damaged property in King of Prussia or Montgomery County, you're dealing with a situation that most real estate professionals aren't equipped to handle. I'm with USA Home Buyers, and we buy fire-damaged properties for cash, as-is.

Fire-damaged homes are effectively unmarketable through conventional channels. Conventional financing won't appraise a structurally compromised or gutted property. Insurance can become complicated when the property is in damaged condition. The longer a fire-damaged home sits — open to weather, at risk of further structural deterioration, creating liability — the worse the situation gets.

We buy fire-damaged King of Prussia and Montgomery County properties for cash in their current condition. No remediation required. No structural repairs before closing. No smoke or water damage cleanup on your end. We assess the property in its current state and make a written cash offer within 24 hours.

With King of Prussia median home values in the $453,000 to $549,000 range, there's often significant value in the land and structure even after fire damage. Our offer reflects that.

Once you accept, we can close in as few as 7 days. We handle all closing costs. No agent commissions. We take on full responsibility for the property at closing — including all the cleanup, remediation, and structural work that comes after.

Whether it was a kitchen fire, an electrical fire, or a more significant structural event, we've bought it before. If you have a fire-damaged property anywhere in Upper Merion Township or surrounding Montgomery County communities, call us right now at 888-274-5006. We'll get you a fair cash offer fast so you can move forward.""",

    # GUIDE
    "app/guides/sell-house-fast-king-of-prussia-pa-2026/page.tsx": """If you're trying to sell your house fast in King of Prussia in 2026, you've got a few real options — and I want to give you an honest comparison so you can decide what's right for your situation. I'm with USA Home Buyers.

Option one: traditional listing with an agent. In King of Prussia, the median home takes about 34 days to go pending, then another 45 to 60 days to close after that. You're looking at three to four months from listing to cash in hand. In a market with a Compete Score of 82 out of 100, well-priced homes in great condition do well. The trade-off is time, uncertainty, and the cost of repairs, staging, and agent commissions.

Option two: iBuyers. Companies like Opendoor make instant offers on homes that fit their criteria — typically updated, well-maintained properties in certain price ranges. If your home qualifies, it can be convenient. But service fees often run 5 to 8 percent, and not all King of Prussia properties qualify.

Option three: a local cash buyer like USA Home Buyers. We buy in any condition — no repairs, no staging, no showings. Written cash offer within 24 hours. Close in 7 to 14 days. We cover all closing costs. The trade-off is that we pay below full retail — typically 70 to 80 percent of market value. But with King of Prussia median values at $453,000 to $549,000, that's still a significant number.

Which option is right for you depends on your timeline, your property's condition, and how much certainty matters. If you have time and a move-in-ready home, the MLS may serve you well. If you need speed, certainty, or if your property has complications, a cash sale is the move.

Want to know what we'd offer for your specific King of Prussia property? Call 888-274-5006 or fill out the form. You'll have a written offer in 24 hours.""",
}

def add_transcript(filepath, transcript):
    """Add a transcript section after the VideoEmbed closing tag."""
    full_path = os.path.join(BASE, filepath)
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if transcript already added
    if 'Video Transcript' in content:
        print(f"  SKIP (already has transcript): {filepath}")
        return False
    
    # Build the transcript block — escape the transcript text for JSX
    # Split transcript into paragraphs
    paragraphs = [p.strip() for p in transcript.strip().split('\n\n') if p.strip()]
    
    p_tags = '\n'.join(f'            <p className="mb-3">{p}</p>' for p in paragraphs)
    
    transcript_block = f"""
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
{p_tags}
        </div>
      </details>"""
    
    # Find the VideoEmbed closing />
    # Pattern: look for `      />` that follows VideoEmbed props
    # We'll find the VideoEmbed block and replace the closing />
    pattern = r'(<VideoEmbed\b[^>]*/?>)'
    
    import re as _re
    
    # Find VideoEmbed self-closing tag
    match = _re.search(r'<VideoEmbed\b.*?/>', content, _re.DOTALL)
    if not match:
        print(f"  ERROR: Could not find VideoEmbed in {filepath}")
        return False
    
    # Insert transcript block after the VideoEmbed
    insert_pos = match.end()
    new_content = content[:insert_pos] + transcript_block + content[insert_pos:]
    
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    # Count words
    word_count = sum(len(p.split()) for p in paragraphs)
    print(f"  OK ({word_count} words): {filepath}")
    return True

def main():
    total_files = 0
    total_words = 0
    
    for filepath, transcript in TRANSCRIPTS.items():
        paragraphs = [p.strip() for p in transcript.strip().split('\n\n') if p.strip()]
        word_count = sum(len(p.split()) for p in paragraphs)
        
        result = add_transcript(filepath, transcript)
        if result:
            total_files += 1
            total_words += word_count
    
    print(f"\nDone: {total_files} files updated, ~{total_words} words added")

if __name__ == '__main__':
    main()
