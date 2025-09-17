// src/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Use in-memory cache plus sessionStorage for robustness across remounts
const memoryScrollPositions = new Map<string, number>();

function buildKeys(location: { key: string; pathname: string; search: string; hash: string }) {
  const historyKey = location.key;
  const pathKey = `${location.pathname}${location.search}${location.hash}`;
  return { historyKey, pathKey };
}

function savePosition(key: string, y: number) {
  memoryScrollPositions.set(key, y);
  try {
    sessionStorage.setItem(`scroll:${key}`, String(y));
  } catch {}
}

function readPosition(key: string): number | undefined {
  if (memoryScrollPositions.has(key)) return memoryScrollPositions.get(key);
  try {
    const v = sessionStorage.getItem(`scroll:${key}`);
    if (v != null) return Number(v) || 0;
  } catch {}
  return undefined;
}

export function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  // Ensure the browser doesn't try to auto-restore; we handle it
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const previous = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = previous as ScrollRestoration;
      };
    }
  }, []);

  // Save scroll position for the current route on scroll and page hide
  useEffect(() => {
    const { historyKey, pathKey } = buildKeys({
      key: location.key,
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    } as any);
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (historyKey) savePosition(historyKey, y);
      savePosition(pathKey, y);
    };

    // Save once immediately (in case there was a programmatic scroll before user scroll)
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") handleScroll();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
      // Save one last time when leaving the route
      handleScroll();
    };
  }, [location.key, location.pathname, location.search, location.hash]);

  // On navigation, restore previous scroll for POP (back/forward). Otherwise scroll to top.
  useEffect(() => {
    const { historyKey, pathKey } = buildKeys({
      key: location.key,
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    } as any);
    if (navigationType === "POP") {
      const y =
        (historyKey ? readPosition(historyKey) : undefined) ??
        readPosition(pathKey) ??
        0;
      // Defer to the next frame to ensure the DOM is ready before scrolling
      requestAnimationFrame(() => window.scrollTo({ top: y, left: 0 }));
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location.key, location.pathname, location.search, location.hash, navigationType]);

  return null;
}
