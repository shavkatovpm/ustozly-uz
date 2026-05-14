import type { Teacher, Vacancy } from "@/lib/types";

type SP = Record<string, string | string[] | undefined>;

function asStr(v: string | string[] | undefined) {
  return typeof v === "string" ? v : Array.isArray(v) ? v[0] : "";
}

export function filterTeachers(all: Teacher[], sp: SP) {
  const q = asStr(sp.q).toLowerCase().trim();
  const subject = asStr(sp.subject);
  const region = asStr(sp.region);
  const format = asStr(sp.format);
  const level = asStr(sp.level);
  const sort = asStr(sp.sort) || "top";

  let list = all.filter((t) => {
    if (subject && !t.subjects.includes(subject)) return false;
    if (region && t.region !== region) return false;
    if (format && t.format !== format) return false;
    if (level && t.experienceLevel !== level) return false;
    if (q) {
      const haystack = [
        t.name,
        t.title,
        t.bio,
        ...t.subjects,
        ...t.languages,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  list = [...list].sort((a, b) => {
    switch (sort) {
      case "rating":
        return b.rating - a.rating || b.reviewsCount - a.reviewsCount;
      case "recent":
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      case "price-asc":
        return (a.hourlyRate ?? 0) - (b.hourlyRate ?? 0);
      case "price-desc":
        return (b.hourlyRate ?? 0) - (a.hourlyRate ?? 0);
      default:
        return (
          b.rating * 10 + b.reviewsCount / 20 -
          (a.rating * 10 + a.reviewsCount / 20)
        );
    }
  });

  return list;
}

export function filterVacancies(all: Vacancy[], sp: SP) {
  const q = asStr(sp.q).toLowerCase().trim();
  const subject = asStr(sp.subject);
  const region = asStr(sp.region);
  const format = asStr(sp.format);
  const employment = asStr(sp.employment);
  const sort = asStr(sp.sort) || "top";

  let list = all.filter((v) => {
    if (subject && v.subject !== subject) return false;
    if (region && v.region !== region) return false;
    if (format && v.format !== format) return false;
    if (employment && v.employmentType !== employment) return false;
    if (q) {
      const haystack = [
        v.title,
        v.center.name,
        v.description,
        v.subject,
        ...v.requirements,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  list = [...list].sort((a, b) => {
    switch (sort) {
      case "recent":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "salary-desc":
        return (b.salaryMax ?? b.salaryMin ?? 0) - (a.salaryMax ?? a.salaryMin ?? 0);
      case "salary-asc":
        return (a.salaryMin ?? a.salaryMax ?? 0) - (b.salaryMin ?? b.salaryMax ?? 0);
      default:
        return (
          (b.urgent ? 1 : 0) - (a.urgent ? 1 : 0) ||
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });

  return list;
}
