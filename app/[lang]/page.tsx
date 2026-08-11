import { setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import HomeView from "../components/views/HomeView";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function DynamicRootPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang);

  return <HomeView />;
}
