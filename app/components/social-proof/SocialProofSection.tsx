import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SocialProofClient } from './SocialProofClient';

export async function SocialProofSection() {
  const t = await getTranslations('Testimonials');

  return <SocialProofClient testimonials={t.raw('list')} />;
}