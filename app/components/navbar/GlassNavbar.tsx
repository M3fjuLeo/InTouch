"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Link, usePathname } from "../../../i18n/routing";
import { Button } from "../ui/Button";
import { LogoIcon } from "../ui/LogoIcon";

interface NavLink {
  href: string;
  label: string;
}

interface GlassNavbarProps {
  links: NavLink[];
  bookNowText: string;
  bookingUrl: string;
  currentLocale: string;
}

export const GlassNavbar: React.FC<GlassNavbarProps> = ({
  links,
  bookNowText,
  bookingUrl,
  currentLocale,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locales = ["no", "en", "pl"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <div
          className={`flex items-center justify-between px-3 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-500 ring-1 ring-white/10 ${
            scrolled
              ? "bg-brand-dark/80 backdrop-blur-xl border border-brand-primary/30 shadow-2xl"
              : "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="flex items-center justify-center transition-transform group-hover:scale-105">
              <LogoIcon
                className="w-12 h-12 md:w-12 md:h-12 drop-shadow-md brightness-110 contrast-125"
                variant="light"
              />
            </div>
            <span className="font-serif-custom text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-brand-light transition-colors">
              InTouch
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-light text-white/90">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors cursor-pointer hover:text-white ${
                  pathname === link.href
                    ? "text-white font-medium border-b-2 border-brand-primary pb-0.5"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 border-l border-white/20 pl-6 ml-2">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={pathname}
                  locale={loc}
                  className={`text-xs font-medium uppercase transition-colors ${
                    currentLocale === loc
                      ? "text-brand-primary"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {loc}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Button href={bookingUrl} isExternal>
              {bookNowText}
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-3xl bg-brand-darker/95 backdrop-blur-2xl border border-brand-primary/30 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2">
              <div className="text-xs uppercase tracking-widest text-brand-light pb-2 border-b border-white/10 flex justify-between items-center">
                <span>InTouch Studio</span>

                <div className="flex gap-3">
                  {locales.map((loc) => (
                    <Link
                      key={loc}
                      href={pathname}
                      locale={loc}
                      className={`text-xs font-medium uppercase ${
                        currentLocale === loc
                          ? "text-brand-primary"
                          : "text-white/60"
                      }`}
                    >
                      {loc}
                    </Link>
                  ))}
                </div>
              </div>

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl text-left text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-white/40">→</span>
                </Link>
              ))}

              <div className="pt-3 border-t border-white/10">
                <div onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    href={bookingUrl}
                    isExternal
                    className="w-full"
                    iconLeft={<Calendar className="w-4 h-4" />}
                  >
                    {bookNowText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
