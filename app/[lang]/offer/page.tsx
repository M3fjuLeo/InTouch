import { OfferClient } from "@/app/components/offer/OfferClient";
import { getTranslations } from "next-intl/server";

export default async function OfferPage() {
  const t = await getTranslations("OfferPage");
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

  const content = {
    title: t("title"),
    subtitle: t("subtitle"),
    filters: {
      all: t("filters.all"),
      firstTime: t("filters.firstTime"),
      fullBody: t("filters.fullBody"),
      focused: t("filters.focused"),
      special: t("filters.special"),
    },
    cardLabels: {
      bookNow: t("card.bookNow"),
      readMore: t("card.readMore"),
      readLess: t("card.readLess"),
    },
    services: t.raw("services"),
  };

  return (
    <main>
      <OfferClient content={content} bookingUrl={bookingUrl} />
    </main>
  );
}
