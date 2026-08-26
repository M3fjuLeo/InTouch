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

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-28 pb-16 flex flex-col items-center justify-center text-center">
        <LogoIcon
          className="w-24 h-24 sm:w-28 sm:h-28 mb-4 drop-shadow-lg"
          variant="light"
        />

        <span className="font-serif-custom text-4xl sm:text-5xl md:text-6xl font-normal uppercase tracking-widest text-white mb-4 drop-shadow-md">
          {t("brand")}
        </span>

        <h1 className="font-serif-custom italic text-xl sm:text-2xl md:text-3xl font-normal text-white leading-relaxed mb-12 max-w-sm sm:max-w-md mx-auto drop-shadow-md">
          {t("headline")}
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-xs sm:max-w-none mx-auto gap-4">
          <Button
            href={bookingUrl}
            isExternal
            size="lg"
            className="w-full sm:w-auto"
          >
            {t("bookBtn")}
          </Button>
          <Button
            href="#vouchers"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10"
          >
            {t("giftBtn")}
          </Button>
        </div>
      </div>
    </section>
  );
}
