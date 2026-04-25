#!/usr/bin/env python3
"""
Generate situation-page + landing videos for 3 IL markets:
  - Bloomington IL (McLean County)
  - Peoria IL (Peoria County)
  - Champaign-Urbana IL (Champaign County)

Voice: Adam - Confident (Ib97zM6uFBc71OWgj75I) | Model: eleven_turbo_v2_5
Video: VEED Fabric 1.0 via Fal at 720p
Avatar: /Users/agents/.openclaw/workspace/assets/video-avatar.png
"""

import json
import os
import subprocess
import sys
import time
import urllib.request

sys.path.insert(0, "/Users/agents/.openclaw/workspace/skills/talking-head/scripts")
os.environ["FAL_KEY"] = open(os.path.expanduser("~/.config/fal/api_key")).read().strip()
import fal_client

VOICE_ID = "Ib97zM6uFBc71OWgj75I"  # Adam - Confident
MODEL_ID = "eleven_turbo_v2_5"
VOICE_SETTINGS = {"stability": 0.5, "similarity_boost": 0.75, "style": 0.3}
AVATAR = "/Users/agents/.openclaw/workspace/assets/video-avatar.png"
VIDEO_ROOT = "/Users/agents/selltousahome/public/videos"
PHONE = "888-274-5006"

