import { Suspense } from "react";
import type { Metadata } from "next";
import { VacancyFilters } from "@/components/vacancy/vacancy-filters";
import { VacancyCard } from "@/components/vacancy/vacancy-card";
import { EmptyState } from "@/components/empty-state";
import { PageHero } from "@/components/page-hero";
import { vacancies } from "@/data/vacancies";
import { filterVacancies } from "@/lib/filtering";

export const metadata: Metadata = {
  title: "Vakansiyalar",
  description:
    "O'zbekistondagi o'quv markazlaridan yangi vakansiyalar. Maosh, hudud va bandlik turi bo'yicha filtr.",
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function VacanciesPage({ searchParams }: Props) {
  const sp = await searchParams;
  const results = filterVacancies(vacancies, sp);

  return (
    <>
      <PageHero
        eyebrow="Vakansiyalar"
        title="Yangi ish o'rinlari"
        description="Tajribangizga mos markazlar bilan bir oynada. Filtrni sozlang va istalgan yo'nalishda topilma oling."
      >
        <Suspense>
          <VacancyFilters total={results.length} />
        </Suspense>
      </PageHero>

      <section className="container-page pb-20">
        {results.length === 0 ? (
          <EmptyState
            title="Vakansiya topilmadi"
            description="Filtrlarni kengaytirib ko'ring yoki kalit so'zni qisqartiring."
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-[fade-in_0.3s_ease-out]">
            {results.map((v) => (
              <VacancyCard key={v.id} vacancy={v} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
