import React from 'react';
import { getTranslations } from 'next-intl/server';
import { VouchersClient } from './VouchersClient';

export async function VouchersSection() {
  const t = await getTranslations('Vouchers');
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#';

  const labels = {
    badge: t('badge'),
    title: t('title'),
    description: t('description'),
    button: t('button'),
    mockupBadge: t('mockupBadge'),
    mockupTitle: t('mockupTitle'),
    mockupDesc: t('mockupDesc'),
  };

  return <VouchersClient labels={labels} bookingUrl={bookingUrl} />;
}