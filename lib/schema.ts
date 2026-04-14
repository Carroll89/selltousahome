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
};

export function localBusinessSchemaFor(cityKey: 'harrisburg' | 'allentown' | 'bethlehem' | 'kingOfPrussia' | 'reading' | 'stateCollege' | 'erie') {
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
        text: 'Sí, hablamos español. We are bilingual and serve Reading\'s majority-Hispanic community. Call us to discuss your property in English or Spanish — (717) 576-8192.',
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
    uploadDate,
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

export function articleSchema(headline: string, url: string, datePublished = '2026-04-06') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    datePublished,
    dateModified: datePublished,
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
