"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  item: {
    id: string;
    question: string;
    answer: string;
  };
}

export const FaqAccordionItem: React.FC<FaqItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl mb-4 overflow-hidden transition-colors duration-300 hover:bg-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center cursor-pointer"
      >
        <h3 className="font-serif-custom text-lg sm:text-xl font-medium text-white pr-4">
          {item.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-brand-primary shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-sm sm:text-base text-white/70 font-light leading-relaxed whitespace-pre-line">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};