import Link from "next/link";

export default function NotFound() {
  return <main className="legal-page not-found"><p className="eyebrow">404 / Seite nicht gefunden</p><h1>Diese Seite gibt es nicht.</h1><p>Der gesuchte Inhalt ist nicht verfügbar. Auf der Startseite finden Sie Leistungen, Antworten und den direkten Kontakt.</p><Link className="button button-accent" href="/">Zur Startseite</Link></main>;
}
