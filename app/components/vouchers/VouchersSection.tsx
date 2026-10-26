import React from 'react';
import { getTranslations } from 'next-intl/server';
import { VouchersClient } from './VouchersClient';

export async function VouchersSection() {
  const t = await getTranslations('Vouchers');
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#';

  const labels = {
    badge: t('badge'),
    title: t('title'),
    paragraphs: t.raw('paragraphs'),
    details: t.raw('details'),
    button: t('button'),
    mockupBadge: t('mockupBadge'),
    mockupTitle: t('mockupTitle'),
    mockupDesc: t('mockupDesc'),
  };

  return <VouchersClient labels={labels} bookingUrl={bookingUrl} />;
}