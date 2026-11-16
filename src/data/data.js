// ============================================
// CENTRALIZED DATA FILE
// All property listings, agents, contact details,
// statistics and website content
// ============================================

// ---- COMPANY INFO ----
export const companyInfo = {
  name: "Zameen Elite",
  tagline: "BUY · SELL · RENT",
  description:
    "Pakistan's premier real estate company delivering luxury living experiences across Lahore, Islamabad, and Karachi since 2008.",
  longDescription:
    "At Zameen Elite, we believe that finding a home is more than a transaction — it's a life-changing moment. For over 16 years, we have helped thousands of families find their dream properties across Pakistan's most prestigious locations. Our commitment to transparency, integrity, and exceptional service has made us the most trusted name in Pakistani real estate.",
  founded: 2008,
  phone: "+923086754944",
  whatsapp: "923086754944",
  email: "umair.dev55@gmail.com",
  website: "www.zameenelite.pk",
  address: {
    street: "45-C, Main Boulevard, DHA Phase 6",
    city: "Lahore",
    province: "Punjab",
    country: "Pakistan",
    zip: "54000",
  },
  offices: [
    {
      id: 1,
      city: "Lahore",
      address: "45-C, Main Boulevard, DHA Phase 6, Lahore",
      phone: "+92 308 675 4944",
      email: "umair.dev55@gmail.com",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM",
      mapUrl:
        "https://maps.google.com/maps?q=DHA+Phase+6+Lahore+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 2,
      city: "Islamabad",
      address: "Plot 28, Jinnah Avenue, Blue Area, Islamabad",
      phone: "+92 309 675 4944",
      email: "umair.dev55@gmail.com",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM",
      mapUrl:
        "https://maps.google.com/maps?q=Jinnah+Avenue+Blue+Area+Islamabad+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 3,
      city: "Karachi",
      address: "12th Floor, Ocean Tower, Clifton Block 9, Karachi",
      phone: "+92 308 675 4944",
      email: "umair.dev55@gmail.com",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM",
      mapUrl:
        "https://maps.google.com/maps?q=Ocean+Tower+Clifton+Karachi+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed",
    },
  ],
  socialLinks: {
    facebook: "https://facebook.com/zameenelite",
    instagram: "https://instagram.com/zameenelite",
    twitter: "https://twitter.com/zameenelite",
    youtube: "https://youtube.com/zameenelite",
    linkedin: "https://linkedin.com/company/zameenelite",
  },
};

// ---- STATISTICS ----
export const statistics = [
  { id: 1, value: 15000, suffix: "+", label: "Happy Clients", icon: "Users" },
  {
    id: 2,
    value: 800,
    suffix: "+",
    label: "Properties Listed",
    icon: "Building2",
  },
  { id: 3, value: 25, suffix: "+", label: "Cities Covered", icon: "MapPin" },
  { id: 4, value: 98, suffix: "%", label: "Success Rate", icon: "TrendingUp" },
];

// ---- TRUST INDICATORS ----
export const trustIndicators = [
  {
    id: 1,
    icon: "Building2",
    title: "Verified Listings",
    description:
      "100% genuine listings with verified owners and authentic documentation.",
  },
  {
    id: 2,
    icon: "ShieldCheck",
    title: "Trusted & Secure",
    description:
      "Safe transactions with complete transparency and legal protection.",
  },
  {
    id: 3,
    icon: "Headphones",
    title: "Expert Support",
    description:
      "Guidance at every step from our experienced real estate consultants.",
  },
  {
    id: 4,
    icon: "Heart",
    title: "Better Living",
    description:
      "Find a home that fits your lifestyle in Pakistan's premium locations.",
  },
];

// ---- LOCATIONS ----
export const locations = [
  "DHA Phase 5, Lahore",
  "DHA Phase 6, Lahore",
  "DHA Phase 7, Lahore",
  "DHA Phase 8, Lahore",
  "Bahria Town, Lahore",
  "Gulberg, Lahore",
  "Gulberg III, Lahore",
  "Johar Town, Lahore",
  "Model Town, Lahore",
  "Cantt, Lahore",
  "Bedian Road, Lahore",
  "DHA Phase 1, Islamabad",
  "DHA Phase 2, Islamabad",
  "Bahria Town, Islamabad",
  "F-6, Islamabad",
  "F-7, Islamabad",
  "F-8, Islamabad",
  "E-11, Islamabad",
  "DHA Phase 6, Karachi",
  "DHA Phase 8, Karachi",
  "Clifton, Karachi",
  "Gulshan-e-Iqbal, Karachi",
  "Bahria Town, Karachi",
];

