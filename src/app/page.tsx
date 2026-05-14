import { Hero } from "@/components/home/hero";
import { Categories } from "@/components/home/categories";
import { FeaturedTeachers } from "@/components/home/featured-teachers";
import { FeaturedVacancies } from "@/components/home/featured-vacancies";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";
import { PageOrbs } from "@/components/home/page-orbs";
import { teachers } from "@/data/teachers";
import { vacancies } from "@/data/vacancies";

export default function HomePage() {
  const topTeachers = [...teachers]
    .sort(
      (a, b) =>
        b.rating * 10 + b.reviewsCount / 20 -
        (a.rating * 10 + a.reviewsCount / 20),
    )
    .slice(0, 6);
  const topVacancies = [...vacancies]
    .sort(
      (a, b) =>
        (b.urgent ? 1 : 0) - (a.urgent ? 1 : 0) ||
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 6);

  return (
    <div className="relative">
      <PageOrbs />
      <Hero />
      <Categories />
      <FeaturedTeachers teachers={topTeachers} />
      <HowItWorks />
      <FeaturedVacancies vacancies={topVacancies} />
      <Testimonials />
      <CTA />
    </div>
  );
}
