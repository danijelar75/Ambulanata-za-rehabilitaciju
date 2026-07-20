"use client";

import type { MouseEvent } from "react";

export function BackToTop() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      return;
    }

    const start = window.scrollY;
    const duration = 1100;
    const startTime = performance.now();

    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const scrollStep = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - easeOutCubic(progress)));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    <a
      className="back-to-top"
      href="#top"
      aria-label="Povratak na početak stranice"
      title="Povratak na početak"
      onClick={handleClick}
    >
      ↑
    </a>
  );
}