export const cities = [
  "Lahore",
  "Islamabad",
  "Karachi",
  "Rawalpindi",
  "Faisalabad",
];

// Country -> cities. Add a new country here (and set `country` on its listings)
// and every dropdown on the site picks it up automatically.
export const citiesByCountry = {
  Pakistan: cities,
};
export const countries = Object.keys(citiesByCountry);

// Localities of a city (derived from the `locations` list: "DHA Phase 6, Lahore")
export const getLocalitiesByCity = (city) =>
  locations
    .filter((l) => l.split(",").pop().trim() === city)
    .map((l) => l.split(",").slice(0, -1).join(",").trim());

// ---- PROPERTY TYPES ----
export const propertyTypes = [
  "House",
  "Apartment",
  "Villa",
  "Penthouse",
  "Plot",
  "Commercial",
  "Farmhouse",
];

// ---- PURPOSE ----
export const purposes = ["Buy", "Rent"];

// Types where a bedrooms filter does not apply
export const noBedroomTypes = ["Plot", "Commercial"];

// ---- PRICE RANGES ----
export const buyPriceRanges = [
  { label: "Under 50 Lakh", min: 0, max: 5000000 },
  { label: "50 Lakh - 1 Crore", min: 5000000, max: 10000000 },
  { label: "1 - 3 Crore", min: 10000000, max: 30000000 },
  { label: "3 - 5 Crore", min: 30000000, max: 50000000 },
  { label: "5 - 10 Crore", min: 50000000, max: 100000000 },
  { label: "Above 10 Crore", min: 100000000, max: Infinity },
];

export const rentPriceRanges = [
  { label: "Under 1 Lakh/month", min: 0, max: 100000 },
  { label: "1 - 2 Lakh/month", min: 100000, max: 200000 },
  { label: "2 - 5 Lakh/month", min: 200000, max: 500000 },
  { label: "Above 5 Lakh/month", min: 500000, max: Infinity },
];

export const priceRanges = [...buyPriceRanges, ...rentPriceRanges];

// Min / Max price dropdown steps (used by the Properties filter)
export const priceSteps = {
  Buy: [
    { label: "25 Lakh", value: 2500000 },
    { label: "50 Lakh", value: 5000000 },
    { label: "1 Crore", value: 10000000 },
    { label: "2 Crore", value: 20000000 },
    { label: "3 Crore", value: 30000000 },
    { label: "5 Crore", value: 50000000 },
    { label: "10 Crore", value: 100000000 },
    { label: "15 Crore", value: 150000000 },
    { label: "25 Crore", value: 250000000 },
  ],
  Rent: [
    { label: "50 Thousand", value: 50000 },
    { label: "1 Lakh", value: 100000 },
    { label: "2 Lakh", value: 200000 },
    { label: "3 Lakh", value: 300000 },
    { label: "5 Lakh", value: 500000 },
    { label: "10 Lakh", value: 1000000 },
  ],
};

export const bedroomOptions = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// ---- AMENITIES ----
export const allAmenities = [
  "Central Air Conditioning",
  "Servant Quarter",
  "Swimming Pool",
  "Gym / Fitness Center",
  "Security System",
  "CCTV Surveillance",
  "Backup Generator",
  "Solar Panels",
  "Lawn / Garden",
  "Car Parking",
  "Mosque Nearby",
  "School Nearby",
  "Hospital Nearby",
  "Park Facing",
  "Corner Plot",
  "Basement",
  "Home Theater",
  "Smart Home System",
  "Elevator / Lift",
  "Rooftop Terrace",
  "Laundry Room",
  "Study Room",
  "Balcony",
  "Walk-in Closet",
];

