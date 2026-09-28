import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Impressum", robots: { index: false, follow: true } };

export default function Impressum() {
  return <main className="legal-page"><Link className="legal-back" href="/">← Zur Startseite</Link><p className="eyebrow">Rechtliches</p><h1>Impressum</h1><p className="legal-warning">Platzhalter – vor Veröffentlichung mit vollständigen, geprüften Pflichtangaben ersetzen.</p><h2>Unternehmensangaben</h2><p>{site.name}<br />{site.addressLine}<br />{site.postalCode} {site.city}, Österreich</p><h2>Kontakt</h2><p>E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a><br />Telefon: {site.phoneDisplay} (Platzhalter)</p><h2>Weitere Pflichtangaben</h2><p>Rechtsform, vertretungsberechtigte Person, Gewerbeangaben, gegebenenfalls Firmenbuchnummer, UID und Aufsichtsbehörde ergänzen.</p></main>;
}