VIDEOS = {
    # ── BLOOMINGTON IL ───────────────────────────────────────────────────────
    "bloomington-il/landing": {
        "title": "Sell My House Fast Bloomington IL — USA Home Buyers",
        "subtitle": "Cash offers for Bloomington, Normal, and McLean County homes — any condition",
        "script": f"""If you need to sell your house fast in Bloomington, Illinois — you've found the right team.
We're USA Home Buyers, and we purchase houses as-is, for cash, throughout McLean County.
No agents, no fees, no repairs needed.
Whether you're in Bloomington, Normal, or anywhere in the county — we can help.
Written cash offer within 24 hours, close in as few as seven days.
Call us at {PHONE}.""",
        "transcript": f"Need to sell your house fast in Bloomington, Illinois? USA Home Buyers purchases homes as-is for cash throughout McLean County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call {PHONE}.",
    },
    "bloomington-il/code-violations": {
        "title": "Sell a House With Code Violations in Bloomington IL",
        "subtitle": "Open violations, failed inspections — we buy as-is in McLean County",
        "script": f"""Got code violations on your Bloomington or Normal property? Don't let the city violation notices hold you back.
At USA Home Buyers, we purchase properties with open violations exactly as they are — no repairs, no permits pulled by you.
Whether it's structural issues, electrical problems, or a condemnation notice from the City of Bloomington — we've handled it all.
We make a fair cash offer and close on your schedule.
Call us at {PHONE} for a free, no-obligation offer today.""",
        "transcript": f"Code violations on your Bloomington IL property? USA Home Buyers purchases properties with open violations as-is. No repairs, no permits on your end. Cash offer in 24 hours. Call {PHONE}.",
    },
    "bloomington-il/divorce-sale": {
        "title": "Selling a House During Divorce in Bloomington IL",
        "subtitle": "One offer, one closing, clean split of proceeds in McLean County",
        "script": f"""Going through a divorce in Bloomington or McLean County and need to sell the house fast?
We make it simple. One cash offer, both parties sign, we close in 7 to 14 days.
No agents, no open houses, no months of complicated back-and-forth.
The proceeds are split at closing exactly per your agreement.
Call USA Home Buyers at {PHONE} to move forward today.""",
        "transcript": f"Divorce in Bloomington IL and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call {PHONE}.",
    },
    "bloomington-il/faq": {
        "title": "Bloomington IL Home Selling FAQ",
        "subtitle": "Foreclosure timelines, probate, code violations, closing speed — answered",
        "script": f"""Have questions about selling your house fast in Bloomington, Illinois? Here are the answers.
Illinois is a 100 percent judicial foreclosure state under 735 ILCS 5 slash 15 — McLean County foreclosures run 12 to 16 months.
Inherited property requires McLean County probate — no shortcuts for real estate.
Can I sell with code violations? Yes, we buy as-is.
Tenant-occupied? We buy those too.
How fast can you close? Seven days in many cases.
Call {PHONE} for your answer and your offer in 24 hours.""",
        "transcript": f"Questions about selling in Bloomington IL? Illinois judicial foreclosure runs 12-16 months in McLean County. Inherited property needs probate. We buy with code violations, tenant-occupied, any condition. Close in 7 days. Call {PHONE}.",
    },
    "bloomington-il/fire-damage": {
        "title": "Sell a Fire-Damaged House in Bloomington IL",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in McLean County",
        "script": f"""Did your Bloomington or Normal property suffer fire damage? You don't have to restore it.
At USA Home Buyers, we purchase fire-damaged homes throughout McLean County exactly as they are.
No insurance runaround, no contractor estimates, no city inspection delays.
We assess the property in its current condition and make a fair cash offer.
Ready for a fast exit? Call {PHONE} today.""",
        "transcript": f"Fire damage on your Bloomington IL property? USA Home Buyers purchases fire-damaged homes in McLean County as-is. No contractor estimates, no delays. Cash offer on current condition. Call {PHONE}.",
    },
    "bloomington-il/foreclosure": {
        "title": "Facing Foreclosure in Bloomington IL?",
        "subtitle": "Sell before the McLean County auction — protect your equity and credit",
        "script": f"""Facing foreclosure in Bloomington or McLean County? Time is critical.
Illinois is a 100 percent judicial foreclosure state under 735 ILCS 5 slash 15 — but once a judgment is entered, the redemption clock starts.
USA Home Buyers can close in as few as 7 days.
A fast cash sale stops the foreclosure process, satisfies the mortgage, and protects your credit.
Don't wait until the McLean County auction. Call {PHONE} right now for a free, confidential consultation.""",
        "transcript": f"Facing foreclosure in Bloomington IL? Illinois judicial foreclosure — once judgment enters, the clock runs. USA Home Buyers closes in 7 days, stops the process, protects your credit. Call {PHONE} right now.",
    },
    "bloomington-il/inherited-property": {
        "title": "Sell Inherited House in Bloomington IL",
        "subtitle": "We work with McLean County probate timelines — as-is, any condition",
        "script": f"""Did you inherit a property in Bloomington, Normal, or anywhere in McLean County?
At USA Home Buyers, we specialize in estate sales and work directly with Illinois probate timelines.
We buy as-is — no repairs, no cleanout required.
Written cash offer in 24 hours. We close after the court grants authority.
Call {PHONE} today.""",
        "transcript": f"Inherit a property in Bloomington or McLean County? USA Home Buyers specializes in estate sales and works with Illinois probate timelines. Buy as-is, any condition. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "bloomington-il/market-report": {
        "title": "Bloomington IL Real Estate Market Report 2026",
        "subtitle": "State Farm headquarters, Illinois State University, steady appreciation in McLean County",
        "script": f"""Here's a quick look at the Bloomington-Normal, Illinois real estate market in 2026.
The Bloomington-Normal metro is anchored by State Farm Insurance headquarters and Illinois State University — two massive, recession-resistant employers.
That economic stability drives consistent housing demand across McLean County.
Home values have appreciated steadily as Chicago-area buyers discover Bloomington's affordability.
If you're thinking about selling in Bloomington, Normal, or McLean County, call USA Home Buyers at {PHONE} for a cash offer in 24 hours.""",
        "transcript": f"Bloomington IL market 2026: State Farm headquarters and Illinois State University anchor steady demand. Strong appreciation, affordable vs. Chicago. USA Home Buyers gives you a cash offer in 24 hours. Call {PHONE}.",
    },
    "bloomington-il/neighborhoods": {
        "title": "Bloomington IL Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Eastside to Towanda to Normal — any neighborhood, any condition",
        "script": f"""Whether you're in Eastside Bloomington, the Grove, Towanda, on Veterans Parkway, in Normal, or anywhere in McLean County — USA Home Buyers will buy your house for cash.
We purchase in every neighborhood: older bungalows near downtown Bloomington, ranch homes in Normal, two-stories in Eagle Crest.
Any condition, any situation. No repairs, no cleanout.
Ready for a cash offer? Call {PHONE}.""",
        "transcript": f"Eastside Bloomington, Grove, Towanda, Normal — USA Home Buyers buys in every McLean County neighborhood. Bungalows, ranches, two-stories — any condition, any situation. Cash offer in 24 hours. Call {PHONE}.",
    },
    "bloomington-il/probate": {
        "title": "Selling Probate Property in Bloomington IL",
        "subtitle": "Working with personal representatives and McLean County Circuit Court",
        "script": f"""Is a property in Bloomington tied up in Illinois probate?
We work directly with personal representatives and estate attorneys throughout McLean County.
Whether your estate is in independent administration or supervised probate in McLean County Circuit Court, we move fast once the court grants authority.
We buy as-is — no repairs, no cleanout.
Written cash offer in 24 hours.
Call USA Home Buyers at {PHONE}.""",
        "transcript": f"Bloomington property in Illinois probate? USA Home Buyers works with personal representatives and attorneys in McLean County Circuit Court. We buy as-is once the court grants authority. Cash offer in 24 hours. Call {PHONE}.",
    },
    "bloomington-il/tenant-occupied": {
        "title": "Sell a Rental Property in Bloomington IL",
        "subtitle": "Done with landlording? We buy tenant-occupied homes as-is in McLean County",
        "script": f"""Done being a landlord in Bloomington or Normal? Tired of managing rental properties near Illinois State University?
USA Home Buyers purchases tenant-occupied homes exactly as they are — student rentals, long-term leases, Section 8, it doesn't matter.
You don't need to evict anyone or wait for a lease to expire.
We handle everything after closing.
Ready to exit your McLean County rental? Call {PHONE} for a fast, fair cash offer.""",
        "transcript": f"Done being a landlord in Bloomington or Normal? USA Home Buyers buys tenant-occupied properties — student rentals, long-term leases, Section 8. No eviction needed. We handle everything after closing. Call {PHONE}.",
    },

    # ── PEORIA IL ─────────────────────────────────────────────────────────────
    "peoria-il/landing": {
        "title": "Sell My House Fast Peoria IL — USA Home Buyers",
        "subtitle": "Cash offers for Peoria and Peoria County homes — any condition",
        "script": f"""If you need to sell your house fast in Peoria, Illinois — you've found the right team.
We're USA Home Buyers, and we purchase houses as-is, for cash, throughout Peoria County.
No agents, no fees, no repairs needed.
Whether you're in Peoria, Peoria Heights, or anywhere in the county — we can help.
Written cash offer within 24 hours, close in as few as seven days.
Call us at {PHONE}.""",
        "transcript": f"Need to sell your house fast in Peoria, Illinois? USA Home Buyers purchases homes as-is for cash throughout Peoria County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call {PHONE}.",
    },
    "peoria-il/code-violations": {
        "title": "Sell a House With Code Violations in Peoria IL",
        "subtitle": "Open violations, condemned properties — we buy as-is in Peoria County",
        "script": f"""Got code violations on your Peoria property? City of Peoria code enforcement orders can feel impossible to clear.
At USA Home Buyers, we purchase properties with open violations, failed inspections, and condemned notices exactly as they are.
No repairs, no permits pulled by you, no delays.
We assess the property as-is, make a fair cash offer, and close on your schedule.
Call {PHONE} today for a free, no-obligation offer.""",
        "transcript": f"Code violations on your Peoria IL property? USA Home Buyers purchases properties with open violations and condemnations as-is. No repairs, no permits. Fair cash offer, fast close. Call {PHONE}.",
    },
    "peoria-il/divorce-sale": {
        "title": "Selling a House During Divorce in Peoria IL",
        "subtitle": "One offer, one closing, clean split of proceeds in Peoria County",
        "script": f"""Going through a divorce in Peoria or Peoria County and need to sell the house?
We make it clean and fast. One cash offer, both parties sign, we close in 7 to 14 days.
No agents, no open houses, no months of negotiations.
The proceeds are split at closing exactly per your agreement.
Call USA Home Buyers at {PHONE} today.""",
        "transcript": f"Divorce in Peoria and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call {PHONE}.",
    },
    "peoria-il/faq": {
        "title": "Peoria IL Home Selling FAQ",
        "subtitle": "Foreclosure timelines, probate, code violations, city transfer tax — answered",
        "script": f"""Have questions about selling your house fast in Peoria, Illinois?
Illinois is a 100 percent judicial foreclosure state — Peoria County foreclosures run 12 to 16 months.
The City of Peoria charges a real estate transfer tax at closing — we handle that for you.
Inherited property requires Peoria County probate.
Can I sell with code violations? Yes, we buy as-is.
How fast can you close? Seven days in many cases.
Call {PHONE} — your question answered, your offer in 24 hours.""",
        "transcript": f"Questions about selling in Peoria IL? Illinois judicial foreclosure runs 12-16 months. City transfer tax — we handle it. Inherited property needs probate. We buy with code violations, any condition. Close in 7 days. Call {PHONE}.",
    },
    "peoria-il/fire-damage": {
        "title": "Sell a Fire-Damaged House in Peoria IL",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in Peoria County",
        "script": f"""Did your Peoria property suffer fire damage? You don't have to restore it.
USA Home Buyers purchases fire-damaged homes throughout Peoria and Peoria County exactly as they stand.
No insurance runaround, no contractor bids, no city inspection delays.
We assess the property in its current condition and make a fair cash offer.
Ready for a fast, clean exit? Call {PHONE} today.""",
        "transcript": f"Fire damage on your Peoria IL property? USA Home Buyers purchases fire-damaged homes in Peoria County as-is. No contractor bids, no delays. Fair cash offer on current condition. Call {PHONE}.",
    },
    "peoria-il/foreclosure": {
        "title": "Facing Foreclosure in Peoria IL?",
        "subtitle": "Sell before the Peoria County auction — protect your equity and credit",
        "script": f"""Facing foreclosure in Peoria or Peoria County? Time is critical.
Illinois is a 100 percent judicial foreclosure state — but once a judgment is entered, the redemption clock starts.
USA Home Buyers can close in as few as 7 days.
A fast cash sale stops the foreclosure process, satisfies the mortgage, and protects your credit.
Don't wait until the Peoria County auction. Call {PHONE} right now for a free, confidential consultation.""",
        "transcript": f"Facing foreclosure in Peoria IL? Illinois judicial foreclosure — the clock starts at judgment. USA Home Buyers closes in 7 days, stops the process, protects your credit. Call {PHONE} right now.",
    },
    "peoria-il/inherited-property": {
        "title": "Sell Inherited House in Peoria IL",
        "subtitle": "We work with Peoria County probate timelines — as-is, any condition",
        "script": f"""Did you inherit a property in Peoria or Peoria County, Illinois?
At USA Home Buyers, we specialize in estate sales and work directly with Illinois probate timelines through Peoria County Circuit Court.
We buy as-is — 1920s bungalows in Richwoods, two-stories near the river — no repairs, no cleanout required.
Written cash offer in 24 hours. We close after the court grants authority.
Call {PHONE} today.""",
        "transcript": f"Inherit a property in Peoria or Peoria County? USA Home Buyers specializes in estate sales — we work with Illinois probate timelines. Buy as-is, any condition. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "peoria-il/market-report": {
        "title": "Peoria IL Real Estate Market Report 2026",
        "subtitle": "Caterpillar headquarters, healthcare anchor, steady appreciation in Peoria County",
        "script": f"""Here's a quick look at the Peoria, Illinois real estate market in 2026.
Peoria's economy is anchored by Caterpillar Inc. headquarters and a major OSF HealthCare campus — two pillars that drive consistent housing demand.
The Illinois River provides scenic riverfront real estate that has attracted buyers from across central Illinois.
Home values have appreciated as the Peoria metro continues its revitalization.
If you're thinking about selling in Peoria or Peoria County, call USA Home Buyers at {PHONE} for a cash offer in 24 hours.""",
        "transcript": f"Peoria IL market 2026: Caterpillar headquarters and OSF HealthCare anchor steady demand. Illinois River waterfront appeal. Steady appreciation. USA Home Buyers gives you a cash offer in 24 hours. Call {PHONE}.",
    },
    "peoria-il/neighborhoods": {
        "title": "Peoria IL Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Richwoods to Riverdale to Peoria Heights — any neighborhood, any condition",
        "script": f"""Whether you're in Richwoods, Northwoods, the Riverdale area, Peoria Heights, Dunlap, or anywhere in Peoria County — USA Home Buyers will buy your house for cash.
We purchase in every neighborhood: 1920s bungalows in Richwoods, Victorian homes near the Illinois River, mid-century ranches in Northwoods.
Any condition, any situation. No repairs, no cleanout.
Ready for a cash offer? Call {PHONE}.""",
        "transcript": f"Richwoods, Northwoods, Riverdale, Peoria Heights — USA Home Buyers buys in every Peoria IL neighborhood. Bungalows, Victorians, ranches — any condition, any situation. Cash offer in 24 hours. Call {PHONE}.",
    },
    "peoria-il/probate": {
        "title": "Selling Probate Property in Peoria IL",
        "subtitle": "Working with personal representatives and Peoria County Circuit Court",
        "script": f"""Is a property in Peoria tied up in Illinois probate?
We work directly with personal representatives and estate attorneys throughout Peoria County Circuit Court.
Whether your estate is in independent administration or supervised probate, we move fast once the court grants authority.
We buy as-is — no repairs, no cleanout.
Written cash offer in 24 hours.
Call USA Home Buyers at {PHONE}.""",
        "transcript": f"Peoria property in Illinois probate? USA Home Buyers works with personal representatives through Peoria County Circuit Court. We buy as-is once the court grants authority. Cash offer in 24 hours. Call {PHONE}.",
    },
    "peoria-il/tenant-occupied": {
        "title": "Sell a Rental Property in Peoria IL",
        "subtitle": "Done with landlording? We buy tenant-occupied homes as-is in Peoria County",
        "script": f"""Done being a landlord in Peoria? Tired of managing rental properties in Peoria County?
USA Home Buyers purchases tenant-occupied homes exactly as they are — long-term leases, month-to-month, any situation.
You don't need to evict anyone or wait for a lease to expire.
We handle everything after closing.
Ready to exit your Peoria rental portfolio? Call {PHONE} for a fast, fair cash offer.""",
        "transcript": f"Done being a landlord in Peoria? USA Home Buyers buys tenant-occupied properties — no eviction needed, no waiting for leases. We handle everything after closing. Call {PHONE} for a fast cash offer.",
    },

    # ── CHAMPAIGN-URBANA IL ───────────────────────────────────────────────────
    "champaign-urbana-il/landing": {
        "title": "Sell My House Fast Champaign-Urbana IL — USA Home Buyers",
        "subtitle": "Cash offers for Champaign, Urbana, and Champaign County homes — any condition",
        "script": f"""If you need to sell your house fast in Champaign or Urbana, Illinois — you've found the right team.
We're USA Home Buyers, and we purchase houses as-is, for cash, throughout Champaign County.
No agents, no fees, no repairs needed.
Whether you're in Champaign, Urbana, Savoy, or anywhere in the county — we can help.
Written cash offer within 24 hours, close in as few as seven days.
Call us at {PHONE}.""",
        "transcript": f"Need to sell your house fast in Champaign-Urbana, Illinois? USA Home Buyers purchases homes as-is for cash throughout Champaign County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call {PHONE}.",
    },
    "champaign-urbana-il/code-violations": {
        "title": "Sell a House With Code Violations in Champaign-Urbana IL",
        "subtitle": "Open violations, failed inspections — we buy as-is in Champaign County",
        "script": f"""Got code violations on your Champaign or Urbana property? City code enforcement orders can feel impossible to clear.
At USA Home Buyers, we purchase properties with open violations, failed inspections, and condemnation notices exactly as they are.
No repairs, no permits pulled by you, no delays.
We make a fair cash offer and close on your schedule.
Call us at {PHONE} for a free, no-obligation offer today.""",
        "transcript": f"Code violations on your Champaign-Urbana property? USA Home Buyers purchases properties with open violations as-is. No repairs, no permits. Cash offer in 24 hours. Call {PHONE}.",
    },
    "champaign-urbana-il/divorce-sale": {
        "title": "Selling a House During Divorce in Champaign-Urbana IL",
        "subtitle": "One offer, one closing, clean split of proceeds in Champaign County",
        "script": f"""Going through a divorce in Champaign or Urbana and need to sell the house fast?
We make it simple. One cash offer, both parties sign, we close in 7 to 14 days.
No agents, no open houses, no months of back-and-forth.
The proceeds are split at closing exactly per your agreement.
Call USA Home Buyers at {PHONE} to get started today.""",
        "transcript": f"Divorce in Champaign-Urbana and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call {PHONE}.",
    },
    "champaign-urbana-il/faq": {
        "title": "Champaign-Urbana IL Home Selling FAQ",
        "subtitle": "Foreclosure timelines, probate, University of Illinois market — answered",
        "script": f"""Have questions about selling your house fast in Champaign or Urbana, Illinois?
Illinois is a 100 percent judicial foreclosure state — Champaign County foreclosures run 12 to 16 months.
The University of Illinois creates a unique rental market — we buy student rental properties with tenants in place.
Inherited property requires Champaign County probate through the 6th Judicial Circuit.
Can I sell with code violations? Yes, we buy as-is.
How fast can you close? Seven days in many cases.
Call {PHONE} for your answer and your offer in 24 hours.""",
        "transcript": f"Questions about selling in Champaign-Urbana? Illinois judicial foreclosure runs 12-16 months. We buy student rentals with tenants in place. Inherited property needs Champaign County probate. We buy as-is. Close in 7 days. Call {PHONE}.",
    },
    "champaign-urbana-il/fire-damage": {
        "title": "Sell a Fire-Damaged House in Champaign-Urbana IL",
        "subtitle": "No restoration required — we buy fire-damaged homes as-is in Champaign County",
        "script": f"""Did your Champaign or Urbana property suffer fire damage? You don't have to restore it.
USA Home Buyers purchases fire-damaged homes throughout Champaign County exactly as they stand.
No insurance runaround, no contractor estimates, no city inspection delays.
We assess the property in its current condition and make a fair cash offer.
Ready for a fast exit? Call {PHONE} today.""",
        "transcript": f"Fire damage on your Champaign-Urbana property? USA Home Buyers purchases fire-damaged homes in Champaign County as-is. No contractor estimates, no delays. Cash offer on current condition. Call {PHONE}.",
    },
    "champaign-urbana-il/foreclosure": {
        "title": "Facing Foreclosure in Champaign-Urbana IL?",
        "subtitle": "Sell before the Champaign County auction — protect your equity and credit",
        "script": f"""Facing foreclosure in Champaign, Urbana, or Champaign County? Time is critical.
Illinois is a 100 percent judicial foreclosure state — but once a judgment is entered, the redemption clock starts.
USA Home Buyers can close in as few as 7 days.
A fast cash sale stops the foreclosure process, satisfies the mortgage, and protects your credit.
Don't wait until the Champaign County auction. Call {PHONE} right now.""",
        "transcript": f"Facing foreclosure in Champaign-Urbana? Illinois judicial foreclosure — the clock starts at judgment. USA Home Buyers closes in 7 days, stops the process, protects your credit. Call {PHONE} right now.",
    },
    "champaign-urbana-il/inherited-property": {
        "title": "Sell Inherited House in Champaign-Urbana IL",
        "subtitle": "We work with Champaign County probate timelines — as-is, any condition",
        "script": f"""Did you inherit a property in Champaign, Urbana, or Champaign County, Illinois?
At USA Home Buyers, we specialize in estate sales and work directly with Illinois probate timelines through Champaign County's 6th Judicial Circuit.
We buy as-is — brick ranches, older two-stories near campus, mid-century homes in Savoy — no repairs, no cleanout required.
Written cash offer in 24 hours. We close after the court grants authority.
Call {PHONE} today.""",
        "transcript": f"Inherit a property in Champaign-Urbana? USA Home Buyers specializes in estate sales — we work with Illinois probate through Champaign County's 6th Judicial Circuit. Buy as-is, any condition. Written cash offer in 24 hours. Call {PHONE}.",
    },
    "champaign-urbana-il/market-report": {
        "title": "Champaign-Urbana IL Real Estate Market Report 2026",
        "subtitle": "University of Illinois anchor, tech sector growth, steady appreciation in Champaign County",
        "script": f"""Here's a quick look at the Champaign-Urbana, Illinois real estate market in 2026.
The Champaign-Urbana metro is anchored by the University of Illinois at Urbana-Champaign — one of the top public universities in the country.
That anchor drives consistent housing demand, a robust rental market, and a growing tech ecosystem in the Research Park.
Home values have appreciated steadily while remaining more affordable than Chicago or Chicagoland suburbs.
If you're thinking about selling in Champaign, Urbana, or Champaign County, call USA Home Buyers at {PHONE} for a cash offer in 24 hours.""",
        "transcript": f"Champaign-Urbana IL market 2026: University of Illinois drives consistent demand and a strong rental market. Tech sector growth in Research Park. Steady appreciation while remaining affordable. USA Home Buyers gives you a cash offer in 24 hours. Call {PHONE}.",
    },
    "champaign-urbana-il/neighborhoods": {
        "title": "Champaign-Urbana IL Neighborhoods — We Buy Houses Everywhere",
        "subtitle": "Campustown to Savoy to Philo Road — any neighborhood, any condition",
        "script": f"""Whether you're near the University of Illinois campus, in Campustown, on the east side of Champaign, in Urbana near Crystal Lake Park, in Savoy, or anywhere in Champaign County — USA Home Buyers will buy your house for cash.
We purchase in every neighborhood: student rentals near campus, brick ranches in southeast Champaign, older Victorians in Urbana.
Any condition, any situation. No repairs, no cleanout.
Ready for a cash offer? Call {PHONE}.""",
        "transcript": f"Campustown, east Champaign, Urbana, Savoy — USA Home Buyers buys in every Champaign County neighborhood. Student rentals, brick ranches, Victorians — any condition, any situation. Cash offer in 24 hours. Call {PHONE}.",
    },
    "champaign-urbana-il/probate": {
        "title": "Selling Probate Property in Champaign-Urbana IL",
        "subtitle": "Working with personal representatives and Champaign County Circuit Court",
        "script": f"""Is a property in Champaign or Urbana tied up in Illinois probate?
We work directly with personal representatives and estate attorneys throughout Champaign County's 6th Judicial Circuit Court.
Whether your estate is in independent administration or supervised probate, we move fast once the court grants authority.
We buy as-is — no repairs, no cleanout.
Written cash offer in 24 hours.
Call USA Home Buyers at {PHONE}.""",
        "transcript": f"Champaign-Urbana property in Illinois probate? USA Home Buyers works with personal representatives through Champaign County's 6th Judicial Circuit. We buy as-is once the court grants authority. Cash offer in 24 hours. Call {PHONE}.",
    },
    "champaign-urbana-il/tenant-occupied": {
        "title": "Sell a Rental Property in Champaign-Urbana IL",
        "subtitle": "Done with landlording? We buy tenant-occupied homes as-is in Champaign County",
        "script": f"""Done being a landlord near the University of Illinois? Whether it's a student rental in Campustown, a duplex in Urbana, or a single-family in Savoy — USA Home Buyers will buy your tenant-occupied property as-is.
No eviction required, no waiting for leases to turn over, no student-tenant complications.
We handle everything after closing.
Ready to exit your Champaign County rental? Call {PHONE} for a fast, fair cash offer.""",
        "transcript": f"Done being a landlord near U of I? USA Home Buyers buys student rentals, duplexes, and single-families in Champaign-Urbana with tenants in place — no eviction, no waiting. We handle everything after closing. Call {PHONE}.",
    },
}


