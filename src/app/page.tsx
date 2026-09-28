import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Sparkle } from "@/components/Icons";
import { MobileNav } from "@/components/MobileNav";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { MotionController } from "@/components/MotionController";
import { phoneHref, site, whatsappHref } from "@/lib/site";

const services = [
  { number: "01", title: "Innenraum", subtitle: "Wieder gern einsteigen.", description: "Von Polstern und Leder bis in die kleinsten Zwischenräume: ein Innenraum, der sich wieder richtig gut anfühlt.", details: "Reinigung · Pflege · Frische" },
  { number: "02", title: "Außenpflege", subtitle: "Der erste Eindruck bleibt.", description: "Schonende Wäsche und sorgfältige Pflege für Oberflächen, Felgen und Details – abgestimmt auf den Zustand Ihres Fahrzeugs.", details: "Wäsche · Felgen · Finish" },
  { number: "03", title: "Lackkorrektur", subtitle: "Tiefe statt bloß Glanz.", description: "Eine gezielte Aufbereitung kann sichtbare Gebrauchsspuren im Lackbild reduzieren und die Oberfläche neu zur Geltung bringen.", details: "Analyse · Politur · Finish" },
  { number: "04", title: "Keramikschutz", subtitle: "Glanz, der länger begleitet.", description: "Eine fachgerecht vorbereitete und versiegelte Oberfläche lässt sich leichter pflegen und erhält ein eindrucksvolles Finish.", details: "Vorbereitung · Versiegelung · Pflege" },
  { number: "05", title: "Komplettpaket", subtitle: "Alles. Aufeinander abgestimmt.", description: "Innen und außen als stimmiges Gesamtbild. Wir besprechen, was Ihr Fahrzeug tatsächlich braucht, und erstellen ein passendes Angebot.", details: "Individuell · Ganzheitlich · Klar" },
];

const steps = [
  { number: "01", title: "Anfrage", description: "Sie erzählen uns, um welches Fahrzeug und welche Wünsche es geht." },
  { number: "02", title: "Einschätzung", description: "Wir besprechen Zustand, sinnvolle Leistungen und den passenden Umfang." },
  { number: "03", title: "Aufbereitung", description: "Jeder Schritt folgt einem klaren Ziel: einem Ergebnis, das zum Fahrzeug passt." },
  { number: "04", title: "Übergabe", description: "Sie sehen das Ergebnis und erhalten Hinweise für die weitere Pflege." },
];

const faq = [
  { q: "Welche Leistung passt zu meinem Fahrzeug?", a: "Das hängt vom Zustand und Ihren Zielen ab. Senden Sie uns ein paar Informationen, gern auch Fotos per E-Mail. Wir schlagen anschließend einen passenden Umfang vor." },
  { q: "Wie lange dauert eine Aufbereitung?", a: "Das richtet sich nach Fahrzeuggröße, Zustand und gewählten Leistungen. Eine realistische Zeitangabe erhalten Sie nach einer kurzen Einschätzung." },
  { q: "Kann ich mehrere Leistungen kombinieren?", a: "Ja. Innenraum, Außenpflege, Lackkorrektur und Schutz lassen sich sinnvoll kombinieren. Dafür eignet sich ein individuell zusammengestelltes Komplettpaket." },
  { q: "Wie läuft die Terminvereinbarung ab?", a: "Schicken Sie Ihre Anfrage über das Formular oder per E-Mail. Wir melden uns mit Rückfragen oder einem Terminvorschlag bei Ihnen." },
  { q: "Bieten Sie auch Lösungen für Firmenfahrzeuge an?", a: "Anfragen für einzelne Firmenfahrzeuge oder mehrere Fahrzeuge sind willkommen. Der passende Umfang wird individuell abgestimmt." },
];

function SectionHeading({ id, kicker, title, intro, light = false }: { id?: string; kicker: string; title: React.ReactNode; intro?: string; light?: boolean }) {
  return <div className={`section-heading${light ? " section-heading-light" : ""}`} data-reveal><p className="eyebrow"><span className="eyebrow-line" />{kicker}</p><h2 id={id}>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>;
}

