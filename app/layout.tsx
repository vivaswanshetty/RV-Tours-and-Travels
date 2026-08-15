import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Work_Sans } from "next/font/google";
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
  metadataBase: new URL("https://rvtoursandtravels.in"),
  title: `${BUSINESS_INFO.name} — ${BUSINESS_INFO.tagline} | Taxi & Chauffeur in Udupi`,
  description: `Reliable chauffeur-driven taxi and tour service based in Udupi, Karnataka. Airport transfers (Mangalore IXE and regional terminals), all destinations within Karnataka, and custom tour packages. Direct coordination with proprietor ${BUSINESS_INFO.proprietor}.`,
  keywords: [
    "Udupi taxi service",
    "RV Tours and Travels",
    "Mangalore airport taxi",
    "IXE airport drop Udupi",
    "Udupi cab service with driver",
    "Karnataka tour packages",
    "R Ramesh Udupi travels",
    "Manipal taxi service",
    "Coastal Karnataka tour taxi"
  ],
  authors: [{ name: BUSINESS_INFO.proprietor }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rvtoursandtravels.in",
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} — ${BUSINESS_INFO.tagline}`,
    description: `Punctual, trustworthy chauffeur service based in Udupi, Karnataka. Managed directly by ${BUSINESS_INFO.proprietor}. Airport transfers, temple circuits & all-Karnataka journeys.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} — Journeys Redefined, Udupi Karnataka`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} — ${BUSINESS_INFO.tagline}`,
    description: `Boutique chauffeur & taxi service in Udupi, Karnataka. Managed directly by ${BUSINESS_INFO.proprietor}.`,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F6F3EC] text-[#14120F] font-sans selection:bg-[#B08D3F] selection:text-[#14120F]"
      >
        {children}
      </body>
    </html>
  );
}
