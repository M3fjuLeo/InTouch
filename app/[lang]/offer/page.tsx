import { OfferClient } from "@/app/components/offer/OfferClient";
import type { OfferCategory } from "@/app/components/offer/OfferClient";
import {
  formatPrice,
  serviceCategories,
  services,
} from "@/app/lib/services";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function OfferView({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang);

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";
  const t = await getTranslations("OfferPage");

  const categories: OfferCategory[] = serviceCategories.map((category) => ({
    id: category,
    label: t(`categories.${category}`),
    services: services
      .filter((service) => service.category === category)
      .map((service) => ({
        id: service.id,
        name: t(`services.${service.id}.name`),
        area: t(`services.${service.id}.area`),
        description: t(`services.${service.id}.description`),
        badge: service.badge ? t(`badges.${service.badge}`) : undefined,
        price: formatPrice(service.price),
        duration: [
          t("labels.duration", { minutes: service.duration }),
          service.consultation &&
            t("labels.consultation", { minutes: service.consultation }),
        ]
          .filter(Boolean)
          .join(" "),
      })),
  }));

  return (
    <main>
      <OfferClient
        title={t("title")}
        intro={t("intro")}
        categories={categories}
        labels={{
          book: t("labels.book"),
          readMore: t("labels.readMore"),
          readLess: t("labels.readLess"),
        }}
        bookingUrl={bookingUrl}
      />
    </main>
  );
}
