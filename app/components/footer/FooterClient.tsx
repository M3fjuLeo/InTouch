"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, ShieldCheck, FileText } from "lucide-react";
import { Link } from "../../../i18n/routing";
import { Button } from "../ui/Button";
import { LogoIcon } from "../ui/LogoIcon";
import { InstagramIcon, FacebookIcon } from "../ui/SocialIcons";

interface FooterClientProps {
  labels: {
    description: string;
    bookBtn: string;
    navTitle: string;
    navHome: string;
    navAbout: string;
    navOffer: string;
    navVouchers: string;
    contactTitle: string;
    legalTitle: string;
    privacy: string;
    terms: string;
    rights: string;
    location: string;
    closeModal: string;
  };
  bookingUrl: string;
}

export const FooterClient: React.FC<FooterClientProps> = ({
  labels,
  bookingUrl,
}) => {
  const [activeLegalModal, setActiveLegalModal] = useState<
    "privacy" | "terms" | null
  >(null);

  return (
    <footer className="bg-[#FDFBFB] text-[#3D2C2C] border-t border-[#3D2C2C]/10 pt-16 pb-12 px-6 sm:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 text-left items-start mb-16">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 group inline-flex"
            >
              <LogoIcon className="w-8 h-8" />
              <span className="font-serif-custom text-2xl font-normal tracking-wide text-[#3D2C2C] group-hover:text-brand-dark transition-colors">
                InTouch
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#3D2C2C]/80 font-light leading-relaxed">
              {labels.description}
            </p>

            <div className="pt-2">
              <Button
                href={bookingUrl}
                isExternal
                size="sm"
                className="bg-[#C29B9A]/20 text-[#3D2C2C] hover:bg-[#C29B9A]/30 border border-[#C29B9A]/40 shadow-none"
                iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                {labels.bookBtn}
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#3D2C2C]/60 mb-4">
              {labels.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3D2C2C]/90 font-light">
              <li>
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  {labels.navHome}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:opacity-70 transition-opacity"
                >
                  {labels.navAbout}
                </Link>
              </li>
              <li>
                <Link
                  href="/offer"
                  className="hover:opacity-70 transition-opacity"
                >
                  {labels.navOffer}
                </Link>
              </li>
              <li>
                <Link
                  href="/vouchers"
                  className="hover:opacity-70 transition-opacity"
                >
                  {labels.navVouchers}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#3D2C2C]/60 mb-4">
              {labels.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#3D2C2C]/90 font-light">
              <li>
                <a
                  href="mailto:contact@intouchmassage.no"
                  className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <Mail className="w-4 h-4 text-[#3D2C2C]/60" />
                  <span>contact@intouchmassage.no</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <InstagramIcon className="w-4 h-4 text-[#3D2C2C]/60" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <FacebookIcon className="w-4 h-4 text-[#3D2C2C]/60" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#3D2C2C]/60 mb-4">
              {labels.legalTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3D2C2C]/90 font-light">
              <li>
                <button
                  onClick={() => setActiveLegalModal("privacy")}
                  className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer text-left"
                >
                  <ShieldCheck className="w-4 h-4 text-[#3D2C2C]/60" />
                  <span>{labels.privacy}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal("terms")}
                  className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer text-left"
                >
                  <FileText className="w-4 h-4 text-[#3D2C2C]/60" />
                  <span>{labels.terms}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#3D2C2C]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3D2C2C]/60 font-light">
          <p>
            © {new Date().getFullYear()} InTouch Massage Studio. {labels.rights}
          </p>
          <p className="tracking-wider uppercase text-[10px]">
            {labels.location}
          </p>
        </div>
      </div>

      {activeLegalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setActiveLegalModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FDFBFB] border border-[#3D2C2C]/15 rounded-3xl p-6 sm:p-10 max-w-2xl w-full text-[#3D2C2C] shadow-2xl relative max-h-[85vh] overflow-y-auto custom-scrollbar"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#3D2C2C]/10">
              <h3 className="font-serif-custom text-2xl font-normal text-[#3D2C2C]">
                {activeLegalModal === "privacy" ? labels.privacy : labels.terms}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="w-8 h-8 rounded-full bg-[#3D2C2C]/10 hover:bg-[#3D2C2C]/20 flex items-center justify-center text-[#3D2C2C] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#3D2C2C]/80 font-light leading-relaxed space-y-4">
              {activeLegalModal === "privacy" ? (
                <>
                  <p>
                    <strong>1. Behandling av Personopplysninger:</strong>{" "}
                    InTouch Massage Studio behandler personopplysninger i
                    samsvar med den gjeldende personvernforordningen (GDPR).
                  </p>
                  <p>
                    <strong>2. Formål:</strong> Vi samler kun inn informasjon
                    som er nødvendig for å gjennomføre timebestilling, levere
                    terapeutiske tjenester og oppfylle lovpålagte helsekrav.
                  </p>
                  <p>
                    <strong>3. Lagring og Sikkerhet:</strong> Deres data
                    oppbevares sikkert hos våre sertifiserte databehandlere
                    (Timma). Vi deler aldri informasjon med tredjeparter uten
                    samtykke.
                  </p>
                  <p>
                    <strong>4. Dine Rettigheter:</strong> Du har rett til
                    innsyn, retting eller sletting av dine lagrede
                    personopplysninger når som helst ved å kontakte oss på
                    contact@intouchmassage.no.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Bestilling og Avbestilling:</strong> Avbestilling
                    eller endring av time må skje senest 24 timer før avtalt
                    tid. Ved for sen avbestilling eller uteblivelse faktureres
                    100% av behandlingens pris.
                  </p>
                  <p>
                    <strong>2. Helseopplysninger:</strong> Kunden plikter å
                    informere terapeuten om eventuelle medisinske tilstander,
                    allergier eller graviditet før behandlingen starter.
                  </p>
                  <p>
                    <strong>3. Betaling:</strong> Betaling skjer etter endt
                    behandling via kort, Vipps eller kontant i lokalet.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-[#3D2C2C]/10 text-right">
              <Button onClick={() => setActiveLegalModal(null)} size="sm">
                {labels.closeModal}
              </Button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
