"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "./Icons";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState("sending");
    setMessage("");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: { message?: string } = await response.json();
      if (!response.ok) throw new Error(result.message || "Die Anfrage konnte nicht gesendet werden.");
      setState("success");
      setMessage("Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns per E-Mail.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Beim Senden ist ein Fehler aufgetreten.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="form-grid">
        <div className="field"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" type="text" autoComplete="name" placeholder="Ihr Name" minLength={2} maxLength={100} required /></div>
        <div className="field"><label htmlFor="email">E-Mail <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" placeholder="name@beispiel.at" maxLength={254} required /></div>
      </div>
      <div className="form-grid">
        <div className="field"><label htmlFor="service">Worum geht es?</label><select id="service" name="service" defaultValue=""><option value="">Leistung wählen</option><option value="Innenraumaufbereitung">Innenraumaufbereitung</option><option value="Außenaufbereitung">Außenaufbereitung</option><option value="Lackkorrektur">Lackkorrektur</option><option value="Keramikversiegelung">Keramikversiegelung</option><option value="Komplettpaket">Komplettpaket</option><option value="Andere Anfrage">Andere Anfrage</option></select></div>
        <div className="field"><label htmlFor="vehicle">Fahrzeug</label><input id="vehicle" name="vehicle" type="text" placeholder="Marke & Modell (optional)" maxLength={100} /></div>
      </div>
      <div className="field"><label htmlFor="message">Ihre Nachricht <span aria-hidden="true">*</span></label><textarea id="message" name="message" rows={5} placeholder="Erzählen Sie uns kurz von Ihrem Fahrzeug und Ihren Wünschen …" minLength={10} maxLength={3000} required /></div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
      <label className="consent"><input name="consent" type="checkbox" required /><span>Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden. Hinweise dazu stehen in der <a href="/datenschutz">Datenschutzerklärung</a>. <span aria-hidden="true">*</span></span></label>
      <div className="form-bottom"><button type="submit" className="button button-accent" disabled={state === "sending"}>{state === "sending" ? "Wird gesendet …" : "Anfrage senden"}<ArrowRight /></button><span className="form-note">* Pflichtfelder</span></div>
      {message && <p className={`form-feedback ${state}`} role="status" aria-live="polite">{message}{state === "error" && <> Alternativ: <a href="mailto:oguzhan.duman@detailwerk.com">per E-Mail anfragen</a>.</>}</p>}
    </form>
  );
}
