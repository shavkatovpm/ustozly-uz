import type { MetadataRoute } from "next";
import { teachers } from "@/data/teachers";
import { vacancies } from "@/data/vacancies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ustozly.uz";
  const now = new Date();
  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ustozlar`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/vakansiyalar`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/rezyume-joylash`, lastModified: now, priority: 0.6 },
    { url: `${base}/vakansiya-joylash`, lastModified: now, priority: 0.6 },
    { url: `${base}/haqida`, lastModified: now, priority: 0.5 },
  ];
  const teacherPaths: MetadataRoute.Sitemap = teachers.map((t) => ({
    url: `${base}/ustozlar/${t.id}`,
    lastModified: new Date(t.updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
  const vacancyPaths: MetadataRoute.Sitemap = vacancies.map((v) => ({
    url: `${base}/vakansiyalar/${v.id}`,
    lastModified: new Date(v.createdAt),
    changeFrequency: "daily",
    priority: 0.7,
  }));
  return [...staticPaths, ...teacherPaths, ...vacancyPaths];
}
