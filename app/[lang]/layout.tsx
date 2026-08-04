import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";

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
    <html lang={lang}>
      <body className="bg-brand-darkest text-brand-light antialiased">
        {children}
      </body>
    </html>
  );
}
