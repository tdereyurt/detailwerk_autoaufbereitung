# Detailwerk

Website für Fahrzeugaufbereitung und Detailing in Hallein, gebaut mit Next.js 16, TypeScript und Tailwind CSS 4.

## Lokal starten

```bash
npm install
npm run dev
```

Die Seite ist anschließend unter `http://localhost:3000` erreichbar. Produktionsprüfung: `npm run typecheck` und `npm run build`; danach `npm start`.

## Vor Veröffentlichung ergänzen

Alle austauschbaren Unternehmensangaben stehen in `src/lib/site.ts`. Besonders zu ergänzen sind die echte Telefon- und WhatsApp-Nummer (`phoneInternational` und `whatsappInternational` im Format `+43660…`), Straße/Hausnummer, Öffnungszeiten und die Profil-URLs unter `socials`. Ohne echte Nummer oder Profil-URL werden bewusst keine funktionslosen Links angezeigt.

Kopieren Sie `.env.example` nach `.env.local` und setzen Sie:

- `NEXT_PUBLIC_SITE_URL`: tatsächliche öffentliche Website-URL für OG und Sitemap.
- `RESEND_API_KEY`: API-Schlüssel für den Formularversand.
- `CONTACT_FROM_EMAIL`: verifizierte Absenderadresse der eigenen Domain.

Ohne E-Mail-Konfiguration zeigt das Formular einen klaren Fehler und bietet einen direkten E-Mail-Link an. Der Empfänger ist zentral in `src/lib/site.ts` hinterlegt. Für den produktiven Betrieb sollten beim E-Mail-Anbieter Domain und Empfänger freigeschaltet sein.

Die Seiten `/impressum` und `/datenschutz` enthalten deutlich gekennzeichnete Platzhalter und müssen vor der Veröffentlichung mit den tatsächlichen Pflichtangaben und geprüften Rechtstexten ersetzt werden. Kundenstimmen und Vorher-/Nachher-Fotos sind ebenfalls bewusst als Platzhalter markiert. Die Bilder in `public/images` sind generierte Symbolbilder und lassen sich durch eigene Aufnahmen mit gleichen Dateinamen austauschen.

## Struktur

```text
src/app/             Seiten, Layout, SEO-Dateien und Kontakt-API
src/components/      Navigation, Formular und kleine Icons
src/lib/site.ts      Zentrale Unternehmensangaben
src/fonts/           Lokal gehostete Schriften
public/images/       Austauschbare Symbolbilder
```
