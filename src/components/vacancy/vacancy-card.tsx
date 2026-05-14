import Link from "next/link";
import { MapPin, Users, Zap, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  employmentTypes,
  subjects,
  teachingFormats,
} from "@/data/subjects";
import { regions } from "@/data/regions";
import { formatSalary, formatRelativeDate } from "@/lib/utils";
import type { Vacancy } from "@/lib/types";

export function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
  const region = regions.find((r) => r.slug === vacancy.region)?.name;
  const subject = subjects.find((s) => s.slug === vacancy.subject);
  const employment = employmentTypes.find(
    (e) => e.value === vacancy.employmentType,
  )?.label;
  const format = teachingFormats.find((f) => f.value === vacancy.format)?.label;

  return (
    <Card interactive className="group relative overflow-hidden">
      <Link
        href={`/vakansiyalar/${vacancy.id}`}
        className="block p-5 focus-visible:outline-none"
        aria-label={`${vacancy.title} vakansiya tafsilotlari`}
      >
        <span className="absolute inset-0" aria-hidden="true" />
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0 flex-1">
            <div
              className="grid place-items-center size-11 rounded-xl shrink-0 font-display font-semibold text-sm"
              style={{
                backgroundColor: subject?.color
                  ? `color-mix(in oklch, ${subject.color} 20%, transparent)`
                  : "var(--surface-muted)",
                color: subject?.color ?? "var(--foreground)",
              }}
              aria-hidden="true"
            >
              <Building2 className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display font-semibold text-base leading-tight line-clamp-2">
                {vacancy.title}
              </h3>
              <p className="mt-1 text-sm text-muted inline-flex items-center gap-1">
                {vacancy.center.name}
                {vacancy.center.verified && (
                  <span
                    className="inline-flex items-center text-brand-600 dark:text-brand-400"
                    title="Tasdiqlangan o'quv markazi"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3.5 ml-0.5"
                      fill="currentColor"
                    >
                      <path d="M12 2l2.4 1.8 3-.3 1.2 2.8 2.4 1.8-1.2 2.9 1.2 2.9-2.4 1.8-1.2 2.8-3-.3L12 22l-2.4-1.8-3 .3-1.2-2.8L3 15.9l1.2-2.9L3 10.1l2.4-1.8 1.2-2.8 3 .3L12 2zm-1.1 14l6-6-1.4-1.4L10.9 13l-2.4-2.4L7 12l3.9 4z" />
                    </svg>
                  </span>
                )}
              </p>
            </div>
          </div>
          {vacancy.urgent && (
            <Badge variant="warning" className="shrink-0">
              <Zap className="size-3" />
              Shoshilinch
            </Badge>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {subject && <Badge variant="brand">{subject.name}</Badge>}
          {employment && <Badge>{employment}</Badge>}
          {format && <Badge variant="outline">{format}</Badge>}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-subtle">
          <span className="inline-flex items-center gap-1.5 truncate">
            <MapPin className="size-3.5" /> {region}
          </span>
          <span className="inline-flex items-center gap-1.5 truncate">
            <Users className="size-3.5" /> {vacancy.applicationsCount} ariza
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-end justify-between gap-2">
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
    </Card>
  );
}
