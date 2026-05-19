import { PHONE, SITE_URL } from './utils';

type CityConfig = {
  city: string;
  region: string;
  postalCode: string;
  lat: number;
  lng: number;
  description: string;
  areaServed: { '@type': string; name: string; sameAs?: string }[];
};

const CITY_CONFIGS: Record<string, CityConfig> = {
  harrisburg: {
    city: 'Harrisburg',
    region: 'PA',
    postalCode: '17101',
    lat: 40.2732,
    lng: -76.8867,
    description:
      'Cash home buyers serving Harrisburg PA and Central Pennsylvania. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Harrisburg', sameAs: 'https://en.wikipedia.org/wiki/Harrisburg,_Pennsylvania' },
      { '@type': 'City', name: 'Camp Hill' },
      { '@type': 'City', name: 'Mechanicsburg' },
      { '@type': 'City', name: 'Carlisle' },
      { '@type': 'City', name: 'Lemoyne' },
      { '@type': 'City', name: 'Steelton' },
      { '@type': 'City', name: 'Hershey' },
      { '@type': 'County', name: 'Dauphin County' },
      { '@type': 'County', name: 'Cumberland County' },
    ],
  },
  kingOfPrussia: {
    city: 'King of Prussia',
    region: 'PA',
    postalCode: '19406',
    lat: 40.0892,
    lng: -75.3961,
    description:
      'Cash home buyers serving King of Prussia PA and Montgomery County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'King of Prussia', sameAs: 'https://en.wikipedia.org/wiki/King_of_Prussia,_Pennsylvania' },
      { '@type': 'City', name: 'Norristown' },
      { '@type': 'City', name: 'Conshohocken' },
      { '@type': 'City', name: 'Plymouth Meeting' },
      { '@type': 'City', name: 'Bridgeport' },
      { '@type': 'City', name: 'Wayne' },
      { '@type': 'City', name: 'Collegeville' },
      { '@type': 'City', name: 'Gulph Mills' },
      { '@type': 'City', name: 'Valley Forge' },
      { '@type': 'City', name: 'Bryn Mawr' },
      { '@type': 'County', name: 'Montgomery County' },
      { '@type': 'County', name: 'Chester County' },
      { '@type': 'County', name: 'Delaware County' },
    ],
  },
  reading: {
    city: 'Reading',
    region: 'PA',
    postalCode: '19601',
    lat: 40.3356,
    lng: -75.9269,
    description:
      'Cash home buyers serving Reading PA and Berks County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days. Hablamos español.',
    areaServed: [
      { '@type': 'City', name: 'Reading', sameAs: 'https://en.wikipedia.org/wiki/Reading,_Pennsylvania' },
      { '@type': 'City', name: 'Wyomissing' },
      { '@type': 'City', name: 'Shillington' },
      { '@type': 'City', name: 'Sinking Spring' },
      { '@type': 'City', name: 'Muhlenberg' },
      { '@type': 'City', name: 'Kutztown' },
      { '@type': 'City', name: 'Boyertown' },
      { '@type': 'City', name: 'Pottstown' },
      { '@type': 'County', name: 'Berks County' },
    ],
  },
  stateCollege: {
    city: 'State College',
    region: 'PA',
    postalCode: '16801',
    lat: 40.7934,
    lng: -77.86,
    description:
      'Cash home buyers serving State College PA and Centre County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'State College', sameAs: 'https://en.wikipedia.org/wiki/State_College,_Pennsylvania' },
      { '@type': 'City', name: 'Bellefonte' },
      { '@type': 'City', name: 'Boalsburg' },
      { '@type': 'City', name: 'Port Matilda' },
      { '@type': 'City', name: 'Philipsburg' },
      { '@type': 'City', name: 'Milesburg' },
      { '@type': 'City', name: 'Snow Shoe' },
      { '@type': 'City', name: 'Tyrone' },
      { '@type': 'City', name: 'Lock Haven' },
      { '@type': 'City', name: 'Lewistown' },
      { '@type': 'City', name: 'Clearfield' },
      { '@type': 'County', name: 'Centre County' },
      { '@type': 'County', name: 'Clinton County' },
      { '@type': 'County', name: 'Mifflin County' },
    ],
  },
  erie: {
    city: 'Erie',
    region: 'PA',
    postalCode: '16501',
    lat: 42.1294,
    lng: -80.0850,
    description:
      'Cash home buyers serving Erie PA and Erie County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Erie', sameAs: 'https://en.wikipedia.org/wiki/Erie,_Pennsylvania' },
      { '@type': 'City', name: 'Millcreek Township' },
      { '@type': 'City', name: 'Harborcreek' },
      { '@type': 'City', name: 'Lawrence Park' },
      { '@type': 'City', name: 'Wesleyville' },
      { '@type': 'City', name: 'North East' },
      { '@type': 'City', name: 'Girard' },
      { '@type': 'City', name: 'Fairview' },
      { '@type': 'City', name: 'Edinboro' },
      { '@type': 'City', name: 'Corry' },
      { '@type': 'City', name: 'Union City' },
      { '@type': 'City', name: 'Waterford' },
      { '@type': 'County', name: 'Erie County' },
    ],
  },
  lancaster: {
    city: 'Lancaster',
    region: 'PA',
    postalCode: '17602',
    lat: 40.0379,
    lng: -76.3055,
    description:
      'USA Home Buyers purchases homes for cash in Lancaster, PA and throughout Lancaster County — including Lititz, Ephrata, Manheim, Columbia, Mount Joy, and Elizabethtown — with 24-hour offers and 7–14 day closings; hablamos español.',
    areaServed: [
      { '@type': 'City', name: 'Lancaster', sameAs: 'https://en.wikipedia.org/wiki/Lancaster,_Pennsylvania' },
      { '@type': 'City', name: 'Lititz' },
      { '@type': 'City', name: 'Ephrata' },
      { '@type': 'City', name: 'Manheim' },
      { '@type': 'City', name: 'Columbia' },
      { '@type': 'City', name: 'Mount Joy' },
      { '@type': 'City', name: 'Elizabethtown' },
      { '@type': 'City', name: 'Millersville' },
      { '@type': 'City', name: 'New Holland' },
      { '@type': 'City', name: 'Quarryville' },
      { '@type': 'City', name: 'Strasburg' },
      { '@type': 'City', name: 'East Petersburg' },
      { '@type': 'City', name: 'Akron' },
      { '@type': 'City', name: 'Marietta' },
      { '@type': 'City', name: 'Mountville' },
      { '@type': 'County', name: 'Lancaster County' },
    ],
  },
  wilmington: {
    city: 'Wilmington',
    region: 'DE',
    postalCode: '19801',
    lat: 39.7447,
    lng: -75.5484,
    description:
      'Cash home buyers in Wilmington, DE and throughout New Castle County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Wilmington', sameAs: 'https://en.wikipedia.org/wiki/Wilmington,_Delaware' },
      { '@type': 'City', name: 'Newark' },
      { '@type': 'City', name: 'New Castle' },
      { '@type': 'City', name: 'Elsmere' },
      { '@type': 'City', name: 'Claymont' },
      { '@type': 'City', name: 'Bear' },
      { '@type': 'City', name: 'Middletown' },
      { '@type': 'City', name: 'Hockessin' },
      { '@type': 'City', name: 'Arden' },
      { '@type': 'City', name: 'Edgemoor' },
      { '@type': 'City', name: 'Glasgow' },
      { '@type': 'City', name: 'Pike Creek' },
      { '@type': 'City', name: 'Wilmington Manor' },
      { '@type': 'County', name: 'New Castle County', sameAs: 'https://en.wikipedia.org/wiki/New_Castle_County,_Delaware' },
    ],
  },
  york: {
    city: 'York',
    region: 'PA',
    postalCode: '17401',
    lat: 39.962303,
    lng: -76.727692,
    description:
      'USA Home Buyers purchases homes for cash in York, PA and throughout York County — including Hanover, Red Lion, Dallastown, Spring Grove, and Dover — with 24-hour offers and 7–14 day closings. Hablamos español.',
    areaServed: [
      { '@type': 'City', name: 'York', sameAs: 'https://en.wikipedia.org/wiki/York,_Pennsylvania' },
      { '@type': 'City', name: 'Hanover' },
      { '@type': 'City', name: 'Red Lion' },
      { '@type': 'City', name: 'Dallastown' },
      { '@type': 'City', name: 'Spring Grove' },
      { '@type': 'City', name: 'Dover' },
      { '@type': 'City', name: 'Shrewsbury' },
      { '@type': 'City', name: 'New Freedom' },
      { '@type': 'City', name: 'Glen Rock' },
      { '@type': 'City', name: 'Dillsburg' },
      { '@type': 'City', name: 'York Haven' },
      { '@type': 'City', name: 'Manchester' },
      { '@type': 'City', name: 'Windsor' },
      { '@type': 'City', name: 'Seven Valleys' },
      { '@type': 'City', name: 'Jacobus' },
      { '@type': 'City', name: 'West York' },
      { '@type': 'City', name: 'North York' },
      { '@type': 'City', name: 'Wrightsville' },
      { '@type': 'City', name: 'Mount Wolf' },
      { '@type': 'City', name: 'East York' },
      { '@type': 'County', name: 'York County' },
    ],
  },
  bethlehem: {
    city: 'Bethlehem',
    region: 'PA',
    postalCode: '18018',
    lat: 40.625932,
    lng: -75.370458,
    description:
      'Cash home buyers serving Bethlehem PA and Northampton County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days. Hablamos español.',
    areaServed: [
      { '@type': 'City', name: 'Bethlehem', sameAs: 'https://en.wikipedia.org/wiki/Bethlehem,_Pennsylvania' },
      { '@type': 'City', name: 'Easton' },
      { '@type': 'City', name: 'Nazareth' },
      { '@type': 'City', name: 'Hellertown' },
      { '@type': 'City', name: 'Fountain Hill' },
      { '@type': 'City', name: 'Whitehall Township' },
      { '@type': 'City', name: 'Palmer Township' },
      { '@type': 'City', name: 'Hanover Township' },
      { '@type': 'City', name: 'Bethlehem Township' },
      { '@type': 'City', name: 'Wilson Borough' },
      { '@type': 'City', name: 'Freemansburg' },
      { '@type': 'City', name: 'Northampton' },
      { '@type': 'City', name: 'Emmaus' },
      { '@type': 'City', name: 'Catasauqua' },
      { '@type': 'County', name: 'Northampton County' },
      { '@type': 'County', name: 'Lehigh County' },
    ],
  },
  youngstown: {
    city: 'Youngstown',
    region: 'OH',
    postalCode: '44503',
    lat: 41.0998,
    lng: -80.6495,
    description:
      'USA Home Buyers LLC buys houses for cash in Youngstown, Ohio and throughout Mahoning County. Written offer in 24 hours, close in 7-14 days. Any condition.',
    areaServed: [
      { '@type': 'City', name: 'Youngstown', sameAs: 'https://en.wikipedia.org/wiki/Youngstown,_Ohio' },
      { '@type': 'City', name: 'Warren' },
      { '@type': 'City', name: 'Boardman' },
      { '@type': 'City', name: 'Austintown' },
      { '@type': 'City', name: 'Niles' },
      { '@type': 'City', name: 'Campbell' },
      { '@type': 'City', name: 'Struthers' },
      { '@type': 'City', name: 'Girard' },
      { '@type': 'City', name: 'Hubbard' },
      { '@type': 'City', name: 'Canfield' },
      { '@type': 'City', name: 'Poland' },
      { '@type': 'City', name: 'Mineral Ridge' },
      { '@type': 'City', name: 'Lowellville' },
      { '@type': 'County', name: 'Mahoning County' },
      { '@type': 'County', name: 'Trumbull County' },
    ],
  },
  springfield: {
    city: 'Springfield',
    region: 'MA',
    postalCode: '01103',
    lat: 42.1015,
    lng: -72.5898,
    description:
      'Cash home buyers serving Springfield MA and Hampden County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days. Hablamos español.',
    areaServed: [
      { '@type': 'City', name: 'Springfield', sameAs: 'https://en.wikipedia.org/wiki/Springfield,_Massachusetts' },
      { '@type': 'City', name: 'West Springfield' },
      { '@type': 'City', name: 'Agawam' },
      { '@type': 'City', name: 'Chicopee' },
      { '@type': 'City', name: 'Ludlow' },
      { '@type': 'City', name: 'Wilbraham' },
      { '@type': 'City', name: 'East Longmeadow' },
      { '@type': 'City', name: 'Longmeadow' },
      { '@type': 'City', name: 'Westfield' },
      { '@type': 'City', name: 'Holyoke' },
      { '@type': 'City', name: 'Northampton' },
      { '@type': 'City', name: 'Ware' },
      { '@type': 'County', name: 'Hampden County' },
      { '@type': 'County', name: 'Hampshire County' },
    ],
  },
  kenosha: {
    city: 'Kenosha',
    region: 'WI',
    postalCode: '53140',
    lat: 42.5847,
    lng: -87.8212,
    description:
      'Cash home buyers serving Kenosha WI and Kenosha County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Kenosha', sameAs: 'https://en.wikipedia.org/wiki/Kenosha,_Wisconsin' },
      { '@type': 'City', name: 'Racine' },
      { '@type': 'City', name: 'Pleasant Prairie' },
      { '@type': 'City', name: 'Somers' },
      { '@type': 'City', name: 'Bristol' },
      { '@type': 'City', name: 'Winthrop Harbor' },
      { '@type': 'City', name: 'Zion' },
      { '@type': 'City', name: 'Antioch' },
      { '@type': 'City', name: 'Gurnee' },
      { '@type': 'City', name: 'Silver Lake' },
      { '@type': 'City', name: 'Twin Lakes' },
      { '@type': 'City', name: 'Salem' },
      { '@type': 'County', name: 'Kenosha County' },
      { '@type': 'County', name: 'Racine County' },
    ],
  },
  manchester: {
    city: 'Manchester',
    region: 'NH',
    postalCode: '03101',
    lat: 42.9957,
    lng: -71.4548,
    description:
      "Cash home buyers serving Manchester NH and Hillsborough County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.",
    areaServed: [
      { '@type': 'City', name: 'Manchester', sameAs: 'https://en.wikipedia.org/wiki/Manchester,_New_Hampshire' },
      { '@type': 'City', name: 'Nashua' },
      { '@type': 'City', name: 'Goffstown' },
      { '@type': 'City', name: 'Hooksett' },
      { '@type': 'City', name: 'Londonderry' },
      { '@type': 'City', name: 'Auburn' },
      { '@type': 'City', name: 'Bedford' },
      { '@type': 'City', name: 'Merrimack' },
      { '@type': 'City', name: 'Litchfield' },
      { '@type': 'City', name: 'Derry' },
      { '@type': 'City', name: 'Candia' },
      { '@type': 'County', name: 'Hillsborough County' },
      { '@type': 'County', name: 'Rockingham County' },
    ],
  },
  bridgeport: {
    city: 'Bridgeport',
    region: 'CT',
    postalCode: '06604',
    lat: 41.1865,
    lng: -73.1952,
    description:
      'Cash home buyers serving Bridgeport CT and Fairfield County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days. Hablamos español.',
    areaServed: [
      { '@type': 'City', name: 'Bridgeport', sameAs: 'https://en.wikipedia.org/wiki/Bridgeport,_Connecticut' },
      { '@type': 'City', name: 'Stamford' },
      { '@type': 'City', name: 'Danbury' },
      { '@type': 'City', name: 'Stratford' },
      { '@type': 'City', name: 'Milford' },
      { '@type': 'City', name: 'Shelton' },
      { '@type': 'City', name: 'Trumbull' },
      { '@type': 'City', name: 'Fairfield' },
      { '@type': 'City', name: 'Derby' },
      { '@type': 'City', name: 'Ansonia' },
      { '@type': 'City', name: 'Naugatuck' },
      { '@type': 'City', name: 'Westport' },
      { '@type': 'County', name: 'Fairfield County' },
      { '@type': 'County', name: 'New Haven County' },
    ],
  },
  worcester: {
    city: 'Worcester',
    region: 'MA',
    postalCode: '01608',
    lat: 42.2626,
    lng: -71.8023,
    description:
      'Cash home buyers serving Worcester MA and Worcester County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Worcester', sameAs: 'https://en.wikipedia.org/wiki/Worcester,_Massachusetts' },
      { '@type': 'City', name: 'Shrewsbury' },
      { '@type': 'City', name: 'Auburn' },
      { '@type': 'City', name: 'Millbury' },
      { '@type': 'City', name: 'Grafton' },
      { '@type': 'City', name: 'Holden' },
      { '@type': 'City', name: 'Paxton' },
      { '@type': 'City', name: 'Leicester' },
      { '@type': 'City', name: 'Webster' },
      { '@type': 'City', name: 'Southbridge' },
      { '@type': 'City', name: 'Spencer' },
      { '@type': 'City', name: 'Fitchburg' },
      { '@type': 'City', name: 'Leominster' },
      { '@type': 'County', name: 'Worcester County' },
    ],
  },
  rochester: {
    city: 'Rochester',
    region: 'NY',
    postalCode: '14604',
    lat: 43.1566,
    lng: -77.6088,
    description:
      'Cash home buyers serving Rochester NY and Monroe County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Rochester', sameAs: 'https://en.wikipedia.org/wiki/Rochester,_New_York' },
      { '@type': 'City', name: 'Greece' },
      { '@type': 'City', name: 'Irondequoit' },
      { '@type': 'City', name: 'Brighton' },
      { '@type': 'City', name: 'Henrietta' },
      { '@type': 'City', name: 'Pittsford' },
      { '@type': 'City', name: 'Gates' },
      { '@type': 'City', name: 'Chili' },
      { '@type': 'City', name: 'Penfield' },
      { '@type': 'City', name: 'Webster' },
      { '@type': 'City', name: 'East Rochester' },
      { '@type': 'City', name: 'Fairport' },
      { '@type': 'City', name: 'Victor' },
      { '@type': 'County', name: 'Monroe County' },
      { '@type': 'County', name: 'Ontario County' },
    ],
  },
  racineMountPleasant: {
    city: 'Racine',
    region: 'WI',
    postalCode: '53403',
    lat: 42.7261,
    lng: -87.7829,
    description:
      'Cash home buyers serving Racine, Mount Pleasant WI and Racine County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Racine', sameAs: 'https://en.wikipedia.org/wiki/Racine,_Wisconsin' },
      { '@type': 'City', name: 'Mount Pleasant', sameAs: 'https://en.wikipedia.org/wiki/Mount_Pleasant,_Racine_County,_Wisconsin' },
      { '@type': 'City', name: 'Caledonia' },
      { '@type': 'City', name: 'Sturtevant' },
      { '@type': 'City', name: 'Union Grove' },
      { '@type': 'City', name: 'Burlington' },
      { '@type': 'City', name: 'Wind Point' },
      { '@type': 'City', name: 'Raymond' },
      { '@type': 'City', name: 'Waterford' },
      { '@type': 'City', name: 'Rochester' },
      { '@type': 'County', name: 'Racine County' },
    ],
  },
  rockfordIL: {
    city: 'Rockford',
    region: 'IL',
    postalCode: '61101',
    lat: 42.2594,
    lng: -89.0644,
    description:
      'Cash home buyers serving Rockford IL and Winnebago County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Rockford', sameAs: 'https://en.wikipedia.org/wiki/Rockford,_Illinois' },
      { '@type': 'City', name: 'Loves Park' },
      { '@type': 'City', name: 'Machesney Park' },
      { '@type': 'City', name: 'Rockton' },
      { '@type': 'City', name: 'Roscoe' },
      { '@type': 'City', name: 'Belvidere' },
      { '@type': 'City', name: 'Winnebago' },
      { '@type': 'City', name: 'New Milford' },
      { '@type': 'City', name: 'Cherry Valley' },
      { '@type': 'City', name: 'Byron' },
      { '@type': 'City', name: 'Davis Junction' },
      { '@type': 'City', name: 'Kirkland' },
      { '@type': 'County', name: 'Winnebago County' },
    ],
  },
  bloomingtonIL: {
    city: 'Bloomington',
    region: 'IL',
    postalCode: '61701',
    lat: 40.4842,
    lng: -88.9937,
    description:
      'Cash home buyers serving Bloomington IL and McLean County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7–14 days.',
    areaServed: [
      { '@type': 'City', name: 'Bloomington', sameAs: 'https://en.wikipedia.org/wiki/Bloomington,_Illinois' },
      { '@type': 'City', name: 'Normal' },
      { '@type': 'City', name: 'Hudson' },
      { '@type': 'City', name: 'Heyworth' },
      { '@type': 'City', name: 'Le Roy' },
      { '@type': 'City', name: 'Downs' },
      { '@type': 'City', name: 'Towanda' },
      { '@type': 'City', name: 'Stanford' },
      { '@type': 'City', name: 'McLean' },
      { '@type': 'City', name: 'Carlock' },
      { '@type': 'County', name: 'McLean County' },
    ],
  },
  champaignUrbanaIL: {
    city: 'Champaign',
    region: 'IL',
    postalCode: '61820',
    lat: 40.1164,
    lng: -88.2434,
    description:
      'Cash home buyers serving Champaign and Urbana, IL and Champaign County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7–14 days.',
    areaServed: [
      { '@type': 'City', name: 'Champaign', sameAs: 'https://en.wikipedia.org/wiki/Champaign,_Illinois' },
      { '@type': 'City', name: 'Urbana', sameAs: 'https://en.wikipedia.org/wiki/Urbana,_Illinois' },
      { '@type': 'City', name: 'Savoy' },
      { '@type': 'City', name: 'Mahomet' },
      { '@type': 'City', name: 'St. Joseph' },
      { '@type': 'City', name: 'Tolono' },
      { '@type': 'City', name: 'Rantoul' },
      { '@type': 'City', name: 'Sidney' },
      { '@type': 'City', name: 'Philo' },
      { '@type': 'City', name: 'Ogden' },
      { '@type': 'County', name: 'Champaign County' },
    ],
  },
  peoriaIL: {
    city: 'Peoria',
    region: 'IL',
    postalCode: '61602',
    lat: 40.6936,
    lng: -89.5890,
    description:
      'Cash home buyers serving Peoria IL and Peoria County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7–14 days.',
    areaServed: [
      { '@type': 'City', name: 'Peoria', sameAs: 'https://en.wikipedia.org/wiki/Peoria,_Illinois' },
      { '@type': 'City', name: 'Peoria Heights' },
      { '@type': 'City', name: 'West Peoria' },
      { '@type': 'City', name: 'Bartonville' },
      { '@type': 'City', name: 'Bellevue' },
      { '@type': 'City', name: 'Creve Coeur' },
      { '@type': 'City', name: 'East Peoria' },
      { '@type': 'City', name: 'Pekin' },
      { '@type': 'City', name: 'Chillicothe' },
      { '@type': 'City', name: 'Dunlap' },
      { '@type': 'City', name: 'Morton' },
      { '@type': 'City', name: 'Washington' },
      { '@type': 'County', name: 'Peoria County' },
    ],
  },
  springfieldIL: {
    city: 'Springfield',
    region: 'IL',
    postalCode: '62701',
    lat: 39.7817,
    lng: -89.6501,
    description:
      'Cash home buyers serving Springfield IL and Sangamon County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Springfield', sameAs: 'https://en.wikipedia.org/wiki/Springfield,_Illinois' },
      { '@type': 'City', name: 'Chatham' },
      { '@type': 'City', name: 'Rochester' },
      { '@type': 'City', name: 'Sherman' },
      { '@type': 'City', name: 'Riverton' },
      { '@type': 'City', name: 'Leland Grove' },
      { '@type': 'City', name: 'Jerome' },
      { '@type': 'City', name: 'Auburn' },
      { '@type': 'City', name: 'Pawnee' },
      { '@type': 'City', name: 'New Berlin' },
      { '@type': 'City', name: 'Pleasant Plains' },
      { '@type': 'City', name: 'Mechanicsburg' },
      { '@type': 'City', name: 'Petersburg' },
      { '@type': 'County', name: 'Sangamon County' },
    ],
  },
  allentown: {
    city: 'Allentown',
    region: 'PA',
    postalCode: '18101',
    lat: 40.6023,
    lng: -75.4714,
    description:
      'Cash home buyers serving Allentown PA and the Lehigh Valley. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days. Hablamos español.',
    areaServed: [
      { '@type': 'City', name: 'Allentown', sameAs: 'https://en.wikipedia.org/wiki/Allentown,_Pennsylvania' },
      { '@type': 'City', name: 'Bethlehem' },
      { '@type': 'City', name: 'Easton' },
      { '@type': 'City', name: 'Whitehall Township' },
      { '@type': 'City', name: 'Fountain Hill' },
      { '@type': 'City', name: 'Northampton' },
      { '@type': 'City', name: 'Emmaus' },
      { '@type': 'City', name: 'Catasauqua' },
      { '@type': 'County', name: 'Lehigh County' },
      { '@type': 'County', name: 'Northampton County' },
    ],
  },
  newHaven: {
    city: 'New Haven',
    region: 'CT',
    postalCode: '06510',
    lat: 41.3082,
    lng: -72.9282,
    description:
      'Cash home buyers serving New Haven CT and New Haven County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days. Hablamos español.',
    areaServed: [
      { '@type': 'City', name: 'New Haven', sameAs: 'https://en.wikipedia.org/wiki/New_Haven,_Connecticut' },
      { '@type': 'City', name: 'Hamden' },
      { '@type': 'City', name: 'West Haven' },
      { '@type': 'City', name: 'East Haven' },
      { '@type': 'City', name: 'North Haven' },
      { '@type': 'City', name: 'Branford' },
      { '@type': 'City', name: 'Milford' },
      { '@type': 'City', name: 'Guilford' },
      { '@type': 'City', name: 'Orange' },
      { '@type': 'City', name: 'Woodbridge' },
      { '@type': 'City', name: 'Bethany' },
      { '@type': 'City', name: 'Madison' },
      { '@type': 'City', name: 'Wallingford' },
      { '@type': 'County', name: 'New Haven County' },
    ],
  },
  boston: {
    city: 'Boston',
    region: 'MA',
    postalCode: '02101',
    lat: 42.3601,
    lng: -71.0589,
    description:
      'Cash home buyers serving Boston MA and Suffolk County. We buy houses as-is in any condition — triple-deckers, brownstones, multifamily — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Boston', sameAs: 'https://en.wikipedia.org/wiki/Boston' },
      { '@type': 'City', name: 'Cambridge' },
      { '@type': 'City', name: 'Somerville' },
      { '@type': 'City', name: 'Quincy' },
      { '@type': 'City', name: 'Brookline' },
      { '@type': 'City', name: 'Chelsea' },
      { '@type': 'City', name: 'Revere' },
      { '@type': 'City', name: 'Winthrop' },
      { '@type': 'County', name: 'Suffolk County' },
      { '@type': 'County', name: 'Middlesex County' },
      { '@type': 'County', name: 'Norfolk County' },
    ],
  },
  hartford: {
    city: 'Hartford',
    region: 'CT',
    postalCode: '06103',
    lat: 41.7658,
    lng: -72.6734,
    description:
      'Cash home buyers serving Hartford CT and Hartford County. We buy houses as-is in any condition — triple-deckers, Victorians, multi-families — no repairs, no agent fees, close in 7-14 days. Hablamos español.',
    areaServed: [
      { '@type': 'City', name: 'Hartford', sameAs: 'https://en.wikipedia.org/wiki/Hartford,_Connecticut' },
      { '@type': 'City', name: 'West Hartford' },
      { '@type': 'City', name: 'East Hartford' },
      { '@type': 'City', name: 'New Britain' },
      { '@type': 'City', name: 'Manchester' },
      { '@type': 'City', name: 'Glastonbury' },
      { '@type': 'City', name: 'Wethersfield' },
      { '@type': 'City', name: 'Newington' },
      { '@type': 'City', name: 'Rocky Hill' },
      { '@type': 'City', name: 'Cromwell' },
      { '@type': 'City', name: 'Bristol' },
      { '@type': 'City', name: 'Enfield' },
      { '@type': 'City', name: 'Windsor' },
      { '@type': 'City', name: 'South Windsor' },
      { '@type': 'City', name: 'Farmington' },
      { '@type': 'County', name: 'Hartford County' },
    ],
  },
  wausau: {
    city: 'Wausau',
    region: 'WI',
    postalCode: '54401',
    lat: 44.9591,
    lng: -89.6301,
    description:
      'Cash home buyers serving Wausau WI and Marathon County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Wausau', sameAs: 'https://en.wikipedia.org/wiki/Wausau,_Wisconsin' },
      { '@type': 'City', name: 'Weston' },
      { '@type': 'City', name: 'Schofield' },
      { '@type': 'City', name: 'Rothschild' },
      { '@type': 'City', name: 'Rib Mountain' },
      { '@type': 'City', name: 'Marathon City' },
      { '@type': 'City', name: 'Mosinee' },
      { '@type': 'City', name: 'Kronenwetter' },
      { '@type': 'City', name: 'Edgar' },
      { '@type': 'City', name: 'Athens' },
      { '@type': 'City', name: 'Spencer' },
      { '@type': 'County', name: 'Marathon County' },
    ],
  },
  oshkosh: {
    city: 'Oshkosh',
    region: 'WI',
    postalCode: '54901',
    lat: 44.0247,
    lng: -88.5426,
    description:
      'Cash home buyers serving Oshkosh WI and Winnebago County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Oshkosh', sameAs: 'https://en.wikipedia.org/wiki/Oshkosh,_Wisconsin' },
      { '@type': 'City', name: 'Neenah' },
      { '@type': 'City', name: 'Menasha' },
      { '@type': 'City', name: 'Appleton' },
      { '@type': 'City', name: 'Omro' },
      { '@type': 'City', name: 'Winneconne' },
      { '@type': 'City', name: 'Black Wolf' },
      { '@type': 'City', name: 'Algoma' },
      { '@type': 'City', name: 'Larsen' },
      { '@type': 'City', name: 'Pickett' },
      { '@type': 'City', name: 'Eureka' },
      { '@type': 'City', name: 'Van Dyne' },
      { '@type': 'County', name: 'Winnebago County' },
    ],
  },
  // ── Batch 001 (authorized 2026-05-01) ──────────────────────────────────────
  appleton: {
    city: 'Appleton',
    region: 'WI',
    postalCode: '54911',
    lat: 44.2619,
    lng: -88.4154,
    description:
      'Cash home buyers serving Appleton WI and Outagamie County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Appleton', sameAs: 'https://en.wikipedia.org/wiki/Appleton,_Wisconsin' },
      { '@type': 'City', name: 'Grand Chute' },
      { '@type': 'City', name: 'Neenah' },
      { '@type': 'City', name: 'Menasha' },
      { '@type': 'City', name: 'Kaukauna' },
      { '@type': 'City', name: 'Combined Locks' },
      { '@type': 'City', name: 'Little Chute' },
      { '@type': 'City', name: 'Kimberly' },
      { '@type': 'City', name: 'Greenville' },
      { '@type': 'County', name: 'Outagamie County' },
      { '@type': 'County', name: 'Calumet County' },
    ],
  },
  canton: {
    city: 'Canton',
    region: 'OH',
    postalCode: '44702',
    lat: 40.7989,
    lng: -81.3784,
    description:
      'Cash home buyers serving Canton OH and Stark County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Canton', sameAs: 'https://en.wikipedia.org/wiki/Canton,_Ohio' },
      { '@type': 'City', name: 'Massillon' },
      { '@type': 'City', name: 'North Canton' },
      { '@type': 'City', name: 'Alliance' },
      { '@type': 'City', name: 'Louisville' },
      { '@type': 'City', name: 'Perry Township' },
      { '@type': 'City', name: 'Jackson Township' },
      { '@type': 'City', name: 'Plain Township' },
      { '@type': 'City', name: 'Minerva' },
      { '@type': 'County', name: 'Stark County' },
    ],
  },
  milwaukee: {
    city: 'Milwaukee',
    region: 'WI',
    postalCode: '53202',
    lat: 43.0389,
    lng: -87.9065,
    description:
      'Cash home buyers serving Milwaukee WI and Milwaukee County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Milwaukee', sameAs: 'https://en.wikipedia.org/wiki/Milwaukee' },
      { '@type': 'City', name: 'West Allis' },
      { '@type': 'City', name: 'Wauwatosa' },
      { '@type': 'City', name: 'Greenfield' },
      { '@type': 'City', name: 'South Milwaukee' },
      { '@type': 'City', name: 'Cudahy' },
      { '@type': 'City', name: 'Oak Creek' },
      { '@type': 'City', name: 'Glendale' },
      { '@type': 'City', name: 'Shorewood' },
      { '@type': 'City', name: 'Bay View' },
      { '@type': 'County', name: 'Milwaukee County' },
    ],
  },
  akron: {
    city: 'Akron',
    region: 'OH',
    postalCode: '44308',
    lat: 41.0814,
    lng: -81.5190,
    description:
      'Cash home buyers serving Akron OH and Summit County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Akron', sameAs: 'https://en.wikipedia.org/wiki/Akron,_Ohio' },
      { '@type': 'City', name: 'Barberton' },
      { '@type': 'City', name: 'Cuyahoga Falls' },
      { '@type': 'City', name: 'Green' },
      { '@type': 'City', name: 'Stow' },
      { '@type': 'City', name: 'Hudson' },
      { '@type': 'City', name: 'Tallmadge' },
      { '@type': 'City', name: 'Norton' },
      { '@type': 'City', name: 'Mogadore' },
      { '@type': 'County', name: 'Summit County' },
    ],
  },
  concord: {
    city: 'Concord',
    region: 'NH',
    postalCode: '03301',
    lat: 43.2081,
    lng: -71.5376,
    description:
      'Cash home buyers serving Concord NH and Merrimack County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Concord', sameAs: 'https://en.wikipedia.org/wiki/Concord,_New_Hampshire' },
      { '@type': 'City', name: 'Bow' },
      { '@type': 'City', name: 'Pembroke' },
      { '@type': 'City', name: 'Hooksett' },
      { '@type': 'City', name: 'Canterbury' },
      { '@type': 'City', name: 'Dunbarton' },
      { '@type': 'City', name: 'Hopkinton' },
      { '@type': 'City', name: 'Loudon' },
      { '@type': 'County', name: 'Merrimack County' },
    ],
  },
  // ── Batch 002 (authorized 2026-05-01) ──────────────────────────────────────
  norwich: {
    city: 'Norwich',
    region: 'CT',
    postalCode: '06360',
    lat: 41.5243,
    lng: -72.0759,
    description:
      'Cash home buyers serving Norwich CT and New London County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Norwich', sameAs: 'https://en.wikipedia.org/wiki/Norwich,_Connecticut' },
      { '@type': 'City', name: 'Montville' },
      { '@type': 'City', name: 'Bozrah' },
      { '@type': 'City', name: 'Lisbon' },
      { '@type': 'City', name: 'Franklin' },
      { '@type': 'City', name: 'Sprague' },
      { '@type': 'City', name: 'Voluntown' },
      { '@type': 'City', name: 'Griswold' },
      { '@type': 'City', name: 'Preston' },
      { '@type': 'County', name: 'New London County' },
    ],
  },
  northampton: {
    city: 'Northampton',
    region: 'MA',
    postalCode: '01060',
    lat: 42.3251,
    lng: -72.6412,
    description:
      'Cash home buyers serving Northampton MA and Hampshire County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Northampton', sameAs: 'https://en.wikipedia.org/wiki/Northampton,_Massachusetts' },
      { '@type': 'City', name: 'Florence' },
      { '@type': 'City', name: 'Leeds' },
      { '@type': 'City', name: 'Easthampton' },
      { '@type': 'City', name: 'Southampton' },
      { '@type': 'City', name: 'Amherst' },
      { '@type': 'City', name: 'Hadley' },
      { '@type': 'City', name: 'South Hadley' },
      { '@type': 'City', name: 'Hatfield' },
      { '@type': 'County', name: 'Hampshire County' },
    ],
  },
  eauClaire: {
    city: 'Eau Claire',
    region: 'WI',
    postalCode: '54701',
    lat: 44.8113,
    lng: -91.4985,
    description:
      'Cash home buyers serving Eau Claire WI and Eau Claire County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Eau Claire', sameAs: 'https://en.wikipedia.org/wiki/Eau_Claire,_Wisconsin' },
      { '@type': 'City', name: 'Altoona' },
      { '@type': 'City', name: 'Fall Creek' },
      { '@type': 'City', name: 'Osseo' },
      { '@type': 'City', name: 'Chippewa Falls' },
      { '@type': 'City', name: 'Elk Mound' },
      { '@type': 'City', name: 'Regis' },
      { '@type': 'City', name: 'Mondovi' },
      { '@type': 'County', name: 'Eau Claire County' },
      { '@type': 'County', name: 'Chippewa County' },
    ],
  },
  janesville: {
    city: 'Janesville',
    region: 'WI',
    postalCode: '53545',
    lat: 42.6828,
    lng: -89.0187,
    description:
      'Cash home buyers serving Janesville WI and Rock County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Janesville', sameAs: 'https://en.wikipedia.org/wiki/Janesville,_Wisconsin' },
      { '@type': 'City', name: 'Beloit' },
      { '@type': 'City', name: 'Edgerton' },
      { '@type': 'City', name: 'Milton' },
      { '@type': 'City', name: 'Evansville' },
      { '@type': 'City', name: 'Clinton' },
      { '@type': 'City', name: 'Whitewater' },
      { '@type': 'City', name: 'Afton' },
      { '@type': 'County', name: 'Rock County' },
    ],
  },
  columbus: {
    city: 'Columbus',
    region: 'OH',
    postalCode: '43215',
    lat: 39.9612,
    lng: -82.9988,
    description:
      'Cash home buyers serving Columbus OH and Franklin County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Columbus', sameAs: 'https://en.wikipedia.org/wiki/Columbus,_Ohio' },
      { '@type': 'City', name: 'Westerville' },
      { '@type': 'City', name: 'Dublin' },
      { '@type': 'City', name: 'Hilliard' },
      { '@type': 'City', name: 'Grove City' },
      { '@type': 'City', name: 'Gahanna' },
      { '@type': 'City', name: 'Worthington' },
      { '@type': 'City', name: 'Upper Arlington' },
      { '@type': 'City', name: 'Reynoldsburg' },
      { '@type': 'City', name: 'Pickerington' },
      { '@type': 'County', name: 'Franklin County' },
    ],
  },
  // ── Batch 004 (authorized 2026-05-01) ──────────────────────────────────────
  chicagoIL: {
    city: 'Chicago',
    region: 'IL',
    postalCode: '60601',
    lat: 41.8781,
    lng: -87.6298,
    description:
      'Cash home buyers in Chicago, IL. We buy houses as-is — bungalows, 2-flats, greystones — in any neighborhood, any condition. No repairs, no agent fees. We handle Cook County closing paperwork and the City of Chicago transfer tax.',
    areaServed: [
      { '@type': 'City', name: 'Chicago', sameAs: 'https://en.wikipedia.org/wiki/Chicago' },
      { '@type': 'County', name: 'Cook County' },
    ],
  },
  clevelandOH: {
    city: 'Cleveland',
    region: 'OH',
    postalCode: '44113',
    lat: 41.4993,
    lng: -81.6944,
    description:
      'Cash home buyers in Cleveland, OH and Cuyahoga County. We buy houses as-is — Colonials, bungalows, Cape Cods — any condition. No repairs, no agent fees. We handle the DTE 100 conveyance process and Cuyahoga County closing paperwork.',
    areaServed: [
      { '@type': 'City', name: 'Cleveland', sameAs: 'https://en.wikipedia.org/wiki/Cleveland' },
      { '@type': 'County', name: 'Cuyahoga County' },
    ],
  },
  toledoOH: {
    city: 'Toledo',
    region: 'OH',
    postalCode: '43604',
    lat: 41.6638,
    lng: -83.5552,
    description:
      'Local cash home buyers in Toledo, OH. No repairs, no agent fees, and no inspection-delay surprises. We handle Lucas County DTE 100 conveyance paperwork and coordinate deed recording with the Lucas County Recorder.',
    areaServed: [
      { '@type': 'City', name: 'Toledo', sameAs: 'https://en.wikipedia.org/wiki/Toledo,_Ohio' },
      { '@type': 'County', name: 'Lucas County' },
    ],
  },
  philadelphiaPA: {
    city: 'Philadelphia',
    region: 'PA',
    postalCode: '19103',
    lat: 39.9526,
    lng: -75.1652,
    description:
      'Cash home buyers in Philadelphia, PA. We buy row homes as-is — any neighborhood, any condition. No repairs, no agent fees. We handle the Philadelphia transfer tax with your title company and attorney.',
    areaServed: [
      { '@type': 'City', name: 'Philadelphia', sameAs: 'https://en.wikipedia.org/wiki/Philadelphia' },
      { '@type': 'County', name: 'Philadelphia County' },
    ],
  },
  cincinnatiOH: {
    city: 'Cincinnati',
    region: 'OH',
    postalCode: '45202',
    lat: 39.1031,
    lng: -84.5120,
    description:
      'Cash home buyers in Cincinnati, OH (Hamilton County, Ohio side). We buy houses as-is — Victorians, ranches, any condition. Hamilton County conveyance fee $3.00 per $1,000. No repairs, no agent fees.',
    areaServed: [
      { '@type': 'City', name: 'Cincinnati', sameAs: 'https://en.wikipedia.org/wiki/Cincinnati' },
      { '@type': 'County', name: 'Hamilton County' },
    ],
  },
  // ── Batch 003 (authorized 2026-05-01) ──────────────────────────────────────
  madison: {
    city: 'Madison',
    region: 'WI',
    postalCode: '53703',
    lat: 43.0731,
    lng: -89.4012,
    description:
      'Cash home buyers serving Madison WI and Dane County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Madison', sameAs: 'https://en.wikipedia.org/wiki/Madison,_Wisconsin' },
      { '@type': 'City', name: 'Fitchburg' },
      { '@type': 'City', name: 'Middleton' },
      { '@type': 'City', name: 'Sun Prairie' },
      { '@type': 'City', name: 'Monona' },
      { '@type': 'City', name: 'Verona' },
      { '@type': 'City', name: 'Stoughton' },
      { '@type': 'City', name: 'DeForest' },
      { '@type': 'City', name: 'McFarland' },
      { '@type': 'City', name: 'Cottage Grove' },
      { '@type': 'County', name: 'Dane County' },
    ],
  },
  chambersburg: {
    city: 'Chambersburg',
    region: 'PA',
    postalCode: '17201',
    lat: 39.9376,
    lng: -77.6611,
    description:
      'Cash home buyers serving Chambersburg PA and Franklin County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Chambersburg', sameAs: 'https://en.wikipedia.org/wiki/Chambersburg,_Pennsylvania' },
      { '@type': 'City', name: 'Waynesboro' },
      { '@type': 'City', name: 'Greencastle' },
      { '@type': 'City', name: 'Mercersburg' },
      { '@type': 'City', name: 'Shippensburg' },
      { '@type': 'City', name: 'Carlisle' },
      { '@type': 'City', name: 'Fayetteville' },
      { '@type': 'City', name: 'Guilford Township' },
      { '@type': 'County', name: 'Franklin County' },
      { '@type': 'County', name: 'Cumberland County' },
    ],
  },
  greenBay: {
    city: 'Green Bay',
    region: 'WI',
    postalCode: '54301',
    lat: 44.5133,
    lng: -88.0133,
    description:
      'Cash home buyers serving Green Bay WI and Brown County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Green Bay', sameAs: 'https://en.wikipedia.org/wiki/Green_Bay,_Wisconsin' },
      { '@type': 'City', name: 'Howard' },
      { '@type': 'City', name: 'Bellevue' },
      { '@type': 'City', name: 'Allouez' },
      { '@type': 'City', name: 'Ashwaubenon' },
      { '@type': 'City', name: 'De Pere' },
      { '@type': 'City', name: 'Suamico' },
      { '@type': 'City', name: 'Pulaski' },
      { '@type': 'City', name: 'Wrightstown' },
      { '@type': 'County', name: 'Brown County' },
    ],
  },
  waterbury: {
    city: 'Waterbury',
    region: 'CT',
    postalCode: '06702',
    lat: 41.5582,
    lng: -73.0515,
    description:
      'Cash home buyers serving Waterbury CT and New Haven County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Waterbury', sameAs: 'https://en.wikipedia.org/wiki/Waterbury,_Connecticut' },
      { '@type': 'City', name: 'Naugatuck' },
      { '@type': 'City', name: 'Wolcott' },
      { '@type': 'City', name: 'Cheshire' },
      { '@type': 'City', name: 'Prospect' },
      { '@type': 'City', name: 'Middlebury' },
      { '@type': 'City', name: 'Oakville' },
      { '@type': 'City', name: 'Ansonia' },
      { '@type': 'City', name: 'Shelton' },
      { '@type': 'County', name: 'New Haven County' },
    ],
  },
  binghamton: {
    city: 'Binghamton',
    region: 'NY',
    postalCode: '13901',
    lat: 42.0987,
    lng: -75.9179,
    description:
      'Cash home buyers serving Binghamton NY and Broome County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Binghamton', sameAs: 'https://en.wikipedia.org/wiki/Binghamton,_New_York' },
      { '@type': 'City', name: 'Vestal' },
      { '@type': 'City', name: 'Endicott' },
      { '@type': 'City', name: 'Johnson City' },
      { '@type': 'City', name: 'Kirkwood' },
      { '@type': 'City', name: 'Conklin' },
      { '@type': 'City', name: 'Port Dickinson' },
      { '@type': 'City', name: 'Chenango Bridge' },
      { '@type': 'County', name: 'Broome County' },
    ],
  },
  // ── Batch 005 (authorized 2026-05-03) ──────────────────────────────────────
  dayton: {
    city: 'Dayton',
    region: 'OH',
    postalCode: '45402',
    lat: 39.7589,
    lng: -84.1916,
    description:
      'Cash home buyers serving Dayton OH and Montgomery County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Dayton', sameAs: 'https://en.wikipedia.org/wiki/Dayton,_Ohio' },
      { '@type': 'City', name: 'Kettering' },
      { '@type': 'City', name: 'Beavercreek' },
      { '@type': 'City', name: 'Huber Heights' },
      { '@type': 'City', name: 'Fairborn' },
      { '@type': 'City', name: 'Centerville' },
      { '@type': 'City', name: 'Miamisburg' },
      { '@type': 'City', name: 'Springboro' },
      { '@type': 'City', name: 'Trotwood' },
      { '@type': 'City', name: 'Vandalia' },
      { '@type': 'City', name: 'Riverside' },
      { '@type': 'City', name: 'West Carrollton' },
      { '@type': 'City', name: 'Xenia' },
      { '@type': 'County', name: 'Montgomery County' },
      { '@type': 'County', name: 'Greene County' },
    ],
  },
  richmond: {
    city: 'Richmond',
    region: 'VA',
    postalCode: '23219',
    lat: 37.5407,
    lng: -77.4360,
    description:
      'Cash home buyers serving Richmond VA and the Greater Richmond area. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Richmond', sameAs: 'https://en.wikipedia.org/wiki/Richmond,_Virginia' },
      { '@type': 'City', name: 'Henrico' },
      { '@type': 'City', name: 'Chesterfield' },
      { '@type': 'City', name: 'Chester' },
      { '@type': 'City', name: 'Midlothian' },
      { '@type': 'City', name: 'Mechanicsville' },
      { '@type': 'City', name: 'Glen Allen' },
      { '@type': 'City', name: 'Short Pump' },
      { '@type': 'City', name: 'Highland Springs' },
      { '@type': 'City', name: 'Colonial Heights' },
      { '@type': 'City', name: 'Petersburg' },
      { '@type': 'City', name: 'Hopewell' },
      { '@type': 'County', name: 'Henrico County' },
      { '@type': 'County', name: 'Chesterfield County' },
    ],
  },
  stLouis: {
    city: 'St. Louis',
    region: 'MO',
    postalCode: '63103',
    lat: 38.6270,
    lng: -90.1994,
    description:
      'Cash home buyers serving St. Louis City, MO. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days. St. Louis City is an independent city separate from St. Louis County.',
    areaServed: [
      { '@type': 'City', name: 'St. Louis', sameAs: 'https://en.wikipedia.org/wiki/St._Louis' },
      { '@type': 'City', name: 'Maplewood' },
      { '@type': 'City', name: 'Webster Groves' },
      { '@type': 'City', name: 'Kirkwood' },
      { '@type': 'City', name: 'Ferguson' },
      { '@type': 'City', name: 'University City' },
      { '@type': 'City', name: 'Clayton' },
      { '@type': 'City', name: 'Florissant' },
      { '@type': 'City', name: 'Overland' },
      { '@type': 'City', name: 'Affton' },
      { '@type': 'City', name: 'Mehlville' },
      { '@type': 'AdministrativeArea', name: 'City of St. Louis' },
    ],
  },
  scranton: {
    city: 'Scranton',
    region: 'PA',
    postalCode: '18503',
    lat: 41.4090,
    lng: -75.6624,
    description:
      'Cash home buyers serving Scranton PA and Lackawanna County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Scranton', sameAs: 'https://en.wikipedia.org/wiki/Scranton,_Pennsylvania' },
      { '@type': 'City', name: 'Dickson City' },
      { '@type': 'City', name: 'Dunmore' },
      { '@type': 'City', name: 'Old Forge' },
      { '@type': 'City', name: 'Taylor' },
      { '@type': 'City', name: 'Moosic' },
      { '@type': 'City', name: 'Jessup' },
      { '@type': 'City', name: 'Carbondale' },
      { '@type': 'City', name: 'Olyphant' },
      { '@type': 'City', name: 'Clarks Summit' },
      { '@type': 'City', name: 'Archbald' },
      { '@type': 'City', name: 'Wilkes-Barre' },
      { '@type': 'City', name: 'Hazleton' },
      { '@type': 'County', name: 'Lackawanna County' },
      { '@type': 'County', name: 'Luzerne County' },
    ],
  },
  fortWayne: {
    city: 'Fort Wayne',
    region: 'IN',
    postalCode: '46802',
    lat: 41.0793,
    lng: -85.1394,
    description:
      'Cash home buyers serving Fort Wayne IN and Allen County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Fort Wayne', sameAs: 'https://en.wikipedia.org/wiki/Fort_Wayne,_Indiana' },
      { '@type': 'City', name: 'New Haven' },
      { '@type': 'City', name: 'Waynedale' },
      { '@type': 'City', name: 'Huntertown' },
      { '@type': 'City', name: 'Grabill' },
      { '@type': 'City', name: 'Leo-Cedarville' },
      { '@type': 'City', name: 'Woodburn' },
      { '@type': 'City', name: 'Garrett' },
      { '@type': 'City', name: 'Bluffton' },
      { '@type': 'City', name: 'Columbia City' },
      { '@type': 'City', name: 'Auburn' },
      { '@type': 'County', name: 'Allen County' },
      { '@type': 'County', name: 'DeKalb County' },
      { '@type': 'County', name: 'Whitley County' },
    ],
  },
  lafayette: {
    city: 'Lafayette',
    region: 'IN',
    postalCode: '47901',
    lat: 40.4167,
    lng: -86.8753,
    description:
      'Cash home buyers serving Lafayette IN and Tippecanoe County. We buy houses as-is in any condition - no repairs, no agent fees, close in 7-14 days.',
    areaServed: [
      { '@type': 'City', name: 'Lafayette', sameAs: 'https://en.wikipedia.org/wiki/Lafayette,_Indiana' },
      { '@type': 'City', name: 'West Lafayette' },
      { '@type': 'City', name: 'Battle Ground' },
      { '@type': 'City', name: 'Dayton' },
      { '@type': 'City', name: 'Shadeland' },
      { '@type': 'City', name: 'Otterbein' },
      { '@type': 'City', name: 'Montmorenci' },
      { '@type': 'County', name: 'Tippecanoe County' },
      { '@type': 'County', name: 'Benton County' },
      { '@type': 'County', name: 'Carroll County' },
    ],
  },
};

