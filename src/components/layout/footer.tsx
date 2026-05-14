import Link from "next/link";
import { Logo } from "@/components/logo";
import { Mail } from "lucide-react";

const IconTelegram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
    <path d="M9.04 15.32l-.37 5.19c.53 0 .76-.23 1.04-.5l2.49-2.38 5.17 3.78c.95.52 1.62.25 1.87-.88L22.93 3.3c.31-1.4-.5-1.95-1.42-1.6L1.68 9.37c-1.36.53-1.34 1.28-.23 1.62l4.95 1.54L18.3 5.1c.54-.34 1.03-.16.63.2L9.04 15.32z" />
  </svg>
);
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
    <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6A3 3 0 0 0 .5 7.2C0 9.1 0 12 0 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
  </svg>
);

const cols = [
  {
    title: "Platforma",
    links: [
      { href: "/ustozlar", label: "Ustozlar" },
      { href: "/vakansiyalar", label: "Vakansiyalar" },
      { href: "/rezyume-joylash", label: "Rezyume joylash" },
      { href: "/vakansiya-joylash", label: "Vakansiya joylash" },
    ],
  },
  {
    title: "Kompaniya",
    links: [
      { href: "/haqida", label: "Biz haqimizda" },
      { href: "/haqida#mission", label: "Missiya" },
      { href: "/haqida#contact", label: "Aloqa" },
      { href: "/haqida#media", label: "OAVda" },
    ],
  },
  {
    title: "Yordam",
    links: [
      { href: "/haqida#faq", label: "Ko'p so'raladigan savollar" },
      { href: "/haqida#terms", label: "Foydalanish shartlari" },
      { href: "/haqida#privacy", label: "Maxfiylik siyosati" },
      { href: "/haqida#contact", label: "Murojaat yuborish" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-page py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_repeat(3,1fr)] gap-x-6 gap-y-8 md:gap-10">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Logo />
            <p className="text-sm text-muted max-w-sm">
              O'zbekistondagi ustozlar va o'quv markazlarini bog'lovchi raqamli
              platforma. Rezyumelarni joylang, vakansiyalarni toping.
            </p>
            <div className="flex items-center gap-2" aria-label="Ijtimoiy tarmoqlar">
              <SocialLink href="https://t.me/ustozly_uz" label="Telegram">
                <IconTelegram />
              </SocialLink>
              <SocialLink href="https://instagram.com/ustozly.uz" label="Instagram">
                <IconInstagram />
              </SocialLink>
              <SocialLink href="https://youtube.com/@ustozly" label="YouTube">
                <IconYouTube />
              </SocialLink>
              <SocialLink href="mailto:hi@ustozly.uz" label="Email">
                <Mail className="size-4" />
              </SocialLink>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="font-display font-semibold text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted hover:text-[var(--foreground)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs text-subtle">
          <p>© {new Date().getFullYear()} Ustozly.uz — barcha huquqlar himoyalangan.</p>
          <p>O'zbekistonda yaratilgan · Ta'lim sohasi uchun</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex size-9 items-center justify-center rounded-lg border border-[var(--border)] text-muted hover:text-[var(--foreground)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)] transition-colors"
    >
      {children}
    </a>
  );
}
