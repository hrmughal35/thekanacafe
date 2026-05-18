import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Outfit,
  Noto_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thekanacafe.vercel.app"),
  title: {
    default: `${siteConfig.name} · Luxury café lounges in Dubai`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    "THE KANA CAFE — luxury dining, premium shisha, Turkish coffee, and 24/7 atmospheric lounges across Dubai including Business Bay, Sheikh Zayed Road, Mirdif, Motor City, and Silicon Oasis.",
  keywords: [
    "Kana Cafe",
    "Dubai cafe",
    "Business Bay cafe",
    "shisha lounge Dubai",
    "24 hour cafe Dubai",
    "Turkish coffee Dubai",
  ],
  openGraph: {
    title: `${siteConfig.name} · Dubai`,
    description:
      "Luxury café lounges with canal views, premium shisha, and unforgettable Dubai nights.",
    type: "website",
    locale: "en_AE",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Atmospheric café lounges across Dubai — luxury dining, shisha, and 24/7 vibes.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  description:
    "Luxury café and lounge brand in Dubai with multiple branches, premium shisha, and 24/7 service.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  servesCuisine: ["Middle Eastern", "Cafe", "International"],
  url: "https://thekanacafe.vercel.app",
  sameAs: [siteConfig.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${arabic.variable} min-h-screen bg-background font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LenisProvider>
            <AppShell>
              <a
                href="#main"
                className="fixed left-4 top-4 z-[120] -translate-y-40 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Skip to content
              </a>
              {children}
            </AppShell>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
