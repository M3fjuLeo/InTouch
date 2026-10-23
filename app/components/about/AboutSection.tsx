import React from "react";
import { HandHeart, Wind, Heart } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "../ui/Badge";
import { Heading } from "../ui/Heading";

export async function AboutSection() {
  const t = await getTranslations("About");

  const pillars = [
    {
      icon: HandHeart,
      title: t("pillars.p1.title"),
      description: t("pillars.p1.description"),
    },
    {
      icon: Wind,
      title: t("pillars.p2.title"),
      description: t("pillars.p2.description"),
    },
    {
      icon: Heart,
      title: t("pillars.p3.title"),
      description: t("pillars.p3.description"),
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-6 bg-brand-bg text-brand-darkest transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
          <Badge variant="solid">{t("pill")}</Badge>
        </div>

        <Heading className="text-center max-w-3xl mx-auto mb-8">
          {t("title")}
        </Heading>

        <p className="text-center text-sm sm:text-base md:text-lg text-brand-dark font-light max-w-2xl mx-auto leading-relaxed mb-16">
          {t("description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-light border border-brand-dark/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 bg-brand-primary/10 border border-brand-primary/20">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <Heading variant="card" className="text-brand-dark mb-3">
                  {pillar.title}
                </Heading>
                <p className="text-sm text-brand-darkest/80 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
