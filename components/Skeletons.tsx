import React from "react";

type SkeletonBlockProps = {
  className?: string;
};

export function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${className}`}
    />
  );
}

export function HeroSkeleton() {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-black px-4 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <SkeletonBlock className="h-5 w-36 rounded-full bg-[#DE2F04]/25" />
          <div className="space-y-4">
            <SkeletonBlock className="h-14 w-full max-w-2xl" />
            <SkeletonBlock className="h-14 w-10/12 max-w-xl" />
            <SkeletonBlock className="h-14 w-7/12 max-w-md" />
          </div>
          <div className="space-y-3">
            <SkeletonBlock className="h-4 w-full max-w-xl" />
            <SkeletonBlock className="h-4 w-11/12 max-w-lg" />
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <SkeletonBlock className="h-12 w-36 rounded-full" />
            <SkeletonBlock className="h-12 w-32 rounded-full" />
          </div>
        </div>
        <SkeletonBlock className="aspect-[4/3] w-full rounded-[28px] bg-white/[0.07]" />
      </div>
    </section>
  );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4"
        >
          <SkeletonBlock className="mb-5 aspect-[4/3] w-full rounded-2xl" />
          <SkeletonBlock className="mb-3 h-5 w-3/4" />
          <SkeletonBlock className="mb-2 h-4 w-full" />
          <SkeletonBlock className="h-4 w-8/12" />
        </div>
      ))}
    </div>
  );
}

export function TextSectionSkeleton() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-4 text-center">
        <SkeletonBlock className="mx-auto h-5 w-32 rounded-full bg-[#DE2F04]/25" />
        <SkeletonBlock className="mx-auto h-10 w-full max-w-xl" />
        <SkeletonBlock className="mx-auto h-4 w-full max-w-2xl" />
      </div>
      <div className="space-y-5">
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-11/12" />
        <SkeletonBlock className="h-5 w-10/12" />
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-8/12" />
      </div>
    </section>
  );
}

export function SectionSkeleton({ minHeight = 520 }: { minHeight?: number }) {
  return (
    <section
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
      style={{ minHeight }}
      aria-hidden="true"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3 text-center">
          <SkeletonBlock className="mx-auto h-5 w-28 rounded-full bg-[#DE2F04]/25" />
          <SkeletonBlock className="mx-auto h-9 w-full max-w-lg" />
        </div>
        <CardGridSkeleton />
      </div>
    </section>
  );
}

export function PortfolioSkeleton() {
  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3 text-center">
          <SkeletonBlock className="mx-auto h-5 w-36 rounded-full bg-[#DE2F04]/25" />
          <SkeletonBlock className="mx-auto h-11 w-full max-w-xl" />
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonBlock key={index} className="h-10 w-28 rounded-full" />
          ))}
        </div>
        <CardGridSkeleton />
      </div>
    </section>
  );
}

export function PageSkeleton({ variant = "default" }: { variant?: "default" | "article" | "portfolio" }) {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-black text-white" aria-busy="true">
      <HeroSkeleton />
      {variant === "article" ? (
        <TextSectionSkeleton />
      ) : variant === "portfolio" ? (
        <PortfolioSkeleton />
      ) : (
        <>
          <SectionSkeleton minHeight={560} />
          <SectionSkeleton minHeight={460} />
        </>
      )}
    </main>
  );
}
