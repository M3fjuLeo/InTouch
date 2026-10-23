import { AboutMe } from "@/app/components/about-me/AboutMe";
import { getTranslations, setRequestLocale } from "next-intl/server";

const highlightKeys = ["experience", "hours", "certificates"] as const;

export default async function AboutView({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang);

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";
  const t = await getTranslations("AboutPage");

  const content = {
    eyebrow: t("eyebrow"),
    title: t("title"),
    lead: t("lead"),
    highlights: highlightKeys.map((key) => ({
      value: t(`highlights.${key}.value`),
      label: t(`highlights.${key}.label`),
    })),
    clients: t("clients"),
    storyIntro: t.raw("storyIntro"),
    quote: t.raw("quote"),
    story: t.raw("story"),
    closing: t("closing"),
    signature: t("signature"),
    cta: t.raw("cta"),
    images: t.raw("images"),
  };

  return (
    <main>
      <AboutMe content={content} bookingUrl={bookingUrl} />
    </main>
  );
}
