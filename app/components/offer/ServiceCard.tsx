"use client";

import React, { useState } from "react";
import { Clock, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

interface ServiceCardProps {
  service: {
    title: string;
    duration: string;
    price: string;
    isBestseller: boolean;
    description: string;
  };
  labels: {
    bookNow: string;
    readMore: string;
    readLess: string;
  };
  bookingUrl: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  labels,
  bookingUrl,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col h-full hover:bg-white/10 transition-colors duration-300">
      {/* Header (Tags & Title) */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="dark" icon={<Clock className="w-3.5 h-3.5" />}>
            {service.duration}
          </Badge>
          {service.isBestseller && (
            <Badge
              variant="solid"
              className="bg-brand-primary text-white border-none"
              icon={<Sparkles className="w-3.5 h-3.5" />}
            >
              Bestseller
            </Badge>
          )}
        </div>
        <h3 className="font-serif-custom text-2xl sm:text-3xl font-medium text-white leading-tight">
          {service.title}
        </h3>
      </div>

      {/* Price */}
      <div className="text-xl text-brand-primary font-semibold tracking-wider mb-6">
        {service.price}
      </div>

      {/* Description with Expand/Collapse logic */}
      <div className="flex-grow mb-8">
        <p
          className={`text-sm sm:text-base text-white/70 font-light leading-relaxed whitespace-pre-line transition-all duration-300 ${
            !isExpanded ? "line-clamp-3" : ""
          }`}
        >
          {service.description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
        >
          {isExpanded ? labels.readLess : labels.readMore}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div className="mt-auto pt-6 border-t border-white/10">
        <Button href={bookingUrl} isExternal className="w-full justify-center">
          {labels.bookNow}
        </Button>
      </div>
    </div>
  );
};
