import React from "react";

import { getTranslations } from "next-intl/server";
import { HeroVideo } from "./HeroVideo";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

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
        <Badge variant="dark">{t("pill")}</Badge>

        <h1 className="font-serif-custom text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-5 drop-shadow-md">
          {t("headline")}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-light leading-relaxed mb-8 drop-shadow-sm px-2">
          {t("subtitle")}
        </p>

        <Button href={bookingUrl} isExternal size="lg">
          {t("button")}
        </Button>
      </div>
    </section>
  );
}
