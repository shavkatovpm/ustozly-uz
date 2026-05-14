"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Field, Label } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormStepper } from "@/components/form-stepper";
import { subjects, teachingFormats, experienceLevels } from "@/data/subjects";
import { regions } from "@/data/regions";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Asosiy ma'lumot", hint: "Ism, aloqa" },
  { label: "Kasbiy profil", hint: "Fanlar, tajriba" },
  { label: "Shart va narx", hint: "Format, maosh" },
  { label: "Tekshirish", hint: "Yuborish" },
];

export default function ResumeFormPage() {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    region: "",
    title: "",
    subjects: [] as string[],
    experience: "",
    format: "",
    hourlyRate: "",
    bio: "",
  });

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleSubject = (slug: string) => {
    setForm((f) => ({
      ...f,
      subjects: f.subjects.includes(slug)
        ? f.subjects.filter((x) => x !== slug)
        : [...f.subjects, slug],
    }));
  };

  const canNext = React.useMemo(() => {
    if (step === 0) return form.name && form.phone && form.region;
    if (step === 1) return form.title && form.subjects.length && form.experience;
    if (step === 2) return form.format;
    return true;
  }, [step, form]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container-page py-20">
        <div className="max-w-xl mx-auto text-center">
          <div className="mx-auto grid place-items-center size-16 rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            <CheckCircle2 className="size-8" />
          </div>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Rezyumengiz qabul qilindi!
          </h1>
          <p className="mt-3 text-muted">
            Moderatsiya 1 ish kuni ichida yakunlanadi. Tasdiqlangandan so'ng
            profilingiz katalogda ko'rinadi va o'quv markazlari sizga yozishi
            mumkin.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-2">
            <Button asChild>
              <Link href="/ustozlar">Ustozlar ro'yxatini ko'rish</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Bosh sahifa</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-10 lg:py-14 max-w-3xl">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-[var(--foreground)] transition-colors"
      >
        <ArrowLeft className="size-4" /> Bosh sahifa
      </Link>

      <div className="mt-4 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 px-2.5 py-1 text-xs font-medium">
          <Sparkles className="size-3" />
          Ustoz bo'lish
        </span>
      </div>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
        Rezyume joylashtirish
      </h1>
      <p className="mt-2 text-muted">
        Ma'lumotlaringizni to'ldiring — o'quv markazlari sizni osonroq topsin.
      </p>

      <div className="mt-8">
        <FormStepper steps={steps} current={step} />
      </div>

      <form
        onSubmit={submit}
        className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-soft"
      >
        <div className={cn(step === 0 ? "block" : "hidden", "space-y-5")}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Ism va familiya" required>
              <Input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Dilnoza Karimova"
                required
              />
            </Field>
            <Field label="Telefon raqam" required hint="+998 XX XXX XX XX">
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+998 90 123 45 67"
                required
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Email (ixtiyoriy)">
              <Input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="siz@mail.uz"
              />
            </Field>
            <Field label="Viloyat" required>
              <Select value={form.region} onValueChange={(v) => update("region", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Tanlang" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((r) => (
                    <SelectItem key={r.slug} value={r.slug}>
                      {r.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
        </div>

        <div className={cn(step === 1 ? "block" : "hidden", "space-y-5")}>
          <Field
            label="Kasbiy sarlavha"
            required
            hint="Masalan: IELTS mentor · CEFR C2 · 7.5 band"
          >
            <Input
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Sarlavha"
              required
            />
          </Field>
          <div>
            <Label>O'qitadigan fanlar * ({form.subjects.length} tanlandi)</Label>
            <p className="text-xs text-subtle mt-0.5">3 tagacha fanni tanlang</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {subjects.map((s) => {
                const active = form.subjects.includes(s.slug);
                return (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => toggleSubject(s.slug)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                      active
                        ? "border-brand-500 bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200"
                        : "border-[var(--border)] text-muted hover:border-[var(--border-strong)] hover:text-[var(--foreground)]",
                    )}
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>
          </div>
          <Field label="Tajriba" required>
            <Select
              value={form.experience}
              onValueChange={(v) => update("experience", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Tajribangizni tanlang" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((e) => (
                  <SelectItem key={e.value} value={e.value}>
                    {e.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field
            label="O'zingiz haqingizda"
            hint="100–500 belgi. Natijalar, uslub va shogirdlar haqida qisqacha."
          >
            <Textarea
              value={form.bio}
              onChange={(e) => update("bio", e.target.value)}
              rows={5}
              placeholder="IELTS va Cambridge imtihonlari bo'yicha 8 yillik tajribaga egaman..."
            />
          </Field>
        </div>

        <div className={cn(step === 2 ? "block" : "hidden", "space-y-5")}>
          <Field label="Ta'lim formati" required>
            <Select value={form.format} onValueChange={(v) => update("format", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Tanlang" />
              </SelectTrigger>
              <SelectContent>
                {teachingFormats.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field
            label="Soatbay narx (so'm)"
            hint="Bo'sh qoldirsangiz, markazlar bilan kelishib olishingiz mumkin"
          >
            <Input
              type="number"
              inputMode="numeric"
              value={form.hourlyRate}
              onChange={(e) => update("hourlyRate", e.target.value)}
              placeholder="150000"
            />
          </Field>
        </div>

        <div className={cn(step === 3 ? "block" : "hidden")}>
          <p className="text-sm text-muted mb-4">
            Quyidagi ma'lumotlarni tekshirib, yuboring. Keyingi bosqichda
            tasdiqlash uchun moderatorga yuboriladi.
          </p>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/40 p-5 space-y-3 text-sm">
            <Row label="Ism" value={form.name || "—"} />
            <Row label="Telefon" value={form.phone || "—"} />
            <Row label="Viloyat" value={regions.find((r) => r.slug === form.region)?.name ?? "—"} />
            <Row label="Sarlavha" value={form.title || "—"} />
            <Row
              label="Fanlar"
              value={
                form.subjects
                  .map((s) => subjects.find((x) => x.slug === s)?.name)
                  .filter(Boolean)
                  .join(", ") || "—"
              }
            />
            <Row
              label="Tajriba"
              value={experienceLevels.find((e) => e.value === form.experience)?.label ?? "—"}
            />
            <Row
              label="Format"
              value={teachingFormats.find((f) => f.value === form.format)?.label ?? "—"}
            />
            <Row label="Narx" value={form.hourlyRate ? `${form.hourlyRate} so'm/soat` : "Kelishiladi"} />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            <ArrowLeft className="size-4" /> Orqaga
          </Button>
          {step < steps.length - 1 ? (
            <Button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext}
            >
              Davom etish
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button type="submit" size="lg">
              Yuborish
              <CheckCircle2 className="size-4" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-subtle text-xs uppercase tracking-wide">
        {label}
      </span>
      <span className="text-right font-medium max-w-[60%]">{value}</span>
    </div>
  );
}