def get_elevenlabs_key():
    return open(os.path.expanduser("~/.config/elevenlabs/api_key")).read().strip()


def generate_audio(script, audio_path):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    data = json.dumps({
        "text": script,
        "model_id": MODEL_ID,
        "voice_settings": VOICE_SETTINGS
    }).encode()
    req = urllib.request.Request(url, data=data, headers={
        "xi-api-key": get_elevenlabs_key(),
        "Content-Type": "application/json",
        "Accept": "audio/mpeg"
    })
    with urllib.request.urlopen(req) as resp:
        with open(audio_path, 'wb') as f:
            f.write(resp.read())
    kb = os.path.getsize(audio_path) / 1024
    print(f"    ✓ Audio: {kb:.0f} KB", flush=True)


def generate_video(audio_path, video_path):
    image_url = fal_client.upload_file(AVATAR)
    audio_url = fal_client.upload_file(audio_path)
    print(f"    Uploaded to Fal, submitting...", flush=True)
    result = fal_client.subscribe("veed/fabric-1.0", arguments={
        "image_url": image_url,
        "audio_url": audio_url,
        "resolution": "720p"
    }, with_logs=True)
    video_url = result["video"]["url"]
    urllib.request.urlretrieve(video_url, video_path)
    kb = os.path.getsize(video_path) / 1024
    print(f"    ✓ Video: {kb:.0f} MB ({kb/1024:.1f} MB)", flush=True)


