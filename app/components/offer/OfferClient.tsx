import React from "react";
import { Heading } from "../ui/Heading";
import { ServiceRow, type OfferService, type ServiceRowLabels } from "./ServiceRow";

export interface OfferCategory {
  id: string;
  label: string;
  services: OfferService[];
}

interface OfferClientProps {
  title: string;
  intro: string;
  categories: OfferCategory[];
  labels: ServiceRowLabels;
  bookingUrl: string;
}

export const OfferClient: React.FC<OfferClientProps> = ({
  title,
  intro,
  categories,
  labels,
  bookingUrl,
}) => {
  return (
    <div className="bg-brand-darkest">
      <header className="px-6 pt-36 pb-20 sm:pt-44 sm:pb-28 text-center">
        <Heading variant="page" className="text-white mb-8">
          {title}
        </Heading>
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed">
          {intro}
        </p>
      </header>

      <div className="bg-brand-bg text-brand-darkest rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 pt-14 pb-24 sm:pt-20 sm:pb-32">
        <div className="max-w-5xl mx-auto">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-16 sm:mb-24">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-xs font-semibold uppercase tracking-widest text-brand-darkest/50 hover:text-brand-primary transition-colors"
              >
                {category.label}
              </a>
            ))}
          </nav>

          <div className="space-y-20 sm:space-y-28">
            {categories.map((category, index) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-32"
              >
                <div className="flex items-baseline justify-between gap-6 pb-5 border-b border-brand-darkest/20">
                  <Heading as="h2" variant="card" className="text-brand-dark">
                    {category.label}
                  </Heading>
                  <span className="font-serif-custom text-lg text-brand-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="divide-y divide-brand-darkest/10">
                  {category.services.map((service) => (
                    <ServiceRow
                      key={service.id}
                      service={service}
                      labels={labels}
                      bookingUrl={bookingUrl}
                    />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
