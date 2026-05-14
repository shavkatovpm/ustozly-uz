import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
        align === "center" && "items-center text-center md:flex-col",
        className,
      )}
    >
      <div className={cn("space-y-2", align === "center" && "max-w-2xl")}>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-brand-700 dark:text-brand-300">
            <span className="size-1.5 rounded-full bg-brand-500" />
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-muted max-w-2xl text-[15px] sm:text-base">
            {description}
          </p>
        )}
      </div>
      {ctaHref && ctaLabel && (
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300 hover:gap-2.5 transition-all"
        >
          {ctaLabel}
          <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}
