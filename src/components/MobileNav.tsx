"use client";

import { useState } from "react";
import { ArrowUpRight } from "./Icons";

const links = [
  ["Leistungen", "#leistungen"],
  ["Ergebnisse", "#ergebnisse"],
  ["Ablauf", "#ablauf"],
  ["FAQ", "#faq"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a href="#kontakt" className="header-cta">Anfrage senden <ArrowUpRight /></a>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>
      <nav id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Mobile Navigation" aria-hidden={!open}>
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{label}</a>)}
        <a href="#kontakt" className="mobile-nav-cta" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Anfrage senden <ArrowUpRight /></a>
      </nav>
    </>
  );
}
