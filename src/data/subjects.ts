import type { Subject } from "@/lib/types";

export const subjects: Subject[] = [
  { slug: "ingliz-tili", name: "Ingliz tili", icon: "Languages", color: "oklch(70% 0.16 240)" },
  { slug: "rus-tili", name: "Rus tili", icon: "BookA", color: "oklch(68% 0.17 25)" },
  { slug: "matematika", name: "Matematika", icon: "Sigma", color: "oklch(68% 0.17 170)" },
  { slug: "fizika", name: "Fizika", icon: "Atom", color: "oklch(70% 0.15 280)" },
  { slug: "kimyo", name: "Kimyo", icon: "FlaskConical", color: "oklch(72% 0.16 130)" },
  { slug: "biologiya", name: "Biologiya", icon: "Leaf", color: "oklch(68% 0.17 150)" },
  { slug: "informatika", name: "IT & Dasturlash", icon: "Code2", color: "oklch(66% 0.18 300)" },
  { slug: "iqtisod", name: "Iqtisod", icon: "TrendingUp", color: "oklch(70% 0.17 75)" },
  { slug: "ona-tili", name: "Ona tili & Adabiyot", icon: "BookOpen", color: "oklch(66% 0.17 10)" },
  { slug: "tarix", name: "Tarix", icon: "Landmark", color: "oklch(60% 0.12 55)" },
  { slug: "nemis-tili", name: "Nemis tili", icon: "Globe", color: "oklch(62% 0.14 50)" },
  { slug: "koreys-tili", name: "Koreys tili", icon: "Languages", color: "oklch(70% 0.16 340)" },
  { slug: "arab-tili", name: "Arab tili", icon: "BookMarked", color: "oklch(64% 0.14 95)" },
  { slug: "turk-tili", name: "Turk tili", icon: "Languages", color: "oklch(68% 0.17 15)" },
  { slug: "xitoy-tili", name: "Xitoy tili", icon: "BookA", color: "oklch(65% 0.17 5)" },
  { slug: "musiqa", name: "Musiqa", icon: "Music", color: "oklch(70% 0.16 310)" },
  { slug: "tasviriy", name: "Tasviriy san'at", icon: "Palette", color: "oklch(72% 0.16 40)" },
  { slug: "maktabgacha", name: "Maktabgacha ta'lim", icon: "Baby", color: "oklch(78% 0.12 85)" },
];

export const employmentTypes = [
  { value: "full-time", label: "To'liq stavka" },
  { value: "part-time", label: "Yarim stavka" },
  { value: "contract", label: "Shartnoma" },
  { value: "hourly", label: "Soatbay" },
] as const;

export const experienceLevels = [
  { value: "junior", label: "1 yilgacha" },
  { value: "mid", label: "1–3 yil" },
  { value: "senior", label: "3–5 yil" },
  { value: "expert", label: "5+ yil" },
] as const;

export const teachingFormats = [
  { value: "offline", label: "Oflayn" },
  { value: "online", label: "Onlayn" },
  { value: "hybrid", label: "Aralash" },
] as const;
