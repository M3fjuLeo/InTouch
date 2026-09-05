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
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "",
    orgNr: process.env.NEXT_PUBLIC_ORG_NR || "",
    instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  };

  return <FooterClient labels={labels} />;
}