import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SocialProofClient } from './SocialProofClient';

export async function SocialProofSection() {
  const tTestimonials = await getTranslations('Testimonials');
  const tSocialProof = await getTranslations('SocialProof');

  const labels = {
    badge: tSocialProof('badge'),
    title: tSocialProof('title'),
    ratingText: tSocialProof('ratingText'),
    sourceText: tSocialProof('sourceText'),
  };

  return (
    <SocialProofClient 
      testimonials={tTestimonials.raw('list')} 
      labels={labels} 
    />
  );
}