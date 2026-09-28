"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const focusStory = document.querySelector<HTMLElement>("[data-focus-story]");
    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const ramp = (start: number, end: number, value: number) => clamp((value - start) / (end - start));
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

      if (focusStory) {
        const bounds = focusStory.getBoundingClientRect();
        const travel = Math.max(1, bounds.height - window.innerHeight);
        const progress = clamp(-bounds.top / travel);
        const eased = progress * progress * (3 - 2 * progress);
        focusStory.style.setProperty("--focus-scale", (2.18 - 1.13 * eased).toFixed(3));
        focusStory.style.setProperty("--focus-one", (ramp(0.015, 0.09, progress) * (1 - ramp(0.23, 0.34, progress))).toFixed(3));
        focusStory.style.setProperty("--focus-two", (ramp(0.32, 0.43, progress) * (1 - ramp(0.60, 0.72, progress))).toFixed(3));
        focusStory.style.setProperty("--focus-three", ramp(0.72, 0.86, progress).toFixed(3));
        focusStory.style.setProperty("--focus-reticle", (1 - ramp(0.20, 0.46, progress)).toFixed(3));
        focusStory.style.setProperty("--focus-progress", `${(progress * 100).toFixed(1)}%`);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    focusStory?.classList.add("focus-active");
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
      focusStory?.classList.remove("focus-active");
      ["--focus-scale", "--focus-one", "--focus-two", "--focus-three", "--focus-reticle", "--focus-progress"].forEach((property) => focusStory?.style.removeProperty(property));
    };
  }, []);

  return null;
}
