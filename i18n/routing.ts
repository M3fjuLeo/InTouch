import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["no", "pl", "en"],
  defaultLocale: "pl",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
