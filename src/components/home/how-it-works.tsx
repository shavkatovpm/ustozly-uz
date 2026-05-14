import Link from "next/link";
import {
  UserPlus,
  FileEdit,
  MessagesSquare,
  Building2,
  ListPlus,
  Handshake,
  GraduationCap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";

type Step = { icon: LucideIcon; title: string; desc: string };

const teacherSteps: Step[] = [
  {
    icon: UserPlus,
    title: "Profilingizni yarating",
    desc: "2 daqiqada ro'yxatdan o'ting va asosiy ma'lumotlarni kiriting.",
  },
  {
    icon: FileEdit,
    title: "Rezyume joylang",
    desc: "Fanlaringizni, tajribangizni va narxlaringizni aniq ko'rsating.",
  },
  {
    icon: MessagesSquare,
    title: "Takliflarni qabul qiling",
    desc: "O'quv markazlari siz bilan to'g'ridan-to'g'ri bog'lanadi.",
  },
];

const centerSteps: Step[] = [
  {
    icon: Building2,
    title: "Markazingizni tasdiqlang",
    desc: "Hujjatlaringizni yuklang va tekshiruvdan o'ting (1 ish kuni).",
  },
  {
    icon: ListPlus,
    title: "Vakansiya joylang",
    desc: "Talablarni, maoshni va ish sharoitlarini qulay tarzda yozing.",
  },
  {
    icon: Handshake,
    title: "Eng yaxshisini tanlang",
    desc: "Arizalarni saralang, suhbat tayinlang va ishga oling.",
  },
];

export function HowItWorks() {
  return (
    <section className="container-page pt-20 sm:pt-24 relative">
      <SectionHeader
        align="center"
        eyebrow="Qanday ishlaydi"
        title="Ikki tomonlama oddiy jarayon"
        description="Ikki rolda — ustoz yoki o'quv markazi — foydalanuvchiga eng qulay yo'l."
      />
      <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        <Lane
          title="Ustozlar uchun"
          subtitle="Ish qidiruvchilar yo'li"
          steps={teacherSteps}
          icon={<GraduationCap className="size-5" />}
          cta={{ href: "/rezyume-joylash", label: "Rezyume joylash" }}
        />
        <Lane
          title="O'quv markazlari uchun"
          subtitle="Ustoz yollash yo'li"
          steps={centerSteps}
          icon={<Building2 className="size-5" />}
          cta={{ href: "/vakansiya-joylash", label: "Vakansiya joylash" }}
          accent
        />
      </div>
    </section>
  );
}

function Lane({
  title,
  subtitle,
  steps,
  cta,
  icon,
  accent = false,
}: {
  title: string;
  subtitle: string;
  steps: Step[];
  cta: { href: string; label: string };
  icon: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/50 backdrop-blur-xl p-5 sm:p-8 shadow-elevated">
      <div
        className="absolute -top-20 -right-20 size-60 rounded-full blur-3xl opacity-60"
        style={{
          background: accent
            ? "oklch(82% 0.12 78 / 0.4)"
            : "oklch(82% 0.08 170 / 0.3)",
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium",
            accent
              ? "bg-accent-100/70 text-accent-900"
              : "bg-white/70 text-[var(--foreground)]",
          )}
        >
          {icon}
          {subtitle}
        </span>
        <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold tracking-tight">
          {title}
        </h3>

        <ol className="mt-6 space-y-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "grid place-items-center size-10 rounded-xl shrink-0 shadow-soft",
                    accent
                      ? "bg-accent-500 text-accent-900"
                      : "bg-[var(--foreground)] text-[var(--background)]",
                  )}
                >
                  <step.icon className="size-5" />
                </div>
                {i < steps.length - 1 && (
                  <span className="w-px flex-1 bg-gradient-to-b from-[var(--border-strong)] to-transparent mt-2" />
                )}
              </div>
              <div className="pb-2">
                <p className="font-display font-semibold">{step.title}</p>
                <p className="mt-0.5 text-sm text-muted">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6">
          <Link
            href={cta.href}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-xl px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90",
              accent
                ? "bg-accent-500 text-accent-900"
                : "bg-[var(--foreground)] text-[var(--background)]",
            )}
          >
            {cta.label} <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
