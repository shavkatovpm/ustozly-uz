"use client";

import * as React from "react";
import Link from "next/link";
import {
  MapPin,
  Star,
  Dot,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Medal,
  Award,
  Clock,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { teachers } from "@/data/teachers";
import { subjects } from "@/data/subjects";
import { regions } from "@/data/regions";
import { formatSalary } from "@/lib/utils";
import { VariantFrame } from "./shared";
import { cn } from "@/lib/utils";

const top = [...teachers]
  .sort(
    (a, b) =>
      b.rating * 10 + b.reviewsCount / 20 - (a.rating * 10 + a.reviewsCount / 20),
  )
  .slice(0, 6);

export function TeachersVariants() {
  return (
    <VariantFrame
      section="03 · Tanlangan ustozlar"
      titles={[
        "3×2 grid",
        "Spotlight karusel",
        "Rank leaderboard",
        "Cover flow 3D",
        "Magazine feature",
      ]}
    >
      {(active) => (
        <>
          {active === 0 && <V1Grid />}
          {active === 1 && <V2Spotlight />}
          {active === 2 && <V3Leaderboard />}
          {active === 3 && <V4CoverFlow />}
          {active === 4 && <V5Magazine />}
        </>
      )}
    </VariantFrame>
  );
}

/* V1 — uniform grid (baseline) */
function V1Grid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {top.map((t) => {
        const region = regions.find((r) => r.slug === t.region)?.name;
        return (
          <Link
            key={t.id}
            href={`/ustozlar/${t.id}`}
            className="group rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-4 shadow-soft hover:-translate-y-0.5 hover:bg-white/70 transition-all"
          >
            <div className="flex items-start gap-3">
              <Avatar name={t.name} size={48} />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm truncate">{t.name}</p>
                <p className="text-xs text-muted line-clamp-1">{t.title}</p>
                <div className="mt-1.5 inline-flex items-center gap-1 text-xs text-subtle flex-wrap">
                  <span className="inline-flex items-center gap-1 font-medium text-[var(--foreground)]">
                    <Star className="size-3 fill-accent-500 text-accent-500" />
                    {t.rating.toFixed(1)}
                  </span>
                  <span>({t.reviewsCount})</span>
                  <Dot className="size-3 opacity-50" />
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3" /> {region}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/50 flex items-center justify-between text-xs">
              <span className="text-subtle">Soatiga</span>
              <span className="font-display font-semibold">
                {formatSalary(t.hourlyRate)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* V2 — Spotlight carousel with huge featured + dots */
function V2Spotlight() {
  const [idx, setIdx] = React.useState(0);
  const t = top[idx];
  const region = regions.find((r) => r.slug === t.region)?.name;
  const subjNames = t.subjects
    .map((s) => subjects.find((x) => x.slug === s)?.name)
    .filter(Boolean) as string[];

  const prev = () => setIdx((i) => (i - 1 + top.length) % top.length);
  const next = () => setIdx((i) => (i + 1) % top.length);

  return (
    <div className="relative rounded-3xl border border-white/60 bg-white/50 backdrop-blur-xl p-6 sm:p-10 shadow-elevated overflow-hidden">
      <div
        className="absolute -top-24 -right-24 size-72 rounded-full blur-3xl"
        style={{ background: "oklch(82% 0.12 78 / 0.35)" }}
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
        <div className="relative mx-auto md:mx-0">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-60"
            style={{ background: "oklch(82% 0.12 78 / 0.5)" }}
            aria-hidden="true"
          />
          <div
            key={idx}
            className="relative animate-[scale-in_0.3s_cubic-bezier(0.2,0.8,0.2,1)]"
          >
            <Avatar name={t.name} size={160} className="ring-4 ring-white/70 shadow-float" />
          </div>
        </div>
        <div key={`content-${idx}`} className="animate-[fade-in_0.3s_ease-out]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-subtle">
            {String(idx + 1).padStart(2, "0")} / {String(top.length).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            {t.name}
          </h3>
          <p className="mt-1 text-muted text-sm sm:text-base">{t.title}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {subjNames.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full border border-white/70 bg-white/60 backdrop-blur px-2.5 py-0.5 text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 max-w-md text-sm">
            <Stat label="Reyting" value={t.rating.toFixed(1)} icon={<Star className="size-3.5 fill-accent-500 text-accent-500" />} />
            <Stat label="Sharh" value={t.reviewsCount.toString()} />
            <Stat label="Tajriba" value={`${t.experienceYears}+ yil`} />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Link
              href={`/ustozlar/${t.id}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--foreground)] text-[var(--background)] px-5 py-3 text-sm font-medium"
            >
              Profilni ko'rish <ArrowUpRight className="size-4" />
            </Link>
            <span className="text-xs text-subtle inline-flex items-center gap-1">
              <MapPin className="size-3.5" /> {region}
            </span>
          </div>
        </div>
      </div>
      <div className="relative mt-8 flex items-center justify-between">
        <button
          onClick={prev}
          aria-label="Oldingi"
          className="grid place-items-center size-10 rounded-full border border-white/70 bg-white/60 backdrop-blur hover:bg-white/90 transition-colors"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {top.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`${i + 1}-ustoz`}
              className={cn(
                "rounded-full transition-all",
                i === idx
                  ? "w-8 h-2 bg-[var(--foreground)]"
                  : "size-2 bg-[var(--border-strong)] hover:bg-[var(--foreground-muted)]",
              )}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Keyingi"
          className="grid place-items-center size-10 rounded-full border border-white/70 bg-white/60 backdrop-blur hover:bg-white/90 transition-colors"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/50 backdrop-blur px-3 py-2">
      <p className="text-[10px] uppercase tracking-wider text-subtle">
        {label}
      </p>
      <p className="mt-0.5 font-display font-semibold text-base flex items-center gap-1">
        {icon}
        {value}
      </p>
    </div>
  );
}

/* V3 — Leaderboard style with rank medals */
function V3Leaderboard() {
  const medals = [Trophy, Medal, Award];
  return (
    <div className="rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl shadow-soft overflow-hidden">
      <div className="px-5 py-3 border-b border-white/60 flex items-center justify-between text-xs">
        <span className="font-mono uppercase tracking-wider text-subtle">
          Top 6 · bu oy
        </span>
        <span className="font-mono uppercase tracking-wider text-subtle">
          Yangilandi: hozir
        </span>
      </div>
      <ol className="divide-y divide-white/60">
        {top.map((t, i) => {
          const region = regions.find((r) => r.slug === t.region)?.name;
          const Medal3 = i < 3 ? medals[i] : null;
          const medalColors = [
            "text-amber-500 bg-amber-100",
            "text-slate-500 bg-slate-100",
            "text-orange-700 bg-orange-100",
          ];
          return (
            <li key={t.id}>
              <Link
                href={`/ustozlar/${t.id}`}
                className={cn(
                  "group grid grid-cols-[auto_auto_1fr_auto_auto] gap-3 items-center px-5 py-4 hover:bg-white/70 transition-colors",
                  i === 0 && "bg-gradient-to-r from-amber-100/30 via-transparent to-transparent",
                )}
              >
                <div className="grid place-items-center size-9 rounded-full font-display font-bold text-sm tabular-nums">
                  {Medal3 ? (
                    <span
                      className={cn(
                        "size-9 grid place-items-center rounded-full",
                        medalColors[i],
                      )}
                    >
                      <Medal3 className="size-4" />
                    </span>
                  ) : (
                    <span className="text-subtle">#{i + 1}</span>
                  )}
                </div>
                <Avatar name={t.name} size={44} />
                <div className="min-w-0">
                  <p
                    className={cn(
                      "font-display font-semibold truncate",
                      i === 0 ? "text-lg" : "text-base",
                    )}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-muted truncate">
                    {t.title} · {region}
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 font-display font-bold text-base">
                    <Star className="size-3.5 fill-accent-500 text-accent-500" />
                    {t.rating.toFixed(1)}
                  </div>
                  <p className="text-[10px] text-subtle tabular-nums">
                    {t.reviewsCount} sharh
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-subtle transition-transform group-hover:rotate-45 group-hover:text-[var(--foreground)]" />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* V4 — Cover flow: perspective 3D row */
function V4CoverFlow() {
  const [center, setCenter] = React.useState(2);
  return (
    <div className="space-y-6">
      <div
        className="flex items-center justify-center gap-3 min-h-[300px] py-4"
        style={{ perspective: "1400px" }}
      >
        {top.map((t, i) => {
          const offset = i - center;
          const abs = Math.abs(offset);
          const hidden = abs > 2;
          const rotY = offset * -22;
          const tx = offset * 100;
          const scale = 1 - abs * 0.15;
          const opacity = 1 - abs * 0.25;
          return (
            <button
              key={t.id}
              onClick={() => setCenter(i)}
              aria-label={`${t.name}ni tanlash`}
              className={cn(
                "absolute rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl p-4 shadow-float transition-all duration-500 w-56",
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
              <Avatar name={t.name} size={72} className="mx-auto" />
              <p className="mt-3 font-display font-bold text-center text-base">
                {t.name}
              </p>
              <p className="mt-0.5 text-center text-xs text-muted line-clamp-1">
                {t.title}
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3 fill-accent-500 text-accent-500" />
                  {t.rating.toFixed(1)}
                </span>
                <span className="text-subtle">·</span>
                <span className="text-subtle">{t.experienceYears}y</span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setCenter((i) => Math.max(0, i - 1))}
          aria-label="Oldingi"
          className="grid place-items-center size-9 rounded-full border border-white/70 bg-white/60 backdrop-blur hover:bg-white/90"
        >
          <ChevronLeft className="size-4" />
        </button>
        <span className="text-sm font-mono tabular-nums text-muted px-3">
          {center + 1} / {top.length}
        </span>
        <button
          onClick={() => setCenter((i) => Math.min(top.length - 1, i + 1))}
          aria-label="Keyingi"
          className="grid place-items-center size-9 rounded-full border border-white/70 bg-white/60 backdrop-blur hover:bg-white/90"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

/* V5 — Magazine feature style: big pullquote + supporting */
function V5Magazine() {
  const [hero, ...rest] = top;
  const region = regions.find((r) => r.slug === hero.region)?.name;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
      <article className="relative rounded-3xl border border-white/60 bg-white/60 backdrop-blur-xl p-8 shadow-elevated overflow-hidden">
        <div
          className="absolute -top-20 -right-20 size-64 rounded-full blur-3xl"
          style={{ background: "oklch(82% 0.12 78 / 0.35)" }}
          aria-hidden="true"
        />
        <div className="relative">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-subtle">
            Ustoz · Hafta qahramoni
          </p>
          <div className="mt-4 flex items-center gap-5">
            <Avatar name={hero.name} size={90} />
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                {hero.name}
              </h3>
              <p className="mt-1 text-muted">{hero.title}</p>
            </div>
          </div>
          <p className="mt-6 font-display text-xl sm:text-2xl italic leading-snug text-[var(--foreground)]/90 border-l-4 border-accent-500 pl-5">
            &ldquo;{hero.bio.split(".")[0]}.&rdquo;
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3.5" /> {region}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" /> {hero.experienceYears}+ yil tajriba
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1 font-medium text-[var(--foreground)]">
              <Star className="size-3.5 fill-accent-500 text-accent-500" />
              {hero.rating.toFixed(1)} ({hero.reviewsCount})
            </span>
          </div>
          <Link
            href={`/ustozlar/${hero.id}`}
            className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-[var(--foreground)] text-[var(--background)] px-5 py-2.5 text-sm font-medium"
          >
            Batafsil o'qish <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </article>

      <aside className="flex flex-col gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-subtle">
          Boshqa ustozlar
        </p>
        {rest.slice(0, 4).map((t, i) => (
          <Link
            key={t.id}
            href={`/ustozlar/${t.id}`}
            className="group flex items-center gap-3 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-3 shadow-soft hover:bg-white/75 transition-colors"
          >
            <span className="font-mono text-[10px] text-subtle tabular-nums w-5">
              0{i + 2}
            </span>
            <Avatar name={t.name} size={36} />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-sm truncate">{t.name}</p>
              <p className="text-[11px] text-subtle truncate">{t.title}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium">
              <Star className="size-3 fill-accent-500 text-accent-500" />
              {t.rating.toFixed(1)}
            </span>
            <ArrowUpRight className="size-3.5 text-subtle shrink-0 transition-transform group-hover:rotate-45" />
          </Link>
        ))}
      </aside>
    </div>
  );
}
