/** Zentrale, vor Veröffentlichung zu prüfende Unternehmensangaben. */
export const site = {
  name: "Diamond Point",
  tagline: "Präzision in Pflege und Finish",
  description:
    "Diamond Point: Fahrzeugaufbereitung und Detailing in Hallein bei Salzburg. Sorgfältige Innenraum- und Außenpflege, Lackkorrektur und Keramikversiegelung – passend zum Zustand Ihres Fahrzeugs.",
  location: "Hallein",
  postalCode: "5400",
  city: "Hallein",
  country: "AT",
  // Bestehende Kontaktadresse bis zur Bereitstellung einer neuen Domain beibehalten.
  email: "oguzhan.duman@detailwerk.com",
  // Platzhalter: erst nach Eintrag einer echten Nummer werden Telefon- und WhatsApp-Links aktiv.
  phoneDisplay: "+43 660 6452411",
  phoneInternational: "+43 660 6452411" as string,
  whatsappInternational: "+43 660 6452411" as string,
  // Öffentliche Profil-URLs eintragen; leere Werte erscheinen als nicht anklickbare Platzhalter.
  socials: {
    instagram: "" as string,
    facebook: "" as string,
    tiktok: "" as string,
  },
  addressLine: "Teststraße 1",
  openingHours: "Termine nach Vereinbarung – Mo-Fr 08:00-18:00 Uhr",
  readyForIndexing: process.env.NEXT_PUBLIC_SITE_READY === "true",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || process.env.CF_PAGES_URL || "").replace(/\/$/, ""),
} as const;

export const phoneHref = site.phoneInternational
  ? `tel:${site.phoneInternational}`
  : null;
export const whatsappHref = site.whatsappInternational
  ? `https://wa.me/${site.whatsappInternational.replace(/\D/g, "")}`
  : null;
