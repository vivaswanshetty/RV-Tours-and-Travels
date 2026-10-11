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

export interface TourPackageImage {
  src: string;
  alt: string;
  label?: string;
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
  imageSrc: string;
  imageAlt: string;
  images?: TourPackageImage[];
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
  whatsappUrl: `https://wa.me/919845511169?text=${encodeURIComponent(
    "Hello Ramesh, I would like to enquire about booking a cab with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Destination:* [Enter destination — mention if any other places also]\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  )}`,
  address: "Near Sri Krishna Matha, Car Street, Udupi, Karnataka 576101",
  experienceYears: 15,
  serviceArea: "Udupi, Manipal, Mangalore, Coastal Karnataka & Interstate Routes",
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
    badge: "MOST POPULAR · 2026",
    popular: true,
    stops: ["Udupi Sri Krishna Matha", "Maravanthe Beach", "Kollur Mookambika Temple", "Murudeshwar Shiva Temple & Beach"],
    description: "The premier coastal pilgrimage route connecting Udupi's Krishna Matha, Kollur Mookambika, and the majestic 123-foot Shiva statue at Murudeshwar.",
    idealVehicle: "Comfort Sedan or Innova Crysta",
    whatsappMessage:
      "Hello Ramesh, I would like to enquire about the Kollur Mookambika & Murudeshwar Coastal Circuit Tour.\n\n*Trip Enquiry Details:*\n• *Tour Package / Destination:* Kollur Mookambika & Murudeshwar Coastal Circuit (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate.",
    imageSrc: "/packages/kollur-mookambika.jpg",
    imageAlt: "Kollur Sri Mookambika Temple and Murudeshwar Shiva Temple Coastal Circuit",
    images: [
      {
        src: "/packages/kollur-mookambika.jpg",
        alt: "Kollur Sri Mookambika Temple Main Entrance Gate and Courtyard",
        label: "Kollur Sri Mookambika Temple",
      },
      {
        src: "/destinations/murudeshwar.jpg",
        alt: "Murudeshwar Shiva Temple and Coastal Beach",
        label: "Murudeshwar Temple & Beach",
      },
    ],
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
    description: "A peaceful spiritual pilgrimage across Western Ghat foothills planned for convenient darshan timings and senior citizen comfort.",
    idealVehicle: "Innova Crysta / Ertiga / Sedan",
    whatsappMessage:
      "Hello Ramesh, I would like to enquire about the Dharmasthala, Kukke Subramanya & Kateel Yatra.\n\n*Trip Enquiry Details:*\n• *Tour Package / Destination:* Dharmasthala, Kukke Subramanya & Kateel Yatra (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate.",
    imageSrc: "/packages/dharmasthala.jpg",
    imageAlt: "Dharmasthala Sri Manjunatha Swamy Temple and Kukke Subramanya Pilgrimage Tour",
    images: [
      {
        src: "/packages/dharmasthala.jpg",
        alt: "Dharmasthala Sri Manjunatha Swamy Temple Entrance",
        label: "Dharmasthala Manjunatha Swamy",
      },
      {
        src: "/packages/kukke-subramanya.jpg",
        alt: "Kukke Sri Subrahmanya Temple Gopuram with Western Ghats Mountain Backdrop",
        label: "Kukke Sri Subrahmanya Temple",
      },
      {
        src: "/packages/kateel-durgaparameshwari.jpg",
        alt: "Kateel Shree Durgaparameshwari Temple Ornate Entrance Arch",
        label: "Kateel Durgaparameshwari Temple",
      },
    ],
  },
  {
    id: "gokarna-karwar-coastal",
    title: "Gokarna, Om Beach & Karwar Heritage Expedition",
    subtitle: "Beaches, Ancient Temples & Coastal Highway Drives",
    duration: "2 Days / 1 Night",
    category: "coastal",
    badge: "COASTAL ESCAPE",
    stops: ["Udupi", "Maravanthe Sunset Drive", "Murudeshwar", "Gokarna Mahabaleshwar", "Om & Kudle Beach", "Karwar"],
    description: "Explore the dramatic coastline of Uttara Kannada with oceanfront scenic halts and flexible beach excursion schedules.",
    idealVehicle: "Toyota Innova Crysta or Sedan",
    whatsappMessage:
      "Hello Ramesh, I would like to enquire about the Gokarna, Om Beach & Karwar Heritage Expedition.\n\n*Trip Enquiry Details:*\n• *Tour Package / Destination:* Gokarna, Om Beach & Karwar Heritage Expedition (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate.",
    imageSrc: "/packages/gokarna-om-beach-aerial.jpg",
    imageAlt: "Om Beach Gokarna Aerial View and Karwar Coastal Highway Tour",
    images: [
      {
        src: "/packages/gokarna-om-beach-aerial.jpg",
        alt: "Om Beach Gokarna Aerial Panoramic View of Turquoise Arabian Coastline",
        label: "Om Beach Gokarna (Aerial View)",
      },
      {
        src: "/packages/gokarna-om-beach.jpg",
        alt: "Om Beach Gokarna Shoreline with Rock Formations and Sea Waves",
        label: "Om Beach Shoreline & Waves",
      },
    ],
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
    whatsappMessage:
      "Hello Ramesh, I would like to enquire about the Western Ghats Highlands: Chikmagalur & Coorg Package.\n\n*Trip Enquiry Details:*\n• *Tour Package / Destination:* Western Ghats Highlands: Chikmagalur & Coorg (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate.",
    imageSrc: "/destinations/western-ghats.jpg",
    imageAlt: "Scenic Western Ghats mountain ridges and mist-covered valleys",
    images: [
      {
        src: "/destinations/western-ghats.jpg",
        alt: "Western Ghats Mountain Ranges and Kudremukh Valley Panorama",
        label: "Western Ghats & Chikmagalur",
      },
      {
        src: "/packages/coorg-hills.jpg",
        alt: "Coorg Rolling Green Mountains and Cloud-Kissed Mist View",
        label: "Coorg Misty Highlands",
      },
    ],
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
    whatsappMessage:
      "Hello Ramesh, I need to book a Mangalore Airport (IXE) Drop / Pickup with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Service / Route:* Mangalore Airport (IXE) Curbside Transit (mention if any other places / stops also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share cab availability and tariff estimate.",
    imageSrc: "/packages/mangalore-airport-curbside.jpg",
    imageAlt: "Mangalore International Airport Curbside Terminal Entrance & Flight Connect",
    images: [
      {
        src: "/packages/mangalore-airport-curbside.jpg",
        alt: "Mangalore International Airport (IXE) Curbside Entrance and Pick-up Area",
        label: "Mangalore Airport (IXE) Curbside",
      },
      {
        src: "/destinations/mangalore-airport.jpg",
        alt: "Mangalore International Airport Modern Terminal Concourse and Tarmac",
        label: "IXE Terminal & Flight Gates",
      },
    ],
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
    whatsappMessage:
      "Hello Ramesh, I would like to plan a bespoke multi-day Karnataka tour with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Tour Package / Destination:* Bespoke All-Karnataka Road Trip (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share route options and tariff estimate.",
    imageSrc: "/packages/hampi-stone-chariot.jpg",
    imageAlt: "Hampi Stone Chariot, Mysore Palace and Belur Halebidu Heritage Tour",
    images: [
      {
        src: "/packages/hampi-stone-chariot.jpg",
        alt: "Hampi UNESCO World Heritage Site Iconic Stone Chariot at Vijaya Vittala Temple",
        label: "Hampi Stone Chariot (UNESCO)",
      },
      {
        src: "/packages/mysore-palace-night.jpg",
        alt: "Mysore Royal Palace Grand Night Illumination Reflected on Wet Courtyard",
        label: "Mysore Palace (Night Lights)",
      },
      {
        src: "/packages/belur-halebidu-temple.jpg",
        alt: "Belur and Halebidu Hoysala Architecture and Intricate Star-Shaped Stone Shrine",
        label: "Belur & Halebidu Hoysala Temples",
      },
    ],
  },
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
    whatsappMessage:
      "Hello Ramesh, I want to enquire about Airport Drops & Pickups with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Service / Route:* Airport Drops & Pickups (Mangalore IXE — mention if any other places / stops also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share cab availability and tariff estimate."
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
    whatsappMessage:
      "Hello Ramesh, I want to enquire about an all-Karnataka outstation trip with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Destination:* All Destinations Within Karnataka (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff details."
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
    whatsappMessage:
      "Hello Ramesh, I want to check vehicle availability and rates with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Destination:* [Enter destination — mention if any other places also]\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share available vehicles and tariff details."
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
    whatsappMessage:
      "Hello Ramesh, I want to enquire about a custom tour package with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Service / Destination:* Custom Tour Package & Temple Itinerary (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share itinerary suggestions and tariff estimate."
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
    whatsappMessage:
      "Hello Ramesh, I would like to book a Comfort Sedan with RV Tours & Travels.\n\n*Booking Enquiry Details:*\n• *Destination:* [Enter destination — mention if any other places also]\n• *Vehicle Name:* Comfort Sedan (Toyota Etios / Maruti Dzire)\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share availability and tariff details."
  },
  {
    id: "suv",
    name: "Premium SUV / MUV",
    tagline: "Toyota Innova Crysta / Ertiga or equivalent",
    description: "Spacious legroom and luggage capacity for family vacations, ghat road trips, and outstation travel.",
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
    whatsappMessage:
      "Hello Ramesh, I would like to book a Premium SUV with RV Tours & Travels.\n\n*Booking Enquiry Details:*\n• *Destination:* [Enter destination — mention if any other places also]\n• *Vehicle Name:* Premium SUV / MUV (Toyota Innova Crysta / Ertiga)\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share availability and tariff details."
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
    whatsappMessage:
      "Hello Ramesh, I would like to book a Tempo Traveller with RV Tours & Travels.\n\n*Booking Enquiry Details:*\n• *Destination:* [Enter destination — mention if any other places also]\n• *Vehicle Name:* Tempo Traveller (12 / 17 / 20 Seater Force Executive)\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share availability and tariff details."
  }
];

