"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  Building2,
  Ticket,
  Send,
  Receipt,
  Users,
  Clock,
  Plus,
} from "lucide-react";
import { VariantFrame } from "./shared";

export function CTAVariants() {
  return (
    <VariantFrame
      section="07 · Chaqiruv (CTA)"
      titles={[
        "Katta split",
        "Ticket / kupon",
        "Countdown urgency",
        "Receipt / chek",
        "Chat bubble",
      ]}
    >
      {(active) => (
        <>
          {active === 0 && <V1Split />}
          {active === 1 && <V2Ticket />}
          {active === 2 && <V3Countdown />}
          {active === 3 && <V4Receipt />}
          {active === 4 && <V5Chat />}
        </>
      )}
    </VariantFrame>
  );
}

function Orbs() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-16 size-72 rounded-full blur-3xl"
        style={{ background: "oklch(82% 0.12 78 / 0.45)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-16 size-72 rounded-full blur-3xl"
        style={{ background: "oklch(78% 0.1 200 / 0.35)" }}
      />
    </>
  );
}

/* V1 — Split (baseline) */
function V1Split() {
  return (
    <div className="relative rounded-3xl border border-white/70 bg-white/55 backdrop-blur-2xl p-8 sm:p-12 overflow-hidden shadow-elevated">
      <Orbs />
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] items-center gap-8">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/60 backdrop-blur px-2.5 py-0.5 text-xs font-medium">
            <Sparkles className="size-3 text-accent-700" />
            Bepul boshlang
          </span>
          <h3
            className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-900), var(--color-accent-800) 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Bugundan boshlang. Ta'limingizni o'sishga yo'naltiring.
          </h3>
          <p className="mt-3 text-muted text-sm max-w-xl">
            Ustoz bo'lsangiz — rezyume joylang. Markaz bo'lsangiz — vakansiya
            yuboring.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <Link
            href="/rezyume-joylash"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--foreground)] text-[var(--background)] px-5 py-3.5 text-sm font-semibold"
          >
            Ustoz sifatida boshlash <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href="/vakansiya-joylash"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white/60 backdrop-blur px-5 py-3.5 text-sm font-semibold hover:bg-white/80"
          >
            O'quv markazi sifatida <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* V2 — Ticket / coupon with tear */
function V2Ticket() {
  return (
    <div className="relative">
      <Orbs />
      <div className="relative max-w-3xl mx-auto">
        <div
          className="relative bg-white/70 backdrop-blur-2xl border border-white/70 shadow-float overflow-hidden flex flex-col md:flex-row"
          style={{
            borderRadius: "28px",
            backgroundImage:
              "radial-gradient(circle at 0 50%, transparent 12px, white 13px)",
          }}
        >
          <div className="flex-1 p-7 sm:p-10 relative">
            <div className="flex items-center gap-2">
              <Ticket className="size-5 text-accent-700" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-subtle">
                Bepul kirish · Ustozly Pass
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
              Ustoz ham, ish ham <br />
              Ustozlyda!
            </h3>
            <p className="mt-3 text-muted text-sm max-w-md">
              Komissiyasiz. Yashirin to'lovlarsiz. Bir marta — umrbod.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-100/70 text-accent-800 px-2.5 py-1 font-semibold">
                -100% komissiya
              </span>
              <span className="text-subtle">
                · Kod: <span className="font-mono font-bold text-[var(--foreground)]">USTOZLY2026</span>
              </span>
            </div>
          </div>
          {/* perforated separator */}
          <div
            className="hidden md:block w-px bg-[var(--border-strong)] my-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, var(--border-strong) 0 6px, transparent 6px 12px)",
              backgroundSize: "1px 100%",
              width: "1px",
            }}
          />
          <div className="md:w-[260px] p-7 sm:p-10 bg-white/40 backdrop-blur border-t md:border-t-0 md:border-l border-white/60 flex flex-col items-start md:items-center justify-center gap-4 text-center">
            <div
              className="font-mono text-xs uppercase tracking-[0.3em] text-subtle rotate-0 md:-rotate-90 whitespace-nowrap"
            >
              Bugun faollashadi
            </div>
            <Link
              href="/elon-joylash"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--foreground)] text-[var(--background)] px-5 py-3 text-sm font-semibold w-full justify-center"
            >
              Hozir olish <ArrowRight className="size-4" />
            </Link>
            <p className="text-[10px] text-subtle">Ticket #0001</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* V3 — Countdown urgency */
