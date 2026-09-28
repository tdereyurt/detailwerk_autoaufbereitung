import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "@/components/Icons";
import { MobileNav } from "@/components/MobileNav";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { MotionController } from "@/components/MotionController";
import { phoneHref, site, whatsappHref } from "@/lib/site";

const services = [
  { number: "01", title: "Innenraum", subtitle: "Klarheit bis in die Fuge.", description: "Polster, Leder und schwer erreichbare Stellen werden passend zum Material gereinigt und gepflegt.", details: "Reinigung · Materialpflege · Frische" },
  { number: "02", title: "Außenpflege", subtitle: "Ein Auftritt mit Tiefe.", description: "Schonende Wäsche und gezielte Pflege holen Konturen, Flächen und Felgen wieder in den Fokus.", details: "Wäsche · Felgen · Finish" },
  { number: "03", title: "Lackkorrektur", subtitle: "Licht zeigt die Wahrheit.", description: "Nach Prüfung des Lackzustands können geeignete Polierschritte sichtbare Gebrauchsspuren mindern und mehr Tiefe schaffen.", details: "Prüfung · Politur · Kontrolle" },
  { number: "04", title: "Keramikschutz", subtitle: "Schutz mit Strahlkraft.", description: "Auf sorgfältig vorbereitetem Lack kann eine Keramikversiegelung die Pflege erleichtern und das Finish betonen.", details: "Vorbereitung · Versiegelung · Pflege" },
  { number: "05", title: "Komplettpaket", subtitle: "Alles greift ineinander.", description: "Innenraum und Außenflächen werden als Ganzes betrachtet. Den passenden Umfang stimmen wir mit Ihnen ab.", details: "Innen · Außen · Individuell" },
];

const steps = [
  { number: "01", title: "Anfragen", description: "Sie zeigen uns Ihr Fahrzeug und beschreiben, was Sie sich wünschen." },
  { number: "02", title: "Prüfen", description: "Wir sehen uns Zustand und Materialien an und besprechen sinnvolle Schritte." },
  { number: "03", title: "Aufbereiten", description: "Die abgestimmten Arbeiten folgen dem Bedarf Ihres Fahrzeugs – Fläche für Fläche." },
  { number: "04", title: "Übergeben", description: "Wir gehen das Ergebnis mit Ihnen durch und geben Hinweise zur weiteren Pflege." },
];

const faq = [
  { q: "Woher weiß ich, welche Leistung sinnvoll ist?", a: "Zustand, Material und Ihr gewünschtes Ergebnis geben die Richtung vor. Beschreiben Sie uns Ihr Fahrzeug; Fotos können Sie per E-Mail ergänzen. Danach besprechen wir einen passenden Umfang." },
  { q: "Wie lange dauert die Aufbereitung?", a: "Das hängt von Fahrzeuggröße, Zustand und gewählten Arbeiten ab. Nach einer Einschätzung können wir Ihnen den Zeitrahmen nennen." },
  { q: "Lassen sich Leistungen kombinieren?", a: "Ja. Innenraum, Außenpflege, Lackkorrektur und Versiegelung lassen sich je nach Fahrzeug sinnvoll verbinden. Ein Komplettpaket stellen wir individuell zusammen." },
  { q: "Wie vereinbare ich einen Termin?", a: "Senden Sie eine Anfrage über das Formular oder per E-Mail. Wir klären offene Punkte und stimmen einen Termin direkt mit Ihnen ab." },
  { q: "Sind auch Firmenfahrzeuge möglich?", a: "Anfragen für einzelne oder mehrere Firmenfahrzeuge sind willkommen. Umfang und Ablauf besprechen wir persönlich." },
];

function SectionHeading({ id, kicker, title, intro, light = false }: { id?: string; kicker: string; title: React.ReactNode; intro?: string; light?: boolean }) {
  return <div className={`section-heading${light ? " section-heading-light" : ""}`} data-reveal><p className="eyebrow"><span className="eyebrow-line" />{kicker}</p><h2 id={id}>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>;
}

