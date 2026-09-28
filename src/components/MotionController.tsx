"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -45px 0px" },
    );

    items.forEach((item) => {
      item.classList.add("will-reveal");
      observer.observe(item);
    });
    root.classList.add("motion-enabled");

    let frame = 0;
    const update = () => {
      frame = 0;
      const scroll = window.scrollY;
      const distance = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty("--page-progress", `${(scroll / distance) * 100}%`);
      root.style.setProperty("--hero-shift", `${Math.min(scroll * 0.2, 170)}px`);
      root.classList.toggle("has-scrolled", scroll > 32);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      items.forEach((item) => item.classList.remove("will-reveal", "is-visible"));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-enabled", "has-scrolled");
      root.style.removeProperty("--page-progress");
      root.style.removeProperty("--hero-shift");
    };
  }, []);

  return null;
}