function V3Countdown() {
  const [time, setTime] = React.useState({ h: 23, m: 47, s: 12 });
  React.useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s -= 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          h = 23;
          m = 59;
          s = 59;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="relative rounded-3xl border border-white/70 bg-white/55 backdrop-blur-2xl p-8 sm:p-12 overflow-hidden shadow-elevated text-center">
      <Orbs />
      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          <Clock className="size-3.5" /> Bu hafta aksiya
        </span>
        <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Bepul premium profil — <br />
          ro'yxatdan o'tish uchun
        </h3>
        <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
          {[
            { v: pad(time.h), l: "soat" },
            { v: pad(time.m), l: "daq" },
            { v: pad(time.s), l: "son" },
          ].map((unit, i) => (
            <React.Fragment key={unit.l}>
              <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-4 shadow-float">
                <p
                  className="font-display font-bold leading-none tabular-nums"
                  style={{
                    fontSize: "clamp(2rem, 6vw, 4rem)",
                    background:
                      "linear-gradient(180deg, var(--color-brand-900), var(--color-accent-700))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {unit.v}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-subtle">
                  {unit.l}
                </p>
              </div>
              {i < 2 && (
                <span
                  className="font-display font-bold text-2xl text-subtle"
                  aria-hidden="true"
                >
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted max-w-md mx-auto">
          Shu tugagunga qadar ro'yxatdan o'tgan hamma premium belgi oladi.
        </p>
        <Link
          href="/elon-joylash"
          className="mt-6 inline-flex items-center gap-1.5 rounded-2xl bg-[var(--foreground)] text-[var(--background)] px-6 py-3.5 text-sm font-semibold"
        >
          Hozir ro'yxatdan o'tish <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

/* V4 — Receipt / fiscal check style */
function V4Receipt() {
  return (
    <div className="relative">
      <Orbs />
      <div className="relative max-w-md mx-auto">
        <div
          className="bg-white/80 backdrop-blur-2xl border border-white/70 shadow-float p-6 font-mono text-sm"
          style={{
            borderRadius: "18px",
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0 40px, color-mix(in oklch, var(--border) 40%, transparent) 40px 41px)",
          }}
        >
          <div className="text-center border-b-2 border-dashed border-[var(--border-strong)] pb-3">
            <p className="font-display font-bold text-base tracking-wider">
              USTOZLY.UZ
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-subtle mt-1">
              E'lon / ro'yxat
            </p>
            <p className="text-[10px] text-subtle mt-1">
              Nusxa #0001 · Toshkent
            </p>
          </div>
          <dl className="py-3 space-y-1.5 text-xs border-b-2 border-dashed border-[var(--border-strong)]">
            <div className="flex justify-between">
              <dt>Ro'yxatdan o'tish</dt>
              <dd className="font-bold">BEPUL</dd>
            </div>
            <div className="flex justify-between">
              <dt>Moderatsiya</dt>
              <dd className="font-bold">BEPUL</dd>
            </div>
            <div className="flex justify-between">
              <dt>Ariza yuborish</dt>
              <dd className="font-bold">BEPUL</dd>
            </div>
            <div className="flex justify-between">
              <dt>Komissiya</dt>
              <dd className="font-bold">0%</dd>
            </div>
          </dl>
          <div className="py-3 text-center">
            <p className="text-xs text-subtle">JAMI TO'LOV</p>
            <p
              className="font-display font-bold text-3xl mt-1"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand-900), var(--color-accent-700))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              0 so'm
            </p>
          </div>
          <div className="border-t-2 border-dashed border-[var(--border-strong)] pt-3 space-y-2">
            <Link
              href="/rezyume-joylash"
              className="flex items-center justify-between rounded-lg border border-[var(--border-strong)] px-3 py-2 hover:bg-white transition-colors"
            >
              <span className="text-xs font-bold">→ USTOZ BO'LISH</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/vakansiya-joylash"
              className="flex items-center justify-between rounded-lg bg-[var(--foreground)] text-[var(--background)] px-3 py-2"
            >
              <span className="text-xs font-bold">→ MARKAZ BO'LISH</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <p className="mt-4 text-center text-[9px] text-subtle uppercase tracking-widest">
            Rahmat · Xush kelibsiz
          </p>
        </div>
      </div>
    </div>
  );
}

/* V5 — Chat bubble conversation */
function V5Chat() {
  return (
    <div className="relative">
      <Orbs />
      <div className="relative rounded-3xl border border-white/70 bg-white/55 backdrop-blur-2xl p-6 sm:p-10 shadow-elevated max-w-3xl mx-auto">
        <div className="flex flex-col gap-3">
          {/* Incoming */}
          <div className="flex gap-2 max-w-[80%]">
            <span className="grid place-items-center size-8 rounded-full bg-[var(--foreground)] text-[var(--background)] shrink-0">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-[10px] text-subtle mb-0.5">Ustozly</p>
              <div className="inline-block rounded-2xl rounded-bl-sm bg-white/80 border border-white/70 px-4 py-2.5 text-sm shadow-soft">
                Salom! Siz kimsiz?
              </div>
            </div>
          </div>
          {/* Outgoing */}
          <div className="flex gap-2 max-w-[80%] self-end flex-row-reverse">
            <span className="grid place-items-center size-8 rounded-full bg-accent-500 text-accent-900 shrink-0 font-bold text-xs">
              S
            </span>
            <div className="text-right">
              <p className="text-[10px] text-subtle mb-0.5">Siz</p>
              <div className="inline-block rounded-2xl rounded-br-sm bg-[var(--foreground)] text-[var(--background)] px-4 py-2.5 text-sm shadow-soft">
                Ustozman. Ish qidiryapman.
              </div>
            </div>
          </div>
          {/* Incoming */}
          <div className="flex gap-2 max-w-[80%]">
            <span className="grid place-items-center size-8 rounded-full bg-[var(--foreground)] text-[var(--background)] shrink-0">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-[10px] text-subtle mb-0.5">Ustozly</p>
              <div className="inline-block rounded-2xl rounded-bl-sm bg-white/80 border border-white/70 px-4 py-2.5 text-sm shadow-soft">
                Ajoyib! Rezyume joylash uchun bitta bosish:
              </div>
              <div className="mt-2 flex gap-2">
                <Link
                  href="/rezyume-joylash"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--foreground)] text-[var(--background)] px-4 py-2 text-xs font-medium"
                >
                  <GraduationCap className="size-3.5" /> Rezyume joylash <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="my-2 flex items-center gap-2 text-xs text-subtle">
            <span className="h-px flex-1 bg-[var(--border)]" />
            <span>yoki</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
          {/* Incoming */}
          <div className="flex gap-2 max-w-[80%]">
            <span className="grid place-items-center size-8 rounded-full bg-[var(--foreground)] text-[var(--background)] shrink-0">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-[10px] text-subtle mb-0.5">Ustozly</p>
              <div className="inline-block rounded-2xl rounded-bl-sm bg-white/80 border border-white/70 px-4 py-2.5 text-sm shadow-soft">
                Yoki o'quv markazingiz uchun ustoz qidiryapsizmi?
              </div>
              <div className="mt-2 flex gap-2">
                <Link
                  href="/vakansiya-joylash"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-accent-500 text-accent-900 px-4 py-2 text-xs font-medium"
                >
                  <Building2 className="size-3.5" /> Vakansiya joylash <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
          {/* Typing indicator */}
          <div className="flex gap-2 items-center text-xs text-subtle mt-2">
            <Users className="size-3.5" />
            <span>320+ markaz va 1 200+ ustoz jamoada</span>
          </div>
        </div>
      </div>
    </div>
  );
}