function Brand({ footer = false }: { footer?: boolean }) {
  return <Link href="/" className={`brand${footer ? " brand-footer" : ""}`} aria-label={`${site.name} – Startseite`}><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M6 15.5 13.5 7h13L34 15.5 20 33Z" /><path d="M6 15.5h28M13.5 7 20 15.5 26.5 7M20 15.5V33" /></svg></span><span className="brand-word"><strong>{site.name.toUpperCase()}</strong><small>FAHRZEUGAUFBEREITUNG</small></span></Link>;
}

export default function Home() {
  return (
    <>
      <MotionController />
      <a href="#inhalt" className="skip-link">Zum Inhalt springen</a>
      <header className="site-header"><div className="header-inner container"><Brand /><MobileNav /></div></header>
      <main id="inhalt">
        <section className="hero" aria-labelledby="hero-title">
          <Image src="/images/hero.webp" alt="Symbolbild: dunkelgraues Fahrzeug wird in einem Detailing-Studio sorgfältig gepflegt" fill priority sizes="100vw" className="hero-image" />
          <div className="hero-overlay" />
          <div className="container hero-content"><div className="hero-copy"><p className="hero-kicker"><span className="kicker-dot" />Diamond Point · Fahrzeugaufbereitung in Hallein</p><h1 id="hero-title">Glanz.<br /><em>Auf den Punkt.</em></h1><p className="hero-lead">Sorgfältige Aufbereitung für Innenraum, Lack und Finish. Abgestimmt auf das, was Ihr Fahrzeug wirklich braucht.</p><div className="hero-actions"><a className="button button-accent" href="#kontakt">Aufbereitung anfragen <ArrowUpRight /></a><a className="text-link" href="#leistungen">Leistungen entdecken <ArrowRight /></a></div></div><div className="hero-caption"><span className="caption-line" />Präzision bis zur letzten Kante.</div></div>
          <div className="hero-side-note" aria-hidden="true">{site.name.toUpperCase()} / HALLEIN</div>
        </section>

        <div className="principles"><div className="container principles-grid"><div><span className="principle-icon">01</span><p>Erst verstehen, dann behandeln</p></div><div><span className="principle-icon">02</span><p>Materialgerecht arbeiten</p></div><div><span className="principle-icon">03</span><p>Das Finish gemeinsam prüfen</p></div></div></div>

        <section className="manifesto" aria-labelledby="manifesto-title"><div className="container manifesto-inner"><p className="eyebrow" data-reveal><span className="eyebrow-line" />Die Haltung hinter {site.name}</p><h2 id="manifesto-title" data-reveal>Brillanz ist<br />kein Zufall.<span> Sie entsteht im Prozess.</span></h2><p data-reveal>Ein klarer Blick auf Zustand und Material. Die passenden Handgriffe. Und Zeit für die Stellen, an denen aus Pflege ein überzeugendes Finish wird.</p><span className="manifesto-orbit" aria-hidden="true" /></div></section>

        <section className="services section-pad" id="leistungen" aria-labelledby="services-title"><div className="container"><div className="services-top"><SectionHeading id="services-title" kicker="Leistungen" title={<>Jede Fläche.<br /><em>Ihr eigener Schliff.</em></>} intro="Vom Innenraum bis zur Lackoberfläche: Wir wählen Leistungen nach Zustand, Material und Ihrem Ziel." /><p className="section-index">01 / WAS WIR TUN</p></div><div className="services-list">{services.map((service) => <article className="service-row" data-reveal key={service.number}><span className="service-number">{service.number}</span><div className="service-title"><h3>{service.title}</h3><p>{service.subtitle}</p></div><p className="service-description">{service.description}</p><div className="service-end"><span>{service.details}</span><a href="#kontakt" aria-label={`Anfrage zu ${service.title} senden`}><ArrowUpRight /></a></div></article>)}</div><div className="services-foot" data-reveal><p>Der passende Umfang entsteht im Gespräch – nicht aus einer starren Liste.</p><a className="inline-link" href="#kontakt">Individuelle Anfrage stellen <ArrowUpRight /></a></div></div></section>

        <section className="focus-story" aria-labelledby="craft-title" data-focus-story>
          <div className="focus-sticky">
            <div className="focus-visual"><Image src="/images/craft.webp" alt="Symbolbild: behandschuhte Hand pflegt die Motorhaube eines dunklen Fahrzeugs mit einem Mikrofasertuch" fill sizes="100vw" className="focus-image" /><div className="focus-shade" /></div>
            <div className="focus-ui container" aria-hidden="true"><span>{site.name.toUpperCase()} / IM FOKUS</span><span>01 — 03</span></div>
            <div className="focus-reticle" aria-hidden="true"><span /><span /></div>
            <div className="focus-step focus-step-one container"><p className="focus-count">01 / ERKENNEN</p><p className="focus-statement">Erst der Blick.<br /><em>Dann der Schliff.</em></p><p className="focus-detail">Licht und Perspektive zeigen, wo Aufmerksamkeit gefragt ist.</p></div>
            <div className="focus-step focus-step-two container"><p className="focus-count">02 / ABSTIMMEN</p><p className="focus-statement">Jede Fläche.<br /><em>Ihr eigener Weg.</em></p><p className="focus-detail">Material und Zustand geben die Behandlung vor.</p></div>
            <div className="focus-step focus-step-three container"><p className="focus-count">03 / VEREDELN</p><h2 id="craft-title">Das Finish zeigt,<br /><em>was Sorgfalt kann.</em></h2><p className="focus-detail">Übergänge, Kanten und kleine Flächen bekommen denselben prüfenden Blick wie das große Ganze.</p><a className="text-link" href="#kontakt">Aufbereitung anfragen <ArrowUpRight /></a></div>
            <div className="focus-bottom container"><span>SYMBOLBILD / PRÄZISIONSARBEIT</span><span className="focus-track"><i /></span><span>WEITER SCROLLEN</span></div>
          </div>
        </section>

        <section className="gallery section-pad" id="ergebnisse" aria-labelledby="gallery-title"><div className="container"><div className="gallery-top"><SectionHeading id="gallery-title" kicker="Ergebnisse" title={<>Echte Arbeit.<br /><em>Echte Einblicke.</em></>} intro="Hier zeigen wir künftig dokumentierte Vorher-/Nachher-Ergebnisse. Bis Originalaufnahmen vorliegen, bleiben diese Flächen bewusst Platzhalter." light /><span className="gallery-note">PROJEKTFOTOS FOLGEN</span></div><div className="gallery-grid">{["Innenraum", "Lackbild", "Außenfinish"].map((label, i) => <div className="gallery-card" data-reveal key={label}><div className={`gallery-placeholders gallery-tone-${i + 1}`}><div className="gallery-placeholder"><span>VORHER</span><div className="placeholder-art"><i /><i /><i /></div><small>Originalaufnahme folgt</small></div><div className="gallery-placeholder"><span>NACHHER</span><div className="placeholder-art"><i /><i /><i /></div><small>Originalaufnahme folgt</small></div></div><div className="gallery-card-footer"><span>0{i + 1} / {label}</span><span>Echte Bilder folgen</span></div></div>)}</div><p className="gallery-disclaimer">Hinweis: Die Flächen oben sind Platzhalter. Es werden keine Kundenfahrzeuge oder Ergebnisse behauptet.</p></div></section>

        <section className="process section-pad" id="ablauf" aria-labelledby="process-title"><div className="container"><div className="process-head"><SectionHeading id="process-title" kicker="So läuft es ab" title={<>Vier Schritte.<br /><em>Ein klarer Weg.</em></>} intro="Von der ersten Anfrage bis zur Übergabe: Sie wissen, was wir besprechen und worauf es ankommt." /><p className="section-index">02 / DER WEG DORTHIN</p></div><div className="process-grid">{steps.map((step) => <article className="process-step" data-reveal key={step.number}><span className="step-number">{step.number}</span><div className="step-rule" /><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>

        <section className="benefits" aria-labelledby="benefits-title"><div className="container benefits-inner"><div data-reveal><p className="eyebrow"><span className="eyebrow-line" />Warum {site.name}</p><h2 id="benefits-title">Mehr Klarheit.<br /><em>Mehr Wirkung.</em></h2></div><div className="benefit-list" data-reveal><p><Check />Individuelle Einschätzung des Fahrzeugs</p><p><Check />Klare Abstimmung vor der Aufbereitung</p><p><Check />Pflege passend zu Material und Zustand</p><p><Check />Anfragen von Privat- und Geschäftskunden</p></div></div></section>

        <section className="testimonial section-pad" aria-labelledby="testimonial-title"><div className="container testimonial-inner"><p className="eyebrow"><span className="eyebrow-line" />Kundenstimmen</p><div className="testimonial-content" data-reveal><div className="quote-mark" aria-hidden="true">“</div><div><h2 id="testimonial-title">Vertrauen verdient echte Stimmen.</h2><p>Hier erscheinen künftig nur tatsächliche, freigegebene Rückmeldungen von Kundinnen und Kunden.</p><span className="placeholder-badge">PLATZHALTER · NOCH KEINE BEWERTUNGEN HINTERLEGT</span></div></div></div></section>

        <section className="faq section-pad" id="faq" aria-labelledby="faq-title"><div className="container faq-grid"><div className="faq-intro"><SectionHeading id="faq-title" kicker="Gut zu wissen" title={<>Vor dem ersten<br /><em>Termin.</em></>} intro="Die wichtigsten Antworten für einen klaren Start." /><a className="inline-link" href="#kontakt">Weitere Frage stellen <ArrowUpRight /></a></div><div className="faq-list" data-reveal>{faq.map((item, index) => <details key={item.q}><summary><span className="faq-number">0{index + 1}</span><span>{item.q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></section>

        <section className="contact section-pad" id="kontakt" aria-labelledby="contact-title"><div className="container contact-grid"><div className="contact-info"><SectionHeading id="contact-title" kicker="Kontakt" title={<>Der nächste Schritt<br /><em>beginnt hier.</em></>} intro="Erzählen Sie uns, welches Fahrzeug Sie aufbereiten lassen möchten und was Ihnen am Ergebnis wichtig ist." light /><div className="contact-methods" data-reveal><div><span>E-MAIL</span><a href={`mailto:${site.email}`}>{site.email} <ArrowUpRight /></a></div><div><span>TELEFON</span>{phoneHref ? <a href={phoneHref}>{site.phoneDisplay} <ArrowUpRight /></a> : <p>{site.phoneDisplay} <small>Nummer wird ergänzt</small></p>}</div><div><span>WHATSAPP</span>{whatsappHref ? <a href={whatsappHref} target="_blank" rel="noopener noreferrer">Per WhatsApp schreiben <ArrowUpRight /></a> : <p className="contact-pending">Per WhatsApp schreiben <ArrowUpRight /><small>Nummer wird ergänzt</small></p>}</div><div><span>STANDORT</span><p>A-5400 Hallein Teststraße 1<small>Prüfen und ergänzen</small></p></div></div></div><div className="contact-form-card" data-reveal><div className="form-card-head"><span>IHRE ANFRAGE</span><span>01 — 05</span></div><h3>Was dürfen wir uns ansehen?</h3><p>Ein paar Angaben genügen für den ersten Kontakt.</p><ContactForm /></div></div></section>
      </main>
      <footer className="footer"><div className="container"><div className="footer-main"><div><Brand footer /><p>Präzision in Pflege und Finish.<br />Fahrzeugaufbereitung in Hallein bei Salzburg.</p></div><div className="footer-links"><div><span>ENTDECKEN</span><a href="#leistungen">Leistungen</a><a href="#ergebnisse">Ergebnisse</a><a href="#ablauf">Ablauf</a><a href="#kontakt">Kontakt</a></div><div><span>INFORMATIONEN</span><p>{site.addressLine}<br />A-{site.postalCode} {site.city}</p><p>{site.openingHours}</p></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><div className="footer-legal"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div><SocialLinks /></div></div></footer>
    </>
  );
}
