import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  Clock,
  CheckCircle2,
  GraduationCap,
  Award,
  Languages as LangIcon,
  MessageCircle,
  Share2,
  ArrowLeft,
  Phone,
} from "lucide-react";
import { teachers } from "@/data/teachers";
import { subjects, teachingFormats, experienceLevels } from "@/data/subjects";
import { regions } from "@/data/regions";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { formatSalary, formatRelativeDate } from "@/lib/utils";
import { TeacherCard } from "@/components/teacher/teacher-card";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const t = teachers.find((x) => x.id === id);
  if (!t) return { title: "Ustoz topilmadi" };
  return {
    title: `${t.name} — ${t.title}`,
    description: t.bio.slice(0, 160),
  };
}

export function generateStaticParams() {
  return teachers.map((t) => ({ id: t.id }));
}

export default async function TeacherDetailPage({ params }: Props) {
  const { id } = await params;
  const teacher = teachers.find((t) => t.id === id);
  if (!teacher) notFound();

  const region = regions.find((r) => r.slug === teacher.region)?.name;
  const t = teacher;
  const teacherSubjects = t.subjects
    .map((s) => subjects.find((x) => x.slug === s))
    .filter(Boolean);
  const format = teachingFormats.find((f) => f.value === t.format)?.label;
  const level = experienceLevels.find((e) => e.value === t.experienceLevel)?.label;

  const similar = teachers
    .filter((x) => x.id !== t.id && x.subjects.some((s) => t.subjects.includes(s)))
    .slice(0, 3);

  return (
    <>
      <div className="container-page pt-6">
        <Link
          href="/ustozlar"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="size-4" />
          Ustozlar ro'yxatiga qaytish
        </Link>
      </div>

      <div className="container-page pt-6 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <article className="space-y-6">
          <header className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <Avatar name={t.name} size={96} className="shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  {t.available ? (
                    <Badge variant="success">
                      <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Hoziroq ishlay oladi
                    </Badge>
                  ) : (
                    <Badge variant="outline">Hozircha band</Badge>
                  )}
                  <Badge variant="brand">{level}</Badge>
                  {format && <Badge>{format}</Badge>}
                </div>
                <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  {t.name}
                </h1>
                <p className="mt-1 text-muted">{t.title}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
                  <Rating value={t.rating} reviewsCount={t.reviewsCount} />
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4" /> {region}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4" /> {t.experienceYears}+ yil tajriba
                  </span>
                </div>
              </div>
            </div>
          </header>

          <Section icon={<GraduationCap className="size-5" />} title="Ustoz haqida">
            <p className="text-[15px] leading-relaxed text-[var(--foreground)]/90">
              {t.bio}
            </p>
          </Section>

          <Section icon={<CheckCircle2 className="size-5" />} title="Fanlar va formatlar">
            <div className="flex flex-wrap gap-2">
              {teacherSubjects.map((s) => (
                <Badge key={s!.slug} variant="brand">
                  {s!.name}
                </Badge>
              ))}
            </div>
          </Section>

          <Section icon={<GraduationCap className="size-5" />} title="Ta'lim">
            <ul className="space-y-3">
              {t.education.map((ed, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]/40 p-4"
                >
                  <span className="grid place-items-center size-10 rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 shrink-0">
                    <GraduationCap className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display font-semibold">{ed.institution}</p>
                    <p className="text-sm text-muted">{ed.degree}</p>
                    <p className="text-xs text-subtle mt-1">{ed.years}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={<Award className="size-5" />} title="Yutuqlar">
            <ul className="space-y-2">
              {t.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="size-4 text-brand-600 dark:text-brand-400 mt-0.5 shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={<LangIcon className="size-5" />} title="Tillar">
            <div className="flex flex-wrap gap-2">
              {t.languages.map((l) => (
                <Badge key={l}>{l}</Badge>
              ))}
            </div>
          </Section>
        </article>

        <aside className="lg:sticky lg:top-24 h-fit space-y-4">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft">
            <p className="text-xs uppercase tracking-wide text-subtle">
              Soatbay narx
            </p>
            <p className="mt-1 font-display text-3xl font-bold">
              {formatSalary(t.hourlyRate)}
            </p>
            {t.monthlyRate && (
              <p className="mt-1 text-sm text-muted">
                Oylik: {formatSalary(t.monthlyRate)}
              </p>
            )}
            <div className="mt-5 space-y-2">
              <Button size="lg" className="w-full">
                <MessageCircle className="size-4" />
                Xabar yuborish
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Phone className="size-4" />
                Aloqa so'rash
              </Button>
              <Button size="md" variant="ghost" className="w-full">
                <Share2 className="size-4" />
                Ulashish
              </Button>
            </div>
            <p className="mt-4 text-xs text-subtle text-center">
              Yangilangan: {formatRelativeDate(t.updatedAt)}
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)]/50 p-5">
            <p className="text-sm font-medium">Ishonchli aloqa</p>
            <p className="mt-1 text-xs text-muted">
              Aloqa faqat Ustozly orqali boshlanadi. Oldindan to'lovsiz. Hech
              qanday komissiya yo'q.
            </p>
          </div>
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="container-page pb-20">
          <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
            Shunga o'xshash ustozlar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {similar.map((s) => (
              <TeacherCard key={s.id} teacher={s} />
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
