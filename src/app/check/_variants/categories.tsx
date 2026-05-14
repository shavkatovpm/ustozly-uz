"use client";

import * as React from "react";
import Link from "next/link";
import {
  Languages,
  BookA,
  Sigma,
  Atom,
  FlaskConical,
  Leaf,
  Code2,
  TrendingUp,
  BookOpen,
  Landmark,
  Globe,
  BookMarked,
  Music,
  Palette,
  Baby,
  ArrowRight,
  ArrowUpRight,
  Flame,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { subjects } from "@/data/subjects";
import { VariantFrame } from "./shared";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Languages,
  BookA,
  Sigma,
  Atom,
  FlaskConical,
  Leaf,
  Code2,
  TrendingUp,
  BookOpen,
  Landmark,
  Globe,
  BookMarked,
  Music,
  Palette,
  Baby,
};

const counts: Record<string, number> = {
  "ingliz-tili": 342,
  matematika: 218,
  informatika: 186,
  kimyo: 94,
  "koreys-tili": 88,
  fizika: 112,
  biologiya: 76,
  "rus-tili": 154,
  "nemis-tili": 62,
  iqtisod: 48,
  "ona-tili": 102,
  tarix: 58,
  maktabgacha: 40,
  "arab-tili": 32,
  "turk-tili": 28,
  "xitoy-tili": 18,
  musiqa: 22,
  tasviriy: 14,
};

export function CategoriesVariants() {
  return (
    <VariantFrame
      section="02 · Ommabop fanlar"
      titles={[
        "Mini grid",
        "Nomuvofiq masonry",
        "A–Z editorial",
        "Featured banner",
        "Accordion expander",
      ]}
    >
      {(active) => (
        <>
          {active === 0 && <V1Grid />}
          {active === 1 && <V2Masonry />}
          {active === 2 && <V3Alphabet />}
          {active === 3 && <V4Banner />}
          {active === 4 && <V5Accordion />}
        </>
      )}
    </VariantFrame>
  );
}