// ---- AGENTS ----
export const agents = [
  {
    id: 1,
    name: "Ahmed Raza Khan",
    title: "Senior Property Consultant",
    phone: "+92 308 6754 944",
    whatsapp: "923086754944",
    email: "umair.dev55@gmail.com",
    experience: "12 years",
    specialization: "Luxury Villas & Houses",
    city: "Lahore",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    propertiesSold: 340,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Fatima Malik",
    title: "Real Estate Manager",
    phone: "+92 308 6754 944",
    whatsapp: "923086754944",
    email: "umair.dev55@gmail.com",
    experience: "9 years",
    specialization: "Premium Apartments & Penthouses",
    city: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    propertiesSold: 210,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Hassan Ali Sheikh",
    title: "Chief Property Advisor",
    phone: "+92 308 6754 944",
    whatsapp: "923086754944",
    email: "umair.dev55@gmail.com",
    experience: "15 years",
    specialization: "Commercial & Investment Properties",
    city: "Karachi",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    propertiesSold: 480,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Ayesha Tariq",
    title: "Property Consultant",
    phone: "+92 308 6754 944",
    whatsapp: "923086754944",
    email: "umair.dev55@gmail.com",
    experience: "6 years",
    specialization: "Residential Properties",
    city: "Lahore",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    propertiesSold: 150,
    rating: 4.7,
  },
];

