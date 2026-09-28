/** Zentrale, vor Veröffentlichung zu prüfende Unternehmensangaben. */
export const site = {
  name: "Diamond Point",
  tagline: "Fahrzeugaufbereitung mit Blick fürs Detail",
  description:
    "Professionelle Fahrzeugaufbereitung und Detailing in Hallein bei Salzburg. Innenraum, Lack, Versiegelung und Komplettpakete – individuell auf Ihr Fahrzeug abgestimmt.",
  location: "Hallein bei Salzburg",
  postalCode: "5400",
  city: "Hallein",
  country: "AT",
  // Bestehende Kontaktadresse bis zur Bereitstellung einer neuen Domain beibehalten.
  email: "oguzhan.duman@detailwerk.com",
  // Platzhalter: erst nach Eintrag einer echten Nummer werden Telefon- und WhatsApp-Links aktiv.
  phoneDisplay: "0660-xxxxxxxx",
  phoneInternational: "" as string,
  whatsappInternational: "" as string,
  // Öffentliche Profil-URLs eintragen; leere Werte erscheinen als nicht anklickbare Platzhalter.
  socials: {
    instagram: "" as string,
    facebook: "" as string,
    tiktok: "" as string,
  },
  addressLine: "Straße und Hausnummer ergänzen",
  openingHours: "Termine nach Vereinbarung – Zeiten ergänzen",
  readyForIndexing: process.env.NEXT_PUBLIC_SITE_READY === "true",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || process.env.CF_PAGES_URL || "").replace(/\/$/, ""),
} as const;

export const phoneHref = site.phoneInternational
  ? `tel:${site.phoneInternational}`
  : null;
export const whatsappHref = site.whatsappInternational
  ? `https://wa.me/${site.whatsappInternational.replace(/\D/g, "")}`
  : null;