export function localBusinessSchemaFor(cityKey: 'chicagoIL' | 'clevelandOH' | 'toledoOH' | 'philadelphiaPA' | 'cincinnatiOH' | 'harrisburg' | 'allentown' | 'bethlehem' | 'kingOfPrussia' | 'reading' | 'stateCollege' | 'erie' | 'lancaster' | 'york' | 'wilmington' | 'youngstown' | 'springfield' | 'kenosha' | 'manchester' | 'bridgeport' | 'worcester' | 'rochester' | 'racineMountPleasant' | 'springfieldIL' | 'rockfordIL' | 'newHaven' | 'oshkosh' | 'peoriaIL' | 'bloomingtonIL' | 'champaignUrbanaIL' | 'boston' | 'hartford' | 'wausau' | 'appleton' | 'canton' | 'milwaukee' | 'akron' | 'concord' | 'norwich' | 'northampton' | 'eauClaire' | 'janesville' | 'columbus' | 'madison' | 'chambersburg' | 'greenBay' | 'waterbury' | 'binghamton' | 'dayton' | 'richmond' | 'stLouis' | 'scranton' | 'fortWayne' | 'lafayette') {
  const cfg = CITY_CONFIGS[cityKey];
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    '@id': `${SITE_URL}/#business-${cityKey}`,
    name: 'USA Home Buyers',
    description: cfg.description,
    url: SITE_URL,
    telephone: PHONE,
    priceRange: '$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: cfg.city,
      addressRegion: cfg.region,
      postalCode: cfg.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cfg.lat,
      longitude: cfg.lng,
    },
    areaServed: cfg.areaServed,
    dateModified: '2026-04-01',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cash Home Buying Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cash Home Purchase',
            description:
              'We buy houses for cash in any condition, any situation, closing in 7-14 days.',
          },
        },
      ],
    },
  };
}

