import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function FormStepper({
  steps,
  current,
}: {
  steps: { label: string; hint?: string }[];
  current: number;
}) {
  return (
    <ol className="flex items-start gap-2 sm:gap-4" aria-label="Bosqichlar">
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={i} className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "grid place-items-center size-7 rounded-full text-xs font-semibold shrink-0 transition-colors",
                  done
                    ? "bg-brand-600 text-white"
                    : active
                      ? "bg-brand-100 text-brand-800 ring-2 ring-brand-500 dark:bg-brand-900/40 dark:text-brand-200"
                      : "bg-[var(--surface-muted)] text-[var(--foreground-subtle)]",
                )}
                aria-current={active ? "step" : undefined}
              >
                {done ? <Check className="size-3.5" /> : i + 1}
              </span>
              <span
                className={cn(
                  "h-px flex-1 transition-colors",
                  done ? "bg-brand-500" : "bg-[var(--border)]",
                  i === steps.length - 1 && "hidden",
                )}
              />
            </div>
            <div className="mt-2">
              <p
                className={cn(
                  "text-xs sm:text-sm font-medium truncate",
                  active ? "text-[var(--foreground)]" : "text-muted",
                )}
              >
                {s.label}
              </p>
              {s.hint && (
                <p className="text-[11px] text-subtle truncate hidden sm:block">
                  {s.hint}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
