"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface Highlight {
  value: string;
  label: string;
}

const COUNT_DURATION_MS = 1600;
const STAGGER_MS = 150;

// Rozbija np. "15+" lub "16 000" na prefiks, liczbę docelową, separator tysięcy i sufiks.
function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d(?:[\d\s.,]*\d)?)(\D*)$/);
  if (!match) return null;

  const [, prefix, number, suffix] = match;
  return {
    prefix,
    suffix,
    separator: number.match(/\D/)?.[0] ?? "",
    target: Number(number.replace(/\D/g, "")),
  };
}

function formatValue(value: string, progress: number) {
  const parsed = parseValue(value);
  if (!parsed) return value;

  const digits = String(Math.round(parsed.target * progress));
  const grouped = parsed.separator
    ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, parsed.separator)
    : digits;
  return `${parsed.prefix}${grouped}${parsed.suffix}`;
}

export const AnimatedHighlights: React.FC<{ highlights: Highlight[] }> = ({
  highlights,
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  // null = statystyki jeszcze nie pojawiły się na ekranie.
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (prefersReducedMotion) {
          setProgress(1);
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = Math.min((now - start) / COUNT_DURATION_MS, 1);
          setProgress(1 - Math.pow(1 - elapsed, 3));
          if (elapsed < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(list);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const isVisible = progress !== null;

  return (
    <ul
      ref={listRef}
      className="grid gap-12 sm:grid-cols-3 sm:gap-8 text-center"
    >
      {highlights.map((highlight, index) => (
        <li
          key={highlight.label}
          style={{ transitionDelay: `${index * STAGGER_MS}ms` }}
          className={cn(
            "transition-all duration-700 ease-out motion-reduce:transition-none",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="font-serif-custom text-5xl sm:text-6xl text-brand-primary tabular-nums">
            {isVisible ? formatValue(highlight.value, progress) : highlight.value}
          </p>
          <p className="mt-4 max-w-[14rem] mx-auto text-xs uppercase tracking-widest leading-relaxed text-brand-darkest/60">
            {highlight.label}
          </p>
        </li>
      ))}
    </ul>
  );
};
