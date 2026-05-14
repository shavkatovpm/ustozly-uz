"use client";

import * as React from "react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Repeat,
  Play,
  MoreHorizontal,
  CheckCircle2,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { VariantFrame } from "./shared";
import { cn } from "@/lib/utils";

const items = [
  {
    quote:
      "Platforma orqali 2 haftada 5 ta IELTS o'qituvchisini ishga oldik. Hammasi tajribali va reytingi yuqori.",
    name: "Nilufar Abduvaliyeva",
    handle: "@nilufar_hr",
    role: "HR · Cambridge Academy Tashkent",
    company: "Cambridge Academy",
    video: "2:14",
  },
  {
    quote:
      "Rezyumemni joyladim va 3 kun ichida 4 ta taklif oldim. O'zimga mos markazni tanladim.",
    name: "Jahongir Raximov",
    handle: "@jahongir_math",
    role: "Matematika ustozi",
    company: "Freelancer",
    video: "1:48",
  },
  {
    quote:
      "Intervyular ko'p vaqtimizni olayotgan edi. Ustozly filtrlari bizga yaxshi nomzodlarni darhol ko'rsatadi.",
    name: "Aziz To'xtayev",
    handle: "@aziz_najot",
    role: "Direktor · Najot Ta'lim",
    company: "Najot Ta'lim",
    video: "3:02",
  },
  {
    quote:
      "Eng katta afzalligi — reyting va sharhlar shaffofligi. Odamni 'pashsha kabi' tekshirish kerak emas.",
    name: "Kamila Yusupova",
    handle: "@kamila_dev",
    role: "Frontend ustozi",
    company: "Freelancer",
    video: "2:27",
  },
  {
    quote:
      "Samarqandda tibbiyot yo'nalishi uchun kimyo ustozi topa olmay yurar edik. Ustozlyda 3 nafarni topdik.",
    name: "Bobur Tursunov",
    handle: "@bobur_med",
    role: "CEO · MedStart",
    company: "MedStart Academy",
    video: "4:15",
  },
  {
    quote:
      "Bir platformada ustoz ham, vakansiya ham. Ortiqcha reklama yo'q.",
    name: "Laylo Norova",
    handle: "@laylo_deutsch",
    role: "Nemis tili mutaxassisi",
    company: "Freelancer",
    video: "1:32",
  },
];

export function TestimonialsVariants() {
  return (
    <VariantFrame
      section="06 · Fikr-mulohazalar"
      titles={[
        "3 ta yonma-yon",
        "Twitter thread",
        "Pullquote editorial",
        "Video thumbnails",
        "Rotatsiya + dots",
      ]}
    >
      {(active) => (
        <>
          {active === 0 && <V1Three />}
          {active === 1 && <V2Twitter />}
          {active === 2 && <V3Pullquote />}
          {active === 3 && <V4Video />}
          {active === 4 && <V5Rotate />}
        </>
      )}
    </VariantFrame>
  );
}

