import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-display font-bold text-lg tracking-tight",
        className,
      )}
      aria-label="Ustozly.uz bosh sahifasi"
    >
      <span className="grid place-items-center size-8 rounded-lg gradient-brand text-white shadow-soft">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-4.5"
          aria-hidden="true"
        >
          <path
            d="M4 7l8-4 8 4-8 4-8-4z"
            fill="currentColor"
          />
          <path
            d="M4 12l8 4 8-4M4 17l8 4 8-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>
        Ustozly
        <span className="text-accent-600 dark:text-accent-400">.uz</span>
      </span>
    </Link>
  );
}
