"use client";

import React, { useState, useRef } from "react";

const HERO_VIDEO_URL =
  "https://www.thenowmassage.com/hubfs/THE%20NOW/Videos/New%20Website%20Header%20-%20The%20NOW%20Massage%20Montage%20-%20High%20Bitrate.mp4";
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80";

export const HeroVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="absolute inset-0 z-0 bg-brand-darkest">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded
            ? "opacity-70 scale-105 transition-transform duration-[12000ms] ease-out"
            : "opacity-0"
        }`}
        poster={FALLBACK_IMAGE}
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      {!videoLoaded && (
        <img
          src="/hero-video"
          alt="InTouch Studio Background"
          className="w-full h-full object-cover opacity-60"
        />
      )}

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