export interface DestinationItem {
  id: string;
  name: string;
  sector: string;
  ticketCode: string;
  badge: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  images?: TourPackageImage[];
  highlights: string[];
  whatsappMessage: string;
  featured?: boolean;
}

export const DESTINATIONS: DestinationItem[] = [
  {
    id: "udupi-coastal",
    name: "Udupi & Coastal Karnataka",
    sector: "UDUPI (UD) ➔ COASTAL CIRCUIT",
    ticketCode: "TKT-UD-01",
    badge: "HOME BASE & COASTAL HUB",
    description: "Explore the sacred Sri Krishna Matha, Kapu Lighthouse, and pristine beaches with drivers who grew up on these coastal roads.",
    imageSrc: "/destinations/udupi-krishna-matha.jpg",
    imageAlt: "Udupi Sri Krishna Matha Deity Darshan and Coastal Karnataka",
    images: [
      {
        src: "/destinations/udupi-krishna-matha.jpg",
        alt: "Udupi Sri Krishna Matha Divine Deity Darshan with Golden Kavacha and Garlands",
        label: "Udupi Sri Krishna Matha",
      },
      {
        src: "/destinations/udupi.jpg",
        alt: "Kapu Beach Lighthouse and Rocky Coast in Udupi, Karnataka",
        label: "Kapu Beach & Lighthouse",
      },
    ],
    highlights: ["Sri Krishna Matha", "Malpe Beach & St. Mary's Island", "Kapu Lighthouse & Sunset", "Coastal Cuisine Trail"],
    whatsappMessage:
      "Hello Ramesh, I would like to plan a trip to Udupi & Coastal Karnataka with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Destination:* Udupi & Coastal Karnataka Circuit (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate.",
    featured: true
  },
  {
    id: "kollur-murudeshwar",
    name: "Kollur Mookambika & Murudeshwar",
    sector: "UDUPI (UD) ➔ KOLLUR / MURUDESHWAR",
    ticketCode: "TKT-KL-02",
    badge: "SACRED COASTAL CIRCUIT",
    description: "Sacred coastal pilgrimage connecting Kollur Sri Mookambika Temple with the iconic seaside Shiva statue at Murudeshwar.",
    imageSrc: "/packages/kollur-mookambika.jpg",
    imageAlt: "Kollur Sri Mookambika Temple and Murudeshwar Shiva Statue, Karnataka",
    images: [
      {
        src: "/packages/kollur-mookambika.jpg",
        alt: "Kollur Sri Mookambika Temple Main Entrance Gate and Courtyard",
        label: "Kollur Sri Mookambika Temple",
      },
      {
        src: "/destinations/murudeshwar.jpg",
        alt: "Murudeshwar Shiva Statue and Coastal Temple Cliffs, Karnataka",
        label: "Murudeshwar Shiva Statue & Beach",
      },
    ],
    highlights: ["Kollur Sri Mookambika", "Murudeshwar Shiva Statue", "Maravanthe Sunset Drive"],
    whatsappMessage:
      "Hello Ramesh, I would like to plan a trip to Kollur Mookambika & Murudeshwar with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Destination:* Kollur Mookambika & Murudeshwar Circuit (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  },
  {
    id: "goa",
    name: "Goa (North & South)",
    sector: "UDUPI (UD) ➔ GOA (GOI / GOX)",
    ticketCode: "TKT-GOA-03",
    badge: "INTERSTATE COASTAL ESCAPE",
    description: "Comfortable door-to-door interstate highway travel to South and North Goa with scenic coastal rest stops.",
    imageSrc: "/destinations/goa-beach-shacks.jpg",
    imageAlt: "Vibrant Goa Beach Shacks and Golden Palm Shore",
    images: [
      {
        src: "/destinations/goa-beach-shacks.jpg",
        alt: "Vibrant Goa Beach Shacks with Colorful Canopies and Palm Trees",
        label: "Goa Beach Shacks & Coast",
      },
      {
        src: "/destinations/goa.jpg",
        alt: "Palm-Fringed Golden Beach and Turquoise Waters in Goa",
        label: "Scenic Goa Coastal Shore",
      },
    ],
    highlights: ["Palolem & South Goa", "Panaji Heritage Quarters", "North Goa Beach Hubs"],
    whatsappMessage:
      "Hello Ramesh, I would like to plan a trip to Goa (North & South) with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Destination:* Goa (North & South) Coastal Road Trip (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  },
  {
    id: "kerala-mysuru-coorg",
    name: "Kerala, Mysuru & Coorg",
    sector: "UDUPI (UD) ➔ COORG / MYSURU / KERALA",
    ticketCode: "TKT-SOU-04",
    badge: "HIGHLANDS & SOUTHERN CORRIDORS",
    description: "Custom outstation journeys connecting Western Ghats coffee estates, royal Mysuru heritage, and South India corridors on your schedule.",
    imageSrc: "/packages/mysore-palace-night.jpg",
    imageAlt: "Mysore Palace, Coorg Highlands, and Scenic Western Ghats Roads",
    images: [
      {
        src: "/packages/mysore-palace-night.jpg",
        alt: "Mysore Royal Palace Grand Night Illumination Reflected on Wet Courtyard",
        label: "Mysore Royal Palace",
      },
      {
        src: "/packages/coorg-hills.jpg",
        alt: "Coorg Rolling Green Mountains and Cloud-Kissed Mist View",
        label: "Coorg Misty Highlands",
      },
      {
        src: "/destinations/western-ghats.jpg",
        alt: "Western Ghats Mountain Ranges and Kudremukh Valley Panorama",
        label: "Western Ghats Scenic Roads",
      },
    ],
    highlights: ["Coorg Coffee Hills", "Mysuru Royal Heritage", "Scenic Western Ghats Roads"],
    whatsappMessage:
      "Hello Ramesh, I would like to plan an outstation trip to Kerala, Mysuru & Coorg with RV Tours & Travels.\n\n*Trip Enquiry Details:*\n• *Destination:* Kerala, Mysuru & Coorg Highlands (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  }
];

export interface SapthaKshetraItem {
  id: string;
  number: string;
  name: string;
  templeName: string;
  shortLine: string;
  imageSrc: string;
  imageAlt: string;
  whatsappMessage: string;
}

export const SAPTHA_KSHETRAS: SapthaKshetraItem[] = [
  {
    id: "udupi",
    number: "01",
    name: "Udupi",
    templeName: "Sri Krishna Matha",
    shortLine: "Sacred sanctum founded by Sri Madhvacharya with darshan through the Kanakana Kindi.",
    imageSrc: "/temples/udupi-krishna.jpg",
    imageAlt: "Sri Krishna Matha Temple in Udupi",
    whatsappMessage:
      "Hello Ramesh, I would like to plan a temple pilgrimage to Udupi Sri Krishna Matha with RV Tours & Travels.\n\n*Pilgrimage Details:*\n• *Temple / Destination:* Udupi Sri Krishna Matha (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  },
  {
    id: "kollur",
    number: "02",
    name: "Kollur",
    templeName: "Sri Mookambika Temple",
    shortLine: "Lush Kodachadri foothill shrine dedicated to Goddess Mookambika with ancient Jyothirlinga.",
    imageSrc: "/temples/kollur-mookambika.jpg",
    imageAlt: "Sri Mookambika Temple in Kollur",
    whatsappMessage:
      "Hello Ramesh, I would like to plan a temple pilgrimage to Sri Mookambika Temple (Kollur) with RV Tours & Travels.\n\n*Pilgrimage Details:*\n• *Temple / Destination:* Kollur Sri Mookambika Temple (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  },
  {
    id: "subrahmanya",
    number: "03",
    name: "Subrahmanya",
    templeName: "Kukke Sri Subrahmanya Temple",
    shortLine: "Revered Western Ghats riverside abode of Lord Subrahmanya on the banks of Kumaradhara.",
    imageSrc: "/temples/kukke-subrahmanya.jpg",
    imageAlt: "Kukke Sri Subrahmanya Temple",
    whatsappMessage:
      "Hello Ramesh, I would like to plan a temple pilgrimage to Kukke Sri Subrahmanya Temple with RV Tours & Travels.\n\n*Pilgrimage Details:*\n• *Temple / Destination:* Kukke Sri Subrahmanya Temple (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  },
  {
    id: "kumbasi",
    number: "04",
    name: "Kumbasi",
    templeName: "Anegudde Sri Vinayaka Temple",
    shortLine: "Hilltop Muktistala dedicated to Siddhi Vinayaka, visited for peaceful darshan and new beginnings.",
    imageSrc: "/temples/kumbasi-anegudde.jpg",
    imageAlt: "Anegudde Sri Vinayaka Temple in Kumbasi",
    whatsappMessage:
      "Hello Ramesh, I would like to plan a temple pilgrimage to Anegudde Sri Vinayaka Temple (Kumbasi) with RV Tours & Travels.\n\n*Pilgrimage Details:*\n• *Temple / Destination:* Kumbasi Anegudde Vinayaka Temple (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  },
  {
    id: "kodeshwara",
    number: "05",
    name: "Kodeshwara",
    templeName: "Sri Kotilingeshwara Temple",
    shortLine: "Ancient coastal Shiva kshetra celebrated for its vast 4-acre sacred Kotiteertha temple lake.",
    imageSrc: "/temples/koteshwara-kotilingeshwara.jpg",
    imageAlt: "Kotilingeshwara Temple in Koteshwara",
    whatsappMessage:
      "Hello Ramesh, I would like to plan a temple pilgrimage to Sri Kotilingeshwara Temple (Koteshwara) with RV Tours & Travels.\n\n*Pilgrimage Details:*\n• *Temple / Destination:* Koteshwara Kotilingeshwara Temple (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  },
  {
    id: "sankaranarayana",
    number: "06",
    name: "Sankaranarayana",
    templeName: "Sri Shankaranarayana Temple",
    shortLine: "Rare coastal shrine worshipping the harmonious combined divine presence of Shiva and Vishnu.",
    imageSrc: "/temples/sankaranarayana.jpg",
    imageAlt: "Sri Shankaranarayana Temple in Sankaranarayana",
    whatsappMessage:
      "Hello Ramesh, I would like to plan a temple pilgrimage to Sri Shankaranarayana Temple with RV Tours & Travels.\n\n*Pilgrimage Details:*\n• *Temple / Destination:* Shankaranarayana Temple (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  },
  {
    id: "gokarna",
    number: "07",
    name: "Gokarna",
    templeName: "Sri Mahabaleshwara Temple",
    shortLine: "Atmospheric seaside Atmalinga kshetra overlooking the Arabian Sea, revered as Dakshina Kashi.",
    imageSrc: "/temples/gokarna-mahabaleshwara.jpg",
    imageAlt: "Sri Mahabaleshwara Temple in Gokarna",
    whatsappMessage:
      "Hello Ramesh, I would like to plan a temple pilgrimage to Sri Mahabaleshwara Temple (Gokarna) with RV Tours & Travels.\n\n*Pilgrimage Details:*\n• *Temple / Destination:* Gokarna Mahabaleshwara Temple (mention if any other places also)\n• *Vehicle Type:* [Enter vehicle type / name]\n• *No. of Members:* [Enter no. of members]\n• *No. of Trip Days:* [Enter no. of days]\n• *Travel Dates:* [Enter travel dates (From – To)]\n• *Pickup Time (Optional):* [Enter preferred pickup time]\n\nPlease share vehicle availability and tariff estimate."
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: "Proprietor-Run Dependability",
    subtitle: "Direct Contact with R Ramesh",
    description: "No confusing call centers or automated app chatbots. You speak directly with the owner, ensuring accountable and punctual coordination for every booking.",
    icon: "UserCheck"
  },
  {
    title: "Fair, Transparent Pricing",
    subtitle: "No Hidden Charges",
    description: "Fair, Transparent Pricing — clear, honest quotes with no hidden charges",
    icon: "Receipt"
  },
  {
    title: "Insured Vehicles",
    subtitle: "Safety & Compliance",
    description: "Insured Vehicles — all vehicles insured for passenger safety and peace of mind",
    icon: "ShieldCheck"
  },
  {
    title: "Fast, Personal Response",
    subtitle: "Direct WhatsApp Dispatch",
    description: "Fast, Personal Response — detailed itinerary and quote over WhatsApp, typically within 2 hours.",
    icon: "Clock"
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
  category: "booking" | "airport" | "fleet" | "tours";
  q: string;
  a: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    category: "booking",
    q: "How do I book a cab or tour package with RV Tours and Travels?",
    a: "Booking is simple and direct. You can send a WhatsApp message to +91 98455 11169 or call proprietor R Ramesh directly. Share your travel dates, pickup location (e.g. Udupi, Manipal, or Mangalore Airport), destination, and number of passengers. We provide an instant transparent quote and confirm your vehicle allocation immediately.",
  },
  {
    category: "booking",
    q: "Are there any hidden charges, night fees, or surge pricing?",
    a: "No. RV Tours and Travels operates on a strict transparent pricing policy. The fare agreed upon covers your vehicle, fuel, and chauffeur allowance. Standard toll gates and parking fees are billed at actuals with zero unexpected surge multipliers or hidden markups.",
  },
  {
    category: "airport",
    q: "Do you provide airport pickup and drop services for Mangalore Airport (IXE)?",
    a: "Yes, airport transfers between Mangalore International Airport (IXE) and Udupi, Manipal, Kundapura, and surrounding coastal towns are our daily specialty. We track incoming flights to ensure your chauffeur is waiting at the arrivals terminal on time, even if your flight is delayed.",
  },
  {
    category: "fleet",
    q: "Which car is best for my family or group size?",
    a: "For solo travelers or couples/families with 1–4 passengers, the Maruti Suzuki Dzire or Toyota Etios provides a comfortable, economical ride with air-conditioned comfort. For families with 5–7 passengers or long-distance temple tours, the Toyota Innova Crysta offers premium captain seats and ample luggage boot space. For larger groups of 8–20 passengers, our luxury Force Tempo Travellers provide pushback seating and individual AC vents.",
  },
  {
    category: "tours",
    q: "Can you customize multi-day temple tour circuits in Coastal Karnataka?",
    a: "Yes. We regularly organize custom temple pilgrimages covering Sri Krishna Matha (Udupi), Kollur Mookambika, Murudeshwar, Gokarna Mahabaleshwar, Kateel Durga Parameshwari, Dharmasthala Manjunatha, Kukke Subramanya, Sringeri Sharada Peetham, and Horanadu. We tailor the order of darshan and travel pace to your family's preferences.",
  },
  {
    category: "tours",
    q: "Are your chauffeurs experienced with Western Ghats hill driving?",
    a: "Yes. Driving the winding ghat routes of Agumbe, Charmadi, Shiradi, and Kudremukh requires patience and mountain road experience. Our drivers have extensive experience navigating these roads safely across all seasons, including the monsoon.",
  },
  {
    category: "tours",
    q: "Do you provide outstation cabs to Bangalore, Coorg, Chikmagalur, and Goa?",
    a: "Yes. We offer one-way and round-trip outstation chauffeur services from Udupi, Manipal, and Mangalore to Bangalore, Mysore, Coorg (Madikeri), Chikmagalur, Hassan, Shimoga, and Goa with comfortable rest stops along scenic routes.",
  },
  {
    category: "booking",
    q: "What happens if my train, flight, or travel plan changes?",
    a: "Because all trips are coordinated directly with owner R Ramesh, schedule adjustments are handled with understanding and flexibility. Just notify us as early as possible via WhatsApp or phone so we can reschedule your vehicle without cancellation penalties.",
  },
];
