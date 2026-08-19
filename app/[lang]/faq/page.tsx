import { FaqClient } from "@/app/components/faq/FaqClient";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function FaqView({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang);
  const t = await getTranslations("FaqPage");

  const content = {
    title: t("title"),
    subtitle: t("subtitle"),
    contactPrompt: t("contactPrompt"),
    contactButton: t("contactButton"),
    faqs: t.raw("faqs"),
  };

  return (
    <main>
      <FaqClient content={content} />
    </main>
  );
}
