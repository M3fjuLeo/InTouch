"use client";

import React, { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { LogoIcon } from "../ui/LogoIcon";

interface Service {
  id: string;
  category: string;
  title: string;
  duration: string;
  price: string;
  isBestseller: boolean;
  description: string;
}

interface OfferClientProps {
  content: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      firstTime: string;
      fullBody: string;
      focused: string;
      special: string;
    };
    cardLabels: {
      bookNow: string;
      readMore: string;
      readLess: string;
    };
    services: Service[];
  };
  bookingUrl: string;
}

type FilterKey = "all" | "firstTime" | "fullBody" | "focused" | "special";

export const OfferClient: React.FC<OfferClientProps> = ({
  content,
  bookingUrl,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredServices = content.services.filter((service) => {
    if (activeFilter === "all") return true;
    return service.category === activeFilter;
  });

  const filterButtons: { key: FilterKey; label: string }[] = [
    { key: "all", label: content.filters.all },
    { key: "firstTime", label: content.filters.firstTime },
    { key: "fullBody", label: content.filters.fullBody },
    { key: "focused", label: content.filters.focused },
    { key: "special", label: content.filters.special },
  ];

  return (
    <div className="min-h-screen bg-brand-darkest pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <LogoIcon variant="light" className="w-16 h-16 mb-6 opacity-80" />
          <h1 className="font-serif-custom text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6">
            {content.title}
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-light">
            {content.subtitle}
          </p>
        </div>

        {/* Filtry (Kategorie) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveFilter(btn.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeFilter === btn.key
                  ? "bg-brand-primary text-white shadow-lg"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Siatka Zabiegów */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 transition-all">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              labels={content.cardLabels}
              bookingUrl={bookingUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