/** Pre-built Youngstown LocalBusiness schema */
export const youngstownLocalBusinessSchema = localBusinessSchemaFor('youngstown');

/** Pre-built Springfield MA LocalBusiness schema */
export const springfieldLocalBusinessSchema = localBusinessSchemaFor('springfield');

/** Pre-built Kenosha WI LocalBusiness schema */
export const kenoshLocalBusinessSchema = localBusinessSchemaFor('kenosha');
export const kenosaLocalBusinessSchema = localBusinessSchemaFor('kenosha');
export const kenoshWILocalBusinessSchema = localBusinessSchemaFor('kenosha');

/** Pre-built Manchester NH LocalBusiness schema */
export const manchesterLocalBusinessSchema = localBusinessSchemaFor('manchester');

/** Pre-built Bridgeport CT LocalBusiness schema */
export const bridgeportLocalBusinessSchema = localBusinessSchemaFor('bridgeport');

/** Pre-built Worcester MA LocalBusiness schema */
export const worcesterLocalBusinessSchema = localBusinessSchemaFor('worcester');

/** Pre-built Boston MA LocalBusiness schema */
export const bostonLocalBusinessSchema = localBusinessSchemaFor('boston');
export const hartfordLocalBusinessSchema = localBusinessSchemaFor('hartford');
export const wausauLocalBusinessSchema = localBusinessSchemaFor('wausau');

