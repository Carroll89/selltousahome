#!/usr/bin/env python3
"""Add video transcripts to all pages with VideoEmbed. Uses &apos; from the start."""

import re
import os

BASE = "/Users/agents/selltousahome"

def esc(text):
    """Escape apostrophes for JSX text content."""
    return text.replace("'", "&apos;")

# Transcripts as raw English — esc() will be applied when building p tags
RAW_TRANSCRIPTS = {
    "app/markets/harrisburg-pa/page.tsx": [
        "Hey, if you're looking to sell your house fast in Harrisburg, PA, we can help. I'm with USA Home Buyers — we buy houses right here in Harrisburg and all of Dauphin County, and we do it fast.",
        "Here's how it works. You call us or fill out our form online. We ask you maybe five or ten questions about the property — the condition, your situation, what kind of timeline you need. Within 24 hours, you get a written cash offer. No pressure, no obligation. If you accept, we set a closing date that works for you. We've closed in as few as five days in the Harrisburg area.",
        "Why go the cash route? The Harrisburg market has a median home value around $234,000, and the average days to pending is just five days — so it's a fast market. But once you go pending on the MLS, you're still looking at 45 to 60 more days for inspections, appraisals, and mortgage underwriting. That's two months of uncertainty. If the financing falls through, you start over.",
        "We don't use financing. We pay cash. There's no appraisal contingency, no mortgage approval, no deal falling through at the last minute. No repairs, no cleaning, no agent commissions. We cover all closing costs.",
        "We serve all of Harrisburg — Camp Hill, Mechanicsburg, Carlisle, Steelton, and surrounding Dauphin County communities. Whatever your situation, we've handled it before.",
        "Give us a call at 888-440-5250. We're here to make this as simple as possible.",
    ],
    "app/markets/harrisburg-pa/foreclosure/page.tsx": [
        "If you're facing foreclosure in Harrisburg or Dauphin County, time matters more than almost anything right now. I'm with USA Home Buyers, and I want to walk you through what's actually happening and what you can do about it.",
        "Pennsylvania is a judicial foreclosure state. In Dauphin County, the foreclosure process typically takes 12 to 18 months from your first missed payment to the sheriff sale. There's also a mandatory conciliation conference — a court-supervised meeting where the lender and borrower try to work something out. It often adds several months.",
        "Here's what most people don't know: if you sell your house before the sheriff sale, the foreclosure stops. The mortgage gets paid off at closing, the case gets dismissed, and you walk away with whatever equity you have left. That equity doesn't go to the bank — it goes to you.",
        "We've helped Harrisburg homeowners close in seven days to beat sheriff sale deadlines. Once you accept our written cash offer, we move fast. No financing contingencies, no waiting on a bank.",
        "You also have options like PHFA's HEMAP assistance — you have 33 days from receiving the notice to apply. And Dauphin County's conciliation conference is actually an opportunity to buy time while you figure out your best path.",
        "If you're in foreclosure or think you might be headed there, call us now at 888-440-5250. We'll give you a cash offer within 24 hours and help you understand all your options.",
    ],
    "app/markets/harrisburg-pa/inherited-property/page.tsx": [
        "Inheriting a house in Harrisburg can feel overwhelming, especially when you don't live nearby, the property needs work, or there are multiple family members involved. I'm with USA Home Buyers, and we help families in exactly this situation every day.",
        "What we see a lot: someone passes away, leaves behind a home in Dauphin County, and the heirs are scattered. Nobody wants to deal with repairs, cleaning out decades of belongings, or managing showings from out of town. The thought of going through a traditional listing — finding an agent, fixing things up, waiting 60 or 90 days to close — it's exhausting on top of already grieving.",
        "We buy inherited properties as-is. That means you don't touch a thing. Don't clean it out, don't make repairs, don't even sweep the floor. We'll handle all of that. We make you a written cash offer within 24 hours of your call, and we can close in as few as seven days.",
        "If the property is in probate, that's okay. We work around estate timelines and can coordinate directly with executors and attorneys. The personal representative can sign for the sale once the Dauphin County Register of Wills issues Letters Testamentary.",
        "We serve all of Harrisburg and Dauphin County. No repairs. No cleanout. No agent fees. Just a fair cash offer and a simple process.",
        "Call USA Home Buyers at 888-440-5250. We'll answer your questions and get you an offer fast.",
    ],
    "app/markets/harrisburg-pa/probate/page.tsx": [
        "If you're an executor or administrator handling an estate with property in Harrisburg, this video is for you. Probate real estate sales have their own rules, and I want to make sure you understand them.",
        "First, where does probate happen in Harrisburg? The Dauphin County Register of Wills, located at the county courthouse on Market Street. That's where Letters Testamentary or Letters of Administration get issued — and once you have those, you have the legal authority to sell the estate's real property.",
        "Here's something that surprises a lot of executors: you don't have to wait until the entire estate is closed to sell the house. Once you have your Letters, you can move on the property. Simple estates in Dauphin County can move through the opening process in a few weeks.",
        "We buy probate properties in Harrisburg and Dauphin County as-is. No repairs, no cleanout. We work around your timeline. If you need to close fast, we can do it in 7 to 14 days. If the estate needs more time, we can accommodate that too.",
        "The executor signs the deed — not individual heirs — and the proceeds go into the estate account for distribution. A title company experienced with estate sales handles all the paperwork.",
        "If you're the personal representative of a Harrisburg estate and need to sell the home, call USA Home Buyers at 888-440-5250. We'll walk you through the process and get you a written cash offer within 24 hours.",
    ],
    "app/markets/harrisburg-pa/divorce-sale/page.tsx": [
        "Selling a house during a divorce is one of the most stressful financial situations a homeowner can face. I'm with USA Home Buyers, and we've helped couples in Harrisburg and Dauphin County navigate this many times.",
        "Here's the core problem with a traditional sale during divorce: it takes too long. You're looking at finding an agent both parties can agree on, making repairs both parties agree on, accepting an offer both parties agree on — and then waiting 45 to 60 days to close while a divorce case is potentially still active.",
        "A cash sale cuts through all of that. We make one written offer to both parties within 24 hours. You both review it. If you accept, we close in 7 to 14 days. The proceeds come out of closing and get divided per your divorce agreement or court order. Done.",
        "We're a neutral third party — we're not aligned with either spouse. Our only job is to make the transaction as fast and smooth as possible so both parties can move forward.",
        "In Harrisburg, the Dauphin County Court of Common Pleas handles divorce proceedings. Whether you're early in the process or the court has already ordered a sale, we can work with your attorneys and timeline.",
        "Call USA Home Buyers at 888-440-5250. We'll get you an offer within 24 hours and help you both move on.",
    ],
    "app/markets/harrisburg-pa/tenant-occupied/page.tsx": [
        "Selling a tenant-occupied rental property in Harrisburg comes with its own set of complications. I'm with USA Home Buyers, and I want to be straight with you about how we handle this.",
        "Pennsylvania landlord-tenant law gives tenants specific rights when a property is sold. You generally can't just show up and show the house — you need proper notice, and in most cases, you need to honor the lease term. If your tenant has a fixed-term lease, a buyer using conventional financing typically won't be interested.",
        "We buy tenant-occupied properties in Harrisburg as-is, lease and all. We don't require you to evict your tenant before closing. We'll take the property with the tenant in place and work out the transition ourselves.",
        "This matters if you have a difficult tenant situation — non-payment, a lease you can't easily break, a tenant who isn't cooperating with showings. A traditional listing in that situation can drag on for months. We skip all of that.",
        "If you're a Harrisburg landlord ready to exit a property — whether you have a great tenant or a problem tenant — call USA Home Buyers at 888-440-5250. Written cash offer in 24 hours, close in 7 to 14 days. No eviction required.",
    ],
    "app/markets/harrisburg-pa/code-violations/page.tsx": [
        "If your Harrisburg property has code violations — outstanding city citations, failed inspections, unpermitted work — selling it the traditional way is a real challenge. Most buyers using financing can't touch it. I'm with USA Home Buyers, and this is exactly the kind of property we buy.",
        "The City of Harrisburg Bureau of Codes Enforcement is active. Violations accumulate fines. Unpermitted additions or structural issues can make a property unmortgageable, which cuts out 80 to 90 percent of your buyer pool immediately.",
        "We're not one of those buyers. We pay cash, so there's no lender review, no appraisal flagging issues, no financing contingency that falls apart when the inspector finds the unpermitted garage addition. We buy the property in its current condition.",
        "Here's how it works at closing: the code violation fines are identified during the title search. They get paid from closing proceeds, just like a lien or back taxes would. In most cases, you don't need cash upfront to resolve them. The title company handles the payoffs.",
        "If you have a property in Harrisburg or Dauphin County with code violations and you're not sure what to do with it, call USA Home Buyers at 888-440-5250. We'll give you a written cash offer within 24 hours and explain exactly how the violations get resolved at closing. No surprises.",
    ],
    "app/markets/harrisburg-pa/property-liens/page.tsx": [
        "One of the biggest misconceptions I hear from Harrisburg homeowners is that liens mean they can't sell. That's not true. I'm with USA Home Buyers, and I want to explain how property liens actually work in a sale.",
        "In Harrisburg and Dauphin County, the most common liens are delinquent property tax liens filed by the Tax Claim Bureau, city municipal liens for unpaid water, sewer, or code fines, judgment liens from the Dauphin County Court of Common Pleas, mechanic's liens from unpaid contractors, and IRS or PA Department of Revenue tax liens.",
        "Here's the key thing to understand: liens don't block a sale. They have to be resolved at or before closing, but in almost all cases, they're paid directly from your sale proceeds. You typically don't need cash upfront. The title company runs a search, finds all the liens, and pays them off at closing.",
        "The problem with traditional buyers is that conventional financing lenders require clear title. A buyer using a mortgage can't close until liens are resolved. Cash buyers don't have that constraint.",
        "We've bought Harrisburg properties with tax liens, municipal liens, judgment liens, and mechanic's liens. As long as there's enough equity to cover the liens and our offer, we can close.",
        "Don't assume a lien means you're stuck. Call USA Home Buyers at 888-440-5250. We'll give you a cash offer within 24 hours and walk you through exactly how your specific liens get resolved.",
    ],
    "app/markets/harrisburg-pa/fire-damage/page.tsx": [
        "Selling a fire-damaged home in Harrisburg is not something most real estate agents know how to handle. Insurance claims, structural damage, smoke and water remediation — it's a complicated situation. I'm with USA Home Buyers, and we buy fire-damaged properties in Harrisburg and Dauphin County as-is, for cash.",
        "Here's what that means in practice. You don't need to repair anything. You don't need to remediate smoke or water damage. You don't need to bring the structure up to code before selling. We buy the property in whatever condition it's in right now.",
        "Fire-damaged homes are essentially unmarketable through traditional channels. Conventional financing won't appraise a structurally compromised home, and getting a mortgage on a gutted property isn't possible. Your buyer pool shrinks to all-cash investors — which is exactly what we are.",
        "We move fast because we have to. Fire-damaged homes are often open to weather, at risk of further deterioration, and creating ongoing insurance and liability headaches. The faster you can close and hand off responsibility, the better.",
        "We make written cash offers within 24 hours. Once you accept, we can close in as few as 7 days. We handle all closing costs. No agent commissions, no repairs, no remediation required on your end.",
        "Call USA Home Buyers right now at 888-440-5250. Whether it was a kitchen fire or a total loss, we'll get you an offer fast so you can move forward.",
    ],
    "app/markets/harrisburg-pa/neighborhoods/page.tsx": [
        "Harrisburg has a lot of distinct neighborhoods, and where your house is located matters — whether you're selling traditionally or going the cash route. I'm with USA Home Buyers, and I want to give you a quick lay of the land.",
        "The city sits in Dauphin County, right on the Susquehanna River. You've got established residential neighborhoods like Bellevue Park, Allison Hill, and Midtown — each with its own price range and character. The suburbs like Camp Hill, Mechanicsburg, and Carlisle attract buyers who want the Harrisburg metro without the city core.",
        "The Harrisburg metro has a median home value around $234,000 per Zillow, though city-limit sale prices median closer to $145,000. Average days to pending for the area is just five days — that's fast. But fast to pending doesn't mean fast to close. After an accepted offer on the MLS, you're still 45 to 60 days away from closing.",
        "We buy houses in every Harrisburg neighborhood — whether it's a row home on Derry Street, a split-level in Lawnton, or a Colonial in Paxtang. Condition doesn't matter. Neighborhood doesn't disqualify you.",
        "If you're a homeowner anywhere in the Harrisburg area looking for a fast, certain sale, call USA Home Buyers at 888-440-5250. Written offer within 24 hours, close in 7 to 14 days.",
    ],
    "app/markets/harrisburg-pa/faq/page.tsx": [
        "I get a lot of the same questions from Harrisburg homeowners thinking about selling to a cash buyer, so let me answer the most common ones right here. I'm with USA Home Buyers.",
        "How fast do we close? Our standard is 7 to 14 days after you accept the offer. Our fastest close in the Harrisburg area was 5 days. If you need more time, we work with your timeline.",
        "What do we pay? We pay 70 to 80 percent of fair market value. No agent commissions — that's typically 5 to 6 percent saved. No closing costs — we cover them. No repair expenses.",
        "Do we buy houses in bad condition? Yes. We buy as-is in any condition — fire-damaged, mold, structural issues, hoarding situations, tenant damage. Whatever condition your Harrisburg property is in, we'll make you an offer.",
        "What about liens or back taxes? Those get paid at closing from proceeds. You don't need cash upfront in most cases. The title company handles it.",
        "What areas do we serve? All of Harrisburg and Dauphin County — Camp Hill, Mechanicsburg, Carlisle, Steelton, Lower Paxton Township, Swatara Township, and surrounding communities.",
        "Any other questions? Call us at 888-440-5250. We're real people, we answer the phone, and we'll give you straight answers.",
    ],
    "app/markets/harrisburg-pa/market-report/page.tsx": [
        "Let me give you the real numbers on the Harrisburg PA housing market in 2026. I'm with USA Home Buyers, and we track this data every day.",
        "Zillow's Home Value Index for the Harrisburg area puts the median home value at $234,569 as of early 2026. Redfin's median sale price for city-limit properties is around $145,000 — that gap tells you something about the mix of urban row homes and suburban single-family houses in the metro area.",
        "Average days to pending in Harrisburg is five days. That's fast — it means when a well-priced home hits the MLS, it goes under contract quickly. But after going pending, you're still 45 to 60 days from closing. Inspections, appraisals, mortgage underwriting — all of that happens after the offer is accepted.",
        "That's why some sellers in Harrisburg choose a cash sale instead. We close in 7 to 14 days. There's no appraisal contingency, no financing that can fall through, no buyer getting cold feet after inspection.",
        "Harrisburg is also seeing year-over-year appreciation, driven by its status as the state capital, Penn State Harrisburg's presence, and relative affordability compared to Philadelphia and Pittsburgh.",
        "Whether you decide to list traditionally or call us, understanding the market helps you make a better decision. If you'd like a cash offer on your Harrisburg property, call USA Home Buyers at 888-440-5250.",
    ],

    # ALLENTOWN
    "app/markets/allentown-pa/page.tsx": [
        "Hey, if you need to sell your house fast in Allentown, PA, I want to tell you exactly how we work. I'm with USA Home Buyers. We buy houses in Allentown and all of Lehigh County and Northampton County for cash, as-is, with no repairs and no agent fees.",
        "Here's the Allentown market right now in 2026. Median home value is around $267,000 per Zillow, with median sale prices on Redfin coming in around $245,000. Average days to pending is 29 days — it's an active market. But after you go pending, you're still 45 to 60 days from closing. That's two to three months from listing to keys changing hands.",
        "We short-circuit all of that. You contact us, we ask a few questions about your property and situation, and within 24 hours you have a written cash offer. If you accept, you choose the closing date. Our fastest close in the Lehigh Valley was six days.",
        "No repairs. No cleaning. No staging. No open houses. No agent commissions eating 5 to 6 percent of your sale price. We cover all closing costs.",
        "We serve all of Allentown — the South Side, West End, Fountain Hill, Whitehall, Bethlehem, Easton, Northampton Borough, Emmaus, Catasauqua, and every corner of Lehigh and Northampton County. Whatever your situation — estate, divorce, foreclosure, bad condition, problem tenant — we've handled it before.",
        "Call 888-440-5250 to get your offer started. We're ready today.",
    ],
    "app/markets/allentown-pa/foreclosure/page.tsx": [
        "If you're facing foreclosure in Allentown or anywhere in Lehigh County, I want to give you a clear picture of what's happening and what your options are. I'm with USA Home Buyers.",
        "Pennsylvania runs judicial foreclosures — that means the lender has to go through the courts. The process typically takes 12 to 18 months from your first missed payment to the Lehigh County sheriff sale. That sounds like a long time, but once a sale date is scheduled, the pressure is intense.",
        "Here's the option most people don't fully understand: sell before the sheriff sale. If you close on a cash sale before the scheduled sheriff sale date, the mortgage gets paid off at closing and the foreclosure case is dismissed. Whatever equity you have left — that's yours.",
        "We've helped Allentown and Lehigh County homeowners close in seven days to beat sheriff sale deadlines. We move fast because we pay cash — no financing contingency, no lender approval process, no waiting on an appraisal.",
        "There's also PHFA's HEMAP assistance program — if you haven't applied, you have 33 days from receiving the notice of intention to foreclose to do so.",
        "The worst thing you can do right now is wait. Call USA Home Buyers at 888-440-5250. We'll give you a written cash offer within 24 hours and help you understand exactly where you stand.",
    ],
    "app/markets/allentown-pa/inherited-property/page.tsx": [
        "Inheriting a house in Allentown is rarely straightforward. There's the emotional weight of it, the logistics of a property you may not live near, and often family members in different places with different opinions. I'm with USA Home Buyers, and we handle inherited properties in Allentown and Lehigh County every week.",
        "The most common thing we hear: they don't want to deal with it. The property needs work. There's furniture and belongings that need to go somewhere. Nobody wants to manage a Lehigh Valley property from another state. A traditional listing means repairs, cleanout, showings, waiting — on top of everything else you're already dealing with.",
        "We buy inherited Allentown properties as-is. Don't touch a thing. No cleanout, no repairs, no painting, no landscaping. We make a written cash offer within 24 hours and close in as few as seven days.",
        "If the property is going through probate, that's fine. Once the Lehigh County Register of Wills issues Letters Testamentary or Letters of Administration, the personal representative can authorize the sale. The house can be sold while other estate matters are still being wrapped up.",
        "You don't have to spend months managing an Allentown property you didn't ask for. Call USA Home Buyers at 888-440-5250. Fair offer, fast close, no hassle.",
    ],
    "app/markets/allentown-pa/probate/page.tsx": [
        "If you're the executor or personal representative of an estate with property in Allentown or Lehigh County, here's what you need to know about selling it. I'm with USA Home Buyers.",
        "Probate in Allentown is handled through the Lehigh County Register of Wills. Once Letters Testamentary or Letters of Administration are issued, the personal representative has legal authority to sell estate real property. You don't have to wait for the entire estate to close.",
        "Simple estates in Lehigh County can open and get Letters issued in a matter of weeks. More complex situations — contested wills, multiple heirs, outstanding debts — can take longer. But the house can often be sold independently while the estate continues.",
        "We buy probate properties in Allentown and throughout Lehigh and Northampton County as-is. The executor signs the deed on behalf of the estate. Proceeds go into the estate account for distribution. The title company prepares all estate-specific documentation.",
        "No repairs. No cleanout. No open houses. We close in 7 to 14 days. The estate can move forward without a property sitting on the Allentown MLS for months.",
        "Call USA Home Buyers at 888-440-5250. We'll give you a written cash offer within 24 hours and walk you through exactly how a probate sale works in Lehigh County.",
    ],
    "app/markets/allentown-pa/market-report/page.tsx": [
        "Here's a real look at the Allentown PA housing market in 2026. I'm with USA Home Buyers, and we track these numbers closely because they affect every offer we make.",
        "Median home value in the Allentown area per Zillow is $267,465. Redfin's median sale price for the city is around $245,000. Days to pending is running about 29 days — the Lehigh Valley market is active, but not as fast as some Philadelphia suburbs.",
        "After those 29 days on market, you're still 45 to 60 days from closing after going pending. The realistic timeline from listing to close is two to three months, assuming nothing goes wrong.",
        "Allentown sits at an interesting price point — more affordable than the Philadelphia metro while still within commuting distance. That drives demand from buyers priced out of Montgomery and Delaware County. Properties in good condition move quickly; properties with issues sit.",
        "We pay 70 to 80 percent of fair market value — with Allentown medians around $245,000, that's typically $172,000 to $196,000 for a median-priced home, with zero agent commissions and zero repair costs.",
        "Want to know what we'd offer for your specific property? Call 888-440-5250 or fill out the form. Written offer in 24 hours.",
    ],
    "app/markets/allentown-pa/divorce-sale/page.tsx": [
        "Selling a house during a divorce in Allentown is hard — not just logistically, but emotionally. I'm with USA Home Buyers, and I want to make the real estate part of this as simple as it can be.",
        "The traditional listing route during a divorce is full of friction. You need both parties to agree on an agent, agree on a list price, agree on what repairs to make, agree on which offer to accept — and then wait 45 to 60 days to close while a divorce case may still be active.",
        "A cash sale eliminates most of that. We make one written offer. Both parties review it. If you both accept, we set a closing date — as fast as 7 to 14 days. The proceeds come out of closing and get divided according to your divorce agreement or court order.",
        "We're a neutral third party. We have no relationship with either spouse. Our job is just to close the transaction efficiently so both of you can move on.",
        "Lehigh County Court of Common Pleas handles divorce proceedings in the Allentown area. Whether you're early in the process or have a court-ordered sale, we can work with your attorneys and timeline.",
        "If you and your spouse need to sell a house in Allentown, call USA Home Buyers at 888-440-5250. We'll have a written offer to you within 24 hours.",
    ],
    "app/markets/allentown-pa/tenant-occupied/page.tsx": [
        "Selling a rental property in Allentown with tenants in place is one of the trickier real estate situations you can be in. I'm with USA Home Buyers, and we handle tenant-occupied properties all the time.",
        "Most retail buyers using conventional financing don't want to buy a tenant-occupied property, especially with an active lease. Lenders get nervous. Buyers want to move in, not inherit a landlord relationship. That cuts your buyer pool dramatically right from the start.",
        "Pennsylvania landlord-tenant law also gives your tenants specific rights around showings and access. If your tenant isn't cooperative — which happens a lot when they know the property is being sold — getting the house shown and sold through the MLS can be a months-long ordeal.",
        "We buy tenant-occupied properties in Allentown as-is, with tenants in place. We don't require you to evict before closing. We make our offer based on the property and the situation, and we handle the tenant transition after closing.",
        "Allentown and the Lehigh Valley have a strong rental market. Whether you have a long-term tenant or a problem tenant situation you need to exit, we've seen it.",
        "Call USA Home Buyers at 888-440-5250. Cash offer in 24 hours, close in 7 to 14 days. No eviction required.",
    ],
    "app/markets/allentown-pa/code-violations/page.tsx": [
        "If your Allentown property has code violations — city citations, failed inspections, unpermitted additions, structural deficiencies — you've got a real problem selling it the traditional way. I'm with USA Home Buyers, and this is exactly what we buy.",
        "Allentown's Bureau of Housing Inspection and Neighborhood Services is active in enforcing code compliance. If you've got open violations, accumulating fines, or a property that would fail inspection, conventional buyers using financing can't close on it. That takes out 80 to 90 percent of your potential buyer pool.",
        "We pay cash. No lender review, no appraiser flagging structural issues, no financing contingency that collapses when the buyer's bank finds out about the violations. We buy the property in its current condition.",
        "How do violations get handled at closing? The title search identifies all outstanding municipal liens and fines. They get paid directly from your closing proceeds — in most cases, you don't need to come up with that money upfront.",
        "We've bought Allentown properties with multiple outstanding violations, properties that failed city inspection, properties with unpermitted work, and properties where violations had been accumulating for years.",
        "If you have a code violation property in Allentown or anywhere in Lehigh County, call USA Home Buyers at 888-440-5250. Written cash offer within 24 hours.",
    ],

    # KING OF PRUSSIA
    "app/markets/king-of-prussia-pa/page.tsx": [
        "If you're looking to sell your house fast in King of Prussia, PA, here's how we work. I'm with USA Home Buyers. We buy homes in King of Prussia and throughout Montgomery County for cash, as-is, in any condition.",
        "Here's the 2026 market reality in King of Prussia. Zillow puts the median home value at $453,560. Redfin's median sale price is $549,350. King of Prussia has a Redfin Compete Score of 82 out of 100. But the median home takes 34 days to go pending, then another 45 to 60 days to close. You're looking at three to four months from listing to cash in hand.",
        "We close in 7 to 14 days. Written offer within 24 hours of your call. No repairs, no cleaning, no agent commissions. We cover all closing costs.",
        "We serve all of Upper Merion Township and Montgomery County: Norristown, Conshohocken, Plymouth Meeting, Wayne, Collegeville, Valley Forge, Bryn Mawr, Bridgeport, and surrounding communities. Whether you're relocating, dealing with an inherited property, or facing a time-sensitive situation — we're the call to make.",
        "Call USA Home Buyers at 888-440-5250. We'll ask a few questions, make a fair written offer within 24 hours, and close on your schedule.",
    ],
    "app/markets/king-of-prussia-pa/foreclosure/page.tsx": [
        "Facing foreclosure in Montgomery County is a stressful situation, but you have more options than you might think. I'm with USA Home Buyers, and I want to walk you through the most important one.",
        "Pennsylvania requires judicial foreclosure — the lender goes through the courts. In Montgomery County, that process typically runs 12 to 18 months from first missed payment to sheriff sale. But once a sheriff sale date is scheduled, the window for action narrows fast.",
        "Here's what most people don't realize: if you sell your home before the sheriff sale, the foreclosure stops. The mortgage gets paid off at closing. The case gets dismissed. Any remaining equity — after the mortgage and closing costs — goes to you. Not to the bank.",
        "We've helped Montgomery County homeowners close in seven days to beat sheriff sale deadlines. Cash purchase means no lender approval, no appraisal contingency, no financing that can fall through.",
        "Montgomery County properties carry significant value — with median home prices in the $453,000 to $549,000 range, there's often meaningful equity worth protecting. Don't let the sheriff sale take that.",
        "PHFA's HEMAP program offers mortgage assistance — you have 33 days from receiving the foreclosure notice to apply. Call USA Home Buyers right now at 888-440-5250. We'll give you a written offer within 24 hours.",
    ],
    "app/markets/king-of-prussia-pa/inherited-property/page.tsx": [
        "Inheriting a home in King of Prussia or Montgomery County comes with complexity — and often, some real emotional weight. I'm with USA Home Buyers, and we handle estate properties in this area regularly.",
        "What we see most often: the family home has been in the family for decades. It needs work — maybe a new roof, outdated bathrooms, deferred maintenance that piled up over the years. The heirs don't live nearby. Nobody wants to coordinate repairs or manage showings from out of state while also handling everything else that comes with losing someone.",
        "We buy inherited Montgomery County properties as-is. You don't need to clean it out. Don't repair anything. Don't even take furniture you don't want — we'll handle all of it. We make a written cash offer within 24 hours and close in as few as 7 days.",
        "With King of Prussia median home values at $453,000 to $549,000, there's often significant equity in estate properties. And what we save you in carrying costs, repairs, agent commissions, and months of waiting more than offsets the difference from a retail listing price.",
        "If the property is in probate, we work with executors and the Montgomery County Register of Wills process. The personal representative signs for the sale once Letters Testamentary are issued.",
        "Call USA Home Buyers at 888-440-5250. We'll give you a fair offer and make the real estate part of this as easy as it can be.",
    ],
    "app/markets/king-of-prussia-pa/probate/page.tsx": [
        "If you're the executor of an estate with real property in King of Prussia or Montgomery County, here's what you need to know. I'm with USA Home Buyers.",
        "Probate in Montgomery County goes through the Montgomery County Register of Wills, located in Norristown. Once you have Letters Testamentary or Letters of Administration, you have the legal authority to sell estate real property. You don't need to wait for the entire estate to settle.",
        "Montgomery County estates vary widely in complexity. A straightforward estate can move through the opening process in weeks. Multi-heir situations or contested estates take longer. But the sale of the property itself can often proceed independently.",
        "We buy probate properties in King of Prussia and throughout Montgomery County as-is. The executor signs the deed on behalf of the estate. Closing proceeds go into the estate account. A title company with estate experience handles all documentation.",
        "With King of Prussia homes valued in the $453,000 to $549,000 range, estate properties here often carry significant equity. Getting a fast, clean sale can accelerate the estate's distribution to heirs significantly.",
        "Call USA Home Buyers at 888-440-5250. Written cash offer in 24 hours. We work with executors and estate attorneys and understand the Montgomery County probate process.",
    ],
    "app/markets/king-of-prussia-pa/market-report/page.tsx": [
        "Let's look at the King of Prussia PA real estate market in 2026 — actual numbers, not hype. I'm with USA Home Buyers.",
        "The Zillow Home Value Index for King of Prussia is $453,560 as of February 2026, up 5.9 percent year-over-year. Redfin reports the median sale price at $549,350. King of Prussia has a Redfin Compete Score of 82 out of 100, classified as Very Competitive. The sale-to-list ratio is 97.6 percent.",
        "Here's the number that doesn't get enough attention: the median home takes 34 days to go pending. After that, inspections, appraisals, and mortgage processing add another 45 to 60 days. Total time from listing to close is roughly 80 to 95 days.",
        "We close in 7 to 14 days. No appraisal contingency. No financing that can fall through. No buyer getting cold feet after inspection.",
        "Year-over-year appreciation is up 5.9 percent on ZHVI and 3.7 percent per Redfin. Both signal continued strength, driven by suburban Philadelphia demand and limited new inventory in established neighborhoods near Valley Forge.",
        "If you're trying to decide between listing and a cash sale in King of Prussia, the math depends on your timeline and how much certainty matters. Call USA Home Buyers at 888-440-5250 for a written offer within 24 hours.",
    ],
    "app/markets/king-of-prussia-pa/divorce-sale/page.tsx": [
        "Selling a house during a divorce in King of Prussia is stressful under the best circumstances. I'm with USA Home Buyers, and I want to explain why a cash sale often makes the most sense in this situation.",
        "The traditional listing route requires agreement at every step — agent selection, list price, repairs and updates, which offers to accept. When two people in a divorce have to agree on all of that, it often drags on for months. Meanwhile, you're both carrying a shared asset and dealing with a house neither of you wants to be tied to anymore.",
        "A cash sale cuts through that. We make one written offer to both parties within 24 hours. If you accept, we close in 7 to 14 days. The proceeds come out at closing and get divided per your divorce agreement or court order.",
        "With King of Prussia median home values in the $453,000 to $549,000 range, there's often significant equity at stake. Our goal is to get both parties a fair, fast outcome.",
        "We're a neutral third party. We don't have a stake in either side of the divorce. Our job is just to close the deal efficiently.",
        "Montgomery County Court of Common Pleas handles divorce proceedings. Call USA Home Buyers at 888-440-5250. Fair offer, 24 hours, close in 7 to 14 days. Done.",
    ],
    "app/markets/king-of-prussia-pa/tenant-occupied/page.tsx": [
        "Selling a rental property in King of Prussia or Montgomery County with tenants in place is one of the situations where a cash buyer makes the most sense. I'm with USA Home Buyers, and we buy tenant-occupied properties regularly.",
        "Most buyers using conventional financing don't want to purchase a tenant-occupied property. They either want to move in themselves or they're not set up to be landlords. Financing lenders get cautious. Your buyer pool shrinks significantly before you even list.",
        "Pennsylvania landlord-tenant law gives your tenants rights around showings and access. If your tenant isn't cooperative — which often happens when they realize the property is being sold — coordinating showings through the MLS can be a nightmare.",
        "We don't need showings. We buy tenant-occupied properties in King of Prussia as-is, with tenants in place. We take the property with the existing lease and handle the tenant transition ourselves after closing.",
        "Montgomery County's rental market is strong, particularly near the King of Prussia business corridor, Valley Forge, and communities along Route 202.",
        "Call USA Home Buyers at 888-440-5250. Written cash offer in 24 hours. No eviction required.",
    ],
    "app/markets/king-of-prussia-pa/code-violations/page.tsx": [
        "If your King of Prussia or Montgomery County property has open code violations, you're in a situation where most traditional buyers can't help you. I'm with USA Home Buyers, and code violation properties are something we buy regularly.",
        "Montgomery County has active code enforcement. Violations — whether from unpermitted additions, structural deficiencies, health and safety citations, or deferred maintenance — make it nearly impossible to sell to a buyer using conventional financing.",
        "We don't use financing. We pay cash. There's no appraiser, no lender underwriting, no appraisal contingency. We buy the property in its current condition — violations, citations, and all.",
        "How do violations get resolved at closing? They're treated like any other lien or encumbrance. The title search identifies all outstanding fines and municipal liens. At closing, those get paid from your proceeds before the remainder goes to you.",
        "We've bought Montgomery County properties with multiple open violations, properties cited for structural issues, properties with unpermitted construction, and properties where code enforcement had been active for years.",
        "Call USA Home Buyers at 888-440-5250. We'll make a written cash offer within 24 hours and explain exactly how the violation resolution works at closing.",
    ],
    "app/markets/king-of-prussia-pa/fire-damage/page.tsx": [
        "If you have a fire-damaged property in King of Prussia or Montgomery County, you're dealing with a situation that most real estate professionals aren't equipped to handle. I'm with USA Home Buyers, and we buy fire-damaged properties for cash, as-is.",
        "Fire-damaged homes are effectively unmarketable through conventional channels. Conventional financing won't appraise a structurally compromised or gutted property. The longer a fire-damaged home sits — open to weather, at risk of further structural deterioration, creating liability — the worse the situation gets.",
        "We buy fire-damaged King of Prussia and Montgomery County properties for cash in their current condition. No remediation required. No structural repairs before closing. No smoke or water damage cleanup on your end. We assess the property in its current state and make a written cash offer within 24 hours.",
        "With King of Prussia median home values in the $453,000 to $549,000 range, there's often significant value in the land and structure even after fire damage.",
        "Once you accept, we can close in as few as 7 days. We handle all closing costs. No agent commissions. We take on full responsibility for the property at closing — including all the cleanup and remediation that comes after.",
        "Call us right now at 888-440-5250. We'll get you a fair cash offer fast so you can move forward.",
    ],

    # GUIDE
    "app/guides/sell-house-fast-king-of-prussia-pa-2026/page.tsx": [
        "If you're trying to sell your house fast in King of Prussia in 2026, you've got a few real options — and I want to give you an honest comparison so you can decide what's right for your situation. I'm with USA Home Buyers.",
        "Option one: traditional listing with an agent. In King of Prussia, the median home takes about 34 days to go pending, then another 45 to 60 days to close after that. You're looking at three to four months from listing to cash in hand. In a market with a Compete Score of 82 out of 100, well-priced homes in great condition do well. The trade-off is time, uncertainty, and the cost of repairs, staging, and agent commissions.",
        "Option two: iBuyers. Companies like Opendoor make instant offers on homes that fit their criteria — typically updated, well-maintained properties in certain price ranges. If your home qualifies, it can be convenient. But service fees often run 5 to 8 percent, and not all King of Prussia properties qualify.",
        "Option three: a local cash buyer like USA Home Buyers. We buy in any condition — no repairs, no staging, no showings. Written cash offer within 24 hours. Close in 7 to 14 days. We cover all closing costs. The trade-off is that we pay below full retail — typically 70 to 80 percent of market value. But with King of Prussia median values at $453,000 to $549,000, that's still a significant number.",
        "Which option is right for you depends on your timeline, your property's condition, and how much certainty matters. If you have time and a move-in-ready home, the MLS may serve you well. If you need speed, certainty, or if your property has complications, a cash sale is the move.",
        "Want to know what we'd offer for your specific King of Prussia property? Call 888-440-5250 or fill out the form. You'll have a written offer in 24 hours.",
    ],
}


