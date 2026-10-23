import React from 'react';
import { getTranslations } from 'next-intl/server';
import { FeaturedServicesClient } from './FeaturedServicesClient';
import { featuredServices, getService } from '../../lib/services';

export async function FeaturedServicesSection() {
  const t = await getTranslations('Services');
  const tOffer = await getTranslations('OfferPage');
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#';

  const labels = {
    badge: t('badge'),
    title: t('title'),
    subtitle: t('subtitle'),
    bookBtn: t('bookBtn'),
  };

  const services = featuredServices.map(({ id, image }) => {
    const { badge, category } = getService(id);

    return {
      id,
      image,
      name: tOffer(`services.${id}.name`),
      description: tOffer(`services.${id}.description`),
      tag: badge ? tOffer(`badges.${badge}`) : tOffer(`categories.${category}`),
    };
  });

  return (
    <FeaturedServicesClient
      services={services}
      labels={labels}
      bookingUrl={bookingUrl}
    />
  );
}
