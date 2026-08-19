import { getTranslations, getLocale } from "next-intl/server";
import { GlassNavbar } from "./GlassNavbar";

export async function Navbar() {
  const t = await getTranslations("Navbar");
  const locale = await getLocale();

  const links = [
    { href: "/", label: t("home") },
    { href: "/offer", label: t("offer") },
    { href: "/", hash: "vouchers", label: t("vouchers") },
    { href: "/contact", label: t("contact") },
    { href: "/faq", label: "FAQ" },
  ];

  return <GlassNavbar links={links} currentLocale={locale} />;
}