// ---- TEAM MEMBERS ----
export const teamMembers = [
  {
    id: 1,
    name: "Bilal Mahmood",
    title: "CEO & Founder",
    description:
      "Visionary leader with 20+ years in Pakistani real estate development.",
    image:
      "https://plus.unsplash.com/premium_photo-1661297460381-f75b8ae69a0f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    name: "Sana Hussain",
    title: "Chief Operations Officer",
    description:
      "Operations expert ensuring seamless property transactions nationwide.",
    image:
      "https://images.unsplash.com/photo-1634595477722-7bc68dd410fd?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    name: "Usman Ghani",
    title: "Head of Sales",
    description:
      "Strategic sales leader who has closed 1000+ premium property deals.",
    image:
      "https://images.unsplash.com/photo-1771244702701-6c9edac63255?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 4,
    name: "Zara Ahmed",
    title: "Marketing Director",
    description:
      "Creative marketing professional driving brand excellence and growth.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

// ---- ACHIEVEMENTS ----
export const achievements = [
  {
    id: 1,
    year: "2023",
    title: "Best Real Estate Company",
    description:
      "Awarded by Pakistan Property Awards for excellence in luxury real estate.",
  },
  {
    id: 2,
    year: "2022",
    title: "Top Customer Satisfaction",
    description:
      "Recognized for highest customer satisfaction in the industry.",
  },
  {
    id: 3,
    year: "2021",
    title: "Fastest Growing Firm",
    description:
      "Named fastest growing real estate firm in Pakistan by Business Weekly.",
  },
  {
    id: 4,
    year: "2020",
    title: "Digital Innovation Award",
    description: "Pioneered digital property tours and virtual consultations.",
  },
];

// ---- PROPERTIES ----
export const properties = [
  {
    id: 1,
    title: "The Royal Residence",
    slug: "the-royal-residence-dha-lahore",
    type: "Villa",
    purpose: "Buy",
    price: 85000000,
    priceFormatted: "8.5 Crore",
    location: "DHA Phase 6, Lahore",
    city: "Lahore",
    country: "Pakistan",
    area: "1 Kanal",
    areaSqft: 4500,
    bedrooms: 6,
    bathrooms: 7,
    garages: 2,
    yearBuilt: 2023,
    featured: true,
    new: true,
    listedAt: "2026-11-12",
    description:
      "An extraordinary 1 Kanal villa in the heart of DHA Phase 6, Lahore. This architectural masterpiece features 6 spacious bedrooms, a grand living area, Italian marble flooring, and a private swimming pool. The property boasts smart home technology, solar panels, and a beautifully landscaped garden.",
    amenities: [
      "Central Air Conditioning",
      "Swimming Pool",
      "Gym / Fitness Center",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Solar Panels",
      "Lawn / Garden",
      "Car Parking",
      "Home Theater",
      "Smart Home System",
      "Servant Quarter",
      "Basement",
      "Rooftop Terrace",
    ],
    images: [
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property1/imgi_1_photo-1613490493576-7fde63acd811.webp",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/Home/imgi_3_photo-1600596542815-ffad4c1539a9.webp?updatedAt=1794781604090",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property1/imgi_3_photo-1600607687939-ce8a6c25118c.webp?updatedAt=1794782175950",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property1/imgi_4_photo-1600566753190-17f0baa2a6c3.webp?updatedAt=1794782175974",
    ],
    agent: 1,
  },
  {
    id: 2,
    title: "Skyline Luxury Apartment",
    slug: "skyline-luxury-apartment-gulberg-lahore",
    type: "Apartment",
    purpose: "Buy",
    price: 32000000,
    priceFormatted: "3.2 Crore",
    location: "Gulberg III, Lahore",
    city: "Lahore",
    country: "Pakistan",
    area: "2400 sq ft",
    areaSqft: 2400,
    bedrooms: 3,
    bathrooms: 4,
    garages: 1,
    yearBuilt: 2024,
    featured: true,
    new: true,
    listedAt: "2026-11-10",
    description:
      "A stunning 3-bedroom luxury apartment in the iconic Skyline Tower, Gulberg III. Features floor-to-ceiling windows with panoramic city views, imported kitchen fixtures, and premium finishes throughout. Located in the heart of Lahore's commercial hub.",
    amenities: [
      "Central Air Conditioning",
      "Elevator / Lift",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Car Parking",
      "Gym / Fitness Center",
      "Balcony",
      "Laundry Room",
    ],
    images: [
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property2/imgi_1_photo-1522708323590-d24dbb6b0267.webp?updatedAt=1794784070430",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property2/imgi_2_photo-1560448204-e02f11c3d0e2.webp?updatedAt=1794784069169",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property2/imgi_3_photo-1502672260266-1c1ef2d93688.webp?updatedAt=1794784069692",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property2/imgi_4_photo-1560185127-6ed189bf02f4.webp?updatedAt=1794784070595",
    ],
    agent: 4,
  },
  {
    id: 3,
    title: "Bahria Heights Penthouse",
    slug: "bahria-heights-penthouse-islamabad",
    type: "Penthouse",
    purpose: "Buy",
    price: 55000000,
    priceFormatted: "5.5 Crore",
    location: "Bahria Town, Islamabad",
    city: "Islamabad",
    country: "Pakistan",
    area: "3800 sq ft",
    areaSqft: 3800,
    bedrooms: 4,
    bathrooms: 5,
    garages: 2,
    yearBuilt: 2023,
    featured: true,
    new: false,
    listedAt: "2026-09-28",
    description:
      "A breathtaking penthouse at the top of Bahria Heights with 360-degree views of the Margalla Hills. This 4-bedroom luxury residence features a private terrace, jacuzzi, and an open-plan living area with double-height ceilings.",
    amenities: [
      "Central Air Conditioning",
      "Elevator / Lift",
      "Swimming Pool",
      "Gym / Fitness Center",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Car Parking",
      "Rooftop Terrace",
      "Walk-in Closet",
      "Smart Home System",
    ],
    images: [
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_1_photo-1545324418-cc1a3fa10c00.webp?updatedAt=1794784070351",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_2_photo-1560448204-e02f11c3d0e2.webp?updatedAt=1794784069772",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_3_photo-1560185127-6ed189bf02f4.webp?updatedAt=1794784069372",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_4_photo-1502672260266-1c1ef2d93688.webp?updatedAt=1794784069716",
    ],
    agent: 2,
  },
  {
    id: 4,
    title: "Serene Garden Villa",
    slug: "serene-garden-villa-dha-islamabad",
    type: "Villa",
    purpose: "Rent",
    price: 450000,
    priceFormatted: "4.5 Lakh/month",
    location: "DHA Phase 2, Islamabad",
    city: "Islamabad",
    country: "Pakistan",
    area: "10 Marla",
    areaSqft: 2722,
    bedrooms: 4,
    bathrooms: 5,
    garages: 1,
    yearBuilt: 2022,
    featured: true,
    new: false,
    listedAt: "2026-09-15",
    description:
      "A beautifully designed 10 Marla villa in DHA Phase 2, Islamabad. Surrounded by lush greenery, this villa offers a perfect blend of modern architecture and natural serenity. Ideal for families seeking a peaceful lifestyle with premium amenities.",
    amenities: [
      "Central Air Conditioning",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Solar Panels",
      "Lawn / Garden",
      "Car Parking",
      "Servant Quarter",
      "Balcony",
      "Study Room",
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
    ],
    agent: 2,
  },
  {
    id: 5,
    title: "Ocean View Apartment",
    slug: "ocean-view-apartment-clifton-karachi",
    type: "Apartment",
    purpose: "Buy",
    price: 42000000,
    priceFormatted: "4.2 Crore",
    location: "Clifton, Karachi",
    city: "Karachi",
    country: "Pakistan",
    area: "2800 sq ft",
    areaSqft: 2800,
    bedrooms: 3,
    bathrooms: 4,
    garages: 1,
    yearBuilt: 2024,
    featured: true,
    new: true,
    listedAt: "2026-11-05",
    description:
      "A premium sea-facing apartment in Clifton, Karachi with breathtaking Arabian Sea views. Modern open-plan design, imported Italian kitchen, and floor-to-ceiling glass windows. Located in an exclusive gated community with world-class amenities.",
    amenities: [
      "Central Air Conditioning",
      "Elevator / Lift",
      "Swimming Pool",
      "Gym / Fitness Center",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Car Parking",
      "Balcony",
      "Laundry Room",
    ],
    images: [
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_1_photo-1545324418-cc1a3fa10c00.webp?updatedAt=1794784070351",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_2_photo-1560448204-e02f11c3d0e2.webp?updatedAt=1794784069772",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_3_photo-1560185127-6ed189bf02f4.webp?updatedAt=1794784069372",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_4_photo-1502672260266-1c1ef2d93688.webp?updatedAt=1794784069716",
    ],
    agent: 3,
  },
  {
    id: 6,
    title: "The Grand Estate",
    slug: "the-grand-estate-bahria-lahore",
    type: "House",
    purpose: "Buy",
    price: 120000000,
    priceFormatted: "12 Crore",
    location: "Bahria Town, Lahore",
    city: "Lahore",
    country: "Pakistan",
    area: "2 Kanal",
    areaSqft: 9000,
    bedrooms: 8,
    bathrooms: 10,
    garages: 3,
    yearBuilt: 2022,
    featured: true,
    new: false,
    listedAt: "2026-09-02",
    description:
      "A magnificent 2 Kanal estate in Bahria Town, Lahore. This palatial residence features 8 bedrooms, grand marble hallways, a private cinema, indoor swimming pool, and a sprawling landscaped garden. The epitome of luxury living in Pakistan.",
    amenities: [
      "Central Air Conditioning",
      "Swimming Pool",
      "Gym / Fitness Center",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Solar Panels",
      "Lawn / Garden",
      "Car Parking",
      "Home Theater",
      "Smart Home System",
      "Servant Quarter",
      "Basement",
      "Elevator / Lift",
      "Rooftop Terrace",
      "Walk-in Closet",
    ],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    agent: 1,
  },
  {
    id: 7,
    title: "Modern Studio Apartment",
    slug: "modern-studio-apartment-f7-islamabad",
    type: "Apartment",
    purpose: "Rent",
    price: 85000,
    priceFormatted: "85,000/month",
    location: "F-7, Islamabad",
    city: "Islamabad",
    country: "Pakistan",
    area: "950 sq ft",
    areaSqft: 950,
    bedrooms: 1,
    bathrooms: 1,
    garages: 1,
    yearBuilt: 2023,
    featured: false,
    new: true,
    listedAt: "2026-10-28",
    description:
      "A chic, fully furnished studio apartment in the prestigious F-7 sector of Islamabad. Perfect for professionals and young couples. Features modern interiors, a compact kitchen, and access to building amenities.",
    amenities: [
      "Central Air Conditioning",
      "Elevator / Lift",
      "Security System",
      "Backup Generator",
      "Car Parking",
      "Laundry Room",
    ],
    images: [
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_4_photo-1502672260266-1c1ef2d93688.webp?updatedAt=1794784069716",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_3_photo-1560185127-6ed189bf02f4.webp?updatedAt=1794784069372",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    ],
    agent: 2,
  },
  {
    id: 8,
    title: "Premium Commercial Plaza",
    slug: "premium-commercial-plaza-gulberg-lahore",
    type: "Commercial",
    purpose: "Buy",
    price: 250000000,
    priceFormatted: "25 Crore",
    location: "Gulberg, Lahore",
    city: "Lahore",
    country: "Pakistan",
    area: "15000 sq ft",
    areaSqft: 15000,
    bedrooms: 0,
    bathrooms: 8,
    garages: 20,
    yearBuilt: 2024,
    featured: false,
    new: true,
    listedAt: "2026-10-24",
    description:
      "A state-of-the-art commercial plaza on Lahore's Main Boulevard, Gulberg. Features 6 floors of premium office spaces, ground floor retail outlets, basement parking, and modern elevator systems. Ideal for corporate offices and retail businesses.",
    amenities: [
      "Central Air Conditioning",
      "Elevator / Lift",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Car Parking",
    ],
    images: [
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property5/imgi_1_photo-1486406146926-c627a92ad1ab.webp?updatedAt=1794785191653",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property5/imgi_3_photo-1497366811353-6870744d04b2.webp?updatedAt=1794785191557",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property5/imgi_2_photo-1497366216548-37526070297c.webp?updatedAt=1794785191687",
    ],
    agent: 1,
  },
  {
    id: 9,
    title: "Lakeside Farmhouse",
    slug: "lakeside-farmhouse-bedian-road-lahore",
    type: "Farmhouse",
    purpose: "Buy",
    price: 45000000,
    priceFormatted: "4.5 Crore",
    location: "Bedian Road, Lahore",
    city: "Lahore",
    country: "Pakistan",
    area: "4 Kanal",
    areaSqft: 18000,
    bedrooms: 5,
    bathrooms: 6,
    garages: 2,
    yearBuilt: 2021,
    featured: false,
    new: false,
    listedAt: "2026-08-20",
    description:
      "A stunning farmhouse on Bedian Road featuring a private lake, fruit orchards, and expansive green lawns. Perfect weekend getaway with 5 bedrooms, outdoor BBQ area, and horse riding facility.",
    amenities: [
      "Swimming Pool",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Solar Panels",
      "Lawn / Garden",
      "Car Parking",
      "Servant Quarter",
      "Balcony",
    ],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    ],
    agent: 4,
  },
  {
    id: 10,
    title: "Defence Raya Residence",
    slug: "defence-raya-residence-dha-lahore",
    type: "House",
    purpose: "Buy",
    price: 65000000,
    priceFormatted: "6.5 Crore",
    location: "DHA Phase 7, Lahore",
    city: "Lahore",
    country: "Pakistan",
    area: "1 Kanal",
    areaSqft: 4500,
    bedrooms: 5,
    bathrooms: 6,
    garages: 2,
    yearBuilt: 2023,
    featured: false,
    new: false,
    listedAt: "2026-08-05",
    description:
      "A sophisticated 1 Kanal residence in DHA Phase 7 with contemporary architecture. Features imported fixtures, a modular kitchen, home office space, and a beautifully maintained garden. Located on a prime corner plot.",
    amenities: [
      "Central Air Conditioning",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Solar Panels",
      "Lawn / Garden",
      "Car Parking",
      "Corner Plot",
      "Servant Quarter",
      "Study Room",
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
    ],
    agent: 1,
  },
  {
    id: 11,
    title: "Margalla View Apartment",
    slug: "margalla-view-apartment-e11-islamabad",
    type: "Apartment",
    purpose: "Rent",
    price: 180000,
    priceFormatted: "1.8 Lakh/month",
    location: "E-11, Islamabad",
    city: "Islamabad",
    country: "Pakistan",
    area: "1800 sq ft",
    areaSqft: 1800,
    bedrooms: 3,
    bathrooms: 3,
    garages: 1,
    yearBuilt: 2022,
    featured: false,
    new: false,
    listedAt: "2026-07-22",
    description:
      "A beautiful 3-bedroom apartment with stunning Margalla Hills views. Modern design, spacious balcony, and access to community pool and gym. Located in a secure gated complex in E-11.",
    amenities: [
      "Central Air Conditioning",
      "Elevator / Lift",
      "Swimming Pool",
      "Gym / Fitness Center",
      "Security System",
      "Backup Generator",
      "Car Parking",
      "Balcony",
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
    agent: 2,
  },
  {
    id: 12,
    title: "Executive Villa",
    slug: "executive-villa-dha-karachi",
    type: "Villa",
    purpose: "Buy",
    price: 95000000,
    priceFormatted: "9.5 Crore",
    location: "DHA Phase 8, Karachi",
    city: "Karachi",
    country: "Pakistan",
    area: "500 sq yards",
    areaSqft: 4500,
    bedrooms: 6,
    bathrooms: 7,
    garages: 2,
    yearBuilt: 2023,
    featured: false,
    new: true,
    listedAt: "2026-10-20",
    description:
      "An exquisite 500 sq yard villa in DHA Phase 8, Karachi. Features a contemporary minimalist design, imported marble flooring, a private rooftop lounge, and state-of-the-art security. One of the finest residences in Karachi's Defence.",
    amenities: [
      "Central Air Conditioning",
      "Swimming Pool",
      "Security System",
      "CCTV Surveillance",
      "Backup Generator",
      "Solar Panels",
      "Lawn / Garden",
      "Car Parking",
      "Servant Quarter",
      "Rooftop Terrace",
      "Smart Home System",
      "Walk-in Closet",
    ],
    images: [
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property1/imgi_1_photo-1613490493576-7fde63acd811.webp",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    ],
    agent: 3,
  },
  {
    id: 13,
    title: "Residential Plot",
    slug: "residential-plot-dha-phase-5-lahore",
    type: "Plot",
    purpose: "Buy",
    price: 35000000,
    priceFormatted: "3.5 Crore",
    location: "DHA Phase 5, Lahore",
    city: "Lahore",
    country: "Pakistan",
    area: "1 Kanal",
    areaSqft: 4500,
    bedrooms: 0,
    bathrooms: 0,
    garages: 0,
    yearBuilt: null,
    featured: false,
    new: false,
    listedAt: "2026-07-10",
    description:
      "A prime 1 Kanal residential plot in DHA Phase 5, Lahore. Located on a wide 60-ft road, ideal for building your dream home. All utilities available including sui gas, electricity, and water. Perfectly positioned near parks and commercial areas.",
    amenities: ["Park Facing", "Corner Plot", "Mosque Nearby", "School Nearby"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&h=600&fit=crop",
    ],
    agent: 4,
  },
  {
    id: 14,
    title: "Johar Town Family Home",
    slug: "johar-town-family-home-lahore",
    type: "House",
    purpose: "Buy",
    price: 28000000,
    priceFormatted: "2.8 Crore",
    location: "Johar Town, Lahore",
    city: "Lahore",
    country: "Pakistan",
    area: "10 Marla",
    areaSqft: 2722,
    bedrooms: 4,
    bathrooms: 4,
    garages: 1,
    yearBuilt: 2020,
    featured: false,
    new: false,
    listedAt: "2026-06-25",
    description:
      "A well-maintained 10 Marla family home in Johar Town, Lahore. Close to schools, hospitals, and markets. Features 4 bedrooms, a large drawing room, and a kitchen garden. Perfect for a growing family.",
    amenities: [
      "Central Air Conditioning",
      "Security System",
      "Backup Generator",
      "Lawn / Garden",
      "Car Parking",
      "Servant Quarter",
      "School Nearby",
      "Hospital Nearby",
      "Mosque Nearby",
    ],
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
    ],
    agent: 4,
  },
  {
    id: 15,
    title: "Gulshan Luxury Flat",
    slug: "gulshan-luxury-flat-karachi",
    type: "Apartment",
    purpose: "Rent",
    price: 150000,
    priceFormatted: "1.5 Lakh/month",
    location: "Gulshan-e-Iqbal, Karachi",
    city: "Karachi",
    country: "Pakistan",
    area: "1600 sq ft",
    areaSqft: 1600,
    bedrooms: 3,
    bathrooms: 2,
    garages: 1,
    yearBuilt: 2021,
    featured: false,
    new: false,
    listedAt: "2026-06-12",
    description:
      "A well-appointed 3-bedroom apartment in Gulshan-e-Iqbal, Karachi. Features modern interiors, a spacious kitchen, and is located near major shopping centers and schools. Ideal for families.",
    amenities: [
      "Central Air Conditioning",
      "Elevator / Lift",
      "Security System",
      "Backup Generator",
      "Car Parking",
      "Balcony",
      "School Nearby",
      "Mosque Nearby",
    ],
    images: [
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_3_photo-1560185127-6ed189bf02f4.webp?updatedAt=1794784069372",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_1_photo-1545324418-cc1a3fa10c00.webp?updatedAt=1794784070351",
      "https://ik.imagekit.io/x9svten4i/Real%20Estate/Zameen%20Elite%20_%20Premium%20Real%20Estate%20in%20Pakistan/property3/imgi_4_photo-1502672260266-1c1ef2d93688.webp?updatedAt=1794784069716",
    ],
    agent: 3,
  },
  {
    id: 16,
    title: "Model Town Heritage House",
    slug: "model-town-heritage-house-lahore",
    type: "House",
    purpose: "Buy",
    price: 75000000,
    priceFormatted: "7.5 Crore",
    location: "Model Town, Lahore",
    city: "Lahore",
    country: "Pakistan",
    area: "1 Kanal",
    areaSqft: 4500,
    bedrooms: 5,
    bathrooms: 6,
    garages: 2,
    yearBuilt: 2019,
    featured: false,
    new: false,
    listedAt: "2026-05-30",
    description:
      "A beautifully renovated heritage-style home in Model Town, Lahore. Combines classic architectural charm with modern amenities. Features spacious rooms, a grand entrance, and a mature garden.",
    amenities: [
      "Central Air Conditioning",
      "Security System",
      "Backup Generator",
      "Lawn / Garden",
      "Car Parking",
      "Servant Quarter",
      "Study Room",
      "Basement",
      "Park Facing",
    ],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    agent: 1,
  },
];

// ---- SORTING OPTIONS ----
export const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "area-high", label: "Area: Largest First" },
  { value: "beds-high", label: "Bedrooms: Most First" },
];

