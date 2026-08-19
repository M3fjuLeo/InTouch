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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${segment}`,
      languages: { en: "/en", no: "/no", pl: "/pl" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${segment}`,
      siteName: "In Touch Massasjeterapi",
      locale: actualLocale,
      type: "website",
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
