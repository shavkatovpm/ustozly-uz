import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Gift,
  Users,
  Calendar,
  ArrowLeft,
  Building2,
  Zap,
  Send,
  Share2,
} from "lucide-react";
import { vacancies } from "@/data/vacancies";
import {
  subjects,
  teachingFormats,
  employmentTypes,
  experienceLevels,
} from "@/data/subjects";
import { regions } from "@/data/regions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VacancyCard } from "@/components/vacancy/vacancy-card";
import { formatSalary, formatRelativeDate } from "@/lib/utils";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const v = vacancies.find((x) => x.id === id);
  if (!v) return { title: "Vakansiya topilmadi" };
  return {
    title: `${v.title} — ${v.center.name}`,
    description: v.description.slice(0, 160),
  };
}

export function generateStaticParams() {
  return vacancies.map((v) => ({ id: v.id }));
}

export default async function VacancyDetailPage({ params }: Props) {
  const { id } = await params;
  const vacancy = vacancies.find((v) => v.id === id);
  if (!vacancy) notFound();

  const v = vacancy;
  const region = regions.find((r) => r.slug === v.region)?.name;
  const subject = subjects.find((s) => s.slug === v.subject);
  const format = teachingFormats.find((f) => f.value === v.format)?.label;
  const employment = employmentTypes.find((e) => e.value === v.employmentType)?.label;
  const level = experienceLevels.find((e) => e.value === v.experienceLevel)?.label;

  const similar = vacancies
    .filter((x) => x.id !== v.id && (x.subject === v.subject || x.region === v.region))
    .slice(0, 3);

  return (
    <>
      <div className="container-page pt-6">
        <Link
          href="/vakansiyalar"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="size-4" />
          Vakansiyalar ro'yxati
        </Link>
      </div>

      <div className="container-page pt-6 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <article className="space-y-6">
          <header className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-soft">
            <div className="flex items-start gap-5">
              <div
                className="grid place-items-center size-16 rounded-2xl shrink-0"
                style={{
                  backgroundColor: subject?.color
                    ? `color-mix(in oklch, ${subject.color} 18%, transparent)`
                    : "var(--surface-muted)",
                  color: subject?.color ?? "var(--foreground)",
                }}
              >
                <Building2 className="size-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  {v.urgent && (
                    <Badge variant="warning">
                      <Zap className="size-3" />
                      Shoshilinch
                    </Badge>
                  )}
                  {subject && <Badge variant="brand">{subject.name}</Badge>}
                  {employment && <Badge>{employment}</Badge>}
                  {format && <Badge variant="outline">{format}</Badge>}
                </div>
                <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  {v.title}
                </h1>
                <p className="mt-2 text-muted inline-flex items-center gap-1.5">
                  {v.center.name}
                  {v.center.verified && (
                    <span
                      className="inline-flex items-center text-brand-600 dark:text-brand-400"
                      title="Tasdiqlangan markaz"
                    >
                      <CheckCircle2 className="size-4" />
                    </span>
                  )}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4" /> {region}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-4" /> {v.applicationsCount} ariza
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-4" />
                    {formatRelativeDate(v.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <Section icon={<Briefcase className="size-5" />} title="Vakansiya haqida">
            <p className="text-[15px] leading-relaxed whitespace-pre-line">
              {v.description}
            </p>
          </Section>

          <Section icon={<GraduationCap className="size-5" />} title="Talablar">
            <ul className="space-y-2.5">
              {v.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px]">
                  <CheckCircle2 className="size-4 text-brand-600 dark:text-brand-400 mt-1 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={<Gift className="size-5" />} title="Biz nima taklif qilamiz">
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {v.benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]/40 p-3 text-[14px]"
                >
                  <span className="mt-0.5 grid place-items-center size-6 rounded-md bg-accent-100 text-accent-800 dark:bg-accent-900/40 dark:text-accent-200 shrink-0">
                    <Gift className="size-3.5" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Section>
        </article>

        <aside className="lg:sticky lg:top-24 h-fit space-y-4">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft">
            <p className="text-xs uppercase tracking-wide text-subtle">
              Oylik maosh
            </p>
            <p className="mt-1 font-display text-3xl font-bold">
              {formatSalary(v.salaryMin, v.salaryMax)}
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <Info label="Tajriba" value={level ?? "—"} />
              <Info label="Bandlik" value={employment ?? "—"} />
              <Info label="Format" value={format ?? "—"} />
              <Info label="Hudud" value={region ?? "—"} />
            </dl>

            <div className="mt-6 space-y-2">
              <Button size="lg" className="w-full">
                <Send className="size-4" />
                Ariza yuborish
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Share2 className="size-4" />
                Ulashish
              </Button>
            </div>

            {v.deadline && (
              <p className="mt-4 text-xs text-[var(--destructive)] text-center">
                Oxirgi muddat:{" "}
                {new Intl.DateTimeFormat("uz-UZ", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(v.deadline))}
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)]/50 p-5">
            <p className="text-sm font-medium">Ogoh bo'ling</p>
            <p className="mt-1 text-xs text-muted">
              Ustozly hech qanday ariza uchun to'lov olmaydi. Agar sizdan pul
              so'ralsa — bizga xabar bering.
            </p>
          </div>
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="container-page pb-20">
          <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
            O'xshash vakansiyalar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {similar.map((s) => (
              <VacancyCard key={s.id} vacancy={s} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-soft">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="grid place-items-center size-8 rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
          {icon}
        </span>
        <h2 className="font-display text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wide text-subtle">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-medium">{value}</dd>
    </div>
  );
}
