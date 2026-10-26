"use client";

import React from "react";
import { Gift, ArrowRight, Sparkles, CalendarCheck, FileText } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";

interface VouchersClientProps {
  labels: {
    badge: string;
    title: string;
    paragraphs: string[];
    details: { choice: string; validity: string; format: string };
    button: string;
    mockupBadge: string;
    mockupTitle: string;
    mockupDesc: string;
  };
  bookingUrl: string;
}

export const VouchersClient: React.FC<VouchersClientProps> = ({
  labels,
  bookingUrl,
}) => {
  const details = [
    { icon: Sparkles, label: labels.details.choice },
    { icon: CalendarCheck, label: labels.details.validity },
    { icon: FileText, label: labels.details.format },
  ];

  return (
    <section
      id="vouchers"
      className="py-20 sm:py-28 px-6 sm:px-12 bg-brand-primary text-brand-light relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="space-y-6 sm:space-y-8 text-left">
            <Badge
              variant="light"
              className="bg-brand-primary-light"
              icon={<Gift className="w-3.5 h-3.5" />}
            >
              {labels.badge}
            </Badge>

            <Heading className="text-white">{labels.title}</Heading>

            <div className="space-y-4 max-w-xl">
              {labels.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "font-serif-custom italic text-xl sm:text-2xl text-white leading-snug"
                      : "text-base sm:text-lg text-white/75 font-light leading-relaxed"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {details.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-white"
                >
                  <Icon className="w-4 h-4 shrink-0 text-brand-primary-light" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                href={bookingUrl}
                isExternal
                size="lg"
                className="bg-brand-primary-light text-brand-dark"
                iconRight={<ArrowRight className="w-4 h-4 text-brand-dark" />}
              >
                {labels.button}
              </Button>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] md:aspect-square lg:aspect-[4/3] group bg-brand-darkest">
            <img
              src="/voucher.png"
              alt="Voucher"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest via-brand-darkest/40 to-transparent p-6 sm:p-10 pointer-events-none flex flex-col justify-end">

              <div className="bg-brand-darkest/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 text-white shadow-xl max-w-sm">
                <div className="text-[10px] uppercase tracking-widest font-semibold text-brand-primary mb-1">
                  {labels.mockupBadge}
                </div>
                <div className="font-serif-custom text-lg sm:text-xl font-medium mb-1 text-white">
                  {labels.mockupTitle}
                </div>
                <div className="text-xs text-white/70 font-light">
                  {labels.mockupDesc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
