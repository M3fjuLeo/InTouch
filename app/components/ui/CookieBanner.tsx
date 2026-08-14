"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "./Button";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const CookieBanner: React.FC = () => {
  const t = useTranslations("CookieBanner");
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("intouch_cookie_consent");
    if (!saved) {
      setIsVisible(true);
    }
  }, []);

  const handleSave = (finalConsents: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  }) => {
    localStorage.setItem(
      "intouch_cookie_consent",
      JSON.stringify(finalConsents)
    );
    setIsVisible(false);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cookie_consent_update",
      analytics_storage: finalConsents.analytics ? "granted" : "denied",
      ad_storage: finalConsents.marketing ? "granted" : "denied",
      ad_user_data: finalConsents.marketing ? "granted" : "denied",
      ad_personalization: finalConsents.marketing ? "granted" : "denied",
    });

    window.dispatchEvent(
      new CustomEvent("cookieConsentUpdated", { detail: finalConsents })
    );
  };

  const handleAcceptAll = () => {
    handleSave({ necessary: true, analytics: true, marketing: true });
  };

  const handleRejectAll = () => {
    handleSave({ necessary: true, analytics: false, marketing: false });
  };

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none flex justify-center">
      <div className="bg-brand-darkest/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 w-full max-w-4xl shadow-2xl pointer-events-auto text-brand-light flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-5 h-5 text-brand-primary" />
              <h2 className="font-serif-custom text-xl font-medium tracking-wide">
                {t("title")}
              </h2>
            </div>
            <p className="text-sm text-white/70 font-light leading-relaxed max-w-2xl">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <Button
              onClick={handleRejectAll}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              {t("rejectOptional")}
            </Button>
            <Button onClick={handleAcceptAll} size="sm">
              {t("acceptAll")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
