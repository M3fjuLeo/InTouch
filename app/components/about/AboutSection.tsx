import React from 'react';
import { Sparkles, Heart, ShieldCheck, Feather } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function AboutSection() {
  const t = await getTranslations('About');

  const pillars = [
    {
      icon: Feather,
      title: t('pillars.p1.title'),
      description: t('pillars.p1.description'),
    },
    {
      icon: Heart,
      title: t('pillars.p2.title'),
      description: t('pillars.p2.description'),
    },
    {
      icon: ShieldCheck,
      title: t('pillars.p3.title'),
      description: t('pillars.p3.description'),
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-6 text-brand-darkest transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Minimalist Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-white border border-brand-primary/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            <span className="text-brand-dark">{t('pill')}</span>
          </div>
        </div>

        {/* Main Display Title */}
        <h2 className="font-serif-custom text-3xl sm:text-5xl md:text-6xl text-center font-normal tracking-tight leading-[1.15] max-w-3xl mx-auto mb-8">
          {t('title')}
        </h2>

        {/* Subtitle / Intro paragraph */}
        <p className="text-center text-sm sm:text-base md:text-lg text-brand-dark font-light max-w-2xl mx-auto leading-relaxed mb-16">
          {t('description')}
        </p>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 bg-brand-primary/10 border border-brand-primary/20">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-serif-custom text-2xl font-medium text-brand-darkest mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-dark font-light leading-relaxed">
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