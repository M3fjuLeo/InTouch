"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

export interface OfferService {
  id: string;
  name: string;
  area: string;
  description: string;
  badge?: string;
  price: string;
  duration: string;
}

export interface ServiceRowLabels {
  book: string;
  readMore: string;
  readLess: string;
}

interface ServiceRowProps {
  service: OfferService;
  labels: ServiceRowLabels;
  bookingUrl: string;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({
  service,
  labels,
  bookingUrl,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  // Przycisk „czytaj więcej” pokazujemy tylko wtedy, gdy opis faktycznie się nie mieści.
  useEffect(() => {
    const element = descriptionRef.current;
    if (!element || isExpanded) return;

    const observer = new ResizeObserver(() => {
      setIsClamped(element.scrollHeight > element.clientHeight + 1);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [isExpanded]);

  return (
    <li className="grid gap-5 py-10 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        {service.badge && (
          <span className="block mb-3 text-[10px] font-semibold uppercase tracking-widest text-brand-primary">
            {service.badge}
          </span>
        )}
        <h3 className="font-serif-custom text-2xl sm:text-[1.7rem] leading-tight text-brand-darkest">
          {service.name}
        </h3>
        <p className="mt-3 text-xs uppercase tracking-widest text-brand-darkest/50 leading-relaxed">
          {service.area}
        </p>
      </div>

      <div className="md:col-span-5">
        <p
          ref={descriptionRef}
          className={cn(
            "text-sm sm:text-base text-brand-darkest/75 font-light leading-relaxed",
            !isExpanded && "line-clamp-3"
          )}
        >
          {service.description}
        </p>

        {(isClamped || isExpanded) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="mt-3 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-darkest/50 hover:text-brand-primary transition-colors cursor-pointer"
          >
            {isExpanded ? labels.readLess : labels.readMore}
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                isExpanded && "rotate-180"
              )}
            />
          </button>
        )}
      </div>

      <div className="flex items-end justify-between gap-4 md:col-span-3 md:flex-col md:items-end md:justify-start">
        <div className="md:text-right">
          <p className="font-serif-custom text-2xl text-brand-dark">
            {service.price}
          </p>
          <p className="mt-1 text-xs text-brand-darkest/50">
            {service.duration}
          </p>
        </div>
        <Button
          href={bookingUrl}
          isExternal
          variant="outline"
          size="sm"
          iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
        >
          {labels.book}
        </Button>
      </div>
    </li>
  );
};
