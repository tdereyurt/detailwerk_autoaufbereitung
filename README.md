# Detailwerk

Website für Fahrzeugaufbereitung und Detailing in Hallein, gebaut mit Next.js 16, TypeScript und Tailwind CSS 4. Der Build erzeugt eine statische Website für Cloudflare Pages.

## Lokal starten

```bash
npm install
npm run dev
```

Die Seite ist anschließend unter `http://localhost:3000` erreichbar. Produktionsprüfung: `npm run typecheck` und `npm run build`. Der statische Export liegt danach in `out/`.

## Mit Cloudflare Pages veröffentlichen

1. Vor dem öffentlichen Start die Unternehmensangaben, Platzhalter und Rechtstexte unten ergänzen.
2. Den freigegebenen Stand in den Branch `prd` bringen und zu GitHub pushen. `dev` bleibt der Entwicklungsbranch.
3. In [Cloudflare Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages) **Create application → Continue to Pages → Import an existing Git repository → Get started → Connect GitHub** wählen. Beim GitHub-Zugriff möglichst **Only select repositories** und `tdereyurt/detailwerk_autoaufbereitung` auswählen.
4. Als Produktionsbranch `prd` wählen. Preset **Next.js (Static HTML Export)**, Build-Befehl `npm run build`, Ausgabeverzeichnis `out`, Stammverzeichnis `/` festlegen. Falls die Build-Umgebung eine Node-Version verlangt, `NODE_VERSION=22` setzen.
5. Nach dem ersten Build die tatsächliche `*.pages.dev`-Adresse prüfen und `NEXT_PUBLIC_SITE_URL` in der Produktionsumgebung auf diese stabile Projektadresse setzen; danach einen neuen Build auslösen. Cloudflare stellt bei weiteren Pushes auf `prd` automatisch eine neue Version bereit. Für eine eigene Domain diese in Cloudflare unter **Custom domains** verbinden und `NEXT_PUBLIC_SITE_URL` auf die Domain ändern.

Cloudflare setzt `CF_PAGES_URL` beim Build automatisch als vorläufigen URL-Wert. Für dauerhaft stabile Canonical- und Sitemap-URLs ist `NEXT_PUBLIC_SITE_URL` nach dem ersten Deployment nötig. Eine eigene Domain ist optional und kann zusätzliche Kosten beim Domain-Anbieter verursachen.

## Vor Veröffentlichung ergänzen

Alle austauschbaren Unternehmensangaben stehen in `src/lib/site.ts`. Besonders zu ergänzen sind die echte Telefon- und WhatsApp-Nummer (`phoneInternational` und `whatsappInternational` im Format `+43660…`), Straße/Hausnummer, Öffnungszeiten und die Profil-URLs unter `socials`. Ohne echte Nummer oder Profil-URL werden bewusst keine funktionslosen Links angezeigt.

Kopieren Sie bei Bedarf `.env.example` nach `.env.local` und setzen Sie:

- `NEXT_PUBLIC_SITE_URL`: stabile öffentliche Website-URL für Open Graph und Sitemap. Ohne Wert verwendet der Cloudflare-Build vorläufig `CF_PAGES_URL`.
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: optionaler Endpunkt eines eingerichteten Formulars. In Cloudflare Pages unter **Settings → Environment variables** setzen.

Ohne Formspree-Endpunkt öffnet das Formular nach Validierung das E-Mail-Programm mit einer vorbereiteten Nachricht. Die Besucherin oder der Besucher muss diese E-Mail selbst absenden. Mit einem Formspree-Endpunkt kann die Anfrage direkt online gesendet werden; die Datenschutzerklärung muss den tatsächlich verwendeten Dienst korrekt beschreiben. Der Empfänger der E-Mail-Variante ist zentral in `src/lib/site.ts` hinterlegt.

Die Seiten `/impressum` und `/datenschutz` enthalten deutlich gekennzeichnete Platzhalter und müssen vor der Veröffentlichung mit den tatsächlichen Pflichtangaben und geprüften Rechtstexten ersetzt werden. Kundenstimmen und Vorher-/Nachher-Fotos sind ebenfalls bewusst als Platzhalter markiert. Die Bilder in `public/images` sind generierte Symbolbilder und lassen sich durch eigene Aufnahmen mit gleichen Dateinamen austauschen.

## Struktur

```text
src/app/             Seiten, Layout und SEO-Dateien
src/components/      Navigation, Formular und kleine Icons
src/lib/site.ts      Zentrale Unternehmensangaben
src/fonts/           Lokal gehostete Schriften
public/images/       Austauschbare Symbolbilder
next.config.ts       Statischer Export für Cloudflare Pages
```
