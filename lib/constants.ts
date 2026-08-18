export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  whatsappMessage: string;
}

export interface VehicleCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: {
    passengers: string;
    luggage: string;
    ac: boolean;
  };
  examples: string[];
  idealFor: string[];
  placeholderLabel: string;
  imageAlt: string;
  imageSrc: string;
  whatsappMessage: string;
}

export interface TrustPoint {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  category: "pilgrimage" | "coastal" | "highlands" | "airport";
  badge: string;
  popular?: boolean;
  stops: string[];
  description: string;
  idealVehicle: string;
  whatsappMessage: string;
}

export const BUSINESS_INFO = {
  name: "RV Tours & Travels",
  tagline: "Journeys Redefined",
  proprietor: "R Ramesh",
  location: "Udupi, Karnataka",
  coordinates: "13.3409° N, 74.7421° E",
  phone: "+91 98455 11169",
  phoneClean: "+919845511169",
  phoneDisplay: "+91 98455 11169",
  email: "rameshshetty0013@gmail.com",
  whatsappNumber: "919845511169",
  whatsappUrl: "https://wa.me/919845511169",
  defaultWhatsAppMessage: "Hello Ramesh ji, I would like to enquire about taxi/tour services from RV Tours & Travels.",
  mapQuery: "Udupi, Karnataka, India",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Udupi,%20Karnataka,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed",
  operatingHours: "Direct Coordination via Phone & WhatsApp",
  baseStation: "UDUPI (UD)",
} as const;

