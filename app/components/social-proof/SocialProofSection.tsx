import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SocialProofClient } from './SocialProofClient';
import { testimonials } from '../../lib/testimonials';

export async function SocialProofSection() {
  const tSocialProof = await getTranslations('SocialProof');

  const labels = {
    badge: tSocialProof('badge'),
    title: tSocialProof('title'),
    ratingText: tSocialProof('ratingText'),
    sourceText: tSocialProof('sourceText'),
  };

  return <SocialProofClient testimonials={testimonials} labels={labels} />;
}
