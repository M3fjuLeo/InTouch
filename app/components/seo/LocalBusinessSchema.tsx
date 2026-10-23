import { getTranslations } from "next-intl/server";
import { siteConfig, type Weekday } from "../../lib/siteConfig";
import { services } from "../../lib/services";

const schemaDayNames: Record<Weekday, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

export async function LocalBusinessSchema() {
  // Katalog usług zawsze po norwesku, tak jak nazwy w systemie rezerwacji.
  const tOffer = await getTranslations({ locale: "no", namespace: "OfferPage" });

  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}/icon.png`,
    image: `${siteConfig.baseUrl}/icon.png`,
    openingHoursSpecification: siteConfig.openingHours.map(
      ({ day, opens, closes }) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: schemaDayNames[day],
        opens,
        closes,
      })
    ),
    telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nedre Storgate 43",
      addressLocality: "Drammen",
      postalCode: "3015",
      addressCountry: "NO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.7441,
      longitude: 10.2045,
    },
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK_URL,
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    ],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Massasjetjenester",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${tOffer(`services.${service.id}.name`)} ${service.duration} min`,
        },
        price: service.price.toFixed(2),
        priceCurrency: "NOK",
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
