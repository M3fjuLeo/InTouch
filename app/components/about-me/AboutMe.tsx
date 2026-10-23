import React from "react";
import { ArrowRight } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { AnimatedHighlights } from "./AnimatedHighlights";

interface Highlight {
  value: string;
  label: string;
}

interface AboutMeProps {
  content: {
    eyebrow: string;
    title: string;
    lead: string;
    highlights: Highlight[];
    clients: string;
    storyIntro: string[];
    quote: { text: string; emphasis: string };
    story: string[];
    closing: string;
    signature: string;
    cta: { book: string; offer: string };
    images: Record<"portrait" | "session" | "studio" | "oils" | "ritual", string>;
  };
  bookingUrl: string;
}

const paragraphClass =
  "text-base sm:text-lg text-brand-darkest/75 font-light leading-relaxed";

export const AboutMe: React.FC<AboutMeProps> = ({ content, bookingUrl }) => {
  const { images } = content;

  return (
    <div className="bg-brand-darkest">
      <header className="px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="max-w-6xl mx-auto grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="text-center md:text-left">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              {content.eyebrow}
            </p>
            <Heading variant="page" className="text-white mb-8">
              {content.title}
            </Heading>
            <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
              {content.lead}
            </p>
          </div>

          <div className="w-full max-w-sm md:max-w-md mx-auto md:ml-auto md:mr-0">
            <div className="aspect-[3/4] overflow-hidden rounded-t-full rounded-b-3xl ring-1 ring-white/10 shadow-2xl">
              <img
                src="/images/about/portrait.jpg"
                alt={images.portrait}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-brand-bg text-brand-darkest rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          <section className="pb-16 sm:pb-24 border-b border-brand-darkest/15">
            <AnimatedHighlights highlights={content.highlights} />
            <p className="mt-14 sm:mt-20 text-center font-serif-custom italic text-xl sm:text-2xl text-brand-dark">
              {content.clients}
            </p>
          </section>

          <section className="pt-20 sm:pt-28 grid gap-12 md:grid-cols-12 md:gap-16 items-center">
            <div className="md:col-span-6 space-y-6">
              {content.storyIntro.map((paragraph) => (
                <p key={paragraph} className={paragraphClass}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="md:col-span-6">
              <img
                src="/images/about/session.jpg"
                alt={images.session}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-3xl"
              />
            </div>
          </section>

          <blockquote className="py-20 sm:py-32 max-w-4xl mx-auto text-center font-serif-custom text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-brand-dark">
            {content.quote.text}{" "}
            <em className="text-brand-primary">{content.quote.emphasis}</em>
          </blockquote>

          <section className="grid gap-12 md:grid-cols-12 md:gap-16 items-center">
            <div className="md:col-span-6 md:order-2 space-y-6">
              {content.story.map((paragraph) => (
                <p key={paragraph} className={paragraphClass}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="md:col-span-6 md:order-1">
              <img
                src="/images/about/studio.jpg"
                alt={images.studio}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-t-full rounded-b-3xl"
              />
            </div>
          </section>

          <div className="mt-20 sm:mt-28 grid grid-cols-2 gap-4 sm:gap-8">
            <img
              src="/images/about/oils.jpg"
              alt={images.oils}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover rounded-3xl"
            />
            <img
              src="/images/about/ritual.jpg"
              alt={images.ritual}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover rounded-3xl sm:mt-16"
            />
          </div>

          <section className="pt-20 sm:pt-32 max-w-3xl mx-auto text-center">
            <p className="font-serif-custom text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tight text-brand-darkest">
              {content.closing}
            </p>
            <p className="mt-10 font-serif-custom italic text-2xl text-brand-primary">
              {content.signature}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={bookingUrl} isExternal size="lg">
                {content.cta.book}
              </Button>
              <Button
                href="/offer"
                variant="outline"
                size="lg"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                {content.cta.offer}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
