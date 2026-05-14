import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ustozly.uz"),
  title: {
    default: "Ustozly.uz — Ustozlar va o'quv markazlari platformasi",
    template: "%s · Ustozly.uz",
  },
  description:
    "O'zbekiston bo'ylab ustozlar rezyumelarini joylaydi, o'quv markazlari vakansiyalarini e'lon qiladi. Ta'lim sohasidagi HR platforma.",
  keywords: [
    "ustoz",
    "o'qituvchi",
    "o'quv markazi",
    "vakansiya",
    "ish",
    "ta'lim",
    "HR",
    "O'zbekiston",
  ],
  openGraph: {
    title: "Ustozly.uz — Ustozlar va o'quv markazlari platformasi",
    description:
      "Rezyumelarni joylang va o'zingizga mos vakansiyalarni toping. Ta'lim sohasi uchun HR platforma.",
    url: "https://ustozly.uz",
    siteName: "Ustozly.uz",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ustozly.uz",
    description:
      "Ustozlar va o'quv markazlarini bog'lovchi raqamli HR platforma.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fcfbf8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="uz"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[var(--surface)] focus:border focus:border-[var(--border-strong)] focus:px-3 focus:py-2 focus:text-sm focus:shadow-float"
        >
          Asosiy mazmunga o'tish
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
