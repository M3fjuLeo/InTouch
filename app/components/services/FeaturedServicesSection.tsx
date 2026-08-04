import React from 'react';
import { getTranslations } from 'next-intl/server';
import { FeaturedServicesClient } from './FeaturedServicesClient';

export async function FeaturedServicesSection() {
  const t = await getTranslations('Services');
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#';

  const labels = {
    badge: t('badge'),
    title: t('title'), // Zmień w JSON na np. "Wybierz swój masaż"
    subtitle: t('subtitle'), // Zmień w JSON na "Odkryj autorskie zabiegi dopasowane do Twojego ciała i samopoczucia."
    bookBtn: t('bookBtn'),
    viewAllBtn: "Zobacz pełną ofertę" // Wymaga dodania "viewAllBtn" do słownika JSON
  };

  return (
    <FeaturedServicesClient
      services={t.raw('list')}
      labels={labels}
      bookingUrl={bookingUrl}
    />
  );
}