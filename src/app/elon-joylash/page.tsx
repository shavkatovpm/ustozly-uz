import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "E'lon joylash",
  description:
    "Ustoz sifatida rezyume joylang yoki o'quv markazi sifatida vakansiya e'lon qiling.",
};

export default function PostingChoicePage() {
  return (
    <>
      <PageHero
        eyebrow="E'lon joylash"
        title="Siz kim sifatida boshlamoqchisiz?"
        description="Ikki yo'nalish mavjud. Ustoz sifatida rezyume joylang yoki o'quv markazi sifatida vakansiya e'lon qiling. Bepul, 2 daqiqa."
      />
      <section className="container-page pb-16 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          <ChoiceCard
            href="/rezyume-joylash"
            icon={<GraduationCap className="size-7" />}
            role="Ustoz"
            title="Rezyume joylash"
            description="O'zingiz haqingizda — fanlar, tajriba, soatbay narx. O'quv markazlari ro'yxatingizda sizni ko'radi va bog'lanadi."
            bullets={[
              "Bepul profil va moderatsiya",
              "Fanlar, tillar va formatlar ro'yxati",
              "Soatbay yoki oylik narxni o'zingiz belgilaysiz",
              "Aloqa faqat siz tanlagan markazlar bilan",
            ]}
          />
          <ChoiceCard
            href="/vakansiya-joylash"
            icon={<Building2 className="size-7" />}
            role="O'quv markazi"
            title="Vakansiya joylash"
            description="Ish o'rnini batafsil tasvirlang. Ustozlar ariza yuboradi, siz eng mos nomzodni tanlaysiz."
            bullets={[
              "Vakansiya 1 ish kunida tasdiqlanadi",
              "Maosh, bandlik turi va format — shaffof",
              "Arizalar moderatsiyadan o'tadi",
              "Markaz tasdiqlangan belgi oladi",
            ]}
          />
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Shoshilmayapsizmi?{" "}
          <Link
            href="/haqida"
            className="text-[var(--foreground)] underline underline-offset-4 hover:text-accent-700"
          >
            Avval platforma haqida o'qing
          </Link>
          .
        </p>
      </section>
    </>
  );
}

function ChoiceCard({
  href,
  icon,
  role,
  title,
  description,
  bullets,
  variant = "default",
}: {
  href: string;
  icon: React.ReactNode;
  role: string;
  title: string;
  description: string;
  bullets: string[];
  variant?: "default" | "accent";
}) {
  const isAccent = variant === "accent";
  return (
    <Link
      href={href}
      className={[
        "group relative flex flex-col gap-5 sm:gap-6 rounded-3xl border p-5 sm:p-9 shadow-soft transition-all",
        "hover:-translate-y-1 hover:shadow-float focus-visible:-translate-y-1 focus-visible:shadow-float",
        isAccent
          ? "border-accent-300 bg-[color-mix(in_oklch,var(--color-accent-100)_55%,var(--surface))] hover:border-accent-500"
          : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between">
        <span
          className={[
            "grid place-items-center size-12 sm:size-14 rounded-2xl transition-transform group-hover:scale-110",
            isAccent
              ? "bg-accent-500 text-accent-900"
              : "bg-brand-900 text-white dark:bg-brand-100 dark:text-brand-900",
          ].join(" ")}
          aria-hidden="true"
        >
          {icon}
        </span>
        <span
          className={[
            "grid place-items-center size-10 rounded-full border transition-all group-hover:rotate-45 group-hover:scale-110",
            isAccent
              ? "border-accent-600 text-accent-800"
              : "border-[var(--border-strong)] text-[var(--foreground-muted)] group-hover:border-brand-800 group-hover:text-brand-900 dark:group-hover:border-brand-200 dark:group-hover:text-brand-100",
          ].join(" ")}
          aria-hidden="true"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>

      <div>
        <p
          className={[
            "text-[11px] font-medium uppercase tracking-wide",
            isAccent ? "text-accent-800" : "text-brand-700 dark:text-brand-300",
          ].join(" ")}
        >
          {role}
        </p>
        <h3 className="mt-1.5 font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
          {title}
        </h3>
        <p
          className={[
            "mt-2.5 text-[15px] leading-relaxed",
            isAccent ? "text-accent-900/80" : "text-muted",
          ].join(" ")}
        >
          {description}
        </p>
      </div>

      <ul className="space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2
              className={[
                "size-4 mt-0.5 shrink-0",
                isAccent
                  ? "text-accent-700"
                  : "text-brand-700 dark:text-brand-300",
              ].join(" ")}
            />
            <span className={isAccent ? "text-accent-900/90" : "text-[var(--foreground)]/85"}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
