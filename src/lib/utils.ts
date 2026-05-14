import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSalary(min?: number, max?: number, currency = "so'm") {
  if (!min && !max) return "Kelishiladi";
  const fmt = (n: number) =>
    new Intl.NumberFormat("uz-UZ", { maximumFractionDigits: 0 }).format(n);
  if (min && max && min !== max) return `${fmt(min)} – ${fmt(max)} ${currency}`;
  return `${fmt(max ?? min!)} ${currency}`;
}

const REFERENCE_NOW = new Date("2026-04-24T12:00:00Z").getTime();

export function formatRelativeDate(iso: string) {
  const d = new Date(iso);
  const diff = (REFERENCE_NOW - d.getTime()) / 1000;
  if (diff < 60) return "hozirgina";
  if (diff < 3600) return `${Math.floor(diff / 60)} daqiqa oldin`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} soat oldin`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} kun oldin`;
  return new Intl.DateTimeFormat("uz-UZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function pluralUz(
  count: number,
  forms: { one: string; few?: string; many: string },
) {
  if (count === 1) return `${count} ${forms.one}`;
  return `${count} ${forms.many}`;
}
