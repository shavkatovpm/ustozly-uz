import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-11 w-full rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-2 text-sm shadow-soft/40 transition-colors",
      "file:border-0 file:bg-transparent file:text-sm file:font-medium",
      "placeholder:text-[var(--foreground-subtle)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:border-[var(--ring)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[120px] w-full rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-3 text-sm shadow-soft/40 transition-colors",
      "placeholder:text-[var(--foreground-subtle)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:border-[var(--ring)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "resize-y",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium text-[var(--foreground)] inline-flex items-center gap-1.5",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";

export function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      {label ? (
        <Label>
          {label}
          {required && <span className="text-[var(--destructive)]">*</span>}
        </Label>
      ) : null}
      {children}
      {error ? (
        <p className="text-xs text-[var(--destructive)]">{error}</p>
      ) : hint ? (
        <p className="text-xs text-[var(--foreground-subtle)]">{hint}</p>
      ) : null}
    </div>
  );
}
