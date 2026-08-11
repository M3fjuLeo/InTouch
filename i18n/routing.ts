import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/offer": {
    no: "/tilbud",
    en: "/offer",
    pl: "/oferta",
  },
  "/contact": {
    no: "/kontakt",
    en: "/contact",
    pl: "/kontakt",
  },
} as const;

export const routing = defineRouting({
  locales: ["no", "pl", "en"],
  defaultLocale: "no",
  pathnames,
  localePrefix: "always",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
