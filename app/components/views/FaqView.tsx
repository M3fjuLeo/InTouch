import { getTranslations } from "next-intl/server";
import { FaqClient } from "../faq/FaqClient";

export default async function FaqView() {
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
