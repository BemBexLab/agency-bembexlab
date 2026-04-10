"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  "/Home/trustpilot.webp",
  "/Home/zoominfo.webp",
  "/Home/clutch.webp",
  "/Home/hashnode.webp",
  "/Home/designrush.webp",
  "/Home/s.webp",
];

const LogoSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const updateSlider = () => {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      const setWidth = setRef.current?.scrollWidth ?? 0;

      if (!containerWidth || !setWidth) return;

      setDistance(setWidth);
      setCopies(Math.max(2, Math.ceil(containerWidth / setWidth) + 1));
    };

    updateSlider();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateSlider)
        : null;

    if (containerRef.current) resizeObserver?.observe(containerRef.current);
    if (setRef.current) resizeObserver?.observe(setRef.current);

    window.addEventListener("resize", updateSlider);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateSlider);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative flex h-[123px] w-full items-center overflow-hidden"
      >
        <div
          className="flex w-max items-center gap-8 will-change-transform"
          style={{
            animation: distance
              ? "logo-slider-marquee 22s linear infinite"
              : undefined,
            ["--logo-slider-distance" as string]: `-${distance}px`,
          }}
        >
          {Array.from({ length: copies }).map((_, groupIndex) => (
            <div
              key={groupIndex}
              ref={groupIndex === 0 ? setRef : undefined}
              className="flex shrink-0 items-center gap-8"
              aria-hidden={groupIndex > 0}
            >
              {logos.map((logo, logoIndex) => (
                <div
                  key={`${groupIndex}-${logoIndex}`}
                  className="flex h-[50px] w-[100px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-95 sm:h-14 sm:w-[120px] md:h-16 md:w-[150px]"
                >
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={150}
                    height={64}
                    className="h-auto max-h-full w-auto max-w-full object-contain brightness-200"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes logo-slider-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(var(--logo-slider-distance));
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
