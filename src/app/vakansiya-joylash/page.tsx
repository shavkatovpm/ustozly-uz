"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Field } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormStepper } from "@/components/form-stepper";
import {
  subjects,
  teachingFormats,
  employmentTypes,
  experienceLevels,
} from "@/data/subjects";
import { regions } from "@/data/regions";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Markaz", hint: "Nom va aloqa" },
  { label: "Vakansiya", hint: "Lavozim va talablar" },
  { label: "Shartlar", hint: "Maosh va bonuslar" },
  { label: "Tekshirish" },
];

export default function VacancyFormPage() {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    centerName: "",
    contactName: "",
    phone: "",
    email: "",
    region: "",
    title: "",
    subject: "",
    employment: "",
    format: "",
    level: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    requirements: "",
    benefits: "",
  });

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canNext = React.useMemo(() => {
    if (step === 0) return form.centerName && form.contactName && form.phone && form.region;
    if (step === 1) return form.title && form.subject && form.employment && form.format;
    if (step === 2) return true;
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
          <h1 className="mt-6 font-display text-2xl sm:text-4xl font-bold tracking-tight">
            Vakansiyangiz ko'rib chiqishga yuborildi
          </h1>
          <p className="mt-3 text-muted">
            1–2 soat ichida tasdiqlanadi. Moderatsiyadan o'tgach, platformada
            ko'rinadi va ustozlar ariza yuborishi mumkin.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-2">
            <Button asChild>
              <Link href="/vakansiyalar">Vakansiyalarni ko'rish</Link>
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
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-100 text-accent-800 dark:bg-accent-900/40 dark:text-accent-200 px-2.5 py-1 text-xs font-medium">
          <Building2 className="size-3" />
          O'quv markazi
        </span>
      </div>
      <h1 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
        Vakansiya joylashtirish
      </h1>
      <p className="mt-2 text-muted">
        Ish o'rni haqida to'liq ma'lumot bering — sifatli ustozlar topishi
        ehtimoli oshadi.
      </p>

      <div className="mt-8">
        <FormStepper steps={steps} current={step} />
      </div>

      <form
        onSubmit={submit}
        className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-8 shadow-soft"
      >
        <div className={cn(step === 0 ? "block" : "hidden", "space-y-5")}>
          <Field label="O'quv markazi nomi" required>
            <Input
              value={form.centerName}
              onChange={(e) => update("centerName", e.target.value)}
              placeholder="Cambridge Academy Tashkent"
              required
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Mas'ul shaxs" required>
              <Input
                value={form.contactName}
                onChange={(e) => update("contactName", e.target.value)}
                placeholder="Aziz To'xtayev"
                required
              />
            </Field>
            <Field label="Telefon raqam" required>
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
                placeholder="hr@markaz.uz"
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
          <Field label="Vakansiya nomi" required>
            <Input
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Ingliz tili o'qituvchisi (IELTS)"
              required
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Fan" required>
              <Select value={form.subject} onValueChange={(v) => update("subject", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Tanlang" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((s) => (
                    <SelectItem key={s.slug} value={s.slug}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Tajriba darajasi">
              <Select value={form.level} onValueChange={(v) => update("level", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Tanlang" />
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Bandlik turi" required>
              <Select
                value={form.employment}
                onValueChange={(v) => update("employment", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Tanlang" />
                </SelectTrigger>
                <SelectContent>
                  {employmentTypes.map((e) => (
                    <SelectItem key={e.value} value={e.value}>
                      {e.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Format" required>
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
          </div>
          <Field
            label="Vakansiya tavsifi"
            hint="Dars yuki, shablon, jamoa va boshqa muhim tafsilotlar"
          >
            <Textarea
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              rows={5}
              placeholder="IELTS yo'nalishi bo'yicha kattalar guruhiga dars beradigan o'qituvchi kerak..."
            />
          </Field>
          <Field
            label="Talablar"
            hint="Har bir talabni yangi qatorda yozing"
          >
            <Textarea
              value={form.requirements}
              onChange={(e) => update("requirements", e.target.value)}
              rows={4}
              placeholder="IELTS 7.0+ band&#10;3+ yil tajriba&#10;CELTA sertifikati afzallik"
            />
          </Field>
        </div>

        <div className={cn(step === 2 ? "block" : "hidden", "space-y-5")}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Oylik maosh, minimum (so'm)">
              <Input
                type="number"
                inputMode="numeric"
                value={form.salaryMin}
                onChange={(e) => update("salaryMin", e.target.value)}
                placeholder="8000000"
              />
            </Field>
            <Field label="Oylik maosh, maksimum (so'm)">
              <Input
                type="number"
                inputMode="numeric"
                value={form.salaryMax}
                onChange={(e) => update("salaryMax", e.target.value)}
                placeholder="15000000"
              />
            </Field>
          </div>
          <Field
            label="Bonus va imtiyozlar"
            hint="Har birini yangi qatorga yozing"
          >
            <Textarea
              value={form.benefits}
              onChange={(e) => update("benefits", e.target.value)}
              rows={4}
              placeholder="Soatiga 150–200 ming so'm&#10;Sug'urta va rasmiy ish&#10;Xalqaro sertifikat imtihonlari"
            />
          </Field>
        </div>

        <div className={cn(step === 3 ? "block" : "hidden")}>
          <p className="text-sm text-muted mb-4">
            Ma'lumotlaringizni tekshirib, ko'rib chiqishga yuboring.
          </p>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/40 p-5 space-y-3 text-sm">
            <Row label="Markaz" value={form.centerName || "—"} />
            <Row label="Vakansiya" value={form.title || "—"} />
            <Row
              label="Fan"
              value={subjects.find((s) => s.slug === form.subject)?.name ?? "—"}
            />
            <Row
              label="Viloyat"
              value={regions.find((r) => r.slug === form.region)?.name ?? "—"}
            />
            <Row
              label="Bandlik"
              value={employmentTypes.find((e) => e.value === form.employment)?.label ?? "—"}
            />
            <Row
              label="Format"
              value={teachingFormats.find((f) => f.value === form.format)?.label ?? "—"}
            />
            <Row
              label="Maosh"
              value={
                form.salaryMin || form.salaryMax
                  ? `${form.salaryMin || "—"} – ${form.salaryMax || "—"} so'm`
                  : "Kelishiladi"
              }
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-2 sm:gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="shrink-0"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">Orqaga</span>
          </Button>
          {step < steps.length - 1 ? (
            <Button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext}
              variant="accent"
            >
              Davom etish
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button type="submit" size="lg" variant="accent">
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
