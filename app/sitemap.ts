import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "./lib/siteConfig";

const routes = ["", "/contact", "/faq", "/offer"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
