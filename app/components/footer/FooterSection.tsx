import { getTranslations } from "next-intl/server";
import { FooterClient } from "./FooterClient";

export async function FooterSection() {
  const t = await getTranslations("Footer");

  const labels = {
    description: t("description"),
    bookBtn: t("bookBtn"),
    navTitle: t("navTitle"),
    navHome: t("navHome"),
    navAbout: t("navAbout"),
    navOffer: t("navOffer"),
    navVouchers: t("navVouchers"),
    contactTitle: t("contactTitle"),
    legalTitle: t("legalTitle"),
    privacy: t("privacy"),
    terms: t("terms"),
    rights: t("rights"),
    location: t("location"),
    closeModal: t("closeModal"),
    privacyContent: t.raw("privacyContent"),
    termsContent: t.raw("termsContent"),
  };

  return <FooterClient labels={labels} />;
}
