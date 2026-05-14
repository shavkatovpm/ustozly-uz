import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div
        className="absolute inset-x-0 top-0 h-64 gradient-mesh opacity-50 pointer-events-none"
        aria-hidden="true"
      />
      <div className="container-page relative pt-10 pb-8 sm:pt-14 sm:pb-10">
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="text-xs font-medium uppercase tracking-wide text-brand-700 dark:text-brand-300">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-muted text-[15px] sm:text-base max-w-xl">
              {description}
            </p>
          )}
        </div>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
