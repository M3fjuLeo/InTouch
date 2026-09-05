"use client";

import React, { useState, useRef, useEffect } from "react";

const HERO_VIDEO_URL = "/hero-video.mp4";
const FALLBACK_IMAGE = "/video-poster.jpg";

export const HeroVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Jeśli wideo jest już zbuforowane w przeglądarce, wymuś zmianę stanu
    if (videoRef.current && videoRef.current.readyState >= 2) {
      setVideoLoaded(true);
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-brand-darkest overflow-hidden">
      {!videoLoaded && (
        <img
          src={FALLBACK_IMAGE}
          alt="InTouch Studio Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      )}

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded
            ? "opacity-70 scale-105 transition-transform duration-[12000ms] ease-out"
            : "opacity-0"
        }`}
        poster={FALLBACK_IMAGE}
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-brand-darkest via-black/25 to-black/50" />
      <div
        className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, var(--brand-primary) 0%, transparent 65%)`,
        }}
      />
    </div>
  );
};
