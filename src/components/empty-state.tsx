import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EmptyState({
  title = "Natija topilmadi",
  description = "Filtrlaringizni o'zgartirib ko'ring yoki boshqa kalit so'z kiriting.",
  ctaHref,
  ctaLabel,
}: {
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="text-center py-20 px-6 rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--surface-muted)]/40">
      <div className="mx-auto grid place-items-center size-14 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground-muted)]">
        <SearchX className="size-6" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted max-w-md mx-auto">{description}</p>
      {ctaHref && ctaLabel && (
        <Button asChild className="mt-5">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      )}
    </div>
  );
}
