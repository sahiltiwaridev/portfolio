import type { MetadataRoute } from "next";
import { PAGES, absoluteUrl } from "@/lib/seo";

// Bump a page's date when its content meaningfully changes.
const lastModified = {
  home: "2026-11-15",
  about: "2026-11-15",
  works: "2026-11-15",
  linkly: "2026-11-15",
  contact: "2026-11-15",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { page: PAGES.home, date: lastModified.home, priority: 1 },
    { page: PAGES.about, date: lastModified.about, priority: 0.8 },
    { page: PAGES.works, date: lastModified.works, priority: 0.8 },
    { page: PAGES.linkly, date: lastModified.linkly, priority: 0.7 },
    { page: PAGES.contact, date: lastModified.contact, priority: 0.6 },
  ].map(({ page, date, priority }) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(date),
    priority,
  }));
}
