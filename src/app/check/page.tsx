import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Users,
  Briefcase,
  Plus,
  Star,
} from "lucide-react";
import { CategoriesVariants } from "./_variants/categories";
import { TeachersVariants } from "./_variants/teachers";
import { HowItWorksVariants } from "./_variants/how-it-works";
import { VacanciesVariants } from "./_variants/vacancies";
import { TestimonialsVariants } from "./_variants/testimonials";
import { CTAVariants } from "./_variants/cta";

export default function CheckPage() {
  return (
    <div className="relative pb-10">
      <PageOrbs />

      <section className="container-page pt-8 pb-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/60 backdrop-blur-xl px-3 py-1 text-xs font-medium text-muted shadow-soft">
          <Sparkles className="size-3 text-accent-700" />
          Oyna effekti · section varyantlari
        </span>
        <h1 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight">
          Har section uchun 5 tadan varyant
        </h1>
        <p className="mt-2 text-muted text-sm max-w-2xl">
          Har section ustidagi tab tugmalarni bosib varyantni almashtiring.
          Yoqqanini ayting (masalan: &ldquo;Ustozlar — 02, CTA — 05&rdquo;) —
          butun saytga qo'llayman.
        </p>
      </section>

      <HeroGlass />
      <CategoriesVariants />
      <TeachersVariants />
      <HowItWorksVariants />
      <VacanciesVariants />
      <TestimonialsVariants />
      <CTAVariants />
    </div>
  );
}

function PageOrbs() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute left-[5%] top-[2%] size-[380px] rounded-full blur-3xl"
        style={{ background: "oklch(82% 0.12 78 / 0.35)" }}
      />
      <div
        className="absolute right-[5%] top-[10%] size-[320px] rounded-full blur-3xl"
        style={{ background: "oklch(78% 0.09 140 / 0.3)" }}
      />
      <div
        className="absolute left-[30%] top-[30%] size-[340px] rounded-full blur-3xl"
        style={{ background: "oklch(80% 0.1 260 / 0.22)" }}
      />
      <div
        className="absolute right-[15%] top-[55%] size-[300px] rounded-full blur-3xl"
        style={{ background: "oklch(80% 0.1 35 / 0.28)" }}
      />
      <div
        className="absolute left-[5%] top-[75%] size-[360px] rounded-full blur-3xl"
        style={{ background: "oklch(82% 0.1 200 / 0.2)" }}
      />
      <div
        className="absolute right-[20%] bottom-[2%] size-[320px] rounded-full blur-3xl"
        style={{ background: "oklch(82% 0.12 78 / 0.28)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border-strong)_1px,transparent_0)] [background-size:28px_28px] opacity-20" />
    </div>
  );
}

/* ============================================================
 * 01 · Hero — chosen (Glass / Oyna effekti)
 * ============================================================ */
function HeroGlass() {
  return (
    <section className="container-page pt-8 pb-6 relative">
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
            01 · Hero (tanlangan)
          </span>
          <h2 className="font-display text-xl font-bold tracking-tight">
            Oyna effekti
          </h2>
        </div>
      </div>
      <div className="rounded-3xl border border-white/60 bg-white/30 backdrop-blur-xl p-4 sm:p-6 shadow-elevated">
        <div className="relative py-8 sm:py-12">
          <div className="relative max-w-4xl mx-auto">
            <FloatingPill className="top-0 left-4 rotate-[-6deg]" delay="0s">
              Ingliz tili
            </FloatingPill>
            <FloatingPill className="top-4 right-4 rotate-[5deg]" delay="0.4s">
              Matematika
            </FloatingPill>
            <FloatingPill className="top-36 left-0 rotate-[8deg]" delay="0.8s">
              IT & Dasturlash
            </FloatingPill>
            <FloatingPill className="top-32 right-0 rotate-[-4deg]" delay="1.2s">
              Koreys tili
            </FloatingPill>

            <div className="relative text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/60 backdrop-blur-xl px-3 py-1 text-xs font-medium shadow-soft">
                <Sparkles className="size-3 text-accent-700" />
                Ta'lim HR · O'zbekiston
              </span>
              <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[1.02]">
                Ustoz ham, ish ham
                <br />
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-brand-900), var(--color-accent-700) 80%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Ustozlyda!
                </span>
              </h1>
              <p className="mt-5 text-muted text-[15px] sm:text-base max-w-xl mx-auto">
                Ustozlar va o'quv markazlari bir oynada uchrashadi. Bepul,
                shaffof, jonli.
              </p>

              <div className="mt-9 inline-flex flex-wrap justify-center items-center gap-2 p-2 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-float">
                <Link
                  href="/ustozlar"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--foreground)] text-[var(--background)] px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Users className="size-4" /> Ustoz topish
                </Link>
                <Link
                  href="/vakansiyalar"
                  className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-white/60 transition-colors"
                >
                  <Briefcase className="size-4" /> Ish o'rni
                </Link>
                <Link
                  href="/elon-joylash"
                  className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-white/60 transition-colors"
                >
                  <Plus className="size-4" /> E'lon
                </Link>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4 text-xs text-muted flex-wrap">
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  1 200+ ustoz
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-accent-500" />
                  320+ markaz
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="size-3 fill-accent-500 text-accent-500" />
                  4.8 reyting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingPill({
  children,
  className = "",
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: string;
}) {
  return (
    <>
      <style>{`
        @keyframes float-pill {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      <span
        className={`hidden sm:inline-flex absolute items-center gap-1.5 rounded-full border border-white/70 bg-white/70 backdrop-blur-xl px-3 py-1.5 text-xs font-medium shadow-elevated ${className}`}
        style={{
          animation: `float-pill 4.5s ease-in-out ${delay} infinite`,
        }}
      >
        <Sparkles className="size-3 text-accent-600" />
        {children}
      </span>
    </>
  );
}
