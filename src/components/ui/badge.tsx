import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors [&_svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--surface-muted)] text-[var(--foreground)] border border-[var(--border)]",
        brand:
          "bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200",
        accent:
          "bg-accent-100 text-accent-800 dark:bg-accent-900/40 dark:text-accent-200",
        success:
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
        warning:
          "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
        destructive:
          "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200",
        outline:
          "border border-[var(--border-strong)] text-[var(--foreground-muted)]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
