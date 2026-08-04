"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { Link } from "../../../i18n/routing";

interface Service {
  id: string;
  name: string;
  categoryId: string;
  tag: string;
  duration: string;
  price: string;
  description: string;
  image: string;
}

interface FeaturedServicesClientProps {
  services: Service[];
  labels: {
    badge: string;
    title: string;
    subtitle: string;
    bookBtn: string;
    viewAllBtn: string;
  };
  bookingUrl: string;
}

export const FeaturedServicesClient: React.FC<FeaturedServicesClientProps> = ({
  services,
  labels,
  bookingUrl,
}) => {
  // Wybieramy tylko 4 pierwsze usługi, aby zachować czytelność harmonijki
  const featuredServices = services.slice(0, 4);
  const [activeId, setActiveId] = useState<string>(featuredServices[0]?.id);

  return (
    <section
      id="wyroznione-zabiegi"
      className="py-24 px-6 bg-brand-darkest text-brand-light"
    >
      <div className="max-w-6xl mx-auto">
        {/* Nagłówek Sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-primary/30 text-xs font-medium text-brand-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{labels.badge}</span>
          </div>
          <h2 className="font-serif-custom text-4xl sm:text-5xl font-medium text-white mb-6">
            {labels.title}
          </h2>
          <p className="text-sm text-white/70 font-light">{labels.subtitle}</p>
        </div>

        {/* WIDOK DESKTOP: Horyzontalna Harmonijka */}
        <div className="hidden md:flex h-[550px] gap-4 w-full">
          {featuredServices.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`relative rounded-4xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex ${
                  isActive
                    ? "flex-4 sm:flex-5 shadow-2xl"
                    : "flex-1 hover:flex-[1.2]"
                }`}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-brand-darkest via-brand-darkest/40 to-transparent"
                      : "bg-black/60 hover:bg-black/50"
                  }`}
                />

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    isActive
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100 delay-200"
                  }`}
                >
                  <h3 className="text-white tracking-[0.2em] uppercase font-medium whitespace-nowrap -rotate-90 text-sm">
                    {service.name}
                  </h3>
                </div>

                <div
                  className={`absolute inset-0 p-10 flex flex-col justify-end transition-opacity duration-500 ${
                    isActive
                      ? "opacity-100 delay-300"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="max-w-md">
                    {service.tag && (
                      <span className="inline-block px-3 py-1 mb-4 rounded-full text-[10px] font-semibold tracking-wider text-white uppercase bg-brand-primary/90 backdrop-blur-sm">
                        {service.tag}
                      </span>
                    )}
                    <h3 className="font-serif-custom text-4xl text-white mb-4 leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-white/80 font-light mb-8 line-clamp-3">
                      {service.description}
                    </p>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md inline-flex items-center gap-2 bg-brand-primary"
                    >
                      <span>{labels.bookBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 custom-scrollbar">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="relative shrink-0 w-[85%] h-[450px] rounded-[2rem] overflow-hidden snap-center bg-brand-dark"
            >
              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest via-brand-darkest/50 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {service.tag && (
                  <span className="inline-block px-3 py-1 mb-3 rounded-full text-[10px] font-semibold tracking-wider text-white uppercase bg-brand-primary self-start">
                    {service.tag}
                  </span>
                )}
                <h3 className="font-serif-custom text-2xl text-white mb-3 leading-tight">
                  {service.name}
                </h3>
                <p className="text-white/70 font-light text-sm mb-6 line-clamp-3">
                  {service.description}
                </p>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 bg-brand-primary"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{labels.bookBtn}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Przycisk przejścia do pełnej oferty */}
        <div className="mt-12 text-center">
          <Link
            href="/offer"
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-light transition-colors font-medium text-sm tracking-wide uppercase"
          >
            {labels.viewAllBtn}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
