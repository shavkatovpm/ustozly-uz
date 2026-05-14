"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function VariantFrame({
  section,
  titles,
  children,
  initial = 0,
}: {
  section: string;
  titles: string[];
  children: (active: number) => React.ReactNode;
  initial?: number;
}) {
  const [active, setActive] = React.useState(initial);
  return (
    <section className="container-page pt-20 sm:pt-24">
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
            {section}
          </span>
          <h2 className="font-display text-xl font-bold tracking-tight">
            {titles[active]}
          </h2>
        </div>
        <div
          role="tablist"
          aria-label={`${section} varyantlari`}
          className="flex flex-wrap gap-1.5"
        >
          {titles.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                  selected
                    ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] shadow-soft"
                    : "border-white/70 bg-white/50 backdrop-blur text-muted hover:bg-white/80 hover:text-[var(--foreground)]",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[9px] tabular-nums",
                    selected
                      ? "text-[var(--background)]/60"
                      : "text-subtle",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t}
              </button>
            );
          })}
        </div>
      </div>
      <div
        key={active}
        className="rounded-3xl border border-white/60 bg-white/30 backdrop-blur-xl p-4 sm:p-6 shadow-elevated animate-[fade-in_0.25s_ease-out]"
      >
        {children(active)}
      </div>
    </section>
  );
}

export function GlassSurface({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl shadow-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function GlassPill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/60 backdrop-blur-xl px-3 py-1 text-xs font-medium shadow-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xl bg-[var(--foreground)] text-[var(--background)] px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function GhostLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xl border border-white/70 bg-white/50 backdrop-blur-xl px-4 py-2.5 text-sm font-medium hover:bg-white/80 transition-colors",
        className,
      )}
    >
      {children}
    </Link>
  );
}
