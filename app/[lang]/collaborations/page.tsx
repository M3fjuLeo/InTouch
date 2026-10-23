import { Collaborations } from "@/app/components/collaborations/Collaborations";
import { getTranslations, setRequestLocale } from "next-intl/server";

const pathIds = ["events", "join"] as const;

export default async function CollaborationsView({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang);

  const t = await getTranslations("CollaborationsPage");

  const content = {
    title: t("title"),
    lead: t("lead"),
    paths: pathIds.map((id) => ({
      id,
      title: t(`paths.${id}.title`),
      description: t(`paths.${id}.description`),
    })),
    events: {
      title: t("events.title"),
      paragraphs: t.raw("events.paragraphs"),
    },
    join: {
      title: t("join.title"),
      paragraphs: t.raw("join.paragraphs"),
      subtitle: t("join.subtitle"),
      closing: t.raw("join.closing"),
    },
    images: t.raw("images"),
  };

  return (
    <main>
      <Collaborations content={content} />
    </main>
  );
}
