import React from "react";
import { Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { HeroVideo } from "./HeroVideo";

export async function HeroSection() {
  const t = await getTranslations("Hero");
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <HeroVideo />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-16 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-xs text-brand-light shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
          <span className="tracking-widest uppercase text-[11px] font-medium">
            {t("pill")}
          </span>
        </div>

        <h1 className="font-serif-custom text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-5 drop-shadow-md">
          {t("headline")}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-light leading-relaxed mb-8 drop-shadow-sm px-2">
          {t("subtitle")}
        </p>

        <div className="flex flex-col items-center">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 sm:px-11 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/30 inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary/80"
          >
            {t("button")}
          </a>
        </div>
      </div>
    </section>
  );
}