/* V1 — 3 cards (baseline) */
function V1Three() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {items.slice(0, 3).map((t) => (
        <figure
          key={t.name}
          className="relative rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-5 shadow-soft"
        >
          <Quote
            className="absolute top-4 right-4 size-6 text-accent-500/60"
            aria-hidden="true"
          />
          <blockquote className="text-sm leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            <Avatar name={t.name} size={36} />
            <div>
              <p className="text-xs font-semibold">{t.name}</p>
              <p className="text-[10px] text-subtle">{t.role}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* V2 — Twitter-thread style */
function V2Twitter() {
  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {items.slice(0, 4).map((t, i) => (
        <article
          key={t.name}
          className="relative rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-5 shadow-soft"
        >
          {i < 3 && (
            <span
              className="absolute left-[2rem] top-[3.7rem] bottom-[-0.75rem] w-px bg-[var(--border-strong)]"
              aria-hidden="true"
            />
          )}
          <div className="flex gap-3">
            <div className="relative">
              <Avatar name={t.name} size={40} />
              <span
                className="absolute -right-0.5 -bottom-0.5 grid place-items-center size-4 rounded-full bg-brand-700 text-white"
                title="Tasdiqlangan"
              >
                <CheckCircle2 className="size-3" />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-subtle">{t.handle}</p>
                <span className="text-xs text-subtle">·</span>
                <p className="text-xs text-subtle">{t.role}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-3 flex items-center gap-6 text-xs text-subtle">
                <button className="inline-flex items-center gap-1.5 hover:text-accent-700">
                  <MessageCircle className="size-3.5" /> {12 + i * 3}
                </button>
                <button className="inline-flex items-center gap-1.5 hover:text-emerald-700">
                  <Repeat className="size-3.5" /> {5 + i * 2}
                </button>
                <button className="inline-flex items-center gap-1.5 hover:text-red-600">
                  <Heart className="size-3.5" /> {28 + i * 7}
                </button>
                <button className="ml-auto hover:text-[var(--foreground)]">
                  <MoreHorizontal className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* V3 — Pullquote editorial: huge letter Q + running body */
function V3Pullquote() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 py-4">
      <div
        className="font-display font-bold leading-[0.75] select-none"
        style={{
          fontSize: "clamp(6rem, 12vw, 14rem)",
          background:
            "linear-gradient(135deg, var(--color-brand-800), var(--color-accent-700))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <div className="space-y-6">
        <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl leading-snug font-semibold max-w-3xl">
          {items[0].quote}
        </blockquote>
        <div className="flex items-center gap-3 pt-2 border-t border-white/60">
          <Avatar name={items[0].name} size={44} />
          <div>
            <p className="font-semibold text-sm">{items[0].name}</p>
            <p className="text-xs text-subtle">{items[0].role}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          {items.slice(1, 3).map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/60 bg-white/45 backdrop-blur-xl p-4 shadow-soft"
            >
              <blockquote className="text-[13px] italic leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[11px] text-subtle">
                — {t.name}, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

/* V4 — Video testimonial thumbnails */
function V4Video() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.slice(0, 6).map((t, i) => {
        const hue = (i * 60) % 360;
        return (
          <figure
            key={t.name}
            className="group rounded-3xl border border-white/60 bg-white/50 backdrop-blur-xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow"
          >
            <div
              className="relative aspect-[4/3] overflow-hidden"
              style={{
                background: `linear-gradient(135deg, color-mix(in oklch, oklch(75% 0.1 ${hue}) 50%, white), color-mix(in oklch, oklch(55% 0.12 ${hue}) 40%, white))`,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:14px_14px] opacity-25" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Avatar
                  name={t.name}
                  size={80}
                  className="ring-4 ring-white/50 shadow-float"
                />
              </div>
              <button
                className="absolute inset-0 grid place-items-center bg-black/0 hover:bg-black/10 transition-colors"
                aria-label={`${t.name} videosini ijro etish`}
              >
                <span className="grid place-items-center size-14 rounded-full bg-white/90 backdrop-blur text-[var(--foreground)] shadow-float group-hover:scale-110 transition-transform">
                  <Play className="size-6 translate-x-0.5 fill-current" />
                </span>
              </button>
              <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-black/60 text-white rounded px-1.5 py-0.5 tabular-nums">
                {t.video}
              </span>
            </div>
            <figcaption className="p-4">
              <p className="font-display font-bold text-sm line-clamp-1">
                {t.name}
              </p>
              <p className="text-[11px] text-subtle">{t.role}</p>
              <p className="mt-2 text-xs text-muted line-clamp-2">
                &ldquo;{t.quote}&rdquo;
              </p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

/* V5 — Rotating + big dots */
function V5Rotate() {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = items[idx];
  return (
    <div className="rounded-3xl border border-white/60 bg-white/55 backdrop-blur-xl p-8 sm:p-12 shadow-elevated max-w-3xl mx-auto relative overflow-hidden">
      <div
        className="absolute -top-24 -right-24 size-60 rounded-full blur-3xl"
        style={{ background: "oklch(82% 0.12 78 / 0.35)" }}
        aria-hidden="true"
      />
      <div className="relative text-center">
        <div className="inline-flex items-center gap-1 text-accent-600 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-accent-500 text-accent-500" />
          ))}
        </div>
        <blockquote
          key={idx}
          className="mt-3 font-display font-semibold text-lg sm:text-2xl leading-snug animate-[fade-in_0.4s_ease-out]"
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-center gap-3">
          <Avatar name={t.name} size={44} />
          <div className="text-left">
            <p className="font-semibold text-sm">{t.name}</p>
            <p className="text-xs text-subtle">{t.role}</p>
          </div>
        </figcaption>
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
            aria-label="Oldingi"
            className="grid place-items-center size-9 rounded-full border border-white/70 bg-white/60 backdrop-blur hover:bg-white/90 transition-colors"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`${i + 1}-sharh`}
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
            onClick={() => setIdx((i) => (i + 1) % items.length)}
            aria-label="Keyingi"
            className="grid place-items-center size-9 rounded-full border border-white/70 bg-white/60 backdrop-blur hover:bg-white/90 transition-colors"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
