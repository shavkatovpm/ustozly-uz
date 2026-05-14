import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero varyantlari",
  description: "Ustozly.uz uchun 5 ta yangi kreativ hero section varyanti.",
};

export default function CheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
