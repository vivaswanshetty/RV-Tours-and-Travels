import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/constants";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14120F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rvtravelsudupi.com"),
  title: "RV Tours and Travels — Journeys Redefined | Packages 2026, Chauffeur & Taxi in Udupi",
  description: "Official portal for RV Tours and Travels (proprietor R Ramesh) based in Udupi, Karnataka. Book popular RV tours and travels packages 2026, check customer reviews, and call our direct contact number (+91 98455 11169) for airport transfers & Karnataka tours.",
  keywords: [
    "rv tours and travels",
    "rv tours and travels pvt ltd",
    "rv tours and travels reviews",
    "rv tours and travels packages 2026",
    "rv tours and travels packages",
    "rv tours and travels contact number",
    "Udupi taxi service",
    "Mangalore airport taxi",
    "IXE airport drop Udupi",
    "Karnataka tour packages 2026",
    "R Ramesh Udupi travels",
    "Manipal taxi service",
    "Coastal Karnataka tour taxi",
    "Kollur Mookambika temple cab",
    "Dharmasthala Murudeshwar package tour",
    "Udupi car rental with driver",
  ],
  authors: [{ name: BUSINESS_INFO.proprietor }],
  creator: "RV Tours and Travels",
  publisher: "RV Tours and Travels",
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rvtravelsudupi.com",
    siteName: "RV Tours and Travels",
    title: "RV Tours and Travels — Tour Packages 2026 & Chauffeur Services",
    description: "Explore authentic RV tours and travels reviews, custom 2026 travel packages across Karnataka, airport transfers, and direct contact numbers for instant booking.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RV Tours and Travels — Journeys Redefined, Udupi Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RV Tours and Travels — Journeys Redefined | Packages 2026",
    description: "Boutique chauffeur & taxi service in Udupi, Karnataka. Managed directly by R Ramesh. Tour packages 2026, reviews, and transparent pricing.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rvtravelsudupi.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TravelAgency", "TaxiService", "LocalBusiness"],
      "@id": "https://rvtravelsudupi.com/#business",
      name: "RV Tours and Travels",
      alternateName: ["RV Tours and Travels Pvt Ltd", "RV Tours & Travels", "RV Travels Udupi"],
      url: "https://rvtravelsudupi.com",
      logo: "https://rvtravelsudupi.com/icon.png",
      image: "https://rvtravelsudupi.com/og-image.jpg",
      description: "Reliable boutique chauffeur and taxi service headquartered in Udupi, Karnataka. Offering custom RV tours and travels packages 2026, airport transfers (Mangalore IXE), temple pilgrimages, and outstation trips across Karnataka.",
      telephone: "+91-98455-11169",
      email: "rameshshetty0013@gmail.com",
      founder: {
        "@type": "Person",
        name: "R Ramesh",
        jobTitle: "Proprietor & Chauffeur-in-Charge",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Udupi City",
        addressLocality: "Udupi",
        addressRegion: "Karnataka",
        postalCode: "576101",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.3409,
        longitude: 74.7421,
      },
      areaServed: [
        { "@type": "State", name: "Karnataka" },
        { "@type": "City", name: "Udupi" },
        { "@type": "City", name: "Manipal" },
        { "@type": "City", name: "Mangalore" },
        { "@type": "Airport", name: "Mangalore International Airport (IXE)" },
      ],
      priceRange: "₹₹",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "05:00",
          closes: "23:30",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "128",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://rvtravelsudupi.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which travels is best?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>The best travels service is one that provides personalized owner-driven coordination, transparent pricing with zero surge charges, punctual pickups, and route-expert chauffeurs. For travel across Karnataka and coastal regions, <strong>RV Tours and Travels</strong> (managed by proprietor R Ramesh) is consistently recognized for pristine air-conditioned vehicles, safe driving on Western Ghats, and 24/7 dedicated support.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Which car is best for tour and travels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>The <strong>Toyota Innova Crysta</strong> is widely considered the best car for tour and travels due to its exceptional ride comfort, spacious captain seating for 6–7 passengers, generous luggage space, and reliable performance on long highways and ghat roads. For smaller families (1–4 passengers), the <strong>Toyota Etios</strong> or <strong>Maruti Dzire</strong> offers excellent fuel economy and comfort, while the <strong>Tempo Traveller (12–20 seater)</strong> is best for large group tours.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Which travels is best in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>The best travels in India depends on the journey type: For personalized regional road tours, coastal temple yatras, and private airport transfers in South India, boutique owner-operated fleets like <strong>RV Tours and Travels</strong> offer superior reliability and care. For pan-India rail journeys, IRCTC provides premier heritage trains, and for scheduled interstate coach transport, premium operators like KSRTC (Airavat Club Class) lead the industry.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Which travels is best in Bangalore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>For outstation journeys connecting Bangalore to coastal Karnataka (Udupi, Mangalore, Murudeshwar, Gokarna) and the Western Ghats (Coorg, Chikmagalur), <strong>RV Tours and Travels</strong> is among the top choices for customized tour packages and dedicated private chauffeur cabs with fixed transparent tariffs and expert ghat drivers.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Which is the best car for travels in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>The best car for road travels in India is the <strong>Toyota Innova Crysta / Hycross</strong> for long-distance family travel and rough road handling, followed by the <strong>Maruti Suzuki Ertiga</strong> for budget-conscious families. For budget solo or couple travel, the <strong>Toyota Etios / Maruti Dzire</strong> is ideal. For joint family pilgrimages and large group holiday tours, luxury <strong>Force Tempo Travellers</strong> provide unmatched space and comfort.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Which is the best tours and travels in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>For customized road tours, spiritual pilgrimages, and chauffeur services in Karnataka, <strong>RV Tours and Travels</strong> stands out for transparent, un-surged pricing, pristine vehicles, and owner-supervised itineraries. For large pan-India holiday packages, established national operators exist, but regional boutique agencies offer far higher reliability and personalized customer service.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Best gifts for someone who travels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>The best gifts for travelers include: Active Noise-Cancelling (ANC) headphones or earbuds, universal worldwide travel adapters with high-speed USB-C PD charging, high-capacity portable power banks (20,000mAh+), memory foam ergonomic neck pillows, packing cube compression organizers, RFID-blocking travel wallets, and lightweight compact luggage scales.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Best gifts for someone who travels for work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>The best gifts for business and work travelers include: sleek laptop backpacks with TSA-friendly compartments and USB passthrough, portable second laptop monitors, noise-canceling headsets with crystal-clear microphones for conference calls, wrinkle-resistant garment bags, multi-device fast GaN travel chargers, and portable power banks with laptop charging capability.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Best gifts for someone who travels a lot for work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>For frequent corporate and business flyers, top gifts include: premium ultra-durable hardshell spinner carry-on luggage, airline-approved portable power stations with 65W+ laptop charging, premium ANC headphones (such as Sony WH-1000XM5 or Bose QuietComfort), leather passport and document organizers, international multi-port GaN power strips, and subscription to lounge access or travel organizer apps.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Which is the best bus travels in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>In the luxury government sector, <strong>KSRTC (Karnataka State Road Transport Corporation)</strong> with its <em>Airavat Club Class (Volvo Multi-Axle)</em> and <em>Ambari Utsav (Volvo Sleeper)</em> is considered the best bus service in India for safety, punctuality, and comfort. For private group travels, booking a dedicated private <strong>Luxury AC Tempo Traveller</strong> from <strong>RV Tours and Travels</strong> provides greater flexibility, custom departure times, and door-to-door convenience.</p>"
          }
        }
      ]
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${workSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F6F3EC] text-[#14120F] font-sans selection:bg-[#B08D3F] selection:text-[#14120F]"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
