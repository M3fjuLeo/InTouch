import { MetadataRoute } from "next";
import { pathnames, routing } from "../i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const entries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    Object.values(pathnames).forEach((slugData) => {
      let slug;
      if (typeof slugData === "string") {
        slug = slugData;
      } else {
        slug = slugData[locale as keyof typeof slugData];
      }

      if (slug === "/") slug = "";

      entries.push({
        url: `${baseUrl}/${locale}${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: slug === "" ? 1 : 0.8,
      });
    });
  });

  return entries;
}
