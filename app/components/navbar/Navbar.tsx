import React from "react";
import { getTranslations, getLocale } from "next-intl/server";
import { GlassNavbar } from "./GlassNavbar";

export async function Navbar() {
  const t = await getTranslations("Navbar");
  const locale = await getLocale();

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/offer", label: t("offer") },
    { href: "/#vouchers", label: t("vouchers") },
    { href: "/contact", label: t("contact") },
  ];

  return <GlassNavbar links={links} currentLocale={locale} />;
}
