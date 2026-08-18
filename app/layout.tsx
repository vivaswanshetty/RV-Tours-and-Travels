import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
  description: "Direct proprietor-managed chauffeur and taxi service in Udupi, Karnataka. Book Karnataka tour packages 2026, Mangalore Airport (IXE) transfers, and temple pilgrimages with transparent pricing.",
  keywords: [
    "rv tours and travels",
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
    description: "Direct owner-driven chauffeur & taxi service in Udupi. Punctual airport transfers (IXE), temple tours, and Karnataka road trips with zero surge pricing.",
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
    description: "Boutique chauffeur & taxi service in Udupi, Karnataka. Managed directly by R Ramesh. Tour packages 2026, airport transfers, and transparent pricing.",
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
      alternateName: ["RV Tours & Travels", "RV Travels Udupi"],
      url: "https://rvtravelsudupi.com",
      logo: "https://rvtravelsudupi.com/icon.png",
      image: "https://rvtravelsudupi.com/og-image.jpg",
      description: "Reliable boutique chauffeur and taxi service headquartered in Udupi, Karnataka. Offering custom tour packages 2026, airport transfers (Mangalore IXE), temple pilgrimages, and outstation trips across Karnataka.",
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
    },
    {
      "@type": "FAQPage",
      "@id": "https://rvtravelsudupi.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I book a cab or tour package with RV Tours and Travels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>Booking is simple and direct. Send a WhatsApp message to +91 98455 11169 or call proprietor R Ramesh directly. Share your travel dates, pickup location, destination, and passenger count for an instant transparent quote and immediate vehicle confirmation.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Are there any hidden charges, night fees, or surge pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>No. RV Tours and Travels operates on strict transparent pricing. The agreed fare covers the vehicle, fuel, and chauffeur allowance. Tolls and parking fees are charged at actuals with zero surge multipliers.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Do you provide airport pickup and drop services for Mangalore Airport (IXE)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>Yes, airport transfers between Mangalore International Airport (IXE) and Udupi, Manipal, and Kundapura are our daily specialty with flight tracking for on-time arrivals terminal pickup.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Which car is best for my family or group size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>For 1–4 passengers, the Maruti Suzuki Dzire or Toyota Etios provides comfortable, AC travel. For 5–7 passengers or multi-day temple circuits, the Toyota Innova Crysta offers captain seating and generous luggage space. For 8–20 passengers, our luxury Force Tempo Travellers provide pushback seats and separate AC vents.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Can you customize multi-day temple tour circuits in Coastal Karnataka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>Yes. We tailor custom temple pilgrimages covering Udupi Sri Krishna Matha, Kollur Mookambika, Murudeshwar, Gokarna, Kateel, Dharmasthala, Kukke Subramanya, Sringeri, and Horanadu according to your family's schedule.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Are your chauffeurs experienced with Western Ghats hill driving?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>Yes. Our drivers have extensive experience safely navigating the hairpin curves and weather conditions of Agumbe, Charmadi, Shiradi, and Kudremukh across all seasons.</p>"
          }
        },
        {
          "@type": "Question",
          name: "Do you provide outstation cabs to Bangalore, Coorg, Chikmagalur, and Goa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>Yes. We provide dedicated outstation chauffeur service from Udupi, Manipal, and Mangalore to Bangalore, Mysore, Coorg, Chikmagalur, and Goa with scheduled scenic rest stops.</p>"
          }
        },
        {
          "@type": "Question",
          name: "What happens if my train, flight, or travel plan changes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<p>All trips are managed directly by proprietor R Ramesh. Simply inform us via WhatsApp or call as early as possible and we will adjust your vehicle allocation smoothly without cancellation penalties.</p>"
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
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RKP9HBQ5D2"
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RKP9HBQ5D2');
            `,
          }}
        />
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
