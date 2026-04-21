"use client";

import { useEffect, useRef, useState } from "react";
import { SectionSkeleton } from "./Skeletons";

type DeferredSectionProps = {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  minHeight?: number;
  rootMargin?: string;
};

export default function DeferredSection({
  children,
  className,
  fallback,
  minHeight = 0,
  rootMargin = "300px 0px",
}: DeferredSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={shouldRender ? undefined : { minHeight }}
    >
      {shouldRender
        ? children
        : fallback ?? (minHeight > 0 ? <SectionSkeleton minHeight={minHeight} /> : null)}
    </div>
  );
}
