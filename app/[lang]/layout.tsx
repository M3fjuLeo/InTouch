import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { routing } from "../../i18n/routing";
import { Navbar } from "../components/navbar/Navbar";
import { LocalBusinessSchema } from "../components/seo/LocalBusinessSchema";
import "../globals.css";
import { CookieBanner } from "../components/ui/CookieBanner";
import { FooterSection } from "../components/footer/FooterSection";
import { siteConfig } from "../lib/siteConfig";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: segment } = await params;

  const isLocale = routing.locales.includes(segment as any);
  const actualLocale = isLocale ? segment : routing.defaultLocale;

  const t = await getTranslations({
    locale: actualLocale,
    namespace: "metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: `/${segment}`,
      languages: { en: "/en", no: "/no", pl: "/pl" },
    },
    // Dodana konfiguracja ikon dla przeglądarki i Google
    icons: {
      icon: [{ url: "/icon.png", type: "image/png" }],
      apple: [{ url: "/icon.png", type: "image/png" }],
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteConfig.baseUrl}/${segment}`,
      siteName: siteConfig.name,
      locale: actualLocale,
      type: "website",
      // Dodana miniaturka generowana z pierwszej klatki wideo
      images: [
        {
          url: "/video-poster.jpg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!routing.locales.includes(lang as any)) {
    notFound();
  }

  setRequestLocale(lang);
  const messages = await getMessages();

  return (
    <html lang={lang} className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-darkest text-brand-light antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          <LocalBusinessSchema />
          <Navbar />
          {children}
          <FooterSection />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
