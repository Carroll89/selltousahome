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
};

export function localBusinessSchemaFor(cityKey: 'harrisburg' | 'allentown' | 'bethlehem' | 'kingOfPrussia' | 'reading' | 'stateCollege' | 'erie' | 'lancaster' | 'york' | 'wilmington' | 'youngstown' | 'springfield' | 'kenosha' | 'manchester' | 'bridgeport' | 'worcester' | 'rochester' | 'racineMountPleasant' | 'springfieldIL' | 'rockfordIL' | 'newHaven' | 'oshkosh' | 'peoriaIL' | 'bloomingtonIL' | 'champaignUrbanaIL') {
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
        text: 'Cash offers for Youngstown homes typically range from 65\u201375% of after-repair value. According to Redfin, the Youngstown median sale price is $129,200 (February 2026). We cover all closing costs including Ohio\u2019s conveyance fee \u2014 nothing comes out of your offer.',
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
        text: 'USA Home Buyers can close in as few as 7 days in Wilmington DE. We send a written cash offer within 24 hours of learning about your property. According to Redfin, Wilmington homes spend a median of 72 days on market when listed traditionally. A cash sale eliminates showings, inspections, and the bank approval wait entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will you pay for my Wilmington DE house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash offers for Wilmington city homes typically range from 65\u201375% of fair market value. According to Redfin, the Wilmington median sale price is $210,000 (February 2026). We cover all closing costs including Delaware\u2019s 4% transfer tax \u2014 nothing comes out of your offer number.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the transfer tax when selling a house in Wilmington DE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wilmington DE has a 4% total real estate transfer tax \u2014 2.5% Delaware state tax plus 1.5% City of Wilmington local tax. By convention this is split 50/50 between buyer and seller, with each paying 2%. On a $210,000 home the total is $8,400. When you sell to USA Home Buyers, we cover all closing costs. Source: Delaware Division of Revenue; New Castle County (newcastlede.gov).',
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
        text: 'Cash offers for York homes typically range from 65–75% of after-repair value. According to Redfin, the York City median sale price is $165,850 (February 2026), with Northeast York properties often under $120,000. We cover all closing costs — no agent commissions, no fees deducted from your number.',
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
        text: 'Sí, hablamos español. We are bilingual and serve Reading\'s majority-Hispanic community. Call us to discuss your property in English or Spanish — (888) 440-5250.',
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