/** Pre-built Rochester NY LocalBusiness schema */
export const rochesterLocalBusinessSchema = localBusinessSchemaFor('rochester');

/** Pre-built Racine-Mount Pleasant WI LocalBusiness schema */
export const racineMountPleasantLocalBusinessSchema = localBusinessSchemaFor('racineMountPleasant');
export const racineWILocalBusinessSchema = localBusinessSchemaFor('racineMountPleasant');

/** Pre-built Springfield IL LocalBusiness schema */
export const springfieldILLocalBusinessSchema = localBusinessSchemaFor('springfieldIL');

/** Pre-built Rockford IL LocalBusiness schema */
export const rockfordILLocalBusinessSchema = localBusinessSchemaFor('rockfordIL');

/** Pre-built New Haven CT LocalBusiness schema */
export const newHavenLocalBusinessSchema = localBusinessSchemaFor('newHaven');

/** Pre-built Oshkosh WI LocalBusiness schema */
export const oshkoshLocalBusinessSchema = localBusinessSchemaFor('oshkosh');
export const oshkoshWILocalBusinessSchema = localBusinessSchemaFor('oshkosh');

/** Pre-built Peoria IL LocalBusiness schema */
export const peoriaILLocalBusinessSchema = localBusinessSchemaFor('peoriaIL');

