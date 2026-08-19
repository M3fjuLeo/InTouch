import React from "react";
import { getTranslations } from "next-intl/server";
import { HeroVideo } from "./HeroVideo";
import { Button } from "../ui/Button";
import { LogoIcon } from "../ui/LogoIcon";

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
        <LogoIcon
          className="w-16 h-16 md:w-20 md:h-20 mb-6 drop-shadow-lg"
          variant="light"
        />

        <span className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-white/90 mb-4 drop-shadow-md">
          {t("brand")}
        </span>

        <h1 className="font-serif-custom text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
          {t("headline")}
        </h1>

        <div className="flex flex-col gap-1.5 mb-10 max-w-2xl px-2">
          <p className="text-lg sm:text-xl text-white font-medium drop-shadow-sm">
            {t("subtitle1")}
          </p>
          <p className="text-sm sm:text-base text-white/80 font-light drop-shadow-sm">
            {t("subtitle2")}
          </p>
          <p className="text-xs sm:text-sm text-brand-primary font-medium tracking-[0.2em] uppercase mt-3 drop-shadow-sm">
            {t("subtitle3")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href={bookingUrl} isExternal size="lg">
            {t("bookBtn")}
          </Button>
          <Button
            href="#vouchers"
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white"
          >
            {t("giftBtn")}
          </Button>
        </div>
      </div>
    </section>
  );
}
