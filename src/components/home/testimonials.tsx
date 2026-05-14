import { Avatar } from "@/components/ui/avatar";

const items = [
  {
    quote:
      "Platforma orqali 2 haftada 5 ta IELTS o'qituvchisini ishga oldik. Hammasi tajribali va reytingi yuqori.",
    name: "Nilufar Abduvaliyeva",
    role: "HR · Cambridge Academy Tashkent",
  },
  {
    quote:
      "Rezyumemni joyladim va 3 kun ichida 4 ta taklif oldim. O'zimga mos markazni tanladim.",
    name: "Jahongir Raximov",
    role: "Matematika ustozi",
  },
  {
    quote:
      "Intervyular ko'p vaqtimizni olayotgan edi. Ustozly filtrlari bizga yaxshi nomzodlarni darhol ko'rsatadi.",
    name: "Aziz To'xtayev",
    role: "Direktor · Najot Ta'lim",
  },
];

export function Testimonials() {
  return (
    <section className="container-page pt-20 sm:pt-24 relative">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 sm:gap-8 lg:gap-12 items-start">
        <div
          className="font-display font-bold leading-[0.75] select-none -mb-4 lg:mb-0"
          style={{
            fontSize: "clamp(4rem, 13vw, 15rem)",
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
          <span className="text-xs font-medium uppercase tracking-wide text-brand-700">
            Fikr-mulohazalar
          </span>
          <blockquote className="font-display text-lg sm:text-2xl lg:text-[28px] leading-snug font-semibold max-w-3xl">
            {items[0].quote}
          </blockquote>
          <div className="flex items-center gap-3 pt-2 border-t border-white/60 max-w-md">
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
                className="rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl p-5 shadow-soft"
              >
                <blockquote className="text-[14px] italic leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2.5">
                  <Avatar name={t.name} size={32} />
                  <div>
                    <p className="text-xs font-semibold">{t.name}</p>
                    <p className="text-[11px] text-subtle">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
