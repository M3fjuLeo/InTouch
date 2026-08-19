import React from "react";
import Link from "next/link";
import { LogoIcon } from "./components/ui/LogoIcon";
import { Playfair_Display, Inter } from "next/font/google";

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

export default function NotFound() {
  return (
    <html lang="no" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-darkest text-brand-light antialiased font-sans">
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <Link href="/" className="mb-10 hover:scale-105 transition-transform">
            <LogoIcon variant="light" className="w-20 h-20 opacity-80" />
          </Link>

          <h1 className="font-serif-custom text-7xl md:text-9xl font-normal text-brand-primary mb-6">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl text-white font-medium mb-4">
            Siden finnes ikke / Page not found
          </h2>

          <p className="text-white/70 text-base md:text-lg font-light max-w-md mx-auto mb-12">
            Beklager, siden du leter etter eksisterer ikke eller har blitt
            flyttet.
            <br className="mb-2" />
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-primary text-white text-sm font-semibold uppercase tracking-widest hover:bg-brand-primary/90 transition-colors shadow-lg"
          >
            Gå til forsiden / Homepage
          </Link>
        </div>
      </body>
    </html>
  );
}
