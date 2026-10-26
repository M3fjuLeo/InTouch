import React from "react";
import { ArrowRight } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { StickyColumn } from "../ui/StickyColumn";
import { FaqAccordionItem } from "./FaqAccordionItem";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

interface FaqProps {
  content: {
    eyebrow: string;
    title: string;
    subtitle: string;
    contactPrompt: string;
    contactButton: string;
  };
  categories: FaqCategory[];
}

export const Faq: React.FC<FaqProps> = ({ content, categories }) => {
  return (
    <div className="bg-brand-darkest">
      <header className="px-6 pt-36 pb-20 sm:pt-44 sm:pb-28 text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-primary">
          {content.eyebrow}
        </p>
        <Heading variant="page" className="text-white mb-8">
          {content.title}
        </Heading>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light leading-relaxed">
          {content.subtitle}
        </p>
      </header>

      <div className="bg-brand-bg text-brand-darkest rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <StickyColumn>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:flex-col lg:items-start lg:gap-4 lg:border-l lg:border-brand-darkest/15 lg:pl-6">
                {categories.map((category, index) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="group flex items-baseline gap-3 text-xs font-semibold uppercase tracking-widest text-brand-darkest/50 hover:text-brand-primary transition-colors"
                  >
                    <span className="hidden lg:inline font-serif-custom text-sm normal-case tracking-normal text-brand-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {category.label}
                  </a>
                ))}
              </nav>
            </StickyColumn>
          </div>

          <div className="lg:col-span-8 space-y-16 sm:space-y-20">
            {categories.map((category, index) => (
              <section key={category.id} id={category.id} className="scroll-mt-32">
                <div className="flex items-baseline justify-between gap-6 pb-5 border-b border-brand-darkest/20">
                  <Heading as="h2" variant="card" className="text-brand-dark">
                    {category.label}
                  </Heading>
                  <span className="font-serif-custom text-lg text-brand-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="divide-y divide-brand-darkest/10">
                  {category.items.map((item) => (
                    <FaqAccordionItem key={item.id} item={item} />
                  ))}
                </ul>
              </section>
            ))}

            <div className="rounded-3xl bg-brand-darkest px-6 py-12 sm:px-12 sm:py-16 text-center">
              <p className="max-w-lg mx-auto mb-8 font-serif-custom text-xl sm:text-2xl leading-snug text-white">
                {content.contactPrompt}
              </p>
              <Button href="/contact" iconRight={<ArrowRight className="w-4 h-4" />}>
                {content.contactButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
