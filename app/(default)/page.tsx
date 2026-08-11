import { setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import HomeView from "../components/views/HomeView";

export default function HomePage() {
  setRequestLocale(routing.defaultLocale);

  return <HomeView />;
}