"use client";

import React, { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "../../lib/utils";

interface FaqItemProps {
  item: {
    id: string;
    question: string;
    answer: string;
  };
}

export const FaqAccordionItem: React.FC<FaqItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = useId();

  return (
    <li>
      <h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={answerId}
          className="group w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer"
        >
          <span className="font-serif-custom text-lg sm:text-xl leading-snug text-brand-darkest group-hover:text-brand-primary transition-colors">
            {item.question}
          </span>
          <span
            className={cn(
              "mt-0.5 w-8 h-8 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300",
              isOpen
                ? "rotate-45 bg-brand-primary border-brand-primary text-white"
                : "border-brand-darkest/20 text-brand-primary group-hover:border-brand-primary"
            )}
          >
            <Plus className="w-4 h-4" />
          </span>
        </button>
      </h3>

      <div
        id={answerId}
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-7 pr-14 text-sm sm:text-base text-brand-darkest/75 font-light leading-relaxed whitespace-pre-line">
            {item.answer}
          </p>
        </div>
      </div>
    </li>
  );
};
