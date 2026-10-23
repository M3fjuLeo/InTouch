"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Heading } from "../ui/Heading";
import type { Testimonial } from "../../lib/testimonials";

interface SocialProofClientProps {
  testimonials: Testimonial[];
  labels: {
    badge: string;
    title: string;
    ratingText: string;
    sourceText: string;
  };
}

export const SocialProofClient: React.FC<SocialProofClientProps> = ({
  testimonials,
  labels,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleSelectQuote = (index: number) => {
    setCurrentIndex(index);
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      className="py-20 sm:py-28 px-6 text-brand-darkest relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/feedback-bg.jpeg")' }}
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-brand-primary uppercase tracking-widest text-xs font-semibold">
            {labels.badge}
          </span>
          <Heading className="text-brand-darkest mt-3 mb-4">
            {labels.title}
          </Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-brand-darkest/70 text-sm">
            {/* <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-4 h-4" />
              ))}
            </div> */}
            <span>{labels.ratingText}</span>
          </div>
        </div>

        <div className="grid w-full">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`col-start-1 row-start-1 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                idx === currentIndex
                  ? "opacity-100 translate-y-0 z-10 pointer-events-auto"
                  : "opacity-0 translate-y-4 z-0 pointer-events-none"
              }`}
            >
              <div className="flex text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    className="w-5 h-5 mx-0.5"
                  />
                ))}
              </div>

              <blockquote className="font-serif-custom text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-center mb-8 max-w-3xl mx-auto text-brand-darkest">
                “{testimonial.text}”
              </blockquote>

              <div className="text-center">
                <div className="font-sans text-sm font-semibold tracking-widest uppercase text-brand-darkest">
                  {testimonial.author}
                </div>
                <div className="text-xs text-brand-darkest/60 mt-1.5">
                  {labels.sourceText}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2.5 mt-4 sm:mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectQuote(idx)}
              aria-label={`Pokaż opinię ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-brand-primary"
                  : "w-2 bg-brand-primary/30 hover:bg-brand-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