/* V1 — uniform icon grid (baseline) */
function V1Grid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {subjects.slice(0, 12).map((s) => {
        const Icon = iconMap[s.icon] ?? BookOpen;
        return (
          <Link
            key={s.slug}
            href={`/ustozlar?subject=${s.slug}`}
            className="group relative flex flex-col items-start gap-3 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-4 shadow-soft hover:-translate-y-0.5 hover:bg-white/70 transition-all"
          >
            <span
              className="inline-flex size-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
              style={{
                backgroundColor: `color-mix(in oklch, ${s.color} 22%, transparent)`,
                color: s.color,
              }}
            >
              <Icon className="size-5" />
            </span>
            <p className="font-display font-semibold text-sm leading-tight">
              {s.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

/* V2 — Masonry bento: mixed tile sizes (visual emphasis on top subjects) */
function V2Masonry() {
  const subjs = subjects.slice(0, 10);
  // hand-tuned spans for visual interest
  const spans = [
    "col-span-2 row-span-2", // big 1
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-3 min-h-[420px]">
      {subjs.map((s, i) => {
        const Icon = iconMap[s.icon] ?? BookOpen;
        const big = spans[i].includes("col-span-2") && spans[i].includes("row-span-2");
        return (
          <Link
            key={s.slug}
            href={`/ustozlar?subject=${s.slug}`}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-4 shadow-soft hover:-translate-y-0.5 hover:bg-white/70 transition-all flex flex-col",
              spans[i],
            )}
          >
            <div
              className="absolute -top-8 -right-8 size-32 rounded-full blur-2xl opacity-50"
              style={{
                background: `color-mix(in oklch, ${s.color} 50%, transparent)`,
              }}
              aria-hidden="true"
            />
            <div className="relative flex items-start justify-between">
              <span
                className={cn(
                  "inline-flex items-center justify-center rounded-xl",
                  big ? "size-14" : "size-9",
                )}
                style={{
                  backgroundColor: `color-mix(in oklch, ${s.color} 22%, transparent)`,
                  color: s.color,
                }}
              >
                <Icon className={big ? "size-7" : "size-4.5"} />
              </span>
              {big && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent-800 bg-accent-100/70 backdrop-blur rounded-full px-2 py-0.5">
                  <Flame className="size-3" /> Top
                </span>
              )}
            </div>
            <div className="relative mt-auto">
              <p
                className={cn(
                  "font-display font-bold leading-tight",
                  big ? "text-xl" : "text-sm",
                )}
              >
                {s.name}
              </p>
              <p className="mt-0.5 text-[11px] text-subtle">
                {counts[s.slug] ?? 0} ustoz
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* V3 — Alphabetical editorial index (by first letter) */
function V3Alphabet() {
  const groups = new Map<string, typeof subjects>();
  subjects.forEach((s) => {
    const letter = s.name[0].toUpperCase();
    const arr = groups.get(letter) ?? [];
    arr.push(s);
    groups.set(letter, arr);
  });
  const sorted = Array.from(groups.entries()).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );
  return (
    <div className="space-y-5">
      {sorted.map(([letter, list]) => (
        <div
          key={letter}
          className="grid grid-cols-[auto_1fr] gap-5 items-start border-b border-white/60 pb-5 last:border-0"
        >
          <div
            className="font-display font-bold leading-none tabular-nums select-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand-900), var(--color-accent-700))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {letter}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {list.map((s) => (
              <Link
                key={s.slug}
                href={`/ustozlar?subject=${s.slug}`}
                className="group inline-flex items-baseline gap-2 rounded-lg border border-white/70 bg-white/50 backdrop-blur px-3 py-1.5 hover:bg-white/90 transition-colors"
              >
                <span className="font-display font-semibold text-sm">
                  {s.name}
                </span>
                <span className="text-[10px] text-subtle tabular-nums">
                  {counts[s.slug] ?? 0}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* V4 — Featured banner (single top subject) + horizontal pills */
function V4Banner() {
  const [featIdx, setFeatIdx] = React.useState(0);
  const topSubjs = subjects.slice(0, 4);
  const feat = topSubjs[featIdx];
  const FIcon = iconMap[feat.icon] ?? BookOpen;
  return (
    <div className="space-y-4">
      <div
        className="relative rounded-3xl border border-white/60 bg-white/60 backdrop-blur-xl p-6 sm:p-8 shadow-elevated overflow-hidden min-h-[200px]"
      >
        <div
          className="absolute -top-20 -right-10 size-64 rounded-full blur-3xl"
          style={{
            background: `color-mix(in oklch, ${feat.color} 55%, transparent)`,
          }}
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-subtle">
              Hozirgi spotlight
            </p>
            <div className="mt-3 flex items-center gap-4">
              <span
                className="grid place-items-center size-20 rounded-2xl"
                style={{
                  backgroundColor: `color-mix(in oklch, ${feat.color} 28%, transparent)`,
                  color: feat.color,
                }}
              >
                <FIcon className="size-10" />
              </span>
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                  {feat.name}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {counts[feat.slug] ?? 0}+ ustoz · yuqori talab
                </p>
              </div>
            </div>
          </div>
          <Link
            href={`/ustozlar?subject=${feat.slug}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--foreground)] text-[var(--background)] px-5 py-3 text-sm font-medium self-center md:self-end hover:opacity-90 transition-opacity"
          >
            Katalogga o'tish <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[11px] uppercase tracking-[0.2em] text-subtle pr-2">
          Boshqa fanlar:
        </span>
        {subjects.slice(0, 4).map((s, i) => (
          <button
            key={s.slug}
            onMouseEnter={() => setFeatIdx(i)}
            onClick={() => setFeatIdx(i)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
              i === featIdx
                ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                : "border-white/70 bg-white/50 backdrop-blur hover:bg-white/90",
            )}
          >
            {s.name}
          </button>
        ))}
        <span className="h-4 w-px bg-[var(--border-strong)] mx-2" />
        {subjects.slice(4, 12).map((s) => (
          <Link
            key={s.slug}
            href={`/ustozlar?subject=${s.slug}`}
            className="inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/50 backdrop-blur px-3 py-1 text-xs text-muted hover:text-[var(--foreground)] hover:bg-white/80 transition-colors"
          >
            {s.name}
            <span className="text-subtle">{counts[s.slug] ?? 0}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* V5 — Accordion expander (native <details>) */
function V5Accordion() {
  const sorted = [...subjects]
    .map((s) => ({ ...s, count: counts[s.slug] ?? 10 }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
  return (
    <div className="divide-y divide-white/60 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl overflow-hidden">
      {sorted.map((s, i) => {
        const Icon = iconMap[s.icon] ?? BookOpen;
        return (
          <details
            key={s.slug}
            className="group open:bg-white/60 transition-colors"
          >
            <summary className="list-none cursor-pointer flex items-center gap-4 px-5 py-4 hover:bg-white/50">
              <span className="font-mono text-[10px] text-subtle tabular-nums w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="inline-flex size-9 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: `color-mix(in oklch, ${s.color} 22%, transparent)`,
                  color: s.color,
                }}
              >
                <Icon className="size-4.5" />
              </span>
              <span className="flex-1 font-display font-semibold">
                {s.name}
              </span>
              <span className="text-sm text-subtle tabular-nums">
                {s.count} ustoz
              </span>
              <ChevronDown className="size-4 text-subtle transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-5 pb-5 pl-[84px] text-sm text-muted space-y-3">
              <p>
                {s.name} yo'nalishidagi ustozlar {s.count} nafar.
                Reyting bo'yicha saralangan, hammasi tekshiruvdan o'tgan.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/ustozlar?subject=${s.slug}`}
                  className="inline-flex items-center gap-1 rounded-lg bg-[var(--foreground)] text-[var(--background)] px-3 py-1.5 text-xs font-medium"
                >
                  Ustozlarni ko'rish <ArrowUpRight className="size-3" />
                </Link>
                <Link
                  href={`/vakansiyalar?subject=${s.slug}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/70 bg-white/60 px-3 py-1.5 text-xs font-medium hover:bg-white/90"
                >
                  Shu fan vakansiyalari
                </Link>
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
