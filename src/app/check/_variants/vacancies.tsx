"use client";

import Link from "next/link";
import {
  Building2,
  MapPin,
  Users,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Calendar,
  Heart,
  MessageCircle,
  Send,
  Navigation,
  Clock,
} from "lucide-react";
import { vacancies } from "@/data/vacancies";
import {
  subjects,
  teachingFormats,
  employmentTypes,
} from "@/data/subjects";
import { regions } from "@/data/regions";
import { formatSalary, formatRelativeDate } from "@/lib/utils";
import { VariantFrame } from "./shared";
import { cn } from "@/lib/utils";

const top = [...vacancies]
  .sort(
    (a, b) =>
      (b.urgent ? 1 : 0) - (a.urgent ? 1 : 0) ||
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  .slice(0, 8);

export function VacanciesVariants() {
  return (
    <VariantFrame
      section="05 · Ochiq vakansiyalar"
      titles={[
        "3×2 grid",
        "Social feed",
        "Kanban columns",
        "Deadline kalendar",
        "Xarita + pinlar",
      ]}
    >
      {(active) => (
        <>
          {active === 0 && <V1Grid />}
          {active === 1 && <V2Feed />}
          {active === 2 && <V3Kanban />}
          {active === 3 && <V4Calendar />}
          {active === 4 && <V5Map />}
        </>
      )}
    </VariantFrame>
  );
}

function SubjectChip({ slug }: { slug: string }) {
  const s = subjects.find((x) => x.slug === slug);
  if (!s) return null;
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
      style={{
        backgroundColor: `color-mix(in oklch, ${s.color} 22%, transparent)`,
        color: s.color,
      }}
    >
      {s.name}
    </span>
  );
}