export const NAV_LINKS = [
  { label: "Overview", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "kollur-murudeshwar",
    title: "Kollur Mookambika & Murudeshwar Coastal Circuit",
    subtitle: "Sacred Darshan & Arabian Sea Coastal Route",
    duration: "1 to 2 Days",
    category: "pilgrimage",
    badge: "MOST POPULAR // 2026",
    popular: true,
    stops: ["Udupi Sri Krishna Matha", "Maravanthe Beach", "Kollur Mookambika Temple", "Murudeshwar Shiva Temple & Beach"],
    description: "Experience the premier coastal pilgrimage route connecting Udupi's Krishna Matha to the mystical foothills of Kodachadri (Kollur) and the majestic 123-foot Shiva statue overlooking the Arabian Sea at Murudeshwar.",
    idealVehicle: "Comfort Sedan or Innova Crysta",
    whatsappMessage: "Hello Ramesh ji, I want to enquire about the Kollur Mookambika & Murudeshwar Tour Package 2026."
  },
  {
    id: "dharmasthala-kukke",
    title: "Dharmasthala, Kukke Subramanya & Kateel Yatra",
    subtitle: "Complete Dakshina Kannada Sacred Circuit",
    duration: "1 to 2 Days",
    category: "pilgrimage",
    badge: "DEVOTIONAL SPECIAL",
    popular: true,
    stops: ["Kateel Durgaparameshwari", "Dharmasthala Manjunatha Swamy", "Southadka Ganapathi", "Kukke Sri Subramanya Temple"],
    description: "A peaceful spiritual journey across the Western Ghat foothills. Specially planned for convenient pooja timings, smooth ghat driving, and senior citizen comfort with door-to-door pickup.",
    idealVehicle: "Innova Crysta / Ertiga / Sedan",
    whatsappMessage: "Hello Ramesh ji, I want to enquire about the Dharmasthala & Kukke Subramanya Pilgrimage Package 2026."
  },
  {
    id: "gokarna-karwar-coastal",
    title: "Gokarna, Om Beach & Karwar Heritage Expedition",
    subtitle: "Beaches, Ancient Temples & Coastal Highway Drives",
    duration: "2 Days / 1 Night",
    category: "coastal",
    badge: "COASTAL ESCAPE",
    stops: ["Udupi", "Maravanthe Sunset Drive", "Murudeshwar", "Gokarna Mahabaleshwar", "Om & Kudle Beach", "Karwar"],
    description: "Explore the dramatic coastline of Uttara Kannada with seamless highway chauffeur service, oceanfront scenic halts, and customized beach excursion schedules.",
    idealVehicle: "Toyota Innova Crysta or Sedan",
    whatsappMessage: "Hello Ramesh ji, I want to enquire about the Gokarna & Karwar Coastal Package 2026."
  },
  {
    id: "coorg-chikmagalur-highlands",
    title: "Western Ghats Highlands: Chikmagalur & Coorg",
    subtitle: "Coffee Plantations, Mist Peaks & Waterfalls",
    duration: "3 Days / 2 Nights",
    category: "highlands",
    badge: "HILL STATION TOUR",
    stops: ["Udupi / Mangalore", "Agumbe Rainforest", "Chikmagalur Peak Drive", "Mullayanagiri", "Madikeri / Coorg"],
    description: "Ascend the verdant Western Ghats with an expert hill-route chauffeur. Enjoy serene coffee estate tours, panoramic viewpoints, and safe mountain driving.",
    idealVehicle: "Premium SUV (Toyota Innova Crysta)",
    whatsappMessage: "Hello Ramesh ji, I want to enquire about the Chikmagalur & Coorg Highland Package 2026."
  },
  {
    id: "mangalore-airport-connect",
    title: "Mangalore Airport (IXE) & Inter-City Transit",
    subtitle: "Punctual Curbside Drops & Roundtrips",
    duration: "Point to Point / Same Day",
    category: "airport",
    badge: "24/7 AIRPORT SERVICE",
    stops: ["Udupi / Manipal / Kundapura", "Mangalore International Airport (IXE)", "Mangalore Central / Junction"],
    description: "Zero-stress airport transit with flight tracking, early morning / late night scheduled pickups, and ample luggage boot space.",
    idealVehicle: "Dzire / Etios / Innova Crysta",
    whatsappMessage: "Hello Ramesh ji, I need to book a Mangalore Airport (IXE) Drop / Pickup."
  },
  {
    id: "custom-karnataka-itinerary",
    title: "Bespoke Multi-Day All-Karnataka Tour",
    subtitle: "Tailor-Made Road Trips Across Karnataka",
    duration: "Custom (3 to 7+ Days)",
    category: "coastal",
    badge: "CUSTOM ITINERARY",
    stops: ["Any destination in Karnataka", "Hampi", "Mysore", "Belur/Halebidu", "Bengaluru", "Coastal Circuit"],
    description: "Design your dream Karnataka road journey with dedicated chauffeur, flexible daily halts, and transparent per-km or fixed package pricing.",
    idealVehicle: "Sedan, Innova, or Tempo Traveller",
    whatsappMessage: "Hello Ramesh ji, I want to plan a custom multi-day Karnataka tour package."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "airport-transfers",
    title: "Airport Drops & Pickups",
    subtitle: "Punctual Terminal Connect",
    description: "Reliable airport transfers to and from Mangalore International Airport (IXE) and regional terminals across Karnataka and neighboring destinations on prior booking.",
    features: [
      "Flight arrival coordination & punctual curbside pickup",
      "Spacious luggage trunk for airport baggage",
      "Assistance with loading and unloading",
      "Doorstep pickup anywhere in Udupi & Manipal"
    ],
    icon: "Plane",
    whatsappMessage: "Hello, I want to enquire about an Airport Drop / Pickup service."
  },
  {
    id: "karnataka-destinations",
    title: "All Destinations Within Karnataka",
    subtitle: "Pan-State Chauffeur Travel",
    description: "Chauffeur-driven travel across all destinations in Karnataka — including coastal routes, temple circuits, hill stations, and outstation city transfers.",
    features: [
      "Coastal highway & regional driving expertise",
      "Flexible stopovers and customizable rest halts",
      "Direct point-to-point and outstation roundtrips",
      "Custom itineraries and temple routes upon request"
    ],
    icon: "MapPin",
    whatsappMessage: "Hello, I want to enquire about travel to destinations across Karnataka."
  },
  {
    id: "fleet-variety",
    title: "All Types of Vehicle Available",
    subtitle: "Matched to Your Group & Route",
    description: "Clean, comfortable, and well-maintained fleet across multiple vehicle segments — air-conditioned sedans for small families, spacious SUVs, and tempo travellers for groups.",
    features: [
      "Full climate control AC in all vehicles",
      "Clean and sanitized before every trip",
      "Comfortable suspension for long highway runs",
      "Prompt coordination directly with the operator"
    ],
    icon: "Car",
    whatsappMessage: "Hello, I want to enquire about vehicle availability for an upcoming trip."
  },
  {
    id: "custom-packages",
    title: "Custom Tour Packages",
    subtitle: "Crafted Itineraries & Multi-Day Trips",
    description: "Tailored temple circuits, coastal holiday explorations, and scenic outstation trips designed around your schedule, group size, and preferred pace.",
    features: [
      "Custom day-wise itinerary planning",
      "Temple circuits with customized halting times",
      "Sightseeing and coastal scenic spots on request",
      "Transparent point-to-point or package quotes"
    ],
    icon: "Compass",
    whatsappMessage: "Hello, I want to enquire about custom tour packages from Udupi."
  }
];

