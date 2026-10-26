import { Faq, type FaqItem } from "@/app/components/faq/Faq";
import { faqCategories } from "@/app/lib/faq";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function FaqView({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang);
  const t = await getTranslations("FaqPage");

  const faqs: FaqItem[] = t.raw("faqs");
  const faqsById = new Map(faqs.map((faq) => [faq.id, faq]));

  const categories = faqCategories.map(({ id, questionIds }) => ({
    id,
    label: t(`categories.${id}`),
    items: questionIds.map((questionId) => {
      const faq = faqsById.get(questionId);
      if (!faq) throw new Error(`Missing FAQ question: ${questionId}`);
      return faq;
    }),
  }));

  return (
    <main>
      <Faq
        content={{
          eyebrow: t("eyebrow"),
          title: t("title"),
          subtitle: t("subtitle"),
          contactPrompt: t("contactPrompt"),
          contactButton: t("contactButton"),
        }}
        categories={categories}
      />
    </main>
  );
}