/** Pre-built Bloomington IL LocalBusiness schema */
export const bloomingtonILLocalBusinessSchema = localBusinessSchemaFor('bloomingtonIL');

/** Pre-built Champaign-Urbana IL LocalBusiness schema */
export const champaignUrbanaILLocalBusinessSchema = localBusinessSchemaFor('champaignUrbanaIL');

export const youngstownFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can I sell my house for cash in Youngstown OH?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USA Home Buyers can close in as few as 7 days in Youngstown OH. We send a written cash offer within 24 hours of learning about your property. According to Redfin, Youngstown homes spend a median of 70 days on market when listed. A cash sale eliminates showings, inspections, and bank approval entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will you pay for my Youngstown OH house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For average-condition Youngstown properties, cash offers typically land around 70–80% of fair market value before repair costs, property condition, title issues, holding costs, and risk adjustments specific to the home. According to Redfin, the Youngstown median sale price is $129,200 (February 2026). We cover all closing costs including Ohio\u2019s conveyance fee \u2014 nothing comes out of your offer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the conveyance fee when selling a house in Youngstown OH?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ohio uses a conveyance fee instead of a transfer tax. In Mahoning County the total is $4.00 per $1,000 of sale price \u2014 $1/1,000 state (ORC \u00a7 319.202) plus $3/1,000 county permissive (ORC \u00a7 322.02) \u2014 plus a $0.50 per-parcel transfer fee. The seller pays. On a $129,200 sale, the conveyance fee is about $517. Source: Mahoning County Auditor (auditor.mahoningcountyoh.gov).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does foreclosure work in Ohio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ohio is a judicial foreclosure state. Every foreclosure must go through the Mahoning County Court of Common Pleas. The process runs 6\u201324 months from first missed payment to confirmation of the sheriff\u2019s sale. Ohio requires mediation referral for residential foreclosures (HB 130). Source: Ohio Legal Help (ohiolegalhelp.org/foreclosure_timeline).',
      },
    },
  ],
};

