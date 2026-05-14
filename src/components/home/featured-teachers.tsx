"use client";

import * as React from "react";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { SectionHeader } from "@/components/section-header";
import type { Teacher } from "@/lib/types";
import { cn } from "@/lib/utils";

export function FeaturedTeachers({ teachers }: { teachers: Teacher[] }) {
  const [center, setCenter] = React.useState(Math.floor(teachers.length / 2));
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const txStep = isMobile ? 70 : 110;
  const visibleRange = isMobile ? 1 : 2;

  return (
    <section className="container-page pt-20 sm:pt-24 relative">
      <SectionHeader
        eyebrow="Eng yaxshi ustozlar"
        title="Tanlangan ustozlar"
        description="Yuqori reytingli, tajribali va tasdiqlangan ustozlar."
        ctaHref="/ustozlar"
        ctaLabel="Barcha ustozlar"
      />

      <div
        className="mt-10 flex items-center justify-center min-h-[340px] sm:min-h-[380px] py-4 overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        {teachers.map((t, i) => {
          const offset = i - center;
          const abs = Math.abs(offset);
          const hidden = abs > visibleRange;
          const rotY = offset * -22;
          const tx = offset * txStep;
          const scale = 1 - abs * 0.14;
          const opacity = 1 - abs * 0.22;
          return (
            <Link
              key={t.id}
              href={`/ustozlar/${t.id}`}
              onMouseEnter={() => setCenter(i)}
              aria-label={`${t.name} profiliga o'tish`}
              className={cn(
                "absolute rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl p-4 sm:p-5 shadow-float transition-all duration-500 w-[14rem] sm:w-64",
                offset === 0 && "z-30",
                abs === 1 && "z-20",
                abs === 2 && "z-10",
                hidden && "opacity-0 pointer-events-none",
              )}
              style={{
                transform: `translateX(${tx}px) rotateY(${rotY}deg) scale(${scale})`,
                opacity: hidden ? 0 : opacity,
                transformStyle: "preserve-3d",
              }}
            >
              <Avatar
                name={t.name}
                size={isMobile ? 72 : 88}
                className="mx-auto ring-4 ring-white/60"
              />
              <p className="mt-3 font-display font-bold text-center text-base sm:text-lg line-clamp-1">
                {t.name}
              </p>
              <p className="mt-0.5 text-center text-xs text-muted line-clamp-1">
                {t.title}
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Star className="size-3.5 fill-accent-500 text-accent-500" />
                  {t.rating.toFixed(1)}
                </span>
                <span className="text-subtle">·</span>
                <span className="text-subtle">
                  {t.experienceYears}+ yil
                </span>
              </div>
              {offset === 0 && (
                <div className="mt-4 pt-4 border-t border-white/50 text-center">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-accent-800">
                    Profilni ko'rish
                    <ArrowUpRight className="size-3" />
                  </span>
                </div>
              )}
            </Link>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => setCenter((i) => Math.max(0, i - 1))}
          disabled={center === 0}
          aria-label="Oldingi ustoz"
          className="grid place-items-center size-10 rounded-full border border-white/70 bg-white/60 backdrop-blur hover:bg-white/90 shadow-soft transition-colors disabled:opacity-40 disabled:pointer-events-none"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {teachers.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenter(i)}
              aria-label={`${i + 1}-ustoz`}
              className={cn(
                "rounded-full transition-all",
                i === center
                  ? "w-8 h-2 bg-[var(--foreground)]"
                  : "size-2 bg-[var(--border-strong)] hover:bg-[var(--foreground-muted)]",
              )}
            />
          ))}
        </div>
        <button
          onClick={() => setCenter((i) => Math.min(teachers.length - 1, i + 1))}
          disabled={center === teachers.length - 1}
          aria-label="Keyingi ustoz"
          className="grid place-items-center size-10 rounded-full border border-white/70 bg-white/60 backdrop-blur hover:bg-white/90 shadow-soft transition-colors disabled:opacity-40 disabled:pointer-events-none"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </section>
  );
}
