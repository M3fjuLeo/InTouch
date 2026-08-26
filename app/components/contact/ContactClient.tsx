"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../ui/Button";
import { FacebookIcon, InstagramIcon } from "../ui/SocialIcons";

interface ContactClientProps {
  content: {
    title: string;
    subtitle: string;
    details: Record<string, string>;
    schedule: Record<string, string>;
    form: Record<string, string>;
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

export const ContactClient: React.FC<ContactClientProps> = ({
  content,
  envData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("success");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-brand-darkest pt-32 pb-24 px-6 text-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif-custom text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6">
            {content.title}
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
                    <MapPin className="w-4 h-4" />
                    {content.details.address}
                  </h3>
                  <p className="text-white/80 font-light">{envData.address}</p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
                    <Phone className="w-4 h-4" />
                    {content.details.phone}
                  </h3>
                  <a
                    href={`tel:${envData.phone.replace(/\s+/g, "")}`}
                    className="text-white/80 font-light hover:text-white transition-colors"
                  >
                    {envData.phone}
                  </a>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
                    <Mail className="w-4 h-4" />
                    {content.details.email}
                  </h3>
                  <a
                    href={`mailto:${envData.email}`}
                    className="text-white/80 font-light hover:text-white transition-colors"
                  >
                    {envData.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
                    {content.details.social}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={envData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <InstagramIcon className="w-6 h-6" />
                    </a>
                    <a
                      href={envData.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <FacebookIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
                  <Clock className="w-4 h-4" />
                  {content.details.hours}
                </h3>
                <ul className="space-y-2 text-sm text-white/80 font-light">
                  <li className="flex justify-between">
                    <span>{content.schedule.mon}</span> <span>09:00–20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{content.schedule.tue}</span> <span>09:00–20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{content.schedule.wed}</span> <span>09:00–20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{content.schedule.thu}</span> <span>09:00–20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{content.schedule.fri}</span> <span>09:00–20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{content.schedule.sat}</span> <span>09:00–20:00</span>
                  </li>
                  <li className="flex justify-between text-brand-primary">
                    <span>{content.schedule.sun}</span> <span>10:00–20:00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src={envData.mapsIframe}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 h-fit">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2"
                >
                  {content.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-brand-darkest/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2"
                >
                  {content.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-brand-darkest/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2"
                >
                  {content.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-brand-darkest/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none custom-scrollbar"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full justify-center"
              >
                {isSubmitting ? "..." : content.form.submit}
              </Button>

              {formStatus === "success" && (
                <p className="text-sm text-green-400 text-center mt-4">
                  {content.form.success}
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-sm text-red-400 text-center mt-4">
                  {content.form.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
