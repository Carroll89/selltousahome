/**
 * Champaign-Urbana IL — Market Content Data
 * RDC #77 | Champaign County | Market #25 on selltousahome.com
 * Prepared: 2026-04-18
 */

export const MARKET_SLUG = 'champaign-urbana-il';
export const MARKET_NAME = 'Champaign-Urbana';
export const MARKET_STATE = 'IL';
export const MARKET_STATE_FULL = 'Illinois';
export const COUNTY = 'Champaign County';
export const COUNTY_SEAT = 'Urbana';
export const COUNTY_FIPS = '17019';
export const JUDICIAL_CIRCUIT = '6th Judicial Circuit';
export const PHONE = '(888) 440-5250';
export const PHONE_HREF = 'tel:+18884405250';

// Courthouse & Recording Addresses
export const CIRCUIT_COURT_ADDRESS = '101 E. Main Street, Urbana IL 61802';
export const CIRCUIT_COURT_PHONE = '217-384-3725';
export const RECORDER_ADDRESS = '1776 E. Washington Street, Urbana IL 61802';
export const RECORDER_PHONE = '217-384-3774';

// Housing Market Data (as of Feb 2026)
export const METRO_ZHVI = 226978;
export const METRO_ZHVI_YOY = '+5.0%';
export const CHAMPAIGN_CITY_ZHVI = 199076;
export const CHAMPAIGN_CITY_ZHVI_YOY = '+3.3%';
export const URBANA_CITY_ZHVI = 168903;
export const URBANA_CITY_ZHVI_YOY = '+4.8%';
export const COUNTY_REDFIN_MEDIAN = 230000;
export const COUNTY_REDFIN_MEDIAN_YOY = '+4.3%';
export const CHAMPAIGN_REDFIN_MEDIAN = 243000;
export const URBANA_REDFIN_MEDIAN = 175000;
export const RDC_HOTNESS_RANK = '#77';
export const FRED_LISTING_PRICE = 272450; // Sep 2025

// Transfer Tax Stack (0.15% combined — NOT 1.5% as stated on Champaign County Clerk website)
export const IL_STATE_TRANSFER_TAX_RATE = '$0.50/$500 (0.10%)';
export const COUNTY_TRANSFER_TAX_RATE = '$0.25/$500 (0.05%)';
export const COMBINED_TRANSFER_TAX_RATE = '$0.75/$500 (0.15%)';
export const COMBINED_TRANSFER_TAX_ON_200K = 300; // $300 on $200,000 sale
export const CHAMPAIGN_MUNICIPAL_RETT = 'None (ATG-404 confirmed)';
export const URBANA_MUNICIPAL_RETT = 'None (ATG-404 confirmed)';

// Transfer Tax Clarification (critical content differentiator)
export const TRANSFER_TAX_CLARIFICATION = `Per Champaign County Clerk (retrieved April 2026), 35 ILCS 200/31-10, and 55 ILCS 5/5-1031, the correct combined state+county transfer tax is 0.15% ($300 on a $200,000 sale), not 1.5% as stated on the Clerk's website. The 1.5% figure is a decimal-point typo — the Clerk's own "2/3 state, 1/3 county" math confirms 0.15%.`;

// Key Legal Context
export const FORECLOSURE_STATUTE = '735 ILCS 5/15-1101';
export const REINSTATEMENT_STATUTE = '735 ILCS 5/15-1602';
export const REDEMPTION_STATUTE = '735 ILCS 5/15-1603';
export const PROBATE_STATUTE = '755 ILCS 5';
export const SMALL_ESTATE_STATUTE = '755 ILCS 5/25-1';
export const SMALL_ESTATE_THRESHOLD = 150000; // 2025 amendment
export const DIVORCE_STATUTE = '750 ILCS 5/503';
export const DISCLOSURE_STATUTE = '765 ILCS 77';
export const EVICTION_STATUTE = '735 ILCS 5/9-101';
export const IL_INSURANCE_UNFAIR_CLAIMS = '215 ILCS 5/154.5';
export const IL_INSURANCE_DEPT = 'insurance.illinois.gov';

// Key Employers
export const KEY_EMPLOYERS = [
  { name: 'University of Illinois Urbana-Champaign (UIUC)', students: 57000, source: 'illinois.edu' },
  { name: 'Carle Foundation Hospital / Carle Health', employees: 8000, source: 'carle.org/about' },
  { name: 'University of Illinois Research Park', companies: 100, employees: 3000, source: 'researchpark.illinois.edu' },
  { name: 'Parkland College', source: 'parkland.edu' },
  { name: 'Busey Bank / First Busey Corporation', source: 'firstbusey.com' },
];

// Principal Neighborhoods
export const CHAMPAIGN_NEIGHBORHOODS = [
  'Campustown',
  'Southwest Champaign / Research Park Area',
  'Stone Creek / Savoy',
  'Robeson Woods / Presidents Neighborhoods',
  'Country Fair / Neil Street Corridor',
  'Lincolnshire / Pheasant Ridge',
];

export const URBANA_NEIGHBORHOODS = [
  'University District (East Campus)',
  'Old West Urbana',
  'Downtown Urbana / Lincoln Square',
  'Crystal Lake Park (North Urbana)',
  'Dodds Park / South Urbana',
  'Busey Woods / Carle Area',
];

// Motivated Seller Hooks
export const MOTIVATED_SELLER_HOOKS = [
  'UIUC faculty relocations (tenure moves to other institutions)',
  'Tired landlords exiting student-rental portfolios',
  'Out-of-state heirs from UIUC faculty estates',
  'Research Park tech workers after funding ends or company acquisition',
  'Graduate student couple transitions (post-PhD relocation)',
  'Urbana working-class distressed properties',
  'Campustown landlord fatigue (annual August turnover)',
];

// Pre-1939 Housing Stock
export const CHAMPAIGN_PRE1939_PCT = 11.29; // Source: NeighborhoodScout
export const PRE1939_SOURCE = 'neighborhoodscout.com/il/champaign/real-estate';

// Demographic (English-only market)
export const HISPANIC_PCT_BELOW_30 = true; // County ~7-8%; no Spanish content trigger
export const SPANISH_CONTENT = false;
