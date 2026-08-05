"use client";

import React from "react";
import { Gift, ArrowRight } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { LogoIcon } from "../ui/LogoIcon";

interface VouchersClientProps {
  labels: {
    badge: string;
    title: string;
    description: string;
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
  return (
    <section
      id="vouchers"
      className="py-20 sm:py-28 px-6 sm:px-12 bg-brand-dark text-brand-light relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="space-y-6 sm:space-y-8 text-left">
            <Badge variant="dark" icon={<Gift className="w-3.5 h-3.5" />}>
              {labels.badge}
            </Badge>

            <h2 className="font-serif-custom text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight">
              {labels.title}
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-xl">
              {labels.description}
            </p>

            <div className="pt-2">
              <Button
                href={bookingUrl}
                isExternal
                size="lg"
                iconRight={<ArrowRight className="w-4 h-4 text-white" />}
              >
                {labels.button}
              </Button>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] md:aspect-square lg:aspect-[4/3] group bg-brand-darker">
            <img
              src="/voucher.png"
              alt="Voucher"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest via-brand-darkest/40 to-transparent flex flex-col justify-between p-6 sm:p-10 pointer-events-none">
              <div className="flex items-center justify-between text-white/90">
                <span className="font-serif-custom tracking-widest text-lg sm:text-xl font-normal">
                  InTouch
                </span>
                <LogoIcon className="w-10 h-10 brightness-200 drop-shadow-md" />
              </div>

              <div className="bg-brand-darker/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 text-white shadow-xl max-w-sm">
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