function Brand({ footer = false }: { footer?: boolean }) {
  return <Link href="/" className={`brand${footer ? " brand-footer" : ""}`} aria-label="Detailwerk – Startseite"><span className="brand-mark" aria-hidden="true"><span>D</span><i /></span><span className="brand-word"><strong>DETAILWERK</strong><small>FAHRZEUGAUFBEREITUNG</small></span></Link>;
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
          <div className="container hero-content"><div className="hero-copy"><p className="hero-kicker"><span className="kicker-dot" />Fahrzeugaufbereitung in Hallein</p><h1 id="hero-title">Mehr als sauber.<br /><em>Bis ins Detail.</em></h1><p className="hero-lead">Professionelle Aufbereitung für Menschen, die ihr Fahrzeug nicht einfach nur fahren – sondern schätzen.</p><div className="hero-actions"><a className="button button-accent" href="#kontakt">Jetzt Anfrage senden <ArrowUpRight /></a><a className="text-link" href="#leistungen">Leistungen entdecken <ArrowRight /></a></div></div><div className="hero-caption"><span className="caption-line" />Für den Moment, in dem alles wieder stimmt.</div></div>
          <div className="hero-side-note" aria-hidden="true">DETAILWERK / HALLEIN</div>
        </section>

        <div className="principles"><div className="container principles-grid"><div><span className="principle-icon">01</span><p>Individuell statt pauschal</p></div><div><span className="principle-icon">02</span><p>Sorgfalt in jedem Schritt</p></div><div><span className="principle-icon">03</span><p>Ein Ergebnis, das bleibt</p></div></div></div>

        <section className="manifesto" aria-labelledby="manifesto-title"><div className="container manifesto-inner"><p className="eyebrow" data-reveal><span className="eyebrow-line" />Die Idee von Detailwerk</p><h2 id="manifesto-title" data-reveal>Ein Fahrzeug ist mehr<br />als seine Oberfläche.<span> Wir sehen genauer hin.</span></h2><p data-reveal>Jede Linie, jedes Material, jeder Handgriff. Gute Aufbereitung macht sichtbar, was Ihr Fahrzeug besonders macht.</p><span className="manifesto-orbit" aria-hidden="true" /></div></section>

        <section className="services section-pad" id="leistungen" aria-labelledby="services-title"><div className="container"><div className="services-top"><SectionHeading id="services-title" kicker="Leistungen" title={<>Für jedes Detail.<br /><em>Den richtigen Blick.</em></>} intro="Vom frischen Innenraum bis zum veredelten Lack: Jede Behandlung beginnt mit dem, was Ihr Fahrzeug wirklich braucht." /><p className="section-index">01 / WAS WIR TUN</p></div><div className="services-list">{services.map((service) => <article className="service-row" data-reveal key={service.number}><span className="service-number">{service.number}</span><div className="service-title"><h3>{service.title}</h3><p>{service.subtitle}</p></div><p className="service-description">{service.description}</p><div className="service-end"><span>{service.details}</span><a href="#kontakt" aria-label={`Anfrage zu ${service.title} senden`}><ArrowUpRight /></a></div></article>)}</div><div className="services-foot" data-reveal><p>Kein Fahrzeug ist wie das andere. Wir besprechen den passenden Umfang persönlich.</p><a className="inline-link" href="#kontakt">Individuelle Anfrage stellen <ArrowUpRight /></a></div></div></section>

        <section className="craft-section" aria-labelledby="craft-title"><div className="craft-image-wrap"><Image src="/images/craft.webp" alt="Symbolbild: behandschuhte Hand pflegt die Motorhaube eines dunklen Fahrzeugs mit einem Mikrofasertuch" fill sizes="100vw" className="craft-image" /><span className="image-label">SYMBOLBILD / DETAILARBEIT</span></div><div className="craft-content" data-reveal><p className="eyebrow"><span className="eyebrow-line" />Die Haltung dahinter</p><h2 id="craft-title">Gute Pflege sieht man.<br /><em>Echte Sorgfalt spürt man.</em></h2><p>Es sind die Übergänge, Kanten und kleinen Flächen, die oft übersehen werden. Genau dort beginnt für uns der Unterschied zwischen „gewaschen“ und „aufbereitet“.</p><div className="craft-signature"><Sparkle /><span>Mit Ruhe, System und einem Auge fürs Wesentliche.</span></div></div></section>

        <section className="gallery section-pad" id="ergebnisse" aria-labelledby="gallery-title"><div className="container"><div className="gallery-top"><SectionHeading id="gallery-title" kicker="Ergebnisse" title={<>Der Unterschied<br /><em>liegt im Detail.</em></>} intro="Hier bekommen echte Vorher-/Nachher-Aufnahmen künftig ihren Platz. Bis dahin zeigen die Flächen bewusst keine erfundenen Ergebnisse." light /><span className="gallery-note">PROJEKTFOTOS FOLGEN</span></div><div className="gallery-grid">{["Innenraum", "Lackbild", "Außenfinish"].map((label, i) => <div className="gallery-card" data-reveal key={label}><div className={`gallery-placeholders gallery-tone-${i + 1}`}><div className="gallery-placeholder"><span>VORHER</span><div className="placeholder-art"><i /><i /><i /></div><small>Originalaufnahme folgt</small></div><div className="gallery-placeholder"><span>NACHHER</span><div className="placeholder-art"><i /><i /><i /></div><small>Originalaufnahme folgt</small></div></div><div className="gallery-card-footer"><span>0{i + 1} / {label}</span><span>Echte Bilder folgen</span></div></div>)}</div><p className="gallery-disclaimer">Hinweis: Die Flächen oben sind Platzhalter. Es werden keine Kundenfahrzeuge oder Ergebnisse behauptet.</p></div></section>

        <section className="process section-pad" id="ablauf" aria-labelledby="process-title"><div className="container"><div className="process-head"><SectionHeading id="process-title" kicker="So läuft es ab" title={<>Klar im Ablauf.<br /><em>Stark im Ergebnis.</em></>} intro="Ein guter Prozess beginnt mit Zuhören und endet mit einem Fahrzeug, das Sie gern wieder ansehen." /><p className="section-index">02 / DER WEG DORTHIN</p></div><div className="process-grid">{steps.map((step) => <article className="process-step" data-reveal key={step.number}><span className="step-number">{step.number}</span><div className="step-rule" /><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>

        <section className="benefits" aria-labelledby="benefits-title"><div className="container benefits-inner"><div data-reveal><p className="eyebrow"><span className="eyebrow-line" />Warum Detailwerk</p><h2 id="benefits-title">Ihr Fahrzeug verdient<br /><em>mehr Aufmerksamkeit.</em></h2></div><div className="benefit-list" data-reveal><p><Check />Individuelle Einschätzung statt Standardpaket</p><p><Check />Transparente Abstimmung vor dem Termin</p><p><Check />Pflege passend zu Material und Zustand</p><p><Check />Für Privat- und Geschäftskunden</p></div></div></section>

        <section className="testimonial section-pad" aria-labelledby="testimonial-title"><div className="container testimonial-inner"><p className="eyebrow"><span className="eyebrow-line" />Kundenstimmen</p><div className="testimonial-content" data-reveal><div className="quote-mark" aria-hidden="true">“</div><div><h2 id="testimonial-title">Die besten Worte kommen von denen, die ihr Fahrzeug wieder abholen.</h2><p>Hier erscheinen künftig echte, freigegebene Rückmeldungen von Kundinnen und Kunden.</p><span className="placeholder-badge">PLATZHALTER · NOCH KEINE BEWERTUNGEN HINTERLEGT</span></div></div></div></section>

        <section className="faq section-pad" id="faq" aria-labelledby="faq-title"><div className="container faq-grid"><div className="faq-intro"><SectionHeading id="faq-title" kicker="Gut zu wissen" title={<>Fragen?<br /><em>Gute Antworten.</em></>} intro="Die wichtigsten Punkte vor Ihrer Anfrage – kurz und ehrlich." /><a className="inline-link" href="#kontakt">Weitere Frage stellen <ArrowUpRight /></a></div><div className="faq-list" data-reveal>{faq.map((item, index) => <details key={item.q}><summary><span className="faq-number">0{index + 1}</span><span>{item.q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></section>

        <section className="contact section-pad" id="kontakt" aria-labelledby="contact-title"><div className="container contact-grid"><div className="contact-info"><SectionHeading id="contact-title" kicker="Kontakt" title={<>Bereit für<br /><em>den Unterschied?</em></>} intro="Erzählen Sie uns von Ihrem Fahrzeug. Wir melden uns mit einer persönlichen Einschätzung bei Ihnen." light /><div className="contact-methods" data-reveal><div><span>E-MAIL</span><a href={`mailto:${site.email}`}>{site.email} <ArrowUpRight /></a></div><div><span>TELEFON</span>{phoneHref ? <a href={phoneHref}>{site.phoneDisplay} <ArrowUpRight /></a> : <p>{site.phoneDisplay} <small>Nummer wird ergänzt</small></p>}</div><div><span>WHATSAPP</span>{whatsappHref ? <a href={whatsappHref} target="_blank" rel="noopener noreferrer">Per WhatsApp schreiben <ArrowUpRight /></a> : <p className="contact-pending">Per WhatsApp schreiben <ArrowUpRight /><small>Nummer wird ergänzt</small></p>}</div><div><span>STANDORT</span><p>A-5400 Hallein <small>Adresse wird ergänzt</small></p></div></div></div><div className="contact-form-card" data-reveal><div className="form-card-head"><span>IHRE ANFRAGE</span><span>01 — 05</span></div><h3>Was können wir für Sie tun?</h3><p>Ein paar Angaben genügen für den ersten Kontakt.</p><ContactForm /></div></div></section>
      </main>
      <footer className="footer"><div className="container"><div className="footer-main"><div><Brand footer /><p>Fahrzeugaufbereitung und Detailing<br />in Hallein bei Salzburg.</p></div><div className="footer-links"><div><span>ENTDECKEN</span><a href="#leistungen">Leistungen</a><a href="#ergebnisse">Ergebnisse</a><a href="#ablauf">Ablauf</a><a href="#kontakt">Kontakt</a></div><div><span>INFORMATIONEN</span><p>{site.addressLine}<br />A-{site.postalCode} {site.city}</p><p>{site.openingHours}</p></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Detailwerk</span><div className="footer-legal"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div><SocialLinks /></div></div></footer>
    </>
  );
}
