import { MetadataRoute } from "next";
import { routing } from "../i18n/routing"; // Upewnij się, że ścieżka do routing.ts jest poprawna

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://twojadomena.no";

  // Lista bazowych ścieżek zgodna z Twoimi folderami
  const routes = ["", "/contact", "/faq", "/offer"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
