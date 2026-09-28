import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.siteUrl) return [];
  return [{ url: site.siteUrl, changeFrequency: "monthly", priority: 1 }];
}
