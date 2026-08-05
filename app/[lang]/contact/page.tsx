import { ContactClient } from '@/app/components/contact/ContactClient';
import { getTranslations } from 'next-intl/server';


export default async function ContactPage() {
  const t = await getTranslations('ContactPage');

  const content = {
    title: t('title'),
    subtitle: t('subtitle'),
    details: t.raw('details'),
    schedule: t.raw('schedule'),
    form: t.raw('form'),
  };

  const envData = {
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
    facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
    instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    mapsIframe: process.env.NEXT_PUBLIC_GOOGLE_MAPS_IFRAME || '',
  };

  return (
    <main>
      <ContactClient content={content} envData={envData} />
    </main>
  );
}