export const youngstownHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sell Your House Fast for Cash in Youngstown OH',
  description: 'Step-by-step process for selling your Youngstown home for cash in Mahoning County, Ohio',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Submit Your Property Information',
      text: 'Fill out our 2-minute form with your Youngstown property address, condition, and your timeline.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Receive Your Written Cash Offer',
      text: 'We review your property and send a written cash offer within 24 hours \u2014 no obligation, no pressure.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Your Closing Date',
      text: 'If you accept, pick any closing date \u2014 as fast as 7 days or whenever works for your schedule.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Get Paid at Closing',
      text: 'Sign at the Mahoning County title company, walk away with your cash. No repairs or cleanout required.',
      position: 4,
    },
  ],
};

/** Pre-built Wilmington LocalBusiness schema */
export const wilmingtonLocalBusinessSchema = localBusinessSchemaFor('wilmington');

export const wilmingtonFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can I sell my house for cash in Wilmington DE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USA Home Buyers can close in as few as 7 days in Wilmington DE. We send a written cash offer within 24 hours of learning about your property. According to Redfin (Wilmington city, Mar 2026), Wilmington homes spend a median of 61 sold days on market when listed traditionally. A cash sale eliminates showings, inspections, and the bank approval wait entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will you pay for my Wilmington DE house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For average-condition Wilmington city properties, cash offers typically land around 70–80% of fair market value before repair costs, property condition, title issues, holding costs, and risk adjustments specific to the home. According to Redfin, Wilmington median sale price is $251,200 (Redfin Wilmington city, Mar 2026, +12.1% YoY). We cover all closing costs including Delaware\u2019s 4% transfer tax \u2014 nothing comes out of your offer number.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the transfer tax when selling a house in Wilmington DE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wilmington DE has a 4% total real estate transfer tax \u2014 2.5% Delaware state tax plus 1.5% City of Wilmington local tax. By convention this is split 50/50 between buyer and seller, with each paying 2%. On a $251,200 home the total is $10,048. When you sell to USA Home Buyers, we cover all closing costs. Source: Delaware Division of Revenue; New Castle County (newcastlede.gov).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does foreclosure work in Delaware?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Delaware is a judicial foreclosure state. Lenders must file a complaint in New Castle County Superior Court. The typical timeline from first missed payment to sheriff\u2019s sale is 170\u2013210 days by statute, though 6\u20139 months is common in practice. Delaware has no post-sale right of redemption. Source: amerinotexchange.com; Nolo Delaware Foreclosure Laws.',
      },
    },
  ],
};

export const wilmingtonHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sell Your House Fast for Cash in Wilmington DE',
  description: 'Step-by-step process for selling your Wilmington home for cash in New Castle County',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Submit Your Property Information',
      text: 'Fill out our 2-minute form with your Wilmington property address, condition, and your timeline.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Receive Your Written Cash Offer',
      text: 'We review your property and send a written cash offer within 24 hours \u2014 no obligation, no pressure.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Your Closing Date',
      text: 'If you accept, pick any closing date \u2014 as fast as 7 days or whenever works for your schedule.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Get Paid at Closing',
      text: 'Sign at the New Castle County title company, walk away with your cash. No repairs or cleanout required.',
      position: 4,
    },
  ],
};

/** Pre-built Lancaster LocalBusiness schema */
export const lancasterLocalBusinessSchema = localBusinessSchemaFor('lancaster');

