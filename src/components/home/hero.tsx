import Link from "next/link";
import { Sparkles, Users, Briefcase, Plus, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative">
      <div className="container-page relative pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
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
              Ustozlyda!
            </h1>
            <p className="mt-5 text-muted text-[15px] sm:text-base max-w-xl mx-auto">
              O'quv markazlari ishonchli ustozlarni topadi. Ustozlar esa o'ziga
              mos ish o'rnini tanlaydi.
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
                <Plus className="size-4" /> E'lon joylash
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
