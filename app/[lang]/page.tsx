import { getTranslations } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Pobieranie tłumaczeń na serwerze dla konkretnego namespace'u
  const t = await getTranslations({ locale: lang, namespace: "HomePage" });

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-brand-primary">{t("title")}</h1>
    </main>
  );
}
