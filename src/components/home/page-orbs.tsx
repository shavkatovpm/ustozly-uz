export function PageOrbs() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute left-[5%] top-[2%] size-[420px] rounded-full blur-3xl"
        style={{ background: "oklch(82% 0.12 78 / 0.32)" }}
      />
      <div
        className="absolute right-[5%] top-[10%] size-[340px] rounded-full blur-3xl"
        style={{ background: "oklch(78% 0.09 140 / 0.28)" }}
      />
      <div
        className="absolute left-[30%] top-[30%] size-[340px] rounded-full blur-3xl"
        style={{ background: "oklch(80% 0.1 260 / 0.2)" }}
      />
      <div
        className="absolute right-[15%] top-[55%] size-[320px] rounded-full blur-3xl"
        style={{ background: "oklch(80% 0.1 35 / 0.26)" }}
      />
      <div
        className="absolute left-[5%] top-[75%] size-[360px] rounded-full blur-3xl"
        style={{ background: "oklch(82% 0.1 200 / 0.18)" }}
      />
      <div
        className="absolute right-[20%] bottom-[2%] size-[320px] rounded-full blur-3xl"
        style={{ background: "oklch(82% 0.12 78 / 0.26)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border-strong)_1px,transparent_0)] [background-size:28px_28px] opacity-20" />
    </div>
  );
}
