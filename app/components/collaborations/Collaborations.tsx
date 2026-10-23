import React from "react";
import { ArrowDown, Sprout } from "lucide-react";
import { Heading } from "../ui/Heading";
import { StickyColumn } from "../ui/StickyColumn";
import { EventsForm } from "./EventsForm";
import { JoinForm } from "./JoinForm";

interface Path {
  id: "events" | "join";
  title: string;
  description: string;
}

interface CollaborationsProps {
  content: {
    title: string;
    lead: string;
    paths: Path[];
    events: { title: string; paragraphs: string[] };
    join: {
      title: string;
      paragraphs: string[];
      subtitle: string;
      closing: string[];
    };
    images: { events: string; join: string };
  };
}

const paragraphClass =
  "text-base sm:text-lg text-brand-darkest/75 font-light leading-relaxed";

function SectionIntro({ title }: { title: string }) {
  return (
    <>
      <div className="mb-6 w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-primary/10 border border-brand-primary/20">
        <Sprout className="w-6 h-6 text-brand-primary" />
      </div>
      <Heading as="h2" className="text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-8">
        {title}
      </Heading>
    </>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-5">
      {items.map((paragraph) => (
        <p key={paragraph} className={paragraphClass}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export const Collaborations: React.FC<CollaborationsProps> = ({ content }) => {
  const { events, join, images } = content;

  return (
    <div className="bg-brand-darkest">
      <header className="px-6 pt-36 pb-20 sm:pt-44 sm:pb-28 text-center">
        <Heading variant="page" className="text-white mb-8">
          {content.title}
        </Heading>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light leading-relaxed">
          {content.lead}
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto text-left">
          {content.paths.map((path) => (
            <a
              key={path.id}
              href={`#${path.id}`}
              className="group flex items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-colors hover:bg-white/10"
            >
              <div>
                <p className="font-serif-custom text-xl sm:text-2xl text-white mb-2">
                  {path.title}
                </p>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {path.description}
                </p>
              </div>
              <ArrowDown className="w-5 h-5 shrink-0 mt-1 text-brand-primary transition-transform group-hover:translate-y-1" />
            </a>
          ))}
        </div>
      </header>

      <div className="bg-brand-bg text-brand-darkest rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          <section
            id="events"
            className="scroll-mt-28 grid gap-12 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-6">
              <SectionIntro title={events.title} />
              <Paragraphs items={events.paragraphs} />
              <img
                src="/images/collaborations/events.jpg"
                alt={images.events}
                loading="lazy"
                className="mt-12 w-full aspect-[4/5] object-cover rounded-t-full rounded-b-3xl"
              />
            </div>
            <div className="lg:col-span-6">
              <StickyColumn>
                <EventsForm />
              </StickyColumn>
            </div>
          </section>

          <div className="my-20 sm:my-28 border-t border-brand-darkest/15" />

          <section
            id="join"
            className="scroll-mt-28 grid gap-12 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-6 lg:order-2">
              <SectionIntro title={join.title} />
              <Paragraphs items={join.paragraphs} />
              <p className="mt-12 mb-5 font-serif-custom text-2xl sm:text-3xl text-brand-primary">
                {join.subtitle}
              </p>
              <Paragraphs items={join.closing} />
              <img
                src="/images/collaborations/join.jpg"
                alt={images.join}
                loading="lazy"
                className="mt-12 w-full aspect-[4/5] object-cover rounded-3xl"
              />
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <StickyColumn>
                <JoinForm />
              </StickyColumn>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
