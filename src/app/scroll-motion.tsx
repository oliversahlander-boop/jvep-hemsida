"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    let ticking = false;

    const updateScrollVar = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        String(window.scrollY),
      );
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(updateScrollVar);
    };

    updateScrollVar();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