export const lancasterFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can I sell my house for cash in Lancaster PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USA Home Buyers can close in as few as 7 days in Lancaster PA. We send a written cash offer within 24 hours of learning about your property. According to Redfin, Lancaster City homes go pending in about 19 days on the open market — and that path requires showings, inspections, and lender approval. With a cash sale, there is no bank, no contingency wait, no mortgage to clear.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will you pay for my Lancaster PA house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash offers for Lancaster homes typically range from 70–80% of fair market value. According to Zillow, the Lancaster City median home value is $332,965 (February 2026). A typical cash offer on a Cabbage Hill or West End rowhouse near the $233,000 neighborhood median ranges from $163,000–$186,000. We cover all closing costs — no agent commissions, no fees deducted from your number.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the transfer tax when selling a house in Lancaster PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lancaster PA has a standard 2% total real estate transfer tax — 1% Commonwealth of Pennsylvania plus 1% local (City of Lancaster and School District of Lancaster). By convention, buyer and seller each pay half — 1% each. On a $235,000 home, the total tax is $4,700. When you sell to USA Home Buyers, we cover all closing costs. Source: PA Department of Revenue; ALT Title PA Transfer Tax Deviations List (July 2025).',
      },
    },
    {
      '@type': 'Question',
      name: '\u00bfCompran casas en Lancaster PA? / Do you work with Spanish-speaking sellers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'S\u00ed, hablamos espa\u00f1ol. According to the U.S. Census Bureau ACS, 40.6% of Lancaster City residents identify as Hispanic or Latino — the highest of any market we serve. Call us in English or Spanish. We understand the neighborhoods, the housing stock, and the process.',
      },
    },
  ],
};

export const lancasterHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sell Your House Fast for Cash in Lancaster PA',
  description: 'Step-by-step process for selling your Lancaster home for cash in Lancaster County',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Submit Your Property Information',
      text: 'Fill out our 2-minute form with your Lancaster property address, condition, and your timeline.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Receive Your Written Cash Offer',
      text: 'We review your property and send a written cash offer within 24 hours — no obligation, no pressure.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Your Closing Date',
      text: 'If you accept, pick any closing date — as fast as 7 days or whenever works for your schedule.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Get Paid at Closing',
      text: 'Sign at the Lancaster County title company, walk away with your cash. No repairs or cleanout required.',
      position: 4,
    },
  ],
};

/** Pre-built York LocalBusiness schema */
export const yorkLocalBusinessSchema = localBusinessSchemaFor('york');

export const yorkFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can I sell my house for cash in York PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USA Home Buyers can close in as few as 7 days in York PA. We send a written cash offer within 24 hours of learning about your property. According to Redfin, York City homes sell in about 31 days on the open market — but that path requires showings, inspections, and lender wait time. With a cash sale, there is no bank involved.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will you pay for my York PA house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For average-condition York properties, cash offers typically land around 70–80% of fair market value before repair costs, property condition, title issues, holding costs, and risk adjustments specific to the home. According to Redfin city housing-market data (March 2026), the York City median sale price is $172,500, with Northeast York properties often under $120,000. We cover all closing costs — no agent commissions, no fees deducted from your number.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the transfer tax when selling a house in York PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'York PA has a 2% total real estate transfer tax — 1% Pennsylvania state tax plus 1% local (0.5% City of York + 0.5% York City School District per Article 355 of York City Ordinances). By convention this is split 50/50. On a $165,000 home, the total is $3,300. When you sell to USA Home Buyers, we cover all closing costs. Source: PA Department of Revenue (pa.gov); City of York (yorkcity.org).',
      },
    },
    {
      '@type': 'Question',
      name: '\u00bfCompran casas en York PA? / Do you work with Spanish-speaking sellers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'S\u00ed, hablamos espa\u00f1ol. According to the U.S. Census Bureau ACS, 36.6% of York City residents are Hispanic or Latino. We serve the York community in both English and Spanish. Call us, fill out the form, or stop by. Entendemos el vecindario y el proceso.',
      },
    },
  ],
};

export const yorkHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sell Your House Fast for Cash in York PA',
  description: 'Step-by-step process for selling your York home for cash in York County',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Submit Your Property Information',
      text: 'Fill out our 2-minute form with your York property address, condition, and your timeline.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Receive Your Written Cash Offer',
      text: 'We review your property and send a written cash offer within 24 hours — no obligation, no pressure.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Your Closing Date',
      text: 'If you accept, pick any closing date — as fast as 7 days or whenever works for your schedule.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Get Paid at Closing',
      text: 'Sign at the York County title company, walk away with your cash. No repairs or cleanout required.',
      position: 4,
    },
  ],
};

/** Pre-built Bethlehem LocalBusiness schema */
export const bethlehemLocalBusinessSchema = localBusinessSchemaFor('bethlehem');

export const bethlehemFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can I sell my house for cash in Bethlehem PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USA Home Buyers can close in as few as 7 days in Bethlehem PA. We send a written cash offer within 24 hours of learning about your property. According to Redfin, Bethlehem homes sell in about 10 days on the open market — but that requires showings, repairs, and lender wait time. With us, there is no waiting on bank approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will you pay for my Bethlehem PA house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash offers for Bethlehem homes typically range from 70-80% of fair market value. According to Redfin, the median sale price in Bethlehem is $320,000 (February 2026), so a typical cash offer ranges from $224,000-$256,000. South Side row homes near $245,000 median yield offers of approximately $172,000-$196,000. We cover all closing costs — no commissions, no fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the transfer tax when selling a house in Bethlehem PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bethlehem PA has a standard 2% total real estate transfer tax — 1% Pennsylvania state tax plus 1% City of Bethlehem local tax. By convention this is split 50/50 between buyer and seller. On a $320,000 home, the total tax is $6,400, with seller paying $3,200. When you sell to USA Home Buyers, we cover all closing costs. Source: City of Bethlehem Ordinance Article 335.',
      },
    },
    {
      '@type': 'Question',
      name: '\u00bfCompran casas en Bethlehem PA? / Do you buy houses from Spanish-speaking sellers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'S\u00ed, hablamos espa\u00f1ol. We serve Bethlehem\'s Hispanic community, which represents 31.3% of the city population. Call us to discuss your property in English or Spanish. We understand the South Side neighborhoods and work with sellers from all backgrounds.',
      },
    },
  ],
};

export const bethlehemHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sell Your House Fast for Cash in Bethlehem PA',
  description: 'Step-by-step process for selling your Bethlehem home for cash in Northampton County',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Submit Your Property Information',
      text: 'Fill out our 2-minute form with basic details about your Bethlehem property — address, condition, your timeline.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Receive Your Written Cash Offer',
      text: 'We review your property and send a written cash offer within 24 hours — no obligation, no pressure.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Your Closing Date',
      text: 'If you accept, pick any closing date — as fast as 7 days or on whatever schedule works for you.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Get Paid at Closing',
      text: 'Sign at the Northampton County title company, walk away with your cash. No repairs, no clean-out required.',
      position: 4,
    },
  ],
};

/** Pre-built Harrisburg LocalBusiness schema (alias for backward compat) */
export const harrisburgLocalBusinessSchema = localBusinessSchemaFor('harrisburg');

/** Pre-built Reading LocalBusiness schema */
export const readingLocalBusinessSchema = localBusinessSchemaFor('reading');

/** Pre-built Allentown LocalBusiness schema */
export const allentownLocalBusinessSchema = localBusinessSchemaFor('allentown');

/** Pre-built King of Prussia LocalBusiness schema */
export const kingOfPrussiaLocalBusinessSchema = localBusinessSchemaFor('kingOfPrussia');

/** Pre-built State College LocalBusiness schema */
export const stateCollegeLocalBusinessSchema = localBusinessSchemaFor('stateCollege');

/** Pre-built Erie LocalBusiness schema */
export const erieLocalBusinessSchema = localBusinessSchemaFor('erie');

// ── Batch 001 exports (authorized 2026-05-01) ──────────────────────────────────
/** Pre-built Appleton WI LocalBusiness schema */
export const appletonLocalBusinessSchema = localBusinessSchemaFor('appleton');
export const appletonWILocalBusinessSchema = localBusinessSchemaFor('appleton');

/** Pre-built Canton OH LocalBusiness schema */
export const cantonLocalBusinessSchema = localBusinessSchemaFor('canton');
export const cantonOHLocalBusinessSchema = localBusinessSchemaFor('canton');

/** Pre-built Milwaukee WI LocalBusiness schema */
export const milwaukeeLocalBusinessSchema = localBusinessSchemaFor('milwaukee');
export const milwaukeeWILocalBusinessSchema = localBusinessSchemaFor('milwaukee');

/** Pre-built Akron OH LocalBusiness schema */
export const akronLocalBusinessSchema = localBusinessSchemaFor('akron');
export const akronOHLocalBusinessSchema = localBusinessSchemaFor('akron');

/** Pre-built Concord NH LocalBusiness schema */
export const concordLocalBusinessSchema = localBusinessSchemaFor('concord');
export const concordNHLocalBusinessSchema = localBusinessSchemaFor('concord');

// ── Batch 002 exports (authorized 2026-05-01) ──────────────────────────────────
/** Pre-built Norwich CT LocalBusiness schema */
export const norwichLocalBusinessSchema = localBusinessSchemaFor('norwich');
export const norwichCTLocalBusinessSchema = localBusinessSchemaFor('norwich');

/** Pre-built Northampton MA LocalBusiness schema */
export const northamptonLocalBusinessSchema = localBusinessSchemaFor('northampton');
export const northamptonMALocalBusinessSchema = localBusinessSchemaFor('northampton');

/** Pre-built Eau Claire WI LocalBusiness schema */
export const eauClaireLocalBusinessSchema = localBusinessSchemaFor('eauClaire');
export const eauClaireWILocalBusinessSchema = localBusinessSchemaFor('eauClaire');

/** Pre-built Janesville WI LocalBusiness schema */
export const janesvilleLocalBusinessSchema = localBusinessSchemaFor('janesville');
export const janesvilleWILocalBusinessSchema = localBusinessSchemaFor('janesville');

/** Pre-built Columbus OH LocalBusiness schema */
export const columbusLocalBusinessSchema = localBusinessSchemaFor('columbus');
export const columbusOHLocalBusinessSchema = localBusinessSchemaFor('columbus');

// ── Batch 005 exports (authorized 2026-05-03) ──────────────────────────────────
/** Pre-built Dayton OH LocalBusiness schema */
export const daytonLocalBusinessSchema = localBusinessSchemaFor('dayton');
export const daytonOHLocalBusinessSchema = localBusinessSchemaFor('dayton');

/** Pre-built Richmond VA LocalBusiness schema */
export const richmondLocalBusinessSchema = localBusinessSchemaFor('richmond');
export const richmondVALocalBusinessSchema = localBusinessSchemaFor('richmond');

/** Pre-built St. Louis MO LocalBusiness schema */
export const stLouisLocalBusinessSchema = localBusinessSchemaFor('stLouis');
export const stLouisMOLocalBusinessSchema = localBusinessSchemaFor('stLouis');

/** Pre-built Scranton PA LocalBusiness schema */
export const scrantonLocalBusinessSchema = localBusinessSchemaFor('scranton');
export const scrantonPALocalBusinessSchema = localBusinessSchemaFor('scranton');

