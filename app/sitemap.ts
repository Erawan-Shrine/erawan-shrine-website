import type { MetadataRoute } from "next";
import { languages, localizedPath } from "@/lib/i18n";

const BASE_URL = "https://www.erawanshrine.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/worship", "/history", "/visit", "/gallery"];

  return routes.flatMap((route) => languages.map((lang) => ({
    url: `${BASE_URL}${localizedPath(lang, route || "/")}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  })));
}