def build_transcript_block(paragraphs):
    """Build the <details> transcript block with properly escaped apostrophes."""
    p_tags = '\n'.join(
        f'            <p className="mb-3">{esc(p)}</p>'
        for p in paragraphs
    )
    return f"""
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
{p_tags}
        </div>
      </details>"""


def add_transcript(filepath_rel, paragraphs):
    full_path = os.path.join(BASE, filepath_rel)
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'Video Transcript' in content:
        print(f"  SKIP (already has transcript): {filepath_rel}")
        return 0

    match = re.search(r'<VideoEmbed\b.*?/>', content, re.DOTALL)
    if not match:
        print(f"  ERROR: no VideoEmbed found in {filepath_rel}")
        return 0

    insert_pos = match.end()
    transcript_block = build_transcript_block(paragraphs)
    new_content = content[:insert_pos] + transcript_block + content[insert_pos:]

    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    word_count = sum(len(p.split()) for p in paragraphs)
    print(f"  OK ({word_count}w): {filepath_rel}")
    return word_count


def main():
    total_words = 0
    total_files = 0
    for filepath_rel, paragraphs in RAW_TRANSCRIPTS.items():
        w = add_transcript(filepath_rel, paragraphs)
        if w:
            total_words += w
            total_files += 1
    print(f"\nDone: {total_files} files, ~{total_words} words")


if __name__ == '__main__':
    main()
