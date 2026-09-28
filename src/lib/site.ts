/** Zentrale, vor Veröffentlichung zu prüfende Unternehmensangaben. */
export const site = {
  name: "Detailwerk",
  tagline: "Fahrzeugaufbereitung mit Blick fürs Detail",
  description:
    "Professionelle Fahrzeugaufbereitung und Detailing in Hallein bei Salzburg. Innenraum, Lack, Versiegelung und Komplettpakete – individuell auf Ihr Fahrzeug abgestimmt.",
  location: "Hallein bei Salzburg",
  postalCode: "5400",
  city: "Hallein",
  country: "AT",
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
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "",
} as const;

export const phoneHref = site.phoneInternational
  ? `tel:${site.phoneInternational}`
  : null;
export const whatsappHref = site.whatsappInternational
  ? `https://wa.me/${site.whatsappInternational.replace(/\D/g, "")}`
  : null;
