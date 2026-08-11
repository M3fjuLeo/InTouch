import { Metadata } from "next";
import { routing } from "../../i18n/routing";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../components/footer/FooterSection";
import { LocalBusinessSchema } from "../components/seo/LocalBusinessSchema";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif-custom",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        no: "/",
        pl: "/pl",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: baseUrl,
      siteName: "In Touch Massasjeterapi",
      locale: locale,
      type: "website",
    },
  };
}

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = routing.defaultLocale;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-darkest text-brand-light antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          <LocalBusinessSchema />
          <Navbar />
          {children}
          <FooterSection />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}