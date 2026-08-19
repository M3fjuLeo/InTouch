"use client";

import React from "react";
import { FaqAccordionItem } from "./FaqAccordionItem";
import { Button } from "../ui/Button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqClientProps {
  content: {
    title: string;
    subtitle: string;
    contactPrompt: string;
    contactButton: string;
    faqs: FaqItem[];
  };
}

export const FaqClient: React.FC<FaqClientProps> = ({ content }) => {
  return (
    <div className="min-h-screen bg-brand-darkest pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h1 className="font-serif-custom text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6">
            {content.title}
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="mb-16">
          {content.faqs.map((item) => (
            <FaqAccordionItem key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-white/10 text-center flex flex-col items-center">
          <p className="text-white/70 text-base sm:text-lg font-light mb-8 max-w-lg">
            {content.contactPrompt}
          </p>
          <Button href="/contact">{content.contactButton}</Button>
        </div>
      </div>
    </div>
  );
};
