"use client";

import React, { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
}

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
    <section className="py-20 sm:py-28 px-6 bg-brand-bg text-brand-darkest relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-brand-primary/[0.04]">
        <Quote className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rotate-180" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-brand-primary uppercase tracking-widest text-xs font-semibold">
            {labels.badge}
          </span>
          <h2 className="text-brand-darkest font-serif-custom text-3xl sm:text-4xl mt-3 mb-4">
            {labels.title}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-brand-darkest/70 text-sm">
            {/* <div className="flex text-[#C69C6D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-4 h-4" />
              ))}
            </div> */}
            <span>{labels.ratingText}</span>
          </div>
        </div>

        <div className="relative w-full h-[320px] sm:h-[240px] flex items-center justify-center">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                idx === currentIndex
                  ? "opacity-100 translate-y-0 z-10 pointer-events-auto"
                  : "opacity-0 translate-y-4 z-0 pointer-events-none"
              }`}
            >
              <div className="flex text-[#C69C6D] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    className="w-5 h-5 mx-0.5"
                  />
                ))}
              </div>

              <blockquote className="font-serif-custom text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed text-center mb-8 max-w-3xl mx-auto text-brand-darkest">
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