export const FLEET_CATEGORIES: VehicleCategory[] = [
  {
    id: "sedan",
    name: "Comfort Sedan",
    tagline: "Toyota Etios / Maruti Dzire or equivalent",
    description: "Ideal for solo travelers, couples, and small families requiring smooth airport transfers or comfortable city and inter-city journeys.",
    capacity: {
      passengers: "Up to 4 Passengers",
      luggage: "2 Large + 2 Small Bags",
      ac: true
    },
    examples: ["Toyota Etios", "Maruti Suzuki Dzire", "Hyundai Aura"],
    idealFor: ["Airport drops & pickups", "Manipal student travel", "Day trips & local visits", "City and highway commutes"],
    placeholderLabel: "SEDAN CLASS",
    imageAlt: "Toyota Etios / Maruti Dzire AC Sedan - RV Tours & Travels Fleet",
    imageSrc: "/fleet-etios-v2.jpg",
    whatsappMessage: "Hello, I would like to book/enquire about a Comfort Sedan (Etios/Dzire class)."
  },
  {
    id: "suv",
    name: "Premium SUV / MUV",
    tagline: "Toyota Innova Crysta / Ertiga or equivalent",
    description: "The preferred choice for family vacations, ghat road trips, and outstation travel. Ample legroom, robust luggage capacity, and superior comfort.",
    capacity: {
      passengers: "6 to 7 Passengers",
      luggage: "4 Large + 3 Small Bags",
      ac: true
    },
    examples: ["Toyota Innova Crysta", "Maruti Ertiga", "Mahindra Xylo"],
    idealFor: ["Family pilgrimage circuits", "Ghat routes & highway journeys", "Outstation round trips", "Long-distance travel"],
    placeholderLabel: "SUV / MUV CLASS",
    imageAlt: "Toyota Innova Crysta / Ertiga AC SUV - RV Tours & Travels Fleet",
    imageSrc: "/fleet-innova-v2.jpg",
    whatsappMessage: "Hello, I would like to book/enquire about a Premium SUV (Innova / Ertiga class)."
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    tagline: "12 / 17 / 20 Seater Force Executive",
    description: "Spacious group travel solution with high-roof seating, dedicated luggage aisle, pushback seats, and individual AC vents for large family and group tours.",
    capacity: {
      passengers: "12 to 20 Passengers",
      luggage: "10+ Large Suitcases",
      ac: true
    },
    examples: ["Force Urbania", "Force Tempo Traveller", "Executive Minibus"],
    idealFor: ["Extended family tours", "Function & wedding transport", "Pilgrim groups", "Group outings"],
    placeholderLabel: "EXECUTIVE VAN",
    imageAlt: "Force Tempo Traveller AC Minibus - RV Tours & Travels Fleet",
    imageSrc: "/fleet-tempo-v2.jpg",
    whatsappMessage: "Hello, I would like to book/enquire about a Tempo Traveller for group travel."
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: "Proprietor-Run Dependability",
    subtitle: "Direct Contact with R Ramesh",
    description: "No confusing call centers or automated app chatbots. You speak directly with the owner, ensuring accountable and punctual coordination for every booking.",
    icon: "ShieldCheck"
  },
  {
    title: "Route & Coastal Ghats Expertise",
    subtitle: "Experienced Local Drivers",
    description: "Familiarity with coastal Karnataka highways, ghat roads, temple access points, and local travel conditions.",
    icon: "Navigation"
  },
  {
    title: "All-Karnataka Coverage",
    subtitle: "Flexible Trip Configurations",
    description: "Whether you need an airport transfer to Mangalore or a multi-day itinerary across Karnataka, routes are tailored to your requirements.",
    icon: "Map"
  },
  {
    title: "Honest, Transparent Pricing",
    subtitle: "No Hidden Surprises",
    description: "Clear communication on tolls, permits, driver allowance, and distance estimates before your journey begins.",
    icon: "Receipt"
  }
];

export const DEPARTURE_BOARD_DATA = [
  { code: "ORIGIN", value: "Udupi, KA (13.34°N, 74.74°E)", status: "ACTIVE" },
  { code: "AIRPORT CONNECT", value: "Mangalore (IXE) & Regional Terminals", status: "SCHEDULED" },
  { code: "COVERAGE", value: "Coastal Karnataka & Pan-State Routes", status: "AVAILABLE" },
  { code: "OPERATOR", value: "R Ramesh · Proprietor", status: "ON DUTY" },
  { code: "COMMUNICATION", value: "Direct Phone & WhatsApp Dispatch", status: "DIRECT" },
] as const;

