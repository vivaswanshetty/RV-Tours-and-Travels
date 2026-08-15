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
  { label: "Overview", href: "/#overview", waypoint: "01" },
  { label: "Services", href: "/#services", waypoint: "02" },
  { label: "Fleet", href: "/#fleet", waypoint: "03" },
  { label: "About", href: "/#about", waypoint: "04" },
  { label: "Contact", href: "/#contact", waypoint: "05" },
] as const;

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
