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
  Flame,
  type LucideIcon,
} from "lucide-react";
import { subjects } from "@/data/subjects";
import { SectionHeader } from "@/components/section-header";
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
};

const spans = [
  "col-span-2 row-span-2", // big featured
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

export function Categories() {
  const subjs = subjects.slice(0, 10);
  return (
    <section className="container-page pt-20 sm:pt-24 relative">
      <SectionHeader
        eyebrow="Ommabop fanlar"
        title="Qaysi yo'nalishda ustoz qidiryapsiz?"
        description="18+ yo'nalishdagi tajribali ustozlar. Fanni tanlang — katalog darhol filtrlanadi."
        ctaHref="/ustozlar"
        ctaLabel="Barcha fanlar"
      />

      <div className="mt-8 grid grid-cols-4 grid-rows-4 gap-3 min-h-[460px]">
        {subjs.map((s, i) => {
          const Icon = iconMap[s.icon] ?? BookOpen;
          const big =
            spans[i].includes("col-span-2") && spans[i].includes("row-span-2");
          return (
            <Link
              key={s.slug}
              href={`/ustozlar?subject=${s.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-4 sm:p-5 shadow-soft hover:-translate-y-0.5 hover:bg-white/70 transition-all flex flex-col",
                spans[i],
              )}
            >
              <div
                className="absolute -top-10 -right-10 size-40 rounded-full blur-3xl opacity-50"
                style={{
                  background: `color-mix(in oklch, ${s.color} 50%, transparent)`,
                }}
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between">
                <span
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                    big ? "size-14" : "size-10",
                  )}
                  style={{
                    backgroundColor: `color-mix(in oklch, ${s.color} 22%, transparent)`,
                    color: s.color,
                  }}
                >
                  <Icon className={big ? "size-7" : "size-5"} />
                </span>
                {big && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent-800 bg-accent-100/70 backdrop-blur rounded-full px-2 py-0.5">
                    <Flame className="size-3" /> Top
                  </span>
                )}
              </div>
              <div className="relative mt-auto pt-4">
                <p
                  className={cn(
                    "font-display font-bold leading-tight",
                    big ? "text-xl sm:text-2xl" : "text-sm sm:text-base",
                  )}
                >
                  {s.name}
                </p>
                <p className="mt-0.5 text-[11px] text-subtle">
                  {counts[s.slug] ?? 20}+ ustoz
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
