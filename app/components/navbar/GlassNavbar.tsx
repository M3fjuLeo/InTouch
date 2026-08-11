"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { LogoIcon } from "../ui/LogoIcon";

interface NavLink {
  href: string;
  hash?: string;
  label: string;
}

interface GlassNavbarProps {
  links: NavLink[];
  currentLocale: string;
}

export const GlassNavbar: React.FC<GlassNavbarProps> = ({
  links,
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ) => {
    if (link.hash && pathname === link.href) {
      e.preventDefault();
      const element = document.getElementById(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${link.hash}`);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
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
              {links.map((link) => {
                const linkTarget = link.hash
                  ? { pathname: link.href as any, hash: link.hash }
                  : (link.href as any);

                return (
                  <Link
                    key={link.label}
                    href={linkTarget}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`transition-colors cursor-pointer hover:text-white ${
                      pathname === link.href && !link.hash
                        ? "text-white font-medium border-b-2 border-brand-primary pb-0.5"
                        : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="flex items-center gap-3 border-l border-white/20 pl-6 ml-2">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={pathname}
                    locale={loc as any}
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

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-brand-darkest/98 backdrop-blur-3xl transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-7 py-6 border-b border-white/10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <LogoIcon
              className="w-10 h-10 drop-shadow-md brightness-110 contrast-125"
              variant="light"
            />
            <span className="font-serif-custom text-2xl font-medium tracking-tight text-white">
              InTouch
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full px-8 py-12">
          <div className="flex flex-col gap-8">
            {links.map((link) => {
              const linkTarget = link.hash
                ? { pathname: link.href as any, hash: link.hash }
                : (link.href as any);

              return (
                <Link
                  key={link.label}
                  href={linkTarget}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-3xl font-serif-custom text-white/90 hover:text-brand-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex gap-6 pb-6">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc as any}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium uppercase tracking-widest transition-colors ${
                  currentLocale === loc
                    ? "text-brand-primary"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};