"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const BehindTheScenes = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full my-30 min-h-[700px] lg:min-h-[1100px] flex flex-col justify-end items-center bg-black overflow-hidden pt-24 pb-32 px-4 sm:px-6"
    >
      <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[55vh] z-0">
        <video
          src={shouldLoadVideo ? "/0123.mp4" : undefined}
          // poster="/Rectangle-10.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="object-cover object-top h-[400px] lg:h-[700px] w-full"
        />
      </div>

      <div className="relative z-10 w-full h-auto lg:h-[400px] translate-y-[20px] max-w-5xl px-6 sm:px-10 py-12 sm:py-14 lg:py-16 rounded-3xl border border-[#ff4d2d]/30 backdrop-blur-xl bg-gradient-to-b from-[#ff4d2d]/30 via-black/50 to-black/90 shadow-[0_0_60px_#ff4d2d22] text-center mt-[-5%]">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[#ff512f] to-[#fff] text-transparent bg-clip-text">
            Watch the creative process
          </span>
          <br />
          <span className="text-white">behind our digital works.</span>
        </h2>

        <p className="text-white/70 font-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
          At Bembex lab, our commitment to quality and excellence goes beyond
          expectations. From the initial brainstorming session.
        </p>

        <Link href="/contact-us">
          <button className="px-6 py-3 rounded-full text-white text-sm font-light bg-[#1a1a1a]/80 backdrop-blur-md border border-[#ff4d2d]/50 shadow-[0_0_12px_#ff4d2d66] transition hover:shadow-[0_0_25px_#ff4d2d99]">
            Book a call →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BehindTheScenes;