/* V1 — uniform grid (baseline) */
function V1Grid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {top.slice(0, 6).map((v) => {
        const region = regions.find((r) => r.slug === v.region)?.name;
        return (
          <Link
            key={v.id}
            href={`/vakansiyalar/${v.id}`}
            className="group rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-4 shadow-soft hover:-translate-y-0.5 hover:bg-white/70 transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <SubjectChip slug={v.subject} />
              {v.urgent && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-800 bg-amber-100/80 rounded-full px-1.5 py-0.5">
                  <Zap className="size-3" /> Shoshilinch
                </span>
              )}
            </div>
            <h3 className="mt-2 font-display font-semibold text-sm leading-tight line-clamp-2">
              {v.title}
            </h3>
            <p className="mt-1 text-xs text-muted inline-flex items-center gap-1">
              {v.center.name}
              {v.center.verified && (
                <CheckCircle2 className="size-3 text-brand-700" />
              )}
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs text-subtle">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3" /> {region}
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/50 flex items-center justify-between">
              <span className="font-display font-semibold text-sm">
                {formatSalary(v.salaryMin, v.salaryMax)}
              </span>
              <span className="text-[11px] text-subtle">
                {formatRelativeDate(v.createdAt)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* V2 — Social feed: posts with like/comment/share */
function V2Feed() {
  return (
    <div className="max-w-xl mx-auto space-y-4">
      {top.slice(0, 4).map((v) => {
        const region = regions.find((r) => r.slug === v.region)?.name;
        const employment = employmentTypes.find(
          (e) => e.value === v.employmentType,
        )?.label;
        return (
          <article
            key={v.id}
            className="rounded-3xl border border-white/60 bg-white/55 backdrop-blur-xl shadow-soft overflow-hidden"
          >
            <header className="flex items-center gap-3 px-5 pt-4">
              <span
                className="grid place-items-center size-10 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold text-xs"
                aria-hidden="true"
              >
                {v.center.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm inline-flex items-center gap-1">
                  {v.center.name}
                  {v.center.verified && (
                    <CheckCircle2 className="size-3.5 text-brand-700" />
                  )}
                </p>
                <p className="text-[11px] text-subtle inline-flex items-center gap-1">
                  <Clock className="size-3" />
                  {formatRelativeDate(v.createdAt)} · {region}
                </p>
              </div>
              {v.urgent && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-800 bg-amber-100 rounded-full px-2 py-0.5">
                  <Zap className="size-3" /> Shoshilinch
                </span>
              )}
            </header>
            <Link
              href={`/vakansiyalar/${v.id}`}
              className="block px-5 pt-3 pb-4 hover:bg-white/30 transition-colors"
            >
              <h3 className="font-display font-bold text-lg leading-tight">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-muted line-clamp-2">
                {v.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <SubjectChip slug={v.subject} />
                <span className="rounded-full border border-white/70 bg-white/50 px-2.5 py-0.5 text-xs">
                  {employment}
                </span>
                <span className="rounded-full border border-white/70 bg-white/50 px-2.5 py-0.5 text-xs font-semibold">
                  {formatSalary(v.salaryMin, v.salaryMax)}
                </span>
              </div>
            </Link>
            <footer className="flex items-center gap-4 px-5 py-3 border-t border-white/50 text-sm text-muted">
              <button className="inline-flex items-center gap-1.5 hover:text-[var(--foreground)]">
                <Heart className="size-4" /> <span className="text-xs">Saqlash</span>
              </button>
              <button className="inline-flex items-center gap-1.5 hover:text-[var(--foreground)]">
                <MessageCircle className="size-4" />
                <span className="text-xs">{v.applicationsCount} ariza</span>
              </button>
              <Link
                href={`/vakansiyalar/${v.id}`}
                className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] px-3 py-1.5 text-xs font-medium"
              >
                <Send className="size-3.5" /> Ariza
              </Link>
            </footer>
          </article>
        );
      })}
    </div>
  );
}

/* V3 — Kanban columns by employment type */
function V3Kanban() {
  const columns: { key: string; title: string; items: typeof top }[] = [
    { key: "urgent", title: "Shoshilinch", items: top.filter((v) => v.urgent) },
    { key: "full", title: "To'liq stavka", items: top.filter((v) => !v.urgent && v.employmentType === "full-time") },
    { key: "part", title: "Yarim / Soatbay", items: top.filter((v) => !v.urgent && (v.employmentType === "part-time" || v.employmentType === "hourly")) },
    { key: "contract", title: "Shartnoma", items: top.filter((v) => !v.urgent && v.employmentType === "contract") },
  ];
  return (
    <div className="overflow-x-auto scrollbar-thin -mx-2 px-2 pb-2">
      <div className="inline-flex gap-3 min-w-full">
        {columns.map((col) => (
          <div
            key={col.key}
            className="shrink-0 w-64 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl p-3"
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <p className="font-display font-semibold text-sm">{col.title}</p>
              <span className="text-xs text-subtle tabular-nums">
                {col.items.length}
              </span>
            </div>
            <div className="space-y-2">
              {col.items.length === 0 && (
                <p className="text-xs text-subtle text-center py-5">
                  Hozircha bo'sh
                </p>
              )}
              {col.items.map((v) => {
                const region = regions.find((r) => r.slug === v.region)?.name;
                return (
                  <Link
                    key={v.id}
                    href={`/vakansiyalar/${v.id}`}
                    className="group block rounded-xl border border-white/60 bg-white/70 backdrop-blur p-3 shadow-soft hover:bg-white transition-colors"
                  >
                    <SubjectChip slug={v.subject} />
                    <h4 className="mt-2 font-semibold text-sm leading-tight line-clamp-2">
                      {v.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-subtle truncate">
                      {v.center.name}
                    </p>
                    <div className="mt-2.5 pt-2.5 border-t border-white/60 flex items-center justify-between text-[11px]">
                      <span className="text-muted inline-flex items-center gap-1">
                        <MapPin className="size-3" /> {region?.split(" ")[0]}
                      </span>
                      <span className="font-semibold">
                        {formatSalary(v.salaryMin, v.salaryMax).replace(" so'm", "")}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* V4 — Deadline calendar: vacancies grouped by deadline */
function V4Calendar() {
  const now = new Date("2026-04-24T12:00:00Z").getTime();
  const withBucket = top.map((v) => {
    const diff = v.deadline
      ? Math.ceil((new Date(v.deadline).getTime() - now) / (1000 * 60 * 60 * 24))
      : 999;
    let bucket: string;
    if (diff <= 7) bucket = "this-week";
    else if (diff <= 14) bucket = "next-week";
    else if (diff <= 30) bucket = "this-month";
    else bucket = "open";
    return { v, diff, bucket };
  });
  const buckets = [
    { key: "this-week", label: "Bu hafta", color: "text-red-700 bg-red-100" },
    { key: "next-week", label: "Keyingi hafta", color: "text-amber-800 bg-amber-100" },
    { key: "this-month", label: "Bu oy", color: "text-emerald-800 bg-emerald-100" },
    { key: "open", label: "Doimiy ochiq", color: "text-muted bg-white/60" },
  ];
  return (
    <div className="space-y-4">
      {buckets.map((b) => {
        const items = withBucket.filter((x) => x.bucket === b.key);
        if (items.length === 0) return null;
        return (
          <div key={b.key}>
            <div className="flex items-center gap-3 mb-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                  b.color,
                )}
              >
                <Calendar className="size-3" />
                {b.label}
              </span>
              <span className="text-xs text-subtle">{items.length} ta</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {items.map(({ v, diff }) => {
                const region = regions.find((r) => r.slug === v.region)?.name;
                const deadlineStr = v.deadline
                  ? new Intl.DateTimeFormat("uz-UZ", {
                      day: "numeric",
                      month: "short",
                    }).format(new Date(v.deadline))
                  : null;
                return (
                  <Link
                    key={v.id}
                    href={`/vakansiyalar/${v.id}`}
                    className="group grid grid-cols-[auto_1fr_auto] gap-3 items-center rounded-xl border border-white/60 bg-white/55 backdrop-blur p-3 shadow-soft hover:bg-white/80 transition-colors"
                  >
                    <div className="text-center px-2 py-1 rounded-lg border border-white/70 bg-white/70 min-w-[50px]">
                      <p className="font-mono text-[10px] uppercase text-subtle">
                        {deadlineStr ? deadlineStr.split(" ")[1] : "—"}
                      </p>
                      <p className="font-display font-bold text-lg tabular-nums leading-none">
                        {deadlineStr ? deadlineStr.split(" ")[0] : "∞"}
                      </p>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm line-clamp-1">
                        {v.title}
                      </p>
                      <p className="text-[11px] text-subtle truncate">
                        {v.center.name} · {region}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-semibold text-xs">
                        {formatSalary(v.salaryMin, v.salaryMax).replace(" so'm", "")}
                      </p>
                      {diff < 999 && (
                        <p className="text-[10px] text-subtle tabular-nums">
                          {diff} kun qoldi
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* V5 — Fake map with pins */
function V5Map() {
  // Position pins on a pseudo-map (percent coordinates)
  const pins = [
    { x: 48, y: 42, id: top[0]?.id },
    { x: 35, y: 55, id: top[1]?.id },
    { x: 58, y: 32, id: top[2]?.id },
    { x: 62, y: 58, id: top[3]?.id },
    { x: 25, y: 48, id: top[4]?.id },
    { x: 72, y: 45, id: top[5]?.id },
  ].filter((p) => p.id);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4">
      <div className="relative rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl overflow-hidden min-h-[420px]">
        <div
          className="absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 45% 45%, color-mix(in oklch, oklch(82% 0.08 170) 60%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:40px_40px] opacity-40"
          aria-hidden="true"
        />
        <div className="relative h-full">
          <div className="absolute top-4 left-4 text-[11px] font-mono uppercase tracking-wider text-muted">
            O'zbekiston · vakansiyalar xaritasi
          </div>
          {pins.map((p, i) => {
            const v = top.find((x) => x.id === p.id)!;
            return (
              <Link
                key={i}
                href={`/vakansiyalar/${v.id}`}
                className="absolute group -translate-x-1/2 -translate-y-full"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <div
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-float backdrop-blur transition-all group-hover:scale-110",
                    v.urgent
                      ? "bg-amber-500 text-amber-950"
                      : "bg-[var(--foreground)] text-[var(--background)]",
                  )}
                >
                  <Navigation className="size-3" />
                  {formatSalary(v.salaryMin, v.salaryMax).replace(" so'm", "")}
                  <span
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 top-full size-2 rotate-45",
                      v.urgent ? "bg-amber-500" : "bg-[var(--foreground)]",
                    )}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-wider text-subtle mb-2">
          Yaqindagi vakansiyalar
        </p>
        {top.slice(0, 5).map((v) => {
          const region = regions.find((r) => r.slug === v.region)?.name;
          return (
            <Link
              key={v.id}
              href={`/vakansiyalar/${v.id}`}
              className="group flex items-center gap-3 rounded-xl border border-white/60 bg-white/55 backdrop-blur-xl p-3 shadow-soft hover:bg-white/80 transition-colors"
            >
              <span
                className={cn(
                  "grid place-items-center size-9 rounded-full shrink-0",
                  v.urgent
                    ? "bg-amber-500 text-amber-950"
                    : "bg-[var(--foreground)] text-[var(--background)]",
                )}
              >
                <MapPin className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm line-clamp-1">{v.title}</p>
                <p className="text-[11px] text-subtle truncate">
                  {region} · {v.center.name}
                </p>
              </div>
              <span className="font-display font-semibold text-xs shrink-0">
                {formatSalary(v.salaryMin, v.salaryMax).replace(" so'm", "")}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
