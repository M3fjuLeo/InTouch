import React from "react";
import {
  ArrowUpRight,
  CircleParking,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Heading } from "../ui/Heading";
import { StickyColumn } from "../ui/StickyColumn";
import { InstagramIcon } from "../ui/SocialIcons";
import { cn } from "../../lib/utils";
import { siteConfig, type Weekday } from "../../lib/siteConfig";
import { ContactForm } from "./ContactForm";

interface ContactProps {
  content: {
    title: string;
    subtitle: string;
    details: Record<"address" | "phone" | "email" | "hours" | "social", string>;
    schedule: Record<Weekday, string>;
    parking: string;
    directions: string;
    openInMaps: string;
  };
  envData: {
    address: string;
    phone: string;
    email: string;
    facebookUrl: string;
    instagramUrl: string;
    mapsIframe: string;
  };
}

const labelClass =
  "text-xs font-semibold uppercase tracking-widest text-brand-darkest/50";
const valueClass =
  "text-base sm:text-lg text-brand-darkest hover:text-brand-primary transition-colors";

function DetailRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-5 py-6">
      <div className="w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center bg-brand-primary/10 border border-brand-primary/20">
        <Icon className="w-5 h-5 text-brand-primary" />
      </div>
      <div className="min-w-0">
        <p className={cn(labelClass, "mb-1.5")}>{label}</p>
        {children}
      </div>
    </li>
  );
}

export const Contact: React.FC<ContactProps> = ({ content, envData }) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(envData.address)}`;

  return (
    <div className="bg-brand-darkest">
      <header className="px-6 pt-36 pb-20 sm:pt-44 sm:pb-28 text-center">
        <Heading variant="page" className="text-white mb-8">
          {content.title}
        </Heading>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light leading-relaxed">
          {content.subtitle}
        </p>
      </header>

      <div className="bg-brand-bg text-brand-darkest rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-12">
              <ul className="divide-y divide-brand-darkest/10 border-y border-brand-darkest/10">
                <DetailRow icon={MapPin} label={content.details.address}>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={valueClass}>
                    {envData.address}
                  </a>
                </DetailRow>
                <DetailRow icon={Phone} label={content.details.phone}>
                  <a href={`tel:${envData.phone.replace(/\s+/g, "")}`} className={valueClass}>
                    {envData.phone}
                  </a>
                </DetailRow>
                <DetailRow icon={Mail} label={content.details.email}>
                  <a href={`mailto:${envData.email}`} className={cn(valueClass, "break-all")}>
                    {envData.email}
                  </a>
                </DetailRow>
                <DetailRow icon={InstagramIcon} label={content.details.social}>
                  <div className="flex gap-6">
                    <a href={envData.instagramUrl} target="_blank" rel="noopener noreferrer" className={valueClass}>
                      Instagram
                    </a>
                    <a href={envData.facebookUrl} target="_blank" rel="noopener noreferrer" className={valueClass}>
                      Facebook
                    </a>
                  </div>
                </DetailRow>
              </ul>

              <div>
                <p className={cn(labelClass, "flex items-center gap-2 mb-5")}>
                  <Clock className="w-4 h-4 text-brand-primary" />
                  {content.details.hours}
                </p>
                <ul className="divide-y divide-brand-darkest/10 text-sm sm:text-base">
                  {siteConfig.openingHours.map(({ day, opens, closes }) => (
                    <li
                      key={day}
                      className={cn(
                        "flex justify-between py-2.5 font-light",
                        day === "sun" ? "text-brand-primary" : "text-brand-darkest/75"
                      )}
                    >
                      <span>{content.schedule[day]}</span>
                      <span className="tabular-nums">
                        {opens}–{closes}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <StickyColumn>
                <ContactForm />
              </StickyColumn>
            </div>
          </div>

          <section className="mt-20 sm:mt-28">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <Heading as="h2" variant="card" className="text-brand-dark">
                {content.directions}
              </Heading>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary hover:opacity-70 transition-opacity"
              >
                {content.openInMaps}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <p className="flex items-center gap-3 mb-6 rounded-2xl border border-brand-primary/20 bg-brand-primary/10 px-5 py-4 text-brand-dark">
              <CircleParking className="w-5 h-5 shrink-0 text-brand-primary" />
              {content.parking}
            </p>

            <div className="h-[320px] sm:h-[420px] overflow-hidden rounded-3xl border border-brand-darkest/10">
              <iframe
                src={envData.mapsIframe}
                title={content.directions}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
