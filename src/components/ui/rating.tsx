import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  value,
  reviewsCount,
  className,
  size = 14,
}: {
  value: number;
  reviewsCount?: number;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium",
        className,
      )}
      aria-label={`Reyting ${value.toFixed(1)}${
        reviewsCount !== undefined ? `, ${reviewsCount} ta sharh` : ""
      }`}
    >
      <Star
        className="fill-accent-500 text-accent-500"
        style={{ width: size, height: size }}
      />
      <span>{value.toFixed(1)}</span>
      {reviewsCount !== undefined && (
        <span className="text-[var(--foreground-subtle)] font-normal">
          ({reviewsCount})
        </span>
      )}
    </span>
  );
}
