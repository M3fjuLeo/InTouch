import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { AboutSection } from "../components/about/AboutSection";
import { HeroSection } from "../components/hero/HeroSection";
import { FeaturedServicesSection } from "../components/services/FeaturedServicesSection";
import { SocialProofSection } from "../components/social-proof/SocialProofSection";
import { VouchersSection } from "../components/vouchers/VouchersSection";
import { routing } from "@/i18n/routing";

// Zostawiamy to - Next.js wie, jakie języki wygenerować statycznie
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

// USUNIĘTO: export const dynamicParams = false;

export default async function HomeView({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Zabezpieczenie: jeśli język to np. "plasf", natychmiast pokaż 404
  if (!routing.locales.includes(lang as any)) {
    notFound();
  }

  setRequestLocale(lang);

  return (
    <main className="relative bg-brand-darkest">
      <div className="sticky top-0 h-screen w-full">
        <HeroSection />
      </div>

      <div className="relative z-10 bg-neutral-50 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <AboutSection />
        <FeaturedServicesSection />
        <SocialProofSection />
        <VouchersSection />
      </div>
    </main>
  );
}
