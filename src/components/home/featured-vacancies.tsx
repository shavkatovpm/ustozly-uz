import Link from "next/link";
import {
  Building2,
  MapPin,
  CheckCircle2,
  Zap,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import {
  subjects,
  teachingFormats,
  employmentTypes,
} from "@/data/subjects";
import { regions } from "@/data/regions";
import { formatSalary, formatRelativeDate } from "@/lib/utils";
import type { Vacancy } from "@/lib/types";

export function FeaturedVacancies({ vacancies }: { vacancies: Vacancy[] }) {
  return (
    <section className="container-page pt-20 sm:pt-24 relative">
      <SectionHeader
        eyebrow="Yangi vakansiyalar"
        title="Ochiq ish o'rinlari"
        description="Tasdiqlangan o'quv markazlaridan — har kuni yangilanadi."
        ctaHref="/vakansiyalar"
        ctaLabel="Barcha vakansiyalar"
      />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vacancies.map((v) => (
          <GlassVacancyCard key={v.id} vacancy={v} />
        ))}
      </div>
    </section>
  );
}

function GlassVacancyCard({ vacancy }: { vacancy: Vacancy }) {
  const region = regions.find((r) => r.slug === vacancy.region)?.name;
  const subject = subjects.find((s) => s.slug === vacancy.subject);
  const employment = employmentTypes.find(
    (e) => e.value === vacancy.employmentType,
  )?.label;
  const format = teachingFormats.find((f) => f.value === vacancy.format)?.label;
  return (
    <Link
      href={`/vakansiyalar/${vacancy.id}`}
      className="group relative block rounded-3xl border border-white/60 bg-white/50 backdrop-blur-xl p-5 shadow-elevated hover:-translate-y-1 hover:bg-white/70 hover:shadow-float transition-all"
    >
      <div className="flex items-start gap-3">
        <span
          className="grid place-items-center size-11 rounded-xl shrink-0"
          style={{
            backgroundColor: subject?.color
              ? `color-mix(in oklch, ${subject.color} 22%, transparent)`
              : "var(--surface-muted)",
            color: subject?.color ?? "var(--foreground)",
          }}
        >
          <Building2 className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display font-semibold text-base leading-tight line-clamp-2">
            {vacancy.title}
          </h3>
          <p className="mt-1 text-sm text-muted inline-flex items-center gap-1">
            {vacancy.center.name}
            {vacancy.center.verified && (
              <CheckCircle2 className="size-3.5 text-brand-700" />
            )}
          </p>
        </div>
        {vacancy.urgent && (
          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-800 bg-amber-100/80 backdrop-blur rounded-full px-1.5 py-0.5 shrink-0">
            <Zap className="size-3" /> Shoshilinch
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {subject && (
          <span
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: `color-mix(in oklch, ${subject.color} 22%, transparent)`,
              color: subject.color,
            }}
          >
            {subject.name}
          </span>
        )}
        {employment && (
          <span className="rounded-full border border-white/70 bg-white/50 backdrop-blur px-2.5 py-0.5 text-xs">
            {employment}
          </span>
        )}
        {format && (
          <span className="rounded-full border border-[var(--border-strong)] px-2.5 py-0.5 text-xs text-muted">
            {format}
          </span>
        )}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-subtle">
        <span className="inline-flex items-center gap-1.5 truncate">
          <MapPin className="size-3.5" /> {region}
        </span>
        <span className="inline-flex items-center gap-1.5 truncate">
          <Users className="size-3.5" /> {vacancy.applicationsCount} ariza
        </span>
      </div>
      <div className="mt-4 pt-4 border-t border-white/50 flex items-end justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-subtle">
            Oylik maosh
          </p>
          <p className="font-display font-semibold text-[15px]">
            {formatSalary(vacancy.salaryMin, vacancy.salaryMax)}
          </p>
        </div>
        <p className="text-[11px] text-subtle">
          {formatRelativeDate(vacancy.createdAt)}
        </p>
      </div>
    </Link>
  );
}
