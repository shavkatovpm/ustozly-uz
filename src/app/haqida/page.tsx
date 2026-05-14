import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Target,
  HeartHandshake,
  ShieldCheck,
  Mail,
  MessageCircle,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Loyiha haqida",
  description:
    "Ustozly.uz — O'zbekiston ta'lim sohasi uchun HR platforma. Missiya, qadriyatlar, aloqa va ko'p so'raladigan savollar.",
};

const values = [
  {
    icon: Target,
    title: "Aniq maqsad",
    desc: "Ustozlar va o'quv markazlarini bir oynada bog'lash, vaqtni tejash.",
  },
  {
    icon: HeartHandshake,
    title: "Ishonch",
    desc: "Markazlar tasdiqlanadi, ustozlar moderatsiyadan o'tadi.",
  },
  {
    icon: ShieldCheck,
    title: "Bepul va xavfsiz",
    desc: "Ariza uchun to'lov yo'q, shaxsiy ma'lumotlar himoyada.",
  },
];

const faqs = [
  {
    q: "Ustozly.uz qanday platforma?",
    a: "Ustozly.uz — bu ta'lim sohasi uchun HR platformadir. Ustozlar rezyumelarini joylaydi, o'quv markazlari vakansiyalarini e'lon qiladi. Ikki tomon to'g'ridan-to'g'ri bog'lanadi.",
  },
  {
    q: "Ro'yxatdan o'tish pulli mi?",
    a: "Yo'q, ustozlar uchun va o'quv markazlari uchun asosiy funksiyalar bepul. Ariza yuborish va qabul qilish uchun hech qanday to'lov olinmaydi.",
  },
  {
    q: "Ma'lumotlarim xavfsizmi?",
    a: "Ha. Telefon va email faqat siz ruxsat bergan markazlarga ko'rinadi. Biz ma'lumotlaringizni hech kimga sotmaymiz.",
  },
  {
    q: "O'quv markazi sifatida qanday tasdiqlanish kerak?",
    a: "Ro'yxatdan o'tgandan so'ng markazingizning hujjatlarini (litsenziya yoki ro'yxatdan o'tganlik guvohnomasi) yuklaysiz. Moderator 1 ish kunida tekshiradi.",
  },
  {
    q: "Ustoz sifatida qanday tanlanaman?",
    a: "Profilingiz to'liq, rezyumengiz aniq va reytingingiz yuqori bo'lsa — markazlar sizga tezroq yozadi. Har bir dars va aloqadan keyin fikr-mulohaza yig'iladi.",
  },
  {
    q: "Qaysi viloyatlarda ishlaydi?",
    a: "Platforma O'zbekistonning barcha viloyatlari va Toshkent shahri bo'ylab ishlaydi.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Loyiha haqida"
        title="Ta'lim sohasi uchun zamonaviy HR platforma"
        description="Ustozly.uz — ustozlar va o'quv markazlarini raqamli tarzda bog'lovchi yagona makon. Vaqt, ishonch va sifatni birlashtirdik."
      />

      <section id="mission" className="container-page pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft"
            >
              <span className="inline-flex items-center justify-center size-11 rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pt-20">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 shadow-soft">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 px-2.5 py-1 text-xs font-medium">
            <Sparkles className="size-3" /> Bizning missiya
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-3xl">
            O'zbekistondagi har bir ustoz va har bir o'quv markaziga teng imkoniyat
            yaratish.
          </h2>
          <p className="mt-4 text-muted max-w-2xl text-[15px] sm:text-base">
            Biz tanitiladi, tanlanadi va topiladi — bu jarayonni shaffof qilishni
            xohlaymiz. Ta'lim sifati ustoz va markazdan boshlanadi. Ikkalasiga ham
            vosita beramiz: ustoz o'zini eng yaxshi ko'rinishda ko'rsatadi,
            markaz esa ishonchli va malakali ustozni topadi.
          </p>
        </div>
      </section>

      <section id="faq" className="container-page pt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-brand-700 dark:text-brand-300">
              FAQ
            </span>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Ko'p so'raladigan savollar
            </h2>
          </div>
        </div>
        <div className="mt-8 max-w-3xl space-y-2">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 open:shadow-soft transition-shadow"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 font-display font-semibold list-none">
                {f.q}
                <ChevronRight className="size-4 shrink-0 transition-transform group-open:rotate-90 text-[var(--foreground-muted)]" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="container-page pt-20 pb-10">
        <div className="rounded-3xl gradient-brand p-8 sm:p-12 text-white shadow-float relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 items-center relative">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Biz bilan bog'laning
              </h2>
              <p className="mt-3 text-white/85 max-w-xl">
                Savol, taklif yoki hamkorlik uchun yozing. Ishchi soatlarda
                24 soat ichida javob beramiz.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <ContactItem icon={<Mail className="size-4" />} label="hi@ustozly.uz" />
                <ContactItem
                  icon={<MessageCircle className="size-4" />}
                  label="@ustozly_uz (Telegram)"
                />
                <ContactItem
                  icon={<MapPin className="size-4" />}
                  label="Toshkent, O'zbekiston"
                />
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="accent" size="xl" asChild>
                <a href="mailto:hi@ustozly.uz">Email yuborish</a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                <Link href="/rezyume-joylash">Ustoz bo'lish</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="terms" className="container-page pb-20">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="font-display text-lg font-semibold">Foydalanish shartlari</h3>
            <p className="mt-2 text-sm text-muted">
              Platformadan foydalanish shartnomasi, moderatsiya qoidalari va
              cheklovlar. Ustoz va o'quv markazi kiritgan ma'lumotlar
              haqqoniyligi foydalanuvchi zimmasida.
            </p>
          </div>
          <div id="privacy" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="font-display text-lg font-semibold">Maxfiylik siyosati</h3>
            <p className="mt-2 text-sm text-muted">
              Shaxsiy ma'lumotlaringiz O'zbekiston Respublikasi qonunchiligi
              asosida himoya qilinadi. Cookies va analitik jihatidan batafsil
              ma'lumotni tez orada alohida sahifada keltiramiz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li className="flex items-center gap-2.5">
      <span className="grid place-items-center size-8 rounded-lg bg-white/15">
        {icon}
      </span>
      <span>{label}</span>
    </li>
  );
}
