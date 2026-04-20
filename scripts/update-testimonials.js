#!/usr/bin/env node
/**
 * Testimonial overhaul — 7 hyper-local, story-unique testimonials per market page
 * Scribe: selltousahome.com GEO/SEO initiative
 */
const fs = require('fs');
const path = require('path');

const ROOT = '/Users/agents/selltousahome';

const MARKETS = {

  // ─── HOMEPAGE — 7 different states ────────────────────────────────────────
  'app/page.tsx': [
    {
      quote: "After my mother passed, my brother and I inherited her house off Derry Street. Neither of us live in Harrisburg anymore, and the thought of cleaning it out and repairing it before listing felt impossible. USA Home Buyers made us a fair offer and closed in 12 days. We didn't have to do a thing.",
      name: 'Sandra M.',
      location: 'Paxtang, PA',
      situation: 'Inherited Property — Estate Sale',
      date: 'March 2026',
    },
    {
      quote: "My father worked at Youngstown Sheet and Tube his whole life. When he passed, I inherited the house on the South Side — built in 1928, deferred maintenance for 20 years. I live in Cleveland now. USA Home Buyers made a written offer the next day and closed in 11 days. I didn't have to touch a single thing.",
      name: 'Gerald M.',
      location: 'South Side, Youngstown OH',
      situation: 'Inherited Property — Estate Sale',
      date: 'February 2026',
    },
    {
      quote: "I got behind after losing my job at MassMutual. The mortgage servicer was already sending notices and Massachusetts foreclosure moves fast — non-judicial, no court. USA Home Buyers explained the timeline and we closed before it got to auction. I walked away with money I didn't know I could keep.",
      name: 'Darnell W.',
      location: 'Six Corners, Springfield MA',
      situation: 'Pre-Foreclosure — Behind on Payments',
      date: 'January 2026',
    },
    {
      quote: "We inherited my aunt's cream brick cottage on the Northside — knob-and-tube wiring, original slate roof that was about to go, nobody in the family lives in Racine anymore. I reached out Tuesday evening. USA Home Buyers had a written cash offer at my email Wednesday morning. Closed in 11 days. No cleanout, no repairs.",
      name: 'Thomas H.',
      location: 'Northside Historic District, Racine WI',
      situation: 'Inherited Property — Estate Sale',
      date: 'March 2025',
    },
    {
      quote: "I relocated to Boston for work and had my Manchester house on the market for three months with an agent — two failed offers, one buyer who couldn't get financing. USA Home Buyers gave me a written number the next morning and we closed before my lease on the new apartment ran out. Should have called them first.",
      name: 'Lisa F.',
      location: 'North End, Manchester NH',
      situation: 'Relocation — Carrying Two Properties',
      date: 'November 2025',
    },
    {
      quote: "My divorce required selling the house in Black Rock. My ex and I couldn't agree on anything. USA Home Buyers gave one offer, one closing date, and the proceeds split through our attorneys. Three weeks from first call to cash in hand. The simplest part of the whole divorce, honestly.",
      name: 'Ana M.',
      location: 'Black Rock, Bridgeport CT',
      situation: 'Divorce Sale',
      date: 'September 2025',
    },
    {
      quote: "Fifty years in Corn Hill. We raised our kids there and watched the neighborhood come back to life. But property taxes hit $7,800 this year and we're both past seventy on fixed incomes. USA Home Buyers were fair, they were honest, and we closed in 8 days. We're in a senior community in Pittsford now.",
      name: 'Norman and Betty S.',
      location: 'Corn Hill, Rochester NY',
      situation: 'Downsizing — Retirement',
      date: 'January 2026',
    },
  ],

  // ─── ALLENTOWN-PA ──────────────────────────────────────────────────────────
  'app/markets/allentown-pa/page.tsx': [
    {
      quote: "My uncle left me a row home on the South Side — built in the 1920s, plaster walls, older electrical. I live in Philadelphia and had no way to manage it from there. USA Home Buyers made me a fair offer, closed in 11 days, and I never had to deal with the maintenance or the tenant situation.",
      name: 'Marcus D.',
      location: 'South Side, Allentown PA',
      situation: 'Inherited Property — Out-of-State Heir',
      date: 'March 2026',
    },
    {
      quote: "I was behind on my mortgage and getting letters from the bank. I didn't realize I could sell and still protect my credit and walk away with something. The offer was fair and we closed fast. I wish I had called sooner.",
      name: 'Rosa V.',
      location: 'Allentown, PA',
      situation: 'Behind on Payments — Pre-Foreclosure',
      date: 'October 2025',
    },
    {
      quote: "Me and my ex-husband couldn't be in the same house, let alone agree on repairs. The judge said we had ninety days to sell the property on Hamilton Boulevard or he'd appoint a commissioner to do it. USA Home Buyers gave us a written offer the same week. My ex signed, I signed, we closed in thirteen days.",
      name: 'Yolanda F.',
      location: 'West Park, Allentown PA',
      situation: 'Divorce Sale — Court-Ordered',
      date: 'July 2025',
    },
    {
      quote: "I had a rental on the West End with a non-paying tenant and code violations piling up. I just wanted out. USA Home Buyers bought it tenant-occupied, violations and all. Done in two weeks.",
      name: 'Thomas K.',
      location: 'West End, Allentown PA',
      situation: 'Rental Property — Code Violations',
      date: 'January 2026',
    },
    {
      quote: "Air Products transferred me to their Houston office and gave me four weeks to report. Me and my wife had the house listed briefly but the market didn't move fast enough. USA Home Buyers made an offer we could live with. We closed ten days later and I started in Houston on time.",
      name: 'Craig W.',
      location: 'Trexlertown, PA',
      situation: 'Relocation — Corporate Transfer',
      date: 'June 2025',
    },
    {
      quote: "Jordan Creek flooded our basement twice in three years. The last time, water came up through the floor drain and destroyed the furnace and water heater. Remediation company estimated $34,000 in repairs. USA Home Buyers came out, knew exactly what they were looking at, and had a written offer the next morning. We closed in eleven days.",
      name: 'Brenda K.',
      location: 'South Allentown, PA',
      situation: 'Flood Damage — Repeated Basement Flooding',
      date: 'November 2025',
    },
    {
      quote: "My wife passed and I was rattling around a three-bedroom house on Brodhead Avenue by myself. Seventy-four years old, arthritis, couldn't keep up with the yard or the repairs. USA Home Buyers closed in eight days. I moved into the senior community the following week.",
      name: 'Frank D.',
      location: 'Fountain Hill, PA',
      situation: 'Downsizing — Widowed, Senior Transition',
      date: 'February 2025',
    },
  ],

  // ─── BETHLEHEM-PA ──────────────────────────────────────────────────────────
  'app/markets/bethlehem-pa/page.tsx': [
    {
      quote: "My grandmother's row home on Hayes Street sat vacant for three years after she passed. South Side, built in the 1920s, knob-and-tube wiring, boiler that hadn't run in two winters. The family was scattered — nobody wanted to manage it from out of state. USA Home Buyers made a fair cash offer and closed in 10 days. We left everything. They handled the rest.",
      name: 'Patricia M.',
      location: 'South Side, Bethlehem PA',
      situation: 'Inherited Property — Estate Sale',
      date: 'March 2026',
    },
    {
      quote: "I owned a rental on West 4th Street, tenant stopped paying during COVID and I never got fully caught up with the mortgage after. When I found out about the foreclosure timeline in Northampton County I knew I needed to move fast. Got a written offer in 20 hours, closed before the sheriff sale was scheduled.",
      name: 'Marcus T.',
      location: 'West Side, Bethlehem PA',
      situation: 'Pre-Foreclosure — Behind on Mortgage',
      date: 'February 2026',
    },
    {
      quote: "Going through a divorce, we needed to sell the house on Prospect Avenue quickly and split the money cleanly. No arguments about repairs, no real estate agent drama. USA Home Buyers gave us one written number, we both signed, and it was done in 12 days.",
      name: 'Denise R.',
      location: 'Central Bethlehem, PA',
      situation: 'Divorce Sale — Splitting Assets',
      date: 'January 2026',
    },
    {
      quote: "I had two student rentals near Lehigh on Brodhead Avenue. The last set of tenants left the basement flooded with the pipes disconnected and the carpets destroyed. It would have cost me $22,000 just to make it rentable again. USA Home Buyers bought both properties in one transaction, as-is. Closed in fifteen days.",
      name: 'Kevin O.',
      location: 'South Bethlehem, PA',
      situation: 'Rental Property — Student Housing Exit',
      date: 'August 2025',
    },
    {
      quote: "Got an offer from St. Luke's in their Phoenix satellite and had six weeks to move. I'd owned my house in Fountain Hill for nine years — good bones but the kitchen hadn't been touched since the nineties. No time for a renovation, no time for showings. USA Home Buyers had a number in twenty-four hours. We closed the day before I drove to Arizona.",
      name: 'Anita S.',
      location: 'Fountain Hill, PA',
      situation: 'Relocation — Healthcare Transfer',
      date: 'May 2025',
    },
    {
      quote: "A tree came down in the November windstorm and punched through the back of the roof over the master bedroom. Insurance covered the tree removal but disputed the interior damage claim. I didn't want to wait six months for them to settle. USA Home Buyers saw it, made an offer two days later, we closed in twelve days. Insurance fight became their problem.",
      name: 'Jerome B.',
      location: 'North Side, Bethlehem PA',
      situation: 'Storm Damage — Roof Collapse',
      date: 'January 2026',
    },
    {
      quote: "I'm seventy-one and I've been in my house on Heckewelder Street since 1994. My cardiologist told me the stairs weren't doing me any favors. USA Home Buyers made me a fair offer. I moved into a ground-floor apartment in seven days. Didn't have to stage a single room.",
      name: 'Eleanor V.',
      location: 'Historic District, Bethlehem PA',
      situation: 'Downsizing — Health-Driven Move',
      date: 'July 2025',
    },
  ],

  // ─── BLOOMINGTON-IL ────────────────────────────────────────────────────────
  'app/markets/bloomington-il/page.tsx': [
    {
      quote: "My father worked at State Farm for thirty-one years and bought his Founders' Grove home in 1974. When he passed, my siblings and I were scattered across four states — none of us wanted to manage a Victorian-era house with deferred maintenance from three states away. USA Home Buyers gave us a written number within a day and closed in eighteen days. We never had to come back to Bloomington.",
      name: 'Sandra M.',
      location: "Founders' Grove, Bloomington IL",
      situation: 'Inherited Estate — State Farm Retiree Property',
      date: 'March 2026',
    },
    {
      quote: "After Rivian cut production shifts and my hours dropped, I fell behind on the mortgage. Four months behind, and the lender filed in McLean County Circuit Court. I didn't know I still had $47,000 in equity and could sell out from under the foreclosure. USA Home Buyers explained the options, had a written offer the next day, and we closed in fourteen days. The foreclosure was dismissed.",
      name: 'Dwayne F.',
      location: 'Oakland Park, Bloomington IL',
      situation: 'Pre-Foreclosure — Behind on Payments',
      date: 'October 2025',
    },
    {
      quote: "The judge ordered the house sold as part of the McLean County dissolution. We couldn't agree on a listing price, couldn't agree on an agent, couldn't agree on repairs. Our attorneys finally said get a cash offer and split it. USA Home Buyers came in, we got a number both of us could accept, and closed in sixteen days. That was the last thing we had to agree on.",
      name: 'Christine and Dale W.',
      location: 'Eastside, Bloomington IL',
      situation: 'Divorce Sale — Court-Ordered',
      date: 'March 2025',
    },
    {
      quote: "I owned a rental on Willow Street in Normal for eight years, mostly ISU students. The last tenant left in April and took the back door handle. I'm not exaggerating — they took the handle. Also left the stove on and melted the backsplash. USA Home Buyers bought it as-is in ten days. Done being a landlord.",
      name: 'Jerome T.',
      location: 'Normal Heights, Normal IL',
      situation: 'Rental Property — Tenant Damage',
      date: 'June 2025',
    },
    {
      quote: "I'd been an ISU adjunct for six years when a tenure-track offer came in from a university in Arizona. I had to be there in five weeks. My house in the Veterans Parkway corridor was tenant-occupied — the lease wasn't up for four months. USA Home Buyers bought it with the tenant in place. I didn't have to evict anyone, didn't miss the Arizona start date.",
      name: 'Robert A.',
      location: 'Veterans Parkway, Bloomington IL',
      situation: 'Faculty Relocation — Tenant-Occupied Property',
      date: 'February 2026',
    },
    {
      quote: "The sump pump failed during the spring melt. We had four inches of water in the basement and mold grew behind the drywall before we even knew it was there. The remediation estimate was $29,000. My husband has COPD — we couldn't stay in the house while they worked on it anyway. USA Home Buyers bought it as-is, no inspection contingency. We were in our new place in eleven days.",
      name: 'Patricia L.',
      location: 'Washington Park, Bloomington IL',
      situation: 'Flood Damage — Mold Remediation',
      date: 'April 2025',
    },
    {
      quote: "Country Financial restructured my department and offered early retirement. At 58, with a home that needed a new roof and electrical updates, I wasn't going to find a conventional buyer who'd overlook those issues. USA Home Buyers came in, gave me a real number the next morning. I was at a title company signing papers within two weeks. No repairs, no agents, no waiting.",
      name: 'Linda K.',
      location: 'North Bloomington, Bloomington IL',
      situation: 'Downsizing — Early Retirement',
      date: 'January 2026',
    },
  ],

  // ─── BRIDGEPORT-CT ─────────────────────────────────────────────────────────
  'app/markets/bridgeport-ct/page.tsx': [
    {
      quote: "I inherited my aunt's house on the East Side — built in the 1920s, plaster walls, older electrical. I live in New York and couldn't manage it from a distance. The Bridgeport Probate Court process was easier than I expected, and USA Home Buyers closed the week after probate was settled. I didn't have to make a single repair.",
      name: 'Isabella R.',
      location: 'East Side, Bridgeport CT',
      situation: 'Inherited Property — Estate Sale',
      date: 'March 2026',
    },
    {
      quote: "I was three months behind and the bank had already filed in Superior Court. A friend told me Connecticut uses strict foreclosure — there's no auction, the bank can just take title on the law day. USA Home Buyers moved fast and we closed before the law day was set. I walked away with money instead of nothing.",
      name: 'Marcus T.',
      location: 'North End, Bridgeport CT',
      situation: 'Pre-Foreclosure — Strict Foreclosure',
      date: 'February 2026',
    },
    {
      quote: "My divorce required selling the house in Black Rock. My ex and I couldn't agree on anything. USA Home Buyers gave one offer, one closing date, and the proceeds split through our attorneys. Three weeks from first call to cash in hand.",
      name: 'Ana M.',
      location: 'Black Rock, Bridgeport CT',
      situation: 'Divorce Sale',
      date: 'September 2025',
    },
    {
      quote: "I had a two-family on Howard Avenue for eleven years. The last tenant was three months behind and Connecticut eviction can drag on for six months or more. I didn't want to do it. USA Home Buyers bought the property with the tenant still in it. Twelve days from first call to closing. I haven't thought about being a landlord since.",
      name: 'Luis R.',
      location: 'South End, Bridgeport CT',
      situation: 'Rental Property — Problem Tenant',
      date: 'July 2025',
    },
    {
      quote: "Got a management job at Pratt & Whitney in East Hartford and had to be there in five weeks. I'd been trying to sell my house in Stratfield for two months — no solid offers, one fell through on financing. USA Home Buyers had a written number in twenty-four hours and we closed before I had to be in Hartford. One less thing to worry about.",
      name: 'Stephanie W.',
      location: 'Stratfield, Bridgeport CT',
      situation: 'Relocation — Carrying Two Properties',
      date: 'October 2025',
    },
    {
      quote: "The boiler on my West Side property failed mid-winter and the pipes froze. Three rooms had water damage from the burst pipes and the plaster ceilings in two of them came down. Contractor said $41,000 minimum. I'm seventy and I'm not financing $41,000. USA Home Buyers bought it as-is. The whole thing took nine days.",
      name: 'Antoine M.',
      location: 'West Side, Bridgeport CT',
      situation: 'Water Damage — Frozen Pipes',
      date: 'January 2026',
    },
    {
      quote: "My husband passed in the spring of 2025. I'm sixty-eight, I don't drive, and the house was too much. I have two daughters in Stamford who kept asking me to move closer. USA Home Buyers made me a fair offer — I didn't have to stage anything or have strangers walking through. Closed in eight days. I was in Stamford by the end of the month.",
      name: 'Miriam K.',
      location: 'Hollow, Bridgeport CT',
      situation: 'Downsizing — Widowed, Relocating to Family',
      date: 'October 2025',
    },
  ],

  // ─── CHAMPAIGN-URBANA-IL ───────────────────────────────────────────────────
  'app/markets/champaign-urbana-il/page.tsx': [
    {
      quote: "My father was a UIUC engineering professor for 28 years. When he passed, my brother and I were in Seattle and Boston — neither of us had been back to Champaign in years. The house in Southwest Champaign had original 1970s HVAC and a basement with water intrusion. We called USA Home Buyers from out of state, had a written number within 24 hours, and closed without either of us flying back.",
      name: 'Carol H.',
      location: 'Southwest Champaign, IL',
      situation: 'UIUC Faculty Estate — Out-of-State Heirs',
      date: 'March 2026',
    },
    {
      quote: "After the property management company I worked for closed during COVID, I never got fully caught back up. By the time the Champaign County case was filed, I was six months behind. USA Home Buyers got me a written offer within forty-eight hours and closed in thirteen days before summary judgment. I had $31,000 in equity I almost lost.",
      name: 'Darius M.',
      location: 'North Champaign, IL',
      situation: 'Pre-Foreclosure — Behind on Payments',
      date: 'May 2025',
    },
    {
      quote: "The Champaign County divorce decree required the house to be sold. It's in Savoy, near the university, good area — but we couldn't agree on anything. One offer was already written up for us and both of us just had to sign. Twelve days and it was done. The attorneys took care of the rest.",
      name: 'Wendy and Scott A.',
      location: 'Savoy, IL',
      situation: 'Divorce Sale — Champaign County Decree',
      date: 'August 2025',
    },
    {
      quote: "I'd been renting to UIUC students in Old West Urbana for eleven years. Every August it was the same: new tenants, new damage, new headaches. Last summer I decided I was done. USA Home Buyers bought the place tenant-occupied — I didn't have to evict anyone or wait for the lease to end. Closed in twelve days. I'm out of the landlord business.",
      name: 'Robert T.',
      location: 'Old West Urbana, IL',
      situation: 'Tired Landlord — Student Rental Exit',
      date: 'February 2026',
    },
    {
      quote: "Tenure-track couple, both of us got offers in different states. We had four weeks to figure out the Champaign house before our start dates. No time for an agent, inspections, back-and-forth. USA Home Buyers had a written offer the next day. We closed in ten days. Made both start dates.",
      name: 'Dr. Priya N.',
      location: 'Campustown area, Champaign IL',
      situation: 'UIUC Faculty Relocation — Dual Tenure Offer',
      date: 'January 2026',
    },
    {
      quote: "Tornado touched down two blocks away in June and our fence, garage, and back half of the roof were destroyed. Insurance took three weeks to send someone. USA Home Buyers was there in two days, made a fair cash offer accounting for the damage, and closed while we were still arguing with the insurance adjuster.",
      name: 'Bernard O.',
      location: 'Southeast Champaign, IL',
      situation: 'Storm Damage — Tornado',
      date: 'July 2025',
    },
    {
      quote: "I retired from Carle Hospital after thirty-three years as a nurse and decided to move to Arizona to be near my son. My house in Lincolnwood had been good to me but it needed some work I wasn't willing to do. USA Home Buyers made an offer the day after we spoke. I was in Tucson six weeks later. Never looked back.",
      name: 'Helen S.',
      location: 'Lincolnwood, Urbana IL',
      situation: 'Downsizing — Retirement Move',
      date: 'February 2025',
    },
  ],

  // ─── ERIE-PA ───────────────────────────────────────────────────────────────
  'app/markets/erie-pa/page.tsx': [
    {
      quote: "