import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  // Basic Metadata
  title: {
    default:
      "GDI MACS - Hydrological, Agricultural & Construction Services in West Africa",
    template: "%s | GDI MACS",
  },
  description:
    "Leading provider of hydrological engineering, agricultural support, construction services, and logistics across 25+ countries in West Africa. Delivering sustainable solutions with 150 years combined experience.",

  // Keywords
  keywords: [
    "hydrological engineering West Africa",
    "agricultural support services",
    "construction services Ghana",
    "river maintenance Africa",
    "coastal protection services",
    "agro-logistics West Africa",
    "infrastructure development Ghana",
    "logistics services Africa",
    "dredging services",
    "farm support services",
    "earth moving operations",
    "mining reclamation",
    "GDI MACS",
    "GDI companies",
    "West African construction",
  ],

  // Authors
  authors: [
    { name: "GDI MACS" },
    { name: "Global Development & Investment Ltd" },
  ],

  // Creator
  creator: "GDI MACS",
  publisher: "GDI MACS",

  // Robots
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

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gdmimacs.com",
    siteName: "GDMI MACS",
    title: "GDI MACS - Your Partner in West Africa",
    description:
      "Leading provider of hydrological engineering, agricultural support, construction services, and logistics across 25+ countries in West Africa.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GDMI MACS - Hydrological, Agricultural & Construction Services",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "GDMI MACS - Your Partner in West Africa",
    description:
      "Leading provider of hydrological engineering, agricultural support, construction services, and logistics across West Africa.",
    images: ["/images/twitter-image.jpg"],
    creator: "@gdmimacs",
  },

  // Alternate Languages

  // Icons

  // Manifest
  // manifest: "/site.webmanifest",

  // Application Name
  applicationName: "GDI MACS",

  // Theme Color

  // Category
  category: "business",
};

// ==================================================
// Dynamic Metadata for Individual Pages
// ==================================================

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
