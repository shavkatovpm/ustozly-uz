import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="container-page pt-16 sm:pt-24">
      <div className="relative overflow-hidden rounded-3xl gradient-brand p-6 sm:p-12 lg:p-16 text-white shadow-float">
        <div
          className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center gap-8">
          <div>
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Bugundan boshlang.
              <br />
              Ta'limingizni o'sishga yo'naltiring.
            </h3>
            <p className="mt-4 text-white/85 text-[15px] sm:text-base max-w-xl">
              Bepul ro'yxatdan o'ting. Siz ustoz bo'lsangiz — rezyumengizni
              joylang. O'quv markazi bo'lsangiz — vakansiya yuboring. Oddiy,
              tez va ishonchli.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
            <Button size="xl" variant="accent" asChild>
              <Link href="/rezyume-joylash">
                Ustoz sifatida boshlash
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              asChild
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
            >
              <Link href="/vakansiya-joylash">
                O'quv markazi sifatida
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
