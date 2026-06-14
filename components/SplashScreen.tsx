"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SPLASH_DURATION = 1720;
const SPLASH_EXIT_DURATION = 300;
const REDUCED_MOTION_DURATION = 650;
const REDUCED_MOTION_EXIT_DURATION = 160;

export function SplashScreen() {
  const [exiting, setExiting] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? REDUCED_MOTION_DURATION : SPLASH_DURATION;
    const exitDuration = prefersReducedMotion ? REDUCED_MOTION_EXIT_DURATION : SPLASH_EXIT_DURATION;

    root.classList.add("intro-active");

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
      root.classList.remove("intro-active");
      root.classList.add("intro-ready");
    }, duration);

    const unmountTimer = window.setTimeout(() => {
      setMounted(false);
    }, duration + exitDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(unmountTimer);
      root.classList.remove("intro-active");
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`splash-screen ${exiting ? "splash-screen--exit" : ""}`} aria-hidden="true">
      <div className="splash-screen__reveal" />
      <div className="splash-screen__logo-wrap">
        <Image
          alt=""
          className="splash-screen__logo"
          height={180}
          priority
          src="/favicon.png"
          width={180}
        />
      </div>
    </div>
  );
}
