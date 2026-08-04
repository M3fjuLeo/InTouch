"use client";

import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
}

interface SocialProofClientProps {
  testimonials: Testimonial[];
}

export const SocialProofClient: React.FC<SocialProofClientProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState("out");

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFadeState("in");
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleSelectQuote = (index: number) => {
    if (index === currentIndex) return;
    setFadeState("out");
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeState("in");
    }, 400);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 sm:py-28 px-6 bg-neutral-50 text-brand-darkest relative overflow-hidden border-t border-neutral-200">
      {/* Dekoracyjny znak cytatu w tle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-brand-darkest/5">
        <Quote className="w-64 h-64 sm:w-80 sm:h-80 rotate-180" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center justify-center">
        {/* Sztywny kontener zapobiegający skakaniu wymiarów */}
        <div className="h-[250px] sm:h-[180px] w-full flex flex-col items-center justify-center">
          <div
            className={`transition-opacity duration-700 ease-in-out w-full flex flex-col items-center ${
              fadeState === "in" ? "opacity-100" : "opacity-0"
            }`}
          >
            <blockquote className="font-serif-custom text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed sm:leading-snug mb-8 max-w-3xl mx-auto">
              “{currentTestimonial?.text}”
            </blockquote>

            <div className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-brand-dark">
              {currentTestimonial?.author}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectQuote(idx)}
              aria-label={`Pokaż opinię ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-brand-darkest"
                  : "w-2 bg-brand-darkest/20 hover:bg-brand-darkest/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