export interface FaqItem {
  category: "travels" | "vehicles" | "gifts";
  q: string;
  a: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    category: "travels",
    q: "Which travels is best?",
    a: "The best travels service is one that provides personalized owner-driven coordination, transparent pricing with zero surge charges, punctual pickups, and route-expert chauffeurs. For travel across Karnataka and coastal regions, RV Tours and Travels (managed directly by proprietor R Ramesh) is widely recognized for spotless air-conditioned vehicles, safe driving on Western Ghats, and 24/7 dedicated customer support.",
  },
  {
    category: "vehicles",
    q: "Which car is best for tour and travels?",
    a: "The Toyota Innova Crysta is widely considered the best car for tour and travels due to its exceptional ride comfort, spacious captain seating for 6–7 passengers, generous luggage boot, and reliable performance on long highway stretches and ghat roads. For smaller families (1–4 passengers), the Toyota Etios or Maruti Dzire offers excellent comfort and mileage, while the luxury Tempo Traveller (12–20 seater) is ideal for large group excursions.",
  },
  {
    category: "travels",
    q: "Which travels is best in India?",
    a: "The best travels in India depends on the journey type: For personalized regional road tours, coastal temple yatras, and private airport transfers in South India, boutique owner-operated fleets like RV Tours and Travels offer superior reliability and care. For pan-India rail journeys, IRCTC provides premier heritage trains, and for scheduled interstate coach transport, premium operators like KSRTC (Airavat Club Class) lead the industry.",
  },
  {
    category: "travels",
    q: "Which travels is best in Bangalore?",
    a: "For outstation journeys connecting Bangalore to coastal Karnataka (Udupi, Mangalore, Murudeshwar, Gokarna) and the Western Ghats (Coorg, Chikmagalur), RV Tours and Travels is among the top choices for customized tour packages and dedicated private chauffeur cabs with fixed transparent tariffs and expert ghat drivers.",
  },
  {
    category: "vehicles",
    q: "Which is the best car for travels in India?",
    a: "The best car for road travels in India is the Toyota Innova Crysta / Hycross for long-distance family travel and rough road handling, followed by the Maruti Suzuki Ertiga for budget-conscious families. For budget solo or couple travel, the Toyota Etios / Maruti Dzire is ideal. For joint family pilgrimages and large group holiday tours, luxury Force Tempo Travellers provide unmatched space and comfort.",
  },
  {
    category: "travels",
    q: "Which is the best tours and travels in India?",
    a: "For customized road tours, spiritual pilgrimages, and chauffeur services in Karnataka, RV Tours and Travels stands out for transparent, un-surged pricing, pristine vehicles, and owner-supervised itineraries. For large pan-India holiday packages, established national operators exist, but regional boutique agencies offer far higher reliability and personalized customer service.",
  },
  {
    category: "gifts",
    q: "Best gifts for someone who travels?",
    a: "The best gifts for travelers include: Active Noise-Cancelling (ANC) headphones or earbuds, universal worldwide travel adapters with high-speed USB-C PD charging, high-capacity portable power banks (20,000mAh+), memory foam ergonomic neck pillows, packing cube compression organizers, RFID-blocking travel wallets, and lightweight compact digital luggage scales.",
  },
  {
    category: "gifts",
    q: "Best gifts for someone who travels for work?",
    a: "The best gifts for business and work travelers include: sleek laptop backpacks with TSA-friendly compartments and USB passthrough, portable second laptop monitors, noise-canceling headsets with crystal-clear microphones for conference calls, wrinkle-resistant garment bags, multi-device fast GaN travel chargers, and portable power banks with laptop charging capability.",
  },
  {
    category: "gifts",
    q: "Best gifts for someone who travels a lot for work?",
    a: "For frequent corporate and business flyers, top gifts include: premium ultra-durable hardshell spinner carry-on luggage, airline-approved portable power stations with 65W+ laptop charging, premium ANC headphones (such as Sony WH-1000XM5 or Bose QuietComfort), leather passport and document organizers, international multi-port GaN power strips, and subscription to lounge access or travel organizer apps.",
  },
  {
    category: "vehicles",
    q: "Which is the best bus travels in India?",
    a: "In the luxury government sector, KSRTC (Karnataka State Road Transport Corporation) with its Airavat Club Class (Volvo Multi-Axle) and Ambari Utsav (Volvo Sleeper) is considered the best bus service in India for safety, punctuality, and comfort. For private group travels, booking a dedicated private Luxury AC Tempo Traveller from RV Tours and Travels provides greater flexibility, custom departure times, and door-to-door convenience.",
  },
];
