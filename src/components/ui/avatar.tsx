import * as React from "react";
import { cn } from "@/lib/utils";
import { initials } from "@/lib/utils";

export function Avatar({
  name,
  src,
  size = 40,
  className,
}: {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}) {
  const short = initials(name);
  const hue =
    name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  const bg = `oklch(86% 0.07 ${hue})`;
  const fg = `oklch(32% 0.08 ${hue})`;
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full font-display font-semibold select-none overflow-hidden shrink-0",
        className,
      )}
      style={{ width: size, height: size, backgroundColor: bg, color: fg }}
      aria-hidden="true"
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="size-full object-cover" />
      ) : (
        <span style={{ fontSize: size * 0.4 }}>{short}</span>
      )}
    </div>
  );
}
