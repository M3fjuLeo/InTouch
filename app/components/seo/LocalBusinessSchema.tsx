export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "In Touch Massasjeterapi",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    logo: `${process.env.NEXT_PUBLIC_BASE_URL}/icon.png`,
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/icon.png`,
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
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "START HER - Din første massasje",
          },
          price: "1095.00",
          priceCurrency: "NOK",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klassisk massasje 90 min",
          },
          price: "1595.00",
          priceCurrency: "NOK",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
