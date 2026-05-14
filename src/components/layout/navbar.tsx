"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Plus, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/ustozlar", label: "Ustozlar" },
  { href: "/vakansiyalar", label: "Vakansiyalar" },
  { href: "/haqida", label: "Loyiha haqida" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        scrolled
          ? "border-b border-[var(--border)] bg-[color-mix(in_oklch,var(--background)_85%,transparent)] backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center gap-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-1 ml-6" aria-label="Asosiy">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  active
                    ? "text-brand-700 dark:text-brand-300"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-muted)]",
                )}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500 dark:bg-brand-400"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <Link href="/ustozlar" aria-label="Ustozlarni qidirish">
              <Search className="size-4" />
            </Link>
          </Button>
          <div className="hidden sm:flex items-center gap-2 ml-1">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/rezyume-joylash">Rezyume joylash</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/vakansiya-joylash">
                <Plus className="size-4" />
                Vakansiya joylash
              </Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] animate-[slide-up_0.2s_ease-out]">
          <nav className="container-page py-3 flex flex-col gap-1" aria-label="Mobil menyu">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium",
                    active
                      ? "bg-brand-50 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200"
                      : "text-[var(--foreground-muted)] hover:bg-[var(--surface-muted)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/rezyume-joylash">Rezyume</Link>
              </Button>
              <Button className="flex-1" asChild>
                <Link href="/vakansiya-joylash">Vakansiya</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