// ---- TESTIMONIALS ----
export const testimonials = [
  {
    id: 1,
    name: "Dr. Kamran Akbar",
    role: "Surgeon, Lahore",
    text: "Zameen Elite made my dream of owning a home in DHA a reality. Their team was professional, transparent, and supportive throughout the entire process.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Nadia Farooq",
    role: "Business Owner, Islamabad",
    text: "I found the perfect commercial property for my business through Zameen Elite. Their market knowledge and negotiation skills saved me both time and money.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Tariq Mehmood",
    role: "IT Professional, Karachi",
    text: "Exceptional service! The team helped me find a beautiful apartment in Clifton within my budget. Highly recommend Zameen Elite for anyone looking for property in Karachi.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

// ---- NAV LINKS ----
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

// ---- FOOTER LINKS ----
export const footerLinks = {
  quickLinks: [
    { label: "Home", path: "/" },
    { label: "Properties", path: "/properties" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  propertyTypes: [
    { label: "Houses", path: "/properties?type=House" },
    { label: "Apartments", path: "/properties?type=Apartment" },
    { label: "Villas", path: "/properties?type=Villa" },
    { label: "Commercial", path: "/properties?type=Commercial" },
    { label: "Plots", path: "/properties?type=Plot" },
  ],
  cities: [
    { label: "Lahore", path: "/properties?city=Lahore" },
    { label: "Islamabad", path: "/properties?city=Islamabad" },
    { label: "Karachi", path: "/properties?city=Karachi" },
  ],
};

// ---- HELPER FUNCTIONS ----
export function getAgentById(id) {
  return agents.find((agent) => agent.id === id);
}

export function getPropertyBySlug(slug) {
  return properties.find((property) => property.slug === slug);
}

export function getPropertyById(id) {
  return properties.find((property) => property.id === id);
}

export function getFeaturedProperties() {
  return properties.filter((property) => property.featured);
}

export function getPropertiesByAgent(agentId) {
  return properties.filter((property) => property.agent === agentId);
}

export function formatPrice(price, purpose) {
  if (price >= 10000000) {
    const crore = price / 10000000;
    return `PKR ${crore % 1 === 0 ? crore : crore.toFixed(1)} Crore${purpose === "Rent" ? "/mo" : ""}`;
  } else if (price >= 100000) {
    const lakh = price / 100000;
    return `PKR ${lakh % 1 === 0 ? lakh : lakh.toFixed(1)} Lakh${purpose === "Rent" ? "/mo" : ""}`;
  } else {
    return `PKR ${price.toLocaleString("en-PK")}${purpose === "Rent" ? "/mo" : ""}`;
  }
}

export function filterProperties({
  country,
  city,
  location,
  type,
  purpose,
  minPrice,
  maxPrice,
  bedrooms,
  search,
} = {}) {
  const q = (search || "").toLowerCase().trim();
  return properties.filter((p) => {
    if (country && p.country !== country) return false;
    if (city && p.city !== city) return false;
    if (
      location &&
      p.location.split(",")[0].trim().toLowerCase() !== location.toLowerCase()
    )
      return false;
    if (type && p.type !== type) return false;
    if (purpose && p.purpose !== purpose) return false;
    if (bedrooms && !noBedroomTypes.includes(type) && p.bedrooms < Number(bedrooms))
      return false;
    if (minPrice && p.price < Number(minPrice)) return false;
    if (maxPrice && p.price > Number(maxPrice)) return false;
    if (q) {
      const hay =
        `${p.title} ${p.location} ${p.type} ${p.city} ${p.country} ${p.description}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function sortProperties(propertyList, sortBy) {
  const sorted = [...propertyList];
  const byId = (a, b) => a.id - b.id;
  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price || byId(a, b));
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price || byId(a, b));
    case "area-high":
      return sorted.sort((a, b) => b.areaSqft - a.areaSqft || byId(a, b));
    case "beds-high":
      return sorted.sort((a, b) => b.bedrooms - a.bedrooms || byId(a, b));
    case "newest":
    default:
      return sorted.sort(
        (a, b) => new Date(b.listedAt) - new Date(a.listedAt) || b.id - a.id,
      );
  }
}
