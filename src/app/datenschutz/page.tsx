import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Datenschutz", robots: { index: false, follow: true } };

export default function Datenschutz() {
  return <main className="legal-page"><Link className="legal-back" href="/">← Zur Startseite</Link><p className="eyebrow">Rechtliches</p><h1>Datenschutz</h1><p className="legal-warning">Platzhalter – vor Veröffentlichung durch eine auf den tatsächlichen Betrieb abgestimmte Datenschutzerklärung ersetzen.</p><h2>Verantwortliche Stelle</h2><p>{site.name}<br />{site.addressLine}<br />{site.postalCode} {site.city}<br /><a href={`mailto:${site.email}`}>{site.email}</a></p><h2>Kontaktformular</h2><p>Bei Nutzung des Kontaktformulars werden Name, E-Mail-Adresse und Ihre freiwilligen Angaben zur Bearbeitung Ihrer Anfrage verarbeitet. Der Versand erfolgt über den in der Projektkonfiguration eingerichteten E-Mail-Dienst. Angaben zu Rechtsgrundlage, Speicherdauer, Auftragsverarbeitung und Betroffenenrechten sind vor Veröffentlichung zu ergänzen.</p><h2>Technische Daten</h2><p>Angaben zu Hosting, Server-Logs und weiteren tatsächlich verwendeten Diensten sind vor Veröffentlichung zu ergänzen.</p></main>;
}
