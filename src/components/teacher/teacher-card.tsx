import Link from "next/link";
import { MapPin, Clock, Dot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Rating } from "@/components/ui/rating";
import { formatSalary, formatRelativeDate } from "@/lib/utils";
import { regions } from "@/data/regions";
import { subjects, teachingFormats } from "@/data/subjects";
import type { Teacher } from "@/lib/types";

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  const region = regions.find((r) => r.slug === teacher.region)?.name;
  const teacherSubjects = teacher.subjects
    .map((s) => subjects.find((x) => x.slug === s)?.name)
    .filter(Boolean) as string[];
  const format = teachingFormats.find((f) => f.value === teacher.format)?.label;

  return (
    <Card interactive className="group relative overflow-hidden">
      <Link
        href={`/ustozlar/${teacher.id}`}
        className="block p-5 focus-visible:outline-none"
        aria-label={`${teacher.name} ustoz profiliga o'tish`}
      >
        <span className="absolute inset-0" aria-hidden="true" />
        <div className="flex items-start gap-4">
          <Avatar name={teacher.name} size={56} />
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-2 justify-between">
              <h3 className="font-display font-semibold text-base leading-tight truncate">
                {teacher.name}
              </h3>
              {teacher.available ? (
                <Badge variant="success" className="shrink-0">
                  <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Faol
                </Badge>
              ) : (
                <Badge variant="outline" className="shrink-0">
                  Band
                </Badge>
              )}
            </div>
            <p className="mt-0.5 text-sm text-muted line-clamp-1">
              {teacher.title}
            </p>
            <div className="mt-2 flex items-center gap-1 text-xs text-subtle flex-wrap">
              <Rating value={teacher.rating} reviewsCount={teacher.reviewsCount} />
              <Dot className="size-3 opacity-50" />
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3" /> {region}
              </span>
              <Dot className="size-3 opacity-50" />
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3" /> {teacher.experienceYears}+ yil
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {teacherSubjects.slice(0, 3).map((s) => (
            <Badge key={s} variant="brand">
              {s}
            </Badge>
          ))}
          {format && <Badge variant="outline">{format}</Badge>}
        </div>

        <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-end justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-subtle">
              Soatiga
            </p>
            <p className="font-display font-semibold text-[15px]">
              {formatSalary(teacher.hourlyRate)}
            </p>
          </div>
          <p className="text-[11px] text-subtle">
            {formatRelativeDate(teacher.updatedAt)}
          </p>
        </div>
      </Link>
    </Card>
  );
}
