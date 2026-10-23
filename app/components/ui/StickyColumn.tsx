"use client";

import React, { useEffect, useRef, useState } from "react";

const NAVBAR_OFFSET_PX = 112;
const BOTTOM_GAP_PX = 24;

// Przykleja zawartość kolumny podczas przewijania (od lg). Gdy jest wyższa niż okno,
// zatrzymuje się dopiero dolną krawędzią, więc jej dół (np. przycisk wysyłki) zawsze da się zobaczyć.
export const StickyColumn: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(NAVBAR_OFFSET_PX);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () =>
      setTop(
        Math.min(
          NAVBAR_OFFSET_PX,
          window.innerHeight - element.offsetHeight - BOTTOM_GAP_PX
        )
      );

    const observer = new ResizeObserver(update);
    observer.observe(element);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} style={{ top }} className="lg:sticky">
      {children}
    </div>
  );
};
