import { Suspense } from "react";
import type { Metadata } from "next";
import { TeacherFilters } from "@/components/teacher/teacher-filters";
import { TeacherCard } from "@/components/teacher/teacher-card";
import { EmptyState } from "@/components/empty-state";
import { PageHero } from "@/components/page-hero";
import { teachers } from "@/data/teachers";
import { filterTeachers } from "@/lib/filtering";

export const metadata: Metadata = {
  title: "Ustozlar",
  description:
    "O'zbekistondagi tajribali ustozlar ro'yxati. Fan, viloyat va tajriba bo'yicha filtrlash.",
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function TeachersPage({ searchParams }: Props) {
  const sp = await searchParams;
  const results = filterTeachers(teachers, sp);

  return (
    <>
      <PageHero
        eyebrow="Ustozlar katalogi"
        title="O'zingizga mos ustozni toping"
        description="1 200+ ustoz. Yo'nalish, hudud va narxi bo'yicha saralang. Har bir profilda reyting va sharhlar."
      >
        <Suspense>
          <TeacherFilters total={results.length} />
        </Suspense>
      </PageHero>

      <section className="container-page pb-20">
        {results.length === 0 ? (
          <EmptyState
            title="Hech narsa topilmadi"
            description="Filtrlarni yumshating yoki boshqa kalit so'z bilan sinab ko'ring."
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-[fade-in_0.3s_ease-out]">
            {results.map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
