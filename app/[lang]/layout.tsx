import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Playfair_Display, Inter } from "next/font/google";
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

  return (
    // Wstrzyknięcie zmiennych CSS do głównego drzewa DOM
    <html lang={lang} className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-darkest text-brand-light antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
