import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = localFont({ src: "../fonts/manrope-latin.woff2", variable: "--font-manrope", display: "swap", weight: "200 800" });
const playfair = localFont({ src: "../fonts/playfair-display-latin.woff2", variable: "--font-playfair", display: "swap", weight: "400 900" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10110f",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl || "http://localhost:3000"),
  title: { default: "Detailwerk | Fahrzeugaufbereitung in Hallein", template: "%s | Detailwerk" },
  description: site.description,
  applicationName: site.name,
  ...(site.siteUrl ? { alternates: { canonical: site.siteUrl } } : {}),
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: site.name,
    title: "Detailwerk | Fahrzeugaufbereitung in Hallein",
    description: site.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Detailwerk – Fahrzeugaufbereitung in Hallein" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      postalCode: site.postalCode,
      addressLocality: site.city,
      addressCountry: site.country,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Salzburg" },
    ...(site.siteUrl ? { url: site.siteUrl } : {}),
    ...(site.phoneInternational ? { telephone: site.phoneInternational } : {}),
  };

  return (
    <html lang="de-AT" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
