import { HeroSection } from "../hero/HeroSection";
import { AboutSection } from "../about/AboutSection";
import { FeaturedServicesSection } from "../services/FeaturedServicesSection";
import { SocialProofSection } from "../social-proof/SocialProofSection";
import { VouchersSection } from "../vouchers/VouchersSection";

export default function HomeView() {
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