/** Pre-built Fort Wayne IN LocalBusiness schema */
export const fortWayneLocalBusinessSchema = localBusinessSchemaFor('fortWayne');
export const fortWayneINLocalBusinessSchema = localBusinessSchemaFor('fortWayne');

/** Pre-built Lafayette IN LocalBusiness schema */
export const lafayetteLocalBusinessSchema = localBusinessSchemaFor('lafayette');
export const lafayetteINLocalBusinessSchema = localBusinessSchemaFor('lafayette');

// ── Batch 004 exports (authorized 2026-05-01) ──────────────────────────────────────
/** Pre-built Chicago IL LocalBusiness schema */
export const chicagoILLocalBusinessSchema = localBusinessSchemaFor('chicagoIL');

/** Pre-built Cleveland OH LocalBusiness schema */
export const clevelandOHLocalBusinessSchema = localBusinessSchemaFor('clevelandOH');

/** Pre-built Toledo OH LocalBusiness schema */
export const toledoOHLocalBusinessSchema = localBusinessSchemaFor('toledoOH');

/** Pre-built Philadelphia PA LocalBusiness schema */
export const philadelphiaPALocalBusinessSchema = localBusinessSchemaFor('philadelphiaPA');

/** Pre-built Cincinnati OH LocalBusiness schema */
export const cincinnatiOHLocalBusinessSchema = localBusinessSchemaFor('cincinnatiOH');

// ── Batch 003 exports (authorized 2026-05-01) ──────────────────────────────────
/** Pre-built Madison WI LocalBusiness schema */
export const madisonLocalBusinessSchema = localBusinessSchemaFor('madison');
export const madisonWILocalBusinessSchema = localBusinessSchemaFor('madison');

/** Pre-built Chambersburg PA LocalBusiness schema */
export const chambersburgLocalBusinessSchema = localBusinessSchemaFor('chambersburg');
export const chambersburgPALocalBusinessSchema = localBusinessSchemaFor('chambersburg');

/** Pre-built Green Bay WI LocalBusiness schema */
export const greenBayLocalBusinessSchema = localBusinessSchemaFor('greenBay');
export const greenBayWILocalBusinessSchema = localBusinessSchemaFor('greenBay');

/** Pre-built Waterbury CT LocalBusiness schema */
export const waterburyLocalBusinessSchema = localBusinessSchemaFor('waterbury');
export const waterburyCTLocalBusinessSchema = localBusinessSchemaFor('waterbury');

/** Pre-built Binghamton NY LocalBusiness schema */
export const binghamtonLocalBusinessSchema = localBusinessSchemaFor('binghamton');
export const binghamtonNYLocalBusinessSchema = localBusinessSchemaFor('binghamton');

export const erieFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can I sell my house for cash in Erie PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USA Home Buyers can close in as few as 7 days in Erie PA. We make a written cash offer within 24 hours of learning about your property. The typical timeline from first contact to cash in hand is 7-14 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will you pay for my Erie PA house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cash offers for Erie homes typically range from 60-75% of after-repair value. Erie's urban core median is around $115,000-$120,000 (DataUSA 2024), so a typical cash offer for an urban Erie home ranges from $70,000-$90,000. Suburban Millcreek homes at $250,000-$300,000 can yield offers of $175,000-$225,000. We cover all closing costs — no agent commissions, no fees.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you buy houses in Erie PA in any condition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Erie's housing stock is 77% pre-1970 — old electrical, aging plumbing, deferred winter maintenance, and lake-effect snow damage are common. We buy in any condition. No repairs, no cleaning, no staging.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the transfer tax when selling a house in Erie PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erie PA has a standard Pennsylvania transfer tax of 2% total — 1% PA state tax plus 1% local tax. By convention, this is split 50/50 between buyer and seller, with each paying 1%. When you sell to USA Home Buyers, we cover all closing costs. Source: PA Department of Revenue, pa.gov.',
      },
    },
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'USA Home Buyers',
  legalName: 'USA Home Buyers LLC',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 400,
    height: 100,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Harrisburg',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
};

/** @deprecated Use harrisburgLocalBusinessSchema or localBusinessSchemaFor('harrisburg') */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'RealEstateAgent'],
  '@id': `${SITE_URL}/#business`,
  name: 'USA Home Buyers',
  description:
    'Cash home buyers serving Harrisburg PA and Central Pennsylvania. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
  url: SITE_URL,
  telephone: PHONE,
  priceRange: '$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Harrisburg',
    addressRegion: 'PA',
    postalCode: '17101',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.2732,
    longitude: -76.8867,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Harrisburg',
      sameAs: 'https://en.wikipedia.org/wiki/Harrisburg,_Pennsylvania',
    },
    { '@type': 'City', name: 'Camp Hill' },
    { '@type': 'City', name: 'Mechanicsburg' },
    { '@type': 'City', name: 'Carlisle' },
    { '@type': 'City', name: 'Lemoyne' },
    { '@type': 'City', name: 'Steelton' },
    { '@type': 'City', name: 'Hershey' },
    { '@type': 'County', name: 'Dauphin County' },
    { '@type': 'County', name: 'Cumberland County' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cash Home Buying Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cash Home Purchase',
          description:
            'We buy houses for cash in any condition, any situation, closing in 7-14 days.',
        },
      },
    ],
  },
};

export const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sell Your House Fast for Cash in Harrisburg PA',
  description: 'Step-by-step process for selling your Harrisburg home for cash',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Submit Your Property Information',
      text: 'Fill out our 2-minute form with basic details about your Harrisburg property.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Receive Your Cash Offer',
      text: 'We review your property and send a written cash offer within 24 hours — no obligation.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Your Closing Date',
      text: 'If you accept, pick any closing date you want — as fast as 7 days.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Get Paid',
      text: 'Show up to closing, sign the paperwork, and walk away with your cash.',
      position: 4,
    },
  ],
};

export const lafayetteHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sell Your House Fast for Cash in Lafayette IN',
  description: 'Step-by-step process for selling your Lafayette home for cash',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Submit Your Property Information',
      text: 'Fill out our 2-minute form with basic details about your Lafayette property.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Receive Your Cash Offer',
      text: 'We review your property and send a written cash offer within 24 hours.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Your Closing Date',
      text: 'If you accept, pick any closing date that works for you.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Get Paid',
      text: 'Show up to closing, sign the paperwork, and walk away with your cash.',
      position: 4,
    },
  ],
};

export const erieHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sell Your House Fast for Cash in Erie PA',
  description: 'Step-by-step process for selling your Erie home for cash',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Submit Your Property Information',
      text: 'Fill out our 2-minute form with basic details about your Erie property.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Receive Your Cash Offer',
      text: 'We review your property and send a written cash offer within 24 hours — no obligation.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Your Closing Date',
      text: 'If you accept, pick any closing date you want — as fast as 7 days.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Get Paid',
      text: 'Show up to closing, sign the paperwork, and walk away with your cash.',
      position: 4,
    },
  ],
};

export const readingFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can I sell my house for cash in Reading PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USA Home Buyers can close in as few as 7 days in Reading PA. We make a written cash offer within 24 hours of learning about your property. The typical timeline from first contact to cash in hand is 7-14 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the transfer tax when selling a house in Reading PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reading PA has one of the highest real estate transfer taxes in Pennsylvania — 5% total (4% City of Reading local tax plus 1% PA state tax). On a $185,000 home, that is $9,250. By comparison, most Berks County municipalities outside Reading pay only 2% total. When you sell to USA Home Buyers, we cover all closing costs including transfer taxes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you buy houses in Reading PA in any condition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. We buy row homes, twins, and single-family houses throughout Reading PA and Berks County in any condition — no repairs, no cleaning, no staging required. Reading's housing stock is predominantly pre-1939 brick construction with lead paint, aging systems, and deferred maintenance. That is exactly the kind of property we buy.",
      },
    },
    {
      '@type': 'Question',
      name: '¿Compran casas en Reading PA? / Do you buy houses in Spanish in Reading PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, hablamos español. We are bilingual and serve Reading\'s majority-Hispanic community. Call us to discuss your property in English or Spanish — (888) 274-5006.',
      },
    },
  ],
};

export const harrisburgFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can I sell my house for cash in Harrisburg PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USA Home Buyers can close in as few as 7 days. We make our cash offer within 24 hours of learning about your property. The typical timeline from first contact to cash in hand is 7-14 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will you pay for my Harrisburg house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash offers for Harrisburg homes typically range from 70-80% of fair market value. For a home valued at $200,000, expect a cash offer of $140,000-$160,000. We cover all closing costs, and there are no agent commissions or fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to make repairs before selling to USA Home Buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We buy houses in any condition — no repairs, no cleaning, no staging required. We\'ve purchased homes with foundation issues, fire damage, mold, and hoarding conditions. You leave what you don\'t want and take what you do.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you a legitimate cash home buyer in Harrisburg PA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USA Home Buyers LLC is a licensed business operating in Pennsylvania with a BBB accreditation. You can verify our standing at the BBB website and read verified reviews on Google. We provide a written purchase agreement — no verbal promises.',
      },
    },
  ],
};

/**
 * Generate a VideoObject schema for a self-hosted video.
 * Designed for use inside the VideoEmbed component or any page with a <video> element.
 */
/**
 * Normalize an uploadDate to ISO 8601 with timezone (required by Google's VideoObject structured data spec).
 * Accepts either a date-only string ('2026-04-12') or a full ISO datetime.
 * Date-only input is upgraded to midnight UTC, which is a valid ISO 8601 datetime with timezone.
 */
function normalizeUploadDate(value: string): string {
  if (!value) return '2026-04-06T00:00:00Z';
  // Already has time component (contains 'T' followed by time digits)?
  if (/T\d{2}:\d{2}/.test(value)) return value;
  // Date-only: upgrade to midnight UTC (valid ISO 8601 with timezone)
  return `${value}T00:00:00Z`;
}

export function videoObjectSchema({
  name,
  description,
  contentUrl,
  thumbnailUrl,
  uploadDate = '2026-04-06',
}: {
  name: string;
  description: string;
  contentUrl: string;
  thumbnailUrl?: string;
  uploadDate?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    contentUrl,
    uploadDate: normalizeUploadDate(uploadDate),
    ...(thumbnailUrl ? { thumbnailUrl } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'USA Home Buyers',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

export function articleSchema(headline: string, url: string, datePublished = '2026-04-06', dateModified?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Organization', name: 'USA Home Buyers', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'USA Home Buyers',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
