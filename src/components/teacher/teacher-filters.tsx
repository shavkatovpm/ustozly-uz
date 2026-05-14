"use client";

import * as React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { subjects, teachingFormats, experienceLevels } from "@/data/subjects";
import { regions } from "@/data/regions";
import { cn } from "@/lib/utils";

export function TeacherFilters({ total }: { total: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const [open, setOpen] = React.useState(false);

  const [q, setQ] = React.useState(sp.get("q") ?? "");
  const subject = sp.get("subject") ?? "";
  const region = sp.get("region") ?? "";
  const format = sp.get("format") ?? "";
  const level = sp.get("level") ?? "";
  const sort = sp.get("sort") ?? "top";

  React.useEffect(() => {
    setQ(sp.get("q") ?? "");
  }, [sp]);

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(sp);
    if (value && value !== "all") params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}${params.toString() ? `?${params}` : ""}`, {
      scroll: false,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setParam("q", q);
  };

  const activeCount = [subject, region, format, level].filter(Boolean).length;

  const clearAll = () => {
    setQ("");
    router.push(pathname, { scroll: false });
  };

  return (
    <div className="space-y-3">
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row gap-2"
        role="search"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[var(--foreground-subtle)]" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ism, yo'nalish yoki kalit so'z bilan qidirish"
            className="pl-10"
            aria-label="Qidirish"
          />
        </div>
        <div className="flex gap-2">
          <Button type="submit">Qidirish</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="teacher-filter-panel"
            className="relative"
          >
            <SlidersHorizontal className="size-4" />
            Filtrlar
            {activeCount > 0 && (
              <span className="absolute -top-1 -right-1 grid place-items-center size-4 rounded-full bg-brand-600 text-white text-[10px] font-semibold">
                {activeCount}
              </span>
            )}
          </Button>
        </div>
      </form>

      <div
        id="teacher-filter-panel"
        className={cn(
          "grid gap-2 overflow-hidden transition-all duration-200",
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none",
        )}
      >
        <div className="min-h-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]">
            <FilterSelect
              label="Fan"
              value={subject}
              onChange={(v) => setParam("subject", v)}
              options={[
                { value: "all", label: "Barchasi" },
                ...subjects.map((s) => ({ value: s.slug, label: s.name })),
              ]}
            />
            <FilterSelect
              label="Viloyat"
              value={region}
              onChange={(v) => setParam("region", v)}
              options={[
                { value: "all", label: "Barchasi" },
                ...regions.map((r) => ({ value: r.slug, label: r.name })),
              ]}
            />
            <FilterSelect
              label="Format"
              value={format}
              onChange={(v) => setParam("format", v)}
              options={[
                { value: "all", label: "Barchasi" },
                ...teachingFormats.map((f) => ({ value: f.value, label: f.label })),
              ]}
            />
            <FilterSelect
              label="Tajriba"
              value={level}
              onChange={(v) => setParam("level", v)}
              options={[
                { value: "all", label: "Barchasi" },
                ...experienceLevels.map((e) => ({ value: e.value, label: e.label })),
              ]}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-sm text-muted">
          <span className="font-medium text-[var(--foreground)]">{total}</span>{" "}
          ta natija
          {activeCount > 0 && (
            <button
              onClick={clearAll}
              className="ml-3 inline-flex items-center gap-1 text-xs text-brand-700 dark:text-brand-300 hover:underline"
            >
              <X className="size-3" /> Tozalash
            </button>
          )}
        </p>
        <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
          <span className="text-subtle shrink-0">Saralash:</span>
          <Select value={sort} onValueChange={(v) => setParam("sort", v)}>
            <SelectTrigger className="h-9 w-full sm:w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top">Eng yaxshi</SelectItem>
              <SelectItem value="rating">Reyting bo'yicha</SelectItem>
              <SelectItem value="recent">Yangilangan vaqt</SelectItem>
              <SelectItem value="price-asc">Arzon → qimmat</SelectItem>
              <SelectItem value="price-desc">Qimmat → arzon</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-subtle mb-1">
        {label}
      </p>
      <Select value={value || "all"} onValueChange={onChange}>
        <SelectTrigger className="h-10 bg-[var(--surface)]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