def extract_poster(mp4, poster):
    """Extract frame at 2s, compress if >100KB."""
    subprocess.run(
        ["ffmpeg", "-y", "-i", mp4, "-ss", "00:00:02", "-frames:v", "1", "-q:v", "5", poster],
        capture_output=True
    )
    if not os.path.exists(poster):
        return
    kb = os.path.getsize(poster) / 1024
    if kb > 100:
        subprocess.run(
            ["ffmpeg", "-y", "-i", poster, "-q:v", "8", poster + ".tmp.jpg"],
            capture_output=True
        )
        if os.path.exists(poster + ".tmp.jpg"):
            os.replace(poster + ".tmp.jpg", poster)
            kb = os.path.getsize(poster) / 1024
    print(f"    ✓ Poster: {kb:.0f} KB", flush=True)


import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--only", default=None, help="Filter to a single market prefix")
parser.add_argument("--dry-run", action="store_true", help="Print what would run, skip generation")
args = parser.parse_args()

completed = []
skipped = []
failed = []

for key, info in VIDEOS.items():
    if args.only and not key.startswith(args.only):
        continue

    parts = key.split("/")
    market = parts[0]
    slug = parts[1]
    out_dir = os.path.join(VIDEO_ROOT, market)
    os.makedirs(out_dir, exist_ok=True)

    audio_path = os.path.join(out_dir, f"{slug}-audio.mp3")
    mp4_path   = os.path.join(out_dir, f"{slug}.mp4")
    poster_path = os.path.join(out_dir, f"{slug}-poster.jpg")

    # Skip if mp4 already exists and is non-trivial
    if os.path.exists(mp4_path) and os.path.getsize(mp4_path) > 500_000:
        size_mb = os.path.getsize(mp4_path) / (1024*1024)
        print(f"SKIP {key} ({size_mb:.1f} MB exists)", flush=True)
        skipped.append(key)
        continue

    if args.dry_run:
        print(f"DRY-RUN would generate: {key}", flush=True)
        continue

    print(f"\n[{time.strftime('%H:%M:%S')}] GENERATING: {key}", flush=True)
    start = time.time()

    try:
        # Step 1: Audio
        if not os.path.exists(audio_path) or os.path.getsize(audio_path) < 5000:
            print(f"    Generating TTS audio...", flush=True)
            generate_audio(info["script"], audio_path)
            time.sleep(0.5)
        else:
            print(f"    Audio exists ({os.path.getsize(audio_path)//1024}KB), skipping TTS", flush=True)

        # Step 2: Video
        print(f"    Generating Fabric 1.0 video...", flush=True)
        generate_video(audio_path, mp4_path)

        # Step 3: Poster
        print(f"    Extracting poster...", flush=True)
        extract_poster(mp4_path, poster_path)

        elapsed = time.time() - start
        print(f"    ✓ {key} done in {elapsed:.0f}s", flush=True)
        completed.append(key)

    except Exception as e:
        elapsed = time.time() - start
        print(f"    ✗ {key} FAILED after {elapsed:.0f}s: {e}", flush=True)
        failed.append((key, str(e)))
        time.sleep(5)

print(f"\n{'='*60}", flush=True)
print(f"SUMMARY: {len(completed)} done | {len(skipped)} skipped | {len(failed)} failed", flush=True)
if completed:
    print(f"\nCompleted:", flush=True)
    for k in completed:
        print(f"  ✓ {k}", flush=True)
if failed:
    print(f"\nFailed:", flush=True)
    for k, err in failed:
        print(f"  ✗ {k}: {err}", flush=True)
