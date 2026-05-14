"use client";

import * as React from "react";
import Link from "next/link";
import {
  UserPlus,
  FileEdit,
  MessagesSquare,
  Building2,
  ListPlus,
  Handshake,
  ArrowRight,
  ChevronDown,
  Check,
  CircleCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { VariantFrame } from "./shared";
import { cn } from "@/lib/utils";

type Step = { icon: LucideIcon; title: string; desc: string };

const teacherSteps: Step[] = [
  {
    icon: UserPlus,
    title: "Profilingizni yarating",
    desc: "2 daqiqada ro'yxatdan o'ting.",
  },
  {
    icon: FileEdit,
    title: "Rezyume joylang",
    desc: "Fanlar, tajriba, narx — aniq.",
  },
  {
    icon: MessagesSquare,
    title: "Takliflarni qabul qiling",
    desc: "Markazlar siz bilan bog'lanadi.",
  },
];
const centerSteps: Step[] = [
  {
    icon: Building2,
    title: "Markazingizni tasdiqlang",
    desc: "Hujjatlar 1 ish kunida tekshiriladi.",
  },
  {
    icon: ListPlus,
    title: "Vakansiya joylang",
    desc: "Talablar va maosh shaffof.",
  },
  {
    icon: Handshake,
    title: "Eng yaxshisini tanlang",
    desc: "Arizalarni saralang, ishga oling.",
  },
];

export function HowItWorksVariants() {
  return (
    <VariantFrame
      section="04 · Qanday ishlaydi"
      titles={[
        "Ikki lane yonma-yon",
        "Taqqoslash jadvali",
        "Accordion expand",
        "Chat suhbat",
        "Progress stepper",
      ]}
    >
      {(active) => (
        <>
          {active === 0 && <V1Lanes />}
          {active === 1 && <V2Compare />}
          {active === 2 && <V3Accordion />}
          {active === 3 && <V4Chat />}
          {active === 4 && <V5Stepper />}
        </>
      )}
    </VariantFrame>
  );
}

/* V1 — Parallel lanes (baseline) */
function V1Lanes() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {[
        { label: "Ustozlar uchun", steps: teacherSteps, accent: false, href: "/rezyume-joylash", cta: "Rezyume joylash" },
        { label: "Markazlar uchun", steps: centerSteps, accent: true, href: "/vakansiya-joylash", cta: "Vakansiya joylash" },
      ].map((col) => (
        <div
          key={col.label}
          className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-6 shadow-soft"
        >
          <div
            className="absolute -top-16 -right-16 size-48 rounded-full blur-3xl opacity-60"
            style={{
              background: col.accent
                ? "oklch(82% 0.12 78 / 0.35)"
                : "oklch(82% 0.08 170 / 0.28)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h3 className="font-display text-lg font-bold mb-5">{col.label}</h3>
            <ol className="space-y-3.5">
              {col.steps.map((s, i) => (
                <li key={s.title} className="flex gap-3">
                  <span className="grid place-items-center size-9 rounded-xl border border-white/70 bg-white/60 backdrop-blur-xl font-mono text-xs font-semibold shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{s.title}</p>
                    <p className="mt-0.5 text-xs text-muted">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href={col.href}
              className={cn(
                "mt-5 inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium",
                col.accent
                  ? "bg-accent-500 text-accent-900"
                  : "bg-[var(--foreground)] text-[var(--background)]",
              )}
            >
              {col.cta} <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

/* V2 — Comparison table: Ustoz vs Markaz in 3 rows */
function V2Compare() {
  const rows = [0, 1, 2].map((i) => ({
    step: `Qadam ${i + 1}`,
    ustoz: teacherSteps[i],
    markaz: centerSteps[i],
  }));
  return (
    <div className="rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl overflow-hidden shadow-soft">
      <div className="grid grid-cols-[120px_1fr_1fr] border-b border-white/60 bg-white/30">
        <div className="px-4 py-3 text-[11px] uppercase tracking-wider text-subtle" />
        <div className="px-5 py-3 border-l border-white/60">
          <p className="font-display font-bold text-sm">Ustoz sifatida</p>
          <p className="text-[11px] text-subtle">Ish qidiruvchi yo'l</p>
        </div>
        <div className="px-5 py-3 border-l border-white/60">
          <p className="font-display font-bold text-sm">O'quv markazi sifatida</p>
          <p className="text-[11px] text-subtle">Yollov yo'li</p>
        </div>
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid grid-cols-[120px_1fr_1fr] border-b border-white/60 last:border-0"
        >
          <div className="px-4 py-5 bg-white/30 font-mono text-xs text-subtle font-semibold uppercase tracking-wider flex items-center">
            {r.step}
          </div>
          <div className="px-5 py-5 border-l border-white/60 flex items-start gap-3">
            <span className="grid place-items-center size-9 rounded-xl bg-[var(--foreground)] text-[var(--background)] shrink-0">
              <r.ustoz.icon className="size-4.5" />
            </span>
            <div>
              <p className="font-semibold text-sm">{r.ustoz.title}</p>
              <p className="mt-0.5 text-xs text-muted">{r.ustoz.desc}</p>
            </div>
          </div>
          <div className="px-5 py-5 border-l border-white/60 flex items-start gap-3">
            <span className="grid place-items-center size-9 rounded-xl bg-accent-500 text-accent-900 shrink-0">
              <r.markaz.icon className="size-4.5" />
            </span>
            <div>
              <p className="font-semibold text-sm">{r.markaz.title}</p>
              <p className="mt-0.5 text-xs text-muted">{r.markaz.desc}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-[120px_1fr_1fr] bg-white/30">
        <div className="px-4 py-3" />
        <div className="px-5 py-3 border-l border-white/60">
          <Link
            href="/rezyume-joylash"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] px-3 py-2 text-xs font-medium"
          >
            Rezyume joylash <ArrowRight className="size-3" />
          </Link>
        </div>
        <div className="px-5 py-3 border-l border-white/60">
          <Link
            href="/vakansiya-joylash"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent-500 text-accent-900 px-3 py-2 text-xs font-medium"
          >
            Vakansiya joylash <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* V3 — Accordion expand (FAQ-like) */
function V3Accordion() {
  const items = [
    {
      role: "Ustoz",
      step: "1-qadam: ro'yxatdan o'tish",
      short: "2 daqiqada — telefon raqam va asosiy ma'lumot.",
      details:
        "Ro'yxatdan o'tish uchun faqat telefon raqam va ism-familiya kifoya. Keyin profilingizni kengaytirishingiz mumkin — fanlar, tajriba, sertifikatlar.",
      accent: false,
    },
    {
      role: "Ustoz",
      step: "2-qadam: rezyumeni joylash",
      short: "Fanlaringiz, tajribangiz, narx — 5 daqiqa.",
      details:
        "Rezyume moderatsiya 1 ish kunida yakunlanadi. Tasdiqlangandan so'ng katalogda paydo bo'lasiz va o'quv markazlari sizni qidirsa, ko'rishadi.",
      accent: false,
    },
    {
      role: "Ustoz",
      step: "3-qadam: takliflarni qabul qilish",
      short: "Markazlar yozadi — siz tanlaysiz.",
      details:
        "O'quv markazlari profilingizga bosib, tushma oynada yozadi. Siz qabul qilish yoki rad etishingiz mumkin. Aloqa ma'lumotlari faqat taklif qabul qilingandan keyin almashinadi.",
      accent: false,
    },
    {
      role: "Markaz",
      step: "1-qadam: markazni tasdiqlash",
      short: "Hujjatlarni yuklang — tekshiruv 1 kun.",
      details:
        "Markaz guvohnomasi, litsenziya yoki ro'yxatdan o'tganlik hujjati kifoya. Tasdiqlangandan so'ng «verified» belgisi paydo bo'ladi.",
      accent: true,
    },
    {
      role: "Markaz",
      step: "2-qadam: vakansiya joylash",
      short: "Maosh va shartlar — shaffof.",
      details:
        "Vakansiya joylashda maosh diapazoni majburiy. Bu shaffoflikni ta'minlaydi va sifatli arizalarni jalb qiladi.",
      accent: true,
    },
    {
      role: "Markaz",
      step: "3-qadam: nomzodlarni tanlash",
      short: "Arizalarni saralang, ishga oling.",
      details:
        "Kelgan arizalarni reyting va tajriba bo'yicha saralash imkoniyati bor. Suhbatga chaqirishingiz va platforma orqali bog'lanishingiz mumkin.",
      accent: true,
    },
  ];
  return (
    <div className="rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl divide-y divide-white/60 overflow-hidden">
      {items.map((it, i) => (
        <details
          key={i}
          className={cn(
            "group",
            it.accent
              ? "open:bg-accent-50/50"
              : "open:bg-white/60",
          )}
          open={i === 0}
        >
          <summary className="list-none cursor-pointer flex items-center gap-4 px-5 py-4 hover:bg-white/50 transition-colors">
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-wider rounded-full px-2 py-0.5 shrink-0",
                it.accent
                  ? "bg-accent-500 text-accent-900"
                  : "bg-[var(--foreground)] text-[var(--background)]",
              )}
            >
              {it.role}
            </span>
            <span className="flex-1 font-display font-semibold text-sm">
              {it.step}
            </span>
            <span className="hidden sm:inline text-xs text-muted">
              {it.short}
            </span>
            <ChevronDown className="size-4 text-subtle transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-5 pt-0 pl-[92px] text-sm text-muted leading-relaxed">
            {it.details}
          </div>
        </details>
      ))}
    </div>
  );
}

/* V4 — Chat conversation illustrating flow */
function V4Chat() {
  const messages = [
    { side: "user", name: "Siz", text: "Men ustoz bo'lishni xohlayman, nima qilay?", role: "ustoz" as const },
    { side: "sys", name: "Ustozly", text: "2 daqiqada ro'yxatdan o'ting — faqat telefon raqam va ism kifoya.", role: "ustoz" as const },
    { side: "user", name: "Siz", text: "Yaxshi, keyin?", role: "ustoz" as const },
    { side: "sys", name: "Ustozly", text: "Rezyumengizni to'ldiring — fanlar, tajriba, soatbay narx. Moderatsiya 1 ish kunida yakunlanadi.", role: "ustoz" as const },
    { side: "user", name: "Siz", text: "So'ng markazlar qanday topadi?", role: "ustoz" as const },
    { side: "sys", name: "Ustozly", text: "Katalogimizga chiqasiz. O'quv markazlari profilingizga bosib, to'g'ridan-to'g'ri yozadi. Siz kimga ishlashni tanlaysiz.", role: "ustoz" as const },
  ];
  return (
    <div className="rounded-2xl border border-white/60 bg-white/45 backdrop-blur-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-white/60 flex items-center gap-2 bg-white/30">
        <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
        <p className="text-xs font-semibold">Ustozly yordamchi · online</p>
      </div>
      <div className="p-5 space-y-3 max-h-[420px] overflow-auto">
        {messages.map((m, i) => {
          const isUser = m.side === "user";
          return (
            <div
              key={i}
              className={cn("flex gap-2", isUser ? "justify-end" : "justify-start")}
            >
              {!isUser && (
                <span className="grid place-items-center size-8 rounded-full bg-[var(--foreground)] text-[var(--background)] shrink-0">
                  <Sparkles className="size-4" />
                </span>
              )}
              <div className={cn("max-w-[80%]", isUser && "text-right")}>
                <p className="text-[10px] text-subtle mb-0.5">{m.name}</p>
                <div
                  className={cn(
                    "inline-block rounded-2xl px-4 py-2.5 text-sm",
                    isUser
                      ? "bg-[var(--foreground)] text-[var(--background)] rounded-br-sm"
                      : "bg-white/70 border border-white/70 rounded-bl-sm",
                  )}
                >
                  {m.text}
                </div>
              </div>
              {isUser && (
                <span className="grid place-items-center size-8 rounded-full bg-accent-500 text-accent-900 shrink-0 font-bold text-xs">
                  S
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="px-5 py-4 border-t border-white/60 bg-white/30 flex items-center gap-2">
        <Link
          href="/rezyume-joylash"
          className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--foreground)] text-[var(--background)] px-4 py-2 text-xs font-medium"
        >
          Ustoz bo'lish <ArrowRight className="size-3" />
        </Link>
        <Link
          href="/vakansiya-joylash"
          className="inline-flex items-center gap-1.5 rounded-xl border border-white/70 bg-white/60 px-4 py-2 text-xs font-medium"
        >
          Markaz bo'lish <ArrowRight className="size-3" />
        </Link>
      </div>
    </div>
  );
}

/* V5 — Progress stepper with bar */
function V5Stepper() {
  const [step, setStep] = React.useState(0);
  const [role, setRole] = React.useState<"ustoz" | "markaz">("ustoz");
  const steps = role === "ustoz" ? teacherSteps : centerSteps;
  const active = steps[step];
  const progress = ((step + 1) / steps.length) * 100;
  return (
    <div className="rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-6 sm:p-8 shadow-soft">
      <div className="flex items-center justify-between mb-5">
        <div className="inline-flex p-1 rounded-full border border-white/70 bg-white/50">
          {(["ustoz", "markaz"] as const).map((r) => (
            <button
              key={r}
              onClick={() => {
                setRole(r);
                setStep(0);
              }}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all",
                role === r
                  ? "bg-[var(--foreground)] text-[var(--background)] shadow-soft"
                  : "text-muted hover:text-[var(--foreground)]",
              )}
            >
              {r === "ustoz" ? "Ustoz" : "Markaz"}
            </button>
          ))}
        </div>
        <span className="font-mono text-xs text-muted tabular-nums">
          {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative h-1.5 rounded-full bg-white/60 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(90deg, var(--color-brand-800), var(--color-accent-500))",
          }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        {steps.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setStep(i)}
            className="flex flex-col items-center flex-1 group"
          >
            <span
              className={cn(
                "grid place-items-center size-10 rounded-full border transition-all",
                i <= step
                  ? "bg-[var(--foreground)] border-[var(--foreground)] text-[var(--background)]"
                  : "bg-white/60 border-white/70 text-subtle",
              )}
            >
              {i < step ? (
                <Check className="size-4" />
              ) : (
                <s.icon className="size-4" />
              )}
            </span>
            <span
              className={cn(
                "mt-2 text-[11px] font-medium hidden sm:block text-center max-w-[100px] transition-colors",
                i === step ? "text-[var(--foreground)]" : "text-subtle",
              )}
            >
              {s.title}
            </span>
          </button>
        ))}
      </div>

      <div
        key={`${role}-${step}`}
        className="mt-8 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-xl p-6 animate-[fade-in_0.3s_ease-out]"
      >
        <span className="grid place-items-center size-12 rounded-2xl bg-white/60 border border-white/70 text-[var(--foreground)] mb-4">
          <active.icon className="size-6" />
        </span>
        <h3 className="font-display text-2xl font-bold">{active.title}</h3>
        <p className="mt-2 text-muted">{active.desc}</p>
        <div className="mt-5 flex items-center gap-2">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/70 bg-white/60 px-3 py-2 text-xs font-medium hover:bg-white/90 disabled:opacity-40 disabled:pointer-events-none"
          >
            Orqaga
          </button>
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] px-3 py-2 text-xs font-medium"
            >
              Keyingi <ArrowRight className="size-3" />
            </button>
          ) : (
            <Link
              href={role === "ustoz" ? "/rezyume-joylash" : "/vakansiya-joylash"}
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent-500 text-accent-900 px-3 py-2 text-xs font-semibold"
            >
              <CircleCheck className="size-3.5" /> Boshlash
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
