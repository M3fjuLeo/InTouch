import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing, pathnames } from "../../../i18n/routing";
import OfferView from "@/app/components/views/OfferView";
import ContactView from "@/app/components/views/ContactView";

type Locale = "no" | "pl" | "en";

export function generateStaticParams() {
  const params: { lang: Locale; slug: string }[] = [];

  routing.locales.forEach((locale) => {
    Object.values(pathnames).forEach((localizedSlugs) => {
      if (typeof localizedSlugs === "string") return;

      params.push({
        lang: locale as Locale,
        slug: localizedSlugs[locale as keyof typeof localizedSlugs].replace(
          "/",
          ""
        ),
      });
    });
  });

  return params;
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  setRequestLocale(lang);

  let currentView: string | null = null;
  const pathSlug = `/${slug}`;

  for (const [viewName, localizedSlugs] of Object.entries(pathnames)) {
    if (typeof localizedSlugs === "string") continue;

    if (localizedSlugs[lang as keyof typeof localizedSlugs] === pathSlug) {
      currentView = viewName;
      break;
    }
  }

  if (!currentView) notFound();

  switch (currentView) {
    case "/offer":
      return (
        <main>
          <OfferView />
        </main>
      );
    case "/contact":
      return (
        <main>
          <ContactView />
        </main>
      );
    default:
      return null;
  }
}
